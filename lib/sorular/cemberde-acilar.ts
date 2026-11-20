import type { TopicQuiz } from "./types";

// cemberde-acilar — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "cemberde-acilar",
  questions: [
    {
      id: "cemberde-acilar-01",
      sekil: {
        aciklama: "Çemberde 64 derecelik AB yayı ve geri kalan büyük yay; büyük yay bilinmiyor.",
        noktalar: { O: [0, 0], A: [-2.65, -4.24], B: [2.65, -4.24] },
        cemberYaylari: [
          { merkez: "O", bas: "A", son: "B", metin: "64°" },
          { merkez: "O", bas: "B", son: "A", metin: "?", vurgu: true, ince: true },
        ],
        isaretli: ["A", "B"],
        gizli: ["O"],
      },
      difficulty: "Kolay",
      prompt: "Bir çemberde $\\overset{\\frown}{AB}=64°$'lik bir yaydır. Bu yayın geri kalan (büyük) yayının ölçüsü kaç derecedir?",
      options: ["$128°$", "$180°$", "$296°$", "$316°$", "$32°$"],
      correct: 2,
      solution: ["Çemberin tamamı $360°$'lik bir yaydır.", "Büyük yay $=360°-\\overset{\\frown}{AB}=360°-64°$.", "$=296°$."],
      answer: "$296°$",
    },
    {
      id: "cemberde-acilar-02",
      sekil: {
        aciklama: "Çemberde 154 derecelik MN yayı ve bu yayı gören çevre açı; çevre açı bilinmiyor.",
        noktalar: { O: [0, 0], M: [-4.872, -1.125], N: [4.872, -1.125], K: [0.0, 5.0] },
        cemberler: [{ merkez: "O", nokta: "M" }],
        cemberYaylari: [{ merkez: "O", bas: "M", son: "N", metin: "154°" }],
        dogrular: [{ p: ["K", "M"] }, { p: ["K", "N"] }],
        acilar: [{ p: ["M", "K", "N"], metin: "?", vurgu: true, yaricap: 28 }],
        isaretli: ["M", "N"],
        gizli: ["O", "K"],
      },
      difficulty: "Kolay",
      prompt: "Bir çemberde $\\overset{\\frown}{MN}=154°$ ise bu yayı çember üzerindeki bir noktadan gören çevre açının ölçüsü kaç derecedir?",
      options: ["$308°$", "$154°$", "$103°$", "$77°$", "$26°$"],
      correct: 3,
      solution: ["Çevre açı, gördüğü yayın yarısıdır.", "Çevre açı $=\\dfrac{154°}{2}$.", "$=77°$."],
      answer: "$77°$",
    },
    {
      id: "cemberde-acilar-03",
      sekil: {
        aciklama: "Yarıçapı 13 olan çemberde AB çap, C çember üzerinde, BC = 10; AC bilinmiyor.",
        noktalar: { O: [0, 0], A: [-13, 0], B: [13, 0], C: [9.154, 9.231] },
        cemberler: [{ merkez: "O", nokta: "A" }],
        cokgenler: [["A", "B", "C"]],
        isaretli: ["O"],
        kenarlar: [
          { p: ["B", "C"], metin: "10" },
          { p: ["A", "C"], metin: "?", vurgu: true, ic: true },
          { p: ["O", "B"], metin: "13", ic: true },
        ],
        etiketYonu: { O: -90 },
      },
      difficulty: "Orta",
      prompt: "Yarıçapı $13$ birim olan bir çemberde $[AB]$ bir çaptır ve $C$ noktası çember üzerindedir. $|BC|=10$ birim ise $|AC|$ kaç birimdir?",
      options: ["$24$", "$\\sqrt{269}$", "$16$", "$3$", "$12$"],
      correct: 0,
      solution: ["Yarıçap $13$ olduğundan çap $|AB|=2\\cdot 13=26$ birimdir.", "$[AB]$ çap olduğundan $C$'deki çevre açı çapı görür: $\\widehat{ACB}=90°$; $ABC$ dik üçgen, hipotenüs $[AB]$.", "Pisagor: $|AB|^2=|AC|^2+|BC|^2 \\Rightarrow 26^2=|AC|^2+10^2$.", "$|AC|^2=676-100=576 \\Rightarrow |AC|=24$."],
      answer: "$24$ birim",
    },
    {
      id: "cemberde-acilar-04",
      sekil: {
        aciklama: "Çemberde aynı AB yayını gören iki çevre açı: ACB = 5x + 8 ve ADB = 2x + 29.",
        noktalar: { O: [0, 0], A: [-3.41, -3.657], B: [3.41, -3.657], C: [-4.096, 2.868], D: [4.096, 2.868] },
        cemberler: [{ merkez: "O", nokta: "A" }],
        dogrular: [{ p: ["C", "A"] }, { p: ["C", "B"] }, { p: ["D", "A"] }, { p: ["D", "B"] }],
        acilar: [
          { p: ["A", "C", "B"], metin: "5x + 8", yaricap: 22 },
          { p: ["A", "D", "B"], metin: "2x + 29", yaricap: 22 },
        ],
        gizli: ["O"],
      },
      difficulty: "Orta",
      prompt: "Bir çemberde aynı $\\overset{\\frown}{AB}$ yayını gören iki çevre açıdan biri $\\widehat{ACB}=5x+8$, diğeri $\\widehat{ADB}=2x+29$'dur. Buna göre $x$ kaçtır?",
      options: ["$5$", "$7$", "$21$", "$43$", "$37$"],
      correct: 1,
      solution: ["Aynı yayı gören çevre açılar eşittir: $5x+8=2x+29$.", "$5x-2x=29-8 \\Rightarrow 3x=21$.", "$x=7$."],
      answer: "$x=7$",
    },
    {
      id: "cemberde-acilar-05",
      sekil: {
        aciklama: "Çemberin dışındaki P noktasından çizilen iki kesen; uzak yay 150, yakın yay 40 derece; P açısı bilinmiyor.",
        noktalar: { O: [0, 0], P: [-7.982, 0], N1: [-4.698, 1.71], F1: [1.294, 4.83], N2: [-4.698, -1.71], F2: [1.294, -4.83] },
        cemberler: [{ merkez: "O", nokta: "N1" }],
        dogrular: [{ p: ["P", "F1"] }, { p: ["P", "F2"] }],
        cemberYaylari: [
          { merkez: "O", bas: "N1", son: "N2", metin: "40°", ic: true },
          { merkez: "O", bas: "F2", son: "F1", metin: "150°" },
        ],
        acilar: [{ p: ["F1", "P", "F2"], metin: "?", vurgu: true, yaricap: 26 }],
        gizli: ["O", "N1", "F1", "N2", "F2"],
      },
      difficulty: "Orta",
      prompt: "Bir çemberin dışındaki $P$ noktasından çizilen iki kesen, çemberde ölçüleri $150°$ ve $40°$ olan iki yay belirliyor. $\\widehat{P}$ kaç derecedir?",
      options: ["$95°$", "$190°$", "$110°$", "$75°$", "$55°$"],
      correct: 4,
      solution: ["Dış açı, gördüğü iki yayın farkının yarısıdır: $\\widehat{P}=\\dfrac{150°-40°}{2}$.", "$=\\dfrac{110°}{2}$.", "$=55°$."],
      answer: "$55°$",
    },
    {
      id: "cemberde-acilar-06",
      sekil: {
        aciklama: "Çemberin içinde kesişen iki kiriş; karşılıklı yaylar x ve 3x, aralarındaki açı 70 derece.",
        noktalar: { O: [0, 0], A: [-1.504, 4.769], B: [1.504, 4.769], C: [3.967, -3.044], D: [-3.967, -3.044], E: [-0.0, 2.621] },
        cemberler: [{ merkez: "O", nokta: "A" }],
        dogrular: [{ p: ["A", "C"] }, { p: ["B", "D"] }],
        cemberYaylari: [
          { merkez: "O", bas: "B", son: "A", metin: "x" },
          { merkez: "O", bas: "D", son: "C", metin: "3x" },
        ],
        acilar: [{ p: ["B", "E", "A"], metin: "70°" }],
        gizli: ["O", "A", "B", "C", "D", "E"],
      },
      difficulty: "Zor",
      prompt: "Bir çemberin içinde kesişen iki kirişin oluşturduğu açının gördüğü karşılıklı yayların ölçüleri $3x$ ve $x$'tir. Bu iç açı $70°$ ise büyük yayın ($3x$ olanın) ölçüsü kaç derecedir?",
      options: ["$35°$", "$105°$", "$70°$", "$140°$", "$47°$"],
      correct: 1,
      solution: ["İç açı, karşılıklı yayların ortalamasıdır: $\\dfrac{3x+x}{2}=70°$.", "$\\dfrac{4x}{2}=70° \\Rightarrow 2x=70° \\Rightarrow x=35°$.", "Büyük yay $3x=3\\cdot 35°=105°$."],
      answer: "$105°$",
    },
  ],
};

export default quiz;
