"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  NET_ADIMI,
  agirlikliToplam,
  dagit,
  hedefHesapla,
  tekBasina,
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

/** A slider the student moved ("sen") or the robot filled ("robot"); untouched tests follow the last deneme. */
type Ayar = Partial<Record<TestKey, { net: number; kim: "sen" | "robot" }>>;
type RobotSonuc = { durum: "yetiyor" | "mumkun" | "imkansiz"; eksikPuan: number };

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
  const [ayar, setAyar] = useState<Ayar>({});
  const [vurgu, setVurgu] = useState<Set<TestKey>>(new Set());
  const [robotSonuc, setRobotSonuc] = useState<RobotSonuc | null>(null);
  const [yuklendi, setYuklendi] = useState(false);
  // Floating copy of the target bar while it is scrolled out of view above the sliders.
  const kutuRef = useRef<HTMLElement>(null);
  const cubukRef = useRef<HTMLDivElement>(null);
  const [kutuGorunur, setKutuGorunur] = useState(false);
  const [cubukGorunur, setCubukGorunur] = useState(true);

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

  useEffect(() => {
    const kutu = kutuRef.current;
    const cubuk = cubukRef.current;
    if (!kutu || !cubuk || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver((girdiler) => {
      for (const g of girdiler) {
        if (g.target === kutu) setKutuGorunur(g.isIntersecting);
        else setCubukGorunur(g.isIntersecting);
      }
    });
    io.observe(kutu);
    io.observe(cubuk);
    return () => io.disconnect();
  });

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

  const mevcutHam = 100 + agirlikliToplam(tur, mevcut);
  const mevcutVar = Object.values(mevcut).some((n) => (n ?? 0) > 0);
  const obpEk = hedef?.obpli ? hedef.obpKatki : 0;
  const mevcutPuan = mevcutHam + obpEk;
  const mevcutSira = mevcutVar ? siralamaTahmini(tur, mevcutPuan, !!hedef?.obpli).sira : null;
  const mevcutSinif = program && mevcutSira ? siniflandir(program, mevcutSira) : null;

  // The plan is exactly what is on the sliders: nothing moves unless the student
  // moves it or presses the robot button.
  const plan = {} as Record<TestKey, number>;
  for (const k of testler) plan[k] = ayar[k]?.net ?? mevcut[k] ?? 0;
  const planToplam = agirlikliToplam(tur, plan);
  const planPuan = 100 + planToplam + obpEk;
  const planSira = hedef ? siralamaTahmini(tur, planPuan, hedef.obpli).sira : null;
  const planSinif = program && planSira ? siniflandir(program, planSira) : null;
  /** Ağırlıklı puan cinsinden eksik (>0) ya da fazla (<0). */
  const eksik = hedef ? hedef.gerekenToplam - planToplam : 0;
  const planTamam = !!hedef && eksik <= 1e-6;
  const gerekenGoster = hedef ? hedef.gerekenHam + obpEk : 0;
  const ayarVar = Object.keys(ayar).length > 0;

  /** Fill every test the student has not moved; their own sliders stay put. */
  const robotDagit = (taban: Ayar) => {
    if (!hedef) return;
    const sabit: Netler = {};
    for (const k of testler) if (taban[k]?.kim === "sen") sabit[k] = taban[k]!.net;
    const d = dagit(tur, mevcut, sabit, hedef.gerekenToplam);
    const yeni: Ayar = {};
    const degisen = new Set<TestKey>();
    for (const k of testler) {
      if (sabit[k] != null) {
        yeni[k] = taban[k];
        continue;
      }
      if (d.hedef[k] !== (mevcut[k] ?? 0)) yeni[k] = { net: d.hedef[k], kim: "robot" };
      if (d.hedef[k] !== plan[k]) degisen.add(k);
    }
    setAyar(yeni);
    setVurgu(degisen);
    setRobotSonuc({ durum: d.durum, eksikPuan: d.eksikPuan });
  };

  // New program → start from the last deneme; with no deneme, let the robot draft a plan.
  const programAnahtari = program ? `${tur}:${program.kod}` : null;
  useEffect(() => {
    if (!programAnahtari || !yuklendi) return;
    setRobotSonuc(null);
    if (mevcutVar) setAyar({});
    else robotDagit({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [programAnahtari, yuklendi]);

  useEffect(() => {
    if (vurgu.size === 0) return;
    const t = setTimeout(() => setVurgu(new Set()), 1600);
    return () => clearTimeout(t);
  }, [vurgu]);

  const setMevcut = (k: TestKey, v: string) => {
    setKaynak("kendi");
    setKayit((o) => ({ ...o, mevcut: { ...o.mevcut, [k]: v } }));
  };
  const kaydir = (k: TestKey, v: number) => {
    setAyar((o) => ({ ...o, [k]: { net: v, kim: "sen" } }));
    setRobotSonuc(null);
  };
  const satiriSifirla = (k: TestKey) => {
    setAyar((o) => {
      const n = { ...o };
      delete n[k];
      return n;
    });
    setRobotSonuc(null);
  };
  const denemeyeDon = () => {
    setAyar({});
    setRobotSonuc(null);
  };

  const programSec = (p: Program) => {
    setKod(p.kod);
    setArama("");
  };

  const turSec = (t: PuanTuru) => {
    if (t === tur) return;
    setTur(t);
    setKod(null);
    setAyar({});
  };

  const artanMatematik = (Object.keys(DERS_LINKI) as TestKey[]).filter(
    (k) => testler.includes(k) && plan[k] - (mevcut[k] ?? 0) >= 1,
  );

  // Target bar scale (placement-score space when OBP is known).
  const olcekDegerleri = [planPuan, gerekenGoster, ...(mevcutVar ? [mevcutPuan] : [])];
  const olcekAlt = Math.max(100, Math.min(...olcekDegerleri) - 25);
  const olcekUst = Math.max(...olcekDegerleri) + 15;
  const yuzde = (v: number) => `${Math.min(100, Math.max(0, ((v - olcekAlt) / (olcekUst - olcekAlt)) * 100))}%`;

  const hedefCubugu = (yuzen: boolean) =>
    hedef && (
      <div
        ref={yuzen ? undefined : cubukRef}
        className={`hn-hedef-cubuk${planTamam ? " tamam" : " eksik"}${yuzen ? " hn-plan-yuzen" : ""}`}
        aria-live={yuzen ? undefined : "polite"}
        aria-hidden={yuzen || undefined}
      >
        <div className="hn-hedef-mesaj">
          <b>
            {hedef.ulasilamaz
              ? "Bu hedef tam netle bile ulaşılabilir görünmüyor"
              : planTamam
                ? `Hedefi ≈ ${fmtPuan(-eksik)} puan geçtin ✓`
                : `Hedefe ≈ ${fmtPuan(eksik)} puan kaldı`}
          </b>
          <span>
            Bu planla ≈ {fmtPuan(planPuan)} puan{planSira ? ` · ≈ ${fmtSira(planSira)}. sıra` : ""}
            {planSinif && <span className={`tr-rozet tr-sinif-${planSinif}`}>{SINIF_ETIKET[planSinif].ad}</span>}
          </span>
        </div>
        {!yuzen && (
          <div className="hn-ray" aria-hidden="true">
            <div className="hn-ray-dolu" style={{ width: yuzde(planPuan) }} />
            {mevcutVar && <div className="hn-ray-deneme" style={{ left: yuzde(mevcutPuan) }} title="Son deneme" />}
            <div className="hn-ray-hedef" style={{ left: yuzde(gerekenGoster) }}>
              <span>Hedef {fmtPuan(gerekenGoster)}</span>
            </div>
          </div>
        )}
        {!yuzen && mevcutVar && (
          <p className="hn-ray-not">
            Gri çizgi son denemen ({fmtPuan(mevcutPuan)}), siyah çizgi hedef.
          </p>
        )}
      </div>
    );

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

      {program && hedef && (
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
                <dt>Son denemenle</dt>
                <dd>{mevcutVar ? `≈ ${fmtPuan(mevcutPuan)}` : "—"}</dd>
                {mevcutSira && <small>≈ {fmtSira(mevcutSira)}. sıra</small>}
              </div>
              <div className="hn-plan-kutu">
                <dt>Planınla</dt>
                <dd>≈ {fmtPuan(planPuan)}</dd>
                {planSira && <small>≈ {fmtSira(planSira)}. sıra</small>}
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

            {hedef.ulasilamaz && (
              <div className="hn-durum hn-durum-imkansiz">
                <p>Bu hedef, OBP&apos;n ile birlikte en yüksek ham puanla (500) bile ulaşılabilir görünmüyor.</p>
              </div>
            )}
          </section>

          <section className="tr-giris hn-tablo-kutu" ref={kutuRef}>
            <div className="hn-tablo-baslik">
              <h2>Planın: ders ders netler</h2>
            </div>
            <p className="tr-ipucu" style={{ marginTop: 0 }}>
              Kaydırıcılar <b>senin planın</b>: oynattığın ders değişir, diğerleri yerinde kalır. Hangi derse
              yüklenmen gerektiğini satırlardaki <b>&ldquo;tek başına&rdquo;</b> ipucundan gör ya da kalanı robota
              dağıttır. Robot yalnızca dokunmadığın derslere, son denemenle tam net arasındaki boşluğun aynı oranını
              ekler.
            </p>

            {hedefCubugu(false)}

            <div className="hn-robot">
              <button type="button" className="tr-hesap" onClick={() => robotDagit(ayar)} disabled={hedef.ulasilamaz}>
                {Object.values(ayar).some((a) => a?.kim === "sen") ? "Kalanı robot dağıtsın" : "Robot bir plan önersin"}
              </button>
              {ayarVar && mevcutVar && (
                <button type="button" className="tr-temizle" onClick={denemeyeDon}>
                  Son denemeye dön
                </button>
              )}
            </div>
            {robotSonuc && robotSonuc.durum === "imkansiz" && (
              <p className="hn-robot-not eksik">
                Elle ayarladığın netlerle, dokunmadığın dersler tam net olsa bile ≈ {fmtPuan(robotSonuc.eksikPuan)} puan
                eksik kalıyor. Elle ayarladığın bir dersi artır ya da ↺ ile robota bırak.
              </p>
            )}
            {robotSonuc && robotSonuc.durum === "yetiyor" && (
              <p className="hn-robot-not">Planın zaten hedefe yetiyor; robotun ekleyecek bir şeyi yok.</p>
            )}
            {robotSonuc && robotSonuc.durum === "mumkun" && vurgu.size > 0 && (
              <p className="hn-robot-not">Robot vurgulanan dersleri ayarladı. Beğenmediğin kaydırıcıyı oynatabilirsin.</p>
            )}

            <div className="hn-satirlar">
              <div className="hn-satir hn-satir-baslik" aria-hidden="true">
                <span>Test</span>
                <span>Son deneme</span>
                <span>Plan</span>
                <span>Fark</span>
              </div>
              {testler.map((k) => {
                const t = testBilgisi(k);
                const h = plan[k];
                const m = mevcut[k] ?? 0;
                const fark = h - m;
                const kim = ayar[k]?.kim;
                const tek = !planTamam && !hedef.ulasilamaz ? tekBasina(tur, k, eksik, h) : 0;
                return (
                  <div
                    key={k}
                    className={`hn-satir${kim === "sen" ? " senin" : kim === "robot" ? " robotun" : ""}${vurgu.has(k) ? " vurgu" : ""}`}
                  >
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
                      aria-label={`${t.label} son deneme neti`}
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
                        onChange={(e) => kaydir(k, parseFloat(e.target.value))}
                        aria-label={`${t.label} plan neti`}
                      />
                      <span className="hn-hedef-sayi">{fmtNet(h)}</span>
                      <button
                        type="button"
                        className="hn-sifirla"
                        onClick={() => satiriSifirla(k)}
                        disabled={!kim}
                        aria-label={`${t.label} netini son denemeye döndür`}
                        title="Son denemeye döndür"
                      >
                        ↺
                      </button>
                    </div>
                    <span className={`hn-fark${fark > 0 ? " arti" : fark < 0 ? " eksi" : ""}`}>
                      {fark > 0 ? "+" : ""}
                      {fark === 0 ? "—" : fmtNet(fark)}
                    </span>
                    {tek !== 0 && (
                      <small className={`hn-tek${tek == null ? " yetmez" : ""}`}>
                        {tek == null
                          ? t.soru - h > 0
                            ? `Tek başına yetmez: tam nete kadar +${fmtNet(t.soru - h)} net ≈ ${fmtPuan((t.soru - h) * katsayi(tur, k))} puan`
                            : "Tam net"
                          : `Tek başına +${fmtNet(tek)} net hedefi kapatır`}
                        {kim === "robot" && " · robot önerisi"}
                      </small>
                    )}
                    {tek === 0 && kim === "robot" && <small className="hn-tek">Robot önerisi</small>}
                  </div>
                );
              })}
            </div>

            {kutuGorunur && !cubukGorunur && hedefCubugu(true)}

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
                    {testBilgisi(k).oturum} Matematik&apos;te +{fmtNet(plan[k] - (mevcut[k] ?? 0))} net için:{" "}
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
