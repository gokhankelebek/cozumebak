import type { TopicQuiz } from "./types";

// analitik-geometri-tyt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "analitik-geometri-tyt",
  questions: [
    {
      id: "analitik-geometri-tyt-01",
      difficulty: "Orta",
      prompt: "Bir harita uygulamasında konumlar birim kareli bir ızgaraya yerleştiriliyor. Bir kurye, $D(2,3)$ konumundaki depodan çıkıp $M(6,6)$ konumundaki ilk müşteriye, oradan da $N(6,1)$ konumundaki ikinci müşteriye uğruyor. Kurye bu iki bacağı **kuş uçuşu** (doğru parçası) kat ettiğine göre, toplam yol kaç birimdir?",
      options: ["$9$", "$10$", "$11$", "$12$", "$13$"],
      correct: 1,
      solution: ["Birinci bacak $D(2,3)\\to M(6,6)$: $$|DM|=\\sqrt{(6-2)^{2}+(6-3)^{2}}=\\sqrt{16+9}=\\sqrt{25}=5.$$", "İkinci bacak $M(6,6)\\to N(6,1)$ aynı apsiste ($x=6$) olduğundan: $$|MN|=|6-1|=5.$$", "Toplam yol $5+5=10$ birim. (Çeldirici: $|MN|$ için de uzaklık formülü kurup yanlış kareleme yapan $11$–$13$ aralığına düşer.)"],
      answer: "$10$",
    },
    {
      id: "analitik-geometri-tyt-02",
      difficulty: "Kolay",
      prompt: "Bir mühendis, $A(-2,1)$ ve $B(6,7)$ noktalarındaki iki direği bir kabloyla birleştiriyor. Kablonun tam ortasına bir yalıtkan takılacaktır. Yalıtkanın takılacağı noktanın koordinatları toplamı ($x+y$) kaçtır?",
      options: ["$5$", "$6$", "$7$", "$8$", "$9$"],
      correct: 1,
      solution: ["Orta nokta: $$\\left(\\dfrac{-2+6}{2},\\ \\dfrac{1+7}{2}\\right)=\\left(\\dfrac{4}{2},\\ \\dfrac{8}{2}\\right)=(2,4).$$", "Koordinatların toplamı $2+4=6$. (Çeldirici: $2$'ye bölmeyi unutan $(4,8)$ bulur, toplamı $12$ sanır; burada şıkta yok, bu yüzden işaret/bölme hatası yapan farklı şıklara savrulur.)"],
      answer: "$6$",
    },
    {
      id: "analitik-geometri-tyt-03",
      difficulty: "Orta",
      prompt: "Bir kayak pistinin profili düz bir doğru olarak modellenmiştir. Pist, yatayda her $4$ birim ilerlendiğinde dikeyde $3$ birim alçalmaktadır. Pistin en tepe noktası $y$ ekseni üzerinde $(0,12)$'dedir. Pistin tabanı $y=0$ düzlemine ($x$ ekseni) ulaştığında yatayda kaç birim ilerlenmiş olur?",
      options: ["$9$", "$12$", "$15$", "$16$", "$20$"],
      correct: 3,
      solution: ["Yatayda $+4$ iken dikeyde $-3$ değişim olduğundan eğim: $$m=\\dfrac{-3}{4}.$$", "$y$ eksenini $(0,12)$'de kestiğinden $n=12$ ve doğru: $$y=-\\dfrac{3}{4}x+12.$$", "Taban için $y=0$: $$0=-\\dfrac{3}{4}x+12\\Rightarrow \\dfrac{3}{4}x=12\\Rightarrow x=16.$$ (Çeldirici: eğimi $\\tfrac{3}{4}$ pozitif alan ya da $12$'yi doğrudan cevap sanan tuzağa düşer.)"],
      answer: "$16$",
    },
    {
      id: "analitik-geometri-tyt-04",
      difficulty: "Kolay",
      prompt: "Bir oyun haritasında bir hazine $H(5,-2)$ noktasındadır. Oyuncu, eğimi $-1$ olan düz bir patikada ilerlemekte ve patika $H$ noktasından geçmektedir. Bu patika $y$ eksenini hangi noktada keser?",
      options: ["$(0,2)$", "$(0,3)$", "$(0,5)$", "$(0,-3)$", "$(0,7)$"],
      correct: 1,
      solution: ["$y=mx+n$ formülünde $m=-1$: $$y=-x+n.$$", "$H(5,-2)$ doğru üzerinde: $$-2=-1\\cdot 5+n\\Rightarrow -2=-5+n\\Rightarrow n=3.$$", "$y$ eksenini ($x=0$) $(0,3)$ noktasında keser. (Çeldirici: eğimin işaretini karıştıran $n=-7$ veya $n=7$ bulur.)"],
      answer: "$(0,3)$",
    },
    {
      id: "analitik-geometri-tyt-05",
      difficulty: "Orta",
      prompt: "Bir tarımcı, köşeleri $A(1,1)$, $B(7,1)$ ve $C(7,9)$ olan dik üçgen biçimli bir tarlanın çevresini tel çitle çevirecektir. Metre başına çit $2$ TL olduğuna göre (birim $=$ metre), toplam çit maliyeti kaç TL'dir?",
      options: ["$24$", "$36$", "$48$", "$52$", "$60$"],
      correct: 2,
      solution: ["$A,B$ aynı ordinatta: $|AB|=|7-1|=6$.", "$B,C$ aynı apsiste: $|BC|=|9-1|=8$.", "Hipotenüs $|AC|$ için $6$–$8$–$10$ üçlüsü: $$|AC|=\\sqrt{6^{2}+8^{2}}=\\sqrt{100}=10.$$", "Çevre $6+8+10=24$ metre; maliyet $24\\cdot 2=48$ TL. (Çeldirici: yalnız çevreyi $24$ bulup metre fiyatıyla çarpmayı unutan A şıkkına düşer.)"],
      answer: "$48$",
    },
    {
      id: "analitik-geometri-tyt-06",
      difficulty: "Orta",
      prompt: "Bir doğrunun denklemi $2x+3y-12=0$'dır. Bu doğru ile koordinat eksenlerinin sınırladığı üçgenin alanı kaç birim karedir?",
      options: ["$6$", "$8$", "$12$", "$18$", "$24$"],
      correct: 2,
      solution: ["$x$ kesişimi ($y=0$): $2x-12=0\\Rightarrow x=6\\Rightarrow (6,0)$.", "$y$ kesişimi ($x=0$): $3y-12=0\\Rightarrow y=4\\Rightarrow (0,4)$.", "Bu iki kesişim ile orijin bir dik üçgen oluşturur; dik kenarlar $6$ ve $4$: $$\\text{Alan}=\\dfrac{6\\cdot 4}{2}=12.$$ (Çeldirici: dik kenarları çarpıp $2$'ye bölmeyi unutan $24$, ya da kesişimleri yanlış okuyan $8$ bulur.)"],
      answer: "$12$",
    },
  ],
};

export default quiz;
