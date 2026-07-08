import type { TopicQuiz } from "./types";

// karesel-fonksiyonlar-10 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "karesel-fonksiyonlar-10",
  questions: [
    {
      id: "karesel-fonksiyonlar-10-01",
      difficulty: "Kolay",
      prompt: "$f(x)=-3x^2+5x-2$ karesel fonksiyonunun grafiği olan parabol için aşağıdakilerden hangisi doğrudur?",
      options: ["Kollar yukarı açılır, $y$ eksenini $(0,-2)$ noktasında keser.", "Kollar aşağı açılır, $y$ eksenini $(0,-2)$ noktasında keser.", "Kollar aşağı açılır, $y$ eksenini $(0,5)$ noktasında keser.", "Kollar yukarı açılır, $y$ eksenini $(0,5)$ noktasında keser.", "Kollar aşağı açılır, $y$ eksenini $(0,-3)$ noktasında keser."],
      correct: 1,
      solution: ["Baş katsayı $a=-3<0$ olduğundan kolların yönünü $a$ belirler ve kollar **aşağı** açılır.", "$y$ eksenini kestiği nokta $x=0$ için $f(0)=c=-2$, yani $(0,-2)$ noktasıdır.", "Buna göre kollar aşağı açılır ve $y$ eksenini $(0,-2)$'de keser."],
      answer: "Kollar aşağı açılır ve $y$ eksenini $(0,-2)$ noktasında keser (B).",
    },
    {
      id: "karesel-fonksiyonlar-10-02",
      difficulty: "Kolay",
      prompt: "$f(x)=x^2-8x+11$ parabolünün tepe noktası aşağıdakilerden hangisidir?",
      options: ["$T(4,-5)$", "$T(-4,-5)$", "$T(4,11)$", "$T(4,-21)$", "$T(8,-5)$"],
      correct: 0,
      solution: ["Tepe apsisi $r=-\\dfrac{b}{2a}=-\\dfrac{-8}{2\\cdot 1}=4$.", "Tepe ordinatı $k=f(4)=4^2-8\\cdot4+11=16-32+11=-5$.", "Tepe noktası $T(4,-5)$'tir."],
      answer: "$T(4,-5)$ (A).",
    },
    {
      id: "karesel-fonksiyonlar-10-03",
      difficulty: "Orta",
      prompt: "$f(x)=3x^2-6x+5$ fonksiyonunun en küçük değeri kaçtır?",
      options: ["$5$", "$1$", "$-2$", "$2$", "$8$"],
      correct: 3,
      solution: ["$a=3>0$ olduğundan fonksiyonun en küçük değeri tepe noktasının ordinatı $k$'dir.", "$\\Delta=b^2-4ac=(-6)^2-4\\cdot3\\cdot5=36-60=-24$.", "$k=-\\dfrac{\\Delta}{4a}=-\\dfrac{-24}{4\\cdot3}=\\dfrac{24}{12}=2$.", "(Doğrulama: $r=-\\dfrac{-6}{2\\cdot3}=1$, $f(1)=3-6+5=2$.)"],
      answer: "En küçük değer $2$ (D).",
    },
    {
      id: "karesel-fonksiyonlar-10-04",
      difficulty: "Orta",
      prompt: "$f(x)=x^2+bx+7$ parabolünün simetri ekseni $x=-2$ doğrusu olduğuna göre $b$ kaçtır?",
      options: ["$-4$", "$-2$", "$2$", "$7$", "$4$"],
      correct: 4,
      solution: ["Simetri ekseni $x=r=-\\dfrac{b}{2a}$ ile bulunur; burada $a=1$.", "$-\\dfrac{b}{2\\cdot 1}=-2$ eşitliğinden $-\\dfrac{b}{2}=-2$.", "Buradan $b=4$ elde edilir."],
      answer: "$b=4$ (E).",
    },
    {
      id: "karesel-fonksiyonlar-10-05",
      difficulty: "Orta",
      prompt: "$f(x)=x^2-10x+27$ fonksiyonu tepe biçimi $f(x)=(x-r)^2+k$ olarak yazıldığında $r+k$ toplamı kaçtır?",
      options: ["$5$", "$2$", "$7$", "$27$", "$-3$"],
      correct: 2,
      solution: ["Tam kareye tamamla: $x^2-10x$ için $\\left(\\dfrac{-10}{2}\\right)^2=25$ ekleyip çıkar.", "$f(x)=(x^2-10x+25)-25+27=(x-5)^2+2$.", "Tepe biçimiyle karşılaştırınca $r=5$ ve $k=2$ olur.", "$r+k=5+2=7$."],
      answer: "$r+k=7$ (C).",
    },
    {
      id: "karesel-fonksiyonlar-10-06",
      difficulty: "Zor",
      prompt: "Bir çiftçi elindeki $24$ m tel ile dikdörtgen biçiminde bir bahçeyi çevirecektir. Bu bahçenin alanı en çok kaç $\\text{m}^2$ olabilir?",
      options: ["$24$", "$48$", "$144$", "$36$", "$12$"],
      correct: 3,
      solution: ["Bir kenar $x$ ise, çevre $2x+2y=24$ olduğundan diğer kenar $y=12-x$ olur.", "Alan $A(x)=x(12-x)=-x^2+12x$ bir paraboldür; $a=-1<0$ olduğundan tepe noktasında en büyüktür.", "$r=-\\dfrac{12}{2\\cdot(-1)}=6$, yani $x=6$ m.", "$A(6)=6\\cdot(12-6)=6\\cdot6=36\\ \\text{m}^2$ (kare biçim)."],
      answer: "En büyük alan $36\\ \\text{m}^2$ (D).",
    },
  ],
};

export default quiz;
