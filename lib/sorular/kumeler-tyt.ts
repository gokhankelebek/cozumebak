import type { TopicQuiz } from "./types";

// kumeler-tyt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "kumeler-tyt",
  questions: [
    {
      id: "kumeler-tyt-01",
      difficulty: "Orta",
      prompt: "$40$ kişilik bir grupta yüzme bilen $22$, basketbol oynayan $15$ kişi vardır. Her iki aktiviteyi de yapan $6$ kişi olduğuna göre, **yalnızca birini** yapan kaç kişi vardır?",
      options: ["$19$", "$21$", "$23$", "$25$", "$27$"],
      correct: 3,
      solution: ["Birleşim: $s(Y\\cup B)=22+15-6=31$.", "Yalnızca yüzme: $22-6=16$; yalnızca basketbol: $15-6=9$.", "Yalnızca biri: $16+9=25$ (veya $31-6=25$)."],
      answer: "$25$",
    },
    {
      id: "kumeler-tyt-02",
      difficulty: "Kolay",
      prompt: "$s(A)=12$, $s(B)=8$ ve $s(A\\cap B)=3$ olduğuna göre $s(A\\cup B)$ kaçtır?",
      options: ["$15$", "$16$", "$17$", "$18$", "$20$"],
      correct: 2,
      solution: ["$s(A\\cup B)=s(A)+s(B)-s(A\\cap B)$.", "$12+8-3=17$."],
      answer: "$17$",
    },
    {
      id: "kumeler-tyt-03",
      difficulty: "Orta",
      prompt: "Evrensel küme $E$ için $s(E)=50$'dir. $A$ ve $B$ kümeleri için $s(A)=28$, $s(B)=22$ verilmiştir. $E$'de $A$ ve $B$'nin **hiçbirine** ait olmayan $10$ eleman varsa $s(A\\cap B)$ kaçtır?",
      options: ["$6$", "$10$", "$12$", "$14$", "$18$"],
      correct: 1,
      solution: ["En az birine ait olanlar: $s(A\\cup B)=50-10=40$.", "$40=28+22-s(A\\cap B)=50-s(A\\cap B)$.", "$s(A\\cap B)=10$."],
      answer: "$10$",
    },
    {
      id: "kumeler-tyt-04",
      difficulty: "Orta",
      prompt: "Bir kafede $50$ müşteriye yapılan ankette $30$ kişi çayı, $26$ kişi kahveyi sevdiğini söylemiştir. Ankete katılan herkesin en az birini sevdiği biliniyorsa, **yalnızca çayı** sevenlerin sayısı kaçtır?",
      options: ["$18$", "$20$", "$24$", "$26$", "$30$"],
      correct: 2,
      solution: ["Herkes en az birini sevdiğinden $s(\\text{Ç}\\cup K)=50$.", "$50=30+26-s(\\text{Ç}\\cap K)\\Rightarrow s(\\text{Ç}\\cap K)=56-50=6$.", "Yalnızca çayı sevenler: $30-6=24$."],
      answer: "$24$",
    },
    {
      id: "kumeler-tyt-05",
      difficulty: "Orta",
      prompt: "Bir okulda $120$ öğrenciye yapılan ankette satranç kulübüne $54$, münazara kulübüne $48$ öğrenci üyedir. **Her iki kulübe de** üye olan $20$ öğrenci varsa, **hiçbir kulübe** üye olmayan kaç öğrenci vardır?",
      options: ["$20$", "$32$", "$38$", "$44$", "$58$"],
      correct: 2,
      solution: ["En az bir kulübe üye: $s(S\\cup M)=54+48-20=82$.", "Hiçbirine üye olmayan: $120-82=38$."],
      answer: "$38$",
    },
    {
      id: "kumeler-tyt-06",
      difficulty: "Zor",
      prompt: "Bir spor salonunda üyeler yüzme, pilates ve koşu derslerinden en az birine yazılmıştır. Yalnız yüzmeye $12$, yalnız pilatese $9$, yalnız koşuya $7$ üye yazılmıştır. Tam olarak **iki** derse yazılan $6$, **üçüne birden** yazılan $2$ üye olduğuna göre salondaki toplam üye sayısı kaçtır?",
      options: ["$30$", "$32$", "$34$", "$36$", "$40$"],
      correct: 3,
      solution: ["Yalnız bir derse yazılanlar: $12+9+7=28$.", "Tam iki derse yazılanlar: $6$. Üçüne birden: $2$.", "Bütün bölgeler ayrık olduğundan toplam: $28+6+2=36$."],
      answer: "$36$",
    },
    {
      id: "kumeler-tyt-07",
      difficulty: "Orta",
      prompt: "$A$ ve $B$ kümeleri için $s(A)=18$, $s(B)=14$ ve $s(A\\setminus B)=11$ veriliyor. Buna göre $s(A\\cup B)$ kaçtır?",
      options: ["$21$", "$23$", "$25$", "$28$", "$32$"],
      correct: 2,
      solution: ["$s(A\\setminus B)=s(A)-s(A\\cap B)\\Rightarrow 11=18-s(A\\cap B)$, yani $s(A\\cap B)=7$.", "$s(A\\cup B)=s(A)+s(B)-s(A\\cap B)=18+14-7=25$."],
      answer: "$25$",
    },
  ],
};

export default quiz;
