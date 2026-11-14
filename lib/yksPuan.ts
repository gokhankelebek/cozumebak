// ─────────────────────────────────────────────────────────────────────────────
// YKS puan hesaplama — tahmini ham ve yerleştirme puanı.
//
// ÖSYM puanı, o yılki tüm adayların ortalama ve standart sapmasına göre
// standart puanlarla hesaplar; bu yüzden sınavdan önce kesin puan bilinemez.
// Burada yaygın kabul gören doğrusal yaklaşım kullanılıyor: ÖSYM'nin
// kılavuzda yayımladığı test ağırlıkları (%) net başına katsayıya çevrilir:
//
//   katsayı = 400 × ağırlık ÷ soru sayısı      (her puan türünde toplam 400)
//   ham puan = 100 + Σ katsayı × net           (aralık 100–500)
//   yerleştirme puanı = ham + OBP × 0,12 (önceki yıl yerleşenlerde 0,06)
//
// Ağırlıkları her yıl yeni kılavuz çıkınca kontrol et (KILAVUZ_YILI).
// ─────────────────────────────────────────────────────────────────────────────

export const KILAVUZ_YILI = 2026;

export type TestKey =
  | "tyt-turkce"
  | "tyt-sosyal"
  | "tyt-matematik"
  | "tyt-fen"
  | "ayt-matematik"
  | "ayt-fizik"
  | "ayt-kimya"
  | "ayt-biyoloji"
  | "ayt-edebiyat"
  | "ayt-tarih1"
  | "ayt-cografya1"
  | "ayt-tarih2"
  | "ayt-cografya2"
  | "ayt-felsefe"
  | "ayt-din"
  | "ydt";

export type Oturum = "TYT" | "AYT" | "YDT";

export interface Test {
  key: TestKey;
  label: string;
  oturum: Oturum;
  soru: number;
  /** AYT'de testin ait olduğu kitapçık bölümü (ekranda gruplamak için). */
  grup?: string;
}

export const TESTS: Test[] = [
  { key: "tyt-turkce", label: "Türkçe", oturum: "TYT", soru: 40 },
  { key: "tyt-sosyal", label: "Sosyal Bilimler", oturum: "TYT", soru: 20 },
  { key: "tyt-matematik", label: "Temel Matematik", oturum: "TYT", soru: 40 },
  { key: "tyt-fen", label: "Fen Bilimleri", oturum: "TYT", soru: 20 },
  { key: "ayt-matematik", label: "Matematik", oturum: "AYT", soru: 40, grup: "Matematik" },
  { key: "ayt-fizik", label: "Fizik", oturum: "AYT", soru: 14, grup: "Fen Bilimleri" },
  { key: "ayt-kimya", label: "Kimya", oturum: "AYT", soru: 13, grup: "Fen Bilimleri" },
  { key: "ayt-biyoloji", label: "Biyoloji", oturum: "AYT", soru: 13, grup: "Fen Bilimleri" },
  { key: "ayt-edebiyat", label: "Türk Dili ve Edebiyatı", oturum: "AYT", soru: 24, grup: "Edebiyat–Sosyal Bilimler-1" },
  { key: "ayt-tarih1", label: "Tarih-1", oturum: "AYT", soru: 10, grup: "Edebiyat–Sosyal Bilimler-1" },
  { key: "ayt-cografya1", label: "Coğrafya-1", oturum: "AYT", soru: 6, grup: "Edebiyat–Sosyal Bilimler-1" },
  { key: "ayt-tarih2", label: "Tarih-2", oturum: "AYT", soru: 11, grup: "Sosyal Bilimler-2" },
  { key: "ayt-cografya2", label: "Coğrafya-2", oturum: "AYT", soru: 11, grup: "Sosyal Bilimler-2" },
  { key: "ayt-felsefe", label: "Felsefe Grubu", oturum: "AYT", soru: 12, grup: "Sosyal Bilimler-2" },
  { key: "ayt-din", label: "Din Kültürü / Ek Felsefe", oturum: "AYT", soru: 6, grup: "Sosyal Bilimler-2" },
  { key: "ydt", label: "Yabancı Dil Testi", oturum: "YDT", soru: 80 },
];

const TEST_BY_KEY = Object.fromEntries(TESTS.map((t) => [t.key, t])) as Record<TestKey, Test>;

export type PuanTuru = "TYT" | "SAY" | "EA" | "SÖZ" | "DİL";

/** TYT'nin bir lisans puan türüne katkısı: toplamın %40'ı, TYT içi oranlar korunur. */
const TYT_PAYI: Partial<Record<TestKey, number>> = {
  "tyt-turkce": 13.2,
  "tyt-sosyal": 6.8,
  "tyt-matematik": 13.2,
  "tyt-fen": 6.8,
};

/** ÖSYM test ağırlıkları (%) — her puan türünde toplam 100. */
export const AGIRLIK: Record<PuanTuru, Partial<Record<TestKey, number>>> = {
  TYT: { "tyt-turkce": 33, "tyt-sosyal": 17, "tyt-matematik": 33, "tyt-fen": 17 },
  SAY: { ...TYT_PAYI, "ayt-matematik": 30, "ayt-fizik": 10, "ayt-kimya": 10, "ayt-biyoloji": 10 },
  EA: { ...TYT_PAYI, "ayt-matematik": 30, "ayt-edebiyat": 18, "ayt-tarih1": 7, "ayt-cografya1": 5 },
  SÖZ: {
    ...TYT_PAYI,
    "ayt-edebiyat": 18,
    "ayt-tarih1": 7,
    "ayt-cografya1": 5,
    "ayt-tarih2": 8,
    "ayt-cografya2": 8,
    "ayt-felsefe": 9,
    "ayt-din": 5,
  },
  DİL: { ...TYT_PAYI, ydt: 60 },
};

