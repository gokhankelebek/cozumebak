// ─────────────────────────────────────────────────────────────────────────────
// YKS sıralama tahmini — ÖSYM'nin yayımladığı yığınsal puan dağılımından.
//
// Kaynak: ÖSYM, "2026 YKS Sayısal Bilgiler", s. 12–13
//   https://cdn.osym.gov.tr/pdfdokuman/2026/YKS/SB/sayisal_ykdd21072026.pdf
// Her satır: "bu puan ve üstünü alan aday sayısı". Bir adayın başarı sırası
// yaklaşık olarak kendi puanı ve üstündeki aday sayısıdır; satır aralarında
// logaritmik ara değer kullanılır (üst puanlarda aday sayısı üstel artar).
//
// Yeni yılın verisi çıkınca (genelde Temmuz sonu) iki tabloyu ve VERI_YILI'nı
// güncelle.
// ─────────────────────────────────────────────────────────────────────────────

import type { PuanTuru } from "@/lib/yksPuan";

export const VERI_YILI = 2026;
export const KAYNAK_URL = "https://cdn.osym.gov.tr/pdfdokuman/2026/YKS/SB/sayisal_ykdd21072026.pdf";

type Satir = [puan: number, TYT: number, SAY: number, SÖZ: number, EA: number, DİL: number];

const SUTUN: Record<PuanTuru, number> = { TYT: 1, SAY: 2, SÖZ: 3, EA: 4, DİL: 5 };

/** s. 13 — Yerleştirme puanları (OBP eklenmiş). Başarı sırası buna göre belirlenir. */
const YERLESTIRME: Satir[] = [
  [550, 112, 154, 4, 12, 14],
  [530, 2045, 3500, 14, 98, 231],
  [510, 8638, 12887, 69, 394, 942],
  [490, 22600, 27402, 221, 1118, 2252],
  [470, 45313, 44919, 606, 2482, 4241],
  [450, 76021, 63669, 1566, 5299, 7472],
  [430, 115071, 83511, 4058, 12363, 12254],
  [410, 163211, 105112, 10184, 29700, 18566],
  [390, 225038, 129485, 22750, 58772, 26352],
  [370, 305570, 157778, 45237, 97839, 34585],
  [350, 412011, 191247, 82479, 148570, 43129],
  [330, 553526, 232317, 140496, 215631, 51784],
  [310, 735519, 282213, 223004, 307918, 60948],
  [290, 961261, 344726, 333238, 429479, 70670],
  [270, 1219171, 425443, 474443, 585271, 81109],
  [250, 1499060, 533920, 642816, 775922, 92274],
  [230, 1782951, 681176, 814264, 990764, 104127],
  [210, 2033331, 858167, 953036, 1196809, 116152],
  [190, 2166477, 1019046, 1040347, 1347025, 125789],
  [170, 2186977, 1117304, 1078859, 1412649, 131233],
  [150, 2187734, 1135198, 1085505, 1421093, 132714],
  [130, 2187742, 1135713, 1085697, 1421289, 132825],
  [115, 2187743, 1135718, 1085698, 1421290, 132826],
];

/** s. 12 — Sınav (ham) puanları, OBP'siz. Diploma notu girilmediğinde kullanılır. */
const SINAV: Satir[] = [
  [500, 5, 1, 1, 1, 5],
  [480, 822, 1453, 10, 52, 118],
  [460, 5524, 8786, 74, 307, 628],
  [440, 17050, 22370, 214, 874, 1795],
  [420, 37770, 39624, 560, 2097, 3632],
  [400, 67394, 58728, 1418, 4545, 6683],
  [380, 106404, 78806, 3936, 9486, 11576],
  [360, 155008, 100553, 10259, 23452, 18265],
  [340, 218156, 125045, 23653, 50608, 26469],
  [320, 302758, 153304, 47292, 89520, 35020],
  [300, 417935, 187034, 86560, 140784, 43883],
  [280, 577094, 228643, 148959, 210499, 52590],
  [260, 787244, 279885, 238848, 308127, 61992],
  [240, 1045340, 344536, 360487, 440752, 72025],
  [220, 1332391, 430074, 515916, 615366, 82982],
  [200, 1630698, 549793, 699304, 832251, 94735],
  [180, 1914717, 721488, 873860, 1069239, 107579],
  [160, 2125244, 923753, 998826, 1272506, 120099],
  [140, 2184873, 1078515, 1065157, 1391240, 128950],
  [120, 2187723, 1134006, 1084720, 1420558, 132443],
  [100, 2187743, 1135718, 1085698, 1421290, 132826],
];

/** Tavan: yerleştirmede en yüksek olası puan 560, sınavda 500. */
const TAVAN = { yerlestirme: 560, sinav: 500 };

/** Puanın ±bu kadar sapabileceğini varsayıp sıralamayı aralık olarak veririz. */
export const PUAN_PAYI = 5;

function adaySayisi(tablo: Satir[], tavan: number, tur: PuanTuru, puan: number): number {
  const c = SUTUN[tur];
  const toplam = tablo[tablo.length - 1][c];
  if (puan <= tablo[tablo.length - 1][0]) return toplam;

  // Satırları (puan, sayı) çifti olarak ele al; en üste (tavan, 1) ekle.
  const noktalar: [number, number][] = [[tavan, 1], ...tablo.map((r) => [r[0], r[c]] as [number, number])];
  if (puan >= tavan) return 1;

  for (let i = 0; i < noktalar.length - 1; i++) {
    const [sUst, nUst] = noktalar[i];
    const [sAlt, nAlt] = noktalar[i + 1];
    if (puan <= sUst && puan >= sAlt) {
      if (sUst === sAlt) return nAlt;
      const t = (sUst - puan) / (sUst - sAlt);
      const a = Math.log(Math.max(1, nUst));
      const b = Math.log(Math.max(1, nAlt));
      return Math.max(1, Math.round(Math.exp(a + t * (b - a))));
    }
  }
  return toplam;
}

export interface SiralamaTahmini {
  sira: number;
  /** İyimser uç (puan + PUAN_PAYI). */
  enIyi: number;
  /** Kötümser uç (puan − PUAN_PAYI). */
  enKotu: number;
  /** Bu puan türünde puanı hesaplanan toplam aday. */
  toplam: number;
  /** true: OBP'li yerleştirme dağılımı; false: OBP'siz sınav puanı dağılımı. */
  obpli: boolean;
}

/**
 * Tahmini başarı sırası. OBP girildiyse yerleştirme puanı, girilmediyse sınav
 * (ham) puanı dağılımı kullanılır; ikisi de aynı adaylar arasında sıralar.
 */
export function siralamaTahmini(tur: PuanTuru, puan: number, obpli: boolean): SiralamaTahmini {
  const tablo = obpli ? YERLESTIRME : SINAV;
  const tavan = obpli ? TAVAN.yerlestirme : TAVAN.sinav;
  const say = (p: number) => adaySayisi(tablo, tavan, tur, p);
  return {
    sira: say(puan),
    enIyi: say(puan + PUAN_PAYI),
    enKotu: say(puan - PUAN_PAYI),
    toplam: tablo[tablo.length - 1][SUTUN[tur]],
    obpli,
  };
}

/** Sahte kesinlik vermemek için sıralamayı 2–3 anlamlı basamağa yuvarlar. */
export function yuvarlaSira(n: number): number {
  if (n < 100) return n;
  if (n < 1000) return Math.round(n / 10) * 10;
  if (n < 100000) return Math.round(n / 100) * 100;
  return Math.round(n / 1000) * 1000;
}
