import type { TopicQuiz } from "./types";

// ikinci-derece-esitsizlik-ayt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "ikinci-derece-esitsizlik-ayt",
  questions: [
    {
      id: "ikinci-derece-esitsizlik-ayt-01",
      difficulty: "Kolay",
      prompt: "$x^2-5x-14 \\le 0$ eşitsizliğini sağlayan kaç farklı tam sayı vardır? Buna göre bu tam sayıların sayısı kaçtır?",
      options: ["7", "8", "9", "10", "11"],
      correct: 3,
      solution: ["Çarpanlara ayır: $x^2-5x-14=(x-7)(x+2)$; kökler $x_1=-2,\\ x_2=7$.", "$a=1 > 0$ olduğundan ifade köklerin **arasında negatif**tir; $\\le 0$ istendiğinden kökler **dahil** çözüm $-2\\le x\\le 7$ olur.", "Bu aralıktaki tam sayıları say: $-2,-1,0,1,2,3,4,5,6,7$.", "Toplam $10$ farklı tam sayı vardır."],
      answer: "10",
    },
    {
      id: "ikinci-derece-esitsizlik-ayt-02",
      difficulty: "Orta",
      prompt: "$f(x)=x^2+mx+m+3$ ifadesi **her reel** $x$ için pozitif olacak biçimde tanımlanıyor. Buna göre bu koşulu sağlayan kaç farklı tam sayı $m$ değeri vardır?",
      options: ["6", "7", "8", "9", "10"],
      correct: 1,
      solution: ["İfadenin her $x$ için pozitif olması için $a > 0$ ($a=1$, sağlandı) ve $\\Delta < 0$ olmalıdır.", "Diskriminant: $\\Delta=m^2-4(m+3)=m^2-4m-12 < 0$.", "Çarpanlara ayır: $m^2-4m-12=(m-6)(m+2) < 0 \\Rightarrow -2 < m < 6$.", "Bu aralıktaki tam sayılar: $-1,0,1,2,3,4,5$; toplam $7$ değer."],
      answer: "7",
    },
    {
      id: "ikinci-derece-esitsizlik-ayt-03",
      difficulty: "Kolay",
      prompt: "$(x+1)(x-6) < 0$ eşitsizliğini sağlayan tüm tam sayıların toplamı $S$ olarak veriliyor. Buna göre $S$ kaçtır?",
      options: ["9", "10", "12", "14", "15"],
      correct: 4,
      solution: ["Kökleri doğrudan oku: $x=-1$ ve $x=6$. Sıralı kökler $x_1=-1,\\ x_2=6$.", "Açılmış hâlde $a=1 > 0$ olduğundan ifade köklerin **arasında negatif**tir; $< 0$ istendiğinden çözüm $-1 < x < 6$ olur.", "Bu aralıktaki tam sayılar: $0,1,2,3,4,5$.", "Toplam: $S=0+1+2+3+4+5=15$."],
      answer: "15",
    },
    {
      id: "ikinci-derece-esitsizlik-ayt-04",
      difficulty: "Orta",
      prompt: "$f(x)=kx^2-4x+k$ ifadesi **her reel** $x$ için pozitif olacak biçimde tanımlanıyor. Buna göre $k$'nin alabileceği en küçük tam sayı değeri kaçtır?",
      options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
      correct: 2,
      solution: ["Parabol her $x$ için pozitif olacaksa kollar yukarı olmalı: $k > 0$.", "Reel kök olmamalı: $\\Delta=(-4)^2-4\\cdot k\\cdot k=16-4k^2 < 0 \\Rightarrow k^2 > 4 \\Rightarrow k < -2$ ya da $k > 2$.", "İki koşulu kesiştir: $k > 0$ ve ($k < -2$ ya da $k > 2$) $\\Rightarrow k > 2$.", "$k > 2$ koşulunu sağlayan en küçük tam sayı $k=3$'tür."],
      answer: "$3$",
    },
    {
      id: "ikinci-derece-esitsizlik-ayt-05",
      difficulty: "Zor",
      prompt: "$\\dfrac{x-4}{x+1} \\le 2$ eşitsizliğinin çözüm kümesi aşağıdakilerden hangisidir?",
      options: ["$(-\\infty,-6]$", "$[-6,-1)$", "$(-1,\\infty)$", "$(-\\infty,-6]\\cup(-1,\\infty)$", "$[-6,-1)\\cup(4,\\infty)$"],
      correct: 3,
      solution: ["Sağ tarafı sola al: $\\dfrac{x-4}{x+1}-2 \\le 0$.", "Tek kesir yap: $\\dfrac{x-4-2(x+1)}{x+1}=\\dfrac{x-4-2x-2}{x+1}=\\dfrac{-x-6}{x+1} \\le 0$.", "Payı düzenle: $\\dfrac{-(x+6)}{x+1}\\le 0$, yani $\\dfrac{x+6}{x+1}\\ge 0$. Kökler: pay $x=-6$, payda $x=-1$ (tanımsız).", "İşaret tablosu ($-6 < -1$):", "$\\ge 0$ istendiğinden pozitif aralıklar; $x=-6$ payı sıfırladığından **dahil**, $x=-1$ tanımsız olduğundan **dahil değil**."],
      answer: "$(-\\infty,-6]\\cup(-1,\\infty)$",
    },
  ],
};

export default quiz;
