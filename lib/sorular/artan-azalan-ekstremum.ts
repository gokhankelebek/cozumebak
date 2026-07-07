import type { TopicQuiz } from "./types";

// artan-azalan-ekstremum — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "artan-azalan-ekstremum",
  questions: [
    {
      id: "artan-azalan-ekstremum-01",
      difficulty: "Orta",
      prompt: "$f(x)=x^{3}+(m-1)x^{2}+(m+5)x+2$ fonksiyonu tüm gerçek sayılarda artandır. Buna göre $m$'nin alabileceği en büyük tam sayı değeri kaçtır?",
      options: ["$5$", "$6$", "$7$", "$8$", "$9$"],
      correct: 2,
      solution: ["Türevi al: $f'(x)=3x^{2}+2(m-1)x+(m+5)$.", "Fonksiyonun her yerde artan olması için her $x$ için $f'(x)\\ge 0$ gerekir. Baş katsayı $3 > 0$ olduğundan parabol yukarı açılır; koşul $\\Delta\\le 0$ olmasıdır.", "Diskriminant: $\\Delta=\\bigl(2(m-1)\\bigr)^{2}-4\\cdot 3\\cdot (m+5)=4(m-1)^{2}-12(m+5)$.", "Düzenle: $4(m^{2}-2m+1)-12m-60=4m^{2}-20m-56$.", "$\\Delta\\le 0 \\Rightarrow 4m^{2}-20m-56\\le 0 \\Rightarrow m^{2}-5m-14\\le 0 \\Rightarrow (m-7)(m+2)\\le 0$.", "Çözüm aralığı $-2\\le m\\le 7$ olduğundan en büyük tam sayı değeri $7$'dir."],
      answer: "$7$",
    },
    {
      id: "artan-azalan-ekstremum-02",
      difficulty: "Orta",
      prompt: "$f(x)=x^{3}+ax^{2}+bx$ fonksiyonunun yerel maksimum ve yerel minimum noktalarının apsisleri sırasıyla $1$ ve $3$'tür. Buna göre fonksiyonun yerel maksimum değeri ile yerel minimum değerinin toplamı kaçtır?",
      options: ["$-4$", "$-2$", "$0$", "$2$", "$4$"],
      correct: 4,
      solution: ["Türevi al: $f'(x)=3x^{2}+2ax+b$. Apsisler $1$ ve $3$ kritik noktalar olduğundan bunlar $f'(x)=0$'ın kökleridir.", "Kökler toplamı: $1+3=-\\dfrac{2a}{3} \\Rightarrow 4=-\\dfrac{2a}{3} \\Rightarrow a=-6$.", "Kökler çarpımı: $1\\cdot 3=\\dfrac{b}{3} \\Rightarrow b=9$. Yani $f(x)=x^{3}-6x^{2}+9x$.", "Yerel maksimum değeri ($x=1$): $f(1)=1-6+9=4$.", "Yerel minimum değeri ($x=3$): $f(3)=27-54+27=0$.", "Toplam: $4+0=4$."],
      answer: "$4$",
    },
    {
      id: "artan-azalan-ekstremum-03",
      difficulty: "Orta",
      prompt: "$f(x)=x^{3}-3x^{2}+k$ fonksiyonunun yerel minimum değeri $-3$'tür. Buna göre fonksiyonun yerel maksimum değeri kaçtır?",
      options: ["$0$", "$1$", "$2$", "$3$", "$4$"],
      correct: 1,
      solution: ["Türevi al: $f'(x)=3x^{2}-6x=3x(x-2)$. Kritik noktalar $x=0$ ve $x=2$.", "İşaret tablosu: $(-\\infty,0)$'da $+$, $(0,2)$'de $-$, $(2,\\infty)$'da $+$. Buna göre $x=0$ yerel maksimum, $x=2$ yerel minimumdur.", "Yerel minimum değeri: $f(2)=8-12+k=k-4$.", "$k-4=-3 \\Rightarrow k=1$.", "Yerel maksimum değeri ($x=0$): $f(0)=k=1$."],
      answer: "$1$",
    },
    {
      id: "artan-azalan-ekstremum-04",
      difficulty: "Zor",
      prompt: "$f(x)=\\dfrac{x^{2}+3}{x-1}$ fonksiyonu $x>1$ aralığında yalnızca bir yerel ekstremuma sahiptir. Buna göre bu yerel ekstremum değeri kaçtır?",
      options: ["$4$", "$5$", "$6$", "$8$", "$9$"],
      correct: 2,
      solution: ["Bölüm kuralı: $f'(x)=\\dfrac{2x(x-1)-(x^{2}+3)\\cdot 1}{(x-1)^{2}}=\\dfrac{2x^{2}-2x-x^{2}-3}{(x-1)^{2}}=\\dfrac{x^{2}-2x-3}{(x-1)^{2}}$.", "Pay çarpanla: $x^{2}-2x-3=(x-3)(x+1)$. Kritik noktalar $x=3$ ve $x=-1$ (payda $x=1$ tanımsız).", "$x>1$ aralığındaki kritik nokta $x=3$'tür. Çevresinde işaret: $1<x<3$ için pay $<0$, $x>3$ için pay $>0$; $-\\to+$, yani yerel minimum.", "Değer: $f(3)=\\dfrac{9+3}{3-1}=\\dfrac{12}{2}=6$."],
      answer: "$6$",
    },
    {
      id: "artan-azalan-ekstremum-05",
      difficulty: "Orta",
      prompt: "$f(x)=2x^{3}-3x^{2}-12x+m$ fonksiyonunun yerel maksimum değeri $20$'dir. Buna göre $m$ kaçtır?",
      options: ["$5$", "$7$", "$10$", "$13$", "$15$"],
      correct: 3,
      solution: ["Türev: $f'(x)=6x^{2}-6x-12=6(x^{2}-x-2)=6(x-2)(x+1)$. Kritik noktalar $x=-1$ ve $x=2$.", "İşaret tablosu: $(-\\infty,-1)$'de $+$, $(-1,2)$'de $-$, $(2,\\infty)$'da $+$. Buna göre $x=-1$ yerel maksimum, $x=2$ yerel minimumdur.", "Yerel maksimum değeri: $f(-1)=2(-1)-3(1)-12(-1)+m=-2-3+12+m=7+m$.", "Koşul: $7+m=20\\Rightarrow m=13$."],
      answer: "$13$",
    },
    {
      id: "artan-azalan-ekstremum-06",
      difficulty: "Orta",
      prompt: "$f(x)=x^{3}-3x^{2}-9x+1$ fonksiyonu $[-2,2]$ kapalı aralığında tanımlıdır. Buna göre bu aralıktaki **mutlak maksimum** değeri kaçtır?",
      options: ["$1$", "$4$", "$6$", "$8$", "$11$"],
      correct: 2,
      solution: ["Türev: $f'(x)=3x^{2}-6x-9=3(x-3)(x+1)$. Kritik noktalar $x=3$ ve $x=-1$.", "Aralık $[-2,2]$ içindeki kritik nokta yalnız $x=-1$ ($x=3$ aralık dışı).", "Uç noktalar ve kritik noktada değer:\n   - $f(-2)=-8-12+18+1=-1$\n   - $f(-1)=-1-3+9+1=6$\n   - $f(2)=8-12-18+1=-21$", "En büyük değer $x=-1$'de: $6$."],
      answer: "$6$",
    },
  ],
};

export default quiz;
