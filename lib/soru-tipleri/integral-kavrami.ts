import type { TopicSoruTipleri } from "./types";

// İntegral Kavramı (AYT · İntegral). Belirsiz integralin tanımı, temel kurallar
// ve +C sabitinin koşulla bulunması. Ordered easy→hard. Every örnek is
// hand-verified; celdiriciler map each classic wrong answer to the exact
// mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "integral-kavrami",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "integral-kavrami-01-kuvvet",
      ad: "Kuvvet kuralıyla belirsiz integral",
      aciklama:
        "Polinomun terim terim integrali: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C. Konunun ısınma sorusu; toplam-fark ve katsayı kuralları birlikte kullanılır.",
      yontem: [
        "Her terimde üssü bir ARTIR, yeni üsse böl: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ −1).",
        "Sabit çarpan integralin dışına alınır; toplam-fark terim terim integrallenir.",
        "Sonuca mutlaka +C ekle; türev alarak sağlama yap (türev, integrand'a dönmeli).",
      ],
      celdiriciler: [
        { hata: "Üssü artırmak yerine türevdeki gibi azaltmak", uretir: "İki derece düşük, tamamen yanlış ifade" },
        { hata: "Yeni üsse (n+1'e) bölmeyi unutmak", uretir: "Katsayıları şişmiş ifade — ör. 6x²'den 2x³ yerine 6x³" },
        { hata: "+C sabitini yazmamak", uretir: "Eksik cevap; 'aşağıdakilerden hangisi olabilir' sorularında yanlış eleme" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "∫(6x²−4x+1)dx aşağıdakilerden hangisidir?", cevap: "2x³−2x²+x+C (sağlama: türevi 6x²−4x+1)" },
    },
    {
      id: "integral-kavrami-02-sabit-bulma",
      ad: "+C sabitinin koşulla bulunması (başlangıç değeri)",
      aciklama:
        "f′ verilir, bir noktadaki f değeri (koşul) verilir; başka bir noktadaki f istenir. AYT'nin en standart integral sorusu.",
      yontem: [
        "f′'yi integralle: f(x) = ∫f′(x)dx + C biçiminde C'li yaz.",
        "Verilen koşulu (ör. f(1)=4) yerine koyup C'yi çöz.",
        "Bulunan tam f'de istenen noktayı hesapla.",
      ],
      celdiriciler: [
        { hata: "C'yi hiç yazmayıp doğrudan istenen noktayı koymak", uretir: "Koşuldan gelen kayma kadar eksik/fazla değer" },
        { hata: "Koşulu f yerine f′'de kullanmak", uretir: "C için ilgisiz bir denklem, alakasız sonuç" },
        { hata: "İntegralde n+1'e bölmeyi unutup C'yi ona göre bulmak", uretir: "Hem fonksiyon hem sabit yanlış — çeldirici şıklardan biri" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "f′(x)=3x²+2 ve f(1)=4 ise f(2) kaçtır?", cevap: "f(x)=x³+2x+C, f(1)=3+C=4 ⇒ C=1; f(2)=8+4+1=13" },
    },
    {
      id: "integral-kavrami-03-ters-islem",
      ad: "Türev–integral ters işlem ilişkisi",
      aciklama:
        "∫f(x)dx = F(x)+C verilir, f'nin kendisi ya da bir noktadaki değeri istenir. Çözüm integral almak değil, verilen sonucun TÜREVİNİ almaktır.",
      yontem: [
        "∫f(x)dx = F(x)+C ise f(x) = F′(x); yani eşitliğin sağının türevini al.",
        "Gerekirse çarpım/zincir kuralını uygula (F çoğu zaman bileşik seçilir).",
        "İstenen noktayı türevde yerine koy. Ayrıca ∫f′(x)dx = f(x)+C ve d/dx[∫f(x)dx] = f(x) ilişkilerini hazır tut.",
      ],
      celdiriciler: [
        { hata: "Soruyu ters anlayıp F'nin bir kez daha integralini almak", uretir: "Derecesi iki basamak kaymış, şıklarda olmayan ifade — paniğe yol açar" },
        { hata: "F'nin türevinde bir terimi (çarpım kuralının ikinci terimi gibi) atlamak", uretir: "Doğru cevaptan terim kadar eksik değer" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["turev-alma-kurallari"],
      ornek: { soru: "∫f(x)dx = x⁴−2x²+C olduğuna göre f(2) kaçtır?", cevap: "f(x)=(x⁴−2x²)′=4x³−4x, f(2)=32−8=24" },
    },
    {
      id: "integral-kavrami-04-negatif-kesirli-us",
      ad: "Köklü ve paydalı ifadelerin integrali (kesirli/negatif üs)",
      aciklama:
        "√x ve 1/xⁿ içeren integraller. İfade önce üslü biçime çevrilir, sonra kuvvet kuralı uygulanır.",
      yontem: [
        "√x = x^(1/2), 1/x² = x⁻² biçiminde yaz.",
        "Kuvvet kuralını uygula: üs bir artar, yeni üsse bölünür (x⁻² → x⁻¹/(−1)).",
        "Sonucu kök/kesir biçimine geri çevir ve türevle sağla.",
      ],
      celdiriciler: [
        { hata: "x⁻²'nin integralinde işareti yanlış alıp +1/x yazmak", uretir: "Doğru terimin işaretçe tersi" },
        { hata: "Kesirli üste n+1'i yanlış hesaplamak (1/2+1 = 3/2 yerine 1/2)", uretir: "Yanlış üslü, yanlış katsayılı ifade" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "∫(√x + 1/x²)dx aşağıdakilerden hangisidir?", cevap: "(2/3)x√x − 1/x + C (x^(1/2)→(2/3)x^(3/2), x⁻²→−x⁻¹)" },
    },
    {
      id: "integral-kavrami-05-birbolux",
      ad: "1/x'in integrali (ln|x| istisnası)",
      aciklama:
        "Kuvvet kuralının çalışmadığı tek durum: n = −1. ∫(1/x)dx = ln|x| + C. Katsayılı ve karma (polinom + 1/x) hâlleriyle sorulur.",
      yontem: [
        "1/x gördüğünde kuvvet kuralına GİRME: n+1 = 0 olur, bölme tanımsız.",
        "∫(1/x)dx = ln|x| + C; katsayı dışarı alınır: ∫(k/x)dx = k·ln|x| + C.",
        "Diğer terimleri normal kuvvet kuralıyla ayrıca integralle.",
      ],
      celdiriciler: [
        { hata: "Kuvvet kuralını zorlayıp x⁰/0 yazmaya çalışmak", uretir: "Tanımsız ifade — soruyu boş bıraktırır" },
        { hata: "∫(1/x)dx'i türevle karıştırıp −1/x² yazmak", uretir: "ln'siz, tamamen yanlış şık" },
        { hata: "Mutlak değeri unutmak (ln x yazmak)", uretir: "Negatif bölgede tanımsız cevap — kavram sorularında yanlış eleme" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      ornek: { soru: "∫(4/x − 3)dx aşağıdakilerden hangisidir?", cevap: "4·ln|x| − 3x + C" },
    },
    {
      id: "integral-kavrami-06-teget-egimi",
      ad: "Teğet eğiminden eğri bulma (türev-integral birleşik)",
      aciklama:
        "Eğrinin her noktadaki teğet eğimi (yani y′) verilir, eğrinin bir noktadan geçtiği söylenir; başka bir apsisteki ordinat istenir. İntegral + koşul sorusunun geometrik kılıfı.",
      yontem: [
        "Teğet eğimi = türev: y′ verilmiştir; integralle y = ∫y′dx + C.",
        "Eğrinin geçtiği nokta koşuldur: koordinatları koyup C'yi bul.",
        "İstenen apsisi tam denklemde yerine koy.",
      ],
      celdiriciler: [
        { hata: "Eğim ifadesini eğrinin denklemi sanmak (integral almamak)", uretir: "Verilen noktayı sağlamayan, düşük dereceli yanlış eğri" },
        { hata: "C'yi bulmadan istenen apsisi koymak", uretir: "Doğru cevaptan C kadar sapmış değer" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["teget-normal", "turev-alma-kurallari"],
      ornek: { soru: "Eğrinin her (x,y) noktasındaki teğet eğimi 2x+1'dir ve eğri (1,4)'ten geçmektedir. x=2 apsisli noktanın ordinatı kaçtır?", cevap: "y=x²+x+C, 4=1+1+C ⇒ C=2; y(2)=4+2+2=8" },
    },
    {
      id: "integral-kavrami-07-ikinci-turev",
      ad: "İkinci türevden fonksiyona (iki kez integral)",
      aciklama:
        "f″ ile birlikte iki koşul (biri f′ için, biri f için) verilir; f'nin bir değeri istenir. İki ayrı sabit (C₁, C₂) yönetmeyi gerektirir — sınavın seçici sorusu.",
      yontem: [
        "f″'yi integralle: f′(x) = ∫f″(x)dx + C₁; f′ koşuluyla C₁'i bul.",
        "Bulduğun f′'yi integralle: f(x) = ∫f′(x)dx + C₂; f koşuluyla C₂'yi bul.",
        "Sabitleri sırayla ve ayrı ayrı çöz; ikisini tek C'de birleştirme.",
      ],
      celdiriciler: [
        { hata: "Tek sabitle idare etmeye çalışmak (C₁'i atlamak)", uretir: "İkinci integralde x'li terim eksik — doğru cevaptan lineer terim kadar sapma" },
        { hata: "Koşulları çaprazlama kullanmak (f koşulunu f′'de koymak)", uretir: "Her iki sabit de yanlış, tutarsız sonuç" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      ornek: { soru: "f″(x)=6x, f′(0)=2 ve f(1)=5 ise f(2) kaçtır?", cevap: "f′(x)=3x²+2 (C₁=2); f(x)=x³+2x+C₂, f(1)=3+C₂=5 ⇒ C₂=2; f(2)=8+4+2=14" },
    },
  ],
};

export default kb;
