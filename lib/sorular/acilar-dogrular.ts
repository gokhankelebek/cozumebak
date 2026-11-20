import type { TopicQuiz } from "./types";

// acilar-dogrular — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "acilar-dogrular",
  questions: [
    {
      id: "acilar-dogrular-01",
      difficulty: "Kolay",
      prompt: "$d_1 \\parallel d_2$ paralel doğruları bir kesenle kesiliyor. Bir iç ters açının ölçüsü $(4x-5)°$, karşısındaki yöndeş açının ölçüsü $(2x+35)°$'dir. Buna göre $x$ kaçtır?",
      options: ["$15$", "$18$", "$20$", "$22$", "$25$"],
      correct: 2,
      solution: ["Paralel doğrularda iç ters açı ile yöndeş açı **eşittir** ($Z$ ve $F$ kuralı).", "$(4x-5)=(2x+35)\\Rightarrow 2x=40\\Rightarrow x=20$.", "Kontrol: $4\\cdot 20-5=75°$ ve $2\\cdot 20+35=75°$; eşitlik sağlanır."],
      answer: "$20$",
    },
    {
      id: "acilar-dogrular-02",
      sekil: {
        aciklama: "Kesişen iki doğru; komşu iki açı (5a − 12) ve (3a + 48) derece.",
        noktalar: { L: [-6, 0], R: [6, 0], O: [0, 0], P: [-1.247, -5.869], Q: [1.247, 5.869] },
        dogrular: [{ p: ["L", "R"] }, { p: ["P", "Q"] }],
        acilar: [
          { p: ["R", "O", "Q"], metin: "(5a − 12)°", yaricap: 30 },
          { p: ["Q", "O", "L"], metin: "(3a + 48)°", yaricap: 24 },
        ],
        gizli: ["L", "R", "O", "P", "Q"],
      },
      difficulty: "Kolay",
      prompt: "Kesişen iki doğru oluşturuyor. Bir ters açının ölçüsü $(5a-12)°$, bu açıya komşu (bütünler) açının ölçüsü $(3a+48)°$'dir. Buna göre $a$ kaçtır?",
      options: ["$12$", "$15$", "$18$", "$21$", "$24$"],
      correct: 2,
      solution: ["Komşu açılar bütünlerdir: $(5a-12)+(3a+48)=180$.", "$8a+36=180\\Rightarrow 8a=144\\Rightarrow a=18$.", "Ters açı $5\\cdot 18-12=78°$; komşu $3\\cdot 18+48=102°$; toplam $180°$."],
      answer: "$18$",
    },
    {
      id: "acilar-dogrular-03",
      difficulty: "Orta",
      prompt: "Tümler iki açının ölçüleri sırasıyla $(n+12)°$ ve $(3n-6)°$'dir. Buna göre büyük açının ölçüsü kaç derecedir?",
      options: ["$33$", "$45$", "$51$", "$57$", "$63$"],
      correct: 3,
      solution: ["Tümler toplamı: $(n+12)+(3n-6)=90$.", "$4n+6=90\\Rightarrow 4n=84\\Rightarrow n=21$.", "Açılar $33°$ ve $57°$; büyük olan $57°$."],
      answer: "$57$",
    },
    {
      id: "acilar-dogrular-04",
      sekil: {
        aciklama: "Dik açının içinden geçen bir ışın, dik açıyı x ve 4x ölçülü iki açıya ayırıyor.",
        noktalar: { O: [0, 0], A: [10, 0], B: [0, 10], R: [9.511, 3.09] },
        dogrular: [{ p: ["O", "A"] }, { p: ["O", "B"] }, { p: ["O", "R"] }],
        dikler: [["A", "O", "B"]],
        acilar: [
          { p: ["A", "O", "R"], metin: "x", yaricap: 52 },
          { p: ["R", "O", "B"], metin: "4x", yaricap: 34 },
        ],
        gizli: ["O", "A", "B", "R"],
      },
      difficulty: "Orta",
      prompt: "Bir tasarımcı, masaüstüne L şeklinde (dik açılı) iki çubuk yapıştırıyor. Bu dik açının içine üçüncü bir çubuk yerleştirip dik açıyı iki parçaya ayırıyor; oluşan iki açıdan biri diğerinin $4$ katı oluyor. Buna göre büyük olan açının ölçüsü kaç derecedir?",
      options: ["$18$", "$36$", "$54$", "$60$", "$72$"],
      correct: 4,
      solution: ["İki açı tümlerdir (dik açıyı paylaşıyorlar): $x+4x=90°$.", "$5x=90°\\Rightarrow x=18°$; büyük açı $4x=72°$.", "Çeldirici: $90°/5=18°$ küçük açıdır; soru **büyük** olanı istiyor."],
      answer: "$72$",
    },
    {
      id: "acilar-dogrular-05",
      sekil: {
        aciklama: "Paralel d1 ve d2 doğrularını eğik bir kesen kesiyor; kesenin d1 ile yaptığı açı x.",
        noktalar: { L1: [-4, 4], d1: [8, 4], L2: [-4, 0], d2: [8, 0], P1: [2, 4], P2: [0.544, 0], Tu: [2.889, 6.443], Ta: [-0.345, -2.443] },
        dogrular: [{ p: ["L1", "d1"] }, { p: ["L2", "d2"] }, { p: ["Ta", "Tu"] }],
        acilar: [{ p: ["d1", "P1", "Tu"], metin: "x", vurgu: true }],
        gizli: ["L1", "L2", "P1", "P2", "Tu", "Ta"],
      },
      difficulty: "Orta",
      prompt: "Bir yol kavşağında düz giden bir cadde ($d_1$) ile ona paralel uzanan bir yaya yolu ($d_2$), eğik bir ara sokakla (kesen) kesiliyor. Ara sokağın cadde ile yaptığı yöndeş açı, kendisinin bütünlerinden $40°$ küçüktür. Buna göre bu yöndeş açının ölçüsü kaç derecedir?",
      options: ["$60$", "$70$", "$80$", "$100$", "$110$"],
      correct: 1,
      solution: ["Açıya $x$ diyelim; bütünleri $180°-x$'tir.", "Koşulu kur: $x=(180°-x)-40°$.", "Düzenle: $x=140°-x\\Rightarrow 2x=140°\\Rightarrow x=70°$.", "Çeldirici: bütünleri $180°-70°=110°$; soru açının kendisini istiyor."],
      answer: "$70$",
    },
    {
      id: "acilar-dogrular-06",
      difficulty: "Zor",
      prompt: "Bir saatin akrep ve yelkovanı saat tam $3{:}00$'ı gösterirken aralarındaki açı $90°$'dir. Bir öğrenci, \"bu açının tümleri ile bütünleri toplamı kaç eder?\" diye soruyor. Buna göre bu toplam kaç derecedir?",
      options: ["$90$", "$180$", "$200$", "$270$", "$360$"],
      correct: 0,
      solution: ["Açı $90°$; tümleri $90°-90°=0°$.", "Bütünleri $180°-90°=90°$.", "Toplam: $0°+90°=90°$.", "Çeldirici: $90°+180°=270°$ (formülleri ezberden toplamak) yanlıştır; tümler/bütünler **bu açıya göre** hesaplanır."],
      answer: "$90$",
    },
  ],
};

export default quiz;
