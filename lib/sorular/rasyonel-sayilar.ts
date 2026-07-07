import type { TopicQuiz } from "./types";

// rasyonel-sayilar — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "rasyonel-sayilar",
  questions: [
    {
      id: "rasyonel-sayilar-01",
      difficulty: "Orta",
      prompt: "Bir yemekhanede öğle yemeğinin $\\dfrac{2}{5}$'i tüketildi; akşam kalan porsiyonun $\\dfrac{3}{4}$'ü yenildi. Buna göre gün sonunda yemeğin tamamına göre **bitmemiş** kısmı kaçtır?",
      options: ["$\\dfrac{1}{10}$", "$\\dfrac{3}{20}$", "$\\dfrac{1}{5}$", "$\\dfrac{3}{10}$", "$\\dfrac{2}{5}$"],
      correct: 1,
      solution: ["Öğle sonrası kalan: $1-\\dfrac{2}{5}=\\dfrac{3}{5}$.", "Akşam yenilen: $\\dfrac{3}{4}\\cdot\\dfrac{3}{5}=\\dfrac{9}{20}$.", "Toplam biten: $\\dfrac{2}{5}+\\dfrac{9}{20}=\\dfrac{8}{20}+\\dfrac{9}{20}=\\dfrac{17}{20}$.", "Bitmeyen: $1-\\dfrac{17}{20}=\\dfrac{3}{20}$."],
      answer: "$\\dfrac{3}{20}$",
    },
    {
      id: "rasyonel-sayilar-02",
      difficulty: "Kolay",
      prompt: "Bir terazi ekranında $0,\\overline{6}$ kg ile $0,\\overline{3}$ kg iki ölçüm toplanarak yazdırılacak. Buna göre toplam kaç kg'dır?",
      options: ["$\\dfrac{2}{3}$", "$\\dfrac{5}{6}$", "$\\dfrac{11}{12}$", "$1$", "$\\dfrac{4}{5}$"],
      correct: 3,
      solution: ["$0,\\overline{6}=\\dfrac{6}{9}=\\dfrac{2}{3}$ ve $0,\\overline{3}=\\dfrac{3}{9}=\\dfrac{1}{3}$.", "Toplam: $\\dfrac{2}{3}+\\dfrac{1}{3}=1$."],
      answer: "$1$",
    },
    {
      id: "rasyonel-sayilar-03",
      difficulty: "Kolay",
      prompt: "$\\dfrac{1}{2}+\\dfrac{1}{3}+\\dfrac{1}{6}$ işleminin sonucu, bir tarifte malzeme oranı olarak kullanılıyor. Buna göre sonuç kaçtır?",
      options: ["$\\dfrac{5}{6}$", "$\\dfrac{7}{12}$", "$\\dfrac{2}{3}$", "$\\dfrac{11}{12}$", "$1$"],
      correct: 4,
      solution: ["Ortak payda $6$: $\\dfrac{3}{6}+\\dfrac{2}{6}+\\dfrac{1}{6}=\\dfrac{6}{6}$.", "Sonuç $1$'dir."],
      answer: "$1$",
    },
    {
      id: "rasyonel-sayilar-04",
      difficulty: "Orta",
      prompt: "Üç işçi aynı işin sırasıyla $\\dfrac{2}{3}$'ünü, $\\dfrac{3}{4}$'ünü ve $\\dfrac{4}{5}$'ini tek başına bir günde bitirebiliyor. Yönetici, bir günde işin **en büyük** kısmını bitiren işçiyi seçmek istiyor. Buna göre seçilen işçinin bitirdiği kesir hangisidir?",
      options: ["$\\dfrac{2}{3}$", "$\\dfrac{3}{4}$", "$\\dfrac{4}{5}$", "Üçü de eşit", "Karşılaştırılamaz"],
      correct: 2,
      solution: ["$\\dfrac{2}{3}$ ile $\\dfrac{3}{4}$: çapraz çarpım $2\\cdot 4=8$ ve $3\\cdot 3=9$; $8<9$ olduğundan $\\dfrac{2}{3}<\\dfrac{3}{4}$.", "$\\dfrac{3}{4}$ ile $\\dfrac{4}{5}$: $3\\cdot 5=15$ ve $4\\cdot 4=16$; $15<16$ olduğundan $\\dfrac{3}{4}<\\dfrac{4}{5}$.", "En büyük kesir $\\dfrac{4}{5}$'tir."],
      answer: "$\\dfrac{4}{5}$",
    },
    {
      id: "rasyonel-sayilar-05",
      difficulty: "Orta",
      prompt: "Bir hesap makinesi ekranında bir ölçüm $0,\\overline{36}$ olarak görünüyor. Bu değer rapora **en sade kesir** biçiminde yazılacaktır. Buna göre yazılacak kesir hangisidir?",
      options: ["$\\dfrac{36}{99}$", "$\\dfrac{4}{11}$", "$\\dfrac{2}{5}$", "$\\dfrac{1}{3}$", "$\\dfrac{9}{25}$"],
      correct: 1,
      solution: ["Devreden iki basamak ($36$) var; payda $99$ olur: $0,\\overline{36}=\\dfrac{36}{99}$.", "Sadeleştir ($\\gcd=9$): $\\dfrac{36}{99}=\\dfrac{4}{11}$.", "Çeldirici A sadeleştirilmemiş hâldir; cevap en sade biçimdir."],
      answer: "$\\dfrac{4}{11}$",
    },
    {
      id: "rasyonel-sayilar-06",
      difficulty: "Orta",
      prompt: "Bir depodaki suyun başlangıçta $\\dfrac{1}{3}$'ü kullanıldı; ardından kalan suyun $\\dfrac{2}{3}$'ü daha kullanıldı. Buna göre depoda başlangıçtaki suyun kaçta kaçı kalmıştır?",
      options: ["$\\dfrac{1}{9}$", "$\\dfrac{2}{9}$", "$\\dfrac{1}{3}$", "$\\dfrac{4}{9}$", "$\\dfrac{1}{6}$"],
      correct: 1,
      solution: ["İlk kullanımdan sonra kalan: $1-\\dfrac{1}{3}=\\dfrac{2}{3}$.", "İkinci kullanımda bu kalanın $\\dfrac{2}{3}$'ü gider; geriye kalanın $\\dfrac{1}{3}$'ü kalır: $\\dfrac{1}{3}\\cdot\\dfrac{2}{3}=\\dfrac{2}{9}$.", "Çeldirici D, \"$\\dfrac{2}{3}$'ü kullanıldı\"yu \"$\\dfrac{2}{3}$'ü kaldı\" sanmaktan gelir; doğru kalan $\\dfrac{2}{9}$'dur."],
      answer: "$\\dfrac{2}{9}$",
    },
  ],
};

export default quiz;
