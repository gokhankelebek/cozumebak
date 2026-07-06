import type { TopicQuiz } from "./types";

// Türevin Tanımı ve Temel Kuralları (AYT) — pilot question bank.
// Correct answers deliberately spread across A–E.
const quiz: TopicQuiz = {
  slug: "turevin-tanimi",
  questions: [
    {
      id: "turevin-tanimi-01",
      difficulty: "Kolay",
      prompt: String.raw`$f(x) = x^2$ fonksiyonu için $\lim\limits_{h\to 0}\dfrac{f(3+h)-f(3)}{h}$ limitinin değeri kaçtır?`,
      options: ["$3$", "$6$", "$9$", "$12$", "$18$"],
      correct: 1,
      solution: [
        String.raw`Verilen limit, türevin tanımıdır: $\lim\limits_{h\to 0}\dfrac{f(3+h)-f(3)}{h} = f'(3)$.`,
        String.raw`$f(x)=x^2$ için $f'(x)=2x$ olur.`,
        String.raw`$f'(3) = 2\cdot 3 = 6$.`,
      ],
      answer: String.raw`$f'(3)=6$`,
    },
    {
      id: "turevin-tanimi-02",
      difficulty: "Kolay",
      prompt: String.raw`$f(x) = x^3 - 2x$ eğrisinin $x=1$ apsisli noktasındaki teğetinin eğimi kaçtır?`,
      options: ["$-1$", "$0$", "$1$", "$2$", "$3$"],
      correct: 2,
      solution: [
        String.raw`Teğetin eğimi, o noktadaki türev değeridir: $m = f'(1)$.`,
        String.raw`$f'(x) = 3x^2 - 2$.`,
        String.raw`$f'(1) = 3\cdot 1 - 2 = 1$.`,
      ],
      answer: String.raw`$m = 1$`,
    },
    {
      id: "turevin-tanimi-03",
      difficulty: "Orta",
      prompt: String.raw`$f$ türevlenebilir bir fonksiyon ve $f'(a) = 4$ olduğuna göre, $\lim\limits_{h\to 0}\dfrac{f(a+3h)-f(a)}{h}$ limitinin değeri kaçtır?`,
      options: ["$3$", "$4$", "$7$", "$12$", "$16$"],
      correct: 3,
      solution: [
        String.raw`Limiti türev tanımına benzetmek için pay ve paydayı düzenleyelim: $\dfrac{f(a+3h)-f(a)}{h} = 3\cdot\dfrac{f(a+3h)-f(a)}{3h}$.`,
        String.raw`$u = 3h$ dersek $h\to 0$ iken $u\to 0$ olur: $3\cdot\lim\limits_{u\to 0}\dfrac{f(a+u)-f(a)}{u} = 3f'(a)$.`,
        String.raw`$3f'(a) = 3\cdot 4 = 12$.`,
      ],
      answer: String.raw`$3f'(a) = 12$`,
    },
    {
      id: "turevin-tanimi-04",
      difficulty: "Orta",
      prompt: String.raw`$f(x) = |x-2|$ fonksiyonunun $x = 2$ noktasındaki durumu için aşağıdakilerden hangisi doğrudur?`,
      options: [
        "Süreklidir ve türevlenebilir.",
        "Süreklidir fakat türevlenemez.",
        "Sürekli değildir fakat türevlenebilir.",
        "Ne süreklidir ne de türevlenebilir.",
        "Yalnızca sağdan türevlenebilir.",
      ],
      correct: 1,
      solution: [
        String.raw`Süreklilik: $\lim\limits_{x\to 2}|x-2| = 0 = f(2)$ olduğundan $f$, $x=2$'de süreklidir.`,
        String.raw`Soldan türev: $x<2$ için $f(x)=2-x$, dolayısıyla $f'_-(2) = -1$.`,
        String.raw`Sağdan türev: $x>2$ için $f(x)=x-2$, dolayısıyla $f'_+(2) = +1$.`,
        String.raw`$f'_-(2) \neq f'_+(2)$ olduğundan $x=2$'de türev yoktur (grafikte sivri nokta).`,
      ],
      answer: String.raw`Süreklidir fakat türevlenemez.`,
    },
    {
      id: "turevin-tanimi-05",
      difficulty: "Orta",
      prompt: String.raw`$f(x) = 3x^4 - 2x^2 + 5x - 7$ olduğuna göre $f'(-1)$ kaçtır?`,
      options: ["$-21$", "$-11$", "$-3$", "$3$", "$13$"],
      correct: 2,
      solution: [
        String.raw`Kuvvet kuralıyla türev alalım: $f'(x) = 12x^3 - 4x + 5$.`,
        String.raw`$x=-1$ yazalım: $f'(-1) = 12(-1)^3 - 4(-1) + 5$.`,
        String.raw`$f'(-1) = -12 + 4 + 5 = -3$.`,
      ],
      answer: String.raw`$f'(-1) = -3$`,
    },
    {
      id: "turevin-tanimi-06",
      difficulty: "Orta",
      prompt: String.raw`$y = x^2 + 3x$ parabolünün hangi noktasındaki teğeti $y = 5x + 1$ doğrusuna paraleldir?`,
      options: ["$(0,\\,0)$", "$(1,\\,5)$", "$(2,\\,10)$", "$(5,\\,40)$", "$(1,\\,4)$"],
      correct: 4,
      solution: [
        String.raw`Paralel doğruların eğimleri eşittir; $y=5x+1$ doğrusunun eğimi $5$'tir.`,
        String.raw`$y' = 2x + 3$ olduğundan $2x+3 = 5 \Rightarrow x = 1$.`,
        String.raw`$x=1$ için $y = 1 + 3 = 4$; teğet noktası $(1,\,4)$.`,
      ],
      answer: String.raw`$(1,\,4)$`,
    },
    {
      id: "turevin-tanimi-07",
      difficulty: "Zor",
      prompt: String.raw`$f(x) = \begin{cases} ax^2 + b, & x \le 1 \\ 4x, & x > 1 \end{cases}$ fonksiyonu $x=1$ noktasında türevlenebilir olduğuna göre, $a\cdot b$ çarpımı kaçtır?`,
      options: ["$4$", "$2$", "$6$", "$8$", "$16$"],
      correct: 0,
      solution: [
        String.raw`Türevlenebilirlik için önce türevler eşleşmeli: soldan $(ax^2+b)' = 2ax \Rightarrow 2a$, sağdan $(4x)' = 4$. Buradan $2a = 4 \Rightarrow a = 2$.`,
        String.raw`Türevlenebilen fonksiyon sürekli de olmalıdır: $a\cdot 1 + b = 4\cdot 1 \Rightarrow a + b = 4$.`,
        String.raw`$a=2$ için $b = 2$ bulunur.`,
        String.raw`$a\cdot b = 2\cdot 2 = 4$.`,
      ],
      answer: String.raw`$a\cdot b = 4$`,
    },
    {
      id: "turevin-tanimi-08",
      difficulty: "Zor",
      prompt: String.raw`Bir hareketlinin konumu $s(t) = t^3 - 6t^2 + 9t$ (metre, $t$ saniye) ile veriliyor. Hareketlinin anlık hızı hangi anlarda sıfırdır?`,
      options: [
        String.raw`Yalnız $t=1$`,
        String.raw`Yalnız $t=3$`,
        String.raw`$t=0$ ve $t=3$`,
        String.raw`$t=1$ ve $t=3$`,
        String.raw`$t=2$ ve $t=3$`,
      ],
      correct: 3,
      solution: [
        String.raw`Anlık hız, konumun türevidir: $v(t) = s'(t) = 3t^2 - 12t + 9$.`,
        String.raw`$v(t) = 0$ için: $3t^2 - 12t + 9 = 0 \Rightarrow 3(t^2 - 4t + 3) = 0$.`,
        String.raw`Çarpanlara ayıralım: $3(t-1)(t-3) = 0 \Rightarrow t = 1$ veya $t = 3$.`,
      ],
      answer: String.raw`$t=1$ ve $t=3$ anlarında hız sıfırdır.`,
    },
  ],
};

export default quiz;
