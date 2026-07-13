import type { TopicSoruTipleri } from "./types";

// Belirli İntegral ve Temel Teorem (AYT · İntegral). Newton–Leibniz hesabı,
// aralık özellikleri, parçalı/mutlak değerli integraller, tek-çift simetri
// kısayolu ve d/dx∫ (Leibniz) sorusu. Ordered easy→hard. Every örnek is
// hand-verified.
const kb: TopicSoruTipleri = {
  slug: "belirli-integral-teoremi",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "belirli-integral-teoremi-01-temel-teorem",
      ad: "Temel teorem: F(b) − F(a) hesabı (Newton–Leibniz)",
      aciklama:
        "Antiderivatifi bulup üst sınırdan alt sınırı çıkarmak. Belirli integralin ısınma sorusu; +C yazılmaz.",
      yontem: [
        "İntegrand'ın bir antiderivatifini F(x) bul (belirsiz integraldeki gibi, C'siz).",
        "∫ₐᵇ f(x)dx = F(b) − F(a): ÖNCE üst sınır, SONRA alt sınır.",
        "F(a) negatifse çıkarma işleminde işaret parantezine dikkat et.",
      ],
      celdiriciler: [
        { hata: "F(a) − F(b) hesaplamak (sırayı ters almak)", uretir: "Doğru cevabın işaretçe tersi" },
        { hata: "F(b)·F(a) veya sadece F(b) hesaplamak", uretir: "Alt sınırın katkısı kadar kaymış değer" },
        { hata: "Belirli integrale +C ekleyip şık aramak", uretir: "Sayı yerine C'li ifade — kavram karmaşası" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "∫₁³ (2x+1)dx kaçtır?", cevap: "[x²+x]₁³ = (9+3)−(1+1) = 10" },
    },
    {
      id: "belirli-integral-teoremi-02-aralik-toplami",
      ad: "Aralık toplamı özelliği (∫ₐᵇ + ∫ᵇᶜ = ∫ₐᶜ)",
      aciklama:
        "Fonksiyon verilmeden, integral değerleri verilerek ara aralık istenir; sınır ters çevrilirse işaret değişir (∫ᵇₐ = −∫ₐᵇ), sabit çarpan dışarı alınır.",
      yontem: [
        "Aralıkları sayı doğrusunda birleştir: ∫ₐᶜ = ∫ₐᵇ + ∫ᵇᶜ.",
        "İstenen parçayı yalnız bırak, bilinenleri yerine koy.",
        "Sınırlar ters verilmişse önce işareti düzelt; katsayı varsa en sonda çarp.",
      ],
      celdiriciler: [
        { hata: "Ters sınırlı integralde işaret değiştirmeyi unutmak", uretir: "Doğru cevabın işaretçe tersi" },
        { hata: "Aralıkları toplamak yerine değerleri çıkarma/toplama yönünü karıştırmak", uretir: "Bilinen iki değerin yanlış kombinasyonu (ör. 9−3 yerine 9+3)" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "∫₁⁴ f(x)dx = 9 ve ∫₁² f(x)dx = 3 ise ∫₂⁴ f(x)dx kaçtır?", cevap: "∫₁⁴ = ∫₁² + ∫₂⁴ ⇒ 9 = 3 + ∫₂⁴ ⇒ 6" },
    },
    {
      id: "belirli-integral-teoremi-03-parcali",
      ad: "Parçalı fonksiyonun belirli integrali",
      aciklama:
        "Tanımı kritik noktada değişen fonksiyon; integral, kritik noktadan bölünüp her parçada kendi kuralıyla hesaplanır.",
      yontem: [
        "Fonksiyonun kural değiştirdiği noktayı belirle; integral aralığının içindeyse aralığı oradan böl.",
        "Her alt aralıkta O aralıkta geçerli kuralı integralle.",
        "Parça sonuçlarını topla.",
      ],
      celdiriciler: [
        { hata: "Tek kuralı tüm aralığa uygulamak (bölmeyi atlamak)", uretir: "Örnekte ∫₀²x²dx = 8/3 — 7/3 yerine yanlış şık" },
        { hata: "Kritik noktada yanlış kuralı kullanmak (≤/< sınır karışıklığı)", uretir: "Sürekli fonksiyonlarda değer değişmez ama öğrenci güven kaybıyla yanlış bölme yapar" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "f(x) = x² (x<1), 2x−1 (x≥1) ise ∫₀² f(x)dx kaçtır?", cevap: "∫₀¹x²dx + ∫₁²(2x−1)dx = 1/3 + [x²−x]₁² = 1/3 + 2 = 7/3" },
    },
    {
      id: "belirli-integral-teoremi-04-tek-cift",
      ad: "Tek–çift fonksiyon simetri kısayolu",
      aciklama:
        "Simetrik aralıkta (−a'dan a'ya) tek fonksiyonun integrali 0; çift fonksiyonunki 2·∫₀ᵃ. ÖSYM tek terimli 'boşa hesap' tuzağını buraya kurar.",
      yontem: [
        "Aralık −a'dan a'ya mı? Değilse kısayol YOK, normal hesapla.",
        "İntegrand'ı tek ve çift parçalara ayır: tek üsler (x, x³, sinx) tek; çift üsler ve sabitler çift.",
        "Tek parçayı 0 say; çift parçayı 2∫₀ᵃ ile hesapla.",
      ],
      celdiriciler: [
        { hata: "Tek terimi de hesaba katmak (simetriyi görmemek)", uretir: "Zaman kaybı + işaret hatası riski; x³ terimi zaten 0 verir" },
        { hata: "Kısayolu simetrik olmayan aralıkta (ör. 0'dan 2'ye) kullanmak", uretir: "Tek terimin gerçek katkısı yok sayılmış eksik değer" },
        { hata: "Çift parçada 2 katsayısını unutmak", uretir: "Doğru cevabın yarısı (örnekte 16 yerine 8)" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "∫₋₂² (x³+3x²)dx kaçtır?", cevap: "x³ tek ⇒ 0; 3x² çift ⇒ 2∫₀²3x²dx = 2·[x³]₀² = 2·8 = 16" },
    },
    {
      id: "belirli-integral-teoremi-05-mutlak-deger",
      ad: "Mutlak değerli fonksiyonun integrali",
      aciklama:
        "|f(x)| integrali, f'nin işaret değiştirdiği noktadan bölünür; negatif bölgede −f integrallenir. Mutlak değeri 'yokmuş gibi' atmak klasik hatadır.",
      yontem: [
        "Mutlak değer içini 0'a eşitle, işaret değişim noktalarını bul.",
        "Aralığı bu noktalardan böl; içerinin negatif olduğu parçada −(iç) yaz.",
        "Parçaları ayrı ayrı integralle ve topla — sonuç asla negatif çıkamaz.",
      ],
      celdiriciler: [
        { hata: "Mutlak değeri atıp doğrudan içini integrallemek", uretir: "Örnekte ∫₀³(x−1)dx = 3/2 — 5/2 yerine en dolu yanlış şık" },
        { hata: "İşaret değişim noktasını yanlış bulmak veya bölmeden tek parçada |sonuç| almak", uretir: "|∫f| ≠ ∫|f| — parçaların birbirini götürdüğü küçük değer" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "∫₀³ |x−1| dx kaçtır?", cevap: "∫₀¹(1−x)dx + ∫₁³(x−1)dx = 1/2 + 2 = 5/2" },
    },
    {
      id: "belirli-integral-teoremi-06-leibniz",
      ad: "Değişken üst sınırlı integralin türevi (d/dx ∫ₐˣ f(t)dt = f(x))",
      aciklama:
        "F(x) = ∫ₐˣ f(t)dt tanımlanır, F′ ya da F′ + F karışımı istenir. Kilit bilgiler: F′(x) = f(x) ve F(a) = 0 (alt-üst sınır eşit). Üst sınır g(x) ise zincir kuralı devreye girer.",
      yontem: [
        "d/dx ∫ₐˣ f(t)dt = f(x): integrali HESAPLAMADAN, t yerine x yaz.",
        "Üst sınır bileşikse (x² gibi): f(g(x))·g′(x) — zincir kuralını unutma.",
        "F(a) sorulursa sınırlar eşit demektir: ∫ₐᵃ = 0.",
      ],
      celdiriciler: [
        { hata: "Önce integrali açıkça hesaplayıp sonra türev almak", uretir: "Doğru ama yavaş; işlem hatası riski — sınavda zaman tuzağı" },
        { hata: "Üst sınır bileşikken g′(x) çarpanını unutmak", uretir: "f(g(x)) yalın hâli — zincirsiz eksik cevap" },
        { hata: "F(a) = 0 olduğunu görmeyip hesaplamaya girişmek", uretir: "Gereksiz işlem; toplam sorularında yanlış ekleme" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["turev-alma-kurallari", "integral-kavrami"],
      ornek: { soru: "F(x) = ∫₁ˣ (t²+2t)dt ise F′(3) kaçtır?", cevap: "F′(x) = x²+2x, F′(3) = 9+6 = 15" },
    },
  ],
};

export default kb;
