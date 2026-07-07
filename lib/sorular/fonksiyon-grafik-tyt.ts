import type { TopicQuiz } from "./types";

// fonksiyon-grafik-tyt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "fonksiyon-grafik-tyt",
  questions: [
    {
      id: "fonksiyon-grafik-tyt-01",
      difficulty: "Kolay",
      prompt: "Bir teknik servis, arıza ücretini iki aşamada hesaplıyor. Önce $g(x)=x+10$ kuralıyla (işçilik), sonra bu sonucu $f(t)=2t-5$ kuralıyla (vergi ve kâr) işliyor; yani müşterinin ödediği toplam ücret $(f\\circ g)(x)$ ile bulunuyor. Buna göre $x=15$ parça maliyetli bir tamirin toplam ücreti kaç liradır?",
      options: ["$35$", "$40$", "$45$", "$50$", "$55$"],
      correct: 2,
      solution: ["İç fonksiyon: $g(15)=15+10=25$.", "Dış fonksiyon: $f(25)=2\\cdot 25-5=45$."],
      answer: "$45$",
    },
    {
      id: "fonksiyon-grafik-tyt-02",
      difficulty: "Kolay",
      prompt: "Bir döviz bürosu, alınan dolar miktarı $x$'i $f(x)=34x+2$ (TL, $2$ lira işlem ücreti dahil) kuralıyla Türk lirasına çeviriyor. Bir müşteriye toplam $342$ lira ödendiğine göre, bu işlemde kaç dolar bozdurulmuştur? (Yani $f^{-1}(342)$ kaçtır?)",
      options: ["$8$", "$9$", "$10$", "$11$", "$12$"],
      correct: 2,
      solution: ["$f(x)=342\\Rightarrow 34x+2=342$.", "$34x=340\\Rightarrow x=10$."],
      answer: "$10$",
    },
    {
      id: "fonksiyon-grafik-tyt-03",
      difficulty: "Orta",
      prompt: "Bir doğrusal $f$ fonksiyonunun grafiği $(0,3)$ ve $(2,7)$ noktalarından geçiyor. Bu doğrunun $x$ eksenini kestiği noktanın apsisi (yani fonksiyonun kökü) kaçtır?",
      options: ["$-\\dfrac{3}{2}$", "$-1$", "$-\\dfrac{2}{3}$", "$1$", "$\\dfrac{3}{2}$"],
      correct: 0,
      solution: ["$b=f(0)=3$. Eğim: $a=\\dfrac{7-3}{2-0}=2$, yani $f(x)=2x+3$.", "Kök: $2x+3=0\\Rightarrow x=-\\dfrac{3}{2}$."],
      answer: "$-\\dfrac{3}{2}$",
    },
    {
      id: "fonksiyon-grafik-tyt-04",
      difficulty: "Orta",
      prompt: "Bir matbaa, $x$ adet afiş için maliyeti $f(x)=5x+40$ (TL) ile hesaplıyor. Bir müşteri, $f$ fonksiyonunun **tersini** kullanarak elindeki bütçeyle kaç afiş bastırabileceğini hesaplamak istiyor. Müşterinin bütçesi $190$ lira olduğuna göre $f^{-1}(190)$ değeri, yani bastırabileceği afiş sayısı kaçtır?",
      options: ["$26$", "$28$", "$30$", "$32$", "$34$"],
      correct: 2,
      solution: ["$f^{-1}(x)=\\dfrac{x-40}{5}$.", "$f^{-1}(190)=\\dfrac{190-40}{5}=\\dfrac{150}{5}=30$."],
      answer: "$30$",
    },
    {
      id: "fonksiyon-grafik-tyt-05",
      difficulty: "Orta",
      prompt: "Bir oyunda bir karakterin canı $f(x)=-2x+50$ (puan) kuralıyla azalıyor; $x$ geçen süredir (saniye). Buna göre karakterin canının sıfırlandığı an ile başlangıç canı ($x=0$ anındaki değer) toplamı kaçtır?",
      options: ["$25$", "$50$", "$60$", "$75$", "$100$"],
      correct: 3,
      solution: ["Sıfırlanma anı (kök): $-2x+50=0\\Rightarrow x=25$.", "Başlangıç canı: $f(0)=50$.", "Toplam: $25+50=75$."],
      answer: "$75$",
    },
    {
      id: "fonksiyon-grafik-tyt-06",
      difficulty: "Orta",
      prompt: "İki makine bir ürünü sırayla işliyor. Birinci makine $f(x)=2x-3$, ikinci makine $g(x)=x+6$ dönüşümünü uyguluyor. Ürün **önce $f$ sonra $g$** makinesinden geçtiğinde sonuç $(g\\circ f)(x)$, **önce $g$ sonra $f$** geçtiğinde sonuç $(f\\circ g)(x)$ oluyor. $x=5$ için bu iki sonucun farkı $\\big|(g\\circ f)(5)-(f\\circ g)(5)\\big|$ kaçtır?",
      options: ["$5$", "$6$", "$7$", "$8$", "$9$"],
      correct: 1,
      solution: ["$(g\\circ f)(5)$: $f(5)=2\\cdot 5-3=7$, sonra $g(7)=7+6=13$.", "$(f\\circ g)(5)$: $g(5)=5+6=11$, sonra $f(11)=2\\cdot 11-3=19$.", "Fark: $\\big|13-19\\big|=6$."],
      answer: "$6$",
    },
  ],
};

export default quiz;
