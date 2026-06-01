// ─────────────────────────────────────────────────────────────────────────────
// çözümebak — CURRICULUM MANIFEST (single source of truth)
//
// Index pages, breadcrumbs, prev/next, search and the sitemap all derive from
// this ONE file. To add a topic:
//   1. add a Topic entry below (status: "published" once the lesson exists),
//   2. drop app/konular/<slug>/page.mdx with <Konu slug="<slug>"/> at the top.
// Everything else (card, breadcrumb, prev/next, search, sitemap) appears
// automatically. Array order within a unit defines the lesson sequence.
// ─────────────────────────────────────────────────────────────────────────────

export type Track = "9" | "10" | "11" | "12" | "tyt" | "ayt";
export type Difficulty = "Kolay" | "Orta" | "Zor";
export type Status = "published" | "soon";

export interface Topic {
  slug: string; // unique site-wide → /konular/<slug>
  title: string;
  track: Track;
  unit: string; // references Unit.slug
  summary?: string; // 1-line; used in cards + search + meta fallback
  minutes?: number; // estimated reading time
  difficulty?: Difficulty;
  questionCount?: number;
  status: Status; // "published" = has MDX; "soon" = stub page
  keywords?: string[]; // extra search terms / synonyms
}

export interface Unit {
  slug: string; // unique site-wide (anchor id on track pages)
  title: string;
  track: Track;
  order: number;
}

export interface TrackMeta {
  key: Track;
  label: string; // "12. Sınıf" / "AYT Matematik"
  shortLabel: string; // "12" / "AYT" → ccard-badge
  kind: "grade" | "exam";
  route: string; // "/12-sinif" | "/ayt"
  blurb: string;
  order: number;
}

// ── Tracks ───────────────────────────────────────────────────────────────────

export const TRACKS: TrackMeta[] = [
  {
    key: "9",
    label: "9. Sınıf",
    shortLabel: "9",
    kind: "grade",
    route: "/9-sinif",
    blurb:
      "Lise matematiğinin temeli: kümeler, gerçek sayılar, denklem ve eşitsizlikler, üçgenler ve fonksiyona giriş.",
    order: 1,
  },
  {
    key: "10",
    label: "10. Sınıf",
    shortLabel: "10",
    kind: "grade",
    route: "/10-sinif",
    blurb:
      "Sayma ve olasılık, fonksiyonlar, polinomlar, ikinci dereceden denklemler ve dörtgenlerle geometri.",
    order: 2,
  },
  {
    key: "11",
    label: "11. Sınıf",
    shortLabel: "11",
    kind: "grade",
    route: "/11-sinif",
    blurb:
      "Trigonometri, analitik geometri, fonksiyonlarda işlemler, çember ve daire ile katı cisimler.",
    order: 3,
  },
  {
    key: "12",
    label: "12. Sınıf",
    shortLabel: "12",
    kind: "grade",
    route: "/12-sinif",
    blurb:
      "Üstel ve logaritmik fonksiyonlar, diziler, türev ve integral — analizin tam temeli.",
    order: 4,
  },
  {
    key: "tyt",
    label: "TYT Matematik",
    shortLabel: "TYT",
    kind: "exam",
    route: "/tyt",
    blurb:
      "Temel Yeterlilik Testi matematiği: temel kavramlardan problemlere, sınavın tüm konu başlıkları.",
    order: 5,
  },
  {
    key: "ayt",
    label: "AYT Matematik",
    shortLabel: "AYT",
    kind: "exam",
    route: "/ayt",
    blurb:
      "Alan Yeterlilik Testi ileri matematiği: limit, türev, integral, trigonometri ve logaritma.",
    order: 6,
  },
];

// ── Units ────────────────────────────────────────────────────────────────────

export const UNITS: Unit[] = [
  // 9. Sınıf
  { slug: "kumeler-9", title: "Kümeler", track: "9", order: 1 },
  { slug: "denklem-esitsizlik-9", title: "Denklem ve Eşitsizlikler", track: "9", order: 2 },
  { slug: "ucgenler-9", title: "Üçgenler", track: "9", order: 3 },
  { slug: "fonksiyonlar-9", title: "Fonksiyonlar", track: "9", order: 4 },
  { slug: "olasilik-9", title: "Olasılık", track: "9", order: 5 },
  // 10. Sınıf
  { slug: "sayma-olasilik-10", title: "Sayma ve Olasılık", track: "10", order: 1 },
  { slug: "fonksiyonlar-10", title: "Fonksiyonlar", track: "10", order: 2 },
  { slug: "polinomlar-10", title: "Polinomlar", track: "10", order: 3 },
  { slug: "ikinci-derece-10", title: "İkinci Dereceden Denklemler", track: "10", order: 4 },
  { slug: "dortgenler-10", title: "Dörtgenler ve Çokgenler", track: "10", order: 5 },
  { slug: "analitik-10", title: "Doğrunun Analitik İncelenmesi", track: "10", order: 6 },
  // 11. Sınıf
  { slug: "trigonometri-11", title: "Trigonometri", track: "11", order: 1 },
  { slug: "analitik-11", title: "Analitik Geometri", track: "11", order: 2 },
  { slug: "fonksiyonlarda-islemler-11", title: "Fonksiyonlarda İşlemler", track: "11", order: 3 },
  { slug: "denklem-esitsizlik-11", title: "Denklem ve Eşitsizlik Sistemleri", track: "11", order: 4 },
  { slug: "cember-daire-11", title: "Çember ve Daire", track: "11", order: 5 },
  { slug: "katı-cisimler-11", title: "Uzay Geometri (Katı Cisimler)", track: "11", order: 6 },
  // 12. Sınıf
  { slug: "ustel-logaritma-12", title: "Üstel ve Logaritmik Fonksiyonlar", track: "12", order: 1 },
  { slug: "diziler-12", title: "Diziler", track: "12", order: 2 },
  { slug: "trigonometri-12", title: "Trigonometri", track: "12", order: 3 },
  { slug: "turev-12", title: "Türev", track: "12", order: 4 },
  { slug: "integral-12", title: "İntegral", track: "12", order: 5 },
  // TYT
  { slug: "temel-kavramlar-tyt", title: "Temel Kavramlar", track: "tyt", order: 1 },
  { slug: "sayilar-tyt", title: "Sayılar ve Bölünebilme", track: "tyt", order: 2 },
  { slug: "uslu-koklu-tyt", title: "Üslü ve Köklü İfadeler", track: "tyt", order: 3 },
  { slug: "oran-problem-tyt", title: "Oran-Orantı ve Problemler", track: "tyt", order: 4 },
  { slug: "geometri-tyt", title: "Temel Geometri", track: "tyt", order: 5 },
  // AYT
  { slug: "limit-ayt", title: "Limit ve Süreklilik", track: "ayt", order: 1 },
  { slug: "turev-ayt", title: "Türev", track: "ayt", order: 2 },
  { slug: "integral-ayt", title: "İntegral", track: "ayt", order: 3 },
  { slug: "trigonometri-ayt", title: "Trigonometri", track: "ayt", order: 4 },
  { slug: "logaritma-ayt", title: "Logaritma", track: "ayt", order: 5 },
];

