import type { TopicSoruTipleri } from "./types";

// Trigonometrik Fonksiyonlar (AYT · Trigonometri). Teacher's catalogue of how
// ÖSYM asks this topic. Ordered easy→hard. Every örnek is hand-verified;
// celdiriciler map each classic wrong answer to the exact mistake behind it.
const kb: TopicSoruTipleri = {
  slug: "trigonometrik-fonksiyonlar-ayt",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "trig-fonk-01-ozel-acilar",
      ad: "Özel açı değerleriyle hesap (30°-45°-60°)",
      aciklama:
        "Tablodaki değerlerin doğrudan yerine konduğu işlem sorusu. Konunun ısınma sorusu; hız ve tablo hâkimiyeti sınanır.",
      yontem: [
        "Değerleri tablodan oku: sin sırası √0/2, √1/2, √2/2, √3/2, √4/2; cos aynı listenin tersi.",
        "tan30° = √3/3, tan45° = 1, tan60° = √3; cot, tan'ın çarpmaya göre tersi.",
        "İşlemi paydaları eşitleyerek dikkatle bitir; köklü çarpımlarda √a⋅√a = a.",
      ],
      celdiriciler: [
        { hata: "sin30° ile sin60° değerlerini birbiriyle karıştırmak", uretir: "Doğru cevabın işaretçe/değerce tersi (1/2 yerine −1/2)" },
        { hata: "tan30° = √3 sanmak (tan60° ile karıştırmak)", uretir: "3 kat büyük yanlış değer" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "sin60°⋅cos30° − sin30°⋅cos60° işleminin sonucu kaçtır?",
        cevap: "(√3/2)(√3/2) − (1/2)(1/2) = 3/4 − 1/4 = 1/2",
      },
    },
    {
      id: "trig-fonk-02-max-min",
      ad: "a·sinx + b biçiminin en büyük/en küçük değeri",
      aciklama:
        "−1 ≤ sinx ≤ 1 sınırından max–min bulma. Kısa ama garantili puan sorusu; toplam/çarpım biçiminde istenir.",
      yontem: [
        "−1 ≤ sinx ≤ 1 (cos için de aynı) eşitsizliğini yaz.",
        "a pozitifse max = a + b, min = −a + b; a negatifse uçlar yer değiştirir.",
        "İstenen kombinasyonu (toplam, fark, çarpım) hesapla. Not: max + min her zaman 2b'dir.",
      ],
      celdiriciler: [
        { hata: "En küçük değer için sinx = 0 almak", uretir: "min'i b sanmak (2sinx+3'te toplamı 6 yerine 8 bulur)" },
        { hata: "Sabit terimi unutup yalnız ±a uçlarını yazmak", uretir: "Toplamı 0 çıkaran yanlış çift" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "f(x) = 2sinx + 3 fonksiyonunun en büyük ve en küçük değerlerinin toplamı kaçtır?",
        cevap: "max = 2+3 = 5, min = −2+3 = 1 ⇒ toplam 6",
      },
    },
    {
      id: "trig-fonk-03-pisagor-ozdesligi",
      ad: "sin²x + cos²x = 1 ile değer hesabı (bölge işaretli)",
      aciklama:
        "sinx (veya cosx) ve açının bölgesi verilir; diğer oranlar istenir. Karekökten çıkan ± işaretini bölgeye göre seçmek sorunun asıl amacı.",
      yontem: [
        "Verilmeyeni özdeşlikten bul: cos²x = 1 − sin²x (3-4-5, 5-12-13 üçlülerini tanı).",
        "Karekök iki işaretlidir; bölgeye göre TEK işareti seç (II'de cos < 0, III'te sin < 0 ...).",
        "tanx = sinx/cosx ile istenen orana geç; işaretin bölgeyle tutarlılığını kontrol et.",
      ],
      celdiriciler: [
        { hata: "Bölgeyi hiç kullanmayıp kökü pozitif almak", uretir: "tanx = +3/4 (işaretçe ters cevap)" },
        { hata: "cos²x = 1 − sinx yazmak (kareyi unutmak)", uretir: "Üçlüye uymayan bozuk kesir" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["birim-cember-ayt", "trigonometrik-ozdeslikler-ayt"],
      ornek: {
        soru: "x, II. bölgede ve sinx = 3/5 ise tanx kaçtır?",
        cevap: "cos²x = 1 − 9/25 = 16/25, II. bölgede cosx = −4/5 ⇒ tanx = (3/5)/(−4/5) = −3/4",
      },
    },
    {
      id: "trig-fonk-04-tan-verilen-oran",
      ad: "tanx = k verilip sin–cos'lu oranın hesabı",
      aciklama:
        "Pay ve paydası sinx, cosx'te birinci dereceden (homojen) bir kesir verilir. Pay ve paydayı cosx'e bölmek soruyu tek satıra indirir.",
      yontem: [
        "Pay ve paydanın her terimini cosx'e böl (cosx ≠ 0).",
        "sinx/cosx = tanx, cosx/cosx = 1 yaz; kesir tanx cinsine döner.",
        "tanx = k değerini koy, hesapla. Sonuç bölgeden bağımsızdır.",
      ],
      celdiriciler: [
        { hata: "Paydayı unutup yalnız payı tanx cinsine çevirmek", uretir: "2tanx+1 = 7 gibi paydasız yanlış değer" },
        { hata: "Paydada sinx − cosx yerine cosx − sinx düzenlemek", uretir: "Doğru cevabın işaretçe tersi (−7/2)" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "tanx = 3 ise (2sinx + cosx)/(sinx − cosx) ifadesinin değeri kaçtır?",
        cevap: "Pay-paydayı cosx'e böl: (2tanx+1)/(tanx−1) = (6+1)/(3−1) = 7/2",
      },
    },
    {
      id: "trig-fonk-05-periyot",
      ad: "Periyot bulma (sin(ax+b), cos(ax+b), tan(ax+b))",
      aciklama:
        "İç fonksiyonu doğrusal olan trigonometrik fonksiyonun periyodu. Yalnız x'in katsayısı belirler; genlik ve faz şaşırtmacadır.",
      yontem: [
        "sin ve cos (tek kuvvet) için T = 2π/|a|; tan ve cot için T = π/|a|.",
        "Genlik çarpanı, sabit terim ve faz kayması (b) periyodu DEĞİŞTİRMEZ.",
        "Toplam biçimindeki fonksiyonlarda her terimin periyodunu bul, ortak katını al.",
      ],
      celdiriciler: [
        { hata: "T = 2π⋅|a| almak (bölme yerine çarpma)", uretir: "π yerine 4π" },
        { hata: "tan'lı fonksiyonda da 2π/|a| kullanmak", uretir: "Doğru periyodun iki katı" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "f(x) = 3sin(2x − π/3) + 5 fonksiyonunun periyodu kaçtır?", cevap: "T = 2π/|2| = π" },
    },
    {
      id: "trig-fonk-06-tanimsizlik",
      ad: "Tanımsızlık noktaları (tan, cot, sec, csc)",
      aciklama:
        "Fonksiyonun tanımsız olduğu x değerleri istenir. Payda sıfır yapan açı aranır; iç fonksiyon varsa denklem içe kurulur.",
      yontem: [
        "tan = sin/cos ⇒ cos = 0 olan yerde tanımsız: x = π/2 + kπ. cot ve csc için sin = 0: x = kπ.",
        "İç fonksiyon varsa denklemi içe yaz: tan(ax) için ax = π/2 + kπ, sonra x'i çöz.",
        "k'ye tam sayı değerleri verip istenen aralıktaki çözümleri listele.",
      ],
      celdiriciler: [
        { hata: "İçteki katsayıya bölmeyi unutmak (tan2x için x = π/2 + kπ demek)", uretir: "Yalnız x = π/2 — eksik ve yanlış küme" },
        { hata: "tan yerine cot koşulunu kullanmak (sin2x = 0 çözmek)", uretir: "(0, π) aralığında x = π/2 — bambaşka nokta" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      kombinasyon: ["trigonometrik-denklemler-ayt"],
      ornek: {
        soru: "f(x) = tan2x fonksiyonu (0, π) aralığında hangi noktalarda tanımsızdır?",
        cevap: "2x = π/2 + kπ ⇒ x = π/4 + kπ/2 ⇒ x = π/4 ve x = 3π/4",
      },
    },
    {
      id: "trig-fonk-07-grafik-okuma",
      ad: "Grafikten genlik ve periyot okuma",
      aciklama:
        "y = a·sin(bx) (veya cos) grafiği verilir; a ve b (çoğu zaman a·b ya da a+b) istenir. Grafiği formüle çevirme becerisi sınanır.",
      yontem: [
        "Genlik: |a| = (max − min)/2; grafik x eksenine simetrikse doğrudan tepe değeri.",
        "Periyodu grafikten TAM BİR dalga üzerinden oku; b = 2π/T.",
        "Grafik x = 0'da 0'dan yukarı başlıyorsa sin, tepeden başlıyorsa cos ailesindendir; yansımışsa a < 0.",
      ],
      celdiriciler: [
        { hata: "Genliği tepeden tepeye (max − min = 8) almak", uretir: "a = 8 ⇒ a·b = 16" },
        { hata: "İki tam dalgayı tek dalga sanıp T = 2π okumak", uretir: "b = 1 ⇒ a·b = 4" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["fonksiyonlarin-donusumleri"],
      ornek: {
        soru: "Grafiği en büyük değeri 4, en küçük değeri −4 olan ve periyodu π olan y = a·sin(bx) (a, b > 0) için a·b kaçtır?",
        cevap: "a = 4, b = 2π/π = 2 ⇒ a·b = 8",
      },
    },
  ],
};

export default kb;
