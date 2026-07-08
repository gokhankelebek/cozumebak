import type { TopicQuiz } from "./types";

// prizma-piramit-11 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "prizma-piramit-11",
  questions: [
    {
      id: "prizma-piramit-11-01",
      difficulty: "Kolay",
      prompt: "Ayrıtları $6\\,\\text{cm}$, $5\\,\\text{cm}$ ve $2\\,\\text{cm}$ olan bir dikdörtgenler prizmasının hacmi kaç $\\text{cm}^3$'tür?",
      options: ["$13$", "$30$", "$52$", "$60$", "$120$"],
      correct: 3,
      solution: ["Dikdörtgenler prizmasının hacmi üç ayrıtın çarpımıdır: $V=a\\cdot b\\cdot c$.", "$V=6\\cdot 5\\cdot 2$.", "$V=30\\cdot 2=60\\ \\text{cm}^3$."],
      answer: "$60\\ \\text{cm}^3$ (D).",
    },
    {
      id: "prizma-piramit-11-02",
      difficulty: "Kolay",
      prompt: "Hacmi $512\\,\\text{cm}^3$ olan bir küpün bir ayrıtı kaç cm'dir?",
      options: ["$6$", "$7$", "$8$", "$9$", "$12$"],
      correct: 2,
      solution: ["Küpün hacmi $V=a^3$ olduğundan $a=\\sqrt[3]{V}$.", "$a=\\sqrt[3]{512}$.", "$8^3=512$ olduğundan $a=8\\ \\text{cm}$."],
      answer: "$8\\ \\text{cm}$ (C).",
    },
    {
      id: "prizma-piramit-11-03",
      difficulty: "Orta",
      prompt: "Tabanı $5\\,\\text{cm}$ ve $3\\,\\text{cm}$ kenarlı dikdörtgen, yüksekliği $8\\,\\text{cm}$ olan dik prizmanın tüm yüzey alanı kaç $\\text{cm}^2$'dir?",
      options: ["$128$", "$143$", "$158$", "$188$", "$248$"],
      correct: 2,
      solution: ["Taban alanı: $A_{\\text{taban}}=5\\cdot 3=15\\ \\text{cm}^2$.", "Taban çevresi: $2(5+3)=16\\ \\text{cm}$. Yan alan: $A_{\\text{yan}}=16\\cdot 8=128\\ \\text{cm}^2$.", "İki taban olduğundan: $A=2\\cdot A_{\\text{taban}}+A_{\\text{yan}}=2\\cdot 15+128=30+128=158\\ \\text{cm}^2$."],
      answer: "$158\\ \\text{cm}^2$ (C).",
    },
    {
      id: "prizma-piramit-11-04",
      difficulty: "Orta",
      prompt: "Taban kenarı $16\\,\\text{cm}$ olan kare tabanlı düzgün bir piramidin yanal yüksekliği $17\\,\\text{cm}$'dir. Bu piramidin hacmi kaç $\\text{cm}^3$'tür?",
      options: ["$1280$", "$1360$", "$1445$", "$2176$", "$3840$"],
      correct: 0,
      solution: ["Yarı-kenar: $\\dfrac{a}{2}=\\dfrac{16}{2}=8\\ \\text{cm}$.", "Cisim yüksekliği, yanal yükseklik ve yarı-kenar bir dik üçgen oluşturur: $h=\\sqrt{\\ell^2-\\left(\\dfrac{a}{2}\\right)^2}=\\sqrt{17^2-8^2}=\\sqrt{289-64}=\\sqrt{225}=15\\ \\text{cm}$.", "Taban alanı: $A_{\\text{taban}}=16^2=256\\ \\text{cm}^2$.", "Hacim: $V=\\dfrac{1}{3}\\cdot 256\\cdot 15=\\dfrac{3840}{3}=1280\\ \\text{cm}^3$."],
      answer: "$1280\\ \\text{cm}^3$ (A).",
    },
    {
      id: "prizma-piramit-11-05",
      difficulty: "Orta",
      prompt: "Bir akvaryum, taban ayrıtları $30\\,\\text{cm}$ ve $20\\,\\text{cm}$, yüksekliği $25\\,\\text{cm}$ olan dikdörtgenler prizması biçimindedir. Akvaryum, yüksekliğinin $\\dfrac{4}{5}$'ine kadar su ile doludur. Akvaryumdaki su kaç litredir? ($1\\ \\text{litre}=1000\\ \\text{cm}^3$)",
      options: ["$9$", "$12$", "$15$", "$18$", "$24$"],
      correct: 1,
      solution: ["Su seviyesinin yüksekliği: $h_{\\text{su}}=25\\cdot\\dfrac{4}{5}=20\\ \\text{cm}$.", "Suyun hacmi: $V=30\\cdot 20\\cdot 20=12000\\ \\text{cm}^3$.", "Litreye çevir: $\\dfrac{12000}{1000}=12$ litre."],
      answer: "$12$ litre (B).",
    },
    {
      id: "prizma-piramit-11-06",
      difficulty: "Zor",
      prompt: "Taban kenarı $12\\,\\text{cm}$, cisim yüksekliği $8\\,\\text{cm}$ olan kare tabanlı düzgün bir piramidin tüm yüzey alanı kaç $\\text{cm}^2$'dir?",
      options: ["$240$", "$288$", "$336$", "$384$", "$528$"],
      correct: 3,
      solution: ["Yarı-kenar: $\\dfrac{a}{2}=\\dfrac{12}{2}=6\\ \\text{cm}$.", "Yanal yükseklik: $\\ell=\\sqrt{h^2+\\left(\\dfrac{a}{2}\\right)^2}=\\sqrt{8^2+6^2}=\\sqrt{64+36}=\\sqrt{100}=10\\ \\text{cm}$.", "Taban alanı: $A_{\\text{taban}}=12^2=144\\ \\text{cm}^2$. Yan alan: $A_{\\text{yan}}=2a\\ell=2\\cdot 12\\cdot 10=240\\ \\text{cm}^2$.", "Tüm yüzey alanı: $A=144+240=384\\ \\text{cm}^2$."],
      answer: "$384\\ \\text{cm}^2$ (D).",
    },
  ],
};

export default quiz;
