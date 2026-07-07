import type { TopicQuiz } from "./types";

// mantik-tyt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "mantik-tyt",
  questions: [
    {
      id: "mantik-tyt-01",
      difficulty: "Orta",
      prompt: "$p\\Rightarrow q$ koşullu önermesi ile **aynı doğruluk değerine** sahip olmayan hangisidir?",
      options: ["$\\neg q\\Rightarrow \\neg p$", "$\\neg p\\vee q$", "$q\\vee \\neg p$", "$\\neg(p\\wedge \\neg q)$", "$q\\Rightarrow p$"],
      correct: 4,
      solution: ["$p\\Rightarrow q\\equiv \\neg p\\vee q$ (B ve C eşdeğerdir).", "Karşıtı $\\neg q\\Rightarrow \\neg p$ (A) ve olumsuzlanmış biçim $\\neg(p\\wedge \\neg q)$ (D) de eşdeğerdir.", "$q\\Rightarrow p$ karşılığıdır; $p=1$, $q=0$ iken $p\\Rightarrow q$ yanlış, $q\\Rightarrow p$ doğrudur — eşdeğer değildir."],
      answer: "$q\\Rightarrow p$",
    },
    {
      id: "mantik-tyt-02",
      difficulty: "Kolay",
      prompt: "$\\neg(p\\vee q)$ önermesine mantıksal olarak **denk** olan hangisidir?",
      options: ["$\\neg p\\wedge \\neg q$", "$\\neg p\\vee \\neg q$", "$p\\wedge q$", "$\\neg p\\Rightarrow q$", "$p\\Rightarrow \\neg q$"],
      correct: 0,
      solution: ["De Morgan: $\\neg(p\\vee q)\\equiv \\neg p\\wedge \\neg q$."],
      answer: "$\\neg p\\wedge \\neg q$",
    },
    {
      id: "mantik-tyt-03",
      difficulty: "Kolay",
      prompt: "$p$ ve $q$ önermeleri için $p=1$, $q=0$ iken aşağıdakilerden hangisinin doğruluk değeri **$1$**'dir?",
      options: ["$p\\Rightarrow q$", "$p\\wedge q$", "$\\neg p\\Rightarrow q$", "$p\\Leftrightarrow q$", "$\\neg p\\wedge \\neg q$"],
      correct: 2,
      solution: ["$p=1$, $q=0$ satırında $p\\Rightarrow q$, $p\\wedge q$, $p\\Leftrightarrow q$ yanlıştır ($0$).", "$\\neg p=0$ olduğundan $\\neg p\\wedge \\neg q=0$.", "$\\neg p\\Rightarrow q$: öncül $0$ olduğundan koşullu önerme **doğrudur** ($1$)."],
      answer: "$\\neg p\\Rightarrow q$",
    },
    {
      id: "mantik-tyt-04",
      difficulty: "Orta",
      prompt: "Bir kafenin kampanya kuralı şudur: \"Müşteri, **kahve** alırsa **tatlı** alır.\" Aşağıdaki müşterilerden hangisi **kuralı bozmuş** (kuralı yanlış çıkaran tek durum) olur? $p$: kahve aldı, $q$: tatlı aldı olmak üzere kural $p\\Rightarrow q$'dur.",
      options: ["Kahve aldı, tatlı aldı", "Kahve aldı, tatlı almadı", "Kahve almadı, tatlı aldı", "Kahve almadı, tatlı almadı", "Hiçbiri kuralı bozmaz"],
      correct: 1,
      solution: ["Kural $p\\Rightarrow q$; yalnız öncül doğru, sonuç yanlışken ($p=1,\\ q=0$) bozulur.", "Bu da \"kahve aldı, tatlı almadı\" durumudur.", "Kahve almayan müşteri için kural her hâlde sağlanır (öncül yanlış)."],
      answer: "Kahve aldı, tatlı almadı",
    },
    {
      id: "mantik-tyt-05",
      difficulty: "Orta",
      prompt: "Bir öğretmen \"Sınıftaki **her** öğrenci ödevini yaptı.\" dedi. Veli toplantısında bu cümlenin **yanlış** olduğu anlaşıldı. Buna göre **kesinlikle** doğru olan ifade hangisidir?",
      options: ["Hiçbir öğrenci ödevini yapmadı", "Her öğrenci ödevini yapmadı", "En az bir öğrenci ödevini yapmadı", "Yalnız bir öğrenci ödevini yaptı", "Tüm öğrenciler ödevini yaptı"],
      correct: 2,
      solution: ["Önerme $\\forall x:\\ x$ ödev yaptı biçiminde, ve bu **yanlış**.", "Olumsuzu: $\\neg(\\forall x:\\ p(x))\\equiv \\exists x:\\ \\neg p(x)$.", "Sözel karşılığı: \"En az bir öğrenci ödevini yapmadı.\" (\"Hiçbiri yapmadı\" çeldiricisi yanlıştır; bir öğrencinin yapmaması yeter.)"],
      answer: "En az bir öğrenci ödevini yapmadı",
    },
    {
      id: "mantik-tyt-06",
      difficulty: "Zor",
      prompt: "$p\\wedge q$ bileşik önermesi **yanlış** ($0$), $p\\vee q$ bileşik önermesi **doğru** ($1$) olduğuna göre $p\\Leftrightarrow q$ önermesinin doğruluk değeri nedir?",
      options: ["Daima $1$", "Daima $0$", "$p$'ye eşit", "$q$'ye eşit", "Belirlenemez"],
      correct: 1,
      solution: ["$p\\wedge q=0$: ikisi birden doğru değil.", "$p\\vee q=1$: en az biri doğru.", "Bu iki koşul yalnız $p$ ile $q$ farklı değerdeyken ($1,0$ ya da $0,1$) birlikte sağlanır.", "Farklı değerde olduklarından $p\\Leftrightarrow q=0$ (daima yanlış)."],
      answer: "Daima $0$",
    },
  ],
};

export default quiz;
