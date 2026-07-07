import type { TopicQuiz } from "./types";

// paydayi-rasyonel-yapma — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "paydayi-rasyonel-yapma",
  questions: [
    {
      id: "paydayi-rasyonel-yapma-01",
      difficulty: "Kolay",
      prompt: "Paydası rasyonel yapıldığında $\\dfrac{4}{\\sqrt{2}-1}$ ifadesinin değeri kaçtır?",
      options: ["$2\\sqrt{2}-2$", "$4\\sqrt{2}-4$", "$4\\sqrt{2}+4$", "$2\\sqrt{2}+2$", "$8$"],
      correct: 2,
      solution: ["Pay ve paydayı eşleniği $\\sqrt{2}+1$ ile çarp: $\\dfrac{4}{\\sqrt{2}-1}\\cdot\\dfrac{\\sqrt{2}+1}{\\sqrt{2}+1}=\\dfrac{4(\\sqrt{2}+1)}{(\\sqrt{2})^{2}-1^{2}}$.", "Payda: $2-1=1$.", "Sonuç: $4(\\sqrt{2}+1)=4\\sqrt{2}+4$."],
      answer: "$4\\sqrt{2}+4$",
    },
    {
      id: "paydayi-rasyonel-yapma-02",
      difficulty: "Orta",
      prompt: "$\\dfrac{1}{\\sqrt{2}-1}+\\dfrac{1}{\\sqrt{2}+1}$ ifadesinin değeri kaçtır?",
      options: ["$\\sqrt{2}$", "$2$", "$2\\sqrt{2}$", "$3$", "$4$"],
      correct: 2,
      solution: ["Birinci kesri eşleniğiyle rasyonel yap: $\\dfrac{1}{\\sqrt{2}-1}=\\sqrt{2}+1$.", "İkinci kesri eşleniğiyle rasyonel yap: $\\dfrac{1}{\\sqrt{2}+1}=\\sqrt{2}-1$.", "Topla: $(\\sqrt{2}+1)+(\\sqrt{2}-1)=2\\sqrt{2}$."],
      answer: "$2\\sqrt{2}$",
    },
    {
      id: "paydayi-rasyonel-yapma-03",
      difficulty: "Orta",
      prompt: "Kenar uzunluğu $\\sqrt{18}$ cm olan bir karenin köşegen uzunluğu, paydası rasyonel yapılmış biçimde kaç cm'dir?",
      options: ["$2\\sqrt{2}$", "$3\\sqrt{2}$", "$6$", "$3\\sqrt{3}$", "$6\\sqrt{2}$"],
      correct: 2,
      solution: ["Kenarı sadeleştir: $\\sqrt{18}=\\sqrt{9\\cdot 2}=3\\sqrt{2}$ cm.", "Köşegen: $3\\sqrt{2}\\cdot\\sqrt{2}=3\\cdot 2=6$ cm.", "Sonuç zaten rasyonel; ek işlem gerekmez."],
      answer: "$6$",
    },
    {
      id: "paydayi-rasyonel-yapma-04",
      difficulty: "Orta",
      prompt: "Bir koşucu, uzunluğu $\\sqrt{8}$ km olan bir parkuru her gün koşuyor. Koştuğu mesafe paydası rasyonel biçimde $\\dfrac{16}{\\sqrt{8}}$ km olarak da yazılabiliyor. Buna göre bu iki ifade arasındaki ilişki için $\\dfrac{16}{\\sqrt{8}}$ ifadesinin sadeleştirilmiş değeri kaçtır?",
      options: ["$2\\sqrt{2}$", "$4\\sqrt{2}$", "$4$", "$8$", "$2$"],
      correct: 1,
      solution: ["Pay ve paydayı $\\sqrt{8}$ ile çarp: $\\dfrac{16}{\\sqrt{8}}\\cdot\\dfrac{\\sqrt{8}}{\\sqrt{8}}=\\dfrac{16\\sqrt{8}}{8}=2\\sqrt{8}$.", "$\\sqrt{8}=2\\sqrt{2}$ olduğundan: $2\\sqrt{8}=2\\cdot 2\\sqrt{2}=4\\sqrt{2}$.", "Çeldirici A ($2\\sqrt{2}$): $\\sqrt{8}$ sadeleştirmesi unutulup $2\\sqrt{8}$'de durulursa katsayı hatası oluşur."],
      answer: "$4\\sqrt{2}$",
    },
    {
      id: "paydayi-rasyonel-yapma-05",
      difficulty: "Orta",
      prompt: "$\\dfrac{\\sqrt{3}+1}{\\sqrt{3}-1}$ ifadesi paydası rasyonel yapıldığında $a+b\\sqrt{3}$ biçiminde yazılıyor. Buna göre $a+b$ toplamı kaçtır?",
      options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
      correct: 2,
      solution: ["Pay ve paydayı eşleniği $\\sqrt{3}+1$ ile çarp: $\\dfrac{(\\sqrt{3}+1)^{2}}{(\\sqrt{3}-1)(\\sqrt{3}+1)}$.", "Payı aç: $(\\sqrt{3}+1)^{2}=3+2\\sqrt{3}+1=4+2\\sqrt{3}$.", "Paydayı hesapla: $(\\sqrt{3})^{2}-1^{2}=3-1=2$.", "Sadeleştir: $\\dfrac{4+2\\sqrt{3}}{2}=2+\\sqrt{3}$, yani $a=2$, $b=1$.", "Toplam: $a+b=3$."],
      answer: "$3$",
    },
    {
      id: "paydayi-rasyonel-yapma-06",
      difficulty: "Zor",
      prompt: "$\\dfrac{1}{1+\\sqrt{2}}+\\dfrac{1}{\\sqrt{2}+\\sqrt{3}}$ ifadesinin değeri aşağıdakilerden hangisidir?",
      options: ["$\\sqrt{3}-1$", "$\\sqrt{3}+1$", "$\\sqrt{3}-\\sqrt{2}$", "$1$", "$\\sqrt{2}$"],
      correct: 0,
      solution: ["Birinci kesri eşleniği $\\sqrt{2}-1$ ile çarp; payda $(\\sqrt{2}+1)(\\sqrt{2}-1)=2-1=1$ olur: $\\dfrac{1}{1+\\sqrt{2}}\\cdot\\dfrac{\\sqrt{2}-1}{\\sqrt{2}-1}=\\dfrac{\\sqrt{2}-1}{1}=\\sqrt{2}-1$.", "İkinci kesir: $\\dfrac{1}{\\sqrt{2}+\\sqrt{3}}\\cdot\\dfrac{\\sqrt{3}-\\sqrt{2}}{\\sqrt{3}-\\sqrt{2}}=\\dfrac{\\sqrt{3}-\\sqrt{2}}{3-2}=\\sqrt{3}-\\sqrt{2}$.", "Topla: $(\\sqrt{2}-1)+(\\sqrt{3}-\\sqrt{2})=\\sqrt{3}-1$. Ortadaki $\\sqrt{2}$ terimleri birbirini götürür.", "Çeldirici C ($\\sqrt{3}-\\sqrt{2}$): yalnızca ikinci kesir hesaplanıp birinci unutulursa oluşur."],
      answer: "$\\sqrt{3}-1$",
    },
  ],
};

export default quiz;
