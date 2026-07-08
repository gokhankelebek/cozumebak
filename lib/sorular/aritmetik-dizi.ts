import type { TopicQuiz } from "./types";

// aritmetik-dizi — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "aritmetik-dizi",
  questions: [
    {
      id: "aritmetik-dizi-01",
      difficulty: "Kolay",
      prompt: "İlk terimi $a_1=-6$, ortak farkı $d=4$ olan aritmetik dizinin $20.$ terimi kaçtır?",
      options: ["$66$", "$70$", "$74$", "$82$", "$86$"],
      correct: 1,
      solution: ["Genel terim formülü: $a_n=a_1+(n-1)d$.", "Yerine koy: $a_{20}=-6+(20-1)\\cdot 4=-6+19\\cdot 4$.", "Hesapla: $a_{20}=-6+76=70$."],
      answer: "$a_{20}=70$.",
    },
    {
      id: "aritmetik-dizi-02",
      difficulty: "Orta",
      prompt: "Bir aritmetik dizide $a_4=19$ ve $a_9=44$ olduğuna göre $a_1$ kaçtır?",
      options: ["$-1$", "$4$", "$9$", "$14$", "$19$"],
      correct: 1,
      solution: ["İki terim arası $9-4=5$ adımdır: $a_9-a_4=5d$.", "$44-19=5d\\Rightarrow 25=5d\\Rightarrow d=5$.", "$a_4=a_1+3d=19$: $a_1+3\\cdot 5=19\\Rightarrow a_1+15=19$.", "$a_1=4$."],
      answer: "$a_1=4$.",
    },
    {
      id: "aritmetik-dizi-03",
      difficulty: "Orta",
      prompt: "$4, 10, 16, 22, \\dots$ aritmetik dizisinin ilk $25$ teriminin toplamı kaçtır?",
      options: ["$1825$", "$1900$", "$1975$", "$3800$", "$1852$"],
      correct: 1,
      solution: ["Dizide $a_1=4$, $d=6$, $n=25$.", "Toplam formülü: $S_n=\\dfrac{n\\big(2a_1+(n-1)d\\big)}{2}$.", "Parantez: $2\\cdot 4+(25-1)\\cdot 6=8+24\\cdot 6=8+144=152$.", "$S_{25}=\\dfrac{25\\cdot 152}{2}=25\\cdot 76=1900$."],
      answer: "$S_{25}=1900$.",
    },
    {
      id: "aritmetik-dizi-04",
      difficulty: "Kolay",
      prompt: "$3x-2,\\ 13,\\ x+8$ sayıları bu sırayla bir aritmetik dizi oluşturduğuna göre $x$ kaçtır?",
      options: ["$3$", "$4$", "$5$", "$6$", "$7$"],
      correct: 2,
      solution: ["Ortadaki terim uçların ortalamasıdır: $13=\\dfrac{(3x-2)+(x+8)}{2}$.", "Her iki tarafı $2$ ile çarp: $26=(3x-2)+(x+8)=4x+6$.", "$4x=20\\Rightarrow x=5$."],
      answer: "$x=5$.",
    },
    {
      id: "aritmetik-dizi-05",
      difficulty: "Orta",
      prompt: "Bir tiyatro salonunda birinci sırada $15$ koltuk vardır ve her sıra bir öncekinden $3$ koltuk fazladır. Salonda toplam $12$ sıra bulunduğuna göre salondaki toplam koltuk sayısı kaçtır?",
      options: ["$180$", "$342$", "$378$", "$396$", "$408$"],
      correct: 2,
      solution: ["Sıra koltukları aritmetik dizi oluşturur: $a_1=15$, $d=3$, $n=12$.", "Son sıra (12. terim): $a_{12}=15+(12-1)\\cdot 3=15+33=48$.", "İlk-son terim formülü: $S_{12}=\\dfrac{12\\,(a_1+a_{12})}{2}=\\dfrac{12\\,(15+48)}{2}$.", "$S_{12}=6\\cdot 63=378$."],
      answer: "Toplam $378$ koltuk.",
    },
    {
      id: "aritmetik-dizi-06",
      difficulty: "Zor",
      prompt: "İlk terimi $52$, ortak farkı $-6$ olan aritmetik dizide ilk kaç terimin toplamı en büyüktür?",
      options: ["$8$", "$9$", "$10$", "$11$", "$12$"],
      correct: 1,
      solution: ["Genel terim: $a_n=52+(n-1)(-6)=58-6n$.", "Toplam, terimler pozitif kaldıkça büyür; $a_n\\ge 0$ olan en büyük $n$'yi ararız.", "$58-6n\\ge 0\\Rightarrow n\\le \\dfrac{58}{6}\\approx 9,67$, yani en büyük tam sayı $n=9$.", "Kontrol: $a_9=58-54=4>0$, $a_{10}=58-60=-2<0$. 10. terim negatif olduğundan eklenince toplamı küçültür.", "Demek ki ilk $9$ terimin toplamı en büyüktür."],
      answer: "İlk $9$ terim.",
    },
  ],
};

export default quiz;
