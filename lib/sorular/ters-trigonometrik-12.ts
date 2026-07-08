import type { TopicQuiz } from "./types";

// ters-trigonometrik-12 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "ters-trigonometrik-12",
  questions: [
    {
      id: "ters-trigonometrik-12-01",
      difficulty: "Kolay",
      prompt: "$\\arccos\\left(-\\dfrac{\\sqrt3}{2}\\right)$ değeri kaçtır?",
      options: ["$\\dfrac{\\pi}{6}$", "$\\dfrac{5\\pi}{6}$", "$\\dfrac{2\\pi}{3}$", "$-\\dfrac{\\pi}{6}$", "$\\dfrac{7\\pi}{6}$"],
      correct: 1,
      solution: ["$\\arccos$ cevabı $[0,\\pi]$ aralığında olmalıdır.", "$\\cos\\theta=-\\dfrac{\\sqrt3}{2}$ olan açı bu aralıkta II. bölgededir.", "$\\cos\\dfrac{5\\pi}{6}=-\\dfrac{\\sqrt3}{2}$ olduğundan $\\theta=\\dfrac{5\\pi}{6}$.", "(Girdi negatif olduğu için cevap I. bölgede $\\dfrac{\\pi}{6}$ değildir; ayrıca $\\dfrac{7\\pi}{6}$ değer kümesi dışındadır.)"],
      answer: "$\\dfrac{5\\pi}{6}$",
    },
    {
      id: "ters-trigonometrik-12-02",
      difficulty: "Kolay",
      prompt: "$\\arcsin\\left(-\\dfrac12\\right)+\\arctan\\sqrt3$ toplamı kaçtır?",
      options: ["$-\\dfrac{\\pi}{6}$", "$\\dfrac{\\pi}{2}$", "$\\dfrac{\\pi}{6}$", "$\\dfrac{5\\pi}{6}$", "$\\dfrac{\\pi}{3}$"],
      correct: 2,
      solution: ["$\\arcsin\\left(-\\dfrac12\\right)$ cevabı $\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]$ aralığında negatif açıdır: $-\\dfrac{\\pi}{6}$.", "$\\arctan\\sqrt3$ cevabı $\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)$ aralığındadır: $\\dfrac{\\pi}{3}$.", "Topla: $-\\dfrac{\\pi}{6}+\\dfrac{\\pi}{3}=-\\dfrac{\\pi}{6}+\\dfrac{2\\pi}{6}=\\dfrac{\\pi}{6}$."],
      answer: "$\\dfrac{\\pi}{6}$",
    },
    {
      id: "ters-trigonometrik-12-03",
      difficulty: "Orta",
      prompt: "$\\tan\\left(\\arcsin\\left(-\\dfrac{5}{13}\\right)\\right)$ değeri kaçtır?",
      options: ["$\\dfrac{5}{12}$", "$-\\dfrac{12}{5}$", "$-\\dfrac{5}{13}$", "$-\\dfrac{5}{12}$", "$\\dfrac{12}{13}$"],
      correct: 3,
      solution: ["$\\theta=\\arcsin\\left(-\\dfrac{5}{13}\\right)$ olsun: $\\sin\\theta=-\\dfrac{5}{13}$.", "Girdi negatif olduğundan $\\theta$, $\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]$ içinde IV. bölgededir; orada $\\cos\\theta\\ge 0$.", "$\\cos\\theta=\\sqrt{1-\\sin^2\\theta}=\\sqrt{1-\\dfrac{25}{169}}=\\dfrac{12}{13}$.", "$\\tan\\theta=\\dfrac{\\sin\\theta}{\\cos\\theta}=\\dfrac{-5/13}{12/13}=-\\dfrac{5}{12}$."],
      answer: "$-\\dfrac{5}{12}$",
    },
    {
      id: "ters-trigonometrik-12-04",
      difficulty: "Orta",
      prompt: "$\\arcsin\\left(\\sin\\dfrac{2\\pi}{3}\\right)$ değeri kaçtır?",
      options: ["$\\dfrac{2\\pi}{3}$", "$\\dfrac{\\pi}{3}$", "$\\dfrac{\\pi}{6}$", "$-\\dfrac{\\pi}{3}$", "$\\dfrac{\\sqrt3}{2}$"],
      correct: 1,
      solution: ["$\\arcsin$ cevabı $\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]$ aralığında olmalı; $\\dfrac{2\\pi}{3}$ bu aralıkta değildir.", "Önce $\\sin\\dfrac{2\\pi}{3}=\\dfrac{\\sqrt3}{2}$.", "$\\arcsin\\dfrac{\\sqrt3}{2}$, aralıkta sinüsü $\\dfrac{\\sqrt3}{2}$ olan açıdır: $\\dfrac{\\pi}{3}$.", "Yani sonuç $\\dfrac{2\\pi}{3}$ değil, $\\dfrac{\\pi}{3}$'tür."],
      answer: "$\\dfrac{\\pi}{3}$",
    },
    {
      id: "ters-trigonometrik-12-05",
      difficulty: "Orta",
      prompt: "Bir yürüyüş rampası, yatayda $15$ m ilerlerken $8$ m yükselmektedir. Rampanın yatayla yaptığı açı $\\alpha=\\arctan\\dfrac{8}{15}$ olduğuna göre, $\\sin\\alpha$ değeri kaçtır?",
      options: ["$\\dfrac{8}{15}$", "$\\dfrac{15}{17}$", "$\\dfrac{8}{17}$", "$\\dfrac{17}{8}$", "$\\dfrac{8}{23}$"],
      correct: 2,
      solution: ["$\\alpha=\\arctan\\dfrac{8}{15}$ olsun: $\\tan\\alpha=\\dfrac{8}{15}$ ve girdi pozitif olduğundan $\\alpha\\in\\left(0,\\dfrac{\\pi}{2}\\right)$, tüm oranlar pozitiftir.", "Dik üçgen: karşı kenar $8$, komşu kenar $15$, hipotenüs $\\sqrt{8^2+15^2}=\\sqrt{289}=17$.", "$\\sin\\alpha=\\dfrac{\\text{karşı}}{\\text{hipotenüs}}=\\dfrac{8}{17}$."],
      answer: "$\\dfrac{8}{17}$",
    },
    {
      id: "ters-trigonometrik-12-06",
      difficulty: "Zor",
      prompt: "$\\cos\\left(\\arcsin\\dfrac35+\\arccos\\dfrac{5}{13}\\right)$ değeri kaçtır?",
      options: ["$\\dfrac{56}{65}$", "$-\\dfrac{16}{65}$", "$\\dfrac{16}{65}$", "$-\\dfrac{56}{65}$", "$\\dfrac{33}{65}$"],
      correct: 1,
      solution: ["$A=\\arcsin\\dfrac35$: $\\sin A=\\dfrac35$, girdi pozitif ve $A\\in\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]$ olduğundan $\\cos A=\\dfrac45$.", "$B=\\arccos\\dfrac{5}{13}$: $\\cos B=\\dfrac{5}{13}$, $B\\in[0,\\pi]$ ve girdi pozitif olduğundan $\\sin B=\\dfrac{12}{13}$.", "Toplam formülü: $\\cos(A+B)=\\cos A\\cos B-\\sin A\\sin B$.", "$=\\dfrac45\\cdot\\dfrac{5}{13}-\\dfrac35\\cdot\\dfrac{12}{13}=\\dfrac{20}{65}-\\dfrac{36}{65}=-\\dfrac{16}{65}$."],
      answer: "$-\\dfrac{16}{65}$",
    },
  ],
};

export default quiz;
