"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  AGIRLIK,
  PUAN_TURLERI,
  TESTS,
  hesapla,
  katsayi,
  net,
  type Cevaplar,
  type Oturum,
  type PuanTuru,
  type TestKey,
} from "@/lib/yksPuan";
import { KAYNAK_URL, PUAN_PAYI, VERI_YILI, siralamaTahmini, yuvarlaSira } from "@/lib/yksSiralama";

// ─────────────────────────────────────────────────────────────────────────────
// YKS puan hesaplama island. Everything runs on the device: the answers are
// kept in localStorage (key below) so a student can come back after the next
// deneme, and nothing is sent anywhere.
// ─────────────────────────────────────────────────────────────────────────────

const STORAGE_KEY = "cb-puan:v1";

interface Kayit {
  cevaplar: Record<string, { d: string; y: string }>;
  diploma: string;
  oncekiYil: boolean;
}

const BOS: Kayit = { cevaplar: {}, diploma: "", oncekiYil: false };

// Math tests link to the matching lessons — the reason this tool lives here.
const DERS_LINKI: Partial<Record<TestKey, { href: string; label: string }>> = {
  "tyt-matematik": { href: "/tyt", label: "TYT Matematik konuları" },
  "ayt-matematik": { href: "/ayt", label: "AYT Matematik konuları" },
};

const OTURUMLAR: { key: Oturum; baslik: string; not: string }[] = [
  { key: "TYT", baslik: "TYT", not: "Temel Yeterlilik Testi · 120 soru" },
  { key: "AYT", baslik: "AYT", not: "Alan Yeterlilik Testleri · yalnızca girdiğin testleri doldur" },
  { key: "YDT", baslik: "YDT", not: "Yabancı Dil Testi · yalnızca DİL puanı için" },
];

const fmt = (n: number) =>
  n.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtNet = (n: number) =>
  n.toLocaleString("tr-TR", { minimumFractionDigits: 0, maximumFractionDigits: 2 });
const fmtSira = (n: number) => yuvarlaSira(n).toLocaleString("tr-TR");

function toNum(s: string | undefined): number {
  const n = parseInt(s ?? "", 10);
  return Number.isFinite(n) ? n : 0;
}

