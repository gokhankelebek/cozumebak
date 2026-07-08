import type { TopicQuiz } from "./types";

// turev-alma-kurallari-12 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "turev-alma-kurallari-12",
  questions: [
    {
      id: "turev-alma-kurallari-12-01",
      difficulty: "Kolay",
      prompt: "$f(x)=2x^4-3x^2+5x-7$ fonksiyonunun türevi $f'(x)$ aşağıdakilerden hangisidir?",
      options: ["$8x^4-6x^2+5$", "$8x^3-6x^2+5x$", "$8x^3-6x+5$", "$8x^3-6x+5x-7$", "$8x^3-3x+5$"],
      correct: 2,
      solution: ["Toplam-fark ve üs kuralıyla terim terim türev alınır.", "$(2x^4)'=2\\cdot 4x^3=8x^3$.", "$(3x^2)'=3\\cdot 2x=6x$, önündeki işaretle $-6x$.", "$(5x)'=5$; sabit terim $(-7)'=0$.", "Birleştir: $f'(x)=8x^3-6x+5$."],
      answer: "$f'(x)=8x^3-6x+5$ (C).",
    },
    {
      id: "turev-alma-kurallari-12-02",
      difficulty: "Kolay",
      prompt: "$f(x)=x^5$ fonksiyonu için $f'(-1)$ değeri kaçtır?",
      options: ["$5$", "$-5$", "$-1$", "$1$", "$25$"],
      correct: 0,
      solution: ["Üs kuralı: $f'(x)=5x^{5-1}=5x^4$.", "$x=-1$ yerine koy: $f'(-1)=5\\cdot(-1)^4$.", "$(-1)^4=1$ olduğundan $f'(-1)=5\\cdot 1=5$."],
      answer: "$f'(-1)=5$ (A).",
    },
    {
      id: "turev-alma-kurallari-12-03",
      difficulty: "Orta",
      prompt: "$y=(x^2-2)(2x+3)$ fonksiyonunun türevi aşağıdakilerden hangisidir?",
      options: ["$4x$", "$6x^2+3$", "$4x^2-4$", "$2x^2+6x-4$", "$6x^2+6x-4$"],
      correct: 4,
      solution: ["Çarpım kuralı: $y'=f'g+fg'$.", "$f=x^2-2\\Rightarrow f'=2x$; $\\;g=2x+3\\Rightarrow g'=2$.", "$y'=2x(2x+3)+(x^2-2)\\cdot 2$.", "Aç: $4x^2+6x+2x^2-4$.", "Birleştir: $y'=6x^2+6x-4$."],
      answer: "$y'=6x^2+6x-4$ (E).",
    },
    {
      id: "turev-alma-kurallari-12-04",
      difficulty: "Orta",
      prompt: "$y=\\dfrac{3x-1}{x+2}$ fonksiyonu için $y'(1)$ değeri kaçtır?",
      options: ["$3$", "$\\dfrac{7}{9}$", "$-\\dfrac{5}{9}$", "$\\dfrac{5}{9}$", "$\\dfrac{7}{3}$"],
      correct: 1,
      solution: ["Bölüm kuralı: $y'=\\dfrac{f'g-fg'}{g^2}$.", "$f=3x-1\\Rightarrow f'=3$; $\\;g=x+2\\Rightarrow g'=1$.", "Pay: $3(x+2)-(3x-1)\\cdot 1=3x+6-3x+1=7$.", "$y'(x)=\\dfrac{7}{(x+2)^2}$.", "$x=1$: $y'(1)=\\dfrac{7}{(1+2)^2}=\\dfrac{7}{9}$."],
      answer: "$y'(1)=\\dfrac{7}{9}$ (B).",
    },
    {
      id: "turev-alma-kurallari-12-05",
      difficulty: "Orta",
      prompt: "$f(x)=\\sqrt{2x+7}$ fonksiyonu için $f'(1)$ değeri kaçtır?",
      options: ["$\\dfrac{1}{6}$", "$\\dfrac{2}{3}$", "$3$", "$\\dfrac{1}{3}$", "$\\dfrac{1}{9}$"],
      correct: 3,
      solution: ["Zincir kuralı: dış $\\sqrt{u}$ türevi $\\dfrac{1}{2\\sqrt{u}}$, iç $u=2x+7$, $u'=2$.", "$f'(x)=\\dfrac{1}{2\\sqrt{2x+7}}\\cdot 2=\\dfrac{1}{\\sqrt{2x+7}}$.", "$x=1$: $2x+7=9$, $\\sqrt{9}=3$.", "$f'(1)=\\dfrac{1}{3}$."],
      answer: "$f'(1)=\\dfrac{1}{3}$ (D).",
    },
    {
      id: "turev-alma-kurallari-12-06",
      difficulty: "Zor",
      prompt: "Bir cismin $t$ saniyedeki konumu $s(t)=t^3-6t^2+9t$ metre ile veriliyor. Cismin $t=2$ saniyedeki anlık hızı ($v=s'(t)$) kaç m/s'dir?",
      options: ["$-3$", "$2$", "$3$", "$-1$", "$21$"],
      correct: 0,
      solution: ["Anlık hız konumun türevidir: $v(t)=s'(t)$.", "Terim terim türev: $s'(t)=3t^2-12t+9$.", "$t=2$ yerine koy: $s'(2)=3\\cdot 4-12\\cdot 2+9$.", "$=12-24+9=-3$.", "Sonuç negatif olduğundan cisim ters yönde ilerlemektedir; hız $-3$ m/s."],
      answer: "$v(2)=-3$ m/s (A).",
    },
  ],
};

export default quiz;
