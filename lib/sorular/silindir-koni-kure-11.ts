import type { TopicQuiz } from "./types";

// silindir-koni-kure-11 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "silindir-koni-kure-11",
  questions: [
    {
      id: "silindir-koni-kure-11-01",
      sekil: {
        aciklama: "Taban yarıçapı 4 cm, yüksekliği 6 cm olan dik dairesel silindir.",
        noktalar: { O: [0, 0], O2: [0, 6], L: [-4, 0], R: [4, 0], L2: [-4, 6], R2: [4, 6] },
        elipsler: [{ merkez: "O", rx: 4, ry: 1.44, arkaKesik: true }, { merkez: "O2", rx: 4, ry: 1.44 }],
        dogrular: [{ p: ["L", "L2"] }, { p: ["R", "R2"] }, { p: ["O2", "R2"] }],
        isaretli: ["O2"],
        kenarlar: [
          { p: ["O2", "R2"], metin: "4" },
          { p: ["R", "R2"], metin: "6" },
        ],
        gizli: ["O", "O2", "L", "R", "L2", "R2"],
      },
      difficulty: "Kolay",
      prompt: "Taban yarıçapı $4\\,\\text{cm}$, yüksekliği $6\\,\\text{cm}$ olan dik dairesel silindirin hacmi kaç $\\text{cm}^3$'tür? ($\\pi$ cinsinden)",
      options: ["$24\\pi$", "$48\\pi$", "$96\\pi$", "$144\\pi$", "$192\\pi$"],
      correct: 2,
      solution: ["$V=\\pi r^2 h$ formülünü kullan.", "Taban alanı: $\\pi r^2=\\pi\\cdot 4^2=16\\pi\\ \\text{cm}^2$.", "Hacim: $V=16\\pi\\cdot 6=96\\pi\\ \\text{cm}^3$."],
      answer: "$96\\pi\\ \\text{cm}^3$.",
    },
    {
      id: "silindir-koni-kure-11-02",
      sekil: {
        aciklama: "Taban yarıçapı 8 cm, yüksekliği 6 cm olan dik koni.",
        noktalar: { O: [0, 0], T: [0, 6], L: [-8, 0], R: [8, 0] },
        elipsler: [{ merkez: "O", rx: 8, ry: 2.4, arkaKesik: true, tepe: "T" }],
        dogrular: [{ p: ["T", "O"], kesik: true }, { p: ["O", "R"], kesik: true }],
        dikler: [["T", "O", "R"]],
        isaretli: ["O"],
        kenarlar: [
          { p: ["O", "R"], metin: "8" },
          { p: ["T", "O"], metin: "6", ic: true },
        ],
        gizli: ["O", "T", "L", "R"],
      },
      difficulty: "Orta",
      prompt: "Taban yarıçapı $8\\,\\text{cm}$, yüksekliği $6\\,\\text{cm}$ olan dik koninin yüzey alanı kaç $\\text{cm}^2$'dir? ($\\pi$ cinsinden)",
      options: ["$112\\pi$", "$128\\pi$", "$144\\pi$", "$160\\pi$", "$208\\pi$"],
      correct: 2,
      solution: ["Önce eğik yükseklik: $\\ell=\\sqrt{r^2+h^2}=\\sqrt{8^2+6^2}=\\sqrt{64+36}=\\sqrt{100}=10\\ \\text{cm}$.", "Taban: $\\pi r^2=\\pi\\cdot 64=64\\pi\\ \\text{cm}^2$.", "Yan yüzey: $\\pi r\\ell=\\pi\\cdot 8\\cdot 10=80\\pi\\ \\text{cm}^2$.", "Toplam: $A=64\\pi+80\\pi=144\\pi\\ \\text{cm}^2$."],
      answer: "$144\\pi\\ \\text{cm}^2$.",
    },
    {
      id: "silindir-koni-kure-11-03",
      difficulty: "Orta",
      prompt: "Yüzey alanı $64\\pi\\,\\text{cm}^2$ olan bir kürenin hacmi kaç $\\text{cm}^3$'tür? ($\\pi$ cinsinden)",
      options: ["$\\dfrac{256}{3}\\pi$", "$\\dfrac{500}{3}\\pi$", "$36\\pi$", "$256\\pi$", "$\\dfrac{2048}{3}\\pi$"],
      correct: 0,
      solution: ["Yüzey alanından yarıçapı bul: $A=4\\pi r^2=64\\pi\\Rightarrow r^2=16\\Rightarrow r=4\\ \\text{cm}$.", "Hacim: $V=\\dfrac{4}{3}\\pi r^3=\\dfrac{4}{3}\\pi\\cdot 4^3=\\dfrac{4}{3}\\pi\\cdot 64=\\dfrac{256}{3}\\pi\\ \\text{cm}^3$."],
      answer: "$\\dfrac{256}{3}\\pi\\ \\text{cm}^3$.",
    },
    {
      id: "silindir-koni-kure-11-04",
      sekil: {
        aciklama: "Eğik yüksekliği 10 cm, taban yarıçapı 6 cm olan dik koni.",
        noktalar: { O: [0, 0], T: [0, 8], L: [-6, 0], R: [6, 0] },
        elipsler: [{ merkez: "O", rx: 6, ry: 1.8, arkaKesik: true, tepe: "T" }],
        dogrular: [{ p: ["T", "O"], kesik: true }, { p: ["O", "R"], kesik: true }],
        dikler: [["T", "O", "R"]],
        isaretli: ["O"],
        kenarlar: [
          { p: ["O", "R"], metin: "6" },
          { p: ["T", "R"], metin: "10" },
        ],
        gizli: ["O", "T", "L", "R"],
      },
      difficulty: "Orta",
      prompt: "Eğik yüksekliği $10\\,\\text{cm}$, taban yarıçapı $6\\,\\text{cm}$ olan dik koninin hacmi kaç $\\text{cm}^3$'tür? ($\\pi$ cinsinden)",
      options: ["$96\\pi$", "$120\\pi$", "$288\\pi$", "$360\\pi$", "$400\\pi$"],
      correct: 0,
      solution: ["Hacim için cisim yüksekliği gerekir: $h=\\sqrt{\\ell^2-r^2}=\\sqrt{10^2-6^2}=\\sqrt{100-36}=\\sqrt{64}=8\\ \\text{cm}$.", "Hacim: $V=\\dfrac{1}{3}\\pi r^2 h=\\dfrac{1}{3}\\pi\\cdot 6^2\\cdot 8=\\dfrac{1}{3}\\pi\\cdot 36\\cdot 8=\\dfrac{288\\pi}{3}=96\\pi\\ \\text{cm}^3$."],
      answer: "$96\\pi\\ \\text{cm}^3$.",
    },
    {
      id: "silindir-koni-kure-11-05",
      difficulty: "Orta",
      prompt: "İçinde su bulunan, taban yarıçapı $10\\,\\text{cm}$ olan dik silindir biçimli bir kaba, yarıçapı $6\\,\\text{cm}$ olan bir küre tamamen batırılıyor. Su taşmadığına göre su seviyesi kaç cm yükselir? (Kürenin yerine geçtiği su yükselmeye neden olur.)",
      options: ["$1{,}44$", "$2{,}88$", "$3{,}6$", "$4{,}8$", "$7{,}2$"],
      correct: 1,
      solution: ["Yükselen suyun hacmi, batan kürenin hacmine eşittir.", "Kürenin hacmi: $V_{\\text{k}}=\\dfrac{4}{3}\\pi r^3=\\dfrac{4}{3}\\pi\\cdot 6^3=\\dfrac{4}{3}\\pi\\cdot 216=288\\pi\\ \\text{cm}^3$.", "Silindirin taban alanı: $\\pi\\cdot 10^2=100\\pi\\ \\text{cm}^2$.", "Yükselme: $\\Delta h=\\dfrac{V_{\\text{k}}}{\\pi r^2}=\\dfrac{288\\pi}{100\\pi}=2{,}88\\ \\text{cm}$."],
      answer: "$2{,}88\\ \\text{cm}$.",
    },
    {
      id: "silindir-koni-kure-11-06",
      sekil: {
        aciklama: "Taban yarıçapı 6 cm, yüksekliği 15 cm olan silindir mum ve taban yarıçapı 3 cm, yüksekliği 5 cm olan koni mum.",
        noktalar: { O: [0, 0], O2: [0, 15], L: [-6, 0], R: [6, 0], L2: [-6, 15], R2: [6, 15], K: [13, 0], T: [13, 5], KL: [10, 0], KR: [16, 0] },
        elipsler: [{ merkez: "O", rx: 6, ry: 2.16, arkaKesik: true }, { merkez: "O2", rx: 6, ry: 2.16 }, { merkez: "K", rx: 3, ry: 0.9, arkaKesik: true, tepe: "T" }],
        dogrular: [{ p: ["L", "L2"] }, { p: ["R", "R2"] }, { p: ["O2", "R2"] }, { p: ["T", "K"], kesik: true }, { p: ["K", "KR"], kesik: true }],
        isaretli: ["O2", "K"],
        kenarlar: [
          { p: ["O2", "R2"], metin: "6" },
          { p: ["R", "R2"], metin: "15" },
          { p: ["K", "KR"], metin: "3" },
          { p: ["T", "K"], metin: "5", konum: 0.3 },
        ],
        gizli: ["O", "O2", "L", "R", "L2", "R2", "K", "T", "KL", "KR"],
      },
      difficulty: "Zor",
      prompt: "Taban yarıçapı $6\\,\\text{cm}$, yüksekliği $15\\,\\text{cm}$ olan dik silindir biçimindeki bir mum eritiliyor. Elde edilen mumdan, taban yarıçapı $3\\,\\text{cm}$ ve yüksekliği $5\\,\\text{cm}$ olan eş koni biçimli mumlar dökülüyor. Malzeme kaybı olmadığına göre en çok kaç koni mum elde edilir?",
      options: ["$9$", "$12$", "$18$", "$27$", "$36$"],
      correct: 4,
      solution: ["Malzeme (hacim) korunur. Silindirin hacmini bir koninin hacmine böl.", "Silindir: $V_{\\text{s}}=\\pi r^2 h=\\pi\\cdot 6^2\\cdot 15=\\pi\\cdot 36\\cdot 15=540\\pi\\ \\text{cm}^3$.", "Bir koni: $V_{\\text{k}}=\\dfrac{1}{3}\\pi r^2 h=\\dfrac{1}{3}\\pi\\cdot 3^2\\cdot 5=\\dfrac{1}{3}\\pi\\cdot 9\\cdot 5=15\\pi\\ \\text{cm}^3$.", "Sayı: $\\dfrac{540\\pi}{15\\pi}=36$."],
      answer: "$36$ koni mum.",
    },
  ],
};

export default quiz;
