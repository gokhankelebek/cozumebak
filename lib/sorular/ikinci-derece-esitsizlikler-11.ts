import type { TopicQuiz } from "./types";

// ikinci-derece-esitsizlikler-11 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "ikinci-derece-esitsizlikler-11",
  questions: [
    {
      id: "ikinci-derece-esitsizlikler-11-01",
      difficulty: "Kolay",
      prompt: "$x^2 - 2x - 8 \\ge 0$ eşitsizliğinin çözüm kümesi aşağıdakilerden hangisidir?",
      options: ["$(-\\infty,\\,-2] \\cup [4,\\,+\\infty)$", "$[-2,\\,4]$", "$(-\\infty,\\,-4] \\cup [2,\\,+\\infty)$", "$[-4,\\,2]$", "$(-2,\\,4)$"],
      correct: 0,
      solution: ["İfadeyi çarpanlarına ayır: $x^2 - 2x - 8 = (x-4)(x+2)$; kökler $-2$ ve $4$.", "Baş katsayı $a=1>0$ olduğundan ifade kökler **dışında** pozitif, arasında negatiftir.", "$\\ge 0$ istendiği için kökler dışını **ve** kökleri alırız (kapalı aralık).", "Çözüm: $x \\le -2$ veya $x \\ge 4$."],
      answer: "$x \\in (-\\infty,\\,-2] \\cup [4,\\,+\\infty)$.",
    },
    {
      id: "ikinci-derece-esitsizlikler-11-02",
      difficulty: "Kolay",
      prompt: "$-x^2 + x + 12 > 0$ eşitsizliğinin çözüm kümesi aşağıdakilerden hangisidir?",
      options: ["$(-\\infty,\\,-3) \\cup (4,\\,+\\infty)$", "$[-3,\\,4]$", "$(-4,\\,3)$", "$(-3,\\,4)$", "$\\mathbb{R}$"],
      correct: 3,
      solution: ["Baş katsayı negatif; tüm ifadeyi $-1$ ile çarp ve yönü çevir: $x^2 - x - 12 < 0$.", "Çarpanlara ayır: $(x-4)(x+3) < 0$; kökler $-3$ ve $4$.", "$a=1>0$ olduğundan ifade kökler **arasında** negatiftir.", "$<0$ olduğu için kökler dahil değildir (açık aralık).", "Çözüm: $-3 < x < 4$."],
      answer: "$x \\in (-3,\\,4)$.",
    },
    {
      id: "ikinci-derece-esitsizlikler-11-03",
      difficulty: "Orta",
      prompt: "$\\begin{cases} x^2 - 16 \\le 0 \\\\ 2x - 3 > 0 \\end{cases}$ sisteminin çözüm kümesi aşağıdakilerden hangisidir?",
      options: ["$\\left[-4,\\,\\dfrac{3}{2}\\right)$", "$\\left(\\dfrac{3}{2},\\,4\\right]$", "$[-4,\\,4]$", "$\\left[\\dfrac{3}{2},\\,4\\right]$", "$\\left(\\dfrac{3}{2},\\,4\\right)$"],
      correct: 1,
      solution: ["Birinci eşitsizlik: $(x-4)(x+4) \\le 0 \\Rightarrow -4 \\le x \\le 4$.", "İkinci eşitsizlik: $2x - 3 > 0 \\Rightarrow x > \\dfrac{3}{2}$.", "İki çözüm kümesinin **kesişimini** al: $x > \\dfrac{3}{2}$ ve $x \\le 4$.", "$x = 4$ birinci eşitsizlikte dahil ($\\le$), $x = \\dfrac{3}{2}$ ikinci eşitsizlikte hariç ($>$).", "Çözüm: $\\dfrac{3}{2} < x \\le 4$."],
      answer: "$x \\in \\left(\\dfrac{3}{2},\\,4\\right]$.",
    },
    {
      id: "ikinci-derece-esitsizlikler-11-04",
      difficulty: "Orta",
      prompt: "$\\dfrac{x+3}{x-2} \\le 0$ eşitsizliğinin çözüm kümesi aşağıdakilerden hangisidir?",
      options: ["$[-3,\\,2]$", "$(-3,\\,2)$", "$[-3,\\,2)$", "$(-3,\\,2]$", "$(-\\infty,\\,-3] \\cup (2,\\,+\\infty)$"],
      correct: 2,
      solution: ["Pay ve paydanın köklerini bul: pay $x=-3$, payda $x=2$. Sayı doğrusunda sırala: $-3,\\ 2$.", "İşaret tablosu ($x<-3$, $-3<x<2$, $x>2$): bölümün işaretleri sırasıyla $+,\\ -,\\ +$.", "$\\le 0$ için negatif bölgeyi al: $-3 < x < 2$.", "$x=-3$ payı sıfırlar (oran $0$, **dahil**); $x=2$ paydayı sıfırlar (tanımsız, **hariç**).", "Çözüm: $-3 \\le x < 2$."],
      answer: "$x \\in [-3,\\,2)$.",
    },
    {
      id: "ikinci-derece-esitsizlikler-11-05",
      difficulty: "Orta",
      prompt: "Her $x$ gerçek sayısı için $x^2 + 6x + m > 0$ olması için $m$ hangi değerleri almalıdır?",
      options: ["$m < 9$", "$m > 3$", "$m \\ge 9$", "$m > 9$", "$m < 3$"],
      correct: 3,
      solution: ["Bir parabolün **her $x$ için** pozitif olması, $a>0$ **ve** $\\Delta<0$ demektir.", "Baş katsayı $a=1>0$; bu koşul zaten sağlanıyor.", "İfadenin hiç reel kökü olmaması için $\\Delta < 0$ olmalı.", "$\\Delta = 6^2 - 4\\cdot1\\cdot m = 36 - 4m < 0 \\Rightarrow 36 < 4m \\Rightarrow m > 9$."],
      answer: "$m > 9$.",
    },
    {
      id: "ikinci-derece-esitsizlikler-11-06",
      difficulty: "Zor",
      prompt: "Bir dikdörtgen şeklindeki bahçenin uzunluğu $(x+2)$ metre, genişliği $(x-1)$ metredir. Bahçenin alanının $40$ m$^2$'den küçük olması için $x$ hangi aralıkta olmalıdır? (Kenar uzunlukları pozitif olmalıdır.)",
      options: ["$-7 < x < 6$", "$1 < x < 6$", "$0 < x < 6$", "$1 < x < 7$", "$-7 < x < 1$"],
      correct: 1,
      solution: ["Alan koşulu: $(x+2)(x-1) < 40$.", "Çarpımı aç: $x^2 + x - 2 < 40 \\Rightarrow x^2 + x - 42 < 0$.", "Çarpanlara ayır: $(x+7)(x-6) < 0$; kökler $-7$ ve $6$. $a>0$ olduğundan kökler arasında negatif: $-7 < x < 6$.", "Kenarlar pozitif olmalı: özellikle genişlik $x - 1 > 0 \\Rightarrow x > 1$ (bu, $x+2>0$ koşulunu da kapsar).", "İki koşulun kesişimi: $1 < x < 6$."],
      answer: "$x \\in (1,\\,6)$.",
    },
  ],
};

export default quiz;
