import type { TopicQuiz } from "./types";

// logaritma-fonksiyonu — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "logaritma-fonksiyonu",
  questions: [
    {
      id: "logaritma-fonksiyonu-01",
      difficulty: "Kolay",
      prompt: "$\\log_2 32-\\log_3 \\dfrac{1}{27}$ ifadesinin değeri kaçtır?",
      options: ["$2$", "$5$", "$8$", "$-8$", "$15$"],
      correct: 2,
      solution: ["$32=2^{5}$ olduğundan $\\log_2 32=5$.", "$\\dfrac{1}{27}=3^{-3}$ olduğundan $\\log_3 3^{-3}=-3$.", "İfadenin değeri: $5-(-3)=5+3=8$."],
      answer: "$8$",
    },
    {
      id: "logaritma-fonksiyonu-02",
      difficulty: "Kolay",
      prompt: "$f(x)=\\log_5(7-2x)$ fonksiyonunun tanım kümesi aşağıdakilerden hangisidir?",
      options: ["$\\left(-\\infty,\\ \\dfrac{7}{2}\\right)$", "$\\left(\\dfrac{7}{2},\\ \\infty\\right)$", "$\\left(-\\infty,\\ 7\\right)$", "$\\left(\\dfrac{2}{7},\\ \\infty\\right)$", "$\\left(-\\dfrac{7}{2},\\ \\infty\\right)$"],
      correct: 0,
      solution: ["Logaritmanın argümanı kesin pozitif olmalıdır: $7-2x>0$.", "$-2x>-7$ eşitsizliğinde iki tarafı $-2$'ye bölerken yön değişir: $x<\\dfrac{7}{2}$.", "Tanım kümesi: $\\left(-\\infty,\\ \\dfrac{7}{2}\\right)$."],
      answer: "$\\left(-\\infty,\\ \\dfrac{7}{2}\\right)$",
    },
    {
      id: "logaritma-fonksiyonu-03",
      difficulty: "Orta",
      prompt: "$\\log 4=a$ ise $\\log 40$ ifadesinin $a$ cinsinden değeri aşağıdakilerden hangisidir? (Taban $10$.)",
      options: ["$4a$", "$10a$", "$a+1$", "$4a+1$", "$a-1$"],
      correct: 2,
      solution: ["$40=4\\cdot 10$ biçiminde yazılır.", "Çarpım kuralı: $\\log 40=\\log(4\\cdot 10)=\\log 4+\\log 10$.", "$\\log 4=a$ ve $\\log 10=1$ olduğundan $\\log 40=a+1$."],
      answer: "$a+1$",
    },
    {
      id: "logaritma-fonksiyonu-04",
      difficulty: "Orta",
      prompt: "$\\log_{27} 81$ ifadesinin değeri kaçtır?",
      options: ["$3$", "$\\dfrac{3}{4}$", "$54$", "$\\dfrac{4}{3}$", "$\\dfrac{1}{3}$"],
      correct: 3,
      solution: ["$27=3^{3}$ ve $81=3^{4}$ olduğundan her şeyi $3$ tabanına çeviririz.", "Taban değiştirme: $\\log_{27} 81=\\dfrac{\\log_3 81}{\\log_3 27}$.", "$\\log_3 81=4$ ve $\\log_3 27=3$ olduğundan sonuç $\\dfrac{4}{3}$'tür."],
      answer: "$\\dfrac{4}{3}$",
    },
    {
      id: "logaritma-fonksiyonu-05",
      difficulty: "Orta",
      prompt: "Bir çözeltinin asitlik değeri (pH), hidrojen iyonu derişimi $[H^+]$ ile $\\text{pH}=-\\log[H^+]$ bağıntısıyla verilir. (Taban $10$.) A çözeltisinin pH değeri $3$, B çözeltisinin pH değeri $5$ ise A çözeltisinin hidrojen iyonu derişiminin B çözeltisininkine oranı $\\dfrac{[H^+]_A}{[H^+]_B}$ kaçtır?",
      options: ["$\\dfrac{3}{5}$", "$2$", "$\\dfrac{1}{100}$", "$100$", "$10$"],
      correct: 3,
      solution: ["$\\text{pH}=-\\log[H^+]$ bağıntısından $\\log[H^+]=-\\text{pH}$, yani $[H^+]=10^{-\\text{pH}}$.", "A için $[H^+]_A=10^{-3}$, B için $[H^+]_B=10^{-5}$.", "Oran: $\\dfrac{[H^+]_A}{[H^+]_B}=\\dfrac{10^{-3}}{10^{-5}}=10^{-3-(-5)}=10^{2}=100$."],
      answer: "$100$",
    },
    {
      id: "logaritma-fonksiyonu-06",
      difficulty: "Zor",
      prompt: "$\\log_2 3=a$ ise $\\log_6 12$ ifadesinin $a$ cinsinden değeri aşağıdakilerden hangisidir?",
      options: ["$\\dfrac{a}{a+1}$", "$\\dfrac{a+2}{a+1}$", "$\\dfrac{2a}{a+1}$", "$a+2$", "$\\dfrac{a+1}{a+2}$"],
      correct: 1,
      solution: ["Taban değiştirme ile $2$ tabanına geçelim: $\\log_6 12=\\dfrac{\\log_2 12}{\\log_2 6}$.", "Pay: $12=2^{2}\\cdot 3$ olduğundan $\\log_2 12=\\log_2 2^{2}+\\log_2 3=2+a$.", "Payda: $6=2\\cdot 3$ olduğundan $\\log_2 6=\\log_2 2+\\log_2 3=1+a$.", "Sonuç: $\\log_6 12=\\dfrac{2+a}{1+a}=\\dfrac{a+2}{a+1}$."],
      answer: "$\\dfrac{a+2}{a+1}$",
    },
  ],
};

export default quiz;
