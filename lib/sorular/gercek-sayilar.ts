import type { TopicQuiz } from "./types";

// gercek-sayilar — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "gercek-sayilar",
  questions: [
    {
      id: "gercek-sayilar-01",
      difficulty: "Kolay",
      prompt: "$63\\cdot 47 + 63\\cdot 53$ işleminin sonucu, dağılma özelliği kullanılarak pratik biçimde hesaplandığında kaçtır?",
      options: ["$6300$", "$630$", "$6000$", "$5300$", "$3150$"],
      correct: 0,
      solution: ["Ortak çarpan $63$ paranteze alınır: $63\\cdot(47+53)$.", "Parantez içi toplanır: $47+53=100$.", "Çarpma yapılır: $63\\cdot 100=6300$."],
      answer: "$63\\cdot(47+53)=63\\cdot 100=6300$.",
    },
    {
      id: "gercek-sayilar-02",
      difficulty: "Orta",
      prompt: "$18 - 4\\cdot(5-2)^2 : 3$ işleminin sonucu kaçtır?",
      options: ["$-6$", "$6$", "$42$", "$14$", "$-30$"],
      correct: 1,
      solution: ["Parantez: $5-2=3$.", "Üs: $3^2=9$.", "Soldan sağa çarpma ve bölme: $4\\cdot 9=36$, sonra $36:3=12$.", "Çıkarma: $18-12=6$."],
      answer: "$18-12=6$.",
    },
    {
      id: "gercek-sayilar-03",
      difficulty: "Kolay",
      prompt: "$-3 < x \\le 6$ koşulunu sağlayan gerçek sayıların oluşturduğu aralık aşağıdakilerden hangisidir?",
      options: ["$[-3,\\ 6]$", "$(-3,\\ 6]$", "$[-3,\\ 6)$", "$(-3,\\ 6)$", "$(-6,\\ 3]$"],
      correct: 1,
      solution: ["Sol uç $-3$ hariç ($<$) olduğundan açık parantez kullanılır.", "Sağ uç $6$ dâhil ($\\le$) olduğundan köşeli parantez kullanılır.", "Aralık: $(-3,\\ 6]$ (yarı açık aralık)."],
      answer: "$(-3,\\ 6]$.",
    },
    {
      id: "gercek-sayilar-04",
      difficulty: "Orta",
      prompt: "$A=[-1,\\ 5)$ ve $B=(2,\\ 8]$ aralıkları için $A\\cap B$ kümesi aşağıdakilerden hangisidir?",
      options: ["$[-1,\\ 8]$", "$[2,\\ 5]$", "$(2,\\ 5)$", "$(2,\\ 5]$", "$[2,\\ 5)$"],
      correct: 2,
      solution: ["İki aralık aynı sayı doğrusuna çizilir; örtüşen bölge $2$ ile $5$ arasıdır.", "Sol uç $2$: $B$'de hariç olduğundan kesişimde de hariç (açık).", "Sağ uç $5$: $A$'da hariç olduğundan kesişimde de hariç (açık).", "Sonuç: $A\\cap B=(2,\\ 5)$."],
      answer: "$A\\cap B=(2,\\ 5)$.",
    },
    {
      id: "gercek-sayilar-05",
      difficulty: "Orta",
      prompt: "Bir soğuk hava deposunun sıcaklık sensörü, $-2\\,^{\\circ}\\mathrm{C}$ dâhil olmak üzere $5\\,^{\\circ}\\mathrm{C}$'ye kadar (hariç) yani $-2\\le x<5$ aralığındaki tam sayı derecelerini ekranda listeliyor. Bu tam sayı derecelerin toplamı kaçtır?",
      options: ["$9$", "$5$", "$12$", "$7$", "$2$"],
      correct: 3,
      solution: ["$-2\\le x<5$ koşulunu sağlayan tam sayılar: $-2,-1,0,1,2,3,4$ ($-2$ dâhil, $5$ hariç).", "$-2$ ile $2$, $-1$ ile $1$ ve $0$ sadeleşir; geriye $3+4=7$ kalır.", "Toplam: $7$."],
      answer: "$7$.",
    },
    {
      id: "gercek-sayilar-06",
      difficulty: "Zor",
      prompt: "$A=[2,\\ 7)$, $\\;B=(3,\\ 10]$ ve $C=[1,\\ 5]$ aralıkları için $A\\cap B\\cap C$ kümesi aşağıdakilerden hangisidir?",
      options: ["$(3,\\ 5]$", "$[3,\\ 5]$", "$(3,\\ 5)$", "$[2,\\ 5]$", "$(3,\\ 7)$"],
      correct: 0,
      solution: ["Sol uç: alt sınırlar $2,\\ 3,\\ 1$; en büyüğü olan $3$ belirleyicidir. $3$, $B$'de hariç olduğundan açık.", "Sağ uç: üst sınırlar $7,\\ 10,\\ 5$; en küçüğü olan $5$ belirleyicidir. $5$, $C$'de dâhil olduğundan kapalı.", "Sonuç: $A\\cap B\\cap C=(3,\\ 5]$ (bu aralık aynı anda üç koşulu da sağlar)."],
      answer: "$A\\cap B\\cap C=(3,\\ 5]$.",
    },
  ],
};

export default quiz;
