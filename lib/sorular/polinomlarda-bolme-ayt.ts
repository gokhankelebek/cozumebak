import type { TopicQuiz } from "./types";

// polinomlarda-bolme-ayt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "polinomlarda-bolme-ayt",
  questions: [
    {
      id: "polinomlarda-bolme-ayt-01",
      difficulty: "Orta",
      prompt: "$P(x)=x^{3}+ax^{2}-4x+b$ polinomunun $(x-1)$ ile bölümünden kalan $6$, $(x+2)$ ile bölümünden kalan $0$'dır. Buna göre $a\\cdot b$ çarpımı kaçtır?",
      options: ["$-42$", "$-36$", "$-30$", "$-24$", "$-18$"],
      correct: 1,
      solution: ["$(x-1)$ ile bölümünden kalan $P(1)$'dir: $P(1)=1+a-4+b=a+b-3$. Kalan $6$ olduğundan $a+b-3=6 \\Rightarrow a+b=9$.", "$(x+2)=x-(-2)$ olduğundan kalan $P(-2)$'dir: $P(-2)=-8+4a+8+b=4a+b$. Kalan $0$ olduğundan $4a+b=0$.", "İki denklemi taraf tarafa çıkar: $(4a+b)-(a+b)=0-9 \\Rightarrow 3a=-9 \\Rightarrow a=-3$.", "$a=-3$'ü $a+b=9$'da yerine koy: $-3+b=9 \\Rightarrow b=12$.", "Çarpımı hesapla: $a\\cdot b=(-3)\\cdot 12=-36$."],
      answer: "$-36$",
    },
    {
      id: "polinomlarda-bolme-ayt-02",
      difficulty: "Orta",
      prompt: "Bir $P(x)$ polinomunun $(x-3)$ ile bölümünden kalan $5$, $(x+1)$ ile bölümünden kalan $-7$'dir. $P(x)$'in $(x-3)(x+1)$ ile bölümünden kalan $K(x)$ polinomudur. Buna göre $K(2)$ değeri kaçtır?",
      options: ["$-2$", "$0$", "$1$", "$2$", "$4$"],
      correct: 3,
      solution: ["Bölen ikinci dereceden olduğundan kalan en çok birinci derecedendir: $K(x)=mx+n$ al ve özdeşliği yaz: $P(x)=(x-3)(x+1)\\,Q(x)+mx+n$.", "$x=3$ koy: $P(3)=3m+n$. Kalan teoreminden $P(3)=5$, yani $3m+n=5$.", "$x=-1$ koy: $P(-1)=-m+n$. $(x+1)$ için $a=-1$ olduğundan $P(-1)=-7$, yani $-m+n=-7$.", "İki denklemi taraf tarafa çıkar: $(3m+n)-(-m+n)=5-(-7) \\Rightarrow 4m=12 \\Rightarrow m=3$.", "$m=3$'ü ilk denkleme koy: $9+n=5 \\Rightarrow n=-4$, böylece $K(x)=3x-4$.", "İstenen değer: $K(2)=3\\cdot 2-4=2$."],
      answer: "$2$",
    },
    {
      id: "polinomlarda-bolme-ayt-03",
      difficulty: "Orta",
      prompt: "$P(x)=2x^{3}-3x^{2}+kx-2$ polinomunun bir çarpanı $(x-2)$'dir. Buna göre $P(1)$ değeri kaçtır?",
      options: ["$-6$", "$-5$", "$-4$", "$-2$", "$0$"],
      correct: 2,
      solution: ["Çarpan teoremine göre $(x-2)$ çarpan ise $P(2)=0$ olmalıdır.", "Yerine yaz: $P(2)=2\\cdot 8-3\\cdot 4+2k-2=16-12+2k-2=2k+2$.", "Sıfıra eşitle: $2k+2=0 \\Rightarrow k=-1$, böylece $P(x)=2x^{3}-3x^{2}-x-2$.", "İstenen değeri hesapla: $P(1)=2-3-1-2=-4$."],
      answer: "$-4$",
    },
    {
      id: "polinomlarda-bolme-ayt-04",
      difficulty: "Kolay",
      prompt: "Bir $P(x)$ polinomunun $(x-2)$ ile bölümünden kalan $5$'tir. Buna göre $P(x)+x^{2}-3$ polinomunun $(x-2)$ ile bölümünden kalan kaçtır?",
      options: ["$4$", "$5$", "$6$", "$7$", "$8$"],
      correct: 2,
      solution: ["Kalan teoremine göre $(x-2)$ ile bölümden kalan, ifadenin $x=2$'deki değeridir.", "$P(x)$'in kalanı $5$ olduğundan $P(2)=5$.", "Yeni ifadeyi $x=2$'de hesapla: $P(2)+2^{2}-3=5+4-3=6$."],
      answer: "$6$",
    },
    {
      id: "polinomlarda-bolme-ayt-05",
      difficulty: "Orta",
      prompt: "$P(x)$ polinomunun $(x^{2}-3x+2)$ ile bölümünden kalan $2x+1$'dir. Buna göre $P(x)$ polinomunun $(x-1)$ ile bölümünden kalan kaçtır?",
      options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
      correct: 2,
      solution: ["Bölme özdeşliği: $P(x)=(x^{2}-3x+2)\\,Q(x)+(2x+1)$.", "$x^{2}-3x+2=(x-1)(x-2)$ olduğundan $x=1$ koyunca bölünen terim sıfırlanır: $P(1)=2\\cdot 1+1=3$.", "$(x-1)$ ile bölümden kalan, kalan teoremiyle $P(1)$'dir."],
      answer: "$3$",
    },
    {
      id: "polinomlarda-bolme-ayt-06",
      difficulty: "Orta",
      prompt: "$P(x)$ baş katsayısı $1$ olan üçüncü dereceden bir polinomdur. $P(x)$ polinomu $(x-1)$, $(x+2)$ ve $(x-3)$ ile tam bölünmektedir. Buna göre $P(x)$ polinomunun $(x-2)$ ile bölümünden kalan kaçtır?",
      options: ["$-4$", "$-2$", "$0$", "$2$", "$4$"],
      correct: 0,
      solution: ["$(x-1)$, $(x+2)$, $(x-3)$ ile tam bölündüğünden bunlar çarpandır; baş katsayı $1$ ve derece $3$ olduğundan $P(x)=(x-1)(x+2)(x-3)$.", "$(x-2)$ ile bölümden kalan, kalan teoremiyle $P(2)$'dir.", "Yerine yaz: $P(2)=(2-1)(2+2)(2-3)=1\\cdot 4\\cdot(-1)=-4$."],
      answer: "$-4$",
    },
  ],
};

export default quiz;
