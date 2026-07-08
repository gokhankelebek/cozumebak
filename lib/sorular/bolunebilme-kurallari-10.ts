import type { TopicQuiz } from "./types";

// bolunebilme-kurallari-10 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "bolunebilme-kurallari-10",
  questions: [
    {
      id: "bolunebilme-kurallari-10-01",
      difficulty: "Kolay",
      prompt: "$\\overline{2\\,7\\square}$ üç basamaklı sayısının $5$ ile bölünebilmesi için $\\square$ yerine kaç farklı rakam gelebilir?",
      options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
      correct: 1,
      solution: ["$5$ ile bölünebilme kuralı: birler basamağı $0$ ya da $5$ olmalıdır.", "Bu durumda $\\square\\in\\{0,\\ 5\\}$ olur.", "Yani $\\square$ yerine $2$ farklı rakam gelebilir."],
      answer: "$2$ farklı rakam ($\\square\\in\\{0,\\ 5\\}$).",
    },
    {
      id: "bolunebilme-kurallari-10-02",
      difficulty: "Kolay",
      prompt: "$6\\,802$ sayısının $9$ ile bölümünden kalan kaçtır?",
      options: ["$5$", "$6$", "$7$", "$8$", "$0$"],
      correct: 2,
      solution: ["$9$'a göre kalan, rakamlar toplamının $9$'a göre kalanına eşittir.", "Rakamlar toplamı: $6+8+0+2=16$.", "$16=1\\cdot 9+7$ olduğundan kalan $7$'dir."],
      answer: "Kalan $7$.",
    },
    {
      id: "bolunebilme-kurallari-10-03",
      difficulty: "Orta",
      prompt: "$\\overline{5\\,3\\square}$ üç basamaklı sayısının $6$ ile bölünebilmesi için $\\square$ yerine gelebilecek rakam kaçtır?",
      options: ["$0$", "$1$", "$2$", "$4$", "$7$"],
      correct: 3,
      solution: ["$6=2\\cdot 3$ olduğundan sayı hem $2$ hem $3$ ile bölünmelidir.", "$2$ (çift) koşulu: $\\square\\in\\{0,2,4,6,8\\}$.", "$3$ koşulu: $5+3+\\square=8+\\square$ değeri $3$'ün katı olmalı → $\\square\\in\\{1,4,7\\}$.", "İki koşulun ortak çözümü: $\\square=4$ (sayı $534$)."],
      answer: "$\\square=4$.",
    },
    {
      id: "bolunebilme-kurallari-10-04",
      difficulty: "Orta",
      prompt: "$\\overline{7\\,\\square\\,3\\,2}$ dört basamaklı sayısı $11$ ile tam bölünüyorsa $\\square$ kaçtır?",
      options: ["$2$", "$4$", "$6$", "$8$", "$9$"],
      correct: 3,
      solution: ["$11$ kuralı: birler basamağından başlayarak dönüşümlü $+,-,+,-$ işaretle alternatif toplam alınır; sonuç $0$ ya da $11$'in katı olmalıdır.", "Sağdan: $2-3+\\square-7=\\square-8$.", "$\\square-8$ ifadesinin $11$'in katı olması gerekir. Tek rakam ($0$–$9$) için tek çözüm $\\square-8=0$, yani $\\square=8$.", "Kontrol: $7832$ için $2-3+8-7=0$. ✓"],
      answer: "$\\square=8$ (sayı $7832$).",
    },
    {
      id: "bolunebilme-kurallari-10-05",
      difficulty: "Orta",
      prompt: "Bir fabrika günde $\\overline{7\\,2\\,B\\,0}$ tane ürün üretmektedir. Bu üretim miktarı hem $5$ hem de $9$ ile tam bölünebildiğine göre, $B$ rakamının alabileceği en büyük değer kaçtır?",
      options: ["$0$", "$3$", "$6$", "$7$", "$9$"],
      correct: 4,
      solution: ["Sayı $0$ ile bittiği için $5$ ile bölünme koşulu her durumda sağlanır.", "$9$ ile bölünme: rakamlar toplamı $7+2+B+0=9+B$ değeri $9$'un katı olmalı.", "$9+B$'nin $9$'un katı olması için $B\\in\\{0,\\ 9\\}$.", "En büyük değer $B=9$'dur (sayı $7290$)."],
      answer: "$B=9$ (sayı $7290$).",
    },
    {
      id: "bolunebilme-kurallari-10-06",
      difficulty: "Zor",
      prompt: "$\\overline{4\\,7\\,3\\,A}$ dört basamaklı sayısının $4$ ile bölümünden kalan $3$ olduğuna göre, $A$ rakamı kaç farklı değer alabilir?",
      options: ["$3$", "$2$", "$1$", "$4$", "$5$"],
      correct: 0,
      solution: ["$4$ ile bölünme (ve kalan) yalnız son iki basamağa, yani $\\overline{3A}=30+A$ sayısına bağlıdır.", "$30=4\\cdot 7+2$ olduğundan $30$'un $4$'e göre kalanı $2$'dir; dolayısıyla $(2+A)$'nın $4$'e göre kalanı $3$ olmalıdır.", "$(2+A)\\equiv 3 \\pmod 4 \\Rightarrow A\\equiv 1 \\pmod 4$, yani $A\\in\\{1,\\ 5,\\ 9\\}$.", "Kontrol: $31,\\ 35,\\ 39$ sayılarının $4$'e bölümünden kalan sırasıyla $3,\\ 3,\\ 3$'tür. ✓", "$A$ rakamı $3$ farklı değer alır."],
      answer: "$3$ farklı değer ($A\\in\\{1,\\ 5,\\ 9\\}$).",
    },
  ],
};

export default quiz;
