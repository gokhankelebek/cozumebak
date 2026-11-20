import type { TopicQuiz } from "./types";

// ucgende-yardimci-elemanlar-10 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "ucgende-yardimci-elemanlar-10",
  questions: [
    {
      id: "ucgende-yardimci-elemanlar-10-01",
      sekil: {
        aciklama: "ABC üçgeninde A köşesinden çizilen kenarortay BC'yi D noktasında kesiyor; BC = 26; BD bilinmiyor.",
        noktalar: { A: [9, 12], B: [0, 0], C: [26, 0], D: [13, 0] },
        cokgenler: [["A", "B", "C"]],
        dogrular: [{ p: ["A", "D"] }],
        kenarlar: [{ p: ["B", "D"], metin: "?", vurgu: true, ic: true }],
        olculer: [{ p: ["B", "C"], metin: "26" }],
        etiketYonu: { D: 45 },
      },
      difficulty: "Kolay",
      prompt: "$ABC$ üçgeninde $A$ köşesinden çizilen kenarortay $BC$ kenarını $D$ noktasında kesmektedir. $|BC|=26$ br ise $|BD|$ kaç br'dir?",
      options: ["$6{,}5$", "$12$", "$13$", "$13{,}5$", "$26$"],
      correct: 2,
      solution: ["Kenarortay, karşı kenarın orta noktasına gider; dolayısıyla $D$, $BC$'nin orta noktasıdır ve $|BD|=|DC|$.", "$|BD|=\\dfrac{|BC|}{2}=\\dfrac{26}{2}=13$ br."],
      answer: "$|BD|=13$ br.",
    },
    {
      id: "ucgende-yardimci-elemanlar-10-03",
      sekil: {
        aciklama: "Üçgende A köşesinden çizilen kenarortay AD = 21; G ağırlık merkezi; AG bilinmiyor.",
        noktalar: { A: [4, 11], B: [0, 0], C: [14, 0], D: [7, 0], G: [6.0, 3.667] },
        cokgenler: [["A", "B", "C"]],
        dogrular: [{ p: ["A", "D"] }],
        isaretli: ["G"],
        kenarlar: [{ p: ["A", "G"], metin: "?", vurgu: true }],
      },
      difficulty: "Orta",
      prompt: "Bir üçgende $A$ köşesinden çizilen kenarortayın uzunluğu $|AD|=21$ br'dir. Kenarortayların kesim noktası (ağırlık merkezi) $G$ ise $|AG|$ kaç br'dir?",
      options: ["$7$", "$10{,}5$", "$14$", "$16$", "$42$"],
      correct: 2,
      solution: ["Ağırlık merkezi her kenarortayı köşeden itibaren $2:1$ oranında böler; köşeye yakın parça $|AG|$ büyük parçadır.", "$|AG|=\\dfrac{2}{3}\\cdot|AD|=\\dfrac{2}{3}\\cdot 21=14$ br."],
      answer: "$|AG|=14$ br.",
    },
    {
      id: "ucgende-yardimci-elemanlar-10-04",
      sekil: {
        aciklama: "Dik açısı C'de olan ABC üçgeninde CA = 9, CB = 12; C'den hipotenüsün orta noktasına çizilen kenarortay bilinmiyor.",
        noktalar: { A: [0, 9], B: [12, 0], C: [0, 0], M: [6, 4.5] },
        cokgenler: [["A", "B", "C"]],
        dogrular: [{ p: ["C", "M"] }],
        dikler: [["A", "C", "B"]],
        esitler: [{ p: ["A", "M"] }, { p: ["M", "B"] }],
        kenarlar: [
          { p: ["C", "A"], metin: "9" },
          { p: ["C", "B"], metin: "12" },
          { p: ["C", "M"], metin: "?", vurgu: true },
        ],
        gizli: ["M"],
      },
      difficulty: "Zor",
      prompt: "Bir marangoz, dik açısı $C$ köşesinde olan dik üçgen biçiminde bir tahta parçası kesiyor. Dik kenarlar $|CA|=9$ cm ve $|CB|=12$ cm'dir. Marangoz, dik açının bulunduğu $C$ köşesinden hipotenüs $AB$'nin orta noktasına bir çita çakacaktır. Bu çita (hipotenüse ait kenarortay) kaç cm olur?",
      options: ["$4{,}5$", "$6$", "$7{,}5$", "$10{,}5$", "$15$"],
      correct: 2,
      solution: ["Önce hipotenüs: $|AB|=\\sqrt{9^2+12^2}=\\sqrt{81+144}=\\sqrt{225}=15$ cm.", "Dik üçgende hipotenüs, çevrel çemberin çapıdır; hipotenüsün orta noktası çevrel çember merkezidir ve üç köşeye eşit uzaklıktadır.", "Bu nedenle dik köşeden hipotenüsün orta noktasına çizilen kenarortay, hipotenüsün yarısına eşittir: $\\dfrac{15}{2}=7{,}5$ cm."],
      answer: "Çita $7{,}5$ cm'dir.",
    },
    {
      id: "ucgende-yardimci-elemanlar-10-05",
      difficulty: "Kolay",
      prompt: "Bir üçgende üç iç açıortay tek bir noktada kesişir. Bu kesim noktası aşağıdakilerden hangisidir?",
      options: ["İç teğet çemberin merkezi", "Ağırlık merkezi", "Diklik merkezi", "Çevrel çemberin merkezi", "Kenarların orta noktası"],
      correct: 0,
      solution: ["Kenarortaylar ağırlık merkezinde, yükseklikler diklik merkezinde, kenar orta dikmeler çevrel çemberin merkezinde kesişir.", "Üç iç açıortay ise iç teğet çemberin merkezinde kesişir.", "Bu nokta üçgenin üç kenarına da eşit uzaklıktadır."],
      answer: "İç teğet çemberin merkezi.",
    },
    {
      id: "ucgende-yardimci-elemanlar-10-06",
      sekil: {
        aciklama: "ABC üçgeninde A açısının açıortayı BC'yi D'de kesiyor; AB = 15, AC = 10, DC = 8; BC bilinmiyor.",
        noktalar: { A: [13.125, 7.262], B: [0, 0], C: [20, 0], D: [12, 0] },
        cokgenler: [["A", "B", "C"]],
        dogrular: [{ p: ["A", "D"] }],
        acilar: [
          { p: ["B", "A", "D"], yaricap: 24 },
          { p: ["D", "A", "C"], yaricap: 24 },
        ],
        kenarlar: [
          { p: ["A", "B"], metin: "15" },
          { p: ["A", "C"], metin: "10" },
          { p: ["D", "C"], metin: "8", ic: true },
        ],
        olculer: [{ p: ["B", "C"], metin: "?", vurgu: true }],
        etiketYonu: { D: 125 },
      },
      difficulty: "Orta",
      prompt: "$ABC$ üçgeninde $A$ açısının açıortayı $BC$'yi $D$'de kesiyor. $|AB|=15$, $|AC|=10$ ve $|DC|=8$ br ise $|BC|$ kaç br'dir?",
      options: ["$13{,}5$", "$18$", "$20$", "$21$", "$24$"],
      correct: 2,
      solution: ["İç açıortay bağıntısı: $\\dfrac{|BD|}{|DC|}=\\dfrac{|AB|}{|AC|}=\\dfrac{15}{10}=\\dfrac{3}{2}$.", "$\\dfrac{|BD|}{8}=\\dfrac{3}{2}\\Rightarrow |BD|=\\dfrac{3\\cdot 8}{2}=12$ br.", "$|BC|=|BD|+|DC|=12+8=20$ br."],
      answer: "$|BC|=20$ br.",
    },
  ],
};

export default quiz;
