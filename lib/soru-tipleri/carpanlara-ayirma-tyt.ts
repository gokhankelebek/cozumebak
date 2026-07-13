import type { TopicSoruTipleri } from "./types";

// Çarpanlara Ayırma (TYT · Cebir). Teacher's catalogue of how ÖSYM asks this
// topic. Ordered easy→hard. Every örnek is hand-verified; celdiriciler map each
// classic wrong answer to the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "carpanlara-ayirma-tyt",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "carpanlara-ayirma-01-ortak-carpan",
      ad: "Ortak çarpan parantezine alma",
      aciklama:
        "Terimlerin hepsinde ortak olan sayı/harf dışarı alınır. Sayısal biçimi (a⋅b + a⋅c hızlı hesabı) TYT'nin ısınma sorusudur.",
      yontem: [
        "Her terimde ortak olan en büyük çarpanı belirle (katsayıların OBEB'i ve ortak harflerin en küçük üssü).",
        "Ortak çarpanı dışarı al, parantez içine kalanları yaz: a⋅b + a⋅c = a(b + c).",
        "Sayısal soruda parantez içini önce topla, sonra çarp — asla tek tek büyük çarpım yapma.",
      ],
      celdiriciler: [
        { hata: "Ortak çarpanı dışarı alınca içeride 1 kalan terimi yazmamak (ör. 3x²+3x = 3x(x) sanmak)", uretir: "Bir terimi eksik parantez, yanlış değer" },
        { hata: "Sayısal soruda dağıtmadan tek tek uzun çarpma yapıp işlem hatası", uretir: "Doğru cevaba yakın ama kaymış bir sayı" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "17⋅23 + 17⋅77 işleminin sonucu kaçtır?", cevap: "17(23+77) = 17⋅100 = 1700" },
    },
    {
      id: "carpanlara-ayirma-02-iki-kare-farki",
      ad: "İki kare farkı a²−b² (sayısal hızlı hesap)",
      aciklama:
        "51²−49² tipi: büyük kareleri açmadan (a−b)(a+b) ile saniyeler içinde hesaplatır. TYT'nin klasik zaman kazandıran sorusu.",
      yontem: [
        "a²−b² = (a−b)(a+b) özdeşliğini tanı — iki KARENİN FARKI olmalı.",
        "a−b ve a+b değerlerini ayrı ayrı hesapla.",
        "Çarp; genelde çarpanlardan biri 1, 2 veya 10'un katı çıkar.",
      ],
      celdiriciler: [
        { hata: "a²−b² = (a−b)² sanmak", uretir: "51²−49² için 2² = 4 gibi çok küçük bir değer" },
        { hata: "a²+b² toplamını da çarpanlara ayırmaya çalışmak", uretir: "Reel çarpanı olmayan ifadeye zorla (a+b)(a−b) yazıp yanlış sonuç" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "51² − 49² işleminin sonucu kaçtır?", cevap: "(51−49)(51+49) = 2⋅100 = 200" },
    },
    {
      id: "carpanlara-ayirma-03-tam-kare",
      ad: "Tam kare özdeşlikleri (a±b)² — verilenden isteneni üretme",
      aciklama:
        "a+b ve a⋅b verilir; a²+b² (veya (a−b)²) istenir. Özdeşliği ters yönde, 'istenen = bilinen² ∓ 2ab' biçiminde kullandırır.",
      yontem: [
        "(a+b)² = a² + 2ab + b² özdeşliğini yaz.",
        "İsteneni yalnız bırak: a² + b² = (a+b)² − 2ab.",
        "(a−b)² istenirse: (a−b)² = (a+b)² − 4ab kestirmesini kullan.",
        "Verilenleri yerine koy, işaretlere dikkat ederek hesapla.",
      ],
      celdiriciler: [
        { hata: "a²+b² = (a+b)² sanmak (2ab terimini unutmak)", uretir: "Doğru cevaptan 2ab kadar büyük değer" },
        { hata: "−2ab yerine −ab çıkarmak", uretir: "Doğru cevaptan ab kadar büyük değer" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "x + y = 6 ve x⋅y = 4 olduğuna göre x² + y² kaçtır?", cevap: "x²+y² = (x+y)² − 2xy = 36 − 8 = 28" },
    },
    {
      id: "carpanlara-ayirma-04-uc-terimli",
      ad: "Üç terimli çarpanlara ayırma x²+bx+c",
      aciklama:
        "Çarpımı c, toplamı b olan iki sayı aranır. 'Çarpanlarından biri hangisidir?' veya çarpan verilip diğeri istenerek sorulur.",
      yontem: [
        "Çarpımı c, toplamı b olan iki sayı bul (m ve n).",
        "x² + bx + c = (x+m)(x+n) yaz.",
        "İşaret kuralı: c pozitifse iki sayı aynı işaretli (işareti b belirler); c negatifse zıt işaretli.",
      ],
      celdiriciler: [
        { hata: "Çarpımı c olan sayıları bulup toplam koşulunu kontrol etmemek", uretir: "x²−5x+6 için (x−1)(x−6) gibi yanlış çarpan çifti" },
        { hata: "İşaretleri ters dağıtmak: (x+2)(x+3) yazmak", uretir: "Orta terimi +5x olan yanlış açılım, çeldirici şık x+2 yerine x−2'nin işaret tersi" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["birinci-derece-denklem-tyt"],
      ornek: { soru: "x² − 5x + 6 ifadesinin çarpanlarından biri aşağıdakilerden hangisidir?", cevap: "Çarpımı 6, toplamı −5 olan sayılar −2 ve −3 ⇒ (x−2)(x−3); çarpanlardan biri x−2" },
    },
    {
      id: "carpanlara-ayirma-05-gruplandirma",
      ad: "Gruplandırma yöntemi (dört terimli ifade)",
      aciklama:
        "xy + ax + by + ab tipindeki dört terimli ifade ikişerli gruplanıp ortak parantez çıkarılır. Genelde 'çarpanlardan biri' veya değer sorusu olarak gelir.",
      yontem: [
        "Terimleri ortak çarpan çıkacak biçimde ikişerli grupla.",
        "Her gruptan ortak çarpanı al; iki grupta AYNI parantez kalmalı.",
        "Ortak parantezi dışarı al: x(y+2) + 3(y+2) = (y+2)(x+3).",
        "Aynı parantez çıkmıyorsa gruplamayı değiştir.",
      ],
      celdiriciler: [
        { hata: "İkinci gruptan eksi ortak çarpan alırken içerideki işaretleri değiştirmemek", uretir: "Parantezler uyuşmaz; öğrenci yine de zorla çarpar, işaretçe bozuk çarpan" },
        { hata: "Parantezleri toplayıp (x + y + 5) tek çarpan sanmak", uretir: "Çarpım yerine toplam yazılmış ilgisiz ifade" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      ornek: { soru: "xy + 2x + 3y + 6 ifadesinin çarpanlara ayrılmış biçimi nedir?", cevap: "x(y+2) + 3(y+2) = (x+3)(y+2)" },
    },
    {
      id: "carpanlara-ayirma-06-kup-fark-toplam",
      ad: "Küp farkı ve toplamı a³ ± b³",
      aciklama:
        "a−b (veya a+b) ile ab verilir, a³−b³ (veya a³+b³) istenir. a²±ab+b² parçası tam kare özdeşliğiyle üretilir; iki özdeşlik zincirlenir.",
      yontem: [
        "a³ − b³ = (a−b)(a² + ab + b²) ve a³ + b³ = (a+b)(a² − ab + b²) formüllerini yaz.",
        "a² + b² değerini tam kareden üret: a² + b² = (a−b)² + 2ab.",
        "Parça değerleri formüle yerleştirip çarp.",
      ],
      celdiriciler: [
        { hata: "Orta terimin işaretini karıştırmak: a³−b³ = (a−b)(a²−ab+b²) yazmak", uretir: "Doğru cevaptan 2ab(a−b) kadar küçük değer (örnekte 3⋅13 = 39)" },
        { hata: "a³−b³ = (a−b)³ sanmak", uretir: "Örnekte 3³ = 27 gibi bariz küçük değer" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      ornek: { soru: "a − b = 3 ve a⋅b = 4 olduğuna göre a³ − b³ kaçtır?", cevap: "a²+b² = 3² + 2⋅4 = 17 ⇒ a³−b³ = (a−b)(a²+ab+b²) = 3(17+4) = 63" },
    },
    {
      id: "carpanlara-ayirma-07-kesir-sadelestirme",
      ad: "Cebirsel kesir sadeleştirme",
      aciklama:
        "Pay ve payda ayrı ayrı çarpanlara ayrılıp ortak çarpan sadeleştirilir; sonra bir değer sorulur. Birden çok ayırma tekniğini aynı soruda birleştiren sınav ayarı tip.",
      yontem: [
        "Payı ve paydayı ayrı ayrı çarpanlara ayır (iki kare farkı, üç terimli, ortak çarpan...).",
        "Ortak çarpanı sadeleştir — sadeleşen çarpanın sıfır olmadığı koşulunu (x ≠ ...) unutma.",
        "Sade biçimde verilen değeri yerine koy.",
      ],
      celdiriciler: [
        { hata: "Sadeleştirmeden değeri doğrudan koyup 0/0 belirsizliğine düşmek veya uzun işlemde hata yapmak", uretir: "Tanımsız sonuç ya da işlem hatasından gelen kaymış değer" },
        { hata: "Kesirde terim sadeleştirmek (çarpan yerine x²'leri birbirine bölmek)", uretir: "Payın ve paydanın parçalarını ayrı ayrı sadeleyen tamamen yanlış ifade" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["mutlak-deger-tyt", "birinci-derece-denklem-tyt"],
      ornek: { soru: "x ≠ −3 ve x ≠ 2 için (x²−9)/(x²+x−6) ifadesinin x = 4 için değeri kaçtır?", cevap: "(x−3)(x+3)/((x+3)(x−2)) = (x−3)/(x−2); x=4 ⇒ 1/2" },
    },
  ],
};

export default kb;
