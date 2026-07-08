import type { TopicQuiz } from "./types";

// dairede-alan-cevre — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "dairede-alan-cevre",
  questions: [
    {
      id: "dairede-alan-cevre-01",
      difficulty: "Kolay",
      prompt: "Alanı $121\\pi$ cm² olan bir dairenin çevresi kaç cm'dir?",
      options: ["$11\\pi$", "$22\\pi$", "$44\\pi$", "$121\\pi$", "$242\\pi$"],
      correct: 1,
      solution: ["$\\pi r^2 = 121\\pi$ olduğundan her iki tarafı $\\pi$'ye bölersek $r^2 = 121$ olur.", "Yarıçap pozitif olduğundan $r = 11$ cm.", "Çevre $= 2\\pi r = 2\\pi \\cdot 11 = 22\\pi$ cm."],
      answer: "$22\\pi$ cm",
    },
    {
      id: "dairede-alan-cevre-02",
      difficulty: "Orta",
      prompt: "Yarıçapı $15$ cm olan bir çemberde merkez açısı $40°$ olan yayın uzunluğu kaç cm'dir?",
      options: ["$\\dfrac{5\\pi}{3}$", "$\\dfrac{10\\pi}{3}$", "$\\dfrac{25\\pi}{3}$", "$5\\pi$", "$10\\pi$"],
      correct: 1,
      solution: ["Yay uzunluğu formülü: $\\ell = \\dfrac{\\alpha}{360°}\\cdot 2\\pi r$.", "Değerleri yerine koy: $\\ell = \\dfrac{40°}{360°}\\cdot 2\\pi \\cdot 15 = \\dfrac{1}{9}\\cdot 30\\pi$.", "Sadeleştir: $\\ell = \\dfrac{30\\pi}{9} = \\dfrac{10\\pi}{3}$ cm."],
      answer: "$\\dfrac{10\\pi}{3}$ cm",
    },
    {
      id: "dairede-alan-cevre-03",
      difficulty: "Orta",
      prompt: "Yarıçapı $12$ cm olan bir dairede merkez açısı $150°$ olan daire diliminin (sektör) alanı kaç cm²'dir?",
      options: ["$30\\pi$", "$45\\pi$", "$60\\pi$", "$72\\pi$", "$144\\pi$"],
      correct: 2,
      solution: ["Tüm daire alanı: $\\pi r^2 = \\pi \\cdot 12^2 = 144\\pi$ cm².", "Dilim oranı: $\\dfrac{150°}{360°} = \\dfrac{5}{12}$.", "Dilim alanı: $\\dfrac{5}{12}\\cdot 144\\pi = 60\\pi$ cm²."],
      answer: "$60\\pi$ cm²",
    },
    {
      id: "dairede-alan-cevre-04",
      difficulty: "Orta",
      prompt: "Bir bahçe, yarıçapı $14$ m olan bir yarım daire biçimindedir. Bahçenin etrafına tel çekilecektir. Gerekli tel uzunluğu (bahçenin çevresi) kaç metredir? (Çap kenarı da çevrilecektir.)",
      options: ["$14\\pi$", "$14 + 14\\pi$", "$28 + 14\\pi$", "$28 + 28\\pi$", "$28\\pi$"],
      correct: 2,
      solution: ["Yarım dairenin çevresi = çap + yarım çember yayı.", "Çap: $d = 2r = 2\\cdot 14 = 28$ m.", "Yarım çember yayı: $\\dfrac{1}{2}\\cdot 2\\pi r = \\dfrac{1}{2}\\cdot 2\\pi \\cdot 14 = 14\\pi$ m.", "Toplam çevre: $28 + 14\\pi$ m."],
      answer: "$(28 + 14\\pi)$ m",
    },
    {
      id: "dairede-alan-cevre-05",
      difficulty: "Orta",
      prompt: "Merkez açısı $60°$ olan bir daire diliminin alanı $24\\pi$ cm²'dir. Bu dairenin yarıçapı kaç cm'dir?",
      options: ["$6$", "$8$", "$10$", "$12$", "$14$"],
      correct: 3,
      solution: ["Dilim alanı formülü: $A = \\dfrac{\\alpha}{360°}\\cdot \\pi r^2$.", "Oranı yaz: $\\dfrac{60°}{360°} = \\dfrac{1}{6}$, yani $\\dfrac{1}{6}\\pi r^2 = 24\\pi$.", "Her iki tarafı $\\pi$'ye böl: $\\dfrac{1}{6} r^2 = 24 \\Rightarrow r^2 = 144$.", "$r = 12$ cm (yarıçap pozitiftir)."],
      answer: "$12$ cm",
    },
    {
      id: "dairede-alan-cevre-06",
      difficulty: "Zor",
      prompt: "Yarıçapı $8$ cm olan bir dairede merkez açısı $90°$ olan bir kirişin ayırdığı küçük daire kesmesinin (segment) alanı kaç cm²'dir?",
      options: ["$16\\pi - 32$", "$16\\pi - 64$", "$16\\pi - 16$", "$64\\pi - 32$", "$4\\pi - 32$"],
      correct: 0,
      solution: ["Kesme alanı = dilim alanı $-$ üçgen alanı.", "Dilim alanı: $\\dfrac{90°}{360°}\\cdot \\pi \\cdot 8^2 = \\dfrac{1}{4}\\cdot 64\\pi = 16\\pi$ cm².", "Üçgen: merkez açısı $90°$ olduğundan dik kenarları $r = 8$ olan dik üçgen; alanı $\\dfrac{1}{2}\\cdot 8\\cdot 8 = 32$ cm².", "Kesme alanı: $16\\pi - 32$ cm²."],
      answer: "$(16\\pi - 32)$ cm²",
    },
  ],
};

export default quiz;
