// ─────────────────────────────────────────────────────────────────────────────
// çözümebak — YAZILI SINAVLAR MANIFEST (1. dönem 1. yazılı / "Birinci Yazılılar")
//
// One entry per grade (9–12). The hub (/yazili-sinavlar) and each grade page
// (/yazili-sinavlar/<slug>) derive title, konu kapsamı, traps, plan, FAQ and
// JSON-LD from here. `kapsam` links to live lesson pages where they exist; items
// with `soon: true` are Maarif topics whose konu anlatımı is on the way, shown
// honestly rather than linked to a missing page.
//
// Factual framing is verified against MEB ÖDSGM's 2026-2027 "Ülke Geneli Ortak
// Yazılı Sınav Takvimi" and the Türkiye Yüzyılı Maarif Modeli matematik
// programı (tymm.meb.gov.tr). Key point: lise matematik 1. dönem 1. yazılı is a
// SCHOOL-level ortak sınav (okul düzeyinde), scheduled by each school within the
// November window and announced at least a week ahead — NOT a ülke geneli ortak
// sınav. The only ülke geneli matematik exams all year are 9. sınıf (6 Ocak
// 2027, 1. dönem 2. yazılı) and 10. sınıf (9 Haziran 2027, 2. dönem 2. yazılı).
// ─────────────────────────────────────────────────────────────────────────────

import type { Track } from "@/lib/curriculum";

/** Shared exam-season facts, true for every grade. */
export const SEASON = {
  year: "2026-2027",
  term: "1. Dönem 1. Yazılı",
  // Okul geneli 1. yazılı penceresi: kasımın ilk yarısı. Kesin tarih okul/zümre
  // tarafından belirlenir ve en az bir hafta önceden duyurulur.
  windowLabel: "Kasım ayının ilk yarısı",
  mazeretLabel: "23–27 Kasım 2026",
};

/** Per-exam facts: which written exam of the term this is. */
export const SINAVLAR = {
  1: {
    term: "1. Dönem 1. Yazılı",
    kisa: "1. Yazılı",
    windowLabel: "Kasım ayının ilk yarısı",
    mazeret:
      "Sınavı kaçırırsan mazeret sınavları genelde kasımın son haftasında yapılır; kesin tarihi yine okulun duyurur.",
    planBaslik: "İki haftalık çalışma planı",
    planSure: "2 haftalık",
  },
  2: {
    term: "1. Dönem 2. Yazılı",
    kisa: "2. Yazılı",
    // Okul düzeyindeki 2. yazılılar dönem bitmeden (22 Ocak 2027) tamamlanır.
    windowLabel: "Aralık sonu – ocak ilk yarısı",
    mazeret:
      "Sınavı kaçırırsan mazeret sınavı dönem bitmeden (22 Ocak 2027) yapılır; tarihini okulun duyurur.",
    planBaslik: "Üç haftalık çalışma planı",
    planSure: "3 haftalık",
  },
} as const;

export interface KapsamItem {
  /** Curriculum topic slug → links to /konular/<topic>. */
  topic?: string;
  /** Display label when there is no live lesson yet (Maarif's new topics). */
  label?: string;
  /** true = konu anlatımı henüz yok; shown with a "yakında" note. */
  soon?: boolean;
  /** 2. yazılıda: true = bu sınavla yeni gelen konu (1. yazılıda yoktu). */
  yeni?: boolean;
  /** One line on what the exam asks from this topic. */
  not: string;
}

export interface Tuzak {
  baslik: string;
  aciklama: string;
}

export interface PlanAdimi {
  aralik: string; // "1. hafta", "Son 3 gün" …
  is: string;
}

export interface Sss {
  soru: string;
  cevap: string;
}

export interface EkAnlatim {
  baslik: string;
  icerik: string;
}

export interface YaziliGrade {
  slug: string; // → /yazili-sinavlar/<slug>
  /** Which written exam of the 1st term (default 1). */
  sinav?: 1 | 2;
  /** Overrides the exam window chip (e.g. a fixed nationwide date). */
  windowLabel?: string;
  /** Overrides the note under the scope heading. */
  kapsamNotu?: string;
  grade: "9" | "10" | "11" | "12";
  track: Track;
  gradeLabel: string; // "9. Sınıf"
  /** Maarif theme(s) this exam covers, for the eyebrow. */
  tema: string;
  lead: string;
  /** Grade-specific timing / ülke-geneli note. */
  takvimNotu: string;
  kapsam: KapsamItem[];
  /**
   * Short inline mini-lessons for brand-new Maarif topics that have no lesson
   * page yet (e.g. 11. sınıf serpme diyagramı & korelasyon). Without these, the
   * "Yakında" kapsam items would be a dead end — the student is told they're
   * tested on topics they can't study anywhere on the site.
   */
  ekAnlatim?: EkAnlatim[];
  nasilSorulur: string[];
  tuzaklar: Tuzak[];
  plan: PlanAdimi[];
  sss: Sss[];
  /** Related soru-tipleri slugs that have a KB, for extra internal links. */
  soruTipleri?: string[];
}

