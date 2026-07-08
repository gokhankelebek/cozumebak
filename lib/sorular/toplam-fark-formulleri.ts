import type { TopicQuiz } from "./types";

// toplam-fark-formulleri — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "toplam-fark-formulleri",
  questions: [
    {
      id: "toplam-fark-formulleri-01",
      difficulty: "Kolay",
      prompt: "$\\cos 105°$ değeri aşağıdakilerden hangisidir?",
      options: ["$\\dfrac{\\sqrt6+\\sqrt2}{4}$", "$\\dfrac{\\sqrt2-\\sqrt6}{4}$", "$\\dfrac{\\sqrt6-\\sqrt2}{4}$", "$-\\dfrac{\\sqrt6+\\sqrt2}{4}$", "$\\dfrac{\\sqrt3-1}{2}$"],
      correct: 1,
      solution: ["$105°=60°+45°$ yaz ve $\\cos(a+b)=\\cos a\\cos b-\\sin a\\sin b$ formülünü uygula.", "$\\cos 105°=\\cos 60°\\cos 45°-\\sin 60°\\sin 45°=\\dfrac12\\cdot\\dfrac{\\sqrt2}{2}-\\dfrac{\\sqrt3}{2}\\cdot\\dfrac{\\sqrt2}{2}$.", "$=\\dfrac{\\sqrt2}{4}-\\dfrac{\\sqrt6}{4}=\\dfrac{\\sqrt2-\\sqrt6}{4}$.", "Bu değer negatiftir; $105°$ II. bölgede olduğundan kosinüsün negatif çıkması tutarlıdır."],
      answer: "$\\dfrac{\\sqrt2-\\sqrt6}{4}$",
    },
    {
      id: "toplam-fark-formulleri-02",
      difficulty: "Kolay",
      prompt: "$\\sin 85°\\cos 25°-\\cos 85°\\sin 25°$ ifadesinin değeri kaçtır?",
      options: ["$\\dfrac12$", "$\\dfrac{\\sqrt2}{2}$", "$\\dfrac{\\sqrt3}{2}$", "$1$", "$\\dfrac{\\sqrt6+\\sqrt2}{4}$"],
      correct: 2,
      solution: ["İfade $\\sin(a-b)=\\sin a\\cos b-\\cos a\\sin b$ açılımının aynısıdır; $a=85°$, $b=25°$.", "$=\\sin(85°-25°)=\\sin 60°$.", "$\\sin 60°=\\dfrac{\\sqrt3}{2}$."],
      answer: "$\\dfrac{\\sqrt3}{2}$",
    },
    {
      id: "toplam-fark-formulleri-04",
      difficulty: "Orta",
      prompt: "$\\cos a=-\\dfrac45$ ve $a$ II. bölgede ise $\\cos 2a$ kaçtır?",
      options: ["$-\\dfrac{7}{25}$", "$\\dfrac{24}{25}$", "$\\dfrac{7}{25}$", "$-\\dfrac{24}{25}$", "$\\dfrac{16}{25}$"],
      correct: 2,
      solution: ["Yalnız $\\cos a$ verildiği için $\\cos 2a=2\\cos^2 a-1$ biçimini seç; bu biçimde bölge işareti $\\cos^2 a$ içinde kaybolur.", "$\\cos 2a=2\\left(-\\dfrac45\\right)^2-1=2\\cdot\\dfrac{16}{25}-1=\\dfrac{32}{25}-1$.", "$=\\dfrac{32-25}{25}=\\dfrac{7}{25}$."],
      answer: "$\\dfrac{7}{25}$",
    },
    {
      id: "toplam-fark-formulleri-05",
      difficulty: "Orta",
      prompt: "Bir gözlem kulesinin tepesinden yatayla $\\theta$ açısı yapacak biçimde bir kamera yerleştiriliyor. $\\theta$ dar bir açı olup $\\sin\\theta=\\dfrac{7}{25}$ olduğu biliniyor. Kameranın görüş açısı iki katına çıkarıldığında yeni açı $2\\theta$ olur. Buna göre $\\sin 2\\theta$ değeri kaçtır?",
      options: ["$\\dfrac{14}{25}$", "$\\dfrac{336}{625}$", "$\\dfrac{527}{625}$", "$\\dfrac{168}{625}$", "$\\dfrac{48}{25}$"],
      correct: 1,
      solution: ["$\\theta$ dar açı (I. bölge) olduğundan $\\cos\\theta>0$. $\\cos\\theta=\\sqrt{1-\\left(\\dfrac{7}{25}\\right)^2}=\\sqrt{1-\\dfrac{49}{625}}=\\sqrt{\\dfrac{576}{625}}=\\dfrac{24}{25}$.", "$\\sin 2\\theta=2\\sin\\theta\\cos\\theta=2\\cdot\\dfrac{7}{25}\\cdot\\dfrac{24}{25}$.", "$=\\dfrac{2\\cdot 7\\cdot 24}{625}=\\dfrac{336}{625}$."],
      answer: "$\\dfrac{336}{625}$",
    },
    {
      id: "toplam-fark-formulleri-06",
      difficulty: "Zor",
      prompt: "$\\sin a=\\dfrac35$ ve $a$ II. bölgede; $\\cos b=\\dfrac{5}{13}$ ve $b$ IV. bölgede olduğuna göre $\\sin(a-b)$ kaçtır?",
      options: ["$\\dfrac{33}{65}$", "$-\\dfrac{63}{65}$", "$-\\dfrac{33}{65}$", "$\\dfrac{63}{65}$", "$-\\dfrac{16}{65}$"],
      correct: 2,
      solution: ["II. bölgede kosinüs negatif: $\\cos a=-\\sqrt{1-\\dfrac{9}{25}}=-\\dfrac45$.", "IV. bölgede sinüs negatif: $\\sin b=-\\sqrt{1-\\dfrac{25}{169}}=-\\dfrac{12}{13}$.", "$\\sin(a-b)=\\sin a\\cos b-\\cos a\\sin b=\\dfrac35\\cdot\\dfrac{5}{13}-\\left(-\\dfrac45\\right)\\left(-\\dfrac{12}{13}\\right)$.", "$=\\dfrac{15}{65}-\\dfrac{48}{65}=-\\dfrac{33}{65}$."],
      answer: "$-\\dfrac{33}{65}$",
    },
  ],
};

export default quiz;
