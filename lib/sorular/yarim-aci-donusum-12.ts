import type { TopicQuiz } from "./types";

// yarim-aci-donusum-12 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "yarim-aci-donusum-12",
  questions: [
    {
      id: "yarim-aci-donusum-12-01",
      difficulty: "Orta",
      prompt: "$\\cos\\alpha=-\\dfrac{7}{25}$ ve $\\alpha$ II. bölgede iken $\\tan\\dfrac{\\alpha}{2}$ değeri kaçtır?",
      options: ["$\\dfrac{3}{4}$", "$-\\dfrac{4}{3}$", "$\\dfrac{4}{3}$", "$-\\dfrac{3}{4}$", "$\\dfrac{1}{4}$"],
      correct: 2,
      solution: ["$\\alpha$ II. bölgede olduğundan $\\sin\\alpha>0$: $\\sin\\alpha=\\sqrt{1-\\cos^2\\alpha}=\\sqrt{1-\\frac{49}{625}}=\\sqrt{\\frac{576}{625}}=\\dfrac{24}{25}$.", "Yarım açı tanjant formülü: $\\tan\\dfrac{\\alpha}{2}=\\dfrac{1-\\cos\\alpha}{\\sin\\alpha}=\\dfrac{1-(-\\frac{7}{25})}{\\frac{24}{25}}=\\dfrac{\\frac{32}{25}}{\\frac{24}{25}}=\\dfrac{32}{24}=\\dfrac{4}{3}$.", "İstersen $\\dfrac{\\sin\\alpha}{1+\\cos\\alpha}=\\dfrac{\\frac{24}{25}}{1-\\frac{7}{25}}=\\dfrac{\\frac{24}{25}}{\\frac{18}{25}}=\\dfrac{4}{3}$ ile de aynı sonuç bulunur."],
      answer: "$\\tan\\dfrac{\\alpha}{2}=\\dfrac{4}{3}$ (C).",
    },
    {
      id: "yarim-aci-donusum-12-02",
      difficulty: "Kolay",
      prompt: "$\\cos 105^\\circ+\\cos 15^\\circ$ ifadesinin değeri kaçtır?",
      options: ["$\\dfrac{\\sqrt2}{2}$", "$-\\dfrac{\\sqrt2}{2}$", "$\\dfrac{\\sqrt6}{2}$", "$\\dfrac{\\sqrt3}{2}$", "$0$"],
      correct: 0,
      solution: ["$\\cos A+\\cos B=2\\cos\\dfrac{A+B}{2}\\cos\\dfrac{A-B}{2}$ formülünde $A=105^\\circ$, $B=15^\\circ$.", "Yarı toplam $\\dfrac{105^\\circ+15^\\circ}{2}=60^\\circ$, yarı fark $\\dfrac{105^\\circ-15^\\circ}{2}=45^\\circ$.", "$=2\\cos 60^\\circ\\cos 45^\\circ=2\\cdot\\dfrac12\\cdot\\dfrac{\\sqrt2}{2}=\\dfrac{\\sqrt2}{2}$."],
      answer: "$\\dfrac{\\sqrt2}{2}$ (A).",
    },
    {
      id: "yarim-aci-donusum-12-03",
      difficulty: "Orta",
      prompt: "$\\dfrac{\\cos 5x-\\cos x}{\\sin 5x-\\sin x}$ ifadesinin sadeleştirilmiş biçimi aşağıdakilerden hangisidir?",
      options: ["$\\tan 3x$", "$\\cot 3x$", "$-\\tan 3x$", "$-\\cot 3x$", "$\\tan 2x$"],
      correct: 2,
      solution: ["Pay: $\\cos 5x-\\cos x=-2\\sin\\dfrac{5x+x}{2}\\sin\\dfrac{5x-x}{2}=-2\\sin 3x\\sin 2x$ (eksi işaret ve çift sinüse dikkat).", "Payda: $\\sin 5x-\\sin x=2\\cos\\dfrac{5x+x}{2}\\sin\\dfrac{5x-x}{2}=2\\cos 3x\\sin 2x$.", "Oran: $\\dfrac{-2\\sin 3x\\sin 2x}{2\\cos 3x\\sin 2x}=-\\dfrac{\\sin 3x}{\\cos 3x}=-\\tan 3x$."],
      answer: "$-\\tan 3x$ (C).",
    },
    {
      id: "yarim-aci-donusum-12-04",
      difficulty: "Orta",
      prompt: "$\\sin\\dfrac{\\pi}{12}$ değeri aşağıdakilerden hangisidir?",
      options: ["$\\dfrac{\\sqrt{2+\\sqrt3}}{2}$", "$\\dfrac{\\sqrt{2-\\sqrt3}}{2}$", "$\\dfrac{\\sqrt{2-\\sqrt2}}{2}$", "$\\dfrac{\\sqrt3-1}{2}$", "$\\dfrac{2-\\sqrt3}{2}$"],
      correct: 1,
      solution: ["$\\dfrac{\\pi}{12}=15^\\circ=\\dfrac{30^\\circ}{2}$; $\\dfrac{\\pi}{12}$ I. bölgede olduğundan sinüs pozitiftir.", "Yarım açı sinüs formülü: $\\sin 15^\\circ=\\sqrt{\\dfrac{1-\\cos 30^\\circ}{2}}$ ve $\\cos 30^\\circ=\\dfrac{\\sqrt3}{2}$.", "$=\\sqrt{\\dfrac{1-\\frac{\\sqrt3}{2}}{2}}=\\sqrt{\\dfrac{2-\\sqrt3}{4}}=\\dfrac{\\sqrt{2-\\sqrt3}}{2}$."],
      answer: "$\\dfrac{\\sqrt{2-\\sqrt3}}{2}$ (B).",
    },
    {
      id: "yarim-aci-donusum-12-05",
      difficulty: "Orta",
      prompt: "Bir aydınlatma projesinde iki farklı ışığın parlaklık katkısı $L=\\sin 80^\\circ+\\sin 40^\\circ$ ifadesiyle veriliyor. Bu ifade sadeleştirildiğinde aşağıdakilerden hangisine eşittir?",
      options: ["$\\sqrt3\\,\\cos 20^\\circ$", "$\\cos 20^\\circ$", "$\\sqrt3\\,\\sin 60^\\circ$", "$2\\cos 20^\\circ$", "$\\sqrt2\\,\\cos 20^\\circ$"],
      correct: 0,
      solution: ["$\\sin A+\\sin B=2\\sin\\dfrac{A+B}{2}\\cos\\dfrac{A-B}{2}$ formülünde $A=80^\\circ$, $B=40^\\circ$.", "Yarı toplam $\\dfrac{80^\\circ+40^\\circ}{2}=60^\\circ$, yarı fark $\\dfrac{80^\\circ-40^\\circ}{2}=20^\\circ$.", "$=2\\sin 60^\\circ\\cos 20^\\circ=2\\cdot\\dfrac{\\sqrt3}{2}\\cdot\\cos 20^\\circ=\\sqrt3\\,\\cos 20^\\circ$."],
      answer: "$\\sqrt3\\,\\cos 20^\\circ$ (A).",
    },
    {
      id: "yarim-aci-donusum-12-06",
      difficulty: "Zor",
      prompt: "$2\\sin 52{,}5^\\circ\\cos 7{,}5^\\circ$ ifadesinin değeri kaçtır?",
      options: ["$\\dfrac{\\sqrt3+\\sqrt2}{4}$", "$\\dfrac{\\sqrt2-\\sqrt3}{2}$", "$\\dfrac{\\sqrt6}{2}$", "$\\dfrac{\\sqrt3+\\sqrt2}{2}$", "$\\dfrac{\\sqrt3-\\sqrt2}{2}$"],
      correct: 3,
      solution: ["$\\sin A\\cos B=\\dfrac12\\big[\\sin(A+B)+\\sin(A-B)\\big]$ olduğundan $2\\sin A\\cos B=\\sin(A+B)+\\sin(A-B)$.", "$A=52{,}5^\\circ$, $B=7{,}5^\\circ$: $A+B=60^\\circ$, $A-B=45^\\circ$.", "$2\\sin 52{,}5^\\circ\\cos 7{,}5^\\circ=\\sin 60^\\circ+\\sin 45^\\circ=\\dfrac{\\sqrt3}{2}+\\dfrac{\\sqrt2}{2}=\\dfrac{\\sqrt3+\\sqrt2}{2}$."],
      answer: "$\\dfrac{\\sqrt3+\\sqrt2}{2}$ (D).",
    },
  ],
};

export default quiz;
