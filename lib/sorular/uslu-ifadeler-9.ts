import type { TopicQuiz } from "./types";

// uslu-ifadeler-9 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "uslu-ifadeler-9",
  questions: [
    {
      id: "uslu-ifadeler-9-01",
      difficulty: "Kolay",
      prompt: "$2^{6}\\cdot 2^{-4}\\cdot 2^{0}$ işleminin sonucu kaçtır?",
      options: ["$4$", "$8$", "$16$", "$\\dfrac{1}{4}$", "$1$"],
      correct: 0,
      solution: ["Aynı tabanda çarpmada üsler toplanır: $2^{6}\\cdot 2^{-4}\\cdot 2^{0}=2^{6+(-4)+0}$.", "Üsleri topla: $6-4+0=2$, yani $2^{2}$.", "$2^{2}=4$."],
      answer: "$4$",
    },
    {
      id: "uslu-ifadeler-9-02",
      difficulty: "Kolay",
      prompt: "$(-2)^{4}-2^{3}$ işleminin sonucu kaçtır?",
      options: ["$-24$", "$24$", "$8$", "$-16$", "$10$"],
      correct: 2,
      solution: ["$(-2)^{4}$: taban $-2$, üs çift olduğundan sonuç pozitiftir: $(-2)^{4}=16$.", "$2^{3}=8$.", "Çıkar: $16-8=8$."],
      answer: "$8$",
    },
    {
      id: "uslu-ifadeler-9-03",
      difficulty: "Orta",
      prompt: "$\\left(\\dfrac{2}{5}\\right)^{-2}$ ifadesinin değeri kaçtır?",
      options: ["$\\dfrac{4}{25}$", "$\\dfrac{25}{4}$", "$-\\dfrac{25}{4}$", "$\\dfrac{5}{2}$", "$\\dfrac{4}{10}$"],
      correct: 1,
      solution: ["Negatif üste tabanı ters çevir, üssü pozitif yap: $\\left(\\dfrac{2}{5}\\right)^{-2}=\\left(\\dfrac{5}{2}\\right)^{2}$.", "Pay ve paydayı ayrı ayrı üs al: $\\dfrac{5^{2}}{2^{2}}=\\dfrac{25}{4}$."],
      answer: "$\\dfrac{25}{4}$",
    },
    {
      id: "uslu-ifadeler-9-04",
      difficulty: "Orta",
      prompt: "$\\dfrac{3^{7}\\cdot 3^{2}}{3^{5}}$ ifadesinin değeri kaçtır?",
      options: ["$9$", "$27$", "$243$", "$81$", "$3$"],
      correct: 3,
      solution: ["Paydaki çarpımda üsleri topla: $3^{7}\\cdot 3^{2}=3^{9}$.", "Bölmede üsleri çıkar: $\\dfrac{3^{9}}{3^{5}}=3^{9-5}=3^{4}$.", "$3^{4}=81$."],
      answer: "$81$",
    },
    {
      id: "uslu-ifadeler-9-05",
      difficulty: "Zor",
      prompt: "$9^{x}=27$ eşitliğini sağlayan $x$ değeri kaçtır?",
      options: ["$3$", "$\\dfrac{2}{3}$", "$\\dfrac{1}{3}$", "$2$", "$\\dfrac{3}{2}$"],
      correct: 4,
      solution: ["Her iki tarafı $3$ tabanına çevir: $9=3^{2}$ ve $27=3^{3}$.", "$9^{x}=(3^{2})^{x}=3^{2x}$ olduğundan denklem $3^{2x}=3^{3}$ olur.", "Tabanlar eşit olduğundan üsler eşittir: $2x=3\\Rightarrow x=\\dfrac{3}{2}$."],
      answer: "$\\dfrac{3}{2}$",
    },
    {
      id: "uslu-ifadeler-9-06",
      difficulty: "Orta",
      prompt: "$2^{-2}+\\left(\\dfrac{1}{3}\\right)^{-1}+5^{0}$ işleminin sonucu kaçtır?",
      options: ["$\\dfrac{13}{4}$", "$\\dfrac{17}{4}$", "$\\dfrac{21}{4}$", "$4$", "$\\dfrac{1}{4}$"],
      correct: 1,
      solution: ["$2^{-2}=\\dfrac{1}{2^{2}}=\\dfrac{1}{4}$.", "$\\left(\\dfrac{1}{3}\\right)^{-1}=\\dfrac{3}{1}=3$.", "$5^{0}=1$.", "Topla: $\\dfrac{1}{4}+3+1=\\dfrac{1}{4}+4=\\dfrac{17}{4}$."],
      answer: "$\\dfrac{17}{4}$",
    },
  ],
};

export default quiz;
