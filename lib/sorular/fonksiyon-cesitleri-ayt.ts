import type { TopicQuiz } from "./types";

// fonksiyon-cesitleri-ayt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "fonksiyon-cesitleri-ayt",
  questions: [
    {
      id: "fonksiyon-cesitleri-ayt-01",
      difficulty: "Kolay",
      prompt: "$f:\\mathbb{R}\\to\\mathbb{R}$ olmak üzere $f(x)=a x^3+(a-3)x^2+5x+b-4$ fonksiyonu **tek** fonksiyondur. Buna göre $a+b$ kaçtır?",
      options: ["$5$", "$6$", "$7$", "$8$", "$9$"],
      correct: 2,
      solution: ["Tek fonksiyonda yalnızca tek dereceli kuvvetler bulunabilir; çift dereceli terim ve sabit terim sıfır olmalıdır.", "$x^2$ teriminin katsayısı sıfır olmalı: $a-3=0 \\Rightarrow a=3$.", "Sabit terim sıfır olmalı: $b-4=0 \\Rightarrow b=4$.", "İstenen değer: $a+b=3+4=7$."],
      answer: "$7$",
    },
    {
      id: "fonksiyon-cesitleri-ayt-02",
      difficulty: "Orta",
      prompt: "$f:[2,\\infty)\\to[c,\\infty)$, $f(x)=x^2-4x+7$ fonksiyonu **örten** bir fonksiyondur. Buna göre $c$ kaçtır?",
      options: ["$3$", "$4$", "$5$", "$6$", "$7$"],
      correct: 0,
      solution: ["Örtenlik için değer kümesi $[c,\\infty)$, görüntü kümesine eşit olmalıdır.", "$f(x)=x^2-4x+7=(x-2)^2+3$ biçiminde yazılır; tepe noktası $x=2$'dedir.", "Tanım kümesi $[2,\\infty)$ olduğundan fonksiyon bu aralıkta artandır; en küçük değer $x=2$'de $f(2)=0+3=3$'tür ve $x$ büyüdükçe değer sınırsız artar. Görüntü kümesi $[3,\\infty)$ olur.", "$[c,\\infty)=[3,\\infty) \\Rightarrow c=3$."],
      answer: "$3$",
    },
    {
      id: "fonksiyon-cesitleri-ayt-03",
      difficulty: "Orta",
      prompt: "$f$ bir **çift** fonksiyon, $g$ bir **tek** fonksiyondur. $h(x)=f(x)+g(x)$ fonksiyonu için $h(3)=11$ ve $h(-3)=5$ veriliyor. Buna göre $f(3)\\cdot g(3)$ çarpımı kaçtır?",
      options: ["$11$", "$15$", "$18$", "$21$", "$24$"],
      correct: 4,
      solution: ["$f$ çift olduğundan $f(-3)=f(3)$; $g$ tek olduğundan $g(-3)=-g(3)$.", "Verilenleri yaz: $h(3)=f(3)+g(3)=11$ ve $h(-3)=f(-3)+g(-3)=f(3)-g(3)=5$.", "İki denklemi taraf tarafa topla: $2f(3)=16 \\Rightarrow f(3)=8$. Birinciden $g(3)=11-8=3$.", "İstenen çarpım: $f(3)\\cdot g(3)=8\\cdot 3=24$."],
      answer: "$24$",
    },
    {
      id: "fonksiyon-cesitleri-ayt-04",
      difficulty: "Zor",
      prompt: "$f:\\mathbb{R}\\to\\mathbb{R}$ olmak üzere $f(x)=\\dfrac{(2a-6)x^2+5x+(b+1)}{x^2+3}$ fonksiyonu **tek** fonksiyondur. Buna göre $a+b$ kaçtır?",
      options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
      correct: 1,
      solution: ["Payda $x^2+3$ çift bir ifadedir. Bütün kesrin tek olabilmesi için **pay da tek** olmalıdır; yani payda yalnızca tek dereceli terim kalmalı, çift dereceli ve sabit terimler sıfırlanmalıdır.", "$x^2$ katsayısı sıfır: $2a-6=0 \\Rightarrow a=3$.", "Sabit terim sıfır: $b+1=0 \\Rightarrow b=-1$. (Kontrol: $f(0)=\\dfrac{0}{3}=0$, tek fonksiyon koşuluyla uyumlu.)", "Geriye $f(x)=\\dfrac{5x}{x^2+3}$ kalır; bu gerçekten tektir. İstenen: $a+b=3+(-1)=2$."],
      answer: "$2$",
    },
    {
      id: "fonksiyon-cesitleri-ayt-05",
      difficulty: "Orta",
      prompt: "$f:[1,5]\\to B$, $f(x)=x^2-2x+4$ fonksiyonunun **örten** olması için $B$ değer kümesi aşağıdakilerden hangisi olmalıdır?",
      options: ["$[3,19]$", "$[4,19]$", "$[0,19]$", "$[3,20]$", "$[4,20]$"],
      correct: 0,
      solution: ["$f(x)=x^2-2x+4=(x-1)^2+3$. Tepe noktası $x=1$'dedir ve tepe değeri $3$'tür.", "Tanım kümesi $[1,5]$, tepe noktasından başlar; bu aralıkta fonksiyon **artandır**. En küçük değer $x=1$'de $f(1)=(0)^2+3=3$.", "En büyük değer $x=5$'te: $f(5)=(5-1)^2+3=16+3=19$.", "Görüntü kümesi $[3,19]$'dur. Örtenlik için $B$ buna eşit olmalıdır."],
      answer: "$[3,19]$",
    },
    {
      id: "fonksiyon-cesitleri-ayt-06",
      difficulty: "Kolay",
      prompt: "$f$ ve $g$, $\\mathbb{R}$ üzerinde tanımlı fonksiyonlardır. $f$ **çift**, $g$ **tek** fonksiyondur ve her ikisi de aynı anda bire bir olamaz. $g(x)=x^3+kx$ tek fonksiyon olduğuna ve $g(2)=14$ sağlandığına göre $k$ kaçtır?",
      options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
      correct: 2,
      solution: ["$g(x)=x^3+kx$ ifadesinin tüm üsleri tektir; her $k$ değeri için zaten tektir, ek koşul gerekmez.", "$g(2)=14$ koşulunu kullan: $2^3+k\\cdot 2=14 \\Rightarrow 8+2k=14$.", "$2k=6 \\Rightarrow k=3$."],
      answer: "$3$",
    },
  ],
};

export default quiz;
