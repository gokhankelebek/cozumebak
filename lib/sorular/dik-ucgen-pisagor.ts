import type { TopicQuiz } from "./types";

// dik-ucgen-pisagor — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "dik-ucgen-pisagor",
  questions: [
    {
      id: "dik-ucgen-pisagor-01",
      sekil: {
        aciklama: "Dik kenarları 9 ve 12 olan dik üçgen; hipotenüs bilinmiyor.",
        noktalar: { A: [0, 9], B: [0, 0], C: [12, 0] },
        cokgenler: [["A", "B", "C"]],
        dikler: [["A", "B", "C"]],
        kenarlar: [
          { p: ["A", "B"], metin: "9" },
          { p: ["B", "C"], metin: "12" },
          { p: ["A", "C"], metin: "?", vurgu: true },
        ],
        gizli: ["A", "B", "C"],
      },
      difficulty: "Kolay",
      prompt: "Dik kenarları $9$ ve $12$ birim olan bir dik üçgenin hipotenüsü kaç birimdir?",
      options: ["$13$", "$14$", "$15$", "$16$", "$17$"],
      correct: 2,
      solution: ["Pisagor: $c^{2}=9^{2}+12^{2}=81+144=225$.", "$c=\\sqrt{225}=15$ ($3$-$4$-$5$ üçlüsünün $3$ katı)."],
      answer: "$15$",
    },
    {
      id: "dik-ucgen-pisagor-02",
      sekil: {
        aciklama: "30-60-90 dik üçgeni; 30 derecenin karşısındaki dik kenar 5, hipotenüs bilinmiyor.",
        noktalar: { A: [0, 5], B: [0, 0], C: [8.66, 0] },
        cokgenler: [["A", "B", "C"]],
        dikler: [["A", "B", "C"]],
        acilar: [
          { p: ["B", "C", "A"], metin: "30°" },
          { p: ["C", "A", "B"], metin: "60°" },
        ],
        kenarlar: [
          { p: ["A", "B"], metin: "5" },
          { p: ["A", "C"], metin: "?", vurgu: true },
        ],
        gizli: ["A", "B", "C"],
      },
      difficulty: "Kolay",
      prompt: "$30°$-$60°$-$90°$ özel dik üçgeninde $30°$'nin karşısındaki dik kenar $5$ birimdir. Buna göre hipotenüs kaç birimdir?",
      options: ["$5\\sqrt{2}$", "$5\\sqrt{3}$", "$8$", "$10$", "$15$"],
      correct: 3,
      solution: ["$30°$ karşısı en kısa kenar $x=5$.", "Hipotenüs daima $2x$'tir: $2\\cdot 5=10$."],
      answer: "$10$",
    },
    {
      id: "dik-ucgen-pisagor-03",
      sekil: {
        aciklama: "Dik kenarları 6 ve 8 olan dik üçgen.",
        noktalar: { A: [0, 6], B: [0, 0], C: [8, 0] },
        cokgenler: [["A", "B", "C"]],
        dikler: [["A", "B", "C"]],
        kenarlar: [
          { p: ["A", "B"], metin: "6" },
          { p: ["B", "C"], metin: "8" },
        ],
        gizli: ["A", "B", "C"],
      },
      difficulty: "Kolay",
      prompt: "Dik kenarları $6$ ve $8$ birim olan bir dik üçgenin alanı kaç birim karedir?",
      options: ["$20$", "$22$", "$24$", "$26$", "$30$"],
      correct: 2,
      solution: ["Dik üçgende alan: $A=\\dfrac{6\\cdot 8}{2}=24$.", "(Hipotenüs $10$ olsa da alan dik kenarlarla hesaplanır.)"],
      answer: "$24$",
    },
    {
      id: "dik-ucgen-pisagor-04",
      sekil: {
        aciklama: "Duvara dayalı 25 metrelik merdivenin iki konumu: alt ucu duvardan 7 m ve 15 m uzakta; tepe noktasının ne kadar alçaldığı bilinmiyor.",
        noktalar: { W: [0, 26], O: [0, 0], G: [17, 0], T1: [0, 24], F1: [7, 0], T2: [0, 20], F2: [15, 0] },
        dogrular: [
          { p: ["W", "O"] },
          { p: ["O", "G"] },
          { p: ["T1", "F1"] },
          { p: ["T2", "F2"], kesik: true },
        ],
        dikler: [["W", "O", "G"]],
        taralar: [{ p: ["O", "G"] }],
        isaretli: ["T1", "T2"],
        kenarlar: [
          { p: ["T1", "F1"], metin: "25" },
          { p: ["T2", "F2"], metin: "25" },
          { p: ["O", "F1"], metin: "7", ic: true },
          { p: ["O", "F2"], metin: "15" },
          { p: ["T2", "T1"], metin: "?", vurgu: true },
        ],
        gizli: ["W", "O", "G", "T1", "F1", "T2", "F2"],
      },
      difficulty: "Zor",
      prompt: "Bir duvara dayalı $25$ m'lik bir merdivenin alt ucu, duvarın dibinden $7$ m uzaktadır. Merdivenin alt ucu duvardan uzaklaştırılarak duvarın dibinden $15$ m uzağa çekiliyor (merdiven boyu yine $25$ m). Buna göre merdivenin duvara değdiği nokta kaç metre alçalmıştır?",
      options: ["$2$", "$3$", "$4$", "$5$", "$6$"],
      correct: 2,
      solution: ["İlk konum: $h_1^2=25^2-7^2=625-49=576\\Rightarrow h_1=24$ ($7$-$24$-$25$).", "İkinci konum: $h_2^2=25^2-15^2=625-225=400\\Rightarrow h_2=20$ ($15$-$20$-$25$, yani $3$-$4$-$5$'in $5$ katı).", "Alçalma: $24-20=4$ m.", "Çeldirici: alt ucun değişimi $15-7=8$ m'dir; soru yatay değil **dikey** değişimi soruyor."],
      answer: "$4$ m",
    },
    {
      id: "dik-ucgen-pisagor-06",
      sekil: {
        aciklama: "Dik üçgende dik açıdan hipotenüse inen yükseklik, hipotenüsü 9 ve 16 metrelik parçalara ayırıyor; yükseklik bilinmiyor.",
        noktalar: { A: [0, 0], B: [9, 12], C: [25, 0], H: [9, 0] },
        cokgenler: [["A", "B", "C"]],
        dogrular: [{ p: ["B", "H"] }],
        dikler: [["A", "B", "C"], ["B", "H", "C"]],
        kenarlar: [
          { p: ["A", "H"], metin: "9" },
          { p: ["H", "C"], metin: "16" },
          { p: ["B", "H"], metin: "?", vurgu: true },
        ],
        gizli: ["A", "B", "C", "H"],
      },
      difficulty: "Orta",
      prompt: "Bir dik üçgen biçimli rampada, dik açıdan hipotenüse (zemine) inen destek direği bir yükseklik oluşturuyor. Bu direk hipotenüsü $9$ m ve $16$ m'lik iki parçaya ayırıyor. Buna göre destek direğinin (yüksekliğin) boyu kaç metredir?",
      options: ["$10$", "$11$", "$12$", "$13$", "$14$"],
      correct: 2,
      solution: ["Öklid: $h^2=9\\cdot 16=144$.", "$h=\\sqrt{144}=12$ m.", "Çeldirici: $9+16=25$'in karekökü $5$ alıp $h=5$ demek yanlış; çarpımın kareköküdür."],
      answer: "$12$ m",
    },
  ],
};

export default quiz;
