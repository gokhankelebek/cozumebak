import type { TopicQuiz } from "./types";

// Limit Kavramı (AYT). HARVESTED from the lesson's existing static
// "Sınav Tarzı Sorular" section — author-written ÖSYM-style questions,
// now interactive. Answers preserved verbatim from the source solutions.
const quiz: TopicQuiz = {
  slug: "limit-kavrami",
  questions: [
    {
      id: "limit-kavrami-01",
      difficulty: "Orta",
      prompt: String.raw`$f(x)=\begin{cases}ax+5,& x<3\\ x^{2}+b,& x\ge 3\end{cases}$ fonksiyonunun $x=3$ noktasında limiti vardır ve bu limit $11$'e eşittir. Buna göre $a^{2}+b^{2}$ kaçtır?`,
      options: ["$5$", "$8$", "$10$", "$13$", "$20$"],
      correct: 1,
      solution: [
        String.raw`Sağdan limit ($x\ge 3$): $\lim\limits_{x\to 3^{+}}(x^{2}+b)=9+b=11 \Rightarrow b=2$.`,
        String.raw`Soldan limit ($x<3$): $\lim\limits_{x\to 3^{-}}(ax+5)=3a+5=11 \Rightarrow a=2$.`,
        String.raw`$a^{2}+b^{2}=2^{2}+2^{2}=8$.`,
      ],
      answer: String.raw`$a^{2}+b^{2}=8$`,
    },
    {
      id: "limit-kavrami-02",
      difficulty: "Zor",
      prompt: String.raw`$a$ bir gerçek sayı olmak üzere $\lim\limits_{x\to 2}\dfrac{x^{2}+ax-6}{x-2}$ limiti vardır (sonludur) ve bu limit $L$'ye eşittir. Buna göre $a+L$ kaçtır?`,
      options: ["$4$", "$5$", "$6$", "$7$", "$8$"],
      correct: 2,
      solution: [
        String.raw`Payda $x=2$'de sıfırlanır; limitin sonlu olması için pay da sıfırlanmalı ($\frac{0}{0}$).`,
        String.raw`Pay sıfır: $4+2a-6=0 \Rightarrow a=1$.`,
        String.raw`$a=1$ için pay $x^{2}+x-6=(x-2)(x+3)$; sadeleştir: $x+3$.`,
        String.raw`$L=\lim\limits_{x\to 2}(x+3)=5$, böylece $a+L=1+5=6$.`,
      ],
      answer: String.raw`$a+L=6$`,
    },
    {
      id: "limit-kavrami-03",
      difficulty: "Zor",
      prompt: String.raw`$L=\lim\limits_{x\to 0}\dfrac{\sqrt{x+9}-3}{x}$ ve $S=\lim\limits_{x\to 0^{+}}\dfrac{|x|}{x}$ olarak veriliyor. Buna göre $6L+S$ kaçtır?`,
      options: ["$0$", "$1$", "$2$", "$3$", "$4$"],
      correct: 2,
      solution: [
        String.raw`$L$ için eşlenikle genişlet: $\dfrac{(x+9)-9}{x(\sqrt{x+9}+3)}=\dfrac{1}{\sqrt{x+9}+3}$.`,
        String.raw`$L=\dfrac{1}{\sqrt{9}+3}=\dfrac{1}{6}$.`,
        String.raw`Sağdan ($x>0$) $|x|=x$ olduğundan $S=\dfrac{x}{x}=1$.`,
        String.raw`$6L+S=6\cdot\dfrac{1}{6}+1=2$.`,
      ],
      answer: String.raw`$6L+S=2$`,
    },
    {
      id: "limit-kavrami-04",
      difficulty: "Orta",
      prompt: String.raw`$f(x)=\begin{cases}\dfrac{x^{2}-9}{x-3},& x<3\\ 2x+a,& x\ge 3\end{cases}$ fonksiyonu için $\lim\limits_{x\to 3} f(x)$ vardır. Buna göre $a$ kaçtır?`,
      options: ["$-6$", "$-4$", "$0$", "$4$", "$6$"],
      correct: 2,
      solution: [
        String.raw`Soldan ($x<3$): $\dfrac{x^{2}-9}{x-3}=x+3$, $\lim\limits_{x\to 3^{-}}(x+3)=6$.`,
        String.raw`Sağdan ($x\ge 3$): $\lim\limits_{x\to 3^{+}}(2x+a)=6+a$.`,
        String.raw`Limit varsa soldan $=$ sağdan: $6=6+a \Rightarrow a=0$.`,
      ],
      answer: String.raw`$a=0$`,
    },
    {
      id: "limit-kavrami-05",
      difficulty: "Orta",
      prompt: String.raw`Bir $f$ fonksiyonu için $\lim\limits_{x\to 2} f(x)=4$ ve $\lim\limits_{x\to 2} g(x)=-1$ veriliyor ($g$, $x=2$ civarında sıfırdan farklı). Buna göre $\lim\limits_{x\to 2}\dfrac{f(x)\cdot g(x)+2}{f(x)-g(x)}$ kaçtır?`,
      options: [
        String.raw`$-\dfrac{2}{5}$`,
        String.raw`$-\dfrac{1}{5}$`,
        "$0$",
        String.raw`$\dfrac{2}{5}$`,
        String.raw`$\dfrac{1}{2}$`,
      ],
      correct: 0,
      solution: [
        String.raw`Pay: $(4)\cdot(-1)+2=-2$.`,
        String.raw`Payda: $4-(-1)=5 \ne 0$.`,
        String.raw`Bölümün limiti: $\dfrac{-2}{5}=-\dfrac{2}{5}$.`,
      ],
      answer: String.raw`$-\dfrac{2}{5}$`,
    },
    {
      id: "limit-kavrami-06",
      difficulty: "Orta",
      prompt: String.raw`$f(x)=\begin{cases}x+3,& x\le 1\\ x^{2}+1,& x>1\end{cases}$ fonksiyonu veriliyor. Buna göre $\lim\limits_{x\to 1^{-}} f(x)+\lim\limits_{x\to 1^{+}} f(x)+f(1)$ toplamı kaçtır?`,
      options: ["$8$", "$9$", "$10$", "$11$", "$12$"],
      correct: 2,
      solution: [
        String.raw`Soldan ($x\le 1$): $\lim\limits_{x\to 1^{-}}(x+3)=4$.`,
        String.raw`Sağdan ($x>1$): $\lim\limits_{x\to 1^{+}}(x^{2}+1)=2$.`,
        String.raw`Fonksiyon değeri: $f(1)=1+3=4$.`,
        String.raw`Toplam: $4+2+4=10$.`,
      ],
      answer: String.raw`$4+2+4=10$`,
    },
  ],
};

export default quiz;
