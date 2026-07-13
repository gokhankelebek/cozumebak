import type { TopicSoruTipleri } from "./types";

// Çemberin Analitik İncelenmesi (AYT · Analitik Geometri). Teacher's catalogue
// of how ÖSYM asks this topic — analitik kümesinin (İleri Geometri) ikinci
// taşıyıcı kolonu; doğru analitiğiyle sürekli beraber sorulur. Ordered
// easy→hard. Every örnek is hand-verified; celdiriciler map each classic wrong
// answer to the exact mistake behind it.
const kb: TopicSoruTipleri = {
  slug: "cember-analitik-ayt",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "cember-analitik-01-merkez-yaricap",
      ad: "Merkez ve yarıçap okuma (standart / genel denklem)",
      aciklama:
        "(x−a)²+(y−b)²=r² biçiminden merkez-yarıçap okumak ya da x²+y²+Dx+Ey+F=0 genel denklemini tamkareye tamamlamak. Konunun açılış sorusu; işaretler asıl tuzaktır.",
      yontem: [
        "Standart biçim: merkez (a,b), yarıçap r — parantez içindeki işaretlerin TERSİ okunur.",
        "Genel denklem: merkez (−D/2, −E/2).",
        "Yarıçap: r = √((D/2)² + (E/2)² − F). F'nin işaretine dikkat.",
        "Emin olmak için bulduğun merkez ve r ile denklemi geri aç.",
      ],
      celdiriciler: [
        { hata: "Merkezi (−D/2,−E/2) yerine (D/2,E/2) okumak", uretir: "İşaretleri ters merkez ((3,−2) yerine (−3,2))" },
        { hata: "Yarıçap formülünde −F yerine +F yazmak", uretir: "r=4 yerine √10 gibi kök içinde kalan değer" },
        { hata: "r² ile r'yi karıştırıp r² değerini yarıçap sanmak", uretir: "Doğru yarıçapın karesi" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "x²+y²−6x+4y−3=0 çemberinin merkezi ve yarıçapı nedir?",
        cevap: "Merkez (3,−2); r=√(3²+2²+3)=√16=4",
      },
    },
    {
      id: "cember-analitik-02-nokta-konum",
      ad: "Noktanın çembere göre konumu (iç / üzerinde / dış)",
      aciklama:
        "Verilen noktanın çemberin içinde mi, üzerinde mi, dışında mı olduğu ya da bu konuma göre bir parametre aralığı sorulur. Kural: noktayı denklemde yerine koy, r² ile karşılaştır.",
      yontem: [
        "Noktayı x²+y² (veya (x−a)²+(y−b)²) ifadesinde yerine koy.",
        "Sonuç < r² ⇒ iç bölge; = r² ⇒ çember üzerinde; > r² ⇒ dış bölge.",
        "Alternatif: noktanın merkeze uzaklığını hesapla, r ile karşılaştır — ikisini KARIŞTIRMA.",
      ],
      celdiriciler: [
        { hata: "Yerine koyma sonucunu r² yerine r ile karşılaştırmak", uretir: "Konumun yanlış sınıflanması (25 > √20 diye 'üzerinde/dışında' karmaşası)" },
        { hata: "Eşitsizlik yönünü ters yorumlamak (küçükse dışında sanmak)", uretir: "İç ile dışın yer değiştirmesi" },
      ],
      zorluk: "Kolay",
      sikCikar: false,
      ornek: {
        soru: "P(4,3) noktası x²+y²=20 çemberine göre nerededir?",
        cevap: "4²+3²=25 > 20 olduğundan P çemberin dış bölgesindedir",
      },
    },
    {
      id: "cember-analitik-03-teget-dogru-uzaklik",
      ad: "Çembere teğet doğru (merkez uzaklığı = r)",
      aciklama:
        "Bir doğrunun çembere teğet olması koşulundan yarıçap, alan ya da doğrudaki bir katsayı bulunur. Altın kural: merkezin doğruya uzaklığı yarıçapa eşittir.",
      yontem: [
        "Merkez ve yarıçapı çıkar (gerekirse tamkareye tamamla).",
        "Merkezin doğruya uzaklığını yaz: d = |ax₀+by₀+c|/√(a²+b²).",
        "Teğetlik: d = r. Bilinmeyeni bu denklemden çöz.",
        "Alan istenirse πr², çevre istenirse 2πr ile bitir.",
      ],
      celdiriciler: [
        { hata: "Uzaklık formülünde paydada karekök almamak", uretir: "r'nin 1/√(a²+b²) katı (3 yerine 3/5)" },
        { hata: "Teğetlik koşulunu d = 2r (çap) ile kurmak", uretir: "Doğru yarıçapın yarısı" },
        { hata: "Alan sorulduğunda πr² yerine 2πr hesaplamak", uretir: "Alan yerine çevre değeri" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["dogru-analitik-ayt"],
      ornek: {
        soru: "Merkezi M(2,1) olan çember 4x−3y+10=0 doğrusuna teğet olduğuna göre yarıçapı kaçtır?",
        cevap: "r=|4⋅2−3⋅1+10|/√(4²+3²)=|15|/5=3",
      },
    },
    {
      id: "cember-analitik-04-uzerindeki-noktadan-teget",
      ad: "Üzerindeki noktadan teğet denklemi",
      aciklama:
        "Çember ÜZERİNDEKİ bir noktadan çizilen teğetin eğimi veya denklemi istenir. Kilit fikir: teğet, o noktaya çizilen yarıçapa diktir.",
      yontem: [
        "Merkez ile teğet noktası arasındaki yarıçapın eğimini hesapla.",
        "Teğetin eğimi bunun negatif tersidir: m_teğet = −1/m_yarıçap.",
        "Nokta-eğim kalıbıyla teğeti yaz: y − y₀ = m_teğet(x − x₀).",
        "Merkezi orijinde olan çemberde kestirme: x⋅x₀ + y⋅y₀ = r².",
      ],
      celdiriciler: [
        { hata: "Teğet eğimi olarak yarıçapın eğimini kullanmak", uretir: "Dik yerine yarıçap doğrultusunda doğru (−3/4 yerine 4/3)" },
        { hata: "Kestirme formülü x⋅x₀+y⋅y₀=r² yerine =r yazmak", uretir: "Ölçeği bozuk teğet denklemi (3x+4y=5)" },
        { hata: "Negatif tersini alırken yalnız işaret değiştirip ters çevirmemek", uretir: "m=−4/3 gibi dik olmayan eğim" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["dogru-analitik-ayt", "teget-normal"],
      ornek: {
        soru: "x²+y²=25 çemberine üzerindeki A(3,4) noktasından çizilen teğetin denklemi nedir?",
        cevap: "Yarıçap eğimi 4/3 ⇒ teğet eğimi −3/4; y−4=−3/4(x−3) ⇒ 3x+4y=25",
      },
    },
    {
      id: "cember-analitik-05-dogru-cember-kesisim",
      ad: "Doğru–çember kesişimi (uzaklık / diskriminant)",
      aciklama:
        "Doğrunun çemberi kesip kesmediği, teğet olduğu parametre değeri ya da kiriş üzerinde bir sorgu. İki yol: merkez uzaklığını r ile karşılaştırmak veya denklemleri ortak çözüp diskriminanta bakmak.",
      yontem: [
        "Hızlı yol: d = merkezin doğruya uzaklığı. d < r ⇒ iki noktada keser, d = r ⇒ teğet, d > r ⇒ kesmez.",
        "Cebirsel yol: doğruyu çemberde yerine koy, ikinci derece denklem kur; Δ>0 keser, Δ=0 teğet, Δ<0 kesmez.",
        "Kiriş orta noktası gerekiyorsa köklerin toplamından (Vieta) apsis ortalamasını al.",
      ],
      celdiriciler: [
        { hata: "Teğetlikte k = r² yerine k = r (yarıçapın kendisi) almak", uretir: "8 yerine 2√2" },
        { hata: "Uzaklık hesabında √2'ye bölmeyi unutmak (d=4 sanmak)", uretir: "k=16" },
        { hata: "Diskriminant koşullarını ters okumak (Δ<0'ı teğet sanmak)", uretir: "Yanlış konum sınıflaması / boş çözüm aralığı" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["dogru-analitik-ayt"],
      ornek: {
        soru: "x²+y²=k çemberi x+y=4 doğrusuna teğet olduğuna göre k kaçtır?",
        cevap: "d=|−4|/√2=2√2=r ⇒ k=r²=(2√2)²=8",
      },
    },
    {
      id: "cember-analitik-06-iki-cemberin-konumu",
      ad: "İki çemberin birbirine göre konumu",
      aciklama:
        "Merkezler arası uzaklık ile yarıçap toplamı/farkı karşılaştırılır: dıştan teğet, içten teğet, kesişme ya da ayrık olma koşulundan bilinmeyen bulunur.",
      yontem: [
        "İki merkezi ve iki yarıçapı çıkar; merkezler arası uzaklığı d hesapla.",
        "d = r₁ + r₂ ⇒ dıştan teğet; d = |r₁ − r₂| ⇒ içten teğet.",
        "|r₁ − r₂| < d < r₁ + r₂ ⇒ iki noktada kesişir; d > r₁+r₂ ⇒ ayrık (dışta).",
        "Soru hangi konumu veriyorsa o eşitliği/eşitsizliği kur, bilinmeyeni çöz.",
      ],
      celdiriciler: [
        { hata: "Dıştan teğet yerine içten teğet koşulunu (d=|r₁−r₂|) kurmak", uretir: "r=8 yerine r=12" },
        { hata: "Merkezler arası uzaklığı koordinat farklarının toplamıyla (6+8) hesaplamak", uretir: "d=14 üzerinden kurulmuş yanlış denklem" },
        { hata: "Kesişme koşulunda eşitsizliğin yalnız bir tarafını yazmak", uretir: "Eksik (yarım) parametre aralığı" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      ornek: {
        soru: "Merkezi M₁(0,0), yarıçapı 2 olan çember ile merkezi M₂(6,8), yarıçapı r olan çember dıştan teğet ise r kaçtır?",
        cevap: "d=√(6²+8²)=10; dıştan teğet: 2+r=10 ⇒ r=8",
      },
    },
    {
      id: "cember-analitik-07-en-yakin-en-uzak",
      ad: "Çember üzerindeki noktanın bir noktaya en yakın / en uzak uzaklığı",
      aciklama:
        "Çember üzerinde gezen bir noktanın sabit bir noktaya uzaklığının en küçük/en büyük değeri istenir. Sır: uzaklık daima merkez üzerinden ölçülür — merkez uzaklığına r eklenir ya da çıkarılır.",
      yontem: [
        "Merkez ve yarıçapı çıkar (genel denklemse tamkareye tamamla).",
        "Sabit noktanın merkeze uzaklığını hesapla: d = |PM|.",
        "Nokta dışarıdaysa: en yakın = d − r, en uzak = d + r.",
        "Nokta içerideyse: en yakın = r − d, en uzak = d + r. Önce iç/dış kontrolü yap.",
      ],
      celdiriciler: [
        { hata: "Yarıçapı hesaba katmayıp merkez uzaklığını cevap vermek", uretir: "15 yerine 10" },
        { hata: "En uzak istenirken d − r (en yakın) hesaplamak", uretir: "15 yerine 5" },
        { hata: "Genel denklemden r'yi çıkarırken −F işaretini kaçırmak", uretir: "Yanlış yarıçapla kaymış uzaklıklar" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["dogru-analitik-ayt"],
      ornek: {
        soru: "A(8,11) noktasının x²+y²−4x−6y−12=0 çemberi üzerindeki noktalara uzaklığının en büyük değeri kaçtır?",
        cevap: "Merkez (2,3), r=√(4+9+12)=5; |AM|=√(6²+8²)=10 ⇒ en uzak=10+5=15",
      },
    },
  ],
};

export default kb;
