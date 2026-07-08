import type { TopicQuiz } from "./types";

// dik-ucgen-trigonometri-10 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "dik-ucgen-trigonometri-10",
  questions: [
    {
      id: "dik-ucgen-trigonometri-10-01",
      difficulty: "Kolay",
      prompt: "Dik kenarları $5$ ve $12$, hipotenüsü $13$ olan bir dik üçgende, $5$ birimlik kenarın karşısındaki dar açı $\\theta$ olduğuna göre $\\sin\\theta$ kaçtır?",
      options: ["$\\dfrac{5}{13}$", "$\\dfrac{12}{13}$", "$\\dfrac{5}{12}$", "$\\dfrac{12}{5}$", "$\\dfrac{13}{12}$"],
      correct: 0,
      solution: ["$\\theta$'nın karşısındaki kenar $5$, hipotenüs $13$'tür.", "$\\sin\\theta=\\dfrac{\\text{karşı}}{\\text{hipotenüs}}=\\dfrac{5}{13}$."],
      answer: "$\\dfrac{5}{13}$",
    },
    {
      id: "dik-ucgen-trigonometri-10-02",
      difficulty: "Kolay",
      prompt: "$\\cos 30°\\cdot\\tan 60°$ ifadesinin değeri kaçtır?",
      options: ["$\\dfrac{1}{2}$", "$\\sqrt3$", "$\\dfrac{3}{2}$", "$1$", "$\\dfrac{\\sqrt3}{2}$"],
      correct: 2,
      solution: ["$\\cos 30°=\\dfrac{\\sqrt3}{2}$ ve $\\tan 60°=\\sqrt3$.", "Çarp: $\\dfrac{\\sqrt3}{2}\\cdot\\sqrt3=\\dfrac{3}{2}$."],
      answer: "$\\dfrac{3}{2}$",
    },
    {
      id: "dik-ucgen-trigonometri-10-03",
      difficulty: "Orta",
      prompt: "$\\sin 60°\\cdot\\cos 30°-\\cos 60°\\cdot\\sin 30°$ ifadesinin değeri kaçtır?",
      options: ["$1$", "$\\dfrac{1}{2}$", "$0$", "$\\dfrac{3}{4}$", "$\\dfrac{\\sqrt3}{2}$"],
      correct: 1,
      solution: ["Değerleri yaz: $\\dfrac{\\sqrt3}{2}\\cdot\\dfrac{\\sqrt3}{2}-\\dfrac{1}{2}\\cdot\\dfrac{1}{2}$.", "$=\\dfrac{3}{4}-\\dfrac{1}{4}=\\dfrac{2}{4}=\\dfrac{1}{2}$."],
      answer: "$\\dfrac{1}{2}$",
    },
    {
      id: "dik-ucgen-trigonometri-10-04",
      difficulty: "Orta",
      prompt: "Bir dar açı $\\theta$ için $\\tan\\theta=\\dfrac{12}{5}$ olduğuna göre $\\sin\\theta-\\cos\\theta$ kaçtır?",
      options: ["$\\dfrac{5}{13}$", "$\\dfrac{7}{5}$", "$-\\dfrac{7}{13}$", "$\\dfrac{7}{13}$", "$\\dfrac{17}{13}$"],
      correct: 3,
      solution: ["$\\tan\\theta=\\dfrac{\\text{karşı}}{\\text{komşu}}=\\dfrac{12}{5}$ olduğundan karşı $=12k$, komşu $=5k$ alalım.", "Hipotenüs $=\\sqrt{(12k)^2+(5k)^2}=\\sqrt{169k^2}=13k$.", "$\\sin\\theta=\\dfrac{12k}{13k}=\\dfrac{12}{13}$, $\\cos\\theta=\\dfrac{5k}{13k}=\\dfrac{5}{13}$.", "$\\sin\\theta-\\cos\\theta=\\dfrac{12}{13}-\\dfrac{5}{13}=\\dfrac{7}{13}$."],
      answer: "$\\dfrac{7}{13}$",
    },
    {
      id: "dik-ucgen-trigonometri-10-05",
      difficulty: "Orta",
      prompt: "Yatayla $30°$ açı yapan doğrusal bir rampanın uzunluğu (eğik yüzeyi) $18$ metredir. Buna göre rampanın en yüksek noktasının yerden yüksekliği kaç metredir?",
      options: ["$9$", "$9\\sqrt3$", "$18$", "$6\\sqrt3$", "$\\dfrac{18}{\\sqrt3}$"],
      correct: 0,
      solution: ["Rampa uzunluğu hipotenüs, yükseklik $30°$'nin karşısındaki dik kenardır.", "$\\sin 30°=\\dfrac{\\text{yükseklik}}{18}=\\dfrac{1}{2}$.", "Yükseklik $=18\\cdot\\dfrac{1}{2}=9$ metre."],
      answer: "$9$ metre",
    },
    {
      id: "dik-ucgen-trigonometri-10-06",
      difficulty: "Zor",
      prompt: "Bir dar açı $\\theta$ için $\\sin\\theta=\\dfrac{\\sqrt3}{2}$ olduğuna göre $\\dfrac{1-\\cos^2\\theta}{\\sin\\theta\\cdot\\cos\\theta}$ ifadesinin değeri kaçtır?",
      options: ["$\\dfrac{1}{\\sqrt3}$", "$1$", "$\\sqrt3$", "$3$", "$\\dfrac{\\sqrt3}{2}$"],
      correct: 2,
      solution: ["$\\sin^2\\theta+\\cos^2\\theta=1$ özdeşliğinden $1-\\cos^2\\theta=\\sin^2\\theta$; pay $\\sin^2\\theta$ olur.", "$\\dfrac{\\sin^2\\theta}{\\sin\\theta\\cdot\\cos\\theta}=\\dfrac{\\sin\\theta}{\\cos\\theta}=\\tan\\theta$.", "Dar açıda $\\cos\\theta=\\sqrt{1-\\dfrac{3}{4}}=\\dfrac{1}{2}$, yani $\\theta=60°$.", "$\\tan 60°=\\dfrac{\\sqrt3/2}{1/2}=\\sqrt3$."],
      answer: "$\\sqrt3$",
    },
  ],
};

export default quiz;
