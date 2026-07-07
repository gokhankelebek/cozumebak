import type { TopicQuiz } from "./types";

// ikinci-turev-konkavlik — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "ikinci-turev-konkavlik",
  questions: [
    {
      id: "ikinci-turev-konkavlik-01",
      difficulty: "Orta",
      prompt: "$f(x)=x^{3}+ax^{2}+bx+c$ fonksiyonunun dönüm noktası $(1,3)$ noktasıdır. Ayrıca bu fonksiyonun $x=1$ apsisli noktasındaki teğeti $y=-x+4$ doğrusudur. Buna göre $a+b+c$ toplamı kaçtır?",
      options: ["$-2$", "$0$", "$1$", "$2$", "$4$"],
      correct: 3,
      solution: ["Türevleri al: $f'(x)=3x^{2}+2ax+b$, $f''(x)=6x+2a$.", "Dönüm koşulu: $f''(1)=0 \\Rightarrow 6+2a=0 \\Rightarrow a=-3$.", "Teğet eğimi: $y=-x+4$ doğrusunun eğimi $-1$ olduğundan $f'(1)=-1$. Buradan $3+2a+b=-1 \\Rightarrow 3-6+b=-1 \\Rightarrow b=2$.", "Dönüm noktası grafiğin üzerinde: $f(1)=1+a+b+c=3 \\Rightarrow 1-3+2+c=3 \\Rightarrow c=3$.", "Kontrol: $x=1$'de teğet değeri $-1+4=3=f(1)$ ✓. Toplam: $a+b+c=-3+2+3=2$."],
      answer: "$2$",
    },
    {
      id: "ikinci-turev-konkavlik-02",
      difficulty: "Orta",
      prompt: "$f(x)=x^{4}-2x^{3}-12x^{2}+5x-7$ fonksiyonu, $(p,q)$ açık aralığında konkav aşağı ($\\cap$) bükülmektedir. Buna göre bu aralığın uzunluğu $q-p$ kaçtır?",
      options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
      correct: 2,
      solution: ["Türevleri al: $f'(x)=4x^{3}-6x^{2}-24x+5$, $f''(x)=12x^{2}-12x-24$.", "Sadeleştir ve çarpanla: $f''(x)=12(x^{2}-x-2)=12(x-2)(x+1)$.", "Kökler $x=-1$ ve $x=2$. Parabol yukarı açıldığından kökler **arasında** $f''(x) < 0$ → konkav aşağı.", "Aralık $(-1,2)$, uzunluk $2-(-1)=3$."],
      answer: "$3$",
    },
    {
      id: "ikinci-turev-konkavlik-03",
      difficulty: "Orta",
      prompt: "$f(x)=x^{3}-3x^{2}-9x+k$ fonksiyonunun grafiği $y$ eksenini $(0,4)$ noktasında kesmektedir. Bu fonksiyonun yerel maksimum ve yerel minimum değerleri ikinci türev testiyle belirleniyor. Buna göre yerel maksimum değeri ile yerel minimum değerinin toplamı kaçtır?",
      options: ["$-14$", "$-8$", "$-4$", "$2$", "$8$"],
      correct: 0,
      solution: ["$(0,4)$ noktasından: $f(0)=k=4$.", "Kritik noktalar: $f'(x)=3x^{2}-6x-9=3(x-3)(x+1)=0 \\Rightarrow x=-1$ veya $x=3$.", "İkinci türev testi: $f''(x)=6x-6$. $f''(-1)=-12 < 0$ → $x=-1$ yerel **maksimum**; $f''(3)=12 > 0$ → $x=3$ yerel **minimum**.", "Değerler: $f(-1)=-1-3+9+4=9$ (maks); $f(3)=27-27-27+4=-23$ (min).", "Toplam: $9+(-23)=-14$."],
      answer: "$-14$",
    },
    {
      id: "ikinci-turev-konkavlik-04",
      difficulty: "Orta",
      prompt: "$f(x)=ax^{3}+bx^{2}+x$ fonksiyonunun dönüm noktası $x=1$ apsisindedir ve bu noktadaki teğetin eğimi $-2$'dir. Buna göre $a+b$ kaçtır?",
      options: ["$-2$", "$-1$", "$0$", "$1$", "$2$"],
      correct: 0,
      solution: ["Türevler: $f'(x)=3ax^{2}+2bx+1$, $f''(x)=6ax+2b$.", "Dönüm koşulu: $f''(1)=0\\Rightarrow 6a+2b=0\\Rightarrow b=-3a$.", "Teğet eğimi: $f'(1)=3a+2b+1=-2\\Rightarrow 3a+2b=-3$.", "$b=-3a$ yerine koy: $3a+2(-3a)=-3\\Rightarrow 3a-6a=-3\\Rightarrow -3a=-3\\Rightarrow a=1$, $b=-3$.", "İstenen: $a+b=1+(-3)=-2$."],
      answer: "$-2$",
    },
    {
      id: "ikinci-turev-konkavlik-05",
      difficulty: "Orta",
      prompt: "$f(x)=x^{4}-4x^{3}+10x$ fonksiyonunun grafiği $(p,q)$ açık aralığında konkav aşağı ($\\cap$) bükülmektedir. Buna göre $p+q$ kaçtır?",
      options: ["$0$", "$1$", "$2$", "$3$", "$4$"],
      correct: 2,
      solution: ["Türevler: $f'(x)=4x^{3}-12x^{2}+10$, $f''(x)=12x^{2}-24x$.", "Çarpanla: $f''(x)=12x(x-2)$. Kökler $x=0$ ve $x=2$.", "Parabol yukarı açıldığından kökler **arasında** $f''(x)<0$ → konkav aşağı. Aralık $(0,2)$, yani $p=0$, $q=2$.", "İstenen: $p+q=0+2=2$."],
      answer: "$2$",
    },
    {
      id: "ikinci-turev-konkavlik-06",
      difficulty: "Kolay",
      prompt: "$f(x)=x^{3}+ax^{2}+bx+c$ fonksiyonunun $x=2$ apsisli noktasında yerel minimumu, $x=0$ apsisli noktasında dönüm noktası vardır. Buna göre $a$ kaçtır?",
      options: ["$-3$", "$-2$", "$0$", "$2$", "$3$"],
      correct: 2,
      solution: ["Türevler: $f'(x)=3x^{2}+2ax+b$, $f''(x)=6x+2a$.", "Dönüm noktası $x=0$: $f''(0)=0\\Rightarrow 2a=0\\Rightarrow a=0$.", "(Tutarlılık kontrolü: $a=0$ ile $f''(x)=6x$, $x=0$'da işaret değiştirir → gerçek dönüm; $x=2$ yerel minimum için $f''(2)=12>0$ ✓.)", "İstenen değer: $a=0$."],
      answer: "$0$",
    },
  ],
};

export default quiz;
