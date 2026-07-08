import type { TopicQuiz } from "./types";

// mutlak-deger-fonksiyonlari-9 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "mutlak-deger-fonksiyonlari-9",
  questions: [
    {
      id: "mutlak-deger-fonksiyonlari-9-01",
      difficulty: "Kolay",
      prompt: "$|{-6}|-|{-4}|+|2|\\cdot|{-1}|$ işleminin sonucu kaçtır?",
      options: ["$0$", "$4$", "$8$", "$-4$", "$12$"],
      correct: 1,
      solution: ["Her mutlak değeri ayrı ayrı al: $|-6|=6$, $|-4|=4$, $|2|=2$, $|-1|=1$.", "Çarpmayı önce yap: $|2|\\cdot|{-1}|=2\\cdot 1=2$.", "İşlemi tamamla: $6-4+2=4$."],
      answer: "$4$.",
    },
    {
      id: "mutlak-deger-fonksiyonlari-9-02",
      difficulty: "Kolay",
      prompt: "$f(x)=|x-4|+1$ fonksiyonunun grafiğinin tepe (kırılma) noktası aşağıdakilerden hangisidir?",
      options: ["$(-4,\\ 1)$", "$(4,\\ -1)$", "$(4,\\ 1)$", "$(-4,\\ -1)$", "$(1,\\ 4)$"],
      correct: 2,
      solution: ["Tepe noktasının apsisi, mutlak değerin içini sıfır yapan değerdir: $x-4=0\\Rightarrow x=4$.", "Dışarıdaki sabit ordinatı verir: $+1$.", "Tepe noktası $(4,\\ 1)$'dir."],
      answer: "Tepe noktası $(4,\\ 1)$.",
    },
    {
      id: "mutlak-deger-fonksiyonlari-9-03",
      difficulty: "Orta",
      prompt: "$|3x-2|=7$ denkleminin çözümlerinin toplamı kaçtır?",
      options: ["$\\dfrac{4}{3}$", "$3$", "$-\\dfrac{5}{3}$", "$\\dfrac{14}{3}$", "$-3$"],
      correct: 0,
      solution: ["İki duruma ayır: $3x-2=7$ veya $3x-2=-7$.", "Birincisi: $3x=9\\Rightarrow x=3$.", "İkincisi: $3x=-5\\Rightarrow x=-\\dfrac{5}{3}$.", "Toplam: $3+\\left(-\\dfrac{5}{3}\\right)=\\dfrac{9-5}{3}=\\dfrac{4}{3}$."],
      answer: "$\\dfrac{4}{3}$.",
    },
    {
      id: "mutlak-deger-fonksiyonlari-9-04",
      difficulty: "Orta",
      prompt: "$f(x)=-|x+2|+6$ fonksiyonunun alabileceği en büyük değer kaçtır ve bu değer hangi $x$ için alınır?",
      options: ["En büyük değer $6$, $x=2$'de", "En büyük değer $6$, $x=-2$'de", "En küçük değer $6$, $x=-2$'de", "En büyük değer $-6$, $x=-2$'de", "En büyük değer $8$, $x=-2$'de"],
      correct: 1,
      solution: ["Baştaki eksi işareti V'yi ters çevirir; ters V'de tepe en büyük değeri verir.", "İçini sıfır yap: $x+2=0\\Rightarrow x=-2$; bu noktada $|x+2|=0$.", "$f(-2)=-0+6=6$; en büyük değer $6$'dır ve $x=-2$'de alınır."],
      answer: "En büyük değer $6$, $x=-2$'de.",
    },
    {
      id: "mutlak-deger-fonksiyonlari-9-05",
      difficulty: "Orta",
      prompt: "Bir soğuk hava deposunun sıcaklığı $x$ (°C) olsun. Depo, ideal sıcaklık olan $4$°C'den uzaklığı $|x-4|$ ile ölçülüyor. Bu uzaklığın $3$'e eşit olduğu ($|x-4|=3$) sıcaklıklardan büyük olanı kaç °C'dir?",
      options: ["$1$", "$3$", "$4$", "$7$", "$12$"],
      correct: 3,
      solution: ["İki duruma ayır: $x-4=3$ veya $x-4=-3$.", "Birincisi: $x=7$.", "İkincisi: $x=1$.", "Sıcaklıklar $7$°C ve $1$°C'dir; büyük olanı $7$°C'dir."],
      answer: "$7$°C.",
    },
    {
      id: "mutlak-deger-fonksiyonlari-9-06",
      difficulty: "Zor",
      prompt: "$|2x+1|=|x-4|$ denkleminin çözümlerinin çarpımı kaçtır?",
      options: ["$-5$", "$1$", "$-4$", "$5$", "$-\\dfrac{5}{3}$"],
      correct: 0,
      solution: ["$|A|=|B|$ ise $A=B$ veya $A=-B$ yazılır.", "Birinci durum: $2x+1=x-4\\Rightarrow x=-5$.", "İkinci durum: $2x+1=-(x-4)\\Rightarrow 2x+1=-x+4\\Rightarrow 3x=3\\Rightarrow x=1$.", "Çarpım: $(-5)\\cdot 1=-5$."],
      answer: "$-5$.",
    },
  ],
};

export default quiz;
