import type { TopicSoruTipleri } from "./types";

// Özel Fonksiyon Türevleri (AYT · Türev): trigonometrik, üstel ve logaritmik
// fonksiyonların türevleri, tekil ve zincir kuralıyla. Ordered easy→hard;
// every örnek hand-verified.
const kb: TopicSoruTipleri = {
  slug: "ozel-fonksiyon-turevleri",
  durum: "verified",
  tipler: [
    {
      id: "ozel-turev-01-trigonometrik",
      ad: "Temel trigonometrik türevler",
      aciklama:
        "sin, cos, tan, cot temel türevleri ve toplamları. (sinx)′=cosx, (cosx)′=−sinx, (tanx)′=1/cos²x, (cotx)′=−1/sin²x.",
      yontem: [
        "Her terimin türevini tablodan al; işaretlere dikkat: (cosx)′ negatiftir.",
        "tan ve cot türevlerinde payda karesi (1/cos²x, 1/sin²x).",
        "İstenen açıyı yerine koy (radyan).",
      ],
      celdiriciler: [
        { hata: "(cosx)′ türevini +sinx almak", uretir: "Doğru cevaptan işaretçe sapma" },
        { hata: "(tanx)′ = 1/cosx sanmak (kare unutmak)", uretir: "Ölçekçe yanlış değer" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "f(x)=2sinx+cosx ise f′(0) kaçtır?", cevap: "f′(x)=2cosx−sinx, f′(0)=2" },
    },
    {
      id: "ozel-turev-02-ustel",
      ad: "Üstel fonksiyon türevi (eˣ, aˣ)",
      aciklama: "(eˣ)′=eˣ, (aˣ)′=aˣ·ln a. En sık hata: üstel ile kuvvet kuralını karıştırmak.",
      yontem: [
        "eˣ'in türevi kendisidir.",
        "aˣ'in türevi aˣ·ln a — ln a çarpanını unutma.",
        "Noktayı yerine koy (a⁰=1).",
      ],
      celdiriciler: [
        { hata: "(aˣ)′ = x·aˣ⁻¹ (kuvvet kuralı) sanmak", uretir: "Tümüyle yanlış, tabanı üsse indiren ifade" },
        { hata: "(aˣ)′'de ln a çarpanını unutmak", uretir: "ln a katı kadar hatalı değer" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "f(x)=eˣ+2ˣ ise f′(0) kaçtır?", cevap: "f′(x)=eˣ+2ˣ·ln2, f′(0)=1+ln2" },
    },
    {
      id: "ozel-turev-03-logaritma",
      ad: "Logaritma fonksiyonu türevi (ln x, logₐx)",
      aciklama: "(ln x)′=1/x, (logₐx)′=1/(x·ln a).",
      yontem: [
        "ln x'in türevi 1/x.",
        "logₐx için paydaya ln a ekle: 1/(x·ln a).",
        "Noktayı yerine koy.",
      ],
      celdiriciler: [
        { hata: "(ln x)′ = ln x veya x·ln x sanmak", uretir: "Tümüyle yanlış ifade" },
        { hata: "logₐx türevinde ln a'yı unutmak", uretir: "ln a katı kadar hatalı" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "f(x)=ln x + x ise f′(1) kaçtır?", cevap: "f′(x)=1/x+1, f′(1)=2" },
    },
    {
      id: "ozel-turev-04-zincir-trig",
      ad: "Zincir kuralıyla trigonometrik türev",
      aciklama: "İçi fonksiyon olan trigonometrik ifade: sin(g(x)) gibi. İç türev şart.",
      yontem: [
        "Dış türevi al: [sin(g)]′ = cos(g)·g′.",
        "İç fonksiyonun türeviyle çarp.",
        "İç türevi asla unutma.",
      ],
      celdiriciler: [
        { hata: "İç türevi unutmak", uretir: "Doğru cevabın iç-türev katı kadar küçüğü" },
        { hata: "cos(3x) yerine cos(x) yazmak", uretir: "Yanlış argümanlı değer" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["toplam-fark-formulleri"],
      ornek: { soru: "f(x)=sin(3x) ise f′(0) kaçtır?", cevap: "f′(x)=3cos(3x), f′(0)=3" },
    },
    {
      id: "ozel-turev-05-zincir-ustel",
      ad: "Zincir kuralıyla üstel türev",
      aciklama: "e^(g(x)) veya a^(g(x)). [e^g]′ = e^g·g′.",
      yontem: [
        "e^(g(x))'in türevi kendisi çarpı iç türev: e^(g(x))·g′(x).",
        "İç fonksiyonun türevini ayrı hesapla.",
        "Noktayı yerine koy.",
      ],
      celdiriciler: [
        { hata: "İç türevi unutmak (e^(x²))′ = e^(x²) sanmak", uretir: "2x katı kadar eksik değer" },
        { hata: "Üsü kuvvet kuralıyla indirmek", uretir: "Yanlış polinomsal ifade" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      ornek: { soru: "f(x)=e^(x²) ise f′(1) kaçtır?", cevap: "f′(x)=2x·e^(x²), f′(1)=2e" },
    },
    {
      id: "ozel-turev-06-zincir-log",
      ad: "Zincir kuralıyla logaritmik türev",
      aciklama: "ln(g(x)) türevi = g′(x)/g(x). Sık hata: bölme yapısını g′ ile çarpmayı unutmak.",
      yontem: [
        "[ln(g(x))]′ = 1/g(x) · g′(x) = g′(x)/g(x).",
        "Pay iç türev, payda iç fonksiyon.",
        "Sadeleştir, noktayı koy.",
      ],
      celdiriciler: [
        { hata: "1/g(x) yazıp g′(x) ile çarpmayı unutmak", uretir: "İç türev katı kadar eksik değer" },
        { hata: "Payı/paydayı ters yazmak", uretir: "Tersine çevrilmiş hatalı ifade" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      ornek: { soru: "f(x)=ln(x²+1) ise f′(1) kaçtır?", cevap: "f′(x)=2x/(x²+1), f′(1)=1" },
    },
    {
      id: "ozel-turev-07-carpim-ozel",
      ad: "Çarpım/bölüm ile özel fonksiyon birleşimi",
      aciklama:
        "Bir çarpanı özel fonksiyon olan çarpım (ör. x²·eˣ). Çarpım kuralı + özel fonksiyon türevi birlikte.",
      yontem: [
        "Çarpım kuralını kur: (u·v)′ = u′v + uv′.",
        "Özel fonksiyon çarpanının türevini doğru al (eˣ→eˣ, sinx→cosx…).",
        "Ortak çarpan parantezine al, noktayı koy.",
      ],
      celdiriciler: [
        { hata: "Özel fonksiyon çarpanının türevini yanlış almak", uretir: "İkinci terimi hatalı toplam" },
        { hata: "Çarpım yerine türevleri ayrı çarpmak", uretir: "Yapısal olarak yanlış, küçük değer" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["turev-alma-kurallari"],
      ornek: { soru: "f(x)=x²·eˣ ise f′(1) kaçtır?", cevap: "f′(x)=eˣ(x²+2x), f′(1)=3e" },
    },
  ],
};

export default kb;
