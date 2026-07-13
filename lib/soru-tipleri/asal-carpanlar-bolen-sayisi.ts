import type { TopicSoruTipleri } from "./types";

// Asal Çarpanlar ve Bölen Sayısı (TYT · Sayılar). "Kaç pozitif böleni vardır"
// ailesinin tamamı. Ordered easy→hard. Every örnek is hand-verified;
// celdiriciler map each classic wrong answer to the exact mistake behind it.
const kb: TopicSoruTipleri = {
  slug: "asal-carpanlar-bolen-sayisi",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "asal-carpanlar-01-ayirma",
      ad: "Asal çarpanlara ayırma (üsleri okuma)",
      aciklama:
        "Sayı asal çarpanlarına ayrılır; üslerin toplamı, farklı asal çarpan sayısı veya 2^a⋅3^b⋅5^c eşleştirmesinden a+b+c istenir. Konunun ısınma sorusu.",
      yontem: [
        "En küçük asaldan (2'den) başlayarak bölünebildiği sürece böl; sonra 3, 5, 7'ye geç.",
        "1 kalana dek sürdür; her asalı üs biçiminde topla.",
        "Üssü 1 olan asalı da yaz — en çok atlanan çarpan budur.",
        "Doğrula: üslü çarpımı geri çarp, sayıyı vermeli.",
      ],
      celdiriciler: [
        { hata: "Üssü 1 olan asalı (ör. 5¹) atlamak", uretir: "Üsler toplamı 1 eksik; bölen sayısı hesabında yarıya düşmüş değer" },
        { hata: "45 gibi bileşik kalanı asal sanıp durmak", uretir: "Eksik ayrışım, yanlış üsler" },
        { hata: "Farklı asal sayısı ile üsler toplamını karıştırmak", uretir: "İstenmeyen büyüklüğü cevaplamak (3 yerine 6 gibi)" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "540 = 2ᵃ⋅3ᵇ⋅5ᶜ olduğuna göre a + b + c kaçtır?",
        cevap: "540 = 2²⋅3³⋅5 (kontrol: 4⋅27⋅5 = 540) ⇒ a+b+c = 2+3+1 = 6",
      },
    },
    {
      id: "asal-carpanlar-02-bolen-sayisi",
      ad: "Pozitif bölen sayısı (üslere +1 ekleyip çarpma)",
      aciklama:
        "N = pᵃ⋅qᵇ⋅rᶜ ise pozitif bölen sayısı (a+1)(b+1)(c+1). Formül 1'i ve sayının kendisini zaten sayar. TYT'nin bu konudaki bir numaralı sorusu.",
      yontem: [
        "Sayıyı asal çarpanlarına ayır.",
        "Her üse 1 ekle, çıkanları çarp.",
        "1 ve sayının kendisi formüle dahildir; ayrıca +2 EKLEME.",
      ],
      celdiriciler: [
        { hata: "Üsleri +1 eklemeden doğrudan çarpmak", uretir: "2⁴⋅3⋅5 için 4⋅1⋅1 = 4 (doğrusu 20)" },
        { hata: "Sonuca ayrıca +2 eklemek (1 ve kendisi için)", uretir: "Doğru cevaptan 2 fazla değer" },
        { hata: "Üssü 1 olan asalın (1+1) çarpanını unutmak", uretir: "Doğru cevabın yarısı" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "240 sayısının kaç tane pozitif tam sayı böleni vardır?",
        cevap: "240 = 2⁴⋅3⋅5 ⇒ (4+1)(1+1)(1+1) = 5⋅2⋅2 = 20",
      },
    },
    {
      id: "asal-carpanlar-03-us-bulma",
      ad: "Bölen sayısından üs bulma (ters problem)",
      aciklama:
        "N = 2ᵃ⋅3ᵇ biçimindeki sayının bölen sayısı verilir, bilinmeyen üs istenir. Formül ters yönde kurdurulur; denklem tek adımda çözülür.",
      yontem: [
        "Bölen sayısı formülünü bilinmeyenli yaz: (a+1)(b+1)… = verilen sayı.",
        "Bilinen üslerin (üs+1) çarpanlarını hesapla, denklemi sadeleştir.",
        "a+1'i bul, 1 çıkararak a'ya geç — bu son çıkarma en çok unutulan adım.",
      ],
      celdiriciler: [
        { hata: "a+1'i bulup 1 çıkarmayı unutmak", uretir: "Doğru cevaptan 1 fazla (a yerine a+1)" },
        { hata: "Bilinen üsü +1'siz kullanmak (3² için 2 çarpanı almak)", uretir: "Yanlış denklem, tam sayı çıkmayan ya da kaymış üs" },
        { hata: "Bölen sayısını üsler çarpımı sanmak", uretir: "a⋅b = verilen kurgusundan ilgisiz değer" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "N = 2ᵃ⋅3² sayısının 12 tane pozitif böleni olduğuna göre a kaçtır?",
        cevap: "(a+1)(2+1) = 12 ⇒ (a+1)⋅3 = 12 ⇒ a+1 = 4 ⇒ a = 3",
      },
    },
    {
      id: "asal-carpanlar-04-tek-cift-bolen",
      ad: "Tek bölen – çift bölen – asal olmayan bölen sayısı",
      aciklama:
        "Toplam bölen sayısından türetilen alt sayımlar: tek bölenler (2'nin üssü 0), çift bölenler (toplam − tek), asal olmayan bölenler (toplam − asal bölen sayısı). ÖSYM'nin formül ezberini test ettiği ayrım.",
      yontem: [
        "Sayıyı asal çarpanlarına ayır; toplam bölen sayısını hesapla.",
        "TEK bölenler: 2'yi tamamen at, kalan kısmın (tek kısmın) bölen sayısını al.",
        "ÇİFT bölenler: toplam − tek. (Ya da 2'nin üssü a ise a⋅(diğer üsler+1 çarpımı).)",
        "Asal OLMAYAN bölenler: toplam − farklı asal çarpan sayısı (1 asal değildir ama bölendir; onu asal diye düşme).",
      ],
      celdiriciler: [
        { hata: "Çift bölen için 2'li kısmı atmak (tek bölen hesabı yapmak)", uretir: "Tek bölen sayısını çift diye vermek" },
        { hata: "Asal olmayan bölen sayısında 1'i de çıkarmak", uretir: "Doğru cevaptan 1 eksik (1 asal değildir, çıkarılmaz)" },
        { hata: "Tek bölen sayısını (toplam ÷ 2) sanmak", uretir: "2'nin üssü 1 değilken yanlış değer" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "120 sayısının kaç tane pozitif çift böleni vardır?",
        cevap: "120 = 2³⋅3⋅5; toplam bölen (3+1)(1+1)(1+1) = 16, tek bölenler 3⋅5 kısmından (1+1)(1+1) = 4 ⇒ çift bölen 16 − 4 = 12",
      },
    },
    {
      id: "asal-carpanlar-05-bolenler-toplami-carpimi",
      ad: "Bölenlerin toplamı ve çarpımı (temel kalıp)",
      aciklama:
        "Küçük-orta boy bir sayının pozitif bölenlerinin toplamı (her asal için üs parantezlerinin çarpımı) veya çarpımı (N^(bölen sayısı ⁄ 2)) istenir. TYT'de daha çok toplam sorulur.",
      yontem: [
        "Bölenler toplamı: her asal için (1 + p + p² + … + pᵃ) parantezini yaz, parantezleri çarp.",
        "N = 2³⋅3 için (1+2+4+8)(1+3) = 15⋅4 = 60 gibi.",
        "Bölenler çarpımı: N^(d(N)⁄2), d(N) = bölen sayısı.",
        "Küçük sayıda şüphen varsa bölenleri listeleyip doğrula.",
      ],
      celdiriciler: [
        { hata: "Toplam parantezlerinde 1'i unutmak ((p + p² + …) almak)", uretir: "Her parantez 1 eksik — eksik toplam" },
        { hata: "Bölenler toplamını bölen sayısıyla karıştırmak", uretir: "(a+1)(b+1) değerini toplam diye vermek" },
        { hata: "Çarpımda üssü d(N) almak (d(N)⁄2 yerine)", uretir: "Doğru cevabın karesi" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      ornek: {
        soru: "36 sayısının pozitif bölenlerinin toplamı kaçtır?",
        cevap: "36 = 2²⋅3² ⇒ (1+2+4)(1+3+9) = 7⋅13 = 91 (liste kontrolü: 1+2+3+4+6+9+12+18+36 = 91)",
      },
    },
    {
      id: "asal-carpanlar-06-tam-kare",
      ad: "Tam kare koşulu (a^x⋅b^y yapısında çarpan tamamlama)",
      aciklama:
        "N⋅k tam kare (veya tam küp) olacak şekilde en küçük k istenir; ya da pᵃ⋅qᵇ yapısının tam kare olması için üs koşulu sorulur. Kural: tam karede TÜM üsler çift olmalı.",
      yontem: [
        "Sayıyı asal çarpanlarına ayır.",
        "Tam kare için her üs çift olmalı; tek kalan her üssü bir üst çift sayıya tamamla.",
        "En küçük k = tamamlayıcı çarpanların çarpımı (tek üslü asalların birer tanesi).",
        "Tam küp istenirse üsler 3'ün katına tamamlanır.",
        "Bonus kontrol: tam karelerin pozitif bölen sayısı tektir.",
      ],
      celdiriciler: [
        { hata: "Tek üslü asalı tamamlamak yerine atmaya çalışmak (bölme yokken)", uretir: "k'yi yanlış asallardan kurmak" },
        { hata: "En küçük k yerine sayının kendisiyle çarpmak (N⋅N her zaman kare diye)", uretir: "48 için k = 48 gibi gereksiz büyük, 'en küçük' koşulunu bozan değer" },
        { hata: "Tam kare ile tam küp koşulunu karıştırmak", uretir: "Üsleri 3'ün katına tamamlayan gereksiz büyük k" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["bolme-bolunebilme"],
      ornek: {
        soru: "48⋅k bir tam kare olduğuna göre k'nin alabileceği en küçük pozitif tam sayı değeri kaçtır?",
        cevap: "48 = 2⁴⋅3; 2'nin üssü çift, 3'ün üssü tek ⇒ k = 3 (48⋅3 = 144 = 12²)",
      },
    },
    {
      id: "asal-carpanlar-07-faktoriyelde-us",
      ad: "Faktöriyelde asal çarpan üssü (Legendre'in basit hali)",
      aciklama:
        "n! sayısının asal çarpanlarına ayrılışında bir asalın üssü: n'yi asalın kuvvetlerine bölüp tam kısımları toplama. 'n! sayısı 3^k ile tam bölünüyorsa k en çok kaçtır' kalıbıyla da gelir; sondaki sıfır sayısı (10 = 2⋅5, 5'in üssü belirler) bu tipin en ünlü uygulamasıdır.",
      yontem: [
        "Üssü istenen asal p için ⌊n⁄p⌋ + ⌊n⁄p²⌋ + ⌊n⁄p³⌋ + … topla (bölümler 0 olana dek).",
        "Her terimde yalnız TAM kısım alınır.",
        "Sondaki sıfır sayısı istenirse yalnız 5'in üssünü hesapla (2'nin üssü her zaman daha büyüktür).",
        "Bileşik çarpan (ör. 6 = 2⋅3) istenirse her asalın üssünü ayrı bul, küçüğünü al.",
      ],
      celdiriciler: [
        { hata: "Yalnız ⌊n⁄p⌋ alıp p², p³ katmanlarını unutmak", uretir: "Eksik üs (20! için 3'ün üssünü 6 bulmak; doğrusu 8)" },
        { hata: "Bölümleri toplarken tam kısım yerine yuvarlamak", uretir: "1 fazla üs" },
        { hata: "Sondaki sıfır için 2'nin üssünü hesaplamak", uretir: "Gereksiz uzun işlem, çoğu kez yanlış (büyük) değer" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      ornek: {
        soru: "20! sayısının asal çarpanlarına ayrılmış biçiminde 3'ün üssü kaçtır?",
        cevap: "⌊20⁄3⌋ + ⌊20⁄9⌋ = 6 + 2 = 8 (27 > 20 olduğundan durulur)",
      },
    },
  ],
};

export default kb;
