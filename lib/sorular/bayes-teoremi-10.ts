import type { TopicQuiz } from "./types";

// bayes-teoremi-10 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "bayes-teoremi-10",
  questions: [
    {
      id: "bayes-teoremi-10-01",
      difficulty: "Kolay",
      prompt: "Bir atölyede ürünlerin $\\%25$'i X tezgahında, $\\%75$'i Y tezgahında üretiliyor. X'in hata oranı $\\%8$, Y'nin hata oranı $\\%4$'tür. Rastgele seçilen bir ürünün hatalı olma olasılığı kaçtır?",
      options: ["$0{,}05$", "$0{,}12$", "$0{,}06$", "$0{,}02$", "$0{,}07$"],
      correct: 0,
      solution: ["Hatalıya iki ayrık yoldan ulaşılır; her yol boyunca çarpıp yolları toplarız.", "X yolu: $0{,}25\\cdot 0{,}08=0{,}02$.", "Y yolu: $0{,}75\\cdot 0{,}04=0{,}03$.", "Toplam: $P(\\text{hatalı})=0{,}02+0{,}03=0{,}05$."],
      answer: "$0{,}05$ (A).",
    },
    {
      id: "bayes-teoremi-10-02",
      difficulty: "Kolay",
      prompt: "$P(A)=0{,}4$, $P(B\\mid A)=0{,}7$ ve $P(B\\mid A')=0{,}3$ veriliyor. Toplam olasılık kuralına göre $P(B)$ kaçtır?",
      options: ["$0{,}28$", "$0{,}40$", "$0{,}46$", "$0{,}54$", "$0{,}70$"],
      correct: 2,
      solution: ["$P(B)=P(A)\\cdot P(B\\mid A)+P(A')\\cdot P(B\\mid A')$ kullanılır; burada $P(A')=1-0{,}4=0{,}6$.", "$A$ yolu: $0{,}4\\cdot 0{,}7=0{,}28$.", "$A'$ yolu: $0{,}6\\cdot 0{,}3=0{,}18$.", "Toplam: $P(B)=0{,}28+0{,}18=0{,}46$."],
      answer: "$0{,}46$ (C).",
    },
    {
      id: "bayes-teoremi-10-03",
      difficulty: "Orta",
      prompt: "Birinci torbada $3$ kırmızı $2$ mavi, ikinci torbada $1$ kırmızı $4$ mavi top var. Bir torba eşit olasılıkla seçilip bir top çekiliyor. Çekilen topun kırmızı olma olasılığı kaçtır?",
      options: ["$\\dfrac{3}{5}$", "$\\dfrac{2}{5}$", "$\\dfrac{1}{5}$", "$\\dfrac{4}{5}$", "$\\dfrac{1}{2}$"],
      correct: 1,
      solution: ["Her torba $\\dfrac12$ olasılıkla seçilir; kırmızıya iki yoldan ulaşılır.", "1. torba yolu: $\\dfrac12\\cdot\\dfrac{3}{5}=\\dfrac{3}{10}$.", "2. torba yolu: $\\dfrac12\\cdot\\dfrac{1}{5}=\\dfrac{1}{10}$.", "Toplam: $\\dfrac{3}{10}+\\dfrac{1}{10}=\\dfrac{4}{10}=\\dfrac{2}{5}$."],
      answer: "$\\dfrac{2}{5}$ (B).",
    },
    {
      id: "bayes-teoremi-10-04",
      difficulty: "Orta",
      prompt: "Bir üretimde A hattı ürünlerin $\\%60$'ını (hata oranı $\\%2$), B hattı $\\%40$'ını (hata oranı $\\%7$) üretiyor. Rastgele seçilen bir ürün hatalı çıktığına göre, bu ürünün B hattından gelmiş olma olasılığı kaçtır?",
      options: ["$\\dfrac{3}{10}$", "$\\dfrac{7}{9}$", "$\\dfrac{1}{2}$", "$\\dfrac{7}{10}$", "$\\dfrac{2}{5}$"],
      correct: 3,
      solution: ["İstenen $P(B\\mid \\text{hatalı})=\\dfrac{\\text{B--hatalı yolu}}{\\text{toplam hatalı}}$.", "A yolu: $0{,}60\\cdot 0{,}02=0{,}012$.", "B yolu: $0{,}40\\cdot 0{,}07=0{,}028$.", "Toplam hatalı: $0{,}012+0{,}028=0{,}040$.", "$P(B\\mid \\text{hatalı})=\\dfrac{0{,}028}{0{,}040}=\\dfrac{7}{10}$."],
      answer: "$\\dfrac{7}{10}$ (D).",
    },
    {
      id: "bayes-teoremi-10-05",
      difficulty: "Zor",
      prompt: "Bir hastalık nüfusun $\\%4$'ünde bulunuyor. Test, hastaya $\\%80$ pozitif sonuç veriyor; sağlam birine ise $\\%10$ yanlış pozitif veriyor. Testi pozitif çıkan birinin gerçekten hasta olma olasılığı kaçtır?",
      options: ["$\\dfrac{4}{5}$", "$\\dfrac{8}{9}$", "$\\dfrac{1}{3}$", "$\\dfrac{2}{5}$", "$\\dfrac{1}{4}$"],
      correct: 4,
      solution: ["İstenen $P(\\text{hasta}\\mid +)=\\dfrac{\\text{hasta--pozitif yolu}}{\\text{toplam pozitif}}$.", "Hasta yolu: $0{,}04\\cdot 0{,}80=0{,}032$.", "Sağlam yolu: $0{,}96\\cdot 0{,}10=0{,}096$.", "Toplam pozitif: $0{,}032+0{,}096=0{,}128$.", "$P(\\text{hasta}\\mid +)=\\dfrac{0{,}032}{0{,}128}=\\dfrac{1}{4}$ (önsel düşük olduğundan sonuç sezgiden küçük çıkar)."],
      answer: "$\\dfrac{1}{4}$ (E).",
    },
    {
      id: "bayes-teoremi-10-06",
      difficulty: "Orta",
      prompt: "Birinci torbada $2$ kırmızı $2$ mavi, ikinci torbada $4$ kırmızı $1$ mavi top var. Bir torba eşit olasılıkla seçilip bir top çekiliyor. Çekilen top kırmızı olduğuna göre, bu topun ikinci torbadan gelmiş olma olasılığı kaçtır?",
      options: ["$\\dfrac{5}{13}$", "$\\dfrac{4}{5}$", "$\\dfrac{8}{13}$", "$\\dfrac{2}{5}$", "$\\dfrac{1}{2}$"],
      correct: 2,
      solution: ["İstenen $P(2.\\text{ torba}\\mid \\text{kırmızı})=\\dfrac{2.\\text{ torba--kırmızı yolu}}{\\text{toplam kırmızı}}$.", "1. torba yolu: $\\dfrac12\\cdot\\dfrac{2}{4}=\\dfrac{1}{4}=\\dfrac{5}{20}$.", "2. torba yolu: $\\dfrac12\\cdot\\dfrac{4}{5}=\\dfrac{2}{5}=\\dfrac{8}{20}$.", "Toplam kırmızı: $\\dfrac{5}{20}+\\dfrac{8}{20}=\\dfrac{13}{20}$.", "$P(2.\\text{ torba}\\mid \\text{kırmızı})=\\dfrac{8/20}{13/20}=\\dfrac{8}{13}$."],
      answer: "$\\dfrac{8}{13}$ (C).",
    },
  ],
};

export default quiz;
