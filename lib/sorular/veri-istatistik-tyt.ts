import type { TopicQuiz } from "./types";

// veri-istatistik-tyt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "veri-istatistik-tyt",
  questions: [
    {
      id: "veri-istatistik-tyt-01",
      difficulty: "Kolay",
      prompt: "Bir basketbolcunun ilk $4$ maçta attığı sayıların ortalaması $14$'tür. Bu oyuncu $5.$ maçta $24$ sayı atarsa $5$ maçın sayı ortalaması kaç olur?",
      options: ["$14$", "$15$", "$16$", "$18$", "$19$"],
      correct: 2,
      solution: ["İlk $4$ maçın toplamı: $4\\cdot 14=56$.", "$5.$ maçı ekle: $56+24=80$.", "$5$ maçın ortalaması: $\\dfrac{80}{5}=16$.", "Çeldirici: yeni notu eski ortalamayla \"ortalamak\" ($\\frac{14+24}{2}=19$, E) tipik hatadır."],
      answer: "$16$",
    },
    {
      id: "veri-istatistik-tyt-02",
      difficulty: "Orta",
      prompt: "Bir öğrencinin $5$ sınav notu $70,\\ 80,\\ 60,\\ x,\\ 90$ olup bu notların **ortalaması $76$**'dır. Bu beş notun **medyanı** kaçtır?",
      options: ["$70$", "$76$", "$78$", "$80$", "$82$"],
      correct: 3,
      solution: ["Ortalamadan toplam: $5\\cdot 76=380$.", "$x$'i bul: $70+80+60+90=300$, $x=380-300=80$.", "Sırala: $60,\\ 70,\\ 80,\\ 80,\\ 90$.", "$5$ veri (tek), ortadaki $3.$ değer medyandır: $80$.", "Çeldirici: $x$'i bulmadan sıralayıp ortancayı yanlış seçmek ya da ortalama $76$'yı (B) medyan sanmak yaygın hatadır."],
      answer: "$80$",
    },
    {
      id: "veri-istatistik-tyt-03",
      difficulty: "Orta",
      prompt: "Bir manavın bir hafta boyunca sattığı karpuz sayıları aşağıdaki sütun grafiğinde verilmiştir. Dört günün satışları: Pazartesi $4$, Salı $8$, Çarşamba $6$, Perşembe $10$. Bu dört günün satış verilerinin **ortalaması ile medyanı** arasındaki fark kaçtır?",
      options: ["$0$", "$1$", "$2$", "$3$", "$4$"],
      correct: 0,
      solution: ["Ortalama: $\\dfrac{4+8+6+10}{4}=\\dfrac{28}{4}=7$.", "Sırala: $4,\\ 6,\\ 8,\\ 10$.", "Medyan (çift veri): $\\dfrac{6+8}{2}=7$.", "Fark: $7-7=0$.", "Çeldirici: sütunları sırasız (grafikteki gün sırasıyla) alıp medyanı $\\frac{8+6}{2}=7$ dışında yanlış hesaplamak ya da medyanı tek değer sanmak yaygın hatadır."],
      answer: "$0$",
    },
    {
      id: "veri-istatistik-tyt-04",
      difficulty: "Orta",
      prompt: "$40$ kişilik bir grubun en sevdiği meyve daire grafiğinde gösterilmiştir. **Elma** dilimi $90°$, **muz** dilimi $108°$'lik merkez açısına sahiptir. Elmayı seçenlerin sayısı, muzu seçenlerin sayısından kaç **fazla ya da eksiktir**?",
      options: ["$2$ eksik", "$2$ fazla", "$4$ eksik", "$4$ fazla", "eşit"],
      correct: 0,
      solution: ["Elma: $\\dfrac{90}{360}\\cdot 40=\\dfrac{1}{4}\\cdot 40=10$ kişi.", "Muz: $\\dfrac{108}{360}\\cdot 40=\\dfrac{3}{10}\\cdot 40=12$ kişi.", "Fark: $10-12=-2$, yani elmayı seçenler $2$ kişi **eksiktir**.", "Çeldirici: açı farkını ($108-90=18$) doğrudan kişi farkı sanmak tipik hatadır."],
      answer: "$2$ eksik",
    },
    {
      id: "veri-istatistik-tyt-05",
      difficulty: "Zor",
      prompt: "$6$ kişilik bir takımın yaşları $14,\\ 15,\\ 15,\\ 16,\\ 18,\\ x$ şeklindedir. Bu verilerin **açıklığı $7$** olduğuna göre $x$'in alabileceği **en büyük** değer kaçtır?",
      options: ["$11$", "$18$", "$21$", "$22$", "$25$"],
      correct: 2,
      solution: ["$x$ dışındaki değerlerde en küçük $14$, en büyük $18$.", "$x$ en büyük değer ise açıklık $x-14=7$, buradan $x=21$.", "($x$ en küçük olsaydı $18-x=7$, $x=11$ olurdu; bu küçük değerdir.) En büyük $x=21$.", "Çeldirici: en küçük durumu ($x=11$, A) ile en büyük durumu karıştırmak yaygın hatadır."],
      answer: "$21$",
    },
    {
      id: "veri-istatistik-tyt-06",
      difficulty: "Kolay",
      prompt: "$2,\\ 4,\\ 4,\\ 6,\\ 8$ verilerinin modu kaçtır?",
      options: ["$2$", "$3$", "$4$", "$6$", "$8$"],
      correct: 2,
      solution: ["En çok tekrar eden değer $4$'tür (iki kez).", "Çeldirici: modu ortalama ($\\frac{24}{5}=4{,}8$) ya da medyan ($4$) ile karıştırmamaya dikkat; burada medyan da $4$ olsa da soru modu sorar."],
      answer: "$4$",
    },
  ],
};

export default quiz;