// ── Topics ───────────────────────────────────────────────────────────────────
// All "soon" except the one live lesson (turevin-tanimi). The user fills these
// in over time by adding an MDX file and flipping status to "published".

export const TOPICS: Topic[] = [
  // ── 9. Sınıf · Kümeler ──
  { slug: "kumelerde-temel-kavramlar", title: "Kümelerde Temel Kavramlar", track: "9", unit: "kumeler-9", summary: "Küme, eleman, alt küme ve evrensel küme kavramları.", minutes: 5, difficulty: "Kolay", questionCount: 12, status: "soon" },
  { slug: "kumelerde-islemler", title: "Kümelerde İşlemler", track: "9", unit: "kumeler-9", summary: "Birleşim, kesişim, fark ve tümleyen işlemleri.", minutes: 6, difficulty: "Kolay", questionCount: 16, status: "soon" },
  { slug: "kume-problemleri", title: "Küme Problemleri", track: "9", unit: "kumeler-9", summary: "Venn şemasıyla iki ve üç kümeli problem çözümleri.", minutes: 7, difficulty: "Orta", questionCount: 18, status: "soon" },

  // ── 9. Sınıf · Denklem ve Eşitsizlikler ──
  { slug: "gercek-sayilar", title: "Gerçek Sayılar", track: "9", unit: "denklem-esitsizlik-9", summary: "Sayı kümeleri ve gerçek sayılar üzerinde işlemler.", minutes: 5, difficulty: "Kolay", questionCount: 14, status: "soon" },
  { slug: "birinci-derece-denklemler", title: "Birinci Dereceden Denklemler", track: "9", unit: "denklem-esitsizlik-9", summary: "Bir bilinmeyenli birinci dereceden denklem çözümleri.", minutes: 6, difficulty: "Kolay", questionCount: 20, status: "soon" },
  { slug: "birinci-derece-esitsizlikler", title: "Birinci Dereceden Eşitsizlikler", track: "9", unit: "denklem-esitsizlik-9", summary: "Eşitsizlik çözüm kümeleri ve sayı doğrusunda gösterim.", minutes: 6, difficulty: "Orta", questionCount: 16, status: "soon" },
  { slug: "mutlak-deger", title: "Mutlak Değer", track: "9", unit: "denklem-esitsizlik-9", summary: "Mutlak değerli denklem ve eşitsizliklerin çözümü.", minutes: 7, difficulty: "Orta", questionCount: 18, status: "soon", keywords: ["mutlak"] },
  { slug: "oran-oranti", title: "Oran ve Orantı", track: "9", unit: "denklem-esitsizlik-9", summary: "Doğru ve ters orantı, orantı problemleri.", minutes: 6, difficulty: "Kolay", questionCount: 15, status: "soon" },

  // ── 9. Sınıf · Üçgenler ──
  { slug: "ucgende-acilar", title: "Üçgende Açılar", track: "9", unit: "ucgenler-9", summary: "İç açı, dış açı ve açı bağıntıları.", minutes: 5, difficulty: "Kolay", questionCount: 14, status: "soon" },
  { slug: "ucgende-kenar-aci-bagintilari", title: "Üçgende Kenar-Açı Bağıntıları", track: "9", unit: "ucgenler-9", summary: "Kenar uzunlukları ile açılar arasındaki ilişki.", minutes: 6, difficulty: "Orta", questionCount: 12, status: "soon" },
  { slug: "dik-ucgen-trigonometri", title: "Dik Üçgende Trigonometri", track: "9", unit: "ucgenler-9", summary: "Pisagor, Öklid bağıntıları ve temel trigonometrik oranlar.", minutes: 8, difficulty: "Orta", questionCount: 22, status: "soon", keywords: ["pisagor", "öklid", "sinüs", "kosinüs"] },
  { slug: "ucgenin-alani", title: "Üçgenin Alanı", track: "9", unit: "ucgenler-9", summary: "Alan formülleri ve özel üçgenlerde alan.", minutes: 6, difficulty: "Orta", questionCount: 16, status: "soon" },

  // ── 9. Sınıf · Fonksiyonlar ──
  { slug: "fonksiyon-kavrami", title: "Fonksiyon Kavramı", track: "9", unit: "fonksiyonlar-9", summary: "Fonksiyon tanımı, tanım ve görüntü kümesi.", minutes: 6, difficulty: "Kolay", questionCount: 14, status: "soon" },
  { slug: "fonksiyon-cesitleri", title: "Fonksiyon Çeşitleri", track: "9", unit: "fonksiyonlar-9", summary: "Bire bir, örten, içine ve birim fonksiyonlar.", minutes: 7, difficulty: "Orta", questionCount: 16, status: "soon" },
  { slug: "fonksiyon-grafikleri", title: "Fonksiyonların Grafikleri", track: "9", unit: "fonksiyonlar-9", summary: "Grafik okuma ve temel fonksiyon grafikleri.", minutes: 7, difficulty: "Orta", questionCount: 15, status: "soon" },

  // ── 9. Sınıf · Olasılık ──
  { slug: "basit-olaylarin-olasiligi", title: "Basit Olayların Olasılığı", track: "9", unit: "olasilik-9", summary: "Örnek uzay, olay ve olasılık hesabı.", minutes: 6, difficulty: "Kolay", questionCount: 14, status: "soon" },

  // ── 10. Sınıf · Sayma ve Olasılık ──
  { slug: "siralama-secme", title: "Sıralama ve Seçme (Permütasyon-Kombinasyon)", track: "10", unit: "sayma-olasilik-10", summary: "Permütasyon, kombinasyon ve sayma yöntemleri.", minutes: 8, difficulty: "Orta", questionCount: 24, status: "soon", keywords: ["permütasyon", "kombinasyon", "faktöriyel"] },
  { slug: "binom-acilimi", title: "Binom Açılımı", track: "10", unit: "sayma-olasilik-10", summary: "Binom teoremi ve genel terim.", minutes: 7, difficulty: "Orta", questionCount: 14, status: "soon" },
  { slug: "kosullu-olasilik", title: "Koşullu Olasılık", track: "10", unit: "sayma-olasilik-10", summary: "Bağımlı-bağımsız olaylar ve koşullu olasılık.", minutes: 7, difficulty: "Zor", questionCount: 16, status: "soon" },

  // ── 10. Sınıf · Fonksiyonlar ──
  { slug: "fonksiyonlarda-islemler-10", title: "Fonksiyonlarda İşlemler", track: "10", unit: "fonksiyonlar-10", summary: "Toplama, çıkarma, çarpma ve bölme işlemleri.", minutes: 6, difficulty: "Orta", questionCount: 14, status: "soon" },
  { slug: "bileske-fonksiyon", title: "Bileşke Fonksiyon", track: "10", unit: "fonksiyonlar-10", summary: "İki fonksiyonun bileşkesi ve özellikleri.", minutes: 7, difficulty: "Orta", questionCount: 18, status: "soon" },
  { slug: "ters-fonksiyon", title: "Ters Fonksiyon", track: "10", unit: "fonksiyonlar-10", summary: "Bir fonksiyonun tersi ve grafik simetrisi.", minutes: 7, difficulty: "Orta", questionCount: 16, status: "soon" },

  // ── 10. Sınıf · Polinomlar ──
  { slug: "polinom-kavrami", title: "Polinom Kavramı", track: "10", unit: "polinomlar-10", summary: "Polinom tanımı, derece ve katsayılar.", minutes: 5, difficulty: "Kolay", questionCount: 12, status: "soon" },
  { slug: "polinomlarda-bolme", title: "Polinomlarda Bölme ve Çarpanlara Ayırma", track: "10", unit: "polinomlar-10", summary: "Kalan, bölüm ve çarpanlara ayırma yöntemleri.", minutes: 8, difficulty: "Orta", questionCount: 20, status: "soon", keywords: ["çarpanlara ayırma", "kalan teoremi"] },

  // ── 10. Sınıf · İkinci Dereceden Denklemler ──
  { slug: "ikinci-derece-denklem-cozumu", title: "İkinci Dereceden Denklemlerin Çözümü", track: "10", unit: "ikinci-derece-10", summary: "Diskriminant, kök bulma ve çarpanlara ayırma.", minutes: 8, difficulty: "Orta", questionCount: 22, status: "soon", keywords: ["diskriminant", "delta"] },
  { slug: "kokler-katsayilar", title: "Kökler ve Katsayılar İlişkisi", track: "10", unit: "ikinci-derece-10", summary: "Kökler toplamı, çarpımı ve simetrik ifadeler.", minutes: 6, difficulty: "Orta", questionCount: 16, status: "soon" },
  { slug: "parabol", title: "Parabol", track: "10", unit: "ikinci-derece-10", summary: "İkinci derece fonksiyonun grafiği, tepe noktası ve eksen kesişimleri.", minutes: 8, difficulty: "Orta", questionCount: 20, status: "soon", keywords: ["tepe noktası", "parabol"] },

  // ── 10. Sınıf · Dörtgenler ──
  { slug: "dortgenler-cokgenler", title: "Çokgenler ve Dörtgenler", track: "10", unit: "dortgenler-10", summary: "Çokgenlerde açı ve dörtgen çeşitleri.", minutes: 6, difficulty: "Orta", questionCount: 14, status: "soon" },
  { slug: "ozel-dortgenler", title: "Özel Dörtgenler", track: "10", unit: "dortgenler-10", summary: "Paralelkenar, dikdörtgen, eşkenar dörtgen, yamuk.", minutes: 8, difficulty: "Orta", questionCount: 22, status: "soon" },

  // ── 10. Sınıf · Analitik ──
  { slug: "dogrunun-analitik-incelenmesi", title: "Doğrunun Analitik İncelenmesi", track: "10", unit: "analitik-10", summary: "Eğim, doğru denklemi ve iki doğrunun durumu.", minutes: 8, difficulty: "Orta", questionCount: 20, status: "soon", keywords: ["eğim", "doğru denklemi"] },

  // ── 11. Sınıf · Trigonometri ──
  { slug: "yonlu-acilar", title: "Yönlü Açılar ve Birim Çember", track: "11", unit: "trigonometri-11", summary: "Radyan-derece dönüşümü ve birim çember.", minutes: 7, difficulty: "Orta", questionCount: 16, status: "soon", keywords: ["radyan", "birim çember"] },
  { slug: "trigonometrik-fonksiyonlar", title: "Trigonometrik Fonksiyonlar", track: "11", unit: "trigonometri-11", summary: "Sinüs, kosinüs, tanjant fonksiyonları ve grafikleri.", minutes: 9, difficulty: "Orta", questionCount: 24, status: "soon" },
  { slug: "toplam-fark-formulleri", title: "Toplam-Fark ve İki Kat Açı Formülleri", track: "11", unit: "trigonometri-11", summary: "Trigonometrik toplam, fark ve yarım açı formülleri.", minutes: 9, difficulty: "Zor", questionCount: 20, status: "soon" },
  { slug: "trigonometrik-denklemler", title: "Trigonometrik Denklemler", track: "11", unit: "trigonometri-11", summary: "Temel trigonometrik denklemlerin çözüm kümeleri.", minutes: 8, difficulty: "Zor", questionCount: 18, status: "soon" },

  // ── 11. Sınıf · Analitik Geometri ──
  { slug: "iki-nokta-arasi-uzaklik", title: "İki Nokta Arası Uzaklık ve Doğru", track: "11", unit: "analitik-11", summary: "Uzaklık formülü, orta nokta ve doğru denklemleri.", minutes: 7, difficulty: "Orta", questionCount: 16, status: "soon" },
  { slug: "cemberin-analitik-incelenmesi", title: "Çemberin Analitik İncelenmesi", track: "11", unit: "analitik-11", summary: "Çember denklemi, merkez ve yarıçap.", minutes: 8, difficulty: "Orta", questionCount: 18, status: "soon" },

  // ── 11. Sınıf · Fonksiyonlarda İşlemler ──
  { slug: "ikinci-derece-fonksiyonlar", title: "İkinci Dereceden Fonksiyonlar ve Grafikler", track: "11", unit: "fonksiyonlarda-islemler-11", summary: "Parabol grafikleri ve dönüşümler.", minutes: 8, difficulty: "Orta", questionCount: 18, status: "soon" },
  { slug: "fonksiyonlarin-donusumleri", title: "Fonksiyonların Dönüşümleri", track: "11", unit: "fonksiyonlarda-islemler-11", summary: "Öteleme, yansıma ve grafik dönüşümleri.", minutes: 7, difficulty: "Orta", questionCount: 14, status: "soon" },

  // ── 11. Sınıf · Çember ve Daire ──
  { slug: "cemberde-acilar", title: "Çemberde Açılar", track: "11", unit: "cember-daire-11", summary: "Merkez, çevre ve teğet-kiriş açıları.", minutes: 8, difficulty: "Orta", questionCount: 20, status: "soon" },
  { slug: "dairede-alan-cevre", title: "Dairede Alan ve Çevre", track: "11", unit: "cember-daire-11", summary: "Daire dilimi, daire kesmesi alan ve yay uzunluğu.", minutes: 6, difficulty: "Orta", questionCount: 14, status: "soon" },

  // ── 12. Sınıf · Üstel ve Logaritmik ──
  { slug: "ustel-fonksiyon", title: "Üstel Fonksiyon", track: "12", unit: "ustel-logaritma-12", summary: "Üstel fonksiyon, grafiği ve üstel denklemler.", minutes: 7, difficulty: "Orta", questionCount: 16, status: "soon" },
  { slug: "logaritma-fonksiyonu", title: "Logaritma Fonksiyonu", track: "12", unit: "ustel-logaritma-12", summary: "Logaritma tanımı, özellikleri ve grafiği.", minutes: 8, difficulty: "Orta", questionCount: 20, status: "soon", keywords: ["log", "ln", "logaritma"] },
  { slug: "logaritmali-denklemler", title: "Logaritmik Denklem ve Eşitsizlikler", track: "12", unit: "ustel-logaritma-12", summary: "Logaritmalı denklem ve eşitsizlik çözümleri.", minutes: 8, difficulty: "Zor", questionCount: 18, status: "soon" },

  // ── 12. Sınıf · Diziler ──
  { slug: "dizi-kavrami", title: "Dizi Kavramı", track: "12", unit: "diziler-12", summary: "Dizi tanımı, genel terim ve dizi çeşitleri.", minutes: 6, difficulty: "Kolay", questionCount: 12, status: "soon" },
  { slug: "aritmetik-dizi", title: "Aritmetik Dizi", track: "12", unit: "diziler-12", summary: "Ortak fark, genel terim ve toplam formülü.", minutes: 7, difficulty: "Orta", questionCount: 18, status: "soon" },
  { slug: "geometrik-dizi", title: "Geometrik Dizi", track: "12", unit: "diziler-12", summary: "Ortak çarpan, genel terim ve toplam.", minutes: 7, difficulty: "Orta", questionCount: 18, status: "soon" },

  // ── 12. Sınıf · Türev ──
  { slug: "turevde-uygulamalar", title: "Türevin Uygulamaları", track: "12", unit: "turev-12", summary: "Artan-azalan, ekstremum ve optimizasyon problemleri.", minutes: 9, difficulty: "Zor", questionCount: 24, status: "soon", keywords: ["ekstremum", "maksimum", "minimum", "optimizasyon"] },

  // ── 12. Sınıf · İntegral ──
  { slug: "belirsiz-integral", title: "Belirsiz İntegral", track: "12", unit: "integral-12", summary: "Ters türev, temel integral kuralları.", minutes: 8, difficulty: "Orta", questionCount: 20, status: "soon" },
  { slug: "belirli-integral", title: "Belirli İntegral ve Alan", track: "12", unit: "integral-12", summary: "Belirli integral, alan ve hacim hesabı.", minutes: 9, difficulty: "Zor", questionCount: 22, status: "soon" },

  // ── TYT · Temel Kavramlar ──
  { slug: "temel-kavramlar", title: "Sayı Kümeleri ve Sayı Çeşitleri", track: "tyt", unit: "temel-kavramlar-tyt", summary: "Doğal, tam, rasyonel, irrasyonel ve gerçek sayılar; tek-çift, asal ve aralarında asal sayılar.", minutes: 8, difficulty: "Kolay", questionCount: 22, status: "published", keywords: ["sayı kümeleri", "doğal sayılar", "rasyonel", "asal sayı", "tek çift", "gerçek sayılar"] },
  { slug: "tek-cift-sayilar", title: "Tek ve Çift Sayılar", track: "tyt", unit: "temel-kavramlar-tyt", summary: "Tek-çift sayıların toplama, çıkarma, çarpma ve üs alma kuralları; ifadelerin tek-çift analizi.", minutes: 7, difficulty: "Kolay", questionCount: 20, status: "published", keywords: ["tek sayı", "çift sayı", "tek çift kuralları", "parite"] },
  { slug: "ardisik-sayilar", title: "Ardışık Sayılar", track: "tyt", unit: "temel-kavramlar-tyt", summary: "Ardışık tam, tek ve çift sayılar; ardışık sayıların toplamı ve ortalaması.", minutes: 8, difficulty: "Orta", questionCount: 22, status: "published", keywords: ["ardışık sayılar", "ardışık toplam", "ardışık çift", "ortalama"] },
  { slug: "sayi-basamaklari", title: "Sayı Basamakları ve Çözümleme", track: "tyt", unit: "temel-kavramlar-tyt", summary: "Rakam ve basamak kavramı, basamak değeri–sayı değeri, sayıların çözümlenmesi (10a+b).", minutes: 8, difficulty: "Orta", questionCount: 22, status: "published", keywords: ["basamak", "sayı çözümleme", "basamak değeri", "rakam", "iki basamaklı sayı"] },
  { slug: "bolme-bolunebilme", title: "Bölme ve Bölünebilme Kuralları", track: "tyt", unit: "sayilar-tyt", summary: "Bölme algoritması (kalanlı bölme) ve 2, 3, 4, 5, 6, 8, 9, 10, 11 ile bölünebilme kuralları.", minutes: 9, difficulty: "Orta", questionCount: 26, status: "published", keywords: ["bölünebilme", "bölme", "kalan", "bölünebilme kuralları"] },
  { slug: "asal-carpanlar-bolen-sayisi", title: "Asal Çarpanlara Ayırma ve Bölen Sayısı", track: "tyt", unit: "sayilar-tyt", summary: "Bir sayıyı asal çarpanlarına ayırma ve pozitif bölen (tam bölen) sayısının bulunması.", minutes: 8, difficulty: "Orta", questionCount: 20, status: "published", keywords: ["asal çarpan", "bölen sayısı", "çarpanlara ayırma", "pozitif bölen"] },
  { slug: "ebob-ekok", title: "EBOB ve EKOK", track: "tyt", unit: "sayilar-tyt", summary: "En büyük ortak bölen (EBOB), en küçük ortak kat (EKOK), EBOB·EKOK ilişkisi ve uygulama problemleri.", minutes: 10, difficulty: "Orta", questionCount: 24, status: "published", keywords: ["ebob", "ekok", "ortak bölen", "ortak kat"] },
  { slug: "rasyonel-sayilar", title: "Rasyonel Sayılar", track: "tyt", unit: "sayilar-tyt", summary: "Kesir çeşitleri, kesirlerde dört işlem, sıralama ve devirli ondalık gösterimin kesre çevrilmesi.", minutes: 9, difficulty: "Orta", questionCount: 22, status: "published", keywords: ["rasyonel sayılar", "kesir", "ondalık", "devirli ondalık", "kesir sıralama"] },

  // ── TYT · Üslü-Köklü ──
  { slug: "uslu-ifadeler", title: "Üslü İfadeler", track: "tyt", unit: "uslu-koklu-tyt", summary: "Üs kuralları (çarpma, bölme, üssün üssü), negatif ve sıfır üs, 10'un kuvvetleri ve işaret kuralları.", minutes: 9, difficulty: "Orta", questionCount: 26, status: "published", keywords: ["üslü sayılar", "üs kuralları", "negatif üs", "sıfır üs", "10 kuvvetleri"] },
  { slug: "uslu-denklemler", title: "Üslü Denklemler", track: "tyt", unit: "uslu-koklu-tyt", summary: "Tabanları eşitleyerek üslü denklem çözme ve ortak çarpan paranteze alma teknikleri.", minutes: 8, difficulty: "Orta", questionCount: 20, status: "published", keywords: ["üslü denklem", "taban eşitleme", "ortak çarpan", "denklem"] },
  { slug: "koklu-ifadeler", title: "Köklü İfadeler", track: "tyt", unit: "uslu-koklu-tyt", summary: "Kök kuralları, üs–kök ilişkisi, kök dışına çıkarma ve köklü ifadelerde dört işlem.", minutes: 9, difficulty: "Orta", questionCount: 24, status: "published", keywords: ["köklü sayılar", "kök kuralları", "kök dışına çıkarma", "karekök"] },
  { slug: "paydayi-rasyonel-yapma", title: "Paydayı Rasyonel Yapma", track: "tyt", unit: "uslu-koklu-tyt", summary: "Tek terimli ve eşlenikli paydalarda kökü paydadan kaldırma (rasyonelleştirme).", minutes: 7, difficulty: "Orta", questionCount: 18, status: "published", keywords: ["paydayı rasyonel yapma", "eşlenik", "rasyonelleştirme", "kök"] },

  // ── TYT · Problemler ──
  { slug: "oran-oranti-tyt", title: "Oran ve Orantı", track: "tyt", unit: "oran-problem-tyt", summary: "Oran kavramı, içler-dışlar çarpımı, doğru orantı ve ters orantı ile orantı problemleri.", minutes: 8, difficulty: "Orta", questionCount: 22, status: "published", keywords: ["oran", "orantı", "doğru orantı", "ters orantı", "içler dışlar"] },
  { slug: "sayi-problemleri", title: "Sayı ve Kesir Problemleri", track: "tyt", unit: "oran-problem-tyt", summary: "Bilinmeyene denklem kurarak sayı ve kesir problemlerinin çözümü.", minutes: 8, difficulty: "Orta", questionCount: 24, status: "published", keywords: ["sayı problemleri", "kesir problemleri", "denklem kurma"] },
  { slug: "yas-isci-problemleri", title: "Yaş, İşçi ve Havuz Problemleri", track: "tyt", unit: "oran-problem-tyt", summary: "Yaş farkının sabitliği ve birim zamanda iş (işçi-havuz) mantığıyla problem çözme.", minutes: 9, difficulty: "Orta", questionCount: 22, status: "published", keywords: ["yaş problemleri", "işçi problemleri", "havuz problemleri", "birim iş"] },
  { slug: "yuzde-kar-zarar", title: "Yüzde, Kâr-Zarar ve Faiz Problemleri", track: "tyt", unit: "oran-problem-tyt", summary: "Yüzde hesabı, ardışık yüzde değişimi, kâr-zarar ve basit faiz problemleri.", minutes: 9, difficulty: "Orta", questionCount: 26, status: "published", keywords: ["yüzde", "kâr zarar", "faiz", "zam indirim"] },
  { slug: "karisim-problemleri", title: "Karışım Problemleri", track: "tyt", unit: "oran-problem-tyt", summary: "Karışımda madde miktarının korunumu; tuz, alkol ve asit oranı problemleri.", minutes: 8, difficulty: "Zor", questionCount: 18, status: "published", keywords: ["karışım", "tuz oranı", "alaşım", "yüzde karışım"] },
  { slug: "hareket-problemleri", title: "Hareket (Hız) Problemleri", track: "tyt", unit: "oran-problem-tyt", summary: "Yol = hız × zaman bağıntısı; karşılaşma, aynı yön ve tur problemleri.", minutes: 9, difficulty: "Zor", questionCount: 22, status: "published", keywords: ["hareket problemleri", "hız", "yol zaman", "karşılaşma"] },

  // ── TYT · Temel Geometri ──
  { slug: "acilar-dogrular", title: "Açılar ve Doğrular", track: "tyt", unit: "geometri-tyt", summary: "Açı türleri; tümler, bütünler, komşu ve ters açılar; paralel iki doğrunun bir kesenle yaptığı açılar.", minutes: 9, difficulty: "Kolay", questionCount: 22, status: "published", keywords: ["açı", "tümler açı", "bütünler açı", "ters açı", "paralel doğrular"] },
  { slug: "ucgenler-tyt", title: "Üçgende Açılar ve Kenarlar", track: "tyt", unit: "geometri-tyt", summary: "İç açılar toplamı, dış açı, üçgen eşitsizliği ve üçgen çeşitleri (ikizkenar, eşkenar).", minutes: 10, difficulty: "Orta", questionCount: 24, status: "published", keywords: ["üçgen", "iç açılar toplamı", "dış açı", "üçgen eşitsizliği", "ikizkenar"] },
  { slug: "dik-ucgen-pisagor", title: "Dik Üçgen ve Pisagor Teoremi", track: "tyt", unit: "geometri-tyt", summary: "Pisagor teoremi, özel dik üçgenler (3-4-5, 30-60-90, 45-45-90) ve Öklid bağıntıları.", minutes: 10, difficulty: "Orta", questionCount: 24, status: "published", keywords: ["pisagor", "dik üçgen", "özel üçgen", "öklid", "30 60 90"] },
  { slug: "ucgende-benzerlik-alan", title: "Üçgende Benzerlik ve Alan", track: "tyt", unit: "geometri-tyt", summary: "Benzer üçgenler, benzerlik oranı, temel orantı (Thales) ve üçgenin alan formülleri.", minutes: 10, difficulty: "Orta", questionCount: 22, status: "published", keywords: ["benzerlik", "benzer üçgen", "thales", "üçgenin alanı"] },
  { slug: "dortgenler-tyt", title: "Dörtgenler ve Çokgenler", track: "tyt", unit: "geometri-tyt", summary: "Çokgenlerde iç-dış açı toplamı; kare, dikdörtgen, paralelkenar, eşkenar dörtgen ve yamuğun özellikleri ve alanları.", minutes: 10, difficulty: "Orta", questionCount: 22, status: "published", keywords: ["dörtgen", "çokgen", "paralelkenar", "yamuk", "alan"] },
  { slug: "cember-daire-tyt", title: "Çember ve Daire", track: "tyt", unit: "geometri-tyt", summary: "Çemberde merkez ve çevre açı, teğet; dairenin alanı, çevresi, daire dilimi ve yay uzunluğu.", minutes: 9, difficulty: "Orta", questionCount: 20, status: "published", keywords: ["çember", "daire", "merkez açı", "çevre açı", "daire alanı"] },

  // ── AYT · Limit ──
  { slug: "limit-kavrami", title: "Limit Kavramı: Soldan ve Sağdan Limit", track: "ayt", unit: "limit-ayt", summary: "Sezgisel limit, soldan–sağdan limit, limitin varlığı, grafikten ve parçalı fonksiyonlarda limit okuma.", minutes: 9, difficulty: "Orta", questionCount: 20, status: "published", keywords: ["limit", "soldan limit", "sağdan limit", "parçalı fonksiyon"] },
  { slug: "limit-hesaplama", title: "Limit Hesaplama ve Belirsizlik (0/0)", track: "ayt", unit: "limit-ayt", summary: "Limit özellikleri, doğrudan yerine koyma, çarpanlara ayırma ve eşlenikle 0/0 belirsizliği, temel trigonometrik limit.", minutes: 10, difficulty: "Orta", questionCount: 26, status: "published", keywords: ["belirsizlik", "0/0", "çarpanlara ayırma", "eşlenik", "sinx/x"] },
  { slug: "sonsuzda-limit-asimptot", title: "Sonsuzda Limit ve Asimptotlar", track: "ayt", unit: "limit-ayt", summary: "x→∞ limitleri, ∞/∞ belirsizliği (derece karşılaştırması), düşey ve yatay asimptotlar.", minutes: 10, difficulty: "Zor", questionCount: 22, status: "published", keywords: ["sonsuzda limit", "asimptot", "düşey asimptot", "yatay asimptot", "sonsuz/sonsuz"] },
  { slug: "sureklilik", title: "Süreklilik", track: "ayt", unit: "limit-ayt", summary: "Bir noktada süreklilik (üç koşul), süreksizlik türleri, parçalı fonksiyonda ve aralıkta süreklilik.", minutes: 9, difficulty: "Orta", questionCount: 20, status: "published", keywords: ["süreklilik", "süreksizlik", "kaldırılabilir süreksizlik", "parçalı fonksiyon"] },

  // ── AYT · Türev (TAM PAKET — sıralı seri) ──
  { slug: "turevin-tanimi", title: "Türevin Tanımı ve Temel Kuralları", track: "ayt", unit: "turev-ayt", summary: "Türevin limit tanımı, anlık değişim, teğet eğimi, süreklilik–türevlenebilirlik ilişkisi ve temel kurallar.", minutes: 9, difficulty: "Orta", questionCount: 18, status: "published", keywords: ["türev", "eğim", "teğet", "limit tanımı", "anlık değişim"] },
  { slug: "turev-alma-kurallari", title: "Türev Alma Kuralları", track: "ayt", unit: "turev-ayt", summary: "Kuvvet, çarpım, bölüm ve zincir kuralı — adım adım, çözümlü örneklerle.", minutes: 10, difficulty: "Orta", questionCount: 26, status: "published", keywords: ["zincir kuralı", "çarpım kuralı", "bölüm kuralı", "kuvvet kuralı"] },
  { slug: "ozel-fonksiyon-turevleri", title: "Trigonometrik, Üstel ve Logaritmik Türevler", track: "ayt", unit: "turev-ayt", summary: "sin, cos, tan, cot, e^x, a^x, ln x ve log fonksiyonlarının türevleri (zincir kuralıyla).", minutes: 10, difficulty: "Orta", questionCount: 24, status: "published", keywords: ["trigonometrik türev", "üstel türev", "logaritma türevi", "sinüs türev"] },
  { slug: "ardisik-turev", title: "Ardışık (Yüksek Mertebeden) Türevler", track: "ayt", unit: "turev-ayt", summary: "İkinci, üçüncü ve n. mertebeden türevler; ardışık türevin grafik ve fizikle (hız–ivme) ilişkisi.", minutes: 7, difficulty: "Orta", questionCount: 16, status: "published", keywords: ["ikinci türev", "ardışık türev", "yüksek mertebeden", "ivme", "n. türev"] },
  { slug: "teget-normal", title: "Teğet ve Normal Doğrusu", track: "ayt", unit: "turev-ayt", summary: "Bir eğriye çizilen teğet ve normalin denklemi, açısı ve uygulamaları.", minutes: 8, difficulty: "Orta", questionCount: 22, status: "published", keywords: ["teğet", "normal", "teğet denklemi", "eğim"] },
  { slug: "artan-azalan-ekstremum", title: "Artan-Azalan Fonksiyonlar ve Yerel Ekstremum", track: "ayt", unit: "turev-ayt", summary: "Türevin işaretiyle artan/azalan aralıklar, yerel maksimum–minimum ve birinci türev testi.", minutes: 10, difficulty: "Orta", questionCount: 26, status: "published", keywords: ["artan azalan", "ekstremum", "yerel maksimum", "kritik nokta"] },
  { slug: "ikinci-turev-konkavlik", title: "İkinci Türev, Konkavlık ve Dönüm Noktaları", track: "ayt", unit: "turev-ayt", summary: "Konkavlık (bükeylik), dönüm noktası ve ikinci türev testiyle ekstremum belirleme.", minutes: 9, difficulty: "Zor", questionCount: 20, status: "published", keywords: ["konkavlık", "dönüm noktası", "ikinci türev testi", "bükey"] },
  { slug: "optimizasyon", title: "Optimizasyon (Maksimum-Minimum) Problemleri", track: "ayt", unit: "turev-ayt", summary: "Gerçek hayat maks-min problemleri: alan, hacim, maliyet ve mesafe optimizasyonu.", minutes: 11, difficulty: "Zor", questionCount: 24, status: "published", keywords: ["optimizasyon", "maksimum minimum", "en büyük hacim", "uygulama"] },
  { slug: "turev-formul-ozeti", title: "Türev Formülleri ve Sınav Taktikleri", track: "ayt", unit: "turev-ayt", summary: "Tüm türev kurallarının tek sayfalık özeti, sık yapılan hatalar ve YKS soru tipleri.", minutes: 7, difficulty: "Kolay", questionCount: 30, status: "published", keywords: ["türev formülleri", "özet", "sınav taktiği", "yks türev"] },

  // ── AYT · İntegral ──
  { slug: "integral-kavrami", title: "Belirsiz İntegral ve Temel Kurallar", track: "ayt", unit: "integral-ayt", summary: "Ters türev kavramı, integral sabiti ve temel integral kuralları (kuvvet, üstel, trigonometrik).", minutes: 9, difficulty: "Orta", questionCount: 24, status: "published", keywords: ["belirsiz integral", "ters türev", "integral kuralları", "integral sabiti"] },
  { slug: "integral-degisken-degistirme", title: "Değişken Değiştirme (Yerine Koyma) Yöntemi", track: "ayt", unit: "integral-ayt", summary: "u = g(x) dönüşümüyle bileşik fonksiyonların integrali; adım adım yerine koyma tekniği.", minutes: 9, difficulty: "Zor", questionCount: 22, status: "published", keywords: ["değişken değiştirme", "yerine koyma", "u dönüşümü", "substitution"] },
  { slug: "belirli-integral-teoremi", title: "Belirli İntegral ve Analizin Temel Teoremi", track: "ayt", unit: "integral-ayt", summary: "Belirli integral, Newton–Leibniz (Analizin Temel Teoremi) ve belirli integralin özellikleri.", minutes: 10, difficulty: "Zor", questionCount: 24, status: "published", keywords: ["belirli integral", "newton leibniz", "analizin temel teoremi", "integral özellikleri"] },
  { slug: "integralde-alan", title: "İntegral ile Alan Hesabı", track: "ayt", unit: "integral-ayt", summary: "Eğri ile eksen arası alan, eksen altı bölgeler ve iki eğri arasında kalan alanın hesabı.", minutes: 10, difficulty: "Zor", questionCount: 22, status: "published", keywords: ["integralle alan", "eğri altında alan", "iki eğri arası alan"] },

  // ── AYT · Logaritma ──
  { slug: "logaritma-ayt-konu", title: "Logaritma (AYT)", track: "ayt", unit: "logaritma-ayt", summary: "Logaritma özellikleri ve ileri logaritmik denklemler.", minutes: 8, difficulty: "Zor", questionCount: 18, status: "soon" },
];

