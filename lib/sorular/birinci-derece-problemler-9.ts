import type { TopicQuiz } from "./types";

// birinci-derece-problemler-9 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "birinci-derece-problemler-9",
  questions: [
    {
      id: "birinci-derece-problemler-9-01",
      difficulty: "Kolay",
      prompt: "Bir sayının $4$ katının $5$ fazlası $33$'e eşittir. Bu sayı kaçtır?",
      options: ["$7$", "$8{,}25$", "$9{,}5$", "$12$", "$14$"],
      correct: 0,
      solution: ["Bilinmeyen: sayı $=x$.", "Modeli kur: $4x+5=33$.", "$5$'i karşıya at: $4x=28$.", "$4$'e böl: $x=7$."],
      answer: "$x=7$.",
    },
    {
      id: "birinci-derece-problemler-9-02",
      difficulty: "Kolay",
      prompt: "Bir kargo şirketi $25$ TL sabit ücret ve kilogram başına $8$ TL almaktadır. $x$ kg'lık bir gönderinin ücreti $f(x)=8x+25$ olduğuna göre, $89$ TL ödeyen biri kaç kg gönderi yollamıştır?",
      options: ["$7$", "$9$", "$11{,}125$", "$14{,}25$", "$8$"],
      correct: 4,
      solution: ["Model: $f(x)=8x+25$ (sabit $25$, kg başına $8$).", "$89$ TL için: $8x+25=89$.", "$25$'i karşıya at: $8x=64$.", "$8$'e böl: $x=8$."],
      answer: "$8$ kg.",
    },
    {
      id: "birinci-derece-problemler-9-03",
      difficulty: "Orta",
      prompt: "Bir sinemada tam bilet $60$ TL, öğrenci bileti $40$ TL'dir. Toplam $7$ bilete $340$ TL ödendiğine göre kaç adet öğrenci bileti alınmıştır?",
      options: ["$2$", "$3$", "$4$", "$5$", "$6$"],
      correct: 2,
      solution: ["Öğrenci bileti $=x$ ise tam bilet $=(7-x)$ adettir.", "Ücret denklemi: $60(7-x)+40x=340$.", "Dağıt: $420-60x+40x=340$.", "Sadeleştir: $420-20x=340\\Rightarrow -20x=-80$.", "$-20$'ye böl: $x=4$."],
      answer: "$4$ öğrenci bileti.",
    },
    {
      id: "birinci-derece-problemler-9-04",
      difficulty: "Orta",
      prompt: "$12-3x\\ge 27$ eşitsizliğini sağlayan $x$ değerleri için çözüm kümesi aşağıdakilerden hangisidir?",
      options: ["$x\\le -5$", "$x\\ge -5$", "$x\\le 5$", "$x\\ge 5$", "$x\\le -13$"],
      correct: 0,
      solution: ["$12$'yi karşıya at: $-3x\\ge 15$.", "$-3$ ile böl; negatifle böldüğümüz için yön ters döner: $x\\le -5$."],
      answer: "$x\\le -5$.",
    },
    {
      id: "birinci-derece-problemler-9-05",
      difficulty: "Orta",
      prompt: "Bir kitap kulübü aylık $150$ TL sabit üyelik ve alınan her kitap için $25$ TL almaktadır. Bütçesi $400$ TL olan biri bir ayda en çok kaç kitap alabilir?",
      options: ["$9$", "$10$", "$11$", "$16$", "$22$"],
      correct: 1,
      solution: ["Alınan kitap sayısı $=x$. Koşul: $25x+150\\le 400$.", "$150$'yi karşıya at: $25x\\le 250$.", "$25$'e böl: $x\\le 10$.", "En çok $10$ kitap alınabilir."],
      answer: "En çok $10$ kitap.",
    },
    {
      id: "birinci-derece-problemler-9-06",
      difficulty: "Zor",
      prompt: "Bir annenin yaşı kızının yaşının $3$ katıdır. $5$ yıl sonra annenin yaşı, kızının o günkü yaşının $2$ katından $4$ fazla olacaktır. Kız şimdi kaç yaşındadır?",
      options: ["$7$", "$9$", "$12$", "$14$", "$27$"],
      correct: 1,
      solution: ["Kızın şimdiki yaşı $=x$, annenin yaşı $=3x$.", "$5$ yıl sonra kız $=(x+5)$, anne $=(3x+5)$.", "Koşul: $3x+5=2(x+5)+4$.", "Dağıt: $3x+5=2x+10+4=2x+14$.", "Çöz: $3x-2x=14-5\\Rightarrow x=9$."],
      answer: "Kız şimdi $9$ yaşındadır.",
    },
  ],
};

export default quiz;
