import type { TopicQuiz } from "./types";

// karekok-rasyonel-fonksiyon-10 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "karekok-rasyonel-fonksiyon-10",
  questions: [
    {
      id: "karekok-rasyonel-fonksiyon-10-01",
      difficulty: "Kolay",
      prompt: "$f(x)=\\sqrt{x-7}$ fonksiyonunun tanım kümesi aşağıdakilerden hangisidir?",
      options: ["$[7,\\ \\infty)$", "$(-\\infty,\\ 7]$", "$(7,\\ \\infty)$", "$\\mathbb{R}\\setminus\\{7\\}$", "$[-7,\\ \\infty)$"],
      correct: 0,
      solution: ["Karekök fonksiyonunda kök içi negatif olamaz: $x-7\\ge 0$.", "Eşitsizliği çöz: $x\\ge 7$.", "Uç değer $7$ de dâhildir çünkü kök içi $0$ olabilir; tanım kümesi $[7,\\ \\infty)$."],
      answer: "$[7,\\ \\infty)$",
    },
    {
      id: "karekok-rasyonel-fonksiyon-10-02",
      difficulty: "Kolay",
      prompt: "$f(x)=\\dfrac{4}{2x-6}$ fonksiyonu hangi $x$ değerinde tanımsızdır?",
      options: ["$x=3$", "$x=-3$", "$x=6$", "$x=2$", "$x=0$"],
      correct: 0,
      solution: ["Rasyonel fonksiyonda payda sıfır olamaz: $2x-6\\neq 0$.", "Payda sıfır yapan değeri bul: $2x-6=0\\Rightarrow 2x=6\\Rightarrow x=3$.", "Bu değerde fonksiyon tanımsızdır."],
      answer: "$x=3$",
    },
    {
      id: "karekok-rasyonel-fonksiyon-10-03",
      difficulty: "Orta",
      prompt: "$f(x)=\\dfrac{5}{x+4}$ fonksiyonunun düşey ve yatay asimptotları sırasıyla hangileridir?",
      options: ["$x=-4$ ve $y=0$", "$x=4$ ve $y=0$", "$x=-4$ ve $y=5$", "$x=0$ ve $y=-4$", "$x=4$ ve $y=5$"],
      correct: 0,
      solution: ["Düşey asimptot paydayı sıfır yapan yerdedir: $x+4=0\\Rightarrow x=-4$.", "$x$ büyüdükçe $\\dfrac{5}{x+4}$ değeri $0$'a yaklaşır; yatay asimptot $y=0$.", "Böylece düşey $x=-4$, yatay $y=0$ olur."],
      answer: "Düşey $x=-4$, yatay $y=0$",
    },
    {
      id: "karekok-rasyonel-fonksiyon-10-04",
      difficulty: "Orta",
      prompt: "$f(x)=\\dfrac{\\sqrt{x+3}}{x-2}$ fonksiyonunun tanım kümesi aşağıdakilerden hangisidir?",
      options: ["$[-3,\\ 2)\\cup(2,\\ \\infty)$", "$[-3,\\ \\infty)$", "$(-3,\\ 2)\\cup(2,\\ \\infty)$", "$\\mathbb{R}\\setminus\\{2\\}$", "$(2,\\ \\infty)$"],
      correct: 0,
      solution: ["Paydaki kök içi negatif olamaz: $x+3\\ge 0\\Rightarrow x\\ge -3$.", "Payda sıfır olamaz: $x-2\\neq 0\\Rightarrow x\\neq 2$.", "İki koşulu birleştir: $x\\ge -3$ ve $x\\neq 2$.", "Aralık olarak: $[-3,\\ 2)\\cup(2,\\ \\infty)$."],
      answer: "$[-3,\\ 2)\\cup(2,\\ \\infty)$",
    },
    {
      id: "karekok-rasyonel-fonksiyon-10-05",
      difficulty: "Orta",
      prompt: "$f(x)=\\sqrt{x+7}+\\dfrac{12}{x}$ fonksiyonu için $f(2)$ değeri kaçtır?",
      options: ["$9$", "$6$", "$3$", "$\\dfrac{15}{2}$", "$12$"],
      correct: 0,
      solution: ["Kök terimini hesapla: $\\sqrt{2+7}=\\sqrt{9}=3$.", "Kesir terimini hesapla: $\\dfrac{12}{2}=6$.", "İkisini topla: $f(2)=3+6=9$."],
      answer: "$9$",
    },
    {
      id: "karekok-rasyonel-fonksiyon-10-06",
      difficulty: "Zor",
      prompt: "Bir mühendis, gerilim değerini modelleyen $f(x)=\\dfrac{\\sqrt{x+1}}{\\sqrt{8-x}}$ fonksiyonunu kullanmaktadır. Bu fonksiyonun tanımlı olduğu $x$ değerlerinin kümesi aşağıdakilerden hangisidir?",
      options: ["$[-1,\\ 8)$", "$[-1,\\ 8]$", "$(-1,\\ 8)$", "$[1,\\ 8)$", "$(-\\infty,\\ 8)$"],
      correct: 0,
      solution: ["Paydaki kök içi negatif olamaz: $x+1\\ge 0\\Rightarrow x\\ge -1$.", "Payda hem köklü hem sıfır olamaz; bu yüzden paydadaki kök içi kesin pozitif olmalı: $8-x>0\\Rightarrow x<8$ (eşitliğe izin yok).", "İki koşulun kesişimi: $-1\\le x<8$.", "Aralık olarak: $[-1,\\ 8)$."],
      answer: "$[-1,\\ 8)$",
    },
  ],
};

export default quiz;
