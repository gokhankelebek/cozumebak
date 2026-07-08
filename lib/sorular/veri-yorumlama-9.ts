import type { TopicQuiz } from "./types";

// veri-yorumlama-9 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "veri-yorumlama-9",
  questions: [
    {
      id: "veri-yorumlama-9-01",
      difficulty: "Kolay",
      prompt: "Bir daire grafiğinde bir seçeneğin yüzdesi $\\%65$'tir. Bu seçeneğin dilim açısı kaç derecedir?",
      options: ["$65°$", "$130°$", "$195°$", "$234°$", "$260°$"],
      correct: 3,
      solution: ["Açı ile yüzde arasındaki orantı: $\\dfrac{\\text{açı}}{360}=\\dfrac{\\text{yüzde}}{100}$.", "Açı $=\\dfrac{65}{100}\\cdot 360°$.", "$\\dfrac{65}{100}\\cdot 360=65\\cdot 3{,}6=234°$."],
      answer: "$234°$.",
    },
    {
      id: "veri-yorumlama-9-02",
      difficulty: "Orta",
      prompt: "Bir daire grafiğinde bir seçeneğin dilim açısı $120°$'dir ve bu seçeneği $48$ kişi işaretlemiştir. Ankete toplam kaç kişi katılmıştır?",
      options: ["$96$", "$120$", "$144$", "$160$", "$180$"],
      correct: 2,
      solution: ["Dilimin daireye oranı: $\\dfrac{120}{360}=\\dfrac{1}{3}$.", "Yani $48$ kişi toplamın $\\dfrac{1}{3}$'üdür.", "Toplam $=48\\cdot 3=144$ kişi."],
      answer: "$144$ kişi.",
    },
    {
      id: "veri-yorumlama-9-03",
      difficulty: "Kolay",
      prompt: "Bir daire grafiğinde dilimler $\\%28$, $\\%17$ ve $\\%33$ olarak veriliyor. Grafikte gösterilmeyen (eksik) yüzde kaçtır?",
      options: ["$\\%12$", "$\\%22$", "$\\%25$", "$\\%32$", "$\\%78$"],
      correct: 1,
      solution: ["Daire grafiğinde tüm dilimlerin yüzdeleri toplamı $\\%100$ olmalıdır.", "Verilenlerin toplamı: $28+17+33=78$.", "Eksik yüzde $=100-78=22$."],
      answer: "$\\%22$.",
    },
    {
      id: "veri-yorumlama-9-04",
      difficulty: "Orta",
      prompt: "$6,\\ 7,\\ 8,\\ 9,\\ 120$ veri kümesinin ortalaması kaçtır?",
      options: ["$8$", "$10$", "$15$", "$30$", "$50$"],
      correct: 3,
      solution: ["Ortalama $=\\dfrac{6+7+8+9+120}{5}$.", "Pay: $6+7+8+9+120=150$.", "Ortalama $=\\dfrac{150}{5}=30$. (Not: $120$ bir uç değerdir; medyan $8$ veriyi daha iyi temsil eder.)"],
      answer: "Ortalama $30$; ama uç değer nedeniyle medyan ($8$) daha temsil edicidir.",
    },
    {
      id: "veri-yorumlama-9-05",
      difficulty: "Orta",
      prompt: "Bir kafenin müşteri sayısı pazartesi $40$, salı $50$ kişidir. Kafe sahibi \"Müşterilerimiz $\\%25$ arttı!\" diyor. Bu ifadeyle ilgili aşağıdakilerden hangisi doğrudur?",
      options: ["İfade yanlıştır; artış $\\%10$'dur.", "İfade yanlıştır; artış $\\%50$'dir.", "İfade doğrudur; $40$'tan $50$'ye artış $\\%25$'tir, mutlak artış ise yalnız $10$ kişidir.", "İfade doğrudur ve müşteri sayısının $\\%25$'e, yani $25$ kişiye düştüğünü gösterir.", "İfade doğrudur; her gün $25$ kişi artmıştır."],
      correct: 2,
      solution: ["Mutlak artış: $50-40=10$ kişi.", "Yüzde artış $=\\dfrac{10}{40}\\cdot 100=\\%25$; yani ifade doğrudur.", "Ancak $\\%25$'lik oran yalnız $10$ kişilik bir artışa karşılık gelir; yüzde ile mutlak sayı karıştırılmamalıdır."],
      answer: "İfade doğrudur: oransal artış $\\%25$, fakat mutlak artış sadece $10$ kişidir.",
    },
    {
      id: "veri-yorumlama-9-06",
      difficulty: "Zor",
      prompt: "Bir öğrencinin $5$ sınav notundan dördü $12,\\ 15,\\ 15,\\ 18$ olarak biliniyor. Beşinci not $x$'tir ve notların ortalaması $20$ olduğuna göre, $x$ kaçtır ve bu durumda ortalama mı yoksa medyan mı notları daha iyi temsil eder?",
      options: ["$x=20$; ortalama daha iyi temsil eder.", "$x=25$; medyan daha iyi temsil eder.", "$x=30$; ortalama daha iyi temsil eder.", "$x=40$; medyan ($15$) daha iyi temsil eder.", "$x=100$; ortalama daha iyi temsil eder."],
      correct: 3,
      solution: ["Ortalama koşulu: $\\dfrac{12+15+15+18+x}{5}=20$.", "$60+x=100\\Rightarrow x=40$.", "Sıralı veri: $12,15,15,18,40$; medyan (ortadaki) $15$'tir.", "$40$ bir uç değerdir ve ortalamayı yukarı çeker; notların çoğu $12$–$18$ arasındadır. Bu nedenle medyan ($15$) veriyi daha iyi temsil eder."],
      answer: "$x=40$; uç değer nedeniyle medyan ($15$) daha iyi temsil eder.",
    },
  ],
};

export default quiz;
