import type { TopicQuiz } from "./types";

// mutlak-deger-tyt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "mutlak-deger-tyt",
  questions: [
    {
      id: "mutlak-deger-tyt-01",
      difficulty: "Kolay",
      prompt: "Bir su deposunun ideal sıcaklığı $20\\,^{\\circ}\\text{C}$'dir. Sistem, ölçülen sıcaklık $T$ için $\\lvert T-20\\rvert > 4$ olduğunda alarm veriyor. Buna göre aşağıdaki sıcaklıklardan hangisinde alarm **çalmaz**?",
      options: ["$14$", "$15$", "$23$", "$25$", "$26$"],
      correct: 2,
      solution: ["Alarm çalmaması koşulu: $\\lvert T-20\\rvert\\le 4$.", "\"Arada\" yapısı: $-4\\le T-20\\le 4\\Rightarrow 16\\le T\\le 24$.", "Şıkları kontrol et: $14,\\,15$ küçük; $25,\\,26$ büyük. Yalnız $23$ aralıkta."],
      answer: "$23$",
    },
    {
      id: "mutlak-deger-tyt-02",
      difficulty: "Kolay",
      prompt: "Bir fabrikada üretilen vidaların uzunluğu $L$ mm olup, kalite kontrolü için $\\lvert L-50\\rvert\\le 2$ koşulu aranır. Bu koşulu sağlayan tam sayı uzunlukların **sayısı** kaçtır?",
      options: ["$3$", "$4$", "$5$", "$6$", "$7$"],
      correct: 2,
      solution: ["$\\lvert L-50\\rvert\\le 2\\Rightarrow -2\\le L-50\\le 2$.", "Her tarafa $50$ ekle: $48\\le L\\le 52$.", "Tam sayılar: $48,\\,49,\\,50,\\,51,\\,52$ → $5$ adet (uçlar dahil). Çeldirici A) $3$, uçları hariç tutmaktan; C doğru."],
      answer: "$5$",
    },
    {
      id: "mutlak-deger-tyt-03",
      difficulty: "Orta",
      prompt: "$\\lvert 3x-2\\rvert=\\lvert x+4\\rvert$ denkleminin köklerinin toplamı kaçtır?",
      options: ["$\\dfrac{5}{2}$", "$3$", "$\\dfrac{7}{2}$", "$4$", "$\\dfrac{9}{2}$"],
      correct: 0,
      solution: ["Birinci durum: $3x-2=x+4\\Rightarrow 2x=6\\Rightarrow x=3$.", "İkinci durum: $3x-2=-(x+4)\\Rightarrow 3x-2=-x-4\\Rightarrow 4x=-2\\Rightarrow x=-\\dfrac{1}{2}$.", "Köklerin toplamı: $3+\\left(-\\dfrac{1}{2}\\right)=\\dfrac{5}{2}$."],
      answer: "$\\dfrac{5}{2}$",
    },
    {
      id: "mutlak-deger-tyt-04",
      difficulty: "Orta",
      prompt: "$\\lvert 2x-6\\rvert=\\lvert x-1\\rvert$ denkleminin köklerinin çarpımı kaçtır?",
      options: ["$\\dfrac{35}{3}$", "$7$", "$5$", "$\\dfrac{7}{3}$", "$-7$"],
      correct: 0,
      solution: ["Birinci durum: $2x-6=x-1\\Rightarrow x=5$.", "İkinci durum: $2x-6=-(x-1)\\Rightarrow 2x-6=-x+1\\Rightarrow 3x=7\\Rightarrow x=\\dfrac{7}{3}$.", "Çarpım: $5\\cdot\\dfrac{7}{3}=\\dfrac{35}{3}$."],
      answer: "$\\dfrac{35}{3}$",
    },
    {
      id: "mutlak-deger-tyt-05",
      difficulty: "Orta",
      prompt: "$1 < x < 4$ olmak üzere $\\lvert x-1\\rvert+\\lvert x-4\\rvert$ ifadesinin değeri kaçtır?",
      options: ["$2x-5$", "$5-2x$", "$3$", "$5$", "$2x+5$"],
      correct: 2,
      solution: ["$1<x$ olduğundan $x-1>0$: $\\lvert x-1\\rvert=x-1$.", "$x<4$ olduğundan $x-4<0$: $\\lvert x-4\\rvert=-(x-4)=4-x$.", "Topla: $(x-1)+(4-x)=3$. Çeldirici A) $2x-5$, ikinci mutlak değeri de pozitif açmaktan; C doğru."],
      answer: "$3$",
    },
    {
      id: "mutlak-deger-tyt-06",
      difficulty: "Orta",
      prompt: "$\\lvert x-2\\rvert\\le 3$ eşitsizliğini sağlayan tam sayıların **toplamı** kaçtır?",
      options: ["$10$", "$12$", "$14$", "$16$", "$18$"],
      correct: 2,
      solution: ["$\\lvert x-2\\rvert\\le 3\\Rightarrow -3\\le x-2\\le 3$.", "Her tarafa $2$ ekle: $-1\\le x\\le 5$.", "Tam sayılar: $-1,\\,0,\\,1,\\,2,\\,3,\\,4,\\,5$.", "Toplam: $(-1+1)+(0)+2+3+4+5=14$. Çeldirici E) $18$, sol uç $-1$'i atlayıp $0$'dan başlamaktan; C doğru."],
      answer: "$14$",
    },
  ],
};

export default quiz;
