import type { TopicQuiz } from "./types";

// islemlerin-algoritmasi-10 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "islemlerin-algoritmasi-10",
  questions: [
    {
      id: "islemlerin-algoritmasi-10-01",
      difficulty: "Kolay",
      prompt: "Aşağıdaki algoritmanın $x=7$ için çıktısı kaçtır?\n\n\"$a=x-3$;$\\;b=a^2$;$\\;c=b+2$;$\\;c$'yi yaz\"",
      options: ["$16$", "$18$", "$20$", "$44$", "$51$"],
      correct: 1,
      solution: ["$a=x-3=7-3=4$ bulunur.", "$b=a^2=4^2=16$ bulunur.", "$c=b+2=16+2=18$ elde edilir.", "Çıktı $c=18$'dir."],
      answer: "$18$",
    },
    {
      id: "islemlerin-algoritmasi-10-02",
      difficulty: "Orta",
      prompt: "$x=4$ girdisi için iki algoritma tanımlanıyor:\n\n**A:** \"kare al, sonra $2$ çıkar\"\n\n**B:** \"$2$ çıkar, sonra kare al\"\n\nA'nın çıktısı ile B'nin çıktısının **farkı** (A$-$B) kaçtır?",
      options: ["$0$", "$6$", "$10$", "$12$", "$14$"],
      correct: 2,
      solution: ["A: önce kare al $\\Rightarrow 4^2=16$, sonra $2$ çıkar $\\Rightarrow 16-2=14$.", "B: önce $2$ çıkar $\\Rightarrow 4-2=2$, sonra kare al $\\Rightarrow 2^2=4$.", "Fark: $A-B=14-4=10$.", "Adım sırası değişince sonuç değişir."],
      answer: "$14-4=10$",
    },
    {
      id: "islemlerin-algoritmasi-10-03",
      difficulty: "Orta",
      prompt: "$f(x)=x+2$ ve $g(x)=3x$ fonksiyonları veriliyor. \"önce $f$, sonra $g$ uygula\" algoritmasının $x=4$ için çıktısı, yani $g(f(4))$ kaçtır?",
      options: ["$12$", "$14$", "$16$", "$18$", "$20$"],
      correct: 3,
      solution: ["Önce içteki $f$ çalışır: $f(4)=4+2=6$.", "Sonra dıştaki $g$ çalışır: $g(6)=3\\cdot 6=18$.", "Çıktı $g(f(4))=18$'dir.", "(Not: $f(g(4))=f(12)=14$ olurdu; sıra önemlidir.)"],
      answer: "$18$",
    },
    {
      id: "islemlerin-algoritmasi-10-04",
      difficulty: "Orta",
      prompt: "Aşağıdaki döngünün çıktısı $t$'nin son değeri kaçtır?\n\n\"$t=0$;$\\;i=1$ iken $i\\le 4$ olduğu sürece $t=t+i^2$, $i=i+1$\"",
      options: ["$10$", "$14$", "$16$", "$30$", "$36$"],
      correct: 3,
      solution: ["$i=1$: $t=0+1^2=1$.", "$i=2$: $t=1+2^2=5$.", "$i=3$: $t=5+3^2=14$.", "$i=4$: $t=14+4^2=30$.", "$i=5$ olunca $i\\le 4$ sağlanmaz ve döngü durur; çıktı $t=30$."],
      answer: "$30$",
    },
    {
      id: "islemlerin-algoritmasi-10-05",
      difficulty: "Orta",
      prompt: "Aşağıdaki döngünün çıktısı $p$'nin son değeri kaçtır?\n\n\"$p=1$;$\\;i=1$ iken $i\\le 3$ olduğu sürece $p=p\\cdot(i+1)$, $i=i+1$\"",
      options: ["$6$", "$8$", "$24$", "$27$", "$30$"],
      correct: 2,
      solution: ["$i=1$: $p=1\\cdot(1+1)=2$.", "$i=2$: $p=2\\cdot(2+1)=6$.", "$i=3$: $p=6\\cdot(3+1)=24$.", "$i=4$ olunca döngü durur; çıktı $p=24$."],
      answer: "$24$",
    },
    {
      id: "islemlerin-algoritmasi-10-06",
      difficulty: "Kolay",
      prompt: "Bir kargo firması, bir paketin ücretini şu algoritmayla hesaplıyor: \"kilo bilgisini al; $2$ ile çarp; sonucun üzerine sabit $5$ TL işlem bedeli ekle; çıkan değeri yaz.\" Buna göre $6$ kg'lık bir paketin ücreti kaç TL'dir?",
      options: ["$13$", "$17$", "$22$", "$40$", "$52$"],
      correct: 1,
      solution: ["Girdi: kilo $=6$.", "$2$ ile çarp: $2\\cdot 6=12$.", "$5$ TL işlem bedeli ekle: $12+5=17$.", "Ücret $17$ TL'dir. (İşlem sırasına dikkat: önce çarpma, sonra toplama.)"],
      answer: "$17$ TL",
    },
  ],
};

export default quiz;
