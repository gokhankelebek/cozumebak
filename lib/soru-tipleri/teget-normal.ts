import type { TopicSoruTipleri } from "./types";

// Teğet ve Normal (AYT · Türev). Teacher's catalogue of how ÖSYM asks this
// topic. Ordered easy→hard. Every örnek is hand-verified; celdiriciler map each
// classic wrong answer to the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "teget-normal",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "teget-normal-01-noktada-teget",
      ad: "Noktası verilen teğet denklemi",
      aciklama:
        "Apsisi (veya noktası) verilen değme noktasında teğet denklemi ya da eğimi istenir. Konunun giriş sorusu; y−f(a)=f′(a)(x−a) kalıbı.",
      yontem: [
        "Değme noktasını tamamla: x=a verildiyse f(a)'yı hesapla.",
        "Eğimi türevden al: m_T = f′(a).",
        "Doğru denklemini yaz: y − f(a) = f′(a)·(x − a), sadeleştir.",
      ],
      celdiriciler: [
        { hata: "Eğim diye f′(a) yerine f(a) kullanmak", uretir: "Fonksiyon değeriyle yazılmış yanlış eğimli doğru" },
        { hata: "f(a)'yı hesaplamadan noktayı (a, 0) almak", uretir: "Doğru eğimli ama yanlış kaydırılmış doğru" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      kombinasyon: ["turev-alma-kurallari", "dogru-analitik-ayt"],
      ornek: {
        soru: "f(x)=x²−3x+1 eğrisine x=2 apsisli noktada çizilen teğetin denklemi nedir?",
        cevap: "f(2)=−1, f′(x)=2x−3, f′(2)=1 ⇒ y−(−1)=1·(x−2) ⇒ y=x−3",
      },
    },
    {
      id: "teget-normal-02-egimden-nokta",
      ad: "Eğimi verilen teğet — değme noktası bulma",
      aciklama:
        "Teğetin eğimi verilir, değme noktası (ya da apsisi) istenir. Yön ters çevrilir: f′(x)=m denklemi çözülür.",
      yontem: [
        "f′(x)'i hesapla ve verilen eğime eşitle: f′(x)=m.",
        "Denklemi çözüp değme apsis(ler)ini bul.",
        "Nokta isteniyorsa ordinatı fonksiyondan tamamla: (a, f(a)).",
      ],
      celdiriciler: [
        { hata: "m'yi f′ yerine f(x)'e eşitlemek", uretir: "Eğri üzerinde ilgisiz bir kesişim noktası" },
        { hata: "Apsisi bulup ordinatı f yerine f′ ile hesaplamak", uretir: "(a, m) biçiminde sahte nokta" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      kombinasyon: ["turev-alma-kurallari"],
      ornek: {
        soru: "f(x)=x²+2x eğrisinin eğimi 6 olan teğetinin değme noktası nedir?",
        cevap: "f′(x)=2x+2=6 ⇒ x=2, f(2)=8 ⇒ nokta (2, 8)",
      },
    },
    {
      id: "teget-normal-03-normal-dogru",
      ad: "Normal doğrusunun denklemi",
      aciklama:
        "Değme noktasında teğete dik olan doğru istenir. Eğim ilişkisi m_N = −1/f′(a); ters işareti unutmak konunun bir numaralı hatası.",
      yontem: [
        "Önce teğet eğimini bul: m_T = f′(a).",
        "Normalin eğimini ters-negatif al: m_N = −1/m_T (m_T ≠ 0).",
        "y − f(a) = m_N·(x − a) yazıp düzenle.",
        "f′(a)=0 ise normal düşeydir: x=a.",
      ],
      celdiriciler: [
        { hata: "Normal eğimini −1/m yerine 1/m almak (işareti unutmak)", uretir: "İşaretçe ters eğimli doğru" },
        { hata: "Normal yerine teğet eğimiyle devam etmek", uretir: "Teğet denkleminin kendisi" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["dogru-analitik-ayt"],
      ornek: {
        soru: "f(x)=x² eğrisine (1, 1) noktasında çizilen normalin denklemi nedir?",
        cevap: "f′(1)=2 ⇒ m_N=−1/2 ⇒ y−1=−(1/2)(x−1) ⇒ x+2y=3",
      },
    },
    {
      id: "teget-normal-04-yatay-teget",
      ad: "x eksenine paralel (yatay) teğet",
      aciklama:
        "\"Teğet x eksenine paraleldir\" anahtar cümlesi f′(x)=0 koşuluna çevrilir. Ekstremum konusuyla köprü kuran kalıp.",
      yontem: [
        "Yatay teğet koşulunu yaz: f′(x)=0.",
        "Denklemi çözüp değme apsislerini bul.",
        "Nokta isteniyorsa (a, f(a)) olarak tamamla; bu noktadaki normal düşeydir (x=a).",
      ],
      celdiriciler: [
        { hata: "Koşulu f(x)=0 sanmak (eğrinin kökünü aramak)", uretir: "x eksenini kestiği nokta — değme noktası değil" },
        { hata: "Apsisi bulup ordinatı 0 varsaymak", uretir: "(a, 0) biçiminde yanlış nokta" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["artan-azalan-ekstremum"],
      ornek: {
        soru: "f(x)=x²−4x+7 eğrisinin x eksenine paralel teğetinin değme noktası nedir?",
        cevap: "f′(x)=2x−4=0 ⇒ x=2, f(2)=4−8+7=3 ⇒ nokta (2, 3)",
      },
    },
    {
      id: "teget-normal-05-paralel-dik-teget",
      ad: "Verilen doğruya paralel / dik teğet",
      aciklama:
        "Teğetin bir doğruya paralel (f′=m) veya dik (f′·m=−1) olması koşulundan değme noktası bulunur. Paralel–dik karışıklığı en verimli çeldirici.",
      yontem: [
        "Verilen doğruyu y=mx+n biçimine getirip eğimini oku.",
        "Paralellikte f′(x)=m, diklikte f′(x)=−1/m denklemini kur.",
        "Çözüp değme noktasını (a, f(a)) tamamla; istenirse teğet denklemini yaz.",
      ],
      celdiriciler: [
        { hata: "Dik istenirken paralel koşulu (f′=m) kullanmak", uretir: "Yanlış apsiste değme noktası" },
        { hata: "ax+by=c biçimindeki doğrunun eğimini katsayıdan yanlış okumak", uretir: "Baştan hatalı m ile kurulan denklem" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["dogru-analitik-ayt", "turev-alma-kurallari"],
      ornek: {
        soru: "f(x)=x²−2x eğrisinin x+2y=4 doğrusuna dik olan teğetinin değme noktası nedir?",
        cevap: "Doğrunun eğimi −1/2 ⇒ dik teğetin eğimi 2 ⇒ 2x−2=2 ⇒ x=2, f(2)=0 ⇒ nokta (2, 0)",
      },
    },
    {
      id: "teget-normal-06-disaridan-teget",
      ad: "Eğri üzerinde olmayan noktadan çizilen teğet",
      aciklama:
        "Verilen nokta eğrinin ÜZERİNDE DEĞİLDİR; değme noktası (a, f(a)) bilinmeyenle alınır. \"Türevden gelen eğim = iki nokta eğimi\" denklemi kurulur.",
      yontem: [
        "Önce noktanın eğri üzerinde olmadığını doğrula (f'de yerine koy).",
        "Değme noktasını (a, f(a)) al; teğet eğimi f′(a).",
        "Aynı eğimi iki noktadan yaz: f′(a) = (f(a) − y₀)/(a − x₀), denklemi a için çöz.",
        "Her a kökü ayrı bir teğet verir; istenene göre denklem(ler)i yaz.",
      ],
      celdiriciler: [
        { hata: "Dış noktayı değme noktası sanıp doğrudan f′(x₀) hesaplamak", uretir: "Eğriye hiç değmeyen sahte teğet" },
        { hata: "İki nokta eğiminde farkların sırasını karıştırmak", uretir: "İşaretçe bozuk denklemden gelen yanlış a" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["dogru-analitik-ayt"],
      ornek: {
        soru: "y=x² eğrisine, eğri üzerinde olmayan (1, −3) noktasından çizilen teğetlerin değme apsisleri nedir?",
        cevap: "2a=(a²+3)/(a−1) ⇒ 2a²−2a=a²+3 ⇒ a²−2a−3=0 ⇒ (a−3)(a+1)=0 ⇒ a=3 ve a=−1",
      },
    },
    {
      id: "teget-normal-07-ortak-teget",
      ad: "İki eğrinin ortak teğeti (birbirine teğet eğriler)",
      aciklama:
        "İki eğri bir noktada birbirine teğetse o noktada HEM değerler HEM eğimler eşittir. Çift koşullu sistem; sınavın seçici sorusu.",
      yontem: [
        "Değme apsisi x=a'da iki koşulu birlikte yaz: f(a)=g(a) ve f′(a)=g′(a).",
        "Önce eğim eşitliğinden bilinmeyenlerden birini çöz (çoğunlukla daha basit denklem).",
        "Değer eşitliğinde yerine koyup kalan bilinmeyeni bul.",
      ],
      celdiriciler: [
        { hata: "Yalnız f(a)=g(a) yazmak (eğim koşulunu atlamak)", uretir: "Kesişen ama teğet olmayan eğrilerden gelen eksik/yanlış parametre" },
        { hata: "Yalnız f′(a)=g′(a) yazmak (değer koşulunu atlamak)", uretir: "Paralel teğetli ama değmeyen eğriler — ikinci bilinmeyen bulunamaz" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["turev-alma-kurallari", "ikinci-derece-fonksiyonlar"],
      ornek: {
        soru: "f(x)=x²+1 ve g(x)=−x²+ax+b eğrileri x=1 apsisli noktada birbirine teğet ise a+b kaçtır?",
        cevap: "Eğim: 2=−2+a ⇒ a=4; değer: f(1)=2, g(1)=3+b=2 ⇒ b=−1; a+b=3",
      },
    },
  ],
};

export default kb;
