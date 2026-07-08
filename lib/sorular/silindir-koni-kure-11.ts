import type { TopicQuiz } from "./types";

// silindir-koni-kure-11 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "silindir-koni-kure-11",
  questions: [
    {
      id: "silindir-koni-kure-11-01",
      difficulty: "Kolay",
      prompt: "Taban yarıçapı $4\\,\\text{cm}$, yüksekliği $6\\,\\text{cm}$ olan dik dairesel silindirin hacmi kaç $\\text{cm}^3$'tür? ($\\pi$ cinsinden)",
      options: ["$24\\pi$", "$48\\pi$", "$96\\pi$", "$144\\pi$", "$192\\pi$"],
      correct: 2,
      solution: ["$V=\\pi r^2 h$ formülünü kullan.", "Taban alanı: $\\pi r^2=\\pi\\cdot 4^2=16\\pi\\ \\text{cm}^2$.", "Hacim: $V=16\\pi\\cdot 6=96\\pi\\ \\text{cm}^3$."],
      answer: "$96\\pi\\ \\text{cm}^3$.",
    },
    {
      id: "silindir-koni-kure-11-02",
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
