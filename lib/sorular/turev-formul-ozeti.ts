import type { TopicQuiz } from "./types";

// turev-formul-ozeti — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "turev-formul-ozeti",
  questions: [
    {
      id: "turev-formul-ozeti-01",
      difficulty: "Orta",
      prompt: "$f(x)=x^{3}+a\\,x$ fonksiyonunun grafiğine $x=1$ noktasında çizilen teğet, $y=5x-3$ doğrusuna paraleldir. Buna göre $f(2)$ kaçtır?",
      options: ["$6$", "$8$", "$10$", "$12$", "$14$"],
      correct: 3,
      solution: ["Teğet eğimi türevle bulunur: $f'(x)=3x^{2}+a$.", "Paralellik, eğimlerin eşitliğidir; $y=5x-3$ doğrusunun eğimi $5$ olduğundan $f'(1)=5$.", "$f'(1)=3\\cdot 1+a=3+a=5\\Rightarrow a=2$.", "Böylece $f(x)=x^{3}+2x$ ve $f(2)=8+4=12$."],
      answer: "$12$",
    },
    {
      id: "turev-formul-ozeti-02",
      difficulty: "Orta",
      prompt: "$f(x)=x^{3}-3a\\,x^{2}+4$ fonksiyonunun $x=2$ noktasında yerel minimumu vardır. Buna göre bu yerel minimum değeri kaçtır?",
      options: ["$0$", "$2$", "$4$", "$6$", "$8$"],
      correct: 0,
      solution: ["Türev: $f'(x)=3x^{2}-6a\\,x=3x\\,(x-2a)$.", "Kritik noktalar $x=0$ ve $x=2a$'dır; $x=2$ ekstremum olduğundan $2a=2\\Rightarrow a=1$.", "İkinci türev testi: $f''(x)=6x-6$, $f''(2)=6 > 0$ olduğundan $x=2$ gerçekten yerel minimumdur.", "Minimum değer: $f(2)=2^{3}-3\\cdot 1\\cdot 2^{2}+4=8-12+4=0$."],
      answer: "$0$",
    },
    {
      id: "turev-formul-ozeti-03",
      difficulty: "Zor",
      prompt: "$f(x)=\\dfrac{x^{2}}{e^{x}}$ fonksiyonunun $x=0$ dışındaki kritik noktası $x=c$'dir. Buna göre $f(c)$ kaçtır?",
      options: ["$\\dfrac{2}{e}$", "$\\dfrac{4}{e^{2}}$", "$\\dfrac{1}{e^{2}}$", "$\\dfrac{4}{e}$", "$\\dfrac{2}{e^{2}}$"],
      correct: 1,
      solution: ["Bölüm (veya çarpım) kuralıyla türev: $f'(x)=\\dfrac{2x\\,e^{x}-x^{2}e^{x}}{e^{2x}}=\\dfrac{x\\,(2-x)}{e^{x}}$.", "$f'(x)=0\\Rightarrow x\\,(2-x)=0$; kökler $x=0$ ve $x=2$'dir.", "$x=0$ dışındaki kritik nokta $c=2$'dir.", "Değer: $f(2)=\\dfrac{2^{2}}{e^{2}}=\\dfrac{4}{e^{2}}$."],
      answer: "$\\dfrac{4}{e^{2}}$",
    },
    {
      id: "turev-formul-ozeti-04",
      difficulty: "Zor",
      prompt: "$f(x)=x^{3}-6x^{2}+9x+2$ fonksiyonunun dönüm noktasındaki teğeti $y$ eksenini hangi noktada keser?",
      options: ["$(0,2)$", "$(0,4)$", "$(0,6)$", "$(0,8)$", "$(0,10)$"],
      correct: 4,
      solution: ["Türevler: $f'(x)=3x^{2}-12x+9$, $f''(x)=6x-12$.", "Dönüm noktası: $f''(x)=0\\Rightarrow x=2$. Değer: $f(2)=8-24+18+2=4$, nokta $(2,4)$.", "Teğet eğimi: $f'(2)=12-24+9=-3$. Teğet denklemi: $y-4=-3(x-2)\\Rightarrow y=-3x+10$.", "$y$ eksenini kestiği nokta ($x=0$): $y=-3\\cdot 0+10=10$, yani $(0,10)$."],
      answer: "$(0,10)$",
    },
    {
      id: "turev-formul-ozeti-05",
      difficulty: "Orta",
      prompt: "$f(x)=\\ln(x^{2}+1)$ fonksiyonu veriliyor. Buna göre $f''(0)$ değeri kaçtır?",
      options: ["$0$", "$1$", "$2$", "$-1$", "$-2$"],
      correct: 2,
      solution: ["Birinci türev: $f'(x)=\\dfrac{2x}{x^{2}+1}$.", "İkinci türev (bölüm kuralı): $f''(x)=\\dfrac{2(x^{2}+1)-2x\\cdot 2x}{(x^{2}+1)^{2}}=\\dfrac{2x^{2}+2-4x^{2}}{(x^{2}+1)^{2}}=\\dfrac{2-2x^{2}}{(x^{2}+1)^{2}}$.", "$x=0$ koy: $f''(0)=\\dfrac{2-0}{(0+1)^{2}}=\\dfrac{2}{1}=2$."],
      answer: "$2$",
    },
  ],
};

export default quiz;
