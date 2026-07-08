import type { TopicQuiz } from "./types";

// ebob-ekok-10 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "ebob-ekok-10",
  questions: [
    {
      id: "ebob-ekok-10-01",
      difficulty: "Orta",
      prompt: "$\\text{EKOK}(9,\\ 12,\\ 20)$ değeri kaçtır?",
      options: ["$180$", "$3$", "$720$", "$60$", "$36$"],
      correct: 0,
      solution: ["Sayıları asal çarpanlarına ayır: $9=3^2$, $12=2^2\\cdot 3$, $20=2^2\\cdot 5$.", "EKOK için görünen tüm asalları en büyük üsleriyle al: $2^2,\\ 3^2,\\ 5^1$.", "$\\text{EKOK}=2^2\\cdot 3^2\\cdot 5=4\\cdot 9\\cdot 5=180$."],
      answer: "$180$",
    },
    {
      id: "ebob-ekok-10-02",
      difficulty: "Orta",
      prompt: "Bir miktar bilye $8$'erli, $12$'şerli ve $18$'erli gruplara hiç artmadan tam olarak ayrılabiliyor. Bu bilye sayısının olabilecek en küçük değeri kaçtır?",
      options: ["$36$", "$72$", "$2$", "$144$", "$24$"],
      correct: 1,
      solution: ["\"Hepsine tam bölünen en küçük sayı\" istendiği için $\\text{EKOK}(8,12,18)$ bulunur.", "$8=2^3$, $12=2^2\\cdot 3$, $18=2\\cdot 3^2$.", "Tüm asalları en büyük üsleriyle al: $\\text{EKOK}=2^3\\cdot 3^2=8\\cdot 9=72$."],
      answer: "$72$",
    },
    {
      id: "ebob-ekok-10-03",
      difficulty: "Kolay",
      prompt: "$\\text{EBOB}(60,\\ 84)$ değeri kaçtır?",
      options: ["$6$", "$420$", "$12$", "$4$", "$24$"],
      correct: 2,
      solution: ["$60=2^2\\cdot 3\\cdot 5$, $84=2^2\\cdot 3\\cdot 7$.", "EBOB için ortak asalları en küçük üsleriyle al: ortak olanlar $2$ ve $3$.", "$\\text{EBOB}=2^2\\cdot 3=12$."],
      answer: "$12$",
    },
    {
      id: "ebob-ekok-10-04",
      difficulty: "Kolay",
      prompt: "Biri $20$, diğeri $30$ dakikada bir çalan iki alarm saat $14{:}00$'te birlikte çaldı. Bu iki alarm bir sonraki sefer ilk kez saat kaçta birlikte çalar?",
      options: ["$14{:}10$", "$14{:}50$", "$16{:}00$", "$15{:}00$", "$14{:}30$"],
      correct: 3,
      solution: ["\"İlk kez tekrar birlikte çalma\" aralığı $\\text{EKOK}(20,30)$ dakikadır.", "$20=2^2\\cdot 5$, $30=2\\cdot 3\\cdot 5$; $\\text{EKOK}=2^2\\cdot 3\\cdot 5=60$ dakika.", "$14{:}00+60$ dk $=15{:}00$."],
      answer: "$15{:}00$",
    },
    {
      id: "ebob-ekok-10-05",
      difficulty: "Orta",
      prompt: "$a$ ve $b$ pozitif tam sayıları için $\\text{EBOB}(a,b)=15$, $\\text{EKOK}(a,b)=90$ ve $a=45$ olduğuna göre $b$ kaçtır?",
      options: ["$6$", "$18$", "$60$", "$45$", "$30$"],
      correct: 4,
      solution: ["İki sayı için $\\text{EBOB}\\cdot\\text{EKOK}=a\\cdot b$ bağıntısını kullan.", "$15\\cdot 90=45\\cdot b\\Rightarrow 1350=45b$.", "$b=\\dfrac{1350}{45}=30$."],
      answer: "$30$",
    },
    {
      id: "ebob-ekok-10-06",
      difficulty: "Zor",
      prompt: "İki pozitif tam sayının EBOB'u $6$, EKOK'u $180$'dir. Bu koşulu sağlayan kaç farklı $\\{a,b\\}$ sayı çifti vardır?",
      options: ["$2$", "$3$", "$4$", "$6$", "$8$"],
      correct: 2,
      solution: ["$a=6x$, $b=6y$ ve $\\text{EBOB}(x,y)=1$ (aralarında asal) yaz.", "$\\text{EKOK}(a,b)=6xy=180\\Rightarrow xy=30=2\\cdot 3\\cdot 5$.", "$30$'u aralarında asal iki çarpana ayır: $\\{1,30\\},\\{2,15\\},\\{3,10\\},\\{5,6\\}$ → $4$ çift.", "Bunlar $\\{6,180\\},\\{12,90\\},\\{18,60\\},\\{30,36\\}$ çiftlerini verir."],
      answer: "$4$",
    },
  ],
};

export default quiz;
