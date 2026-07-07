import type { TopicQuiz } from "./types";

// integralde-alan — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "integralde-alan",
  questions: [
    {
      id: "integralde-alan-01",
      difficulty: "Orta",
      prompt: "$k>0$ olmak üzere, $y=kx$ doğrusu ile $y=x^{2}$ parabolü arasında kalan bölgenin alanı $\\dfrac{9}{2}$ birimkaredir. Buna göre $k$ kaçtır?",
      options: ["$2$", "$\\dfrac{5}{2}$", "$3$", "$\\dfrac{7}{2}$", "$4$"],
      correct: 2,
      solution: ["Kesişimler: $x^{2}=kx\\Rightarrow x(x-k)=0\\Rightarrow x=0,\\ x=k$. Sınırlar $0$ ile $k$.", "Üst-alt: $0<x<k$ üzerinde doğru üstte ($kx\\ge x^{2}$). Alan: $\\displaystyle A=\\int_{0}^{k}\\big(kx-x^{2}\\big)\\,dx$.", "İntegrali al: $\\displaystyle A=\\Big[\\dfrac{kx^{2}}{2}-\\dfrac{x^{3}}{3}\\Big]_{0}^{k}=\\dfrac{k^{3}}{2}-\\dfrac{k^{3}}{3}=\\dfrac{k^{3}}{6}$.", "Eşitliği kur: $\\dfrac{k^{3}}{6}=\\dfrac{9}{2}\\Rightarrow k^{3}=27\\Rightarrow k=3$."],
      answer: "$3$",
    },
    {
      id: "integralde-alan-02",
      difficulty: "Orta",
      prompt: "$y=x^{2}-3x$ parabolü ile $y=x$ doğrusu arasında kalan bölgenin alanı $A$ birimkaredir. Buna göre $A$ kaçtır?",
      options: ["$\\dfrac{16}{3}$", "$\\dfrac{20}{3}$", "$\\dfrac{28}{3}$", "$\\dfrac{32}{3}$", "$\\dfrac{40}{3}$"],
      correct: 3,
      solution: ["Kesişimler: $x^{2}-3x=x\\Rightarrow x^{2}-4x=0\\Rightarrow x(x-4)=0\\Rightarrow x=0,\\ x=4$. Sınırlar $0$ ile $4$.", "Üst-alt: $x=2$ için doğru $y=2$, parabol $y=4-6=-2$; doğru üstte.", "\"Üst eksi alt\" yaz: $\\displaystyle A=\\int_{0}^{4}\\big(x-(x^{2}-3x)\\big)\\,dx=\\int_{0}^{4}\\big(4x-x^{2}\\big)\\,dx$.", "İntegrali al: $\\displaystyle A=\\Big[2x^{2}-\\dfrac{x^{3}}{3}\\Big]_{0}^{4}=32-\\dfrac{64}{3}=\\dfrac{96-64}{3}=\\dfrac{32}{3}$."],
      answer: "$\\dfrac{32}{3}$",
    },
    {
      id: "integralde-alan-03",
      difficulty: "Zor",
      prompt: "$y=x^{3}-4x$ eğrisi ile $x$-ekseni arasında, $x=-2$ ile $x=2$ arasında kalan bölgenin alanı $A$ birimkaredir. Buna göre $A$ kaçtır?",
      options: ["$0$", "$4$", "$6$", "$8$", "$16$"],
      correct: 3,
      solution: ["Kökler: $x^{3}-4x=0\\Rightarrow x(x^{2}-4)=0\\Rightarrow x=-2,\\ 0,\\ 2$. Eğri $x=0$'da ekseni kesiyor; bölgeyi ayır.", "**Net integral tuzağı:** $y=x^{3}-4x$ tek fonksiyondur; $\\displaystyle\\int_{-2}^{2}\\big(x^{3}-4x\\big)\\,dx=0$ çıkar, ama bu alan değildir.", "Tek fonksiyon olduğundan iki parçanın alanları eşittir; simetriyle $\\displaystyle A=2\\Big|\\int_{0}^{2}\\big(x^{3}-4x\\big)\\,dx\\Big|$.", "İntegrali al: $\\displaystyle\\int_{0}^{2}\\big(x^{3}-4x\\big)\\,dx=\\Big[\\dfrac{x^{4}}{4}-2x^{2}\\Big]_{0}^{2}=4-8=-4$, mutlak değeri $4$.", "Alan: $A=2\\cdot 4=8$."],
      answer: "$8$",
    },
    {
      id: "integralde-alan-04",
      difficulty: "Orta",
      prompt: "$y=4-x^{2}$ parabolü ile $y=x^{2}-4$ parabolü arasında kalan bölgenin alanı $A$ birimkaredir. Buna göre $A$ kaçtır?",
      options: ["$\\dfrac{32}{3}$", "$\\dfrac{48}{3}$", "$\\dfrac{64}{3}$", "$\\dfrac{80}{3}$", "$\\dfrac{128}{3}$"],
      correct: 2,
      solution: ["Kesişimler: $4-x^{2}=x^{2}-4\\Rightarrow 8=2x^{2}\\Rightarrow x^{2}=4\\Rightarrow x=\\pm 2$. Sınırlar $-2$ ile $2$.", "Üst-alt: $x=0$ için $4-x^{2}=4$, $x^{2}-4=-4$; $y=4-x^{2}$ üstte.", "\"Üst eksi alt\": $\\displaystyle A=\\int_{-2}^{2}\\big((4-x^{2})-(x^{2}-4)\\big)\\,dx=\\int_{-2}^{2}\\big(8-2x^{2}\\big)\\,dx$.", "Çift fonksiyon simetrisi: $\\displaystyle A=2\\int_{0}^{2}\\big(8-2x^{2}\\big)\\,dx=2\\Big[8x-\\dfrac{2x^{3}}{3}\\Big]_{0}^{2}=2\\Big(16-\\dfrac{16}{3}\\Big)=2\\cdot\\dfrac{32}{3}=\\dfrac{64}{3}$."],
      answer: "$\\dfrac{64}{3}$",
    },
    {
      id: "integralde-alan-05",
      difficulty: "Orta",
      prompt: "$y=\\dfrac{1}{x}$ eğrisi, $x$-ekseni ve $x=1$ ile $x=k$ ($k>1$) doğruları arasında kalan bölgenin alanı $\\ln 4$ birimkaredir. Buna göre $k$ kaçtır?",
      options: ["$2$", "$3$", "$4$", "$e^{2}$", "$16$"],
      correct: 2,
      solution: ["$[1,k]$ üzerinde $\\dfrac{1}{x}>0$ olduğundan alan doğrudan integraldir: $\\displaystyle A=\\int_{1}^{k}\\dfrac{1}{x}\\,dx$.", "Antiderivatif: $\\big[\\ln x\\big]_{1}^{k}=\\ln k-\\ln 1=\\ln k$.", "Eşitliği kur: $\\ln k=\\ln 4\\Rightarrow k=4$.", "Çeldirici kontrolü: $\\ln 4=2\\ln 2$ olduğundan $\\ln k=2\\ln 2$ yazıp $k=e^{2}$ sanmak (D) yaygın hatadır; doğrusu $k=4$'tür."],
      answer: "$4$",
    },
    {
      id: "integralde-alan-06",
      difficulty: "Zor",
      prompt: "$y=x^{2}$ parabolü ile $y=8$ doğrusu ve $y$-ekseni arasında, birinci bölgede (yani $x\\ge 0$) kalan bölgenin alanı $A$ birimkaredir. Buna göre $A$ kaçtır?",
      options: ["$\\dfrac{16\\sqrt2}{3}$", "$\\dfrac{32\\sqrt2}{3}$", "$16$", "$\\dfrac{40\\sqrt2}{3}$", "$\\dfrac{64}{3}$"],
      correct: 1,
      solution: ["Kesişim (sağ sınır): $x^{2}=8\\Rightarrow x=2\\sqrt2$ ($x\\ge 0$). Sol sınır $y$-ekseni: $x=0$.", "Üst-alt: $0<x<2\\sqrt2$ üzerinde $y=8$ üstte, $y=x^{2}$ altta.", "\"Üst eksi alt\": $\\displaystyle A=\\int_{0}^{2\\sqrt2}\\big(8-x^{2}\\big)\\,dx=\\Big[8x-\\dfrac{x^{3}}{3}\\Big]_{0}^{2\\sqrt2}$.", "$x=2\\sqrt2$ için: $x^{3}=(2\\sqrt2)^{3}=8\\cdot 2\\sqrt2=16\\sqrt2$ ve $8x=16\\sqrt2$. Yani $A=16\\sqrt2-\\dfrac{16\\sqrt2}{3}=\\dfrac{48\\sqrt2-16\\sqrt2}{3}=\\dfrac{32\\sqrt2}{3}$."],
      answer: "$\\dfrac{32\\sqrt2}{3}$",
    },
  ],
};

export default quiz;
