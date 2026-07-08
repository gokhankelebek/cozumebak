import type { TopicQuiz } from "./types";

// deneye-dayali-olasilik-9 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "deneye-dayali-olasilik-9",
  questions: [
    {
      id: "deneye-dayali-olasilik-9-01",
      difficulty: "Kolay",
      prompt: "Bir madenî para $3$ kez atılıyor. Bu deneyin örnek uzayının eleman sayısı $s(E)$ kaçtır?",
      options: ["$6$", "$8$", "$9$", "$16$", "$4$"],
      correct: 1,
      solution: ["Her atışta $2$ olası sonuç (yazı/tura) vardır.", "Üç atış için tüm sıralı üçlüler: $2\\cdot 2\\cdot 2=2^3$.", "$s(E)=8$ (YYY, YYT, YTY, TYY, YTT, TYT, TTY, TTT)."],
      answer: "$s(E)=8$.",
    },
    {
      id: "deneye-dayali-olasilik-9-02",
      difficulty: "Kolay",
      prompt: "$1$'den $15$'e kadar numaralı kartlardan biri rastgele çekiliyor. Çekilen sayının $4$ ile tam bölünebilmesi olasılığı kaçtır?",
      options: ["$\\dfrac{1}{5}$", "$\\dfrac{4}{15}$", "$\\dfrac{1}{4}$", "$\\dfrac{2}{15}$", "$\\dfrac{1}{3}$"],
      correct: 0,
      solution: ["$1$–$15$ arasında $4$'ün katları: $4,8,12$ → $s(A)=3$.", "Örnek uzay $s(E)=15$.", "$P(A)=\\dfrac{3}{15}=\\dfrac{1}{5}$."],
      answer: "$\\dfrac{1}{5}$.",
    },
    {
      id: "deneye-dayali-olasilik-9-03",
      difficulty: "Orta",
      prompt: "Bir oyun çarkı $250$ kez çevriliyor ve $60$ kez mavi bölge çıkıyor. Mavi çıkmasının deneysel olasılığı kaçtır?",
      options: ["$0{,}6$", "$0{,}4$", "$0{,}25$", "$0{,}24$", "$0{,}12$"],
      correct: 3,
      solution: ["Deneysel olasılık $=\\dfrac{\\text{gözlenme}}{\\text{deneme}}=\\dfrac{60}{250}$.", "Sadeleştir: $\\dfrac{60}{250}=\\dfrac{6}{25}=0{,}24$."],
      answer: "$0{,}24$.",
    },
    {
      id: "deneye-dayali-olasilik-9-04",
      difficulty: "Orta",
      prompt: "Bir zar hileli olduğundan $6$ gelme olasılığı $\\dfrac{3}{8}$ olarak bulunuyor. Bu zar $320$ kez atılırsa yaklaşık kaç kez $6$ gelmesi beklenir?",
      options: ["$40$", "$60$", "$120$", "$200$", "$96$"],
      correct: 2,
      solution: ["Beklenen sayı $=P\\cdot n=\\dfrac{3}{8}\\cdot 320$.", "$\\dfrac{320}{8}=40$, sonra $40\\cdot 3=120$."],
      answer: "Yaklaşık $120$ kez.",
    },
    {
      id: "deneye-dayali-olasilik-9-05",
      difficulty: "Orta",
      prompt: "Bir torbada $6$ sarı top ve bir miktar yeşil top vardır. Rastgele bir top çekildiğinde sarı gelme olasılığı $\\dfrac{3}{7}$ olduğuna göre torbada kaç yeşil top vardır?",
      options: ["$7$", "$14$", "$6$", "$8$", "$4$"],
      correct: 3,
      solution: ["$\\dfrac{\\text{sarı}}{\\text{toplam}}=\\dfrac{3}{7}$ olduğundan $\\dfrac{6}{\\text{toplam}}=\\dfrac{3}{7}$.", "Toplam $=\\dfrac{6\\cdot 7}{3}=14$.", "Yeşil $=14-6=8$."],
      answer: "$8$ yeşil top.",
    },
    {
      id: "deneye-dayali-olasilik-9-06",
      difficulty: "Zor",
      prompt: "Hilesiz bir zar $600$ kez atılıyor. Üst yüze gelen sayının $2$'den büyük olmasını yaklaşık kaç kez bekleriz?",
      options: ["$300$", "$200$", "$400$", "$500$", "$450$"],
      correct: 2,
      solution: ["$2$'den büyük yüzler: $3,4,5,6$ → $s(A)=4$.", "Teorik olasılık $P=\\dfrac{4}{6}=\\dfrac{2}{3}$.", "Beklenen sayı $=\\dfrac{2}{3}\\cdot 600=400$."],
      answer: "Yaklaşık $400$ kez.",
    },
  ],
};

export default quiz;
