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
  // 9. Sınıf — Türkiye Yüzyılı Maarif Modeli (2024) temaları
  { slug: "sayilar-9", title: "Sayılar", track: "9", order: 1 },
  { slug: "nicelikler-degisimler-9", title: "Nicelikler ve Değişimler", track: "9", order: 2 },
  { slug: "algoritma-bilisim-9", title: "Algoritma ve Bilişim", track: "9", order: 3 },
  { slug: "geometrik-sekiller-9", title: "Geometrik Şekiller", track: "9", order: 4 },
  { slug: "eslik-benzerlik-9", title: "Eşlik ve Benzerlik", track: "9", order: 5 },
  { slug: "istatistik-9", title: "İstatistiksel Araştırma Süreci", track: "9", order: 6 },
  { slug: "veriden-olasiliga-9", title: "Veriden Olasılığa", track: "9", order: 7 },
  // 10. Sınıf — Türkiye Yüzyılı Maarif Modeli (2024) temaları
  { slug: "sayilar-10", title: "Sayılar", track: "10", order: 1 },
  { slug: "nicelikler-degisimler-10", title: "Nicelikler ve Değişimler", track: "10", order: 2 },
  { slug: "sayma-algoritma-10", title: "Sayma, Algoritma ve Bilişim", track: "10", order: 3 },
  { slug: "geometrik-sekiller-10", title: "Geometrik Şekiller", track: "10", order: 4 },
  { slug: "analitik-inceleme-10", title: "Analitik İnceleme", track: "10", order: 5 },
  { slug: "istatistik-10", title: "İstatistiksel Araştırma Süreci", track: "10", order: 6 },
  { slug: "veriden-olasiliga-10", title: "Veriden Olasılığa", track: "10", order: 7 },
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
  { slug: "cebir-tyt", title: "Çarpanlara Ayırma, Denklem ve Eşitsizlikler", track: "tyt", order: 4 },
  { slug: "oran-problem-tyt", title: "Oran-Orantı ve Problemler", track: "tyt", order: 5 },
  { slug: "kumeler-mantik-tyt", title: "Kümeler ve Mantık", track: "tyt", order: 6 },
  { slug: "fonksiyonlar-tyt", title: "Fonksiyonlar", track: "tyt", order: 7 },
  { slug: "sayma-olasilik-tyt", title: "Sayma, Olasılık ve İstatistik", track: "tyt", order: 8 },
  { slug: "geometri-tyt", title: "Temel Geometri", track: "tyt", order: 9 },
  { slug: "analitik-kati-tyt", title: "Analitik Geometri ve Katı Cisimler", track: "tyt", order: 10 },
  // AYT
  { slug: "fonksiyonlar-ayt", title: "Fonksiyonlar", track: "ayt", order: 1 },
  { slug: "polinomlar-ayt", title: "Polinomlar", track: "ayt", order: 2 },
  { slug: "ikinci-derece-ayt", title: "İkinci Dereceden Denklemler ve Parabol", track: "ayt", order: 3 },
  { slug: "trigonometri-ayt", title: "Trigonometri", track: "ayt", order: 4 },
  { slug: "logaritma-ayt", title: "Üstel Fonksiyon ve Logaritma", track: "ayt", order: 5 },
  { slug: "diziler-ayt", title: "Diziler", track: "ayt", order: 6 },
  { slug: "limit-ayt", title: "Limit ve Süreklilik", track: "ayt", order: 7 },
  { slug: "turev-ayt", title: "Türev", track: "ayt", order: 8 },
  { slug: "integral-ayt", title: "İntegral", track: "ayt", order: 9 },
  { slug: "analitik-ayt", title: "Analitik Geometri", track: "ayt", order: 10 },
];

// ── Topics ───────────────────────────────────────────────────────────────────
// All "soon" except the one live lesson (turevin-tanimi). The user fills these
// in over time by adding an MDX file and flipping status to "published".

