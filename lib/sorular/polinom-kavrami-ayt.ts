import type { TopicQuiz } from "./types";

// polinom-kavrami-ayt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "polinom-kavrami-ayt",
  questions: [
    {
      id: "polinom-kavrami-ayt-01",
      difficulty: "Orta",
      prompt: "Bir $P(x)$ polinomu için her $x$ gerçek sayısında $P(x-1)=x^2+3x$ eşitliği sağlanıyor. Buna göre, $P(x)$ polinomunun katsayılar toplamı ile sabit teriminin toplamı kaçtır?",
      options: ["$10$", "$12$", "$14$", "$16$", "$18$"],
      correct: 2,
      solution: ["Katsayılar toplamı $P(1)$'dir. $P(x-1)$ içinde $x-1=1$ olması için $x=2$ alınır: $P(1)=2^2+3\\cdot 2=4+6=10$.", "Sabit terim $P(0)$'dır. $x-1=0$ için $x=1$ alınır: $P(0)=1^2+3\\cdot 1=1+3=4$.", "İstenen toplam: $P(1)+P(0)=10+4=14$."],
      answer: "$14$",
    },
    {
      id: "polinom-kavrami-ayt-02",
      difficulty: "Orta",
      prompt: "Bir $P(x)$ polinomu her $x$ gerçek sayısı için $P(2x)-P(x)=9x^2+4x$ eşitliğini sağlıyor ve $P(0)=5$ tir. Buna göre, $P(x)$ polinomunun katsayılar toplamı kaçtır?",
      options: ["$9$", "$10$", "$11$", "$12$", "$13$"],
      correct: 3,
      solution: ["$P(x)=ax^2+bx+c$ alınsın. O hâlde $P(2x)=4ax^2+2bx+c$ olur.", "Fark: $P(2x)-P(x)=(4a-a)x^2+(2b-b)x+(c-c)=3ax^2+bx$.", "Bu ifade $9x^2+4x$'e özdeş: $3a=9\\Rightarrow a=3$ ve $b=4$.", "$P(0)=c=5$ verildiğinden $c=5$ bulunur.", "Katsayılar toplamı $P(1)=a+b+c=3+4+5=12$."],
      answer: "$12$",
    },
    {
      id: "polinom-kavrami-ayt-03",
      difficulty: "Orta",
      prompt: "$P(x)$ ve $Q(x)$ sıfırdan farklı polinomları için $\\deg\\big(P\\cdot Q\\big)=10$ ve $\\deg\\big(P^2\\cdot Q\\big)=15$ tir. Buna göre, $\\deg\\big(P^2\\cdot Q^3\\big)$ kaçtır?",
      options: ["$25$", "$27$", "$30$", "$33$", "$35$"],
      correct: 0,
      solution: ["$\\deg P=m$, $\\deg Q=n$ olsun. Çarpımda dereceler toplanır: $\\deg(P\\cdot Q)=m+n=10$.", "$\\deg(P^2\\cdot Q)=2m+n=15$.", "İki denklemi taraf tarafa çıkar: $(2m+n)-(m+n)=15-10\\Rightarrow m=5$, buradan $n=10-5=5$.", "İstenen: $\\deg(P^2\\cdot Q^3)=2m+3n=2\\cdot 5+3\\cdot 5=10+15=25$."],
      answer: "$25$",
    },
    {
      id: "polinom-kavrami-ayt-04",
      difficulty: "Orta",
      prompt: "$P(x)$ ikinci dereceden bir polinomdur ve her $x$ gerçek sayısı için $$P(x+1)=P(x)+2x+3$$ eşitliği sağlanmaktadır. $P(0)=4$ olduğuna göre $P(5)$ kaçtır?",
      options: ["$24$", "$29$", "$34$", "$39$", "$44$"],
      correct: 3,
      solution: ["Eşitlik bir ardışık fark bağıntısıdır. $x=0,1,2,3,4$ için yazıp toplayalım.", "$x=0:\\ P(1)=P(0)+3$. $x=1:\\ P(2)=P(1)+5$. $x=2:\\ P(3)=P(2)+7$. $x=3:\\ P(4)=P(3)+9$. $x=4:\\ P(5)=P(4)+11$.", "Taraf tarafa toplayıp sadeleştir: $P(5)=P(0)+(3+5+7+9+11)=P(0)+35$.", "$P(0)=4$ olduğundan $P(5)=4+35=39$."],
      answer: "$39$",
    },
    {
      id: "polinom-kavrami-ayt-05",
      difficulty: "Orta",
      prompt: "$P(x)$ ve $Q(x)$ polinomları için her $x$ gerçek sayısında $$P(x)=(x^{2}-1)\\,Q(x)+3x+5$$ eşitliği sağlanıyor. Buna göre $P(1)+P(-1)$ toplamı kaçtır?",
      options: ["$8$", "$9$", "$10$", "$12$", "$16$"],
      correct: 2,
      solution: ["$x=1$ koy: $x^2-1=0$ olduğundan ilk terim sıfırlanır; $P(1)=3\\cdot 1+5=8$.", "$x=-1$ koy: yine $x^2-1=0$; $P(-1)=3\\cdot(-1)+5=-3+5=2$.", "Toplam: $P(1)+P(-1)=8+2=10$."],
      answer: "$10$",
    },
    {
      id: "polinom-kavrami-ayt-06",
      difficulty: "Orta",
      prompt: "Baş katsayısı $2$ olan ikinci dereceden bir $P(x)$ polinomunun grafiği, $y$ eksenini $(0,6)$ noktasında kesmekte ve $x=2$ doğrusuna göre simetriktir. Buna göre $P(x)$ polinomunun katsayılar toplamı kaçtır?",
      options: ["$-3$", "$-1$", "$0$", "$2$", "$4$"],
      correct: 2,
      solution: ["Baş katsayı $2$ ve simetri ekseni $x=2$ olduğundan tepe biçiminde $P(x)=2(x-2)^2+k$ yazılır.", "Grafik $(0,6)$'dan geçer: $P(0)=2(0-2)^2+k=8+k=6\\Rightarrow k=-2$.", "Böylece $P(x)=2(x-2)^2-2$. Açık biçim: $2(x^2-4x+4)-2=2x^2-8x+6$.", "Katsayılar toplamı $P(1)=2-8+6=0$."],
      answer: "$0$",
    },
  ],
};

export default quiz;
