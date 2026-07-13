import type { TopicSoruTipleri } from "./types";

// Üstel Fonksiyon (AYT · Üstel-Logaritma). Teacher's catalogue of how ÖSYM asks
// this topic. Ordered easy→hard. Every örnek is hand-verified; celdiriciler map
// each classic wrong answer to the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "ustel-fonksiyon-ayt",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "ustel-fonksiyon-01-deger-ozellik",
      ad: "Üstel fonksiyon değeri ve f(a+b)=f(a)·f(b) özelliği",
      aciklama:
        "f(x)=aˣ için verilen değerlerden istenen değeri, üs toplamının çarpıma dönüşmesiyle bulma. Konunun ısınma sorusu; f(0)=1 ve üs kuralları test edilir.",
      yontem: [
        "f(x)=aˣ ise f(x+y)=aˣ⁺ʸ=aˣ·aʸ=f(x)·f(y); fark için f(x−y)=f(x)/f(y).",
        "Verilen f(a), f(b) değerlerini bu kurallarla birleştir; a'nın kendisini bulmaya çalışma.",
        "f(0)=a⁰=1 ve f(2a)=f(a)² gibi özel halleri hazır kullan.",
      ],
      celdiriciler: [
        { hata: "f(a+b)=f(a)+f(b) sanmak (toplam kuralını doğrusal uygulamak)", uretir: "Değerlerin çarpımı yerine toplamı" },
        { hata: "f(a−b) için f(a)−f(b) yazmak", uretir: "Bölüm yerine fark — yanlış değer" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "f(x)=2ˣ, f(a)=3 ve f(b)=5 ise f(a+b) kaçtır?", cevap: "f(a+b)=2ᵃ⁺ᵇ=2ᵃ·2ᵇ=3·5=15" },
    },
    {
      id: "ustel-fonksiyon-02-taban-esitleme",
      ad: "Üstel denklem — tabanı eşitleme",
      aciklama:
        "Her iki taraf aynı tabanın kuvveti olarak yazılıp üsler eşitlenen denklem. Üstel fonksiyonun birebirliği kullanılır.",
      yontem: [
        "Sayıları asal tabana indir: 27=3³, 1/32=2⁻⁵, √2=2^(1/2).",
        "aᵘ=aᵛ (a>0, a≠1) ise u=v; üsleri eşitleyip birinci dereceden denklemi çöz.",
        "Negatif ve kesirli üslerde işaret takibini iki kez kontrol et.",
      ],
      celdiriciler: [
        { hata: "1/32 gibi kesri pozitif üsle (2⁵) yazmak", uretir: "Üs denkleminin işaretçe tersi, yanlış kök" },
        { hata: "Üsleri eşitlerken tabandaki katsayıyı da üsse taşımak", uretir: "Ölçekçe kaymış kök" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "3^(2x−1)=27 ise x kaçtır?", cevap: "27=3³ ⇒ 2x−1=3 ⇒ x=2" },
    },
    {
      id: "ustel-fonksiyon-03-artan-azalan",
      ad: "Artan/azalan tespiti (tabanın konumu)",
      aciklama:
        "Taban a>1 ise artan, 0<a<1 ise azalan. Tabanı parametreli verip fonksiyonun artan olması için parametre aralığı istenir; taban koşulu (a>0, a≠1) unutturulmaya çalışılır.",
      yontem: [
        "f(x)=aˣ artan ⇔ a>1; azalan ⇔ 0<a<1.",
        "Taban parametreliyse (ör. a=2k−1) eşitsizliği parametreye taşı.",
        "Üstel fonksiyon tanımı gereği taban her durumda pozitif ve 1'den farklı olmalı; bulduğun aralığı bu koşulla kesiştir.",
      ],
      celdiriciler: [
        { hata: "Artan için taban>0 demekle yetinmek", uretir: "0<taban<1 azalan bölgeyi de içeren geniş yanlış aralık" },
        { hata: "Azalan durumda 0<a<1 alt sınırını (a>0) atlamak", uretir: "Negatif tabanları da kabul eden yanlış aralık" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "f(x)=(2k−1)ˣ fonksiyonu artan olduğuna göre k hangi aralıktadır?", cevap: "Artan ⇔ 2k−1>1 ⇒ k>1" },
    },
    {
      id: "ustel-fonksiyon-04-buyume-bozunma",
      ad: "Üstel büyüme–bozunma sözel modeli",
      aciklama:
        "Nüfus/bakteri 'her T sürede 2 katına çıkıyor' ya da madde yarılanıyor tipi kurgu. Model N(t)=N₀·2^(t/T); istenen kat sayısına ulaşma süresi sorulur.",
      yontem: [
        "Modeli kur: her T sürede 2 kat ⇒ N(t)=N₀·2^(t/T) (yarılanmada taban 1/2).",
        "Koşulu yaz: N(t)=k·N₀; N₀ sadeleşir, 2^(t/T)=k kalır.",
        "k'yi 2'nin kuvveti olarak yaz, üsleri eşitle, t'yi çöz.",
      ],
      celdiriciler: [
        { hata: "16 kat için doğrusal düşünüp 16·T almak", uretir: "log₂16=4 yerine 16 periyot — çok büyük süre" },
        { hata: "t/T yerine t·T yazarak modeli kurmak", uretir: "T² katı kadar yanlış süre" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["logaritma-kavrami-ayt"],
      ornek: { soru: "Bir bakteri kültürü her 4 saatte ikiye katlanıyor. Başlangıçtakinin 32 katına kaç saatte ulaşır?", cevap: "2^(t/4)=32=2⁵ ⇒ t/4=5 ⇒ t=20 saat" },
    },
    {
      id: "ustel-fonksiyon-05-grafik-okuma",
      ad: "Grafik okuma (y-kesimi 1, asimptot y=0)",
      aciklama:
        "Grafikten taban veya katsayı bulma. aˣ daima (0,1)'den geçer, x ekseni (y=0) yatay asimptottur; grafik üzerindeki bir nokta tabanı belirler.",
      yontem: [
        "Grafikteki belirgin noktayı fonksiyonda yerine koy: (x₀,y₀) ⇒ a^x₀=y₀.",
        "a>0 koşuluyla tabanı çöz; k·aˣ biçiminde y-kesimi (0,k)'yi kullan.",
        "Değer kümesi (0,∞): grafik x eksenini ASLA kesmez, yalnız yaklaşır.",
      ],
      celdiriciler: [
        { hata: "a²=9'dan a=±3 alıp negatif tabanı da kabul etmek", uretir: "Üstel fonksiyon tanımına aykırı taban, yanlış işaretli değer" },
        { hata: "y-kesimini (0,0) sanmak (grafiğin orijinden geçtiğini varsaymak)", uretir: "k katsayısını 0 veya yanlış bulmak" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      ornek: { soru: "f(x)=aˣ grafiği (2,9) noktasından geçtiğine göre f(−1) kaçtır?", cevap: "a²=9, a>0 ⇒ a=3; f(−1)=3⁻¹=1/3" },
    },
    {
      id: "ustel-fonksiyon-06-degisken-degistirme",
      ad: "2ˣ=t değişken değiştirmeli üstel denklem",
      aciklama:
        "4ˣ−6·2ˣ+8=0 tipi: 4ˣ=(2ˣ)² görülüp t=2ˣ (t>0) ile ikinci dereceden denkleme dönüştürülür. Cluster'ın klasik sınav sorusu.",
      yontem: [
        "Büyük tabanı küçüğün kuvveti olarak yaz: 4ˣ=(2ˣ)², 9ˣ=(3ˣ)².",
        "2ˣ=t (t>0) koy; t² için ikinci dereceden denklemi çöz.",
        "Pozitif t köklerinden geri dön: 2ˣ=t ⇒ x=log₂t; negatif t kökü ATILIR.",
      ],
      celdiriciler: [
        { hata: "t köklerini doğrudan x sanmak (geri dönüşü unutmak)", uretir: "x₁+x₂ yerine t₁+t₂ — tipik yanlış şık" },
        { hata: "Negatif t kökünü elemeden 2ˣ=t'ye taşımak", uretir: "Var olmayan bir 'kök' daha saymak" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["ikinci-derece-denklem-ayt", "logaritmik-denklem-ayt"],
      ornek: { soru: "4ˣ−5·2ˣ+4=0 denkleminin kökleri x₁ ve x₂ ise x₁+x₂ kaçtır?", cevap: "t=2ˣ: t²−5t+4=0 ⇒ t=1, t=4 ⇒ x=0, x=2; toplam 2" },
    },
    {
      id: "ustel-fonksiyon-07-e-taban-donusumu",
      ad: "Taban dönüşümü: aˣ = e^(x·ln a) farkındalığı",
      aciklama:
        "Her üstel fonksiyonun e tabanında yazılabileceği bilgisi; türev-integral hazırlığı olarak katsayı (ln a) sorulur. Kavramsal, hesap yükü düşük.",
      yontem: [
        "a=e^(ln a) özdeşliğinden aˣ=e^(x·ln a); üsteki katsayı ln a'dır.",
        "aˣ=e^(kx) verilmişse iki e-tabanlı ifadenin üslerini eşitle: k=ln a.",
        "a>1 ⇒ ln a>0 (artan), 0<a<1 ⇒ ln a<0 (azalan) yorumunu ekle.",
      ],
      celdiriciler: [
        { hata: "k=ln a yerine k=a yazmak (dönüşümü ezbersiz kurmak)", uretir: "e^(ax) gibi yanlış ifade, katsayı a" },
        { hata: "aˣ=e^(x·log a) yazıp doğal logaritma yerine 10 tabanını kullanmak", uretir: "ln a / log a oranı kadar kaymış katsayı" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["logaritma-kavrami-ayt", "turev-alma-kurallari"],
      ornek: { soru: "Her x için 5ˣ=e^(kx) olduğuna göre k kaçtır?", cevap: "5=e^(ln 5) ⇒ 5ˣ=e^(x·ln 5) ⇒ k=ln 5" },
    },
  ],
};

export default kb;
