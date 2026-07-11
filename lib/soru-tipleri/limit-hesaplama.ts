import type { TopicSoruTipleri } from "./types";

// Limit Hesaplama (AYT · Limit). Teacher's catalogue of how ÖSYM asks this
// topic. Ordered easy→hard. Every örnek is hand-verified; celdiriciler map each
// classic wrong answer to the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "limit-hesaplama",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "limit-hesaplama-01-yerine-koyma",
      ad: "Doğrudan yerine koyma",
      aciklama:
        "Payda sıfırlanmıyorsa limit fonksiyon değeridir. Konunun ısınma sorusu; ilk hamle her soruda yerine koymaktır.",
      yontem: [
        "x=a'yı ifadede yerine koy.",
        "Payda 0 değilse sonuç budur — ek işlem arama.",
        "0/0 çıkarsa belirsizlik var demektir; çarpanlara ayırma ya da eşleniğe geç.",
      ],
      celdiriciler: [
        { hata: "Yerine koymadan refleksle çarpanlara ayırmaya girişmek", uretir: "Gereksiz işlemde yapılan hesap hatası" },
        { hata: "Paydayı kontrol etmeden pay/payda ayrı sadeleştirmek", uretir: "Yanlış kesir değeri" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "lim(x→2) (x²+3x−1)/(x+1) kaçtır?", cevap: "Payda 3≠0; (4+6−1)/3 = 9/3 = 3" },
    },
    {
      id: "limit-hesaplama-02-carpanlara-ayirma",
      ad: "0/0 belirsizliği — çarpanlara ayırma",
      aciklama:
        "Yerine koyunca 0/0 çıkan rasyonel ifade. Pay ve payda (x−a) ortak çarpanını taşır; sadeleştirilip tekrar yerine konur.",
      yontem: [
        "Yerine koy, 0/0 olduğunu tespit et — bu 'limit yok' demek DEĞİLDİR.",
        "Pay ve paydayı çarpanlarına ayır; ikisinde de (x−a) çarpanı çıkmalı.",
        "(x−a)'yı sadeleştir (x≠a olduğundan serbest), sonra x=a'yı koy.",
      ],
      celdiriciler: [
        { hata: "0/0 görünce 'limit yoktur' demek", uretir: "'Tanımsız/limit yok' şeklinde yanlış yargı" },
        { hata: "Paydayı yanlış çarpanlara ayırmak (örnekte x²−4x+3 = (x−3)(x+1) sanmak)", uretir: "6/4 = 3/2 gibi yanlış kesir" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["carpanlara-ayirma-tyt", "sureklilik"],
      ornek: {
        soru: "lim(x→3) (x²−9)/(x²−4x+3) kaçtır?",
        cevap: "(x−3)(x+3)/[(x−3)(x−1)] = (x+3)/(x−1), x=3'te 6/2 = 3",
      },
    },
    {
      id: "limit-hesaplama-03-eslenik",
      ad: "0/0 belirsizliği — köklü ifadede eşlenik",
      aciklama:
        "Kök içeren 0/0 belirsizliği. Kökü taşıyan kısmın eşleniğiyle pay ve payda BİRLİKTE çarpılır; ortak çarpan açığa çıkar.",
      yontem: [
        "(√A−B)(√A+B) = A−B² özdeşliğiyle kökü kaldır; eşleniği hem paya hem paydaya yaz.",
        "Ortaya çıkan (x−a) ortak çarpanını sadeleştir.",
        "Kalan ifadede x=a'yı yerine koy; paydadaki (√... + B) artık sıfır değildir.",
      ],
      celdiriciler: [
        { hata: "Eşleniği yalnız paya uygulayıp paydaya yazmamak", uretir: "Örnekte x/x = 1 gibi ölçeksiz yanlış değer" },
        { hata: "Sadeleşme sonrası paydadaki +B'yi unutmak (1/√16 yazmak)", uretir: "1/4 (doğrusu 1/8)" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["koklu-ifadeler"],
      ornek: {
        soru: "lim(x→0) (√(x+16)−4)/x kaçtır?",
        cevap: "Eşlenikle: x/[x(√(x+16)+4)] = 1/(√(x+16)+4), x=0'da 1/(4+4) = 1/8",
      },
    },
    {
      id: "limit-hesaplama-04-limit-ozellikleri",
      ad: "Limit özellikleriyle birleşik hesap",
      aciklama:
        "lim f ve lim g sayı olarak verilir; toplam/çarpım/bölüm kombinasyonunun limiti istenir. Fonksiyon formülü yoktur, yalnız özellikler kullanılır.",
      yontem: [
        "Verilen limit değerlerini harf gibi düşün: lim f = L, lim g = M.",
        "İstenen ifadede limiti içeri dağıt: toplam, fark, çarpım, sabitle çarpım doğrudan; bölümde payda limiti ≠ 0 kontrolü yap.",
        "Sayıları yerine koyup tek kesirde topla.",
      ],
      celdiriciler: [
        { hata: "Çarpımın limitini toplamın limiti gibi almak (f⋅g yerine f+g)", uretir: "Örnekte 2/3 yerine 4/5" },
        { hata: "Payda limitinin 0 olup olmadığını kontrol etmemek", uretir: "Geçersiz bölme — savunulamaz sonuç" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "lim(x→1) f(x)=3 ve lim(x→1) g(x)=2 ise lim(x→1) [2f(x)−g(x)]/[f(x)⋅g(x)] kaçtır?",
        cevap: "Pay 2⋅3−2=4, payda 3⋅2=6≠0; sonuç 4/6 = 2/3",
      },
    },
    {
      id: "limit-hesaplama-05-trigonometrik",
      ad: "Trigonometrik limit (sin x / x kalıbı)",
      aciklama:
        "lim(x→0) sinx/x = 1 temel limitine dayanan sorular. Sinüs argümanı ile payda eşlenerek katsayı oranı ortaya çıkarılır.",
      yontem: [
        "sin(kx)/x biçimine getir; k ile çarpıp bölerek argümanı paydaya eşle: sin(kx)/(kx) → 1.",
        "Geriye kalan katsayı oranını yaz: lim(x→0) sin(ax)/(bx) = a/b.",
        "tan(kx) de aynı kalıba girer: tan(kx)/(kx) → 1.",
      ],
      celdiriciler: [
        { hata: "sinx/x = 1 diye her oranı 1 saymak", uretir: "Örnekte 5/3 yerine 1" },
        { hata: "Katsayı oranını ters kurmak (b/a)", uretir: "Örnekte 3/5" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["trigonometrik-fonksiyonlar", "turevin-tanimi"],
      ornek: { soru: "lim(x→0) sin5x/(3x) kaçtır?", cevap: "(5/3)⋅sin5x/(5x) → (5/3)⋅1 = 5/3" },
    },
    {
      id: "limit-hesaplama-06-degisken-degistirme",
      ad: "Değişken değiştirmeli / bileşik limit (sınav ayarı)",
      aciklama:
        "Kök dereceleri uyuşmayan ya da bileşke yapıdaki 0/0 limitleri. Uygun u dönüşümüyle ifade polinom oranına çevrilir; gerçek sınav zorluğu burada.",
      yontem: [
        "Kökleri tek seferde kaldıracak dönüşümü seç (örnekte u = ∛x, yani x = u³).",
        "Limit noktasını da dönüştür: x→a iken u→ ilgili değer.",
        "Yeni ifadeyi çarpanlara ayırıp sadeleştir; u değerini yerine koy.",
      ],
      celdiriciler: [
        { hata: "u³−1 = (u−1)(u²+u+1) açılımını (u−1)(u²+1) yazmak", uretir: "Örnekte 1/3 yerine 1/2" },
        { hata: "Limit noktasını dönüştürmeyi unutup u→a almak", uretir: "Yanlış noktada hesaplanmış değer" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["koklu-ifadeler", "carpanlara-ayirma-tyt"],
      ornek: {
        soru: "lim(x→1) (∛x−1)/(x−1) kaçtır?",
        cevap: "u=∛x ⇒ (u−1)/(u³−1) = 1/(u²+u+1), u→1'de 1/3",
      },
    },
  ],
};

export default kb;
