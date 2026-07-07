import type { TopicQuiz } from "./types";

// hareket-problemleri — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "hareket-problemleri",
  questions: [
    {
      id: "hareket-problemleri-01",
      difficulty: "Orta",
      prompt: "Aynı noktadan zıt yönlere $60$ km/saat ve $40$ km/saat hızlarla hareket eden iki araç aralarındaki mesafe $200$ km olduğunda kaç saat sonra birbirlerinden $500$ km uzakta olurlar?",
      options: ["$2$", "$2{,}5$", "$3$", "$3{,}5$", "$4$"],
      correct: 2,
      solution: ["Zıt yönde giderlerken hızlar **toplanır**: $60+40=100$ km/saat.", "Birbirlerinden uzaklaşmak için kat etmeleri gereken ek mesafe: $500-200=300$ km.", "Süre: $t=\\dfrac{300}{100}=3$ saat."],
      answer: "$3$",
    },
    {
      id: "hareket-problemleri-02",
      difficulty: "Orta",
      prompt: "Aralarında $480$ km bulunan iki şehirden aynı anda birbirine doğru iki tren hareket ediyor. Hızları sırasıyla $100$ km/saat ve $60$ km/saat olduğuna göre, hareketten kaç saat sonra aralarındaki uzaklık $160$ km olur?",
      options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
      correct: 1,
      solution: ["Birbirine yaklaşma hızı: $100+60=160$ km/saat.", "Aralarındaki uzaklığın $160$ km'ye düşmesi için kapanması gereken mesafe: $480-160=320$ km.", "Süre: $t=\\dfrac{320}{160}=2$ saat."],
      answer: "$2$",
    },
    {
      id: "hareket-problemleri-03",
      difficulty: "Kolay",
      prompt: "Uzunluğu $120$ m olan bir tren, $20$ m/s sabit hızla giderken $280$ m uzunluğundaki bir köprüyü tamamen geçmesi kaç saniye sürer?",
      options: ["$15$", "$18$", "$20$", "$22$", "$25$"],
      correct: 2,
      solution: ["Alınması gereken yol: $120+280=400$ m.", "$t=\\dfrac{x}{v}$ bağıntısından $t=\\dfrac{400}{20}=20$ saniye."],
      answer: "$20$",
    },
    {
      id: "hareket-problemleri-04",
      difficulty: "Kolay",
      prompt: "Sabit $90$ km/saat hızla giden bir otobüs, bir mola yerinden diğerine $25$ dakikada ulaşıyor. İki mola yeri arasındaki uzaklık kaç km'dir?",
      options: ["$30$", "$33$", "$35{,}5$", "$37{,}5$", "$40$"],
      correct: 3,
      solution: ["Zamanı saate çevir: $25$ dk $=\\dfrac{25}{60}=\\dfrac{5}{12}$ saat.", "Yol: $x=v\\cdot t=90\\cdot\\dfrac{5}{12}=\\dfrac{450}{12}=37{,}5$ km."],
      answer: "$37{,}5$",
    },
    {
      id: "hareket-problemleri-05",
      difficulty: "Orta",
      prompt: "Bir kamyon bir noktadan $60$ km/saat sabit hızla yola çıkıyor. Aynı noktadan $2$ saat sonra, aynı yönde $80$ km/saat hızla bir otomobil hareket ediyor. Otomobil, yola çıkışından kaç saat sonra kamyona yetişir?",
      options: ["$4$", "$5$", "$6$", "$7$", "$8$"],
      correct: 2,
      solution: ["Otomobil yola çıktığında kamyon $2$ saatte $60\\cdot 2=120$ km ilerlemiştir.", "Aynı yönde gidildiği için bağıl hız hızların farkıdır: $80-60=20$ km/saat.", "$120$ km'lik açığı kapatma süresi: $t=\\dfrac{120}{20}=6$ saat (otomobilin yola çıkışından itibaren)."],
      answer: "$6$",
    },
    {
      id: "hareket-problemleri-06",
      difficulty: "Zor",
      prompt: "Bir araç iki şehir arasını gidişte $90$ km/saat, dönüşte $60$ km/saat hızla almıştır. Gidiş ile dönüş yolu eşit olduğuna göre aracın tüm yolculuk için ortalama hızı kaç km/saattir?",
      options: ["$70$", "$72$", "$74$", "$75$", "$76$"],
      correct: 1,
      solution: ["Tek yön mesafesine $180$ km diyelim ($90$ ve $60$'ın ortak katı).", "Gidiş süresi: $\\dfrac{180}{90}=2$ saat. Dönüş süresi: $\\dfrac{180}{60}=3$ saat.", "Toplam yol $360$ km, toplam süre $5$ saat. Ortalama hız: $\\dfrac{360}{5}=72$ km/saat."],
      answer: "$72$",
    },
  ],
};

export default quiz;