export default function PuanHesaplama() {
  const [kayit, setKayit] = useState<Kayit>(BOS);
  const [yuklendi, setYuklendi] = useState(false);
  const [secili, setSecili] = useState<PuanTuru | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setKayit({ ...BOS, ...JSON.parse(raw) });
    } catch {
      /* blocked or corrupt storage → start empty */
    }
    setYuklendi(true);
  }, []);

  useEffect(() => {
    if (!yuklendi) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(kayit));
    } catch {}
  }, [kayit, yuklendi]);

  const cevaplar: Cevaplar = useMemo(() => {
    const out: Cevaplar = {};
    for (const t of TESTS) {
      const c = kayit.cevaplar[t.key];
      if (c) out[t.key] = { dogru: toNum(c.d), yanlis: toNum(c.y) };
    }
    return out;
  }, [kayit.cevaplar]);

  const diploma = kayit.diploma.trim() === "" ? null : Number(kayit.diploma.replace(",", "."));
  const diplomaGecerli = diploma == null || (Number.isFinite(diploma) && diploma >= 50 && diploma <= 100);

  const sonuclar = useMemo(
    () => hesapla(cevaplar, diplomaGecerli ? diploma : null, kayit.oncekiYil),
    [cevaplar, diploma, diplomaGecerli, kayit.oncekiYil],
  );

  // Default focus: the highest score among the computed lisans types, else TYT.
  const enIyi = useMemo(() => {
    const lisans = sonuclar.filter((s) => s.tur !== "TYT" && s.ham != null);
    if (lisans.length) return lisans.reduce((a, b) => ((a.ham ?? 0) >= (b.ham ?? 0) ? a : b)).tur;
    return "TYT" as PuanTuru;
  }, [sonuclar]);
  const odak = secili ?? enIyi;
  const odakSonuc = sonuclar.find((s) => s.tur === odak);

  // Rank from ÖSYM's published distribution: placement scores when OBP is
  // given, otherwise exam (ham) scores — both rank the same candidates.
  const obpli = diploma != null && diplomaGecerli;
  const siralar = useMemo(() => {
    const out: Partial<Record<PuanTuru, ReturnType<typeof siralamaTahmini>>> = {};
    for (const s of sonuclar) {
      if (s.ham == null) continue;
      out[s.tur] = siralamaTahmini(s.tur, obpli ? s.yerlestirme! : s.ham, obpli);
    }
    return out;
  }, [sonuclar, obpli]);
  const odakSira = siralar[odak];

  // Where the next nets are worth the most: unanswered/lost questions × points per net.
  const firsatlar = useMemo(() => {
    return (Object.keys(AGIRLIK[odak]) as TestKey[])
      .map((k) => {
        const t = TESTS.find((x) => x.key === k)!;
        const n = net(k, cevaplar[k]);
        const kalan = Math.max(0, t.soru - n);
        return { test: t, n, puanPerNet: katsayi(odak, k), potansiyel: katsayi(odak, k) * kalan };
      })
      .filter((f) => f.potansiyel > 0.05)
      .sort((a, b) => b.potansiyel - a.potansiyel)
      .slice(0, 4);
  }, [odak, cevaplar]);

  function guncelle(key: TestKey, alan: "d" | "y", deger: string) {
    const temiz = deger.replace(/[^0-9]/g, "").slice(0, 2);
    setKayit((k) => {
      const onceki = k.cevaplar[key] ?? { d: "", y: "" };
      return { ...k, cevaplar: { ...k.cevaplar, [key]: { ...onceki, [alan]: temiz } } };
    });
  }

  function sifirla() {
    setKayit(BOS);
    setSecili(null);
  }

  const doluMu = Object.values(kayit.cevaplar).some((c) => c.d || c.y);

  return (
    <div className="ph">
      <div className="ph-form">
        {OTURUMLAR.map((o) => {
          const testler = TESTS.filter((t) => t.oturum === o.key);
          let sonGrup: string | undefined;
          return (
            <fieldset key={o.key} className="ph-oturum">
              <legend>
                <span className="ph-oturum-ad">{o.baslik}</span>
                <span className="ph-oturum-not">{o.not}</span>
              </legend>
              <div className="ph-satir ph-satir-bas" aria-hidden="true">
                <span>Test</span>
                <span>Doğru</span>
                <span>Yanlış</span>
                <span>Net</span>
              </div>
              {testler.map((t) => {
                const c = kayit.cevaplar[t.key] ?? { d: "", y: "" };
                const d = toNum(c.d);
                const y = toNum(c.y);
                const asim = d + y > t.soru;
                const n = net(t.key, cevaplar[t.key]);
                const grupBasligi = t.grup && t.grup !== sonGrup ? t.grup : null;
                sonGrup = t.grup;
                return (
                  <div key={t.key}>
                    {grupBasligi && <p className="ph-grup">{grupBasligi}</p>}
                    <div className={`ph-satir${asim ? " ph-hata" : ""}`}>
                      <label className="ph-test" htmlFor={`${t.key}-d`}>
                        {t.label}
                        <small>{t.soru} soru</small>
                      </label>
                      <input
                        id={`${t.key}-d`}
                        inputMode="numeric"
                        autoComplete="off"
                        aria-label={`${o.baslik} ${t.label} doğru sayısı`}
                        placeholder="0"
                        value={c.d}
                        onChange={(e) => guncelle(t.key, "d", e.target.value)}
                      />
                      <input
                        inputMode="numeric"
                        autoComplete="off"
                        aria-label={`${o.baslik} ${t.label} yanlış sayısı`}
                        placeholder="0"
                        value={c.y}
                        onChange={(e) => guncelle(t.key, "y", e.target.value)}
                      />
                      <output className="ph-net">{fmtNet(n)}</output>
                    </div>
                    {asim && (
                      <p className="ph-uyari">
                        Doğru + yanlış {t.soru} soruyu geçemez; fazlası hesaba katılmadı.
                      </p>
                    )}
                  </div>
                );
              })}
            </fieldset>
          );
        })}

        <fieldset className="ph-oturum">
          <legend>
            <span className="ph-oturum-ad">OBP</span>
            <span className="ph-oturum-not">Ortaöğretim Başarı Puanı · isteğe bağlı</span>
          </legend>
          <div className="ph-obp">
            <label htmlFor="ph-diploma">
              Diploma notu <small>(50–100)</small>
            </label>
            <input
              id="ph-diploma"
              inputMode="decimal"
              autoComplete="off"
              placeholder="örn. 85"
              value={kayit.diploma}
              onChange={(e) =>
                setKayit((k) => ({ ...k, diploma: e.target.value.replace(/[^0-9.,]/g, "").slice(0, 6) }))
              }
            />
          </div>
          {!diplomaGecerli && <p className="ph-uyari">Diploma notu 50 ile 100 arasında olmalı.</p>}
          <label className="ph-check">
            <input
              type="checkbox"
              checked={kayit.oncekiYil}
              onChange={(e) => setKayit((k) => ({ ...k, oncekiYil: e.target.checked }))}
            />
            Geçen yıl bir lisans/ön lisans programına yerleştim (OBP katsayısı 0,06 olur)
          </label>
        </fieldset>

        {doluMu && (
          <button type="button" className="ph-sifirla" onClick={sifirla}>
            Tümünü temizle
          </button>
        )}
      </div>

      <aside className="ph-sonuc" id="ph-sonuc" aria-live="polite">
        <h2>Tahmini puanların</h2>
        <div className="ph-kartlar">
          {sonuclar.map((s) => {
            const meta = PUAN_TURLERI.find((p) => p.key === s.tur)!;
            return (
              <button
                type="button"
                key={s.tur}
                className={`ph-kart${s.tur === odak ? " aktif" : ""}${s.ham == null ? " bos" : ""}`}
                onClick={() => setSecili(s.tur)}
                aria-pressed={s.tur === odak}
              >
                <span className="ph-kart-ust">
                  <strong>{meta.label}</strong>
                  <small>{meta.aciklama}</small>
                </span>
                {s.ham == null ? (
                  <span className="ph-kart-yok">—</span>
                ) : (
                  <span className="ph-kart-puan">
                    <span className="ph-yer">{fmt(s.yerlestirme!)}</span>
                    {siralar[s.tur] && (
                      <span className="ph-sira">≈ {fmtSira(siralar[s.tur]!.sira)}. sıra</span>
                    )}
                  </span>
                )}
              </button>
            );
          })}
        </div>
        {odakSonuc?.ham != null && odakSira && (
          <div className="ph-siralama">
            <p className="ph-siralama-bas">
              Tahmini {PUAN_TURLERI.find((p) => p.key === odak)!.label} sıralaman
            </p>
            <p className="ph-siralama-deger">{fmtSira(odakSira.sira)}</p>
            <p className="ph-siralama-aralik">
              Muhtemel aralık: {fmtSira(odakSira.enIyi)} – {fmtSira(odakSira.enKotu)}
              <br />
              {VERI_YILI} YKS&apos;de bu puan türünde {odakSira.toplam.toLocaleString("tr-TR")} aday vardı.
            </p>
            {obpli && (
              <p className="ph-siralama-ham">
                Ham puan: {fmt(odakSonuc.ham)} · OBP katkısı: {fmt(odakSonuc.yerlestirme! - odakSonuc.ham)}
              </p>
            )}
            {!obpli && (
              <p className="ph-siralama-ipucu">
                Diploma notunu da girersen sıralama, ÖSYM&apos;nin yerleştirme puanı dağılımına göre hesaplanır.
              </p>
            )}
          </div>
        )}
        {odakSonuc?.ham == null && odakSonuc?.neden && doluMu && (
          <p className="ph-neden">{odakSonuc.neden}</p>
        )}
        {!doluMu && <p className="ph-neden">Doğru ve yanlış sayılarını girdikçe puanların burada güncellenir.</p>}

        {doluMu && firsatlar.length > 0 && (
          <div className="ph-firsat">
            <h3>{PUAN_TURLERI.find((p) => p.key === odak)!.label} puanını en çok ne artırır?</h3>
            <ul>
              {firsatlar.map((f) => {
                const link = DERS_LINKI[f.test.key];
                return (
                  <li key={f.test.key}>
                    <span className="ph-firsat-ad">
                      {f.test.oturum} {f.test.label}
                    </span>
                    <span className="ph-firsat-deger">
                      1 net ≈ <b>{fmt(f.puanPerNet)}</b> puan · kalan potansiyel ≈ {fmt(f.potansiyel)}
                    </span>
                    {link && (
                      <Link className="ph-firsat-link" href={link.href}>
                        {link.label} →
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <p className="ph-not">
          Tahmindir: ÖSYM puanı, o yılki tüm adayların ortalamasına göre hesaplar; gerçek puanın birkaç
          puan farklı çıkabilir. Sıralama, ÖSYM&apos;nin{" "}
          <a href={KAYNAK_URL} target="_blank" rel="noopener noreferrer">
            {VERI_YILI} YKS sayısal bilgilerindeki
          </a>{" "}
          puan dağılımından, ±{PUAN_PAYI} puan payıyla hesaplanır; aday sayısı ve zorluk her yıl değişir.
        </p>
      </aside>

      {/* Phones: the results sit below a long form, so keep the focused score in view. */}
      {doluMu && odakSonuc?.yerlestirme != null && (
        <a className="ph-mini" href="#ph-sonuc">
          <span>{PUAN_TURLERI.find((p) => p.key === odak)!.label}</span>
          <strong>{fmt(odakSonuc.yerlestirme)}</strong>
          {odakSira && <span className="ph-mini-sira">≈ {fmtSira(odakSira.sira)}. sıra</span>}
          <span className="ph-mini-ok">Detay ↓</span>
        </a>
      )}
    </div>
  );
}
