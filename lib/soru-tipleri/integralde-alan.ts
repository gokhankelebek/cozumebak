import type { TopicSoruTipleri } from "./types";

// İntegralde Alan (AYT · İntegral). İntegral kümesinin en çok soru üreten
// konusu: eğri altı alan, eksen altı işaret tuzağı, iki eğri arası "üst eksi
// alt", parabol-doğru klasiği, y-eksenine göre alan ve parametre bulma.
// Ordered easy→hard. Every örnek is hand-verified.
const kb: TopicSoruTipleri = {
  slug: "integralde-alan",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "integralde-alan-01-egri-alti",
      ad: "Eğri altı alan (x ekseni üstünde)",
      aciklama:
        "f(x) ≥ 0 aralığında eğri ile x ekseni arasındaki alan doğrudan belirli integraldir. Konunun giriş sorusu.",
      yontem: [
        "Aralıkta f'nin işaretini kontrol et: f(x) ≥ 0 ise alan = ∫ₐᵇ f(x)dx, ekstra işlem yok.",
        "Antiderivatifi bul, Newton–Leibniz uygula.",
        "Cevap birimkare cinsinden pozitif bir sayıdır.",
      ],
      celdiriciler: [
        { hata: "Sınırları yanlış yerleştirmek (F(a)−F(b))", uretir: "Negatif 'alan' — işaretçe ters değer" },
        { hata: "Antiderivatifte n+1'e bölmeyi unutmak", uretir: "Örnekte 9 yerine 27 — 3 kat hatalı" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "y=x² eğrisi, x ekseni, x=0 ve x=3 doğruları arasındaki alan kaç birimkaredir?", cevap: "∫₀³x²dx = [x³/3]₀³ = 9" },
    },
    {
      id: "integralde-alan-02-eksen-alti",
      ad: "x ekseni altındaki bölge (negatif integral tuzağı)",
      aciklama:
        "Bölge eksenin altındaysa integral negatif çıkar; alan mutlak değerdir. İntegral sonucunu doğrudan alan sanmak konunun bir numaralı hatasıdır.",
      yontem: [
        "Aralıkta f'nin işaretine bak: f(x) ≤ 0 ise bölge eksen altındadır.",
        "Alan = |∫ₐᵇ f(x)dx| = −∫ₐᵇ f(x)dx.",
        "Eğri aralık içinde eksen kesiyorsa, kesim noktasından bölüp her parçanın mutlak değerini topla — asla tek integralde götürme.",
      ],
      celdiriciler: [
        { hata: "İntegral sonucunu (negatif sayıyı) alan olarak vermek", uretir: "Örnekte −16/3 — 'alan negatif olamaz' kontrolünü atlayan şık" },
        { hata: "Eksen kesen bölgede tek integral kurmak (parçaların birbirini götürmesi)", uretir: "Gerçek alandan küçük, hatta 0 çıkan değer — tek fonksiyonda ∫₋ₐᵃ = 0 tuzağı" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["belirli-integral-teoremi"],
      ornek: { soru: "y=x²−4 eğrisi, x ekseni, x=0 ve x=2 doğruları arasındaki alan kaç birimkaredir?", cevap: "∫₀²(x²−4)dx = 8/3−8 = −16/3; alan |−16/3| = 16/3" },
    },
    {
      id: "integralde-alan-03-iki-egri",
      ad: "İki eğri arasındaki alan (üst − alt)",
      aciklama:
        "Kesişim noktaları bulunur, aralıkta hangi eğrinin üstte olduğu belirlenir, (üst − alt) integrallenir. Eğriler eksen altına insе bile üst−alt farkı işi kendiliğinden halleder.",
      yontem: [
        "Eğrileri eşitle, kesişim apsislerini bul — bunlar integralin sınırlarıdır.",
        "Aralıktan bir deneme değeri seçip üst/alt eğriyi belirle.",
        "A = ∫(üst − alt)dx; fark aralık boyunca pozitifse mutlak değere gerek yok.",
      ],
      celdiriciler: [
        { hata: "Üst-altı ters yazmak (alt − üst)", uretir: "Doğru cevabın işaretçe tersi — 'negatif alan' alarmı kaçırılırsa yanlış şık" },
        { hata: "Kesişim noktalarını bulmadan verilen/uydurulan sınırlarla integrallemek", uretir: "Fazladan ya da eksik bölge katılmış değer" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "y=2x doğrusu ile y=x² parabolü arasında kalan bölgenin alanı kaç birimkaredir?", cevap: "Kesişim: x=0, 2; A=∫₀²(2x−x²)dx = [x²−x³/3]₀² = 4−8/3 = 4/3" },
    },
    {
      id: "integralde-alan-04-parabol-dogru",
      ad: "Parabol–doğru arası alan klasiği",
      aciklama:
        "ÖSYM'nin standart alan sorusu: bir parabol ile bir doğrunun sınırladığı bölge. Fark fonksiyonu ikinci dereceden olur; kökleri kesişim apsisleridir.",
      yontem: [
        "Parabol = doğru denkleminden fark fonksiyonunu kur; kökleri (kesişimleri) bul.",
        "Kökler arasında (üst − alt) = fark fonksiyonunun pozitif hâli; integralle.",
        "Hız kontrolü: kökler x₁, x₂ ve baş katsayı a için alan = |a|·(x₂−x₁)³/6 — sonucunu bu formülle sağla.",
      ],
      celdiriciler: [
        { hata: "Fark yerine yalnız parabolü integrallemek", uretir: "Doğrunun altındaki bölge unutulmuş, ilgisiz değer" },
        { hata: "Fark fonksiyonunun işaretini ters kurup sonucu negatif bulmak", uretir: "Örnekte −9/2 — mutlak değer refleksi yoksa yanlış işaretli şık" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["parabol-ayt"],
      ornek: { soru: "y=x²−2x parabolü ile y=x doğrusu arasındaki alan kaç birimkaredir?", cevap: "Kesişim: x²−3x=0 ⇒ x=0, 3; A=∫₀³(3x−x²)dx = 27/2−9 = 9/2 (sağlama: 1·3³/6 = 9/2)" },
    },
    {
      id: "integralde-alan-05-y-eksenine-gore",
      ad: "y eksenine göre alan (x = g(y) ile dy integrali)",
      aciklama:
        "Bölge y ekseni ve yatay doğrularla sınırlıysa eğri x = g(y) biçimine çevrilir, dy ile integrallenir. x-y rollerinin değişmesi öğrenciyi şaşırtır.",
      yontem: [
        "Eğriyi x = g(y) biçiminde çöz (y=√x ⇒ x=y²).",
        "Sınırlar y değerleridir: yatay doğrular ve kesişimlerden oku.",
        "A = ∫(sağdaki − soldaki)dy; y ekseni sınır ise soldaki x=0'dır.",
      ],
      celdiriciler: [
        { hata: "dx ile kurup x sınırları kullanmak (bölgeyi yanlış okumak)", uretir: "Tamamlayıcı bölgenin alanı — örnekte 8/3 yerine dikdörtgenden kalan 4·2−8/3 karışıklığı" },
        { hata: "x = g(y)'ye çevirirken kare/karekök hatası (x=y² yerine x=√y)", uretir: "Yanlış integrand, tutarsız değer" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      ornek: { soru: "y=√x eğrisi, y ekseni ve y=2 doğrusu arasındaki alan kaç birimkaredir?", cevap: "x=y²; A=∫₀²y²dy = [y³/3]₀² = 8/3" },
    },
    {
      id: "integralde-alan-06-parametre",
      ad: "Alan verilip parametre bulma (ters problem)",
      aciklama:
        "Alan sayısal olarak verilir, eğri/doğrudaki k parametresi istenir. Alan integrali k cinsinden kurulup denkleme dönüştürülür — sınavın seçici sorusu.",
      yontem: [
        "Kesişimleri k cinsinden bul (sınırlar da k'ye bağlı çıkar).",
        "Alanı k cinsinden integralle; tek değişkenli ifadeye indirge.",
        "Verilen alana eşitle, k'yi çöz; k üzerindeki koşulu (k>0 gibi) uygula.",
      ],
      celdiriciler: [
        { hata: "Sınırları k'ye bağlamayıp sabit sayı almak", uretir: "k'siz ya da yanlış dereceli denklem — çözümsüzlük paniği" },
        { hata: "k^(3/2) = 27 tipi denklemde her iki tarafın 2/3. kuvvetini yanlış almak (k=3 sanmak)", uretir: "Örnekte 9 yerine 3 — en dolu çeldirici şık" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["parabol-ayt", "belirli-integral-teoremi"],
      ornek: { soru: "k>0 olmak üzere y=x² parabolü ile y=k doğrusu arasındaki alan 36 birimkare ise k kaçtır?", cevap: "Kesişim x=±√k; A=∫₋√ₖ^√ₖ(k−x²)dx = (4/3)k^(3/2) = 36 ⇒ k^(3/2)=27 ⇒ k=9" },
    },
  ],
};

export default kb;
