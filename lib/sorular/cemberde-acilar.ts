import type { TopicQuiz } from "./types";

// cemberde-acilar — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "cemberde-acilar",
  questions: [
    {
      id: "cemberde-acilar-01",
      difficulty: "Kolay",
      prompt: "Bir çemberde $\\overset{\\frown}{AB}=64°$'lik bir yaydır. Bu yayın geri kalan (büyük) yayının ölçüsü kaç derecedir?",
      options: ["$128°$", "$180°$", "$296°$", "$316°$", "$32°$"],
      correct: 2,
      solution: ["Çemberin tamamı $360°$'lik bir yaydır.", "Büyük yay $=360°-\\overset{\\frown}{AB}=360°-64°$.", "$=296°$."],
      answer: "$296°$",
    },
    {
      id: "cemberde-acilar-02",
      difficulty: "Kolay",
      prompt: "Bir çemberde $\\overset{\\frown}{MN}=154°$ ise bu yayı çember üzerindeki bir noktadan gören çevre açının ölçüsü kaç derecedir?",
      options: ["$308°$", "$154°$", "$103°$", "$77°$", "$26°$"],
      correct: 3,
      solution: ["Çevre açı, gördüğü yayın yarısıdır.", "Çevre açı $=\\dfrac{154°}{2}$.", "$=77°$."],
      answer: "$77°$",
    },
    {
      id: "cemberde-acilar-03",
      difficulty: "Orta",
      prompt: "Yarıçapı $13$ birim olan bir çemberde $[AB]$ bir çaptır ve $C$ noktası çember üzerindedir. $|BC|=10$ birim ise $|AC|$ kaç birimdir?",
      options: ["$24$", "$\\sqrt{269}$", "$16$", "$3$", "$12$"],
      correct: 0,
      solution: ["Yarıçap $13$ olduğundan çap $|AB|=2\\cdot 13=26$ birimdir.", "$[AB]$ çap olduğundan $C$'deki çevre açı çapı görür: $\\widehat{ACB}=90°$; $ABC$ dik üçgen, hipotenüs $[AB]$.", "Pisagor: $|AB|^2=|AC|^2+|BC|^2 \\Rightarrow 26^2=|AC|^2+10^2$.", "$|AC|^2=676-100=576 \\Rightarrow |AC|=24$."],
      answer: "$24$ birim",
    },
    {
      id: "cemberde-acilar-04",
      difficulty: "Orta",
      prompt: "Bir çemberde aynı $\\overset{\\frown}{AB}$ yayını gören iki çevre açıdan biri $\\widehat{ACB}=5x+8$, diğeri $\\widehat{ADB}=2x+29$'dur. Buna göre $x$ kaçtır?",
      options: ["$5$", "$7$", "$21$", "$43$", "$37$"],
      correct: 1,
      solution: ["Aynı yayı gören çevre açılar eşittir: $5x+8=2x+29$.", "$5x-2x=29-8 \\Rightarrow 3x=21$.", "$x=7$."],
      answer: "$x=7$",
    },
    {
      id: "cemberde-acilar-05",
      difficulty: "Orta",
      prompt: "Bir çemberin dışındaki $P$ noktasından çizilen iki kesen, çemberde ölçüleri $150°$ ve $40°$ olan iki yay belirliyor. $\\widehat{P}$ kaç derecedir?",
      options: ["$95°$", "$190°$", "$110°$", "$75°$", "$55°$"],
      correct: 4,
      solution: ["Dış açı, gördüğü iki yayın farkının yarısıdır: $\\widehat{P}=\\dfrac{150°-40°}{2}$.", "$=\\dfrac{110°}{2}$.", "$=55°$."],
      answer: "$55°$",
    },
    {
      id: "cemberde-acilar-06",
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
