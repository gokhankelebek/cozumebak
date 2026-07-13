import type { TopicSoruTipleri } from "./types";

// EBOB – EKOK (TYT · Sayılar). Hem doğrudan hesap hem günlük hayat problemi
// olarak gelir; problem metnindeki anahtar kelime (en büyük eş parça → EBOB,
// tekrar birlikte → EKOK) tipin kimliğidir. Ordered easy→hard. Every örnek is
// hand-verified; celdiriciler map each wrong answer to the mistake behind it.
const kb: TopicSoruTipleri = {
  slug: "ebob-ekok",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "ebob-ekok-01-hesap",
      ad: "Asal çarpan yöntemiyle EBOB–EKOK hesabı",
      aciklama:
        "İki (bazen üç) sayının EBOB ve/veya EKOK'u doğrudan istenir. EBOB = ortak asalların EN KÜÇÜK üsleri, EKOK = tüm asalların EN BÜYÜK üsleri. Üsleri ters almak konunun bir numaralı hatası.",
      yontem: [
        "Her sayıyı asal çarpanlarına ayır.",
        "EBOB: yalnız ORTAK asalları al, her birinin en küçük üssüyle çarp.",
        "EKOK: görünen TÜM asalları al, her birinin en büyük üssüyle çarp.",
        "İki sayıda hızlı sağlama: EBOB⋅EKOK = a⋅b tutmalı.",
      ],
      celdiriciler: [
        { hata: "EBOB'da en büyük, EKOK'ta en küçük üssü almak (ters ezber)", uretir: "EBOB ile EKOK yer değiştirmiş değerler" },
        { hata: "EKOK'ta yalnız ortak asalları almak", uretir: "Ortak olmayan asal atlanmış, küçük EKOK" },
        { hata: "Üç sayıda ikisinde ortak olan asalı EBOB'a katmak", uretir: "Üçünde birden bulunmayan çarpanla şişmiş EBOB" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      kombinasyon: ["asal-carpanlar-bolen-sayisi"],
      ornek: {
        soru: "EBOB(36, 48) + EKOK(36, 48) toplamı kaçtır?",
        cevap: "36 = 2²⋅3², 48 = 2⁴⋅3 ⇒ EBOB = 2²⋅3 = 12, EKOK = 2⁴⋅3² = 144 ⇒ 12 + 144 = 156 (sağlama: 12⋅144 = 1728 = 36⋅48)",
      },
    },
    {
      id: "ebob-ekok-02-carpim-iliskisi",
      ad: "EBOB⋅EKOK = a⋅b ilişkisi (eksik sayıyı bulma)",
      aciklama:
        "İki sayıdan biri ile EBOB ve EKOK verilir, diğer sayı istenir. Tek satırlık formül sorusu; ama kural YALNIZ iki sayı için geçerlidir, üç sayıya uygulatan tuzak şıklar olur.",
      yontem: [
        "İlişkiyi yaz: EBOB(a,b)⋅EKOK(a,b) = a⋅b.",
        "Bilinenleri yerleştir, bilinmeyeni tek adımda çöz.",
        "Bulduğun sayıyla EBOB'u ve EKOK'u kontrol et (şık sağlaması).",
        "Üç ve daha çok sayıda bu kuralı KULLANMA.",
      ],
      celdiriciler: [
        { hata: "EBOB + EKOK = a + b sanmak", uretir: "Toplam üzerinden kurulan ilgisiz denklem" },
        { hata: "Kuralı üç sayıya uygulamak", uretir: "EBOB⋅EKOK ≠ a⋅b⋅c olduğundan tutarsız değer" },
        { hata: "Bölme yönünü şaşırmak (a⋅b'yi EKOK'a değil EBOB'a bölmek gibi)", uretir: "Doğru cevabın EKOK⁄EBOB katı ya da tersi" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "İki sayının EBOB'u 4, EKOK'u 60'tır. Sayılardan biri 12 olduğuna göre diğeri kaçtır?",
        cevap: "4⋅60 = 12⋅b ⇒ b = 240⁄12 = 20 (kontrol: EBOB(12,20) = 4, EKOK(12,20) = 60)",
      },
    },
    {
      id: "ebob-ekok-03-ebobdan-sayi-kurma",
      ad: "EBOB'dan sayı kurma (a = EBOB⋅x kalıbı)",
      aciklama:
        "EBOB'u verilen iki sayı a = d⋅x, b = d⋅y (x, y aralarında asal) yazılır; toplamları/farkları verilip sayılar veya kaç farklı çift olduğu istenir. Aralarında asallık koşulu unutulunca fazla çift sayılır.",
      yontem: [
        "EBOB = d ise sayıları d⋅x ve d⋅y yaz; x ile y ARALARINDA ASAL olmalı.",
        "Verilen koşulu (toplam, fark, çarpım) x ve y'ye indir: d(x+y) = toplam gibi.",
        "x+y (veya x⋅y) değerini sağlayan aralarında asal (x, y) çiftlerini listele.",
        "Soru 'kaç çift' istiyorsa (x,y) ile (y,x)'i tek çift say; 'en büyük sayı' istiyorsa uygun çifti seç.",
      ],
      celdiriciler: [
        { hata: "x ile y'nin aralarında asal olması gerektiğini unutmak", uretir: "EBOB'u d'den büyük çıkan geçersiz çiftleri de saymak — fazla çift" },
        { hata: "(x,y) ve (y,x)'i iki ayrı çift saymak", uretir: "Doğru cevabın iki katı" },
        { hata: "d'yi toplamdan düşmeden x+y'yi toplama eşitlemek", uretir: "d kat büyük x+y, ilgisiz çiftler" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "EBOB'ları 6 olan iki pozitif tam sayının toplamı 60'tır. Bu koşulu sağlayan kaç farklı sayı çifti vardır?",
        cevap: "6x + 6y = 60 ⇒ x + y = 10, (x,y) aralarında asal: (1,9) ve (3,7) ⇒ 2 çift (sayılar: 6–54 ve 18–42)",
      },
    },
    {
      id: "ebob-ekok-04-gercek-hayat-ebob",
      ad: "Gerçek hayat EBOB (en büyük eş parça / kare fayans)",
      aciklama:
        "Farklı uzunluklar eş ve EN BÜYÜK parçalara bölünür, dikdörtgen zemin en büyük kare fayansla kaplanır, meyveler en çok kişiye eşit dağıtılır. 'En büyük / en az parça sayısı' dili EBOB'un imzasıdır.",
      yontem: [
        "Parça boyu her uzunluğu TAM bölmeli ⇒ parça boyu ortak bölendir; en büyüğü EBOB.",
        "Parça sayısı = her uzunluk ⁄ EBOB; toplam parça için hepsini topla.",
        "Fayans sorusunda kare kenarı = EBOB(en, boy); fayans sayısı = (en⁄EBOB)⋅(boy⁄EBOB).",
        "Soru 'en az kaç parça/fayans' dese bile bölen EN BÜYÜK seçilir — en az parça, en büyük parçayla olur.",
      ],
      celdiriciler: [
        { hata: "'En az parça' deyince EKOK'a gitmek", uretir: "Uzunlukları aşan anlamsız parça boyu" },
        { hata: "Fayans sayısında kenar oranlarını çarpmak yerine toplamak", uretir: "(en⁄d) + (boy⁄d) — parça sayısı diye toplam vermek" },
        { hata: "EBOB'u bulup soruyu bitirmek (asıl istenen parça sayısıyken)", uretir: "Parça boyunu cevap diye işaretlemek" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["sayi-problemleri"],
      ornek: {
        soru: "120 cm ve 180 cm boyutlarındaki dikdörtgen zemin, hiç boşluk kalmadan en büyük kare fayanslarla kaplanacaktır. Kaç fayans gerekir?",
        cevap: "Kenar = EBOB(120,180) = 60 cm ⇒ fayans sayısı = (120⁄60)⋅(180⁄60) = 2⋅3 = 6",
      },
    },
    {
      id: "ebob-ekok-05-gercek-hayat-ekok",
      ad: "Gerçek hayat EKOK (tekrar birlikte / zil–otobüs)",
      aciklama:
        "Farklı periyotlarla tekrarlayan olayların (zil, otobüs, ışık, tur) yeniden AYNI ANDA gerçekleşmesi istenir. 'İlk kez tekrar birlikte' = periyotların EKOK'u; birim çevirme (saniye→dakika→saat) ek tuzaktır.",
      yontem: [
        "Periyotların EKOK'unu al; bu, ilk buluşma süresidir.",
        "Belirli bir aralıkta 'kaç kez birlikte' istenirse: aralık ⁄ EKOK (başlangıç anını sayıp saymamaya dikkat).",
        "Sonucu istenen birime çevir (120 dk = 2 saat).",
        "Saat sorularında buluşma anı = başlangıç + EKOK süre.",
      ],
      celdiriciler: [
        { hata: "'Birlikte' deyince EBOB almak", uretir: "Periyotlardan küçük, anlamsız süre" },
        { hata: "Birim çevirmeyi atlamak", uretir: "Dakika istenen soruda saniye değeri (60 kat hata)" },
        { hata: "'Kaç kez birlikte' sayarken başlangıç anını yanlış saymak", uretir: "1 eksik ya da 1 fazla buluşma sayısı" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "İki otobüs aynı duraktan biri 40 dakikada bir, diğeri 60 dakikada bir kalkıyor. Birlikte kalktıktan sonra ilk kez kaç saat sonra yine birlikte kalkarlar?",
        cevap: "EKOK(40,60) = 120 dakika = 2 saat",
      },
    },
    {
      id: "ebob-ekok-06-kalanli-ekok",
      ad: "Kalanlı EKOK (her bölmede k kalanını veren sayı)",
      aciklama:
        "Birkaç sayıya bölündüğünde hep AYNI k kalanını veren sayı: EKOK⋅t + k. 'En küçük üç basamaklı', 'en büyük iki basamaklı' gibi aralık koşuluyla gelir. Kalanlar bölenlerden aynı miktar eksikse EKOK⋅t − c biçimi kullanılır.",
      yontem: [
        "Sayıdan k çıkarınca tüm bölenlere tam bölünür ⇒ sayı − k = EKOK⋅t.",
        "Sayı = EKOK⋅t + k yaz (t = 1, 2, …; t = 0 çoğu soruda kalan koşulunu bozmaz ama aralığa girmez).",
        "Aralık koşulunu (üç basamaklı vb.) eşitsizlikle kur, uygun t'yi seç.",
        "Kalanlar 'bölenden c eksik' ise sayı = EKOK⋅t − c kullan.",
      ],
      celdiriciler: [
        { hata: "k'yi eklemeyi unutmak (EKOK⋅t'yi cevap vermek)", uretir: "Doğru cevaptan k eksik değer" },
        { hata: "EKOK yerine bölenlerin çarpımını almak", uretir: "6, 9, 12 için 648 tabanlı, gereksiz büyük sayılar (doğrusu 36)" },
        { hata: "En küçük üç basamaklı isterken t'yi 1 seçmek", uretir: "Aralığa girmeyen küçük değer (36 + 4 = 40 gibi)" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["bolme-bolunebilme"],
      ornek: {
        soru: "6, 9 ve 12 ile bölündüğünde her seferinde 4 kalanını veren en küçük üç basamaklı doğal sayı kaçtır?",
        cevap: "EKOK(6,9,12) = 36 ⇒ sayı = 36t + 4; 36⋅3 + 4 = 112 ≥ 100 ⇒ 112 (kontrol: 112 = 6⋅18+4 = 9⋅12+4 = 12⋅9+4)",
      },
    },
    {
      id: "ebob-ekok-07-oranli-sayilar",
      ad: "Oranı verilen sayılarda EBOB–EKOK",
      aciklama:
        "İki sayının sade oranı (a⁄b = 3⁄4 gibi) ile EBOB'u veya EKOK'u verilir; sayılar, toplamları ya da diğer büyüklük istenir. Sade oranda sayılar 3k–4k yazılır; k = EBOB, EKOK = 3⋅4⋅k. Konunun sınav ayarındaki birleştirici sorusu.",
      yontem: [
        "Oran SADE ise sayıları x⋅k ve y⋅k yaz; x ile y aralarında asal olduğundan k = EBOB'dur.",
        "EKOK(xk, yk) = x⋅y⋅k eşitliğini kur.",
        "Verilen EBOB veya EKOK'tan k'yi bul, sayılara geç.",
        "Oran sade verilmemişse önce sadeleştir; yoksa k EBOB olmaz.",
      ],
      celdiriciler: [
        { hata: "EKOK'u x⋅y⋅k yerine x⋅y⋅k² almak", uretir: "k kat büyük EKOK'tan küçük k, yanlış sayılar" },
        { hata: "Sade olmayan oranla k'yi EBOB saymak", uretir: "Gerçek EBOB'un katı alınmış, tutarsız sonuç" },
        { hata: "k'yi bulup soruyu bitirmek (istenen toplam/sayılarken)", uretir: "EBOB değerini cevap diye işaretlemek" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["rasyonel-sayilar", "sayi-problemleri"],
      ornek: {
        soru: "Oranları 4⁄5 olan iki pozitif tam sayının EBOB'u 8 olduğuna göre EKOK'ları kaçtır?",
        cevap: "Sayılar 4⋅8 = 32 ve 5⋅8 = 40 ⇒ EKOK = 4⋅5⋅8 = 160 (sağlama: 8⋅160 = 1280 = 32⋅40)",
      },
    },
  ],
};

export default kb;
