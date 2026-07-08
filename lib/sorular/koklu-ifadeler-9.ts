import type { TopicQuiz } from "./types";

// koklu-ifadeler-9 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "koklu-ifadeler-9",
  questions: [
    {
      id: "koklu-ifadeler-9-01",
      difficulty: "Kolay",
      prompt: "$\\sqrt{6}\\cdot\\sqrt{24}$ işleminin sonucu kaçtır?",
      options: ["$12$", "$18$", "$30$", "$6\\sqrt{6}$", "$12\\sqrt{2}$"],
      correct: 0,
      solution: ["Aynı dereceden kökler tek kök altında çarpılır: $\\sqrt{6}\\cdot\\sqrt{24}=\\sqrt{6\\cdot 24}=\\sqrt{144}$.", "$\\sqrt{144}=12$ çünkü $12^2=144$.", "Doğru cevap A."],
      answer: "$\\sqrt{6}\\cdot\\sqrt{24}=\\sqrt{144}=12$.",
    },
    {
      id: "koklu-ifadeler-9-02",
      difficulty: "Kolay",
      prompt: "$\\sqrt{(-6)^2}+\\sqrt[3]{-27}$ işleminin sonucu kaçtır?",
      options: ["$9$", "$-9$", "$3$", "$-3$", "$0$"],
      correct: 2,
      solution: ["$\\sqrt{(-6)^2}=\\sqrt{36}=|-6|=6$ (karekök negatif olamaz).", "$\\sqrt[3]{-27}=-3$ çünkü $(-3)^3=-27$.", "Topla: $6+(-3)=3$.", "Doğru cevap C."],
      answer: "$\\sqrt{(-6)^2}=6$ ve $\\sqrt[3]{-27}=-3$ olduğundan sonuç $6-3=3$.",
    },
    {
      id: "koklu-ifadeler-9-03",
      difficulty: "Orta",
      prompt: "$\\sqrt{75}+\\sqrt{12}-\\sqrt{48}$ işleminin sonucu aşağıdakilerden hangisidir?",
      options: ["$3\\sqrt{3}$", "$\\sqrt{39}$", "$11\\sqrt{3}$", "$\\sqrt{3}$", "$7\\sqrt{3}$"],
      correct: 0,
      solution: ["Her köklüyü sadeleştir: $\\sqrt{75}=\\sqrt{25\\cdot 3}=5\\sqrt{3}$.", "$\\sqrt{12}=\\sqrt{4\\cdot 3}=2\\sqrt{3}$ ve $\\sqrt{48}=\\sqrt{16\\cdot 3}=4\\sqrt{3}$.", "Benzer köklüleri işle: $(5+2-4)\\sqrt{3}=3\\sqrt{3}$.", "Doğru cevap A."],
      answer: "$5\\sqrt{3}+2\\sqrt{3}-4\\sqrt{3}=3\\sqrt{3}$.",
    },
    {
      id: "koklu-ifadeler-9-04",
      difficulty: "Orta",
      prompt: "$\\dfrac{4}{\\sqrt{7}-\\sqrt{3}}$ ifadesinin paydası rasyonel yapıldığında elde edilen sonuç aşağıdakilerden hangisidir?",
      options: ["$\\sqrt{7}-\\sqrt{3}$", "$\\sqrt{7}+\\sqrt{3}$", "$\\dfrac{\\sqrt{7}+\\sqrt{3}}{2}$", "$4\\sqrt{7}+4\\sqrt{3}$", "$2(\\sqrt{7}-\\sqrt{3})$"],
      correct: 1,
      solution: ["Paydanın eşleniği $\\sqrt{7}+\\sqrt{3}$'tür. Pay ve paydayı bununla çarp: $\\dfrac{4}{\\sqrt{7}-\\sqrt{3}}\\cdot\\dfrac{\\sqrt{7}+\\sqrt{3}}{\\sqrt{7}+\\sqrt{3}}=\\dfrac{4(\\sqrt{7}+\\sqrt{3})}{(\\sqrt{7})^2-(\\sqrt{3})^2}$.", "Paydayı hesapla: $7-3=4$.", "Sadeleştir: $\\dfrac{4(\\sqrt{7}+\\sqrt{3})}{4}=\\sqrt{7}+\\sqrt{3}$.", "Doğru cevap B."],
      answer: "Eşlenikle çarpılınca payda $4$ olur ve sonuç $\\sqrt{7}+\\sqrt{3}$'tür.",
    },
    {
      id: "koklu-ifadeler-9-06",
      difficulty: "Zor",
      prompt: "$\\sqrt{3}\\approx 1{,}7$ alındığına göre, $\\sqrt{12}+\\sqrt{75}$ ifadesinin yaklaşık değeri kaçtır?",
      options: ["$11{,}9$", "$8{,}5$", "$14{,}79$", "$5{,}1$", "$17{,}0$"],
      correct: 0,
      solution: ["Köklüleri sadeleştir: $\\sqrt{12}=\\sqrt{4\\cdot 3}=2\\sqrt{3}$ ve $\\sqrt{75}=\\sqrt{25\\cdot 3}=5\\sqrt{3}$.", "Benzer köklüleri topla: $2\\sqrt{3}+5\\sqrt{3}=7\\sqrt{3}$.", "$\\sqrt{3}\\approx 1{,}7$ yaz: $7\\cdot 1{,}7=11{,}9$.", "Doğru cevap A."],
      answer: "$\\sqrt{12}+\\sqrt{75}=7\\sqrt{3}\\approx 7\\cdot 1{,}7=11{,}9$.",
    },
  ],
};

export default quiz;
