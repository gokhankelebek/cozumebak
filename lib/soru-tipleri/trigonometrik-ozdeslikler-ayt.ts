import type { TopicSoruTipleri } from "./types";

// Trigonometrik Özdeşlikler (AYT · Trigonometri). Teacher's catalogue of how
// ÖSYM asks this topic. Ordered easy→hard. Every örnek is hand-verified;
// celdiriciler map each classic wrong answer to the exact mistake behind it.
// Not: Maarif modelinde kapsam daralsa da mevcut YKS'de (~2027'ye dek) sorulmaya
// devam ediyor; site geçiş notunu zaten gösteriyor.
const kb: TopicSoruTipleri = {
  slug: "trigonometrik-ozdeslikler-ayt",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "trig-ozdeslik-01-sadelestirme",
      ad: "Temel özdeşliklerle sadeleştirme",
      aciklama:
        "sin²x+cos²x=1 ve tanx=sinx/cosx ile karışık görünen ifadeyi tek sayıya ya da tek fonksiyona indirme. Konunun ısınma sorusu.",
      yontem: [
        "tanx, cotx, secx, cscx'i sin ve cos cinsinden yaz.",
        "sin²x+cos²x=1 (ve türevleri 1−cos²x=sin²x, 1−sin²x=cos²x) ile topla/sadeleştir.",
        "Sonuç çoğu zaman sabit ya da tek bir trigonometrik fonksiyondur; öyle çıkmıyorsa dönüşümü kontrol et.",
      ],
      celdiriciler: [
        { hata: "tanx = cosx/sinx (ters) yazmak", uretir: "sin²x yerine cos²x'li terim — örnekte 1 yerine 2cos²x" },
        { hata: "sin²x+cos²x=1'i sin x+cos x=1 sanmak", uretir: "İfade sadeleşmez; rastgele uzun bir sonuç" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "sinx⋅cosx⋅tanx + cos²x ifadesinin eşiti kaçtır?",
        cevap: "tanx=sinx/cosx ⇒ sinx⋅cosx⋅tanx=sin²x; sin²x+cos²x=1",
      },
    },
    {
      id: "trig-ozdeslik-02-toplam-fark-deger",
      ad: "Toplam-fark formülüyle özel açı hesabı (75°, 105°, 15°)",
      aciklama:
        "Tabloda olmayan açının (75°=45°+30°, 15°=45°−30° gibi) sin/cos/tan değerini toplam-fark formülüyle hesaplatma.",
      yontem: [
        "Açıyı iki özel açının toplamı/farkı olarak yaz: 75°=45°+30°, 105°=60°+45°, 15°=45°−30°.",
        "Formülü uygula: sin(a±b)=sina⋅cosb ± cosa⋅sinb, cos(a±b)=cosa⋅cosb ∓ sina⋅sinb.",
        "Özel açı değerlerini koy, (√6±√2)/4 biçimindeki sonucu düzenle.",
      ],
      celdiriciler: [
        { hata: "sin(a+b)=sina+sinb sanmak", uretir: "sin75° için (√2+1)/2 ≈ 1,21 — 1'den büyük, imkânsız değer" },
        { hata: "cos formülündeki işareti ters almak (cos(a+b)'de + kullanmak)", uretir: "(√6+√2)/4 ile (√6−√2)/4 birbirine karışır" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "sin75° kaçtır?",
        cevap: "sin(45°+30°)=sin45°cos30°+cos45°sin30°=(√6+√2)/4",
      },
    },
    {
      id: "trig-ozdeslik-03-toplam-fark-pisagor",
      ad: "Verilen sin/cos'tan toplam-fark değeri (3-4-5, 5-12-13)",
      aciklama:
        "Dar açılar için sina ve cosb verilir; önce Pisagor'la eksik değerler bulunur, sonra sin(a±b) ya da cos(a±b) istenir. AYT'nin klasik trigonometri sorusu.",
      yontem: [
        "Dar açı bilgisiyle eksikleri tamamla: sina=3/5 ⇒ cosa=4/5, cosb=5/13 ⇒ sinb=12/13 (hepsi pozitif).",
        "İstenen formülü yaz ve yerine koy: sin(a+b)=sina⋅cosb+cosa⋅sinb.",
        "Paydaları eşitle (65 gibi), payları topla.",
      ],
      celdiriciler: [
        { hata: "Fark formülünü uygulamak (işaret karıştırma)", uretir: "63/65 yerine sin(a−b)=−33/65 (ya da 33/65)" },
        { hata: "Pisagor adımını atlayıp verilenleri doğrudan çarpmak", uretir: "Yalnız 15/65 gibi tek terimlik eksik sonuç" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["dik-ucgen-trigonometri-10"],
      ornek: {
        soru: "a ve b dar açı, sina=3/5 ve cosb=5/13 ise sin(a+b) kaçtır?",
        cevap: "cosa=4/5, sinb=12/13; sin(a+b)=(3/5)(5/13)+(4/5)(12/13)=15/65+48/65=63/65",
      },
    },
    {
      id: "trig-ozdeslik-04-iki-kat-aci",
      ad: "İki kat açı formülleri (sin2x ve cos2x'in üç formu)",
      aciklama:
        "sinx veya cosx verilir; sin2x=2sinxcosx ya da cos2x istenir. cos2x'in üç formu (cos²x−sin²x, 2cos²x−1, 1−2sin²x) arasından soruya uyanı seçmek işin özüdür.",
      yontem: [
        "Eksik değeri Pisagor'la bul (bölge/dar açı bilgisine göre işaret seç).",
        "sin2x=2sinx⋅cosx; cos2x için verilene uyan formu seç: yalnız sin verilmişse 1−2sin²x, yalnız cos verilmişse 2cos²x−1.",
        "Değerleri koy, sadeleştir.",
      ],
      celdiriciler: [
        { hata: "sin2x=2sinx sanmak (cos çarpanını unutmak)", uretir: "sinx=3/5 için 6/5 — 1'den büyük, imkânsız değer" },
        { hata: "cos2x=sin²x−cos²x (ters sıra) yazmak", uretir: "Doğru cevabın işaretçe tersi: 7/25 yerine −7/25" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "x dar açı ve sinx=3/5 ise sin2x kaçtır?",
        cevap: "cosx=4/5; sin2x=2⋅(3/5)⋅(4/5)=24/25",
      },
    },
    {
      id: "trig-ozdeslik-05-kare-alma",
      ad: "sinx±cosx verilip sinx⋅cosx (veya sin2x) isteme — kare alma",
      aciklama:
        "sinx+cosx ya da sinx−cosx'in değeri verilir; sinx⋅cosx veya sin2x istenir. Refleks: iki tarafın karesini al, sin²x+cos²x=1'i kullan.",
      yontem: [
        "Verilen eşitliğin iki tarafının karesini al.",
        "Açılımda sin²x+cos²x=1 yaz: (sinx±cosx)² = 1 ± 2sinx⋅cosx.",
        "2sinx⋅cosx'i çöz; sin2x istenirse bu zaten sin2x'tir.",
      ],
      celdiriciler: [
        { hata: "sinx−cosx'in karesinde çift çarpımın işaretini + almak", uretir: "3/8 yerine −3/8" },
        { hata: "Açılımda sin²x+cos²x=1'i yazmayı unutmak", uretir: "2sinxcosx=1/4 ⇒ 1/8 gibi ölçeği kaymış değer" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "sinx − cosx = 1/2 ise sinx⋅cosx kaçtır?",
        cevap: "Kare al: 1 − 2sinxcosx = 1/4 ⇒ 2sinxcosx = 3/4 ⇒ sinxcosx = 3/8",
      },
    },
    {
      id: "trig-ozdeslik-06-yarim-aci-sadelestirme",
      ad: "İki kat açıyla kesirli ifade sadeleştirme (1±cos2x kalıbı)",
      aciklama:
        "(1−cos2x)/sin2x, sin2x/(1+cos2x) gibi kesirler; 1−cos2x=2sin²x ve 1+cos2x=2cos²x kalıplarıyla tanx/cotx'e iner. Kalıbı görmeyen öğrenci soruda boğulur.",
      yontem: [
        "1−cos2x=2sin²x, 1+cos2x=2cos²x, sin2x=2sinxcosx dönüşümlerini uygula.",
        "2'ler ve ortak çarpanlar sadeleşir; geriye tanx ya da cotx kalır.",
        "Sayısal değer istenirse verilen açıyı/oranı en son koy.",
      ],
      celdiriciler: [
        { hata: "1−cos2x=2cos²x sanmak (kalıpları takas etmek)", uretir: "tanx yerine cotx" },
        { hata: "1−cos2x'te cos2x=1−2sin²x yerine cos²x−sin²x koyup açılımı yarım bırakmak", uretir: "Sadeleşmeyen karmaşık kesir; şıklarda 'hiçbiri'ye kaçış" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["trigonometrik-denklemler-ayt"],
      ornek: {
        soru: "(1 − cos2x)/sin2x ifadesinin en sade hali nedir?",
        cevap: "2sin²x/(2sinxcosx) = sinx/cosx = tanx",
      },
    },
    {
      id: "trig-ozdeslik-07-carpim-toplam",
      ad: "Toplam↔çarpım dönüşümleri (sinA±sinB, cosA±cosB)",
      aciklama:
        "sin75°+sin15° gibi toplamı çarpıma çevirip özel açılardan değer hesaplatma. Formül ezberi değil, (A+B)/2 ve (A−B)/2 kurgusu ölçülür.",
      yontem: [
        "Dönüşümü yaz: sinA+sinB = 2sin((A+B)/2)⋅cos((A−B)/2); cosA+cosB = 2cos((A+B)/2)⋅cos((A−B)/2).",
        "Yarı toplam ve yarı farkı hesapla — çoğunlukla 45°, 30° gibi özel açı çıkar.",
        "Özel açı değerlerini koyup çarp.",
      ],
      celdiriciler: [
        { hata: "sinA+sinB = sin(A+B) sanmak", uretir: "sin75°+sin15° için sin90°=1" },
        { hata: "cosA−cosB dönüşümündeki eksi işaretini (−2sin⋅sin) unutmak", uretir: "Doğru cevabın işaretçe tersi" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      ornek: {
        soru: "sin75° + sin15° kaçtır?",
        cevap: "2sin45°⋅cos30° = 2⋅(√2/2)⋅(√3/2) = √6/2",
      },
    },
  ],
};

export default kb;
