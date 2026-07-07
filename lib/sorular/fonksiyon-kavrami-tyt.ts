import type { TopicQuiz } from "./types";

// fonksiyon-kavrami-tyt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "fonksiyon-kavrami-tyt",
  questions: [
    {
      id: "fonksiyon-kavrami-tyt-01",
      difficulty: "Kolay",
      prompt: "Bir kargo şirketi, bir paketin gönderim ücretini $f(x)=3x+20$ kuralıyla hesaplıyor; burada $x$ paketin kilogram cinsinden ağırlığı, $f(x)$ ise lira cinsinden ücrettir. Buna göre $4$ kg'lık bir paketin ücreti ile $1$ kg'lık bir paketin ücreti arasındaki fark kaç liradır?",
      options: ["$9$", "$12$", "$20$", "$23$", "$32$"],
      correct: 0,
      solution: ["$4$ kg için ücret: $f(4)=3\\cdot 4+20=32$ lira.", "$1$ kg için ücret: $f(1)=3\\cdot 1+20=23$ lira.", "Fark: $f(4)-f(1)=32-23=9$ lira. (Sabit terim $20$ farkta sadeleşir; yalnızca $3\\cdot(4-1)=9$ kalır.)"],
      answer: "$9$",
    },
    {
      id: "fonksiyon-kavrami-tyt-02",
      difficulty: "Orta",
      prompt: "Bir taksi, açılış ücreti ile birlikte gidilen her kilometre için sabit bir tutar ekleyerek ücretlendiriyor ve toplam ücret doğrusal bir $f(x)=ax+b$ fonksiyonuyla veriliyor. $2$ km sonunda ücret $34$ lira, $5$ km sonunda ücret $58$ lira olduğuna göre, açılış ücreti (yani $f(0)$) kaç liradır?",
      options: ["$10$", "$12$", "$16$", "$18$", "$22$"],
      correct: 3,
      solution: ["Verilenler: $2a+b=34$ ve $5a+b=58$.", "İkinci denklemden birinciyi çıkar: $3a=24\\Rightarrow a=8$ (km başına ücret).", "$2\\cdot 8+b=34\\Rightarrow b=18$. Açılış ücreti $f(0)=b=18$ liradır."],
      answer: "$18$",
    },
    {
      id: "fonksiyon-kavrami-tyt-03",
      difficulty: "Orta",
      prompt: "Bir su deposu, $g(t)=\\dfrac{120}{t-1}$ kuralıyla modellenen bir basınç değerine sahiptir; burada $t$ saat cinsinden zamandır. Bu modelin geçerli olabilmesi için paydanın sıfır olmaması gerekir. Buna göre modelin **tanımsız** olduğu $t$ değeri ile $t=4$ anındaki basınç değerinin toplamı kaçtır?",
      options: ["$40$", "$41$", "$42$", "$43$", "$44$"],
      correct: 1,
      solution: ["Payda sıfır olamaz: $t-1=0\\Rightarrow t=1$. Model $t=1$'de tanımsızdır.", "$t=4$ için basınç: $g(4)=\\dfrac{120}{4-1}=\\dfrac{120}{3}=40$.", "İstenen toplam: $1+40=41$."],
      answer: "$41$",
    },
    {
      id: "fonksiyon-kavrami-tyt-04",
      difficulty: "Zor",
      prompt: "Bir okulda öğrencilere bir kart dağıtım uygulaması yapılıyor. $A=\\{\\text{Ali},\\text{Beren},\\text{Can}\\}$ öğrenci kümesinden $B=\\{\\text{kırmızı},\\text{mavi}\\}$ renk kümesine, \"her öğrenciye tam bir kart rengi\" atayan eşlemeler birer fonksiyon kabul ediliyor. Buna göre **tüm öğrencilere aynı rengin verilmediği** kaç farklı atama (fonksiyon) yapılabilir?",
      options: ["$2$", "$4$", "$6$", "$8$", "$9$"],
      correct: 2,
      solution: ["Her öğrenciye $2$ renkten biri verilir; toplam fonksiyon sayısı $2^{3}=8$.", "\"Hepsi aynı renk\" durumları: hepsi kırmızı ya da hepsi mavi, yani $2$ durum.", "İstenen: $8-2=6$."],
      answer: "$6$",
    },
    {
      id: "fonksiyon-kavrami-tyt-05",
      difficulty: "Orta",
      prompt: "Bir fabrikada üretim maliyeti $f(x)=2x+5$ (bin TL) fonksiyonuyla, satış geliri ise $g(x)=4x-1$ (bin TL) fonksiyonuyla modelleniyor; $x$ üretilen ürün miktarıdır (bin adet). Kâr, gelir ile maliyetin farkı olarak $K(x)=g(x)-f(x)$ biçiminde tanımlanıyor. Buna göre fabrikanın **başabaş** noktası (kârın sıfır olduğu $x$ değeri) kaçtır?",
      options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
      correct: 2,
      solution: ["Kâr fonksiyonu: $K(x)=g(x)-f(x)=(4x-1)-(2x+5)=2x-6$.", "Başabaş noktası: $K(x)=0\\Rightarrow 2x-6=0\\Rightarrow x=3$."],
      answer: "$3$",
    },
    {
      id: "fonksiyon-kavrami-tyt-06",
      difficulty: "Kolay",
      prompt: "Bir mağaza, kampanyada bir ürünün fiyatını $f(x)=\\dfrac{x-3}{2}$ kuralıyla belirliyor; $x$ ürünün etiket fiyatıdır (TL). Müşteri bir üründe $f(x)=12$ lira ödediğine göre, bu ürünün etiket fiyatı $x$ kaç liradır?",
      options: ["$21$", "$24$", "$27$", "$30$", "$33$"],
      correct: 2,
      solution: ["Eşitliği kur: $\\dfrac{x-3}{2}=12$.", "Paydadan kurtul: $x-3=24$.", "Çöz: $x=27$."],
      answer: "$27$",
    },
  ],
};

export default quiz;
