"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { hesapla, PUAN_TURLERI, type Cevaplar, type PuanTuru, type TestKey } from "@/lib/yksPuan";
import { siralamaTahmini } from "@/lib/yksSiralama";
import {
  SINIF_ETIKET,
  TERCIH_VERI_YILI,
  UCRET_ETIKET,
  UNI_TURU_ETIKET,
  aramaAnahtari,
  aramaMetni,
  programlariYukle,
  siniflandir,
  uygunluk,
  type Uygunluk,
  type Program,
  type Sinif,
  type Ucret,
  type UniTuru,
} from "@/lib/tercih";

// ─────────────────────────────────────────────────────────────────────────────
// Tercih robotu island. Program data is fetched per score type from
// /public/tercih (static JSON, built from ÖSYM tables). Rank can come from the
// URL (?tur=SAY&sira=45000), from the puan calculator's saved answers, or be
// typed in. Nothing leaves the device.
// ─────────────────────────────────────────────────────────────────────────────

const TURLER: PuanTuru[] = ["SAY", "EA", "SÖZ", "DİL", "TYT"];
const SAYFA = 40;
const SINIFLAR: Sinif[] = ["guvenli", "hedef", "hayal", "zor"];
const UNI_GRUP: { key: string; label: string; turler: UniTuru[] }[] = [
  { key: "devlet", label: "Devlet", turler: ["D"] },
  { key: "vakif", label: "Vakıf", turler: ["V"] },
  { key: "kktc", label: "KKTC", turler: ["K"] },
  { key: "yurtdisi", label: "Yurt dışı", turler: ["YK", "YV"] },
];
const UCRETLER: Ucret[] = ["devlet", "burslu", "indirimli", "ucretli"];

const fmtSayi = (n: number) => n.toLocaleString("tr-TR");
const fmtPuan = (n: number) => n.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function turEtiket(t: PuanTuru) {
  return t === "TYT" ? "TYT (Ön lisans)" : PUAN_TURLERI.find((p) => p.key === t)!.label;
}

/** Reads the puan calculator's saved answers and returns rank per score type. */
function hesaplayicidanSiralar(): Partial<Record<PuanTuru, number>> | null {
  try {
    const raw = localStorage.getItem("cb-puan:v1");
    if (!raw) return null;
    const k = JSON.parse(raw) as {
      cevaplar: Record<string, { d: string; y: string }>;
      diploma: string;
      oncekiYil: boolean;
    };
    const cevaplar: Cevaplar = {};
    for (const [key, c] of Object.entries(k.cevaplar ?? {})) {
      cevaplar[key as TestKey] = { dogru: parseInt(c.d, 10) || 0, yanlis: parseInt(c.y, 10) || 0 };
    }
    const dip = k.diploma ? Number(String(k.diploma).replace(",", ".")) : null;
    const dipGecerli = dip != null && dip >= 50 && dip <= 100 ? dip : null;
    const out: Partial<Record<PuanTuru, number>> = {};
    for (const s of hesapla(cevaplar, dipGecerli, !!k.oncekiYil)) {
      if (s.ham == null) continue;
      const obpli = dipGecerli != null;
      out[s.tur] = siralamaTahmini(s.tur, obpli ? s.yerlestirme! : s.ham, obpli).sira;
    }
    return Object.keys(out).length ? out : null;
  } catch {
    return null;
  }
}

