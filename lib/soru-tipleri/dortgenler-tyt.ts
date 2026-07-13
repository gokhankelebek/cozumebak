import type { TopicSoruTipleri } from "./types";

// Dörtgenler (TYT · Temel Geometri). Teacher's catalogue of how ÖSYM asks this
// topic. Ordered easy→hard. Every örnek is hand-verified; celdiriciler map each
// classic wrong answer to the exact mistake that produces it. Geometri soruları
// şekilli sorulardır; örneklerde şekil sözel olarak tarif edilir.
const kb: TopicSoruTipleri = {
  slug: "dortgenler-tyt",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "dortgenler-tyt-01-ic-acilar",
      ad: "Dörtgende iç açılar toplamı 360° (oranlı / eksik açı)",
      aciklama:
        "Dörtgenin iç açıları oran ya da birbirine bağlı ifadelerle verilir; bir açı istenir. Konunun ısınma sorusu.",
      yontem: [
        "Dörtgenin iç açıları toplamı HER ZAMAN 360°'dir (üçgendeki 180° ile karıştırma).",
        "Oran verilmişse açıları 2k, 3k, 4k, 6k gibi yaz; toplamı 360°'ye eşitle.",
        "k'yı bul, istenen açıyı hesapla; bulduğun dört açının toplamını 360° ile sağla.",
      ],
      celdiriciler: [
        { hata: "İç açılar toplamını üçgendeki gibi 180° almak", uretir: "Tüm açılar doğrunun yarısı — ör. 144° yerine 72°" },
        { hata: "En büyük açı istenirken en küçük payın açısını vermek", uretir: "Oranın küçük ucundaki açı — ör. 144° yerine 48°" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "Bir dörtgenin iç açıları 2, 3, 4 ve 6 sayılarıyla orantılıdır. En büyük iç açı kaç derecedir?",
        cevap: "2k+3k+4k+6k=15k=360° ⇒ k=24°, en büyük açı 6·24=144°",
      },
    },
    {
      id: "dortgenler-tyt-02-kare-dikdortgen-cevre-alan",
      ad: "Kare ve dikdörtgende çevre–alan ilişkisi",
      aciklama:
        "Çevre verilip alan (ya da tersi) istenir; kenarlar arasında kat/fark ilişkisi kurulur. Çevre formülündeki 2 çarpanı kritik.",
      yontem: [
        "Dikdörtgende Çevre = 2(a+b), Alan = a·b; karede Çevre = 4a, Alan = a².",
        "Kenar ilişkisini tek bilinmeyenle yaz (ör. uzun kenar = 2a).",
        "Çevre denkleminden kenarı bul, alanı hesapla.",
      ],
      celdiriciler: [
        { hata: "Çevreyi 2(a+b) yerine a+b almak", uretir: "Kenarlar 2 kat, alan 4 kat büyük — ör. 72 yerine 288" },
        { hata: "Çevre ile alanı karıştırıp kenar toplamını alan sanmak", uretir: "Alan yerine yarım çevre değeri — ör. 72 yerine 18" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "Çevresi 36 birim olan bir dikdörtgenin uzun kenarı, kısa kenarının 2 katıdır. Bu dikdörtgenin alanı kaç birim karedir?",
        cevap: "2(a+2a)=36 ⇒ 6a=36 ⇒ a=6; alan = 6·12 = 72",
      },
    },
    {
      id: "dortgenler-tyt-03-paralelkenar",
      ad: "Paralelkenar özellikleri (açılar, köşegen, alan)",
      aciklama:
        "Paralelkenarda karşı açıların eşitliği, ardışık açıların bütünlerliği (180°), köşegenlerin birbirini ortalaması veya Alan = taban·yükseklik kullanılır.",
      yontem: [
        "Karşı açılar eşit, ardışık (komşu) açılar bütünler: m(A)+m(B)=180°.",
        "Köşegenler birbirini ORTALAR (dik kesişmek zorunda değildir).",
        "Alan = taban · o tabana ait yükseklik; iki farklı taban–yükseklik çifti aynı alanı verir.",
      ],
      celdiriciler: [
        { hata: "Komşu açıları da eşit sanmak (m(A)=m(B) almak)", uretir: "Verilen farkı yok sayan değer — ör. 70° yerine 90°" },
        { hata: "Komşu açıların toplamını 90° almak", uretir: "Bütünler yerine tümler açı — ör. 70° yerine 25°" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["ucgenler-tyt"],
      ornek: {
        soru: "ABCD paralelkenarında m(A), m(B)'den 40° büyüktür. Buna göre m(B) kaç derecedir?",
        cevap: "m(A)+m(B)=180° ve m(A)=m(B)+40° ⇒ 2·m(B)+40°=180° ⇒ m(B)=70°",
      },
    },
    {
      id: "dortgenler-tyt-04-eskenar-dortgen",
      ad: "Eşkenar dörtgen: dik köşegenler ve alan = e·f/2",
      aciklama:
        "Köşegenleri verilen eşkenar dörtgende alan, kenar veya çevre istenir. Köşegenler birbirini DİK ortalar; yarım köşegenlerle Pisagor kurulur.",
      yontem: [
        "Alan = (e·f)/2 — köşegen çarpımının yarısı.",
        "Kenar için yarım köşegenlerle dik üçgen kur: a² = (e/2)² + (f/2)².",
        "Çevre = 4a; dört kenar eşittir.",
      ],
      celdiriciler: [
        { hata: "Alanda köşegen çarpımını 2'ye bölmemek", uretir: "Doğru alanın 2 katı — ör. 96 yerine 192" },
        { hata: "Kenarı bulurken köşegenlerin tamamıyla Pisagor kurmak", uretir: "√(12²+16²)=20 — kenar 10 yerine 20" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["dik-ucgen-pisagor"],
      ornek: {
        soru: "Köşegen uzunlukları 12 ve 16 birim olan eşkenar dörtgenin alanı kaç birim karedir?",
        cevap: "Alan = (12·16)/2 = 96 (kenar istenseydi: a=√(6²+8²)=10)",
      },
    },
    {
      id: "dortgenler-tyt-05-yamuk",
      ad: "Yamukta orta taban ve alan",
      aciklama:
        "Paralel kenarları (alt–üst taban) ve yüksekliği verilen yamukta alan ya da orta taban istenir. Orta taban = tabanların aritmetik ortalaması.",
      yontem: [
        "Orta taban = (alt taban + üst taban)/2.",
        "Alan = orta taban · yükseklik = ((a+c)/2)·h.",
        "Yükseklik, paralel kenarlar ARASINDAKİ dik uzaklıktır; yan kenar yükseklik değildir.",
      ],
      celdiriciler: [
        { hata: "Taban toplamını 2'ye bölmeden yükseklikle çarpmak", uretir: "Doğru alanın 2 katı — ör. 80 yerine 160" },
        { hata: "Orta tabanı tabanların FARKININ yarısı almak", uretir: "(14−6)/2=4 ile alan 32 — 80 yerine 32" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "Alt tabanı 14, üst tabanı 6 ve yüksekliği 8 birim olan yamuğun alanı kaç birim karedir?",
        cevap: "Alan = ((14+6)/2)·8 = 10·8 = 80",
      },
    },
    {
      id: "dortgenler-tyt-06-kosegen-alan-bolme",
      ad: "Köşegen ve iç noktayla alan bölme",
      aciklama:
        "Köşegenin paralelkenar/dikdörtgeni eş iki üçgene bölmesi ya da içteki bir P noktasının karşılıklı üçgen alanları: A(PAB)+A(PCD) = paralelkenar alanının yarısı.",
      yontem: [
        "Köşegen, paralelkenarı alanları eşit iki üçgene ayırır (her biri alanın yarısı).",
        "İç P noktası için: tabanları AB ve CD olan üçgenlerin yükseklikleri toplamı paralelkenarın yüksekliğidir.",
        "Bu yüzden A(PAB)+A(PCD) = A(PBC)+A(PAD) = toplam alanın yarısı; bilinenle farkı al.",
      ],
      celdiriciler: [
        { hata: "Tek üçgeni (A(PCD)'yi) alanın yarısı sanmak", uretir: "Toplam/2 değeri — ör. 15 yerine 40" },
        { hata: "Toplam alandan verilen üçgeni çıkarmak", uretir: "80−25=55 — 15 yerine 55" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["ucgenler-tyt"],
      ornek: {
        soru: "Alanı 80 birim kare olan ABCD paralelkenarının içinde bir P noktası alınıyor. PAB üçgeninin alanı 25 ise PCD üçgeninin alanı kaçtır?",
        cevap: "A(PAB)+A(PCD)=80/2=40 ⇒ A(PCD)=40−25=15",
      },
    },
    {
      id: "dortgenler-tyt-07-kompozit-sekil",
      ad: "Kompozit şekil: kareden/dikdörtgenden parça kesme",
      aciklama:
        "Kare veya dikdörtgenden üçgen kesilip kalan (taralı) bölgenin alanı istenir. ÖSYM'nin şekil üzerinden sorduğu 'büyük alan − kesilen alan' kurgusu.",
      yontem: [
        "Önce tam şeklin (kare/dikdörtgen) alanını yaz.",
        "Kesilen parçanın alanını ayrı hesapla (dik üçgense (dik kenar · dik kenar)/2).",
        "Kalan = büyük alan − kesilen alan; kesilen kenar parçalarını şekil üzerinden doğru oku.",
      ],
      celdiriciler: [
        { hata: "Üçgen alanında 2'ye bölmeyi unutmak (4·6=24 kesmek)", uretir: "144−24=120 — 132 yerine 120" },
        { hata: "Kesilen alanı çıkarmak yerine eklemek", uretir: "144+12=156 — 132 yerine 156" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["ucgenler-tyt", "cember-daire-tyt"],
      ornek: {
        soru: "Bir kenarı 12 birim olan ABCD karesinin B köşesinden, [AB] üzerinde |BE|=4 ve [BC] üzerinde |BF|=6 olacak biçimde EBF dik üçgeni kesilip atılıyor. Kalan bölgenin alanı kaç birim karedir?",
        cevap: "Kare 12²=144, kesilen üçgen (4·6)/2=12 ⇒ kalan 144−12=132",
      },
    },
  ],
};

export default kb;