// ── Derivation helpers (pure, no IO) ─────────────────────────────────────────

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export function getUnit(slug: string): Unit | undefined {
  return UNITS.find((u) => u.slug === slug);
}

export function trackMeta(track: Track): TrackMeta {
  const m = TRACKS.find((t) => t.key === track);
  if (!m) throw new Error(`Unknown track: ${track}`);
  return m;
}

export function topicsByTrack(track: Track): Topic[] {
  return TOPICS.filter((t) => t.track === track);
}

export function topicsByUnit(unitSlug: string): Topic[] {
  return TOPICS.filter((t) => t.unit === unitSlug);
}

export function unitsByTrack(track: Track): Unit[] {
  return UNITS.filter((u) => u.track === track).sort((a, b) => a.order - b.order);
}

export function publishedTopics(): Topic[] {
  return TOPICS.filter((t) => t.status === "published");
}

export function soonTopics(): Topic[] {
  return TOPICS.filter((t) => t.status === "soon");
}

export interface Crumb {
  label: string;
  href?: string;
}

/** Breadcrumb for a topic: Anasayfa › Track › Unit › Topic (last has no href). */
export function breadcrumb(slug: string): Crumb[] {
  const topic = getTopic(slug);
  if (!topic) return [{ label: "Anasayfa", href: "/" }];
  const tm = trackMeta(topic.track);
  const unit = getUnit(topic.unit);
  const crumbs: Crumb[] = [
    { label: "Anasayfa", href: "/" },
    { label: tm.label, href: tm.route },
  ];
  if (unit) crumbs.push({ label: unit.title, href: `${tm.route}#${unit.slug}` });
  crumbs.push({ label: topic.title });
  return crumbs;
}

/** Prev/next within the SAME unit, published-only (lessons never dead-end). */
export function siblings(slug: string): { prev?: Topic; next?: Topic } {
  const topic = getTopic(slug);
  if (!topic) return {};
  const published = topicsByUnit(topic.unit).filter((t) => t.status === "published");
  const i = published.findIndex((t) => t.slug === slug);
  if (i === -1) return {};
  return { prev: published[i - 1], next: published[i + 1] };
}

/** Aggregate stats for a track (used on homepage cards). */
export function trackStats(track: Track): { units: number; topics: number; questions: number } {
  const topics = topicsByTrack(track);
  return {
    units: unitsByTrack(track).length,
    topics: topics.length,
    questions: topics.reduce((sum, t) => sum + (t.questionCount ?? 0), 0),
  };
}
