import type { TopicQuiz } from "./types";

// tek-degiskenli-veri-9 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "tek-degiskenli-veri-9",
  questions: [
    {
      id: "tek-degiskenli-veri-9-01",
      difficulty: "Kolay",
      prompt: "$12,\\ 18,\\ 27,\\ 15,\\ 23$ verilerinin aritmetik ortalaması kaçtır?",
      options: ["$18$", "$19$", "$20$", "$23$", "$95$"],
      correct: 1,
      solution: ["Tüm değerleri topla: $12+18+27+15+23=95$.", "Veri sayısı $5$ olduğundan ortalama: $\\overline{x}=\\dfrac{95}{5}=19$."],
      answer: "$\\overline{x}=19$.",
    },
    {
      id: "tek-degiskenli-veri-9-02",
      difficulty: "Orta",
      prompt: "$11,\\ 4,\\ 8,\\ 15,\\ 6,\\ 20$ verilerinin medyanı (ortancası) kaçtır?",
      options: ["$8$", "$8{,}5$", "$9$", "$9{,}5$", "$11$"],
      correct: 3,
      solution: ["Önce küçükten büyüğe sırala: $4,\\ 6,\\ 8,\\ 11,\\ 15,\\ 20$.", "Veri sayısı $6$ (çift); ortadaki iki değer $3.$ ve $4.$ sıradaki $8$ ile $11$'dir.", "Medyan: $\\dfrac{8+11}{2}=\\dfrac{19}{2}=9{,}5$."],
      answer: "Medyan $=9{,}5$.",
    },
    {
      id: "tek-degiskenli-veri-9-03",
      difficulty: "Kolay",
      prompt: "Bir haftalık sıcaklık ölçümlerinde en düşük değer $-3\\,^\\circ\\text{C}$ ve açıklık $17\\,^\\circ\\text{C}$ olarak bulunmuştur. Buna göre en yüksek sıcaklık kaç $^\\circ\\text{C}$'dir?",
      options: ["$11$", "$14$", "$17$", "$20$", "$-20$"],
      correct: 1,
      solution: ["Açıklık $=$ en büyük değer $-$ en küçük değer.", "$17 = x-(-3) = x+3$.", "$x = 17-3 = 14$."],
      answer: "$14\\,^\\circ\\text{C}$.",
    },
    {
      id: "tek-degiskenli-veri-9-04",
      difficulty: "Orta",
      prompt: "$7,\\ 13,\\ x,\\ 19,\\ 6$ verilerinin aritmetik ortalaması $12$ ise $x$ kaçtır?",
      options: ["$11$", "$12$", "$14$", "$15$", "$45$"],
      correct: 3,
      solution: ["Ortalama formülü: $\\dfrac{7+13+x+19+6}{5}=12$.", "Bilinenlerin toplamı $7+13+19+6=45$, yani $\\dfrac{45+x}{5}=12$.", "$45+x=60 \\Rightarrow x=15$."],
      answer: "$x=15$.",
    },
    {
      id: "tek-degiskenli-veri-9-05",
      difficulty: "Orta",
      prompt: "Bir kafenin beş güne ait sattığı tatlı sayıları sütun grafiğinden $12,\\ 7,\\ 15,\\ 7,\\ 9$ olarak okunuyor. Bu verilerin modu ile medyanının toplamı kaçtır?",
      options: ["$14$", "$16$", "$18$", "$22$", "$24$"],
      correct: 1,
      solution: ["Mod, en çok tekrar eden değerdir: $7$ iki kez geçer, diğerleri birer kez; mod $=7$.", "Medyan için sırala: $7,\\ 7,\\ 9,\\ 12,\\ 15$. Veri sayısı $5$ (tek), ortadaki $3.$ değer $9$; medyan $=9$.", "Toplam: $7+9=16$."],
      answer: "Mod $+$ medyan $=7+9=16$.",
    },
    {
      id: "tek-degiskenli-veri-9-06",
      difficulty: "Zor",
      prompt: "Bir atölyedeki $6$ çalışanın yaş ortalaması $34$'tür. Atölyeye yaşları $40$ ve $44$ olan iki yeni çalışan katılırsa yeni yaş ortalaması kaç olur?",
      options: ["$35$", "$36$", "$37$", "$39$", "$42$"],
      correct: 1,
      solution: ["İlk $6$ çalışanın yaş toplamı: $6\\cdot 34=204$.", "İki yeni çalışanı ekle: $204+40+44=288$.", "Toplam kişi sayısı $8$ olduğundan yeni ortalama: $\\dfrac{288}{8}=36$."],
      answer: "$36$.",
    },
  ],
};

export default quiz;
