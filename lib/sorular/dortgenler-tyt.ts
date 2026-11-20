import type { TopicQuiz } from "./types";

// dortgenler-tyt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "dortgenler-tyt",
  questions: [
    {
      id: "dortgenler-tyt-01",
      sekil: {
        aciklama: "Tabanları 8 ve 12, yüksekliği 5 olan yamuk.",
        noktalar: { A: [2, 5], B: [10, 5], C: [12, 0], D: [0, 0], H: [2, 0] },
        cokgenler: [["A", "B", "C", "D"]],
        dogrular: [{ p: ["A", "H"], kesik: true }],
        dikler: [["A", "H", "C"]],
        kenarlar: [
          { p: ["A", "B"], metin: "8" },
          { p: ["D", "C"], metin: "12" },
          { p: ["A", "H"], metin: "5", ic: true },
        ],
        gizli: ["A", "B", "C", "D", "H"],
      },
      difficulty: "Kolay",
      prompt: "Tabanları $8$ ve $12$ birim, yüksekliği $5$ birim olan bir yamuğun alanı kaç birim karedir?",
      options: ["$40$", "$45$", "$48$", "$50$", "$60$"],
      correct: 3,
      solution: ["$A=\\dfrac{(a+c)}{2}\\cdot h=\\dfrac{8+12}{2}\\cdot 5=10\\cdot 5=50$."],
      answer: "$50$",
    },
    {
      id: "dortgenler-tyt-02",
      sekil: {
        aciklama: "Bir kenarı 5, köşegeni 13 olan dikdörtgen; diğer kenar bilinmiyor.",
        noktalar: { A: [0, 5], B: [12, 5], C: [12, 0], D: [0, 0] },
        cokgenler: [["A", "B", "C", "D"]],
        dogrular: [{ p: ["A", "C"] }],
        dikler: [["A", "D", "C"]],
        kenarlar: [
          { p: ["A", "D"], metin: "5" },
          { p: ["D", "C"], metin: "?", vurgu: true },
          { p: ["A", "C"], metin: "13" },
        ],
        gizli: ["A", "B", "C", "D"],
      },
      difficulty: "Kolay",
      prompt: "Bir dikdörtgenin bir kenarı $5$ birim, köşegen uzunluğu $13$ birimdir. Buna göre diğer kenar kaç birimdir?",
      options: ["$10$", "$11$", "$12$", "$13$", "$14$"],
      correct: 2,
      solution: ["Pisagor: $b^{2}=13^{2}-5^{2}=169-25=144$.", "$b=12$ ($5$-$12$-$13$ üçlüsü)."],
      answer: "$12$",
    },
    {
      id: "dortgenler-tyt-03",
      difficulty: "Orta",
      prompt: "Bir düzgün çokgenin bir iç açısının ölçüsü $135°$'dir. Buna göre çokgenin kenar sayısı kaçtır?",
      options: ["$6$", "$7$", "$8$", "$9$", "$10$"],
      correct: 2,
      solution: ["Dış açı: $180°-135°=45°$.", "$n=\\dfrac{360°}{45°}=8$."],
      answer: "$8$",
    },
    {
      id: "dortgenler-tyt-04",
      sekil: {
        aciklama: "Paralel kenarları 30 m ve 50 m, aralarındaki dik uzaklık 24 m olan yamuk biçimli park.",
        noktalar: { A: [10, 24], B: [40, 24], C: [50, 0], D: [0, 0], H: [10, 0] },
        cokgenler: [["A", "B", "C", "D"]],
        dogrular: [{ p: ["A", "H"], kesik: true }],
        dikler: [["A", "H", "C"]],
        kenarlar: [
          { p: ["A", "B"], metin: "30" },
          { p: ["D", "C"], metin: "50" },
          { p: ["A", "H"], metin: "24", ic: true },
        ],
        gizli: ["A", "B", "C", "D", "H"],
      },
      difficulty: "Orta",
      prompt: "Bir park, paralel iki kenarı $30$ m ve $50$ m, bu kenarlar arası dik uzaklığı $24$ m olan yamuk biçiminde bir çim alandır. Çim ekimi metrekare başına $3$ TL'dir. Buna göre tüm alanın çimlendirilmesi kaç TL tutar?",
      options: ["$960$", "$1440$", "$2160$", "$2880$", "$3600$"],
      correct: 3,
      solution: ["Yamuk alanı: $A=\\dfrac{30+50}{2}\\cdot 24=40\\cdot 24=960$ m$^2$.", "Maliyet: $960\\cdot 3=2880$ TL.", "Çeldirici: $960$ TL alanı para sanmaktır; metrekare maliyetiyle çarpılmalı."],
      answer: "$2880$",
    },
    {
      id: "dortgenler-tyt-05",
      sekil: {
        aciklama: "Köşegenleri 16 m ve 12 m olan eşkenar dörtgen; köşegenler dik kesişiyor.",
        noktalar: { A: [-8, 0], B: [0, 6], C: [8, 0], D: [0, -6], O: [0, 0] },
        cokgenler: [["A", "B", "C", "D"]],
        dogrular: [{ p: ["A", "C"] }, { p: ["B", "D"] }],
        dikler: [["C", "O", "B"]],
        esitler: [{ p: ["A", "B"] }, { p: ["B", "C"] }, { p: ["C", "D"] }, { p: ["D", "A"] }],
        kenarlar: [
          { p: ["A", "C"], metin: "16", konum: 0.25 },
          { p: ["B", "D"], metin: "12", konum: 0.25 },
        ],
        gizli: ["A", "B", "C", "D", "O"],
      },
      difficulty: "Orta",
      prompt: "Bir bahçıvan, köşegenleri $16$ m ve $12$ m olan eşkenar dörtgen biçimli bir tarhın **çevresine** çit çekecektir. Buna göre gereken çit uzunluğu kaç metredir?",
      options: ["$20$", "$28$", "$40$", "$48$", "$56$"],
      correct: 2,
      solution: ["Yarım köşegenler $8$ m ve $6$ m; kenar $a=\\sqrt{8^2+6^2}=\\sqrt{100}=10$ m ($6$-$8$-$10$).", "Eşkenar dörtgenin dört kenarı eşit: çevre $=4\\cdot 10=40$ m.", "Çeldirici: köşegenleri toplayıp ($16+12=28$) çevre sanmak yanlıştır."],
      answer: "$40$",
    },
    {
      id: "dortgenler-tyt-06",
      difficulty: "Zor",
      prompt: "Bir mozaik desende düzgün bir çokgenin bir köşesinde, çokgenin **bir iç açısı** ile **bir dış açısı** yan yana geliyor. İç açının dış açıya oranı $4$ ise, bu düzgün çokgenin kenar sayısı kaçtır?",
      options: ["$8$", "$9$", "$10$", "$12$", "$15$"],
      correct: 2,
      solution: ["İç $+$ dış $=180°$ ve iç $=4\\cdot$ dış: $4d+d=180°\\Rightarrow 5d=180°\\Rightarrow d=36°$.", "Kenar sayısı: $n=\\dfrac{360°}{36°}=10$.", "Çeldirici: iç açı $144°$'yi doğrudan $\\dfrac{360}{144}$ yapmak hatalıdır; kenar sayısı **dış** açıdan bulunur."],
      answer: "$10$",
    },
  ],
};

export default quiz;
