import type { TopicQuiz } from "./types";

// ucgende-alan-10 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "ucgende-alan-10",
  questions: [
    {
      id: "ucgende-alan-10-01",
      sekil: {
        aciklama: "Tabanı 16, bu tabana ait yüksekliği 7 olan üçgen.",
        noktalar: { A: [5, 7], B: [0, 0], C: [16, 0], H: [5, 0] },
        cokgenler: [["A", "B", "C"]],
        dogrular: [{ p: ["A", "H"], kesik: true }],
        dikler: [["A", "H", "C"]],
        kenarlar: [
          { p: ["B", "C"], metin: "16" },
          { p: ["A", "H"], metin: "7", ic: true },
        ],
        gizli: ["A", "B", "C", "H"],
      },
      difficulty: "Kolay",
      prompt: "Tabanı $16$ birim, bu tabana ait yüksekliği $7$ birim olan bir üçgenin alanı kaç birimkaredir?",
      options: ["$56$", "$112$", "$28$", "$23$", "$8$"],
      correct: 0,
      solution: ["Taban–yükseklik formülü: $\\text{Alan}=\\dfrac{\\text{taban}\\cdot\\text{yükseklik}}{2}$.", "$\\text{Alan}=\\dfrac{16\\cdot 7}{2}=\\dfrac{112}{2}=56$."],
      answer: "$56$ birimkare (A).",
    },
    {
      id: "ucgende-alan-10-02",
      sekil: {
        aciklama: "Dik kenarları 8 ve 15 olan dik üçgen.",
        noktalar: { A: [0, 8], B: [15, 0], C: [0, 0] },
        cokgenler: [["A", "B", "C"]],
        dikler: [["A", "C", "B"]],
        kenarlar: [
          { p: ["A", "C"], metin: "8" },
          { p: ["C", "B"], metin: "15" },
        ],
        gizli: ["A", "B", "C"],
      },
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
      sekil: {
        aciklama: "Alanı 36 kök 3 olan eşkenar üçgen; kenar uzunluğu bilinmiyor.",
        noktalar: { A: [6, 10.392], B: [0, 0], C: [12, 0], M: [6, 3.464] },
        cokgenler: [["A", "B", "C"]],
        esitler: [{ p: ["A", "B"] }, { p: ["A", "C"] }, { p: ["B", "C"] }],
        kenarlar: [{ p: ["B", "C"], metin: "?", vurgu: true }],
        yazilar: [{ nokta: "M", metin: "36√3" }],
        gizli: ["A", "B", "C", "M"],
      },
      difficulty: "Orta",
      prompt: "Bir eşkenar üçgenin alanı $36\\sqrt3$ birimkaredir. Bu üçgenin bir kenarının uzunluğu kaç birimdir?",
      options: ["$6$", "$18$", "$9$", "$12$", "$24$"],
      correct: 3,
      solution: ["Kenarı $a$ olan eşkenar üçgende $\\text{Alan}=\\dfrac{a^2\\sqrt3}{4}$.", "$\\dfrac{a^2\\sqrt3}{4}=36\\sqrt3$; iki tarafı $\\sqrt3$'e bölelim: $\\dfrac{a^2}{4}=36$.", "$a^2=144\\Rightarrow a=12$."],
      answer: "$12$ birim (D).",
    },
    {
      id: "ucgende-alan-10-05",
      sekil: {
        aciklama: "Alanı 54 olan üçgenin tabanı 12; bu tabana ait yükseklik bilinmiyor.",
        noktalar: { A: [4, 9], B: [0, 0], C: [12, 0], H: [4, 0] },
        cokgenler: [["A", "B", "C"]],
        dogrular: [{ p: ["A", "H"], kesik: true }],
        dikler: [["A", "H", "C"]],
        kenarlar: [
          { p: ["B", "C"], metin: "12" },
          { p: ["A", "H"], metin: "?", vurgu: true, ic: true },
        ],
        gizli: ["A", "B", "C", "H"],
      },
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
