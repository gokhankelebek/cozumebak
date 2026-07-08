import type { TopicQuiz } from "./types";

// ikinci-derece-denklem-sistemleri-11 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "ikinci-derece-denklem-sistemleri-11",
  questions: [
    {
      id: "ikinci-derece-denklem-sistemleri-11-01",
      difficulty: "Kolay",
      prompt: "$\\begin{cases} y = x^2 - 2x \\\\ y = x + 4 \\end{cases}$ sisteminin çözümleri aşağıdakilerden hangisidir?",
      options: ["$(4,\\,8)$ ve $(-1,\\,3)$", "$(4,\\,8)$ ve $(1,\\,5)$", "$(-4,\\,0)$ ve $(1,\\,5)$", "$(2,\\,6)$ ve $(-2,\\,2)$", "$(4,\\,4)$ ve $(-1,\\,-1)$"],
      correct: 0,
      solution: ["İki ifadeyi eşitle: $x^2 - 2x = x + 4$.", "Bir tarafa topla: $x^2 - 3x - 4 = 0$.", "Çarpanlara ayır: $(x-4)(x+1)=0 \\Rightarrow x=4$ veya $x=-1$.", "$y=x+4$ ile: $x=4 \\Rightarrow y=8$; $\\;x=-1 \\Rightarrow y=3$."],
      answer: "$(4,\\,8)$ ve $(-1,\\,3)$.",
    },
    {
      id: "ikinci-derece-denklem-sistemleri-11-02",
      difficulty: "Kolay",
      prompt: "$\\begin{cases} x+y=9 \\\\ xy=20 \\end{cases}$ sisteminin çözümleri aşağıdakilerden hangisidir?",
      options: ["$(4,\\,5)$ ve $(5,\\,4)$", "$(2,\\,7)$ ve $(7,\\,2)$", "$(-4,\\,-5)$ ve $(-5,\\,-4)$", "$(1,\\,20)$ ve $(20,\\,1)$", "$(4,\\,-5)$ ve $(-5,\\,4)$"],
      correct: 0,
      solution: ["$x$ ve $y$, toplamı $9$, çarpımı $20$ olan denklemin kökleridir: $t^2 - 9t + 20 = 0$.", "Çarpanlara ayır: $(t-4)(t-5)=0 \\Rightarrow t=4$ veya $t=5$.", "Kökler $4$ ve $5$ olduğundan $\\{x,y\\}=\\{4,5\\}$."],
      answer: "$(4,\\,5)$ ve $(5,\\,4)$.",
    },
    {
      id: "ikinci-derece-denklem-sistemleri-11-03",
      difficulty: "Orta",
      prompt: "$y = x^2 + 4x + k$ parabolü ile $y = 2x + 1$ doğrusunun teğet olması için $k$ kaç olmalıdır?",
      options: ["$-1$", "$0$", "$1$", "$2$", "$3$"],
      correct: 3,
      solution: ["İki ifadeyi eşitle: $x^2 + 4x + k = 2x + 1$.", "Düzenle: $x^2 + 2x + (k-1) = 0$.", "Teğet için $\\Delta = 0$: $(2)^2 - 4(1)(k-1) = 0$.", "$4 - 4k + 4 = 0 \\Rightarrow 8 = 4k \\Rightarrow k = 2$."],
      answer: "$k=2$.",
    },
    {
      id: "ikinci-derece-denklem-sistemleri-11-04",
      difficulty: "Orta",
      prompt: "$\\begin{cases} y = x^2 \\\\ y = -4x + m \\end{cases}$ sisteminin gerçek çözümü olmaması için $m$ hangi değerleri almalıdır?",
      options: ["$m > 4$", "$m < 4$", "$m > -4$", "$m < -4$", "$m = -4$"],
      correct: 3,
      solution: ["İfadeleri eşitle: $x^2 = -4x + m \\Rightarrow x^2 + 4x - m = 0$.", "Çözümsüzlük için $\\Delta < 0$: $(4)^2 - 4(1)(-m) < 0$.", "$16 + 4m < 0 \\Rightarrow 4m < -16 \\Rightarrow m < -4$."],
      answer: "$m < -4$.",
    },
    {
      id: "ikinci-derece-denklem-sistemleri-11-05",
      difficulty: "Orta",
      prompt: "$\\begin{cases} x+y=6 \\\\ x^2+y^2=20 \\end{cases}$ sisteminde $x \\cdot y$ çarpımının değeri kaçtır?",
      options: ["$4$", "$6$", "$8$", "$10$", "$16$"],
      correct: 2,
      solution: ["$(x+y)^2 = x^2 + 2xy + y^2$ özdeşliğini kullan.", "$6^2 = 20 + 2xy \\Rightarrow 36 = 20 + 2xy$.", "$2xy = 16 \\Rightarrow xy = 8$."],
      answer: "$xy = 8$.",
    },
    {
      id: "ikinci-derece-denklem-sistemleri-11-06",
      difficulty: "Zor",
      prompt: "Çevresi $26$ cm ve alanı $40$ cm$^2$ olan bir dikdörtgenin uzun kenarı kaç cm'dir?",
      options: ["$5$", "$8$", "$10$", "$13$", "$20$"],
      correct: 1,
      solution: ["Kenarlar $x$ ve $y$ olsun. Çevre $2(x+y)=26 \\Rightarrow x+y=13$.", "Alan $xy = 40$.", "$x$ ve $y$, $t^2 - 13t + 40 = 0$ denkleminin kökleridir.", "Çarpanlara ayır: $(t-5)(t-8)=0 \\Rightarrow t=5$ veya $t=8$.", "Kenarlar $5$ ve $8$ cm; uzun kenar $8$ cm'dir."],
      answer: "Uzun kenar $8$ cm.",
    },
  ],
};

export default quiz;
