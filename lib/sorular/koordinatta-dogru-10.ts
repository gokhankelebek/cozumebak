import type { TopicQuiz } from "./types";

// koordinatta-dogru-10 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "koordinatta-dogru-10",
  questions: [
    {
      id: "koordinatta-dogru-10-01",
      difficulty: "Kolay",
      prompt: "$A(-2,\\ 3)$ ve $B(4,\\ -9)$ noktalarından geçen doğrunun eğimi kaçtır?",
      options: ["$-6$", "$\\dfrac{1}{2}$", "$-2$", "$2$", "$-\\dfrac{1}{2}$"],
      correct: 2,
      solution: ["Eğim formülü: $m=\\dfrac{y_2-y_1}{x_2-x_1}$.", "$m=\\dfrac{-9-3}{4-(-2)}=\\dfrac{-12}{6}$.", "$m=-2$."],
      answer: "$m=-2$ (C).",
    },
    {
      id: "koordinatta-dogru-10-02",
      difficulty: "Kolay",
      prompt: "$y=\\dfrac{3}{4}x+1$ doğrusuna dik olan bir doğrunun eğimi kaçtır?",
      options: ["$-\\dfrac{4}{3}$", "$-\\dfrac{3}{4}$", "$\\dfrac{3}{4}$", "$\\dfrac{4}{3}$", "$\\dfrac{1}{3}$"],
      correct: 0,
      solution: ["Dik doğrular için $m_1\\cdot m_2=-1$; yani $m_2$, $m_1$'in ters işaretli tersidir.", "$m_1=\\dfrac{3}{4}\\Rightarrow m_2=-\\dfrac{1}{m_1}=-\\dfrac{4}{3}$.", "Kontrol: $\\dfrac{3}{4}\\cdot\\left(-\\dfrac{4}{3}\\right)=-1$."],
      answer: "$-\\dfrac{4}{3}$ (A).",
    },
    {
      id: "koordinatta-dogru-10-03",
      difficulty: "Orta",
      prompt: "$A(-3,\\ -1)$ ve $B(1,\\ 7)$ noktalarından geçen doğrunun denklemi aşağıdakilerden hangisidir?",
      options: ["$y=2x-5$", "$y=\\dfrac{1}{2}x+5$", "$y=2x+9$", "$y=2x+5$", "$y=2x+1$"],
      correct: 3,
      solution: ["Eğim: $m=\\dfrac{7-(-1)}{1-(-3)}=\\dfrac{8}{4}=2$.", "$y=2x+n$ yaz, $B(1,7)$ noktasını koy: $7=2\\cdot 1+n\\Rightarrow n=5$.", "Doğru: $y=2x+5$."],
      answer: "$y=2x+5$ (D).",
    },
    {
      id: "koordinatta-dogru-10-04",
      difficulty: "Orta",
      prompt: "$3x-2y+12=0$ doğrusunun eğimi kaçtır?",
      options: ["$-3$", "$\\dfrac{3}{2}$", "$3$", "$-\\dfrac{3}{2}$", "$\\dfrac{2}{3}$"],
      correct: 1,
      solution: ["$y$'yi yalnız bırakalım: $2y=3x+12\\Rightarrow y=\\dfrac{3}{2}x+6$.", "$y=mx+n$ biçiminde $m$ eğimdir.", "$m=\\dfrac{3}{2}$. (Alternatif: $ax+by+c=0$ için $m=-\\dfrac{a}{b}=-\\dfrac{3}{-2}=\\dfrac{3}{2}$.)"],
      answer: "$\\dfrac{3}{2}$ (B).",
    },
    {
      id: "koordinatta-dogru-10-05",
      difficulty: "Orta",
      prompt: "Bir mumun boyu ile yanma süresi arasında doğrusal bir ilişki vardır. Mum yakılmadan önce (t=0) boyu $20$ cm iken, $4$ saat sonra boyu $12$ cm olmuştur. Bu mum tamamen bittiğinde ($h=0$) kaç saat geçmiş olur?",
      options: ["$6$", "$8$", "$12$", "$16$", "$10$"],
      correct: 4,
      solution: ["Boy $h$, süre $t$ olsun; $(0,20)$ ve $(4,12)$ noktalarından geçen doğruyu kuralım.", "Eğim: $m=\\dfrac{12-20}{4-0}=\\dfrac{-8}{4}=-2$ (saatte $2$ cm azalır).", "$t=0$ iken $h=20$ olduğundan $n=20$: $h=-2t+20$.", "$h=0$: $0=-2t+20\\Rightarrow t=10$ saat."],
      answer: "$10$ saat (E).",
    },
    {
      id: "koordinatta-dogru-10-06",
      difficulty: "Zor",
      prompt: "$A(1,\\ 2)$ ve $B(k,\\ 8)$ noktalarından geçen doğru, $y=3x-4$ doğrusuna paralel olduğuna göre $k$ kaçtır?",
      options: ["$-1$", "$1$", "$3$", "$2$", "$5$"],
      correct: 2,
      solution: ["Paralel doğruların eğimleri eşittir; verilen doğrunun eğimi $3$.", "$AB$ doğrusunun eğimi de $3$ olmalı: $\\dfrac{8-2}{k-1}=3$.", "$\\dfrac{6}{k-1}=3\\Rightarrow k-1=2$.", "$k=3$."],
      answer: "$k=3$ (C).",
    },
  ],
};

export default quiz;
