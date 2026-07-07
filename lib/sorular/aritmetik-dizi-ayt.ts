import type { TopicQuiz } from "./types";

// aritmetik-dizi-ayt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "aritmetik-dizi-ayt",
  questions: [
    {
      id: "aritmetik-dizi-ayt-01",
      difficulty: "Orta",
      prompt: "Bir $(a_n)$ aritmetik dizisinde $a_2\\cdot a_4=a_3^{2}-9$ eşitliği sağlanmaktadır. Buna göre ortak fark $d$'nin mutlak değeri kaçtır?",
      options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
      correct: 2,
      solution: ["$a_2=a_3-d$ ve $a_4=a_3+d$ olduğundan $a_2\\cdot a_4=(a_3-d)(a_3+d)=a_3^{2}-d^{2}$.", "Verilen eşitlik: $a_3^{2}-d^{2}=a_3^{2}-9\\Rightarrow d^{2}=9$.", "Buradan $\\lvert d\\rvert=3$."],
      answer: "$3$",
    },
    {
      id: "aritmetik-dizi-ayt-02",
      difficulty: "Orta",
      prompt: "Bir aritmetik dizide $a_3=7$ ve $a_7=19$ olduğuna göre ilk $10$ terimin toplamı $S_{10}$ kaçtır?",
      options: ["$125$", "$135$", "$145$", "$155$", "$165$"],
      correct: 2,
      solution: ["$a_7-a_3=4d=19-7=12\\Rightarrow d=3$.", "$a_1=a_3-2d=7-6=1$; $a_{10}=a_1+9d=1+27=28$.", "$S_{10}=\\dfrac{10\\,(a_1+a_{10})}{2}=\\dfrac{10\\,(1+28)}{2}=145$."],
      answer: "$145$",
    },
    {
      id: "aritmetik-dizi-ayt-03",
      difficulty: "Orta",
      prompt: "Ardışık üç terimi aritmetik dizi oluşturan sayıların toplamı $18$, çarpımı $192$'dir. Buna göre dizinin ortak farkı $d$ (pozitif) kaçtır?",
      options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
      correct: 1,
      solution: ["Üç terimi $x-d,\\ x,\\ x+d$ al. Toplam $3x=18\\Rightarrow x=6$.", "Çarpım: $(6-d)\\cdot 6\\cdot(6+d)=6\\,(36-d^{2})=192\\Rightarrow 36-d^{2}=32$.", "$d^{2}=4\\Rightarrow d=2$ (pozitif)."],
      answer: "$2$",
    },
    {
      id: "aritmetik-dizi-ayt-04",
      difficulty: "Zor",
      prompt: "Bir $(a_n)$ aritmetik dizisinin ilk $n$ teriminin toplamı $S_n=2n^{2}+n$ ile veriliyor. Buna göre dizinin $10.$ terimi $a_{10}$ kaçtır?",
      options: ["$35$", "$37$", "$39$", "$41$", "$43$"],
      correct: 2,
      solution: ["Genel terimi kısmi toplamlardan çek: $a_n=S_n-S_{n-1}$.", "Farkı al: $a_n=(2n^{2}+n)-\\big(2(n-1)^{2}+(n-1)\\big)=(2n^{2}+n)-(2n^{2}-3n+1)=4n-1$.", "Demek ki $a_1=3$, $d=4$; aranan terim $a_{10}=4\\cdot 10-1=39$."],
      answer: "$39$",
    },
    {
      id: "aritmetik-dizi-ayt-05",
      difficulty: "Orta",
      prompt: "Bir $(a_n)$ aritmetik dizisinde $a_3+a_{15}=40$ olduğuna göre ilk $17$ terimin toplamı $S_{17}$ kaçtır?",
      options: ["$300$", "$320$", "$340$", "$360$", "$380$"],
      correct: 2,
      solution: ["Eşit uzaklık özelliği: $a_1+a_{17}=a_3+a_{15}$ çünkü her iki çiftte sıra toplamı $18$'dir. O hâlde $a_1+a_{17}=40$.", "Toplam formülünü uygula: $S_{17}=\\dfrac{17\\,(a_1+a_{17})}{2}=\\dfrac{17\\cdot 40}{2}$.", "Hesapla: $S_{17}=17\\cdot 20=340$."],
      answer: "$340$",
    },
    {
      id: "aritmetik-dizi-ayt-06",
      difficulty: "Orta",
      prompt: "Bir tiyatro salonunda koltuklar sıralar hâlinde dizilidir. İlk sırada $20$ koltuk vardır ve her sıra, bir önceki sıradan $3$ koltuk fazladır. Salonda $15$ sıra bulunmaktadır. Buna göre salondaki toplam koltuk sayısı kaçtır?",
      options: ["$585$", "$600$", "$615$", "$630$", "$645$"],
      correct: 2,
      solution: ["Modeli kur: $a_1=20$, $d=3$, $n=15$.", "Son sıradaki koltuk sayısı: $a_{15}=20+(15-1)\\cdot 3=20+42=62$.", "Toplamı hesapla: $S_{15}=\\dfrac{15\\,(a_1+a_{15})}{2}=\\dfrac{15\\,(20+62)}{2}=\\dfrac{15\\cdot 82}{2}=615$."],
      answer: "$615$",
    },
  ],
};

export default quiz;
