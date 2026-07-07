import type { TopicQuiz } from "./types";

// geometrik-dizi-ayt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "geometrik-dizi-ayt",
  questions: [
    {
      id: "geometrik-dizi-ayt-01",
      difficulty: "Orta",
      prompt: "Bir geometrik dizide $a_3=20$ ve $a_6=160$ veriliyor. Buna göre $a_1+a_7$ toplamı kaçtır?",
      options: ["$245$", "$290$", "$325$", "$360$", "$405$"],
      correct: 2,
      solution: ["İki terimi bağla: $a_6=a_3\\cdot r^{6-3}=a_3\\cdot r^{3}$, yani $160=20\\cdot r^{3}$, buradan $r^{3}=8$ ve $r=2$.", "İlk terimi bul: $a_3=a_1\\cdot r^{2}=a_1\\cdot 4=20$, dolayısıyla $a_1=5$.", "Yedinci terimi hesapla: $a_7=a_1\\cdot r^{6}=5\\cdot 2^{6}=5\\cdot 64=320$.", "Topla: $a_1+a_7=5+320=325$."],
      answer: "$325$",
    },
    {
      id: "geometrik-dizi-ayt-02",
      difficulty: "Orta",
      prompt: "Pozitif $a,\\,b,\\,c$ sayıları bu sırayla bir geometrik dizi oluşturuyor. Ortadaki terim $b=6$ ve $a+c=13$'tür. Buna göre $a^{2}+c^{2}$ değeri kaçtır?",
      options: ["$85$", "$97$", "$109$", "$121$", "$133$"],
      correct: 1,
      solution: ["Geometrik orta koşulunu yaz: $b^{2}=a\\cdot c$, yani $a\\cdot c=6^{2}=36$.", "Karelerin toplamını çarpanlardan kur: $a^{2}+c^{2}=(a+c)^{2}-2\\,a\\,c$.", "Değerleri yerine koy: $a^{2}+c^{2}=13^{2}-2\\cdot 36=169-72=97$."],
      answer: "$97$",
    },
    {
      id: "geometrik-dizi-ayt-03",
      difficulty: "Orta",
      prompt: "İlk terimi $a_1=4$ olan bir geometrik dizinin ilk üç teriminin toplamı $S_3=28$'dir. Dizinin ortak çarpanı pozitiftir. Buna göre $a_5-a_2$ farkı kaçtır?",
      options: ["$48$", "$52$", "$56$", "$60$", "$64$"],
      correct: 2,
      solution: ["Toplamı aç: $S_3=a_1\\,(1+r+r^{2})=4\\,(1+r+r^{2})=28$, buradan $1+r+r^{2}=7$.", "Denklemi çöz: $r^{2}+r-6=0\\Rightarrow(r+3)(r-2)=0$; pozitif kök $r=2$.", "Terimleri yaz: $a_5=4\\cdot 2^{4}=64$ ve $a_2=4\\cdot 2^{1}=8$.", "Farkı al: $a_5-a_2=64-8=56$."],
      answer: "$56$",
    },
    {
      id: "geometrik-dizi-ayt-04",
      difficulty: "Orta",
      prompt: "Pozitif terimli bir geometrik dizide $a_2\\cdot a_6=64$ olduğu bilinmektedir. Buna göre $a_4$ kaçtır?",
      options: ["$6$", "$7$", "$8$", "$10$", "$16$"],
      correct: 2,
      solution: ["Terimleri açarak çarpımı yaz: $a_2\\cdot a_6=(a_1 r)(a_1 r^{5})=a_1^{2}r^{6}=(a_1 r^{3})^{2}=a_4^{2}$.", "Verilen bilgiyle eşitle: $a_4^{2}=64$.", "Dizi pozitif terimli olduğundan $a_4=8$ (negatif kök elenir)."],
      answer: "$8$",
    },
    {
      id: "geometrik-dizi-ayt-05",
      difficulty: "Zor",
      prompt: "Pozitif terimli bir geometrik dizinin ardışık üç terimi olan $x,\\,y,\\,z$ sayılarının çarpımı $216$, toplamı ise $21$'dir. Buna göre dizinin ($1$'den büyük) ortak çarpanı $r$ kaçtır?",
      options: ["$\\dfrac{3}{2}$", "$2$", "$\\dfrac{5}{2}$", "$3$", "$4$"],
      correct: 1,
      solution: ["Geometrik orta: $x\\cdot z=y^{2}$ olduğundan çarpım $x\\,y\\,z=y\\cdot y^{2}=y^{3}=216$, buradan $y=6$.", "Toplamdan $x+z=21-6=15$ ve $x\\cdot z=y^{2}=36$ elde edilir.", "$x,\\,z$ sayıları $t^{2}-15t+36=0$ denkleminin kökleridir: $(t-3)(t-12)=0\\Rightarrow t=3$ veya $t=12$.", "Dizi $3,\\,6,\\,12$ olduğundan ortak çarpan $r=\\dfrac{6}{3}=2$ ($>1$)."],
      answer: "$2$",
    },
    {
      id: "geometrik-dizi-ayt-06",
      difficulty: "Zor",
      prompt: "Bir top, $27$ metre yükseklikten serbest bırakılıyor. Yere her çarpışından sonra bir önceki yüksekliğin $\\dfrac{1}{3}$'ü kadar yükseliyor. Top sonunda durana kadar aldığı toplam dikey yol kaç metredir?",
      options: ["$48$", "$51$", "$54$", "$57$", "$60$"],
      correct: 2,
      solution: ["İlk düşüş: $27$ m (yalnızca bir kez, aşağı doğru).", "Çıkış yükseklikleri geometrik dizidir: $9,\\,3,\\,1,\\dots$ ($a_1=9$, $r=\\dfrac{1}{3}$). Bu yükseklikler hem yukarı hem aşağı kat edildiğinden iki kez sayılır.", "Çıkışların sonsuz toplamı: $S_{\\infty}=\\dfrac{9}{1-\\frac{1}{3}}=\\dfrac{9}{\\frac{2}{3}}=\\dfrac{27}{2}=13{,}5$ m.", "Toplam yol: $27+2\\cdot 13{,}5=27+27=54$ m."],
      answer: "$54$",
    },
  ],
};

export default quiz;
