import type { TopicQuiz } from "./types";

// yonlu-acilar — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "yonlu-acilar",
  questions: [
    {
      id: "yonlu-acilar-01",
      difficulty: "Kolay",
      prompt: "$252^\\circ$ kaç radyandır?",
      options: ["$\\dfrac{7\\pi}{5}$", "$\\dfrac{5\\pi}{7}$", "$\\dfrac{7\\pi}{6}$", "$\\dfrac{6\\pi}{5}$", "$\\dfrac{14\\pi}{5}$"],
      correct: 0,
      solution: ["Dereceyi radyana çevirmek için $\\times\\dfrac{\\pi}{180}$ çarpanını kullanırız.", "$252^\\circ=252\\cdot\\dfrac{\\pi}{180}=\\dfrac{252\\pi}{180}$.", "Pay ve paydayı $36$ ile sadeleştir: $\\dfrac{252}{180}=\\dfrac{7}{5}$.", "Sonuç: $\\dfrac{7\\pi}{5}\\ \\text{rad}$."],
      answer: "$\\dfrac{7\\pi}{5}$ radyan.",
    },
    {
      id: "yonlu-acilar-02",
      difficulty: "Kolay",
      prompt: "$\\dfrac{11\\pi}{9}$ radyan kaç derecedir?",
      options: ["$110^\\circ$", "$198^\\circ$", "$220^\\circ$", "$240^\\circ$", "$200^\\circ$"],
      correct: 2,
      solution: ["Radyanı dereceye çevirmek için $\\times\\dfrac{180}{\\pi}$ çarpanını kullanırız.", "$\\dfrac{11\\pi}{9}\\cdot\\dfrac{180}{\\pi}=\\dfrac{11\\cdot 180}{9}$.", "$\\dfrac{180}{9}=20$ olduğundan $11\\cdot 20=220$.", "Sonuç: $220^\\circ$."],
      answer: "$220^\\circ$.",
    },
    {
      id: "yonlu-acilar-03",
      difficulty: "Orta",
      prompt: "$-430^\\circ$ açısının $[0^\\circ,360^\\circ)$ aralığındaki esas ölçüsü kaç derecedir?",
      options: ["$70^\\circ$", "$290^\\circ$", "$250^\\circ$", "$-70^\\circ$", "$110^\\circ$"],
      correct: 1,
      solution: ["Esas ölçü $[0^\\circ,360^\\circ)$ aralığında olmalı; negatif açıya pozitif olana kadar $360^\\circ$ ekleriz.", "$-430^\\circ+360^\\circ=-70^\\circ$; hâlâ negatif.", "$-70^\\circ+360^\\circ=290^\\circ$; bu aralıktadır.", "Sonuç: $290^\\circ$."],
      answer: "$290^\\circ$.",
    },
    {
      id: "yonlu-acilar-04",
      difficulty: "Orta",
      prompt: "$\\dfrac{29\\pi}{6}$ radyanlık açının $[0,2\\pi)$ aralığındaki esas ölçüsü nedir?",
      options: ["$\\dfrac{\\pi}{6}$", "$\\dfrac{7\\pi}{6}$", "$\\dfrac{11\\pi}{6}$", "$\\dfrac{5\\pi}{6}$", "$\\dfrac{17\\pi}{6}$"],
      correct: 3,
      solution: ["$2\\pi=\\dfrac{12\\pi}{6}$ olarak yazılır; tam turları atarız.", "İki tam tur $=2\\cdot\\dfrac{12\\pi}{6}=\\dfrac{24\\pi}{6}$.", "$\\dfrac{29\\pi}{6}-\\dfrac{24\\pi}{6}=\\dfrac{5\\pi}{6}$.", "$\\dfrac{5\\pi}{6}$, $[0,2\\pi)$ aralığındadır."],
      answer: "$\\dfrac{5\\pi}{6}$.",
    },
    {
      id: "yonlu-acilar-05",
      difficulty: "Orta",
      prompt: "Yarıçapı $15$ cm olan bir dairesel pistin merkezinden bakıldığında bir koşucunun taradığı merkez açı $150^\\circ$'dir. Koşucunun aldığı yol (yay uzunluğu) kaç cm'dir?",
      options: ["$\\dfrac{25\\pi}{2}$", "$25\\pi$", "$\\dfrac{5\\pi}{2}$", "$2250\\pi$", "$\\dfrac{75\\pi}{2}$"],
      correct: 0,
      solution: ["Yay uzunluğu formülü $\\ell=r\\cdot\\theta$'dır ve $\\theta$ radyan olmalıdır.", "Önce $150^\\circ$'yi radyana çevir: $150\\cdot\\dfrac{\\pi}{180}=\\dfrac{5\\pi}{6}$.", "$\\ell=15\\cdot\\dfrac{5\\pi}{6}=\\dfrac{75\\pi}{6}=\\dfrac{25\\pi}{2}$.", "Sonuç: $\\dfrac{25\\pi}{2}$ cm."],
      answer: "$\\dfrac{25\\pi}{2}$ cm.",
    },
    {
      id: "yonlu-acilar-06",
      difficulty: "Zor",
      prompt: "$-\\dfrac{14\\pi}{3}$ radyanlık açının terminal kenarı hangi bölgededir?",
      options: ["I. bölge", "II. bölge", "III. bölge", "IV. bölge", "Negatif $y$ ekseni üzerinde"],
      correct: 2,
      solution: ["Önce esas ölçüyü bul; $2\\pi=\\dfrac{6\\pi}{3}$ olarak tam tur ekleriz.", "$-\\dfrac{14\\pi}{3}+\\dfrac{6\\pi}{3}=-\\dfrac{8\\pi}{3}$; hâlâ negatif.", "$-\\dfrac{8\\pi}{3}+\\dfrac{6\\pi}{3}=-\\dfrac{2\\pi}{3}$; hâlâ negatif.", "$-\\dfrac{2\\pi}{3}+\\dfrac{6\\pi}{3}=\\dfrac{4\\pi}{3}$; esas ölçü budur.", "$\\dfrac{4\\pi}{3}=240^\\circ$, $180^\\circ$ ile $270^\\circ$ arasındadır → III. bölge."],
      answer: "III. bölge.",
    },
  ],
};

export default quiz;
