import type { TopicQuiz } from "./types";

// uslu-ifadeler — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "uslu-ifadeler",
  questions: [
    {
      id: "uslu-ifadeler-01",
      difficulty: "Kolay",
      prompt: "Bir veri paketinde hücre sayısı $\\dfrac{2^{8}\\cdot 4^{2}}{8^{3}}$ formülüyle hesaplanıyor. Buna göre sonuç kaçtır?",
      options: ["$2$", "$4$", "$8$", "$16$", "$32$"],
      correct: 2,
      solution: ["Taban $2$'ye çevir: $4^{2}=2^{4}$, $8^{3}=2^{9}$.", "Pay: $2^{8}\\cdot 2^{4}=2^{12}$. İfade $\\dfrac{2^{12}}{2^{9}}=2^{3}$.", "$2^{3}=8$."],
      answer: "$8$",
    },
    {
      id: "uslu-ifadeler-02",
      difficulty: "Kolay",
      prompt: "Bir sunucu log dosyasında kayıt sayısı $\\dfrac{9\\cdot 3^{5}}{3^{7}}$ ile modelleniyor. Buna göre sadeleştirilmiş değer kaçtır?",
      options: ["$\\dfrac{1}{9}$", "$\\dfrac{1}{3}$", "$3$", "$9$", "$1$"],
      correct: 4,
      solution: ["$9=3^{2}$ olduğundan pay $3^{2}\\cdot 3^{5}=3^{7}$.", "$\\dfrac{3^{7}}{3^{7}}=1$."],
      answer: "$1$",
    },
    {
      id: "uslu-ifadeler-03",
      difficulty: "Kolay",
      prompt: "$\\dfrac{2^{10}}{2^{7}\\cdot 2^{2}}$ ifadesi, bir algoritmanın adım sayısını veriyor. Buna göre bu ifade kaçtır?",
      options: ["$2$", "$4$", "$8$", "$16$", "$32$"],
      correct: 0,
      solution: ["Payda: $2^{7}\\cdot 2^{2}=2^{9}$.", "$\\dfrac{2^{10}}{2^{9}}=2^{1}=2$."],
      answer: "$2$",
    },
    {
      id: "uslu-ifadeler-04",
      difficulty: "Orta",
      prompt: "Bir hücre her bölünmede ikiye ayrılmaktadır. Başlangıçta tek bir hücre varken $6$ bölünme sonunda oluşan hücre sayısı $a$, $4$ bölünme sonunda oluşan hücre sayısı $b$ olarak gösteriliyor. Buna göre $\\dfrac{a}{b}$ oranı kaçtır?",
      options: ["$2$", "$4$", "$8$", "$16$", "$32$"],
      correct: 1,
      solution: ["$6$ bölünme sonunda $a=2^{6}$, $4$ bölünme sonunda $b=2^{4}$ hücre oluşur.", "Oranı yaz: $\\dfrac{a}{b}=\\dfrac{2^{6}}{2^{4}}=2^{6-4}=2^{2}=4$.", "Çeldirici: $6-4$ yerine $6+4$ veya $6\\cdot 4$ alınırsa yanlış şıklara düşülür."],
      answer: "$4$",
    },
    {
      id: "uslu-ifadeler-05",
      difficulty: "Orta",
      prompt: "Bir veri merkezinde bir dosyanın boyutu $2^{30}$ bayttır. $1$ kilobayt $2^{10}$ bayt, $1$ megabayt ise $2^{10}$ kilobayt olduğuna göre, bu dosya kaç megabayttır?",
      options: ["$2^{5}$", "$2^{10}$", "$2^{15}$", "$2^{20}$", "$2^{3}$"],
      correct: 1,
      solution: ["$1$ megabayt $=2^{10}$ kilobayt $=2^{10}\\cdot 2^{10}$ bayt $=2^{20}$ bayttır.", "Dosya boyutunu megabayta çevir: $\\dfrac{2^{30}}{2^{20}}=2^{30-20}=2^{10}$.", "Çeldirici A ($2^{5}$): yalnızca tek dönüşüm yapılırsa oluşan yanlıştır."],
      answer: "$2^{10}$",
    },
    {
      id: "uslu-ifadeler-06",
      difficulty: "Orta",
      prompt: "Bir gökbilimci, iki yıldız arasındaki uzaklığı $1{,}2\\cdot 10^{9}$ km, bir başka iki yıldız arasındaki uzaklığı ise $4\\cdot 10^{6}$ km olarak ölçüyor. Birinci uzaklık, ikincinin kaç katıdır?",
      options: ["$30$", "$300$", "$3000$", "$4{,}8$", "$48$"],
      correct: 1,
      solution: ["Oranı kur: $\\dfrac{1{,}2\\cdot 10^{9}}{4\\cdot 10^{6}}$.", "Katsayıları böl: $\\dfrac{1{,}2}{4}=0{,}3$.", "$10$'un kuvvetlerinde üsleri çıkar: $\\dfrac{10^{9}}{10^{6}}=10^{3}$.", "Birleştir: $0{,}3\\cdot 10^{3}=300$.", "Çeldirici E ($48$): üsler yanlışlıkla bölünmeyip katsayı ters alınırsa oluşur."],
      answer: "$300$",
    },
    {
      id: "uslu-ifadeler-07",
      difficulty: "Orta",
      prompt: "Bir oyunda her yeni bölümde puan, bir önceki bölümün $3$ katına çıkmaktadır. Bir oyuncu $1.$ bölümde $3^{2}$ puan kazandıysa, $5.$ bölümde kazandığı puan kaçtır?",
      options: ["$3^{4}$", "$3^{5}$", "$3^{6}$", "$3^{7}$", "$3^{10}$"],
      correct: 2,
      solution: ["$1.$ bölümden $5.$ bölüme $4$ adım vardır; her adımda $3$ ile çarpılır, yani toplam çarpan $3^{4}$'tür.", "$5.$ bölüm puanı: $3^{2}\\cdot 3^{4}=3^{2+4}=3^{6}$.", "Çeldirici E ($3^{10}$): üsler toplanacakken $2\\cdot 5$ gibi çarpılırsa oluşan yanlıştır."],
      answer: "$3^{6}$",
    },
  ],
};

export default quiz;
