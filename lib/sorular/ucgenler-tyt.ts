import type { TopicQuiz } from "./types";

// ucgenler-tyt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "ucgenler-tyt",
  questions: [
    {
      id: "ucgenler-tyt-01",
      difficulty: "Kolay",
      prompt: "Bir üçgenin iç açıları $2x°$, $3x°$ ve $4x°$'dir. Buna göre en uzun kenar hangi açının karşısındadır?",
      options: ["$2x$", "$3x$", "$4x$", "$2x$ ve $3x$", "Üç kenar eşit"],
      correct: 2,
      solution: ["İç açılar toplamı: $2x+3x+4x=9x=180°\\Rightarrow x=20°$.", "Açılar $40°$, $60°$, $80°$; en büyük açı $4x=80°$.", "Büyük açının karşısında en uzun kenar bulunur."],
      answer: "$4x$",
    },
    {
      id: "ucgenler-tyt-02",
      difficulty: "Kolay",
      prompt: "Bir üçgende iki iç açı $40°$ ve $65°$'dir. Üçüncü köşedeki **dış açının** ölçüsü kaç derecedir?",
      options: ["$75$", "$85$", "$95$", "$105$", "$115$"],
      correct: 3,
      solution: ["Dış açı, komşu olmayan iki iç açının toplamına eşittir.", "$40°+65°=105°$."],
      answer: "$105$",
    },
    {
      id: "ucgenler-tyt-03",
      difficulty: "Orta",
      prompt: "Kenar uzunlukları $7$, $10$ ve $x$ (tam sayı) olan bir üçgende $x$'in alabileceği **en büyük** tam sayı değeri kaçtır?",
      options: ["$15$", "$16$", "$17$", "$18$", "$19$"],
      correct: 1,
      solution: ["$|b-c| < x < b+c\\Rightarrow 3 < x < 17$.", "$x$ tam sayı ve $17$'den küçük olmalı; en büyük değer $16$."],
      answer: "$16$",
    },
    {
      id: "ucgenler-tyt-04",
      difficulty: "Orta",
      prompt: "Bir bahçıvan, üçgen biçimli bir tarhın kenarlarına çit çekecektir. İki kenarın uzunlukları $13$ m ve $20$ m'dir; üçüncü kenarın uzunluğu da tam metre olarak ölçülmüştür. Bahçıvan toplam çit uzunluğunu en aza indirmek istiyor. Buna göre çekilecek en az çit uzunluğu kaç metredir?",
      options: ["$40$", "$41$", "$42$", "$43$", "$44$"],
      correct: 1,
      solution: ["Üçgen eşitsizliği: $7<x<33$.", "Çevre en küçük olsun: $x$'in en küçük tam değeri $8$.", "Çevre: $13+20+8=41$ m.", "Çeldirici: $x=7$ alınırsa üçgen oluşmaz (sınır değer dâhil değil), çevre $40$ olmaz."],
      answer: "$41$",
    },
    {
      id: "ucgenler-tyt-05",
      difficulty: "Orta",
      prompt: "Bir üçgen çatı makasında tepe açısı, taban açılarından birinin $3$ katıdır. Üçgen ikizkenar olup taban açıları birbirine eşittir. Buna göre tepe açısının ölçüsü kaç derecedir?",
      options: ["$96$", "$100$", "$108$", "$120$", "$135$"],
      correct: 2,
      solution: ["Taban açıları eşit, her biri $t$; tepe açısı $3t$.", "İç açılar toplamı: $t+t+3t=180°\\Rightarrow 5t=180°\\Rightarrow t=36°$.", "Tepe açısı $3t=108°$.", "Çeldirici: $36°$ taban açısıdır, $3\\cdot 36°=108°$ tepe açısıdır; $t$'yi tepe sanmak yanlış."],
      answer: "$108$",
    },
    {
      id: "ucgenler-tyt-06",
      difficulty: "Zor",
      prompt: "Bir üçgende $A$ açısı $80°$'dir. $B$ ve $C$ köşelerindeki **iç açıortaylar**, üçgenin içinde $P$ noktasında kesişiyor. Buna göre $\\widehat{BPC}$ açısının ölçüsü kaç derecedir?",
      options: ["$110$", "$120$", "$125$", "$130$", "$140$"],
      correct: 3,
      solution: ["$B+C=180°-80°=100°$; açıortaylar bunların yarısını alır: $\\dfrac{B}{2}+\\dfrac{C}{2}=50°$.", "$BPC$ üçgeninde: $\\widehat{BPC}=180°-\\left(\\dfrac{B}{2}+\\dfrac{C}{2}\\right)=180°-50°=130°$.", "Pratik bağıntıyla kontrol: $90°+\\dfrac{80°}{2}=90°+40°=130°$.", "Çeldirici: $90°-\\dfrac{A}{2}=50°$ (iç değil dış açıortay formülü) burada geçersizdir."],
      answer: "$130$",
    },
  ],
};

export default quiz;