export const PUAN_TURLERI: { key: PuanTuru; label: string; aciklama: string }[] = [
  { key: "TYT", label: "TYT", aciklama: "Ön lisans programları" },
  { key: "SAY", label: "Sayısal", aciklama: "Mühendislik, tıp, fen bilimleri" },
  { key: "EA", label: "Eşit Ağırlık", aciklama: "Hukuk, işletme, psikoloji" },
  { key: "SÖZ", label: "Sözel", aciklama: "Tarih, edebiyat, öğretmenlik" },
  { key: "DİL", label: "Dil", aciklama: "Dil ve çeviri programları" },
];

/** Net başına puan: 400 × ağırlık ÷ soru sayısı. */
export function katsayi(tur: PuanTuru, test: TestKey): number {
  const w = AGIRLIK[tur][test];
  return w ? (400 * (w / 100)) / TEST_BY_KEY[test].soru : 0;
}

export interface Cevap {
  dogru: number;
  yanlis: number;
}

export type Cevaplar = Partial<Record<TestKey, Cevap>>;

/** Doğru − Yanlış ÷ 4, testin soru sayısıyla sınırlı ve negatif olamaz. */
export function net(test: TestKey, c: Cevap | undefined): number {
  if (!c) return 0;
  const soru = TEST_BY_KEY[test].soru;
  const d = clampInt(c.dogru, 0, soru);
  const y = clampInt(c.yanlis, 0, soru - d);
  return Math.max(0, d - y / 4);
}

export function clampInt(v: number, min: number, max: number): number {
  if (!Number.isFinite(v)) return min;
  return Math.min(max, Math.max(min, Math.floor(v)));
}

export interface PuanSonucu {
  tur: PuanTuru;
  /** null: ÖSYM'nin 0,5 net şartı sağlanmadığı için puan hesaplanmaz. */
  ham: number | null;
  yerlestirme: number | null;
  /** Hesaplanmadıysa nedeni. */
  neden?: string;
}

/** OBP = diploma notu × 5 (50–100 → 250–500). */
export function obp(diplomaNotu: number): number {
  const n = Number.isFinite(diplomaNotu) ? Math.min(100, Math.max(50, diplomaNotu)) : 50;
  return n * 5;
}

export function obpCarpani(oncekiYilYerlesti: boolean): number {
  return oncekiYilYerlesti ? 0.06 : 0.12;
}

const ESIK = 0.5;

/**
 * Tahmini ham ve yerleştirme puanı. ÖSYM kuralı: TYT puanı için Türkçe veya
 * Temel Matematik'ten en az 0,5 net; lisans puan türleri için TYT puanının
 * hesaplanmış olması ve o türün AYT/YDT testlerinden en az birinde 0,5 net.
 * (2022'den beri sabit 150/180 puan barajı yok.)
 */
export function hesapla(
  cevaplar: Cevaplar,
  diplomaNotu: number | null,
  oncekiYilYerlesti: boolean,
): PuanSonucu[] {
  const nets = Object.fromEntries(TESTS.map((t) => [t.key, net(t.key, cevaplar[t.key])])) as Record<
    TestKey,
    number
  >;
  const tytVar = nets["tyt-turkce"] >= ESIK || nets["tyt-matematik"] >= ESIK;
  const obpKatki = diplomaNotu == null ? 0 : obp(diplomaNotu) * obpCarpani(oncekiYilYerlesti);

  return PUAN_TURLERI.map(({ key: tur }) => {
    if (!tytVar) {
      return {
        tur,
        ham: null,
        yerlestirme: null,
        neden: "TYT Türkçe veya Temel Matematik'ten en az 0,5 net gerekir.",
      };
    }
    if (tur !== "TYT") {
      const kendiTestleri = (Object.keys(AGIRLIK[tur]) as TestKey[]).filter(
        (k) => TEST_BY_KEY[k].oturum !== "TYT",
      );
      if (!kendiTestleri.some((k) => nets[k] >= ESIK)) {
        return {
          tur,
          ham: null,
          yerlestirme: null,
          neden:
            tur === "DİL"
              ? "YDT'den en az 0,5 net gerekir."
              : "Bu puan türünün AYT testlerinden en az birinde 0,5 net gerekir.",
        };
      }
    }
    let ham = 100;
    for (const k of Object.keys(AGIRLIK[tur]) as TestKey[]) {
      ham += katsayi(tur, k) * nets[k];
    }
    return { tur, ham, yerlestirme: ham + obpKatki };
  });
}

/** "Bu testte +n net kaç puan eder?" — öğrenciye en verimli dersi göstermek için. */
export function netDegeri(tur: PuanTuru, test: TestKey, n = 1): number {
  return katsayi(tur, test) * n;
}

export function testBilgisi(key: TestKey): Test {
  return TEST_BY_KEY[key];
}