export const YAZILILAR: YaziliGrade[] = [
  // ── 9. Sınıf ───────────────────────────────────────────────────────────────
  {
    slug: "9-sinif-matematik-1-yazili",
    grade: "9",
    track: "9",
    gradeLabel: "9. Sınıf",
    tema: "Sayılar",
    lead: "Lise matematiğinin ilk yazılısı, aslında bir konu sınavından çok bir alışma sınavıdır: ortaokuldan gelen işlem gücünün üstüne kümeler, gerçek sayılar ve üslü–köklü ifadelerin dilini kurar. Bu dört başlık sağlam oturursa yılın geri kalanı çok daha kolay akar.",
    takvimNotu:
      "9. sınıf matematik 1. yazılısı okul düzeyinde ortak sınavdır; tarihini okul kasım ayının ilk yarısında belirleyip en az bir hafta önceden duyurur. (Dikkat: 9. sınıfın ülke geneli ortak matematik sınavı 6 Ocak 2027'de, yani 1. dönemin ikinci yazılısında yapılır — bu ilk yazılı değildir.)",
    kapsam: [
      { topic: "kumelerde-temel-kavramlar", not: "Sayı kümeleri (ℕ, ℤ, ℚ, ℝ), küme işlemleri (birleşim, kesişim, fark, tümleyen) ve Venn şemasıyla eleman sayısı." },
      { topic: "gercek-sayilar", not: "Gerçek sayı kümeleri, sayı doğrusu, aralık gösterimi ve mutlak değerin temeli." },
      { topic: "uslu-ifadeler-9", not: "Üs kuralları, negatif ve sıfır üs, bilimsel gösterim ve üslü ifadelerde sadeleştirme." },
      { topic: "koklu-ifadeler-9", not: "Kök kuralları, köklü ifadelerde işlem ve paydayı rasyonel yapma." },
    ],
    nasilSorulur: [
      "Küme sorularının çoğu, kelime problemine gömülü eleman sayısı sorusudur: iki–üç kümeli Venn şeması kurup s(A∪B) formülünü uygulatır.",
      "Gerçek sayılarda sık çıkan tip, bir aralığı eşitsizlik ya da mutlak değerle verip sayı doğrusunda göstertmektir.",
      "Üslü ve köklü ifadeler neredeyse her zaman 'sadeleştir / eşit olanı bul' biçiminde, tek bir kural hatasını yakalamak için kurulur.",
    ],
    tuzaklar: [
      { baslik: "Fark ile tümleyeni karıştırmak", aciklama: "A\\B ile A' farklı kümelerdir; soruyu okurken hangisinin istendiğini işaretle." },
      { baslik: "Negatif tabanda parantez", aciklama: "(−2)⁴ ile −2⁴ aynı değildir: ikincisinde üs yalnızca 2'ye uygulanır, eksi en sonda gelir — yani −2⁴ = −(2⁴) = −16 iken (−2)⁴ = 16." },
      { baslik: "Aralıkta açık/kapalı uç", aciklama: "> ile ≥ farkı, uç noktayı dahil edip etmemeyi değiştirir — çözümü tümden kaydırır." },
      { baslik: "Paydayı rasyonel yapmadan bırakmak", aciklama: "Köklü ifadelerde cevap genelde paydada kök kalmayacak biçimde beklenir; eşini bulamayınca buradan şaşılır." },
    ],
    plan: [
      { aralik: "1. hafta", is: "Kümeler ve gerçek sayıları bitir; her konunun çözümlü sorularından 15–20 soru çöz, yanlışları not et." },
      { aralik: "2. hafta", is: "Üslü ve köklü ifadelere geç; kural tablosunu tek sayfaya çıkar, her kural için 5 soru çöz." },
      { aralik: "Son 3 gün", is: "Dört konudan karışık 30 soruluk bir deneme çöz; sadece yanlış çıkan kuralları tekrar et." },
    ],
    sss: [
      { soru: "9. sınıf matematik 1. yazılı ne zaman?", cevap: "Okul düzeyinde ortak sınav olduğu için tarihini okul belirler; genelde kasım ayının ilk yarısında yapılır ve en az bir hafta önceden duyurulur. Kesin tarihi okulunun duyurularından ve e-Okul'dan takip et." },
      { soru: "Hangi konulardan sorumluyum?", cevap: "Sayılar temasının ilk başlıkları: kümeler, gerçek sayılar, üslü ifadeler ve köklü ifadeler. Kesin kapsam okulun yıllık planına göre biraz değişebilir." },
      { soru: "Sınav test mi, klasik mi olacak?", cevap: "Çoğu okul yazılısı açık uçlu (klasik) ve çözüm adımlarının puanlandığı sorulardan oluşur; bazı okullar karma yapar. Her adımı yazmayı alışkanlık hâline getir." },
    ],
    soruTipleri: ["gercek-sayilar", "koklu-ifadeler", "uslu-ifadeler"],
  },
  // ── 10. Sınıf ──────────────────────────────────────────────────────────────
  {
    slug: "10-sinif-matematik-1-yazili",
    grade: "10",
    track: "10",
    gradeLabel: "10. Sınıf",
    tema: "Geometrik Şekiller",
    lead: "Maarif Modeli'yle 10. sınıf matematiği, çoğu öğrencinin beklediği gibi sayılarla değil, geometriyle başlıyor. İlk yazılının kalbi üçgen: dik üçgende trigonometrik oranlar, yardımcı elemanlar, alan ve sinüs–kosinüs teoremleri. Bunu baştan bilmek, yanlış konuya çalışmanı önler.",
    takvimNotu:
      "10. sınıf matematik 1. yazılısı okul düzeyinde ortak sınavdır; tarihini okul kasım ayının ilk yarısında belirler ve önceden duyurur. (10. sınıfın ülke geneli ortak matematik sınavı çok daha sonra, 9 Haziran 2027'de yapılır — bu ilk yazılıyla karıştırma.)",
    kapsam: [
      { topic: "dik-ucgen-trigonometri-10", not: "Dik üçgende sin, cos, tan oranları; özel üçgenler (30-60-90, 45-45-90) ve temel özdeşlikler." },
      { topic: "ucgende-yardimci-elemanlar-10", not: "Kenarortay, açıortay, yükseklik ve kenar orta dikme; bunların uzunluk bağıntıları." },
      { topic: "ucgende-alan-10", not: "Alan formülleri (taban–yükseklik, iki kenar–sinüs) ve alan oranı problemleri." },
      { topic: "sinus-kosinus-teoremi-10", not: "Herhangi bir üçgende kenar–açı ilişkisi için sinüs ve kosinüs teoremlerinin uygulanması." },
    ],
    nasilSorulur: [
      "Dik üçgen soruları çoğu zaman özel açılarla (30-60-90, 45-45-90) kurulur; oranları ezbere değil, iki temel üçgenden türeterek bil.",
      "Alan soruları iki yüzlüdür: ya doğrudan alan ister ya da iki üçgenin alan oranından bir uzunluğu çözdürür.",
      "Sinüs–kosinüs teoremi soruları, dik olmayan üçgende 'eldeki üç bilgiden dördüncüyü bul' mantığıyla gelir; hangi teoremin hangi veriye uyduğunu seçmek işin yarısıdır.",
    ],
    tuzaklar: [
      { baslik: "Özel üçgen oranını yanlış yerleştirmek", aciklama: "30-60-90 üçgeninde karşı/komşu kenarları karıştırmak en sık net kaybı; üçgeni her seferinde çizip etiketle." },
      { baslik: "Kosinüs teoreminde işaret", aciklama: "a² = b² + c² − 2bc·cosA formülünde eksi terimi atlamak klasik hatadır; geniş açıda cos negatiftir, bunu da gözden kaçırma." },
      { baslik: "Yardımcı elemanları karıştırmak", aciklama: "Kenarortay, açıortay ve yükseklik farklı noktalarda kesişir ve farklı bağıntılara uyar; hangisinin sorulduğunu önce netleştir." },
      { baslik: "Alan formülü seçimi", aciklama: "Verilenler iki kenar ve aralarındaki açıysa ½·a·b·sinC formülü işini bitirir; taban–yükseklik aramaya kalkma." },
    ],
    plan: [
      { aralik: "1. hafta", is: "Dik üçgende trigonometri ve yardımcı elemanları bitir; iki temel özel üçgeni ezberden değil, çizerek kur." },
      { aralik: "2. hafta", is: "Üçgende alan ve sinüs–kosinüs teoremlerini çalış; her tipten 10'ar soru çöz." },
      { aralik: "Son 3 gün", is: "Karışık 25 soruluk üçgen denemesi çöz; hangi teoremi ne zaman seçtiğini kendi cümlenle yaz." },
    ],
    sss: [
      { soru: "10. sınıf matematik 1. yazılı hangi konulardan?", cevap: "Maarif Modeli'nde 10. sınıf yılı Geometrik Şekiller temasıyla başladığı için ilk yazılı üçgen ağırlıklıdır: dik üçgende trigonometri, yardımcı elemanlar, alan ve sinüs–kosinüs teoremleri. Kesin kapsam için okulun yıllık planına bak." },
      { soru: "Neden sayılarla değil geometriyle başlıyoruz?", cevap: "Yeni Maarif Modeli programında 10. sınıfın tema sırası değişti; yıl Geometrik Şekiller ve İstatistiksel Araştırma Süreci ile açılıyor, Sayılar teması daha sonra geliyor." },
      { soru: "1. yazılı ne zaman yapılacak?", cevap: "Okul düzeyinde ortak sınav olduğu için tarihini okul belirler; genelde kasımın ilk yarısında yapılır ve en az bir hafta önceden duyurulur." },
      { soru: "Sınav test mi, klasik mi olacak?", cevap: "Çoğu okul yazılısı açık uçlu (klasik) ve çözüm adımlarının puanlandığı sorulardan oluşur; bazı okullar karma yapar. Geometride her adımı ve çizimi göstermeyi alışkanlık hâline getir." },
    ],
    soruTipleri: ["dik-ucgen-pisagor", "ucgenler-tyt"],
  },
  // ── 11. Sınıf ──────────────────────────────────────────────────────────────
  {
    slug: "11-sinif-matematik-1-yazili",
    grade: "11",
    track: "11",
    gradeLabel: "11. Sınıf",
    tema: "İstatistiksel Araştırma Süreci + Geometrik Şekiller",
    lead: "11. sınıfta en büyük sürpriz burada: Maarif Modeli'yle yıl trigonometriyle değil, İstatistiksel Araştırma Süreci ve Dörtgenler ile başlıyor. Trigonometri, üstel–logaritma ve fonksiyonlar bu yıl var ama daha sonraki temalarda — ilk yazılıya girmez. Yanlış konuya çalışmamak için bunu bilmek kritik.",
    takvimNotu:
      "11. sınıf matematik 1. yazılısı okul düzeyinde ortak sınavdır; tarihini okul kasımın ilk yarısında belirler ve önceden duyurur. 11. sınıfın bu yıl ülke geneli ortak matematik sınavı yoktur; tüm matematik yazılıları okul düzeyindedir.",
    kapsam: [
      { label: "İki nicel değişken ve serpme diyagramı", soon: true, not: "İki nicel değişken arasındaki ilişkiyi serpme diyagramıyla gösterme ve okuma — Maarif'in 11. sınıfa yeni getirdiği başlık." },
      { label: "Korelasyon katsayısı", soon: true, not: "İlişkinin yönü ve gücü; korelasyonun nedensellik anlamına gelmediğini ayırt etme." },
      { topic: "dortgenler-tyt", not: "Özel dörtgenler (paralelkenar, eşkenar dörtgen, yamuk, deltoid, kare, dikdörtgen), hiyerarşileri; kenar, açı, köşegen ve alan." },
      { topic: "veri-istatistik-tyt", not: "Veri okuma, merkezî eğilim ve yayılım ölçüleri — istatistik temasının zeminini tazelemek için." },
    ],
    ekAnlatim: [
      {
        baslik: "Serpme diyagramı nasıl okunur?",
        icerik:
          "Serpme diyagramı (saçılım grafiği), iki nicel değişkeni bir koordinat düzleminde nokta nokta gösterir: her veri çifti bir nokta olur. Grafiğe bakarken iki şeyi ayrı ayrı oku. Yön: noktalar soldan sağa yükseliyorsa ilişki pozitiftir (biri artarken diğeri de artar), alçalıyorsa negatiftir. Güç: noktalar hayalî bir doğruya ne kadar yakın toplanmışsa ilişki o kadar güçlü, ne kadar dağınıksa o kadar zayıftır; her yöne bir bulut gibi saçılmışsa ilişki yok demektir. Sınavdaki tipik soru sana bir serpme diyagramı verip 'bu ilişki pozitif mi negatif mi, güçlü mü zayıf mı' diye sorar — hesap değil, okuma ister.",
      },
      {
        baslik: "Korelasyon katsayısı (r) ne anlatır?",
        icerik:
          "Korelasyon katsayısı r, serpme diyagramındaki ilişkiyi tek bir sayıya indirir ve her zaman −1 ile +1 arasındadır. İşareti yönü verir: r pozitifse ilişki artan, negatifse azalandır. Mutlak değeri gücü verir: r, +1 veya −1'e yaklaştıkça ilişki güçlenir; 0'a yaklaştıkça zayıflar, 0 ise doğrusal ilişki yok demektir. Örneğin r = −0,9 güçlü ve negatif, r = 0,2 ise zayıf ve pozitif bir ilişkidir. En kritik nokta: güçlü bir korelasyon bile nedensellik kanıtlamaz. Dondurma satışı ile boğulma vakaları birlikte artar; sebep biri değil, ikisini birden etkileyen sıcak havadır. Sınav tam da bu ayrımı ölçmeyi sever.",
      },
    ],
    nasilSorulur: [
      "İstatistik soruları hesap kadar yorum ister: bir serpme diyagramı verilir, ilişkinin yönünü (pozitif/negatif) ve gücünü (zayıf/güçlü) okuman beklenir.",
      "Korelasyonun en sevilen çeldiricisi mantık sorusudur: 'iki değişken birlikte artıyorsa biri diğerinin sebebidir' önermesinin neden yanlış olduğunu göstertir.",
      "Dörtgen soruları özel dörtgen hiyerarşisi üstüne kurulur: bir karenin aynı anda hangi dörtgenlerin özelliklerini taşıdığını bilmek doğru/yanlış tablosunu çözer.",
    ],
    tuzaklar: [
      { baslik: "Korelasyon = nedensellik sanmak", aciklama: "Güçlü bir ilişki bile bir değişkenin diğerine sebep olduğunu kanıtlamaz; sınavın tam da yakaladığı hata budur." },
      { baslik: "Dörtgen hiyerarşisini atlamak", aciklama: "Kare hem eşkenar dörtgen hem dikdörtgendir; 'her eşkenar dörtgen karedir' gibi tersine önermeler tuzaktır." },
      { baslik: "Serpme diyagramında gücü yönle karıştırmak", aciklama: "Yön (artan/azalan) ile güç (noktaların çizgiye yakınlığı) ayrı şeylerdir; ikisini birlikte ama ayrı ayrı oku." },
      { baslik: "Trigonometriye çalışıp ilk yazılıya girmemek", aciklama: "Eski programda 11. sınıf trigonometriyle başlardı; Maarif'te trigonometri 1. yazılı kapsamında değildir." },
    ],
    plan: [
      { aralik: "1. hafta", is: "İstatistiksel araştırma sürecini çalış: serpme diyagramı okuma, korelasyonun yön ve gücü, nedensellik ayrımı." },
      { aralik: "2. hafta", is: "Dörtgenlere geç; özel dörtgenlerin hiyerarşisini tek bir şemaya çıkar ve her dörtgenden soru çöz." },
      { aralik: "Son 3 gün", is: "Yorum ağırlıklı karışık sorular çöz; her istatistik sorusunda 'yön mü güç mü soruluyor' diye kendine sor." },
    ],
    sss: [
      { soru: "11. sınıf matematik 1. yazılı hangi konulardan?", cevap: "Maarif Modeli'nde 11. sınıf yılı İstatistiksel Araştırma Süreci ve Geometrik Şekiller (dörtgenler, çokgenler) ile başlar; ilk yazılı bu iki temadan sorumludur. Trigonometri ve üstel–logaritma bu yılın sonraki temalarıdır, ilk yazılıya girmez." },
      { soru: "Trigonometri 1. yazılıda çıkmıyor mu?", cevap: "Hayır. Eski programda 11. sınıf trigonometriyle başlardı, ama yeni Maarif Modeli'nde trigonometri daha sonraki 'Nicelikler ve Değişimler' temasındadır; ilk yazılı İstatistik ve Dörtgenler üzerinedir." },
      { soru: "Korelasyon konusunun anlatımı sitede var mı?", cevap: "Serpme diyagramı ve korelasyon, Maarif'in 11. sınıfa yeni getirdiği başlıklar. İkisinin de kısa anlatımını bu sayfadaki 'Yeni konular — kısa anlatım' bölümünde bulabilirsin; ayrıntılı konu anlatımları da hazırlanıyor." },
      { soru: "Sınav test mi, klasik mi olacak?", cevap: "Çoğu okul yazılısı açık uçlu (klasik) ve çözüm adımlarının puanlandığı sorulardan oluşur; bazı okullar karma yapar. Özellikle istatistik yorumunda ve dörtgen ispatlarında her adımı yazmayı alışkanlık hâline getir." },
    ],
    soruTipleri: ["dortgenler-tyt"],
  },
  // ── 12. Sınıf ──────────────────────────────────────────────────────────────
  {
    slug: "12-sinif-matematik-1-yazili",
    grade: "12",
    track: "12",
    gradeLabel: "12. Sınıf",
    tema: "Üstel ve Logaritmik Fonksiyonlar",
    lead: "12. sınıf, matematiğe en ağır başlayan sınıftır: yıl üstel ve logaritmik fonksiyonlarla açılır ve ilk yazılı doğrudan buradan gelir. İyi haber, bu blok aynı zamanda YKS'nin istikrarlı konularından biri — ilk yazılıya çalışırken sınava da çalışmış olursun.",
    takvimNotu:
      "12. sınıf matematik 1. yazılısı okul düzeyinde ortak sınavdır; tarihini okul kasımın ilk yarısında belirler ve önceden duyurur. 12. sınıf ülke geneli ortak sınavlara girmez; tüm yazılılar okul düzeyindedir.",
    kapsam: [
      { topic: "ustel-fonksiyon", not: "Üstel fonksiyonun tanımı, grafiği, artan/azalan durumu ve üstel denklemlerde taban eşitleme." },
      { topic: "logaritma-fonksiyonu", not: "Logaritmanın tanımı, logaritma kuralları, taban değiştirme ve tanım kümesi koşulları." },
      { topic: "logaritmali-denklemler", not: "Logaritmik denklem ve eşitsizlikler; çözümü tanım kümesine göre eleme." },
    ],
    nasilSorulur: [
      "Üstel denklemlerin büyük kısmı 'iki tarafı aynı tabana getir, üsleri eşitle' mantığıyla çözülür; tabanı eşitleyemediğin yerde logaritma devreye girer.",
      "Logaritma sorularının çoğu kural uygulaması ve taban değiştirmedir; bir özdeşliği görememek tüm soruyu kilitler.",
      "Logaritmik denklemlerde cevap bulunduktan sonra mutlaka tanım kümesi kontrolü ister — bu adım atlanınca yanlış şık hazır bekler.",
    ],
    tuzaklar: [
      { baslik: "Tanım kümesini unutmak", aciklama: "log(f(x)) için f(x) > 0 olmalı; denklemi çözüp kökü tanım kümesinde kontrol etmeyen öğrenci fazladan kök kabul eder." },
      { baslik: "Taban ve argüman koşulu", aciklama: "Logaritmanın tabanı pozitif ve 1'den farklı olmalı; bu koşulu göz ardı etmek sahte çözüm üretir." },
      { baslik: "Üslü–logaritma geçişinde hata", aciklama: "aˣ = b ⇔ x = logₐb dönüşümünü ters çevirmek sık yapılan bir karıştırmadır." },
      { baslik: "log çarpımı toplama açarken", aciklama: "log(a+b) ile log a + log b aynı değildir; kural yalnızca çarpım/bölümde geçerlidir." },
    ],
    plan: [
      { aralik: "1. hafta", is: "Üstel fonksiyon ve denklemleri bitir; taban eşitleme ve üstel eşitsizliklerden bol soru çöz." },
      { aralik: "2. hafta", is: "Logaritma kuralları, taban değiştirme ve logaritmik denklemlere geç; her kuraldan 5 soru çöz." },
      { aralik: "Son 3 gün", is: "Üstel + logaritma karışık 30 soruluk deneme; her logaritmik denklemde tanım kümesi kontrolünü alışkanlık yap." },
    ],
    sss: [
      { soru: "12. sınıf matematik 1. yazılı hangi konulardan?", cevap: "Yıl üstel ve logaritmik fonksiyonlarla başladığı için ilk yazılı bu bloktandır: üstel fonksiyon ve denklemler, logaritma kavramı ve kuralları, logaritmik denklem ve eşitsizlikler. Kesin kapsam okulun yıllık planına göre değişebilir." },
      { soru: "12. sınıf Maarif Modeli'ne geçti mi?", cevap: "Hayır. Maarif Modeli 12. sınıfa 2027-2028'de gelecek; 2026-2027'de 12. sınıf hâlâ önceki programdadır. Bu yüzden türev ve integral de bu yıl sınavlarda ve YKS 2027'de geçerlidir." },
      { soru: "İlk yazılıya çalışmak YKS'ye de yarar mı?", cevap: "Evet. Üstel ve logaritma, AYT'nin istikrarlı bloklarından biri; ilk yazılı için kurduğun zemin doğrudan YKS netine döner." },
      { soru: "Sınav test mi, klasik mi olacak?", cevap: "Çoğu okul yazılısı açık uçlu (klasik) ve çözüm adımlarının puanlandığı sorulardan oluşur; bazı okullar karma yapar. Özellikle logaritmik denklemlerde tanım kümesi kontrolünü de yazıya dök." },
    ],
    soruTipleri: ["ustel-fonksiyon-ayt", "logaritma-kavrami-ayt", "logaritmik-denklem-ayt"],
  },
];

