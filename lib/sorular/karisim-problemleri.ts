import type { TopicQuiz } from "./types";

// karisim-problemleri — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "karisim-problemleri",
  questions: [
    {
      id: "karisim-problemleri-01",
      difficulty: "Kolay",
      prompt: "Tuz oranı $\\%30$ olan $40$ litrelik bir çözelti ile tuz oranı $\\%10$ olan $60$ litrelik bir çözelti karıştırılıyor. Karışımın tuz oranı yüzde kaçtır?",
      options: ["$16$", "$17$", "$18$", "$19$", "$20$"],
      correct: 2,
      solution: ["Birinci çözeltideki tuz: $0{,}30\\cdot 40=12$ litre.", "İkinci çözeltideki tuz: $0{,}10\\cdot 60=6$ litre.", "Toplam tuz $18$ litre, toplam hacim $100$ litre. Oran: $\\dfrac{18}{100}=\\%18$."],
      answer: "$18$",
    },
    {
      id: "karisim-problemleri-02",
      difficulty: "Orta",
      prompt: "Tuz oranı $\\%20$ olan $80$ litrelik bir çözeltiden $20$ litre alınıp yerine aynı miktarda saf su ekleniyor. Son karışımın tuz oranı yüzde kaçtır?",
      options: ["$15$", "$18$", "$20$", "$22$", "$25$"],
      correct: 0,
      solution: ["Başlangıçtaki tuz: $0{,}20\\cdot 80=16$ litre.", "Alınan $20$ litredeki tuz: $0{,}20\\cdot 20=4$ litre. Kalan tuz: $16-4=12$ litre.", "Saf su eklenince tuz değişmez; hacim yine $80$ litre. Oran: $\\dfrac{12}{80}=\\dfrac{3}{20}=\\%15$."],
      answer: "$15$",
    },
    {
      id: "karisim-problemleri-03",
      difficulty: "Kolay",
      prompt: "Şeker oranı $\\%40$ olan $30$ litrelik bir içeceğe, şeker oranı $\\%10$ olan $70$ litrelik bir içecek ekleniyor. Karışımın şeker oranı yüzde kaçtır?",
      options: ["$15$", "$16$", "$17$", "$18$", "$19$"],
      correct: 4,
      solution: ["Birinci içecekteki şeker: $0{,}40\\cdot 30=12$ litre.", "İkinci içecekteki şeker: $0{,}10\\cdot 70=7$ litre.", "Toplam şeker $19$ litre, toplam hacim $100$ litre. Oran: $\\dfrac{19}{100}=\\%19$."],
      answer: "$19$",
    },
    {
      id: "karisim-problemleri-04",
      difficulty: "Orta",
      prompt: "Tuz oranı $\\%25$ olan $60$ litrelik bir çözeltiye, tuz oranı bilinmeyen $40$ litrelik bir çözelti ekleniyor. Oluşan karışımın tuz oranı $\\%19$ olduğuna göre eklenen çözeltinin tuz oranı yüzde kaçtır?",
      options: ["$8$", "$10$", "$12$", "$14$", "$15$"],
      correct: 1,
      solution: ["Toplam hacim $60+40=100$ litre; karışımın tuzu $0{,}19\\cdot 100=19$ litre.", "Birinci çözeltinin tuzu: $0{,}25\\cdot 60=15$ litre. İkinci çözeltinin tuzu: $19-15=4$ litre.", "İkinci çözelti $40$ litre olduğundan oranı: $\\dfrac{4}{40}=0{,}10=\\%10$."],
      answer: "$10$",
    },
    {
      id: "karisim-problemleri-05",
      difficulty: "Orta",
      prompt: "Tuz oranı $\\%20$ olan $50$ litrelik bir çözeltiden kaç litre su buharlaşırsa tuz oranı $\\%25$ olur?",
      options: ["$8$", "$10$", "$12$", "$15$", "$20$"],
      correct: 1,
      solution: ["Tuz miktarı (sabit): $0{,}20\\cdot 50=10$ litre.", "Buharlaşan su $x$ olsun; yeni hacim $50-x$. Denklem: $\\dfrac{10}{50-x}=0{,}25$.", "Çöz: $50-x=\\dfrac{10}{0{,}25}=40\\Rightarrow x=10$."],
      answer: "$10$",
    },
    {
      id: "karisim-problemleri-06",
      difficulty: "Zor",
      prompt: "Tuz oranı $\\%20$ olan $80$ litrelik bir çözeltiye kaç litre saf tuz eklenirse tuz oranı $\\%36$ olur?",
      options: ["$16$", "$18$", "$20$", "$24$", "$28$"],
      correct: 2,
      solution: ["Başlangıç tuzu: $0{,}20\\cdot 80=16$ litre. Eklenen saf tuz $x$ litre olsun.", "Yeni tuz $16+x$, yeni hacim $80+x$. Denklem: $\\dfrac{16+x}{80+x}=0{,}36$.", "İçler dışlar: $16+x=0{,}36(80+x)=28{,}8+0{,}36x$.", "Düzenle: $x-0{,}36x=28{,}8-16\\Rightarrow 0{,}64x=12{,}8\\Rightarrow x=20$."],
      answer: "$20$",
    },
  ],
};

export default quiz;
