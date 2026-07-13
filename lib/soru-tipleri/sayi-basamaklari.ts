import type { TopicSoruTipleri } from "./types";

// Sayı Basamakları (TYT · Temel Kavramlar kümesi). Teacher's catalogue of how
// ÖSYM asks digit/place-value patterns. Ordered easy→hard. Every örnek is
// hand-verified; celdiriciler map each classic wrong answer to its mistake.
const kb: TopicSoruTipleri = {
  slug: "sayi-basamaklari",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "sayi-basamaklari-01-basamak-degeri",
      ad: "Basamak değeri ile sayı (rakam) değeri ayrımı",
      aciklama:
        "Bir rakamın basamak değeri, sayı değeri ya da ikisinin farkı/toplamı sorulur. Tanım sorusudur; tuzak iki kavramı birbirine karıştırtmaktır.",
      yontem: [
        "Rakamın bulunduğu basamağı belirle: birler, onlar, yüzler…",
        "Basamak değeri = rakam ⋅ basamağın kuvveti (onlarsa ⋅10, yüzlerse ⋅100).",
        "Sayı değeri rakamın kendisidir; istenen fark/toplamı hesapla.",
      ],
      celdiriciler: [
        { hata: "Basamak değeri yerine sayı değerini vermek", uretir: "347'de 4 için cevap 4" },
        { hata: "Basamağı yanlış sayıp bir alt kuvvetle çarpmak", uretir: "Onlar basamağı için 4⋅100=400" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "347 sayısında 4 rakamının basamak değeri kaçtır?",
        cevap: "4 onlar basamağında ⇒ 4⋅10 = 40",
      },
    },
    {
      id: "sayi-basamaklari-02-cozumleme",
      ad: "İki/üç basamaklı sayının çözümlenmesi (10a+b kurulumu)",
      aciklama:
        "ab veya abc biçimindeki sayı, rakamları toplamının katı gibi bir koşulla verilir. Sayıyı 10a+b (100a+10b+c) diye açmak tüm konunun temel refleksidir.",
      yontem: [
        "ab = 10a+b, abc = 100a+10b+c çözümlemesini yaz.",
        "Verilen koşulu denkleme çevir: 'rakamları toplamının k katı' ⇒ 10a+b = k(a+b).",
        "Denklemi düzenleyip rakam sınırlarını (a: 1–9, b: 0–9) kullanarak çöz.",
      ],
      celdiriciler: [
        { hata: "ab sayısını a⋅b çarpımı sanmak", uretir: "Kurulamayan ya da saçma denklem" },
        { hata: "a=0 çözümünü kabul etmek (iki basamaklıda a≥1)", uretir: "Tek basamaklı geçersiz 'çözüm'" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "İki basamaklı bir sayı, rakamları toplamının 4 katıdır. Rakamları toplamı 9 olduğuna göre bu sayı kaçtır?",
        cevap: "Sayı = 4⋅9 = 36 (3+6=9 sağlar; 36=4⋅9 ✓)",
      },
    },
    {
      id: "sayi-basamaklari-03-yer-degistirme-9",
      ad: "Rakamları yer değiştirme farkı: ab − ba = 9(a−b)",
      aciklama:
        "İki basamaklı sayı ile tersinin farkı verilir; a−b ya da sayının kendisi istenir. Farkın daima 9'un katı olduğunu bilen, çözümlemeyi yazmadan bitirir.",
      yontem: [
        "ab − ba = (10a+b) − (10b+a) = 9(a−b) özdeşliğini kur.",
        "Verilen farkı 9'a böl: a−b bulunur.",
        "Sayı istenirse a−b'yi ikinci koşulla (ör. a+b) birleştirip a ve b'yi çöz.",
      ],
      celdiriciler: [
        { hata: "Farkı 10(a−b) sanmak", uretir: "45 fark için a−b = 4,5 çıkmazı" },
        { hata: "a−b yerine b−a hesaplamak (hangi sayının büyük olduğunu karıştırmak)", uretir: "İşaretçe ters değer: −5" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "İki basamaklı ab sayısı ile ba sayısının farkı 45 olduğuna göre a−b kaçtır?",
        cevap: "9(a−b)=45 ⇒ a−b=5",
      },
    },
    {
      id: "sayi-basamaklari-04-ab-arti-ba-11",
      ad: "ab + ba tipi toplamlar: 11(a+b)",
      aciklama:
        "İki basamaklı sayı ile tersinin toplamı verilir; a+b istenir. Toplamın daima 11'in katı olduğu gerçeği hem çözüm hem eleme aracıdır (11'e bölünmeyen toplam imkânsız).",
      yontem: [
        "ab + ba = (10a+b) + (10b+a) = 11(a+b) özdeşliğini kur.",
        "Verilen toplamı 11'e böl: a+b bulunur.",
        "Sayı adedi istenirse a+b'yi sağlayan (a,b) rakam çiftlerini say (a≥1, b≥1 tersinin de iki basamaklı olması için — soruya göre b≥0).",
      ],
      celdiriciler: [
        { hata: "Toplamı 10(a+b) veya 12(a+b) sanmak", uretir: "132 için a+b = 13,2 veya 11" },
        { hata: "a+b yerine sayının kendisini aramak", uretir: "Şıklardaki iki basamaklı değerlere sapmak" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "İki basamaklı ab ve ba sayıları için ab + ba = 132 olduğuna göre a+b kaçtır?",
        cevap: "11(a+b)=132 ⇒ a+b=12",
      },
    },
    {
      id: "sayi-basamaklari-05-uc-basamak-99",
      ad: "Üç basamaklıda yüzler-birler değişimi: abc − cba = 99(a−c)",
      aciklama:
        "Üç basamaklı sayının yüzler ile birler rakamı yer değiştirir, fark verilir. Onlar basamağının farkta yok olduğunu görmek sorunun kalbidir.",
      yontem: [
        "abc − cba = (100a+10b+c) − (100c+10b+a) = 99(a−c); b sadeleşir, farkı etkilemez.",
        "Verilen farkı 99'a böl: a−c bulunur.",
        "Fark 99'un katı değilse soru kurgusu/okuma yanlıştır; 99, 198, 297, … dışında fark olamaz.",
      ],
      celdiriciler: [
        { hata: "Farkı 100(a−c) sanmak", uretir: "297 için a−c = 2,97 çıkmazı" },
        { hata: "b rakamının farkı etkilediğini sanıp b'yi aramak", uretir: "Çözümsüz denklem, zaman kaybı" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "Üç basamaklı abc sayısı ile cba sayısının farkı 297 olduğuna göre a−c kaçtır?",
        cevap: "99(a−c)=297 ⇒ a−c=3",
      },
    },
    {
      id: "sayi-basamaklari-06-kosullu-sistem",
      ad: "Basamak koşullarından sayıyı bulma (iki koşullu sistem — sınav ayarı)",
      aciklama:
        "Rakamları toplamı ve yer değiştirince artma/azalma miktarı birlikte verilir; sayının kendisi istenir. 9(b−a) özdeşliği + toplam koşulu iki bilinmeyenli sistemi kurar. Ters sayıyı işaretletmek ÖSYM'nin klasik son tuzağıdır.",
      yontem: [
        "'Yer değiştirince S artıyor' ⇒ ba − ab = 9(b−a) = S; b−a'yı bul.",
        "Rakam toplamı koşuluyla (a+b) sistemi kur; taraf tarafa toplayıp a ve b'yi çöz.",
        "Soru İLK sayıyı mı, YENİ sayıyı mı istiyor — son adımda mutlaka geri dön ve doğrula.",
      ],
      celdiriciler: [
        { hata: "İstenen ab iken ters çevrilmiş ba'yı işaretlemek", uretir: "48 yerine 84" },
        { hata: "Artışı 9(a−b) kurmak (artma/azalma yönünü karıştırmak)", uretir: "a−b=4'ten türeyen 84'lük ters çözüm" },
        { hata: "Sistemi çözerken 2b yerine 2a bulmak", uretir: "Rakamları yer değiştirmiş yanlış çift" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["sayi-problemleri", "bolme-bolunebilme"],
      ornek: {
        soru: "İki basamaklı bir sayının rakamları toplamı 12'dir. Rakamları yer değiştirdiğinde sayı 36 artıyor. Buna göre ilk sayı kaçtır?",
        cevap: "9(b−a)=36 ⇒ b−a=4; a+b=12 ⇒ b=8, a=4 ⇒ sayı 48 (84−48=36 ✓)",
      },
    },
  ],
};

export default kb;
