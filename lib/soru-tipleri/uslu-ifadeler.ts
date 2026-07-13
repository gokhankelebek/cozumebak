import type { TopicSoruTipleri } from "./types";

// Üslü İfadeler (TYT · Üslü-Köklü kümesi, ~2 soru/yıl). Teacher's catalogue of
// how ÖSYM asks this topic. Ordered easy→hard. Every örnek is hand-verified;
// celdiriciler map each classic wrong answer to the exact mistake behind it.
const kb: TopicSoruTipleri = {
  slug: "uslu-ifadeler",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "uslu-ifadeler-01-us-kurallari",
      ad: "Üs kuralları (çarpma-bölme-üssün üssü karışık)",
      aciklama:
        "Farklı görünen tabanları (4, 8, 9, 27...) ortak tabana çevirip üsleri toplama/çıkarma ile sadeleştirme. Konunun ısınma sorusu; çoğu zaman tek kesirli ifade olarak gelir.",
      yontem: [
        "Tüm sayıları ortak asal tabana çevir: 4=2², 8=2³, 9=3², 27=3³.",
        "Üssün üssünde üsler ÇARPILIR: (aᵐ)ⁿ = aᵐⁿ.",
        "Aynı tabanlı çarpmada üsler toplanır, bölmede çıkarılır: aᵐ⋅aⁿ = aᵐ⁺ⁿ, aᵐ/aⁿ = aᵐ⁻ⁿ.",
        "Tek tabana inen ifadeyi hesapla.",
      ],
      celdiriciler: [
        { hata: "Çarpmada üsleri toplamak yerine çarpmak (3⁴⋅3⁴ = 3¹⁶ yazmak)", uretir: "3¹⁶/3⁶ = 3¹⁰ gibi aşırı büyük değer" },
        { hata: "Üssün üssünde üsleri çarpmak yerine toplamak (9² = 3²⁺² = 3⁴ tesadüfen doğru ama 27² = 3⁵ yazmak)", uretir: "3⁴⁺⁴⁻⁵ = 3³ = 27" },
        { hata: "Bölmede üsleri çıkarmak yerine bölmek", uretir: "Kesirli üs, şıklarda olmayan değer" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "(3⁴ ⋅ 9²) / 27² işleminin sonucu kaçtır?", cevap: "9² = 3⁴, 27² = 3⁶ ⇒ 3⁴⁺⁴⁻⁶ = 3² = 9" },
    },
    {
      id: "uslu-ifadeler-02-negatif-us",
      ad: "Negatif üs (ters çevirme)",
      aciklama:
        "a⁻ⁿ = 1/aⁿ ve kesirli tabanda pay-payda takası: (a/b)⁻ⁿ = (b/a)ⁿ. Genelde iki üç negatif üslü terimin toplamı sorulur.",
      yontem: [
        "Negatif üs sayıyı NEGATİF yapmaz; çarpmaya göre tersini alır: a⁻ⁿ = 1/aⁿ.",
        "Kesirli tabanda pay ile paydayı değiştir, üssü pozitife çevir: (a/b)⁻ⁿ = (b/a)ⁿ.",
        "Her terimi ayrı hesapla, sonra payda eşitleyerek topla.",
      ],
      celdiriciler: [
        { hata: "2⁻³ = −8 sanmak (negatif üsü işaret sanmak)", uretir: "−8 + 4 = −4" },
        { hata: "(1/2)⁻² ifadesinde ters çevirmeyi unutup (1/2)² hesaplamak", uretir: "1/8 + 1/4 = 3/8" },
        { hata: "a⁰ = 0 sanmak (sıfır üs sorularda araya karışınca)", uretir: "Doğru cevaptan 1 eksik değer" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      kombinasyon: ["rasyonel-sayilar"],
      ornek: { soru: "2⁻³ + (1/2)⁻² işleminin sonucu kaçtır?", cevap: "1/8 + 2² = 1/8 + 4 = 33/8" },
    },
    {
      id: "uslu-ifadeler-03-parantez-isaret",
      ad: "Parantez–işaret tuzağı ((−2)⁴ ile −2⁴ farkı)",
      aciklama:
        "Negatif tabanın çift/tek kuvveti ile parantezsiz −aⁿ yazımının karıştırılması üzerine kurulu işlem sorusu. ÖSYM bu ayrımı doğrudan işleme gömerek sorar.",
      yontem: [
        "Parantez VARSA üs eksiye de işler: (−2)⁴ = +16, (−2)³ = −8 (çift üs pozitif, tek üs negatif).",
        "Parantez YOKSA eksi üssün dışında kalır: −2⁴ = −(2⁴) = −16; sonuç her zaman negatif.",
        "Her terimi işaretiyle ayrı hesapla, en sonda topla; işaretleri iki kez kontrol et.",
      ],
      celdiriciler: [
        { hata: "(−2)⁴'ü −16 sanmak (çift üs kuralını atlamak)", uretir: "−16 + 8 − 1 = −9" },
        { hata: "−(−2³) çift eksisini tek eksiye indirmek", uretir: "16 − 8 − 1 = 7" },
        { hata: "(−1)⁵ = +1 sanmak", uretir: "16 + 8 + 1 = 25" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "(−2)⁴ − (−2³) + (−1)⁵ işleminin sonucu kaçtır?", cevap: "16 − (−8) + (−1) = 16 + 8 − 1 = 23" },
    },
    {
      id: "uslu-ifadeler-04-toplam-ortak-carpan",
      ad: "Üslü toplamda ortak çarpan (2ⁿ + 2ⁿ = 2ⁿ⁺¹)",
      aciklama:
        "Aynı üslü terimlerin toplamını tek üslü ifadeye indirme. Öğrencinin 'toplamada üsler toplanır' yanılgısını hedefler; TYT'de hem doğrudan hem denklem içinde gelir.",
      yontem: [
        "Eşit terimlerin toplamı çarpmadır: aⁿ + aⁿ + ... (k tane) = k⋅aⁿ.",
        "k sayısını da aynı tabanda yaz (4 = 2² gibi) ve üsleri topla.",
        "Kısayol: 2ⁿ + 2ⁿ = 2ⁿ⁺¹, 3ⁿ + 3ⁿ + 3ⁿ = 3ⁿ⁺¹.",
      ],
      celdiriciler: [
        { hata: "Toplamada üsleri toplamak (2⁴ + 2⁴ + 2⁴ + 2⁴ = 2¹⁶ sanmak)", uretir: "2¹⁶ = 65536" },
        { hata: "Tabanları toplamak (8⁴ yazmak)", uretir: "8⁴ = 4096" },
        { hata: "4⋅2⁴'te 4'ü taban sanıp 4⁵ gibi birleştirmek", uretir: "1024" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["uslu-denklemler"],
      ornek: { soru: "2⁴ + 2⁴ + 2⁴ + 2⁴ toplamı kaçtır?", cevap: "4⋅2⁴ = 2²⋅2⁴ = 2⁶ = 64" },
    },
    {
      id: "uslu-ifadeler-05-bilimsel-gosterim",
      ad: "10'un kuvvetleri ve bilimsel gösterim",
      aciklama:
        "a⋅10ⁿ biçimindeki sayılarla çarpma/bölme/oran. ÖSYM bunu genelde günlük bağlama (uzaklık, veri boyutu, nüfus) gömer; katsayılar ve 10'un kuvvetleri ayrı ayrı işlenir.",
      yontem: [
        "Katsayıları kendi arasında, 10'un kuvvetlerini kendi arasında işle.",
        "Çarpmada üsler toplanır: 10ᵐ⋅10ⁿ = 10ᵐ⁺ⁿ; bölmede çıkarılır.",
        "Sonucu bilimsel gösterime döndür: katsayı 1 ile 10 arasında olmalı (0,3⋅10³ = 3⋅10² gibi).",
      ],
      celdiriciler: [
        { hata: "10'un kuvvetlerinde üsleri çarpmak (10⁻³⋅10⁵ = 10⁻¹⁵ yazmak)", uretir: "6⋅10⁻¹⁵" },
        { hata: "Negatif üsle toplarken işaret hatası (−3 + 5 yerine −3 − 5)", uretir: "6⋅10⁻⁸" },
        { hata: "Katsayı çarpımını unutup yalnız 10'un kuvvetini yazmak", uretir: "10² = 100" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "(2⋅10⁻³) ⋅ (3⋅10⁵) işleminin sonucu kaçtır?", cevap: "6⋅10⁻³⁺⁵ = 6⋅10² = 600" },
    },
    {
      id: "uslu-ifadeler-06-a-cinsinden-yazma",
      ad: "Verilen üslü ifade cinsinden yazma (a = 2ˣ tipi)",
      aciklama:
        "a = 2ˣ (veya 3ⁿ = 5 gibi bir değer) verilir; başka bir üslü ifadenin a cinsinden karşılığı istenir. Üs ayrıştırma refleksi ölçülür: aᵐ⁺ⁿ = aᵐ⋅aⁿ.",
      yontem: [
        "İstenen ifadeyi verilen tabana çevir: 8ˣ = (2³)ˣ = (2ˣ)³.",
        "Üsteki toplamı çarpıma ayır: 2ˣ⁺ᵏ = 2ᵏ⋅2ˣ.",
        "Her 2ˣ bloğu yerine a koy; sayısal çarpanları önde topla.",
      ],
      celdiriciler: [
        { hata: "8ˣ⁺¹'de üssü tabana dağıtmayıp 8a yazmak", uretir: "8a (a³ yerine a kalır)" },
        { hata: "Sabiti unutmak: 8ˣ⁺¹ = 8ˣ⋅8'deki 8 çarpanını atlamak", uretir: "a³" },
        { hata: "(2ˣ)³'ü 2ˣ⁺³ sanmak (üssün üssünde toplamak)", uretir: "8a" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["uslu-denklemler"],
      ornek: { soru: "a = 2ˣ olduğuna göre 8ˣ⁺¹ ifadesinin a cinsinden değeri nedir?", cevap: "8ˣ⁺¹ = 8ˣ⋅8 = (2ˣ)³⋅8 = 8a³" },
    },
    {
      id: "uslu-ifadeler-07-buyukluk-karsilastirma",
      ad: "Üslü büyüklük karşılaştırma (üsleri veya tabanları eşitleme)",
      aciklama:
        "2⁴⁰, 3³⁰, 5²⁰ gibi hem tabanı hem üssü farklı sayıların sıralanması. Üslerin OBEB'i ortak üs olarak dışarı alınır; kalan tabanlar karşılaştırılır.",
      yontem: [
        "Üslerin ortak bölenini bul (40, 30, 20 için 10) ve her sayıyı (taban^k)¹⁰ biçiminde yaz.",
        "2⁴⁰ = (2⁴)¹⁰ = 16¹⁰, 3³⁰ = (3³)¹⁰ = 27¹⁰, 5²⁰ = (5²)¹⁰ = 25¹⁰.",
        "Üsler eşitlenince yalnız yeni tabanları sırala: 16 < 25 < 27.",
      ],
      celdiriciler: [
        { hata: "Yalnız tabana bakmak (en büyük taban en büyük sayı sanmak)", uretir: "5²⁰ en büyük — yanlış sıralama" },
        { hata: "Yalnız üsse bakmak (en büyük üs en büyük sayı sanmak)", uretir: "2⁴⁰ en büyük — yanlış sıralama" },
        { hata: "(2⁴)¹⁰ dönüşümünde üsleri toplamak (2¹⁴ yazmak)", uretir: "Karşılaştırılamayan karışık ifadeler" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      ornek: { soru: "a = 2⁴⁰, b = 3³⁰, c = 5²⁰ sayılarını küçükten büyüğe sıralayınız.", cevap: "a = 16¹⁰, b = 27¹⁰, c = 25¹⁰ ⇒ a < c < b" },
    },
  ],
};

export default kb;
