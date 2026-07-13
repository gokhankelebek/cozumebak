import type { TopicSoruTipleri } from "./types";

// Logaritma Kavramı (AYT · Üstel-Logaritma). Teacher's catalogue of how ÖSYM
// asks this topic. Ordered easy→hard. Every örnek is hand-verified; celdiriciler
// map each classic wrong answer to the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "logaritma-kavrami-ayt",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "logaritma-kavrami-01-tanim-cevirme",
      ad: "Tanım: üs ↔ logaritma çevirme ve temel değerler",
      aciklama:
        "log_a b=c ⇔ aᶜ=b tanımıyla doğrudan değer hesaplama: log₂8, log 1000, log₅(1/25) gibi. Konunun kapı sorusu.",
      yontem: [
        "Soruyu üs diliyle oku: log_a b = 'a'yı b yapan üs'.",
        "b'yi tabanın kuvveti olarak yaz: 8=2³, 1000=10³, 1/25=5⁻².",
        "Üs cevaptır; log yazımında taban belirtilmemişse taban 10, ln'de taban e'dir.",
      ],
      celdiriciler: [
        { hata: "log_a b'de taban ile içi karıştırmak (b'yi a yapan üs aramak)", uretir: "Doğru cevabın çarpmaya göre tersi (ör. 3 yerine 1/3)" },
        { hata: "1/25 gibi kesirlerde negatif üsü pozitif almak", uretir: "Doğru cevabın işaretçe tersi" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "log₂32 + log 1000 toplamı kaçtır?", cevap: "32=2⁵ ⇒ log₂32=5; 1000=10³ ⇒ log 1000=3; toplam 8" },
    },
    {
      id: "logaritma-kavrami-02-ters-ozdeslikler",
      ad: "log_a(aˣ)=x ve a^(log_a x)=x özdeşlikleri",
      aciklama:
        "Üstel ile logaritmanın birbirini yok ettiği hazır özdeşlikler. Karışık görünen ifade iki satırda sadeleşir; hız sorusudur.",
      yontem: [
        "log_a(aˣ)=x: taban içerideki tabanla aynıysa üs doğrudan dışarı çıkar.",
        "a^(log_a x)=x: üs katındaki log tabanla aynıysa ifade içine eşittir.",
        "Tabanlar aynı DEĞİLSE özdeşlik uygulanmaz; önce taban değiştirme gerekir.",
      ],
      celdiriciler: [
        { hata: "Tabanlar farklıyken özdeşliği uygulamak (ör. 2^(log₄x)=x sanmak)", uretir: "İçerideki sayının kendisi — sadeleşmemiş yanlış değer" },
        { hata: "a^(log_a x) ifadesini log_a x sanmak", uretir: "x yerine logaritmanın kendisi" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "log₄(4⁷) − 2^(log₂3) ifadesinin değeri kaçtır?", cevap: "log₄(4⁷)=7 ve 2^(log₂3)=3 ⇒ 7−3=4" },
    },
    {
      id: "logaritma-kavrami-03-tanim-araligi",
      ad: "Tanım aralığı (iç>0, taban>0 ve taban≠1)",
      aciklama:
        "log_g(x) h(x) ifadesinin tanımlı olduğu x aralığı. Üç koşul birden: iç>0, taban>0, taban≠1; taban≠1 koşulunu unutturma sorusudur.",
      yontem: [
        "İç fonksiyon için h(x)>0 eşitsizliğini çöz.",
        "Taban değişken içeriyorsa g(x)>0 VE g(x)≠1 koşullarını ekle.",
        "Tüm koşulların kesişimini al; tam sayı sayısı isteniyorsa aralıktan çıkarılan noktaya dikkat et.",
      ],
      celdiriciler: [
        { hata: "Taban≠1 koşulunu (g(x)=1 yapan x'i) atlamak", uretir: "Bir fazla tam sayı — klasik yanlış şık" },
        { hata: "İç için h(x)≥0 yazmak (sıfırı dahil etmek)", uretir: "Sınır noktasını içeren yanlış aralık" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["ikinci-derece-esitsizlik-ayt"],
      ornek: { soru: "f(x)=log₍ₓ₋₂₎(8−x) tanımlı olduğuna göre x kaç farklı tam sayı değeri alır?", cevap: "x−2>0, x−2≠1, 8−x>0 ⇒ 2<x<8 ve x≠3; tam sayılar 4,5,6,7 ⇒ 4 tane" },
    },
    {
      id: "logaritma-kavrami-04-kurallar",
      ad: "Log kuralları ile ifade açma / birleştirme",
      aciklama:
        "Çarpım→toplam, bölüm→fark, üs→katsayı kurallarıyla ifadeyi sadeleştirip tek log altında toplama. Tanımla birlikte konunun bel kemiği.",
      yontem: [
        "log_a(x·y)=log_a x+log_a y; log_a(x/y)=log_a x−log_a y; log_a(xⁿ)=n·log_a x.",
        "Toplamları tek log altında birleştir, içi hesapla.",
        "Sonuç tabanın tam kuvvetiyse tanımdan değeri yaz.",
      ],
      celdiriciler: [
        { hata: "log(x+y)=log x+log y sanmak (toplamın logunu dağıtmak)", uretir: "Kural dışı sadeleştirme — tutarsız değer" },
        { hata: "log_a x·log_a y ile log_a(x·y)'yi karıştırmak", uretir: "Toplam yerine çarpım — büyük yanlış değer" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "log 4 + log 25 toplamı kaçtır?", cevap: "log(4·25)=log 100=2" },
    },
    {
      id: "logaritma-kavrami-05-a-b-turetme",
      ad: "log 2=a, log 3=b verilip başka log türetme",
      aciklama:
        "10 tabanında iki değer verilir; istenen sayı 2, 3 ve 10'un çarpım/bölümü olarak yazılıp a,b cinsinden türetilir. log 5=1−a bu tipin anahtarıdır.",
      yontem: [
        "İstenen sayıyı çarpanlara ayır: 45=3²·5, 12=2²·3, 6=2·3.",
        "5'i 10/2 olarak yaz: log 5=log 10−log 2=1−a.",
        "Kuralları uygula, a ve b cinsinden topla.",
      ],
      celdiriciler: [
        { hata: "log 5'i doğrudan 5·log 1 gibi kurmaya çalışmak yerine 1−a'yı bilmemek", uretir: "a,b cinsinden yazılamayan/eksik ifade — yanlış şık eleme" },
        { hata: "log 9=2b yerine log 9=b² yazmak (üs kuralını çarpım sanmak)", uretir: "Katsayı yerine kare — b² içeren yanlış şık" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      ornek: { soru: "log 2=a ve log 3=b ise log 45'in a,b türünden eşiti nedir?", cevap: "45=3²·5 ⇒ log 45=2b+log 5=2b+(1−a)=2b−a+1" },
    },
    {
      id: "logaritma-kavrami-06-taban-degistirme",
      ad: "Taban değiştirme formülü",
      aciklama:
        "log_a b=log_c b/log_c a ile farklı tabanları ortak tabana toplama; log_a b·log_b c=log_a c zincir sadeleşmesi de bu tipin hızlı hali.",
      yontem: [
        "Ortak tabanı, sorudaki sayıların kuvvet ilişkisine göre seç (8 ve 49 varsa taban 2 ve 7 düşün).",
        "log_a b=log_c b/log_c a yaz; üsleri katsayı olarak dışarı al.",
        "Zincir çarpımlarında ardışık paydalar sadeleşir: log_a b·log_b c=log_a c; ayrıca log_a b=1/log_b a.",
      ],
      celdiriciler: [
        { hata: "Formülü ters kurmak: log_a b=log_c a/log_c b", uretir: "Doğru cevabın çarpmaya göre tersi" },
        { hata: "log₈49'da üsleri dışarı alırken 2/3 yerine 3/2 ile çarpmak", uretir: "Katsayısı ters çevrilmiş ifade (2x/3 yerine 3x/2)" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["logaritmik-denklem-ayt"],
      ornek: { soru: "log₂7=x olduğuna göre log₈49'un x türünden eşiti nedir?", cevap: "log₈49=log₂49/log₂8=2log₂7/3=2x/3" },
    },
  ],
};

export default kb;
