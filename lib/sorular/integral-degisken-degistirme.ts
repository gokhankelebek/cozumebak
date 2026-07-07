import type { TopicQuiz } from "./types";

// integral-degisken-degistirme — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "integral-degisken-degistirme",
  questions: [
    {
      id: "integral-degisken-degistirme-01",
      difficulty: "Orta",
      prompt: "$f'(x)=6x^{2}\\,(x^{3}+2)^{2}$ ve $f(0)=5$ olduğuna göre $f(-1)$ kaçtır?",
      options: ["$-\\dfrac{2}{3}$", "$0$", "$\\dfrac{1}{3}$", "$\\dfrac{2}{3}$", "$\\dfrac{16}{3}$"],
      correct: 2,
      solution: ["$f(x)=\\displaystyle\\int 6x^{2}\\,(x^{3}+2)^{2}\\,dx$. Değişken seç: $u=x^{3}+2 \\Rightarrow du=3x^{2}\\,dx$, yani $6x^{2}\\,dx=2\\,du$.", "$u$ cinsinden yaz: $\\displaystyle\\int 2u^{2}\\,du=\\dfrac{2u^{3}}{3}+c$.", "Geri koy: $f(x)=\\dfrac{2(x^{3}+2)^{3}}{3}+c$.", "Başlangıç koşulu: $f(0)=\\dfrac{2\\cdot 2^{3}}{3}+c=\\dfrac{16}{3}+c=5 \\Rightarrow c=-\\dfrac{1}{3}$.", "$x=-1$ için $x^{3}+2=1$: $f(-1)=\\dfrac{2\\cdot 1^{3}}{3}-\\dfrac{1}{3}=\\dfrac{2}{3}-\\dfrac{1}{3}=\\dfrac{1}{3}$."],
      answer: "$\\dfrac{1}{3}$",
    },
    {
      id: "integral-degisken-degistirme-02",
      difficulty: "Orta",
      prompt: "$a>0$ olmak üzere $\\displaystyle\\int_{0}^{a}\\dfrac{2x}{x^{2}+1}\\,dx=\\ln 5$ olduğuna göre $a$ kaçtır?",
      options: ["$1$", "$\\sqrt{3}$", "$2$", "$\\sqrt{5}$", "$3$"],
      correct: 2,
      solution: ["Değişken seç: $u=x^{2}+1 \\Rightarrow du=2x\\,dx$. Sınırlar: $x=0 \\Rightarrow u=1$, $x=a \\Rightarrow u=a^{2}+1$.", "$u$ cinsinden yaz: $\\displaystyle\\int_{1}^{a^{2}+1}\\dfrac{1}{u}\\,du=\\ln u\\Big|_{1}^{a^{2}+1}=\\ln(a^{2}+1)-\\ln 1$.", "$\\ln 1=0$ olduğundan integral $\\ln(a^{2}+1)$ değerine eşittir.", "Koşul: $\\ln(a^{2}+1)=\\ln 5 \\Rightarrow a^{2}+1=5 \\Rightarrow a^{2}=4$.", "$a>0$ olduğundan $a=2$."],
      answer: "$2$",
    },
    {
      id: "integral-degisken-degistirme-03",
      difficulty: "Orta",
      prompt: "$\\displaystyle\\int_{0}^{\\pi/2}\\big(\\sin^{4}x+\\sin^{2}x\\big)\\cos x\\,dx$ integralinin değeri kaçtır?",
      options: ["$\\dfrac{8}{15}$", "$\\dfrac{1}{2}$", "$\\dfrac{3}{5}$", "$\\dfrac{2}{3}$", "$\\dfrac{4}{5}$"],
      correct: 0,
      solution: ["Değişken seç: $u=\\sin x \\Rightarrow du=\\cos x\\,dx$. Sınırlar: $x=0 \\Rightarrow u=0$, $x=\\dfrac{\\pi}{2} \\Rightarrow u=1$.", "$u$ cinsinden yaz: $\\displaystyle\\int_{0}^{1}\\big(u^{4}+u^{2}\\big)\\,du$.", "İntegre et: $\\dfrac{u^{5}}{5}+\\dfrac{u^{3}}{3}\\Big|_{0}^{1}$.", "Sınırları yerleştir: $\\dfrac{1}{5}+\\dfrac{1}{3}-0=\\dfrac{3}{15}+\\dfrac{5}{15}=\\dfrac{8}{15}$."],
      answer: "$\\dfrac{8}{15}$",
    },
    {
      id: "integral-degisken-degistirme-04",
      difficulty: "Orta",
      prompt: "$\\displaystyle\\int \\dfrac{e^{x}}{e^{x}+1}\\,dx=\\ln\\big(g(x)\\big)+c$ olduğuna göre, $g(\\ln 3)$ kaçtır?",
      options: ["$2$", "$3$", "$4$", "$\\ln 3$", "$\\ln 4$"],
      correct: 2,
      solution: ["Değişken seç: $u=e^{x}+1 \\Rightarrow du=e^{x}\\,dx$. Paydaki $e^{x}\\,dx$ tam $du$'dur.", "$u$ cinsinden yaz: $\\displaystyle\\int \\dfrac{1}{u}\\,du=\\ln|u|+c=\\ln(e^{x}+1)+c$ ($e^{x}+1>0$).", "Karşılaştır: $\\ln\\big(g(x)\\big)=\\ln(e^{x}+1)$, yani $g(x)=e^{x}+1$.", "İstenen değer: $g(\\ln 3)=e^{\\ln 3}+1=3+1=4$."],
      answer: "$4$",
    },
    {
      id: "integral-degisken-degistirme-05",
      difficulty: "Orta",
      prompt: "$\\displaystyle\\int_{1}^{2} \\dfrac{(\\ln x+1)}{x}\\,dx$ integralinin değeri kaçtır?",
      options: ["$\\dfrac{\\ln^{2}2}{2}$", "$\\ln 2+\\dfrac{\\ln^{2}2}{2}$", "$\\ln 2$", "$1+\\ln 2$", "$\\dfrac{(\\ln 2+1)^{2}}{2}$"],
      correct: 1,
      solution: ["Değişken seç: $u=\\ln x \\Rightarrow du=\\dfrac{1}{x}\\,dx$. Sınırlar: $x=1\\Rightarrow u=0$, $x=2\\Rightarrow u=\\ln 2$.", "$u$ cinsinden yaz: $\\displaystyle\\int_{0}^{\\ln 2}(u+1)\\,du$.", "İntegre et: $\\Big[\\dfrac{u^{2}}{2}+u\\Big]_{0}^{\\ln 2}=\\dfrac{\\ln^{2}2}{2}+\\ln 2-0$.", "Sonuç: $\\ln 2+\\dfrac{\\ln^{2}2}{2}$.", "Çeldirici kontrolü: $+1$ terimini (yani $\\ln 2$ katkısını) unutan, A şıkkındaki yalnız $\\dfrac{\\ln^{2}2}{2}$'yi bulur."],
      answer: "$\\ln 2+\\dfrac{\\ln^{2}2}{2}$",
    },
    {
      id: "integral-degisken-degistirme-06",
      difficulty: "Orta",
      prompt: "$\\displaystyle\\int_{0}^{2} x\\,\\sqrt{x^{2}+1}\\,dx$ integralinin değeri kaçtır?",
      options: ["$\\dfrac{5\\sqrt5-1}{3}$", "$\\dfrac{5\\sqrt5}{3}$", "$\\dfrac{5\\sqrt5-1}{2}$", "$\\dfrac{4\\sqrt5}{3}$", "$\\dfrac{2(5\\sqrt5-1)}{3}$"],
      correct: 0,
      solution: ["Değişken seç: $u=x^{2}+1 \\Rightarrow du=2x\\,dx$, yani $x\\,dx=\\dfrac{1}{2}\\,du$. Sınırlar: $x=0\\Rightarrow u=1$, $x=2\\Rightarrow u=5$.", "$u$ cinsinden yaz: $\\displaystyle\\dfrac{1}{2}\\int_{1}^{5} u^{1/2}\\,du$.", "İntegre et: $\\dfrac{1}{2}\\cdot\\dfrac{u^{3/2}}{3/2}\\Big|_{1}^{5}=\\dfrac{1}{3}\\Big[u^{3/2}\\Big]_{1}^{5}$.", "Sınırları yerleştir: $\\dfrac{1}{3}\\big(5^{3/2}-1\\big)=\\dfrac{1}{3}\\big(5\\sqrt5-1\\big)$."],
      answer: "$\\dfrac{5\\sqrt5-1}{3}$",
    },
  ],
};

export default quiz;
