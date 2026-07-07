import type { TopicQuiz } from "./types";

// oran-oranti-tyt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "oran-oranti-tyt",
  questions: [
    {
      id: "oran-oranti-tyt-01",
      difficulty: "Kolay",
      prompt: "Bir işi $6$ işçi $10$ günde bitiriyor. Aynı işi $4$ işçi kaç günde bitirir?",
      options: ["$12$", "$13$", "$14$", "$15$", "$16$"],
      correct: 3,
      solution: ["İşçi sayısı arttıkça süre azalır; **ters orantı** kurulur.", "Çarpımları eşitle: $6\\cdot 10=4\\cdot t$.", "$60=4t\\Rightarrow t=15$ gün."],
      answer: "$15$",
    },
    {
      id: "oran-oranti-tyt-02",
      difficulty: "Orta",
      prompt: "$a:b=3:4$ ve $b:c=6:5$ olduğuna göre $a:b:c$ oranı kaçtır?",
      options: ["$9:12:10$", "$18:24:20$", "$9:8:10$", "$3:4:5$", "$6:8:5$"],
      correct: 0,
      solution: ["Ortak terim $b$'dir; bir oranda $4$, diğerinde $6$ değerini almış.", "$b$'yi eşitlemek için ilk oranı $3$, ikinci oranı $2$ ile genişlet: $a:b=9:12$ ve $b:c=12:10$.", "Zincirleme oran: $a:b:c=9:12:10$."],
      answer: "$9:12:10$",
    },
    {
      id: "oran-oranti-tyt-03",
      difficulty: "Kolay",
      prompt: "Bir sınıftaki kız-erkek oranı $2:3$'tür. Sınıfta $30$ erkek öğrenci olduğuna göre sınıftaki toplam öğrenci sayısı kaçtır?",
      options: ["$40$", "$45$", "$50$", "$55$", "$60$"],
      correct: 2,
      solution: ["Oranı $2k:3k$ yaz; erkek sayısı $3k=30$.", "$k=10$.", "Toplam öğrenci: $2k+3k=5k=5\\cdot 10=50$."],
      answer: "$50$",
    },
    {
      id: "oran-oranti-tyt-04",
      difficulty: "Orta",
      prompt: "Bir kafede çay–kahve siparişlerinin oranı $5:3$'tür. Bir gün boyunca verilen çay siparişi, kahve siparişinden $48$ adet fazla olduğuna göre o gün toplam kaç sipariş verilmiştir?",
      options: ["$144$", "$168$", "$180$", "$192$", "$216$"],
      correct: 3,
      solution: ["Çay $=5k$, kahve $=3k$ olsun. Fark: $5k-3k=2k=48\\Rightarrow k=24$.", "Toplam sipariş: $5k+3k=8k=8\\cdot 24=192$."],
      answer: "$192$",
    },
    {
      id: "oran-oranti-tyt-05",
      difficulty: "Orta",
      prompt: "Bir baharat dükkânında $1$ ölçek karabiber $3$ ölçek pul biberle, $1$ ölçek pul biber de $4$ ölçek kekikle aynı fiyattadır. Buna göre $2$ ölçek karabiberin parasıyla kaç ölçek kekik alınır?",
      options: ["$12$", "$18$", "$20$", "$24$", "$30$"],
      correct: 3,
      solution: ["$1$ ölçek karabiber $=3$ ölçek pul biber, $1$ ölçek pul biber $=4$ ölçek kekik.", "Demek ki $1$ ölçek karabiber $=3\\cdot 4=12$ ölçek kekik değerindedir.", "$2$ ölçek karabiber: $2\\cdot 12=24$ ölçek kekik."],
      answer: "$24$",
    },
    {
      id: "oran-oranti-tyt-06",
      difficulty: "Orta",
      prompt: "Bir araç deposundaki yakıtın $\\dfrac{3}{8}$'i harcandığında depoda $40$ litre yakıt kalmaktadır. Buna göre depo tam doluyken kaç litre yakıt vardır?",
      options: ["$56$", "$60$", "$64$", "$72$", "$80$"],
      correct: 2,
      solution: ["Harcanan $\\dfrac{3}{8}$ ise kalan $1-\\dfrac{3}{8}=\\dfrac{5}{8}$'dir.", "Tam depo $x$ olsun: $\\dfrac{5}{8}x=40$.", "$x=40\\cdot\\dfrac{8}{5}=64$ litre."],
      answer: "$64$ litre",
    },
  ],
};

export default quiz;
