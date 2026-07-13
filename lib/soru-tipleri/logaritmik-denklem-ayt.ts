import type { TopicSoruTipleri } from "./types";

// Logaritmik Denklem (AYT · Üstel-Logaritma). Teacher's catalogue of how ÖSYM
// asks this topic. Ordered easy→hard. Every örnek is hand-verified — in this
// topic the classic elimination is a root that fails the tanım kümesi check;
// celdiriciler map each wrong answer to the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "logaritmik-denklem-ayt",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "logaritmik-denklem-01-temel",
      ad: "Temel denklem: log_a(x)=b ⇒ x=aᵇ",
      aciklama:
        "Tek logaritmalı denklemin tanımdan üslü biçime çevrilmesi. İç fonksiyon birinci derecedense iki adımda biter; konunun kapı sorusudur.",
      yontem: [
        "Tanımı uygula: log_a(iç)=b ⇒ iç=aᵇ.",
        "İçteki birinci dereceden denklemi çöz.",
        "Bulunan x'i içte yerine koyup iç>0 olduğunu SAĞLA (tek logda genellikle sağlar ama alışkanlık kur).",
      ],
      celdiriciler: [
        { hata: "iç=aᵇ yerine iç=b·a yazmak (üs almayı çarpma sanmak)", uretir: "Küçük, doğrusal yanlış kök" },
        { hata: "iç=bᵃ yazmak (taban ile sonucu ters çevirmek)", uretir: "Taban-üs takası yapılmış yanlış kök" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "log₃(2x+1)=2 ise x kaçtır?", cevap: "2x+1=3²=9 ⇒ x=4 (iç=9>0, sağlar)" },
    },
    {
      id: "logaritmik-denklem-02-icler-esit",
      ad: "İki logun eşitliği (içler eşit + TANIM KONTROLÜ)",
      aciklama:
        "log_a f(x)=log_a g(x) ⇒ f(x)=g(x); çıkan her kök iki içte de pozitiflik kontrolünden geçirilir. Sağlamayan kökün atılması bu tipin varlık sebebidir.",
      yontem: [
        "Tabanlar aynıysa içleri eşitle: f(x)=g(x).",
        "Oluşan (genelde ikinci dereceden) denklemi çöz.",
        "HER kökü orijinal denklemde iç>0 şartıyla SAĞLA; en az bir içi negatif/sıfır yapan kök ATILIR.",
      ],
      celdiriciler: [
        { hata: "Tanım kontrolü yapmadan iki kökü de kabul etmek", uretir: "Kök sayısını/toplamını fazla bulmak — en klasik yanlış şık" },
        { hata: "Kontrolü yalnız bir iç fonksiyonda yapmak", uretir: "Diğer içi negatif yapan sahte kökü kabul etmek" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["ikinci-derece-denklem-ayt"],
      ornek: { soru: "log₃(x²−4)=log₃(3x) denkleminin çözüm kümesi nedir?", cevap: "x²−4=3x ⇒ x²−3x−4=0 ⇒ x=4 veya x=−1; x=−1'de iç negatif, atılır ⇒ Ç={4}" },
    },
    {
      id: "logaritmik-denklem-03-degisken-degistirme",
      ad: "log·log denklemi — değişken değiştirme",
      aciklama:
        "(log_a x)² − k·log_a x + m = 0 tipi: t=log_a x ile ikinci dereceden denkleme iner. Kökler çarpımı/toplamı istenerek üs kuralıyla bitirilir.",
      yontem: [
        "t=log_a x koy (x>0 tanım şartını not et); t için ikinci dereceden denklemi çöz.",
        "Her t kökünden geri dön: x=aᵗ.",
        "Çarpım istenirse x₁·x₂=a^(t₁+t₂) kısayolunu kullan (Vieta: t₁+t₂ hazır).",
      ],
      celdiriciler: [
        { hata: "t köklerini doğrudan x sanmak (geri dönüşü unutmak)", uretir: "x₁·x₂ yerine t₁·t₂ — küçük yanlış değer" },
        { hata: "(log x)² ile log(x²)=2log x'i karıştırmak", uretir: "Denklemi doğrusallaştırıp tek (yanlış) kök bulmak" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["ikinci-derece-denklem-ayt"],
      ornek: { soru: "(log₃x)²−4·log₃x+3=0 denkleminin kökleri x₁, x₂ ise x₁·x₂ kaçtır?", cevap: "t²−4t+3=0 ⇒ t=1, t=3 ⇒ x=3, x=27 ⇒ çarpım 81 (=3^(1+3))" },
    },
    {
      id: "logaritmik-denklem-04-ustel-log-karisik",
      ad: "Üstel–logaritmik karışık denklem",
      aciklama:
        "Taban eşitlenemeyen üstel denklem (2ˣ=5 tipi) logaritmayla çözülür; cevap log'lu ifade olarak bırakılır. Üstel ve log konularının köprü sorusu.",
      yontem: [
        "Tabanlar eşitlenemiyorsa iki tarafın aynı tabanda logunu al (pratikte üs tabanını seç).",
        "Üs kuralıyla üssü indir: log_a(aᵘ)=u.",
        "x'i yalnız bırak; cevabı log₂5, 1+log₂5 gibi kapalı biçimde bırakmaya alış.",
      ],
      celdiriciler: [
        { hata: "2ˣ=5'ten x=5/2 yazmak (üsteli doğrusal çözmek)", uretir: "Log içermeyen kesirli yanlış kök" },
        { hata: "log alırken yalnız bir tarafın logunu almak", uretir: "Dengesiz denklem — tutarsız kök" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["ustel-fonksiyon-ayt"],
      ornek: { soru: "2^(x−1)=5 olduğuna göre x kaçtır?", cevap: "x−1=log₂5 ⇒ x=1+log₂5" },
    },
    {
      id: "logaritmik-denklem-05-toplam-fark",
      ad: "Toplam–fark kurallı denklem (negatif dal elenir)",
      aciklama:
        "log(x)+log(x−3)=1 tipi: loglar tek çatıda birleştirilir, üslü biçime geçilir; ikinci derecedenin negatif dalı tanım kümesince elenir. ÖSYM'nin imza sorusu.",
      yontem: [
        "Önce tanım kümesini yaz: her iç>0 (örnekte x>0 ve x>3 ⇒ x>3).",
        "Kuralla birleştir: log A+log B=log(A·B); denklemi iç·iç=taban^sağ biçimine getir.",
        "İkinci dereceden denklemi çöz; tanım kümesi dışındaki kök ATILIR, kalan tek kök cevaptır.",
      ],
      celdiriciler: [
        { hata: "Negatif dalı elemeden 'köklerin toplamı/çarpımı' hesaplamak", uretir: "Vieta'dan gelen ama geçersiz kökü içeren yanlış değer" },
        { hata: "log A+log B'yi log(A+B) olarak birleştirmek", uretir: "Doğrusal denklemden çıkan ilgisiz kök" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["ikinci-derece-denklem-ayt", "logaritma-kavrami-ayt"],
      ornek: { soru: "log x + log(x−3) = 1 denklemini sağlayan x kaçtır?", cevap: "x(x−3)=10¹ ⇒ x²−3x−10=0 ⇒ x=5 veya x=−2; x=−2 tanım dışı, atılır ⇒ x=5" },
    },
    {
      id: "logaritmik-denklem-06-esitsizlik",
      ad: "Logaritmik eşitsizlik (tabana göre yön kuralı)",
      aciklama:
        "Taban>1 ise yön korunur, 0<taban<1 ise yön DÖNER; sonuç mutlaka tanım kümesiyle kesiştirilir. İki tuzak üst üste: yön ve tanım.",
      yontem: [
        "Tanım kümesini önce yaz: iç>0.",
        "Sağ tarafı aynı tabanda log olarak yaz (k=log_a aᵏ).",
        "Taban>1 ⇒ içler arasında yön aynı; 0<taban<1 ⇒ yön ters çevrilir.",
        "Bulduğun aralığı tanım kümesiyle KESİŞTİR; tam sayı sorusu ise uç noktaların dahilliğini kontrol et.",
      ],
      celdiriciler: [
        { hata: "0<taban<1 iken yönü çevirmemek", uretir: "Tam ters aralık — simetrik yanlış şık" },
        { hata: "Tanım kümesiyle kesiştirmeyi unutmak", uretir: "İç fonksiyonu negatif yapan tam sayıları da saymak" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["ikinci-derece-esitsizlik-ayt"],
      ornek: { soru: "log_½(x−3) > −2 eşitsizliğini sağlayan tam sayıların toplamı kaçtır?", cevap: "Tanım: x>3; −2=log_½4, taban<1 yön döner ⇒ x−3<4 ⇒ 3<x<7; tam sayılar 4,5,6 ⇒ toplam 15" },
    },
  ],
};

export default kb;
