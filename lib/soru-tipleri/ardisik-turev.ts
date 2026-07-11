import type { TopicSoruTipleri } from "./types";

// Ardışık Türev (AYT · Türev). Teacher's catalogue of how ÖSYM asks this
// topic. Ordered easy→hard. Every örnek is hand-verified; celdiriciler map each
// classic wrong answer to the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "ardisik-turev",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "ardisik-turev-01-ikinci-turev",
      ad: "İkinci türev hesabı ve f″(a) değeri",
      aciklama:
        "Polinomun türevi iki kez alınıp bir noktadaki değeri istenir. Konunun ısınma sorusu; tek risk işlem disiplini.",
      yontem: [
        "Birinci türevi al, sonucu YAZ (kafadan ikinciye atlama).",
        "Yazdığın f′'yü tekrar türet: f″.",
        "İstenen noktayı f″'de yerine koy.",
      ],
      celdiriciler: [
        { hata: "Birinci türevde durup f′(a) vermek", uretir: "f′(a) değeri" },
        { hata: "İkinci türette sabitleşen terimi (x'li terimin katsayısını) korumak", uretir: "Sabit kadar kaymış değer" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "f(x)=x⁴−3x²+2x ise f″(1) kaçtır?", cevap: "f′(x)=4x³−6x+2, f″(x)=12x²−6, f″(1)=6" },
    },
    {
      id: "ardisik-turev-02-polinom-yuksek-mertebe",
      ad: "Polinomda yüksek mertebe türev ve sıfırlanma",
      aciklama:
        "x^n'in ardışık türevlerindeki katsayı zinciri n(n−1)(n−2)… ve 'n. dereceden polinomun (n+1). türevi sıfırdır' bilgisi. Katsayı zincirini eksik çarpmak tipik hata.",
      yontem: [
        "Her türev dereceyi 1 düşürür: derece n ise (n+1). türev kesin 0.",
        "x^n için k. türev: n(n−1)⋯(n−k+1)·x^(n−k) — katsayıları sırayla çarp.",
        "Küçük dereceli terimler yolda sıfırlanır; yalnız yaşayan terimleri taşı.",
      ],
      celdiriciler: [
        { hata: "Katsayı zincirinden bir çarpanı atlamak (ör. 120x yerine 60x)", uretir: "Doğru cevabın tam böleni olan değer" },
        { hata: "Derecesi aşılan terimin sıfırlandığını görmeyip iz bırakmak", uretir: "Fazladan terimli yanlış ifade" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "f(x)=x⁵−2x³ ise f⁽⁴⁾(1) kaçtır?", cevap: "x⁵ → 5⋅4⋅3⋅2·x=120x; x³ terimi 4. türevde 0. f⁽⁴⁾(1)=120" },
    },
    {
      id: "ardisik-turev-03-hiz-ivme",
      ad: "Konum–hız–ivme (fiziksel yorum)",
      aciklama:
        "Konum fonksiyonu verilir; hız birinci, ivme ikinci türevdir. ÖSYM sıklıkla çapraz sorar: 'ivmenin sıfır olduğu andaki hız' gibi.",
      yontem: [
        "v(t)=s′(t), a(t)=s″(t) — hangi kelime hangi mertebe, önce bunu sabitle.",
        "Koşul hangi fonksiyona aitse (hız mı ivme mi) önce onu sıfırla/çöz, t'yi bul.",
        "Bulunan t'yi istenen DİĞER fonksiyonda değerlendir.",
      ],
      celdiriciler: [
        { hata: "İvmeyi birinci türev sanmak", uretir: "v(t) değeri — bir mertebe eksik" },
        { hata: "t'yi bulduğu fonksiyonda değerlendirip istenen fonksiyona geçmemek", uretir: "0 (koşulun kendisi)" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["turevde-uygulamalar"],
      ornek: { soru: "s(t)=2t³−3t² (metre, saniye) ise t=2 anındaki ivme kaçtır?", cevap: "v(t)=6t²−6t, a(t)=12t−6, a(2)=18 m/s²" },
    },
    {
      id: "ardisik-turev-04-rasyonel-koklu",
      ad: "Rasyonel/köklü ifadede ardışık türev",
      aciklama:
        "1/x, 1/x² veya √x tipli ifadenin ikinci–üçüncü türevi. Negatif ve kesirli üste her adımda işaret ile katsayı takibi gerekir.",
      yontem: [
        "Üslü biçime çevir: 1/x = x⁻¹, √x = x^(1/2).",
        "Her adımda üssü katsayıya çarp, üssü 1 azalt; İŞARETİ ayrıca yaz.",
        "1/x için örüntü: (−1)ⁿ·n!/xⁿ⁺¹ — kontrol amaçlı kullan.",
      ],
      celdiriciler: [
        { hata: "Negatif üsten gelen işaret değişimini bir adımda kaçırmak", uretir: "Doğru cevabın işaretçe tersi" },
        { hata: "Katsayıları (2, 6, 24 …) biriktirmeyi unutmak", uretir: "Faktöriyel kadar küçük değer" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      kombinasyon: ["turev-alma-kurallari"],
      ornek: { soru: "f(x)=1/x ise f‴(2) kaçtır?", cevap: "f′=−x⁻², f″=2x⁻³, f‴=−6x⁻⁴; f‴(2)=−6/16=−3/8" },
    },
    {
      id: "ardisik-turev-05-trig-dongu",
      ad: "Trigonometrik türev döngüsü (n mod 4)",
      aciklama:
        "sin x ve cos x'in türevleri 4 adımda başa döner; f⁽ⁿ⁾ sorulduğunda tek tek türev alınmaz, n'in 4'e bölümünden kalana bakılır. Büyük n (2026 gibi) görünce panik yaptırmak için tasarlanır.",
      yontem: [
        "Döngüyü yaz: sin → cos → −sin → −cos → sin (4 adım).",
        "n mod 4'ü hesapla; kalan kaç adım ilerleyeceğini söyler.",
        "cos x için döngü aynı, başlangıç noktası farklı: cos → −sin → −cos → sin.",
      ],
      celdiriciler: [
        { hata: "n mod 4'ü yanlış hesaplamak (bir adım kaymak)", uretir: "Döngüde komşu fonksiyon (ör. −cos x yerine −sin x)" },
        { hata: "sin ve cos'un döngü başlangıcını karıştırmak", uretir: "Bir adım ötelenmiş cevap" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["ozel-fonksiyon-turevleri"],
      ornek: { soru: "f(x)=sin x ise f⁽⁷⁵⁾(x) nedir?", cevap: "75=4⋅18+3, kalan 3 → döngüde 3. adım: f⁽⁷⁵⁾(x)=−cos x" },
    },
    {
      id: "ardisik-turev-06-katsayi-bulma",
      ad: "İkinci türev koşulundan katsayı bulma (ters problem)",
      aciklama:
        "f″ ile ilgili koşullar verilip fonksiyondaki bilinmeyen katsayılar veya üst mertebe türev istenir. Koşulun HANGİ mertebeye ait olduğunu doğru okumak kritik.",
      yontem: [
        "Fonksiyonun f″'sünü bilinmeyen katsayılar cinsinden yaz.",
        "Her koşulu f″'de yerine koy; katsayı sayısı kadar denklem kur.",
        "Sistemi çöz, sonra asıl isteneni (f‴, f″(c) …) hesapla.",
      ],
      celdiriciler: [
        { hata: "f″ koşulunu f veya f′'de kullanmak", uretir: "İlgisiz katsayı çifti" },
        { hata: "İkinci türevin katsayılarını yanlış indirmek (ör. ax³ → 3ax)", uretir: "Ölçekçe kaymış katsayılar" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["turev-alma-kurallari"],
      ornek: { soru: "f(x)=ax³+bx², f″(0)=4 ve f″(1)=10 ise f‴(x) nedir?", cevap: "f″(x)=6ax+2b; 2b=4 ⇒ b=2; 6a+4=10 ⇒ a=1; f‴(x)=6" },
    },
    {
      id: "ardisik-turev-07-ic-turev-carpani",
      ad: "İç türev çarpanlı örüntü: sin(ax), e^(ax) (sınav ayarı)",
      aciklama:
        "Bileşke fonksiyonda her türev bir a çarpanı üretir: f⁽ⁿ⁾'de aⁿ birikir, trigde ayrıca döngü işler. Zincir kuralı ile ardışık türevin birleştiği gerçek sınav sorusu.",
      yontem: [
        "Her türev adımında iç türev a bir kez çarpan olarak çıkar: n. türevde aⁿ.",
        "sin(ax) için ayrıca döngüyü işlet: aⁿ çarpanı + n mod 4 fazı birlikte.",
        "İstenen noktayı en sonda koy; çarpanı ve fonksiyon değerini ayrı ayrı doğrula.",
      ],
      celdiriciler: [
        { hata: "İç türev çarpanını her adımda değil, yalnız bir kez almak", uretir: "aⁿ yerine a çarpanlı — çok küçük değer" },
        { hata: "aⁿ çarpanını doğru alıp döngü/işareti unutmak", uretir: "Doğru büyüklük, yanlış işaret veya fonksiyon" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["ozel-fonksiyon-turevleri", "turev-alma-kurallari"],
      ornek: { soru: "f(x)=sin(2x) ise f″(π/4) kaçtır?", cevap: "f′(x)=2cos(2x), f″(x)=−4sin(2x); sin(π/2)=1 ⇒ f″(π/4)=−4" },
    },
  ],
};

export default kb;
