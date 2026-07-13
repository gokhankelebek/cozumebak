import type { TopicSoruTipleri } from "./types";

// Artan-Azalan ve Ekstremum (AYT · Türev). Teacher's catalogue of how ÖSYM asks
// this topic. Ordered easy→hard. Every örnek is hand-verified; celdiriciler map
// each classic wrong answer to the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "artan-azalan-ekstremum",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "artan-azalan-01-isaret-tablosu",
      ad: "İşaret tablosuyla artan/azalan aralık",
      aciklama:
        "f′'nün işaretinden fonksiyonun arttığı/azaldığı aralık istenir. Mekanik üçlü: türev al → çarpanla → sayı doğrusunda işaret oku.",
      yontem: [
        "f′(x)'i hesapla ve çarpanlarına ayır.",
        "Kökleri sayı doğrusuna diz, her aralıkta f′'nün işaretine bak (deneme değeri koy).",
        "f′ > 0 olan aralıklar artan, f′ < 0 olanlar azalandır.",
      ],
      celdiriciler: [
        { hata: "f′ yerine f'nin işaretini incelemek", uretir: "Fonksiyonun pozitif/negatif olduğu aralık — artanlıkla ilgisiz" },
        { hata: "İşaret tablosunu tek çarpandan okumak", uretir: "Yarısı doğru, yarısı ters aralıklar" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      kombinasyon: ["turev-alma-kurallari"],
      ornek: {
        soru: "f(x)=x³−3x² fonksiyonunun azalan olduğu aralık nedir?",
        cevap: "f′(x)=3x²−6x=3x(x−2); işaret (0, 2)'de negatif ⇒ azalan aralık (0, 2)",
      },
    },
    {
      id: "artan-azalan-02-kritik-nokta",
      ad: "Kritik nokta bulma",
      aciklama:
        "f′(x)=0 (veya f′ tanımsız) olan x değerleri istenir. Ekstremum sorularının zorunlu ilk adımı; tek başına da sorulur.",
      yontem: [
        "f′(x)'i hesapla.",
        "f′(x)=0 denklemini çöz; f′'nün tanımsız olduğu tanım kümesi noktalarını da ekle.",
        "İstenirse kritik noktaların sayısını veya toplamını raporla.",
      ],
      celdiriciler: [
        { hata: "f(x)=0'ın köklerini kritik nokta sanmak", uretir: "Fonksiyonun sıfırları — kritik noktalarla ilgisiz değerler" },
        { hata: "f′'nün tanımsız olduğu noktaları (köşe, düşey teğet) atlamak", uretir: "Eksik sayıda kritik nokta" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "f(x)=x³−6x²+9x+2 fonksiyonunun kritik noktalarının apsisleri nedir?",
        cevap: "f′(x)=3x²−12x+9=3(x−1)(x−3)=0 ⇒ x=1 ve x=3",
      },
    },
    {
      id: "artan-azalan-03-ekstremum-degeri",
      ad: "Yerel maksimum/minimum DEĞERİ (x değil, f(x))",
      aciklama:
        "Ekstremum noktası bulunur ama istenen ORDİNAT'tır: f(c). Apsisi cevap işaretlemek konunun klasik tuzağıdır; şıklarda ikisi de bulunur.",
      yontem: [
        "f′'yü çarpanlara ayırıp kritik noktaları bul.",
        "İşaret tablosuyla türü belirle: + → − yerel maks, − → + yerel min.",
        "İstenen ekstremumun apsisini f'DE yerine koy; cevap f(c) değeridir.",
      ],
      celdiriciler: [
        { hata: "Değer yerine apsisi (x=c) cevaplamak", uretir: "Kritik noktanın apsisi — şıklarda hazır bekler" },
        { hata: "Maks ile min noktalarını karıştırmak (tablo yönünü ters okumak)", uretir: "Öteki ekstremumun değeri" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["turev-alma-kurallari"],
      ornek: {
        soru: "f(x)=x³−12x+3 fonksiyonunun yerel maksimum değeri kaçtır?",
        cevap: "f′(x)=3x²−12=3(x−2)(x+2); x=−2'de + → − ⇒ yerel maks, f(−2)=−8+24+3=19",
      },
    },
    {
      id: "artan-azalan-04-ekstremumdan-parametre",
      ad: "Ekstremum noktasından parametre bulma (f′(x₀)=0)",
      aciklama:
        "\"x=x₀'da yerel ekstremumu vardır\" bilgisi f′(x₀)=0 denklemine çevrilip fonksiyondaki bilinmeyen katsayı çözülür.",
      yontem: [
        "f′(x)'i parametre cinsinden hesapla.",
        "Ekstremum koşulunu yaz: f′(x₀)=0, parametreyi çöz.",
        "Titiz çözümde işaret değişimini doğrula (f′(x₀)=0 tek başına ekstremumu garanti etmez).",
      ],
      celdiriciler: [
        { hata: "Koşulu f(x₀)=0 diye kurmak (türev yerine fonksiyon)", uretir: "İlgisiz bir parametre değeri" },
        { hata: "Ekstremum değeri verildiğinde f(x₀) koşulunu da yazmayı unutmak", uretir: "İki bilinmeyenli soruda tek denklem — yanlış/eksik sonuç" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "f(x)=x³+ax²−9x fonksiyonunun x=1 noktasında yerel ekstremumu olduğuna göre a kaçtır?",
        cevap: "f′(x)=3x²+2ax−9, f′(1)=3+2a−9=0 ⇒ a=3 (f′=3(x+3)(x−1), x=1'de − → +, gerçekten min)",
      },
    },
    {
      id: "artan-azalan-05-hep-artan-parametre",
      ad: "Her yerde artan/azalan için parametre aralığı (diskriminant)",
      aciklama:
        "f tüm ℝ'de artan olacak şekilde parametre aralığı istenir. f′ ikinci derecedense çözüm diskriminanttan gelir: her x için f′(x) ≥ 0 ⇔ Δ ≤ 0.",
      yontem: [
        "f′(x)'i parametre cinsinden yaz; ikinci dereceden olduğunu ve baş katsayısının işaretini kontrol et.",
        "Her yerde artan için f′(x) ≥ 0 (her x): baş katsayı pozitifken koşul Δ ≤ 0.",
        "Diskriminant eşitsizliğini parametre için çöz, aralığı yaz.",
      ],
      celdiriciler: [
        { hata: "Δ ≤ 0 yerine Δ ≥ 0 kurmak (koşulu ters çevirmek)", uretir: "Doğru aralığın tümleyeni" },
        { hata: "f′(x) > 0'ı zorunlu sanıp Δ < 0 almak (eşitliği atmak)", uretir: "Uç değerleri dışlayan, tam sayı sorularında yanlış cevaba götüren aralık" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["ikinci-derece-fonksiyonlar"],
      ornek: {
        soru: "f(x)=x³+ax²+12x fonksiyonu tüm gerçek sayılarda artan olduğuna göre a hangi aralıktadır?",
        cevap: "f′(x)=3x²+2ax+12, Δ=4a²−144≤0 ⇒ a²≤36 ⇒ −6≤a≤6",
      },
    },
    {
      id: "artan-azalan-06-mutlak-ekstremum",
      ad: "Kapalı aralıkta mutlak maksimum/minimum",
      aciklama:
        "[a, b] üzerinde en büyük/en küçük değer istenir. Adaylar: aralık İÇİNDEKİ kritik noktalar + iki uç nokta. Uçları unutmak klasik hatadır.",
      yontem: [
        "f′(x)=0'ı çöz; yalnız [a, b] içine düşen kritik noktaları tut.",
        "f'yi kritik noktalarda VE uç noktalarda (x=a, x=b) hesapla.",
        "En büyüğü mutlak maks, en küçüğü mutlak min olarak seç.",
      ],
      celdiriciler: [
        { hata: "Uç noktaları hesaba katmamak", uretir: "Yalnız iç kritik noktadan gelen, çoğu zaman yanlış ekstremum" },
        { hata: "Aralık dışındaki kritik noktayı da listeye almak", uretir: "Aralıkta ulaşılmayan bir f değeri" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      ornek: {
        soru: "f(x)=x³−3x fonksiyonunun [0, 3] aralığındaki mutlak maksimum değeri kaçtır?",
        cevap: "f′=3x²−3, aralıktaki kritik nokta x=1; f(0)=0, f(1)=−2, f(3)=18 ⇒ mutlak maks 18",
      },
    },
    {
      id: "artan-azalan-07-isaret-degisimi-sarti",
      ad: "f′(c)=0 ama ekstremum yok (işaret değişimi şartı)",
      aciklama:
        "Kritik nokta sayısı ile ekstremum sayısını ayırt ettiren soru. Çift katlı kökte f′ işaret değiştirmez; ekstremum doğmaz (x³ tipi yatay büküm).",
      yontem: [
        "f′'yü çarpanlara ayır; köklerin KATLARINA dikkat et.",
        "İşaret tablosu kur: tek katlı kökte işaret değişir, çift katlı kökte değişmez.",
        "Yalnız işaret değiştiren kritik noktaları ekstremum say.",
      ],
      celdiriciler: [
        { hata: "Her kritik noktayı ekstremum saymak", uretir: "Ekstremum sayısını fazla veren cevap (örnekte 2)" },
        { hata: "Çift katlı kökte işaret değişimini var sanıp tür atamak", uretir: "Büküm noktasına yerel maks/min etiketi" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["ikinci-turev-konkavlik"],
      ornek: {
        soru: "f(x)=x⁴−4x³ fonksiyonunun kaç tane yerel ekstremum noktası vardır?",
        cevap: "f′(x)=4x³−12x²=4x²(x−3); x=0 çift katlı (− → −, ekstremum yok), x=3'te − → + ⇒ 1 tane (yerel min, f(3)=−27)",
      },
    },
  ],
};

export default kb;
