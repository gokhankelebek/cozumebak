import type { TopicQuiz } from "./types";

// yuzde-kar-zarar — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "yuzde-kar-zarar",
  questions: [
    {
      id: "yuzde-kar-zarar-01",
      difficulty: "Kolay",
      prompt: "Bir ürün $\\%25$ kârla satıldığında $500$ TL gelir elde ediliyor. Bu ürünün maliyeti kaç TL'dir?",
      options: ["$350$", "$375$", "$400$", "$425$", "$450$"],
      correct: 2,
      solution: ["Maliyet $M$ olsun. $\\%25$ kârla satış fiyatı $1{,}25M=500$.", "$M=\\dfrac{500}{1{,}25}=400$ TL."],
      answer: "$400$ TL",
    },
    {
      id: "yuzde-kar-zarar-02",
      difficulty: "Kolay",
      prompt: "Bir mağaza etiket fiyatına önce $\\%20$ indirim, ardından indirimli fiyata $\\%10$ zam uyguluyor. Etiket fiyatı $200$ TL olan bir ürünün son satış fiyatı kaç TL'dir?",
      options: ["$168$", "$172$", "$176$", "$180$", "$184$"],
      correct: 2,
      solution: ["İndirim: $200\\cdot 0{,}8=160$ TL.", "Zam: $160\\cdot 1{,}1=176$ TL."],
      answer: "$176$ TL",
    },
    {
      id: "yuzde-kar-zarar-03",
      difficulty: "Orta",
      prompt: "Bir miktar para yıllık $\\%12$ basit faizle $3$ yıl yatırıldığında $1080$ TL faiz getiriyor. Yatırılan anapara kaç TL'dir?",
      options: ["$2500$", "$2800$", "$3000$", "$3200$", "$3600$"],
      correct: 2,
      solution: ["$1080=\\dfrac{A\\cdot 12\\cdot 3}{100}=\\dfrac{36A}{100}$.", "$A=\\dfrac{1080\\cdot 100}{36}=3000$ TL."],
      answer: "$3000$ TL",
    },
    {
      id: "yuzde-kar-zarar-04",
      difficulty: "Orta",
      prompt: "Bir markette bir ürünün fiyatına önce $\\%20$ zam yapılıyor, bir hafta sonra yeni fiyat üzerinden $\\%25$ indirim uygulanıyor. Bu iki işlem sonunda ürünün ilk fiyatına göre net değişimi nedir?",
      options: ["$\\%5$ artış", "Değişmez", "$\\%5$ azalış", "$\\%10$ azalış", "$\\%45$ artış"],
      correct: 3,
      solution: ["İlk fiyat $x$ olsun. $\\%20$ zam: $1{,}2x$. Üzerine $\\%25$ indirim: $1{,}2x\\cdot 0{,}75$.", "Çarpanları çarp: $1{,}2\\cdot 0{,}75=0{,}90$, yani son fiyat $0{,}90x$.", "Son fiyat ilk fiyatın $\\%90$'ı; net $\\%10$ azalış vardır."],
      answer: "$\\%10$ azalış",
    },
    {
      id: "yuzde-kar-zarar-05",
      difficulty: "Orta",
      prompt: "Bir esnaf, maliyeti $M$ olan bir ürünü maliyetinin $\\%50$ fazlasına etiketliyor; ancak müşteriye etiket fiyatından $\\%20$ indirim yapıyor. Esnafın bu satıştan elde ettiği kâr, maliyetin yüzde kaçıdır?",
      options: ["$\\%10$", "$\\%15$", "$\\%20$", "$\\%25$", "$\\%30$"],
      correct: 2,
      solution: ["Etiket fiyatı: $1{,}5M$. İndirimli satış: $1{,}5M\\cdot 0{,}8=1{,}2M$.", "Kâr: $1{,}2M-M=0{,}2M$.", "Kâr yüzdesi: $\\dfrac{0{,}2M}{M}\\cdot 100=\\%20$."],
      answer: "$\\%20$",
    },
    {
      id: "yuzde-kar-zarar-06",
      difficulty: "Zor",
      prompt: "$4000$ TL, yıllık $\\%18$ basit faizle $5$ ay süreyle yatırılıyor. Vade sonundaki toplam birikim kaç TL'dir?",
      options: ["$4250$", "$4300$", "$4360$", "$4500$", "$4720$"],
      correct: 1,
      solution: ["Basit faiz: $\\text{Faiz}=\\dfrac{\\text{Anapara}\\cdot \\text{oran}\\cdot \\text{zaman}}{100}$, zaman $=\\dfrac{5}{12}$ yıl.", "Yerine koy: $\\text{Faiz}=\\dfrac{4000\\cdot 18\\cdot \\frac{5}{12}}{100}=\\dfrac{4000\\cdot 18\\cdot 5}{1200}=\\dfrac{360000}{1200}=300$ TL.", "Toplam: $4000+300=4300$ TL."],
      answer: "$4300$ TL",
    },
  ],
};

export default quiz;
