import type { TopicQuiz } from "./types";

// trigonometrik-fonksiyonlar — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "trigonometrik-fonksiyonlar",
  questions: [
    {
      id: "trigonometrik-fonksiyonlar-01",
      difficulty: "Kolay",
      prompt: "$\\cos 240°$ değeri aşağıdakilerden hangisidir?",
      options: ["$\\dfrac{1}{2}$", "$-\\dfrac{1}{2}$", "$-\\dfrac{\\sqrt3}{2}$", "$\\dfrac{\\sqrt3}{2}$", "$-1$"],
      correct: 1,
      solution: ["$240°$ açısı III. bölgededir.", "Referans açı: $240°-180°=60°$, $\\cos 60°=\\dfrac12$.", "III. bölgede kosinüs negatiftir: $\\cos 240°=-\\dfrac12$."],
      answer: "$-\\dfrac12$",
    },
    {
      id: "trigonometrik-fonksiyonlar-02",
      difficulty: "Kolay",
      prompt: "$\\sin 90°+\\cos 360°-\\sin 180°$ ifadesinin değeri kaçtır?",
      options: ["$0$", "$-1$", "$3$", "$2$", "$1$"],
      correct: 3,
      solution: ["$\\sin 90°=1$ (terminal kenar $(0,1)$).", "$\\cos 360°=\\cos 0°=1$ (terminal kenar $(1,0)$).", "$\\sin 180°=0$ (terminal kenar $(-1,0)$).", "Topla: $1+1-0=2$."],
      answer: "$2$",
    },
    {
      id: "trigonometrik-fonksiyonlar-03",
      difficulty: "Orta",
      prompt: "IV. bölgede bulunan bir $x$ açısı için $\\sin x=-\\dfrac{5}{13}$ ise $\\tan x$ kaçtır?",
      options: ["$-\\dfrac{5}{12}$", "$\\dfrac{5}{12}$", "$-\\dfrac{12}{5}$", "$\\dfrac{12}{13}$", "$-\\dfrac{13}{12}$"],
      correct: 0,
      solution: ["$\\cos^2 x=1-\\sin^2 x=1-\\dfrac{25}{169}=\\dfrac{144}{169}$, yani $\\cos x=\\pm\\dfrac{12}{13}$.", "IV. bölgede kosinüs pozitiftir: $\\cos x=\\dfrac{12}{13}$.", "$\\tan x=\\dfrac{\\sin x}{\\cos x}=\\dfrac{-5/13}{12/13}=-\\dfrac{5}{12}$."],
      answer: "$-\\dfrac{5}{12}$",
    },
    {
      id: "trigonometrik-fonksiyonlar-04",
      difficulty: "Orta",
      prompt: "$y=3\\cos\\dfrac{x}{2}$ fonksiyonunun periyodu kaçtır?",
      options: ["$\\pi$", "$\\dfrac{\\pi}{2}$", "$2\\pi$", "$6\\pi$", "$4\\pi$"],
      correct: 4,
      solution: ["$y=\\cos(bx)$ fonksiyonunun periyodu $\\dfrac{2\\pi}{|b|}$'dir.", "Baştaki $3$ katsayısı yalnızca genliği etkiler, periyodu değiştirmez.", "Burada $b=\\dfrac12$: periyot $\\dfrac{2\\pi}{1/2}=4\\pi$."],
      answer: "$4\\pi$",
    },
    {
      id: "trigonometrik-fonksiyonlar-05",
      difficulty: "Orta",
      prompt: "Bir dönme dolabındaki bir sepetin yerden yüksekliği $t$ saniye sonra $h(t)=8-6\\cos\\left(\\dfrac{\\pi}{15}t\\right)$ metre ile veriliyor. Sepetin ulaşabileceği en büyük yükseklik kaç metredir?",
      options: ["$8$", "$6$", "$14$", "$2$", "$12$"],
      correct: 2,
      solution: ["$-1\\le\\cos\\left(\\dfrac{\\pi}{15}t\\right)\\le 1$'dir.", "$h(t)$ en büyük olur ki $-6\\cos(\\cdots)$ en büyük olsun; bu da $\\cos(\\cdots)=-1$ iken gerçekleşir.", "$h=8-6\\cdot(-1)=8+6=14$ metre."],
      answer: "$14$ metre",
    },
    {
      id: "trigonometrik-fonksiyonlar-06",
      difficulty: "Zor",
      prompt: "$\\sin 150°\\cdot\\cos 300°+\\sin 210°$ ifadesinin değeri kaçtır?",
      options: ["$\\dfrac{1}{4}$", "$-\\dfrac{1}{4}$", "$\\dfrac{3}{4}$", "$-\\dfrac{3}{4}$", "$0$"],
      correct: 1,
      solution: ["$\\sin 150°$: II. bölge, referans $30°$, sinüs pozitif $\\Rightarrow \\sin 150°=\\dfrac12$.", "$\\cos 300°$: IV. bölge, referans $60°$, kosinüs pozitif $\\Rightarrow \\cos 300°=\\dfrac12$.", "$\\sin 210°$: III. bölge, referans $30°$, sinüs negatif $\\Rightarrow \\sin 210°=-\\dfrac12$.", "İfade: $\\dfrac12\\cdot\\dfrac12+\\left(-\\dfrac12\\right)=\\dfrac14-\\dfrac12=-\\dfrac14$."],
      answer: "$-\\dfrac14$",
    },
  ],
};

export default quiz;
