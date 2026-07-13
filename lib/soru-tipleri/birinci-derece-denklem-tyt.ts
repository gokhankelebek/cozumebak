import type { TopicSoruTipleri } from "./types";

// Birinci Dereceden Denklem ve Eşitsizlikler (TYT · Cebir). Teacher's catalogue
// of how ÖSYM asks this topic. Ordered easy→hard. Every örnek is hand-verified;
// celdiriciler map each classic wrong answer to the exact mistake behind it.
const kb: TopicSoruTipleri = {
  slug: "birinci-derece-denklem-tyt",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "birinci-derece-denklem-01-tek-bilinmeyen",
      ad: "Tek bilinmeyenli denklem çözme (paydalı dahil)",
      aciklama:
        "ax + b = cx + d veya paydalı biçim. Payda eşitleme + bilinmeyenleri tek tarafa toplama. Konunun giriş sorusu; TYT'de genelde hikâye içine gömülür.",
      yontem: [
        "Paydalı terim varsa tüm denklemi paydaların OKEK'i ile çarp — HER terimi çarpmayı unutma.",
        "Bilinmeyenleri bir tarafa, sabitleri diğer tarafa topla (taraf değiştiren işaret değiştirir).",
        "Katsayıya bölerek x'i yalnız bırak; sonucu denklemde doğrula.",
      ],
      celdiriciler: [
        { hata: "OKEK ile çarparken paydasız terimi çarpmamak", uretir: "x/2 + x/3 = 10 için 5x = 10 ⇒ x = 2 gibi küçük yanlış kök" },
        { hata: "Taraf değiştirirken işaret değiştirmemek", uretir: "Sabitler yanlış tarafta toplanmış, işaretçe kaymış kök" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "x/2 + x/3 = 10 denkleminin çözümü kaçtır?", cevap: "6 ile çarp: 3x + 2x = 60 ⇒ 5x = 60 ⇒ x = 12" },
    },
    {
      id: "birinci-derece-denklem-02-esitsizlik-yon",
      ad: "Birinci dereceden eşitsizlik (negatifle çarpınca yön değişir)",
      aciklama:
        "ax + b < c biçimi; a negatifken bölme/çarpma sırasında eşitsizliğin yönü değişir. TYT'nin bir numaralı eşitsizlik tuzağı.",
      yontem: [
        "Denklem gibi düzenle: bilinmeyenli terimleri topla, sabitleri karşıya at.",
        "Negatif katsayıyla bölerken veya çarparken eşitsizliğin YÖNÜNÜ ÇEVİR.",
        "İstenen 'en küçük/en büyük tam sayı' ise ucun dahil olup olmadığını (<, ≤) kontrol et.",
      ],
      celdiriciler: [
        { hata: "Negatife bölerken yönü çevirmemek", uretir: "x > −3 yerine x < −3; cevap kümesinin tam tersi" },
        { hata: "Açık uçlu eşitsizlikte (<) sınır değerini dahil saymak", uretir: "En küçük tam sayı sorusunda bir eksik değer (−3 gibi)" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "5 − 2x < 11 eşitsizliğini sağlayan en küçük tam sayı kaçtır?", cevap: "−2x < 6 ⇒ x > −3 (yön değişti); en küçük tam sayı −2" },
    },
    {
      id: "birinci-derece-denklem-03-iki-bilinmeyenli-sistem",
      ad: "İki bilinmeyenli denklem sistemi (yok etme / yerine koyma)",
      aciklama:
        "İki denklem, iki bilinmeyen; taraf tarafa toplayarak bir bilinmeyeni yok etme veya birinden çekip diğerine koyma. Genelde x⋅y, x+y gibi bir birleşim istenir.",
      yontem: [
        "Katsayılar uygunsa denklemleri taraf tarafa topla/çıkar (yok etme).",
        "Değilse bir denklemden bir bilinmeyeni çek, diğerinde yerine koy.",
        "Bulunan değeri geri koyup ikinci bilinmeyeni bul; İSTENENİ (x⋅y, x−y...) hesapla — x'i bulup bırakma.",
      ],
      celdiriciler: [
        { hata: "Sadece x'i bulup soruda isteneni (x⋅y) hesaplamadan işaretlemek", uretir: "x değeri şıklarda çeldirici olarak durur (örnekte 3)" },
        { hata: "Taraf tarafa çıkarırken ikinci denklemin tüm işaretlerini değiştirmemek", uretir: "Yanlış tek bilinmeyenli denklem, kaymış kökler" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "2x + y = 7 ve x − y = 2 olduğuna göre x⋅y kaçtır?", cevap: "Taraf tarafa topla: 3x = 9 ⇒ x = 3, y = 1 ⇒ x⋅y = 3" },
    },
    {
      id: "birinci-derece-denklem-04-aralik",
      ad: "Aralık dönüştürme (x ∈ [a,b] iken mx+n hangi aralıkta)",
      aciklama:
        "x'in aralığı verilir, doğrusal bir ifadenin aralığı istenir. Eşitsizliğin üç tarafına aynı işlemler uygulanır; negatif katsayıda uçlar yer değiştirir.",
      yontem: [
        "Aralığı çift eşitsizlik olarak yaz: a ≤ x ≤ b.",
        "Üç tarafı da katsayıyla çarp (negatifse yönler değişir, uçlar yer değiştirir).",
        "Üç tarafa da sabiti ekle/çıkar; uç değerlerin dahilliğini koru.",
      ],
      celdiriciler: [
        { hata: "Sabiti yalnız bir uca uygulamak", uretir: "[−5, 6] gibi tek ucu doğru aralık" },
        { hata: "Negatif katsayıyla çarpınca uçları yer değiştirmemek", uretir: "Ters yazılmış (büyük uç solda) imkânsız aralık" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["mutlak-deger-tyt"],
      ornek: { soru: "x ∈ [−1, 3] olduğuna göre 2x − 3 ifadesi hangi aralıktadır?", cevap: "−1 ≤ x ≤ 3 ⇒ −2 ≤ 2x ≤ 6 ⇒ −5 ≤ 2x−3 ≤ 3; aralık [−5, 3]" },
    },
    {
      id: "birinci-derece-denklem-05-cozum-kosulu",
      ad: "Çözümün olmaması / sonsuz olması (katsayı analizi)",
      aciklama:
        "ax + b = cx + d biçiminde parametreli denklem: x'li katsayılar eşit, sabitler farklıysa çözüm yok; ikisi de eşitse her x çözüm (sonsuz). Kavram bilgisi ölçen ayırt edici tip.",
      yontem: [
        "Denklemi (a−c)x = d − b biçimine getir.",
        "Tek çözüm: a ≠ c. Çözüm yok: a = c ve d ≠ b. Sonsuz çözüm: a = c ve d = b.",
        "İstenen duruma göre parametre değerlerini yaz; birden çok koşul varsa hepsini birlikte sağlat.",
      ],
      celdiriciler: [
        { hata: "'Çözüm yok' ile 'sonsuz çözüm' koşullarını karıştırmak", uretir: "Sabitleri de eşitleyen (veya eşitlemeyen) yanlış parametre" },
        { hata: "Sonsuz çözümde yalnız x katsayılarını eşitleyip sabitleri unutmak", uretir: "a doğru, b yanlış; toplam sorularında kaymış değer" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      ornek: { soru: "ax + 3 = 2x + b denkleminin sonsuz çözümü olduğuna göre a + b kaçtır?", cevap: "a = 2 ve b = 3 olmalı ⇒ a + b = 5" },
    },
    {
      id: "birinci-derece-denklem-06-siralama",
      ad: "Sıralama eşitsizliği (işlemlerin sıralamaya etkisi)",
      aciklama:
        "Verilen bir aralıktaki x için x, x², 1/x gibi ifadelerin sıralanması. Negatif sayılarda kare alma ve ters alma sıralamayı bozar — kavramsal tuzak sorusu.",
      yontem: [
        "Aralıktan somut bir test değeri seç (ör. −2 < x < −1 için x = −3/2).",
        "İstenen ifadeleri bu değerle hesapla ve sırala.",
        "Kural bilgisiyle doğrula: negatifte kare pozitife taşır; −1 ile 0 arasına girmeyen negatifin tersi −1 ile 0 arasındadır.",
      ],
      celdiriciler: [
        { hata: "Pozitif sayı alışkanlığıyla x < x² ise 1/x'i de en büyük sanmak", uretir: "1/x negatifken onu pozitif ifadelerin üstüne yazan yanlış sıralama" },
        { hata: "x² ile x'in sırasını |x| < 1 durumundaki gibi kurmak", uretir: "x² < x gibi negatif x için imkânsız sıralama" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["carpanlara-ayirma-tyt"],
      ornek: { soru: "−2 < x < −1 olduğuna göre x, x², 1/x ifadelerinin doğru sıralaması nedir?", cevap: "x = −3/2 için: x = −1,5; 1/x = −2/3; x² = 2,25 ⇒ x < 1/x < x²" },
    },
  ],
};

export default kb;
