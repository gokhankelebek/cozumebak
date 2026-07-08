import type { TopicQuiz } from "./types";

// iki-nokta-uzaklik-10 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "iki-nokta-uzaklik-10",
  questions: [
    {
      id: "iki-nokta-uzaklik-10-01",
      difficulty: "Kolay",
      prompt: "$A(-4,\\ 1)$ ve $B(2,\\ 9)$ noktaları arasındaki uzaklık kaç birimdir?",
      options: ["$10$", "$14$", "$\\sqrt{28}$", "$2\\sqrt{7}$", "$8$"],
      correct: 0,
      solution: ["$\\Delta x=2-(-4)=6$, $\\;\\Delta y=9-1=8$.", "$|AB|=\\sqrt{6^2+8^2}=\\sqrt{36+64}=\\sqrt{100}=10$.", "$6\\text{-}8\\text{-}10$ üçlüsü ($3\\text{-}4\\text{-}5$'in iki katı) sonucu hızlandırır."],
      answer: "$|AB|=10$.",
    },
    {
      id: "iki-nokta-uzaklik-10-02",
      difficulty: "Kolay",
      prompt: "$P(-6,\\ 8)$ noktasının orijine uzaklığı kaç birimdir?",
      options: ["$2$", "$\\sqrt{2}$", "$10$", "$14$", "$\\sqrt{28}$"],
      correct: 2,
      solution: ["Orijine uzaklık $\\sqrt{x^2+y^2}$ ile bulunur.", "$|OP|=\\sqrt{(-6)^2+8^2}=\\sqrt{36+64}=\\sqrt{100}=10$.", "İşaret karede kaybolur; $(-6)^2=36$."],
      answer: "$|OP|=10$.",
    },
    {
      id: "iki-nokta-uzaklik-10-04",
      difficulty: "Orta",
      prompt: "Köşeleri $A(-1,\\ 2)$, $B(4,\\ 2)$ ve $C(4,\\ 14)$ olan üçgenin çevresi kaç birimdir?",
      options: ["$30$", "$25$", "$17$", "$29$", "$34$"],
      correct: 0,
      solution: ["$A$ ile $B$'nin $y$'si eşit → $|AB|=|4-(-1)|=5$ (yatay kenar).", "$B$ ile $C$'nin $x$'i eşit → $|BC|=|14-2|=12$ (düşey kenar).", "$|AC|=\\sqrt{(4-(-1))^2+(14-2)^2}=\\sqrt{5^2+12^2}=\\sqrt{169}=13$.", "Çevre $=5+12+13=30$."],
      answer: "Çevre $=30$ birim.",
    },
    {
      id: "iki-nokta-uzaklik-10-05",
      difficulty: "Orta",
      prompt: "$A(2,\\ k)$ ve $B(6,\\ 4)$ noktaları arasındaki uzaklık $5$ birim olduğuna göre, $k$'nın alabileceği değerlerin toplamı kaçtır?",
      options: ["$8$", "$4$", "$1$", "$7$", "$6$"],
      correct: 0,
      solution: ["$\\Delta x=6-2=4$ sabittir.", "$\\sqrt{4^2+(4-k)^2}=5\\Rightarrow 16+(4-k)^2=25$.", "$(4-k)^2=9\\Rightarrow 4-k=\\pm3$.", "$k=1$ veya $k=7$; toplam $1+7=8$."],
      answer: "$k$ değerlerinin toplamı $8$.",
    },
    {
      id: "iki-nokta-uzaklik-10-06",
      difficulty: "Zor",
      prompt: "$A(1,\\ 3)$ ve $B(5,\\ 7)$ noktalarına eşit uzaklıkta olan ve $y$ ekseni üzerinde bulunan $P(0,\\ a)$ noktası için $a$ kaçtır?",
      options: ["$4$", "$5$", "$8$", "$2$", "$6$"],
      correct: 2,
      solution: ["$P$, $y$ ekseninde olduğundan $P(0,\\ a)$; koşul $|PA|=|PB|$.", "Kökten kurtulmak için iki tarafın karesini al: $|PA|^2=(0-1)^2+(a-3)^2=a^2-6a+10$.", "$|PB|^2=(0-5)^2+(a-7)^2=a^2-14a+74$.", "Eşitle: $a^2-6a+10=a^2-14a+74\\Rightarrow 8a=64\\Rightarrow a=8$."],
      answer: "$a=8$.",
    },
  ],
};

export default quiz;
