import type { TopicSoruTipleri } from "./types";

// Köklü İfadeler (TYT · Üslü-Köklü kümesi; köklü sorusu son 8 yılın 8'inde de
// çıktı — her yıl 1 soru). Teacher's catalogue of how ÖSYM asks this topic.
// Ordered easy→hard. Every örnek is hand-verified; celdiriciler map each
// classic wrong answer to the exact mistake behind it.
const kb: TopicSoruTipleri = {
  slug: "koklu-ifadeler",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "koklu-ifadeler-01-kok-disina-cikarma",
      ad: "Kök dışına çıkarma (kısmi kök: √(a²b) = a√b)",
      aciklama:
        "Kök içindeki sayının en büyük tam kare çarpanı dışarı alınır (√72 = 6√2). Konunun temel refleksi; hemen her köklü sorunun ilk adımı.",
      yontem: [
        "Kök içini EN BÜYÜK tam kare çarpanına ayır: 72 = 36⋅2.",
        "Tam kareyi dışarı al: √(36⋅2) = 6√2.",
        "Küçük çarpanla başladıysan (4⋅18 gibi) içeride hâlâ tam kare var demektir; tekrar sadeleştir.",
      ],
      celdiriciler: [
        { hata: "En büyük tam kareyi bulamayıp yarım sadeleştirmek (√72 = 2√18 bırakmak)", uretir: "2√18 — sade olmayan, şıklarla eşleşmeyen biçim" },
        { hata: "Tam kareyi köksüz dışarı alırken karekökünü almamak (36 çarpanını 36 olarak yazmak)", uretir: "36√2" },
        { hata: "Kök içindeki çarpanları toplamak (√(36⋅2) = √38 gibi)", uretir: "√38" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "√72 ifadesinin en sade biçimi nedir?", cevap: "√72 = √(36⋅2) = 6√2" },
    },
    {
      id: "koklu-ifadeler-02-benzer-kok-toplama",
      ad: "Köklü toplama-çıkarma (benzer kökleri birleştirme)",
      aciklama:
        "Kök içleri farklı görünen terimler (√48, √27, √75) sadeleşince aynı köke iner; katsayılar toplanır. ÖSYM'nin en sevdiği köklü işlem kalıbı.",
      yontem: [
        "Her kökü ayrı ayrı sadeleştir: √48 = 4√3, √27 = 3√3, √75 = 5√3.",
        "Benzer kökleri (kök içi aynı olanları) grupla; katsayıları işaretiyle topla.",
        "√a + √b = √(a+b) DEĞİLDİR; sadeleşmeden toplama yapılmaz.",
      ],
      celdiriciler: [
        { hata: "Kök içlerini doğrudan toplamak (√48 + √27 − √75 = √0 = 0 sanmak)", uretir: "0" },
        { hata: "Bir kökü yanlış sadeleştirmek (√48 = 2√12 bırakıp katsayıyı 2 almak)", uretir: "Yanlış katsayı, ör. 0 veya 6√3" },
        { hata: "Çıkarmada işareti katsayıya taşımamak", uretir: "4+3+5 = 12 ⇒ 12√3" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "√48 + √27 − √75 işleminin sonucu kaçtır?", cevap: "4√3 + 3√3 − 5√3 = 2√3" },
    },
    {
      id: "koklu-ifadeler-03-kok-icine-alma-karsilastirma",
      ad: "Kök içine alma ve köklü büyüklük karşılaştırma (a√b = √(a²b))",
      aciklama:
        "3√5 ile 5√2 gibi katsayılı kökler kök içine alınarak (√45 ile √50) karşılaştırılır. Sıralama sorusu olarak da üç sayıyla gelir.",
      yontem: [
        "Katsayıyı karesiyle içeri al: a√b = √(a²b) (a > 0).",
        "3√5 = √45, 5√2 = √50.",
        "Aynı kök derecesinde artık yalnız kök içleri karşılaştırılır: 45 < 50 ⇒ 3√5 < 5√2.",
      ],
      celdiriciler: [
        { hata: "Katsayıyı karesini almadan içeri sokmak (3√5 = √15 yazmak)", uretir: "√15 ile √10 karşılaştırması — ters sıralama" },
        { hata: "Yalnız katsayılara bakmak (5 > 3 diye 5√2 demek — burada tesadüfen doğru, üç sayılı sıralamada yanıltır)", uretir: "Gerekçesiz, genellenince yanlış sıralama" },
        { hata: "Yalnız kök içlerine bakmak (√5 > √2 diye 3√5 büyük demek)", uretir: "3√5 > 5√2 — yanlış" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "3√5 ile 5√2 sayılarından hangisi daha büyüktür?", cevap: "3√5 = √45, 5√2 = √50; 45 < 50 ⇒ 5√2 daha büyüktür" },
    },
    {
      id: "koklu-ifadeler-04-carpma-bolme",
      ad: "Köklü çarpma-bölme (√a⋅√b = √(ab) birleştirme)",
      aciklama:
        "Aynı dereceli köklerde çarpma/bölme kök içlerini birleştirerek yapılır; sonuç çoğu zaman tam kareye iner. Karma işlem sorusu olarak gelir.",
      yontem: [
        "Çarpımda kök içlerini çarp: √6⋅√8 = √48.",
        "Bölmede kök içlerini böl: √48/√3 = √16.",
        "Sonucu sadeleştir: √16 = 4. İçler birleştirilmeden ezbere işlem yapma.",
      ],
      celdiriciler: [
        { hata: "Kök içlerini toplamak (√6⋅√8 = √14 yazmak)", uretir: "√(14/3) — şıklarda olmayan ifade" },
        { hata: "√16'yı 8 sanmak (kökü ikiye bölme yanılgısı)", uretir: "8" },
        { hata: "Bölmede içleri bölmek yerine çıkarmak (48 − 3 = 45)", uretir: "√45 = 3√5" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "(√6 ⋅ √8) / √3 işleminin sonucu kaçtır?", cevap: "√48/√3 = √16 = 4" },
    },
    {
      id: "koklu-ifadeler-05-ardisik-tamsayi",
      ad: "Kökün ardışık tam sayılar arasına yerleştirilmesi (√50 tipi)",
      aciklama:
        "Tam kare olmayan bir kökün hangi iki ardışık tam sayı arasında olduğu veya hangi tam sayıya daha yakın olduğu sorulur. Sayı doğrusu/eşitsizlik kılığında da gelir.",
      yontem: [
        "Kök içini saran iki tam kareyi bul: 81 < 90 < 100.",
        "Karekök al: 9 < √90 < 10.",
        "Yakınlık sorulursa kök içinin hangi tam kareye yakın olduğuna bak (90, 81'e 9 uzak, 100'e 10 uzak ⇒ 9'a ve 10'a yakınlık karşılaştırılır).",
      ],
      celdiriciler: [
        { hata: "Kök içini 2'ye bölerek tahmin etmek (√90 ≈ 45 sanmak)", uretir: "45 civarı — tamamen yanlış aralık" },
        { hata: "Tam kareleri yanlış anmak (√90'ı 8 ile 9 arasına koymak)", uretir: "8 < √90 < 9" },
        { hata: "Aralığın uçlarını dahil etmek (√81 = 9 iken 90 için de eşitlik bırakmak)", uretir: "9 ≤ √90 gibi hatalı eşitsizlik" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "√90 sayısı hangi ardışık iki tam sayı arasındadır?", cevap: "81 < 90 < 100 ⇒ 9 < √90 < 10, yani 9 ile 10 arasında" },
    },
    {
      id: "koklu-ifadeler-06-mutlak-deger-tuzagi",
      ad: "√(x²) = |x| tuzağı (işaretli harfli ifadeler)",
      aciklama:
        "x'in işareti verilip √(x²) veya √(ax²) içeren ifade sadeleştirilir. √(x²) = x yazan öğrenci işaret hatasına düşer; ÖSYM'nin bilinçli kurduğu ayrıntı sorusu.",
      yontem: [
        "√(x²) = |x| — her zaman. x'in işaretine göre aç: x < 0 ise |x| = −x.",
        "Katsayılı biçimde önce tam kareyi ayır: √(9x²) = 3|x|.",
        "Verilen işaret bilgisiyle mutlak değeri kaldır, kalan cebiri topla.",
      ],
      celdiriciler: [
        { hata: "√(9x²) = 3x yazmak (mutlak değeri atlamak)", uretir: "3x − 2x = x" },
        { hata: "x < 0 iken |x| = x almak (işaret bilgisini kullanmamak)", uretir: "x" },
        { hata: "√(9x²)'de 9'un kökünü almamak (9|x| yazmak)", uretir: "−9x − 2x = −11x" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      kombinasyon: ["uslu-ifadeler"],
      ornek: { soru: "x < 0 olmak üzere √(9x²) − 2x ifadesinin eşiti nedir?", cevap: "√(9x²) = 3|x| = −3x ⇒ −3x − 2x = −5x" },
    },
    {
      id: "koklu-ifadeler-07-ic-ice-kokler",
      ad: "İç içe kökler (√(a√a) tipini kesirli üsse çevirme)",
      aciklama:
        "√(a√a), kök içinde kök barındıran ifadeler. En sağlam yol kesirli üsse çevirmektir: √a = a^(1/2), kökün kökü üsleri çarpar. Zor bloğun köklü sorusu.",
      yontem: [
        "İçten dışa yaz: 5√5 = 5¹⋅5^(1/2) = 5^(3/2).",
        "Dış kökü üs çarpımıyla uygula: √(5^(3/2)) = 5^(3/4).",
        "Gerekirse kök yazımına dön: 5^(3/4) = ⁴√(5³) = ⁴√125.",
      ],
      celdiriciler: [
        { hata: "Kökün kökünde üsleri çarpmak yerine toplamak (5^(3/2 + 1/2) = 5² yazmak)", uretir: "25" },
        { hata: "İçteki çarpımı 5^(1/2)⋅5^(1/2) = 5 sanmak (5¹ çarpanını unutmak)", uretir: "5^(1/2) = √5" },
        { hata: "√(5√5) = 5√5 sanmak (dış kökü yok saymak)", uretir: "5^(3/2)" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["uslu-ifadeler"],
      ornek: { soru: "√(5√5) ifadesi 5'in kaçıncı kuvvetidir?", cevap: "5√5 = 5^(3/2) ⇒ √(5^(3/2)) = 5^(3/4)" },
    },
  ],
};

export default kb;
