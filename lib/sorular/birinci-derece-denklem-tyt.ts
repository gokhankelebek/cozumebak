import type { TopicQuiz } from "./types";

// birinci-derece-denklem-tyt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "birinci-derece-denklem-tyt",
  questions: [
    {
      id: "birinci-derece-denklem-tyt-01",
      difficulty: "Kolay",
      prompt: "Bir otoparkta saatlik ücret $20$ TL'dir; ayrıca giriş için sabit $15$ TL alınır. Bir sürücü toplam $95$ TL ödediğine göre aracını kaç saat park etmiştir?",
      options: ["$3$", "$4$", "$5$", "$6$", "$7$"],
      correct: 1,
      solution: ["Saat sayısına $x$ diyelim: $15+20x=95$.", "Sabiti at: $20x=80$.", "Katsayıya böl: $x=4$. Çeldirici C) $5$, sabit girişi unutup $\\dfrac{95}{20}$ hesaplamaktan doğar; B doğru."],
      answer: "$4$",
    },
    {
      id: "birinci-derece-denklem-tyt-02",
      difficulty: "Orta",
      prompt: "Bir baba ile oğlunun yaşları toplamı $46$'dır. Baba, oğlunun yaşının $3$ katından $2$ yaş küçüktür. Buna göre oğlun yaşı kaçtır?",
      options: ["$10$", "$11$", "$12$", "$13$", "$14$"],
      correct: 2,
      solution: ["Oğul $x$, baba $3x-2$.", "Toplam: $x+(3x-2)=46\\Rightarrow 4x-2=46$.", "$4x=48\\Rightarrow x=12$.", "Doğrulama: baba $3\\cdot 12-2=34$; $34+12=46$. Çeldirici A) $10$, denklemi $4x+2=46$ kurup işaret hatasından gelir; C doğru."],
      answer: "$12$",
    },
    {
      id: "birinci-derece-denklem-tyt-03",
      difficulty: "Orta",
      prompt: "Bir asansörün taşıyabileceği toplam ağırlık en fazla $600$ kg'dır. İçinde $90$ kg'lık bir kasa varken, ortalama $75$ kg olan kişilerden en fazla kaçı asansöre binebilir?",
      options: ["$5$", "$6$", "$7$", "$8$", "$9$"],
      correct: 1,
      solution: ["Kişi sayısı $x$: $90+75x\\le 600$.", "Sabiti at: $75x\\le 510$.", "Böl: $x\\le 6{,}8$.", "En fazla tam sayı $6$. Çeldirici C) $7$, $6{,}8$'i yukarı yuvarlamaktan; B doğru."],
      answer: "$6$",
    },
    {
      id: "birinci-derece-denklem-tyt-04",
      difficulty: "Orta",
      prompt: "$3x-2 < 5x+8$ eşitsizliğini sağlayan en küçük tam sayı kaçtır?",
      options: ["$-6$", "$-5$", "$-4$", "$-3$", "$-2$"],
      correct: 2,
      solution: ["Bilinmeyenleri sola, sayıları sağa: $3x-5x < 8+2\\Rightarrow -2x < 10$.", "Negatif katsayıya böl, yön değişir: $x > -5$.", "$x>-5$'i sağlayan en küçük tam sayı $-4$'tür ($-5$ dahil değil). Çeldirici B) $-5$, ucu dahil sanmaktan; C doğru."],
      answer: "$-4$",
    },
    {
      id: "birinci-derece-denklem-tyt-05",
      difficulty: "Orta",
      prompt: "Bir öğrenci sınavdan kalan süresini hesaplıyor: çözdüğü soru sayısının $4$ katının $6$ eksiği, çözmediği soru sayısının $2$ katına eşit. Sınavda toplam $30$ soru olduğuna göre öğrenci kaç soru çözmüştür?",
      options: ["$9$", "$10$", "$11$", "$12$", "$13$"],
      correct: 2,
      solution: ["Çözülen $x$, çözülmeyen $30-x$.", "Denklem: $4x-6=2(30-x)$.", "Dağıt: $4x-6=60-2x$.", "Topla: $6x=66\\Rightarrow x=11$.", "Doğrulama: çözülen $11$, çözülmeyen $19$; $4\\cdot 11-6=38$ ve $2\\cdot 19=38$. Eşit."],
      answer: "$11$",
    },
    {
      id: "birinci-derece-denklem-tyt-06",
      difficulty: "Zor",
      prompt: "$-3 \\le 2x-1 < 7$ çift eşitsizliğini sağlayan tam sayıların toplamı kaçtır?",
      options: ["$4$", "$5$", "$6$", "$7$", "$8$"],
      correct: 1,
      solution: ["Üç tarafa $+1$ ekle: $-2\\le 2x < 8$.", "Üç tarafı $2$'ye böl: $-1\\le x < 4$.", "Tam sayılar: $-1,\\,0,\\,1,\\,2,\\,3$ (sağ uç $4$ dahil değil).", "Toplam: $-1+0+1+2+3=5$. Çeldirici C) $6$, sağ uç $4$'ü dahil sanmaktan; B doğru."],
      answer: "$5$",
    },
  ],
};

export default quiz;
