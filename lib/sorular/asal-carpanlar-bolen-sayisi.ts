import type { TopicQuiz } from "./types";

// asal-carpanlar-bolen-sayisi — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "asal-carpanlar-bolen-sayisi",
  questions: [
    {
      id: "asal-carpanlar-bolen-sayisi-01",
      difficulty: "Kolay",
      prompt: "Bir depo yönetim programı, $72$ adet kutunun her birine farklı etiket yapıştırmak için kutunun **pozitif bölen sayısını** hesaplıyor. Buna göre kaç farklı etiket numarası gerekir?",
      options: ["$10$", "$12$", "$14$", "$8$", "$15$"],
      correct: 1,
      solution: ["$72=2^{3}\\cdot 3^{2}$ asal çarpanlarına ayrılır.", "Bölen sayısı: $(3+1)(2+1)=4\\cdot 3=12$."],
      answer: "$12$",
    },
    {
      id: "asal-carpanlar-bolen-sayisi-02",
      difficulty: "Kolay",
      prompt: "$x$ ve $y$ farklı asal sayılar olmak üzere $N=x^{4}\\cdot y^{2}$ biçiminde paketlenmiş ürün kodu verilmiştir. Kodun kaç farklı pozitif böleni olduğu soruluyor. Buna göre bölen sayısı kaçtır?",
      options: ["$10$", "$12$", "$14$", "$8$", "$15$"],
      correct: 4,
      solution: ["Üslere $1$ eklenir: $(4+1)(2+1)=5\\cdot 3$.", "$5\\cdot 3=15$ pozitif bölen vardır."],
      answer: "$15$",
    },
    {
      id: "asal-carpanlar-bolen-sayisi-03",
      difficulty: "Orta",
      prompt: "Tam olarak $6$ pozitif böleni olan en küçük doğal sayı, bir sınav sorusunda \"en küçük aday\" olarak aranıyor. Buna göre bu sayı kaçtır?",
      options: ["$8$", "$10$", "$12$", "$14$", "$16$"],
      correct: 2,
      solution: ["$6=(6)(1)=(3)(2)$; bölen sayısı çarpanları $(a+1)(b+1)\\cdots=6$.", "$6=6$: tek asal $2^{5}=32$. $6=3\\cdot 2$: $2^{2}\\cdot 3^{1}=12$ → $(2+1)(1+1)=6$ bölen.", "$12<32$; en küçük aday $12$'dir ($1,2,3,4,6,12$)."],
      answer: "$12$",
    },
    {
      id: "asal-carpanlar-bolen-sayisi-04",
      difficulty: "Orta",
      prompt: "Bir oyunda her oyuncuya, kareye dizilebilen (tam kare sayıda) ve **tam olarak $5$ farklı pozitif böleni** olan bir taş sayısı veriliyor. Yönetici, mümkün olan en az taşı seçmek istiyor. Buna göre bir oyuncuya en az kaç taş verilir?",
      options: ["$16$", "$25$", "$32$", "$36$", "$81$"],
      correct: 0,
      solution: ["Bölen sayısı $5$ asal olduğundan $(a+1)\\cdots=5$ ancak tek çarpanla, $a+1=5$ ile sağlanır; yapı $p^{4}$ olmalıdır.", "$p^{4}$ daima tam karedir. En küçük için en küçük asalı seç: $2^{4}=16$.", "$16$'nın bölenleri $1,2,4,8,16$ → tam $5$ bölen, ve $16=4^{2}$ tam kare."],
      answer: "$16$",
    },
    {
      id: "asal-carpanlar-bolen-sayisi-05",
      difficulty: "Orta",
      prompt: "Bir üretim kodu $N=2^{a}\\cdot 3^{2}\\cdot 5$ biçimindedir ve sistemin kayıtlarına göre bu kodun tam $24$ farklı pozitif böleni vardır. Buna göre $a$ kaçtır?",
      options: ["$2$", "$3$", "$4$", "$5$", "$6$"],
      correct: 1,
      solution: ["Bölen sayısı: $(a+1)(2+1)(1+1)=(a+1)\\cdot 3\\cdot 2=6(a+1)$.", "$6(a+1)=24\\Rightarrow a+1=4\\Rightarrow a=3$."],
      answer: "$3$",
    },
    {
      id: "asal-carpanlar-bolen-sayisi-06",
      difficulty: "Orta",
      prompt: "Bir markette $90$ numaralı raf grubuna ait ürünler kodlanırken yalnızca **tek** bölenler (yani $2$ ile bölünmeyen bölenler) kullanılacaktır. Buna göre $90$ sayısının kaç tane tek pozitif böleni vardır?",
      options: ["$4$", "$5$", "$6$", "$8$", "$12$"],
      correct: 2,
      solution: ["$90=2\\cdot 3^{2}\\cdot 5$ asal çarpanlarına ayrılır.", "Tek bölende $2$'nin üssü $0$ olmalı; geriye $3^{2}\\cdot 5$ kalır.", "Bunun bölen sayısı: $(2+1)(1+1)=3\\cdot 2=6$. (Bu bölenler $1,3,5,9,15,45$'tir.)"],
      answer: "$6$",
    },
  ],
};

export default quiz;
