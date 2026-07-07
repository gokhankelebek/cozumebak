import type { TopicQuiz } from "./types";

// cember-analitik-ayt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "cember-analitik-ayt",
  questions: [
    {
      id: "cember-analitik-ayt-01",
      difficulty: "Orta",
      prompt: "$x^{2}+y^{2}-8x+6y-11=0$ çemberinin merkezi $M$, yarıçapı $r$'dir. $M$ noktasının koordinat eksenlerine olan uzaklıklarının toplamı ile $r$'nin toplamı, buna göre kaçtır?",
      options: ["$11$", "$12$", "$13$", "$14$", "$15$"],
      correct: 2,
      solution: ["Katsayıları oku: $D=-8,\\ E=6,\\ F=-11$.", "Merkezi bul: $M=\\left(-\\dfrac{-8}{2},\\,-\\dfrac{6}{2}\\right)=(4,-3)$.", "Yarıçapı bul: $r=\\sqrt{(-4)^{2}+3^{2}-(-11)}=\\sqrt{16+9+11}=\\sqrt{36}=6$.", "$M$'nin $y$ eksenine uzaklığı $|4|=4$, $x$ eksenine uzaklığı $|-3|=3$; toplamı $4+3=7$.", "İstenen toplam: $7+r=7+6=13$."],
      answer: "$13$",
    },
    {
      id: "cember-analitik-ayt-02",
      difficulty: "Orta",
      prompt: "Bir çemberin çapının uç noktaları $A(1,2)$ ve $B(7,10)$'dur. Bu çemberin merkezinin koordinatları toplamı ile yarıçapının toplamı, buna göre kaçtır?",
      options: ["$13$", "$14$", "$14{,}5$", "$15$", "$16$"],
      correct: 3,
      solution: ["Merkez, çapın orta noktasıdır: $\\left(\\dfrac{1+7}{2},\\dfrac{2+10}{2}\\right)=(4,6)$.", "Çap uzunluğu: $|AB|=\\sqrt{(7-1)^{2}+(10-2)^{2}}=\\sqrt{36+64}=\\sqrt{100}=10$.", "Yarıçap, çapın yarısıdır: $r=\\dfrac{10}{2}=5$.", "Merkezin koordinatları toplamı: $4+6=10$.", "İstenen toplam: $10+r=10+5=15$."],
      answer: "$15$",
    },
    {
      id: "cember-analitik-ayt-03",
      difficulty: "Orta",
      prompt: "$(x-3)^{2}+(y+1)^{2}=20$ çemberinin üzerinde, ordinatı (yani $y$ koordinatı) $1$ olan iki nokta vardır. Bu noktalardan apsisi (yani $x$ koordinatı) pozitif olanının apsisi, buna göre kaçtır?",
      options: ["$5$", "$7$", "$8$", "$9$", "$11$"],
      correct: 1,
      solution: ["Üzerindeki noktanın koordinatları $(k,1)$ olsun; denklemde yerine koy: $(k-3)^{2}+(1+1)^{2}=20$.", "Sadeleştir: $(k-3)^{2}+4=20$, yani $(k-3)^{2}=16$.", "Karekök al: $k-3=\\pm 4$, buradan $k=7$ veya $k=-1$.", "Apsisi pozitif olan değer istendiğinden $k=7$ alınır."],
      answer: "$7$",
    },
    {
      id: "cember-analitik-ayt-04",
      difficulty: "Orta",
      prompt: "Merkezi $M(3,-4)$ olan bir çember, $3x-4y+10=0$ doğrusuna teğettir. Buna göre bu çemberin alanı kaç birim karedir?",
      options: ["$25\\pi$", "$36\\pi$", "$49\\pi$", "$\\dfrac{49\\pi}{5}$", "$\\dfrac{121\\pi}{5}$"],
      correct: 2,
      solution: ["Bir doğruya teğet çemberin yarıçapı, merkezin o doğruya uzaklığına eşittir.", "$M(3,-4)$'ün doğruya uzaklığı: $r=\\dfrac{\\lvert 3\\cdot 3-4\\cdot(-4)+10\\rvert}{\\sqrt{3^{2}+(-4)^{2}}}$.", "Payı hesapla: $\\lvert 9+16+10\\rvert=\\lvert 35\\rvert=35$.", "Böl: $r=\\dfrac{35}{5}=7$.", "Alan: $\\pi r^{2}=\\pi\\cdot 7^{2}=49\\pi$."],
      answer: "$49\\pi$",
    },
    {
      id: "cember-analitik-ayt-05",
      difficulty: "Zor",
      prompt: "$x^{2}+y^{2}=25$ çemberi ile $y=x+1$ doğrusu $A$ ve $B$ noktalarında kesişmektedir. Buna göre $[AB]$ kirişinin orta noktasının koordinatları toplamı kaçtır?",
      options: ["$-1$", "$-\\dfrac{1}{2}$", "$0$", "$\\dfrac{1}{2}$", "$1$"],
      correct: 2,
      solution: ["$y=x+1$'i çember denkleminde yerine koy: $x^{2}+(x+1)^{2}=25$.", "Aç ve düzenle: $x^{2}+x^{2}+2x+1=25\\Rightarrow 2x^{2}+2x-24=0\\Rightarrow x^{2}+x-12=0$.", "Kökler $x_A$ ve $x_B$; toplamları Vieta'dan $x_A+x_B=-1$. Orta noktanın apsisi: $\\dfrac{x_A+x_B}{2}=-\\dfrac{1}{2}$.", "Orta noktanın ordinatı doğru üzerinde: $y=x+1=-\\dfrac{1}{2}+1=\\dfrac{1}{2}$.", "Koordinatlar toplamı: $-\\dfrac{1}{2}+\\dfrac{1}{2}=0$."],
      answer: "$0$",
    },
    {
      id: "cember-analitik-ayt-06",
      difficulty: "Orta",
      prompt: "$x^{2}+y^{2}-4x-2y+k=0$ denklemi, yarıçapı $3$ olan bir çember belirtmektedir. Buna göre $k$ kaçtır?",
      options: ["$-4$", "$-2$", "$0$", "$2$", "$4$"],
      correct: 0,
      solution: ["Katsayılar: $D=-4,\\ E=-2,\\ F=k$.", "Yarıçap formülü: $r=\\sqrt{\\left(\\dfrac{D}{2}\\right)^{2}+\\left(\\dfrac{E}{2}\\right)^{2}-F}=\\sqrt{(-2)^{2}+(-1)^{2}-k}=\\sqrt{5-k}$.", "$r=3$ olduğundan $\\sqrt{5-k}=3$, kareyi al: $5-k=9$.", "Çöz: $k=-4$."],
      answer: "$-4$",
    },
    {
      id: "cember-analitik-ayt-07",
      difficulty: "Zor",
      prompt: "Merkezi $M(6,8)$ olan bir çember orijinden geçmektedir. Bu çember üzerinde, merkezden geçen ve orijinden geçen doğru boyunca orijine en uzak nokta $P$'dir. Buna göre $|OP|$ kaç birimdir?",
      options: ["$10$", "$15$", "$16$", "$20$", "$25$"],
      correct: 3,
      solution: ["Yarıçap, merkezin orijine uzaklığıdır: $r=\\sqrt{6^{2}+8^{2}}=\\sqrt{36+64}=\\sqrt{100}=10$.", "Orijin çember üzerindedir. Orijinden, merkez $M$ doğrultusunda çizilen doğru çemberi çapı boyunca keser.", "Orijine en uzak nokta, orijinin tam karşısındaki çap ucudur; orijin ile bu nokta arasındaki uzaklık çap kadardır.", "Çap: $|OP|=2r=2\\cdot 10=20$."],
      answer: "$20$",
    },
  ],
};

export default quiz;
