"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  NET_ADIMI,
  agirlikliToplam,
  dagit,
  hedefHesapla,
  turTestleri,
  type HedefTipi,
  type Netler,
} from "@/lib/hedefNet";
import {
  SINIF_ETIKET,
  TERCIH_VERI_YILI,
  aramaAnahtari,
  aramaMetni,
  programlariYukle,
  siniflandir,
  type Program,
} from "@/lib/tercih";
import { PUAN_TURLERI, katsayi, net, testBilgisi, type PuanTuru, type TestKey } from "@/lib/yksPuan";
import { siralamaTahmini, yuvarlaSira } from "@/lib/yksSiralama";

// ─────────────────────────────────────────────────────────────────────────────
// Hedef net island: pick a program → see how many nets it takes, spread evenly
// over the tests, with sliders to lock the tests the student is sure about.
// Current nets come from this page's own storage, or the puan calculator's.
// ─────────────────────────────────────────────────────────────────────────────

const ANAHTAR = "cb-hedef:v1";
const PUAN_ANAHTARI = "cb-puan:v1";
const TURLER: PuanTuru[] = ["SAY", "EA", "SÖZ", "DİL", "TYT"];

interface Kayit {
  mevcut: Record<string, string>;
  diploma: string;
  oncekiYil: boolean;
}

const BOS: Kayit = { mevcut: {}, diploma: "", oncekiYil: false };

const DERS_LINKI: Partial<Record<TestKey, { href: string; label: string }>> = {
  "tyt-matematik": { href: "/tyt", label: "TYT Matematik konuları" },
  "ayt-matematik": { href: "/ayt", label: "AYT Matematik konuları" },
};

