import type { TopicSoruTipleri } from "./types";

// Trigonometrik Denklemler (AYT · Trigonometri). Teacher's catalogue of how
// ÖSYM asks this topic. Ordered easy→hard. Every örnek is hand-verified;
// celdiriciler map each classic wrong answer to the exact mistake behind it.
const kb: TopicSoruTipleri = {
  slug: "trigonometrik-denklemler-ayt",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "trig-denklem-01-sinx-k",
      ad: "sinx = k temel denklemi (iki kök ailesi)",
      aciklama:
        "sinx=k'nin çözümü İKİ ailedir: x=α+2kπ ve x=π−α+2kπ. Konunun giriş sorusu; ikinci aileyi (bütünler açıyı) unutmak bir numaralı hata.",
      yontem: [
        "k'yi özel açı değeriyle eşle: sinα=k olan α'yı bul (ör. sinx=1/2 ⇒ α=π/6).",
        "İki aileyi yaz: x = α + 2kπ ve x = π − α + 2kπ.",
        "Aralık verilmişse (genelde [0,2π)) k değerlerini deneyip aralığa düşen kökleri listele.",
      ],
      celdiriciler: [
        { hata: "π−α ailesini (II. bölge kökünü) unutmak", uretir: "sinx=1/2, [0,2π) için tek kök π/6; kök toplamı π yerine π/6" },
        { hata: "sin simetrisi yerine cos simetrisi (2π−α) kullanmak", uretir: "5π/6 yerine 11π/6" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "sinx = 1/2 denkleminin [0,2π) aralığındaki kökleri nelerdir?",
        cevap: "x = π/6 ve x = π − π/6 = 5π/6",
      },
    },
    {
      id: "trig-denklem-02-cosx-k",
      ad: "cosx = k temel denklemi (± simetri)",
      aciklama:
        "cosx=k'nin çözümü x=±α+2kπ'dir; [0,2π)'de kökler α ve 2π−α olur (toplamları hep 2π). sin'in π−α simetrisiyle karıştırılır.",
      yontem: [
        "Denklemi cosx=k biçimine getir (ör. 2cosx−√3=0 ⇒ cosx=√3/2).",
        "α'yı bul, iki aileyi yaz: x = ±α + 2kπ.",
        "[0,2π) içinde kökler α ve 2π−α; kök toplamı istenirse doğrudan 2π.",
      ],
      celdiriciler: [
        { hata: "cos'a sin simetrisi (π−α) uygulamak", uretir: "cosx=√3/2 için 11π/6 yerine 5π/6 (orada cos negatiftir)" },
        { hata: "−α ailesini unutup tek kök almak", uretir: "Kök sayısı 2 yerine 1; toplam 2π yerine π/6" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "2cosx − √3 = 0 denkleminin [0,2π) aralığındaki kökleri nelerdir?",
        cevap: "cosx=√3/2 ⇒ x = π/6 ve x = 2π − π/6 = 11π/6",
      },
    },
    {
      id: "trig-denklem-03-tanx-k",
      ad: "tanx = k denklemi (periyot π tuzağı)",
      aciklama:
        "tan'ın periyodu π'dir: çözüm TEK aile, x=α+kπ. Öğrenci 2π periyot alışkanlığıyla [0,2π)'de kök kaçırır ya da olmayan kök üretir.",
      yontem: [
        "tanx'i yalnız bırak, α'yı bul (ör. tanx=√3 ⇒ α=π/3).",
        "Tek aileyi yaz: x = α + kπ (periyot π, 2π DEĞİL).",
        "[0,2π) için k=0 ve k=1 dene: α ve α+π — biri I./II., diğeri III./IV. bölgede.",
      ],
      celdiriciler: [
        { hata: "Periyodu 2π alıp α+π kökünü atlamak", uretir: "tanx=√3, [0,2π) için tek kök π/3 (4π/3 kaçar)" },
        { hata: "tan pozitifken kökü II. bölgeye yazmak", uretir: "4π/3 yerine 2π/3 (orada tan negatiftir)" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "tanx = √3 denkleminin [0,2π) aralığındaki kökleri nelerdir?",
        cevap: "x = π/3 + kπ ⇒ x = π/3 ve x = 4π/3",
      },
    },
    {
      id: "trig-denklem-04-aralikta-kok-sayisi",
      ad: "Katlı açıda verilen aralıkta kök sayısı",
      aciklama:
        "sin2x=k, cos3x=k gibi denklemlerde aralık, katlı açı için genişler: x∈[0,2π) ise 2x∈[0,4π). Aralığı genişletmeyen öğrenci kök sayısını yarıya düşürür.",
      yontem: [
        "Katlı açıyı tek harf yap: u=2x; x∈[0,2π) ⇒ u∈[0,4π).",
        "Temel denklemi u için çöz, GENİŞLEMİŞ aralıktaki tüm u köklerini listele.",
        "Her u kökünü ikiye böl (x=u/2) ve say — kök sayısı katsayı kadar katlanır.",
      ],
      celdiriciler: [
        { hata: "Aralığı genişletmeyip u'yu [0,2π)'de çözmek", uretir: "sin2x=1/2 için 4 yerine 2 kök" },
        { hata: "u köklerini 2'ye bölmeyi unutmak", uretir: "π/12 yerine π/6 ile başlayan yanlış kök listesi" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "sin2x = 1/2 denkleminin [0,2π) aralığında kaç kökü vardır?",
        cevap: "2x∈[0,4π): 2x = π/6, 5π/6, 13π/6, 17π/6 ⇒ x = π/12, 5π/12, 13π/12, 17π/12 ⇒ 4 kök",
      },
    },
    {
      id: "trig-denklem-05-carpanlara-ayirma",
      ad: "Çarpanlara ayrılan denklemler (her çarpan ayrı denklem)",
      aciklama:
        "sinx(2cosx−1)=0 tipinde her çarpan sıfıra eşitlenir. Kritik tuzak: denklemin iki yanını sinx gibi bir çarpana BÖLMEK — o çarpanın kökleri kaybolur.",
      yontem: [
        "Her şeyi bir tarafa topla, ortak çarpan parantezine al.",
        "Her çarpanı ayrı ayrı sıfıra eşitle: sinx=0 ve 2cosx−1=0.",
        "Her alt denklemin aralıktaki köklerini listele, birleştir (ortak kök varsa bir kez say).",
      ],
      celdiriciler: [
        { hata: "İki tarafı sinx'e bölmek (sinx=0 köklerini kaybetmek)", uretir: "4 yerine 2 kök (0 ve π kaybolur)" },
        { hata: "2cosx−1=0'ı cosx=−1/2 diye çözmek (işaret)", uretir: "π/3, 5π/3 yerine 2π/3, 4π/3" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "sinx⋅(2cosx − 1) = 0 denkleminin [0,2π) aralığında kaç kökü vardır?",
        cevap: "sinx=0 ⇒ x=0, π; cosx=1/2 ⇒ x=π/3, 5π/3 ⇒ 4 kök",
      },
    },
    {
      id: "trig-denklem-06-iki-kat-aci-denklemi",
      ad: "İki kat açı içeren denklem (sin2x=cosx tipi)",
      aciklama:
        "sin2x=2sinxcosx açılımı yapılır, ortak çarpana alınır. Özdeşlik + çarpanlara ayırma birleşimi; gerçek sınav ayarı burasıdır.",
      yontem: [
        "İki kat açıyı aç: sin2x=2sinxcosx (gerekirse cos2x'in soruya uyan formunu seç).",
        "Her şeyi bir tarafa topla, ortak çarpana al — ASLA sadeleştirme (bölme) yapma.",
        "Her çarpanın köklerini aralıkta listele, birleştir.",
      ],
      celdiriciler: [
        { hata: "İki tarafı cosx'e bölüp cosx=0 köklerini kaybetmek", uretir: "4 yerine 2 kök (π/2 ve 3π/2 kaybolur)" },
        { hata: "sin2x'i 2sinx diye açmak", uretir: "sinx'li yanlış denklem; köklerle ilgisiz sonuç" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["trigonometrik-ozdeslikler-ayt"],
      ornek: {
        soru: "sin2x = cosx denkleminin [0,2π) aralığında kaç kökü vardır?",
        cevap: "cosx(2sinx−1)=0 ⇒ cosx=0: π/2, 3π/2; sinx=1/2: π/6, 5π/6 ⇒ 4 kök",
      },
    },
    {
      id: "trig-denklem-07-ikinci-derece",
      ad: "Kare içeren denklem (ikinci derece substitüsyon)",
      aciklama:
        "2sin²x−sinx−1=0 tipinde sinx=t denir, ikinci derece denklem çözülür. [−1,1] dışına düşen t elenir; kalan her t ayrı temel denklemdir.",
      yontem: [
        "sinx=t (veya cosx=t) de; t için ikinci derece denklemi çarpanlara ayır.",
        "t köklerinden [−1,1] dışında kalanı ELE — o kol çözüm vermez.",
        "Geçerli her t için temel denklemi aralıkta çöz, kökleri birleştir.",
      ],
      celdiriciler: [
        { hata: "Çarpanlara ayırmayı (2t+1)(t−1) yerine (2t−1)(t+1) yapmak", uretir: "sinx=1/2 ve sinx=−1 kolları: yanlış kök kümesi {π/6, 5π/6, 3π/2}" },
        { hata: "[−1,1] dışındaki t kökünü elemeden 'kök var' saymak", uretir: "cos'lu sürümlerde kök sayısı bir fazla" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["trigonometrik-ozdeslikler-ayt"],
      ornek: {
        soru: "2sin²x − sinx − 1 = 0 denkleminin [0,2π) aralığında kaç kökü vardır?",
        cevap: "(2sinx+1)(sinx−1)=0 ⇒ sinx=1: π/2; sinx=−1/2: 7π/6, 11π/6 ⇒ 3 kök",
      },
    },
  ],
};

export default kb;
