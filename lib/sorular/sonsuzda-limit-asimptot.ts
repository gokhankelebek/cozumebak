import type { TopicQuiz } from "./types";

// sonsuzda-limit-asimptot — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "sonsuzda-limit-asimptot",
  questions: [
    {
      id: "sonsuzda-limit-asimptot-01",
      difficulty: "Orta",
      prompt: "$f(x)=\\dfrac{(a-2)x^{2}+3x}{x^{2}-5}$ fonksiyonunun yatay asimptotu $y=4$ doğrusudur. Buna göre $2a-3$ kaçtır?",
      options: ["$5$", "$7$", "$9$", "$11$", "$13$"],
      correct: 2,
      solution: ["Pay ve payda dereceleri eşit ($n=m=2$) olduğundan yatay asimptot baş katsayıların oranıdır.", "Baş katsayıların oranı: $\\dfrac{a-2}{1}=a-2$.", "Yatay asimptot $y=4$ olduğundan $a-2=4\\Rightarrow a=6$.", "İstenen: $2a-3=2\\cdot 6-3=9$."],
      answer: "$9$",
    },
    {
      id: "sonsuzda-limit-asimptot-02",
      difficulty: "Orta",
      prompt: "$f(x)=\\dfrac{x-3}{x^{2}-x-6}$ fonksiyonu veriliyor. Buna göre, fonksiyonun düşey asimptotunun apsisi ile yatay asimptotunun ordinatının toplamı kaçtır?",
      options: ["$-2$", "$-1$", "$0$", "$1$", "$3$"],
      correct: 0,
      solution: ["Paydayı çarpanlara ayır: $x^{2}-x-6=(x-3)(x+2)$.", "Pay ve paydadaki ortak $(x-3)$ çarpanını sadeleştir: $f(x)=\\dfrac{1}{x+2}$ (burada $x\\neq 3$). Dolayısıyla $x=3$ asimptot değil, deliktir.", "**Düşey asimptot:** Sadeleşmiş paydayı sıfır yapan $x=-2$ tek düşey asimptottur; apsisi $-2$.", "**Yatay asimptot:** Başlangıçta pay derecesi $n=1$, payda derecesi $m=2$, yani $n<m$ olduğundan yatay asimptot $y=0$; ordinatı $0$.", "İstenen toplam: $-2+0=-2$."],
      answer: "$-2$",
    },
    {
      id: "sonsuzda-limit-asimptot-03",
      difficulty: "Zor",
      prompt: "$L=\\lim\\limits_{x\\to\\infty}\\left(\\sqrt{4x^{2}+3x}-2x\\right)$ ve $M=\\lim\\limits_{x\\to\\infty}\\dfrac{6x^{2}-1}{2x^{2}+x}$ olarak veriliyor. Buna göre $\\dfrac{M}{L}$ kaçtır?",
      options: ["$\\dfrac{3}{4}$", "$2$", "$3$", "$4$", "$6$"],
      correct: 3,
      solution: ["$L$ için $\\infty-\\infty$ belirsizliği var; eşleniği $\\sqrt{4x^{2}+3x}+2x$ ile çarpıp böl.", "$L=\\lim\\limits_{x\\to\\infty}\\dfrac{(4x^{2}+3x)-4x^{2}}{\\sqrt{4x^{2}+3x}+2x}=\\lim\\limits_{x\\to\\infty}\\dfrac{3x}{\\sqrt{4x^{2}+3x}+2x}$.", "Pay ve paydayı $x$'e böl ($x>0$): $L=\\lim\\limits_{x\\to\\infty}\\dfrac{3}{\\sqrt{4+\\frac{3}{x}}+2}=\\dfrac{3}{\\sqrt{4}+2}=\\dfrac{3}{4}$.", "$M$ için dereceler eşit ($n=m=2$); baş katsayıların oranı $M=\\dfrac{6}{2}=3$.", "İstenen: $\\dfrac{M}{L}=\\dfrac{3}{\\frac{3}{4}}=3\\cdot\\dfrac{4}{3}=4$."],
      answer: "$4$",
    },
    {
      id: "sonsuzda-limit-asimptot-04",
      difficulty: "Zor",
      prompt: "$f(x)=\\dfrac{x^{2}+ax-6}{x^{2}-9}$ fonksiyonunun $x=3$ noktasında düşey asimptotu **yoktur** (orada delik vardır). Buna göre, fonksiyonun var olan tek düşey asimptotunun apsisi ile yatay asimptotunun ordinatının toplamı kaçtır?",
      options: ["$-3$", "$-2$", "$0$", "$1$", "$2$"],
      correct: 1,
      solution: ["Payda $x^{2}-9=(x-3)(x+3)$; düşey asimptot adayları $x=3$ ve $x=-3$.", "$x=3$'te delik olması için pay da $x=3$'te sıfırlanmalı: $9+3a-6=0\\Rightarrow 3a+3=0\\Rightarrow a=-1$.", "$a=-1$ için pay $x^{2}-x-6=(x-3)(x+2)$. Sadeleştir: $f(x)=\\dfrac{(x-3)(x+2)}{(x-3)(x+3)}=\\dfrac{x+2}{x+3}$ (burada $x\\ne 3$).", "**Düşey asimptot:** Sadeleşmiş paydayı sıfır yapan $x=-3$ (payı sıfır yapmaz); apsisi $-3$.", "**Yatay asimptot:** Başlangıçta dereceler eşit ($2=2$), baş katsayı oranı $\\dfrac{1}{1}=1$, yani $y=1$; ordinatı $1$.", "İstenen toplam: $-3+1=-2$."],
      answer: "$-2$",
    },
    {
      id: "sonsuzda-limit-asimptot-05",
      difficulty: "Zor",
      prompt: "$L=\\lim\\limits_{x\\to-\\infty}\\dfrac{\\sqrt{9x^{2}+1}}{2x-1}$ limiti veriliyor. Buna göre $L$ kaçtır?",
      options: ["$-3$", "$-\\dfrac{3}{2}$", "$0$", "$\\dfrac{3}{2}$", "$3$"],
      correct: 1,
      solution: ["Kök içini düzenle: $\\sqrt{9x^{2}+1}=\\sqrt{x^{2}\\left(9+\\dfrac{1}{x^{2}}\\right)}=|x|\\sqrt{9+\\dfrac{1}{x^{2}}}$.", "$x\\to-\\infty$ için $x<0$, dolayısıyla $|x|=-x$.", "İfade: $\\dfrac{-x\\sqrt{9+\\frac{1}{x^{2}}}}{2x-1}$. Pay ve paydayı $x$'e böl: $\\dfrac{-\\sqrt{9+\\frac{1}{x^{2}}}}{2-\\frac{1}{x}}$.", "$x\\to-\\infty$ iken $\\dfrac{1}{x^{2}}\\to 0$ ve $\\dfrac{1}{x}\\to 0$: $L=\\dfrac{-\\sqrt{9}}{2}=\\dfrac{-3}{2}=-\\dfrac{3}{2}$."],
      answer: "$-\\dfrac{3}{2}$",
    },
    {
      id: "sonsuzda-limit-asimptot-06",
      difficulty: "Zor",
      prompt: "$A=\\lim\\limits_{x\\to\\infty}\\dfrac{4^{x}+3^{x+1}}{2\\cdot 4^{x}-1}$ ve $B=\\lim\\limits_{x\\to-\\infty}\\dfrac{2^{x}+5}{2^{x}-3}$ olarak veriliyor. Buna göre $A+B$ kaçtır?",
      options: ["$-\\dfrac{7}{6}$", "$-\\dfrac{5}{6}$", "$\\dfrac{1}{2}$", "$\\dfrac{7}{6}$", "$2$"],
      correct: 0,
      solution: ["$A$: pay ve paydayı $4^{x}$'e böl. Pay $1+3\\cdot\\big(\\frac{3}{4}\\big)^{x}$, payda $2-\\dfrac{1}{4^{x}}$.", "$x\\to\\infty$ iken $\\big(\\frac{3}{4}\\big)^{x}\\to 0$ ve $\\dfrac{1}{4^{x}}\\to 0$: $A=\\dfrac{1+0}{2-0}=\\dfrac{1}{2}$.", "$B$: $x\\to-\\infty$ iken $2^{x}\\to 0$. Doğrudan yerine yaz: $B=\\dfrac{0+5}{0-3}=-\\dfrac{5}{3}$.", "İstenen: $A+B=\\dfrac{1}{2}-\\dfrac{5}{3}=\\dfrac{3-10}{6}=-\\dfrac{7}{6}$.", "Dikkat: $A$'da yön $x\\to+\\infty$ olduğundan $\\big(\\frac{3}{4}\\big)^{x}\\to 0$ oldu; yön $-\\infty$ olsaydı bu terim $\\infty$'a giderdi. Üstel limitlerde yönü daima kontrol et."],
      answer: "$-\\dfrac{7}{6}$",
    },
  ],
};

export default quiz;
