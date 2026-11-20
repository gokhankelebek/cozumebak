import type { TopicQuiz } from "./types";

// prizma-piramit-11 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "prizma-piramit-11",
  questions: [
    {
      id: "prizma-piramit-11-01",
      sekil: {
        aciklama: "Ayrıtları 6 cm, 5 cm ve 2 cm olan dikdörtgenler prizması.",
        noktalar: {},
        noktalar3d: { A: [0, 0, 0], B: [6, 0, 0], C: [6, 0, 5], D: [0, 0, 5], E: [0, 2, 0], F: [6, 2, 0], G: [6, 2, 5], H: [0, 2, 5] },
        dogrular: [{ p: ["A", "B"] }, { p: ["B", "F"] }, { p: ["F", "E"] }, { p: ["E", "A"] }, { p: ["E", "H"] }, { p: ["H", "G"] }, { p: ["G", "F"] }, { p: ["B", "C"] }, { p: ["C", "G"] }, { p: ["A", "D"], kesik: true }, { p: ["D", "C"], kesik: true }, { p: ["D", "H"], kesik: true }],
        kenarlar: [
          { p: ["A", "B"], metin: "6" },
          { p: ["B", "C"], metin: "5" },
          { p: ["A", "E"], metin: "2" },
        ],
        gizli: ["A", "B", "C", "D", "E", "F", "G", "H"],
      },
      difficulty: "Kolay",
      prompt: "Ayrıtları $6\\,\\text{cm}$, $5\\,\\text{cm}$ ve $2\\,\\text{cm}$ olan bir dikdörtgenler prizmasının hacmi kaç $\\text{cm}^3$'tür?",
      options: ["$13$", "$30$", "$52$", "$60$", "$120$"],
      correct: 3,
      solution: ["Dikdörtgenler prizmasının hacmi üç ayrıtın çarpımıdır: $V=a\\cdot b\\cdot c$.", "$V=6\\cdot 5\\cdot 2$.", "$V=30\\cdot 2=60\\ \\text{cm}^3$."],
      answer: "$60\\ \\text{cm}^3$ (D).",
    },
    {
      id: "prizma-piramit-11-02",
      sekil: {
        aciklama: "Hacmi 512 santimetreküp olan küp; ayrıtı bilinmiyor.",
        noktalar: {},
        noktalar3d: { A: [0, 0, 0], B: [8, 0, 0], C: [8, 0, 8], D: [0, 0, 8], E: [0, 8, 0], F: [8, 8, 0], G: [8, 8, 8], H: [0, 8, 8] },
        dogrular: [{ p: ["A", "B"] }, { p: ["B", "F"] }, { p: ["F", "E"] }, { p: ["E", "A"] }, { p: ["E", "H"] }, { p: ["H", "G"] }, { p: ["G", "F"] }, { p: ["B", "C"] }, { p: ["C", "G"] }, { p: ["A", "D"], kesik: true }, { p: ["D", "C"], kesik: true }, { p: ["D", "H"], kesik: true }],
        kenarlar: [
          { p: ["A", "B"], metin: "?", vurgu: true },
        ],
        gizli: ["A", "B", "C", "D", "E", "F", "G", "H"],
      },
      difficulty: "Kolay",
      prompt: "Hacmi $512\\,\\text{cm}^3$ olan bir küpün bir ayrıtı kaç cm'dir?",
      options: ["$6$", "$7$", "$8$", "$9$", "$12$"],
      correct: 2,
      solution: ["Küpün hacmi $V=a^3$ olduğundan $a=\\sqrt[3]{V}$.", "$a=\\sqrt[3]{512}$.", "$8^3=512$ olduğundan $a=8\\ \\text{cm}$."],
      answer: "$8\\ \\text{cm}$ (C).",
    },
    {
      id: "prizma-piramit-11-03",
      sekil: {
        aciklama: "Taban kenarları 5 cm ve 3 cm, yüksekliği 8 cm olan dik prizma.",
        noktalar: {},
        noktalar3d: { A: [0, 0, 0], B: [5, 0, 0], C: [5, 0, 3], D: [0, 0, 3], E: [0, 8, 0], F: [5, 8, 0], G: [5, 8, 3], H: [0, 8, 3] },
        dogrular: [{ p: ["A", "B"] }, { p: ["B", "F"] }, { p: ["F", "E"] }, { p: ["E", "A"] }, { p: ["E", "H"] }, { p: ["H", "G"] }, { p: ["G", "F"] }, { p: ["B", "C"] }, { p: ["C", "G"] }, { p: ["A", "D"], kesik: true }, { p: ["D", "C"], kesik: true }, { p: ["D", "H"], kesik: true }],
        kenarlar: [
          { p: ["A", "B"], metin: "5" },
          { p: ["B", "C"], metin: "3" },
          { p: ["A", "E"], metin: "8" },
        ],
        gizli: ["A", "B", "C", "D", "E", "F", "G", "H"],
      },
      difficulty: "Orta",
      prompt: "Tabanı $5\\,\\text{cm}$ ve $3\\,\\text{cm}$ kenarlı dikdörtgen, yüksekliği $8\\,\\text{cm}$ olan dik prizmanın tüm yüzey alanı kaç $\\text{cm}^2$'dir?",
      options: ["$128$", "$143$", "$158$", "$188$", "$248$"],
      correct: 2,
      solution: ["Taban alanı: $A_{\\text{taban}}=5\\cdot 3=15\\ \\text{cm}^2$.", "Taban çevresi: $2(5+3)=16\\ \\text{cm}$. Yan alan: $A_{\\text{yan}}=16\\cdot 8=128\\ \\text{cm}^2$.", "İki taban olduğundan: $A=2\\cdot A_{\\text{taban}}+A_{\\text{yan}}=2\\cdot 15+128=30+128=158\\ \\text{cm}^2$."],
      answer: "$158\\ \\text{cm}^2$ (C).",
    },
    {
      id: "prizma-piramit-11-04",
      sekil: {
        aciklama: "Taban kenarı 16 cm olan kare tabanlı düzgün piramit; yanal yüksekliği 17 cm.",
        noktalar: {},
        noktalar3d: { A: [0, 0, 0], B: [16, 0, 0], C: [16, 0, 16], D: [0, 0, 16], T: [8.0, 15, 8.0], O: [8.0, 0, 8.0], M: [8.0, 0, 0] },
        dogrular: [{ p: ["A", "B"] }, { p: ["B", "C"] }, { p: ["T", "A"] }, { p: ["T", "B"] }, { p: ["T", "C"] }, { p: ["T", "M"] }, { p: ["A", "D"], kesik: true }, { p: ["D", "C"], kesik: true }, { p: ["T", "D"], kesik: true }],
        dikler: [["T", "M", "B"]],
        kenarlar: [
          { p: ["A", "B"], metin: "16" },
          { p: ["T", "M"], metin: "17", konum: 0.4, ic: true },
        ],
        gizli: ["A", "B", "C", "D", "T", "O", "M"],
      },
      difficulty: "Orta",
      prompt: "Taban kenarı $16\\,\\text{cm}$ olan kare tabanlı düzgün bir piramidin yanal yüksekliği $17\\,\\text{cm}$'dir. Bu piramidin hacmi kaç $\\text{cm}^3$'tür?",
      options: ["$1280$", "$1360$", "$1445$", "$2176$", "$3840$"],
      correct: 0,
      solution: ["Yarı-kenar: $\\dfrac{a}{2}=\\dfrac{16}{2}=8\\ \\text{cm}$.", "Cisim yüksekliği, yanal yükseklik ve yarı-kenar bir dik üçgen oluşturur: $h=\\sqrt{\\ell^2-\\left(\\dfrac{a}{2}\\right)^2}=\\sqrt{17^2-8^2}=\\sqrt{289-64}=\\sqrt{225}=15\\ \\text{cm}$.", "Taban alanı: $A_{\\text{taban}}=16^2=256\\ \\text{cm}^2$.", "Hacim: $V=\\dfrac{1}{3}\\cdot 256\\cdot 15=\\dfrac{3840}{3}=1280\\ \\text{cm}^3$."],
      answer: "$1280\\ \\text{cm}^3$ (A).",
    },
    {
      id: "prizma-piramit-11-05",
      sekil: {
        aciklama: "Taban ayrıtları 30 cm ve 20 cm, yüksekliği 25 cm olan akvaryum; yüksekliğinin beşte dördüne kadar su dolu (boyalı).",
        noktalar: {},
        noktalar3d: { S1: [0, 20, 0], S2: [30, 20, 0], S3: [30, 20, 20], S4: [0, 20, 20], A: [0, 0, 0], B: [30, 0, 0], C: [30, 0, 20], D: [0, 0, 20], E: [0, 25, 0], F: [30, 25, 0], G: [30, 25, 20], H: [0, 25, 20] },
        boyali: [["A", "B", "S2", "S1"], ["B", "C", "S3", "S2"], ["S1", "S2", "S3", "S4"]],
        dogrular: [{ p: ["S1", "S2"] }, { p: ["S2", "S3"] }, { p: ["A", "B"] }, { p: ["B", "F"] }, { p: ["F", "E"] }, { p: ["E", "A"] }, { p: ["E", "H"] }, { p: ["H", "G"] }, { p: ["G", "F"] }, { p: ["B", "C"] }, { p: ["C", "G"] }, { p: ["A", "D"], kesik: true }, { p: ["D", "C"], kesik: true }, { p: ["D", "H"], kesik: true }],
        kenarlar: [
          { p: ["A", "B"], metin: "30" },
          { p: ["B", "C"], metin: "20" },
          { p: ["A", "E"], metin: "25" },
        ],
        gizli: ["A", "B", "C", "D", "E", "F", "G", "H", "S1", "S2", "S3", "S4"],
      },
      difficulty: "Orta",
      prompt: "Bir akvaryum, taban ayrıtları $30\\,\\text{cm}$ ve $20\\,\\text{cm}$, yüksekliği $25\\,\\text{cm}$ olan dikdörtgenler prizması biçimindedir. Akvaryum, yüksekliğinin $\\dfrac{4}{5}$'ine kadar su ile doludur. Akvaryumdaki su kaç litredir? ($1\\ \\text{litre}=1000\\ \\text{cm}^3$)",
      options: ["$9$", "$12$", "$15$", "$18$", "$24$"],
      correct: 1,
      solution: ["Su seviyesinin yüksekliği: $h_{\\text{su}}=25\\cdot\\dfrac{4}{5}=20\\ \\text{cm}$.", "Suyun hacmi: $V=30\\cdot 20\\cdot 20=12000\\ \\text{cm}^3$.", "Litreye çevir: $\\dfrac{12000}{1000}=12$ litre."],
      answer: "$12$ litre (B).",
    },
    {
      id: "prizma-piramit-11-06",
      sekil: {
        aciklama: "Taban kenarı 12 cm, cisim yüksekliği 8 cm olan kare tabanlı düzgün piramit.",
        noktalar: {},
        noktalar3d: { A: [0, 0, 0], B: [12, 0, 0], C: [12, 0, 12], D: [0, 0, 12], T: [6.0, 8, 6.0], O: [6.0, 0, 6.0], M: [6.0, 0, 0] },
        dogrular: [{ p: ["A", "B"] }, { p: ["B", "C"] }, { p: ["T", "A"] }, { p: ["T", "B"] }, { p: ["T", "C"] }, { p: ["A", "D"], kesik: true }, { p: ["D", "C"], kesik: true }, { p: ["T", "D"], kesik: true }, { p: ["T", "O"], kesik: true }, { p: ["O", "M"], kesik: true }],
        dikler: [["T", "O", "M"]],
        kenarlar: [
          { p: ["A", "B"], metin: "12" },
          { p: ["T", "O"], metin: "8" },
        ],
        gizli: ["A", "B", "C", "D", "T", "O", "M"],
      },
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
