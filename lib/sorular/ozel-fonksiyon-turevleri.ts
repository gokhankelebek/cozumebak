import type { TopicQuiz } from "./types";

// ozel-fonksiyon-turevleri — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "ozel-fonksiyon-turevleri",
  questions: [
    {
      id: "ozel-fonksiyon-turevleri-01",
      difficulty: "Orta",
      prompt: "$f(x)=e^{2x}\\sin(3x)$ fonksiyonu veriliyor. Buna göre $f'(0)$ değeri kaçtır?",
      options: ["$0$", "$1$", "$2$", "$3$", "$5$"],
      correct: 3,
      solution: ["Çarpım kuralı: $f'(x)=\\big(e^{2x}\\big)'\\sin(3x)+e^{2x}\\big(\\sin(3x)\\big)'$.", "İç türevlerle: $\\big(e^{2x}\\big)'=2e^{2x}$ ve $\\big(\\sin(3x)\\big)'=3\\cos(3x)$.", "Birleştir: $f'(x)=2e^{2x}\\sin(3x)+3e^{2x}\\cos(3x)$.", "$x=0$ koy: $\\sin 0=0$, $\\cos 0=1$, $e^{0}=1$ olduğundan $f'(0)=2\\cdot1\\cdot0+3\\cdot1\\cdot1=3$."],
      answer: "$3$",
    },
    {
      id: "ozel-fonksiyon-turevleri-02",
      difficulty: "Orta",
      prompt: "$f(x)=\\dfrac{e^{x}}{1+\\ln x}$ fonksiyonu $x>0$ için tanımlıdır. Buna göre $f'(1)$ değeri kaçtır?",
      options: ["$0$", "$e$", "$1$", "$2e$", "$-e$"],
      correct: 0,
      solution: ["Bölüm kuralı: $f'(x)=\\dfrac{\\big(e^{x}\\big)'(1+\\ln x)-e^{x}\\big(1+\\ln x\\big)'}{(1+\\ln x)^{2}}$.", "Türevler: $\\big(e^{x}\\big)'=e^{x}$ ve $\\big(1+\\ln x\\big)'=\\dfrac{1}{x}$.", "Yerine koy: $f'(x)=\\dfrac{e^{x}(1+\\ln x)-e^{x}\\cdot\\dfrac{1}{x}}{(1+\\ln x)^{2}}$.", "$x=1$ için $\\ln 1=0$ ve $\\dfrac{1}{x}=1$: pay $=e(1+0)-e\\cdot1=0$, payda $=(1+0)^{2}=1$, böylece $f'(1)=0$."],
      answer: "$0$",
    },
    {
      id: "ozel-fonksiyon-turevleri-03",
      difficulty: "Orta",
      prompt: "$f(x)=2^{x}\\cos x$ fonksiyonu veriliyor. Buna göre $f'(0)$ değeri kaçtır?",
      options: ["$1$", "$2\\ln 2$", "$0$", "$\\ln 2$", "$2$"],
      correct: 3,
      solution: ["Çarpım kuralı: $f'(x)=\\big(2^{x}\\big)'\\cos x+2^{x}\\big(\\cos x\\big)'$.", "Türevler: $\\big(2^{x}\\big)'=2^{x}\\ln 2$ ve $\\big(\\cos x\\big)'=-\\sin x$.", "Birleştir: $f'(x)=2^{x}\\ln 2\\cos x-2^{x}\\sin x$.", "$x=0$ koy: $2^{0}=1$, $\\cos 0=1$, $\\sin 0=0$ olduğundan $f'(0)=1\\cdot\\ln 2\\cdot1-1\\cdot0=\\ln 2$."],
      answer: "$\\ln 2$",
    },
    {
      id: "ozel-fonksiyon-turevleri-04",
      difficulty: "Orta",
      prompt: "$f(x)=\\ln\\!\\big(\\sin x\\big)$ fonksiyonu veriliyor. Buna göre $f'\\!\\left(\\dfrac{\\pi}{6}\\right)$ değeri kaçtır?",
      options: ["$\\sqrt{3}$", "$\\dfrac{\\sqrt{3}}{2}$", "$\\dfrac{1}{2}$", "$2$", "$\\dfrac{1}{\\sqrt{3}}$"],
      correct: 0,
      solution: ["$\\big(\\ln u\\big)'=\\dfrac{u'}{u}$ formülünde $u=\\sin x$, $u'=\\cos x$: $f'(x)=\\dfrac{\\cos x}{\\sin x}=\\cot x$.", "$x=\\dfrac{\\pi}{6}$ koy: $\\cos\\dfrac{\\pi}{6}=\\dfrac{\\sqrt 3}{2}$, $\\sin\\dfrac{\\pi}{6}=\\dfrac{1}{2}$.", "Oran: $f'\\!\\left(\\dfrac{\\pi}{6}\\right)=\\dfrac{\\sqrt 3/2}{1/2}=\\sqrt 3$."],
      answer: "$\\sqrt{3}$",
    },
    {
      id: "ozel-fonksiyon-turevleri-05",
      difficulty: "Orta",
      prompt: "$f(x)=e^{ax}\\cos x$ fonksiyonunun grafiğine $x=0$ noktasında çizilen teğetin eğimi $3$'tür. Buna göre $a$ kaçtır?",
      options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
      correct: 2,
      solution: ["Teğetin eğimi $f'(0)$'dır. Çarpım kuralı: $f'(x)=\\big(e^{ax}\\big)'\\cos x+e^{ax}\\big(\\cos x\\big)'=a\\,e^{ax}\\cos x-e^{ax}\\sin x$.", "$x=0$ koy: $e^{0}=1$, $\\cos 0=1$, $\\sin 0=0$, dolayısıyla $f'(0)=a\\cdot 1\\cdot 1-1\\cdot 0=a$.", "Koşul $f'(0)=3$ olduğundan $a=3$."],
      answer: "$3$",
    },
    {
      id: "ozel-fonksiyon-turevleri-06",
      difficulty: "Zor",
      prompt: "$f(x)=\\dfrac{\\ln x}{x}$ fonksiyonu $x>0$ için tanımlıdır ve yalnızca bir kritik noktası vardır. Bu kritik noktadaki fonksiyon değeri $f(c)$ kaçtır?",
      options: ["$0$", "$\\dfrac{1}{e}$", "$1$", "$e$", "$\\dfrac{1}{e^{2}}$"],
      correct: 1,
      solution: ["Bölüm kuralı: $f'(x)=\\dfrac{\\big(\\ln x\\big)'\\cdot x-\\ln x\\cdot 1}{x^{2}}=\\dfrac{\\frac{1}{x}\\cdot x-\\ln x}{x^{2}}=\\dfrac{1-\\ln x}{x^{2}}$.", "Kritik nokta: $f'(x)=0\\Rightarrow 1-\\ln x=0\\Rightarrow \\ln x=1\\Rightarrow x=e$, yani $c=e$.", "Değer: $f(e)=\\dfrac{\\ln e}{e}=\\dfrac{1}{e}$."],
      answer: "$\\dfrac{1}{e}$",
    },
  ],
};

export default quiz;
