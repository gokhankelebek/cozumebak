import type { TopicSoruTipleri } from "./types";

// İkinci Türev ve Konkavlık (AYT · Türev). Teacher's catalogue of how ÖSYM asks
// this topic. Ordered easy→hard. Every örnek is hand-verified; celdiriciler map
// each classic wrong answer to the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "ikinci-turev-konkavlik",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "ikinci-turev-01-konkavlik-yonu",
      ad: "Konkavlık yönü (f″ işareti → ∪ / ∩)",
      aciklama:
        "Verilen fonksiyonun konkav yukarı (∪) veya konkav aşağı (∩) olduğu aralık istenir. f″'nün işaret incelemesine indirgenen ısınma sorusu.",
      yontem: [
        "İki kez türev al: önce f′, sonra f″.",
        "f″(x)=0 denkleminin köklerini bul; gerekiyorsa çarpanlara ayır.",
        "İşaret tablosu kur: f″>0 olan aralık konkav yukarı (∪), f″<0 olan aralık konkav aşağı (∩).",
      ],
      celdiriciler: [
        { hata: "f″ yerine f′ ile çalışıp artan/azalan aralığı bulmak", uretir: "Konkavlık yerine monotonluk aralığı — kökleri farklı, yanlış aralık" },
        { hata: "f″>0'ı konkav aşağı sanmak (işaret–şekil eşlemesini ters ezberlemek)", uretir: "Doğru aralığın tümleyeni" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      kombinasyon: ["turev-alma-kurallari"],
      ornek: {
        soru: "f(x)=x³−6x²+5x fonksiyonunun grafiği hangi aralıkta konkav aşağıdır (∩)?",
        cevap: "f′(x)=3x²−12x+5, f″(x)=6x−12; f″(x)<0 ⇒ x<2, aralık (−∞, 2)",
      },
    },
    {
      id: "ikinci-turev-02-donum-noktasi",
      ad: "Dönüm (büküm) noktası bulma",
      aciklama:
        "Fonksiyonun dönüm noktalarının apsisleri veya bunların toplamı istenir. f″=0 kökleri bulunur, işaret değişimi kontrol edilir.",
      yontem: [
        "f″(x)'i hesapla ve çarpanlarına ayır.",
        "f″(x)=0 köklerini bul — bunlar yalnızca ADAYDIR.",
        "Her adayda f″'nün işaret değiştirdiğini doğrula; tek katlı kökte işaret kesin değişir.",
        "İstenene göre apsisleri ya da toplamlarını yaz.",
      ],
      celdiriciler: [
        { hata: "f′=0 köklerini (kritik noktaları) dönüm noktası sanmak", uretir: "Ekstremum apsisleri — örnekte 0 ve 3, toplam 3" },
        { hata: "f″=0'ın her kökünü işaret kontrolü yapmadan dönüm saymak", uretir: "Çift katlı kök varsa fazladan sayılmış nokta" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["turev-alma-kurallari", "artan-azalan-ekstremum"],
      ornek: {
        soru: "f(x)=x⁴−4x³+1 fonksiyonunun dönüm noktalarının apsisleri toplamı kaçtır?",
        cevap: "f″(x)=12x²−24x=12x(x−2); x=0 ve x=2'de işaret değişir, toplam 0+2=2",
      },
    },
    {
      id: "ikinci-turev-03-grafikten-okuma",
      ad: "Grafikten konkavlık ve dönüm okuma (f′ grafiği verilir)",
      aciklama:
        "f yerine f′'nün grafiği verilir; f'in konkavlığı veya dönüm noktası sorulur. f″=(f′)′ olduğundan f′'nün artan/azalan olduğu yerler okunur.",
      yontem: [
        "f′ ARTIYORSA f″>0 → f konkav yukarı; f′ AZALIYORSA f″<0 → f konkav aşağı.",
        "f′'nün ekstremum yaptığı (tepe/çukur) apsis, f'in dönüm noktasıdır.",
        "f′'nün sıfırları ise f'in dönüm noktası DEĞİL, ekstremum adayıdır — ikisini karıştırma.",
      ],
      celdiriciler: [
        { hata: "f′'nün x eksenini kestiği noktaları dönüm noktası sanmak", uretir: "Parabolün kökleri — f'in ekstremum apsisleri" },
        { hata: "f′'nün tepe noktasını f'in maksimumu sanmak", uretir: "Dönüm apsisini ekstremum diye işaretleme" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["artan-azalan-ekstremum"],
      ornek: {
        soru: "f′ fonksiyonunun grafiği, tepe noktasının apsisi 2 olan aşağı yönlü bir paraboldür. f'in dönüm noktasının apsisi kaçtır?",
        cevap: "Tepe noktasında f′ artmayı bırakıp azalmaya başlar ⇒ f″ işaret değiştirir ⇒ x=2",
      },
    },
    {
      id: "ikinci-turev-04-ekstremum-siniflama",
      ad: "İkinci türev testiyle ekstremum sınıflama",
      aciklama:
        "Kritik noktalar bulunup türü ikinci türevle belirlenir: f″(c)>0 min, f″(c)<0 maks. İşaret tablosundan çok daha hızlıdır; ÖSYM'nin standart sorusudur.",
      yontem: [
        "f′(x)=0 çözerek kritik noktaları bul.",
        "f″(x)'i hesapla, her kritik noktada değerini incele.",
        "f″(c)>0 ⇒ yerel minimum (∪); f″(c)<0 ⇒ yerel maksimum (∩).",
        "f″(c)=0 çıkarsa test sonuçsuzdur — birinci türev işaret tablosuna dön.",
      ],
      celdiriciler: [
        { hata: "f″>0'ı maksimum sanmak (test işaretlerini ters okumak)", uretir: "Maks ile min apsislerinin yer değiştirmesi — örnekte −1 yerine 3" },
        { hata: "f″'yü kritik noktada değil x=0'da hesaplamak", uretir: "Tek noktadan yanlış genel sınıflama" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["artan-azalan-ekstremum", "turev-alma-kurallari"],
      ornek: {
        soru: "f(x)=x³−3x²−9x+1 fonksiyonunun yerel maksimum noktasının apsisi kaçtır?",
        cevap: "f′(x)=3(x−3)(x+1)=0 ⇒ x=−1, 3; f″(x)=6x−6, f″(−1)=−12<0 ⇒ yerel maks x=−1",
      },
    },
    {
      id: "ikinci-turev-05-isaret-degismeyen-tuzak",
      ad: "f″=0 ama dönüm yok (işaret değişmeme tuzağı)",
      aciklama:
        "f″'nün çift katlı kökü vardır; f″(c)=0 olmasına rağmen işaret değişmediği için c dönüm noktası değildir. Dönüm sayısı sorularak tuzak kurulur.",
      yontem: [
        "f″'yü çarpanlarına ayır, köklerin KATLILIĞINA bak.",
        "Tek katlı kökte işaret değişir → gerçek dönüm; çift katlı kökte değişmez → dönüm DEĞİL.",
        "Emin olmak için kökün iki yanından birer değerle f″'nün işaretini kontrol et.",
      ],
      celdiriciler: [
        { hata: "f″=0'ın her kökünü dönüm saymak", uretir: "Örnekte 2 cevabı (doğrusu 1)" },
        { hata: "Çift katlı kökte 'sıfıra dokunuyor, değişmiştir' diye varsaymak", uretir: "x=0'ı dönüm listesine eklemek" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      ornek: {
        soru: "f(x)=x⁵−5x⁴ fonksiyonunun kaç tane dönüm noktası vardır?",
        cevap: "f″(x)=20x³−60x²=20x²(x−3); x=0 çift katlı, işaret değişmez; yalnız x=3 dönüm ⇒ 1 tane",
      },
    },
    {
      id: "ikinci-turev-06-parametreli-donum",
      ad: "Parametreli dönüm noktası (katsayı bulma)",
      aciklama:
        "Katsayıları bilinmeyen kübik fonksiyonun dönüm noktası (bazen değeriyle birlikte) verilir; katsayılar istenir. Dönüm koşulu f″=0 ile fonksiyon değeri birlikte kullanılır.",
      yontem: [
        "f″(x)'i katsayılar cinsinden yaz.",
        "Dönüm koşulunu uygula: f″(x₀)=0 → bir denklem.",
        "Dönüm noktası (x₀, y₀) olarak verildiyse f(x₀)=y₀ → ikinci denklem.",
        "Sistemi çöz; istenen katsayıyı ver.",
      ],
      celdiriciler: [
        { hata: "Dönüm koşulunu f″ yerine f′'de kullanmak (f′(x₀)=0 yazmak)", uretir: "Örnekte a=0, b=−3 — b için −3 yanlış cevabı" },
        { hata: "f(x₀)=y₀ koşulunu unutup tek denklemle b'yi tahmin etmek", uretir: "b belirsiz kalır; genelde 0 yerine a'nın değeri işaretlenir" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["turev-alma-kurallari", "turevde-uygulamalar"],
      ornek: {
        soru: "f(x)=x³+ax²+bx fonksiyonunun dönüm noktası (1, −2) olduğuna göre b kaçtır?",
        cevap: "f″(x)=6x+2a, f″(1)=0 ⇒ a=−3; f(1)=1−3+b=−2 ⇒ b=0",
      },
    },
  ],
};

export default kb;
