import type { TopicSoruTipleri } from "./types";

// Paydayı Rasyonel Yapma (TYT · Üslü-Köklü kümesi; köklü ailesinin eşlenik
// bacağı). Teacher's catalogue of how ÖSYM asks this topic. Ordered easy→hard.
// Every örnek is hand-verified; celdiriciler map each classic wrong answer to
// the exact mistake behind it.
const kb: TopicSoruTipleri = {
  slug: "paydayi-rasyonel-yapma",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "paydayi-rasyonel-01-tek-terimli",
      ad: "Tek terimli payda (a/√b tipini √b ile genişletme)",
      aciklama:
        "Payda yalnız √b (veya k√b). Pay ve payda √b ile çarpılır, payda köksüz kalır. Konunun giriş sorusu; sonuç genelde katsayı sadeleşmesiyle biter.",
      yontem: [
        "Pay ve paydayı paydanın kökü ile çarp: √b⋅√b = b.",
        "Payda k√b ise yalnız √b ile çarpmak yeterlidir; k dışarıda kalır.",
        "Ortaya çıkan katsayıları sadeleştir: 12√6/6 = 2√6.",
      ],
      celdiriciler: [
        { hata: "Yalnız paydayı çarpmak (payı unutmak — kesrin değeri değişir)", uretir: "12/6 = 2" },
        { hata: "√6⋅√6 = 6 yerine √36 bırakıp kökten çıkarmamak", uretir: "12√6/√36 — bitmemiş, sade olmayan biçim" },
        { hata: "Son sadeleştirmeyi atlamak", uretir: "12√6/6 — şıklarda 2√6 varken eşleştirememek" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      kombinasyon: ["koklu-ifadeler"],
      ornek: { soru: "12/√6 ifadesinin paydası rasyonel yapılmış en sade biçimi nedir?", cevap: "12√6/6 = 2√6" },
    },
    {
      id: "paydayi-rasyonel-02-eslenik-iki-kok",
      ad: "İki terimli payda: √a ± √b eşleniği",
      aciklama:
        "Payda √a − √b veya √a + √b. Eşlenikle (işareti değişmiş haliyle) genişletilir; payda kareler farkından a − b olur. Konunun standart TYT sorusu.",
      yontem: [
        "Eşleniği yaz: √a − √b'nin eşleniği √a + √b (yalnız ortadaki işaret değişir).",
        "Pay ve paydayı eşlenikle çarp; paydada (√a−√b)(√a+√b) = a − b.",
        "Payı dağıt, katsayı sadeleşmesi varsa yap.",
      ],
      celdiriciler: [
        { hata: "Paydayı kendisiyle çarpmak (eşlenik yerine aynı işaret)", uretir: "Paydada 9 − 2√14 gibi yine köklü ifade — çıkmaz" },
        { hata: "(√7−√2)(√7+√2) = √(7−2) = √5 sanmak (farkı kök içine almak)", uretir: "5(√7+√2)/√5 — köklü payda sürer" },
        { hata: "Paydayı 7 + 2 = 9 almak (fark yerine toplam)", uretir: "5(√7+√2)/9" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "5/(√7 − √2) ifadesinin paydası rasyonel yapılmış biçimi nedir?", cevap: "5(√7+√2)/(7−2) = √7 + √2" },
    },
    {
      id: "paydayi-rasyonel-03-eslenik-kok-tamsayi",
      ad: "İki terimli payda: √a ± c (kök + tam sayı) eşleniği",
      aciklama:
        "Payda 3 + √7 gibi tam sayı ile kök karışımı. Eşlenik 3 − √7; payda c² − a (veya a − c²) olur. Tam sayının karesi alınırken kökle karıştırılırsa payda yanlış çıkar.",
      yontem: [
        "Eşleniği yaz: 3 + √7'nin eşleniği 3 − √7.",
        "Paydayı kareler farkıyla hesapla: (3+√7)(3−√7) = 3² − (√7)² = 9 − 7 = 2.",
        "Payı dağıtıp sadeleştir; payda negatif çıkarsa eksiyi paya taşı.",
      ],
      celdiriciler: [
        { hata: "Tam sayının karesini almamak (3 − 7 = −4 yazmak)", uretir: "2(3−√7)/(−4) = (√7−3)/2" },
        { hata: "Kökün karesini yanlış almak ((√7)² = 49 sanmak)", uretir: "Payda 9 − 49 = −40" },
        { hata: "Eşlenikte her iki terimin işaretini değiştirmek (−3 − √7 ile çarpmak)", uretir: "Payda −(9−7) = −2, işareti unutulan sonuç" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "2/(3 + √7) ifadesinin paydası rasyonel yapılmış en sade biçimi nedir?", cevap: "2(3−√7)/(9−7) = 3 − √7" },
    },
    {
      id: "paydayi-rasyonel-04-deger-hesabi",
      ad: "Rasyonelleştirme sonrası değer hesabı (x = √3 + √2 iken x + 1/x)",
      aciklama:
        "x köklü bir sayı olarak verilir; x + 1/x veya x − 1/x istenir. 1/x eşlenikle rasyonelleştirilince kökler ya sadeleşir ya ikiye katlanır. Özdeşliklerle birleşen sınav ayarı soru.",
      yontem: [
        "1/x'i eşlenikle rasyonelleştir: 1/(√3+√2) = (√3−√2)/(3−2) = √3 − √2.",
        "İstenen ifadeyi topla: x + 1/x = (√3+√2) + (√3−√2) = 2√3.",
        "Payda farkı 1 olan eşlenik çiftleri (√(n+1) ± √n) bu tipin klasiğidir; fark 1 ise ters çevirmek işareti değiştirmekten ibarettir.",
      ],
      celdiriciler: [
        { hata: "1/x'i rasyonelleştirmeden 'x'in tersi = kökler ters' diye 1/√3 + 1/√2 yazmak", uretir: "Karışık, sadeleşmeyen ifade" },
        { hata: "x + 1/x yerine x − 1/x hesaplamak (işlem karıştırma)", uretir: "2√2" },
        { hata: "Eşlenik çarpımında payda 3 + 2 = 5 almak", uretir: "(√3−√2)/5 üzerinden yanlış toplam" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["koklu-ifadeler"],
      ornek: { soru: "x = √3 + √2 olduğuna göre x + 1/x ifadesinin değeri kaçtır?", cevap: "1/x = √3 − √2 ⇒ x + 1/x = 2√3" },
    },
    {
      id: "paydayi-rasyonel-05-teleskopik-toplam",
      ad: "Eşlenikle sadeleşen kesir toplamları (teleskopik zincir)",
      aciklama:
        "1/(√2+1) + 1/(√3+√2) + ... biçiminde zincir. Her kesir rasyonelleştirilince √(n+1) − √n olur; ara terimler birbirini götürür, yalnız uçlar kalır. Zor bloğun gözde sorusu.",
      yontem: [
        "Her paydanın eşleniği ile genişlet; ardışık köklerde payda hep (n+1) − n = 1'dir.",
        "Kesirleri fark biçimine çevir: 1/(√(n+1)+√n) = √(n+1) − √n.",
        "Zinciri aç: (√2−1) + (√3−√2) + (2−√3) — aradakiler sadeleşir, son terim eksi ilk terim kalır.",
      ],
      celdiriciler: [
        { hata: "Teleskopik sadeleşmeyi görmeyip payda eşitlemeye girişmek", uretir: "İçinden çıkılmaz işlem, zaman kaybı" },
        { hata: "Fark sırasını ters yazmak (√n − √(n+1))", uretir: "−1 (doğru cevabın ters işaretlisi)" },
        { hata: "Uç terimleri yanlış bırakmak (ilk kesirdeki 1'i veya son köke ait tam sayıyı unutmak)", uretir: "2 veya √2 − 1 gibi eksik sonuç" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["koklu-ifadeler"],
      ornek: {
        soru: "1/(√2+1) + 1/(√3+√2) + 1/(2+√3) toplamının değeri kaçtır?",
        cevap: "(√2−1) + (√3−√2) + (2−√3) = 2 − 1 = 1",
      },
    },
    {
      id: "paydayi-rasyonel-06-eslenikle-karsilastirma",
      ad: "Eşlenik farkıyla köklü sayı karşılaştırma (√7−√6 ile √6−√5)",
      aciklama:
        "Ardışık kök farklarının hangisinin büyük olduğu sorulur. Fark, eşlenik yardımıyla 1/(toplam) biçimine çevrilir; paydası küçük olan kesir büyüktür. Kavrayış ölçen zor tip.",
      yontem: [
        "Her farkı eşlenikle 1'in bölümü olarak yaz: √7 − √6 = 1/(√7+√6), √6 − √5 = 1/(√6+√5).",
        "Paydaları karşılaştır: √7+√6 > √6+√5.",
        "Payı 1 olan kesirde payda büyüdükçe kesir küçülür ⇒ √7 − √6 < √6 − √5.",
      ],
      celdiriciler: [
        { hata: "Büyük köklerin farkı büyüktür sanmak (7 ve 6, 6 ve 5'ten büyük diye)", uretir: "√7 − √6 daha büyük — yanlış" },
        { hata: "Kesirde payda büyüyünce kesrin de büyüdüğünü sanmak", uretir: "Ters karşılaştırma" },
        { hata: "Yaklaşık değerle (√7 ≈ 2,6) kaba yuvarlama yapıp farkları eşit sanmak", uretir: "'Eşittir' şıkkı" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["koklu-ifadeler"],
      ornek: {
        soru: "a = √7 − √6 ve b = √6 − √5 olduğuna göre a ile b'den hangisi daha büyüktür?",
        cevap: "a = 1/(√7+√6), b = 1/(√6+√5); √7+√6 > √6+√5 ⇒ a < b, yani b daha büyüktür",
      },
    },
  ],
};

export default kb;
