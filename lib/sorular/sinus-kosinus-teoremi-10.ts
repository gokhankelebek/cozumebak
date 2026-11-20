import type { TopicQuiz } from "./types";

// sinus-kosinus-teoremi-10 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "sinus-kosinus-teoremi-10",
  questions: [
    {
      id: "sinus-kosinus-teoremi-10-01",
      sekil: {
        aciklama: "C açısı dik olan ABC üçgeni; A açısı 45 derece, BC = 6; AB kenarı c bilinmiyor.",
        noktalar: { A: [6, 0], B: [0, 6], C: [0, 0] },
        cokgenler: [["A", "B", "C"]],
        dikler: [["A", "C", "B"]],
        acilar: [{ p: ["C", "A", "B"], metin: "45°" }],
        kenarlar: [
          { p: ["B", "C"], metin: "6" },
          { p: ["A", "B"], metin: "?", vurgu: true },
        ],
      },
      difficulty: "Kolay",
      prompt: "Bir üçgende $\\widehat{A}=45°$, $a=6$ ve $\\widehat{C}=90°$ ise $c$ kenarı kaçtır? ($\\sin 45°=\\dfrac{\\sqrt2}{2}$, $\\sin 90°=1$.)",
      options: ["$3\\sqrt2$", "$6$", "$6\\sqrt2$", "$12$", "$3$"],
      correct: 2,
      solution: ["Kenar-karşı açı çifti ($a$, $\\widehat{A}$) verildiğinden sinüs teoremini kur: $\\dfrac{a}{\\sin A}=\\dfrac{c}{\\sin C}$.", "$\\dfrac{6}{\\sin 45°}=\\dfrac{c}{\\sin 90°}\\Rightarrow \\dfrac{6}{\\sqrt2/2}=\\dfrac{c}{1}$.", "$\\dfrac{6}{\\sqrt2/2}=\\dfrac{12}{\\sqrt2}=\\dfrac{12}{\\sqrt2}\\cdot\\dfrac{\\sqrt2}{\\sqrt2}=6\\sqrt2$.", "Dolayısıyla $c=6\\sqrt2$."],
      answer: "$c=6\\sqrt2$.",
    },
    {
      id: "sinus-kosinus-teoremi-10-02",
      sekil: {
        aciklama: "A açısı dik olan ABC üçgeni; AC = 9, AB = 12; BC kenarı bilinmiyor.",
        noktalar: { A: [0, 0], B: [12, 0], C: [0, 9] },
        cokgenler: [["A", "B", "C"]],
        dikler: [["B", "A", "C"]],
        kenarlar: [
          { p: ["A", "B"], metin: "12" },
          { p: ["A", "C"], metin: "9" },
          { p: ["B", "C"], metin: "?", vurgu: true },
        ],
      },
      difficulty: "Kolay",
      prompt: "Bir üçgende $b=9$, $c=12$ ve aralarındaki açı $\\widehat{A}=90°$ ise kosinüs teoremiyle $a$ kenarı kaçtır? ($\\cos 90°=0$.)",
      options: ["$225$", "$21$", "$15$", "$\\sqrt{63}$", "$\\sqrt{105}$"],
      correct: 2,
      solution: ["Kosinüs teoremi: $a^2=b^2+c^2-2bc\\cos A$.", "$a^2=9^2+12^2-2\\cdot 9\\cdot 12\\cdot\\cos 90°=81+144-0$.", "$a^2=225\\Rightarrow a=\\sqrt{225}=15$.", "$A=90°$ olduğundan sonuç Pisagor ile aynıdır."],
      answer: "$a=15$.",
    },
    {
      id: "sinus-kosinus-teoremi-10-03",
      sekil: {
        aciklama: "İki kenarı 6 ve 10, aralarındaki açı 120 derece olan üçgen; üçüncü kenar bilinmiyor.",
        noktalar: { A: [0, 0], B: [10, 0], C: [-3.0, 5.196] },
        cokgenler: [["A", "B", "C"]],
        acilar: [{ p: ["B", "A", "C"], metin: "120°" }],
        kenarlar: [
          { p: ["A", "B"], metin: "10" },
          { p: ["A", "C"], metin: "6" },
          { p: ["B", "C"], metin: "?", vurgu: true },
        ],
        gizli: ["A", "B", "C"],
      },
      difficulty: "Orta",
      prompt: "İki kenarı $6$ ve $10$, aralarındaki açısı $120°$ olan bir üçgenin üçüncü kenarı kaçtır? ($\\cos 120°=-\\dfrac12$.)",
      options: ["$14$", "$\\sqrt{76}$", "$196$", "$2\\sqrt{34}$", "$16$"],
      correct: 0,
      solution: ["Kosinüs teoremi: $a^2=b^2+c^2-2bc\\cos A$, $b=6$, $c=10$, $A=120°$.", "$a^2=6^2+10^2-2\\cdot 6\\cdot 10\\cdot\\left(-\\dfrac12\\right)=36+100+60$.", "$\\cos 120°$ negatif olduğu için $-2bc\\cos A$ terimi artıya döner: $a^2=196$.", "$a=\\sqrt{196}=14$."],
      answer: "$a=14$.",
    },
    {
      id: "sinus-kosinus-teoremi-10-04",
      sekil: {
        aciklama: "Kenarları a = 6, b = 4, c = 5 olan ABC üçgeni; A açısı işaretli.",
        noktalar: { A: [3.75, 3.307], B: [0, 0], C: [6, 0] },
        cokgenler: [["A", "B", "C"]],
        acilar: [{ p: ["B", "A", "C"], vurgu: true }],
        kenarlar: [
          { p: ["B", "C"], metin: "6" },
          { p: ["C", "A"], metin: "4" },
          { p: ["A", "B"], metin: "5" },
        ],
      },
      difficulty: "Orta",
      prompt: "Kenarları $a=6$, $b=4$, $c=5$ olan bir üçgende $a$ kenarının karşısındaki $\\widehat{A}$ açısının kosinüsü kaçtır?",
      options: ["$-\\dfrac18$", "$\\dfrac16$", "$\\dfrac18$", "$\\dfrac14$", "$\\dfrac{5}{41}$"],
      correct: 2,
      solution: ["Kosinüs teoremini $\\widehat{A}$ için yaz: $a^2=b^2+c^2-2bc\\cos A$.", "$6^2=4^2+5^2-2\\cdot 4\\cdot 5\\cos A\\Rightarrow 36=16+25-40\\cos A$.", "$36=41-40\\cos A\\Rightarrow 40\\cos A=41-36=5$.", "$\\cos A=\\dfrac{5}{40}=\\dfrac18$."],
      answer: "$\\cos A=\\dfrac18$.",
    },
    {
      id: "sinus-kosinus-teoremi-10-05",
      difficulty: "Orta",
      prompt: "Bir üçgende $\\dfrac{a}{\\sin A}=12$ ve $\\sin B=\\dfrac13$ ise $b$ kenarı kaçtır?",
      options: ["$36$", "$4$", "$6$", "$3$", "$9$"],
      correct: 1,
      solution: ["Sinüs teoreminde tüm oranlar eşittir: $\\dfrac{b}{\\sin B}=\\dfrac{a}{\\sin A}=12$.", "Buradan $b=12\\cdot\\sin B$.", "$b=12\\cdot\\dfrac13=4$."],
      answer: "$b=4$.",
    },
    {
      id: "sinus-kosinus-teoremi-10-06",
      sekil: {
        aciklama: "Kavşaktan aralarında 60 derece açı olan iki yol; birinde 8 km, diğerinde 5 km gidiliyor; iki nokta arasındaki uzaklık bilinmiyor.",
        noktalar: { K: [0, 0], P: [8, 0], Q: [2.5, 4.33] },
        dogrular: [{ p: ["K", "P"] }, { p: ["K", "Q"] }, { p: ["P", "Q"], kesik: true }],
        isaretli: ["K", "P", "Q"],
        acilar: [{ p: ["P", "K", "Q"], metin: "60°" }],
        kenarlar: [
          { p: ["K", "P"], metin: "8" },
          { p: ["K", "Q"], metin: "5" },
          { p: ["P", "Q"], metin: "?", vurgu: true },
        ],
        gizli: ["K", "P", "Q"],
      },
      difficulty: "Zor",
      prompt: "Bir kavşaktan çıkan iki düz yol aralarında $60°$ açı yapmaktadır. Bir araç birinci yolda $8$ km, ikinci yolda ise $5$ km ilerlemiştir. Araçların vardığı iki nokta arasındaki kuş uçuşu uzaklık kaç km'dir? ($\\cos 60°=\\dfrac12$.)",
      options: ["$13$", "$\\sqrt{129}$", "$\\sqrt{89}$", "$7$", "$\\sqrt{39}$"],
      correct: 3,
      solution: ["İki kenar ($8$ ve $5$) ve aralarındaki açı ($60°$) verildiğinden kosinüs teoremi kullanılır.", "$a^2=8^2+5^2-2\\cdot 8\\cdot 5\\cos 60°=64+25-80\\cdot\\dfrac12$.", "$a^2=89-40=49$.", "$a=\\sqrt{49}=7$ km."],
      answer: "İki nokta arası $7$ km.",
    },
  ],
};

export default quiz;
