import type { TopicSoruTipleri } from "./types";

// Doğrunun Analitik İncelenmesi (AYT · Analitik Geometri). Teacher's catalogue
// of how ÖSYM asks this topic — AYT'nin en yüksek ağırlıklı kümesinin (İleri
// Geometri) taşıyıcı kolonu. Ordered easy→hard. Every örnek is hand-verified;
// celdiriciler map each classic wrong answer to the exact mistake behind it.
const kb: TopicSoruTipleri = {
  slug: "dogru-analitik-ayt",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "dogru-analitik-01-uzaklik-orta-nokta",
      ad: "İki nokta arası uzaklık ve orta nokta",
      aciklama:
        "İki nokta verilir; aradaki uzaklık, orta nokta veya bunlardan türeyen basit bir değer istenir. Konunun kapı sorusu; 3-4-5 ve 6-8-10 üçlüleri ÖSYM'nin klasiğidir.",
      yontem: [
        "Uzaklık: |AB| = √((x₂−x₁)² + (y₂−y₁)²). Önce farkları al, sonra karele.",
        "Orta nokta: M = ((x₁+x₂)/2, (y₁+y₂)/2) — koordinatların ortalaması.",
        "Farklar 3-4, 6-8, 5-12 gibi Pisagor üçlüsü veriyorsa kökü hesapsız yaz.",
      ],
      celdiriciler: [
        { hata: "Karekök almayı unutup uzaklığın karesini bırakmak", uretir: "Doğru cevabın karesi (10 yerine 100)" },
        { hata: "Farkları karelemeden mutlak değerce toplamak (|Δx|+|Δy|)", uretir: "Uzaklıktan büyük yanlış değer (10 yerine 14)" },
        { hata: "Orta noktada koordinatları toplamayıp farkın yarısını almak", uretir: "Merkez yerine yarı-vektör noktası" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "A(−2,3) ve B(4,11) noktaları için |AB| uzunluğu ve [AB]'nin orta noktası nedir?",
        cevap: "|AB|=√(6²+8²)=√100=10; orta nokta ((−2+4)/2, (3+11)/2)=(1,7)",
      },
    },
    {
      id: "dogru-analitik-02-egim",
      ad: "Eğim (iki noktadan veya eğim açısından)",
      aciklama:
        "İki noktadan geçen doğrunun eğimi ya da eğim açısı verilip m = tanα bağlantısı sorulur. 45°, 135°, 60° gibi özel açılar tercih edilir.",
      yontem: [
        "İki noktadan: m = (y₂−y₁)/(x₂−x₁). Pay ve paydada AYNI sırayla fark al.",
        "Açıdan: m = tanα. α=45° ⇒ m=1, α=135° ⇒ m=−1, α=60° ⇒ m=√3.",
        "Dik doğrunun eğimi tanımsız (x=a), yatay doğrunun eğimi 0 (y=b).",
      ],
      celdiriciler: [
        { hata: "Oranı ters kurmak: Δx/Δy", uretir: "Doğru eğimin çarpmaya göre tersi (2 yerine 1/2)" },
        { hata: "Payda ve paydada farklı sıra: (y₂−y₁)/(x₁−x₂)", uretir: "Doğru eğimin işaretçe tersi" },
        { hata: "135° için tan değerini +1 almak", uretir: "−1 yerine 1" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "A(2,5) ve B(6,13) noktalarından geçen doğrunun eğimi kaçtır?",
        cevap: "m=(13−5)/(6−2)=8/4=2",
      },
    },
    {
      id: "dogru-analitik-03-dogru-denklemi",
      ad: "Doğru denklemi yazma (nokta-eğim / iki nokta / eksen kesim)",
      aciklama:
        "Bir nokta ve eğim, iki nokta ya da eksen kesim noktaları verilip doğrunun denklemi veya denklemden bir kesim noktası istenir.",
      yontem: [
        "Nokta-eğim: y − y₀ = m(x − x₀). En güvenli kalıp budur.",
        "İki nokta verilirse önce eğimi hesapla, sonra noktalardan birini kullan.",
        "Eksen kesimleri (a,0) ve (0,b) ise: x/a + y/b = 1.",
        "y eksenini kestiği yer için x=0, x eksenini kestiği yer için y=0 koy.",
      ],
      celdiriciler: [
        { hata: "Nokta-eğim kalıbında x₀'ın işaretini ters yazmak", uretir: "Sabiti kaymış yanlış denklem (n=−1 yerine n=7)" },
        { hata: "x/a + y/b = 1 kalıbında a ile b'yi yer değiştirmek", uretir: "Eksenleri ters kesen doğru" },
        { hata: "Kesim noktası sorulunca yanlış değişkeni sıfırlamak", uretir: "y kesimi yerine x kesimi" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "A(2,3) noktasından geçen ve eğimi 2 olan doğru y eksenini hangi noktada keser?",
        cevap: "y−3=2(x−2) ⇒ y=2x−1; x=0 için y=−1, nokta (0,−1)",
      },
    },
    {
      id: "dogru-analitik-04-paralel-dik",
      ad: "Paralellik ve diklik koşulları",
      aciklama:
        "İki doğrunun paralel (m₁=m₂) veya dik (m₁⋅m₂=−1) olması koşulundan bilinmeyen katsayı bulunur. ÖSYM'nin bu konudaki bir numaralı sorusu.",
      yontem: [
        "ax+by+c=0 biçimindeki doğrunun eğimi m = −a/b. Önce iki eğimi de çıkar.",
        "Paralellik: m₁ = m₂ (ve doğrular çakışık olmamalı: c oranları farklı).",
        "Diklik: m₁ ⋅ m₂ = −1, yani biri diğerinin negatif tersi.",
        "Kurduğun denklemi bilinmeyen için çöz; sonucu iki eğimi çarparak sağla.",
      ],
      celdiriciler: [
        { hata: "Diklik koşulunu m₁⋅m₂=1 sanmak", uretir: "İşareti ters bilinmeyen (a=3 yerine a=−1)" },
        { hata: "Diklik yerine paralellik koşulunu uygulamak", uretir: "m₁=m₂'den çıkan ilgisiz değer (a=1/2)" },
        { hata: "Genel denklemde eğimi −a/b yerine a/b almak", uretir: "İşaretçe ters eğimle kurulmuş denklem" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "d₁: y=(a−1)x+2 doğrusu d₂: x+2y−6=0 doğrusuna dik ise a kaçtır?",
        cevap: "m₂=−1/2; (a−1)⋅(−1/2)=−1 ⇒ a−1=2 ⇒ a=3",
      },
    },
    {
      id: "dogru-analitik-05-noktanin-dogruya-uzakligi",
      ad: "Noktanın doğruya uzaklığı",
      aciklama:
        "Bir noktanın ax+by+c=0 doğrusuna uzaklığı |ax₀+by₀+c|/√(a²+b²) formülüyle istenir; paralel iki doğru arası uzaklık da aynı formülün uzantısıdır. Katsayılar hemen her zaman 3-4-5 verir.",
      yontem: [
        "Doğruyu mutlaka ax+by+c=0 biçimine getir (y'yi yalnız bırakma!).",
        "d = |ax₀+by₀+c| / √(a²+b²). Payda mutlak değer, paydada karekök şart.",
        "Paralel iki doğru arası uzaklık: birinden bir nokta seç, diğerine uzaklığını al.",
      ],
      celdiriciler: [
        { hata: "Paydada karekök almayıp a²+b² ile bölmek", uretir: "Doğru cevabın 1/√(a²+b²) katı (2 yerine 2/5)" },
        { hata: "Payda mutlak değeri unutmak", uretir: "Negatif 'uzaklık' — işaretli yanlış değer" },
        { hata: "Doğruyu sıfıra eşitlemeden y=mx+n halindeki katsayıları formüle sokmak", uretir: "Yanlış a, b, c ile hesaplanmış ilgisiz sayı" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["cember-analitik-ayt"],
      ornek: {
        soru: "P(1,2) noktasının 3x−4y+15=0 doğrusuna uzaklığı kaç birimdir?",
        cevap: "d=|3⋅1−4⋅2+15|/√(3²+4²)=|10|/5=2",
      },
    },
    {
      id: "dogru-analitik-06-kesisim-ucgen-alani",
      ad: "İki doğrunun kesişimi ve üçgen alanı",
      aciklama:
        "Doğruların kendi aralarında veya eksenlerle sınırladığı üçgenin alanı istenir. Kesişim noktası + eksen kesimleri bulunup ½⋅taban⋅yükseklik kurulur; gerçek sınav zorluğu buradadır.",
      yontem: [
        "Kesişim için denklemleri ortak çöz (y'leri eşitle veya taraf tarafa yok et).",
        "Eksen kesimlerini bul: x=0 ve y=0 koyarak köşeleri çıkar.",
        "Taban ekseni üzerine oturt; yükseklik, kesişim noktasının eksene uzaklığıdır.",
        "Alan = ½ ⋅ |taban| ⋅ |yükseklik|. Köşe koordinatlarıyla determinant formülü de kullanılabilir.",
      ],
      celdiriciler: [
        { hata: "Yükseklik olarak kesişim noktasının ordinatı yerine apsisini almak", uretir: "Yanlış yükseklikle yarıya inen alan (12 yerine 6)" },
        { hata: "½ ile çarpmayı unutmak", uretir: "Doğru alanın iki katı (12 yerine 24)" },
        { hata: "Kesişimi çözerken denklemlerden birini yanlış taşımak", uretir: "Kaymış köşeyle kurulmuş yakın ama yanlış alan" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["dogruyu-oranla-bolme-10"],
      ornek: {
        soru: "d₁: y=2x ve d₂: y=−x+6 doğruları ile x ekseninin sınırladığı üçgenin alanı kaç birim karedir?",
        cevap: "Köşeler (0,0), (6,0) ve kesişim 2x=−x+6 ⇒ (2,4); Alan=½⋅6⋅4=12",
      },
    },
    {
      id: "dogru-analitik-07-simetri",
      ad: "Simetri (noktaya ve doğruya göre)",
      aciklama:
        "Bir noktanın başka bir noktaya, eksenlere veya y=x / x=a / y=b gibi özel doğrulara göre simetriği istenir. Noktaya göre simetride merkez, iki noktanın ORTASIDIR — formül buradan kurulur.",
      yontem: [
        "M(a,b) noktasına göre A(x,y)'nin simetriği: A′ = (2a−x, 2b−y).",
        "x eksenine göre (x,−y); y eksenine göre (−x,y); orijine göre (−x,−y).",
        "y=x doğrusuna göre koordinatlar yer değiştirir: (x,y) → (y,x).",
        "x=a doğrusuna göre (2a−x, y); y=b doğrusuna göre (x, 2b−y).",
      ],
      celdiriciler: [
        { hata: "Noktaya göre simetride 2a−x yerine iki noktanın ortalamasını almak", uretir: "Simetrik yerine orta nokta ((−1,10) yerine (2,1))" },
        { hata: "Yalnızca bir koordinatın simetriğini alıp diğerini sabit bırakmak", uretir: "Tek koordinatı doğru, öbürü orijinal kalmış nokta" },
        { hata: "y=x simetrisinde koordinatları değiştirirken işaret de çevirmek", uretir: "(y,x) yerine (−y,−x)" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      ornek: {
        soru: "A(3,−2) noktasının M(1,4) noktasına göre simetriği hangi noktadır?",
        cevap: "A′=(2⋅1−3, 2⋅4−(−2))=(−1, 10)",
      },
    },
  ],
};

export default kb;
