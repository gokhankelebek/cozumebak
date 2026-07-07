import type { TopicQuiz } from "./types";

// dizi-kavrami-ayt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "dizi-kavrami-ayt",
  questions: [
    {
      id: "dizi-kavrami-ayt-01",
      difficulty: "Kolay",
      prompt: "Genel terimi $a_n=2n$ olan bir dizide $a_3+a_6$ toplamı, aynı dizinin bir terimine eşittir. Buna göre bu toplam, dizinin kaçıncı terimidir?",
      options: ["$7$", "$8$", "$9$", "$10$", "$11$"],
      correct: 2,
      solution: ["**3. terim** için $n=3$ yaz: $a_3=2\\cdot 3=6$.", "**6. terim** için $n=6$ yaz: $a_6=2\\cdot 6=12$.", "Toplamı bul: $a_3+a_6=6+12=18$.", "Bu toplam dizinin kaçıncı terimi ise genel terimi $18$'e eşitle: $2n=18$.", "$n$'i çöz: $n=9$ (pozitif tam sayı)."],
      answer: "$9$",
    },
    {
      id: "dizi-kavrami-ayt-02",
      difficulty: "Orta",
      prompt: "Genel terimi $a_n=2n-1$ olan bir dizide $a_k=3\\cdot a_4$ eşitliği sağlanmaktadır. Buna göre $k$ kaçtır?",
      options: ["$11$", "$10$", "$9$", "$8$", "$7$"],
      correct: 0,
      solution: ["Önce **4. terimi** bul: $a_4=2\\cdot 4-1=7$.", "Sağ tarafı hesapla: $3\\cdot a_4=3\\cdot 7=21$.", "$a_k=21$ olduğundan genel terimi eşitle: $2k-1=21$.", "$k$'yı çöz: $2k=22 \\Rightarrow k=11$ (pozitif tam sayı)."],
      answer: "$11$",
    },
    {
      id: "dizi-kavrami-ayt-03",
      difficulty: "Orta",
      prompt: "Genel terimi $a_n=n^{2}-2n$ olan bir dizide $a_m=24$ olduğu bilinmektedir. Buna göre $a_{m-2}$ kaçtır?",
      options: ["$3$", "$4$", "$5$", "$6$", "$8$"],
      correct: 4,
      solution: ["$a_m=24$ koşulunu genel terimde yaz: $m^{2}-2m=24$.", "Düzenle: $m^{2}-2m-24=0 \\Rightarrow (m-6)(m+4)=0$.", "$m$ pozitif tam sayı olmalı, bu yüzden $m=6$ (kök $m=-4$ elenir).", "İstenen $a_{m-2}=a_{4}$ olur; $n=4$ yaz: $a_4=4^{2}-2\\cdot 4$.", "İşlemi yap: $a_4=16-8=8$."],
      answer: "$8$",
    },
    {
      id: "dizi-kavrami-ayt-04",
      difficulty: "Zor",
      prompt: "Genel terimi $a_n=n^{2}-3n+1$ olan bir dizinin kaç terimi negatiftir?",
      options: ["$1$", "$2$", "$3$", "$4$", "Sonsuz çoklukta"],
      correct: 1,
      solution: ["Negatif terim koşulu: $n^{2}-3n+1<0$.", "$n^{2}-3n+1=0$ denkleminin kökleri $n=\\dfrac{3\\pm\\sqrt{5}}{2}$, yaklaşık $0{,}38$ ve $2{,}62$'dir. Parabol bu iki kök arasında negatiftir.", "Bu aralıktaki pozitif tam sayılar yalnızca $n=1$ ve $n=2$'dir: $a_1=1-3+1=-1<0$, $a_2=4-6+1=-1<0$.", "$n=3$ için $a_3=9-9+1=1>0$; sonraki terimler de pozitiftir. Demek ki yalnızca $2$ terim negatiftir."],
      answer: "$2$",
    },
    {
      id: "dizi-kavrami-ayt-05",
      difficulty: "Zor",
      prompt: "Bir $(a_n)$ dizisi $a_1=2$ ve her $n\\in\\mathbb{Z}^{+}$ için $a_{n+1}=a_n+2n$ kuralıyla tanımlanıyor. Buna göre $a_5$ kaçtır?",
      options: ["$18$", "$20$", "$22$", "$24$", "$26$"],
      correct: 2,
      solution: ["Kuralı terim terim uygula: $a_2=a_1+2\\cdot 1=2+2=4$.", "Devam et: $a_3=a_2+2\\cdot 2=4+4=8$ ve $a_4=a_3+2\\cdot 3=8+6=14$.", "Son adım: $a_5=a_4+2\\cdot 4=14+8=22$.", "(Kontrol: $a_n=2+2\\cdot\\big(1+2+\\cdots+(n-1)\\big)=2+n(n-1)$ olur; $n=5$ için $2+20=22$.)"],
      answer: "$22$",
    },
    {
      id: "dizi-kavrami-ayt-06",
      difficulty: "Orta",
      prompt: "Bir $(a_n)$ dizisinin ilk $n$ teriminin toplamı $S_n=n^{2}+2n$ ile veriliyor. Buna göre dizinin $5.$ terimi $a_5$ kaçtır?",
      options: ["$9$", "$10$", "$11$", "$12$", "$13$"],
      correct: 2,
      solution: ["Anahtar bağıntı: $a_n=S_n-S_{n-1}$. Aranan $a_5=S_5-S_4$'tür.", "Toplamları hesapla: $S_5=5^{2}+2\\cdot 5=25+10=35$ ve $S_4=4^{2}+2\\cdot 4=16+8=24$.", "Farkı al: $a_5=35-24=11$."],
      answer: "$11$",
    },
  ],
};

export default quiz;
