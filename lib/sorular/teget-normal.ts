import type { TopicQuiz } from "./types";

// teget-normal — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "teget-normal",
  questions: [
    {
      id: "teget-normal-01",
      difficulty: "Orta",
      prompt: "$f(x)=x^{2}+ax+b$ eğrisine $x=1$ apsisli noktada çizilen teğet hem $y=4x$ doğrusuna **paralel** hem de $(0,-3)$ noktasından geçmektedir. Buna göre $a+b$ kaçtır?",
      options: ["$-2$", "$-1$", "$0$", "$1$", "$2$"],
      correct: 2,
      solution: ["Türev: $f'(x)=2x+a$. Teğet $y=4x$ doğrusuna paralel olduğundan eğimi $4$'tür: $f'(1)=2+a=4\\Rightarrow a=2$.", "Değme noktası $\\big(1,f(1)\\big)$ ve $f(1)=1+a+b=1+2+b=3+b$.", "Teğet denklemi: $y-(3+b)=4(x-1)$. Bu doğru $(0,-3)$ noktasından geçer: $-3-(3+b)=4(0-1)$.", "Düzenle: $-6-b=-4\\Rightarrow b=-2$.", "Buna göre $a+b=2+(-2)=0$."],
      answer: "$0$",
    },
    {
      id: "teget-normal-02",
      difficulty: "Orta",
      prompt: "$y=x^{2}-2x$ eğrisinin teğeti $y=2x+7$ doğrusuna **paralel** olduğu değme noktasında, bu noktadan geçen **normal** doğrusu $y$ eksenini $K$ noktasında kesmektedir. Buna göre $K$ noktasının ordinatı kaçtır?",
      options: ["$1$", "$0$", "$-1$", "$2$", "$-2$"],
      correct: 0,
      solution: ["Türev: $f'(x)=2x-2$. Teğet, eğimi $2$ olan doğruya paralel olduğundan $2x-2=2\\Rightarrow x=2$.", "Değme noktası: $f(2)=4-4=0$, yani $(2,0)$. Teğet eğimi $m_T=2$.", "Normalin eğimi: $m_N=-\\dfrac{1}{2}$. Normal denklemi: $y-0=-\\dfrac{1}{2}(x-2)$.", "$y$ eksenini kestiği nokta için $x=0$: $y=-\\dfrac{1}{2}(0-2)=1$.", "Demek ki $K=(0,1)$ ve ordinatı $1$'dir."],
      answer: "$1$",
    },
    {
      id: "teget-normal-03",
      difficulty: "Zor",
      prompt: "$y=x^{3}$ eğrisine $x=1$ apsisli noktasında çizilen teğet, eğriyi değme noktasından **farklı** bir $P$ noktasında daha kesmektedir. Buna göre eğrinin $P$ noktasındaki teğetinin eğimi kaçtır?",
      options: ["$3$", "$6$", "$-3$", "$9$", "$12$"],
      correct: 4,
      solution: ["$f(x)=x^{3}$, $f'(x)=3x^{2}$. $x=1$ için değme noktası $(1,1)$, eğim $f'(1)=3$.", "Teğet denklemi: $y-1=3(x-1)\\Rightarrow y=3x-2$.", "Teğetin eğriyle kesişimi: $x^{3}=3x-2\\Rightarrow x^{3}-3x+2=0$.", "Çarpanlara ayır: $x^{3}-3x+2=(x-1)^{2}(x+2)$. Çift kök $x=1$ değme noktasıdır; farklı kök $x=-2$, yani $P$ noktasının apsisi $-2$'dir.", "$P$ noktasındaki teğetin eğimi: $f'(-2)=3\\cdot(-2)^{2}=12$."],
      answer: "$12$",
    },
    {
      id: "teget-normal-04",
      difficulty: "Orta",
      prompt: "$f(x)=\\ln x$ eğrisine $x=e$ apsisli noktada çizilen teğet, $x$ eksenini $A$ noktasında kesmektedir. Buna göre $A$ noktasının apsisi kaçtır?",
      options: ["$0$", "$1$", "$e-1$", "$\\dfrac{e}{2}$", "$2-e$"],
      correct: 0,
      solution: ["Değme noktası: $f(e)=\\ln e=1$, yani $(e,1)$. Türev $f'(x)=\\dfrac{1}{x}$, eğim $f'(e)=\\dfrac{1}{e}$.", "Teğet denklemi: $y-1=\\dfrac{1}{e}(x-e)\\Rightarrow y=\\dfrac{x}{e}-1+1=\\dfrac{x}{e}$.", "$x$ eksenini kestiği nokta için $y=0$: $\\dfrac{x}{e}=0\\Rightarrow x=0$.", "Demek ki teğet orijinden geçer; $A$ noktasının apsisi $0$'dır."],
      answer: "$0$",
    },
    {
      id: "teget-normal-05",
      difficulty: "Orta",
      prompt: "$f(x)=x^{2}+3$ ve $g(x)=-x^{2}+ax+b$ eğrileri $x=1$ apsisli ortak bir noktada **ortak teğete** sahiptir (birbirlerine teğettir). Buna göre $a+b$ kaçtır?",
      options: ["$5$", "$6$", "$7$", "$8$", "$9$"],
      correct: 0,
      solution: ["Ortak teğet için $x=1$'de hem fonksiyon değerleri hem de eğimler eşit olmalı.", "**Eğim eşitliği:** $f'(x)=2x$, $g'(x)=-2x+a$. $x=1$'de $2=-2+a\\Rightarrow a=4$.", "**Değer eşitliği:** $f(1)=1+3=4$ ve $g(1)=-1+a+b=-1+4+b=3+b$. Eşitle: $4=3+b\\Rightarrow b=1$.", "İstenen: $a+b=4+1=5$."],
      answer: "$5$",
    },
    {
      id: "teget-normal-06",
      difficulty: "Orta",
      prompt: "$f(x)=x^{2}-2x+5$ eğrisinin bir noktasındaki **normal** doğrusu, eğimi $\\dfrac{1}{2}$ olan bir doğruya paraleldir. Buna göre bu normalin değme noktasının apsisi kaçtır?",
      options: ["$-1$", "$0$", "$1$", "$2$", "$3$"],
      correct: 1,
      solution: ["Normalin eğimi $\\dfrac{1}{2}$ olacak. Normal eğimi $m_N=-\\dfrac{1}{f'(a)}$ olduğundan $-\\dfrac{1}{f'(a)}=\\dfrac{1}{2}\\Rightarrow f'(a)=-2$.", "Türev: $f'(x)=2x-2$. Koşul: $2a-2=-2\\Rightarrow 2a=0\\Rightarrow a=0$.", "Değme noktasının apsisi $0$'dır."],
      answer: "$0$",
    },
  ],
};

export default quiz;
