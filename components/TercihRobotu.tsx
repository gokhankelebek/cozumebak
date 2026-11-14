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
import {
  EN_FAZLA_TERCIH,
  listeMetni,
  listeyiOku,
  listeyiYaz,
  stratejiKontrol,
  type ListeOgesi,
  type ListeSatiri,
} from "@/lib/tercihListesi";

// ─────────────────────────────────────────────────────────────────────────────
// Tercih robotu island. Program data is fetched per score type from
// /public/tercih (static JSON, built from ÖSYM tables). Rank can come from the
// URL (?tur=SAY&sira=45000), from the puan calculator's saved answers, or be
// typed in — one rank per score type. The 24-choice list and the ranks are
// kept in localStorage. Nothing leaves the device.
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
const SIRA_ANAHTARI = "cb-tercih-sira:v1";

type Siralar = Partial<Record<PuanTuru, string>>;

const fmtSayi = (n: number) => n.toLocaleString("tr-TR");
const fmtPuan = (n: number) => n.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function turEtiket(t: PuanTuru) {
  return t === "TYT" ? "TYT (Ön lisans)" : PUAN_TURLERI.find((p) => p.key === t)!.label;
}

function siraSayisi(s: string | undefined): number | null {
  const n = parseInt((s ?? "").replace(/\D/g, ""), 10);
  return Number.isFinite(n) && n > 0 ? n : null;
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
  const [siralar, setSiralar] = useState<Siralar>({});
  const [onbellek, setOnbellek] = useState<Partial<Record<PuanTuru, Program[]>>>({});
  const [hata, setHata] = useState<string | null>(null);
  const [arama, setArama] = useState("");
  const [sehir, setSehir] = useState("");
  const [uniGrup, setUniGrup] = useState<Set<string>>(new Set());
  const [ucret, setUcret] = useState<Set<Ucret>>(new Set());
  const [sinif, setSinif] = useState<Sinif>("hedef");
  const [goster, setGoster] = useState(SAYFA);
  const [uygunsuzlariGoster, setUygunsuzlariGoster] = useState(false);
  const [hesapSiralari, setHesapSiralari] = useState<Partial<Record<PuanTuru, number>> | null>(null);
  const [liste, setListe] = useState<ListeOgesi[]>([]);
  const [gorunum, setGorunum] = useState<"programlar" | "liste">("programlar");
  const [yuklendi, setYuklendi] = useState(false);
  const [kopyalandi, setKopyalandi] = useState(false);

  // Saved ranks + list, then URL params on top (links from the calculator).
  useEffect(() => {
    let kayitli: Siralar = {};
    try {
      kayitli = JSON.parse(localStorage.getItem(SIRA_ANAHTARI) ?? "{}") ?? {};
    } catch {}
    const q = new URLSearchParams(window.location.search);
    const qTur = q.get("tur") as PuanTuru | null;
    const qSira = q.get("sira");
    if (qTur && TURLER.includes(qTur)) {
      setTur(qTur);
      if (qSira && /^\d+$/.test(qSira)) kayitli = { ...kayitli, [qTur]: qSira };
    }
    setSiralar(kayitli);
    setListe(listeyiOku());
    setHesapSiralari(hesaplayicidanSiralar());
    setYuklendi(true);
  }, []);

  useEffect(() => {
    if (!yuklendi) return;
    listeyiYaz(liste);
    try {
      localStorage.setItem(SIRA_ANAHTARI, JSON.stringify(siralar));
    } catch {}
  }, [liste, siralar, yuklendi]);

  // Load the current score type plus every type that appears in the list.
  const gerekenTurler = useMemo(
    () => [...new Set<PuanTuru>([tur, ...liste.map((l) => l.tur)])],
    [tur, liste],
  );
  useEffect(() => {
    let iptal = false;
    for (const t of gerekenTurler) {
      if (onbellek[t]) continue;
      programlariYukle(t)
        .then((p) => !iptal && setOnbellek((o) => ({ ...o, [t]: p })))
        .catch(() => !iptal && setHata("Program listesi yüklenemedi. Bağlantını kontrol edip sayfayı yenile."));
    }
    return () => {
      iptal = true;
    };
  }, [gerekenTurler, onbellek]);

  const programlar = onbellek[tur] ?? null;
  const siraGirdi = siralar[tur] ?? "";
  const sira = siraSayisi(siraGirdi);
  const setSiraGirdi = (v: string) => setSiralar((s) => ({ ...s, [tur]: v }));

  useEffect(() => setGoster(SAYFA), [tur, siraGirdi, arama, sehir, uniGrup, ucret, sinif, uygunsuzlariGoster]);

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

  const sonuc = useMemo(() => {
    if (sira != null) return siniflar[sinif];
    return [...filtreli].sort((a, b) => (a.esasSira ?? Infinity) - (b.esasSira ?? Infinity));
  }, [sira, siniflar, sinif, filtreli]);

  // The list, resolved against loaded program data and each score type's rank.
  const listeSatirlari: ListeSatiri[] = useMemo(
    () =>
      liste.map((l) => {
        const program = onbellek[l.tur]?.find((p) => p.kod === l.kod) ?? null;
        const s = siraSayisi(siralar[l.tur]);
        return {
          ...l,
          program,
          sinif: program && s != null ? siniflandir(program, s) : null,
          uygunluk: program && s != null ? uygunluk(program, s, l.tur) : null,
        };
      }),
    [liste, onbellek, siralar],
  );
  const uyarilar = useMemo(() => stratejiKontrol(listeSatirlari), [listeSatirlari]);
  const listedeki = useMemo(() => new Map(liste.map((l, i) => [`${l.tur}:${l.kod}`, i + 1])), [liste]);
  const listeDolu = liste.length >= EN_FAZLA_TERCIH;

  function toggle<T>(set: Set<T>, v: T, setter: (s: Set<T>) => void) {
    const n = new Set(set);
    if (n.has(v)) n.delete(v);
    else n.add(v);
    setter(n);
  }

  function listeyeEkleCikar(p: Program) {
    const anahtar = `${tur}:${p.kod}`;
    setListe((l) =>
      listedeki.has(anahtar)
        ? l.filter((x) => `${x.tur}:${x.kod}` !== anahtar)
        : l.length >= EN_FAZLA_TERCIH
          ? l
          : [...l, { tur, kod: p.kod }],
    );
  }

  function tasi(i: number, yon: -1 | 1) {
    setListe((l) => {
      const j = i + yon;
      if (j < 0 || j >= l.length) return l;
      const n = [...l];
      [n[i], n[j]] = [n[j], n[i]];
      return n;
    });
  }

  async function kopyala() {
    const metin = listeMetni(listeSatirlari);
    try {
      await navigator.clipboard.writeText(metin);
    } catch {
      // Older browsers: fall back to a hidden textarea.
      const ta = document.createElement("textarea");
      ta.value = metin;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setKopyalandi(true);
    setTimeout(() => setKopyalandi(false), 2000);
  }

  const hesapSira = hesapSiralari?.[tur];

  return (
    <div className="tr">
      <div className="tr-gorunum" role="tablist" aria-label="Görünüm">
        <button
          type="button"
          role="tab"
          aria-selected={gorunum === "programlar"}
          className={gorunum === "programlar" ? "aktif" : ""}
          onClick={() => setGorunum("programlar")}
        >
          Programlar
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={gorunum === "liste"}
          className={gorunum === "liste" ? "aktif" : ""}
          onClick={() => setGorunum("liste")}
        >
          Tercih listem{" "}
          <span className="tr-gorunum-sayi">
            {liste.length}/{EN_FAZLA_TERCIH}
          </span>
        </button>
      </div>

      {gorunum === "liste" ? (
        <TercihListem
          satirlar={listeSatirlari}
          uyarilar={uyarilar}
          tasi={tasi}
          cikar={(i) => setListe((l) => l.filter((_, k) => k !== i))}
          temizle={() => {
            if (window.confirm("Tercih listendeki tüm programlar silinsin mi?")) setListe([]);
          }}
          kopyala={kopyala}
          kopyalandi={kopyalandi}
          programlaraDon={() => setGorunum("programlar")}
        />
      ) : (
        <>
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
                  Sıralamanı girince programlar <b>Güvenli</b>, <b>Hedef</b> ve <b>Hayal</b> olarak ayrılır.
                  Şimdilik tüm programlar en yüksek tabandan başlayarak listeleniyor.
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
                    Başarı sırası şartını karşılamadığın <b>{fmtSayi(uygunsuzSayisi)} program</b> gizlendi (ör. Tıp
                    için ilk 50.000, Hukuk için ilk 100.000). Yine de göster
                  </span>
                </label>
              )}

              <ol className="tr-liste">
                {sonuc.slice(0, goster).map((p) => (
                  <ProgramKarti
                    key={p.kod}
                    p={p}
                    tur={tur}
                    sinif={sira != null ? siniflandir(p, sira) : null}
                    uyg={uygunluklar.get(p.kod)}
                    listeSirasi={listedeki.get(`${tur}:${p.kod}`) ?? null}
                    listeDolu={listeDolu}
                    onListe={() => listeyeEkleCikar(p)}
                  />
                ))}
              </ol>
              {sonuc.length === 0 && <p className="tr-bos">Bu filtrelerle program bulunamadı.</p>}
              {sonuc.length > goster && (
                <button type="button" className="tr-daha" onClick={() => setGoster((g) => g + SAYFA)}>
                  {fmtSayi(Math.min(SAYFA, sonuc.length - goster))} program daha göster (
                  {fmtSayi(sonuc.length - goster)} kaldı)
                </button>
              )}
            </>
          )}
        </>
      )}

      {/* Floating shortcut to the list once something is in it. */}
      {gorunum === "programlar" && liste.length > 0 && (
        <button type="button" className="tr-liste-kisayol" onClick={() => setGorunum("liste")}>
          Tercih listem <strong>{liste.length}/{EN_FAZLA_TERCIH}</strong>
          {uyarilar.some((u) => u.seviye === "dikkat") && <span className="tr-liste-kisayol-uyari">!</span>}
        </button>
      )}
    </div>
  );
}

