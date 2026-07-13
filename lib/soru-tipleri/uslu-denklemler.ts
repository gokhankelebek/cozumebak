import type { TopicSoruTipleri } from "./types";

// Üslü Denklemler (TYT · Üslü-Köklü kümesi). Teacher's catalogue of how ÖSYM
// asks this topic. Ordered easy→hard. Every örnek is hand-verified;
// celdiriciler map each classic wrong answer to the exact mistake behind it.
const kb: TopicSoruTipleri = {
  slug: "uslu-denklemler",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "uslu-denklemler-01-taban-esitleme",
      ad: "Taban eşitleme (2ˣ⁺¹ = 8 tipi)",
      aciklama:
        "Bir tarafta üslü ifade, diğer tarafta çıplak sayı. Sayı, aynı tabanın kuvveti olarak yazılır ve üsler eşitlenir. Konunun giriş sorusu.",
      yontem: [
        "Çıplak sayıyı sol tarafın tabanında yaz: 8 = 2³, 27 = 3³, 32 = 2⁵.",
        "a > 0, a ≠ 1 iken aˣ = aʸ ⇒ x = y; üsleri eşitle.",
        "Çıkan birinci dereceden denklemi çöz, sonucu yerine koyup doğrula.",
      ],
      celdiriciler: [
        { hata: "Üs eşitlemeden sayıyı doğrudan üsse yazmak (2x−1 = 27 çözmek)", uretir: "x = 14" },
        { hata: "27 = 3³ yerine 27 = 3⁹ gibi yanlış kuvvet yazmak", uretir: "2x−1 = 9 ⇒ x = 5" },
        { hata: "Üs eşitledikten sonra denklemi yanlış çözmek (2x = 3−1 gibi işlem sırası hatası)", uretir: "x = 1" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "3²ˣ⁻¹ = 27 denklemini sağlayan x kaçtır?", cevap: "27 = 3³ ⇒ 2x−1 = 3 ⇒ x = 2" },
    },
    {
      id: "uslu-denklemler-02-iki-taraf-ortak-taban",
      ad: "İki tarafı ortak tabana indirme (9ˣ⁻¹ = 27ˣ⁻² tipi)",
      aciklama:
        "Her iki tarafta da üslü ifade var ama tabanlar farklı (4 ile 8, 9 ile 27). İkisi de aynı asal tabanın kuvvetidir; ortak tabana inilir, üsler eşitlenir.",
      yontem: [
        "Her iki tabanı ortak asal tabana çevir: 9 = 3², 27 = 3³.",
        "Üssün üssünü çarp: (3²)ˣ⁻¹ = 3²ˣ⁻², (3³)ˣ⁻² = 3³ˣ⁻⁶ — üssü parantezle dağıtırken her terimi çarp.",
        "Üsleri eşitle ve birinci dereceden denklemi çöz.",
      ],
      celdiriciler: [
        { hata: "Üssü dağıtırken sabiti çarpmamak (2(x−1) = 2x−1 yazmak)", uretir: "2x−1 = 3x−6 ⇒ x = 5" },
        { hata: "Tabanları eşitlemeden üsleri eşitlemek (x−1 = x−2 deyip 'çözüm yok' demek)", uretir: "Çözüm yok — yanlış sonuç" },
        { hata: "9 ve 27'yi aynı sayının kuvveti olarak görememek, deneme-yanılmaya düşmek", uretir: "Zaman kaybı, rastgele şık" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "9ˣ⁻¹ = 27ˣ⁻² denklemini sağlayan x kaçtır?", cevap: "3²ˣ⁻² = 3³ˣ⁻⁶ ⇒ 2x−2 = 3x−6 ⇒ x = 4 (kontrol: 9³ = 729 = 27²)" },
    },
    {
      id: "uslu-denklemler-03-farkli-taban-ortak-us",
      ad: "Farklı taban, ortak üs (aˣ = bˣ ⇒ x = 0)",
      aciklama:
        "Tabanlar farklı pozitif sayılar (3 ile 5 gibi), üsler aynı ifade. Eşitlik ancak ortak üs sıfır olursa sağlanır çünkü a⁰ = b⁰ = 1.",
      yontem: [
        "a ≠ b, a,b > 0 iken aᵘ = bᵘ eşitliği yalnız u = 0 için doğrudur.",
        "Ortak üs ifadesini sıfıra eşitle ve çöz.",
        "Kontrol: bulunan x'te iki taraf da 1 olmalı.",
      ],
      celdiriciler: [
        { hata: "Tabanlar farklıyken üsleri birbirine eşitlemeye çalışmak (2x−6 = 2x−6, 'her x sağlar' demek)", uretir: "Sonsuz çözüm — yanlış" },
        { hata: "Üs = 0'da a⁰ = 0 sanıp eşitliği reddetmek", uretir: "Çözüm yok — yanlış" },
        { hata: "Üs ifadesini 0 yerine 1'e eşitlemek", uretir: "2x−6 = 1 ⇒ x = 7/2" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      ornek: { soru: "7²ˣ⁻⁶ = 11²ˣ⁻⁶ denklemini sağlayan x kaçtır?", cevap: "Tabanlar farklı ⇒ 2x−6 = 0 ⇒ x = 3" },
    },
    {
      id: "uslu-denklemler-04-ortak-carpan-parantez",
      ad: "Toplamlı denklemde ortak çarpan paranteze alma",
      aciklama:
        "aˣ⁺ᵏ terimlerinin toplamı/farkı bir sayıya eşit (2ˣ⁺²+2ˣ = 20 tipi). En küçük üslü terim paranteze alınır, denklem tek üslü ifadeye iner. TYT'nin bu konudaki standart sorusu.",
      yontem: [
        "Her terimi en küçük üslü terim cinsinden aç: aˣ⁺ᵏ = aˣ⋅aᵏ.",
        "Ortak çarpanı (en küçük üslüyü) paranteze al; parantez içi sayıya iner.",
        "Kalan tek üslü denklemi taban eşitleyerek bitir.",
      ],
      celdiriciler: [
        { hata: "Toplamda üsleri birleştirmeye çalışmak (3ˣ⁺¹⁻⁽ˣ⁻¹⁾ = 24 gibi)", uretir: "3² = 24 çelişkisi, rastgele şık" },
        { hata: "Ortak çarpan olarak büyük üslü terimi seçip negatif üsle boğulmak", uretir: "İşlem hatasına açık kesirli ara adım" },
        { hata: "Parantez içini yanlış hesaplamak (3² − 1 = 9 − 1 yerine 3 − 1 = 2 almak)", uretir: "3ˣ⁻¹ = 12 — taban eşitlenemez, çıkmaz" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["uslu-ifadeler"],
      ornek: { soru: "3ˣ⁺¹ − 3ˣ⁻¹ = 24 denklemini sağlayan x kaçtır?", cevap: "3ˣ⁻¹(3² − 1) = 24 ⇒ 3ˣ⁻¹ = 3 ⇒ x = 2 (kontrol: 27 − 3 = 24)" },
    },
    {
      id: "uslu-denklemler-05-degisken-degistirme",
      ad: "Değişken değiştirme (2ˣ = t ile ikinci dereceye inen denklem)",
      aciklama:
        "4ˣ − 3⋅2ˣ + 2 = 0 tipi: 4ˣ = (2ˣ)² fark edilir, 2ˣ = t denince ikinci dereceden denklem çıkar. t köklerinden x'e geri dönülür; t ≤ 0 kökler atılır.",
      yontem: [
        "4ˣ = (2²)ˣ = (2ˣ)² yaz; 2ˣ = t de: t² − 3t + 2 = 0.",
        "t'yi çarpanlara ayırarak çöz: (t−1)(t−2) = 0 ⇒ t = 1 veya t = 2.",
        "Geri dön: 2ˣ = 1 ⇒ x = 0; 2ˣ = 2 ⇒ x = 1. 2ˣ > 0 olduğundan negatif t kökü olsaydı atılırdı.",
      ],
      celdiriciler: [
        { hata: "t köklerini doğrudan x sanmak (cevabı t değerlerinden okumak)", uretir: "Kökler toplamı 1 + 2 = 3" },
        { hata: "2ˣ = 1 denkleminde x = 1 sanmak (a⁰ = 1 unutmak)", uretir: "Kökler toplamı 1 + 1 = 2" },
        { hata: "4ˣ = 2⋅2ˣ sanmak (üssün üssü yerine katsayı yazmak)", uretir: "Birinci dereceden yanlış denklem, tek kök" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["ikinci-derece-denklem-ayt"],
      ornek: { soru: "4ˣ − 3⋅2ˣ + 2 = 0 denkleminin köklerinin toplamı kaçtır?", cevap: "t = 2ˣ ⇒ t² − 3t + 2 = 0 ⇒ t ∈ {1, 2} ⇒ x ∈ {0, 1}, toplam 1" },
    },
    {
      id: "uslu-denklemler-06-us-esitleme-uc-durum",
      ad: "Tabanı bilinmeyenli üslü eşitlik (üç durum analizi: 1, −1, 0)",
      aciklama:
        "(x−a)^(üslü ifade) = 1 tipi denklem. Üç durum ayrı ayrı incelenir: taban 1, üs 0 (taban ≠ 0), taban −1 ve üs çift. Durum atlayan öğrenci kök kaybeder; bu konunun eleme sorusu.",
      yontem: [
        "Durum 1 — taban = 1: taban ifadesini 1'e eşitle; üs ne olursa olsun sonuç 1.",
        "Durum 2 — üs = 0: üs ifadesini 0'a eşitle; taban 0 olmamalı (0⁰ tanımsız).",
        "Durum 3 — taban = −1: üssün ÇİFT olduğunu kontrol et; tekse bu kök geçersiz.",
        "Üç durumun geçerli köklerini birleştir (tekrar edenleri bir kez say).",
      ],
      celdiriciler: [
        { hata: "Yalnız taban = 1 durumunu görmek", uretir: "Tek kök x = 3, toplam 3" },
        { hata: "Taban = −1 durumunda üs çiftliğini kontrol etmemek veya durumu atlamak", uretir: "x = 1 kökü kaçar, toplam 0" },
        { hata: "Üs = 0 durumunda taban = 0 kontrolünü atlamak", uretir: "Tanımsız değeri kök sayma" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["uslu-ifadeler"],
      ornek: {
        soru: "(x−2)^(x²−9) = 1 eşitliğini sağlayan x tam sayılarının toplamı kaçtır?",
        cevap: "Taban 1: x = 3. Üs 0: x = ±3 (x = −3'te taban −5 ≠ 0, geçerli). Taban −1: x = 1, üs −8 çift, geçerli. x ∈ {3, −3, 1}, toplam 1",
      },
    },
  ],
};

export default kb;
