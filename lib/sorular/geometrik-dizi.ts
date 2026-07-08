import type { TopicQuiz } from "./types";

// geometrik-dizi — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "geometrik-dizi",
  questions: [
    {
      id: "geometrik-dizi-01",
      difficulty: "Kolay",
      prompt: "İlk terimi $a_1=4$ ve ortak çarpanı $r=3$ olan geometrik dizinin $5.$ terimi kaçtır?",
      options: ["$36$", "$972$", "$324$", "$108$", "$1620$"],
      correct: 2,
      solution: ["Genel terim formülü: $a_n=a_1\\cdot r^{n-1}$.", "Yerine koy: $a_5=4\\cdot 3^{5-1}=4\\cdot 3^{4}$.", "$3^{4}=81$ olduğundan $a_5=4\\cdot 81=324$."],
      answer: "$a_5=324$.",
    },
    {
      id: "geometrik-dizi-02",
      difficulty: "Orta",
      prompt: "Bir geometrik dizide $a_2=18$ ve $a_5=486$ olduğuna göre ilk terim $a_1$ kaçtır?",
      options: ["$6$", "$3$", "$9$", "$54$", "$2$"],
      correct: 0,
      solution: ["Terimleri oranla: $\\dfrac{a_5}{a_2}=r^{5-2}=r^{3}=\\dfrac{486}{18}=27$.", "$r^{3}=27\\Rightarrow r=3$.", "$a_2=a_1\\cdot r=18\\Rightarrow a_1\\cdot 3=18\\Rightarrow a_1=6$."],
      answer: "$a_1=6$.",
    },
    {
      id: "geometrik-dizi-03",
      difficulty: "Orta",
      prompt: "$6,\\ x,\\ 54$ sayıları bu sırayla pozitif terimli bir geometrik dizi oluşturduğuna göre $x$ kaçtır?",
      options: ["$30$", "$27$", "$60$", "$18$", "$12$"],
      correct: 3,
      solution: ["Geometrik ortada ortadaki terimin karesi uçların çarpımına eşittir: $x^{2}=6\\cdot 54=324$.", "$x=\\pm\\sqrt{324}=\\pm 18$.", "Terimler pozitif olduğundan $x=18$."],
      answer: "$x=18$.",
    },
    {
      id: "geometrik-dizi-04",
      difficulty: "Orta",
      prompt: "$2,\\ 6,\\ 18,\\ \\dots$ geometrik dizisinin ilk $6$ teriminin toplamı kaçtır?",
      options: ["$486$", "$728$", "$364$", "$1458$", "$242$"],
      correct: 1,
      solution: ["$a_1=2,\\ r=3,\\ n=6$.", "Toplam formülü: $S_6=\\dfrac{a_1(r^{6}-1)}{r-1}=\\dfrac{2(3^{6}-1)}{3-1}$.", "$3^{6}=729$ olduğundan $S_6=\\dfrac{2(729-1)}{2}=729-1=728$."],
      answer: "$S_6=728$.",
    },
    {
      id: "geometrik-dizi-05",
      difficulty: "Orta",
      prompt: "Bir bakteri kültüründe bakteri sayısı her saatte bir önceki saatteki sayının $3$ katına çıkmaktadır. Başlangıçta (0. saatte) $20$ bakteri bulunduğuna göre $4.$ saatin sonunda kaç bakteri olur?",
      options: ["$540$", "$4860$", "$180$", "$1620$", "$240$"],
      correct: 3,
      solution: ["Sayılar geometrik dizi oluşturur: başlangıç $a_1=20$, ortak çarpan $r=3$.", "$4.$ saatin sonundaki değer, başlangıçtan sonra $4$ kez çarpma demektir; yani dizinin $5.$ terimidir: $a_5=a_1\\cdot r^{4}$.", "$a_5=20\\cdot 3^{4}=20\\cdot 81=1620$."],
      answer: "$1620$ bakteri.",
    },
    {
      id: "geometrik-dizi-06",
      difficulty: "Zor",
      prompt: "Terimleri artan pozitif bir geometrik dizinin ilk üç teriminin toplamı $21$, çarpımı $216$'dır. Bu dizinin ortak çarpanı kaçtır?",
      options: ["$4$", "$\\dfrac{1}{2}$", "$2$", "$3$", "$\\dfrac{1}{3}$"],
      correct: 2,
      solution: ["İlk üç terime $a_1,\\ a_2,\\ a_3$ diyelim. Çarpım: $a_1\\cdot a_2\\cdot a_3=a_2^{3}=216$ (çünkü $a_1\\cdot a_3=a_2^{2}$).", "$a_2^{3}=216\\Rightarrow a_2=6$.", "Toplamdan $a_1+a_3=21-6=15$ ve $a_1\\cdot a_3=a_2^{2}=36$.", "$a_1$ ve $a_3$, $t^{2}-15t+36=0$ denkleminin kökleridir: $t=3$ ve $t=12$.", "Dizi artan olduğundan terimler $3,\\ 6,\\ 12$ olur; ortak çarpan $r=\\dfrac{6}{3}=2$."],
      answer: "$r=2$.",
    },
  ],
};

export default quiz;
