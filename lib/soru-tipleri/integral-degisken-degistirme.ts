import type { TopicSoruTipleri } from "./types";

// İntegralde Değişken Değiştirme (AYT · İntegral). u-dönüşümünün tüm sınav
// kılıkları: klasik iç fonksiyon, du katsayı ayarı, köklü/üslü iç, f′/f = ln|f|,
// trigonometrik dönüşüm ve belirli integralde sınır dönüştürme tuzağı.
// Ordered easy→hard. Every örnek is hand-verified.
const kb: TopicSoruTipleri = {
  slug: "integral-degisken-degistirme",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "integral-degisken-degistirme-01-klasik-u",
      ad: "u = iç fonksiyon klasiği (türev yanında hazır)",
      aciklama:
        "İç fonksiyonun türevi çarpan olarak integrand'da hazır durur: ∫2x(x²+1)⁵dx gibi. Dönüşümün tanıtım sorusu.",
      yontem: [
        "Parantez içindeki (üs alınan) ifadeyi u seç: u = x²+1.",
        "du = 2x·dx olduğunu gör; integrand'daki 2x·dx bloğu tam du'dur.",
        "∫u⁵du = u⁶/6 + C hesapla, u'yu GERİ KOY: sonuç x cinsinden yazılır.",
      ],
      celdiriciler: [
        { hata: "2x çarpanını yok sayıp parantezi ayrıca, 2x'i ayrıca integrallemek (çarpımı terim terim integrallenir sanmak)", uretir: "x²·(x²+1)⁶/6 gibi fazladan çarpanlı, türevi integrand'ı tutmayan ifade" },
        { hata: "Sonucu u cinsinden bırakmak", uretir: "u⁶/6 + C — şıklarda x'li karşılığı bulamayıp yanlış eşleştirme" },
        { hata: "u⁶'yı 6'ya bölmeyi unutmak", uretir: "(x²+1)⁶ + C — 6 kat büyük ifade" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "∫2x(x²+1)⁵dx aşağıdakilerden hangisidir?", cevap: "(x²+1)⁶/6 + C (u=x²+1, du=2x dx)" },
    },
    {
      id: "integral-degisken-degistirme-02-katsayi-ayari",
      ad: "du katsayı ayarlama (1/2, 1/3 çarpanı)",
      aciklama:
        "İç fonksiyonun türevi integrand'da eksik katsayıyla durur: ∫x·cos(x²)dx'te du=2x dx ama elimizde sadece x dx var. Sabitle çarpıp bölerek ayarlanır.",
      yontem: [
        "u = iç fonksiyon seç, du'yu yaz: u = x² ⇒ du = 2x·dx.",
        "Elindeki diferansiyeli du cinsinden çöz: x·dx = du/2.",
        "Sabiti integralin önüne al: ∫x·cos(x²)dx = ½∫cos u du = ½ sin u + C; u'yu geri koy.",
      ],
      celdiriciler: [
        { hata: "½ çarpanını hiç yazmamak (x dx'i doğrudan du saymak)", uretir: "sin(x²)+C — doğrunun 2 katı, en dolu çeldirici şık" },
        { hata: "Ayarı ters yapmak (½ yerine 2 ile çarpmak)", uretir: "2sin(x²)+C — 4 kat hatalı" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "∫x·cos(x²)dx aşağıdakilerden hangisidir?", cevap: "½·sin(x²) + C (u=x², x dx = du/2)" },
    },
    {
      id: "integral-degisken-degistirme-03-koklu-ic",
      ad: "Köklü / üslü iç fonksiyon (x·√(x²+a) tipi)",
      aciklama:
        "Kök içinde x², dışında x çarpanı: ∫x√(x²+9)dx. Katsayı ayarı + kesirli üs kuvvet kuralı birlikte çalışır; belirli hâliyle de sorulur.",
      yontem: [
        "u = kök içi seç: u = x²+9 ⇒ du = 2x·dx ⇒ x·dx = du/2.",
        "½∫√u du = ½·u^(3/2)/(3/2) = (1/3)u^(3/2) + C.",
        "Belirli integralde u sınırlarını hesapla ve u üzerinden bitir (x'e dönmene gerek yok).",
      ],
      celdiriciler: [
        { hata: "√u'nun integralinde 3/2'ye bölmeyi unutmak", uretir: "½·u^(3/2) katsayılı — 3/2 kat hatalı değer" },
        { hata: "½ katsayı ayarını atlamak", uretir: "Doğru cevabın 2 katı (98/3 yerine 196/3)" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "∫₀⁴ x·√(x²+9) dx kaçtır?", cevap: "u=x²+9, sınırlar 9→25: ½∫₉²⁵√u du = (1/3)(25^(3/2)−9^(3/2)) = (125−27)/3 = 98/3" },
    },
    {
      id: "integral-degisken-degistirme-04-lnf",
      ad: "f′/f biçimi (∫f′/f dx = ln|f| + C)",
      aciklama:
        "Payın, paydanın türevi olduğu kesir: ∫3x²/(x³+1)dx. Payı görünce türev-payda ilişkisini fark etmek sorunun tamamıdır.",
      yontem: [
        "Paydanın türevini al ve payla karşılaştır; katsayı farkı varsa ayarla.",
        "Kural: ∫f′(x)/f(x) dx = ln|f(x)| + C.",
        "e^x'li kesirlerde de aynı desen: ∫eˣ/(eˣ+1)dx = ln(eˣ+1)+C.",
      ],
      celdiriciler: [
        { hata: "Kesiri bölüm kuralı/kuvvet kuralıyla integrallemeye çalışmak", uretir: "−1/(x³+1) benzeri ln'siz yanlış ifade" },
        { hata: "Pay ile payda türevi arasındaki katsayıyı ayarlamamak (pay x² iken)", uretir: "3 kat hatalı: 3ln|x³+1| yerine ln|x³+1| gereken yerde karışıklık" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "∫3x²/(x³+1) dx aşağıdakilerden hangisidir?", cevap: "ln|x³+1| + C (pay = paydanın türevi)" },
    },
    {
      id: "integral-degisken-degistirme-05-trigonometrik",
      ad: "Trigonometrik değişken değiştirme (u = sin x temel hâli)",
      aciklama:
        "∫sinⁿx·cosx dx deseni: cosx dx bloğu, u = sinx dönüşümünün hazır du'sudur. π/2'li sınırlarla belirli hâli klasiktir.",
      yontem: [
        "cosx dx'i gör, u = sinx seç: du = cosx·dx.",
        "∫uⁿdu = uⁿ⁺¹/(n+1) + C; geri koy: sinⁿ⁺¹x/(n+1) + C.",
        "Belirli integralde sınırları u'ya çevir: x=0 ⇒ u=0, x=π/2 ⇒ u=1.",
      ],
      celdiriciler: [
        { hata: "cosx'i de ayrıca integrallemek (sinx çarpanı eklemek)", uretir: "Fazladan çarpanlı, türevi tutmayan ifade" },
        { hata: "u = cosx seçip işaret yönetimini karıştırmak", uretir: "İşaretçe ters ya da desenle uyuşmayan sonuç" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["trigonometrik-fonksiyonlar-ayt"],
      ornek: { soru: "∫₀^(π/2) sin³x·cosx dx kaçtır?", cevap: "u=sinx, sınırlar 0→1: ∫₀¹u³du = 1/4" },
    },
    {
      id: "integral-degisken-degistirme-06-sinir-donusumu",
      ad: "Belirli integralde sınır dönüşümü (klasik tuzak)",
      aciklama:
        "Belirli integralde u dönüşümü yapılınca SINIRLAR DA dönüşür. x sınırlarını u'lu integralde aynen kullanmak, konunun bir numaralı tuzağıdır; ÖSYM çeldiriciyi tam bu hatadan kurar.",
      yontem: [
        "u ve du'yu belirle: u = x²+1 ⇒ du = 2x·dx.",
        "Sınırları u'ya çevir: x=0 ⇒ u=1, x=1 ⇒ u=2. Artık integralin her şeyi u dünyasında.",
        "u üzerinden hesapla ve BİTİR; belirli integralde x'e geri dönmek gereksizdir.",
      ],
      celdiriciler: [
        { hata: "Sınırları dönüştürmeden x sınırlarını u'lu integralde kullanmak", uretir: "∫₀¹u³du = 1/4 — doğru cevap 15/4 iken sınavın en dolu yanlış şıkkı" },
        { hata: "u'lu sonucu x'e çevirip x sınırlarını koyduktan sonra bir de u sınırı uygulamak (çifte dönüşüm)", uretir: "Tutarsız, şıklarla eşleşmeyen değer — zaman kaybettirir" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["belirli-integral-teoremi"],
      ornek: { soru: "∫₀¹ 2x(x²+1)³ dx kaçtır?", cevap: "u=x²+1, sınırlar 1→2: ∫₁²u³du = (2⁴−1⁴)/4 = 15/4" },
    },
  ],
};

export default kb;
