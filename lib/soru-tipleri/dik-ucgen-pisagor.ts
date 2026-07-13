import type { TopicSoruTipleri } from "./types";

// Dik Üçgen ve Pisagor (TYT · Temel Geometri). Teacher's catalogue of how ÖSYM
// asks this topic. Ordered easy→hard. Every örnek is hand-verified AND
// geometrically realizable (triangle inequality + Pythagorean consistency
// checked); celdiriciler map each classic wrong answer to the exact mistake.
const kb: TopicSoruTipleri = {
  slug: "dik-ucgen-pisagor",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "dik-ucgen-pisagor-01-pisagor-uclusu",
      ad: "Pisagor üçlüsüyle kenar bulma (3-4-5, 5-12-13, 8-15-17)",
      aciklama:
        "İki kenar verilir, üçüncü kenar istenir; sayılar bir Pisagor üçlüsü veya tam katıdır. Konunun ısınma sorusu — üçlüyü gören hesapsız çözer.",
      yontem: [
        "Verilen kenarların hangisinin hipotenüs olduğunu belirle (dik açının karşısı, en uzun kenar).",
        "Sayıları ezberdeki üçlülerle eşle: 3-4-5, 5-12-13, 8-15-17, 7-24-25 ve tam katları (6-8-10, 9-12-15...).",
        "Üçlü görünmüyorsa Pisagor'u yaz: dik kenarlar a, b ve hipotenüs c için a²+b²=c².",
        "Hipotenüs verilmişse ÇIKAR: a²=c²−b². Toplama, yalnız iki dik kenar verilince yapılır.",
      ],
      celdiriciler: [
        { hata: "Hipotenüs verilmişken kareleri toplamak (çıkarmak yerine)", uretir: "√306 gibi şıklara uymayan köklü değer" },
        { hata: "Üçlüyü yanlış eşlemek: 9 ve 15'i 8-15-17'ye oturtmak", uretir: "17 (doğru cevap 12 iken)" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "Bir dik üçgende hipotenüs 15 birim, dik kenarlardan biri 9 birimdir. Diğer dik kenar kaç birimdir?",
        cevap: "a²=15²−9²=225−81=144 ⇒ a=12 (3-4-5 üçlüsünün 3 katı: 9-12-15)",
      },
    },
    {
      id: "dik-ucgen-pisagor-02-ozel-acili",
      ad: "Özel açılı üçgenler (30°-60°-90° ve 45°-45°-90°)",
      aciklama:
        "Açılar verilir, bir kenardan diğeri istenir. Kenar ORANLARI sabittir: 30-60-90'da x : x√3 : 2x, 45-45-90'da x : x : x√2. Hangi kenarın hangi açının karşısında olduğu sorunun tamamıdır.",
      yontem: [
        "30°-60°-90°: en kısa kenar (x) 30°'nin karşısında, x√3 60°'nin karşısında, hipotenüs 2x.",
        "Hipotenüs HER ZAMAN en kısa kenarın iki katıdır — bu tek başına çok soru çözer.",
        "45°-45°-90°: ikizkenar dik üçgen; dik kenarlar eşit (x), hipotenüs x√2.",
        "Verilen kenarı doğru orana yerleştir, x'i çek, istenen kenarı yaz.",
      ],
      celdiriciler: [
        { hata: "30° ve 60° karşılarını karıştırmak (x√3'ü 30° karşısına yazmak)", uretir: "6√3 yerine 6, ya da tersine √3 kat fazlası" },
        { hata: "45-45-90'da hipotenüsü 2x sanmak (30-60-90 ile karıştırmak)", uretir: "x√2 yerine 2x — √2 katı yerine 2 katı" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "Bir 30°-60°-90° üçgeninde hipotenüs 12 cm'dir. 60°'lik açının karşısındaki kenar kaç cm'dir?",
        cevap: "Hipotenüs 2x=12 ⇒ x=6; 60° karşısı x√3=6√3",
      },
    },
    {
      id: "dik-ucgen-pisagor-03-alan-yukseklik",
      ad: "Dik üçgende alan (dik kenarlar ↔ hipotenüse yükseklik)",
      aciklama:
        "Alan iki yoldan yazılır: (dik kenar × dik kenar)/2 = (hipotenüs × hipotenüse yükseklik)/2. ÖSYM iki ifadeyi eşitletip yüksekliği sorar.",
      yontem: [
        "Dik kenarlar a, b ise Alan = a⋅b/2 — hipotenüs alana girmez.",
        "Hipotenüsü Pisagor'la (veya üçlüden) bul.",
        "Aynı alanı hipotenüs üzerinden yaz: Alan = c⋅h/2.",
        "İki ifadeyi eşitle: h = a⋅b/c.",
      ],
      celdiriciler: [
        { hata: "Alanı dik kenar × hipotenüs / 2 diye kurmak", uretir: "6⋅10/2 = 30 (doğrusu 24)" },
        { hata: "Hipotenüse yüksekliği dik kenarlardan biri sanmak", uretir: "24/5 yerine 6 veya 8" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "Dik kenarları 6 ve 8 birim olan dik üçgende hipotenüse ait yükseklik kaç birimdir?",
        cevap: "Alan = 6⋅8/2 = 24; hipotenüs 10 (6-8-10) ⇒ h = 2⋅24/10 = 24/5",
      },
    },
    {
      id: "dik-ucgen-pisagor-04-oklid",
      ad: "Öklid bağıntıları (h² = p⋅k, b² = p⋅c)",
      aciklama:
        "Dik açıdan hipotenüse yükseklik inince hipotenüs p ve k parçalarına ayrılır. Yükseklik için h²=p⋅k; dik kenar için (o kenara BİTİŞİK parça ile) b²=p⋅c. Şekilde parça-kenar eşlemesi sorunun kalbidir.",
      yontem: [
        "Şekli tarif eden metinden p ve k parçalarını belirle (yüksekliğin ayırdığı iki hipotenüs parçası).",
        "Yükseklik isteniyorsa: h² = p⋅k — parçaların ÇARPIMI, toplamı değil.",
        "Dik kenar isteniyorsa: o kenarın değdiği parça ile tüm hipotenüsü çarp: b² = p⋅(p+k).",
        "Sonucun karekökünü al; çıkan üçgenin üçlü olup olmadığını kontrol et.",
      ],
      celdiriciler: [
        { hata: "h² = p+k sanmak (çarpım yerine toplam)", uretir: "√13 gibi köklü, şıklara uymayan değer" },
        { hata: "Dik kenar bağıntısında kenarı karşı parçayla eşlemek", uretir: "b²=9⋅13 gibi yanlış çarpım — √117" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "Dik üçgende dik açıdan hipotenüse inen yükseklik, hipotenüsü 4 ve 9 birimlik iki parçaya ayırıyor. Yükseklik kaç birimdir?",
        cevap: "h² = 4⋅9 = 36 ⇒ h = 6",
      },
    },
    {
      id: "dik-ucgen-pisagor-05-gercek-hayat",
      ad: "Gerçek hayat kurgusu (merdiven-duvar, direk-halat)",
      aciklama:
        "Merdiven, halat, uçurtma ipi hipotenüstür; duvar/direk ve zemin dik kenarlardır. Kurulan üçgenin GERÇEKLEŞEBİLİR olması şart: hipotenüs iki dik kenardan da uzun olmalı. Soru çoğu kez bir üçlünün katına oturur.",
      yontem: [
        "Metinden dik üçgeni çiz: eğik eleman (merdiven/halat) = hipotenüs, duvar/direk ve zemin = dik kenarlar.",
        "Sağlama: hipotenüs her iki dik kenardan da büyük mü? Değilse kurguyu yanlış okumuşsundur.",
        "Pisagor'u uygula; sayılar genelde 3-4-5, 5-12-13 katıdır.",
        "İki konumlu sorularda (merdiven kayıyor) her konum için ayrı üçgen kur, istenen FARKI hesapla.",
      ],
      celdiriciler: [
        { hata: "Merdiven boyunu dik kenar sanıp kareleri toplamak", uretir: "√136 gibi köklü değer (doğrusu 8)" },
        { hata: "Kenarları doğrudan çıkarmak: 10−6", uretir: "4 (Pisagor'suz 'kestirme')" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["dik-ucgen-trigonometri-10"],
      ornek: {
        soru: "10 m uzunluğundaki bir merdiven düz zeminde dik bir duvara yaslanıyor. Merdivenin alt ucu duvarın dibinden 6 m uzakta olduğuna göre, merdivenin duvara değdiği nokta zeminden kaç m yüksektedir?",
        cevap: "h² = 10²−6² = 100−36 = 64 ⇒ h = 8 (6-8-10 üçgeni; hipotenüs 10 > 8 ve 6, kurgu geçerli)",
      },
    },
    {
      id: "dik-ucgen-pisagor-06-ic-ice",
      ad: "İç içe dik üçgenler (ortak kenar zinciri)",
      aciklama:
        "İki dik üçgen ortak bir kenarla zincirlenir: birincinin hipotenüsü ikincinin dik kenarı olur. Ara kenar iki kez Pisagor'la taşınır. Sınavın orta-üst bandı.",
      yontem: [
        "Şekli tarif eden metinden iki üçgeni ve ORTAK kenarı belirle.",
        "Birinci üçgende Pisagor'la ortak kenarı bul.",
        "Bu değeri ikinci üçgene taşı, ikinci Pisagor'u yaz.",
        "Her adımda üçlü kontrolü yap (3-4-5 ve 5-12-13 zinciri klasiktir).",
      ],
      celdiriciler: [
        { hata: "Ara hipotenüsü Pisagor'suz 3+4=7 almak", uretir: "√193 gibi şıklara uymayan değer" },
        { hata: "İkinci üçgende bulunacak kenarı dik kenar sanıp 12²−5² yapmak", uretir: "√119 (doğrusu 13)" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["ucgende-benzerlik-alan"],
      ornek: {
        soru: "△ABC'de B açısı 90°, AB=3, BC=4 birimdir. C noktasında AC'ye dik olan [CD] için CD=12 birimdir. AD kaç birimdir?",
        cevap: "AC² = 3²+4² = 25 ⇒ AC = 5; △ACD'de AD² = 5²+12² = 169 ⇒ AD = 13",
      },
    },
    {
      id: "dik-ucgen-pisagor-07-cevre-alan-birlesik",
      ad: "Çevre/alan ile birleşik ters problem",
      aciklama:
        "Hipotenüs ve çevre (ya da kenar toplamı) verilir, alan istenir. Kenarlar tek tek bulunmaz; (a+b)² açılımıyla a⋅b'ye ulaşılır. Özdeşlik ile Pisagor'un birlikte kullanıldığı seçici soru.",
      yontem: [
        "Çevreden hipotenüsü düş: a+b değerini bul.",
        "İki eşitliği yan yana yaz: a+b bilinen, a²+b² = c² (Pisagor).",
        "(a+b)² = a²+b²+2ab açılımından 2ab'yi çek.",
        "Alan = a⋅b/2 — 2ab bulunduysa 4'e böl.",
      ],
      celdiriciler: [
        { hata: "a⋅b'yi bulup 2'ye bölmeyi unutmak (a⋅b'yi alan sanmak)", uretir: "60 (doğrusu 30)" },
        { hata: "a+b=17'den kenarları 8 ve 9 diye tahmin etmek", uretir: "36 — Pisagor'u sağlamayan kenarlar" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["carpanlara-ayirma-tyt"],
      ornek: {
        soru: "Bir dik üçgenin hipotenüsü 13 birim, çevresi 30 birimdir. Bu üçgenin alanı kaç birim karedir?",
        cevap: "a+b = 30−13 = 17; (a+b)² = 289 = a²+b²+2ab = 169+2ab ⇒ ab = 60 ⇒ Alan = 30 (üçgen 5-12-13)",
      },
    },
  ],
};

export default kb;
