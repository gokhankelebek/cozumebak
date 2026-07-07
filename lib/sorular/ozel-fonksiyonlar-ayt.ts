import type { TopicQuiz } from "./types";

// ozel-fonksiyonlar-ayt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "ozel-fonksiyonlar-ayt",
  questions: [
    {
      id: "ozel-fonksiyonlar-ayt-01",
      difficulty: "Orta",
      prompt: "$f(x)=\\begin{cases}2x+3,& x<-1\\\\ \\lvert x\\rvert-1,& -1\\le x<3\\\\ \\left\\lfloor \\dfrac{x}{2}\\right\\rfloor,& x\\ge 3\\end{cases}$ biçiminde tanımlanıyor. Buna göre $f(-2)+f(2)+f(5)$ toplamı kaçtır?",
      options: ["$0$", "$1$", "$2$", "$3$", "$4$"],
      correct: 2,
      solution: ["$f(-2)$: $-2<-1$ olduğundan birinci parça geçerlidir, $f(-2)=2\\cdot(-2)+3=-1$.", "$f(2)$: $-1\\le 2<3$ olduğundan ikinci parça geçerlidir, $f(2)=\\lvert 2\\rvert-1=1$.", "$f(5)$: $5\\ge 3$ olduğundan üçüncü parça geçerlidir, $f(5)=\\left\\lfloor \\dfrac{5}{2}\\right\\rfloor=\\lfloor 2{,}5\\rfloor=2$.", "Topla: $-1+1+2=2$."],
      answer: "$2$",
    },
    {
      id: "ozel-fonksiyonlar-ayt-02",
      difficulty: "Orta",
      prompt: "Bir işlemde $\\lfloor -2{,}3\\rfloor+\\lvert\\,\\lfloor 1{,}8\\rfloor-6\\,\\rvert-\\operatorname{sgn}\\!\\left(\\lfloor -0{,}4\\rfloor\\right)$ ifadesi veriliyor. Buna göre bu ifadenin değeri kaçtır?",
      options: ["$3$", "$1$", "$-1$", "$-3$", "$5$"],
      correct: 0,
      solution: ["$\\lfloor -2{,}3\\rfloor$: $-2{,}3$'ten büyük olmayan en büyük tam sayı $-3$'tür.", "$\\lfloor 1{,}8\\rfloor=1$ olduğundan $\\lvert\\,1-6\\,\\rvert=\\lvert -5\\rvert=5$.", "$\\lfloor -0{,}4\\rfloor=-1$ olduğundan $\\operatorname{sgn}(-1)=-1$.", "Yerine koy: $-3+5-(-1)=-3+5+1=3$."],
      answer: "$3$",
    },
    {
      id: "ozel-fonksiyonlar-ayt-03",
      difficulty: "Zor",
      prompt: "$g(x)=\\lvert x-2\\rvert+\\lfloor x\\rfloor\\cdot\\operatorname{sgn}(x-4)$ fonksiyonu tanımlanıyor. Buna göre $g(1)+g(5)$ toplamı kaçtır?",
      options: ["$5$", "$6$", "$7$", "$8$", "$9$"],
      correct: 3,
      solution: ["$g(1)=\\lvert 1-2\\rvert+\\lfloor 1\\rfloor\\cdot\\operatorname{sgn}(1-4)=1+1\\cdot\\operatorname{sgn}(-3)=1+1\\cdot(-1)=0$.", "$g(5)=\\lvert 5-2\\rvert+\\lfloor 5\\rfloor\\cdot\\operatorname{sgn}(5-4)=3+5\\cdot\\operatorname{sgn}(1)=3+5\\cdot 1=8$.", "Topla: $0+8=8$."],
      answer: "$8$",
    },
    {
      id: "ozel-fonksiyonlar-ayt-04",
      difficulty: "Zor",
      prompt: "$\\lvert x-2\\rvert + \\lvert x+1\\rvert = 7$ denkleminin **pozitif** kökü kaçtır?",
      options: ["$3$", "$4$", "$5$", "$6$", "$7$"],
      correct: 1,
      solution: ["Kritik noktalar $x=2$ ve $x=-1$'dir. Üç bölge incelenir.", "**$x\\ge 2$:** $(x-2)+(x+1)=7 \\Rightarrow 2x-1=7 \\Rightarrow x=4$. Bu $x\\ge 2$ ile uyumludur, geçerli kök $x=4$.", "**$x<-1$:** $-(x-2)-(x+1)=7 \\Rightarrow -2x+1=7 \\Rightarrow x=-3$. Bu $x<-1$ ile uyumludur (negatif kök).", "**$-1\\le x<2$:** $(2-x)+(x+1)=3\\ne 7$, bu bölgede çözüm yok.", "Pozitif kök $x=4$'tür."],
      answer: "$4$",
    },
    {
      id: "ozel-fonksiyonlar-ayt-05",
      difficulty: "Orta",
      prompt: "$f(x)=\\left\\lfloor \\dfrac{x}{2}\\right\\rfloor$ olduğuna göre $f(1)+f(2)+f(3)+\\dots+f(7)$ toplamı kaçtır?",
      options: ["$9$", "$10$", "$11$", "$12$", "$13$"],
      correct: 3,
      solution: ["Her terimi hesapla: $f(1)=\\lfloor 0{,}5\\rfloor=0$, $f(2)=\\lfloor 1\\rfloor=1$, $f(3)=\\lfloor 1{,}5\\rfloor=1$.", "$f(4)=\\lfloor 2\\rfloor=2$, $f(5)=\\lfloor 2{,}5\\rfloor=2$, $f(6)=\\lfloor 3\\rfloor=3$, $f(7)=\\lfloor 3{,}5\\rfloor=3$.", "Topla: $0+1+1+2+2+3+3=12$."],
      answer: "$12$",
    },
    {
      id: "ozel-fonksiyonlar-ayt-06",
      difficulty: "Zor",
      prompt: "$f(x)=\\begin{cases}\\operatorname{sgn}(x-3)\\cdot x^2,& x\\le 1\\\\ \\lfloor x\\rfloor + \\lvert x-5\\rvert,& x>1\\end{cases}$ biçiminde tanımlanıyor. Buna göre $f(-2)+f(4)$ toplamı kaçtır?",
      options: ["$-1$", "$0$", "$1$", "$2$", "$3$"],
      correct: 2,
      solution: ["$f(-2)$: $-2\\le 1$ olduğundan birinci parça. $\\operatorname{sgn}(-2-3)=\\operatorname{sgn}(-5)=-1$. O hâlde $f(-2)=-1\\cdot(-2)^2=-1\\cdot 4=-4$.", "$f(4)$: $4>1$ olduğundan ikinci parça. $\\lfloor 4\\rfloor=4$ ve $\\lvert 4-5\\rvert=\\lvert -1\\rvert=1$. O hâlde $f(4)=4+1=5$.", "Topla: $-4+5=1$."],
      answer: "$1$",
    },
  ],
};

export default quiz;
