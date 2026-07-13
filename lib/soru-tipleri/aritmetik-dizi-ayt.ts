import type { TopicSoruTipleri } from "./types";

// Aritmetik Dizi (AYT · Diziler). Teacher's catalogue of how ÖSYM asks this
// topic. Diziler kümesinin en güvenilir ayağı; neredeyse her yıl bir aritmetik
// dizi sorusu vardır. Ordered easy→hard. Every örnek is hand-verified;
// celdiriciler map each classic wrong answer to the exact mistake behind it.
const kb: TopicSoruTipleri = {
  slug: "aritmetik-dizi-ayt",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "aritmetik-dizi-ayt-01-genel-terim",
      ad: "Genel terim formülüyle terim bulma (aₙ = a₁ + (n−1)d)",
      aciklama:
        "İlk terim ve ortak fark verilir, uzak bir terim istenir. Formülün (n−1) çarpanı tek kritik noktadır.",
      yontem: [
        "Formülü yaz: aₙ = a₁ + (n−1)⋅d.",
        "(n−1)'i hesapla — n değil! a₁₂ için 11 adım atılır.",
        "Değerleri koy, hesapla.",
      ],
      celdiriciler: [
        { hata: "(n−1) yerine n ile çarpmak (a₁ + n⋅d)", uretir: "a₁₂ için 5+36=41" },
        { hata: "(n−1) yerine (n−2) almak", uretir: "a₁₂ için 5+30=35" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "a₁=5, d=3 olan aritmetik dizide a₁₂ kaçtır?", cevap: "a₁₂=5+(12−1)⋅3=5+33=38" },
    },
    {
      id: "aritmetik-dizi-ayt-02-iki-terimden-sistem",
      ad: "İki terimden a₁ ve d çıkarma",
      aciklama:
        "İki uzak terim verilir (a₃=7, a₈=22 tipi); a₁, d veya üçüncü bir terim istenir. Kısa yol: iki terim arasındaki fark, indis farkı kadar d içerir.",
      yontem: [
        "Terim farkını indis farkına bağla: a₈ − a₃ = (8−3)d = 5d.",
        "d'yi bul: 5d = 22−7 = 15 ⇒ d = 3.",
        "a₁ = a₃ − 2d ile geri sar; istenen terimi genel terimle hesapla.",
      ],
      celdiriciler: [
        { hata: "Farkı indis farkı yerine büyük indise bölmek (d=15/8)", uretir: "Kesirli, formüle oturmayan d" },
        { hata: "Geri sararken a₁ = a₃ − 3d almak (2 yerine 3 adım)", uretir: "a₁=−2, a₁₅=40" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "Bir aritmetik dizide a₃=7 ve a₈=22 ise a₁₅ kaçtır?",
        cevap: "5d=15 ⇒ d=3; a₁=7−2⋅3=1; a₁₅=1+14⋅3=43",
      },
    },
    {
      id: "aritmetik-dizi-ayt-03-ardisik-uc-terim",
      ad: "Ardışık üç terim — aritmetik orta (x'li terimler)",
      aciklama:
        "x'e bağlı üç ifade sırayla aritmetik dizi oluşturur; x veya terimler istenir. Ortanca terim, komşularının aritmetik ortalamasıdır.",
      yontem: [
        "Koşulu yaz: 2⋅(ortanca) = (baş) + (son).",
        "x denklemini çöz.",
        "Terimleri x ile hesaplayıp farkların eşitliğini KONTROL et (d aynı çıkmalı).",
      ],
      celdiriciler: [
        { hata: "2 katını unutup ortanca = baş + son yazmak", uretir: "2x+2=6x−4 ⇒ x=3/2" },
        { hata: "Geometrik orta koşulunu ((ortanca)² = baş⋅son) uygulamak", uretir: "İkinci dereceden ilgisiz denklem" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "x−1, 2x+2, 5x−3 sayıları bu sırayla aritmetik dizi oluşturuyorsa x kaçtır?",
        cevap: "2(2x+2)=(x−1)+(5x−3) ⇒ 4x+4=6x−4 ⇒ x=4 (terimler 3, 10, 17; d=7)",
      },
    },
    {
      id: "aritmetik-dizi-ayt-04-toplam-sn",
      ad: "İlk n terim toplamı (Sₙ)",
      aciklama:
        "a₁ ve d (veya a₁ ve aₙ) verilir, ilk n terimin toplamı istenir. Sözel kılıflı hâli (tiyatro koltuğu, kule tuğlası) AYT'nin sevdiği ambalajdır.",
      yontem: [
        "Son terimi bul: aₙ = a₁ + (n−1)d.",
        "Toplam formülünü uygula: Sₙ = n⋅(a₁ + aₙ)/2.",
        "Alternatif: Sₙ = n⋅(2a₁ + (n−1)d)/2 — son terimi ayrıca bulmak istemezsen.",
      ],
      celdiriciler: [
        { hata: "2'ye bölmeyi unutmak (Sₙ = n(a₁+aₙ))", uretir: "S₂₀ için 1640" },
        { hata: "Son terimde (n−1) yerine n almak (a₂₀=83)", uretir: "S₂₀ için 10⋅86=860" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "a₁=3, d=4 olan aritmetik dizide ilk 20 terimin toplamı kaçtır?",
        cevap: "a₂₀=3+19⋅4=79; S₂₀=20⋅(3+79)/2=10⋅82=820",
      },
    },
    {
      id: "aritmetik-dizi-ayt-05-aritmetik-ortalar",
      ad: "İki sayı arasına aritmetik ortalar yerleştirme",
      aciklama:
        "a ile b arasına k tane sayı yerleştirilip aritmetik dizi oluşturulur; d veya ortalardan biri istenir. Toplam terim sayısı k+2'dir — kritik sayma budur.",
      yontem: [
        "Toplam terim sayısını kur: araya k sayı girince dizi k+2 terimli olur.",
        "Son terimi bağla: b = a + (k+1)⋅d, d'yi çöz.",
        "İstenen ortayı a'dan adım adım ilerleyerek yaz.",
      ],
      celdiriciler: [
        { hata: "Farkı araya konan sayı adedine bölmek (d=24/5)", uretir: "d=4,8 gibi kesirli değer" },
        { hata: "Terim sayısını k+2 yerine k+2+1 sayıp d=24/7 almak", uretir: "d≈3,43 gibi kesirli değer" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      ornek: {
        soru: "5 ile 29 arasına aritmetik dizi oluşturacak biçimde 5 sayı yerleştiriliyor. Ortak fark d kaçtır?",
        cevap: "Dizi 7 terimli: 29=5+6d ⇒ d=4 (ortalar 9, 13, 17, 21, 25)",
      },
    },
    {
      id: "aritmetik-dizi-ayt-06-sn-den-terim",
      ad: "Toplam formülünden terim ve d çıkarma (aₙ = Sₙ − Sₙ₋₁)",
      aciklama:
        "Sₙ, n'nin polinomu olarak verilir; bir terim ya da ortak fark istenir. aₙ = Sₙ − Sₙ₋₁ bağıntısıyla genel terim çekilir; d, n'nin katsayısıdır.",
      yontem: [
        "aₙ = Sₙ − Sₙ₋₁ farkını n cinsinden aç (n ≥ 2).",
        "Sadeleştir: Sₙ=3n²+n için aₙ = 6n−2 çıkar.",
        "a₁ = S₁ ile ilk terimi doğrula; d = aₙ'deki n katsayısıdır (burada 6).",
      ],
      celdiriciler: [
        { hata: "İstenen terimi doğrudan Sₙ'de yerine koymak", uretir: "a₇ için S₇=154" },
        { hata: "Sₙ₋₁ yerine Sₙ₊₁ ile fark almak (bir sonraki terimi bulmak)", uretir: "a₈=46" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["dizi-kavrami-ayt"],
      ornek: {
        soru: "Bir aritmetik dizide Sₙ=3n²+n olduğuna göre a₇ kaçtır?",
        cevap: "aₙ=Sₙ−Sₙ₋₁=6n−2 ⇒ a₇=6⋅7−2=40 (kontrol: S₇−S₆=154−114=40)",
      },
    },
    {
      id: "aritmetik-dizi-ayt-07-esit-uzaklik-simetri",
      ad: "Eşit uzaklık (indis toplamı) simetrisiyle toplam",
      aciklama:
        "a₁ ve d tek tek bulunamayacak kadar az bilgi verilir; ama verilen terim çiftinin indis toplamı, istenen toplamın simetrisine denk düşer. AYT'nin zarif kısa-yol sorusu.",
      yontem: [
        "Kuralı hatırla: indis toplamları eşitse terim toplamları eşittir (aₚ+a_q = aᵣ+aₛ, p+q=r+s).",
        "İstenen Sₙ'yi uç çift üzerinden yaz: Sₙ = n⋅(a₁+aₙ)/2.",
        "a₁+aₙ'yi verilen çifte eşitle (4+12 = 1+15 = 16) ve hesapla.",
      ],
      celdiriciler: [
        { hata: "2'ye bölmeyi unutmak (S₁₅=15⋅30)", uretir: "450" },
        { hata: "Terim sayısını indis toplamından bir fazla alıp S₁₆ hesaplamak", uretir: "16⋅30/2=240" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      ornek: {
        soru: "Bir aritmetik dizide a₄+a₁₂=30 olduğuna göre ilk 15 terimin toplamı S₁₅ kaçtır?",
        cevap: "4+12=1+15 olduğundan a₁+a₁₅=30; S₁₅=15⋅30/2=225",
      },
    },
  ],
};

export default kb;