// ── 1. Dönem 2. Yazılı ───────────────────────────────────────────────────────
// Scope follows MEB's 2026-2027 konu–soru dağılım tabloları (2nd-exam columns):
// the exam is cumulative, so 1st-exam topics return next to the new ones
// (`yeni: true`). 9. sınıf is the nationwide exam of 6 Ocak 2027; its official
// table is published with the exam guide, so that entry lists the two themes
// taught this term and says so.
YAZILILAR.push(
  // ── 9. Sınıf ───────────────────────────────────────────────────────────────
  {
    slug: "9-sinif-matematik-2-yazili",
    sinav: 2,
    windowLabel: "6 Ocak 2027 Çarşamba · ülke geneli",
    kapsamNotu:
      "Bu sınav ülke geneli olduğu için resmî konu–soru dağılımı sınavdan önce MEB'in kılavuzuyla yayımlanır. Aşağıda dönem boyunca işlenen iki temanın başlıkları var; kılavuz çıkınca bu sayfayı güncelleyeceğiz.",
    grade: "9",
    track: "9",
    gradeLabel: "9. Sınıf",
    tema: "Sayılar + Nicelikler ve Değişimler",
    lead: "9. sınıfın ikinci matematik yazılısı sıradan bir okul sınavı değil: Türkiye'deki bütün 9. sınıfların aynı gün, aynı sorularla girdiği ülke geneli ortak sınav. Kapsam dönemin tamamı: 1. yazılının sayılar teması ile sonradan işlenen doğrusal fonksiyonlar, mutlak değer ve denklem–eşitsizlik problemleri.",
    takvimNotu:
      "9. sınıf matematik 1. dönem 2. yazılısı ülke geneli ortak sınavdır ve 6 Ocak 2027 Çarşamba günü yapılır. Soruları MEB hazırlar; sınav açık uçludur ve çözüm adımları puanlanır. Sınav saatini ve salonunu okulun duyurur.",
    kapsam: [
      { topic: "uslu-ifadeler-9", not: "Üs kuralları, negatif ve sıfır üs, sadeleştirme. 1. yazılıdan geliyor; unutulmuş olabilir, bir tur tekrar et." },
      { topic: "koklu-ifadeler-9", not: "Kök kuralları, köklü ifadelerde işlem ve paydayı rasyonel yapma." },
      { topic: "kumelerde-temel-kavramlar", not: "Sayı kümeleri ve küme sembolleriyle gösterim." },
      { topic: "gercek-sayilar", not: "Gerçek sayılarda işlem özellikleri, aralıklar ve sayı doğrusunda gösterim." },
      { topic: "dogrusal-fonksiyonlar-9", yeni: true, not: "f(x) = x referans fonksiyonu, eğim, grafik çizme ve grafikten değer okuma." },
      { topic: "mutlak-deger-fonksiyonlari-9", yeni: true, not: "f(x) = |x| grafiği, tepe noktası ve ötelemeler." },
      { topic: "birinci-derece-problemler-9", yeni: true, not: "Birinci dereceden denklem ve eşitsizliklerle modellenen problemler; çözüm kümesini sayı doğrusunda gösterme." },
    ],
    nasilSorulur: [
      "Ülke geneli sınavlar kazanım kazanım sorar: her soru tek bir öğrenme çıktısını ölçer ve çoğu, günlük hayattan kısa bir durumla başlar.",
      "Doğrusal fonksiyonda tipik soru bir tablo ya da grafik verip kuralı yazdırır, sonra bir değeri ya da eğimin anlamını sordurur.",
      "Mutlak değer fonksiyonunda grafik çizdirme ya da verilen V grafiğinin kuralını buldurma sık görülür.",
      "Üslü ve köklü ifadeler yine 'sadeleştir' biçiminde gelir; adımların tek tek yazılması beklenir.",
    ],
    tuzaklar: [
      { baslik: "Eşitsizlikte yönü çevirmemek", aciklama: "İki tarafı negatif bir sayıyla çarpar ya da bölersen eşitsizlik yön değiştirir: −2x < 6 ise x > −3." },
      { baslik: "Eğimi ters hesaplamak", aciklama: "Eğim dikey değişimin yatay değişime oranıdır: (y₂ − y₁)/(x₂ − x₁). Pay ile paydayı yer değiştirmek en sık hatadır." },
      { baslik: "Mutlak değerde tek durumu yazmak", aciklama: "|x − 2| = 5 denkleminin iki çözümü vardır: x − 2 = 5 ve x − 2 = −5. İkincisini unutan yarım puan alır." },
      { baslik: "Yalnızca sonucu yazmak", aciklama: "Kâğıdını seni tanımayan bir öğretmen okuyacak. İşlem adımı yazılmamış doğru sonuç, tam puan getirmeyebilir." },
    ],
    plan: [
      { aralik: "1. hafta", is: "1. yazılı kâğıdını aç; üslü–köklü ifadeler, kümeler ve aralıklardan kaybettiğin soruları yeniden çöz, her konudan 15 soru daha çöz." },
      { aralik: "2. hafta", is: "Doğrusal fonksiyon, mutlak değer fonksiyonu ve denklem–eşitsizlik problemlerini çalış; her grafiği elle çiz." },
      { aralik: "Son hafta", is: "İki temadan karışık, açık uçlu sorular çöz. Her çözümü bir başkası okuyacakmış gibi adım adım yaz." },
    ],
    sss: [
      { soru: "9. sınıf matematik 2. yazılı ne zaman?", cevap: "6 Ocak 2027 Çarşamba günü. Bu sınav ülke geneli ortak sınavdır; bütün 9. sınıflar aynı gün, aynı sorularla sınava girer." },
      { soru: "9. sınıf 2. yazılıda hangi konular çıkacak?", cevap: "Dönem boyunca işlenen iki tema: Sayılar (üslü ve köklü ifadeler, kümeler, gerçek sayılar ve aralıklar) ile Nicelikler ve Değişimler (doğrusal fonksiyonlar, mutlak değer fonksiyonları, birinci dereceden denklem ve eşitsizlik problemleri). Resmî konu–soru dağılımını MEB sınavdan önce kılavuzla yayımlar." },
      { soru: "Ülke geneli ortak sınav test mi?", cevap: "Hayır. Sorular açık uçludur ve çözüm adımları puanlanır. Bu yüzden işlemi düzenli yazmak, sonucu bulmak kadar önemlidir." },
      { soru: "1. yazılının konuları yine çıkar mı?", cevap: "Evet. Sınav dönemin tamamını kapsar; 1. yazılıda sorulan sayılar temasından da soru gelir." },
      { soru: "Bu sınavın notu karneye girer mi?", cevap: "Evet. Ülke geneli ortak sınav, o dersin dönem içindeki yazılılarından biri olarak değerlendirilir ve dönem puanına katılır." },
    ],
    soruTipleri: ["dogrusal-fonksiyonlar-9", "mutlak-deger-fonksiyonlari-9", "birinci-derece-problemler-9", "gercek-sayilar", "koklu-ifadeler", "uslu-ifadeler"],
  },
  // ── 10. Sınıf ──────────────────────────────────────────────────────────────
  {
    slug: "10-sinif-matematik-2-yazili",
    sinav: 2,
    grade: "10",
    track: "10",
    gradeLabel: "10. Sınıf",
    tema: "Üçgenler + İstatistik + Sayılar + Karesel Fonksiyon",
    lead: "10. sınıfın ikinci yazılısı dönemin en geniş kapsamlı sınavı. Birinci yazılının üçgen konuları yerinde duruyor; üstüne istatistiğin devamı, sayılar teması (asal çarpanlar, EBOB–EKOK, bölünebilme) ve fonksiyonların başı (karesel fonksiyon) geliyor.",
    takvimNotu:
      "10. sınıf matematik 1. dönem 2. yazılısı okul düzeyinde ortak sınavdır; tarihini okul belirler ve önceden duyurur. Genellikle aralık sonu ile ocak ayının ilk yarısındadır. MEB'in tablolarına göre bu sınavda 5 senaryo var ve soru sayısı senaryoya göre 7 ile 11 arasında değişiyor.",
    kapsam: [
      { topic: "dik-ucgen-trigonometri-10", not: "Dik üçgende trigonometrik oranlar ve özdeşlikler. 1. yazılıdan geliyor." },
      { topic: "ucgende-yardimci-elemanlar-10", not: "Kenarortay, açıortay ve yükseklik bağıntıları." },
      { topic: "ucgende-alan-10", not: "Taban–yükseklik ve iki kenar–sinüs alan formülleri." },
      { topic: "sinus-kosinus-teoremi-10", not: "Sinüs ve kosinüs teoremleriyle kenar ve açı bulma." },
      { topic: "iki-kategorik-degisken-10", not: "Çapraz tablo okuma ve iki kategorik değişken arasındaki ilişkiyi yorumlama." },
      { topic: "veri-surec-10", yeni: true, not: "Veri toplama, bulgulara ulaşma ve sonuçları değerlendirme süreci." },
      { topic: "asal-carpanlar-bolenler-10", yeni: true, not: "Asal çarpanlara ayırma, bölen sayısı ve bölenlerle ilgili problemler." },
      { topic: "ebob-ekok-10", yeni: true, not: "EBOB ve EKOK hesabı ve bunlarla kurulan problemler." },
      { topic: "bolunebilme-kurallari-10", yeni: true, not: "2, 3, 4, 5, 8, 9, 10 ve 11 ile bölünebilme kuralları." },
      { topic: "fonksiyon-kavrami-tyt", yeni: true, not: "Bir bağıntının fonksiyon olma şartları; tanım ve görüntü kümesi." },
      { topic: "karesel-fonksiyonlar-10", yeni: true, not: "f(x) = x² referans fonksiyonu, parabol, tepe noktası ve grafiğin yorumu." },
    ],
    nasilSorulur: [
      "Üçgen soruları 1. yazılıdakiyle aynı tiplerdedir; çoğu senaryoda en az bir sinüs ya da kosinüs teoremi sorusu bulunur.",
      "EBOB–EKOK neredeyse her zaman kelime problemiyle gelir: 'eşit parçalara ayırma' EBOB'u, 'birlikte tekrar etme' EKOK'u ister.",
      "Bölünebilmede tipik soru, içinde bilinmeyen rakam olan bir sayının belli bir sayıya bölünmesi için o rakamın alabileceği değerleri sordurur.",
      "Karesel fonksiyonda grafik çizdirme, tepe noktasını bulma ve grafikten en büyük ya da en küçük değeri okuma öne çıkar.",
    ],
    tuzaklar: [
      { baslik: "EBOB ile EKOK'u karıştırmak", aciklama: "Problemi çözmeden önce hangisinin istendiğini kâğıda yaz: parçalara bölüyorsan EBOB, ortak katı arıyorsan EKOK." },
      { baslik: "Bölen sayısında üsse 1 eklememek", aciklama: "2³·3² sayısının pozitif bölen sayısı (3+1)(2+1) = 12'dir; üsleri doğrudan çarpmak yanlış sonuç verir." },
      { baslik: "Tepe noktasının işaretini şaşırmak", aciklama: "f(x) = (x − 2)² + 1 parabolünün tepe noktası (2, 1)'dir; parantez içindeki işaret ters okunur." },
      { baslik: "Yalnızca yeni konulara çalışmak", aciklama: "Üçgen konuları 2. yazılının tablosunda da yer alıyor. Kasımda çalışıp bıraktıysan bir tur tekrar şart." },
    ],
    plan: [
      { aralik: "1. hafta", is: "1. yazılı kâğıdındaki üçgen hatalarını kapat; sinüs–kosinüs teoremi ve alandan 20 soru çöz." },
      { aralik: "2. hafta", is: "Sayılar temasını bitir: asal çarpanlar, EBOB–EKOK problemleri ve bölünebilme kuralları. Kuralları tek sayfaya çıkar." },
      { aralik: "Son hafta", is: "Karesel fonksiyonu ve istatistiği çalış, ardından bütün temalardan karışık açık uçlu sorular çöz." },
    ],
    sss: [
      { soru: "10. sınıf matematik 2. yazılı hangi konulardan?", cevap: "Dönemin tamamından: üçgenler (trigonometrik oranlar, yardımcı elemanlar, alan, sinüs–kosinüs teoremleri), istatistik, sayılar (asal çarpanlar, EBOB–EKOK, bölünebilme) ve fonksiyonların başı (fonksiyon olma şartları, karesel fonksiyon). Kesin kapsam okulun seçtiği senaryoya göre değişir." },
      { soru: "10. sınıf 2. yazılı ülke geneli mi?", cevap: "Hayır. 10. sınıfın ülke geneli ortak matematik sınavı 9 Haziran 2027'de, ikinci dönemin ikinci yazılısında yapılır. Birinci dönemin ikinci yazılısı okul düzeyindedir." },
      { soru: "Kaç soru sorulacak?", cevap: "MEB'in konu–soru dağılım tablolarına göre senaryoya bağlı olarak 7 ile 11 arasında açık uçlu soru. Hangi senaryonun kullanılacağını okulunun matematik zümresi belirler." },
      { soru: "Üçgen konuları yine çıkar mı?", cevap: "Evet. İkinci yazılının tablosunda üçgen kazanımları da yer alıyor; yalnızca soru ağırlığı senaryoya göre değişiyor." },
    ],
  },
  // ── 11. Sınıf ──────────────────────────────────────────────────────────────
  {
    slug: "11-sinif-matematik-2-yazili",
    sinav: 2,
    grade: "11",
    track: "11",
    gradeLabel: "11. Sınıf",
    tema: "İstatistik + Dörtgenler ve Çokgenler + Trigonometriye Giriş",
    lead: "11. sınıfın ikinci yazılısında geometri bloğu tamamlanıyor: özel dörtgenler ve çokgenler bütün senaryolarda var. Birinci yazılının istatistik konuları da yerinde. Bazı senaryolarda ise yılın üçüncü teması, trigonometrik fonksiyonlar, ilk kez sınava giriyor.",
    takvimNotu:
      "11. sınıf matematik 1. dönem 2. yazılısı okul düzeyinde ortak sınavdır; tarihini okul belirler ve önceden duyurur. Genellikle aralık sonu ile ocak ayının ilk yarısındadır. MEB'in tablolarına göre bu sınavda 7 senaryo var ve soru sayısı 6 ile 10 arasında değişiyor.",
    kapsam: [
      { label: "İki nicel değişken ve serpme diyagramı", soon: true, not: "Serpme diyagramını okuma, ilişkinin yönünü ve gücünü belirleme. 1. yazılıdan geliyor." },
      { label: "Korelasyon katsayısı", soon: true, not: "r'nin işareti ve büyüklüğü; korelasyonun nedensellik olmadığını ayırt etme." },
      { topic: "dortgenler-tyt", yeni: true, not: "Özel dörtgenler (paralelkenar, eşkenar dörtgen, dikdörtgen, kare, yamuk, deltoid) ve çokgenler: içbükey–dışbükey ayrımı, iç ve dış açılar, köşegen sayısı, çokgen problemleri. Çokgenler yedi senaryonun yedisinde de var." },
      { topic: "yonlu-acilar", yeni: true, not: "Yönlü açılar, derece–radyan dönüşümü ve birim çember. Yedi senaryonun dördünde trigonometri yer alıyor." },
      { topic: "trigonometrik-fonksiyonlar", yeni: true, not: "Sinüs ve kosinüs referans fonksiyonları, grafikleri ve bölgelere göre işaretler." },
    ],
    nasilSorulur: [
      "Çokgen soruları formül uygulamasıdır: kenar sayısı verilip iç açılar toplamı ya da köşegen sayısı istenir, ya da tersine açıdan kenar sayısı buldurulur.",
      "Özel dörtgenlerde köşegen özellikleri (birbirini ortalama, dik kesişme, eş uzunlukta olma) üzerinden uzunluk ve alan sorulur.",
      "İstatistik soruları yine yorum ister: serpme diyagramından yön ve güç okunur, korelasyon katsayısı yorumlanır.",
      "Trigonometri giren senaryolarda soru, bir açının birim çemberdeki yerini ve sinüs–kosinüs değerinin işaretini belirletir.",
    ],
    tuzaklar: [
      { baslik: "Çokgen formüllerini karıştırmak", aciklama: "n kenarlı dışbükey çokgende iç açılar toplamı (n − 2)·180°, dış açılar toplamı her zaman 360°, köşegen sayısı n(n − 3)/2'dir." },
      { baslik: "Düzgün olmayan çokgende bir açıyı bölerek bulmak", aciklama: "Bir iç açı = toplam ÷ n yalnızca düzgün çokgende geçerlidir; soruda 'düzgün' yazmıyorsa kullanma." },
      { baslik: "Yamukta alan formülünü yanlış kurmak", aciklama: "Alan, paralel kenarların toplamının yarısı ile yüksekliğin çarpımıdır: (a + c)·h/2. Yan kenar yükseklik değildir." },
      { baslik: "Derece ile radyanı karıştırmak", aciklama: "π radyan 180°'dir. Hesap makinesi mantığıyla π'yi 3,14 derece gibi düşünmek birim çember sorusunu baştan bozar." },
    ],
    plan: [
      { aralik: "1. hafta", is: "1. yazılı kâğıdına dön: serpme diyagramı ve korelasyon yorumlarını tekrar et, dörtgen özelliklerini tek şemada topla." },
      { aralik: "2. hafta", is: "Özel dörtgenlerde alan ve köşegen soruları, ardından çokgen formülleri. Her formülden 10 soru çöz." },
      { aralik: "Son hafta", is: "Öğretmenine senaryoyu sor. Trigonometri varsa birim çember ve işaretleri çalış; yoksa bu haftayı karışık geometri sorularına ver." },
    ],
    sss: [
      { soru: "11. sınıf matematik 2. yazılı hangi konulardan?", cevap: "İstatistik (iki nicel değişken, serpme diyagramı, korelasyon), dörtgenler ve özel dörtgenler, çokgenler ve bazı senaryolarda trigonometrik referans fonksiyonlar. Kesin kapsam okulun seçtiği senaryoya göre değişir." },
      { soru: "Trigonometri 2. yazılıda çıkar mı?", cevap: "Okuluna bağlı. MEB'in yedi senaryosundan dördünde trigonometrik referans fonksiyonlardan soru var. Okulun dönem sonuna kadar trigonometriye geldiyse çıkabilir; öğretmenine sor." },
      { soru: "Kaç soru sorulacak?", cevap: "Senaryoya göre 6 ile 10 arasında açık uçlu soru. Çokgenlerle ilgili kazanımlar bütün senaryolarda yer alıyor." },
      { soru: "11. sınıfın ülke geneli ortak matematik sınavı var mı?", cevap: "Hayır. 2026-2027'de 11. sınıfın bütün matematik yazılıları okul düzeyindedir." },
    ],
    soruTipleri: ["dortgenler-tyt"],
  },
  // ── 12. Sınıf ──────────────────────────────────────────────────────────────
  {
    slug: "12-sinif-matematik-2-yazili",
    sinav: 2,
    grade: "12",
    track: "12",
    gradeLabel: "12. Sınıf",
    tema: "Logaritma + Diziler + Trigonometri + Dönüşümler",
    lead: "12. sınıfın ikinci yazılısı iki dünyayı birleştiriyor: birinci yazılının logaritma ve dizileri ile yeni gelen trigonometri. Trigonometrik denklemler bütün senaryolarda var. İyi haber aynı: buradaki her başlık AYT'de de karşına çıkıyor.",
    takvimNotu:
      "12. sınıf matematik 1. dönem 2. yazılısı okul düzeyinde ortak sınavdır; tarihini okul belirler ve önceden duyurur. Genellikle aralık sonu ile ocak ayının ilk yarısındadır. MEB'in tablolarına göre bu sınavda 7 senaryo var ve soru sayısı 5 ile 9 arasında değişiyor.",
    kapsam: [
      { topic: "logaritma-fonksiyonu", not: "Logaritma kuralları, taban değiştirme ve tanım kümesi. 1. yazılıdan geliyor." },
      { topic: "logaritmali-denklemler", not: "Logaritmik denklem ve eşitsizlikler; kökleri tanım kümesine göre eleme." },
      { topic: "aritmetik-dizi", not: "Genel terim, ortak fark ve ilk n terim toplamı." },
      { topic: "geometrik-dizi", not: "Genel terim, ortak çarpan ve ilk n terim toplamı." },
      { topic: "toplam-fark-formulleri", yeni: true, not: "Toplam–fark ve iki kat açı formülleri; özel açılardan yeni değerler üretme." },
      { topic: "trigonometrik-denklemler", yeni: true, not: "sin x = a, cos x = a, tan x = a tipinde denklemler ve çözüm kümeleri. Yedi senaryonun hepsinde var." },
      { topic: "geometrik-donusumler-9", yeni: true, not: "Analitik düzlemde öteleme, dönme ve simetri. 12. sınıfta koordinatlarla çalışılır; temel fikir için bu anlatım yeterli bir başlangıç." },
    ],
    nasilSorulur: [
      "Trigonometrik denklemde çözüm kümesi istenir: ya belli bir aralıktaki bütün çözümler ya da genel çözüm.",
      "Toplam–fark formülleri çoğunlukla 15°, 75°, 105° gibi bir açının değerini buldurarak ya da bir ifadeyi sadeleştirerek sorulur.",
      "Dizilerde tipik soru iki terimi verip genel terimi ya da ilk n terimin toplamını isteyen sorudur.",
      "Dönüşümlerde bir noktanın ya da şeklin öteleme, yansıma veya dönme altındaki görüntüsünün koordinatları sorulur.",
    ],
    tuzaklar: [
      { baslik: "Trigonometrik denklemde tek çözüm yazmak", aciklama: "sin x = 1/2 denkleminin [0, 2π) aralığında iki çözümü vardır: π/6 ve 5π/6. Aralık verilmediyse + 2kπ ile genel çözüm yazılır." },
      { baslik: "İki kat açıda işaret hatası", aciklama: "cos 2x = cos²x − sin²x'tir; artı ile yazmak sonucu her zaman 1 yapar. Formülü önce harflerle yaz." },
      { baslik: "Tanım kümesini kontrol etmemek", aciklama: "Logaritmik denklemde bulduğun kökü mutlaka log'un içine koy: içerisi pozitif değilse o kök çözüm değildir." },
      { baslik: "Aritmetik ile geometrik diziyi karıştırmak", aciklama: "Ardışık terimlerin farkı sabitse aritmetik, oranı sabitse geometriktir. Önce hangisi olduğunu belirle, sonra formülü seç." },
    ],
    plan: [
      { aralik: "1. hafta", is: "1. yazılı kâğıdındaki logaritma hatalarını kapat; aritmetik ve geometrik diziden 20 soru çöz." },
      { aralik: "2. hafta", is: "Toplam–fark ve iki kat açı formüllerini ezberlemeden, türeterek çalış; ardından trigonometrik denklemlere geç." },
      { aralik: "Son hafta", is: "Her gün 5 trigonometrik denklem çöz ve çözüm kümesini tam yaz. Dönüşümleri tekrar et, karışık bir deneme çöz." },
    ],
    sss: [
      { soru: "12. sınıf matematik 2. yazılı hangi konulardan?", cevap: "Logaritma, diziler, trigonometri (toplam–fark ve iki kat açı formülleri, trigonometrik denklemler) ve dönüşümler. Trigonometrik denklemler MEB'in yedi senaryosunun hepsinde yer alıyor. Kesin kapsam okulun seçtiği senaryoya göre değişir." },
      { soru: "Üstel fonksiyon yine çıkar mı?", cevap: "İkinci yazılının tablolarında ağırlık logaritma kazanımlarında; üstel fonksiyonun ilk kazanımı bu sınavın tablosunda yer almıyor. Yine de logaritma soruları üstel bilgini kullanır." },
      { soru: "Kaç soru sorulacak?", cevap: "Senaryoya göre 5 ile 9 arasında açık uçlu soru. Hangi senaryonun kullanılacağını okulunun matematik zümresi belirler." },
      { soru: "Bu sınava çalışmak AYT'ye yarar mı?", cevap: "Evet. Logaritma, diziler ve trigonometri AYT'nin düzenli soru gelen konuları; yazılıya çalışırken sınava da çalışmış olursun." },
    ],
    soruTipleri: ["logaritma-kavrami-ayt", "logaritmik-denklem-ayt"],
  },
);

// 11. sınıfın yeni istatistik başlıklarının kısa anlatımı 2. yazılı sayfasında da görünür.
{
  const ilk = YAZILILAR.find((y) => y.slug === "11-sinif-matematik-1-yazili");
  const ikinci = YAZILILAR.find((y) => y.slug === "11-sinif-matematik-2-yazili");
  if (ilk && ikinci) ikinci.ekAnlatim = ilk.ekAnlatim;
}

/** The same grade's page for the other exam of the term (1 ↔ 2), if any. */
export function digerYazili(y: YaziliGrade): YaziliGrade | undefined {
  return YAZILILAR.find((o) => o.grade === y.grade && (o.sinav ?? 1) !== (y.sinav ?? 1));
}

export function getYazili(slug: string): YaziliGrade | undefined {
  return YAZILILAR.find((y) => y.slug === slug);
}

export function yaziliSlugs(): string[] {
  return YAZILILAR.map((y) => y.slug);
}
