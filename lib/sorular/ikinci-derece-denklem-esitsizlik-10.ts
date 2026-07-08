import type { TopicQuiz } from "./types";

// ikinci-derece-denklem-esitsizlik-10 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "ikinci-derece-denklem-esitsizlik-10",
  questions: [
    {
      id: "ikinci-derece-denklem-esitsizlik-10-01",
      difficulty: "Kolay",
      prompt: "$x^2-2x-8=0$ denkleminin köklerinin toplamı kaçtır?",
      options: ["$-6$", "$-2$", "$2$", "$6$", "$8$"],
      correct: 2,
      solution: ["Çarpımı $-8$, toplamı $-2$ olan sayılar $-4$ ve $2$'dir.", "$(x-4)(x+2)=0\\Rightarrow x=4$ veya $x=-2$.", "Köklerin toplamı $4+(-2)=2$.", "Alternatif olarak kök-katsayı ilişkisi: toplam $=-\\dfrac{b}{a}=-\\dfrac{-2}{1}=2$."],
      answer: "Köklerin toplamı $2$'dir (C).",
    },
    {
      id: "ikinci-derece-denklem-esitsizlik-10-02",
      difficulty: "Kolay",
      prompt: "$x^2-4x+7=0$ denkleminin gerçek kök sayısı kaçtır?",
      options: ["$0$", "$1$", "$2$", "$3$", "$4$"],
      correct: 0,
      solution: ["$a=1,\\ b=-4,\\ c=7$ için $\\Delta=b^2-4ac=(-4)^2-4\\cdot1\\cdot7=16-28=-12$.", "$\\Delta<0$ olduğundan denklemin gerçek kökü yoktur.", "Gerçek kök sayısı $0$'dır."],
      answer: "$\\Delta=-12<0$ olduğundan gerçek kök yoktur; sayı $0$ (A).",
    },
    {
      id: "ikinci-derece-denklem-esitsizlik-10-03",
      difficulty: "Orta",
      prompt: "Kökleri $x_1$ ve $x_2$ olan $x^2-8x+3=0$ denklemi için $x_1^2+x_2^2$ değeri kaçtır?",
      options: ["$52$", "$58$", "$61$", "$64$", "$70$"],
      correct: 1,
      solution: ["Kök-katsayı ilişkileri: $x_1+x_2=-\\dfrac{b}{a}=8$ ve $x_1\\cdot x_2=\\dfrac{c}{a}=3$.", "Özdeşlik: $x_1^2+x_2^2=(x_1+x_2)^2-2x_1x_2$.", "$=8^2-2\\cdot3=64-6=58$."],
      answer: "$x_1^2+x_2^2=(x_1+x_2)^2-2x_1x_2=64-6=58$ (B).",
    },
    {
      id: "ikinci-derece-denklem-esitsizlik-10-04",
      difficulty: "Orta",
      prompt: "$x^2-2x-15\\ge 0$ eşitsizliğinin çözüm kümesi aşağıdakilerden hangisidir?",
      options: ["$[-3,\\ 5]$", "$(-3,\\ 5)$", "$(-\\infty,-3]\\cup[5,\\infty)$", "$(-\\infty,-5]\\cup[3,\\infty)$", "$(-\\infty,-3)\\cup(5,\\infty)$"],
      correct: 2,
      solution: ["Kökler: $x^2-2x-15=(x-5)(x+3)=0\\Rightarrow x=-3$ ve $x=5$.", "$a=1>0$ olduğundan ifade kökler dışında pozitif, kökler arasında negatiftir (ortada ters, dışta aynı).", "$\\ge 0$ istendiği için kökler dışı ve uç noktalar dâhildir.", "Çözüm: $x\\le -3$ veya $x\\ge 5$, yani $(-\\infty,-3]\\cup[5,\\infty)$."],
      answer: "$x\\in(-\\infty,-3]\\cup[5,\\infty)$ (C).",
    },
    {
      id: "ikinci-derece-denklem-esitsizlik-10-05",
      difficulty: "Orta",
      prompt: "Bir dikdörtgenin uzun kenarı, kısa kenarından $3$ m fazladır. Dikdörtgenin alanı $40$ m$^2$ olduğuna göre kısa kenarın uzunluğu kaç metredir?",
      options: ["$4$", "$5$", "$6$", "$7$", "$8$"],
      correct: 1,
      solution: ["Kısa kenara $x$ dersek uzun kenar $x+3$ olur.", "Alan: $x(x+3)=40\\Rightarrow x^2+3x-40=0$.", "Çarpanlara ayır: çarpımı $-40$, toplamı $3$ olan sayılar $8$ ve $-5$: $(x+8)(x-5)=0$.", "$x=-8$ veya $x=5$; uzunluk negatif olamayacağından $x=5$.", "Kısa kenar $5$ m'dir (uzun kenar $8$ m)."],
      answer: "$x^2+3x-40=0$ denkleminin pozitif kökü $x=5$; kısa kenar $5$ m (B).",
    },
    {
      id: "ikinci-derece-denklem-esitsizlik-10-06",
      difficulty: "Zor",
      prompt: "$x^2-(k+2)x+(k+5)=0$ denkleminin çift katlı (tek) kökü olması için $k$'nin alabileceği değerlerin toplamı kaçtır?",
      options: ["$-4$", "$-2$", "$0$", "$4$", "$8$"],
      correct: 2,
      solution: ["Çift katlı (tek) kök için $\\Delta=0$ olmalıdır.", "$a=1,\\ b=-(k+2),\\ c=k+5$: $\\Delta=(k+2)^2-4(k+5)=0$.", "$k^2+4k+4-4k-20=0\\Rightarrow k^2-16=0$.", "$k=4$ veya $k=-4$.", "Değerlerin toplamı $4+(-4)=0$."],
      answer: "$\\Delta=0$ koşulu $k^2-16=0$ verir; $k=\\pm4$, toplam $0$ (C).",
    },
  ],
};

export default quiz;
