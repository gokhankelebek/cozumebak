import type { TopicQuiz } from "./types";

// ustel-fonksiyon-ayt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "ustel-fonksiyon-ayt",
  questions: [
    {
      id: "ustel-fonksiyon-ayt-01",
      difficulty: "Orta",
      prompt: "$4^{x}-6\\cdot 2^{x}+8=0$ denkleminin reel kökleri $x_1$ ve $x_2$'dir. Buna göre $x_1+x_2$ toplamı kaçtır?",
      options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
      correct: 2,
      solution: ["$4^{x}=\\left(2^{2}\\right)^{x}=\\left(2^{x}\\right)^{2}$ olduğundan $2^{x}=t$ değişken değiştirmesi yapalım ($t > 0$): denklem $t^{2}-6t+8=0$ olur.", "Çarpanlara ayır: $t^{2}-6t+8=(t-2)(t-4)=0$, yani $t=2$ veya $t=4$.", "Geri dön: $2^{x}=2 \\Rightarrow x_1=1$ ve $2^{x}=4=2^{2} \\Rightarrow x_2=2$.", "Toplamı bul: $x_1+x_2=1+2=3$."],
      answer: "$3$",
    },
    {
      id: "ustel-fonksiyon-ayt-02",
      difficulty: "Orta",
      prompt: "Bir $x$ reel sayısı için $3^{x+2}-3^{x+1}=54$ eşitliği sağlanmaktadır. Buna göre $9^{x}$ değeri kaçtır?",
      options: ["$27$", "$81$", "$243$", "$729$", "$2187$"],
      correct: 1,
      solution: ["Üslü ifadeleri ortak çarpan $3^{x}$ cinsinden yaz: $3^{x+2}=9\\cdot 3^{x}$ ve $3^{x+1}=3\\cdot 3^{x}$.", "Denklem $9\\cdot 3^{x}-3\\cdot 3^{x}=54$, yani $3^{x}(9-3)=54$ olur: $6\\cdot 3^{x}=54$.", "Buradan $3^{x}=9=3^{2}$, dolayısıyla $x=2$.", "İstenen $9^{x}=\\left(3^{x}\\right)^{2}=9^{2}=81$ (veya $9^{2}=81$)."],
      answer: "$81$",
    },
    {
      id: "ustel-fonksiyon-ayt-03",
      difficulty: "Orta",
      prompt: "$x$ bir tam sayı olmak üzere $\\left(\\dfrac{1}{2}\\right)^{2x-1}\\ge \\dfrac{1}{32}$ eşitsizliği veriliyor. Buna göre $x$'in alabileceği en büyük tam sayı değeri kaçtır?",
      options: ["$-1$", "$0$", "$1$", "$2$", "$3$"],
      correct: 4,
      solution: ["Sağ tarafı $\\dfrac12$ tabanında yaz: $\\dfrac{1}{32}=\\left(\\dfrac12\\right)^{5}$, böylece $\\left(\\dfrac12\\right)^{2x-1}\\ge \\left(\\dfrac12\\right)^{5}$.", "Taban $0 < \\dfrac12 < 1$ olduğundan fonksiyon azalandır; üsleri karşılaştırırken **yön değişir**: $2x-1\\le 5$.", "Çöz: $2x\\le 6 \\Rightarrow x\\le 3$.", "$x$ tam sayı ve $x\\le 3$ olduğundan en büyük değer $x=3$'tür."],
      answer: "$3$",
    },
    {
      id: "ustel-fonksiyon-ayt-04",
      difficulty: "Orta",
      prompt: "$2^{x}+2^{-x}=\\dfrac{5}{2}$ olduğuna göre $4^{x}+4^{-x}$ ifadesinin değeri kaçtır?",
      options: ["$\\dfrac{9}{4}$", "$\\dfrac{15}{4}$", "$\\dfrac{17}{4}$", "$\\dfrac{21}{4}$", "$\\dfrac{25}{4}$"],
      correct: 2,
      solution: ["$4^{x}+4^{-x}=\\left(2^{x}\\right)^{2}+\\left(2^{-x}\\right)^{2}$ olduğundan, $\\left(2^{x}+2^{-x}\\right)^{2}$ özdeşliğinden yararlanalım.", "Karesini al: $\\left(2^{x}+2^{-x}\\right)^{2}=4^{x}+2\\cdot 2^{x}\\cdot 2^{-x}+4^{-x}=4^{x}+4^{-x}+2$ (çünkü $2^{x}\\cdot 2^{-x}=2^{0}=1$).", "Sol taraf $\\left(\\dfrac{5}{2}\\right)^{2}=\\dfrac{25}{4}$ olduğundan $4^{x}+4^{-x}+2=\\dfrac{25}{4}$.", "Buradan $4^{x}+4^{-x}=\\dfrac{25}{4}-2=\\dfrac{25}{4}-\\dfrac{8}{4}=\\dfrac{17}{4}$."],
      answer: "$\\dfrac{17}{4}$",
    },
    {
      id: "ustel-fonksiyon-ayt-05",
      difficulty: "Orta",
      prompt: "$f(x)=3^{x}$ fonksiyonu için $f(a)=2$ ve $f(b)=5$ veriliyor. Buna göre $f(2a-b)$ ifadesinin değeri kaçtır?",
      options: ["$\\dfrac{2}{5}$", "$\\dfrac{4}{5}$", "$\\dfrac{5}{4}$", "$\\dfrac{5}{2}$", "$\\dfrac{25}{4}$"],
      correct: 1,
      solution: ["$f(a)=3^{a}=2$ ve $f(b)=3^{b}=5$ olarak verilmiş.", "İstenen $f(2a-b)=3^{2a-b}=\\dfrac{3^{2a}}{3^{b}}=\\dfrac{\\left(3^{a}\\right)^{2}}{3^{b}}$.", "Yerine yaz: $\\dfrac{2^{2}}{5}=\\dfrac{4}{5}$."],
      answer: "$\\dfrac{4}{5}$",
    },
    {
      id: "ustel-fonksiyon-ayt-06",
      difficulty: "Kolay",
      prompt: "Bir bakteri kültürünün sayısı $N(t)=N_0\\cdot 2^{t/3}$ ile modelleniyor; burada $t$ saat cinsindendir. Kültürdeki bakteri sayısının başlangıçtaki değerinin $16$ katına ulaşması için geçmesi gereken süre kaç saattir?",
      options: ["$6$", "$9$", "$12$", "$15$", "$48$"],
      correct: 2,
      solution: ["\"Başlangıç değerinin $16$ katı\" koşulu: $N(t)=16\\,N_0$, yani $N_0\\cdot 2^{t/3}=16\\,N_0$.", "$N_0$ sadeleşir: $2^{t/3}=16=2^{4}$.", "Üsleri eşitle: $\\dfrac{t}{3}=4 \\Rightarrow t=12$."],
      answer: "$12$",
    },
  ],
};

export default quiz;
