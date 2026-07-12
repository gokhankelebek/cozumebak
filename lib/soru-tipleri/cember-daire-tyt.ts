import type { TopicSoruTipleri } from "./types";

// Çember ve Daire (TYT · Temel Geometri). Teacher's catalogue of how ÖSYM asks
// this topic. Ordered easy→hard. Every örnek is hand-verified; celdiriciler map
// each classic wrong answer to the exact mistake that produces it. Geometri
// soruları şekilli sorulardır; örneklerde şekil sözel olarak tarif edilir.
const kb: TopicSoruTipleri = {
  slug: "cember-daire-tyt",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "cember-daire-tyt-01-merkez-cevre-aci",
      ad: "Merkez açı = yay, çevre açı = yayın yarısı",
      aciklama:
        "Aynı yayı gören merkez açı ile çevre açı arasındaki 2 kat ilişkisi. Konunun ısınma sorusu; hangi açının hangisinin yarısı olduğu şaşırılır.",
      yontem: [
        "Merkez açının ölçüsü = gördüğü yayın ölçüsü.",
        "Çevre açının ölçüsü = gördüğü yayın YARISI.",
        "Aynı yayı gören merkez açı, çevre açının 2 katıdır; çemberde tüm yayların toplamı 360°'dir.",
      ],
      celdiriciler: [
        { hata: "Çevre açıyı gördüğü yaya (merkez açıya) eşit almak", uretir: "Yarıya bölünmemiş değer — ör. 50° yerine 100°" },
        { hata: "İlişkiyi ters kurup çevre açıyı 2 ile çarpmak", uretir: "Doğrunun 4 katı ilişki — ör. 50° yerine 200°" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "O merkezli çemberde AB yayını gören AOB merkez açısı 100°'dir. Aynı yayı gören ACB çevre açısı kaç derecedir?",
        cevap: "Çevre açı = yay/2 = 100°/2 = 50°",
      },
    },
    {
      id: "cember-daire-tyt-02-capi-goren-aci",
      ad: "Çapı gören çevre açı 90° (yarım çember)",
      aciklama:
        "Bir kenarı çap olan çevre açı sorusu: çapı gören açı daima 90°'dir; kalan açı üçgenin iç açılarından tamamlanır. Aynı yayı gören çevre açıların eşitliğiyle birlikte kurgulanır.",
      yontem: [
        "[AB] çap ise çember üzerindeki her C için m(ACB)=90° (çap 180°'lik yayı görür, 180/2=90).",
        "ABC dik üçgeninde verilen açıyla üçünücü açıyı tamamla: toplam 180°.",
        "Aynı yayı gören çevre açılar eşittir — şekilde açı 'taşımak' için kullan.",
      ],
      celdiriciler: [
        { hata: "Kalan açıyı 90°'den değil 180°'den tamamlamak (dikliği unutmak)", uretir: "Bütünler açı — ör. 55° yerine 145°" },
        { hata: "Çapı gören açıyı 180° sanmak", uretir: "Üçgen kurulamayan saçma değer; şıklarda 180−35=145 tuzağına düşürür" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      kombinasyon: ["ucgenler-tyt"],
      ornek: {
        soru: "[AB] çaplı O merkezli çember üzerinde bir C noktası alınıyor. m(BAC)=35° olduğuna göre m(ABC) kaç derecedir?",
        cevap: "m(ACB)=90° (çapı görür) ⇒ m(ABC)=180°−90°−35°=55°",
      },
    },
    {
      id: "cember-daire-tyt-03-teget-yaricap-diklik",
      ad: "Teğet ⊥ yarıçap: teğet açı hesabı",
      aciklama:
        "Dış noktadan çizilen teğet(ler)le açı sorusu. Değme noktasında teğet–yarıçap dikliği yazılıp dörtgenin/üçgenin iç açılarından istenen bulunur.",
      yontem: [
        "Değme noktasına yarıçap çiz: teğet ile yarıçap arasındaki açı 90°'dir.",
        "İki teğet varsa PAOB dörtgeninde açıları topla: m(P)+90°+90°+m(AOB)=360°.",
        "Merkez açı m(AOB), küçük AB yayına eşittir; büyük yay = 360° − küçük yay.",
      ],
      celdiriciler: [
        { hata: "Teğet–yarıçap dikliğini kurmayıp teğetler arası açıyı yay sanmak", uretir: "m(P) değerinin kendisi — ör. 140° yerine 40°" },
        { hata: "Küçük yay istenirken büyük yayı (360°−140°) vermek", uretir: "Tamamlayan yay — ör. 140° yerine 220°" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "P dış noktasından O merkezli çembere çizilen [PA ve [PB teğetleri arasındaki açı m(APB)=40°'dir. Küçük AB yayı kaç derecedir?",
        cevap: "PAOB dörtgeninde 40°+90°+90°+m(AOB)=360° ⇒ m(AOB)=140°, küçük yay 140°",
      },
    },
    {
      id: "cember-daire-tyt-04-teget-parcalari",
      ad: "Dış noktadan teğet parçalarının eşitliği",
      aciklama:
        "Dış bir noktadan çembere çizilen iki teğet parçası eşittir (|PA|=|PB|); uzunluklar x'li ifadeyle verilip denklem kurdurulur.",
      yontem: [
        "Aynı dış noktadan çizilen teğet parçaları eşittir: |PA|=|PB|.",
        "Verilen ifadeleri eşitle, x'i çöz.",
        "İstenen uzunluğu x'i yerine koyarak bul; iki ifadenin aynı değeri verdiğini sağla.",
      ],
      celdiriciler: [
        { hata: "İfadeleri eşitlemek yerine toplamayıp/toplayıp yanlış denklem kurmak (2x+3+3x−1=… gibi)", uretir: "Denklemsiz rastgele x; şıklarda x'in kendisi (4) cevap sanılır" },
        { hata: "x'i bulup |PA|'yı hesaplamadan bırakmak", uretir: "Uzunluk 11 yerine x=4" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      ornek: {
        soru: "P dış noktasından çembere çizilen teğetlerin değme noktaları A ve B'dir. |PA|=2x+3, |PB|=3x−1 olduğuna göre |PA| kaç birimdir?",
        cevap: "2x+3=3x−1 ⇒ x=4 ⇒ |PA|=2·4+3=11",
      },
    },
    {
      id: "cember-daire-tyt-05-cevre-yay-uzunlugu",
      ad: "Çember çevresi 2πr ve yay uzunluğu",
      aciklama:
        "Çevre ya da merkez açısı verilen yayın uzunluğu istenir. Yay uzunluğu, çevrenin merkez açı oranı kadarıdır.",
      yontem: [
        "Çevre = 2πr.",
        "Yay uzunluğu = (α/360°)·2πr — merkez açının çevredeki payı.",
        "Uzunluk isteniyorsa 2πr, alan isteniyorsa πr² ile başla; ikisini karıştırma.",
      ],
      celdiriciler: [
        { hata: "Yay uzunluğunda alan formülü πr² kullanmak", uretir: "(60/360)·36π=6π — 2π yerine 6π" },
        { hata: "Merkez açı oranını unutup tüm çevreyi vermek", uretir: "2π·6=12π — 2π yerine 12π" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "Yarıçapı 6 birim olan çemberde merkez açısı 60° olan yayın uzunluğu kaç birimdir?",
        cevap: "(60/360)·2π·6 = (1/6)·12π = 2π",
      },
    },
    {
      id: "cember-daire-tyt-06-daire-dilim-alani",
      ad: "Daire alanı πr² ve daire dilimi alanı",
      aciklama:
        "Merkez açısı verilen dilimin (pasta/pizza dilimi) alanı istenir. Dilim alanı, daire alanının merkez açı oranı kadarıdır; günlük yaşam kurgusuyla sık gelir.",
      yontem: [
        "Daire alanı = πr².",
        "Dilim alanı = (α/360°)·πr².",
        "Eşit parçaya bölünmüş dairede bir parça = alan/parça sayısı; istenen parça sayısıyla çarp.",
      ],
      celdiriciler: [
        { hata: "Dilim alanında çevre formülü 2πr kullanmak", uretir: "(120/360)·12π=4π — 12π yerine 4π" },
        { hata: "Merkez açı oranını uygulamayıp tüm daire alanını vermek", uretir: "π·6²=36π — 12π yerine 36π" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "Yarıçapı 6 birim olan bir dairede merkez açısı 120° olan dilimin alanı kaç birim karedir?",
        cevap: "(120/360)·π·6² = (1/3)·36π = 12π",
      },
    },
    {
      id: "cember-daire-tyt-07-halka-alani",
      ad: "Halka alanı (iç içe iki daire)",
      aciklama:
        "Aynı merkezli iki daire arasında kalan halka bölgenin alanı: yürüyüş yolu, çerçeve, CD kurgularıyla sorulur. Alan = büyük daire − küçük daire.",
      yontem: [
        "Halka alanı = πR² − πr² = π(R²−r²).",
        "R²−r² = (R−r)(R+r) çarpanlaması işlemi hızlandırır.",
        "Yol/çerçeve 'genişliği' verilmişse R = r + genişlik olarak kur; kareler farkını yarıçap farkının karesiyle karıştırma.",
      ],
      celdiriciler: [
        { hata: "π(R²−r²) yerine π(R−r)² almak", uretir: "π(5−3)²=4π — 16π yerine 4π" },
        { hata: "Küçük daireyi çıkarmayıp yalnız büyük dairenin alanını vermek", uretir: "π·5²=25π — 16π yerine 25π" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["dortgenler-tyt"],
      ornek: {
        soru: "Aynı merkezli iki çemberden büyüğünün yarıçapı 5, küçüğünün yarıçapı 3 birimdir. İki çember arasında kalan halka bölgenin alanı kaç birim karedir?",
        cevap: "π(5²−3²) = π(25−9) = 16π",
      },
    },
  ],
};

export default kb;
