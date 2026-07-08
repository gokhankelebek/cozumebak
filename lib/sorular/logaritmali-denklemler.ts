import type { TopicQuiz } from "./types";

// logaritmali-denklemler — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "logaritmali-denklemler",
  questions: [
    {
      id: "logaritmali-denklemler-01",
      difficulty: "Kolay",
      prompt: "$\\log_2(3x-2)=4$ denklemini sağlayan $x$ değeri kaçtır?",
      options: ["$4$", "$6$", "$5$", "$\\dfrac{14}{3}$", "$8$"],
      correct: 1,
      solution: ["Tanım koşulu: $3x-2>0\\Rightarrow x>\\dfrac{2}{3}$.", "Üstel biçime geç: $3x-2=2^{4}=16$.", "$3x=18\\Rightarrow x=6$.", "Kontrol: $6>\\dfrac{2}{3}$, koşulu sağlar."],
      answer: "$x=6$.",
    },
    {
      id: "logaritmali-denklemler-02",
      difficulty: "Kolay",
      prompt: "$\\log_7(4x-3)=\\log_7(x+9)$ denklemini sağlayan $x$ değeri kaçtır?",
      options: ["$3$", "$-2$", "$6$", "$4$", "$2$"],
      correct: 3,
      solution: ["Tanım koşulu: $4x-3>0$ ve $x+9>0\\Rightarrow x>\\dfrac{3}{4}$.", "Birebirlik: $4x-3=x+9$.", "$3x=12\\Rightarrow x=4$.", "Kontrol: $4>\\dfrac{3}{4}$, koşulu sağlar."],
      answer: "$x=4$.",
    },
    {
      id: "logaritmali-denklemler-03",
      difficulty: "Orta",
      prompt: "$\\log_3 x+\\log_3(x+6)=3$ denklemini sağlayan $x$ değeri kaçtır?",
      options: ["$-9$", "$3$", "$21$", "$\\dfrac{21}{2}$", "$9$"],
      correct: 1,
      solution: ["Tanım koşulu: $x>0$ ve $x+6>0\\Rightarrow x>0$.", "Çarpım kuralı: $\\log_3\\big(x(x+6)\\big)=3$.", "Üstel biçim: $x(x+6)=3^{3}=27\\Rightarrow x^{2}+6x-27=0$.", "Çarpanla: $(x+9)(x-3)=0\\Rightarrow x=-9$ veya $x=3$.", "Kontrol: $x=-9$ koşulu bozar, elenir; $x=3>0$ uygun."],
      answer: "$x=3$.",
    },
    {
      id: "logaritmali-denklemler-04",
      difficulty: "Orta",
      prompt: "$\\left(\\log_2 x\\right)^{2}-\\log_2 x-6=0$ denklemini sağlayan köklerin çarpımı kaçtır?",
      options: ["$8$", "$\\dfrac{1}{2}$", "$\\dfrac{1}{8}$", "$4$", "$2$"],
      correct: 4,
      solution: ["Tanım koşulu: $x>0$.", "$\\log_2 x=t$ diyelim: $t^{2}-t-6=0$.", "Çarpanla: $(t-3)(t+2)=0\\Rightarrow t=3$ veya $t=-2$.", "Geri dön: $\\log_2 x=3\\Rightarrow x=8$; $\\log_2 x=-2\\Rightarrow x=2^{-2}=\\dfrac{1}{4}$.", "Köklerin çarpımı: $8\\cdot\\dfrac{1}{4}=2$."],
      answer: "Köklerin çarpımı $2$.",
    },
    {
      id: "logaritmali-denklemler-05",
      difficulty: "Orta",
      prompt: "$\\log_{1/2}(x-3)\\ge -3$ eşitsizliğinin çözüm kümesi aşağıdakilerden hangisidir?",
      options: ["$(3,\\ 11]$", "$[11,\\ \\infty)$", "$(-\\infty,\\ 11]$", "$(3,\\ 8]$", "$(3,\\ 5]$"],
      correct: 0,
      solution: ["Tanım koşulu: $x-3>0\\Rightarrow x>3$.", "$-3=\\log_{1/2} 8$ çünkü $\\left(\\dfrac{1}{2}\\right)^{-3}=8$.", "$\\log_{1/2}(x-3)\\ge\\log_{1/2} 8$; taban $\\dfrac{1}{2}<1$ (azalan), yön ters döner: $x-3\\le 8$.", "$x\\le 11$.", "Birleştir: $3<x\\le 11$, yani $(3,\\ 11]$."],
      answer: "$(3,\\ 11]$.",
    },
    {
      id: "logaritmali-denklemler-06",
      difficulty: "Zor",
      prompt: "Bir bakteri kültüründeki birey sayısı $N$ (bin adet) ile geçen süre $t$ (saat) arasındaki ilişki $t=\\log_2 N$ bağıntısıyla veriliyor. Kültürdeki birey sayısının, başlangıçtaki $8$ bin adetten $128$ bin adete çıkması kaç saat sürer?",
      options: ["$16$", "$4$", "$120$", "$7$", "$3$"],
      correct: 1,
      solution: ["Başlangıç için süre: $t_1=\\log_2 8=3$ (çünkü $2^{3}=8$).", "Hedef için süre: $t_2=\\log_2 128=7$ (çünkü $2^{7}=128$).", "Geçen süre: $t_2-t_1=7-3=4$ saat."],
      answer: "$4$ saat.",
    },
  ],
};

export default quiz;
