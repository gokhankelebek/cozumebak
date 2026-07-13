import type { TopicSoruTipleri } from "./types";

// İkinci Dereceden Eşitsizlikler (AYT). Teacher's catalogue of how ÖSYM asks this
// topic. Ordered easy→hard. Every örnek is hand-verified; celdiriciler map each
// classic wrong answer to the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "ikinci-derece-esitsizlik-ayt",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "ikinci-derece-esitsizlik-01-isaret-tablosu",
      ad: "İşaret tablosuyla temel eşitsizlik",
      aciklama:
        "ax²+bx+c ile kurulmuş tek eşitsizliğin çözüm kümesi. Kökleri bul, a'nın işaretine göre tabloyu kur — konunun açılış sorusu.",
      yontem: [
        "İfadeyi sıfıra eşitleyip kökleri bul (çarpanlara ayır ya da Δ).",
        "a>0 ise parabol köklerin dışında pozitif, arasında negatiftir (a<0 ise tersi).",
        "Eşitsizliğin yönüne göre aralığı seç; ≤ / ≥ ise kökler dahil, < / > ise hariç.",
      ],
      celdiriciler: [
        { hata: "a>0 iken 'arasında pozitif' sanmak", uretir: "Doğru aralığın tümleyeni (dış aralıklar)" },
        { hata: "< eşitsizliğinde kökleri dahil etmek", uretir: "Açık aralık yerine kapalı aralık" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "x²−x−6 < 0 eşitsizliğinin çözüm kümesi nedir?",
        cevap: "(x−3)(x+2)<0, kökler −2 ve 3; a=1>0 olduğundan arasında negatif ⇒ (−2, 3)",
      },
    },
    {
      id: "ikinci-derece-esitsizlik-02-tam-sayi-sayisi",
      ad: "Tam sayı çözüm sayısı / toplamı",
      aciklama:
        "Çözüm kümesi bir aralıktır; aralıktaki tam sayıların sayısı ya da toplamı istenir. ÖSYM'nin sayısal cevap üretme kalıbı.",
      yontem: [
        "Eşitsizliği işaret tablosuyla çöz, aralığı yaz.",
        "Uç noktaların dahil olup olmadığına bak (≤/≥ ise kökler dahil).",
        "Aralıktaki tam sayıları tek tek listele; sayarken 0'ı unutma.",
      ],
      celdiriciler: [
        { hata: "≤ eşitsizliğinde kökleri saymamak", uretir: "Doğru sayının 2 eksiği" },
        { hata: "Sayarken 0'ı atlamak", uretir: "Doğru sayının 1 eksiği" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "x²−3x−10 ≤ 0 eşitsizliğini sağlayan kaç tam sayı vardır?",
        cevap: "(x−5)(x+2)≤0 ⇒ −2≤x≤5; tam sayılar −2,−1,0,1,2,3,4,5 ⇒ 8 tane",
      },
    },
    {
      id: "ikinci-derece-esitsizlik-03-carpim-bolum",
      ad: "Çarpım / bölüm biçiminde eşitsizlik (payda tuzağı)",
      aciklama:
        "Rasyonel ya da çarpanlı eşitsizlik. Konunun bir numaralı tuzağı: paydayı sıfır yapan değer, eşitlik olsa bile ASLA çözüme dahil edilmez.",
      yontem: [
        "Payın ve paydanın köklerini ayrı ayrı bul, sayı doğrusuna sırala.",
        "Tek katlı her kökte işaret değişir; tabloyu kur.",
        "≥ / ≤ durumunda pay kökleri dahil, payda kökleri her zaman hariç.",
      ],
      celdiriciler: [
        { hata: "≥ diye payda kökünü de dahil etmek", uretir: "Tanımsız noktayı içeren yanlış küme (ör. köşeli parantezli −3)" },
        { hata: "Bölümü çarpım gibi çözüp payda kısıtını hiç yazmamak", uretir: "Payda kökünü içeren kapalı aralık" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "(x−2)/(x+3) ≥ 0 eşitsizliğinin çözüm kümesi nedir?",
        cevap: "Kökler: pay x=2 (dahil), payda x=−3 (hariç); dışta pozitif ⇒ (−∞,−3) ∪ [2,∞)",
      },
    },
    {
      id: "ikinci-derece-esitsizlik-04-her-x-icin",
      ad: "Her x için pozitif / negatif olma koşulu",
      aciklama:
        "'Her reel x için f(x)>0' tipi. İki koşul birlikte: a'nın işareti doğru olmalı VE Δ<0 olmalı. Tek koşulla yetinen öğrenci yanlış aralık bulur.",
      yontem: [
        "Her x için pozitif ⇒ a>0 ve Δ<0; her x için negatif ⇒ a<0 ve Δ<0.",
        "Δ'yı parametre cinsinden yaz, Δ<0 eşitsizliğini çöz.",
        "a'da da parametre varsa iki koşulun kesişimini al.",
      ],
      celdiriciler: [
        { hata: "Δ<0 yerine Δ>0 yazmak (kök 'olsun' sanmak)", uretir: "Doğru aralığın tümleyeni" },
        { hata: "a'nın işaret koşulunu unutmak (a parametreliyken)", uretir: "Negatif kolu da içeren fazla geniş aralık" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["ikinci-derece-denklemler-ayt"],
      ornek: {
        soru: "x²+mx+9 > 0 eşitsizliği her reel x için sağlanıyorsa m kaç farklı tam sayı değeri alabilir?",
        cevap: "a=1>0; Δ=m²−36<0 ⇒ −6<m<6; tam sayılar −5,…,5 ⇒ 11 tane",
      },
    },
    {
      id: "ikinci-derece-esitsizlik-05-sistem",
      ad: "Eşitsizlik sisteminin ortak çözümü",
      aciklama:
        "İki (veya daha çok) eşitsizlik birlikte verilir; kesişim istenir. Hata genellikle kesişim yerine birleşim almakta ya da uç nokta dahilliğini karıştırmaktadır.",
      yontem: [
        "Her eşitsizliği ayrı ayrı işaret tablosuyla çöz.",
        "Çözümleri aynı sayı doğrusuna işle, KESİŞİMİ al.",
        "Uç noktaları tek tek kontrol et: her iki eşitsizliği de sağlamalı.",
      ],
      celdiriciler: [
        { hata: "Kesişim yerine birleşim almak", uretir: "Fazla geniş küme (iki çözümün birleşimi)" },
        { hata: "Bir eşitsizlikte hariç olan ucu ortak çözüme dahil etmek", uretir: "0 gibi sınır değeri içeren yanlış küme" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      ornek: {
        soru: "x²−4 ≤ 0 ve x²−x > 0 sisteminin çözüm kümesi nedir?",
        cevap: "İlki: −2≤x≤2; ikincisi: x(x−1)>0 ⇒ x<0 veya x>1; kesişim ⇒ [−2,0) ∪ (1,2]",
      },
    },
    {
      id: "ikinci-derece-esitsizlik-06-parametreli",
      ad: "Çözüm kümesinden katsayı bulma (ters problem)",
      aciklama:
        "Eşitsizliğin çözüm kümesi aralık olarak verilir, katsayılar istenir. Aralığın uç noktaları köklerdir — Vieta ile katsayıya dönülür.",
      yontem: [
        "Çözüm kümesi (x₁, x₂) ise x₁ ve x₂, ax²+bx+c=0 denkleminin kökleridir.",
        "Kökler toplamı = −b/a, kökler çarpımı = c/a ile katsayıları kur.",
        "Aralığın 'arasında' olması a>0 ile, 'dışında' olması a<0 ile tutarlı mı kontrol et.",
      ],
      celdiriciler: [
        { hata: "Kökler toplamında işareti unutmak (b=x₁+x₂ yazmak)", uretir: "b'nin işaretçe tersi (ör. b=4)" },
        { hata: "Aralığın iç/dış bilgisini a'nın işaretiyle bağdaştırmamak", uretir: "a'nın işareti yanlış seçilmiş katsayı takımı" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["ikinci-derece-denklemler-ayt", "polinomlar-ayt"],
      ornek: {
        soru: "x²+bx+c < 0 eşitsizliğinin çözüm kümesi (−1, 5) ise b+c kaçtır?",
        cevap: "Kökler −1 ve 5: b=−(−1+5)=−4, c=(−1)⋅5=−5 ⇒ b+c=−9",
      },
    },
    {
      id: "ikinci-derece-esitsizlik-07-sabitli-rasyonel",
      ad: "Sabitli rasyonel eşitsizlik (çapraz çarpma tuzağı)",
      aciklama:
        "f(x)/g(x) ≤ k biçimi. Paydanın işareti bilinmediğinden çapraz çarpma YASAK; sabit sola alınıp tek kesir yapılır. Sınavın seçici sorusu.",
      yontem: [
        "Sabiti sola al: f(x)/g(x) − k ≤ 0.",
        "Paydaları eşitleyip tek kesir yaz, payı sadeleştir.",
        "Pay ve payda kökleriyle işaret tablosu kur; payda kökü daima hariç.",
      ],
      celdiriciler: [
        { hata: "Çapraz çarpma yapmak (paydanın işaretini yok saymak)", uretir: "Tek parçalı yanlış aralık — çözümün yalnız bir kolu" },
        { hata: "Payı −1 ile çarparken eşitsizliğin yönünü çevirmemek", uretir: "Doğru kümenin tümleyeni" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      ornek: {
        soru: "(x+3)/(x−1) ≤ 2 eşitsizliğinin çözüm kümesi nedir?",
        cevap: "(x+3)/(x−1)−2 = (5−x)/(x−1) ≤ 0 ⇒ (x−5)/(x−1) ≥ 0 ⇒ (−∞,1) ∪ [5,∞)",
      },
    },
  ],
};

export default kb;
