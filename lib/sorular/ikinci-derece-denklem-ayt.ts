import type { TopicQuiz } from "./types";

// ikinci-derece-denklem-ayt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "ikinci-derece-denklem-ayt",
  questions: [
    {
      id: "ikinci-derece-denklem-ayt-01",
      difficulty: "Orta",
      prompt: "$x^{2}+(k-1)x+4=0$ denkleminin çift katlı (tek) kökü vardır. Buna göre $k$'nin alabileceği değerlerin toplamı kaçtır?",
      options: ["$-2$", "$0$", "$2$", "$4$", "$6$"],
      correct: 2,
      solution: ["Tek (çift katlı) kök için diskriminant sıfır: $\\Delta=(k-1)^{2}-4\\cdot 1\\cdot 4=0$.", "$(k-1)^{2}=16\\Rightarrow k-1=\\pm 4\\Rightarrow k=5$ ya da $k=-3$.", "Değerlerin toplamı: $5+(-3)=2$."],
      answer: "$2$",
    },
    {
      id: "ikinci-derece-denklem-ayt-02",
      difficulty: "Kolay",
      prompt: "$x^{2}-3x+1=0$ denkleminin kökleri $a$ ve $b$ olduğuna göre $a^{2}+b^{2}$ değeri kaçtır?",
      options: ["$5$", "$6$", "$7$", "$8$", "$9$"],
      correct: 2,
      solution: ["Vieta: $a+b=3$, $a\\cdot b=1$.", "$a^{2}+b^{2}=(a+b)^{2}-2ab=3^{2}-2\\cdot 1=9-2=7$."],
      answer: "$7$",
    },
    {
      id: "ikinci-derece-denklem-ayt-03",
      difficulty: "Orta",
      prompt: "Kökleri $x_1$ ve $x_2$ olan $2x^{2}-8x+3=0$ denklemi için $\\dfrac{1}{x_1}+\\dfrac{1}{x_2}$ değeri kaçtır?",
      options: ["$\\dfrac{3}{8}$", "$\\dfrac{1}{2}$", "$\\dfrac{4}{3}$", "$\\dfrac{8}{3}$", "$3$"],
      correct: 3,
      solution: ["Vieta: $x_1+x_2=\\dfrac{8}{2}=4$, $x_1 x_2=\\dfrac{3}{2}$.", "$\\dfrac{1}{x_1}+\\dfrac{1}{x_2}=\\dfrac{x_1+x_2}{x_1 x_2}=\\dfrac{4}{\\frac{3}{2}}=\\dfrac{8}{3}$."],
      answer: "$\\dfrac{8}{3}$",
    },
    {
      id: "ikinci-derece-denklem-ayt-04",
      difficulty: "Zor",
      prompt: "$x^2-6x+2=0$ denkleminin kökleri $x_1$ ve $x_2$'dir. Kökleri $x_1^2$ ve $x_2^2$ olan ikinci dereceden denklem $x^2+px+q=0$ biçiminde yazılıyor. Buna göre $p+q$ toplamı kaçtır?",
      options: ["$-28$", "$-24$", "$-4$", "$4$", "$32$"],
      correct: 0,
      solution: ["Vieta: $x_1+x_2=6$, $x_1x_2=2$.", "Karelerin toplamı: $x_1^2+x_2^2=(x_1+x_2)^2-2x_1x_2=36-4=32$.", "Karelerin çarpımı: $x_1^2x_2^2=(x_1x_2)^2=2^2=4$.", "Yeni denklem $x^2-(x_1^2+x_2^2)x+x_1^2x_2^2=0$ olduğundan $p=-32$, $q=4$.", "Toplam: $p+q=-32+4=-28$."],
      answer: "$-28$",
    },
    {
      id: "ikinci-derece-denklem-ayt-05",
      difficulty: "Zor",
      prompt: "$x^2-(2k-1)x+k^2-1=0$ denkleminin reel kökü olmadığına göre $k$'nin alabileceği en küçük tam sayı değeri kaçtır?",
      options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
      correct: 1,
      solution: ["Katsayılar: $a=1$, $b=-(2k-1)$, $c=k^2-1$.", "Diskriminant: $\\Delta=(2k-1)^2-4(k^2-1)=4k^2-4k+1-4k^2+4=-4k+5$.", "Reel kök yok: $\\Delta < 0 \\Rightarrow -4k+5 < 0 \\Rightarrow k > \\dfrac{5}{4}$.", "Bu koşulu sağlayan en küçük tam sayı $k=2$'dir."],
      answer: "$2$",
    },
    {
      id: "ikinci-derece-denklem-ayt-06",
      difficulty: "Zor",
      prompt: "$ax^2+bx+c=0$ denkleminin kökleri $2$ ve $-3$'tür. Aynı $a$, $b$, $c$ için $cx^2+bx+a=0$ denkleminin kökleri toplamı kaçtır?",
      options: ["$-\\dfrac{1}{6}$", "$\\dfrac{1}{6}$", "$\\dfrac{1}{2}$", "$\\dfrac{5}{6}$", "$1$"],
      correct: 1,
      solution: ["İlk denklemin köklerinin tersi, $cx^2+bx+a=0$ denkleminin kökleridir. (Denklemi $x^2$ ile bölüp $\\tfrac{1}{x}=t$ koyunca bu görülür.)", "Yeni kökler: $\\dfrac{1}{2}$ ve $\\dfrac{1}{-3}=-\\dfrac{1}{3}$.", "Toplam: $\\dfrac{1}{2}-\\dfrac{1}{3}=\\dfrac{3-2}{6}=\\dfrac{1}{6}$."],
      answer: "$\\dfrac{1}{6}$",
    },
  ],
};

export default quiz;