function ProgramKarti({
  p,
  tur,
  sinif,
  uyg,
  listeSirasi,
  listeDolu,
  onListe,
}: {
  p: Program;
  tur: PuanTuru;
  sinif: Sinif | null;
  uyg?: Uygunluk;
  listeSirasi: number | null;
  listeDolu: boolean;
  onListe: () => void;
}) {
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
      <div className="tr-kart-alt">
        <p className="tr-etiketler">
          <span>{UNI_TURU_ETIKET[p.uni.tur]}</span>
          <span>{UCRET_ETIKET[p.ucret]}</span>
          {p.sure && <span>{p.sure} yıl</span>}
          {p.siraSarti != null && <span className="tr-sart">Şart: ilk {fmtSayi(p.siraSarti)}</span>}
          {p.puanSarti != null && <span className="tr-sart">Şart: en az {p.puanSarti} puan</span>}
          <span className="tr-kod">Kod {p.kod}</span>
        </p>
        <Link className="tr-net-link" href={`/hedef-net?tur=${tur}&kod=${p.kod}`}>
          Kaç net lazım?
        </Link>
        <button
          type="button"
          className={`tr-ekle${listeSirasi ? " eklendi" : ""}`}
          onClick={onListe}
          disabled={!listeSirasi && listeDolu}
          aria-pressed={listeSirasi != null}
          title={!listeSirasi && listeDolu ? `Listen dolu (${EN_FAZLA_TERCIH} tercih)` : undefined}
        >
          {listeSirasi ? `✓ ${listeSirasi}. tercihin` : "+ Listeme ekle"}
        </button>
      </div>
    </li>
  );
}

