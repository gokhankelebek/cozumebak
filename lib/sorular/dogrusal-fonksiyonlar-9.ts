import type { TopicQuiz } from "./types";

// dogrusal-fonksiyonlar-9 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "dogrusal-fonksiyonlar-9",
  questions: [
    {
      id: "dogrusal-fonksiyonlar-9-01",
      difficulty: "Kolay",
      prompt: "$f(x)=-4x+7$ doğrusal fonksiyonu için eğim, $y$ kesişimi ve fonksiyonun gidişi aşağıdakilerden hangisinde doğru verilmiştir?",
      options: ["Eğim $-4$, $y$ kesişimi $(0,7)$, azalan", "Eğim $-4$, $y$ kesişimi $(0,-7)$, azalan", "Eğim $7$, $y$ kesişimi $(0,-4)$, artan", "Eğim $-4$, $y$ kesişimi $(0,7)$, artan", "Eğim $4$, $y$ kesişimi $(0,7)$, artan"],
      correct: 0,
      solution: ["$f(x)=ax+b$ ile karşılaştır: $a=-4$ (eğim), $b=7$ ($y$ kesişimi $(0,7)$).", "Eğim $a=-4<0$ olduğundan fonksiyon azalandır.", "Dolayısıyla eğim $-4$, $y$ kesişimi $(0,7)$ ve fonksiyon azalandır."],
      answer: "Eğim $-4$, $y$ kesişimi $(0,7)$, azalan.",
    },
    {
      id: "dogrusal-fonksiyonlar-9-02",
      difficulty: "Kolay",
      prompt: "$A(-1,\\ 2)$ ve $B(3,\\ 14)$ noktalarından geçen doğrunun eğimi kaçtır?",
      options: ["$4$", "$3$", "$-3$", "$\\dfrac{1}{3}$", "$6$"],
      correct: 1,
      solution: ["Eğim formülü: $a=\\dfrac{y_2-y_1}{x_2-x_1}$.", "$a=\\dfrac{14-2}{3-(-1)}=\\dfrac{12}{4}=3$.", "Eğim $3$'tür."],
      answer: "Eğim $3$.",
    },
    {
      id: "dogrusal-fonksiyonlar-9-03",
      difficulty: "Orta",
      prompt: "$f(x)=\\dfrac{3}{4}x-6$ fonksiyonunun $x$ eksenini kestiği nokta aşağıdakilerden hangisidir?",
      options: ["$(0,-6)$", "$\\left(-\\dfrac{9}{2},\\ 0\\right)$", "$(8,\\ 0)$", "$\\left(\\dfrac{9}{2},\\ 0\\right)$", "$(6,\\ 0)$"],
      correct: 2,
      solution: ["$x$ eksenini keserken $y=f(x)=0$ alınır.", "$\\dfrac{3}{4}x-6=0\\Rightarrow \\dfrac{3}{4}x=6$.", "$x=6\\cdot\\dfrac{4}{3}=8$, nokta $(8,0)$."],
      answer: "$(8,0)$.",
    },
    {
      id: "dogrusal-fonksiyonlar-9-04",
      difficulty: "Orta",
      prompt: "Eğimi $5$ olan ve $(-2,\\ 4)$ noktasından geçen doğrusal fonksiyon aşağıdakilerden hangisidir?",
      options: ["$f(x)=5x-6$", "$f(x)=5x+6$", "$f(x)=5x-14$", "$f(x)=-2x+5$", "$f(x)=5x+14$"],
      correct: 4,
      solution: ["Eğim $5$ olduğundan $f(x)=5x+b$.", "$(-2,4)$ noktasını yerine koy: $4=5\\cdot(-2)+b\\Rightarrow 4=-10+b$.", "$b=14$, dolayısıyla $f(x)=5x+14$."],
      answer: "$f(x)=5x+14$.",
    },
    {
      id: "dogrusal-fonksiyonlar-9-05",
      difficulty: "Orta",
      prompt: "$f(x)=ax+b$ doğrusal fonksiyonu için $f(1)=-2$ ve $f(5)=10$ ise $f(0)$ kaçtır?",
      options: ["$-5$", "$-2$", "$3$", "$-8$", "$5$"],
      correct: 0,
      solution: ["Önce eğim: $a=\\dfrac{f(5)-f(1)}{5-1}=\\dfrac{10-(-2)}{4}=\\dfrac{12}{4}=3$.", "$f(x)=3x+b$; $f(1)=-2$ için: $3\\cdot 1+b=-2\\Rightarrow b=-5$.", "$f(0)=b=-5$."],
      answer: "$f(0)=-5$.",
    },
    {
      id: "dogrusal-fonksiyonlar-9-06",
      difficulty: "Zor",
      prompt: "Bir taksinin açılış (iniş) ücreti $15$ TL olup her kilometre için $6$ TL ekleniyor. Yol boyunca ödenen toplam ücret $x$ kilometreye bağlı $f(x)=6x+15$ fonksiyonuyla veriliyor. Toplam ücretin $81$ TL olduğu bir yolculukta kaç kilometre yol gidilmiştir?",
      options: ["$16$", "$13$", "$11$", "$14$", "$66$"],
      correct: 2,
      solution: ["Toplam ücret $81$ TL olduğundan $f(x)=81$ yazılır: $6x+15=81$.", "$6x=81-15=66$.", "$x=\\dfrac{66}{6}=11$ km."],
      answer: "$11$ km.",
    },
  ],
};

export default quiz;
