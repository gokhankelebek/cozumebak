import type { TopicQuiz } from "./types";

// ucgende-acilar — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "ucgende-acilar",
  questions: [
    {
      id: "ucgende-acilar-01",
      difficulty: "Kolay",
      prompt: "Bir üçgenin iç açıları sırasıyla $3x,\\ 5x,\\ 7x$ ölçülerindedir. Bu üçgenin en büyük açısı kaç derecedir?",
      options: ["$60°$", "$72°$", "$84°$", "$96°$", "$105°$"],
      correct: 2,
      solution: ["İç açılar toplamı $180°$: $3x+5x+7x=180°$.", "$15x=180°\\Rightarrow x=12°$.", "En büyük açı $7x=7\\cdot 12°=84°$."],
      answer: "$84°$",
    },
    {
      id: "ucgende-acilar-02",
      difficulty: "Orta",
      prompt: "Bir $ABC$ üçgeninde $\\widehat{A}=55°$'dir. $C$ köşesindeki dış açı $125°$ olduğuna göre $\\widehat{B}$ kaç derecedir?",
      options: ["$55°$", "$70°$", "$80°$", "$110°$", "$125°$"],
      correct: 1,
      solution: ["$C$ köşesindeki dış açı, kendisine komşu olmayan $\\widehat{A}$ ve $\\widehat{B}$ iç açılarının toplamına eşittir: $125°=\\widehat{A}+\\widehat{B}$.", "$125°=55°+\\widehat{B}\\Rightarrow \\widehat{B}=70°$."],
      answer: "$\\widehat{B}=70°$",
    },
    {
      id: "ucgende-acilar-03",
      difficulty: "Kolay",
      prompt: "Bir çatı makası, tepe açısı $44°$ olan ikizkenar üçgen biçiminde tasarlanmıştır. Bu makasın taban açılarından her biri kaç derecedir?",
      options: ["$44°$", "$46°$", "$68°$", "$72°$", "$136°$"],
      correct: 2,
      solution: ["İkizkenar üçgende taban açıları eşittir; her birine $x$ diyelim.", "İç açılar toplamı $180°$: $44°+x+x=180°$.", "$2x=136°\\Rightarrow x=68°$."],
      answer: "Her taban açısı $68°$'dir.",
    },
    {
      id: "ucgende-acilar-04",
      difficulty: "Orta",
      prompt: "Bir üçgenin dış açılarından ikisi $100°$ ve $140°$'dir. Üçüncü dış açının bulunduğu köşedeki iç açı kaç derecedir?",
      options: ["$40°$", "$60°$", "$80°$", "$120°$", "$140°$"],
      correct: 1,
      solution: ["Dış açılar toplamı $360°$: $100°+140°+d=360°$.", "$240°+d=360°\\Rightarrow d=120°$ (üçüncü dış açı).", "İç açı ile dış açı bütündür: $180°-120°=60°$."],
      answer: "İlgili iç açı $60°$'dir.",
    },
    {
      id: "ucgende-acilar-05",
      difficulty: "Orta",
      prompt: "Bir ikizkenar üçgende tepe açısı, bir taban açısından $30°$ fazladır. Bu üçgenin bir taban açısı kaç derecedir?",
      options: ["$30°$", "$50°$", "$60°$", "$75°$", "$80°$"],
      correct: 1,
      solution: ["Taban açısına $x$ diyelim; iki taban açısı eşittir. Tepe açısı $x+30°$'dir.", "İç açılar toplamı $180°$: $x+x+(x+30°)=180°$.", "$3x+30°=180°\\Rightarrow 3x=150°\\Rightarrow x=50°$."],
      answer: "Taban açısı $50°$'dir.",
    },
    {
      id: "ucgende-acilar-06",
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
