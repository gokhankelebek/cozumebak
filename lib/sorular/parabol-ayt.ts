import type { TopicQuiz } from "./types";

// parabol-ayt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "parabol-ayt",
  questions: [
    {
      id: "parabol-ayt-01",
      difficulty: "Orta",
      prompt: "Tepe noktası $T(2,-3)$ olan ve $(0,1)$ noktasından geçen parabolün denklemi $y=ax^{2}+bx+c$ biçiminde yazılıyor. Buna göre $a+b+c$ toplamı kaçtır?",
      options: ["$-4$", "$-3$", "$-2$", "$0$", "$2$"],
      correct: 2,
      solution: ["Tepe noktası verildiğinden tepe biçimini yaz: $y=a(x-2)^{2}-3$.", "$(0,1)$ noktasını yerine koy: $1=a(0-2)^{2}-3=4a-3$, buradan $a=1$.", "Aç: $y=(x-2)^{2}-3=x^{2}-4x+4-3=x^{2}-4x+1$. Böylece $a=1,\\ b=-4,\\ c=1$.", "Topla: $a+b+c=1+(-4)+1=-2$."],
      answer: "$-2$",
    },
    {
      id: "parabol-ayt-02",
      difficulty: "Orta",
      prompt: "$f(x)=x^{2}-6x+m$ fonksiyonunun en küçük değeri $-4$'tür. Bu fonksiyonun grafiği olan parabol, $x$ eksenini $x_{1}$ ve $x_{2}$ apsisli noktalarda kesmektedir. Buna göre $x_{1}\\cdot x_{2}$ çarpımı kaçtır?",
      options: ["$3$", "$5$", "$6$", "$8$", "$9$"],
      correct: 1,
      solution: ["$a=1>0$ olduğundan en küçük değer tepe noktasının ordinatıdır.", "Apsis: $x_{T}=-\\dfrac{-6}{2\\cdot 1}=3$.", "En küçük değeri kur: $f(3)=3^{2}-6\\cdot 3+m=9-18+m=m-9$. Bu değer $-4$ olduğundan $m-9=-4$, yani $m=5$.", "Kökleri için $x^{2}-6x+5=0$ denkleminde köklerin çarpımı $\\dfrac{c}{a}=\\dfrac{5}{1}=5$'tir."],
      answer: "$5$",
    },
    {
      id: "parabol-ayt-03",
      difficulty: "Zor",
      prompt: "Bir parabol $x$ eksenini $x=-1$ ve $x=4$ noktalarında, $y$ eksenini ise $(0,-8)$ noktasında kesmektedir. Buna göre bu parabolün tepe noktasının ordinatı kaçtır?",
      options: ["$-9$", "$-10$", "$-11$", "$-12$", "$-\\dfrac{25}{2}$"],
      correct: 4,
      solution: ["Kökler verildiğinden çarpan biçimini yaz: $y=a(x+1)(x-4)$.", "$(0,-8)$ noktasını yerine koy: $-8=a(0+1)(0-4)=-4a$, buradan $a=2$.", "Tepe apsisi, köklerin ortasıdır: $x_{T}=\\dfrac{-1+4}{2}=\\dfrac{3}{2}$.", "Ordinat: $y_{T}=2\\left(\\dfrac{3}{2}+1\\right)\\left(\\dfrac{3}{2}-4\\right)=2\\cdot\\dfrac{5}{2}\\cdot\\left(-\\dfrac{5}{2}\\right)=-\\dfrac{25}{2}$."],
      answer: "$-\\dfrac{25}{2}$",
    },
    {
      id: "parabol-ayt-04",
      difficulty: "Orta",
      prompt: "$y=x^2-2x+5$ parabolü ile $y=2x+k$ doğrusunun tek bir ortak noktası (teğetlik) vardır. Buna göre $k$ kaçtır?",
      options: ["$0$", "$1$", "$2$", "$3$", "$4$"],
      correct: 1,
      solution: ["Eşitle: $x^2-2x+5=2x+k$.", "Bir tarafa topla: $x^2-4x+(5-k)=0$.", "Teğetlik için $\\Delta=0$: $(-4)^2-4\\cdot 1\\cdot(5-k)=0 \\Rightarrow 16-20+4k=0$.", "Çöz: $4k=4 \\Rightarrow k=1$."],
      answer: "$1$",
    },
    {
      id: "parabol-ayt-05",
      difficulty: "Zor",
      prompt: "$y=x^2+bx+c$ parabolünün tepe noktası $x$ ekseni üzerindedir ve simetri ekseni $x=4$ doğrusudur. Buna göre $b+c$ toplamı kaçtır?",
      options: ["$-8$", "$0$", "$8$", "$12$", "$16$"],
      correct: 2,
      solution: ["Simetri ekseni $x=-\\dfrac{b}{2a}=-\\dfrac{b}{2}=4 \\Rightarrow b=-8$.", "Tepe $x$ ekseni üzerinde ise parabol eksene teğettir: $\\Delta=b^2-4c=0 \\Rightarrow (-8)^2-4c=0 \\Rightarrow 64=4c \\Rightarrow c=16$.", "Toplam: $b+c=-8+16=8$."],
      answer: "$8$",
    },
    {
      id: "parabol-ayt-06",
      difficulty: "Orta",
      prompt: "$f(x)=ax^2+bx+c$ parabolü için $f(1)=f(5)=0$ ve fonksiyonun en küçük değeri $-8$'dir. Buna göre $a$ kaçtır?",
      options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
      correct: 1,
      solution: ["Kökler $1$ ve $5$ olduğundan $f(x)=a(x-1)(x-5)$.", "Tepe apsisi köklerin ortası: $x_T=\\dfrac{1+5}{2}=3$.", "En küçük değer tepede: $f(3)=a(3-1)(3-5)=a\\cdot 2\\cdot(-2)=-4a$.", "Bu değer $-8$: $-4a=-8 \\Rightarrow a=2$."],
      answer: "$2$",
    },
  ],
};

export default quiz;
