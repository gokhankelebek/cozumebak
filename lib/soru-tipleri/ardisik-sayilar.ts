import type { TopicSoruTipleri } from "./types";

// Ardışık Sayılar (TYT · Temel Kavramlar kümesi). Teacher's catalogue of how
// ÖSYM asks consecutive-number patterns. Ordered easy→hard. Every örnek is
// hand-verified; celdiriciler map each classic wrong answer to its mistake.
const kb: TopicSoruTipleri = {
  slug: "ardisik-sayilar",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "ardisik-01-ortanca-carpi-adet",
      ad: "Ardışık sayıların toplamı = ortanca ⋅ adet",
      aciklama:
        "Tek adette (3, 5, 7…) ardışık sayının toplamı verilir; en büyük/en küçük terim istenir. Ortancayı toplam÷adet ile bulan öğrenci denklemsiz çözer.",
      yontem: [
        "Adet tekse ortanca = toplam ÷ adet.",
        "Ortancadan uçlara adım say: en büyük = ortanca + (adet−1)/2, en küçük = ortanca − (adet−1)/2.",
        "Ardışık tam sayıda adım 1, ardışık tek/çiftte adım 2'dir.",
      ],
      celdiriciler: [
        { hata: "Toplam÷adet sonucunu en küçük terim sanmak", uretir: "65 toplamda en büyüğe 13+4=17 demek" },
        { hata: "Uçlara giderken yanlış adım saymak ((adet−1)/2 yerine adet/2)", uretir: "Bir fazla/eksik kaymış uç değer" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "Ardışık 5 tam sayının toplamı 65 olduğuna göre en büyüğü kaçtır?",
        cevap: "Ortanca = 65÷5 = 13 ⇒ sayılar 11,12,13,14,15 ⇒ en büyük 15",
      },
    },
    {
      id: "ardisik-02-toplamdan-denklem",
      ad: "Toplamı verilen ardışıklardan sayı bulma (n, n+1, … denklemi)",
      aciklama:
        "Ardışık birkaç sayının toplamı verilir; en küçük/en büyük istenir. Ortanca yaklaşımı yerine denklem kurdurtan standart biçim; çift adette mecburen bu yol.",
      yontem: [
        "En küçüğe n de; ardışıkları n+1, n+2, … (tek/çiftte n+2, n+4, …) diye yaz.",
        "Toplamı n cinsinden topla: katsayı⋅n + sabit = verilen toplam.",
        "n'yi çöz; soruda İSTENEN terimi (en büyük mü, en küçük mü?) geri hesapla.",
      ],
      celdiriciler: [
        { hata: "n'yi bulup en büyük istenirken n'yi işaretlemek", uretir: "42 toplamlı üç çiftte 12 (en büyük 16 yerine)" },
        { hata: "Sabiti yanlış toplamak (0+2+4 yerine 2+4+6)", uretir: "n değeri 2 kaymış çözüm" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      kombinasyon: ["sayi-problemleri"],
      ornek: {
        soru: "Ardışık üç çift sayının toplamı 42 olduğuna göre en küçüğü kaçtır?",
        cevap: "n+(n+2)+(n+4)=3n+6=42 ⇒ n=12 (sayılar 12,14,16)",
      },
    },
    {
      id: "ardisik-03-ardisik-tek-cift-toplami",
      ad: "Ardışık tek / çift sayıların toplamı (adım 2 kurulumu)",
      aciklama:
        "Ardışık tek ya da çift sayılar toplamıyla verilir. Tek fark, terimler arası adımın 2 olması; adımı 1 kuran öğrenci sistematik yanlışa düşer.",
      yontem: [
        "Terimleri n, n+2, n+4, … biçiminde adım 2 ile yaz.",
        "Toplayıp denklemi çöz; n'nin gerçekten tek/çift çıktığını kontrol et (çıkmıyorsa kurulum yanlış).",
        "İstenen terimi n'den adım adım hesapla.",
      ],
      celdiriciler: [
        { hata: "Ardışık tekleri n, n+1, n+2, n+3 diye kurmak", uretir: "4n+6=64 ⇒ n=14,5 gibi tam sayı olmayan ara değer" },
        { hata: "En büyüğü n+8 sanmak (4 terimde son terim n+6)", uretir: "Doğrudan 2 fazla uç değer" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["tek-cift-sayilar"],
      ornek: {
        soru: "Ardışık dört tek sayının toplamı 64 olduğuna göre en büyüğü kaçtır?",
        cevap: "n+(n+2)+(n+4)+(n+6)=4n+12=64 ⇒ n=13 ⇒ en büyük 13+6=19 (13+15+17+19=64)",
      },
    },
    {
      id: "ardisik-04-terim-adedi",
      ad: "Terim sayısı bulma ((son − ilk) ÷ artış + 1)",
      aciklama:
        "Eşit artışlı bir dizide kaç terim olduğu sorulur. +1'i unutmak bu sorunun tarihî hatasıdır; şıklarda bir eksiği hep bekler.",
      yontem: [
        "Artış miktarını belirle (ardışık teklerde/çiftlerde 2, katlarda kat sayısı).",
        "Terim sayısı = (son − ilk) ÷ artış + 1.",
        "+1'i EKLEMEYİ unutma: fark bölü artış yalnız adım sayısını verir, terim sayısını değil.",
      ],
      celdiriciler: [
        { hata: "+1 eklemeyi unutmak", uretir: "(85−13)/4 = 18 (doğru 19 yerine)" },
        { hata: "Artışı 1 almak (dizinin adımına bakmamak)", uretir: "85−13+1 = 73 gibi devasa değer" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "13, 17, 21, …, 85 dizisinde kaç terim vardır?",
        cevap: "(85−13)÷4 + 1 = 72÷4 + 1 = 18+1 = 19",
      },
    },
    {
      id: "ardisik-05-1den-n-ye-toplam",
      ad: "1'den n'ye toplam formülü (n(n+1)/2 uygulaması)",
      aciklama:
        "1+2+⋯+n toplamı verilir n istenir, ya da hikâyeleştirilir (üçgensel dizilim, sıra sıra koltuk). n(n+1) çarpımını ardışık iki sayıya ayırmak çözümün son adımıdır.",
      yontem: [
        "1+2+⋯+n = n(n+1)/2 formülünü kur.",
        "Verilen toplama eşitle: n(n+1) = 2⋅toplam.",
        "2⋅toplamı ardışık iki sayının çarpımı olarak yaz (√(2⋅toplam) civarına bak); küçük olan n'dir.",
      ],
      celdiriciler: [
        { hata: "2 ile çarpmayı unutup n(n+1)=toplam kurmak", uretir: "n(n+1)=120'den tam sayı çıkmayınca yanlış yuvarlama" },
        { hata: "Ardışık çarpımın büyük çarpanını n almak", uretir: "n=16 (doğru 15 yerine)" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "1+2+3+⋯+n = 120 olduğuna göre n kaçtır?",
        cevap: "n(n+1)=240=15⋅16 ⇒ n=15",
      },
    },
    {
      id: "ardisik-06-uc-terimler-ortalama",
      ad: "Uç terimlerin toplamı ve ortalama ilişkisi (sınav ayarı)",
      aciklama:
        "Ardışık dizide toplam/ortalama verilip en büyük ile en küçüğün toplamı ya da farkı istenir. En büyük + en küçük = 2⋅ortanca kısayolunu gören denklemsiz bitirir.",
      yontem: [
        "Ortancayı bul: toplam ÷ adet (adet tekse doğrudan ortancadır).",
        "Simetriden: en küçük + en büyük = 2⋅ortanca.",
        "En büyük − en küçük = (adet−1)⋅artış — toplamdan bağımsız, salt adede bağlı.",
      ],
      celdiriciler: [
        { hata: "En büyük + en küçük için ayrı ayrı hesaplayıp adım hatası yapmak", uretir: "38 yerine 37 ya da 39" },
        { hata: "Uçların farkını toplama bağlı sanmak", uretir: "Fark sorusunda toplamı işleme sokan yanlış değer" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["sayi-problemleri", "temel-kavramlar"],
      ornek: {
        soru: "Ardışık 7 tam sayının toplamı 133 olduğuna göre en büyüğü ile en küçüğünün toplamı kaçtır?",
        cevap: "Ortanca = 133÷7 = 19 ⇒ en küçük 16, en büyük 22 ⇒ 16+22 = 38 (= 2⋅19)",
      },
    },
  ],
};

export default kb;
