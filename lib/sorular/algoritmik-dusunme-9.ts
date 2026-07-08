import type { TopicQuiz } from "./types";

// algoritmik-dusunme-9 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "algoritmik-dusunme-9",
  questions: [
    {
      id: "algoritmik-dusunme-9-01",
      difficulty: "Kolay",
      prompt: "Aşağıdaki algoritmanın çıktısı kaçtır?\n\n$a=6$ al; $\\;b=a+4$ hesapla; $\\;c=b\\div 2$ hesapla; $\\;d=c\\cdot 3$ hesapla; $\\;d$'yi yaz.",
      options: ["$15$", "$5$", "$10$", "$30$", "$45$"],
      correct: 0,
      solution: ["$a=6$ al.", "$b=a+4=6+4=10$.", "$c=b\\div 2=10\\div 2=5$.", "$d=c\\cdot 3=5\\cdot 3=15$.", "Yazılan değer $d=15$'tir."],
      answer: "$15$",
    },
    {
      id: "algoritmik-dusunme-9-02",
      difficulty: "Kolay",
      prompt: "Bir algoritmanın taşıması gereken özellikler göz önüne alındığında, aşağıdakilerden hangisi bir algoritmada **bulunmaması** gereken bir durumdur?",
      options: ["Belirli sayıda adımda sona ermesi (sonlu olması)", "Sonsuza dek durmadan devam etmesi", "Her adımın tek anlamlı (belirli) olması", "Adımların belli bir düzende (sıralı) uygulanması", "Girdiden çıktıya ulaşması"],
      correct: 1,
      solution: ["İyi bir algoritma sonludur: belirli sayıda adımda sona erer.", "Ayrıca her adımı belirlidir (tek anlamlı), adımları sıralıdır ve bir girdiden çıktıya ulaşır.", "'Sonsuza dek durmadan devam etmesi' sonluluk özelliğine aykırıdır; bu bir algoritmada olmaması gereken bir durumdur.", "Diğer dört seçenek algoritmanın taşıması gereken özelliklerdir."],
      answer: "Sonsuza dek durmadan devam etmesi",
    },
    {
      id: "algoritmik-dusunme-9-03",
      difficulty: "Orta",
      prompt: "Bir mağazanın indirim algoritması şöyledir: Alışveriş tutarı $t$ TL alınır; **eğer** $t\\ge 200$ **ise** tutara $\\%20$ indirim uygulanır, **değilse** $\\%10$ indirim uygulanır; ödenecek tutar yazılır. $t=250$ TL için ödenecek tutar kaç TL'dir?",
      options: ["$225$", "$250$", "$200$", "$300$", "$50$"],
      correct: 2,
      solution: ["$t=250$ alınır.", "Koşulu denetle: $250\\ge 200$ doğrudur, o hâlde $\\%20$ indirim uygulanır.", "İndirimli tutar $=250\\cdot(1-0{,}20)=250\\cdot 0{,}80=200$.", "Ödenecek tutar $200$ TL'dir."],
      answer: "$200$ TL",
    },
    {
      id: "algoritmik-dusunme-9-04",
      difficulty: "Orta",
      prompt: "$T=0$, $\\;s=3$ ile başlayan ve \"$s\\le 12$ olduğu sürece $T=T+s$, $\\;s=s+3$\" döngüsünü çalıştıran algoritmanın çıktısı ($T$) kaçtır?",
      options: ["$18$", "$45$", "$42$", "$30$", "$15$"],
      correct: 3,
      solution: ["Döngüyü tur tur izle. Koşul her turun başında denetlenir.", "$s=3\\le 12$ doğru → $T=0+3=3$, $\\;s=6$.", "$s=6\\le 12$ doğru → $T=3+6=9$, $\\;s=9$.", "$s=9\\le 12$ doğru → $T=9+9=18$, $\\;s=12$.", "$s=12\\le 12$ doğru → $T=18+12=30$, $\\;s=15$.", "$s=15\\le 12$ yanlış → döngü durur. Çıktı $T=30$'dur."],
      answer: "$30$",
    },
    {
      id: "algoritmik-dusunme-9-05",
      difficulty: "Orta",
      prompt: "$x=3$ ile başlayan ve \"$x<50$ olduğu sürece $x=x\\cdot 2$\" döngüsünü çalıştıran algoritma, döngü bittikten sonra $x$'i yazıyor. Yazılan **son** $x$ değeri kaçtır?",
      options: ["$48$", "$24$", "$192$", "$50$", "$96$"],
      correct: 4,
      solution: ["Koşul her turun başında denetlenir.", "$x=3<50$ doğru → $x=6$.", "$x=6<50$ doğru → $x=12$.", "$x=12<50$ doğru → $x=24$.", "$x=24<50$ doğru → $x=48$.", "$x=48<50$ doğru → $x=96$.", "$x=96<50$ yanlış → döngü durur. Yazılan son değer $x=96$'dır."],
      answer: "$96$",
    },
    {
      id: "algoritmik-dusunme-9-06",
      difficulty: "Zor",
      prompt: "$k=100$, $\\;adim=0$ ile başlayan ve \"$k>0$ olduğu sürece $k=k-7$, $\\;adim=adim+1$\" döngüsünü çalıştıran algoritmada, döngü **kaç kez** döner (yani $adim$'ın son değeri kaçtır)?",
      options: ["$15$", "$14$", "$16$", "$13$", "$7$"],
      correct: 0,
      solution: ["Koşul her turun başında denetlenir: $k>0$ olduğu sürece bir tur daha işlenir.", "$k$'nın tur başındaki (pozitif) değerleri: $100, 93, 86, 79, 72, 65, 58, 51, 44, 37, 30, 23, 16, 9, 2$.", "Bu $15$ değerin her biri için $k>0$ doğrudur; dolayısıyla döngü $15$ kez işler.", "$15.$ turdan sonra $k=2-7=-5$ olur; sonraki denetimde $-5>0$ yanlış → döngü durur.", "$adim$ her turda $1$ arttığı için son değeri $15$'tir."],
      answer: "$15$",
    },
  ],
};

export default quiz;
