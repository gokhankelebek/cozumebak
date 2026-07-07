import type { TopicQuiz } from "./types";

// olasilik-tyt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "olasilik-tyt",
  questions: [
    {
      id: "olasilik-tyt-01",
      difficulty: "Orta",
      prompt: "Bir sınıftaki $30$ öğrencinin $18$'i İngilizce, $12$'si Almanca kursuna gitmektedir. Bu öğrencilerden $5$'i **her iki kursa** birden gitmektedir. Sınıftan rastgele seçilen bir öğrencinin **hiçbir kursa gitmeme** olasılığı kaçtır?",
      options: ["$\\dfrac{1}{6}$", "$\\dfrac{1}{5}$", "$\\dfrac{1}{4}$", "$\\dfrac{7}{30}$", "$\\dfrac{1}{3}$"],
      correct: 0,
      solution: ["En az bir kursa giden: $18+12-5=25$ öğrenci.", "Hiçbir kursa gitmeyen: $30-25=5$ öğrenci.", "Olasılık: $P=\\dfrac{5}{30}=\\dfrac{1}{6}$."],
      answer: "$\\dfrac{1}{6}$",
    },
    {
      id: "olasilik-tyt-02",
      difficulty: "Kolay",
      prompt: "Bir torbada $4$ kırmızı, $3$ mavi ve $5$ sarı bilye vardır. Torbadan rastgele **bir** bilye çekiliyor. Çekilen bilyenin **kırmızı olmama** olasılığı kaçtır?",
      options: ["$\\dfrac{1}{3}$", "$\\dfrac{5}{12}$", "$\\dfrac{1}{2}$", "$\\dfrac{2}{3}$", "$\\dfrac{3}{4}$"],
      correct: 3,
      solution: ["Toplam bilye: $4+3+5=12$.", "Kırmızı gelme: $P(K)=\\dfrac{4}{12}=\\dfrac{1}{3}$.", "Kırmızı olmama: $P(K')=1-\\dfrac{1}{3}=\\dfrac{2}{3}$."],
      answer: "$\\dfrac{2}{3}$",
    },
    {
      id: "olasilik-tyt-03",
      difficulty: "Orta",
      prompt: "İki zar birlikte atılıyor. Üst yüzlerdeki sayıların **çarpımının çift** olma olasılığı kaçtır?",
      options: ["$\\dfrac{1}{4}$", "$\\dfrac{1}{2}$", "$\\dfrac{5}{9}$", "$\\dfrac{2}{3}$", "$\\dfrac{3}{4}$"],
      correct: 4,
      solution: ["Tüm durum: $6\\cdot 6=36$.", "Çarpım tek $\\Leftrightarrow$ iki zar da tek: her zar için $\\{1,3,5\\}$, yani $3\\cdot 3=9$ durum.", "Çarpım çift: $36-9=27$ durum, $P=\\dfrac{27}{36}=\\dfrac{3}{4}$."],
      answer: "$\\dfrac{3}{4}$",
    },
    {
      id: "olasilik-tyt-04",
      difficulty: "Orta",
      prompt: "Bir öğrencinin sınava geç kalma olasılığı $0{,}2$'dir. İki gün üst üste sınava giren bu öğrencinin **iki gün de zamanında** gelme olasılığı kaçtır? (Günler birbirinden bağımsızdır.)",
      options: ["$0{,}04$", "$0{,}16$", "$0{,}36$", "$0{,}64$", "$0{,}80$"],
      correct: 3,
      solution: ["Bir günde zamanında gelme: $1-0{,}2=0{,}8$.", "İki gün bağımsız, \"iki gün de\" çarpmadır: $0{,}8\\cdot 0{,}8=0{,}64$."],
      answer: "$0{,}64$",
    },
    {
      id: "olasilik-tyt-05",
      difficulty: "Orta",
      prompt: "Bir kutuda $1$'den $10$'a kadar numaralanmış $10$ kart vardır. Kutudan rastgele **bir** kart çekiliyor. Çekilen kartın üzerindeki sayının **asal ya da $6$'nın katı** olma olasılığı kaçtır?",
      options: ["$\\dfrac{2}{5}$", "$\\dfrac{1}{2}$", "$\\dfrac{3}{5}$", "$\\dfrac{7}{10}$", "$\\dfrac{4}{5}$"],
      correct: 1,
      solution: ["Asal sayılar: $\\{2,3,5,7\\}$ → $4$ tane.", "$6$'nın katları (1–10): $\\{6\\}$ → $1$ tane.", "Ortak eleman yok ($6$ asal değil), olaylar ayrık: $4+1=5$ uygun durum.", "Olasılık: $P=\\dfrac{5}{10}=\\dfrac{1}{2}$."],
      answer: "$\\dfrac{1}{2}$",
    },
    {
      id: "olasilik-tyt-06",
      difficulty: "Orta",
      prompt: "Adil bir madeni para $3$ kez atılıyor. Tam olarak $2$ kez yazı gelme olasılığı kaçtır?",
      options: ["$\\dfrac{1}{16}$", "$\\dfrac{3}{8}$", "$\\dfrac{1}{2}$", "$\\dfrac{5}{8}$", "$\\dfrac{3}{4}$"],
      correct: 1,
      solution: ["Örnek uzay $2^{3}=8$ eş olasılıklı durum.", "Tam $2$ yazı: $C(3,2)=3$ durum, $P=\\dfrac{3}{8}$."],
      answer: "$\\dfrac{3}{8}$",
    },
  ],
};

export default quiz;
