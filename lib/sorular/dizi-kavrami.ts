import type { TopicQuiz } from "./types";

// dizi-kavrami — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "dizi-kavrami",
  questions: [
    {
      id: "dizi-kavrami-01",
      difficulty: "Kolay",
      prompt: "Genel terimi $a_n=4n-3$ olan dizide $a_1+a_5$ toplamı kaçtır?",
      options: ["$14$", "$16$", "$18$", "$20$", "$22$"],
      correct: 2,
      solution: ["$n=1$ için $a_1=4\\cdot 1-3=1$.", "$n=5$ için $a_5=4\\cdot 5-3=20-3=17$.", "Toplam: $a_1+a_5=1+17=18$."],
      answer: "$a_1=1$, $a_5=17$ olduğundan toplam $18$'dir.",
    },
    {
      id: "dizi-kavrami-02",
      difficulty: "Kolay",
      prompt: "$3,\\ 7,\\ 11,\\ 15,\\ \\dots$ dizisinin genel terimi ($a_n$) aşağıdakilerden hangisidir?",
      options: ["$a_n=4n$", "$a_n=4n-1$", "$a_n=4n+3$", "$a_n=3n$", "$a_n=n+4$"],
      correct: 1,
      solution: ["Ardışık terimler $4$'er artıyor, o hâlde $a_n=4n+k$ biçimindedir.", "$n=1$ için ilk terim $3$ olmalı: $4\\cdot 1+k=3\\Rightarrow k=-1$.", "Formül: $a_n=4n-1$. Kontrol: $n=2$ için $4\\cdot 2-1=7$. ✓"],
      answer: "$a_n=4n-1$.",
    },
    {
      id: "dizi-kavrami-03",
      difficulty: "Orta",
      prompt: "Genel terimi $a_n=5n+3$ olan dizide $73$ sayısı kaçıncı terimdir?",
      options: ["$12.$ terim", "$13.$ terim", "$14.$ terim", "$15.$ terim", "$73$ bu dizinin terimi değildir"],
      correct: 2,
      solution: ["$a_n=73$ kur: $5n+3=73$.", "$5n=70\\Rightarrow n=14$.", "$n=14$ pozitif tam sayı olduğundan $73$, dizinin $14.$ terimidir."],
      answer: "$14.$ terim.",
    },
    {
      id: "dizi-kavrami-04",
      difficulty: "Orta",
      prompt: "Genel terimi $a_n=\\dfrac{n-5}{n+2}$ olan dizide hangi terim $0$'a eşittir?",
      options: ["$2.$ terim", "$3.$ terim", "$5.$ terim", "$7.$ terim", "Hiçbir terim $0$ olamaz"],
      correct: 2,
      solution: ["Bir kesir yalnız payı sıfır olunca sıfırdır: $\\dfrac{n-5}{n+2}=0\\Rightarrow n-5=0$.", "$n=5$.", "Payda $n=5$ için $5+2=7\\neq 0$ olduğundan terim geçerlidir; $a_5=0$."],
      answer: "$5.$ terim ($a_5=0$).",
    },
    {
      id: "dizi-kavrami-05",
      difficulty: "Orta",
      prompt: "Genel terimi $a_n=12-3n$ olan dizi hangi terimden itibaren negatif değer alır?",
      options: ["$3.$ terimden itibaren", "$4.$ terimden itibaren", "$5.$ terimden itibaren", "$6.$ terimden itibaren", "Dizi hiçbir terimde negatif olmaz"],
      correct: 2,
      solution: ["$a_n<0$ iste: $12-3n<0$.", "$12<3n\\Rightarrow n>4$.", "$n$ pozitif tam sayı olduğundan en küçük çözüm $n=5$'tir. Kontrol: $a_5=12-15=-3<0$, $a_4=12-12=0$. ✓"],
      answer: "$5.$ terimden itibaren negatiftir.",
    },
    {
      id: "dizi-kavrami-06",
      difficulty: "Zor",
      prompt: "Bir tiyatro salonunda ilk sırada $8$ koltuk vardır ve her sıra bir öncekinden $3$ koltuk fazladır. Buna göre $41$ koltuğun bulunduğu sıra kaçıncı sıradır?",
      options: ["$10.$ sıra", "$11.$ sıra", "$12.$ sıra", "$13.$ sıra", "$14.$ sıra"],
      correct: 2,
      solution: ["Sıradaki koltuk sayısı $3$'er artan bir dizidir: $a_n=3n+k$.", "$n=1$ için $8$ olmalı: $3\\cdot 1+k=8\\Rightarrow k=5$, yani $a_n=3n+5$.", "$41$ koltuk için: $3n+5=41\\Rightarrow 3n=36\\Rightarrow n=12$.", "$n=12$ pozitif tam sayı; koltuklar $12.$ sıradadır. Kontrol: $a_{12}=3\\cdot 12+5=41$. ✓"],
      answer: "$12.$ sıra.",
    },
  ],
};

export default quiz;
