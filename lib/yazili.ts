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

export interface KapsamItem {
  /** Curriculum topic slug → links to /konular/<topic>. */
  topic?: string;
  /** Display label when there is no live lesson yet (Maarif's new topics). */
  label?: string;
  /** true = konu anlatımı henüz yok; shown with a "yakında" note. */
  soon?: boolean;
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

export interface YaziliGrade {
  slug: string; // → /yazili-sinavlar/<slug>
  grade: "9" | "10" | "11" | "12";
  track: Track;
  gradeLabel: string; // "9. Sınıf"
  /** Maarif theme(s) this exam covers, for the eyebrow. */
  tema: string;
  lead: string;
  /** Grade-specific timing / ülke-geneli note. */
  takvimNotu: string;
  kapsam: KapsamItem[];
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
      "9. sınıf matematik 1. yazılısı okul düzeyinde ortak sınavdır; tarihini okulun kasım ayının ilk yarısında belirleyip en az bir hafta önceden duyurur. (Dikkat: 9. sınıfın ülke geneli ortak matematik sınavı 6 Ocak 2027'de, yani 1. dönemin ikinci yazılısında yapılır — bu ilk yazılı değildir.)",
    kapsam: [
      { topic: "kumelerde-temel-kavramlar", not: "Küme işlemleri (birleşim, kesişim, fark, tümleyen) ve Venn şemasıyla eleman sayısı." },
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
      { baslik: "Negatif tabanda parantez", aciklama: "(−2)⁴ ile −2⁴ aynı değildir; parantez yoksa üs önce tabana, sonra işarete uygulanır." },
      { baslik: "Aralıkta açık/kapalı uç", aciklama: "'den büyük' ile 'den büyük eşit' farkı, uç noktayı dahil edip etmemeyi değiştirir — çözümü tümden kaydırır." },
      { baslik: "Paydayı rasyonel yapmadan bırakmak", aciklama: "Köklü ifadelerde cevap genelde paydada kök kalmayacak biçimde beklenir; eşini bulamayınca buradan şaşılır." },
    ],
    plan: [
      { aralik: "1. hafta", is: "Kümeler ve gerçek sayıları bitir; her konunun çözümlü sorularından 15–20 soru çöz, yanlışları not et." },
      { aralik: "2. hafta", is: "Üslü ve köklü ifadelere geç; kural tablosunu tek sayfaya çıkar, her kural için 5 soru çöz." },
      { aralik: "Son 3 gün", is: "Dört konudan karışık 30 soruluk bir deneme çöz; sadece yanlış çıkan kuralları tekrar et." },
    ],
    sss: [
      { soru: "9. sınıf matematik 1. yazılı ne zaman?", cevap: "Okul düzeyinde ortak sınav olduğu için tarihini okulun belirler; genelde kasım ayının ilk yarısında yapılır ve en az bir hafta önceden duyurulur. Kesin tarihi okulunun duyurularından ve e-Okul'dan takip et." },
      { soru: "Hangi konulardan sorumluyum?", cevap: "Sayılar temasının ilk başlıkları: kümeler, gerçek sayılar, üslü ifadeler ve köklü ifadeler. Kesin kapsam okulun yıllık planına göre biraz değişebilir." },
      { soru: "Sınav test mi, klasik mi olacak?", cevap: "Çoğu okul yazılısı açık uçlu (klasik) ve çözüm adımlarının puanlandığı sorulardan oluşur; bazı okullar karma yapar. Her adımı yazmayı alışkanlık hâline getir." },
    ],
    soruTipleri: ["koklu-ifadeler", "uslu-ifadeler"],
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
      "10. sınıf matematik 1. yazılısı okul düzeyinde ortak sınavdır; tarih okulun kasım ayının ilk yarısında belirlenir ve önceden duyurulur. (10. sınıfın ülke geneli ortak matematik sınavı çok daha sonra, 9 Haziran 2027'de yapılır — bu ilk yazılıyla karıştırma.)",
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
      { soru: "1. yazılı ne zaman yapılacak?", cevap: "Okul düzeyinde ortak sınav olduğu için tarihini okulun belirler; genelde kasımın ilk yarısında yapılır ve en az bir hafta önceden duyurulur." },
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
      "11. sınıf matematik 1. yazılısı okul düzeyinde ortak sınavdır; tarih okulun kasımın ilk yarısında belirler ve önceden duyurur. 11. sınıfın bu yıl ülke geneli ortak matematik sınavı yoktur; tüm matematik yazılıları okul düzeyindedir.",
    kapsam: [
      { label: "İki nicel değişken ve serpme diyagramı", soon: true, not: "İki nicel değişken arasındaki ilişkiyi serpme diyagramıyla gösterme ve okuma — Maarif'in 11. sınıfa yeni getirdiği başlık." },
      { label: "Korelasyon katsayısı", soon: true, not: "İlişkinin yönü ve gücü; korelasyonun nedensellik anlamına gelmediğini ayırt etme." },
      { topic: "dortgenler-tyt", not: "Özel dörtgenler (paralelkenar, eşkenar dörtgen, yamuk, deltoid, kare, dikdörtgen), hiyerarşileri; kenar, açı, köşegen ve alan." },
      { topic: "veri-istatistik-tyt", not: "Veri okuma, merkezî eğilim ve yayılım ölçüleri — istatistik temasının zeminini tazelemek için." },
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
      { soru: "Korelasyon konusunun anlatımı sitede var mı?", cevap: "Serpme diyagramı ve korelasyon, Maarif'in 11. sınıfa yeni getirdiği başlıklar; konu anlatımları hazırlanıyor. Bu arada veri ve istatistik ile dörtgenler sayfalarından çalışabilirsin." },
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
      "12. sınıf matematik 1. yazılısı okul düzeyinde ortak sınavdır; tarih okulun kasımın ilk yarısında belirler ve önceden duyurur. 12. sınıf ülke geneli ortak sınavlara girmez; tüm yazılılar okul düzeyindedir.",
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
    ],
    soruTipleri: ["ustel-fonksiyon-ayt", "logaritma-kavrami-ayt", "logaritmik-denklem-ayt"],
  },
];

export function getYazili(slug: string): YaziliGrade | undefined {
  return YAZILILAR.find((y) => y.slug === slug);
}

export function yaziliSlugs(): string[] {
  return YAZILILAR.map((y) => y.slug);
}
