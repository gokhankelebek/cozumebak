import type { TopicSoruTipleri } from "./types";

// Sonsuzda Limit ve Asimptot (AYT · Limit ve Süreklilik). Teacher's catalogue of
// how ÖSYM asks this topic. Ordered easy→hard. Every örnek is hand-verified;
// celdiriciler map each classic wrong answer to the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "sonsuzda-limit-asimptot",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "sonsuzda-limit-01-dereceler-esit",
      ad: "Rasyonel fonksiyonda x→∞ limiti (dereceler eşit)",
      aciklama:
        "Pay ve payda derecesi eşit rasyonel ifadenin sonsuzdaki limiti. Cevap baş katsayıların oranı; konunun ısınma sorusu.",
      yontem: [
        "Pay ve paydanın derecesini karşılaştır; eşitse limit baş katsayıların oranıdır.",
        "İstersen kanıtla: pay ve paydayı en büyük kuvvete böl, 1/x'li terimler 0'a gider.",
        "Düşük dereceli terimler ve sabitler sonucu ETKİLEMEZ.",
      ],
      celdiriciler: [
        { hata: "Baş katsayılar yerine sabit terimlerin oranını almak", uretir: "Sabitlerin oranı — burada −1/5 gibi ilgisiz bir kesir" },
        { hata: "x'i yerine büyük sayı koyup elde işlem yapmaya çalışmak", uretir: "Yuvarlama kaynaklı yakın ama yanlış bir değer, zaman kaybı" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "lim(x→∞) (4x²+3x−1)/(2x²+5) kaçtır?",
        cevap: "Dereceler eşit (2=2); limit baş katsayıların oranı 4/2 = 2",
      },
    },
    {
      id: "sonsuzda-limit-02-dereceler-farkli",
      ad: "Derece karşılaştırma: pay<payda → 0, pay>payda → ±∞",
      aciklama:
        "Dereceler farklıysa limit ya 0 ya da ±∞. pay>payda durumunda işaret, baş katsayıların işareti ve limitin yönüyle (x→∞ mu −∞ mu) belirlenir.",
      yontem: [
        "Pay derecesi < payda derecesi ⇒ limit 0.",
        "Pay derecesi > payda derecesi ⇒ limit ±∞; işareti baş katsayı oranı ve yön belirler.",
        "x→−∞ ise tek dereceli baş terimlerin işaret değiştirdiğini unutma.",
      ],
      celdiriciler: [
        { hata: "Dereceleri hiç karşılaştırmadan katsayı oranı almak", uretir: "0 olacak limitte 3/1 = 3 gibi bir kesir" },
        { hata: "pay>payda ve x→−∞ iken işaret analizini atlamak", uretir: "+∞ yerine −∞ (veya tersi)" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "lim(x→∞) (3x+5)/(x²+1) kaçtır?",
        cevap: "Pay derecesi 1 < payda derecesi 2 ⇒ limit 0",
      },
    },
    {
      id: "sonsuzda-limit-03-yatay-asimptot-parametre",
      ad: "Yatay asimptottan parametre bulma",
      aciklama:
        "Rasyonel fonksiyonun yatay asimptotu verilir, katsayıdaki bilinmeyen istenir. Yatay asimptot = x→±∞ limitidir; dereceler eşitse baş katsayı oranı.",
      yontem: [
        "Yatay asimptot y=k ⇔ lim(x→∞) f(x) = k.",
        "Dereceler eşitse baş katsayıların oranını k'ya eşitle.",
        "Bilinmeyeni çöz; soru çoğunlukla a'nın kendisini değil 2a−3 gibi bir ifadeyi ister — son adımı atlama.",
      ],
      celdiriciler: [
        { hata: "Yatay asimptotu payda sıfırıyla karıştırmak", uretir: "Parametre yerine düşey asimptot apsisi üzerinden ilgisiz değer" },
        { hata: "a'yı bulup soruda istenen ifadeyi hesaplamayı unutmak", uretir: "İstenen 2a+1 iken seçeneklerde duran a değeri" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "f(x)=((2a+1)x²+x)/(3x²−2) fonksiyonunun yatay asimptotu y=3 ise a kaçtır?",
        cevap: "Dereceler eşit ⇒ (2a+1)/3 = 3 ⇒ 2a+1 = 9 ⇒ a = 4",
      },
    },
    {
      id: "sonsuzda-limit-04-dusey-asimptot-sadelesme",
      ad: "Düşey asimptot bulma (sadeleşen çarpan tuzağı)",
      aciklama:
        "Payda sıfırları düşey asimptot ADAYIDIR, garantisi değil. Pay ile sadeleşen çarpanın sıfırı asimptot değil deliktir; ÖSYM bu tuzağı çok sever.",
      yontem: [
        "Pay ve paydayı çarpanlarına ayır.",
        "Ortak çarpanları sadeleştir; sadeleşen çarpanın sıfırında DELİK vardır, asimptot yoktur.",
        "Sadeleşmiş paydayı sıfır yapan (payı sıfır yapmayan) x değerleri düşey asimptottur.",
      ],
      celdiriciler: [
        { hata: "Paydanın her sıfırını düşey asimptot saymak", uretir: "Asimptot sayısını 1 fazla bulmak (delik de sayılmış)" },
        { hata: "Payın sıfırını düşey asimptot sanmak", uretir: "Pay kökünden gelen ilgisiz bir apsis" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["limit-hesaplama"],
      ornek: {
        soru: "f(x)=(x−2)/(x²−4) fonksiyonunun düşey asimptotu hangi doğrudur?",
        cevap: "x²−4=(x−2)(x+2); (x−2) sadeleşir ⇒ f(x)=1/(x+2). x=2 delik, tek düşey asimptot x=−2",
      },
    },
    {
      id: "sonsuzda-limit-05-asimptotlardan-parametre",
      ad: "Düşey + yatay asimptot birlikte: iki parametre",
      aciklama:
        "f(x)=(ax+b)/(x+c) tipinde hem düşey hem yatay asimptot verilip katsayılar istenir. İki bilgi iki denklem üretir.",
      yontem: [
        "Düşey asimptot x=d ⇒ payda x=d'de sıfır: paydadan bir denklem.",
        "Yatay asimptot y=k ⇒ baş katsayıların oranı k: paydan bir denklem.",
        "Bilinmeyenleri çöz, istenen ifadeyi (toplam/çarpım) hesapla.",
      ],
      celdiriciler: [
        { hata: "Düşey asimptot x=−2 iken paydaya b=−2 yazmak (işaret)", uretir: "b'nin işaretçe tersi, toplam/çarpım kayması" },
        { hata: "Yatay asimptot bilgisini pay sıfırına bağlamak", uretir: "a için kökten türetilmiş ilgisiz değer" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "f(x)=(ax+1)/(x+b) fonksiyonunun düşey asimptotu x=−2, yatay asimptotu y=3 ise a+b kaçtır?",
        cevap: "Payda: −2+b=0 ⇒ b=2; yatay: a/1=3 ⇒ a=3. a+b=5",
      },
    },
    {
      id: "sonsuzda-limit-06-eslenik",
      ad: "∞−∞ belirsizliği: köklü fark (eşlenik)",
      aciklama:
        "lim(x→∞) (√(x²+bx)−x) tipi. Doğrudan ∞−∞ belirsizliği; eşlenikle çarpıp bölerek kurtarılır. Hızlı sonuç: b/2.",
      yontem: [
        "Eşleniği (√(x²+bx)+x) ile çarp ve böl: pay x²+bx−x² = bx olur.",
        "Pay ve paydayı x'e böl: b/(√(1+b/x)+1).",
        "x→∞ iken b/x→0 ⇒ limit b/(1+1) = b/2. Kontrol için bu kısayolu ezberle.",
      ],
      celdiriciler: [
        { hata: "√(x²+bx) ≈ x deyip farkı doğrudan 0 saymak", uretir: "0 (belirsizlik çözülmeden verilen cevap)" },
        { hata: "Eşlenikten sonra paydayı unutup limiti b almak", uretir: "Doğru cevabın 2 katı (6x/... yerine 6)" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["limit-hesaplama"],
      ornek: {
        soru: "lim(x→∞) (√(x²+6x) − x) kaçtır?",
        cevap: "Eşlenikle: 6x/(√(x²+6x)+x) = 6/(√(1+6/x)+1) → 6/2 = 3",
      },
    },
    {
      id: "sonsuzda-limit-07-eksi-sonsuz-kok",
      ad: "x→−∞'da köklü ifade (|x| işaret tuzağı)",
      aciklama:
        "√(a²x²+…) içeren ifadenin x→−∞ limiti. √(x²)=|x| ve x<0 için |x|=−x olduğundan işaret değişir; konunun en seçici sorusu.",
      yontem: [
        "Kökün içinden x²'yi çek: √(a²x²+bx) = |x|·√(a²+b/x).",
        "x→−∞ için |x| = −x yaz — kritik adım budur.",
        "Pay ve paydayı x'e bölüp 1/x'li terimleri 0'a gönder; işareti son kez kontrol et.",
      ],
      celdiriciler: [
        { hata: "x→−∞ iken |x|=x almak (işareti unutmak)", uretir: "Doğru cevabın işaretçe tersi (−2 yerine +2)" },
        { hata: "Yönü hiç düşünmeden katsayı oranı yazmak", uretir: "Pozitif katsayı oranı — işaretsiz yanlış değer" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      ornek: {
        soru: "lim(x→−∞) √(4x²+x)/(x+3) kaçtır?",
        cevap: "√(4x²+x)=|x|√(4+1/x)=−x√(4+1/x) (x<0). Bölünce −√4/1 = −2",
      },
    },
  ],
};

export default kb;
