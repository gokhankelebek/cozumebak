import type { TopicSoruTipleri } from "./types";

// Üçgenler (TYT · Temel Geometri). Teacher's catalogue of how ÖSYM asks this
// topic. Real exam questions are figure-based; each örnek describes the figure
// verbally, matching the site's quiz convention. Ordered easy→hard. Every örnek
// is hand-verified (açılar 180°'ye tamamlanarak denetlendi); celdiriciler map
// each classic wrong answer to the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "ucgenler-tyt",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "ucgenler-tyt-01-ic-acilar-toplami",
      ad: "İç açılar toplamı 180° (oranlı / eksik açı)",
      aciklama:
        "İki açı verilip üçüncüsü istenir ya da açılar oranla (1:2:3 gibi) verilir. Konunun ısınma sorusu; oranlı versiyonda k'yı cevap sanmak klasik hatadır.",
      yontem: [
        "Oran verilmişse açıları k cinsinden yaz: k, 2k, 3k gibi.",
        "İç açılar toplamını kur: toplam = 180°, k'yı çöz.",
        "İstenen AÇIYI hesapla — k'nın kendisi neredeyse hiçbir zaman cevap değildir.",
      ],
      celdiriciler: [
        { hata: "k'yı bulup cevap sanmak", uretir: "k değeri (ör. 90° yerine 30)" },
        { hata: "İç açılar toplamını 360° almak (dörtgenle karıştırmak)", uretir: "Doğru cevabın iki katı ölçekli değer" },
        { hata: "En büyük açı istenirken en küçük oranın açısını vermek", uretir: "En küçük açı (ör. 30°)" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "△ABC'nin iç açılarının ölçüleri 1, 2 ve 3 sayılarıyla orantılıdır. En büyük iç açının ölçüsü kaç derecedir?",
        cevap: "k+2k+3k=180° ⇒ k=30°; açılar 30°, 60°, 90° — en büyüğü 90°",
      },
    },
    {
      id: "ucgenler-tyt-02-dis-aci",
      ad: "Dış açı = komşu olmayan iç açılar toplamı",
      aciklama:
        "Bir dış açı ile bir iç açı verilir, üçüncü iç açı sorulur (ya da tersi). Dış açının komşu OLMAYAN iki iç açının toplamına eşit olduğu bağıntı kullanılır; dış açılar toplamının 360° olduğu da aynı kalıbın sorusudur.",
      yontem: [
        "Dış açıyı yaz: dış(B) = m(A) + m(C) (B'ye komşu olmayan içler).",
        "Verilenleri yerine koy, bilinmeyen iç açıyı çöz.",
        "Kontrol: dış açı + komşu iç açı = 180° ve üç iç açı toplamı 180° sağlanmalı.",
      ],
      celdiriciler: [
        { hata: "Dış açıyı iç açı sanıp üç 'iç' açıyı 180°'ye tamamlamak", uretir: "180° − (iç + dış) (ör. 70° yerine 10°)" },
        { hata: "Dış açının bütünlerini (komşu iç açıyı) bulup istenen açı sanmak", uretir: "180° − dış açı (ör. 60°)" },
        { hata: "Dış açılar toplamını 180° sanmak", uretir: "Yarı ölçekli yanlış değer" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "△ABC'de m(A)=50° ve B köşesindeki dış açının ölçüsü 120°'dir. m(C) kaç derecedir?",
        cevap: "Dış(B)=m(A)+m(C) ⇒ 120°=50°+m(C) ⇒ m(C)=70° (kontrol: iç B=60°, 50+60+70=180 ✓)",
      },
    },
    {
      id: "ucgenler-tyt-03-ucgen-esitsizligi",
      ad: "Üçgen eşitsizliği (kaç farklı tam sayı değeri)",
      aciklama:
        "İki kenar verilir; üçüncü kenarın alabileceği tam sayı değerlerinin sayısı, en büyüğü ya da en küçüğü istenir. |b−c| < a < b+c bağıntısı — sınır değerlerin DAHİL OLMADIĞI en kritik ayrıntıdır.",
      yontem: [
        "Aralığı yaz: |b−c| < x < b+c (iki sınır da açık aralık, dahil değil).",
        "Tam sayı isteniyorsa aralıktaki tam sayıları say: (üst−alt−1) formülü açık aralıkta işe yarar.",
        "En küçük/en büyük tam değer isteniyorsa sınıra EN YAKIN ama sınırda olmayan tam sayıyı al.",
      ],
      celdiriciler: [
        { hata: "Sınır değerleri dahil etmek (≤ kullanmak)", uretir: "Doğru sayının 2 fazlası (ör. 9 yerine 11)" },
        { hata: "Yalnız x < b+c koşulunu kullanıp alt sınırı unutmak", uretir: "Fazladan küçük değerler sayılmış sonuç (ör. 13)" },
        { hata: "Alt sınırı b−c yerine b+c−1 gibi ezber değerle kurmak", uretir: "Kaymış aralıktan yanlış sayım" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "Kenar uzunlukları 5, 9 ve x birer tam sayıdır. x kaç farklı değer alabilir?",
        cevap: "9−5 < x < 9+5 ⇒ 4 < x < 14; x ∈ {5,6,…,13} — 9 farklı değer",
      },
    },
    {
      id: "ucgenler-tyt-04-aci-kenar",
      ad: "Açı–kenar ilişkisi (kenar sıralaması)",
      aciklama:
        "Üçgenin açıları verilir (ya da hesaplattırılır), kenarların büyükten küçüğe sıralaması istenir. Kural: büyük açının KARŞISINDA büyük kenar bulunur — açıya komşu kenarla karıştırılır.",
      yontem: [
        "Eksik açıyı 180°'den tamamla; üç açıyı da bil.",
        "Her açının karşısındaki kenarı eşleştir: m(A) karşısı |BC|=a, m(B) karşısı |AC|=b, m(C) karşısı |AB|=c.",
        "Açı sıralamasını aynen kenarlara taşı: en büyük açı ⇒ en uzun kenar.",
      ],
      celdiriciler: [
        { hata: "Büyük açının karşısına küçük kenar koymak (ilişkiyi ters kurmak)", uretir: "Doğru sıralamanın tam tersi" },
        { hata: "Açının karşı kenarı yerine komşu kenarını eşleştirmek (A ↔ |AB| sanmak)", uretir: "Karışık, kısmen doğru görünen sıralama" },
        { hata: "Üçüncü açıyı hesaplamadan verilen iki açıyla sıralamak", uretir: "Eksik karşılaştırmadan yanlış sıra" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "△ABC'de m(A)=70° ve m(B)=60°'dir. Kenarları büyükten küçüğe sıralayınız.",
        cevap: "m(C)=50°; 70°>60°>50° ⇒ a>b>c, yani |BC|>|AC|>|AB|",
      },
    },
    {
      id: "ucgenler-tyt-05-ikizkenar",
      ad: "İkizkenar üçgende açı–kenar özellikleri",
      aciklama:
        "İki kenarı eş üçgende taban açılarının eşitliği kullanılır: tepe açısı verilip taban açısı istenir ya da tersi. Hangi açının tepe, hangilerinin taban olduğu şekil okunmadan karıştırılır — eşit kenarların KARŞISINDAKİ açılar eşittir.",
      yontem: [
        "Eş kenarları belirle: |AB|=|AC| ise taban BC'dir ve m(B)=m(C) (eşit kenarların karşı açıları).",
        "İç açılar toplamını kur: tepe + 2 × taban = 180°.",
        "İstenen açıyı çöz; ikizkenarda tepeden inen yükseklik aynı zamanda açıortay ve kenarortaydır.",
      ],
      celdiriciler: [
        { hata: "Tepe açısını taban açısı sanmak (eşit açıları yanlış köşelere koymak)", uretir: "Tepe açısının kendisi (ör. 70° yerine 40°)" },
        { hata: "180°'den tepe açısını çıkarıp İKİYE BÖLMEYİ unutmak", uretir: "Taban açılarının toplamı (ör. 140°)" },
        { hata: "|AB|=|AC| iken m(A)=m(B) yazmak", uretir: "Yanlış denklem, tutarsız açılar" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "△ABC'de |AB|=|AC| ve tepe açısı m(A)=40°'dir. Taban açısı m(B) kaç derecedir?",
        cevap: "m(B)=m(C)=(180°−40°)/2=70° (kontrol: 40+70+70=180 ✓)",
      },
    },
    {
      id: "ucgenler-tyt-06-eskenar",
      ad: "Eşkenar üçgen: yükseklik ve alan bağıntısı",
      aciklama:
        "Bir kenarı a olan eşkenar üçgende yükseklik h = a√3/2 ve alan = a²√3/4 bağıntıları. Yükseklik indirildiğinde oluşan 30–60–90 dik üçgeni görmek çözümün özüdür; formüller birbirine karıştırılır.",
      yontem: [
        "Tepeden yükseklik indir: tabanı ortalar, 30°–60°–90° dik üçgen oluşur.",
        "Yükseklik: h = a√3/2 (dik üçgende a/2, h, a kenarlarından Pisagor ile de çıkar).",
        "Alan: (taban × yükseklik)/2 = a ⋅ (a√3/2) / 2 = a²√3/4.",
      ],
      celdiriciler: [
        { hata: "Alan formülünde 4 yerine 2'ye bölmek (a²√3/2 kullanmak)", uretir: "Doğru alanın iki katı (ör. 9√3 yerine 18√3)" },
        { hata: "Yüksekliği a√3 sanmak (2'ye bölmeyi unutmak)", uretir: "İki kat yükseklik ve ondan türeyen dört kat alan" },
        { hata: "Yükseklik yerine kenarın yarısını kullanmak", uretir: "a²/4'lü köksüz yanlış alan" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "Bir kenarının uzunluğu 6 cm olan eşkenar üçgenin yüksekliği kaç cm, alanı kaç cm²'dir?",
        cevap: "h=6√3/2=3√3 cm; Alan=6²√3/4=9√3 cm² (kontrol: 6⋅3√3/2=9√3 ✓)",
      },
    },
    {
      id: "ucgenler-tyt-07-ic-merkez",
      ad: "İç açıortayların kesişimi: m(BPC) = 90° + A/2 kalıbı",
      aciklama:
        "B ve C köşelerinden çizilen iç açıortaylar üçgenin içinde (iç merkezde) kesişir; tepe açısı verilip açıortayların arasındaki açı sorulur. Ezber bağıntı 90°+A/2'dir ama ÖSYM türetmeyi bilmeyeni cebirsel varyasyonlarla eler. Kenarortayların kesişimi (ağırlık merkezi, 2:1 bölme) ile karıştırılmamalıdır.",
      yontem: [
        "m(B)+m(C)=180°−m(A) yaz.",
        "Açıortaylar yarısını alır: B/2 + C/2 = (180°−A)/2 = 90° − A/2.",
        "BPC üçgeninde: m(BPC) = 180° − (B/2 + C/2) = 90° + A/2.",
      ],
      celdiriciler: [
        { hata: "Dış açıortay formülünü kullanmak: 90° − A/2", uretir: "90°−A/2 (ör. 125° yerine 55°)" },
        { hata: "Açıortayları unutup m(BPC)=180°−m(A) almak", uretir: "180°−A (ör. 110°)" },
        { hata: "B/2 + C/2 toplamını cevap sanmak", uretir: "90°−A/2 ile aynı yanlış değer (ör. 55°)" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["acilar-dogrular"],
      ornek: {
        soru: "△ABC'de m(A)=70°'dir. B ve C köşelerindeki iç açıortaylar üçgenin içinde P noktasında kesişiyor. m(BPC) kaç derecedir?",
        cevap: "m(BPC)=90°+70°/2=125° (kontrol: B+C=110°, yarıları 55°, 180°−55°=125° ✓)",
      },
    },
  ],
};

export default kb;
