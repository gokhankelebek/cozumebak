import type { TopicQuiz } from "./types";

// belirsiz-integral — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "belirsiz-integral",
  questions: [
    {
      id: "belirsiz-integral-01",
      difficulty: "Kolay",
      prompt: "$\\int \\big(9x^{2}-4x+3\\big)\\,dx$ integralinin sonucu aşağıdakilerden hangisidir?",
      options: ["$3x^{3}-2x^{2}+3x+c$", "$3x^{3}-4x^{2}+3x+c$", "$9x^{3}-2x^{2}+3x+c$", "$18x-4+c$", "$3x^{3}-2x^{2}+3+c$"],
      correct: 0,
      solution: ["Doğrusallık gereği terim terim integral alınır ve sabitler dışarı çıkarılır.", "$9\\int x^{2}\\,dx=9\\cdot\\dfrac{x^{3}}{3}=3x^{3}$.", "$-4\\int x\\,dx=-4\\cdot\\dfrac{x^{2}}{2}=-2x^{2}$.", "$\\int 3\\,dx=3x$.", "Birleştirip tek sabit eklenir: $3x^{3}-2x^{2}+3x+c$."],
      answer: "$3x^{3}-2x^{2}+3x+c$ (A).",
    },
    {
      id: "belirsiz-integral-02",
      difficulty: "Orta",
      prompt: "$\\int \\dfrac{2}{x^{3}}\\,dx$ integralinin sonucu aşağıdakilerden hangisidir?",
      options: ["$-\\dfrac{1}{x^{4}}+c$", "$\\dfrac{2}{x^{2}}+c$", "$-\\dfrac{1}{x^{2}}+c$", "$-\\dfrac{2}{x^{2}}+c$", "$\\dfrac{1}{x^{2}}+c$"],
      correct: 2,
      solution: ["İfadeyi üslü biçimde yaz: $\\dfrac{2}{x^{3}}=2x^{-3}$.", "Kuvvet kuralı: $n=-3$ için $n+1=-2$, yani $\\int x^{-3}\\,dx=\\dfrac{x^{-2}}{-2}$.", "Sabitle çarp: $2\\cdot\\dfrac{x^{-2}}{-2}=-x^{-2}=-\\dfrac{1}{x^{2}}$.", "Sonuç: $-\\dfrac{1}{x^{2}}+c$."],
      answer: "$-\\dfrac{1}{x^{2}}+c$ (C).",
    },
    {
      id: "belirsiz-integral-03",
      difficulty: "Orta",
      prompt: "$\\int 3\\sqrt{x}\\,dx$ integralinin sonucu aşağıdakilerden hangisidir?",
      options: ["$\\dfrac{3}{2}x^{1/2}+c$", "$2x^{3/2}+c$", "$\\dfrac{9}{2}x^{3/2}+c$", "$\\dfrac{2}{3}x^{3/2}+c$", "$3x^{3/2}+c$"],
      correct: 1,
      solution: ["Sabiti dışarı al, kökü üslü yaz: $3\\int x^{1/2}\\,dx$.", "Kuvvet kuralı: $\\int x^{1/2}\\,dx=\\dfrac{x^{3/2}}{3/2}=\\dfrac{2}{3}x^{3/2}$.", "Kesre bölmek tersiyle çarpmaktır; sonra sabitle çarp: $3\\cdot\\dfrac{2}{3}x^{3/2}=2x^{3/2}$.", "Sonuç: $2x^{3/2}+c$."],
      answer: "$2x^{3/2}+c$ (B).",
    },
    {
      id: "belirsiz-integral-04",
      difficulty: "Orta",
      prompt: "$\\int \\dfrac{x^{3}+2x}{x}\\,dx$ integralinin sonucu aşağıdakilerden hangisidir?",
      options: ["$\\dfrac{x^{4}+x^{2}}{x^{2}/2}+c$", "$\\dfrac{x^{3}}{3}+2x+c$", "$\\dfrac{x^{4}}{4}+x^{2}+c$", "$\\dfrac{x^{3}}{3}+2+c$", "$3x^{2}+2+c$"],
      correct: 1,
      solution: ["Bölümün hazır integral kuralı yoktur; önce sadeleştir.", "$\\dfrac{x^{3}+2x}{x}=\\dfrac{x^{3}}{x}+\\dfrac{2x}{x}=x^{2}+2$.", "Terim terim integralle: $\\int x^{2}\\,dx+\\int 2\\,dx=\\dfrac{x^{3}}{3}+2x$.", "Sonuç: $\\dfrac{x^{3}}{3}+2x+c$."],
      answer: "$\\dfrac{x^{3}}{3}+2x+c$ (B).",
    },
    {
      id: "belirsiz-integral-05",
      difficulty: "Orta",
      prompt: "$f'(x)=6x^{2}-2$ ve $f(1)=5$ olduğuna göre $f(2)$ değeri kaçtır?",
      options: ["$12$", "$15$", "$21$", "$17$", "$19$"],
      correct: 3,
      solution: ["Önce genel çözümü bul: $f(x)=\\int (6x^{2}-2)\\,dx=6\\cdot\\dfrac{x^{3}}{3}-2x+c=2x^{3}-2x+c$.", "Başlangıç koşulunu uygula: $f(1)=2\\cdot 1-2\\cdot 1+c=c$. Bu $5$'e eşit, yani $c=5$.", "Böylece $f(x)=2x^{3}-2x+5$.", "İstenen değer: $f(2)=2\\cdot 8-2\\cdot 2+5=16-4+5=17$."],
      answer: "$f(2)=17$ (D).",
    },
    {
      id: "belirsiz-integral-06",
      difficulty: "Zor",
      prompt: "Doğrusal bir yolda hareket eden bir cismin hızı $v(t)=4t+3$ (m/s) olup $t=0$ anındaki konumu $x(0)=1$ m'dir. Hız konumun türevi olduğuna göre ($x'(t)=v(t)$), cismin $t=2$ s anındaki konumu kaç metredir?",
      options: ["$11$", "$14$", "$8$", "$22$", "$15$"],
      correct: 4,
      solution: ["Konum, hızın integralidir: $x(t)=\\int (4t+3)\\,dt=4\\cdot\\dfrac{t^{2}}{2}+3t+c=2t^{2}+3t+c$.", "Başlangıç koşulu $x(0)=1$: $2\\cdot 0+3\\cdot 0+c=c=1$.", "Böylece $x(t)=2t^{2}+3t+1$.", "$t=2$ için: $x(2)=2\\cdot 4+3\\cdot 2+1=8+6+1=15$ m."],
      answer: "$x(2)=15$ m (E).",
    },
  ],
};

export default quiz;
