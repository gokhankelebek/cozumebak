import type { TopicQuiz } from "./types";

// trigonometrik-denklemler-ayt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "trigonometrik-denklemler-ayt",
  questions: [
    {
      id: "trigonometrik-denklemler-ayt-01",
      difficulty: "Orta",
      prompt: "$2\\cos^{2}x+\\cos x-1=0$ denkleminin $[0,2\\pi)$ aralığındaki bütün köklerinin toplamı $S$'dir. Buna göre $S$ kaçtır?",
      options: ["$2\\pi$", "$\\dfrac{8\\pi}{3}$", "$3\\pi$", "$\\dfrac{10\\pi}{3}$", "$4\\pi$"],
      correct: 2,
      solution: ["$\\cos x=t$ diyerek ikinci derece denklem yaz: $2t^{2}+t-1=0$.", "Çarpanlara ayır: $(2t-1)(t+1)=0 \\Rightarrow t=\\dfrac12$ veya $t=-1$.", "$\\cos x=\\dfrac12$: $[0,2\\pi)$ aralığında $x=\\dfrac{\\pi}{3}$ ve $x=\\dfrac{5\\pi}{3}$.", "$\\cos x=-1$: $[0,2\\pi)$ aralığında $x=\\pi$.", "Köklerin toplamı: $S=\\dfrac{\\pi}{3}+\\pi+\\dfrac{5\\pi}{3}=\\dfrac{\\pi+3\\pi+5\\pi}{3}=\\dfrac{9\\pi}{3}=3\\pi$."],
      answer: "$3\\pi$",
    },
    {
      id: "trigonometrik-denklemler-ayt-02",
      difficulty: "Orta",
      prompt: "$2\\sin^{2}x=3\\cos x$ denkleminin $[0,2\\pi)$ aralığındaki çözüm kümesinin eleman sayısı $n$'dir. Buna göre $n$ kaçtır?",
      options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
      correct: 1,
      solution: ["$\\sin^{2}x=1-\\cos^{2}x$ özdeşliğini kullan: $2(1-\\cos^{2}x)=3\\cos x$.", "Düzenle: $2-2\\cos^{2}x=3\\cos x \\Rightarrow 2\\cos^{2}x+3\\cos x-2=0$.", "Çarpanlara ayır: $(2\\cos x-1)(\\cos x+2)=0 \\Rightarrow \\cos x=\\dfrac12$ veya $\\cos x=-2$.", "$\\cos x=-2$ değeri $[-1,1]$ dışında olduğundan elenir; çözüm vermez.", "$\\cos x=\\dfrac12$: $[0,2\\pi)$ aralığında $x=\\dfrac{\\pi}{3}$ ve $x=\\dfrac{5\\pi}{3}$ olmak üzere $2$ kök vardır."],
      answer: "$2$",
    },
    {
      id: "trigonometrik-denklemler-ayt-03",
      difficulty: "Orta",
      prompt: "$\\sin 2x=\\sin x$ denkleminin $[0,2\\pi)$ aralığındaki çözüm kümesinin eleman sayısı $n$'dir. Buna göre $n$ kaçtır?",
      options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
      correct: 3,
      solution: ["$\\sin 2x=2\\sin x\\cos x$ açılımını yerine yaz: $2\\sin x\\cos x=\\sin x$.", "Tüm terimleri bir tarafa topla ve ortak çarpana ayır: $\\sin x\\,(2\\cos x-1)=0$.", "**Birinci durum** $\\sin x=0$: $[0,2\\pi)$ aralığında $x=0$ ve $x=\\pi$.", "**İkinci durum** $2\\cos x-1=0 \\Rightarrow \\cos x=\\dfrac12$: $[0,2\\pi)$ aralığında $x=\\dfrac{\\pi}{3}$ ve $x=\\dfrac{5\\pi}{3}$.", "Çözümler $\\left\\{0,\\ \\dfrac{\\pi}{3},\\ \\pi,\\ \\dfrac{5\\pi}{3}\\right\\}$ olup eleman sayısı $4$'tür."],
      answer: "$4$",
    },
    {
      id: "trigonometrik-denklemler-ayt-04",
      difficulty: "Zor",
      prompt: "$\\cos 2x+3\\sin x-2=0$ denkleminin $[0,2\\pi)$ aralığındaki köklerinin toplamı kaçtır?",
      options: ["$\\dfrac{\\pi}{2}$", "$\\dfrac{5\\pi}{6}$", "$\\pi$", "$\\dfrac{3\\pi}{2}$", "$\\dfrac{11\\pi}{6}$"],
      correct: 3,
      solution: ["$\\cos 2x=1-2\\sin^{2}x$ yerine koy: $1-2\\sin^{2}x+3\\sin x-2=0$.", "Düzenle: $-2\\sin^{2}x+3\\sin x-1=0 \\Rightarrow 2\\sin^{2}x-3\\sin x+1=0$.", "Çarpanlara ayır: $(2\\sin x-1)(\\sin x-1)=0 \\Rightarrow \\sin x=\\dfrac12$ veya $\\sin x=1$.", "$\\sin x=\\dfrac12$: $[0,2\\pi)$ aralığında $x=\\dfrac{\\pi}{6}$ ve $x=\\dfrac{5\\pi}{6}$.", "$\\sin x=1$: $[0,2\\pi)$ aralığında $x=\\dfrac{\\pi}{2}$.", "Köklerin toplamı: $\\dfrac{\\pi}{6}+\\dfrac{5\\pi}{6}+\\dfrac{\\pi}{2}=\\pi+\\dfrac{\\pi}{2}=\\dfrac{3\\pi}{2}$."],
      answer: "$\\dfrac{3\\pi}{2}$",
    },
    {
      id: "trigonometrik-denklemler-ayt-05",
      difficulty: "Kolay",
      prompt: "$\\sqrt{3}\\,\\tan x-1=0$ denkleminin $[0,2\\pi)$ aralığındaki çözüm kümesinin eleman sayısı $n$'dir. Buna göre $n$ kaçtır?",
      options: ["$1$", "$2$", "$3$", "$4$", "$6$"],
      correct: 1,
      solution: ["$\\tan x$'i yalnız bırak: $\\sqrt{3}\\,\\tan x=1 \\Rightarrow \\tan x=\\dfrac{1}{\\sqrt{3}}=\\dfrac{\\sqrt{3}}{3}$.", "Özel açı: $\\alpha=\\dfrac{\\pi}{6}$; genel çözüm $x=\\dfrac{\\pi}{6}+k\\pi$ (tek aile, periyot $\\pi$).", "$[0,2\\pi)$ aralığına düşen değerler: $k=0$ ile $\\dfrac{\\pi}{6}$ (I. bölge); $k=1$ ile $\\dfrac{\\pi}{6}+\\pi=\\dfrac{7\\pi}{6}$ (III. bölge).", "İki çözüm vardır; $n=2$."],
      answer: "$2$",
    },
    {
      id: "trigonometrik-denklemler-ayt-06",
      difficulty: "Kolay",
      prompt: "$\\cos x=m-1$ denkleminin çözümünün bulunabilmesi için $m$ gerçek sayısının sağlaması gereken koşul aşağıdakilerden hangisidir?",
      options: ["$-1\\le m\\le 1$", "$0\\le m\\le 1$", "$0\\le m\\le 2$", "$1\\le m\\le 2$", "$m\\ge 0$"],
      correct: 2,
      solution: ["Kosinüsün değer aralığı: $-1\\le\\cos x\\le 1$.", "Denklemin çözümü olması için sağ taraf da bu aralıkta olmalı: $-1\\le m-1\\le 1$.", "Her tarafa $1$ ekle: $0\\le m\\le 2$."],
      answer: "$0\\le m\\le 2$",
    },
  ],
};

export default quiz;
