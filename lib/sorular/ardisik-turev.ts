import type { TopicQuiz } from "./types";

// ardisik-turev — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "ardisik-turev",
  questions: [
    {
      id: "ardisik-turev-01",
      difficulty: "Orta",
      prompt: "Bir cismin konumu $s(t)=t^{3}-9t^{2}+24t$ (metre, $t$ saniye) bağıntısıyla veriliyor. Cismin hızı, ilki dışında ikinci kez sıfır olduğu anda ivmesi ölçülüyor. Buna göre bu andaki ivme kaç $\\text{m/s}^{2}$ dir?",
      options: ["$-6$", "$0$", "$3$", "$6$", "$12$"],
      correct: 3,
      solution: ["Hız: $v(t)=s'(t)=3t^{2}-18t+24=3(t-2)(t-4)$.", "Hız sıfır olur: $t=2$ (birinci kez) ve $t=4$ (ikinci kez). İstenen an $t=4$.", "İvme: $a(t)=v'(t)=s''(t)=6t-18$.", "$t=4$ için: $a(4)=6\\cdot 4-18=24-18=6\\ \\text{m/s}^{2}$."],
      answer: "$6$",
    },
    {
      id: "ardisik-turev-02",
      difficulty: "Orta",
      prompt: "$f(x)=x^{4}+ax^{3}+bx^{2}$ fonksiyonunun ikinci türevi $f''(x)$, $x=1$ ve $x=3$ değerlerinde sıfır olmaktadır. Buna göre $f'''(2)$ kaçtır?",
      options: ["$-12$", "$0$", "$6$", "$12$", "$24$"],
      correct: 1,
      solution: ["İkinci türev: $f''(x)=12x^{2}+6ax+2b$.", "Kökleri $1$ ve $3$ olan bu ifade için kökler toplamı: $1+3=-\\dfrac{6a}{12}=-\\dfrac{a}{2}$, yani $4=-\\dfrac{a}{2}\\Rightarrow a=-8$.", "Kökler çarpımı: $1\\cdot 3=\\dfrac{2b}{12}=\\dfrac{b}{6}$, yani $3=\\dfrac{b}{6}\\Rightarrow b=18$.", "Üçüncü türev: $f'''(x)=24x+6a=24x-48$.", "$f'''(2)=24\\cdot 2-48=48-48=0$."],
      answer: "$0$",
    },
    {
      id: "ardisik-turev-03",
      difficulty: "Zor",
      prompt: "$f(x)=\\sin(2x)$ fonksiyonu veriliyor. Buna göre $\\dfrac{f^{(2026)}\\!\\left(\\frac{\\pi}{4}\\right)}{2^{2025}}$ ifadesinin değeri kaçtır?",
      options: ["$-2$", "$-1$", "$0$", "$1$", "$2$"],
      correct: 0,
      solution: ["Her türevde zincir kuralından $2$ çarpanı çıkar ve faza $\\frac{\\pi}{2}$ eklenir: $f^{(n)}(x)=2^{n}\\sin\\!\\left(2x+\\dfrac{n\\pi}{2}\\right)$.", "$n=2026$ için faz: $2x+\\dfrac{2026\\pi}{2}=2x+1013\\pi$.", "$1013$ tek sayı olduğundan $\\sin(2x+1013\\pi)=-\\sin(2x)$. Böylece $f^{(2026)}(x)=-2^{2026}\\sin(2x)$.", "$x=\\dfrac{\\pi}{4}$ için $\\sin\\!\\left(\\dfrac{\\pi}{2}\\right)=1$ olduğundan $f^{(2026)}\\!\\left(\\dfrac{\\pi}{4}\\right)=-2^{2026}$.", "İstenen oran: $\\dfrac{-2^{2026}}{2^{2025}}=-2$."],
      answer: "$-2$",
    },
    {
      id: "ardisik-turev-04",
      difficulty: "Kolay",
      prompt: "$f(x)=e^{3x}$ fonksiyonu veriliyor. Buna göre $\\dfrac{f^{(5)}(x)}{f''(x)}$ ifadesinin değeri kaçtır?",
      options: ["$9$", "$18$", "$27$", "$54$", "$81$"],
      correct: 2,
      solution: ["Her türevde iç türev $3$ çarpan olarak çıkar: $f^{(n)}(x)=3^{n}e^{3x}$.", "Beşinci türev: $f^{(5)}(x)=3^{5}e^{3x}=243\\,e^{3x}$.", "İkinci türev: $f''(x)=3^{2}e^{3x}=9\\,e^{3x}$.", "Oran: $\\dfrac{243\\,e^{3x}}{9\\,e^{3x}}=\\dfrac{243}{9}=27$."],
      answer: "$27$",
    },
    {
      id: "ardisik-turev-05",
      difficulty: "Kolay",
      prompt: "Bir cismin konumu $s(t)=t^{3}-6t^{2}+5$ (metre, $t$ saniye) ile veriliyor. Cisim, ivmesinin sıfır olduğu anda hangi hızla hareket etmektedir?",
      options: ["$-15$", "$-12$", "$-9$", "$-6$", "$0$"],
      correct: 1,
      solution: ["Hız: $v(t)=s'(t)=3t^{2}-12t$.", "İvme: $a(t)=v'(t)=s''(t)=6t-12$.", "İvme sıfır: $6t-12=0\\Rightarrow t=2$.", "Bu andaki hız: $v(2)=3\\cdot 4-12\\cdot 2=12-24=-12\\ \\text{m/s}$."],
      answer: "$-12$",
    },
    {
      id: "ardisik-turev-06",
      difficulty: "Orta",
      prompt: "$f(x)=x^{n}$ ($n$ pozitif tam sayı) fonksiyonu için $f^{(3)}(1)=60$ olduğu biliniyor. Buna göre $n$ kaçtır?",
      options: ["$4$", "$5$", "$6$", "$7$", "$8$"],
      correct: 1,
      solution: ["Ardışık türevler: $f'(x)=n x^{n-1}$, $f''(x)=n(n-1)x^{n-2}$, $f'''(x)=n(n-1)(n-2)x^{n-3}$.", "$x=1$ için $f'''(1)=n(n-1)(n-2)$.", "Koşul: $n(n-1)(n-2)=60$. Ardışık üç tam sayının çarpımı $60=5\\cdot 4\\cdot 3$ olduğundan $n=5$.", "Doğrulama: $5\\cdot 4\\cdot 3=60$ ✓."],
      answer: "$5$",
    },
  ],
};

export default quiz;
