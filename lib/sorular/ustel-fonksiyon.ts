import type { TopicQuiz } from "./types";

// ustel-fonksiyon — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "ustel-fonksiyon",
  questions: [
    {
      id: "ustel-fonksiyon-01",
      difficulty: "Kolay",
      prompt: "$f(x)=\\left(\\dfrac{1}{2}\\right)^{x}$ fonksiyonu için $f(-3)$ değeri kaçtır?",
      options: ["$-8$", "$-6$", "$\\dfrac{1}{8}$", "$6$", "$8$"],
      correct: 4,
      solution: ["$f(-3)=\\left(\\dfrac{1}{2}\\right)^{-3}$ yazılır.", "Negatif üs tabanı ters çevirir: $\\left(\\dfrac{1}{2}\\right)^{-3}=2^{3}$.", "$2^{3}=8$."],
      answer: "$8$",
    },
    {
      id: "ustel-fonksiyon-02",
      difficulty: "Kolay",
      prompt: "$2^{x+1}=64$ denklemini sağlayan $x$ değeri kaçtır?",
      options: ["$5$", "$6$", "$7$", "$32$", "$63$"],
      correct: 0,
      solution: ["Sağ tarafı $2$ tabanında yaz: $64=2^{6}$.", "Denklem $2^{x+1}=2^{6}$ olur.", "Üsleri eşitle: $x+1=6\\Rightarrow x=5$."],
      answer: "$x=5$",
    },
    {
      id: "ustel-fonksiyon-03",
      difficulty: "Orta",
      prompt: "$9^{x-1}=27$ denkleminin çözümü aşağıdakilerden hangisidir?",
      options: ["$x=\\dfrac{3}{2}$", "$x=2$", "$x=\\dfrac{5}{2}$", "$x=\\dfrac{5}{3}$", "$x=3$"],
      correct: 2,
      solution: ["Her iki tarafı $3$ tabanına çevir: $9=3^{2}$, $27=3^{3}$.", "$\\left(3^{2}\\right)^{x-1}=3^{3}\\Rightarrow 3^{2(x-1)}=3^{3}$.", "Üsleri eşitle: $2(x-1)=3\\Rightarrow 2x-2=3$.", "$2x=5\\Rightarrow x=\\dfrac{5}{2}$."],
      answer: "$x=\\dfrac{5}{2}$",
    },
    {
      id: "ustel-fonksiyon-04",
      difficulty: "Orta",
      prompt: "$5^{x}=4$ olduğuna göre $5^{x+2}+5^{x}$ ifadesinin değeri kaçtır?",
      options: ["$14$", "$24$", "$29$", "$104$", "$500$"],
      correct: 3,
      solution: ["$5^{x+2}=5^{x}\\cdot 5^{2}=25\\cdot 5^{x}$.", "$5^{x}=4$ yerine koy: $5^{x+2}=25\\cdot 4=100$.", "$5^{x+2}+5^{x}=100+4=104$."],
      answer: "$104$",
    },
    {
      id: "ustel-fonksiyon-05",
      difficulty: "Orta",
      prompt: "$3^{x+1}+3^{x}=108$ denklemini sağlayan $x$ değeri kaçtır?",
      options: ["$2$", "$3$", "$4$", "$\\dfrac{7}{2}$", "$27$"],
      correct: 1,
      solution: ["$3^{x+1}=3\\cdot 3^{x}$ olduğundan denklem: $3\\cdot 3^{x}+3^{x}=108$.", "Ortak çarpan: $3^{x}(3+1)=108\\Rightarrow 4\\cdot 3^{x}=108$.", "$3^{x}=27=3^{3}\\Rightarrow x=3$."],
      answer: "$x=3$",
    },
    {
      id: "ustel-fonksiyon-06",
      difficulty: "Orta",
      prompt: "Bir laboratuvarda bakteri sayısı $N(t)=3\\cdot 2^{t}$ ile modellenmektedir ($t$: saat). Bakteri sayısının başlangıçtaki değerinin $16$ katına ulaşması için kaç saat geçmelidir?",
      options: ["$2$", "$3$", "$4$", "$5$", "$8$"],
      correct: 2,
      solution: ["Başlangıç değeri $N(0)=3\\cdot 2^{0}=3$.", "$16$ katı: $16\\cdot 3=48$, yani $N(t)=48$ olmalı.", "$3\\cdot 2^{t}=48\\Rightarrow 2^{t}=16=2^{4}$.", "Üsleri eşitle: $t=4$ saat."],
      answer: "$4$ saat",
    },
  ],
};

export default quiz;
