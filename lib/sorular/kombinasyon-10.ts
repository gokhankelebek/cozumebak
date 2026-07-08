import type { TopicQuiz } from "./types";

// kombinasyon-10 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "kombinasyon-10",
  questions: [
    {
      id: "kombinasyon-10-01",
      difficulty: "Kolay",
      prompt: "$9$ öğrenciden $3$ kişilik bir çalışma grubu kaç farklı şekilde oluşturulabilir?",
      options: ["$84$", "$504$", "$252$", "$126$", "$24$"],
      correct: 0,
      solution: ["Grupta sıra önemsiz olduğundan kombinasyon kullanılır: $C(9,3)$.", "$C(9,3)=\\dfrac{9\\cdot 8\\cdot 7}{3!}=\\dfrac{504}{6}=84$."],
      answer: "$C(9,3)=84$.",
    },
    {
      id: "kombinasyon-10-02",
      difficulty: "Kolay",
      prompt: "$C(15,\\ 13)$ ifadesinin değeri kaçtır?",
      options: ["$210$", "$105$", "$195$", "$78$", "$2$"],
      correct: 1,
      solution: ["Simetri özelliğini kullan: $C(15,13)=C(15,\\ 15-13)=C(15,2)$.", "$C(15,2)=\\dfrac{15\\cdot 14}{2}=\\dfrac{210}{2}=105$."],
      answer: "$C(15,13)=C(15,2)=105$.",
    },
    {
      id: "kombinasyon-10-03",
      difficulty: "Orta",
      prompt: "$C(n,\\ 2)=28$ eşitliğini sağlayan $n$ doğal sayısı kaçtır?",
      options: ["$7$", "$14$", "$8$", "$29$", "$6$"],
      correct: 2,
      solution: ["$C(n,2)=\\dfrac{n(n-1)}{2}=28\\Rightarrow n(n-1)=56$.", "Ardışık iki sayının çarpımı $56$: $8\\cdot 7=56$ olduğundan $n=8$."],
      answer: "$n=8$.",
    },
    {
      id: "kombinasyon-10-04",
      difficulty: "Orta",
      prompt: "Bir okulda $4$ matematik ve $5$ fen öğretmeni vardır. Bir sınav komisyonu için $2$ matematik ve $3$ fen öğretmeni seçilecektir. Bu komisyon kaç farklı şekilde oluşturulur?",
      options: ["$16$", "$126$", "$120$", "$60$", "$40$"],
      correct: 3,
      solution: ["$2$ matematik öğretmeni seçimi: $C(4,2)=\\dfrac{4\\cdot 3}{2}=6$.", "$3$ fen öğretmeni seçimi: $C(5,3)=C(5,2)=\\dfrac{5\\cdot 4}{2}=10$.", "İki bağımsız seçim çarpma kuralıyla birleştirilir: $6\\cdot 10=60$."],
      answer: "$C(4,2)\\cdot C(5,3)=6\\cdot 10=60$.",
    },
    {
      id: "kombinasyon-10-05",
      difficulty: "Zor",
      prompt: "$7$ erkek ve $5$ kızdan oluşan bir sınıftan $4$ kişilik bir ekip seçilecektir. Ekipte $\\textbf{en az } 1$ kız bulunması koşuluyla kaç farklı ekip kurulabilir?",
      options: ["$495$", "$35$", "$825$", "$770$", "$460$"],
      correct: 4,
      solution: ["Tümleyenden git: Tüm $4$'lü ekipler: $C(12,4)=\\dfrac{12\\cdot 11\\cdot 10\\cdot 9}{24}=495$.", "Hiç kız olmayan (hepsi erkek) ekipler: $C(7,4)=C(7,3)=\\dfrac{7\\cdot 6\\cdot 5}{6}=35$.", "En az $1$ kız: $495-35=460$."],
      answer: "$C(12,4)-C(7,4)=495-35=460$.",
    },
    {
      id: "kombinasyon-10-06",
      difficulty: "Orta",
      prompt: "Bir düzlemde $10$ nokta veriliyor. Bu noktaların yalnızca $4$ tanesi aynı doğru üzerinde, geri kalanların ise üçü doğrusal değildir. Bu noktalarla kaç farklı üçgen oluşturulabilir?",
      options: ["$120$", "$116$", "$114$", "$4$", "$56$"],
      correct: 1,
      solution: ["Bir üçgen $3$ noktayla belirlenir ve sıra önemsizdir; tüm $3$'lü seçimler: $C(10,3)=\\dfrac{10\\cdot 9\\cdot 8}{6}=120$.", "Aynı doğru üzerindeki $4$ nokta üçgen oluşturmaz; bu doğrusal üçlüler: $C(4,3)=4$.", "Üçgen sayısı: $120-4=116$."],
      answer: "$C(10,3)-C(4,3)=120-4=116$.",
    },
  ],
};

export default quiz;
