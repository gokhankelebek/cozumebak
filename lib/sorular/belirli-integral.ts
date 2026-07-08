import type { TopicQuiz } from "./types";

// belirli-integral — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "belirli-integral",
  questions: [
    {
      id: "belirli-integral-01",
      difficulty: "Orta",
      prompt: "$\\displaystyle\\int_{1}^{2}\\big(6x^{2}-2x\\big)\\,dx$ değeri kaçtır?",
      options: ["$9$", "$10$", "$11$", "$12$", "$13$"],
      correct: 2,
      solution: ["Ters türevi terim terim bul: $\\int (6x^{2}-2x)\\,dx = 2x^{3}-x^{2}$.", "Newton-Leibniz kuralı: $\\Big[2x^{3}-x^{2}\\Big]_{1}^{2}=F(2)-F(1)$.", "Üst sınır $x=2$: $2\\cdot 8 - 4 = 16-4 = 12$.", "Alt sınır $x=1$: $2\\cdot 1 - 1 = 2-1 = 1$.", "Çıkar: $12-1=11$."],
      answer: "$11$.",
    },
    {
      id: "belirli-integral-02",
      difficulty: "Kolay",
      prompt: "$\\displaystyle\\int_{4}^{9} f(x)\\,dx=10$ olduğuna göre $\\displaystyle\\int_{9}^{4} 3f(x)\\,dx$ değeri kaçtır?",
      options: ["$-30$", "$-10$", "$10$", "$30$", "$-3$"],
      correct: 0,
      solution: ["Sabit çarpanı integral dışına al: $\\int_{9}^{4} 3f(x)\\,dx = 3\\int_{9}^{4} f(x)\\,dx$.", "Sınırların yeri değişince işaret değişir: $\\int_{9}^{4} f(x)\\,dx = -\\int_{4}^{9} f(x)\\,dx = -10$.", "Çarp: $3\\cdot(-10) = -30$."],
      answer: "$-30$.",
    },
    {
      id: "belirli-integral-03",
      difficulty: "Orta",
      prompt: "$\\displaystyle\\int_{1}^{4}\\dfrac{1}{\\sqrt{x}}\\,dx$ değeri kaçtır?",
      options: ["$1$", "$2$", "$3$", "$\\dfrac{1}{2}$", "$4$"],
      correct: 1,
      solution: ["Üslü yaz: $\\dfrac{1}{\\sqrt{x}} = x^{-1/2}$.", "Ters türev: $\\int x^{-1/2}\\,dx = \\dfrac{x^{1/2}}{1/2} = 2x^{1/2} = 2\\sqrt{x}$.", "Üst sınır $x=4$: $2\\sqrt{4} = 2\\cdot 2 = 4$.", "Alt sınır $x=1$: $2\\sqrt{1} = 2$.", "Çıkar: $4-2 = 2$."],
      answer: "$2$.",
    },
    {
      id: "belirli-integral-04",
      difficulty: "Orta",
      prompt: "$f(x)=9-x^{2}$ parabolü ile $x$-ekseni arasında kalan bölgenin alanı kaç birimkaredir?",
      options: ["$18$", "$27$", "$\\dfrac{81}{3}$", "$36$", "$54$"],
      correct: 3,
      solution: ["Eğrinin ekseni kestiği noktalar sınırları verir: $9-x^{2}=0 \\Rightarrow x=\\pm 3$.", "$[-3,3]$ aralığında $9-x^{2}\\ge 0$; bölge eksenin üstünde, alan doğrudan integraldir.", "Ters türev: $\\int (9-x^{2})\\,dx = 9x - \\dfrac{x^{3}}{3}$.", "Üst sınır $x=3$: $27 - \\dfrac{27}{3} = 27-9 = 18$.", "Alt sınır $x=-3$: $-27 - \\dfrac{-27}{3} = -27+9 = -18$.", "Çıkar: $18-(-18) = 36$."],
      answer: "Alan $36$ birimkaredir.",
    },
    {
      id: "belirli-integral-05",
      difficulty: "Zor",
      prompt: "$f(x)=x-3$ doğrusu ile $x$-ekseni arasında, $x=1$ ile $x=4$ arasında kalan bölgenin alanı kaç birimkaredir?",
      options: ["$\\dfrac{3}{2}$", "$1$", "$2$", "$3$", "$\\dfrac{5}{2}$"],
      correct: 4,
      solution: ["Doğru $x=3$ noktasında ekseni keser ($x-3=0$); bu noktada işaret değişir, aralığı böl.", "Ters türev: $\\int (x-3)\\,dx = \\dfrac{x^{2}}{2}-3x$.", "$[1,3]$ (eksen altı): $\\Big[\\dfrac{x^{2}}{2}-3x\\Big]_{1}^{3} = \\big(\\dfrac{9}{2}-9\\big)-\\big(\\dfrac{1}{2}-3\\big) = -\\dfrac{9}{2}+\\dfrac{5}{2} = -2$; alan $|-2|=2$.", "$[3,4]$ (eksen üstü): $\\Big[\\dfrac{x^{2}}{2}-3x\\Big]_{3}^{4} = \\big(8-12\\big)-\\big(\\dfrac{9}{2}-9\\big) = -4+\\dfrac{9}{2} = \\dfrac{1}{2}$; alan $\\dfrac{1}{2}$.", "Alanları topla: $2+\\dfrac{1}{2}=\\dfrac{5}{2}$. (Bölmeden tek integral alsaydık $\\big|-\\dfrac{3}{2}\\big|=\\dfrac{3}{2}$ bulunurdu; bu yanlıştır çünkü katkılar birbirini götürür.)"],
      answer: "Alan $\\dfrac{5}{2}$ birimkaredir.",
    },
    {
      id: "belirli-integral-06",
      difficulty: "Orta",
      prompt: "Bir aracın $t$ saniyedeki hızı $v(t)=3t^{2}+2$ (m/s) ile veriliyor. Aracın $t=1$ ile $t=3$ saniyeleri arasında aldığı yol kaç metredir? (Alınan yol $\\displaystyle\\int_{1}^{3} v(t)\\,dt$ ile bulunur.)",
      options: ["$26$", "$28$", "$30$", "$32$", "$33$"],
      correct: 2,
      solution: ["Yol: $\\displaystyle\\int_{1}^{3}(3t^{2}+2)\\,dt$.", "Ters türev: $\\int (3t^{2}+2)\\,dt = t^{3}+2t$.", "Üst sınır $t=3$: $27 + 6 = 33$.", "Alt sınır $t=1$: $1 + 2 = 3$.", "Çıkar: $33-3 = 30$."],
      answer: "$30$ metre.",
    },
  ],
};

export default quiz;
