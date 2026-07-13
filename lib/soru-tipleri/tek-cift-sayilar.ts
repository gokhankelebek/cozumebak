import type { TopicSoruTipleri } from "./types";

// Tek-Çift Sayılar (TYT · Temel Kavramlar kümesi). Teacher's catalogue of how
// ÖSYM asks parity. Ordered easy→hard. Every örnek is hand-verified;
// celdiriciler map each classic wrong answer to the exact mistake behind it.
const kb: TopicSoruTipleri = {
  slug: "tek-cift-sayilar",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "tek-cift-01-toplam-carpim-kurallari",
      ad: "Toplam ve çarpımın tekliği-çiftliği (temel parite tablosu)",
      aciklama:
        "a ve b'nin pariteleri verilir; a+b, a⋅b, a+2b gibi ifadelerden hangilerinin tek/çift olduğu sorulur. Konunun ısınma sorusu.",
      yontem: [
        "Toplama: tek+tek=çift, çift+çift=çift, tek+çift=tek.",
        "Çarpma: içinde EN AZ BİR çift çarpan varsa sonuç çift; tek⋅tek=tek.",
        "2b, 4a gibi katsayısı çift olan terimler her zaman çifttir; toplamda parite belirlemez.",
        "Her ifadeyi bu kurallarla tek tek etiketle.",
      ],
      celdiriciler: [
        { hata: "tek+tek=tek sanmak", uretir: "a+b'yi tek etiketlemek" },
        { hata: "tek⋅tek=çift sanmak (toplama kuralıyla karıştırmak)", uretir: "a⋅b'yi çift etiketlemek" },
        { hata: "2b'nin b tek iken tek olduğunu sanmak", uretir: "a+2b için yanlış parite" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "a ve b tek tam sayılar ise a+b, a⋅b, a+2b ifadelerinden hangileri çifttir?",
        cevap: "a+b=tek+tek çift; a⋅b=tek⋅tek tek; a+2b=tek+çift tek ⇒ yalnız a+b",
      },
    },
    {
      id: "tek-cift-02-uslu-ifade-paritesi",
      ad: "Üslü ifadenin paritesi (tekⁿ tek kalır)",
      aciklama:
        "Büyük üslü sayıların toplam/farkının tek mi çift mi olduğu sorulur. Üs pariteyi DEĞİŞTİRMEZ; parite tabana bakar — bunu gören 20 saniyede çözer.",
      yontem: [
        "Tabana bak: taban tekse her pozitif kuvveti tek, taban çiftse her pozitif kuvveti çifttir.",
        "Üsün büyüklüğü ve tek/çift olması pariteyi etkilemez (işareti etkileyebilir, pariteyi asla).",
        "Terimleri tek/çift diye etiketleyip toplama kurallarını uygula.",
      ],
      celdiriciler: [
        { hata: "Üs çift olunca sonucu çift sanmak (5²⁰²⁶ çift demek)", uretir: "çift+tek = tek gibi ters parite" },
        { hata: "Üssü pariteye dahil edip taban yerine üsle karar vermek", uretir: "Rastgele ters etiketleme" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "n pozitif tam sayı olmak üzere 7ⁿ + 6ⁿ toplamı tek midir, çift midir?",
        cevap: "7ⁿ tek, 6ⁿ çift; tek+çift = tek",
      },
    },
    {
      id: "tek-cift-03-kosuldan-parite-cikarimi",
      ad: "Çarpım-toplam koşulundan parite çıkarımı (a⋅b çift, a+b tek ise…)",
      aciklama:
        "a⋅b ve a+b'nin pariteleri verilir, a ile b hakkında 'kesinlikle doğru' olan istenir. a+b tek ⇒ biri tek biri çift çıkarımı sorunun anahtarıdır.",
      yontem: [
        "a+b tek ⇒ a ile b zıt paritelidir (biri tek, biri çift).",
        "a+b çift ⇒ ikisi aynı paritelidir; hangisi olduğuna a⋅b karar verir (a⋅b tekse ikisi tek).",
        "Çıkarımı şıklardaki her ifadeye uygula; 'kesinlikle' diyorsa tek bir karşı örnek şıkkı eler.",
      ],
      celdiriciler: [
        { hata: "a+b tek iken ikisini de tek sanmak", uretir: "a−b çift gibi yanlış 'kesin' ifade" },
        { hata: "a⋅b çift ⇒ ikisi de çift sanmak (biri yeter)", uretir: "b çifttir'i kesin doğru işaretlemek" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["temel-kavramlar"],
      ornek: {
        soru: "a, b tam sayılar; a⋅b çift ve a+b tek ise a−b için ne söylenir?",
        cevap: "a+b tek ⇒ biri tek biri çift ⇒ a−b = tek∓çift = tek; a−b daima tektir",
      },
    },
    {
      id: "tek-cift-04-denklemli-parite",
      ad: "Denklemli parite sorusu (3a+2b tek ise a…)",
      aciklama:
        "Katsayılı bir ifadenin paritesi verilir, bilinmeyenin paritesi ve ondan türeyen ifadeler istenir. Çift katsayılı terimin pariteye etkisiz olduğunu görmek yeterli.",
      yontem: [
        "Çift katsayılı terimleri (2b, 4c…) 'çift' diye işaretle; ifadenin paritesini tek başına diğer terim belirler.",
        "3a + çift = tek ⇒ 3a tek ⇒ a tek (3 tek olduğundan çarpım ancak a tekken tek olur).",
        "Bulduğun pariteyi şıklardaki a², a+1, 5a gibi ifadelere taşı.",
      ],
      celdiriciler: [
        { hata: "2b terimini parite hesabına katmak (b'ye göre sonuç değişir sanmak)", uretir: "'Belirlenemez' cevabı" },
        { hata: "3a tek ⇒ a çift sanmak (3'ün tekliğini es geçmek)", uretir: "a çifttir; a+1 tektir zinciri baştan yanlış" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "a, b tam sayılar; 3a + 2b tek olduğuna göre a tek midir, çift midir?",
        cevap: "2b çift ⇒ 3a tek olmalı; 3 tek olduğundan a tektir",
      },
    },
    {
      id: "tek-cift-05-ardisik-carpim-ciftligi",
      ad: "Ardışık sayıların çarpımı (n(n+1) daima çift)",
      aciklama:
        "n(n+1), n²+n gibi ardışık iki sayı çarpımına açılan ifadelerin paritesi sorulur. Ardışık iki sayıdan biri mutlaka çifttir — kanıt istemeden bu gerçek kullanılır.",
      yontem: [
        "İfadeyi çarpanlara ayırıp ardışık çarpımı görünür yap: n²+n = n(n+1).",
        "Ardışık iki tam sayıdan biri kesin çifttir ⇒ çarpım daima çifttir.",
        "n'nin tek/çift olmasından bağımsız sonuç; 'belirlenemez' şıkkına aldanma.",
      ],
      celdiriciler: [
        { hata: "Sonucun n'ye bağlı olduğunu sanmak", uretir: "'n'ye göre değişir' şıkkı" },
        { hata: "n²+n ifadesini n² ile aynı paritede sanmak (çarpana ayırmamak)", uretir: "n tekken tek deme hatası" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["ardisik-sayilar"],
      ornek: {
        soru: "n bir tam sayı olduğuna göre n² + n ifadesi için ne söylenir?",
        cevap: "n²+n = n(n+1) ardışık iki sayının çarpımı ⇒ daima çift",
      },
    },
    {
      id: "tek-cift-06-parite-zinciri-4-bolunebilme",
      ad: "Parite zinciri (a⋅b tek ⇒ (a+1)(b+1) tipi çıkarımlar)",
      aciklama:
        "Bir koşuldan iki bilinmeyenin paritesi çıkarılır, sonra onlardan kurulan yeni ifadenin çiftliği hatta 4'e bölünebilirliği istenir. Sınav ayarındaki iki adımlı parite sorusu.",
      yontem: [
        "a⋅b tek ⇒ a ve b ikisi de tektir (tek çarpan varsa çarpım çift olurdu).",
        "Tek + 1 = çift: a+1 ve b+1 ikisi de çifttir.",
        "Çift⋅çift = (2k)(2m) = 4km ⇒ çarpım 4'ün katıdır; kalan 0.",
      ],
      celdiriciler: [
        { hata: "a⋅b tek iken birinin çift olabileceğini sanmak", uretir: "'Belirlenemez' cevabı" },
        { hata: "Çift⋅çift çarpımı yalnız 2'nin katı sanmak (4'ü görememek)", uretir: "4 ile bölümden kalan 2 demek" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["bolme-bolunebilme"],
      ornek: {
        soru: "a, b tam sayılar; a⋅b tek olduğuna göre (a+1)⋅(b+1) çarpımının 4 ile bölümünden kalan kaçtır?",
        cevap: "a ve b tek ⇒ a+1=2k, b+1=2m ⇒ çarpım 4km ⇒ kalan 0",
      },
    },
  ],
};

export default kb;
