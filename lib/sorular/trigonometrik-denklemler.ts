import type { TopicQuiz } from "./types";

// trigonometrik-denklemler — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "trigonometrik-denklemler",
  questions: [
    {
      id: "trigonometrik-denklemler-01",
      difficulty: "Kolay",
      prompt: "$2\\cos x+1=0$ denkleminin $[0,2\\pi)$ aralığındaki çözüm kümesi aşağıdakilerden hangisidir?",
      options: ["$\\left\\{\\dfrac{\\pi}{3},\\ \\dfrac{2\\pi}{3}\\right\\}$", "$\\left\\{\\dfrac{2\\pi}{3},\\ \\dfrac{4\\pi}{3}\\right\\}$", "$\\left\\{\\dfrac{\\pi}{3},\\ \\dfrac{5\\pi}{3}\\right\\}$", "$\\left\\{\\dfrac{5\\pi}{6},\\ \\dfrac{7\\pi}{6}\\right\\}$", "$\\left\\{\\dfrac{\\pi}{6},\\ \\dfrac{11\\pi}{6}\\right\\}$"],
      correct: 1,
      solution: ["Denklemi düzenle: $2\\cos x=-1\\Rightarrow \\cos x=-\\dfrac12$.", "Referans açı $\\dfrac{\\pi}{3}$'tür ($\\cos\\dfrac{\\pi}{3}=\\dfrac12$).", "$\\cos x$ negatif olduğundan çözümler II. ve III. bölgededir.", "II. bölge: $x=\\pi-\\dfrac{\\pi}{3}=\\dfrac{2\\pi}{3}$; III. bölge: $x=\\pi+\\dfrac{\\pi}{3}=\\dfrac{4\\pi}{3}$."],
      answer: "$\\left\\{\\dfrac{2\\pi}{3},\\ \\dfrac{4\\pi}{3}\\right\\}$",
    },
    {
      id: "trigonometrik-denklemler-02",
      difficulty: "Kolay",
      prompt: "$\\tan x=-\\sqrt3$ denkleminin genel çözümü aşağıdakilerden hangisidir?",
      options: ["$x=\\dfrac{\\pi}{3}+k\\pi,\\ k\\in\\mathbb{Z}$", "$x=\\dfrac{2\\pi}{3}+2k\\pi,\\ k\\in\\mathbb{Z}$", "$x=\\dfrac{2\\pi}{3}+k\\pi,\\ k\\in\\mathbb{Z}$", "$x=\\pm\\dfrac{\\pi}{3}+k\\pi,\\ k\\in\\mathbb{Z}$", "$x=-\\dfrac{\\pi}{3}+2k\\pi,\\ k\\in\\mathbb{Z}$"],
      correct: 2,
      solution: ["Referans açı $\\dfrac{\\pi}{3}$'tür ($\\tan\\dfrac{\\pi}{3}=\\sqrt3$).", "$\\tan x$ negatif; bir özel çözüm II. bölgede $x=\\pi-\\dfrac{\\pi}{3}=\\dfrac{2\\pi}{3}$'tür.", "Tanjantın periyodu $\\pi$ olduğundan genel çözümde $k\\pi$ eklenir: $x=\\dfrac{2\\pi}{3}+k\\pi$.", "(Tanjant denkleminde $2k\\pi$ değil, $k\\pi$ kullanılır.)"],
      answer: "$x=\\dfrac{2\\pi}{3}+k\\pi,\\ k\\in\\mathbb{Z}$",
    },
    {
      id: "trigonometrik-denklemler-03",
      difficulty: "Orta",
      prompt: "$\\sqrt2\\,\\sin x-1=0$ denkleminin $[0,2\\pi)$ aralığındaki köklerinin toplamı kaçtır?",
      options: ["$\\dfrac{\\pi}{2}$", "$\\dfrac{3\\pi}{4}$", "$\\pi$", "$\\dfrac{5\\pi}{4}$", "$\\dfrac{3\\pi}{2}$"],
      correct: 2,
      solution: ["Denklemi düzenle: $\\sin x=\\dfrac{1}{\\sqrt2}=\\dfrac{\\sqrt2}{2}$.", "Referans açı $\\dfrac{\\pi}{4}$; sinüs pozitif olduğundan I. ve II. bölgede çözüm vardır.", "$x=\\dfrac{\\pi}{4}$ ve $x=\\pi-\\dfrac{\\pi}{4}=\\dfrac{3\\pi}{4}$.", "Köklerin toplamı: $\\dfrac{\\pi}{4}+\\dfrac{3\\pi}{4}=\\pi$."],
      answer: "$\\pi$",
    },
    {
      id: "trigonometrik-denklemler-04",
      difficulty: "Orta",
      prompt: "$2\\sin^2 x+\\sin x-1=0$ denkleminin $[0,2\\pi)$ aralığında kaç farklı kökü vardır?",
      options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
      correct: 2,
      solution: ["$t=\\sin x$ diyelim: $2t^2+t-1=0\\Rightarrow (2t-1)(t+1)=0$.", "Kökler: $t=\\dfrac12$ veya $t=-1$ (ikisi de $[-1,1]$ aralığında, geçerli).", "$\\sin x=\\dfrac12$: $x=\\dfrac{\\pi}{6}$ ve $x=\\dfrac{5\\pi}{6}$ (iki çözüm).", "$\\sin x=-1$: $x=\\dfrac{3\\pi}{2}$ (tek çözüm). Toplam $2+1=3$ kök."],
      answer: "$3$ kök",
    },
    {
      id: "trigonometrik-denklemler-05",
      difficulty: "Orta",
      prompt: "$\\cos 3x=\\dfrac12$ denkleminin $[0,\\pi)$ aralığındaki çözüm kümesi aşağıdakilerden hangisidir?",
      options: ["$\\left\\{\\dfrac{\\pi}{9}\\right\\}$", "$\\left\\{\\dfrac{\\pi}{9},\\ \\dfrac{5\\pi}{9}\\right\\}$", "$\\left\\{\\dfrac{\\pi}{3},\\ \\dfrac{5\\pi}{3}\\right\\}$", "$\\left\\{\\dfrac{\\pi}{9},\\ \\dfrac{5\\pi}{9},\\ \\dfrac{7\\pi}{9}\\right\\}$", "$\\left\\{\\dfrac{\\pi}{9},\\ \\dfrac{5\\pi}{9},\\ \\dfrac{7\\pi}{9},\\ \\dfrac{11\\pi}{9}\\right\\}$"],
      correct: 3,
      solution: ["$u=3x$ koyalım; $x\\in[0,\\pi)$ iken $u\\in[0,3\\pi)$ olur.", "$\\cos u=\\dfrac12$; referans açı $\\dfrac{\\pi}{3}$, kosinüs I ve IV. bölgede pozitif: $u=\\dfrac{\\pi}{3}$ ve $u=2\\pi-\\dfrac{\\pi}{3}=\\dfrac{5\\pi}{3}$.", "Bir tam tur ekle: $u=\\dfrac{\\pi}{3}+2\\pi=\\dfrac{7\\pi}{3}$ (bu da $[0,3\\pi)$ içinde). $\\dfrac{5\\pi}{3}+2\\pi=\\dfrac{11\\pi}{3}>3\\pi$ olduğundan alınmaz.", "$u=\\dfrac{\\pi}{3},\\ \\dfrac{5\\pi}{3},\\ \\dfrac{7\\pi}{3}$; $x=\\dfrac{u}{3}$: $x=\\dfrac{\\pi}{9},\\ \\dfrac{5\\pi}{9},\\ \\dfrac{7\\pi}{9}$."],
      answer: "$\\left\\{\\dfrac{\\pi}{9},\\ \\dfrac{5\\pi}{9},\\ \\dfrac{7\\pi}{9}\\right\\}$",
    },
    {
      id: "trigonometrik-denklemler-06",
      difficulty: "Zor",
      prompt: "Bir dönme dolabındaki bir sepetin yerden yüksekliği $t$ saniye cinsinden $h(t)=6-5\\cos\\!\\left(\\dfrac{\\pi}{15}t\\right)$ metre ile veriliyor. Sepet, $t=0$ anından itibaren yüksekliği ilk kez $8{,}5$ metre olduğunda $t$ kaç saniyedir?",
      options: ["$5$", "$7{,}5$", "$10$", "$15$", "$20$"],
      correct: 2,
      solution: ["$h(t)=8{,}5$ yaz: $6-5\\cos\\!\\left(\\dfrac{\\pi}{15}t\\right)=8{,}5$.", "Düzenle: $-5\\cos\\!\\left(\\dfrac{\\pi}{15}t\\right)=2{,}5\\Rightarrow \\cos\\!\\left(\\dfrac{\\pi}{15}t\\right)=-\\dfrac12$.", "$\\dfrac{\\pi}{15}t>0$ için en küçük çözüm: $\\dfrac{\\pi}{15}t=\\dfrac{2\\pi}{3}$ (kosinüsün $-\\dfrac12$ olduğu ilk pozitif açı).", "$t=\\dfrac{2\\pi}{3}\\cdot\\dfrac{15}{\\pi}=10$ saniye."],
      answer: "$10$ saniye",
    },
  ],
};

export default quiz;