export const TOPICS: Topic[] = [
  // ── 9. Sınıf · Sayılar ──
  { slug: "uslu-ifadeler-9", title: "Üslü İfadeler ve Özellikleri", track: "9", unit: "sayilar-9", summary: "Üslü ifade kavramı, üs özellikleri ve işlemler.", minutes: 7, difficulty: "Kolay", questionCount: 18, status: "published", keywords: ["üs", "kuvvet"] },
  { slug: "koklu-ifadeler-9", title: "Köklü İfadeler ve Özellikleri", track: "9", unit: "sayilar-9", summary: "Kök kavramı, köklü ifadelerde işlemler ve paydayı rasyonel yapma.", minutes: 7, difficulty: "Orta", questionCount: 18, status: "published", keywords: ["kök", "radikal"] },
  { slug: "kumelerde-temel-kavramlar", title: "Kümeler ve Sayı Kümeleri", track: "9", unit: "sayilar-9", summary: "Küme kavramı ve sayı kümeleri (ℕ, ℤ, ℚ, ℝ) arasındaki ilişkiler.", minutes: 6, difficulty: "Kolay", questionCount: 15, status: "published", keywords: ["küme", "sayı kümeleri"] },
  { slug: "gercek-sayilar", title: "Gerçek Sayılarda İşlemler ve Aralıklar", track: "9", unit: "sayilar-9", summary: "Gerçek sayılarda işlem özellikleri, aralıklar ve aralıklarla işlemler.", minutes: 7, difficulty: "Orta", questionCount: 17, status: "published", keywords: ["aralık", "gerçek sayı"] },

  // ── 9. Sınıf · Nicelikler ve Değişimler ──
  { slug: "dogrusal-fonksiyonlar-9", title: "Doğrusal Fonksiyonlar", track: "9", unit: "nicelikler-degisimler-9", summary: "Doğrusal fonksiyon, eğim ve grafiğinin nitel özellikleri.", minutes: 7, difficulty: "Orta", questionCount: 17, status: "published", keywords: ["eğim", "doğrusal"] },
  { slug: "mutlak-deger-fonksiyonlari-9", title: "Mutlak Değer Fonksiyonları", track: "9", unit: "nicelikler-degisimler-9", summary: "Mutlak değer fonksiyonu, grafiği ve temel özellikleri.", minutes: 7, difficulty: "Orta", questionCount: 16, status: "published", keywords: ["mutlak değer"] },
  { slug: "birinci-derece-problemler-9", title: "Birinci Dereceden Denklem ve Eşitsizlik Problemleri", track: "9", unit: "nicelikler-degisimler-9", summary: "Doğrusal fonksiyonlarla ifade edilen denklem ve eşitsizlik problemleri.", minutes: 8, difficulty: "Orta", questionCount: 16, status: "published" },

  // ── 9. Sınıf · Algoritma ve Bilişim ──
  { slug: "algoritmik-dusunme-9", title: "Algoritmik Düşünme ve Problem Çözme", track: "9", unit: "algoritma-bilisim-9", summary: "Problemleri algoritmik yaklaşımla adım adım çözme.", minutes: 6, difficulty: "Kolay", questionCount: 16, status: "published", keywords: ["algoritma", "akış"] },
  { slug: "mantik-onermeler-9", title: "Mantık: Önermeler ve Niceleyiciler", track: "9", unit: "algoritma-bilisim-9", summary: "Önermeler, bağlaçlar ve niceleyicilerin algoritmik yapılardaki kullanımı.", minutes: 7, difficulty: "Orta", questionCount: 18, status: "published", keywords: ["önerme", "mantık", "niceleyici"] },

  // ── 9. Sınıf · Geometrik Şekiller ──
  { slug: "ucgende-acilar", title: "Üçgende Açılar", track: "9", unit: "geometrik-sekiller-9", summary: "İç açı, dış açı ve açı bağıntıları.", minutes: 5, difficulty: "Kolay", questionCount: 17, status: "published" },
  { slug: "ucgende-kenar-aci-bagintilari", title: "Üçgende Kenar-Açı Bağıntıları", track: "9", unit: "geometrik-sekiller-9", summary: "Kenar uzunlukları ile açılar arasındaki ilişki.", minutes: 6, difficulty: "Orta", questionCount: 16, status: "published" },

  // ── 9. Sınıf · Eşlik ve Benzerlik ──
  { slug: "geometrik-donusumler-9", title: "Geometrik Dönüşümler", track: "9", unit: "eslik-benzerlik-9", summary: "Öteleme, yansıma ve dönme dönüşümleri.", minutes: 7, difficulty: "Orta", questionCount: 17, status: "published", keywords: ["öteleme", "yansıma", "dönme"] },
  { slug: "ucgende-eslik-benzerlik-9", title: "Üçgenlerde Eşlik ve Benzerlik", track: "9", unit: "eslik-benzerlik-9", summary: "Eşlik ve benzerlik koşulları, benzer üçgen oluşturma.", minutes: 8, difficulty: "Orta", questionCount: 16, status: "published", keywords: ["eşlik", "benzerlik"] },
  { slug: "tales-oklid-pisagor-9", title: "Tales, Öklid ve Pisagor Teoremleri", track: "9", unit: "eslik-benzerlik-9", summary: "Tales, Öklid ve Pisagor bağıntıları ve problemleri.", minutes: 8, difficulty: "Orta", questionCount: 15, status: "published", keywords: ["tales", "öklid", "pisagor"] },

  // ── 9. Sınıf · İstatistiksel Araştırma Süreci ──
  { slug: "tek-degiskenli-veri-9", title: "Tek Değişkenli Veri Dağılımları", track: "9", unit: "istatistik-9", summary: "Tek nicel değişkenli verilerde merkezî eğilim ve yayılım ölçüleri.", minutes: 7, difficulty: "Orta", questionCount: 18, status: "published", keywords: ["ortalama", "medyan", "açıklık"] },
  { slug: "veri-yorumlama-9", title: "Veri Dağılımlarını Eleştirel Yorumlama", track: "9", unit: "istatistik-9", summary: "Hazır veri dağılımlarını eleştirel biçimde okuma ve yorumlama.", minutes: 6, difficulty: "Orta", questionCount: 15, status: "published" },

  // ── 9. Sınıf · Veriden Olasılığa ──
  { slug: "deneye-dayali-olasilik-9", title: "Deneye Dayalı Olasılık ve Tahmin", track: "9", unit: "veriden-olasiliga-9", summary: "Gözleme dayalı olasılık tahmini ve örnek uzay.", minutes: 6, difficulty: "Kolay", questionCount: 17, status: "published", keywords: ["olasılık", "örnek uzay"] },
  { slug: "olasilik-akil-yurutme-9", title: "Olasılıkta Tümevarımsal Akıl Yürütme", track: "9", unit: "veriden-olasiliga-9", summary: "Olayların olasılığı üzerine tümevarımsal çıkarım yapma.", minutes: 6, difficulty: "Orta", questionCount: 16, status: "published" },

  // ── 10. Sınıf · Sayılar ──
  { slug: "asal-carpanlar-bolenler-10", title: "Asal Çarpanlar ve Bölenler", track: "10", unit: "sayilar-10", summary: "Asal çarpanlara ayırma ve pozitif bölen sayısı.", minutes: 7, difficulty: "Orta", questionCount: 16, status: "published", keywords: ["asal çarpan", "bölen sayısı"] },
  { slug: "ebob-ekok-10", title: "EBOB ve EKOK", track: "10", unit: "sayilar-10", summary: "En büyük ortak bölen, en küçük ortak kat ve problemleri.", minutes: 7, difficulty: "Orta", questionCount: 17, status: "published", keywords: ["ebob", "ekok", "obeb", "okek"] },
  { slug: "bolunebilme-kurallari-10", title: "Bölünebilme Kuralları", track: "10", unit: "sayilar-10", summary: "2, 3, 4, 5, 8, 9, 11 ile bölünebilme ve kalan bulma.", minutes: 7, difficulty: "Orta", questionCount: 17, status: "published", keywords: ["bölünebilme", "kalan"] },

  // ── 10. Sınıf · Nicelikler ve Değişimler ──
  { slug: "karesel-fonksiyonlar-10", title: "İkinci Dereceden Fonksiyonlar ve Parabol", track: "10", unit: "nicelikler-degisimler-10", summary: "Karesel fonksiyonun grafiği, tepe noktası ve eksen kesişimleri.", minutes: 8, difficulty: "Orta", questionCount: 18, status: "published", keywords: ["parabol", "tepe noktası"] },
  { slug: "ikinci-derece-denklem-esitsizlik-10", title: "İkinci Dereceden Denklem ve Eşitsizlikler", track: "10", unit: "nicelikler-degisimler-10", summary: "Diskriminant, kök bulma ve ikinci derece eşitsizliklerin işareti.", minutes: 8, difficulty: "Orta", questionCount: 17, status: "published", keywords: ["diskriminant", "delta"] },
  { slug: "karekok-rasyonel-fonksiyon-10", title: "Karekök ve Rasyonel Fonksiyonlar", track: "10", unit: "nicelikler-degisimler-10", summary: "Karekök ve rasyonel fonksiyonların tanım kümesi, grafiği ve özellikleri.", minutes: 8, difficulty: "Orta", questionCount: 16, status: "published", keywords: ["karekök fonksiyonu", "rasyonel fonksiyon", "asimptot"] },
  { slug: "ters-fonksiyon", title: "Ters Fonksiyonlar", track: "10", unit: "nicelikler-degisimler-10", summary: "Bir fonksiyonun tersi ve grafiğin y=x doğrusuna göre simetrisi.", minutes: 7, difficulty: "Orta", questionCount: 17, status: "published", keywords: ["ters fonksiyon"] },

  // ── 10. Sınıf · Sayma, Algoritma ve Bilişim ──
  { slug: "sayma-permutasyon-10", title: "Sayma Yöntemleri ve Permütasyon", track: "10", unit: "sayma-algoritma-10", summary: "Toplama-çarpma yoluyla sayma, faktöriyel ve permütasyon.", minutes: 8, difficulty: "Orta", questionCount: 17, status: "published", keywords: ["permütasyon", "faktöriyel", "sayma"] },
  { slug: "kombinasyon-10", title: "Kombinasyon", track: "10", unit: "sayma-algoritma-10", summary: "Kombinasyon kavramı, özellikleri ve permütasyonla farkı.", minutes: 7, difficulty: "Orta", questionCount: 16, status: "published", keywords: ["kombinasyon", "seçme"] },
  { slug: "islemlerin-algoritmasi-10", title: "İşlemlerin Algoritmik Yapısı", track: "10", unit: "sayma-algoritma-10", summary: "Cebirsel ve fonksiyonel işlemlerin algoritmik biçimde ifadesi.", minutes: 6, difficulty: "Kolay", questionCount: 17, status: "published", keywords: ["algoritma"] },

  // ── 10. Sınıf · Geometrik Şekiller ──
  { slug: "dik-ucgen-trigonometri-10", title: "Dik Üçgende Trigonometrik Oranlar ve Özdeşlikler", track: "10", unit: "geometrik-sekiller-10", summary: "Sinüs, kosinüs, tanjant oranları ve temel trigonometrik özdeşlikler.", minutes: 9, difficulty: "Orta", questionCount: 15, status: "published", keywords: ["sinüs", "kosinüs", "tanjant", "trigonometri"] },
  { slug: "ucgende-yardimci-elemanlar-10", title: "Üçgende Yardımcı Elemanlar", track: "10", unit: "geometrik-sekiller-10", summary: "Açıortay, kenarortay, kenar orta dikme ve yükseklik.", minutes: 8, difficulty: "Orta", questionCount: 15, status: "published", keywords: ["açıortay", "kenarortay", "yükseklik"] },
  { slug: "ucgende-alan-10", title: "Üçgende Alan", track: "10", unit: "geometrik-sekiller-10", summary: "Taban-yükseklik, iki kenar-sinüs ve özel alan formülleri.", minutes: 8, difficulty: "Orta", questionCount: 16, status: "published", keywords: ["alan", "üçgen alanı"] },
  { slug: "sinus-kosinus-teoremi-10", title: "Sinüs ve Kosinüs Teoremleri", track: "10", unit: "geometrik-sekiller-10", summary: "Sinüs ve kosinüs teoremiyle kenar ve açı hesabı.", minutes: 8, difficulty: "Zor", questionCount: 15, status: "published", keywords: ["sinüs teoremi", "kosinüs teoremi"] },

  // ── 10. Sınıf · Analitik İnceleme ──
  { slug: "iki-nokta-uzaklik-10", title: "Koordinat Düzleminde Nokta ve İki Nokta Arası Uzaklık", track: "10", unit: "analitik-inceleme-10", summary: "Koordinat düzleminde nokta ve uzaklık formülü.", minutes: 7, difficulty: "Orta", questionCount: 15, status: "published", keywords: ["uzaklık", "koordinat"] },
  { slug: "dogruyu-oranla-bolme-10", title: "Doğru Parçasını Belli Oranda Bölme", track: "10", unit: "analitik-inceleme-10", summary: "Orta nokta ve bir doğru parçasını verilen oranda bölme.", minutes: 7, difficulty: "Orta", questionCount: 16, status: "published", keywords: ["orta nokta", "oranla bölme"] },
  { slug: "koordinatta-dogru-10", title: "Koordinat Düzleminde Doğru: Eğim ve Denklem", track: "10", unit: "analitik-inceleme-10", summary: "Eğim, doğru denklemi ve iki doğrunun durumu.", minutes: 8, difficulty: "Orta", questionCount: 17, status: "published", keywords: ["eğim", "doğru denklemi"] },

  // ── 10. Sınıf · İstatistiksel Araştırma Süreci ──
  { slug: "iki-kategorik-degisken-10", title: "İki Kategorik Değişken Arasında İlişki", track: "10", unit: "istatistik-10", summary: "İki yönlü (çapraz) tablo ile kategorik değişkenler arasındaki ilişki.", minutes: 7, difficulty: "Orta", questionCount: 16, status: "published", keywords: ["çapraz tablo", "kategorik değişken"] },
  { slug: "veri-surec-10", title: "Veri Toplama, Yorumlama ve Değerlendirme", track: "10", unit: "istatistik-10", summary: "İstatistiksel araştırma sürecinde veri toplama, bulgulara ulaşma ve değerlendirme.", minutes: 6, difficulty: "Orta", questionCount: 16, status: "published" },

  // ── 10. Sınıf · Veriden Olasılığa ──
  { slug: "kosullu-olasilik", title: "Koşullu Olasılık", track: "10", unit: "veriden-olasiliga-10", summary: "Bir olayın gerçekleştiği bilindiğinde diğer olayın olasılığı.", minutes: 8, difficulty: "Zor", questionCount: 15, status: "published", keywords: ["koşullu olasılık"] },
  { slug: "bagimli-bagimsiz-olaylar-10", title: "Bağımlı ve Bağımsız Olaylar", track: "10", unit: "veriden-olasiliga-10", summary: "Bağımlı ve bağımsız olaylarda çarpma kuralı.", minutes: 7, difficulty: "Orta", questionCount: 15, status: "published", keywords: ["bağımsız olay", "bağımlı olay"] },
  { slug: "bayes-teoremi-10", title: "Bayes Teoremi", track: "10", unit: "veriden-olasiliga-10", summary: "Koşullu olasılıkları tersine çeviren Bayes teoremi ve uygulamaları.", minutes: 8, difficulty: "Zor", questionCount: 14, status: "published", keywords: ["bayes"] },

  // ── 11. Sınıf · Trigonometri ──
  { slug: "yonlu-acilar", title: "Yönlü Açılar ve Birim Çember", track: "11", unit: "trigonometri-11", summary: "Radyan-derece dönüşümü ve birim çember.", minutes: 7, difficulty: "Orta", questionCount: 20, status: "published", keywords: ["radyan", "birim çember"] },
  { slug: "trigonometrik-fonksiyonlar", title: "Trigonometrik Fonksiyonlar", track: "11", unit: "trigonometri-11", summary: "Sinüs, kosinüs, tanjant fonksiyonları ve grafikleri.", minutes: 9, difficulty: "Orta", questionCount: 20, status: "published" },
  { slug: "toplam-fark-formulleri", title: "Toplam-Fark ve İki Kat Açı Formülleri", track: "11", unit: "trigonometri-11", summary: "Trigonometrik toplam, fark ve yarım açı formülleri.", minutes: 9, difficulty: "Zor", questionCount: 20, status: "published" },
  { slug: "trigonometrik-denklemler", title: "Trigonometrik Denklemler", track: "11", unit: "trigonometri-11", summary: "Temel trigonometrik denklemlerin çözüm kümeleri.", minutes: 8, difficulty: "Zor", questionCount: 17, status: "published" },

  // ── 11. Sınıf · Analitik Geometri ──
  { slug: "iki-nokta-arasi-uzaklik", title: "İki Nokta Arası Uzaklık ve Doğru", track: "11", unit: "analitik-11", summary: "Uzaklık formülü, orta nokta ve doğru denklemleri.", minutes: 7, difficulty: "Orta", questionCount: 22, status: "published" },
  { slug: "cemberin-analitik-incelenmesi", title: "Çemberin Analitik İncelenmesi", track: "11", unit: "analitik-11", summary: "Çember denklemi, merkez ve yarıçap.", minutes: 8, difficulty: "Orta", questionCount: 20, status: "published" },

  // ── 11. Sınıf · Fonksiyonlarda İşlemler ──
  { slug: "ikinci-derece-fonksiyonlar", title: "İkinci Dereceden Fonksiyonlar ve Grafikler", track: "11", unit: "fonksiyonlarda-islemler-11", summary: "Parabol grafikleri ve dönüşümler.", minutes: 8, difficulty: "Orta", questionCount: 18, status: "published" },
  { slug: "fonksiyonlarin-donusumleri", title: "Fonksiyonların Dönüşümleri", track: "11", unit: "fonksiyonlarda-islemler-11", summary: "Öteleme, yansıma ve grafik dönüşümleri.", minutes: 7, difficulty: "Orta", questionCount: 18, status: "published" },

  // ── 11. Sınıf · Denklem ve Eşitsizlik Sistemleri ──
  { slug: "ikinci-derece-denklem-sistemleri-11", title: "İkinci Dereceden Denklem Sistemleri", track: "11", unit: "denklem-esitsizlik-11", summary: "İkinci dereceden iki bilinmeyenli denklem sistemlerinin çözümü.", minutes: 8, difficulty: "Zor", questionCount: 17, status: "published", keywords: ["denklem sistemi"] },
  { slug: "ikinci-derece-esitsizlikler-11", title: "İkinci Dereceden Eşitsizlikler ve Sistemler", track: "11", unit: "denklem-esitsizlik-11", summary: "İkinci dereceden eşitsizlikler ve eşitsizlik sistemlerinin çözümü.", minutes: 8, difficulty: "Zor", questionCount: 19, status: "published", keywords: ["eşitsizlik sistemi", "işaret tablosu"] },

  // ── 11. Sınıf · Çember ve Daire ──
  { slug: "cemberde-acilar", title: "Çemberde Açılar", track: "11", unit: "cember-daire-11", summary: "Merkez, çevre ve teğet-kiriş açıları.", minutes: 8, difficulty: "Orta", questionCount: 21, status: "published" },
  { slug: "dairede-alan-cevre", title: "Dairede Alan ve Çevre", track: "11", unit: "cember-daire-11", summary: "Daire dilimi, daire kesmesi alan ve yay uzunluğu.", minutes: 6, difficulty: "Orta", questionCount: 20, status: "published" },

  // ── 11. Sınıf · Uzay Geometri (Katı Cisimler) ──
  { slug: "prizma-piramit-11", title: "Dik Prizma ve Piramit", track: "11", unit: "katı-cisimler-11", summary: "Dik prizma ve piramidin yüzey alanı ve hacmi.", minutes: 8, difficulty: "Orta", questionCount: 19, status: "published", keywords: ["prizma", "piramit", "hacim"] },
  { slug: "silindir-koni-kure-11", title: "Silindir, Koni ve Küre", track: "11", unit: "katı-cisimler-11", summary: "Silindir, koni ve kürenin yüzey alanı ve hacmi.", minutes: 8, difficulty: "Orta", questionCount: 20, status: "published", keywords: ["silindir", "koni", "küre", "hacim"] },

  // ── 12. Sınıf · Üstel ve Logaritmik ──
  { slug: "ustel-fonksiyon", title: "Üstel Fonksiyon", track: "12", unit: "ustel-logaritma-12", summary: "Üstel fonksiyon, grafiği ve üstel denklemler.", minutes: 7, difficulty: "Orta", questionCount: 21, status: "published" },
  { slug: "logaritma-fonksiyonu", title: "Logaritma Fonksiyonu", track: "12", unit: "ustel-logaritma-12", summary: "Logaritma tanımı, özellikleri ve grafiği.", minutes: 8, difficulty: "Orta", questionCount: 20, status: "published", keywords: ["log", "ln", "logaritma"] },
  { slug: "logaritmali-denklemler", title: "Logaritmik Denklem ve Eşitsizlikler", track: "12", unit: "ustel-logaritma-12", summary: "Logaritmalı denklem ve eşitsizlik çözümleri.", minutes: 8, difficulty: "Zor", questionCount: 22, status: "published" },

  // ── 12. Sınıf · Diziler ──
  { slug: "dizi-kavrami", title: "Dizi Kavramı", track: "12", unit: "diziler-12", summary: "Dizi tanımı, genel terim ve dizi çeşitleri.", minutes: 6, difficulty: "Kolay", questionCount: 20, status: "published" },
  { slug: "aritmetik-dizi", title: "Aritmetik Dizi", track: "12", unit: "diziler-12", summary: "Ortak fark, genel terim ve toplam formülü.", minutes: 7, difficulty: "Orta", questionCount: 19, status: "published" },
  { slug: "geometrik-dizi", title: "Geometrik Dizi", track: "12", unit: "diziler-12", summary: "Ortak çarpan, genel terim ve toplam.", minutes: 7, difficulty: "Orta", questionCount: 19, status: "published" },

  // ── 12. Sınıf · Trigonometri ──
  { slug: "yarim-aci-donusum-12", title: "Yarım Açı ve Dönüşüm Formülleri", track: "12", unit: "trigonometri-12", summary: "Yarım açı, toplam-çarpım ve çarpım-toplam dönüşüm formülleri.", minutes: 8, difficulty: "Zor", questionCount: 19, status: "published", keywords: ["yarım açı", "dönüşüm formülleri"] },
  { slug: "ters-trigonometrik-12", title: "Ters Trigonometrik Fonksiyonlar", track: "12", unit: "trigonometri-12", summary: "Arcsin, arccos, arctan fonksiyonları ve değerleri.", minutes: 7, difficulty: "Orta", questionCount: 17, status: "published", keywords: ["arcsin", "arccos", "ters trigonometrik"] },

  // ── 12. Sınıf · Türev ──
  { slug: "turevin-tanimi-12", title: "Türevin Tanımı ve Anlamı", track: "12", unit: "turev-12", summary: "Limitle türev tanımı, anlık değişim oranı ve teğetin eğimi.", minutes: 8, difficulty: "Orta", questionCount: 18, status: "published", keywords: ["türev tanımı", "anlık değişim"] },
  { slug: "turev-alma-kurallari-12", title: "Türev Alma Kuralları", track: "12", unit: "turev-12", summary: "Üs, çarpım, bölüm ve zincir kuralı ile türev alma.", minutes: 8, difficulty: "Orta", questionCount: 20, status: "published", keywords: ["türev kuralları", "zincir kuralı"] },
  { slug: "turevde-uygulamalar", title: "Türevin Uygulamaları", track: "12", unit: "turev-12", summary: "Artan-azalan, ekstremum ve optimizasyon problemleri.", minutes: 9, difficulty: "Zor", questionCount: 18, status: "published", keywords: ["ekstremum", "maksimum", "minimum", "optimizasyon"] },

  // ── 12. Sınıf · İntegral ──
  { slug: "belirsiz-integral", title: "Belirsiz İntegral", track: "12", unit: "integral-12", summary: "Ters türev, temel integral kuralları.", minutes: 8, difficulty: "Orta", questionCount: 20, status: "published" },
  { slug: "belirli-integral", title: "Belirli İntegral ve Alan", track: "12", unit: "integral-12", summary: "Belirli integral, alan ve hacim hesabı.", minutes: 9, difficulty: "Zor", questionCount: 19, status: "published" },

  // ── TYT · Temel Kavramlar ──
  { slug: "temel-kavramlar", title: "Sayı Kümeleri ve Sayı Çeşitleri", track: "tyt", unit: "temel-kavramlar-tyt", summary: "Doğal, tam, rasyonel, irrasyonel ve gerçek sayılar; tek-çift, asal ve aralarında asal sayılar.", minutes: 8, difficulty: "Kolay", questionCount: 19, status: "published", keywords: ["sayı kümeleri", "doğal sayılar", "rasyonel", "asal sayı", "tek çift", "gerçek sayılar"] },
  { slug: "tek-cift-sayilar", title: "Tek ve Çift Sayılar", track: "tyt", unit: "temel-kavramlar-tyt", summary: "Tek-çift sayıların toplama, çıkarma, çarpma ve üs alma kuralları; ifadelerin tek-çift analizi.", minutes: 7, difficulty: "Kolay", questionCount: 19, status: "published", keywords: ["tek sayı", "çift sayı", "tek çift kuralları", "parite"] },
  { slug: "ardisik-sayilar", title: "Ardışık Sayılar", track: "tyt", unit: "temel-kavramlar-tyt", summary: "Ardışık tam, tek ve çift sayılar; ardışık sayıların toplamı ve ortalaması.", minutes: 8, difficulty: "Orta", questionCount: 19, status: "published", keywords: ["ardışık sayılar", "ardışık toplam", "ardışık çift", "ortalama"] },
  { slug: "sayi-basamaklari", title: "Sayı Basamakları ve Çözümleme", track: "tyt", unit: "temel-kavramlar-tyt", summary: "Rakam ve basamak kavramı, basamak değeri–sayı değeri, sayıların çözümlenmesi (10a+b).", minutes: 8, difficulty: "Orta", questionCount: 18, status: "published", keywords: ["basamak", "sayı çözümleme", "basamak değeri", "rakam", "iki basamaklı sayı"] },
  { slug: "bolme-bolunebilme", title: "Bölme ve Bölünebilme Kuralları", track: "tyt", unit: "sayilar-tyt", summary: "Bölme algoritması (kalanlı bölme) ve 2, 3, 4, 5, 6, 8, 9, 10, 11 ile bölünebilme kuralları.", minutes: 9, difficulty: "Orta", questionCount: 19, status: "published", keywords: ["bölünebilme", "bölme", "kalan", "bölünebilme kuralları"] },
  { slug: "asal-carpanlar-bolen-sayisi", title: "Asal Çarpanlara Ayırma ve Bölen Sayısı", track: "tyt", unit: "sayilar-tyt", summary: "Bir sayıyı asal çarpanlarına ayırma ve pozitif bölen (tam bölen) sayısının bulunması.", minutes: 8, difficulty: "Orta", questionCount: 19, status: "published", keywords: ["asal çarpan", "bölen sayısı", "çarpanlara ayırma", "pozitif bölen"] },
  { slug: "ebob-ekok", title: "EBOB ve EKOK", track: "tyt", unit: "sayilar-tyt", summary: "En büyük ortak bölen (EBOB), en küçük ortak kat (EKOK), EBOB·EKOK ilişkisi ve uygulama problemleri.", minutes: 10, difficulty: "Orta", questionCount: 19, status: "published", keywords: ["ebob", "ekok", "ortak bölen", "ortak kat"] },
  { slug: "rasyonel-sayilar", title: "Rasyonel Sayılar", track: "tyt", unit: "sayilar-tyt", summary: "Kesir çeşitleri, kesirlerde dört işlem, sıralama ve devirli ondalık gösterimin kesre çevrilmesi.", minutes: 9, difficulty: "Orta", questionCount: 19, status: "published", keywords: ["rasyonel sayılar", "kesir", "ondalık", "devirli ondalık", "kesir sıralama"] },

  // ── TYT · Üslü-Köklü ──
  { slug: "uslu-ifadeler", title: "Üslü İfadeler", track: "tyt", unit: "uslu-koklu-tyt", summary: "Üs kuralları (çarpma, bölme, üssün üssü), negatif ve sıfır üs, 10'un kuvvetleri ve işaret kuralları.", minutes: 9, difficulty: "Orta", questionCount: 20, status: "published", keywords: ["üslü sayılar", "üs kuralları", "negatif üs", "sıfır üs", "10 kuvvetleri"] },
  { slug: "uslu-denklemler", title: "Üslü Denklemler", track: "tyt", unit: "uslu-koklu-tyt", summary: "Tabanları eşitleyerek üslü denklem çözme ve ortak çarpan paranteze alma teknikleri.", minutes: 8, difficulty: "Orta", questionCount: 19, status: "published", keywords: ["üslü denklem", "taban eşitleme", "ortak çarpan", "denklem"] },
  { slug: "koklu-ifadeler", title: "Köklü İfadeler", track: "tyt", unit: "uslu-koklu-tyt", summary: "Kök kuralları, üs–kök ilişkisi, kök dışına çıkarma ve köklü ifadelerde dört işlem.", minutes: 9, difficulty: "Orta", questionCount: 19, status: "published", keywords: ["köklü sayılar", "kök kuralları", "kök dışına çıkarma", "karekök"] },
  { slug: "paydayi-rasyonel-yapma", title: "Paydayı Rasyonel Yapma", track: "tyt", unit: "uslu-koklu-tyt", summary: "Tek terimli ve eşlenikli paydalarda kökü paydadan kaldırma (rasyonelleştirme).", minutes: 7, difficulty: "Orta", questionCount: 19, status: "published", keywords: ["paydayı rasyonel yapma", "eşlenik", "rasyonelleştirme", "kök"] },

  // ── TYT · Problemler ──
  { slug: "oran-oranti-tyt", title: "Oran ve Orantı", track: "tyt", unit: "oran-problem-tyt", summary: "Oran kavramı, içler-dışlar çarpımı, doğru orantı ve ters orantı ile orantı problemleri.", minutes: 8, difficulty: "Orta", questionCount: 19, status: "published", keywords: ["oran", "orantı", "doğru orantı", "ters orantı", "içler dışlar"] },
  { slug: "sayi-problemleri", title: "Sayı ve Kesir Problemleri", track: "tyt", unit: "oran-problem-tyt", summary: "Bilinmeyene denklem kurarak sayı ve kesir problemlerinin çözümü.", minutes: 8, difficulty: "Orta", questionCount: 19, status: "published", keywords: ["sayı problemleri", "kesir problemleri", "denklem kurma"] },
  { slug: "yas-isci-problemleri", title: "Yaş, İşçi ve Havuz Problemleri", track: "tyt", unit: "oran-problem-tyt", summary: "Yaş farkının sabitliği ve birim zamanda iş (işçi-havuz) mantığıyla problem çözme.", minutes: 9, difficulty: "Orta", questionCount: 19, status: "published", keywords: ["yaş problemleri", "işçi problemleri", "havuz problemleri", "birim iş"] },
  { slug: "yuzde-kar-zarar", title: "Yüzde, Kâr-Zarar ve Faiz Problemleri", track: "tyt", unit: "oran-problem-tyt", summary: "Yüzde hesabı, ardışık yüzde değişimi, kâr-zarar ve basit faiz problemleri.", minutes: 9, difficulty: "Orta", questionCount: 19, status: "published", keywords: ["yüzde", "kâr zarar", "faiz", "zam indirim"] },
  { slug: "karisim-problemleri", title: "Karışım Problemleri", track: "tyt", unit: "oran-problem-tyt", summary: "Karışımda madde miktarının korunumu; tuz, alkol ve asit oranı problemleri.", minutes: 8, difficulty: "Zor", questionCount: 18, status: "published", keywords: ["karışım", "tuz oranı", "alaşım", "yüzde karışım"] },
  { slug: "hareket-problemleri", title: "Hareket (Hız) Problemleri", track: "tyt", unit: "oran-problem-tyt", summary: "Yol = hız × zaman bağıntısı; karşılaşma, aynı yön ve tur problemleri.", minutes: 9, difficulty: "Zor", questionCount: 19, status: "published", keywords: ["hareket problemleri", "hız", "yol zaman", "karşılaşma"] },

  // ── TYT · Temel Geometri ──
  { slug: "acilar-dogrular", title: "Açılar ve Doğrular", track: "tyt", unit: "geometri-tyt", summary: "Açı türleri; tümler, bütünler, komşu ve ters açılar; paralel iki doğrunun bir kesenle yaptığı açılar.", minutes: 9, difficulty: "Kolay", questionCount: 19, status: "published", keywords: ["açı", "tümler açı", "bütünler açı", "ters açı", "paralel doğrular"] },
  { slug: "ucgenler-tyt", title: "Üçgende Açılar ve Kenarlar", track: "tyt", unit: "geometri-tyt", summary: "İç açılar toplamı, dış açı, üçgen eşitsizliği ve üçgen çeşitleri (ikizkenar, eşkenar).", minutes: 10, difficulty: "Orta", questionCount: 19, status: "published", keywords: ["üçgen", "iç açılar toplamı", "dış açı", "üçgen eşitsizliği", "ikizkenar"] },
  { slug: "dik-ucgen-pisagor", title: "Dik Üçgen ve Pisagor Teoremi", track: "tyt", unit: "geometri-tyt", summary: "Pisagor teoremi, özel dik üçgenler (3-4-5, 30-60-90, 45-45-90) ve Öklid bağıntıları.", minutes: 10, difficulty: "Orta", questionCount: 19, status: "published", keywords: ["pisagor", "dik üçgen", "özel üçgen", "öklid", "30 60 90"] },
  { slug: "ucgende-benzerlik-alan", title: "Üçgende Benzerlik ve Alan", track: "tyt", unit: "geometri-tyt", summary: "Benzer üçgenler, benzerlik oranı, temel orantı (Thales) ve üçgenin alan formülleri.", minutes: 10, difficulty: "Orta", questionCount: 19, status: "published", keywords: ["benzerlik", "benzer üçgen", "thales", "üçgenin alanı"] },
  { slug: "dortgenler-tyt", title: "Dörtgenler ve Çokgenler", track: "tyt", unit: "geometri-tyt", summary: "Çokgenlerde iç-dış açı toplamı; kare, dikdörtgen, paralelkenar, eşkenar dörtgen ve yamuğun özellikleri ve alanları.", minutes: 10, difficulty: "Orta", questionCount: 19, status: "published", keywords: ["dörtgen", "çokgen", "paralelkenar", "yamuk", "alan"] },
  { slug: "cember-daire-tyt", title: "Çember ve Daire", track: "tyt", unit: "geometri-tyt", summary: "Çemberde merkez ve çevre açı, teğet; dairenin alanı, çevresi, daire dilimi ve yay uzunluğu.", minutes: 9, difficulty: "Orta", questionCount: 19, status: "published", keywords: ["çember", "daire", "merkez açı", "çevre açı", "daire alanı"] },

  // ── TYT · Çarpanlara Ayırma, Denklem ve Eşitsizlikler ──
  { slug: "carpanlara-ayirma-tyt", title: "Çarpanlara Ayırma ve Özdeşlikler", track: "tyt", unit: "cebir-tyt", summary: "Ortak çarpan, gruplandırma, temel özdeşlikler (tam kare, iki kare farkı, küpler) ve ikinci derece üç terimliyi çarpanlara ayırma.", minutes: 9, difficulty: "Orta", questionCount: 20, status: "published", keywords: ["çarpanlara ayırma", "özdeşlik", "iki kare farkı", "tam kare"] },
  { slug: "birinci-derece-denklem-tyt", title: "Birinci Dereceden Denklem ve Eşitsizlikler", track: "tyt", unit: "cebir-tyt", summary: "ax+b=0 denklemi, birinci dereceden eşitsizlikler, çözüm kümesi, aralıklar ve sayı doğrusunda gösterim.", minutes: 8, difficulty: "Orta", questionCount: 19, status: "published", keywords: ["birinci dereceden denklem", "eşitsizlik", "çözüm kümesi", "aralık"] },
  { slug: "mutlak-deger-tyt", title: "Mutlak Değer", track: "tyt", unit: "cebir-tyt", summary: "Mutlak değerin tanımı ve özellikleri; mutlak değerli denklem ve eşitsizliklerin çözümü.", minutes: 8, difficulty: "Orta", questionCount: 19, status: "published", keywords: ["mutlak değer", "mutlak değerli denklem", "mutlak değerli eşitsizlik"] },

  // ── TYT · Kümeler ve Mantık ──
  { slug: "kumeler-tyt", title: "Kümeler", track: "tyt", unit: "kumeler-mantik-tyt", summary: "Küme kavramı, kümelerde işlemler (birleşim, kesişim, fark, tümleyen), Venn şeması ve eleman sayısı problemleri.", minutes: 9, difficulty: "Orta", questionCount: 21, status: "published", keywords: ["kümeler", "birleşim", "kesişim", "venn şeması", "eleman sayısı"] },
  { slug: "mantik-tyt", title: "Mantık", track: "tyt", unit: "kumeler-mantik-tyt", summary: "Önerme, bileşik önermeler (ve, veya, ise, ancak ve ancak), doğruluk tablosu, totoloji ve niceleyiciler.", minutes: 8, difficulty: "Orta", questionCount: 19, status: "published", keywords: ["mantık", "önerme", "doğruluk tablosu", "bileşik önerme"] },

  // ── TYT · Fonksiyonlar ──
  { slug: "fonksiyon-kavrami-tyt", title: "Fonksiyon Kavramı ve Çeşitleri", track: "tyt", unit: "fonksiyonlar-tyt", summary: "Fonksiyon tanımı, tanım ve görüntü kümesi; bire bir, örten, içine, sabit, birim ve doğrusal fonksiyonlar.", minutes: 9, difficulty: "Orta", questionCount: 19, status: "published", keywords: ["fonksiyon", "tanım kümesi", "bire bir", "örten", "doğrusal fonksiyon"] },
  { slug: "fonksiyon-grafik-tyt", title: "Fonksiyon Grafikleri ve İşlemleri", track: "tyt", unit: "fonksiyonlar-tyt", summary: "Grafik okuma, fonksiyon değerleri, bileşke fonksiyon (fog) ve ters fonksiyon (TYT düzeyi).", minutes: 9, difficulty: "Orta", questionCount: 18, status: "published", keywords: ["fonksiyon grafiği", "bileşke fonksiyon", "ters fonksiyon", "grafik okuma"] },

  // ── TYT · Sayma, Olasılık ve İstatistik ──
  { slug: "permutasyon-kombinasyon-tyt", title: "Permütasyon ve Kombinasyon", track: "tyt", unit: "sayma-olasilik-tyt", summary: "Sayma yolları (toplama-çarpma), faktöriyel, permütasyon ve kombinasyon ile sıralama-seçme problemleri.", minutes: 10, difficulty: "Orta", questionCount: 18, status: "published", keywords: ["permütasyon", "kombinasyon", "faktöriyel", "sayma"] },
  { slug: "olasilik-tyt", title: "Olasılık", track: "tyt", unit: "sayma-olasilik-tyt", summary: "Örnek uzay, olay, klasik olasılık; bağımlı-bağımsız ve bileşik olayların olasılığı.", minutes: 9, difficulty: "Orta", questionCount: 19, status: "published", keywords: ["olasılık", "örnek uzay", "olay", "bağımsız olay"] },
  { slug: "veri-istatistik-tyt", title: "Veri ve İstatistik", track: "tyt", unit: "sayma-olasilik-tyt", summary: "Aritmetik ortalama, ortanca (medyan), tepe değer (mod), açıklık ve grafik (sütun, daire) okuma.", minutes: 8, difficulty: "Kolay", questionCount: 20, status: "published", keywords: ["istatistik", "ortalama", "medyan", "mod", "grafik okuma"] },

  // ── TYT · Analitik Geometri ve Katı Cisimler ──
  { slug: "analitik-geometri-tyt", title: "Analitik Geometri", track: "tyt", unit: "analitik-kati-tyt", summary: "Koordinat düzlemi, iki nokta arası uzaklık, orta nokta, doğrunun eğimi ve denklemi.", minutes: 9, difficulty: "Orta", questionCount: 21, status: "published", keywords: ["analitik geometri", "iki nokta arası uzaklık", "eğim", "doğru denklemi", "orta nokta"] },
  { slug: "kati-cisimler-tyt", title: "Katı Cisimler (Uzay Geometri)", track: "tyt", unit: "analitik-kati-tyt", summary: "Dikdörtgenler prizması, küp, silindir, piramit, koni ve kürenin hacim ve yüzey alanı.", minutes: 10, difficulty: "Orta", questionCount: 21, status: "published", keywords: ["katı cisimler", "prizma", "silindir", "koni", "küre", "hacim"] },

  // ── AYT · Limit ──
  { slug: "limit-kavrami", title: "Limit Kavramı: Soldan ve Sağdan Limit", track: "ayt", unit: "limit-ayt", summary: "Sezgisel limit, soldan–sağdan limit, limitin varlığı, grafikten ve parçalı fonksiyonlarda limit okuma.", minutes: 9, difficulty: "Orta", questionCount: 18, status: "published", keywords: ["limit", "soldan limit", "sağdan limit", "parçalı fonksiyon"] },
  { slug: "limit-hesaplama", title: "Limit Hesaplama ve Belirsizlik (0/0)", track: "ayt", unit: "limit-ayt", summary: "Limit özellikleri, doğrudan yerine koyma, çarpanlara ayırma ve eşlenikle 0/0 belirsizliği, temel trigonometrik limit.", minutes: 10, difficulty: "Orta", questionCount: 19, status: "published", keywords: ["belirsizlik", "0/0", "çarpanlara ayırma", "eşlenik", "sinx/x"] },
  { slug: "sonsuzda-limit-asimptot", title: "Sonsuzda Limit ve Asimptotlar", track: "ayt", unit: "limit-ayt", summary: "x→∞ limitleri, ∞/∞ belirsizliği (derece karşılaştırması), düşey ve yatay asimptotlar.", minutes: 10, difficulty: "Zor", questionCount: 19, status: "published", keywords: ["sonsuzda limit", "asimptot", "düşey asimptot", "yatay asimptot", "sonsuz/sonsuz"] },
  { slug: "sureklilik", title: "Süreklilik", track: "ayt", unit: "limit-ayt", summary: "Bir noktada süreklilik (üç koşul), süreksizlik türleri, parçalı fonksiyonda ve aralıkta süreklilik.", minutes: 9, difficulty: "Orta", questionCount: 18, status: "published", keywords: ["süreklilik", "süreksizlik", "kaldırılabilir süreksizlik", "parçalı fonksiyon"] },

  // ── AYT · Türev (TAM PAKET — sıralı seri) ──
  { slug: "turevin-tanimi", title: "Türevin Tanımı ve Temel Kuralları", track: "ayt", unit: "turev-ayt", summary: "Türevin limit tanımı, anlık değişim, teğet eğimi, süreklilik–türevlenebilirlik ilişkisi ve temel kurallar.", minutes: 9, difficulty: "Orta", questionCount: 16, status: "published", keywords: ["türev", "eğim", "teğet", "limit tanımı", "anlık değişim"] },
  { slug: "turev-alma-kurallari", title: "Türev Alma Kuralları", track: "ayt", unit: "turev-ayt", summary: "Kuvvet, çarpım, bölüm ve zincir kuralı — adım adım, çözümlü örneklerle.", minutes: 10, difficulty: "Orta", questionCount: 18, status: "published", keywords: ["zincir kuralı", "çarpım kuralı", "bölüm kuralı", "kuvvet kuralı"] },
  { slug: "ozel-fonksiyon-turevleri", title: "Trigonometrik, Üstel ve Logaritmik Türevler", track: "ayt", unit: "turev-ayt", summary: "sin, cos, tan, cot, e^x, a^x, ln x ve log fonksiyonlarının türevleri (zincir kuralıyla).", minutes: 10, difficulty: "Orta", questionCount: 19, status: "published", keywords: ["trigonometrik türev", "üstel türev", "logaritma türevi", "sinüs türev"] },
  { slug: "ardisik-turev", title: "Ardışık (Yüksek Mertebeden) Türevler", track: "ayt", unit: "turev-ayt", summary: "İkinci, üçüncü ve n. mertebeden türevler; ardışık türevin grafik ve fizikle (hız–ivme) ilişkisi.", minutes: 7, difficulty: "Orta", questionCount: 16, status: "published", keywords: ["ikinci türev", "ardışık türev", "yüksek mertebeden", "ivme", "n. türev"] },
  { slug: "teget-normal", title: "Teğet ve Normal Doğrusu", track: "ayt", unit: "turev-ayt", summary: "Bir eğriye çizilen teğet ve normalin denklemi, açısı ve uygulamaları.", minutes: 8, difficulty: "Orta", questionCount: 18, status: "published", keywords: ["teğet", "normal", "teğet denklemi", "eğim"] },
  { slug: "artan-azalan-ekstremum", title: "Artan-Azalan Fonksiyonlar ve Yerel Ekstremum", track: "ayt", unit: "turev-ayt", summary: "Türevin işaretiyle artan/azalan aralıklar, yerel maksimum–minimum ve birinci türev testi.", minutes: 10, difficulty: "Orta", questionCount: 18, status: "published", keywords: ["artan azalan", "ekstremum", "yerel maksimum", "kritik nokta"] },
  { slug: "ikinci-turev-konkavlik", title: "İkinci Türev, Konkavlık ve Dönüm Noktaları", track: "ayt", unit: "turev-ayt", summary: "Konkavlık (bükeylik), dönüm noktası ve ikinci türev testiyle ekstremum belirleme.", minutes: 9, difficulty: "Zor", questionCount: 18, status: "published", keywords: ["konkavlık", "dönüm noktası", "ikinci türev testi", "bükey"] },
  { slug: "optimizasyon", title: "Optimizasyon (Maksimum-Minimum) Problemleri", track: "ayt", unit: "turev-ayt", summary: "Gerçek hayat maks-min problemleri: alan, hacim, maliyet ve mesafe optimizasyonu.", minutes: 11, difficulty: "Zor", questionCount: 16, status: "published", keywords: ["optimizasyon", "maksimum minimum", "en büyük hacim", "uygulama"] },
  { slug: "turev-formul-ozeti", title: "Türev Formülleri ve Sınav Taktikleri", track: "ayt", unit: "turev-ayt", summary: "Tüm türev kurallarının tek sayfalık özeti, sık yapılan hatalar ve YKS soru tipleri.", minutes: 7, difficulty: "Kolay", questionCount: 14, status: "published", keywords: ["türev formülleri", "özet", "sınav taktiği", "yks türev"] },

  // ── AYT · İntegral ──
  { slug: "integral-kavrami", title: "Belirsiz İntegral ve Temel Kurallar", track: "ayt", unit: "integral-ayt", summary: "Ters türev kavramı, integral sabiti ve temel integral kuralları (kuvvet, üstel, trigonometrik).", minutes: 9, difficulty: "Orta", questionCount: 18, status: "published", keywords: ["belirsiz integral", "ters türev", "integral kuralları", "integral sabiti"] },
  { slug: "integral-degisken-degistirme", title: "Değişken Değiştirme (Yerine Koyma) Yöntemi", track: "ayt", unit: "integral-ayt", summary: "u = g(x) dönüşümüyle bileşik fonksiyonların integrali; adım adım yerine koyma tekniği.", minutes: 9, difficulty: "Zor", questionCount: 19, status: "published", keywords: ["değişken değiştirme", "yerine koyma", "u dönüşümü", "substitution"] },
  { slug: "belirli-integral-teoremi", title: "Belirli İntegral ve Analizin Temel Teoremi", track: "ayt", unit: "integral-ayt", summary: "Belirli integral, Newton–Leibniz (Analizin Temel Teoremi) ve belirli integralin özellikleri.", minutes: 10, difficulty: "Zor", questionCount: 19, status: "published", keywords: ["belirli integral", "newton leibniz", "analizin temel teoremi", "integral özellikleri"] },
  { slug: "integralde-alan", title: "İntegral ile Alan Hesabı", track: "ayt", unit: "integral-ayt", summary: "Eğri ile eksen arası alan, eksen altı bölgeler ve iki eğri arasında kalan alanın hesabı.", minutes: 10, difficulty: "Zor", questionCount: 18, status: "published", keywords: ["integralle alan", "eğri altında alan", "iki eğri arası alan"] },

  // ── AYT · Fonksiyonlar ──
  { slug: "fonksiyon-cesitleri-ayt", title: "Fonksiyon ve Çeşitleri", track: "ayt", unit: "fonksiyonlar-ayt", summary: "Fonksiyon tanımı, bire bir-örten, çift-tek fonksiyon, artan-azalan ve tanım-görüntü kümesi.", minutes: 10, difficulty: "Orta", questionCount: 20, status: "published", keywords: ["fonksiyon", "bire bir", "örten", "çift fonksiyon", "tek fonksiyon"] },
  { slug: "bileske-ters-fonksiyon-ayt", title: "Bileşke ve Ters Fonksiyon", track: "ayt", unit: "fonksiyonlar-ayt", summary: "Bileşke fonksiyon (fog), ters fonksiyon ve bunların özellikleri.", minutes: 9, difficulty: "Orta", questionCount: 19, status: "published", keywords: ["bileşke fonksiyon", "ters fonksiyon", "fog"] },
  { slug: "ozel-fonksiyonlar-ayt", title: "Parçalı, Mutlak Değer ve İşaret Fonksiyonu", track: "ayt", unit: "fonksiyonlar-ayt", summary: "Parçalı fonksiyon, mutlak değer fonksiyonu, işaret fonksiyonu ve grafik dönüşümleri.", minutes: 9, difficulty: "Zor", questionCount: 20, status: "published", keywords: ["parçalı fonksiyon", "mutlak değer fonksiyonu", "grafik dönüşümü"] },

  // ── AYT · Polinomlar ──
  { slug: "polinom-kavrami-ayt", title: "Polinom Kavramı ve İşlemler", track: "ayt", unit: "polinomlar-ayt", summary: "Polinom tanımı, derece, katsayılar toplamı, sabit terim ve polinomlarda dört işlem.", minutes: 9, difficulty: "Orta", questionCount: 20, status: "published", keywords: ["polinom", "derece", "katsayılar toplamı", "sabit terim"] },
  { slug: "polinomlarda-bolme-ayt", title: "Polinomlarda Bölme ve Çarpanlara Ayırma", track: "ayt", unit: "polinomlar-ayt", summary: "Polinom bölmesi, kalan ve bölüm teoremi, çarpanlara ayırma ve kökler.", minutes: 10, difficulty: "Zor", questionCount: 20, status: "published", keywords: ["polinom bölme", "kalan teoremi", "çarpan teoremi", "kök"] },

  // ── AYT · İkinci Dereceden Denklemler ve Parabol ──
  { slug: "ikinci-derece-denklem-ayt", title: "İkinci Dereceden Denklemler", track: "ayt", unit: "ikinci-derece-ayt", summary: "Diskriminant, kök bulma, kökler toplamı-çarpımı ve kök-katsayı ilişkileri.", minutes: 10, difficulty: "Orta", questionCount: 21, status: "published", keywords: ["ikinci dereceden denklem", "diskriminant", "kökler toplamı", "delta"] },
  { slug: "ikinci-derece-esitsizlik-ayt", title: "İkinci Dereceden Eşitsizlikler", track: "ayt", unit: "ikinci-derece-ayt", summary: "Parabolün işaretiyle ikinci dereceden eşitsizliklerin çözümü ve işaret tablosu.", minutes: 9, difficulty: "Zor", questionCount: 18, status: "published", keywords: ["ikinci dereceden eşitsizlik", "işaret tablosu", "parabol işareti"] },
  { slug: "parabol-ayt", title: "Parabol", track: "ayt", unit: "ikinci-derece-ayt", summary: "İkinci dereceden fonksiyonun grafiği: tepe noktası, eksen kesişimleri ve simetri ekseni.", minutes: 10, difficulty: "Zor", questionCount: 20, status: "published", keywords: ["parabol", "tepe noktası", "simetri ekseni", "ikinci derece fonksiyon"] },

  // ── AYT · Trigonometri ──
  { slug: "birim-cember-ayt", title: "Açılar ve Birim Çember", track: "ayt", unit: "trigonometri-ayt", summary: "Yönlü açılar, derece-radyan dönüşümü, birim çember ve esas ölçü.", minutes: 10, difficulty: "Orta", questionCount: 17, status: "published", keywords: ["birim çember", "radyan", "derece", "yönlü açı", "esas ölçü"] },
  { slug: "trigonometrik-fonksiyonlar-ayt", title: "Trigonometrik Fonksiyonlar ve Değerleri", track: "ayt", unit: "trigonometri-ayt", summary: "Özel açıların trigonometrik değerleri, bölgelere göre işaret ve indirgeme formülleri.", minutes: 11, difficulty: "Zor", questionCount: 17, status: "published", keywords: ["trigonometrik değerler", "özel açılar", "bölge işaretleri", "indirgeme"] },
  { slug: "trigonometrik-ozdeslikler-ayt", title: "Trigonometrik Özdeşlikler", track: "ayt", unit: "trigonometri-ayt", summary: "Temel özdeşlikler, toplam-fark ve iki kat açı formülleri.", minutes: 10, difficulty: "Zor", questionCount: 18, status: "published", keywords: ["trigonometrik özdeşlik", "toplam fark formülü", "iki kat açı"] },
  { slug: "trigonometrik-denklemler-ayt", title: "Trigonometrik Denklemler", track: "ayt", unit: "trigonometri-ayt", summary: "Temel trigonometrik denklemlerin çözüm kümesi ve genel çözüm.", minutes: 9, difficulty: "Zor", questionCount: 16, status: "published", keywords: ["trigonometrik denklem", "çözüm kümesi", "genel çözüm"] },
  { slug: "ucgende-trigonometri-ayt", title: "Üçgende Trigonometri (Sinüs-Kosinüs Teoremi)", track: "ayt", unit: "trigonometri-ayt", summary: "Sinüs teoremi, kosinüs teoremi ve üçgende alan formülleri.", minutes: 9, difficulty: "Zor", questionCount: 17, status: "published", keywords: ["sinüs teoremi", "kosinüs teoremi", "üçgende alan"] },

  // ── AYT · Üstel Fonksiyon ve Logaritma ──
  { slug: "ustel-fonksiyon-ayt", title: "Üstel Fonksiyon", track: "ayt", unit: "logaritma-ayt", summary: "Üstel fonksiyonun tanımı, grafiği ve üstel denklemler.", minutes: 8, difficulty: "Orta", questionCount: 21, status: "published", keywords: ["üstel fonksiyon", "üstel denklem", "e sayısı"] },
  { slug: "logaritma-kavrami-ayt", title: "Logaritma Kavramı ve Özellikleri", track: "ayt", unit: "logaritma-ayt", summary: "Logaritmanın tanımı, çarpım-bölüm-üs özellikleri, taban değiştirme ve doğal logaritma.", minutes: 10, difficulty: "Zor", questionCount: 20, status: "published", keywords: ["logaritma", "log özellikleri", "ln", "taban değiştirme"] },
  { slug: "logaritmik-denklem-ayt", title: "Logaritmik Denklem ve Eşitsizlikler", track: "ayt", unit: "logaritma-ayt", summary: "Logaritmalı denklem ve eşitsizliklerin çözümü ile tanım kümesi koşulları.", minutes: 9, difficulty: "Zor", questionCount: 18, status: "published", keywords: ["logaritmik denklem", "logaritmik eşitsizlik", "tanım kümesi"] },

  // ── AYT · Diziler ──
  { slug: "dizi-kavrami-ayt", title: "Dizi Kavramı", track: "ayt", unit: "diziler-ayt", summary: "Dizi tanımı, genel terim, sonlu-sonsuz diziler ve dizilerde işlemler.", minutes: 8, difficulty: "Orta", questionCount: 17, status: "published", keywords: ["dizi", "genel terim", "dizi kavramı"] },
  { slug: "aritmetik-dizi-ayt", title: "Aritmetik Dizi", track: "ayt", unit: "diziler-ayt", summary: "Ortak fark, genel terim formülü ve aritmetik dizinin ilk n terim toplamı.", minutes: 9, difficulty: "Orta", questionCount: 17, status: "published", keywords: ["aritmetik dizi", "ortak fark", "ilk n terim toplamı"] },
  { slug: "geometrik-dizi-ayt", title: "Geometrik Dizi", track: "ayt", unit: "diziler-ayt", summary: "Ortak çarpan, genel terim ve geometrik dizinin terim toplamı.", minutes: 9, difficulty: "Orta", questionCount: 18, status: "published", keywords: ["geometrik dizi", "ortak çarpan", "terim toplamı"] },

  // ── AYT · Analitik Geometri ──
  { slug: "dogru-analitik-ayt", title: "Doğrunun Analitik İncelenmesi", track: "ayt", unit: "analitik-ayt", summary: "Eğim, doğru denklemi, paralel-dik doğrular ve bir noktanın doğruya uzaklığı.", minutes: 10, difficulty: "Zor", questionCount: 19, status: "published", keywords: ["doğru denklemi", "eğim", "paralel dik", "nokta doğru uzaklığı"] },
  { slug: "cember-analitik-ayt", title: "Çemberin Analitik İncelenmesi", track: "ayt", unit: "analitik-ayt", summary: "Çemberin standart ve genel denklemi, merkez-yarıçap ve doğru-çember ilişkisi.", minutes: 9, difficulty: "Zor", questionCount: 18, status: "published", keywords: ["çember denklemi", "merkez yarıçap", "analitik çember"] },
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
