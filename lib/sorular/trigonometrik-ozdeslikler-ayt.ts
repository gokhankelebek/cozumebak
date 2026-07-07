import type { TopicQuiz } from "./types";

// trigonometrik-ozdeslikler-ayt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "trigonometrik-ozdeslikler-ayt",
  questions: [
    {
      id: "trigonometrik-ozdeslikler-ayt-01",
      difficulty: "Orta",
      prompt: "$a$ ve $b$ dar açılardır. $\\sin a=\\dfrac{3}{5}$ ve $\\cos b=\\dfrac{5}{13}$ olarak veriliyor. Buna göre $\\cos(a-b)$ değeri kaçtır?",
      options: ["$\\dfrac{16}{65}$", "$\\dfrac{33}{65}$", "$\\dfrac{56}{65}$", "$\\dfrac{63}{65}$", "$\\dfrac{64}{65}$"],
      correct: 2,
      solution: ["$a$ dar açı ve $\\sin a=\\dfrac{3}{5}$; Pisagor'dan $\\cos a=\\sqrt{1-\\dfrac{9}{25}}=\\dfrac{4}{5}$.", "$b$ dar açı ve $\\cos b=\\dfrac{5}{13}$; benzer şekilde $\\sin b=\\sqrt{1-\\dfrac{25}{169}}=\\dfrac{12}{13}$.", "Fark formülü: $\\cos(a-b)=\\cos a\\cos b+\\sin a\\sin b$.", "Yerine koy: $\\dfrac{4}{5}\\cdot\\dfrac{5}{13}+\\dfrac{3}{5}\\cdot\\dfrac{12}{13}=\\dfrac{20}{65}+\\dfrac{36}{65}=\\dfrac{56}{65}$."],
      answer: "$\\dfrac{56}{65}$",
    },
    {
      id: "trigonometrik-ozdeslikler-ayt-02",
      difficulty: "Orta",
      prompt: "Bir $x$ açısı için $\\sin x+\\cos x=\\dfrac{1}{2}$ eşitliği sağlanıyor. Buna göre $\\sin 2x$ değeri kaçtır?",
      options: ["$-\\dfrac{3}{4}$", "$-\\dfrac{1}{4}$", "$\\dfrac{1}{4}$", "$\\dfrac{1}{2}$", "$\\dfrac{3}{4}$"],
      correct: 0,
      solution: ["Verilen eşitliğin karesini al: $(\\sin x+\\cos x)^2=\\left(\\dfrac{1}{2}\\right)^2=\\dfrac{1}{4}$.", "Sol tarafı aç: $\\sin^2 x+2\\sin x\\cos x+\\cos^2 x$.", "Pisagor ve iki kat açı: $\\sin^2 x+\\cos^2 x=1$ ve $2\\sin x\\cos x=\\sin 2x$; böylece $1+\\sin 2x=\\dfrac{1}{4}$.", "Çöz: $\\sin 2x=\\dfrac{1}{4}-1=-\\dfrac{3}{4}$."],
      answer: "$-\\dfrac{3}{4}$",
    },
    {
      id: "trigonometrik-ozdeslikler-ayt-03",
      difficulty: "Orta",
      prompt: "$\\cos x+\\sin x\\neq 0$ olmak üzere $\\dfrac{\\cos 2x}{\\cos x+\\sin x}$ ifadesi veriliyor. Buna göre bu ifade aşağıdakilerden hangisine eşittir?",
      options: ["$\\sin x+\\cos x$", "$2\\cos x$", "$\\tan x$", "$\\cos x-\\sin x$", "$1$"],
      correct: 3,
      solution: ["Payı iki kat açı yazımıyla aç: $\\cos 2x=\\cos^2 x-\\sin^2 x$.", "İki kare farkı olarak çarpanlara ayır: $\\cos^2 x-\\sin^2 x=(\\cos x-\\sin x)(\\cos x+\\sin x)$.", "İfadeyi yaz: $\\dfrac{(\\cos x-\\sin x)(\\cos x+\\sin x)}{\\cos x+\\sin x}$.", "Ortak çarpan $\\cos x+\\sin x$ sadeleşir: geriye $\\cos x-\\sin x$ kalır."],
      answer: "$\\cos x-\\sin x$",
    },
    {
      id: "trigonometrik-ozdeslikler-ayt-04",
      difficulty: "Orta",
      prompt: "Dar açı olan bir $x$ için $\\sin x=\\dfrac{4}{5}$ veriliyor. Buna göre $\\dfrac{\\sin 2x}{1+\\cos 2x}$ ifadesinin değeri kaçtır?",
      options: ["$\\dfrac{3}{5}$", "$\\dfrac{4}{5}$", "$\\dfrac{4}{3}$", "$\\dfrac{3}{4}$", "$\\dfrac{5}{3}$"],
      correct: 2,
      solution: ["Sadeleştir: $\\dfrac{\\sin 2x}{1+\\cos 2x}=\\dfrac{2\\sin x\\cos x}{2\\cos^{2}x}=\\dfrac{\\sin x}{\\cos x}=\\tan x$.", "$\\cos x$'i bul: $x$ dar açı olduğundan $\\cos x=\\sqrt{1-\\dfrac{16}{25}}=\\dfrac{3}{5}$.", "Tanjantı yaz: $\\tan x=\\dfrac{\\sin x}{\\cos x}=\\dfrac{4/5}{3/5}=\\dfrac{4}{3}$."],
      answer: "$\\dfrac{4}{3}$",
    },
    {
      id: "trigonometrik-ozdeslikler-ayt-05",
      difficulty: "Zor",
      prompt: "$\\cos 2x=\\dfrac{7}{25}$ ve $x$ açısı I. bölgededir. Buna göre $\\sin x+\\cos x$ ifadesinin değeri kaçtır?",
      options: ["$\\dfrac{1}{5}$", "$\\dfrac{7}{5}$", "$\\dfrac{17}{25}$", "$\\dfrac{24}{25}$", "$\\dfrac{31}{25}$"],
      correct: 1,
      solution: ["$\\cos 2x=\\dfrac{7}{25}$ ve $x$ I. bölgede ($2x$ de I. bölgede, çünkü $\\cos 2x>0$ ve $\\sin 2x>0$ seçilir): $\\sin 2x=\\sqrt{1-\\cos^{2}2x}=\\sqrt{1-\\dfrac{49}{625}}=\\sqrt{\\dfrac{576}{625}}=\\dfrac{24}{25}$.", "Kareli özdeşlik: $(\\sin x+\\cos x)^{2}=\\sin^{2}x+\\cos^{2}x+2\\sin x\\cos x=1+\\sin 2x=1+\\dfrac{24}{25}=\\dfrac{49}{25}$.", "Karekök al: $\\sin x+\\cos x=\\pm\\dfrac{7}{5}$. I. bölgede $\\sin x>0$ ve $\\cos x>0$ olduğundan toplam pozitiftir."],
      answer: "$\\dfrac{7}{5}$",
    },
    {
      id: "trigonometrik-ozdeslikler-ayt-06",
      difficulty: "Zor",
      prompt: "$\\dfrac{\\sin 3x}{\\sin x}-\\dfrac{\\cos 3x}{\\cos x}$ ifadesi sadeleştiriliyor. Buna göre bu ifade aşağıdakilerden hangisine eşittir?",
      options: ["$1$", "$2$", "$\\cos 2x$", "$\\dfrac{2}{\\cos 2x}$", "$\\tan 2x$"],
      correct: 1,
      solution: ["Ortak paydada birleştir: $\\dfrac{\\sin 3x\\cos x-\\cos 3x\\sin x}{\\sin x\\cos x}$.", "Payda fark formülünü tanı: $\\sin 3x\\cos x-\\cos 3x\\sin x=\\sin(3x-x)=\\sin 2x$.", "Paydayı iki kat açıyla yaz: $\\sin x\\cos x=\\dfrac{1}{2}\\sin 2x$.", "Oranı sadeleştir: $\\dfrac{\\sin 2x}{\\frac{1}{2}\\sin 2x}=2$."],
      answer: "$2$",
    },
  ],
};

export default quiz;
