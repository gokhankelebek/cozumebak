import type { TopicQuiz } from "./types";

// belirli-integral-teoremi — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "belirli-integral-teoremi",
  questions: [
    {
      id: "belirli-integral-teoremi-01",
      difficulty: "Orta",
      prompt: "Türevlenebilir bir $f$ fonksiyonu için $\\displaystyle\\int_{0}^{2} f'(x)\\,dx=5$, $\\displaystyle\\int_{2}^{6} f'(x)\\,dx=-3$ ve $f(0)=4$ veriliyor. Buna göre $f(6)$ kaçtır?",
      options: ["$2$", "$4$", "$6$", "$8$", "$10$"],
      correct: 2,
      solution: ["Aralık bölme özelliğiyle türevin tüm aralıktaki integralini topla: $\\displaystyle\\int_{0}^{6} f'(x)\\,dx=\\int_{0}^{2} f'(x)\\,dx+\\int_{2}^{6} f'(x)\\,dx=5+(-3)=2$.", "Analizin Temel Teoremi: $\\displaystyle\\int_{0}^{6} f'(x)\\,dx=f(6)-f(0)$.", "Değerleri yerine yaz: $f(6)-f(0)=2$, yani $f(6)-4=2$.", "Çöz: $f(6)=6$."],
      answer: "$6$",
    },
    {
      id: "belirli-integral-teoremi-02",
      difficulty: "Orta",
      prompt: "Bir $f$ fonksiyonu için $\\displaystyle\\int_{1}^{5} f(x)\\,dx=12$ ve $\\displaystyle\\int_{1}^{3} f(x)\\,dx=8$ veriliyor. Buna göre $\\displaystyle\\int_{5}^{3} 3f(x)\\,dx$ kaçtır?",
      options: ["$4$", "$-4$", "$12$", "$6$", "$-12$"],
      correct: 4,
      solution: ["Aralık bölme özelliğiyle aradaki integrali bul: $\\displaystyle\\int_{1}^{3} f\\,dx+\\int_{3}^{5} f\\,dx=\\int_{1}^{5} f\\,dx$, yani $8+\\int_{3}^{5} f\\,dx=12$.", "Buradan $\\displaystyle\\int_{3}^{5} f(x)\\,dx=12-8=4$.", "Sınır değişimi özelliği: $\\displaystyle\\int_{5}^{3} f(x)\\,dx=-\\int_{3}^{5} f(x)\\,dx=-4$.", "Sabitle çarpım özelliği: $\\displaystyle\\int_{5}^{3} 3f(x)\\,dx=3\\cdot(-4)=-12$."],
      answer: "$-12$",
    },
    {
      id: "belirli-integral-teoremi-03",
      difficulty: "Orta",
      prompt: "Türevlenebilir bir $f$ fonksiyonu için $\\displaystyle\\int_{1}^{4} f(x)\\,dx=9$ veriliyor. Buna göre $\\displaystyle\\int_{1}^{4}\\big(2f(x)-x\\big)\\,dx$ kaçtır?",
      options: ["$9$", "$\\dfrac{21}{2}$", "$\\dfrac{27}{2}$", "$11$", "$12$"],
      correct: 1,
      solution: ["Toplam–fark ve sabitle çarpım özellikleriyle integrali ayır: $\\displaystyle\\int_{1}^{4}\\big(2f(x)-x\\big)\\,dx=2\\int_{1}^{4} f(x)\\,dx-\\int_{1}^{4} x\\,dx$.", "İlk terim: $2\\cdot 9=18$.", "İkinci terimi Newton–Leibniz ile hesapla: $\\displaystyle\\int_{1}^{4} x\\,dx=\\Big[\\dfrac{x^{2}}{2}\\Big]_{1}^{4}=\\dfrac{16}{2}-\\dfrac{1}{2}=\\dfrac{15}{2}$.", "Farkı al: $18-\\dfrac{15}{2}=\\dfrac{36}{2}-\\dfrac{15}{2}=\\dfrac{21}{2}$."],
      answer: "$\\dfrac{21}{2}$",
    },
    {
      id: "belirli-integral-teoremi-04",
      difficulty: "Zor",
      prompt: "$\\displaystyle F(x)=\\int_{1}^{x^{2}} \\dfrac{1}{t}\\,dt$ fonksiyonu $x>0$ için tanımlanıyor. Buna göre $F'(x)$ aşağıdakilerden hangisidir?",
      options: ["$\\dfrac{1}{x^{2}}$", "$\\dfrac{1}{x}$", "$\\dfrac{2}{x}$", "$2x$", "$\\dfrac{2}{x^{2}}$"],
      correct: 2,
      solution: ["Analizin temel teoreminin zincir kurallı biçimi: $\\displaystyle\\dfrac{d}{dx}\\int_{1}^{g(x)} f(t)\\,dt=f\\big(g(x)\\big)\\cdot g'(x)$.", "Burada $f(t)=\\dfrac{1}{t}$ ve $g(x)=x^{2}$, $g'(x)=2x$.", "Yerine yaz: $F'(x)=\\dfrac{1}{x^{2}}\\cdot 2x=\\dfrac{2x}{x^{2}}=\\dfrac{2}{x}$.", "Çeldirici kontrolü: $g'(x)=2x$ çarpanını (zincir kuralını) unutan, B şıkkındaki $\\dfrac{1}{x^{2}}$ veya $\\dfrac{1}{x}$'i seçer."],
      answer: "$\\dfrac{2}{x}$",
    },
    {
      id: "belirli-integral-teoremi-05",
      difficulty: "Orta",
      prompt: "$f$ sürekli bir fonksiyon ve $a$ bir gerçek sayı olmak üzere $\\displaystyle\\int_{0}^{3} f(x)\\,dx=8$ veriliyor. Buna göre $\\displaystyle\\int_{0}^{3}\\big(f(x)+a\\big)\\,dx=20$ eşitliğini sağlayan $a$ kaçtır?",
      options: ["$2$", "$3$", "$4$", "$5$", "$6$"],
      correct: 2,
      solution: ["Toplam özelliğiyle ayır: $\\displaystyle\\int_{0}^{3}\\big(f(x)+a\\big)\\,dx=\\int_{0}^{3} f(x)\\,dx+\\int_{0}^{3} a\\,dx$.", "İlk terim $8$; ikinci terim sabit integralidir: $\\displaystyle\\int_{0}^{3} a\\,dx=a\\big[x\\big]_{0}^{3}=3a$.", "Eşitliği kur: $8+3a=20\\Rightarrow 3a=12\\Rightarrow a=4$.", "Çeldirici kontrolü: $\\int_{0}^{3} a\\,dx$'i $a$ (aralık uzunluğunu unutarak) sanan, $8+a=20$'den $a=12$ bulur — hata."],
      answer: "$4$",
    },
    {
      id: "belirli-integral-teoremi-06",
      difficulty: "Zor",
      prompt: "$f$ fonksiyonu tüm gerçek sayılarda **tek fonksiyon** ($f(-x)=-f(x)$) ve süreklidir. $\\displaystyle\\int_{0}^{4} f(x)\\,dx=6$ veriliyor. Buna göre $\\displaystyle\\int_{-4}^{4}\\big(f(x)+x^{2}\\big)\\,dx$ kaçtır?",
      options: ["$\\dfrac{128}{3}$", "$\\dfrac{128}{3}+6$", "$\\dfrac{128}{3}+12$", "$\\dfrac{64}{3}$", "$\\dfrac{64}{3}+6$"],
      correct: 0,
      solution: ["Toplam özelliğiyle ayır: $\\displaystyle\\int_{-4}^{4} f(x)\\,dx+\\int_{-4}^{4} x^{2}\\,dx$.", "$f$ tek fonksiyon ve aralık simetrik olduğundan $\\displaystyle\\int_{-4}^{4} f(x)\\,dx=0$. (Verilen $6$ değeri tuzaktır.)", "$x^{2}$ çift fonksiyon: $\\displaystyle\\int_{-4}^{4} x^{2}\\,dx=2\\int_{0}^{4} x^{2}\\,dx=2\\Big[\\dfrac{x^{3}}{3}\\Big]_{0}^{4}=2\\cdot\\dfrac{64}{3}=\\dfrac{128}{3}$.", "Topla: $0+\\dfrac{128}{3}=\\dfrac{128}{3}$.", "Çeldirici kontrolü: tek fonksiyon simetrisini atlayıp $6$'yı ekleyen B şıkkını seçer."],
      answer: "$\\dfrac{128}{3}$",
    },
  ],
};

export default quiz;
