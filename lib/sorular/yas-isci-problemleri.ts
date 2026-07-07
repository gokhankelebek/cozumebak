import type { TopicQuiz } from "./types";

// yas-isci-problemleri — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "yas-isci-problemleri",
  questions: [
    {
      id: "yas-isci-problemleri-01",
      difficulty: "Orta",
      prompt: "Bir anne ile kızının yaşları toplamı $48$'dir. $6$ yıl sonra annenin yaşı, kızının yaşının $3$ katı olacaktır. Kızın şu anki yaşı kaçtır?",
      options: ["$8$", "$9$", "$10$", "$11$", "$12$"],
      correct: 1,
      solution: ["Kızın yaşı $x$ olsun; annenin yaşı $48-x$.", "$6$ yıl sonra: $48-x+6=3(x+6)$.", "$54-x=3x+18\\Rightarrow 36=4x\\Rightarrow x=9$."],
      answer: "$9$",
    },
    {
      id: "yas-isci-problemleri-02",
      difficulty: "Kolay",
      prompt: "Bir işi A tek başına $12$ günde, B tek başına $18$ günde bitiriyor. İkisi birlikte çalışırsa iş kaç günde biter?",
      options: ["$6$", "$7$", "$7{,}2$", "$8$", "$9$"],
      correct: 2,
      solution: ["A'nın günlük işi $\\dfrac{1}{12}$, B'nin günlük işi $\\dfrac{1}{18}$.", "Birlikte günlük iş: $\\dfrac{1}{12}+\\dfrac{1}{18}=\\dfrac{3+2}{36}=\\dfrac{5}{36}$.", "Toplam süre: $\\dfrac{1}{\\frac{5}{36}}=\\dfrac{36}{5}=7{,}2$ gün."],
      answer: "$7{,}2$ gün",
    },
    {
      id: "yas-isci-problemleri-03",
      difficulty: "Orta",
      prompt: "Bir havuzu dolduran musluk tek başına $6$ saatte dolduruyor. Aynı havuzu boşaltan musluk tek başına $9$ saatte boşaltıyor. Havuz boşken her iki musluk birlikte açılırsa havuz kaç saatte dolar?",
      options: ["$12$", "$15$", "$16$", "$18$", "$24$"],
      correct: 3,
      solution: ["Dolduran saatlik: $+\\dfrac{1}{6}$; boşaltan saatlik: $-\\dfrac{1}{9}$.", "Net dolum hızı: $\\dfrac{1}{6}-\\dfrac{1}{9}=\\dfrac{3-2}{18}=\\dfrac{1}{18}$.", "Tam dolması: $\\dfrac{1}{\\frac{1}{18}}=18$ saat."],
      answer: "$18$ saat",
    },
    {
      id: "yas-isci-problemleri-04",
      difficulty: "Kolay",
      prompt: "Bir babanın bugünkü yaşı oğlunun yaşının $3$ katıdır. $12$ yıl sonra babanın yaşı oğlunun yaşının $2$ katı olacağına göre oğul bugün kaç yaşındadır?",
      options: ["$10$", "$11$", "$12$", "$14$", "$15$"],
      correct: 2,
      solution: ["Oğul $x$, baba $3x$ olsun. $12$ yıl sonra: baba $3x+12$, oğul $x+12$.", "Koşul: $3x+12=2(x+12)$.", "Aç ve düzenle: $3x+12=2x+24\\Rightarrow x=12$.", "**Kontrol:** Bugün $12$ ve $36$; $12$ yıl sonra $24$ ve $48$, $48=2\\cdot 24$. ✓"],
      answer: "$12$",
    },
    {
      id: "yas-isci-problemleri-05",
      difficulty: "Orta",
      prompt: "Bir tarlanın çapalanması işini Ali tek başına $12$ günde, Veli tek başına $6$ günde bitirebiliyor. İkisi birlikte çalışmaya başlıyor; ancak işin başlamasından $2$ gün sonra Ali ayrılıyor ve kalan işi Veli tek başına tamamlıyor. İş toplam kaç günde biter?",
      options: ["$4$", "$5$", "$6$", "$7$", "$8$"],
      correct: 1,
      solution: ["Ali'nin günlük işi $\\dfrac{1}{12}$, Veli'nin $\\dfrac{1}{6}$. Birlikte günlük iş: $\\dfrac{1}{12}+\\dfrac{1}{6}=\\dfrac{1+2}{12}=\\dfrac{3}{12}=\\dfrac{1}{4}$.", "İlk $2$ günde biten iş: $2\\cdot\\dfrac{1}{4}=\\dfrac{1}{2}$. Kalan iş: $1-\\dfrac{1}{2}=\\dfrac{1}{2}$.", "Kalan işi Veli tek başına yapar; süresi: $\\dfrac{1/2}{1/6}=\\dfrac{1}{2}\\cdot 6=3$ gün.", "Toplam süre: $2+3=5$ gün."],
      answer: "$5$ gün",
    },
    {
      id: "yas-isci-problemleri-06",
      difficulty: "Orta",
      prompt: "Boş bir havuzu A musluğu tek başına $8$ saatte dolduruyor; havuzun dibindeki bir delik ise dolu havuzu $24$ saatte boşaltıyor. Havuz boşken A musluğu açılıyor ama delik de açık unutuluyor. Havuz kaç saatte dolar?",
      options: ["$10$", "$11$", "$12$", "$14$", "$16$"],
      correct: 2,
      solution: ["A musluğunun saatlik dolumu $+\\dfrac{1}{8}$, deliğin etkisi $-\\dfrac{1}{24}$.", "Net saatlik dolum: $\\dfrac{1}{8}-\\dfrac{1}{24}=\\dfrac{3-1}{24}=\\dfrac{2}{24}=\\dfrac{1}{12}$.", "Tam dolması: $\\dfrac{1}{\\frac{1}{12}}=12$ saat."],
      answer: "$12$ saat",
    },
  ],
};

export default quiz;
