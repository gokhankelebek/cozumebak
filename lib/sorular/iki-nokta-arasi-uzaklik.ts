import type { TopicQuiz } from "./types";

// iki-nokta-arasi-uzaklik — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "iki-nokta-arasi-uzaklik",
  questions: [
    {
      id: "iki-nokta-arasi-uzaklik-01",
      difficulty: "Kolay",
      prompt: "$A(-1,-3)$ ve $B(3,0)$ noktaları arasındaki uzaklık kaç birimdir?",
      options: ["$5$", "$7$", "$\\sqrt{7}$", "$25$", "$\\sqrt{13}$"],
      correct: 0,
      solution: ["Yatay fark: $\\Delta x=3-(-1)=4$.", "Dikey fark: $\\Delta y=0-(-3)=3$.", "Uzaklık formülü: $|AB|=\\sqrt{(\\Delta x)^2+(\\Delta y)^2}=\\sqrt{4^2+3^2}$.", "$|AB|=\\sqrt{16+9}=\\sqrt{25}=5$."],
      answer: "$|AB|=5$ (A).",
    },
    {
      id: "iki-nokta-arasi-uzaklik-02",
      difficulty: "Orta",
      prompt: "Bir doğru parçasının bir ucu $A(-4,2)$, orta noktası ise $M(1,-1)$'dir. Diğer uç $B$ noktasının koordinatları nedir?",
      options: ["$(6,-4)$", "$(-2,4)$", "$(5,-3)$", "$(6,4)$", "$\\left(-\\dfrac{3}{2},\\dfrac{1}{2}\\right)$"],
      correct: 0,
      solution: ["Orta nokta formülünü tersten kullan: $\\dfrac{x_1+x_2}{2}=1$ ve $\\dfrac{y_1+y_2}{2}=-1$.", "$x$ için: $\\dfrac{-4+x_2}{2}=1\\Rightarrow -4+x_2=2\\Rightarrow x_2=6$.", "$y$ için: $\\dfrac{2+y_2}{2}=-1\\Rightarrow 2+y_2=-2\\Rightarrow y_2=-4$.", "Diğer uç: $B(6,-4)$."],
      answer: "$B(6,-4)$ (A).",
    },
    {
      id: "iki-nokta-arasi-uzaklik-05",
      difficulty: "Orta",
      prompt: "Bir keşif uçağı, radar ekranında orijine yerleştirilen üste göre $A(8,15)$ noktasında görünmektedir. Ekrandaki her birim $1$ km'yi temsil ettiğine göre, uçağın üsse olan uzaklığı kaç km'dir?",
      options: ["$23$", "$\\sqrt{23}$", "$17$", "$289$", "$\\sqrt{161}$"],
      correct: 2,
      solution: ["Üs orijinde: $O(0,0)$, uçak $A(8,15)$.", "Farklar: $\\Delta x=8-0=8$, $\\Delta y=15-0=15$.", "Uzaklık: $|OA|=\\sqrt{8^2+15^2}=\\sqrt{64+225}=\\sqrt{289}$.", "$\\sqrt{289}=17$, yani $17$ km."],
      answer: "$17$ km (C).",
    },
    {
      id: "iki-nokta-arasi-uzaklik-06",
      difficulty: "Zor",
      prompt: "$A(1,2)$ ve $B(x,6)$ noktaları arasındaki uzaklık $5$ birimdir. $x$'in alabileceği değerlerin toplamı kaçtır?",
      options: ["$4$", "$-2$", "$3$", "$2$", "$5$"],
      correct: 3,
      solution: ["Uzaklık formülü: $\\sqrt{(x-1)^2+(6-2)^2}=5$.", "Karesini al: $(x-1)^2+16=25\\Rightarrow (x-1)^2=9$.", "Kök al: $x-1=\\pm 3$, yani $x=4$ veya $x=-2$.", "Değerlerin toplamı: $4+(-2)=2$."],
      answer: "Toplam $=2$ (D).",
    },
  ],
};

export default quiz;
