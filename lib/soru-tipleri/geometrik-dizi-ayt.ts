import type { TopicSoruTipleri } from "./types";

// Geometrik Dizi (AYT · Diziler). Teacher's catalogue of how ÖSYM asks this
// topic. Diziler kümesinin zor ayağı; sonsuz toplam ve aritmetik-geometrik
// karma sorular ayırt edici sorulardır. Ordered easy→hard. Every örnek is
// hand-verified; celdiriciler map each classic wrong answer to its mistake.
const kb: TopicSoruTipleri = {
  slug: "geometrik-dizi-ayt",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "geometrik-dizi-ayt-01-genel-terim",
      ad: "Genel terim formülüyle terim bulma (aₙ = a₁⋅rⁿ⁻¹)",
      aciklama:
        "İlk terim ve ortak çarpan verilir, bir terim istenir. Üssün (n−1) olması tek kritik noktadır.",
      yontem: [
        "Formülü yaz: aₙ = a₁ ⋅ rⁿ⁻¹.",
        "Üssü (n−1) olarak hesapla — a₆ için r beş kez çarpılır.",
        "Kuvveti alıp a₁ ile çarp.",
      ],
      celdiriciler: [
        { hata: "Üssü n almak (a₁⋅rⁿ)", uretir: "a₆ için 3⋅2⁶=192" },
        { hata: "Üssü (n−2) almak", uretir: "a₆ için 3⋅2⁴=48" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "a₁=3, r=2 olan geometrik dizide a₆ kaçtır?", cevap: "a₆=3⋅2⁵=3⋅32=96" },
    },
    {
      id: "geometrik-dizi-ayt-02-iki-terimden-r",
      ad: "İki terimden r ve a₁ çıkarma",
      aciklama:
        "İki uzak terim verilir; r, a₁ veya üçüncü bir terim istenir. Kısa yol: terimlerin oranı, indis farkı kadar r kuvveti verir.",
      yontem: [
        "Oranı kur: a₅/a₂ = r⁵⁻² = r³.",
        "r'yi çöz: r³ = 48/6 = 8 ⇒ r = 2.",
        "a₁ = a₂/r ile geri sar; istenen terimi genel terimle hesapla.",
      ],
      celdiriciler: [
        { hata: "Oranı doğrudan r sanmak (r=8)", uretir: "Devasa, seçeneklere oturmayan terim değerleri" },
        { hata: "İndis farkını 3 yerine 5 almak (r⁵=8)", uretir: "r irrasyonel — soru 'çözülemiyor' hissi" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "Bir geometrik dizide a₂=6 ve a₅=48 ise a₇ kaçtır?",
        cevap: "r³=48/6=8 ⇒ r=2; a₁=6/2=3; a₇=3⋅2⁶=192",
      },
    },
    {
      id: "geometrik-dizi-ayt-03-ardisik-uc-terim",
      ad: "Ardışık üç terim — geometrik orta (x'li terimler)",
      aciklama:
        "x'e bağlı üç ifade sırayla geometrik dizi oluşturur. Ortanca terimin karesi, komşuların çarpımına eşittir.",
      yontem: [
        "Koşulu yaz: (ortanca)² = (baş)⋅(son).",
        "x denklemini çöz; x² terimleri genelde sadeleşir.",
        "Terimleri hesaplayıp oranların eşitliğini KONTROL et (r aynı çıkmalı; terimler 0 olmamalı).",
      ],
      celdiriciler: [
        { hata: "Aritmetik orta koşulunu (2⋅ortanca = baş+son) uygulamak", uretir: "2x+8=2x+12 ⇒ 8=12 çelişkisi" },
        { hata: "Kare almadan ortanca = baş⋅son yazmak", uretir: "x²+11x−4=0 gibi ilgisiz denklem" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "x, x+4, x+12 sayıları bu sırayla geometrik dizi oluşturuyorsa x kaçtır?",
        cevap: "(x+4)²=x(x+12) ⇒ x²+8x+16=x²+12x ⇒ 16=4x ⇒ x=4 (terimler 4, 8, 16; r=2)",
      },
    },
    {
      id: "geometrik-dizi-ayt-04-toplam-sn",
      ad: "İlk n terim toplamı (r ≠ 1)",
      aciklama:
        "a₁ ve r verilir, ilk n terimin toplamı istenir. Formül Sₙ = a₁⋅(rⁿ−1)/(r−1); pay ve paydadaki işaret uyumu kritiktir.",
      yontem: [
        "Formülü yaz: Sₙ = a₁⋅(rⁿ−1)/(r−1) (r>1 için bu biçim pratik).",
        "rⁿ kuvvetini hesapla, formüle koy.",
        "|r|<1 ise Sₙ = a₁⋅(1−rⁿ)/(1−r) biçimi işaret hatasını önler.",
      ],
      celdiriciler: [
        { hata: "Pay ve paydada işaret uyumsuzluğu (rⁿ−1 üstte, 1−r altta)", uretir: "S₅ için −242" },
        { hata: "Toplam yerine son terimi hesaplamak", uretir: "a₅=2⋅3⁴=162" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "a₁=2, r=3 olan geometrik dizide ilk 5 terimin toplamı kaçtır?",
        cevap: "S₅=2⋅(3⁵−1)/(3−1)=2⋅242/2=242",
      },
    },
    {
      id: "geometrik-dizi-ayt-05-geometrik-orta-simetri",
      ad: "Eşit uzaklık (indis toplamı) simetrisi — çarpım verisi",
      aciklama:
        "İki terimin çarpımı verilir; indis toplamının yarısındaki terim istenir. aₚ⋅a_q = (a_{(p+q)/2})² özdeşliği a₁ ve r bulunmadan sonuç verir.",
      yontem: [
        "Çarpımı aç: a₃⋅a₇ = (a₁r²)(a₁r⁶) = a₁²r⁸ = (a₁r⁴)² = a₅².",
        "Verilen değere eşitle: a₅² = 81.",
        "Karekök al; dizinin işaret bilgisine göre (+/−) kökü seç.",
      ],
      celdiriciler: [
        { hata: "Kareyi atlayıp a₃⋅a₇ = a₅ sanmak", uretir: "81" },
        { hata: "Pozitiflik şartına bakmadan negatif kökü de geçerli saymak", uretir: "−9" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      ornek: {
        soru: "Pozitif terimli bir geometrik dizide a₃⋅a₇=81 olduğuna göre a₅ kaçtır?",
        cevap: "a₃⋅a₇=a₅²=81 ⇒ a₅=9 (pozitif terimli olduğundan −9 elenir)",
      },
    },
    {
      id: "geometrik-dizi-ayt-06-sonsuz-toplam",
      ad: "Sonsuz geometrik seri toplamı (|r| < 1)",
      aciklama:
        "S = a₁/(1−r) formülü; ya toplam istenir ya da toplamdan r/a₁ geri çözülür. Zıplayan top, boyanan kare gibi sözel kılıflarla da gelir.",
      yontem: [
        "Yakınsama şartını kontrol et: |r| < 1 olmalı, yoksa sonsuz toplam yoktur.",
        "Formülü uygula: S = a₁/(1−r).",
        "Ters soruda (S ve a₁ verilip r istenirse) denklemi r için çöz.",
      ],
      celdiriciler: [
        { hata: "Paydayı (1−r) yerine r almak (S=a₁/r)", uretir: "12/r=16 ⇒ r=3/4" },
        { hata: "1−r=S/a₁ kurmak (oranı ters çevirmek)", uretir: "1−r=4/3 ⇒ r=−1/3" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["limit-kavrami"],
      ornek: {
        soru: "İlk terimi 12 olan sonsuz geometrik serinin toplamı 16 ise ortak çarpan r kaçtır?",
        cevap: "12/(1−r)=16 ⇒ 1−r=3/4 ⇒ r=1/4 (|r|<1 sağlanır)",
      },
    },
    {
      id: "geometrik-dizi-ayt-07-aritmetik-geometrik-karma",
      ad: "Aritmetik + geometrik karma (klasik dönüşüm sorusu)",
      aciklama:
        "Üç sayı aritmetik dizidir; birine sabit eklenince geometrik dizi oluşur. İki koşulun birlikte kullanıldığı, kümenin ayırt edici sorusu.",
      yontem: [
        "Aritmetik üçlüyü simetrik seç: m−d, m, m+d; toplam verildiyse m hemen çıkar.",
        "Ekleme sonrası geometrik orta koşulunu yaz: (ortanca)² = (yeni baş)⋅(yeni son).",
        "d denklemini çöz; birden fazla kök çıkarsa 'artan/pozitif' gibi ek şartla ele.",
      ],
      celdiriciler: [
        { hata: "d=−6 kökünü elemeden azalan diziyi (12, 6, 0) kabul etmek", uretir: "En büyük sayı olarak 12" },
        { hata: "Eklemeyi yanlış terime yapmak (ortancaya 3 ekleyip 81=36−d² kurmak)", uretir: "Çözümsüz denklem" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["aritmetik-dizi-ayt", "ikinci-derece-denklem-ayt"],
      ornek: {
        soru: "Artan bir aritmetik dizi oluşturan üç sayının toplamı 18'dir. Üçüncü sayıya 3 eklendiğinde sayılar geometrik dizi oluşturuyor. Aritmetik dizideki en büyük sayı kaçtır?",
        cevap: "6−d, 6, 6+d; 6²=(6−d)(9+d) ⇒ d²+3d−18=0 ⇒ d=3 (artan) ⇒ sayılar 3, 6, 9; en büyük 9 (kontrol: 3, 6, 12 geometrik, r=2)",
      },
    },
  ],
};

export default kb;
