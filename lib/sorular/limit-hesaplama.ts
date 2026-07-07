import type { TopicQuiz } from "./types";

// limit-hesaplama — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "limit-hesaplama",
  questions: [
    {
      id: "limit-hesaplama-01",
      difficulty: "Zor",
      prompt: "$a=\\lim\\limits_{x\\to 3}\\dfrac{\\sqrt{x+1}-2}{x^{2}-5x+6}$ ve $b=\\lim\\limits_{x\\to 0}\\dfrac{\\sin 6x}{2x}$ olarak veriliyor. Buna göre $a\\cdot b$ çarpımı kaçtır?",
      options: ["$\\dfrac{1}{4}$", "$\\dfrac{1}{2}$", "$\\dfrac{3}{4}$", "$1$", "$\\dfrac{3}{2}$"],
      correct: 2,
      solution: ["$a$ için yerine koy: pay $\\sqrt{4}-2=0$, payda $9-15+6=0$. Belirsizlik $\\dfrac{0}{0}$.", "Payı eşlenikle genişlet: $\\big(\\sqrt{x+1}-2\\big)\\big(\\sqrt{x+1}+2\\big)=(x+1)-4=x-3$.", "Paydayı çarpanlara ayır: $x^{2}-5x+6=(x-2)(x-3)$.", "İfade: $\\dfrac{x-3}{(x-2)(x-3)\\big(\\sqrt{x+1}+2\\big)}=\\dfrac{1}{(x-2)\\big(\\sqrt{x+1}+2\\big)}$.", "Yerine koy: $a=\\dfrac{1}{(3-2)\\big(\\sqrt{4}+2\\big)}=\\dfrac{1}{1\\cdot 4}=\\dfrac{1}{4}$.", "$b$ için argümanı eşle: $\\dfrac{\\sin 6x}{2x}=\\dfrac{6}{2}\\cdot\\dfrac{\\sin 6x}{6x}\\to 3\\cdot 1=3$, yani $b=3$.", "Çarpım: $a\\cdot b=\\dfrac{1}{4}\\cdot 3=\\dfrac{3}{4}$."],
      answer: "$\\dfrac{3}{4}$",
    },
    {
      id: "limit-hesaplama-02",
      difficulty: "Zor",
      prompt: "$\\lim\\limits_{x\\to 0}\\dfrac{1-\\cos 4x}{x\\cdot\\sin 3x}$ limiti veriliyor. Buna göre bu limitin değeri kaçtır?",
      options: ["$\\dfrac{4}{3}$", "$2$", "$\\dfrac{8}{3}$", "$3$", "$\\dfrac{16}{3}$"],
      correct: 2,
      solution: ["Yerine koy: pay $1-\\cos 0=0$, payda $0$. Belirsizlik $\\dfrac{0}{0}$.", "Payı $1+\\cos 4x$ ile genişlet: $\\big(1-\\cos 4x\\big)\\big(1+\\cos 4x\\big)=1-\\cos^{2}4x=\\sin^{2}4x$.", "İfade: $\\dfrac{\\sin^{2}4x}{x\\cdot\\sin 3x\\cdot\\big(1+\\cos 4x\\big)}$.", "Her çarpanı argümanına eşle: $$\\frac{\\sin^{2}4x}{x^{2}}=\\Big(\\frac{\\sin 4x}{x}\\Big)^{2}\\to 16,\\qquad \\frac{\\sin 3x}{x}\\to 3$$", "Limiti düzenle: $\\dfrac{\\big(\\frac{\\sin 4x}{x}\\big)^{2}}{\\big(\\frac{\\sin 3x}{x}\\big)\\cdot\\big(1+\\cos 4x\\big)}\\to\\dfrac{16}{3\\cdot(1+1)}=\\dfrac{16}{6}=\\dfrac{8}{3}$."],
      answer: "$\\dfrac{8}{3}$",
    },
    {
      id: "limit-hesaplama-03",
      difficulty: "Orta",
      prompt: "$a$ ve $b$ gerçek sayılar olmak üzere $\\lim\\limits_{x\\to 2}\\dfrac{x^{2}+ax+b}{x-2}$ limiti **sonlu** bir değere eşit ve bu değer $5$'tir. Buna göre $a-b$ farkı kaçtır?",
      options: ["$-7$", "$-5$", "$1$", "$5$", "$7$"],
      correct: 4,
      solution: ["Payda $x\\to 2$ iken $0$'a gider. Limitin sonlu olması için pay da $x=2$'de $0$ olmalı; yani $\\dfrac{0}{0}$ belirsizliği gerekir.", "Pay $(x-2)$ çarpanını içerir; payı $x^{2}+ax+b=(x-2)(x-c)$ biçiminde yaz.", "Sadeleştir: $\\dfrac{(x-2)(x-c)}{x-2}=x-c$.", "Yerine koy: $\\lim\\limits_{x\\to 2}(x-c)=2-c=5\\Rightarrow c=-3$.", "Payı aç: $(x-2)(x+3)=x^{2}+x-6$, yani $a=1$ ve $b=-6$.", "Fark: $a-b=1-(-6)=7$."],
      answer: "$7$",
    },
    {
      id: "limit-hesaplama-04",
      difficulty: "Zor",
      prompt: "$L=\\lim\\limits_{x\\to 0}\\dfrac{\\tan 4x-\\sin 4x}{x^{3}}$ limiti veriliyor. Buna göre $L$ kaçtır?",
      options: ["$8$", "$16$", "$24$", "$32$", "$64$"],
      correct: 3,
      solution: ["Payı ortak parantezine al: $\\tan 4x-\\sin 4x=\\dfrac{\\sin 4x}{\\cos 4x}-\\sin 4x=\\sin 4x\\cdot\\dfrac{1-\\cos 4x}{\\cos 4x}$.", "İfade: $\\dfrac{\\sin 4x\\,(1-\\cos 4x)}{x^{3}\\cos 4x}$.", "$1-\\cos 4x$'i $1+\\cos 4x$ ile genişlet: $1-\\cos 4x=\\dfrac{\\sin^{2}4x}{1+\\cos 4x}$.", "İfade: $\\dfrac{\\sin 4x\\cdot\\sin^{2}4x}{x^{3}\\cos 4x\\,(1+\\cos 4x)}=\\dfrac{\\sin^{3}4x}{x^{3}}\\cdot\\dfrac{1}{\\cos 4x\\,(1+\\cos 4x)}$.", "$\\dfrac{\\sin^{3}4x}{x^{3}}=\\Big(\\dfrac{\\sin 4x}{x}\\Big)^{3}\\to 4^{3}=64$, ve $x\\to 0$ iken $\\cos 4x\\to 1$, $1+\\cos 4x\\to 2$.", "Limit: $L=64\\cdot\\dfrac{1}{1\\cdot 2}=32$."],
      answer: "$32$",
    },
    {
      id: "limit-hesaplama-05",
      difficulty: "Orta",
      prompt: "$\\lim\\limits_{x\\to 1}\\dfrac{\\sqrt[3]{x}-1}{\\sqrt{x}-1}$ limiti veriliyor. Buna göre bu limitin değeri kaçtır?",
      options: ["$\\dfrac{1}{3}$", "$\\dfrac{1}{2}$", "$\\dfrac{2}{3}$", "$1$", "$\\dfrac{3}{2}$"],
      correct: 2,
      solution: ["$u=\\sqrt[6]{x}$ diyelim. O zaman $\\sqrt[3]{x}=x^{1/3}=u^{2}$ ve $\\sqrt{x}=x^{1/2}=u^{3}$. $x\\to 1$ iken $u\\to 1$.", "İfade: $\\dfrac{u^{2}-1}{u^{3}-1}=\\dfrac{(u-1)(u+1)}{(u-1)(u^{2}+u+1)}$.", "$u\\to 1$ için $u\\ne 1$, sadeleştir: $\\dfrac{u+1}{u^{2}+u+1}$.", "Yerine koy ($u=1$): $\\dfrac{1+1}{1+1+1}=\\dfrac{2}{3}$."],
      answer: "$\\dfrac{2}{3}$",
    },
    {
      id: "limit-hesaplama-06",
      difficulty: "Orta",
      prompt: "$f(x)=\\dfrac{\\sin(x-2)}{x^{2}-4}$ olmak üzere $L=\\lim\\limits_{x\\to 2} f(x)$ değeri veriliyor. Buna göre $8L$ kaçtır?",
      options: ["$1$", "$2$", "$3$", "$4$", "$6$"],
      correct: 1,
      solution: ["Paydayı çarpanlara ayır: $x^{2}-4=(x-2)(x+2)$.", "İfade: $\\dfrac{\\sin(x-2)}{(x-2)(x+2)}=\\dfrac{\\sin(x-2)}{x-2}\\cdot\\dfrac{1}{x+2}$.", "$x\\to 2$ iken $(x-2)\\to 0$, yani $\\dfrac{\\sin(x-2)}{x-2}\\to 1$ (temel limit, argüman ile payda aynı).", "Geri kalan: $\\dfrac{1}{x+2}\\to\\dfrac{1}{2+2}=\\dfrac{1}{4}$.", "Limit: $L=1\\cdot\\dfrac{1}{4}=\\dfrac{1}{4}$, dolayısıyla $8L=8\\cdot\\dfrac{1}{4}=2$."],
      answer: "$2$",
    },
  ],
};

export default quiz;
