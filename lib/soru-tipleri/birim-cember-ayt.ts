import type { TopicSoruTipleri } from "./types";

// Birim Çember (AYT · Trigonometri). Teacher's catalogue of how ÖSYM asks this
// topic. Ordered easy→hard. Every örnek is hand-verified; celdiriciler map each
// classic wrong answer to the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "birim-cember-ayt",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "birim-cember-01-derece-radyan",
      ad: "Derece–radyan dönüşümü",
      aciklama:
        "Verilen açıyı derece↔radyan çevirme. Konunun ısınma sorusu; çoğu zaman başka bir tipin ilk adımı olarak da gelir.",
      yontem: [
        "Temel eşitliği yaz: 180° = π radyan.",
        "Dereceden radyana: derece ⋅ π/180. Radyandan dereceye: radyan ⋅ 180/π.",
        "Kesri mutlaka sadeleştir; ÖSYM cevabı hep sadeleşmiş biçimde verir.",
      ],
      celdiriciler: [
        { hata: "Ters oranla çarpmak (dereceden radyana 180/π kullanmak)", uretir: "π'siz, anlamsız büyük bir sayı" },
        { hata: "360° = π sanmak (tam turla yarım turu karıştırmak)", uretir: "Doğru cevabın yarısı (5π/6 yerine 5π/12)" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "150°'lik açı kaç radyandır?", cevap: "150 ⋅ π/180 = 15π/18 = 5π/6" },
    },
    {
      id: "birim-cember-02-esas-olcu-derece",
      ad: "Esas ölçü (derece, negatif ve büyük açılar)",
      aciklama:
        "Verilen açıyı [0°, 360°) aralığına indirme. Negatif açı verildiğinde 360°'nin katları EKLENİR; işaret yönetimi sorunun kalbi.",
      yontem: [
        "Pozitif büyük açıda 360°'nin katlarını çıkar (360'a böl, kalanı al).",
        "Negatif açıda sonuç [0°, 360°) aralığına girene dek 360° ekle.",
        "Sonucun 0° ile 360° arasında olduğunu mutlaka kontrol et.",
      ],
      celdiriciler: [
        { hata: "Negatif açıda yeterince 360° eklemeyip negatif bırakmak", uretir: "−280° gibi aralık dışı değer" },
        { hata: "−1000° yerine 1000°'nin esas ölçüsünü alıp işareti yok saymak", uretir: "280° (doğru cevabın 360°'ye tümleri)" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "−1000°'lik açının esas ölçüsü kaç derecedir?", cevap: "−1000° + 3⋅360° = −1000° + 1080° = 80°" },
    },
    {
      id: "birim-cember-03-esas-olcu-radyan",
      ad: "Esas ölçü (radyan, kπ/n biçimi)",
      aciklama:
        "kπ/n biçimindeki açıyı [0, 2π) aralığına indirme. 2π'yi aynı paydayla yazıp payda tam tur aramak işlemi mekanikleştirir.",
      yontem: [
        "2π'yi açının paydasıyla yaz: payda n ise 2π = 2nπ/n.",
        "Payı 2n'ye böl; kalan k′ için esas ölçü k′π/n olur.",
        "Sonucun [0, 2π) aralığında kaldığını kontrol et.",
      ],
      celdiriciler: [
        { hata: "Tam turu 2π yerine π almak (mod π hesaplamak)", uretir: "π/4 gibi yarı tur indirgenmiş yanlış değer" },
        { hata: "Bir tur eksik atmak", uretir: "13π/4 gibi 2π'yi aşan değer" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "29π/4 radyanlık açının esas ölçüsü kaç radyandır?", cevap: "2π = 8π/4; 29 = 3⋅8 + 5 ⇒ 29π/4 − 24π/4 = 5π/4" },
    },
    {
      id: "birim-cember-04-bolge-isaret",
      ad: "Bölge belirleme ve işaret üçlüsü",
      aciklama:
        "Açının (gerekirse önce esas ölçüsü alınarak) hangi bölgede olduğu ve o bölgede sin/cos/tan işaretleri. Çoğu zaman esas ölçüyle birleşik gelir.",
      yontem: [
        "Önce esas ölçüyü al; bölge kararı hep [0°, 360°) üzerinden verilir.",
        "Bölgeleri sınırlarıyla ezbere bil: I (0–90), II (90–180), III (180–270), IV (270–360).",
        "İşaret kuralı: I'de hepsi +, II'de yalnız sin +, III'te yalnız tan (ve cot) +, IV'te yalnız cos +.",
      ],
      celdiriciler: [
        { hata: "Esas ölçü almadan büyük açının bölgesine bakmak", uretir: "Rastgele yanlış bölge numarası" },
        { hata: "III. bölgede tan'ı da negatif sanmak (sin ve cos negatif diye)", uretir: "Üç işareti de − olan yanlış üçlü" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["trigonometrik-fonksiyonlar-ayt"],
      ornek: {
        soru: "940°'lik açı hangi bölgededir; sin, cos ve tan işaretleri nedir?",
        cevap: "940° − 720° = 220° ⇒ III. bölge; sin < 0, cos < 0, tan > 0",
      },
    },
    {
      id: "birim-cember-05-nokta-koordinati",
      ad: "Birim çember üzerinde nokta koordinatı",
      aciklama:
        "θ açısına karşılık gelen P noktasının koordinatları: P(cosθ, sinθ). Sıra ve bölge işareti birlikte sınanır.",
      yontem: [
        "Tanımı yaz: apsis = cosθ, ordinat = sinθ (sıra asla değişmez).",
        "Açının referans açısını bul, özel açı değerini oku.",
        "Bölgeye göre her koordinatın işaretini ayrı ayrı belirle.",
      ],
      celdiriciler: [
        { hata: "Koordinat sırasını (sinθ, cosθ) diye ters yazmak", uretir: "(√3/2, −1/2) — bileşenleri yer değiştirmiş nokta" },
        { hata: "II. bölgede kosinüsü pozitif almak", uretir: "(1/2, √3/2) — I. bölge noktası" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["trigonometrik-fonksiyonlar-ayt"],
      ornek: { soru: "Birim çember üzerinde 120°'ye karşılık gelen P noktasının koordinatları nedir?", cevap: "P(cos120°, sin120°) = (−1/2, √3/2)" },
    },
    {
      id: "birim-cember-06-tan-cot-ekseni",
      ad: "Tanjant ve kotanjant eksenlerini okuma",
      aciklama:
        "x=1 doğrusu (tanjant ekseni) ve y=1 doğrusu (kotanjant ekseni) üzerinden değer okuma. Şekilli sorularda hangi eksenin hangisi olduğu sınanır.",
      yontem: [
        "Tanjant ekseni: çembere (1,0)'da teğet dikey doğru; açının bitim kenarının uzantısı bu doğruyu (1, tanθ)'da keser.",
        "Kotanjant ekseni: (0,1)'de teğet yatay doğru; kesim noktası (cotθ, 1) olur.",
        "Değeri referans açıdan oku, işareti açının bölgesine göre ver.",
      ],
      celdiriciler: [
        { hata: "II. bölgede referans açının işaretini korumak (tan135° = +1 demek)", uretir: "Doğru cevabın işaretçe tersi" },
        { hata: "Tanjant ekseniyle kotanjant eksenini karıştırmak", uretir: "tanθ yerine cotθ değeri" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      ornek: { soru: "Tanjant ekseni yardımıyla tan135° kaçtır?", cevap: "tan135° = tan(180°−45°) = −tan45° = −1" },
    },
    {
      id: "birim-cember-07-aci-siralama",
      ad: "Karışık birimli açı karşılaştırma/sıralama",
      aciklama:
        "Biri radyan biri derece verilen açıları sıralatır. Tuzak, '1 radyan' gibi π'siz sayının derece sanılması; 1 radyan ≈ 57,3°.",
      yontem: [
        "Tüm açıları TEK birime çevir (genelde derece pratik).",
        "π'siz radyan için 1 rad = 180°/π ≈ 57,3° yaklaşımını kullan.",
        "Aynı birimde küçükten büyüğe sırala; istenen sıralama yönüne dikkat et.",
      ],
      celdiriciler: [
        { hata: "1 radyanı 1° sanmak", uretir: "Radyanlı açıyı en küçüğe koyan yanlış sıralama" },
        { hata: "π ≈ 3,14 yerine π = 3 alıp sınırda yanlış karar vermek", uretir: "Yakın açılar ters sıralanmış cevap" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      ornek: {
        soru: "a = π/4 radyan, b = 1 radyan, c = 60° açılarını küçükten büyüğe sıralayınız.",
        cevap: "π/4 = 45°, 1 rad ≈ 57,3°, c = 60° ⇒ a < b < c",
      },
    },
  ],
};

export default kb;