function TercihListem({
  satirlar,
  uyarilar,
  tasi,
  cikar,
  temizle,
  kopyala,
  kopyalandi,
  programlaraDon,
}: {
  satirlar: ListeSatiri[];
  uyarilar: ReturnType<typeof stratejiKontrol>;
  tasi: (i: number, yon: -1 | 1) => void;
  cikar: (i: number) => void;
  temizle: () => void;
  kopyala: () => void;
  kopyalandi: boolean;
  programlaraDon: () => void;
}) {
  if (satirlar.length === 0) {
    return (
      <section className="tr-listem-bos">
        <h2>Tercih listen boş</h2>
        <p>
          Programlar sekmesinde beğendiğin programların altındaki <b>+ Listeme ekle</b> düğmesine bas. En fazla{" "}
          {EN_FAZLA_TERCIH} tercih ekleyebilir, sonra sıralarını burada değiştirebilirsin.
        </p>
        <button type="button" className="tr-daha" onClick={programlaraDon}>
          Programlara git
        </button>
      </section>
    );
  }
  const vurgulu = new Set(uyarilar.flatMap((u) => u.satirlar ?? []));
  return (
    <section className="tr-listem" aria-label="Tercih listem">
      {uyarilar.length > 0 && (
        <ul className="tr-uyarilar">
          {uyarilar.map((u) => (
            <li key={u.tur} className={`tr-uyari-${u.seviye}`}>
              {u.mesaj}
            </li>
          ))}
        </ul>
      )}
      {uyarilar.length === 0 && (
        <p className="tr-uyarilar-tamam">
          Listende bir sorun görmedik: sıralaman kontrol edilebilen tüm tercihlerde tutarlı ve listende Güvenli
          program var.
        </p>
      )}

      <ol className="tr-listem-satirlar">
        {satirlar.map((s, i) => {
          const p = s.program;
          const uygunsuz = s.uygunluk?.uygun === false;
          return (
            <li key={`${s.tur}:${s.kod}`} className={vurgulu.has(i + 1) ? "vurgulu" : ""}>
              <span className="tr-listem-no">{i + 1}</span>
              <div className="tr-listem-bilgi">
                <strong>{p?.ad ?? "Yükleniyor…"}</strong>
                <span>
                  {p ? `${p.uni.ad} · ${p.uni.sehir}` : ""} · {s.tur} · Kod {s.kod} ·{" "}
                  <Link className="tr-net-link" href={`/hedef-net?tur=${s.tur}&kod=${s.kod}`}>
                    Kaç net lazım?
                  </Link>
                </span>
              </div>
              {uygunsuz ? (
                <span className="tr-rozet tr-rozet-uygunsuz">Şart yok</span>
              ) : s.sinif ? (
                <span className={`tr-rozet tr-sinif-${s.sinif}`}>{SINIF_ETIKET[s.sinif].ad}</span>
              ) : (
                <span className="tr-rozet tr-sinif-zor">Sıra yok</span>
              )}
              <div className="tr-listem-dugmeler">
                <button type="button" onClick={() => tasi(i, -1)} disabled={i === 0} aria-label={`${i + 1}. tercihi yukarı taşı`}>
                  ↑
                </button>
                <button
                  type="button"
                  onClick={() => tasi(i, 1)}
                  disabled={i === satirlar.length - 1}
                  aria-label={`${i + 1}. tercihi aşağı taşı`}
                >
                  ↓
                </button>
                <button type="button" onClick={() => cikar(i)} aria-label={`${i + 1}. tercihi listeden çıkar`}>
                  ✕
                </button>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="tr-listem-alt">
        <button type="button" className="tr-hesap" onClick={kopyala}>
          {kopyalandi ? "Kopyalandı ✓" : "Listeyi program kodlarıyla kopyala"}
        </button>
        <button type="button" className="tr-temizle" onClick={temizle}>
          Listeyi temizle
        </button>
      </div>
      <p className="tr-ipucu">
        Liste yalnızca bu cihazda saklanır. Tercihlerini ÖSYM&apos;nin tercih ekranına program kodlarıyla girmen
        gerekir; kopyaladığın listede her programın kodu yazar.
      </p>
    </section>
  );
}