export default function TercihRobotu() {
  const [tur, setTur] = useState<PuanTuru>("SAY");
  const [siraGirdi, setSiraGirdi] = useState("");
  const [programlar, setProgramlar] = useState<Program[] | null>(null);
  const [hata, setHata] = useState<string | null>(null);
  const [arama, setArama] = useState("");
  const [sehir, setSehir] = useState("");
  const [uniGrup, setUniGrup] = useState<Set<string>>(new Set());
  const [ucret, setUcret] = useState<Set<Ucret>>(new Set());
  const [sinif, setSinif] = useState<Sinif>("hedef");
  const [goster, setGoster] = useState(SAYFA);
  const [uygunsuzlariGoster, setUygunsuzlariGoster] = useState(false);
  const [hesapSiralari, setHesapSiralari] = useState<Partial<Record<PuanTuru, number>> | null>(null);

  // URL params first (links from the calculator), then the saved calculator state.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const qTur = q.get("tur") as PuanTuru | null;
    const qSira = q.get("sira");
    if (qTur && TURLER.includes(qTur)) setTur(qTur);
    if (qSira && /^\d+$/.test(qSira)) setSiraGirdi(qSira);
    setHesapSiralari(hesaplayicidanSiralar());
  }, []);

  useEffect(() => {
    let iptal = false;
    setProgramlar(null);
    setHata(null);
    programlariYukle(tur)
      .then((p) => !iptal && setProgramlar(p))
      .catch(() => !iptal && setHata("Program listesi yüklenemedi. Bağlantını kontrol edip sayfayı yenile."));
    return () => {
      iptal = true;
    };
  }, [tur]);

  useEffect(() => setGoster(SAYFA), [tur, siraGirdi, arama, sehir, uniGrup, ucret, sinif, uygunsuzlariGoster]);

  const sira = useMemo(() => {
    const n = parseInt(siraGirdi.replace(/\D/g, ""), 10);
    return Number.isFinite(n) && n > 0 ? n : null;
  }, [siraGirdi]);

  const sehirler = useMemo(() => {
    if (!programlar) return [];
    return [...new Set(programlar.map((p) => p.uni.sehir))].sort((a, b) => a.localeCompare(b, "tr"));
  }, [programlar]);

  const filtreli = useMemo(() => {
    if (!programlar) return [];
    const q = aramaAnahtari(arama.trim());
    const izinliUni = new Set(UNI_GRUP.filter((g) => uniGrup.has(g.key)).flatMap((g) => g.turler));
    return programlar.filter((p) => {
      if (sehir && p.uni.sehir !== sehir) return false;
      if (izinliUni.size && !izinliUni.has(p.uni.tur)) return false;
      if (ucret.size && !ucret.has(p.ucret)) return false;
      if (q && !aramaMetni(p).includes(q)) return false;
      return true;
    });
  }, [programlar, arama, sehir, uniGrup, ucret]);

  // Kılavuzdaki başarı sırası / puan şartı: sağlanmıyorsa öğrenci o programı tercih edemez.
  const uygunluklar = useMemo(() => {
    const out = new Map<string, Uygunluk>();
    if (sira == null || !programlar) return out;
    for (const p of programlar) {
      if (p.siraSarti != null || p.puanSarti != null) out.set(p.kod, uygunluk(p, sira, tur));
    }
    return out;
  }, [programlar, sira, tur]);
  const uygunsuzSayisi = useMemo(
    () => filtreli.filter((p) => uygunluklar.get(p.kod)?.uygun === false).length,
    [filtreli, uygunluklar],
  );

  const siniflar = useMemo(() => {
    const out: Record<Sinif, Program[]> = { guvenli: [], hedef: [], hayal: [], zor: [] };
    if (sira == null) return out;
    for (const p of filtreli) {
      if (!uygunsuzlariGoster && uygunluklar.get(p.kod)?.uygun === false) continue;
      out[siniflandir(p, sira)].push(p);
    }
    // Hardest (most competitive) first inside each band.
    for (const k of SINIFLAR) out[k].sort((a, b) => (a.esasSira ?? Infinity) - (b.esasSira ?? Infinity));
    return out;
  }, [filtreli, sira, uygunluklar, uygunsuzlariGoster]);

  const liste = useMemo(() => {
    if (sira != null) return siniflar[sinif];
    return [...filtreli].sort((a, b) => (a.esasSira ?? Infinity) - (b.esasSira ?? Infinity));
  }, [sira, siniflar, sinif, filtreli]);

  function toggle<T>(set: Set<T>, v: T, setter: (s: Set<T>) => void) {
    const n = new Set(set);
    if (n.has(v)) n.delete(v);
    else n.add(v);
    setter(n);
  }

  const hesapSira = hesapSiralari?.[tur];

  return (
    <div className="tr">
      <section className="tr-giris" aria-label="Sıralama bilgisi">
        <div className="tr-turler" role="tablist" aria-label="Puan türü">
          {TURLER.map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={t === tur}
              className={t === tur ? "aktif" : ""}
              onClick={() => setTur(t)}
            >
              {turEtiket(t)}
            </button>
          ))}
        </div>
        <div className="tr-sira">
          <label htmlFor="tr-sira">
            {turEtiket(tur)} başarı sıran
            <small>Sınav sonucundaki sıralaman ya da puan hesaplayıcıdaki tahmin</small>
          </label>
          <input
            id="tr-sira"
            inputMode="numeric"
            autoComplete="off"
            placeholder="örn. 45000"
            value={siraGirdi}
            onChange={(e) => setSiraGirdi(e.target.value.replace(/[^\d.]/g, "").slice(0, 9))}
          />
        </div>
        {hesapSira != null && String(hesapSira) !== siraGirdi.replace(/\D/g, "") && (
          <button type="button" className="tr-hesap" onClick={() => setSiraGirdi(String(hesapSira))}>
            Puan hesaplayıcıdaki sonucumu kullan (≈ {fmtSayi(hesapSira)}. sıra)
          </button>
        )}
        {hesapSiralari == null && (
          <p className="tr-ipucu">
            Sıralamanı bilmiyor musun? <Link href="/yks-puan-hesaplama">Netlerinden hesapla →</Link>
          </p>
        )}
      </section>

      <section className="tr-filtre" aria-label="Filtreler">
        <input
          className="tr-ara"
          type="search"
          placeholder="Bölüm ya da üniversite ara (örn. bilgisayar, hukuk, ODTÜ)"
          value={arama}
          onChange={(e) => setArama(e.target.value)}
          aria-label="Bölüm ya da üniversite ara"
        />
        <div className="tr-filtre-satir">
          <select value={sehir} onChange={(e) => setSehir(e.target.value)} aria-label="Şehir">
            <option value="">Tüm şehirler</option>
            {sehirler.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <div className="tr-cipler" aria-label="Üniversite türü">
            {UNI_GRUP.map((g) => (
              <button
                key={g.key}
                type="button"
                aria-pressed={uniGrup.has(g.key)}
                className={uniGrup.has(g.key) ? "aktif" : ""}
                onClick={() => toggle(uniGrup, g.key, setUniGrup)}
              >
                {g.label}
              </button>
            ))}
          </div>
          <div className="tr-cipler" aria-label="Ücret durumu">
            {UCRETLER.map((u) => (
              <button
                key={u}
                type="button"
                aria-pressed={ucret.has(u)}
                className={ucret.has(u) ? "aktif" : ""}
                onClick={() => toggle(ucret, u, setUcret)}
              >
                {UCRET_ETIKET[u]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {hata && <p className="tr-hata">{hata}</p>}
      {!programlar && !hata && <p className="tr-yukleniyor">Programlar yükleniyor…</p>}

      {programlar && (
        <>
          {sira != null ? (
            <div className="tr-siniflar" role="tablist" aria-label="Yerleşme ihtimali">
              {SINIFLAR.map((s) => (
                <button
                  key={s}
                  type="button"
                  role="tab"
                  aria-selected={s === sinif}
                  className={`tr-sinif tr-sinif-${s}${s === sinif ? " aktif" : ""}`}
                  onClick={() => setSinif(s)}
                >
                  <strong>{SINIF_ETIKET[s].ad}</strong>
                  <span>{fmtSayi(siniflar[s].length)} program</span>
                </button>
              ))}
            </div>
          ) : (
            <p className="tr-ipucu tr-ipucu-kutu">
              Sıralamanı girince programlar <b>Güvenli</b>, <b>Hedef</b> ve <b>Hayal</b> olarak ayrılır. Şimdilik
              tüm programlar en yüksek tabandan başlayarak listeleniyor.
            </p>
          )}
          {sira != null && <p className="tr-sinif-aciklama">{SINIF_ETIKET[sinif].aciklama}</p>}
          {sira != null && uygunsuzSayisi > 0 && (
            <label className="tr-uygunsuz">
              <input
                type="checkbox"
                checked={uygunsuzlariGoster}
                onChange={(e) => setUygunsuzlariGoster(e.target.checked)}
              />
              <span>
                Başarı sırası şartını karşılamadığın <b>{fmtSayi(uygunsuzSayisi)} program</b> gizlendi (ör. Tıp için
                ilk 50.000, Hukuk için ilk 100.000). Yine de göster
              </span>
            </label>
          )}

          <ol className="tr-liste">
            {liste.slice(0, goster).map((p) => (
              <ProgramKarti
                key={p.kod}
                p={p}
                sinif={sira != null ? siniflandir(p, sira) : null}
                uyg={uygunluklar.get(p.kod)}
              />
            ))}
          </ol>
          {liste.length === 0 && <p className="tr-bos">Bu filtrelerle program bulunamadı.</p>}
          {liste.length > goster && (
            <button type="button" className="tr-daha" onClick={() => setGoster((g) => g + SAYFA)}>
              {fmtSayi(Math.min(SAYFA, liste.length - goster))} program daha göster (
              {fmtSayi(liste.length - goster)} kaldı)
            </button>
          )}
        </>
      )}
    </div>
  );
}

function ProgramKarti({ p, sinif, uyg }: { p: Program; sinif: Sinif | null; uyg?: Uygunluk }) {
  const uygunsuz = uyg?.uygun === false;
  return (
    <li className={`tr-kart${uygunsuz ? " tr-kart-uygunsuz" : ""}`}>
      <div className="tr-kart-ust">
        <div>
          <h3>{p.ad}</h3>
          <p className="tr-uni">
            {p.uni.ad} · {p.uni.sehir}
          </p>
        </div>
        {uygunsuz ? (
          <span className="tr-rozet tr-rozet-uygunsuz">Tercih edemezsin</span>
        ) : (
          sinif && <span className={`tr-rozet tr-sinif-${sinif}`}>{SINIF_ETIKET[sinif].ad}</span>
        )}
      </div>
      {uygunsuz && <p className="tr-uyari">{uyg!.neden}</p>}
      <dl className="tr-veri">
        <div>
          <dt>Taban sıra {TERCIH_VERI_YILI}</dt>
          <dd>{p.doldu && p.sira ? `≈ ${fmtSayi(p.sira)}` : "Dolmadı"}</dd>
        </div>
        <div>
          <dt>Taban sıra {TERCIH_VERI_YILI - 1}</dt>
          <dd>{p.oncekiSira ? fmtSayi(p.oncekiSira) : "—"}</dd>
        </div>
        <div>
          <dt>Taban puan {TERCIH_VERI_YILI}</dt>
          <dd>{p.enKucuk ? fmtPuan(p.enKucuk) : "—"}</dd>
        </div>
        <div>
          <dt>Kontenjan</dt>
          <dd>
            {p.yerlesen}/{p.kontenjan}
          </dd>
        </div>
      </dl>
      <p className="tr-etiketler">
        <span>{UNI_TURU_ETIKET[p.uni.tur]}</span>
        <span>{UCRET_ETIKET[p.ucret]}</span>
        {p.sure && <span>{p.sure} yıl</span>}
        {p.siraSarti != null && <span className="tr-sart">Şart: ilk {fmtSayi(p.siraSarti)}</span>}
        {p.puanSarti != null && <span className="tr-sart">Şart: en az {p.puanSarti} puan</span>}
        <span className="tr-kod">Kod {p.kod}</span>
      </p>
    </li>
  );
}
