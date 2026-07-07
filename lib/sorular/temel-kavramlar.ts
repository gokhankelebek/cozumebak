import type { TopicQuiz } from "./types";

// temel-kavramlar — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "temel-kavramlar",
  questions: [
    {
      id: "temel-kavramlar-01",
      difficulty: "Kolay",
      prompt: "Bir müze rehberi, vitrindeki etiketlerde yalnızca $1$ ile $50$ arasındaki **asal** doğal sayıların yazılı olduğunu söylüyor. Buna göre vitrinde kaç etiket vardır?",
      options: ["$12$", "$15$", "$14$", "$16$", "$13$"],
      correct: 1,
      solution: ["$50$'ye kadar asallar: $2,3,5,7,11,13,17,19,23,29,31,37,41,43,47$.", "Say: toplam $15$ asal vardır ($1$ asal değildir, $4,6,8,\\dots$ asal değildir)."],
      answer: "$15$",
    },
    {
      id: "temel-kavramlar-02",
      difficulty: "Kolay",
      prompt: "Bir fen laboratuvarında tahtaya şu sayılar yazılmıştır: $\\sqrt{9}$, $0$, $\\pi$, $-\\dfrac{7}{4}$, $\\sqrt{6}$. Öğretmen, bunlardan kaçının **rasyonel sayı** ($\\mathbb{Q}$) olduğunu soruyor. Buna göre kaç tanesi rasyoneldir?",
      options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
      correct: 2,
      solution: ["$\\sqrt{9}=3$ tam sayıdır, rasyoneldir.", "$0$ tam sayıdır, rasyoneldir.", "$\\pi$ kesir olarak yazılamaz, irrasyoneldir.", "$-\\dfrac{7}{4}$ kesir biçimindedir, rasyoneldir.", "$\\sqrt{6}$ irrasyoneldir (içi tam kare değil).", "Rasyonel olanlar: $\\sqrt{9}$, $0$, $-\\dfrac{7}{4}$ → $3$ sayı."],
      answer: "$3$",
    },
    {
      id: "temel-kavramlar-03",
      difficulty: "Orta",
      prompt: "İki depo rafının kod numaraları $84$ ile $110$'dur. Yönetici, bu kodların **aralarında asal** olup olmadığını kontrol etmek istiyor. Buna göre ortak bölenleri yalnızca $1$ ise bu ifade doğru mudur; değilse $\\text{EBOB}(84,110)$ kaçtır?",
      options: ["$1$", "$5$", "$4$", "$2$", "$11$"],
      correct: 3,
      solution: ["$84=2^{2}\\cdot 3\\cdot 7$ ve $110=2\\cdot 5\\cdot 11$.", "Ortak asal çarpan yalnızca $2$'dir; $\\text{EBOB}(84,110)=2$.", "Ortak bölen $1$'den büyük olduğundan sayılar aralarında asal **değildir**."],
      answer: "$2$",
    },
    {
      id: "temel-kavramlar-04",
      difficulty: "Orta",
      prompt: "Bir robotik atölyesinde kutulara $\\sqrt{8},\\ \\sqrt{16},\\ \\sqrt{20},\\ \\sqrt{25},\\ \\sqrt{36}$ etiketleri yapıştırılmıştır. Eğitmen, **rasyonel sayı** değeri taşıyan etiketlerin üzerindeki sayıların (kök sonuçlarının) toplamını panoya yazacaktır. Buna göre panoya yazılan toplam kaçtır?",
      options: ["$11$", "$13$", "$15$", "$17$", "$9$"],
      correct: 2,
      solution: ["Kök içi tam kare olanlar rasyoneldir: $\\sqrt{16}=4$, $\\sqrt{25}=5$, $\\sqrt{36}=6$.", "$\\sqrt{8}$ ve $\\sqrt{20}$ tam kare değildir; irrasyoneldir, toplama katılmaz.", "Toplam: $4+5+6=15$."],
      answer: "$15$",
    },
    {
      id: "temel-kavramlar-05",
      difficulty: "Zor",
      prompt: "Bir öğrenci, $20$ ile $40$ arasındaki (uç değerler dahil) doğal sayıların içinden **asal** olanları bir listeye yazıyor. Listedeki asal sayı adedi $A$, en küçük ile en büyük asalın toplamı ise $T$ olsun. Buna göre $A+T$ kaçtır?",
      options: ["$60$", "$62$", "$64$", "$66$", "$68$"],
      correct: 2,
      solution: ["$20$–$40$ arasındaki asallar: $23,\\ 29,\\ 31,\\ 37$ (çiftler ve $21=3\\cdot7,\\ 25=5^2,\\ 27,\\ 33,\\ 35,\\ 39$ asal değildir).", "Asal sayı adedi $A=4$.", "En küçük $+$ en büyük: $T=23+37=60$.", "$A+T=4+60=64$. (Çeldirici: $A$'yı unutup yalnız $T=60$ demek A şıkkına, $1$'i asal sayıp fazladan saymak başka şıklara götürür.)"],
      answer: "$64$",
    },
    {
      id: "temel-kavramlar-06",
      difficulty: "Orta",
      prompt: "Bir oyun tasarımcısı, iki dişli çark kullanıyor: birincide $24$, ikincide $35$ diş var. İki çark başlangıç noktasından beraber dönmeye başladığında, başlangıç dişlerinin **yeniden aynı anda** temas etmesi için her çarkın tam tur sayısı en az olacak biçimde aranıyor. Bunun için tasarımcı önce $24$ ile $35$'in **aralarında asal** olup olmadığına bakıyor. Buna göre aşağıdakilerden hangisi doğrudur?",
      options: ["$\\text{EBOB}(24,35)=2$, aralarında asal değil", "$\\text{EBOB}(24,35)=1$, aralarında asal", "$\\text{EBOB}(24,35)=12$, aralarında asal değil", "$\\text{EBOB}(24,35)=7$, aralarında asal değil", "$\\text{EBOB}(24,35)=5$, aralarında asal değil"],
      correct: 1,
      solution: ["$24=2^{3}\\cdot 3$ ve $35=5\\cdot 7$.", "Ortak asal çarpan yoktur; $\\text{EBOB}(24,35)=1$.", "Ortak bölen yalnızca $1$ olduğundan sayılar **aralarında asaldır** (sayıların kendileri asal olmasa da)."],
      answer: "$\\text{EBOB}(24,35)=1$, aralarında asal",
    },
  ],
};

export default quiz;
