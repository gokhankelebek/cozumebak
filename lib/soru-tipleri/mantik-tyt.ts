import type { TopicSoruTipleri } from "./types";

// MANTIK (TYT · Kümeler ve Mantık). TYT konusu etiketli, ama 2018-2025 AYT
// kâğıtlarında 6 gerçek mantık sorusu ölçüldü. Ölçülen üç gerçek eğilim:
//   • Altısında da bileşik önermenin doğruluk değeri VERİLİR, önermelerin
//     değerleri geri çıkarılır. Yön daima tersinedir; ileri hesap sorulmaz.
//   • Önermeler soyut p, q değil; bölünebilme, asallık, basamak, işaret,
//     küme üyeliği cümleleridir. Mantık kilidi açar, geri kalan sayı taramadır.
//   • Koşullu önerme baskın: 6 sorunun 5'i "ise" üzerine kurulu.
// Ordered easy→hard. Her örnek elle doğrulandı; celdiriciler gerçek sorularda
// ölçülmüş öğrenci hatalarından alındı.
const kb: TopicSoruTipleri = {
  slug: "mantik-tyt",
  durum: "verified",
  tipler: [
    {
      id: "mantik-tyt-01-bilesik-onerme-degeri",
      ad: "Bileşik önermenin doğruluk değerini hesaplama",
      aciklama:
        "Önermelerin doğruluk değerleri bilinir (ya da 5 asaldır gibi doğrudan görülür), bileşiğin değeri istenir. Sınavın ısınma tipi ama asıl işlevi altyapı olmaktır: tabloyu ezberlemeden diğer altı tipin hiçbiri çözülmez. Bilinmesi gereken tek satır: koşullu önerme yalnız 1 ⇒ 0 halinde yanlıştır.",
      yontem: [
        "Her önermenin değerini ayrı ayrı yaz (1 doğru, 0 yanlış); değillenmişleri hemen çevir.",
        "İçten dışa hesapla: önce parantez, sonra ∧ ve ∨, en son ⇒.",
        "Koşullu için tek kural: yalnız 1 ⇒ 0 yanlıştır, diğer üç durum doğrudur. Özellikle 0 ⇒ 0 ve 0 ⇒ 1 doğrudur.",
        "'Ancak ve ancak' başka tablodur: iki değer aynıysa doğru, farklıysa yanlıştır.",
      ],
      celdiriciler: [
        { hata: "Öncülü yanlış olan koşulluyu da yanlış saymak (0 ⇒ 0'ı yanlış sanmak)", uretir: "Koşullunun değerini öncülün değerine eşitleyen ters sonuç" },
        { hata: "Değillemeyi içteki önermeye değil bileşiğin tamamına uygulamak", uretir: "p ∧ q' yerine (p ∧ q)' hesabı — çoğu satırda ters değer" },
        { hata: "'ise' yerine 'ancak ve ancak' tablosunu kullanmak", uretir: "0 ⇒ 1 durumunda 1 yerine 0" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "p: \"5 bir asal sayıdır\", q: \"4 bir tek sayıdır\" önermeleri veriliyor. Buna göre (p ∧ q') ⇒ q bileşik önermesinin doğruluk değeri nedir?",
        cevap: "p = 1, q = 0 ⇒ q' = 1 ⇒ p ∧ q' = 1∧1 = 1 ⇒ 1 ⇒ 0 = 0, yani önerme YANLIŞTIR",
      },
    },
    {
      id: "mantik-tyt-02-kosullunun-yanlisligi",
      ad: "Koşullu önermenin yanlışlığından geri çıkarım",
      aciklama:
        "Konunun bir numaralı tipi. Bir bileşik koşullunun YANLIŞ olduğu söylenir, önermelerin doğruluk değerleri istenir. Yanlışlık tek bir kapı açar: öncül doğru, hüküm yanlış. Bu tek hamle çoğu zaman bütün önermeleri kilitler — şıklardan deneme yapmaya gerek kalmaz.",
      yontem: [
        "Yanlış koşullu ⇒ öncül 1, hüküm 0. Başka ihtimal yoktur; buradan başla.",
        "Öncül 've' ile bağlıysa 1 olması için HER bileşen 1 olmalı — burası en çok değer kilitleyen adımdır.",
        "Hüküm 'veya' ile bağlıysa 0 olması için HER bileşen 0 olmalı.",
        "Öncül 'veya', hüküm 've' ise değerler tek tek kilitlenmez; o zaman durumları listele.",
        "Kilitlenen değerleri önermelerin metnine geri taşı ve sayısal koşulu çöz.",
      ],
      celdiriciler: [
        { hata: "Önermelerin doğruluk değerlerini serbest sanıp şıklardan deneme yapmak", uretir: "Tek çözümü görmeyip birden çok şıkkı 'olabilir' diye elemekte zorlanmak" },
        { hata: "Bileşiğin yanlışlığını 'içindeki önermelerin hepsi yanlış' diye okumak", uretir: "p = q = r = 0 dizilimi" },
        { hata: "'Ve' ile bağlı öncülün 1 olması için birinin 1 olmasını yeterli saymak", uretir: "p = 1, q = 0 gibi eksik kilitlenmiş, koşulu bozan dizilim" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["sayi-basamaklari", "bolme-bolunebilme"],
      ornek: {
        soru: "p, q ve r önermeleri için (p ∧ q) ⇒ r bileşik önermesi yanlıştır. Buna göre p, q ve r'nin doğruluk değerleri sırasıyla nedir?",
        cevap: "Yanlış koşullu ⇒ öncül 1, hüküm 0 ⇒ p ∧ q = 1 ⇒ p = 1 ve q = 1; r = 0 ⇒ (1, 1, 0) — tek çözüm",
      },
    },
    {
      id: "mantik-tyt-03-kosullunun-degili",
      ad: "Koşullu önermenin değili: (p ⇒ q)' ≡ p ∧ q'",
      aciklama:
        "Bileşiğin içinde bir koşullunun DEĞİLİ geçer ve bu değilin doğru olduğu verilir. Kural tek satırdır: (p ⇒ q)' ≡ p ∧ q'. Yani koşullunun değilinin doğru olması, öncülün doğru ve hükmün yanlış olduğu tek senaryoyu bırakır. Konunun en çok yanlış ezberlenen kuralı — öğrenci p' ∧ q der.",
      yontem: [
        "Kuralı yaz: (p ⇒ q)' ≡ p ∧ q'. Değilin doğru olması ⇒ p = 1, q = 0.",
        "Bunun neden böyle olduğunu hatırla: koşullu zaten yalnız 1 ⇒ 0'da yanlıştır; değili doğruysa koşullu yanlıştır, yani tam o durumdayız.",
        "Karşıt tersini (q' ⇒ p') değille karıştırma: karşıt ters, önermenin DENGİDİR, değili değil.",
        "Kilitlenen değerleri önerme metnine taşı: p'yi sağlayan, q'yu sağlamayan sayıları/elemanları tara.",
      ],
      celdiriciler: [
        { hata: "(p ⇒ q)' ifadesini p' ∧ q sanmak", uretir: "Öncül–hüküm rolleri ters; p'yi sağlamayıp q'yu sağlayanlar taranır" },
        { hata: "Değil yerine karşıt tersi (q' ⇒ p') almak", uretir: "Denk önermeyle çalışıp hiçbir değeri kilitleyememek" },
        { hata: "(p ⇒ q)' ifadesini p' ∨ q sanmak (koşullunun açılımıyla karıştırmak)", uretir: "Önermenin kendisi ile değilini yer değiştirmek — tam ters senaryo" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["kumeler-tyt", "bolme-bolunebilme"],
      ornek: {
        soru: "Bir x doğal sayısı için p: \"x çift sayıdır\", q: \"x, 6 ile bölünür\" önermeleri veriliyor. (p ⇒ q)' önermesi doğru olduğuna göre, x'in alabileceği en küçük iki basamaklı değer kaçtır?",
        cevap: "(p ⇒ q)' = 1 ⇒ p = 1 ve q = 0 ⇒ x çift ama 6'ya bölünmez ⇒ iki basamaklılar 10, 14, 16, … ⇒ en küçüğü 10 (10 çift, 10 = 6⋅1 + 4)",
      },
    },
    {
      id: "mantik-tyt-04-de-morgan",
      ad: "De Morgan: bileşik önermenin değili",
      aciklama:
        "Değilleme parantezin dışındadır: (p ∨ q)' ya da (p ∧ q)'. Kural bağlacı da çevirir: (p ∨ q)' ≡ p' ∧ q', (p ∧ q)' ≡ p' ∨ q'. Değillenmiş 'veya' iki yasağa birden çevrilir ve iki değeri birden kilitler — sorunun asıl gücü buradadır. Öğrenci değili yalnız ilk bileşene uygular, bir yasağı kaçırır.",
      yontem: [
        "Değili parantezin İÇİNE dağıt ve bağlacı çevir: 'veya' → 've', 've' → 'veya'.",
        "Değillenmiş 'veya' doğruysa iki bileşen de yanlıştır: iki yasak birden elde edersin.",
        "Değillenmiş 've' doğruysa yalnız en az biri yanlıştır: tek değer kilitlenmez, durumları ayır.",
        "Elde ettiğin yasakları önerme metnine taşı ve kalan tek dağılımı seç.",
      ],
      celdiriciler: [
        { hata: "Değillemeyi parantezin yalnız ilk bileşenine uygulamak", uretir: "p' ∨ q hesabı — ikinci yasak hiç kurulmaz, çözüm tekleşmez" },
        { hata: "(p ∨ q)' ifadesini p' ∨ q' sanmak (bağlacı çevirmemek)", uretir: "'Veya' kalınca p ile q'dan yalnız birinin yanlış olduğu gevşek koşul" },
        { hata: "(p ∧ q)' ifadesini p' ∧ q' sanmak", uretir: "İki yasak birden — oysa yalnız birinin yanlış olması yeterlidir; doğru dağılımlar elenir" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["kumeler-tyt"],
      ornek: {
        soru: "p, q ve r önermeleri için (p ∨ q)' ∧ r bileşik önermesi doğrudur. Buna göre p, q ve r'nin doğruluk değerleri sırasıyla nedir?",
        cevap: "'Ve' ile bağlı bileşik doğru ⇒ (p ∨ q)' = 1 ve r = 1; (p ∨ q)' ≡ p' ∧ q' = 1 ⇒ p = 0 ve q = 0 ⇒ (0, 0, 1)",
      },
    },
    {
      id: "mantik-tyt-05-sayi-ozellikli-onermeler",
      ad: "Önermeler sayı özelliği olunca (değeri kilitle, sayıyı tara)",
      aciklama:
        "Önermeler bölünebilme, asallık, tek-çift ya da basamak cümleleridir; bileşiğin doğruluk değeri verilir ve sayının kendisi (ya da tüm değerlerinin toplamı) istenir. Soru iki katmanlıdır: önce mantık değerleri kilitler, sonra geriye basit bir tarama kalır. (p ∨ q) ⇒ (p ∧ q) kalıbı ölçülen kâğıtlarda birden çok kez göründü: yanlış olması 'tam olarak biri doğru' demektir.",
      yontem: [
        "Önce mantığı bitir: bileşiğin verilen değerinden p ve q'nun değerlerini kilitle; sayıya hiç bakma.",
        "(p ∨ q) ⇒ (p ∧ q) yanlışsa: p ∨ q = 1 ama p ∧ q = 0 ⇒ tam olarak biri doğrudur.",
        "Kilitlenen değeri cümleye çevir: 'p doğru, q yanlış' ⇒ 3'e bölünür ama 4'e bölünmez.",
        "Verilen aralıkta koşulu sağlayan TÜM sayıları listele — soru 'değerlerinin toplamı' derse tek çözüm arama.",
        "İkisini birden sağlayan sayıları listeden at; en sık yapılan hata onları içeride bırakmaktır.",
      ],
      celdiriciler: [
        { hata: "'Bileşik yanlıştır' bilgisini 'p de q da yanlıştır' diye okumak", uretir: "Hiçbir koşulu sağlamayan sayıların toplamı — tümleyen listenin cevabı" },
        { hata: "Tüm çözümleri toplamak yerine ilk bulduğu sayıyı işaretlemek", uretir: "Listenin en küçük elemanı, şıkta hazır bekler" },
        { hata: "İkisini birden sağlayan sayıyı da listeye katmak", uretir: "Doğru cevap + o sayı kadar fazla toplam" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["bolme-bolunebilme", "sayi-basamaklari", "tek-cift-sayilar", "asal-carpanlar-bolen-sayisi"],
      ornek: {
        soru: "Bir A doğal sayısı için p: \"A, 3 ile bölünür\", q: \"A, 4 ile bölünür\" önermeleri veriliyor. (p ∨ q) ⇒ (p ∧ q) önermesi yanlış ve 20 < A < 30 olduğuna göre, A'nın alabileceği değerlerin toplamı kaçtır?",
        cevap: "Yanlış ⇒ p ∨ q = 1, p ∧ q = 0 ⇒ tam olarak biri doğru. 21–29 arasında 3'ün katları 21, 24, 27; 4'ün katları 24, 28; ikisini birden sağlayan 24 elenir ⇒ {21, 27, 28} ⇒ 21 + 27 + 28 = 76",
      },
    },
    {
      id: "mantik-tyt-06-ic-ice-kosullu",
      ad: "İç içe koşullu önerme (parantez yeri)",
      aciklama:
        "Koşullu, koşullunun içine girer: p ⇒ (q ⇒ r) gibi. Yanlışlık kuralı iki kez uygulanır ve üç önermeyi tek bir dizilime çiviler. Parantezin yeri sonucu değiştirir: p ⇒ (q ⇒ r) yanlışsa tek çözüm vardır, (p ⇒ q) ⇒ r yanlışsa üç dizilim kalır. Soldan sağa okumak burada kaybettirir.",
      yontem: [
        "Parantezi işaretle; hangi koşullunun dışta olduğunu belirle. İşlem içten dışa değil, DIŞTAN içe çözülür.",
        "Dıştaki koşullu yanlış ⇒ öncülü 1, hükmü 0. Hüküm bir koşulluysa aynı kuralı ona da uygula.",
        "p ⇒ (q ⇒ r) yanlış ⇒ p = 1 ve (q ⇒ r) = 0 ⇒ q = 1, r = 0. Üç değer de kilitlenir.",
        "(p ⇒ q) ⇒ r yanlış ⇒ (p ⇒ q) = 1 ve r = 0; bu (p,q) için üç ihtimal bırakır — tek çözüm bekleme.",
      ],
      celdiriciler: [
        { hata: "Parantezi göz ardı edip soldan sağa okumak", uretir: "p ⇒ (q ⇒ r) ile (p ⇒ q) ⇒ r'yi aynı sanmak; tek çözüm yerine üç dizilim (ya da tersi)" },
        { hata: "İç içe koşullunun yanlışlığını 'hepsi yanlış' sanmak", uretir: "p = q = r = 0" },
        { hata: "Dıştaki koşulludan p = 1'i çıkarıp içteki koşullunun 0 olması gerektiğini atlamak", uretir: "q ile r'yi serbest bırakıp şık taramasına düşmek" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["bolme-bolunebilme", "sayi-basamaklari"],
      ornek: {
        soru: "p, q ve r önermeleri için p ⇒ (q ⇒ r) bileşik önermesi yanlıştır. Buna göre p, q ve r'nin doğruluk değerleri sırasıyla nedir?",
        cevap: "Dıştaki koşullu yanlış ⇒ p = 1 ve (q ⇒ r) = 0; içteki koşullu yanlış ⇒ q = 1 ve r = 0 ⇒ (1, 1, 0). Not: (p ⇒ q) ⇒ r yanlış olsaydı r = 0 ve p ⇒ q = 1 olur, (p,q) için (0,0), (0,1), (1,1) üç ihtimali kalırdı",
      },
    },
    {
      id: "mantik-tyt-07-atama-ve-uyelik",
      ad: "Önermeler atama ya da küme üyeliği olunca",
      aciklama:
        "Önermeler 'Ali'nin kalemi kırmızıdır' ya da 'x, A∩B kümesinin elemanıdır' gibi cümlelerdir; bileşiğin doğruluk değeri verilip dağılım veya elemanın yeri istenir. Mantık yasakları üretir, birebir eşleme kısıtı ya da küme yapısı gerisini tamamlar. Ölçülen kâğıtlarda mantığın permütasyon ve kümelerle kaynaştığı yer burasıdır.",
      yontem: [
        "Her önermeyi tabloya çevir: kim–ne (ya da eleman–küme) satır sütun olsun.",
        "Bileşiğin değerinden yasakları çıkar; değillenmiş 'veya' varsa De Morgan ile iki yasağa aç.",
        "Birebir dağıtım kısıtını kullan: bir renk tek kişiye, bir kişiye tek renk. Yasaklardan sonra kalan tek dağılımı seç.",
        "Küme üyeliğinde anlamı aç: x ∉ A∩B demek 'ikisinde birden yok' demektir, 'ikisinde de yok' demek DEĞİLDİR.",
      ],
      celdiriciler: [
        { hata: "Değillemeyi 'veya'nın yalnız bir bileşenine uygulamak", uretir: "Tek yasakla çalışıp birden çok dağılımı geçerli sanmak" },
        { hata: "Birebir eşleme kısıtını kullanmamak", uretir: "Yasakları sağlayan ama aynı rengi iki kişiye veren dağılımlar" },
        { hata: "x ∉ A∩B ifadesini 'x ne A'da ne B'de' diye okumak", uretir: "Birleşim üyeliğini de eleyip elemana yer bırakmamak (çözümsüz sanmak)" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["permutasyon-kombinasyon-tyt", "kumeler-tyt"],
      ornek: {
        soru: "Ali, Berk ve Can'a kırmızı, mavi ve yeşil kalemler birebir dağıtılıyor. p: \"Ali'nin kalemi kırmızıdır\", q: \"Berk'in kalemi mavidir\" önermeleri için (p ∨ q)' önermesi doğrudur ve Can'ın kalemi yeşildir. Buna göre Ali'nin kalemi hangi renktir?",
        cevap: "(p ∨ q)' = 1 ⇒ p' ∧ q' = 1 ⇒ Ali kırmızı DEĞİL ve Berk mavi DEĞİL. Can yeşil ⇒ Ali'ye kalan kırmızı veya mavi; kırmızı yasak ⇒ Ali MAVİ, Berk kırmızı (Berk mavi değil koşulu sağlanır)",
      },
    },
  ],
};

export default kb;
