import type { TopicQuiz } from "./types";

// logaritma-kavrami-ayt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "logaritma-kavrami-ayt",
  questions: [
    {
      id: "logaritma-kavrami-ayt-01",
      difficulty: "Zor",
      prompt: "$\\log_2 3=a$ olduğuna göre $\\log_{12} 18$ ifadesinin $a$ türünden değeri kaçtır?",
      options: ["$\\dfrac{1+a}{2+a}$", "$\\dfrac{2+a}{1+2a}$", "$\\dfrac{1+2a}{2+a}$", "$\\dfrac{a+2}{2a+1}$", "$\\dfrac{2a+1}{a+1}$"],
      correct: 2,
      solution: ["Taban değiştirme ile her şeyi $2$ tabanına geçir: $\\log_{12} 18=\\dfrac{\\log_2 18}{\\log_2 12}$.", "Çarpanlara ayır: $18=2\\cdot 3^{2}$ ve $12=2^{2}\\cdot 3$.", "Pay: $\\log_2 18=\\log_2 2+\\log_2 3^{2}=1+2\\log_2 3=1+2a$.", "Payda: $\\log_2 12=\\log_2 2^{2}+\\log_2 3=2+\\log_2 3=2+a$.", "Oranı yaz: $\\log_{12} 18=\\dfrac{1+2a}{2+a}$."],
      answer: "$\\dfrac{1+2a}{2+a}$",
    },
    {
      id: "logaritma-kavrami-ayt-02",
      difficulty: "Zor",
      prompt: "$a > 0$, $a\\ne 1$ ve $\\log_a b=2$ olduğuna göre $\\log_{a^{2}}\\!\\left(a\\cdot b^{3}\\right)$ ifadesinin değeri kaçtır?",
      options: ["$\\dfrac{3}{2}$", "$2$", "$3$", "$\\dfrac{7}{2}$", "$4$"],
      correct: 3,
      solution: ["Taban değiştirme ile $a$ tabanına geç: $\\log_{a^{2}}\\!\\left(a\\cdot b^{3}\\right)=\\dfrac{\\log_a\\!\\left(a\\cdot b^{3}\\right)}{\\log_a a^{2}}$.", "Payda: $\\log_a a^{2}=2$.", "Pay: $\\log_a\\!\\left(a\\cdot b^{3}\\right)=\\log_a a+\\log_a b^{3}=1+3\\log_a b$.", "$\\log_a b=2$ yerine yaz: pay $=1+3\\cdot 2=7$.", "Oranı yaz: $\\dfrac{7}{2}$."],
      answer: "$\\dfrac{7}{2}$",
    },
    {
      id: "logaritma-kavrami-ayt-03",
      difficulty: "Orta",
      prompt: "$\\log_2 5\\cdot \\log_5 9\\cdot \\log_3 16$ çarpımının değeri kaçtır?",
      options: ["$8$", "$6$", "$4$", "$3$", "$\\dfrac{5}{2}$"],
      correct: 0,
      solution: ["Üç çarpanı da $10$ tabanında yaz: $\\dfrac{\\log 5}{\\log 2}\\cdot \\dfrac{\\log 9}{\\log 5}\\cdot \\dfrac{\\log 16}{\\log 3}$.", "$\\log 5$ sadeleşir: $\\dfrac{\\log 9}{\\log 2}\\cdot \\dfrac{\\log 16}{\\log 3}=\\dfrac{\\log 9\\cdot \\log 16}{\\log 2\\cdot \\log 3}$.", "Üsleri dışarı al: $\\log 9=2\\log 3$ ve $\\log 16=4\\log 2$.", "Yerine yaz: $\\dfrac{2\\log 3\\cdot 4\\log 2}{\\log 2\\cdot \\log 3}=2\\cdot 4=8$."],
      answer: "$8$",
    },
    {
      id: "logaritma-kavrami-ayt-04",
      difficulty: "Zor",
      prompt: "$\\log 2=a$ ve $\\log 7=b$ olduğuna göre $\\log_{14} 56$ ifadesinin $a$ ve $b$ türünden değeri kaçtır?",
      options: ["$\\dfrac{3a+b}{a+b}$", "$\\dfrac{a+3b}{a+b}$", "$\\dfrac{2a+b}{a+b}$", "$\\dfrac{3a+b}{2a+b}$", "$\\dfrac{a+b}{3a+b}$"],
      correct: 0,
      solution: ["Taban değiştirme ile $10$ tabanına geç: $\\log_{14} 56=\\dfrac{\\log 56}{\\log 14}$.", "Çarpanlara ayır: $56=8\\cdot 7=2^{3}\\cdot 7$ ve $14=2\\cdot 7$.", "Pay: $\\log 56=\\log 2^{3}+\\log 7=3\\log 2+\\log 7=3a+b$.", "Payda: $\\log 14=\\log 2+\\log 7=a+b$.", "Oranı yaz: $\\dfrac{3a+b}{a+b}$."],
      answer: "$\\dfrac{3a+b}{a+b}$",
    },
    {
      id: "logaritma-kavrami-ayt-05",
      difficulty: "Orta",
      prompt: "$x > 1$ olmak üzere $\\log_x 1000=6$ olduğuna göre $\\log_x 10$ değeri kaçtır?",
      options: ["$1$", "$\\dfrac{3}{2}$", "$2$", "$\\dfrac{5}{2}$", "$3$"],
      correct: 2,
      solution: ["$1000=10^{3}$ olduğundan $\\log_x 1000=\\log_x 10^{3}=3\\log_x 10$.", "Verilen eşitlik: $3\\log_x 10=6$, yani $\\log_x 10=2$."],
      answer: "$2$",
    },
    {
      id: "logaritma-kavrami-ayt-06",
      difficulty: "Orta",
      prompt: "$\\log_2 x+\\log_4 x+\\log_{16} x=7$ olduğuna göre $x$ değeri kaçtır?",
      options: ["$2^{3}$", "$2^{4}$", "$2^{5}$", "$2^{6}$", "$2^{7}$"],
      correct: 1,
      solution: ["Tüm terimleri $2$ tabanına indir. Taban değiştirme: $\\log_4 x=\\dfrac{\\log_2 x}{\\log_2 4}=\\dfrac{\\log_2 x}{2}$ ve $\\log_{16} x=\\dfrac{\\log_2 x}{\\log_2 16}=\\dfrac{\\log_2 x}{4}$.", "$\\log_2 x=t$ diyelim: $t+\\dfrac{t}{2}+\\dfrac{t}{4}=7$.", "Ortak paydada topla: $\\dfrac{4t+2t+t}{4}=\\dfrac{7t}{4}=7$, buradan $t=4$.", "$\\log_2 x=4 \\Rightarrow x=2^{4}$."],
      answer: "$2^{4}$",
    },
  ],
};

export default quiz;
