import type { TopicQuiz } from "./types";

// uslu-denklemler — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "uslu-denklemler",
  questions: [
    {
      id: "uslu-denklemler-01",
      difficulty: "Kolay",
      prompt: "Bir bakteri kültürü her saat başı sayısı iki katına çıkmaktadır. Saat $10.00$'da kültürde $64$ bakteri varken, aynı gün saat $14.00$'te bakteri sayısı $2^{x}$ biçiminde yazılabiliyorsa $x$ kaçtır?",
      options: ["$8$", "$9$", "$10$", "$11$", "$12$"],
      correct: 2,
      solution: ["Saat $10.00$'daki $64=2^{6}$ bakteriden $14.00$'e kadar $4$ saat geçer; her saat iki katına çıktığından çarpan $2^{4}$'tür.", "Saat $14.00$'teki sayı: $2^{6}\\cdot 2^{4}=2^{10}$.", "Soruda bu sayı $2^{x}$ olarak verildiğinden $x=10$."],
      answer: "$10$",
    },
    {
      id: "uslu-denklemler-02",
      difficulty: "Orta",
      prompt: "$\\dfrac{4^{x+1}}{2^{x-1}}=32$ denkleminde $x$ kaçtır?",
      options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
      correct: 1,
      solution: ["Her iki tarafı $2$ tabanında yaz: $\\dfrac{\\left(2^{2}\\right)^{x+1}}{2^{x-1}}=\\dfrac{2^{2x+2}}{2^{x-1}}=2^{(2x+2)-(x-1)}=2^{x+3}$.", "Sağ taraf: $32=2^{5}$.", "Üsleri eşitle: $x+3=5\\Rightarrow x=2$."],
      answer: "$2$",
    },
    {
      id: "uslu-denklemler-03",
      difficulty: "Orta",
      prompt: "$2^{x+2}+3\\cdot 2^{x}=56$ denkleminde $x$ kaçtır?",
      options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
      correct: 2,
      solution: ["Terimleri $2^{x}$ cinsinden yaz: $4\\cdot 2^{x}+3\\cdot 2^{x}=56$.", "Ortak çarpanı al: $2^{x}(4+3)=56\\Rightarrow 7\\cdot 2^{x}=56$.", "$2^{x}=8=2^{3}$ olduğundan $x=3$."],
      answer: "$3$",
    },
    {
      id: "uslu-denklemler-04",
      difficulty: "Orta",
      prompt: "Bir bilgisayar virüsü, bulaştığı bilgisayar sayısını her gün $3$ katına çıkarmaktadır. İlk gün $3^{2}$ bilgisayara bulaşmışken, kaçıncı günün sonunda bulaştığı bilgisayar sayısı $3^{6}$ olur?",
      options: ["$3.$ gün", "$4.$ gün", "$5.$ gün", "$6.$ gün", "$7.$ gün"],
      correct: 2,
      solution: ["İlk gün $3^{2}$, her gün $3$ ile çarpılır; $n.$ günde sayı $3^{2}\\cdot 3^{\\,n-1}=3^{\\,n+1}$ olur.", "$3^{6}$'ya eşitle: $3^{\\,n+1}=3^{6}\\Rightarrow n+1=6$.", "$n=5$; yani $5.$ günün sonunda.", "Çeldirici D ($6.$ gün): $n+1=6$ yerine doğrudan $n=6$ alınırsa oluşur."],
      answer: "$5.$ gün",
    },
    {
      id: "uslu-denklemler-05",
      difficulty: "Zor",
      prompt: "$2^{x}=a$ olduğuna göre, $4^{x+1}-2^{x+3}$ ifadesinin $a$ cinsinden değeri aşağıdakilerden hangisidir?",
      options: ["$4a^{2}-8a$", "$2a^{2}-6a$", "$a^{2}-8a$", "$4a-8$", "$4a^{2}-6a$"],
      correct: 0,
      solution: ["$4^{x+1}=4^{x}\\cdot 4=(2^{x})^{2}\\cdot 4=4a^{2}$.", "$2^{x+3}=2^{x}\\cdot 2^{3}=8\\cdot 2^{x}=8a$.", "İfadeyi yaz: $4a^{2}-8a$.", "Çeldirici E ($4a^{2}-6a$): $2^{3}=8$ yerine yanlışlıkla $6$ kullanılırsa oluşur."],
      answer: "$4a^{2}-8a$",
    },
    {
      id: "uslu-denklemler-06",
      difficulty: "Zor",
      prompt: "Bir tasarruf hesabındaki para her yıl belli bir oranda artıyor ve $t$ yıl sonraki para miktarı $P=1000\\cdot 2^{\\,t/3}$ TL formülüyle veriliyor. Bu hesaptaki para ilk kez $8000$ TL'yi geçtiğinde en az kaç tam yıl geçmiş olur?",
      options: ["$6$", "$7$", "$8$", "$9$", "$10$"],
      correct: 3,
      solution: ["$P=8000$ yaz: $1000\\cdot 2^{\\,t/3}=8000\\Rightarrow 2^{\\,t/3}=8$.", "$8=2^{3}$ olduğundan üsleri eşitle: $\\dfrac{t}{3}=3\\Rightarrow t=9$.", "Tam $9.$ yılda para $8000$ olur; \"ilk kez geçtiğinde\" en az $9$ tam yıl gerekir.", "Çeldirici A ($6$): $2^{\\,t/3}=8$ yerine $2^{\\,t/3}=4$ çözülürse oluşur."],
      answer: "$9$",
    },
  ],
};

export default quiz;
