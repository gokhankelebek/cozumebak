import type { TopicQuiz } from "./types";

// kosullu-olasilik — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "kosullu-olasilik",
  questions: [
    {
      id: "kosullu-olasilik-01",
      difficulty: "Kolay",
      prompt: "Bir zar atılıyor ve gelen sayının $2$'den büyük olduğu biliniyor. Bu sayının asal olma olasılığı kaçtır?",
      options: ["$\\dfrac{1}{6}$", "$\\dfrac{1}{3}$", "$\\dfrac{1}{2}$", "$\\dfrac{2}{3}$", "$\\dfrac{3}{4}$"],
      correct: 2,
      solution: ["Koşul \"$2$'den büyük\" olduğundan örnek uzay $\\{3,4,5,6\\}$'ya daralır (4 durum).", "Bu uzaydaki asal sayılar: $3$ ve $5$ (2 durum).", "$P(\\text{asal}\\mid >2)=\\dfrac{2}{4}=\\dfrac{1}{2}$."],
      answer: "$\\dfrac{1}{2}$.",
    },
    {
      id: "kosullu-olasilik-02",
      difficulty: "Kolay",
      prompt: "$P(A\\cap B)=0{,}18$ ve $P(B)=0{,}6$ ise $P(A\\mid B)$ kaçtır?",
      options: ["$0{,}3$", "$0{,}108$", "$0{,}42$", "$0{,}78$", "$3$"],
      correct: 0,
      solution: ["Koşullu olasılık formülü: $P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}$.", "Değerleri yerine koy: $\\dfrac{0{,}18}{0{,}6}=0{,}3$."],
      answer: "$0{,}3$.",
    },
    {
      id: "kosullu-olasilik-04",
      difficulty: "Orta",
      prompt: "Bir ankete katılan $150$ kişiden $90$'ı çay içmeyi sevmektedir; çay içmeyi sevenlerin $54$'ü erkektir. Rastgele seçilen bir kişinin çay içmeyi sevdiği biliniyorsa, bu kişinin erkek olma olasılığı kaçtır?",
      options: ["$\\dfrac{9}{25}$", "$\\dfrac{54}{150}$", "$\\dfrac{2}{5}$", "$\\dfrac{3}{4}$", "$\\dfrac{3}{5}$"],
      correct: 4,
      solution: ["Koşul \"çay içmeyi seviyor\" olduğundan örnek uzay $90$ kişiye daralır.", "Bu $90$ kişinin $54$'ü erkektir.", "$P(\\text{erkek}\\mid \\text{çay})=\\dfrac{54}{90}=\\dfrac{3}{5}$."],
      answer: "$\\dfrac{3}{5}$.",
    },
    {
      id: "kosullu-olasilik-05",
      difficulty: "Orta",
      prompt: "$P(A)=0{,}6$, $P(B)=0{,}5$ ve $P(A\\cup B)=0{,}8$ veriliyor. $P(B\\mid A)$ kaçtır?",
      options: ["$0{,}3$", "$0{,}6$", "$0{,}375$", "$0{,}5$", "$0{,}8$"],
      correct: 3,
      solution: ["Önce kesişimi bul: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.", "$0{,}8=0{,}6+0{,}5-P(A\\cap B)\\Rightarrow P(A\\cap B)=0{,}3$.", "Koşul $A$ olduğundan payda $P(A)$'dır: $P(B\\mid A)=\\dfrac{P(A\\cap B)}{P(A)}=\\dfrac{0{,}3}{0{,}6}=0{,}5$."],
      answer: "$0{,}5$.",
    },
    {
      id: "kosullu-olasilik-06",
      difficulty: "Zor",
      prompt: "İki zar atılıyor. Zarların üzerindeki sayıların toplamının $6$ olduğu biliniyor. İki zarın da tek gelmiş olma olasılığı nedir?",
      options: ["$\\dfrac{1}{5}$", "$\\dfrac{2}{5}$", "$\\dfrac{3}{5}$", "$\\dfrac{1}{2}$", "$\\dfrac{3}{4}$"],
      correct: 2,
      solution: ["Toplamı $6$ yapan sıralı ikililer: $(1,5),(2,4),(3,3),(4,2),(5,1)$ → $5$ durum (yeni örnek uzay).", "Bunlardan ikisi de tek olanlar: $(1,5),(3,3),(5,1)$ → $3$ durum.", "$P(\\text{ikisi de tek}\\mid \\text{toplam }6)=\\dfrac{3}{5}$."],
      answer: "$\\dfrac{3}{5}$.",
    },
  ],
};

export default quiz;
