import type { TopicQuiz } from "./types";

// ucgende-alan-10 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "ucgende-alan-10",
  questions: [
    {
      id: "ucgende-alan-10-01",
      difficulty: "Kolay",
      prompt: "Tabanı $16$ birim, bu tabana ait yüksekliği $7$ birim olan bir üçgenin alanı kaç birimkaredir?",
      options: ["$56$", "$112$", "$28$", "$23$", "$8$"],
      correct: 0,
      solution: ["Taban–yükseklik formülü: $\\text{Alan}=\\dfrac{\\text{taban}\\cdot\\text{yükseklik}}{2}$.", "$\\text{Alan}=\\dfrac{16\\cdot 7}{2}=\\dfrac{112}{2}=56$."],
      answer: "$56$ birimkare (A).",
    },
    {
      id: "ucgende-alan-10-02",
      difficulty: "Kolay",
      prompt: "Dik kenarları $8$ birim ve $15$ birim olan bir dik üçgenin alanı kaç birimkaredir?",
      options: ["$120$", "$60$", "$30$", "$23$", "$17$"],
      correct: 1,
      solution: ["Dik üçgende dik kenarlar birbirinin taban ve yüksekliğidir: $\\text{Alan}=\\dfrac{\\text{dik kenar}_1\\cdot\\text{dik kenar}_2}{2}$.", "$\\text{Alan}=\\dfrac{8\\cdot 15}{2}=\\dfrac{120}{2}=60$."],
      answer: "$60$ birimkare (B).",
    },
    {
      id: "ucgende-alan-10-03",
      difficulty: "Orta",
      prompt: "İki kenarının uzunlukları $16$ ve $5$ birim, bu iki kenar arasındaki açısı $150°$ olan bir üçgenin alanı kaç birimkaredir? ($\\sin 150°=\\dfrac12$)",
      options: ["$40$", "$80$", "$20$", "$60$", "$10$"],
      correct: 2,
      solution: ["İki kenar ve aralarındaki açı verildiğinde: $\\text{Alan}=\\dfrac12\\,a\\,b\\,\\sin C$.", "$\\sin 150°=\\dfrac12$ olduğundan $\\text{Alan}=\\dfrac12\\cdot 16\\cdot 5\\cdot\\dfrac12$.", "$=\\dfrac12\\cdot 80\\cdot\\dfrac12=40\\cdot\\dfrac12=20$."],
      answer: "$20$ birimkare (C).",
    },
    {
      id: "ucgende-alan-10-04",
      difficulty: "Orta",
      prompt: "Bir eşkenar üçgenin alanı $36\\sqrt3$ birimkaredir. Bu üçgenin bir kenarının uzunluğu kaç birimdir?",
      options: ["$6$", "$18$", "$9$", "$12$", "$24$"],
      correct: 3,
      solution: ["Kenarı $a$ olan eşkenar üçgende $\\text{Alan}=\\dfrac{a^2\\sqrt3}{4}$.", "$\\dfrac{a^2\\sqrt3}{4}=36\\sqrt3$; iki tarafı $\\sqrt3$'e bölelim: $\\dfrac{a^2}{4}=36$.", "$a^2=144\\Rightarrow a=12$."],
      answer: "$12$ birim (D).",
    },
    {
      id: "ucgende-alan-10-05",
      difficulty: "Orta",
      prompt: "Alanı $54$ birimkare olan bir üçgenin bir tabanı $12$ birimdir. Bu tabana ait yükseklik kaç birimdir?",
      options: ["$4{,}5$", "$324$", "$6$", "$18$", "$9$"],
      correct: 4,
      solution: ["Taban–yükseklik formülünden denklem kuralım: $\\dfrac{\\text{taban}\\cdot h}{2}=\\text{Alan}$.", "$\\dfrac{12\\cdot h}{2}=54\\Rightarrow 6h=54$.", "$h=\\dfrac{54}{6}=9$."],
      answer: "$9$ birim (E).",
    },
  ],
};

export default quiz;
