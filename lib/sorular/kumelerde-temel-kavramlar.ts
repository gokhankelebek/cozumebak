import type { TopicQuiz } from "./types";

// kumelerde-temel-kavramlar — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "kumelerde-temel-kavramlar",
  questions: [
    {
      id: "kumelerde-temel-kavramlar-01",
      difficulty: "Kolay",
      prompt: "$A=\\{x\\,:\\,-3\\le x<2,\\ x\\in\\mathbb{Z}\\}$ kümesi liste yöntemiyle yazıldığında eleman sayısı $s(A)$ kaçtır?",
      options: ["$4$", "$5$", "$6$", "$3$", "$7$"],
      correct: 1,
      solution: ["Koşul: $-3$ dâhil, $2$ hariç tam sayılar.", "Elemanlar: $-3,\\ -2,\\ -1,\\ 0,\\ 1$.", "Sayarız: $5$ eleman vardır, yani $s(A)=5$."],
      answer: "$s(A)=5$ (A seçeneği: $\\{-3,-2,-1,0,1\\}$).",
    },
    {
      id: "kumelerde-temel-kavramlar-02",
      difficulty: "Orta",
      prompt: "Bir kümenin alt küme sayısı $64$ olduğuna göre bu kümenin eleman sayısı kaçtır?",
      options: ["$8$", "$32$", "$5$", "$6$", "$7$"],
      correct: 3,
      solution: ["$n$ elemanlı bir kümenin alt küme sayısı $2^n$'dir.", "$2^n=64=2^6$ olduğundan $n=6$.", "Eleman sayısı $6$'dır."],
      answer: "$n=6$.",
    },
    {
      id: "kumelerde-temel-kavramlar-03",
      difficulty: "Orta",
      prompt: "$5$ elemanlı bir kümenin kaç tane öz alt kümesi (kendisi hariç alt kümesi) vardır?",
      options: ["$16$", "$32$", "$31$", "$25$", "$30$"],
      correct: 2,
      solution: ["Alt küme sayısı $2^n=2^5=32$.", "Öz alt küme, kümenin kendisi dışındaki tüm alt kümelerdir; sayısı $2^n-1$.", "$2^5-1=32-1=31$."],
      answer: "$31$ öz alt küme.",
    },
    {
      id: "kumelerde-temel-kavramlar-06",
      difficulty: "Zor",
      prompt: "$6$ elemanlı bir $A$ kümesinin, belirli bir $k$ elemanını mutlaka içeren kaç tane alt kümesi vardır?",
      options: ["$64$", "$63$", "$32$", "$16$", "$31$"],
      correct: 2,
      solution: ["$k$ elemanı her alt kümede zorunlu olarak yer alacak.", "Geriye kalan $6-1=5$ elemanın her biri için 'var/yok' iki seçenek vardır.", "Bu alt kümelerin sayısı $2^{5}=32$'dir.", "(Kontrol: $k$ içerenler ile içermeyenler eşit paylaşır; $\\dfrac{2^6}{2}=32$.)"],
      answer: "$32$ alt küme.",
    },
  ],
};

export default quiz;
