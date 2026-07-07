import type { TopicQuiz } from "./types";

// bileske-ters-fonksiyon-ayt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "bileske-ters-fonksiyon-ayt",
  questions: [
    {
      id: "bileske-ters-fonksiyon-ayt-01",
      difficulty: "Orta",
      prompt: "$f(x)=x+2$ ve $g(x)=3x-4$ fonksiyonları için $(f+g)(a)=10$ ve $(f\\cdot g)(b)=0$ ($b$ pozitif) eşitlikleri sağlanıyor. Buna göre $(f\\circ g)(a-b)$ değeri kaçtır?",
      options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
      correct: 2,
      solution: ["$(f+g)(x)=(x+2)+(3x-4)=4x-2$. $(f+g)(a)=10\\Rightarrow 4a-2=10\\Rightarrow a=3$.", "$(f\\cdot g)(x)=(x+2)(3x-4)=0\\Rightarrow x=-2$ ya da $x=\\dfrac{4}{3}$. $b$ pozitif olduğundan $b=\\dfrac{4}{3}$.", "$a-b=3-\\dfrac{4}{3}=\\dfrac{5}{3}$.", "$g\\!\\left(\\dfrac{5}{3}\\right)=3\\cdot\\dfrac{5}{3}-4=1$; $f(1)=1+2=3$."],
      answer: "$3$",
    },
    {
      id: "bileske-ters-fonksiyon-ayt-02",
      difficulty: "Orta",
      prompt: "$f(x)=ax+b$ doğrusal fonksiyonu $f(2)=7$ ve $f^{-1}(1)=-1$ koşullarını sağlamaktadır. Buna göre $a\\cdot b$ çarpımı kaçtır?",
      options: ["$4$", "$5$", "$6$", "$7$", "$8$"],
      correct: 2,
      solution: ["$f(2)=7\\Rightarrow 2a+b=7$.", "$f^{-1}(1)=-1$ demek $f(-1)=1$ demektir: $-a+b=1$.", "İki denklemi taraf tarafa çıkar: $3a=6\\Rightarrow a=2$, buradan $b=3$.", "$a\\cdot b=2\\cdot 3=6$."],
      answer: "$6$",
    },
    {
      id: "bileske-ters-fonksiyon-ayt-03",
      difficulty: "Orta",
      prompt: "$f(x)=2x+1$ ve $g(x)=x-3$ fonksiyonları veriliyor. Buna göre $(f\\circ g)^{-1}(5)$ değeri kaçtır?",
      options: ["$3$", "$4$", "$5$", "$6$", "$7$"],
      correct: 2,
      solution: ["Bileşke: $(f\\circ g)(x)=f(x-3)=2(x-3)+1=2x-5$.", "$(f\\circ g)^{-1}(5)$, $(f\\circ g)(x)=5$ olan $x$ değeridir: $2x-5=5\\Rightarrow x=5$."],
      answer: "$5$",
    },
    {
      id: "bileske-ters-fonksiyon-ayt-04",
      difficulty: "Zor",
      prompt: "Bire bir ve örten bir $f$ fonksiyonu için $f(2x-1)=3x+4$ eşitliği her $x$ için sağlanmaktadır. Buna göre $f^{-1}(13)$ değeri kaçtır?",
      options: ["$3$", "$5$", "$7$", "$9$", "$11$"],
      correct: 1,
      solution: ["$2x-1=t$ diyelim: $x=\\dfrac{t+1}{2}$. O hâlde $f(t)=3\\cdot\\dfrac{t+1}{2}+4=\\dfrac{3t+3}{2}+4=\\dfrac{3t+11}{2}$.", "Yani $f(x)=\\dfrac{3x+11}{2}$.", "$f^{-1}(13)=a \\iff f(a)=13$: $\\dfrac{3a+11}{2}=13 \\Rightarrow 3a+11=26 \\Rightarrow 3a=15 \\Rightarrow a=5$."],
      answer: "$5$",
    },
    {
      id: "bileske-ters-fonksiyon-ayt-05",
      difficulty: "Zor",
      prompt: "$f(x)=2x+3$ ve $g$ bire bir bir fonksiyon olmak üzere $\\big(f\\circ g\\big)(x)=4x-1$ veriliyor. Buna göre $g^{-1}(4)$ değeri kaçtır?",
      options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
      correct: 2,
      solution: ["$f\\big(g(x)\\big)=2g(x)+3=4x-1 \\Rightarrow 2g(x)=4x-4 \\Rightarrow g(x)=2x-2$.", "$g^{-1}(4)=a \\iff g(a)=4$: $2a-2=4 \\Rightarrow 2a=6 \\Rightarrow a=3$."],
      answer: "$3$",
    },
    {
      id: "bileske-ters-fonksiyon-ayt-06",
      difficulty: "Orta",
      prompt: "$f(x)=x-4$ ve $g(x)=3x$ fonksiyonları veriliyor. Buna göre $\\big(g\\circ f\\big)^{-1}(6)$ değeri kaçtır?",
      options: ["$4$", "$5$", "$6$", "$7$", "$8$"],
      correct: 2,
      solution: ["Bileşkeyi bul: $(g\\circ f)(x)=g(x-4)=3(x-4)=3x-12$.", "$\\big(g\\circ f\\big)^{-1}(6)$, $(g\\circ f)(x)=6$ olan $x$ değeridir: $3x-12=6 \\Rightarrow 3x=18 \\Rightarrow x=6$.", "Kural ile kontrol: $g^{-1}(x)=\\dfrac{x}{3}$, $f^{-1}(x)=x+4$. $\\big(f^{-1}\\circ g^{-1}\\big)(6)=f^{-1}\\!\\left(\\dfrac{6}{3}\\right)=f^{-1}(2)=2+4=6$. ✓"],
      answer: "$6$",
    },
  ],
};

export default quiz;
