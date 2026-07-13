import type { TopicSoruTipleri } from "./types";

// Mutlak Değer (TYT · Cebir). Teacher's catalogue of how ÖSYM asks this topic.
// Ordered easy→hard. Every örnek is hand-verified; celdiriciler map each classic
// wrong answer to the exact mistake that produces it. Mutlak değer TYT'de
// neredeyse her yıl en az bir soru getirir.
const kb: TopicSoruTipleri = {
  slug: "mutlak-deger-tyt",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "mutlak-deger-01-iki-dal",
      ad: "|x−a| = b denklemi (iki dal açma)",
      aciklama:
        "Mutlak değerli ifade pozitif bir sayıya eşitlenir; içerik +b ve −b olmak üzere iki dala açılır. Konunun temel giriş sorusu.",
      yontem: [
        "b > 0 ise iki dal yaz: x−a = b veya x−a = −b.",
        "Her dalı ayrı çöz; iki kök bulunur.",
        "b = 0 ise tek kök (x = a); b < 0 ise çözüm YOK — mutlak değer negatif olamaz.",
      ],
      celdiriciler: [
        { hata: "Yalnız pozitif dalı çözmek", uretir: "Tek kök; kökler toplamı sorusunda yalnız x = 8 gibi eksik cevap" },
        { hata: "|x−a| = −b (negatif) denklemine de iki dal açmak", uretir: "Çözümsüz denkleme iki 'kök' yazmak" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "|x − 3| = 5 denkleminin kökleri nelerdir?", cevap: "x−3 = 5 ⇒ x = 8 veya x−3 = −5 ⇒ x = −2; kökler {−2, 8}" },
    },
    {
      id: "mutlak-deger-02-kokler-toplami",
      ad: "|x−a| = b tipinde kökler toplamı 2a kalıbı",
      aciklama:
        "Kökler a'ya eşit uzaklıkta (a−b ve a+b) olduğundan toplamları daima 2a'dır. Hızlı çözüm kalıbı; ÖSYM |mx−n| biçiminde verip kalıbı m'ye bölünmüş merkezle kullanmayı bekler.",
      yontem: [
        "|x−a| = b'nin kökleri a−b ve a+b; toplam = 2a (b'den bağımsız!).",
        "|mx−n| = b biçiminde: içi sıfır yapan değer n/m simetri merkezidir; kökler toplamı 2n/m.",
        "Emin olamıyorsan iki dalı açıp topla — kalıp sadece zaman kazandırır.",
      ],
      celdiriciler: [
        { hata: "Kökler toplamını 2a yerine 2b sanmak", uretir: "|2x−8| = 6 için 12 gibi b'ye bağlı yanlış toplam" },
        { hata: "|mx−n| tipinde m'ye bölmeyi unutup toplamı 2n almak", uretir: "Doğru cevabın m katı (örnekte 16)" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "|2x − 8| = 6 denkleminin köklerinin toplamı kaçtır?", cevap: "2x−8 = ±6 ⇒ x = 7 veya x = 1; toplam 8 (= 2⋅8/2)" },
    },
    {
      id: "mutlak-deger-03-esitsizlik-aralik",
      ad: "|x−a| < b eşitsizliğini aralığa çevirme",
      aciklama:
        "|x−a| < b ⇒ a−b < x < a+b ('arada' yapısı); |x−a| > b ⇒ dışarıda iki kol. Genelde aralıktaki tam sayıların sayısı/toplamı istenir.",
      yontem: [
        "Küçüktür: −b < x−a < b yaz, her tarafa a ekle: a−b < x < a+b.",
        "Büyüktür: x−a > b veya x−a < −b — İKİ AYRI kol, arada değil.",
        "≤ / ≥ ise uç değerler dahil; tam sayı sayarken uçları kontrol et.",
      ],
      celdiriciler: [
        { hata: "|x−a| > b'yi de 'arada' biçiminde açmak", uretir: "Dış bölge yerine iç aralık; tam ters çözüm kümesi" },
        { hata: "Açık aralıkta (<) uçları dahil saymak", uretir: "Tam sayı sayısında 2 fazla (örnekte 7)" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["birinci-derece-denklem-tyt"],
      ornek: { soru: "|x − 5| < 3 eşitsizliğini sağlayan kaç tam sayı vardır?", cevap: "2 < x < 8 ⇒ 3, 4, 5, 6, 7 ⇒ 5 tam sayı" },
    },
    {
      id: "mutlak-deger-04-toplam-min",
      ad: "|x−a| + |x−b| ifadesinin en küçük değeri",
      aciklama:
        "Sayı doğrusunda iki noktaya uzaklıklar toplamı: x iki nokta ARASINDAYKEN toplam sabittir ve en küçüktür; en küçük değer |b−a|. Geometrik yorum ölçen klasik.",
      yontem: [
        "İfadeyi 'x'in a'ya ve b'ye uzaklıkları toplamı' olarak oku.",
        "a ≤ x ≤ b için toplam sabit: b − a (en küçük değer).",
        "x aralığın dışına çıktıkça toplam büyür; 'en küçük değeri aldıran x kaç tanedir?' sorusunda cevap aradaki tüm değerlerdir (sonsuz; tam sayı istenirse say).",
      ],
      celdiriciler: [
        { hata: "En küçük değeri 0 sanmak (iki terim aynı anda sıfırlanamaz)", uretir: "0 cevabı — yalnız a = b iken mümkün" },
        { hata: "En küçük değeri b + a veya orta nokta değeri sanmak", uretir: "Uzaklık farkı yerine konum toplamından gelen ilgisiz sayı (örnekte 9)" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "|x − 2| + |x − 7| ifadesinin alabileceği en küçük değer kaçtır?", cevap: "2 ≤ x ≤ 7 için toplam sabit: 7 − 2 = 5" },
    },
    {
      id: "mutlak-deger-05-iki-mutlak-esit",
      ad: "İki mutlak değerli denklem |f(x)| = |g(x)|",
      aciklama:
        "İki mutlak değer birbirine eşitse içerikler ya eşittir ya da birbirinin ters işaretlisidir: f = g veya f = −g. İki dalın kökleri ayrı ayrı bulunur; toplam/çarpım istenir.",
      yontem: [
        "Birinci durum: f(x) = g(x), ikinci durum: f(x) = −g(x).",
        "Her iki doğrusal denklemi ayrı çöz.",
        "İstenen birleşimi (kökler toplamı/çarpımı) hesapla; kökleri denklemde sağlatarak doğrula.",
      ],
      celdiriciler: [
        { hata: "Yalnız f = g durumunu çözmek", uretir: "Tek kök; toplam sorusunda 4 gibi eksik cevap" },
        { hata: "İkinci durumda − işaretini g'nin yalnız ilk terimine dağıtmak", uretir: "x−1 = −2x+5 yerine x−1 = −2x−5'ten gelen yanlış kök" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "|x − 1| = |2x − 5| denkleminin köklerinin toplamı kaçtır?", cevap: "x−1 = 2x−5 ⇒ x = 4; x−1 = −2x+5 ⇒ 3x = 6 ⇒ x = 2; toplam 6" },
    },
    {
      id: "mutlak-deger-06-isaret-analizi",
      ad: "Verilen aralıkta mutlak değer açma (işaret analizi)",
      aciklama:
        "x'in aralığı verilir (ör. x < 0); ifadedeki her mutlak değerin içinin işareti bu aralıkta belirlenir ve mutlak değerler kaldırılır. Sadeleştirilmiş cebirsel ifade istenir.",
      yontem: [
        "Verilen aralıkta her mutlak değerin İÇİNİN işaretini tek tek belirle.",
        "İçi pozitifse aynen çıkar: |A| = A; negatifse ters işaretle çıkar: |A| = −A.",
        "Kalan ifadeyi topla/sadeleştir; aralıktan bir test değeriyle doğrula.",
      ],
      celdiriciler: [
        { hata: "İçi negatif olan mutlak değeri de aynen (pozitif) açmak", uretir: "x < 0 için |x| = x yazmaktan gelen 2x−3 tipi ters işaretli ifade" },
        { hata: "−(x−3) açılımında işareti yalnız x'e dağıtmak (−x−3 yazmak)", uretir: "Sabiti işaretçe yanlış ifade: −2x−3" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["carpanlara-ayirma-tyt"],
      ornek: { soru: "x < 0 olduğuna göre |x − 3| + |x| ifadesinin eşiti nedir?", cevap: "x−3 < 0 ⇒ |x−3| = 3−x; |x| = −x ⇒ (3−x) + (−x) = 3 − 2x" },
    },
    {
      id: "mutlak-deger-07-kritik-nokta",
      ad: "Kritik nokta tablosuyla çok parçalı denklem",
      aciklama:
        "|x−a| + |x−b| = c tipinde denklem: kritik noktalar sayı doğrusunu üç bölgeye ayırır, her bölgede mutlak değerler ayrı açılıp çözülür. Bulunan kök kendi bölgesinde olmalı — sınav ayarındaki eleme burada.",
      yontem: [
        "Kritik noktaları bul (her mutlak değerin içini sıfır yapan değerler) ve doğruyu bölgelere ayır.",
        "Her bölgede mutlak değerleri o bölgenin işaretine göre aç, denklemi çöz.",
        "Bulunan kökün O BÖLGEDE olup olmadığını kontrol et; bölge dışı kökleri at.",
        "Geçerli kökleri topla/birleştir.",
      ],
      celdiriciler: [
        { hata: "Bölge kontrolü yapmayıp bölge dışı kökü de saymak", uretir: "Orta bölgeden gelen sahte kök; kökler toplamında fazlalık" },
        { hata: "Orta bölgede iki terimin sabite indiğini görmeyip x'li denklem kurmak", uretir: "3 = 5 tipindeki çözümsüz bölgeden zorla kök üretme" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["birinci-derece-denklem-tyt"],
      ornek: { soru: "|x + 1| + |x − 2| = 5 denkleminin köklerinin toplamı kaçtır?", cevap: "x < −1: −2x+1 = 5 ⇒ x = −2 ✓; −1 ≤ x ≤ 2: sabit 3 ≠ 5; x > 2: 2x−1 = 5 ⇒ x = 3 ✓; toplam 1" },
    },
  ],
};

export default kb;
