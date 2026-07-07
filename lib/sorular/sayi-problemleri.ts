import type { TopicQuiz } from "./types";

// sayi-problemleri — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "sayi-problemleri",
  questions: [
    {
      id: "sayi-problemleri-01",
      difficulty: "Kolay",
      prompt: "Ardışık üç tek sayının toplamı $45$'tir. Bu sayıların en büyüğü kaçtır?",
      options: ["$13$", "$15$", "$17$", "$19$", "$21$"],
      correct: 2,
      solution: ["Ardışık tek sayılar $x,\\ x+2,\\ x+4$ biçiminde yazılır.", "Toplam denklemi: $x+(x+2)+(x+4)=45\\Rightarrow 3x+6=45$.", "$3x=39\\Rightarrow x=13$. En büyük sayı: $x+4=17$."],
      answer: "$17$",
    },
    {
      id: "sayi-problemleri-02",
      difficulty: "Orta",
      prompt: "Bir sayının $\\dfrac{1}{2}$'si ile $\\dfrac{1}{3}$'ünün farkı $6$'dır. Bu sayının yarısı kaçtır?",
      options: ["$15$", "$16$", "$17$", "$18$", "$20$"],
      correct: 3,
      solution: ["Sayı $x$ olsun: $\\dfrac{x}{2}-\\dfrac{x}{3}=6$.", "Ortak payda $6$: $\\dfrac{3x}{6}-\\dfrac{2x}{6}=6\\Rightarrow \\dfrac{x}{6}=6$.", "$x=36$. Yarısı: $\\dfrac{36}{2}=18$."],
      answer: "$18$",
    },
    {
      id: "sayi-problemleri-03",
      difficulty: "Orta",
      prompt: "İki basamaklı bir sayının rakamları yer değiştirildiğinde sayı $27$ artıyor. Rakamların toplamı $9$ ise bu sayı kaçtır?",
      options: ["$36$", "$45$", "$54$", "$63$", "$72$"],
      correct: 0,
      solution: ["Sayı $10a+b$, yer değiştirince $10b+a$. Fark: $(10b+a)-(10a+b)=9b-9a=9(b-a)=27$.", "$b-a=3$. Rakamlar toplamı: $a+b=9$.", "Denklemleri topla: $2b=12\\Rightarrow b=6$, $a=3$. Sayı: $36$."],
      answer: "$36$",
    },
    {
      id: "sayi-problemleri-04",
      difficulty: "Orta",
      prompt: "Bir manavda bir kasa elmanın önce $\\dfrac{2}{5}$'i, ardından $\\dfrac{3}{10}$'u satılıyor. Kasada satılmadan $24$ kg elma kaldığına göre kasadaki elma başlangıçta kaç kg'dı?",
      options: ["$60$", "$72$", "$80$", "$90$", "$96$"],
      correct: 2,
      solution: ["Satılan oran: $\\dfrac{2}{5}+\\dfrac{3}{10}=\\dfrac{4}{10}+\\dfrac{3}{10}=\\dfrac{7}{10}$.", "Kalan oran: $1-\\dfrac{7}{10}=\\dfrac{3}{10}$; bu kesir $24$ kg'a karşılık gelir.", "Toplam $x$ olsun: $\\dfrac{3}{10}x=24\\Rightarrow x=24\\cdot\\dfrac{10}{3}=80$.", "**Doğrulama:** $\\dfrac{7}{10}\\cdot 80=56$ kg satılır, $80-56=24$ kg kalır. ✓"],
      answer: "$80$",
    },
    {
      id: "sayi-problemleri-05",
      difficulty: "Kolay",
      prompt: "İki basamaklı bir sayının rakamları toplamı $12$'dir. Onlar basamağındaki rakam, birler basamağındaki rakamın $2$ katı olduğuna göre bu sayı kaçtır?",
      options: ["$39$", "$48$", "$66$", "$84$", "$93$"],
      correct: 3,
      solution: ["Birler rakamı $b$, onlar rakamı $2b$ olsun. Toplam: $2b+b=3b=12\\Rightarrow b=4$.", "Onlar rakamı $2b=8$, birler rakamı $4$. Sayı: $84$."],
      answer: "$84$",
    },
    {
      id: "sayi-problemleri-06",
      difficulty: "Orta",
      prompt: "Bir kumbarada $5$ TL'lik ve $10$ TL'lik toplam $24$ banknot vardır ve toplam para $185$ TL'dir. Buna göre kumbarada kaç tane $10$ TL'lik banknot vardır?",
      options: ["$11$", "$12$", "$13$", "$14$", "$15$"],
      correct: 2,
      solution: ["$10$ TL'lik sayısı $x$, $5$ TL'lik sayısı $24-x$ olsun.", "Toplam para: $10x+5(24-x)=185$.", "Dağıt: $10x+120-5x=185\\Rightarrow 5x=65\\Rightarrow x=13$."],
      answer: "$13$",
    },
  ],
};

export default quiz;
