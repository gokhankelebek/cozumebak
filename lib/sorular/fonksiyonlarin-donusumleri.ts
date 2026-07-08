import type { TopicQuiz } from "./types";

// fonksiyonlarin-donusumleri — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "fonksiyonlarin-donusumleri",
  questions: [
    {
      id: "fonksiyonlarin-donusumleri-01",
      difficulty: "Kolay",
      prompt: "$f(x)=|x|$ grafiği $4$ birim sola ve $2$ birim aşağı ötelenirse elde edilen fonksiyon ve yeni tepe noktası aşağıdakilerden hangisidir?",
      options: ["$y=|x+4|-2$; tepe $(-4,-2)$", "$y=|x-4|-2$; tepe $(4,-2)$", "$y=|x+4|+2$; tepe $(-4,2)$", "$y=|x-4|+2$; tepe $(4,2)$", "$y=|x+2|-4$; tepe $(-2,-4)$"],
      correct: 0,
      solution: ["Sola öteleme için işaret terstir: $4$ birim sola $\\Rightarrow x\\to x+4$, yani $|x+4|$.", "Aşağı öteleme için dışarıya sabit çıkarılır: $2$ birim aşağı $\\Rightarrow -2$.", "Yeni fonksiyon $y=|x+4|-2$ olur.", "Tepe $(0,0)$, $4$ birim sola ve $2$ birim aşağı taşınır: $(0-4,\\;0-2)=(-4,-2)$."],
      answer: "$y=|x+4|-2$; tepe $(-4,-2)$.",
    },
    {
      id: "fonksiyonlarin-donusumleri-02",
      difficulty: "Kolay",
      prompt: "$f(x)=\\sqrt{x}$ olsun. $g(x)=\\sqrt{x+3}-1$ grafiği, $f$ grafiğinden hangi ötelemelerle elde edilir ve başlangıç noktası nereye gider?",
      options: ["$3$ birim sağa, $1$ birim yukarı; başlangıç $(3,1)$", "$3$ birim sağa, $1$ birim aşağı; başlangıç $(3,-1)$", "$3$ birim sola, $1$ birim aşağı; başlangıç $(-3,-1)$", "$3$ birim sola, $1$ birim yukarı; başlangıç $(-3,1)$", "$1$ birim sola, $3$ birim aşağı; başlangıç $(-1,-3)$"],
      correct: 2,
      solution: ["$\\sqrt{x+3}=\\sqrt{x-(-3)}$ olduğundan $h=-3$; $h<0$ için grafik $3$ birim sola ötelenir.", "Dışarıdaki $-1$ sabiti dikey ötelemedir: $1$ birim aşağı.", "$\\sqrt{x}$ grafiğinin başlangıç noktası $(0,0)$'dır.", "Bu nokta $3$ birim sola ve $1$ birim aşağı taşınır: $(0-3,\\;0-1)=(-3,-1)$."],
      answer: "$3$ birim sola, $1$ birim aşağı; başlangıç $(-3,-1)$.",
    },
    {
      id: "fonksiyonlarin-donusumleri-03",
      difficulty: "Orta",
      prompt: "$f(x)=x^2-4x$ olsun. $x$ eksenine göre yansıması olan $y=-f(x)$ fonksiyonu aşağıdakilerden hangisidir?",
      options: ["$y=x^2+4x$", "$y=-x^2-4x$", "$y=-x^2+4x$", "$y=x^2-4x$", "$y=-x^2+4$"],
      correct: 2,
      solution: ["$x$ eksenine göre yansıma $y=-f(x)$ demektir; tüm fonksiyon $-1$ ile çarpılır.", "$-f(x)=-(x^2-4x)$.", "Parantez dağıtılır: $-x^2+4x$.", "Not: $f(-x)$ (y eksenine yansıma) olsaydı $(-x)^2-4(-x)=x^2+4x$ elde edilirdi; burada istenen $-f(x)$'tir."],
      answer: "$y=-x^2+4x$.",
    },
    {
      id: "fonksiyonlarin-donusumleri-04",
      difficulty: "Orta",
      prompt: "$f(x)=x^2+6x+5$ olsun. $y=f(x)+2$ fonksiyonunun tepe (kare) biçimi ve tepe noktası aşağıdakilerden hangisidir?",
      options: ["$y=(x+3)^2-4$; tepe $(-3,-4)$", "$y=(x+3)^2-2$; tepe $(-3,-2)$", "$y=(x+3)^2+2$; tepe $(-3,2)$", "$y=(x-3)^2-2$; tepe $(3,-2)$", "$y=(x+6)^2-2$; tepe $(-6,-2)$"],
      correct: 1,
      solution: ["Önce $f(x)$ tam kareye tamamlanır: $x^2+6x+5=(x+3)^2-9+5=(x+3)^2-4$.", "$+2$ dikey öteleme uygulanır: $y=(x+3)^2-4+2=(x+3)^2-2$.", "Tepe biçiminden $h=-3$, $k=-2$ okunur.", "Tepe noktası $(-3,-2)$'dir."],
      answer: "$y=(x+3)^2-2$; tepe $(-3,-2)$.",
    },
    {
      id: "fonksiyonlarin-donusumleri-05",
      difficulty: "Orta",
      prompt: "Bir $f$ fonksiyonunun grafiği $A(-1,4)$ noktasından geçmektedir. $g(x)=f(x+2)-5$ grafiği aşağıdaki noktalardan hangisinden geçer?",
      options: ["$(1,-1)$", "$(-3,9)$", "$(1,9)$", "$(-3,-1)$", "$(-3,-9)$"],
      correct: 3,
      solution: ["$f(x+2)=f(x-(-2))$ olduğundan grafik $2$ birim sola ötelenir.", "Dışarıdaki $-5$ sabiti grafiği $5$ birim aşağı öteler.", "$A(-1,4)$ noktası aynı öteleme ile taşınır: apsis $-1-2=-3$, ordinat $4-5=-1$.", "Yeni nokta $(-3,-1)$ olur."],
      answer: "$(-3,-1)$.",
    },
    {
      id: "fonksiyonlarin-donusumleri-06",
      difficulty: "Zor",
      prompt: "$y=x^2$ grafiği sırasıyla önce $x$ eksenine göre yansıtılıyor, sonra dikeyde $2$ katına geriliyor, en son $3$ birim yukarı öteleniyor. Oluşan fonksiyonun $x=1$ için değeri kaçtır?",
      options: ["$5$", "$-5$", "$1$", "$-1$", "$3$"],
      correct: 2,
      solution: ["$x$ eksenine yansıma: $y=-x^2$.", "Dikeyde $2$ katına gerilme, tüm fonksiyonu $2$ ile çarpar: $y=-2x^2$.", "$3$ birim yukarı öteleme: $y=-2x^2+3$.", "$x=1$ için: $y=-2\\cdot 1^2+3=-2+3=1$."],
      answer: "$1$.",
    },
  ],
};

export default quiz;
