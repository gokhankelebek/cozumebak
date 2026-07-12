import type { TopicSoruTipleri } from "./types";

// Açılar ve Doğrular (TYT · Temel Geometri). Teacher's catalogue of how ÖSYM
// asks this topic. Real exam questions are figure-based; each örnek describes
// the figure verbally, matching the site's quiz convention. Ordered easy→hard.
// Every örnek is hand-verified; celdiriciler map each classic wrong answer to
// the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "acilar-dogrular",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "acilar-dogrular-01-tumler-butunler",
      ad: "Tümler–bütünler açı (oran/fark ile kurma)",
      aciklama:
        "İki açının toplamı 90° (tümler) veya 180° (bütünler) verilir; aralarındaki oran ya da fark üzerinden denklem kurdurulur. Konunun ısınma sorusu; asıl tuzak son adımda hangi açının istendiğidir.",
      yontem: [
        "Küçük açıya x de; oran/fark koşulunu yaz (ör. büyük = 4x).",
        "Tümlerse toplamı 90°'ye, bütünlerse 180°'ye eşitle, x'i çöz.",
        "Sorunun TAM olarak neyi istediğini oku: açının kendisi mi, tümleri mi, bütünleri mi?",
      ],
      celdiriciler: [
        { hata: "Tümler ile bütünleri karıştırmak (toplamı 90° yerine 180° ya da tersi almak)", uretir: "Doğru açının yarısı/iki katı ölçekli yanlış değer" },
        { hata: "Açıyı bulup istenen tümler/bütünler adımını atlamak", uretir: "x'in kendisi (ör. 54° yerine 36°)" },
        { hata: "Büyük açıyı bulup küçük açı üzerinden istenen değeri hesaplamamak", uretir: "Büyük açı ya da onun tümleri/bütünleri" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "Bütünler iki açıdan büyüğünün ölçüsü küçüğünün 4 katıdır. Buna göre küçük açının tümleri kaç derecedir?",
        cevap: "x+4x=180° ⇒ x=36°; tümleri 90°−36°=54°",
      },
    },
    {
      id: "acilar-dogrular-02-ters-komsu",
      ad: "Kesişen doğrularda ters ve komşu açılar",
      aciklama:
        "İki doğru bir noktada kesişir; karşılıklı (ters) açılar cebirsel ifadelerle verilir. Ters açılar EŞİT, komşu açılar bütünlerdir — hangisinin hangisi olduğu şekil okumadan şaşırılır.",
      yontem: [
        "Karşılıklı duran açılar ters açıdır: birbirine eşitle.",
        "Yan yana duran (komşu) açılar bütünlerdir: toplamı 180°'ye eşitle.",
        "x'i çöz, sonra istenen açıyı hesapla — çoğu soru x'i değil bir açıyı ister.",
      ],
      celdiriciler: [
        { hata: "Ters açıları bütünler sanıp toplamı 180° almak", uretir: "Yanlış x ve ondan türeyen yanlış açı" },
        { hata: "x'i bulup cevap sanmak", uretir: "x değeri (ör. 110° yerine 20)" },
        { hata: "Komşu açı istenirken ters açıyı vermek", uretir: "180° − doğru cevap" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "Kesişen iki doğrunun oluşturduğu karşılıklı (ters) iki açının ölçüleri (3x+10)° ve (5x−30)°'dir. Bu açılara komşu olan açının ölçüsü kaç derecedir?",
        cevap: "Ters açılar eşit: 3x+10=5x−30 ⇒ x=20, açı 70°; komşusu 180°−70°=110°",
      },
    },
    {
      id: "acilar-dogrular-03-paralel-kesen",
      ad: "Paralel iki doğru + kesen (yöndeş / iç ters / dış ters)",
      aciklama:
        "d₁ ∥ d₂ bir kesenle kesilir; oluşan sekiz açıdan ikisi cebirsel verilir. Yöndeş, iç ters ve dış ters açılar EŞİT; karşı durumlu (kesenin aynı tarafındaki iç) açılar BÜTÜNLER. Hangi çiftin eşit, hangisinin bütünler olduğu bu konunun kalbidir.",
      yontem: [
        "Verilen iki açının konumunu belirle: Z (iç ters), F (yöndeş), U/C (karşı durumlu).",
        "Z ve F konumundakiler eşit; karşı durumlu içler 180°'ye tamamlanır.",
        "Doğru ilişkiyle denklemi kur, x'i ve istenen açıyı bul.",
      ],
      celdiriciler: [
        { hata: "İç ters (eşit) açıları karşı durumlu sanıp 180°'ye tamamlamak", uretir: "Yanlış x (ör. eşitlik yerine toplam denkleminden gelen değer)" },
        { hata: "Karşı durumlu iç açıları eşit sanmak", uretir: "Bütünler ilişkisi kaçar; 180°−x yerine x" },
        { hata: "Doğruların paralel olduğu bilgisini kullanmadan şekilden tahmin", uretir: "Rastgele yakın değer" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "d₁ ∥ d₂ doğruları bir kesenle kesiliyor. Oluşan iç ters açıların ölçüleri (2x+30)° ve (3x−10)°'dir. Bu açıların ölçüsü kaç derecedir?",
        cevap: "İç ters açılar eşit: 2x+30=3x−10 ⇒ x=40; açı 2⋅40+30=110°",
      },
    },
    {
      id: "acilar-dogrular-04-kirik-cizgi",
      ad: "Paralel doğrular arasında kırık çizgi (Z kuralı / yardımcı paralel)",
      aciklama:
        "d₁ ∥ d₂ arasında bir veya birden çok köşe yapan kırık çizgi; uç açılar verilir, köşedeki açı sorulur (ya da tersi). Çözümün anahtarı köşeden yardımcı paralel çizmektir — TYT'nin klasik şekil sorusu.",
      yontem: [
        "Kırık çizginin köşesinden d₁ ve d₂'ye paralel bir yardımcı doğru çiz.",
        "Köşedeki açı, yardımcı doğruyla iki parçaya ayrılır; her parça iç ters açıyla uçtaki açıya eşittir.",
        "Köşe açısı = iki uç açının TOPLAMI. Birden çok köşe varsa her köşeye ayrı paralel çiz.",
      ],
      celdiriciler: [
        { hata: "Uç açıları toplamak yerine çıkarmak", uretir: "İki açının farkı (ör. 75° yerine 5°)" },
        { hata: "Köşe açısını 180°'den açıların toplamını çıkararak bulmaya çalışmak", uretir: "180° − (toplam) (ör. 105°)" },
        { hata: "Yardımcı paralel çizmeden tek Z kuralıyla açılardan birini doğrudan taşımak", uretir: "Uç açılardan yalnız biri" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["ucgenler-tyt"],
      ornek: {
        soru: "d₁ ∥ d₂ olmak üzere, d₁ üzerindeki A noktasından çıkan bir kırık çizgi içerideki B noktasında köşe yapıp d₂ üzerindeki C noktasına ulaşıyor. Kırık çizgi A'da d₁ ile 40°, C'de d₂ ile 35° açı yapıyor (iki açı da B tarafına bakıyor). m(ABC) kaç derecedir?",
        cevap: "B'den paralel çiz; iç terslerle m(ABC)=40°+35°=75°",
      },
    },
    {
      id: "acilar-dogrular-05-aciortay",
      ad: "Açıortay içeren açı hesabı",
      aciklama:
        "Bir açının içine ışın(lar) çizilir, parçaların açıortayları arası açı sorulur. Kilit gözlem: iki komşu açının açıortayları arasındaki açı, toplam açının YARISIDIR — içteki ışının konumundan bağımsızdır.",
      yontem: [
        "Parçalara isim ver: m(AOC)=a, m(COB)=b olsun; a+b verilen toplam açıdır.",
        "Açıortaylar her parçayı yarıya böler: aradaki açı = a/2 + b/2 = (a+b)/2.",
        "Özel durum: komşu BÜTÜNLER açıların açıortayları arasındaki açı her zaman 90°'dir.",
      ],
      celdiriciler: [
        { hata: "Açıortaylar arası açıyı toplam açının kendisi sanmak", uretir: "(a+b) (yarıya bölme unutulmuş, ör. 130°)" },
        { hata: "İçteki ışının yerini bilmeden 'çözülemez' deyip parça değerleri aramak", uretir: "Zaman kaybı ya da rastgele parça varsayımından yanlış değer" },
        { hata: "Toplamı 180°'ye tamamlayıp yarısını almak", uretir: "(180°−(a+b))/2 (ör. 25°)" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      ornek: {
        soru: "m(AOB)=130° ve OC, bu açının iç bölgesinde bir ışındır. OX ışını AOC açısının, OY ışını COB açısının açıortayıdır. m(XOY) kaç derecedir?",
        cevap: "m(XOY)=m(AOC)/2+m(COB)/2=130°/2=65° (OC'nin yerinden bağımsız)",
      },
    },
    {
      id: "acilar-dogrular-06-uc-paralel-iki-kesen",
      ad: "Üç paralel doğru + iki kesen (ortadaki doğruda birleşen açılar)",
      aciklama:
        "d₁ ∥ d₂ ∥ d₃; iki kesen ortadaki doğru üzerinde aynı noktada birleşir. Uçlardaki açılar verilir, birleşme noktasındaki açı sorulur. Ortadaki paralel, açıyı iç terslerle iki parçaya böler.",
      yontem: [
        "Birleşme noktasında ortadaki doğru (d₂) açıyı iki parçaya ayırır.",
        "Üst parça, birinci kesenin d₁ ile yaptığı iç açıya (iç ters) eşittir.",
        "Alt parça, ikinci kesenin d₃ ile yaptığı iç açıya (iç ters) eşittir; istenen açı ikisinin toplamıdır.",
      ],
      celdiriciler: [
        { hata: "İki iç ters açıyı toplamak yerine bütünlerinden gitmek", uretir: "180° − (toplam) (ör. 60°)" },
        { hata: "Açılardan birini yöndeş sanıp 180°'ye tamamlayarak taşımak", uretir: "Bir parçası 180°−a olan yanlış toplam" },
        { hata: "Ortadaki doğruyu yok sayıp tek Z kuralı uygulamak", uretir: "Uç açılardan yalnız biri ya da farkları" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      ornek: {
        soru: "d₁ ∥ d₂ ∥ d₃ (yukarıdan aşağıya). d₂ üzerindeki B noktasından çıkan BA ışını d₁'i A'da, BC ışını d₃'ü C'de kesiyor. A'da kesenin d₁ ile yaptığı iç açı 55°, C'de kesenin d₃ ile yaptığı iç açı 65°'dir (ikisi de B tarafına bakıyor). m(ABC) kaç derecedir?",
        cevap: "d₂ açıyı böler; iç terslerle m(ABC)=55°+65°=120°",
      },
    },
    {
      id: "acilar-dogrular-07-saat-acisi",
      ad: "Saat açısı problemi (akrep–yelkovan)",
      aciklama:
        "Verilen saatte akrep ile yelkovan arasındaki açı sorulur. Kritik bilgi: yelkovan dakikada 6°, akrep dakikada 0,5° ilerler — akrep saat başında DURMAZ.",
      yontem: [
        "Yelkovanın konumu: dakika × 6°.",
        "Akrebin konumu: saat × 30° + dakika × 0,5° (yarım saatte 15° ilerler).",
        "Fark alınır; 180°'den büyükse 360°'den çıkarılıp dar/geniş olan istenen açı verilir. Kısa yol: |30⋅saat − 5,5⋅dakika|.",
      ],
      celdiriciler: [
        { hata: "Akrebi saat başındaki yerinde sabit sanmak (dakika payını unutmak)", uretir: "Doğru cevaptan dakika×0,5° sapma (ör. 105° yerine 90°)" },
        { hata: "İki kolun farkı yerine yansıma (büyük) açıyı vermek", uretir: "360° − doğru cevap (ör. 255°)" },
        { hata: "Yelkovanı dakikada 6° yerine 1° ilerletmek", uretir: "Çok küçük ölçekli yanlış açı" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      ornek: {
        soru: "Saat 09:30'da akrep ile yelkovan arasındaki açı kaç derecedir?",
        cevap: "Akrep 9⋅30°+30⋅0,5°=285°, yelkovan 30⋅6°=180°; fark 285°−180°=105°",
      },
    },
  ],
};

export default kb;
