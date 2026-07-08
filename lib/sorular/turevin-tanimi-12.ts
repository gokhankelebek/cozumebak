import type { TopicQuiz } from "./types";

// turevin-tanimi-12 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "turevin-tanimi-12",
  questions: [
    {
      id: "turevin-tanimi-12-01",
      difficulty: "Kolay",
      prompt: "$f(x)=x^2+2x$ fonksiyonunun $x=-1$ ile $x=2$ arasındaki ortalama değişim oranı kaçtır?",
      options: ["$2$", "$3$", "$\\dfrac{7}{3}$", "$7$", "$9$"],
      correct: 1,
      solution: ["Uç değerleri hesapla: $f(-1)=(-1)^2+2\\cdot(-1)=1-2=-1$ ve $f(2)=2^2+2\\cdot 2=4+4=8$.", "Ortalama değişim oranı kesenin eğimidir: $\\dfrac{f(2)-f(-1)}{2-(-1)}$.", "Yerine koy: $\\dfrac{8-(-1)}{2-(-1)}=\\dfrac{9}{3}=3$.", "Not: Paydada $2-(-1)=3$ olur; $2-1=1$ almak (sonuç $9$) veya $f(-1)=1$ sanmak (sonuç $\\tfrac{7}{3}$) sık yapılan hatadır."],
      answer: "Ortalama değişim oranı $\\dfrac{9}{3}=3$'tür.",
    },
    {
      id: "turevin-tanimi-12-02",
      difficulty: "Kolay",
      prompt: "$f(x)=x^2-6x$ eğrisine $x=1$ noktasında çizilen teğetin denklemi aşağıdakilerden hangisidir?",
      options: ["$y=-4x+1$", "$y=-4x-5$", "$y=2x-7$", "$y=-4x-1$", "$y=-5x-1$"],
      correct: 3,
      solution: ["Türev fonksiyonu $f'(x)=2x-6$'dır (tanımdan da bulunabilir).", "Teğetin eğimi: $m=f'(1)=2\\cdot 1-6=-4$.", "Değme noktası: $f(1)=1-6=-5$, yani nokta $(1,-5)$.", "Teğet denklemi: $y-(-5)=-4(x-1)\\Rightarrow y+5=-4x+4$.", "Düzenle: $y=-4x+4-5=-4x-1$."],
      answer: "Teğet doğrusu $y=-4x-1$'dir.",
    },
    {
      id: "turevin-tanimi-12-03",
      difficulty: "Orta",
      prompt: "$f(x)=\\dfrac{2}{x}$ fonksiyonunun $x=1$ noktasındaki türevi (tanımdan) kaçtır?",
      options: ["$-2$", "$2$", "$-\\dfrac{1}{2}$", "$-1$", "$-4$"],
      correct: 0,
      solution: ["Tanım: $f'(1)=\\lim_{h\\to 0}\\dfrac{f(1+h)-f(1)}{h}$.", "Payı tek kesir yap: $\\dfrac{2}{1+h}-\\dfrac{2}{1}=\\dfrac{2-2(1+h)}{1+h}=\\dfrac{-2h}{1+h}$.", "Tüm ifade: $\\dfrac{1}{h}\\cdot\\dfrac{-2h}{1+h}=\\dfrac{-2}{1+h}$.", "Limit: $\\lim_{h\\to 0}\\dfrac{-2}{1+h}=\\dfrac{-2}{1}=-2$."],
      answer: "$f'(1)=-2$.",
    },
    {
      id: "turevin-tanimi-12-04",
      difficulty: "Orta",
      prompt: "$f(x)=x^2+10x-4$ eğrisine çizilen teğetin yatay olduğu noktanın apsisi kaçtır?",
      options: ["$5$", "$-4$", "$0$", "$10$", "$-5$"],
      correct: 4,
      solution: ["Yatay teğet, eğimin sıfır olması demektir: $f'(x)=0$.", "Türev fonksiyonu (tanımdan): $f(x+h)-f(x)=2xh+h^2+10h=h(2x+h+10)$; sadeleştirip $h\\to 0$ alınca $f'(x)=2x+10$.", "Denklemi çöz: $2x+10=0\\Rightarrow x=-5$.", "Not: $2x+10=0$'da $x=+5$ almak işaret hatasıdır."],
      answer: "Yatay teğetin apsisi $x=-5$'tir.",
    },
    {
      id: "turevin-tanimi-12-05",
      difficulty: "Zor",
      prompt: "Yukarı doğru atılan bir cismin $t$ saniye sonraki yüksekliği metre cinsinden $h(t)=40t-5t^2$ ile veriliyor. Cismin $t=3$ saniyedeki anlık hızı kaç m/s'dir?",
      options: ["$25$", "$15$", "$10$", "$40$", "$5$"],
      correct: 2,
      solution: ["Anlık hız, konum fonksiyonunun türevidir: $h'(t)=\\lim_{k\\to 0}\\dfrac{h(t+k)-h(t)}{k}$.", "Türev fonksiyonu: $h'(t)=40-10t$.", "$t=3$ için: $h'(3)=40-10\\cdot 3=40-30=10$.", "Not: Türev yerine ortalama hızı ($\\tfrac{h(3)}{3}=\\tfrac{75}{3}=25$) hesaplamak yaygın bir hatadır; soru anlık hızı ister."],
      answer: "Anlık hız $h'(3)=10$ m/s'dir.",
    },
    {
      id: "turevin-tanimi-12-06",
      difficulty: "Orta",
      prompt: "$f(x)=\\sqrt{x}$ fonksiyonunun $x=9$ noktasındaki türevi (tanımdan) kaçtır?",
      options: ["$\\dfrac{1}{6}$", "$\\dfrac{1}{3}$", "$6$", "$\\dfrac{1}{9}$", "$3$"],
      correct: 0,
      solution: ["Tanım: $f'(9)=\\lim_{h\\to 0}\\dfrac{\\sqrt{9+h}-\\sqrt{9}}{h}=\\lim_{h\\to 0}\\dfrac{\\sqrt{9+h}-3}{h}$.", "Eşlenikle çarp: $\\dfrac{\\sqrt{9+h}-3}{h}\\cdot\\dfrac{\\sqrt{9+h}+3}{\\sqrt{9+h}+3}=\\dfrac{(9+h)-9}{h(\\sqrt{9+h}+3)}=\\dfrac{h}{h(\\sqrt{9+h}+3)}$.", "Sadeleştir: $\\dfrac{1}{\\sqrt{9+h}+3}$.", "Limit: $\\dfrac{1}{\\sqrt{9}+3}=\\dfrac{1}{3+3}=\\dfrac{1}{6}$."],
      answer: "$f'(9)=\\dfrac{1}{6}$.",
    },
  ],
};

export default quiz;
