import type { TopicSoruTipleri } from "./types";

// Bölme ve Bölünebilme (TYT · Sayılar). ÖSYM'nin her yıl en az bir soru sorduğu
// çekirdek konu. Ordered easy→hard. Every örnek is hand-verified; celdiriciler
// map each classic wrong answer to the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "bolme-bolunebilme",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "bolme-bolunebilme-01-bolme-ozdesligi",
      ad: "Bölme özdeşliği (A = B⋅b + k)",
      aciklama:
        "Bölünen, bölen, bölüm ve kalandan üçü verilir, dördüncüsü istenir. Kritik nokta 0 ≤ kalan < bölen koşulu; ÖSYM bu koşulu bozan şıkla tuzak kurar.",
      yontem: [
        "Özdeşliği yaz: Bölünen = Bölen ⋅ Bölüm + Kalan.",
        "Kalan koşulunu denetle: 0 ≤ kalan < bölen olmalı.",
        "Verilenleri yerine koy, bilinmeyeni çöz.",
        "Bölen ile bölüm yer değiştirmiş de sorulabilir; hangisinin bölen olduğunu kalandan anla (kalan bölenden küçük).",
      ],
      celdiriciler: [
        { hata: "Kalanı çıkarmak yerine eklemek (A = B⋅b − k almak)", uretir: "Doğru cevaptan 2k eksik değer" },
        { hata: "Bölen ile bölümü karıştırmak", uretir: "B ve b farklıysa yanlış çarpım, kalan koşulunu bozan sayı" },
        { hata: "Kalanın bölenden büyük olabileceğini sanmak", uretir: "Kalan ≥ bölen olan geçersiz şıkkı seçmek" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "Bir A doğal sayısı 13 ile bölündüğünde bölüm 7, kalan 5 oluyor. A kaçtır?",
        cevap: "A = 13⋅7 + 5 = 91 + 5 = 96 (kontrol: 0 ≤ 5 < 13 ✓)",
      },
    },
    {
      id: "bolme-bolunebilme-02-rakam-toplami",
      ad: "3 ve 9 ile bölünebilme (rakam bulma)",
      aciklama:
        "İçinde harf (bilinmeyen rakam) olan sayının 3'e veya 9'a tam bölünmesi istenir; rakamın alabileceği değer(ler) sorulur. Konunun en klasik açılış sorusu.",
      yontem: [
        "Rakamlar toplamını bilinmeyen cinsinden yaz.",
        "3 için toplam 3'ün katı, 9 için 9'un katı olmalı.",
        "Bilinmeyen bir rakamdır: 0 ≤ a ≤ 9 sınırında kalan değerleri listele.",
        "Soru 'kaç değer alır' veya 'değerlerin toplamı' isteyebilir; dikkatle oku.",
      ],
      celdiriciler: [
        { hata: "a = 0 değerini unutmak", uretir: "3 kuralında bir eksik değer sayısı / eksik toplam" },
        { hata: "3 kuralı ile 9 kuralını karıştırmak", uretir: "9 istenirken 3'ün katlarını da saymak — fazla değer" },
        { hata: "Rakam sınırını (0–9) aşan değeri saymak", uretir: "Bir fazla değer sayısı" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "Üç basamaklı 5a2 sayısı 9 ile tam bölünebildiğine göre a kaçtır?",
        cevap: "5 + a + 2 = 7 + a; 7 ≤ 7+a ≤ 16 aralığındaki tek 9 katı 9 ⇒ a = 2 (sayı 522 = 9⋅58)",
      },
    },
    {
      id: "bolme-bolunebilme-03-son-basamak",
      ad: "2, 4, 5, 8, 10 ile bölünebilme (son basamak kuralları)",
      aciklama:
        "Yalnızca son bir/iki/üç basamağa bakılan kurallar. 4 için son iki, 8 için son üç basamak; gerisi kalana etki etmez. Bilinmeyen rakam son iki basamakta ise dikkat gerektirir.",
      yontem: [
        "2 ve 5 ve 10: yalnız son rakama bak.",
        "4: son iki basamağın oluşturduğu sayı 4'ün katı (ya da 00) olmalı.",
        "8: son üç basamağın oluşturduğu sayı 8'in katı olmalı.",
        "Bilinmeyen için olası rakamları tek tek dene; 0–9 sınırını unutma.",
      ],
      celdiriciler: [
        { hata: "4 kuralında yalnız son rakama bakmak", uretir: "Son rakamı çift olan her sayıyı 4'e bölünür sanmak — fazla değer" },
        { hata: "8 kuralında son iki basamağa bakmak", uretir: "Eksik ya da fazla değer kümesi" },
        { hata: "0'ı geçerli rakam olarak saymamak", uretir: "Bir eksik değer sayısı" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "Dört basamaklı 47a6 sayısı 4 ile tam bölünebildiğine göre a kaç farklı değer alabilir?",
        cevap: "Son iki basamak a6 = 10a+6, 4'ün katı olmalı: 16, 36, 56, 76, 96 ⇒ a ∈ {1,3,5,7,9}, 5 farklı değer",
      },
    },
    {
      id: "bolme-bolunebilme-04-bilesik-bolen",
      ad: "Bileşik bölene bölünme (hem a hem b koşulu)",
      aciklama:
        "6, 12, 15, 36, 45 gibi bileşik bölenler aralarında asal çarpanlara ayrılır (12 = 4⋅3, 45 = 9⋅5) ve her çarpanın kuralı aynı anda uygulanır. Genellikle iki bilinmeyen rakam verilir.",
      yontem: [
        "Böleni aralarında asal iki çarpana ayır: 6 = 2⋅3, 12 = 4⋅3, 15 = 3⋅5, 36 = 4⋅9, 45 = 9⋅5.",
        "Önce güçlü kısıt olan koşulu uygula (son rakam kuralı genellikle daha az seçenek bırakır).",
        "Kalan koşulu bu seçenekler üzerinde dene; iki koşulu birden sağlayan değeri al.",
        "Dikkat: çarpanlar aralarında asal olmalı — 12 için 2⋅6 ayrışımı YANLIŞ sonuç verebilir.",
      ],
      celdiriciler: [
        { hata: "Aralarında asal olmayan ayrışım kullanmak (12 = 2⋅6)", uretir: "Koşulu gereğinden gevşek tutup fazla değer bulmak" },
        { hata: "Koşullardan yalnız birini uygulamak", uretir: "Tek koşulu sağlayan ama diğerini bozan rakam" },
        { hata: "İki bilinmeyenli soruda koşulları ayrı rakamlara yanlış dağıtmak", uretir: "Rakam çifti yer değiştirmiş yanlış cevap" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["asal-carpanlar-bolen-sayisi"],
      ornek: {
        soru: "Üç basamaklı 7a2 sayısı 36 ile tam bölünebildiğine göre a kaçtır?",
        cevap: "36 = 4⋅9. 4 koşulu: a2 sayısı 4'ün katı ⇒ a tek (12, 32, 52, 72, 92). 9 koşulu: 7+a+2 = 9+a ⇒ a = 0 veya 9. Ortak değer a = 9 (792 = 36⋅22)",
      },
    },
    {
      id: "bolme-bolunebilme-05-kalan-bulma",
      ad: "Kalanlı bölünebilme (9'a ve 11'e bölümden kalan)",
      aciklama:
        "Büyük bir sayının 9 (veya 3, 11) ile bölümünden kalanı, sayıyı bölmeden bulma. 9'a bölümden kalan = rakamlar toplamının 9'a bölümünden kalan; 11 için birlerden başlayan dönüşümlü toplam kullanılır.",
      yontem: [
        "9 (veya 3) için rakamlar toplamını al; toplam büyükse rakamlarını tekrar topla.",
        "Çıkan sonucun 9'a (3'e) bölümünden kalan, sayının kalanıdır.",
        "11 için birler basamağından başlayarak +, −, +, … işaretli toplamı hesapla; sonucu 11'e göre değerlendir (negatifse 11 ekle).",
        "5'e/4'e/8'e bölümden kalan istenirse yalnız son 1/2/3 basamağı böl.",
      ],
      celdiriciler: [
        { hata: "Rakam toplamının kendisini kalan sanmak", uretir: "Toplam 9'dan büyükken 9'un katını düşmemiş değer (ör. 24 ⇒ kalan 24 yazmak)" },
        { hata: "11 kuralında dönüşümlü toplama soldan başlamak", uretir: "İşareti ters, 11 tamamlayanı yanlış kalan" },
        { hata: "Negatif dönüşümlü toplamı kalan olarak bırakmak", uretir: "−3 gibi geçersiz kalan; doğrusu −3+11 = 8" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "38 274 sayısının 9 ile bölümünden kalan kaçtır?",
        cevap: "Rakamlar toplamı 3+8+2+7+4 = 24; 24 = 9⋅2 + 6 ⇒ kalan 6",
      },
    },
    {
      id: "bolme-bolunebilme-06-kalanlarla-islem",
      ad: "Kalanlarla işlem (A+B, A⋅B, kA'nın kalanı)",
      aciklama:
        "İki sayının aynı bölene göre kalanları verilir; toplamlarının, çarpımlarının veya katlarının kalanı istenir. Kalanlar üzerinde işlem yapılır, sonuç bölenden büyükse tekrar bölünür.",
      yontem: [
        "A = b⋅k + r₁, B = b⋅m + r₂ biçiminde yaz.",
        "İstenen ifadedeki işlemi kalanlara uygula: A+B için r₁+r₂, A⋅B için r₁⋅r₂, 3A için 3r₁.",
        "Çıkan sonuç bölene eşit veya büyükse bölene bölüp kalanı al.",
      ],
      celdiriciler: [
        { hata: "Kalan toplamı bölenden büyükken tekrar bölmemek", uretir: "Kalan ≥ bölen olan geçersiz değer (ör. 7'ye bölmede kalan 9 yazmak)" },
        { hata: "Çarpım kalanında kalanları toplamak", uretir: "r₁+r₂'den gelen ilgisiz kalan" },
        { hata: "kA'da katsayıyı kalana uygulamamak", uretir: "Kalanı değişmeden bırakmak" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["sayi-problemleri"],
      ornek: {
        soru: "A'nın 7 ile bölümünden kalan 3, B'nin 7 ile bölümünden kalan 6'dır. 2A + B toplamının 7 ile bölümünden kalan kaçtır?",
        cevap: "2⋅3 + 6 = 12; 12 = 7⋅1 + 5 ⇒ kalan 5",
      },
    },
    {
      id: "bolme-bolunebilme-07-bolen-degisince",
      ad: "Bölen değişince kalan (ortak kalan / EKOK bağlantısı)",
      aciklama:
        "Bir sayının iki farklı bölene göre kalanları verilir, üçüncü bir bölene (genellikle EKOK'a) göre kalanı istenir. Kalanlar bölenlerden hep aynı miktar eksikse '+1 hilesi' devreye girer. Konunun sınav ayarındaki zor sorusu.",
      yontem: [
        "Kalanlar bölenlerden aynı miktar eksikse (kalan = bölen − c): sayıya c ekle, sayı+c her bölenin katı olur.",
        "Sayı + c = EKOK(bölenler)⋅t yaz; sayı = EKOK⋅t − c.",
        "İstenen bölene göre yeniden düzenle: EKOK⋅t − c = EKOK⋅(t−1) + (EKOK − c) ⇒ kalan EKOK − c.",
        "Kalanlar eşitse (hepsi k): sayı = EKOK⋅t + k, kalan doğrudan k'dır (k < yeni bölen ise).",
      ],
      celdiriciler: [
        { hata: "Kalanları toplayıp yeni kalan sanmak", uretir: "5+7 = 12 gibi yapıyla ilgisiz bir değer" },
        { hata: "Sayıyı EKOK⋅t − c yazıp kalanı −c bırakmak", uretir: "Negatif 'kalan'; doğrusu EKOK − c" },
        { hata: "EKOK yerine bölenlerin çarpımını almak", uretir: "Bölenler aralarında asal değilken yanlış modül (6 ve 8 için 48 almak; doğrusu 24)" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["ebob-ekok"],
      ornek: {
        soru: "Bir doğal sayı 6 ile bölündüğünde 5, 8 ile bölündüğünde 7 kalanını veriyor. Bu sayının 24 ile bölümünden kalan kaçtır?",
        cevap: "Her iki kalan bölenden 1 eksik ⇒ sayı+1 hem 6'nın hem 8'in katı, yani EKOK(6,8) = 24'ün katı. Sayı = 24t − 1 = 24(t−1) + 23 ⇒ kalan 23",
      },
    },
  ],
};

export default kb;
