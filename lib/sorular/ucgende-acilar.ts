import type { TopicQuiz } from "./types";

// ucgende-acilar — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "ucgende-acilar",
  questions: [
    {
      id: "ucgende-acilar-01",
      sekil: {
        aciklama: "İç açıları 3x, 5x ve 7x olan üçgen.",
        noktalar: { A: [0, 0], B: [10, 0], C: [7.05, 5.12] },
        cokgenler: [["A", "B", "C"]],
        acilar: [
          { p: ["B", "A", "C"], metin: "3x" },
          { p: ["C", "B", "A"], metin: "5x" },
          { p: ["A", "C", "B"], metin: "7x" },
        ],
        gizli: ["A", "B", "C"],
      },
      difficulty: "Kolay",
      prompt: "Bir üçgenin iç açıları sırasıyla $3x,\\ 5x,\\ 7x$ ölçülerindedir. Bu üçgenin en büyük açısı kaç derecedir?",
      options: ["$60°$", "$72°$", "$84°$", "$96°$", "$105°$"],
      correct: 2,
      solution: ["İç açılar toplamı $180°$: $3x+5x+7x=180°$.", "$15x=180°\\Rightarrow x=12°$.", "En büyük açı $7x=7\\cdot 12°=84°$."],
      answer: "$84°$",
    },
    {
      id: "ucgende-acilar-02",
      sekil: {
        aciklama: "ABC üçgeninde A açısı 55 derece, C köşesindeki dış açı 125 derece; B açısı bilinmiyor.",
        noktalar: { A: [3.42, 9.4], B: [0, 0], C: [10, 0], D: [14, 0] },
        cokgenler: [["A", "B", "C"]],
        dogrular: [{ p: ["C", "D"], kesik: true }],
        acilar: [
          { p: ["B", "A", "C"], metin: "55°" },
          { p: ["A", "B", "C"], metin: "?", vurgu: true },
          { p: ["A", "C", "D"], metin: "125°" },
        ],
        gizli: ["D"],
      },
      difficulty: "Orta",
      prompt: "Bir $ABC$ üçgeninde $\\widehat{A}=55°$'dir. $C$ köşesindeki dış açı $125°$ olduğuna göre $\\widehat{B}$ kaç derecedir?",
      options: ["$55°$", "$70°$", "$80°$", "$110°$", "$125°$"],
      correct: 1,
      solution: ["$C$ köşesindeki dış açı, kendisine komşu olmayan $\\widehat{A}$ ve $\\widehat{B}$ iç açılarının toplamına eşittir: $125°=\\widehat{A}+\\widehat{B}$.", "$125°=55°+\\widehat{B}\\Rightarrow \\widehat{B}=70°$."],
      answer: "$\\widehat{B}=70°$",
    },
    {
      id: "ucgende-acilar-03",
      sekil: {
        aciklama: "Tepe açısı 44 derece olan ikizkenar üçgen; taban açıları x.",
        noktalar: { A: [5, 12.38], B: [0, 0], C: [10, 0] },
        cokgenler: [["A", "B", "C"]],
        acilar: [
          { p: ["B", "A", "C"], metin: "44°" },
          { p: ["C", "B", "A"], metin: "x", vurgu: true },
          { p: ["A", "C", "B"], metin: "x", vurgu: true },
        ],
        gizli: ["A", "B", "C"],
      },
      difficulty: "Kolay",
      prompt: "Bir çatı makası, tepe açısı $44°$ olan ikizkenar üçgen biçiminde tasarlanmıştır. Bu makasın taban açılarından her biri kaç derecedir?",
      options: ["$44°$", "$46°$", "$68°$", "$72°$", "$136°$"],
      correct: 2,
      solution: ["İkizkenar üçgende taban açıları eşittir; her birine $x$ diyelim.", "İç açılar toplamı $180°$: $44°+x+x=180°$.", "$2x=136°\\Rightarrow x=68°$."],
      answer: "Her taban açısı $68°$'dir.",
    },
    {
      id: "ucgende-acilar-04",
      sekil: {
        aciklama: "Üçgenin iki köşesindeki dış açılar 100 ve 140 derece; üçüncü köşedeki iç açı bilinmiyor.",
        noktalar: { P: [0, 0], Q: [10, 0], R: [1.29, 7.31], P2: [-4, 0], Q2: [14, 0] },
        cokgenler: [["P", "Q", "R"]],
        dogrular: [
          { p: ["P", "P2"], kesik: true },
          { p: ["Q", "Q2"], kesik: true },
        ],
        acilar: [
          { p: ["P2", "P", "R"], metin: "100°" },
          { p: ["R", "Q", "Q2"], metin: "140°" },
          { p: ["P", "R", "Q"], metin: "?", vurgu: true },
        ],
        gizli: ["P", "Q", "R", "P2", "Q2"],
      },
      difficulty: "Orta",
      prompt: "Bir üçgenin dış açılarından ikisi $100°$ ve $140°$'dir. Üçüncü dış açının bulunduğu köşedeki iç açı kaç derecedir?",
      options: ["$40°$", "$60°$", "$80°$", "$120°$", "$140°$"],
      correct: 1,
      solution: ["Dış açılar toplamı $360°$: $100°+140°+d=360°$.", "$240°+d=360°\\Rightarrow d=120°$ (üçüncü dış açı).", "İç açı ile dış açı bütündür: $180°-120°=60°$."],
      answer: "İlgili iç açı $60°$'dir.",
    },
    {
      id: "ucgende-acilar-05",
      sekil: {
        aciklama: "İkizkenar üçgen; taban açıları x, tepe açısı x artı 30 derece.",
        noktalar: { A: [5, 5.96], B: [0, 0], C: [10, 0] },
        cokgenler: [["A", "B", "C"]],
        acilar: [
          { p: ["B", "A", "C"], metin: "x + 30°" },
          { p: ["C", "B", "A"], metin: "x", vurgu: true },
          { p: ["A", "C", "B"], metin: "x", vurgu: true },
        ],
        gizli: ["A", "B", "C"],
      },
      difficulty: "Orta",
      prompt: "Bir ikizkenar üçgende tepe açısı, bir taban açısından $30°$ fazladır. Bu üçgenin bir taban açısı kaç derecedir?",
      options: ["$30°$", "$50°$", "$60°$", "$75°$", "$80°$"],
      correct: 1,
      solution: ["Taban açısına $x$ diyelim; iki taban açısı eşittir. Tepe açısı $x+30°$'dir.", "İç açılar toplamı $180°$: $x+x+(x+30°)=180°$.", "$3x+30°=180°\\Rightarrow 3x=150°\\Rightarrow x=50°$."],
      answer: "Taban açısı $50°$'dir.",
    },
    {
      id: "ucgende-acilar-06",
      sekil: {
        aciklama: "ABC üçgeninde A açısı 70 derece; B ve C açılarının açıortayları I noktasında kesişiyor; BIC açısı bilinmiyor.",
        noktalar: { A: [4.08, 7.06], B: [0, 0], C: [10, 0], I: [4.47, 2.58] },
        cokgenler: [["A", "B", "C"]],
        dogrular: [{ p: ["B", "I"] }, { p: ["C", "I"] }],
        acilar: [
          { p: ["B", "A", "C"], metin: "70°" },
          { p: ["A", "B", "I"] },
          { p: ["I", "B", "C"] },
          { p: ["A", "C", "I"], cift: true },
          { p: ["I", "C", "B"], cift: true },
          { p: ["B", "I", "C"], metin: "?", vurgu: true },
        ],
      },
      difficulty: "Zor",
      prompt: "$ABC$ üçgeninde $\\widehat{A}=70°$'dir. $\\widehat{B}$ ve $\\widehat{C}$ açılarının iç açıortayları $I$ noktasında kesişmektedir. $\\widehat{BIC}$ açısı kaç derecedir?",
      options: ["$110°$", "$120°$", "$125°$", "$135°$", "$140°$"],
      correct: 2,
      solution: ["İç açılar toplamından $\\widehat{B}+\\widehat{C}=180°-70°=110°$.", "Açıortaylar açıları yarıya böler: $\\dfrac{\\widehat{B}}{2}+\\dfrac{\\widehat{C}}{2}=\\dfrac{110°}{2}=55°$.", "$BIC$ üçgeninde iç açılar toplamı: $\\widehat{BIC}+55°=180°\\Rightarrow \\widehat{BIC}=125°$.", "Kontrol: $90°+\\dfrac{\\widehat{A}}{2}=90°+35°=125°$."],
      answer: "$\\widehat{BIC}=125°$'dir.",
    },
  ],
};

export default quiz;
