import type { TopicQuiz } from "./types";

// turev-alma-kurallari — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "turev-alma-kurallari",
  questions: [
    {
      id: "turev-alma-kurallari-01",
      difficulty: "Zor",
      prompt: "$f(x)=(x^{2}-3x)(2x+1)^{4}$ fonksiyonu veriliyor. Buna göre $f'(1)$ kaçtır?",
      options: ["$-405$", "$-432$", "$-486$", "$-513$", "$-540$"],
      correct: 3,
      solution: ["Bu bir çarpım; ikinci çarpan için zincir kuralı gerekir: $u=x^{2}-3x$, $u'=2x-3$; $\\;v=(2x+1)^{4}$, $v'=4(2x+1)^{3}\\cdot 2=8(2x+1)^{3}$.", "Çarpım kuralı: $f'(x)=(2x-3)(2x+1)^{4}+(x^{2}-3x)\\cdot 8(2x+1)^{3}$.", "$x=1$ yerine koy: $2x+1=3$, $x^{2}-3x=-2$, $2x-3=-1$.", "$f'(1)=(-1)\\cdot 3^{4}+(-2)\\cdot 8\\cdot 3^{3}=-81+(-16)\\cdot 27=-81-432=-513$."],
      answer: "$f'(1)=-513$",
    },
    {
      id: "turev-alma-kurallari-02",
      difficulty: "Orta",
      prompt: "$g(x)=x^{2}+1$ ve türevlenebilir bir $f$ fonksiyonu için $f'(2)=3$ veriliyor. $h(x)=f\\big(g(x)\\big)$ olsun. Buna göre $h'(1)$ kaçtır?",
      options: ["$3$", "$6$", "$9$", "$12$", "$15$"],
      correct: 1,
      solution: ["Zincir kuralı: $h'(x)=f'\\big(g(x)\\big)\\cdot g'(x)$.", "İç türev: $g'(x)=2x$, dolayısıyla $g'(1)=2$.", "İç fonksiyonun değeri: $g(1)=1^{2}+1=2$, böylece $f'\\big(g(1)\\big)=f'(2)=3$.", "$h'(1)=f'(2)\\cdot g'(1)=3\\cdot 2=6$."],
      answer: "$h'(1)=6$",
    },
    {
      id: "turev-alma-kurallari-03",
      difficulty: "Zor",
      prompt: "$f(x)=\\dfrac{\\sqrt{3x+1}}{x}$ fonksiyonu veriliyor. Buna göre $f'(1)$ kaçtır?",
      options: ["$\\dfrac{3}{4}$", "$-\\dfrac{1}{4}$", "$-\\dfrac{3}{4}$", "$-1$", "$-\\dfrac{5}{4}$"],
      correct: 4,
      solution: ["Pay için zincir kuralı: $u=(3x+1)^{1/2}$, $u'=\\dfrac{1}{2}(3x+1)^{-1/2}\\cdot 3=\\dfrac{3}{2\\sqrt{3x+1}}$; payda $v=x$, $v'=1$.", "Bölüm kuralı: $f'(x)=\\dfrac{\\dfrac{3}{2\\sqrt{3x+1}}\\cdot x-\\sqrt{3x+1}}{x^{2}}$.", "$x=1$ yerine koy: $\\sqrt{3\\cdot 1+1}=\\sqrt{4}=2$, dolayısıyla $u'(1)=\\dfrac{3}{2\\cdot 2}=\\dfrac{3}{4}$.", "$f'(1)=\\dfrac{\\dfrac{3}{4}\\cdot 1-2}{1^{2}}=\\dfrac{3}{4}-2=-\\dfrac{5}{4}$."],
      answer: "$f'(1)=-\\dfrac{5}{4}$",
    },
    {
      id: "turev-alma-kurallari-04",
      difficulty: "Orta",
      prompt: "$f$ türevlenebilir bir fonksiyon olup $g(x)=f\\big(x^{2}+1\\big)$ biçiminde tanımlanıyor. $f'(5)=4$ olduğu biliniyor. Buna göre $g'(2)$ kaçtır?",
      options: ["$8$", "$12$", "$16$", "$20$", "$24$"],
      correct: 2,
      solution: ["Zincir kuralı: $g'(x)=f'\\big(x^{2}+1\\big)\\cdot\\big(x^{2}+1\\big)'=f'\\big(x^{2}+1\\big)\\cdot 2x$.", "İç fonksiyonun $x=2$'deki değeri: $2^{2}+1=5$, dolayısıyla $f'\\big(x^{2}+1\\big)=f'(5)=4$.", "İç türev: $2x=2\\cdot 2=4$.", "Çarp: $g'(2)=4\\cdot 4=16$."],
      answer: "$g'(2)=16$",
    },
    {
      id: "turev-alma-kurallari-05",
      difficulty: "Orta",
      prompt: "$f(x)=\\dfrac{ax+1}{x^{2}+1}$ fonksiyonunun $x=0$ noktasındaki türev değeri $3$'tür. Buna göre $a$ kaçtır?",
      options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
      correct: 2,
      solution: ["Bölüm kuralı: $f'(x)=\\dfrac{a\\,(x^{2}+1)-(ax+1)\\cdot 2x}{(x^{2}+1)^{2}}$.", "$x=0$ koy: pay $=a\\cdot 1-(0+1)\\cdot 0=a$, payda $=(0+1)^{2}=1$.", "Böylece $f'(0)=a$.", "Koşul $f'(0)=3$ olduğundan $a=3$."],
      answer: "$a=3$",
    },
    {
      id: "turev-alma-kurallari-06",
      difficulty: "Orta",
      prompt: "$f(x)=\\big(x^{3}-2x+1\\big)^{5}$ fonksiyonunun grafiğine $x=1$ apsisli noktada çizilen teğetin eğimi kaçtır?",
      options: ["$0$", "$5$", "$10$", "$15$", "$20$"],
      correct: 0,
      solution: ["Teğetin eğimi $f'(1)$'dir. Genelleştirilmiş kuvvet kuralı: $f'(x)=5\\big(x^{3}-2x+1\\big)^{4}\\cdot\\big(3x^{2}-2\\big)$.", "İç fonksiyonun $x=1$'deki değeri: $1-2+1=0$, dolayısıyla $\\big(x^{3}-2x+1\\big)^{4}=0^{4}=0$.", "Dış çarpan sıfır olduğundan iç türevin değerine bakmaya gerek kalmadan $f'(1)=5\\cdot 0\\cdot(3-2)=0$.", "Eğim sıfırdır; teğet yataydır."],
      answer: "eğim $=0$",
    },
  ],
};

export default quiz;