const fmtNet = (n: number) => n.toLocaleString("tr-TR", { maximumFractionDigits: 2 });
const fmtPuan = (n: number) => n.toLocaleString("tr-TR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const fmtSira = (n: number) => yuvarlaSira(n).toLocaleString("tr-TR");

function sayi(s: string | undefined): number | null {
  if (s == null || s.trim() === "") return null;
  const n = parseFloat(s.replace(",", "."));
  return Number.isFinite(n) ? n : null;
}

/** Puan hesaplama aracındaki son deneme (doğru/yanlış → net). */
function hesaplayicidanOku(): Kayit | null {
  try {
    const raw = localStorage.getItem(PUAN_ANAHTARI);
    if (!raw) return null;
    const k = JSON.parse(raw) as { cevaplar?: Record<string, { d: string; y: string }>; diploma?: string; oncekiYil?: boolean };
    const mevcut: Record<string, string> = {};
    for (const [key, c] of Object.entries(k.cevaplar ?? {})) {
      const n = net(key as TestKey, { dogru: parseInt(c.d, 10) || 0, yanlis: parseInt(c.y, 10) || 0 });
      if (n > 0) mevcut[key] = String(n).replace(".", ",");
    }
    return { mevcut, diploma: k.diploma ?? "", oncekiYil: !!k.oncekiYil };
  } catch {
    return null;
  }
}

export default function HedefNet() {
  const [tur, setTur] = useState<PuanTuru>("SAY");
  const [programlar, setProgramlar] = useState<Partial<Record<PuanTuru, Program[]>>>({});
  const [hata, setHata] = useState<string | null>(null);
  const [kod, setKod] = useState<string | null>(null);
  const [arama, setArama] = useState("");
  const [tip, setTip] = useState<HedefTipi>("taban");
  const [kayit, setKayit] = useState<Kayit>(BOS);
  const [kaynak, setKaynak] = useState<"kendi" | "hesaplayici" | "yok">("yok");
  const [kilitli, setKilitli] = useState<Netler>({});
  const [yuklendi, setYuklendi] = useState(false);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const qTur = q.get("tur") as PuanTuru | null;
    if (qTur && TURLER.includes(qTur)) setTur(qTur);
    const qKod = q.get("kod");
    if (qKod && /^\d+$/.test(qKod)) setKod(qKod);

    let k: Kayit | null = null;
    try {
      const raw = localStorage.getItem(ANAHTAR);
      if (raw) k = { ...BOS, ...JSON.parse(raw) };
    } catch {}
    if (k) {
      setKayit(k);
      setKaynak("kendi");
    } else {
      const h = hesaplayicidanOku();
      if (h) {
        setKayit(h);
        setKaynak("hesaplayici");
      }
    }
    setYuklendi(true);
  }, []);

  useEffect(() => {
    if (!yuklendi || kaynak === "yok") return;
    try {
      localStorage.setItem(ANAHTAR, JSON.stringify(kayit));
    } catch {}
  }, [kayit, kaynak, yuklendi]);

  useEffect(() => {
    if (programlar[tur]) return;
    let iptal = false;
    programlariYukle(tur)
      .then((ps) => !iptal && setProgramlar((o) => ({ ...o, [tur]: ps })))
      .catch(() => !iptal && setHata("Program verisi yüklenemedi. Sayfayı yenilemeyi dene."));
    return () => {
      iptal = true;
    };
  }, [tur, programlar]);

  // Keep the URL shareable: ?tur=SAY&kod=102710144
  useEffect(() => {
    if (!yuklendi) return;
    const q = new URLSearchParams();
    q.set("tur", tur);
    if (kod) q.set("kod", kod);
    window.history.replaceState(null, "", `${window.location.pathname}?${q}`);
  }, [tur, kod, yuklendi]);

  const liste = programlar[tur];
  const program = useMemo(() => liste?.find((p) => p.kod === kod) ?? null, [liste, kod]);

  const sonuclar = useMemo(() => {
    if (!liste || arama.trim().length < 2) return [];
    const parcalar = aramaAnahtari(arama).split(/\s+/).filter(Boolean);
    const out: Program[] = [];
    for (const p of liste) {
      const m = aramaMetni(p);
      if (parcalar.every((x) => m.includes(x))) out.push(p);
      if (out.length >= 8) break;
    }
    return out;
  }, [liste, arama]);

  const testler = turTestleri(tur);
  const mevcut: Netler = useMemo(() => {
    const o: Netler = {};
    for (const k of testler) {
      const n = sayi(kayit.mevcut[k]);
      if (n != null) o[k] = Math.min(Math.max(0, n), testBilgisi(k).soru);
    }
    return o;
  }, [kayit.mevcut, testler]);

  const diplomaSayi = sayi(kayit.diploma);
  const diploma = diplomaSayi != null && diplomaSayi >= 50 && diplomaSayi <= 100 ? diplomaSayi : null;
  const hedef = program ? hedefHesapla(program, tur, tip, { diploma, oncekiYil: kayit.oncekiYil }) : null;
  const dagitim = hedef ? dagit(tur, mevcut, kilitli, hedef.gerekenToplam) : null;

  const mevcutHam = 100 + agirlikliToplam(tur, mevcut);
  const mevcutVar = Object.values(mevcut).some((n) => (n ?? 0) > 0);
  const mevcutPuan = hedef?.obpli ? mevcutHam + hedef.obpKatki : mevcutHam;
  const mevcutSira = mevcutVar ? siralamaTahmini(tur, mevcutPuan, !!hedef?.obpli).sira : null;
  const mevcutSinif = program && mevcutSira ? siniflandir(program, mevcutSira) : null;

  const setMevcut = (k: TestKey, v: string) => {
    setKaynak("kendi");
    setKayit((o) => ({ ...o, mevcut: { ...o.mevcut, [k]: v } }));
  };
  const kilitle = (k: TestKey, v: number) => setKilitli((o) => ({ ...o, [k]: v }));
  const kilidiAc = (k: TestKey) =>
    setKilitli((o) => {
      const n = { ...o };
      delete n[k];
      return n;
    });

  const programSec = (p: Program) => {
    setKod(p.kod);
    setArama("");
    setKilitli({});
  };

  const turSec = (t: PuanTuru) => {
    if (t === tur) return;
    setTur(t);
    setKod(null);
    setKilitli({});
  };

  const artanMatematik = dagitim
    ? (Object.keys(DERS_LINKI) as TestKey[]).filter((k) => testler.includes(k) && dagitim.hedef[k] - (mevcut[k] ?? 0) >= 1)
    : [];

  return (
    <div className="tr hn">
      <section className="tr-giris">
        <div className="tr-turler" role="group" aria-label="Puan türü">
          {TURLER.map((t) => (
            <button key={t} type="button" className={t === tur ? "aktif" : ""} onClick={() => turSec(t)} aria-pressed={t === tur}>
              {PUAN_TURLERI.find((x) => x.key === t)!.label}
            </button>
          ))}
        </div>
        <label className="hn-etiket" htmlFor="hn-ara">
          Hedef program
        </label>
        <input
          id="hn-ara"
          className="tr-ara"
          type="search"
          placeholder={program ? "Başka bir program ara…" : "Bölüm, üniversite veya şehir yaz (ör. odtü bilgisayar)"}
          value={arama}
          onChange={(e) => setArama(e.target.value)}
          autoComplete="off"
        />
        {hata && <p className="tr-uyari">{hata}</p>}
        {!liste && !hata && <p className="tr-ipucu">Programlar yükleniyor…</p>}
        {sonuclar.length > 0 && (
          <ul className="hn-sonuclar">
            {sonuclar.map((p) => (
              <li key={p.kod}>
                <button type="button" onClick={() => programSec(p)}>
                  <strong>{p.ad}</strong>
                  <span>
                    {p.uni.ad} · {p.uni.sehir}
                    {p.esasSira ? ` · taban ≈ ${fmtSira(p.esasSira)}` : ""}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
        {liste && arama.trim().length >= 2 && sonuclar.length === 0 && (
          <p className="tr-ipucu">Bu puan türünde eşleşen program bulamadık. Puan türünü kontrol et.</p>
        )}
        {program && (
          <div className="hn-program">
            <div>
              <h2>{program.ad}</h2>
              <p className="tr-uni">
                {program.uni.ad} · {program.uni.sehir} · Kod {program.kod}
              </p>
            </div>
            {mevcutSinif && (
              <span className={`tr-rozet tr-sinif-${mevcutSinif}`} title="Şu anki netlerine göre">
                Şu an: {SINIF_ETIKET[mevcutSinif].ad}
              </span>
            )}
          </div>
        )}
      </section>

      {!program && kod && liste && (
        <p className="tr-ipucu-kutu">
          {kod} kodlu programı {tur} puan türünde bulamadık. Yukarıdan arayarak seçebilirsin.
        </p>
      )}

      {program && hedef && dagitim && (
        <>
          <section className="tr-giris hn-ozet">
            <div className="tr-turler" role="group" aria-label="Hedef">
              <button type="button" className={tip === "taban" ? "aktif" : ""} onClick={() => setTip("taban")} aria-pressed={tip === "taban"}>
                Tabana ulaş
              </button>
              <button type="button" className={tip === "guvenli" ? "aktif" : ""} onClick={() => setTip("guvenli")} aria-pressed={tip === "guvenli"}>
                Güvenli bölgeye gir
              </button>
            </div>
            <dl className="hn-rakamlar">
              <div>
                <dt>Hedef sıra</dt>
                <dd>{hedef.hedefSira ? fmtSira(hedef.hedefSira) : "—"}</dd>
              </div>
              <div>
                <dt>{hedef.obpli ? "Gereken yerleştirme puanı" : "Gereken sınav puanı"}</dt>
                <dd>≈ {fmtPuan(hedef.obpli ? hedef.gerekenHam + hedef.obpKatki : hedef.gerekenHam)}</dd>
              </div>
              <div>
                <dt>Şu anki puanın</dt>
                <dd>{mevcutVar ? `≈ ${fmtPuan(mevcutPuan)}` : "—"}</dd>
              </div>
              <div>
                <dt>Şu anki sıran</dt>
                <dd>{mevcutSira ? `≈ ${fmtSira(mevcutSira)}` : "—"}</dd>
              </div>
            </dl>
            <p className="hn-aciklama">
              {hedef.belirleyen === "taban" &&
                (tip === "taban"
                  ? `Hedef, programın son iki yıldaki taban sıralarından zor olanı (${TERCIH_VERI_YILI - 1}–${TERCIH_VERI_YILI}).`
                  : "Güvenli bölge: tercih robotunun Güvenli dediği sıra, yani tabanın %80'i.")}
              {hedef.belirleyen === "sira-sarti" &&
                `ÖSYM bu programı tercih etmek için ilk ${program.siraSarti!.toLocaleString("tr-TR")} içinde olmayı şart koşuyor; hedef bu şart.`}
              {hedef.belirleyen === "puan-sarti" && `Bu program en az ${program.puanSarti} yerleştirme puanı şartı koyuyor; hedef bu şart.`}
              {hedef.belirleyen === "serbest" &&
                "Bu programın kontenjanı geçen yıl dolmadı ve sıra şartı yok: puanının hesaplanması yeterli oldu. Yine de kontenjanlar her yıl değişebilir."}
            </p>

            <div className={`hn-durum hn-durum-${dagitim.durum}`}>
              {hedef.ulasilamaz ? (
                <p>Bu hedef, OBP&apos;n ile birlikte en yüksek ham puanla (500) bile ulaşılabilir görünmüyor.</p>
              ) : dagitim.durum === "yetiyor" ? (
                <p>
                  <b>Netlerin bu hedefe yetiyor.</b> {Object.keys(kilitli).length ? "Kilitlediğin netlerle" : "Şu anki netlerinle"}{" "}
                  hedefin üstündesin; sınav günü bu seviyeyi korumaya odaklan.
                </p>
              ) : dagitim.durum === "imkansiz" ? (
                <p>
                  <b>Kilitlediğin netlerle bu hedefe ulaşılamıyor.</b> Diğer testlerin hepsi tam net olsa bile yaklaşık{" "}
                  {fmtPuan(dagitim.eksikPuan)} puan eksik kalıyor. Bir kilidi aç ya da kilitli netleri artır.
                </p>
              ) : (
                <p>
                  <b>
                    Yaklaşık {fmtPuan(hedef.gerekenToplam - agirlikliToplam(tur, mevcut))} puan daha lazım.
                  </b>{" "}
                  {Object.keys(kilitli).length ? "Kilitsiz" : "Her"} testte, şu anki netinle tam net arasındaki farkın %
                  {Math.round(dagitim.oran * 100)} kadarını kapatırsan hedefe ulaşıyorsun. Bu yalnızca bir örnek: kaydırıcılarla
                  kendi planını kur.
                </p>
              )}
            </div>
          </section>

          <section className="tr-giris hn-tablo-kutu">
            <div className="hn-tablo-baslik">
              <h2>Ders ders hedef netler</h2>
              {Object.keys(kilitli).length > 0 && (
                <button type="button" className="tr-temizle" onClick={() => setKilitli({})}>
                  Kilitleri kaldır
                </button>
              )}
            </div>
            <p className="tr-ipucu" style={{ marginTop: 0 }}>
              Bir testin kaydırıcısını oynatınca o test <b>kilitlenir</b>; robot gereken puanı diğer testlere yeniden
              dağıtır. &ldquo;Şu an&rdquo; sütununa son deneme netlerini yaz.
            </p>
            <div className="hn-satirlar">
              <div className="hn-satir hn-satir-baslik" aria-hidden="true">
                <span>Test</span>
                <span>Şu an</span>
                <span>Hedef</span>
                <span>Fark</span>
              </div>
              {testler.map((k) => {
                const t = testBilgisi(k);
                const h = dagitim.hedef[k];
                const m = mevcut[k] ?? 0;
                const fark = h - m;
                const kilit = kilitli[k] != null;
                return (
                  <div key={k} className={`hn-satir${kilit ? " kilitli" : ""}`}>
                    <div className="hn-test">
                      <strong>
                        {t.oturum} {t.label}
                      </strong>
                      <small>
                        {t.soru} soru · 1 net ≈ {fmtPuan(katsayi(tur, k))} puan
                      </small>
                    </div>
                    <input
                      className="hn-mevcut"
                      inputMode="decimal"
                      aria-label={`${t.label} şu anki net`}
                      placeholder="0"
                      value={kayit.mevcut[k] ?? ""}
                      onChange={(e) => setMevcut(k, e.target.value)}
                    />
                    <div className="hn-hedef">
                      <input
                        type="range"
                        min={0}
                        max={t.soru}
                        step={NET_ADIMI}
                        value={h}
                        onChange={(e) => kilitle(k, parseFloat(e.target.value))}
                        aria-label={`${t.label} hedef net`}
                      />
                      <span className="hn-hedef-sayi">{fmtNet(h)}</span>
                      <button
                        type="button"
                        className={`hn-kilit${kilit ? " aktif" : ""}`}
                        onClick={() => (kilit ? kilidiAc(k) : kilitle(k, h))}
                        aria-pressed={kilit}
                        aria-label={kilit ? `${t.label} kilidini aç` : `${t.label} netini kilitle`}
                        title={kilit ? "Kilidi aç" : "Bu neti sabitle"}
                      >
                        {kilit ? "🔒" : "🔓"}
                      </button>
                    </div>
                    <span className={`hn-fark${fark > 0 ? " arti" : fark < 0 ? " eksi" : ""}`}>
                      {fark > 0 ? "+" : ""}
                      {fark === 0 ? "—" : fmtNet(fark)}
                    </span>
                  </div>
                );
              })}
            </div>

            {kaynak === "hesaplayici" && (
              <p className="tr-ipucu">
                Şu anki netlerin <Link href="/yks-puan-hesaplama">puan hesaplama</Link> aracına girdiğin son denemeden
                alındı.
              </p>
            )}
            {kaynak === "yok" && (
              <p className="tr-ipucu">
                Netlerini bilmiyorsan önce <Link href="/yks-puan-hesaplama">puan hesaplama</Link> aracına son denemeni
                gir; netler buraya otomatik gelir.
              </p>
            )}

            <div className="hn-obp">
              <label>
                Diploma notu
                <input
                  inputMode="decimal"
                  placeholder="ör. 85"
                  value={kayit.diploma}
                  onChange={(e) => {
                    setKaynak("kendi");
                    setKayit((o) => ({ ...o, diploma: e.target.value }));
                  }}
                />
              </label>
              <label className="hn-onay">
                <input
                  type="checkbox"
                  checked={kayit.oncekiYil}
                  onChange={(e) => {
                    setKaynak("kendi");
                    setKayit((o) => ({ ...o, oncekiYil: e.target.checked }));
                  }}
                />
                Geçen yıl bir programa yerleştim
              </label>
              {diploma == null && (
                <small>Diploma notunu girersen OBP katkısı hesaba katılır ve hedef daha doğru olur.</small>
              )}
            </div>

            {artanMatematik.length > 0 && (
              <div className="hn-dersler">
                {artanMatematik.map((k) => (
                  <Link key={k} href={DERS_LINKI[k]!.href}>
                    {testBilgisi(k).oturum} Matematik&apos;te +{fmtNet(dagitim.hedef[k] - (mevcut[k] ?? 0))} net için:{" "}
                    {DERS_LINKI[k]!.label} →
                  </Link>
                ))}
              </div>
            )}
          </section>

          <p className="tr-ipucu">
            Hesap, ÖSYM&apos;nin {TERCIH_VERI_YILI} puan dağılımına ve test ağırlıklarına dayanan bir tahmindir. Gerçek
            puanlar o yılki adayların ortalamalarına göre hesaplandığı için hedefin birkaç puan üstünü hedeflemek
            akıllıca olur. <Link href={`/tercih-robotu?tur=${tur}${mevcutSira ? `&sira=${yuvarlaSira(mevcutSira)}` : ""}`}>Tercih robotuna dön →</Link>
          </p>
        </>
      )}

      {!program && !kod && (
        <p className="tr-ipucu-kutu">
          Hedeflediğin programı ara ve seç. Ya da <Link href="/tercih-robotu">tercih robotunda</Link> bir programın altındaki{" "}
          <b>Kaç net lazım?</b> bağlantısına bas.
        </p>
      )}
    </div>
  );
}
