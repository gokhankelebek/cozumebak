import type { TopicQuiz } from "./types";

// integral-kavrami — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "integral-kavrami",
  questions: [
    {
      id: "integral-kavrami-01",
      difficulty: "Orta",
      prompt: "Türevlenebilir bir $f$ fonksiyonu için $f'(x)=6x^{2}-4x$ ve $f(1)=3$ veriliyor. Buna göre $f(2)$ kaçtır?",
      options: ["$7$", "$9$", "$11$", "$13$", "$15$"],
      correct: 2,
      solution: ["$f$ fonksiyonunu bulmak için türevin integralini al: $\\displaystyle f(x)=\\int (6x^{2}-4x)\\,dx=2x^{3}-2x^{2}+c$.", "Başlangıç koşulunu kullan: $f(1)=2\\cdot 1-2\\cdot 1+c=c$. Buradan $c=3$.", "Fonksiyon: $f(x)=2x^{3}-2x^{2}+3$.", "İstenen değeri hesapla: $f(2)=2\\cdot 8-2\\cdot 4+3=16-8+3=11$.", "Kontrol: $f'(x)=6x^{2}-4x$ ve $f(1)=2-2+3=3$. Her iki koşul da sağlanır."],
      answer: "$11$",
    },
    {
      id: "integral-kavrami-02",
      difficulty: "Kolay",
      prompt: "Sürekli bir $g$ fonksiyonu için $\\displaystyle\\int_{1}^{4} g(x)\\,dx=10$ ve $\\displaystyle\\int_{3}^{4} g(x)\\,dx=2$ veriliyor. Buna göre $\\displaystyle\\int_{1}^{3} g(x)\\,dx$ kaçtır?",
      options: ["$5$", "$6$", "$7$", "$8$", "$12$"],
      correct: 3,
      solution: ["Belirli integralin sınır birleştirme özelliğini yaz: $\\displaystyle\\int_{1}^{4} g(x)\\,dx=\\int_{1}^{3} g(x)\\,dx+\\int_{3}^{4} g(x)\\,dx$.", "Bilinen değerleri yerine koy: $10=\\displaystyle\\int_{1}^{3} g(x)\\,dx+2$.", "Aranan integrali yalnız bırak: $\\displaystyle\\int_{1}^{3} g(x)\\,dx=10-2=8$.", "Kontrol: $8+2=10$ olduğundan $\\displaystyle\\int_{1}^{4} g(x)\\,dx=10$ sağlanır."],
      answer: "$8$",
    },
    {
      id: "integral-kavrami-03",
      difficulty: "Orta",
      prompt: "$\\displaystyle F(x)=\\int_{2}^{x} (3t^{2}+1)\\,dt$ fonksiyonu tanımlanıyor. Buna göre $F'(2)+F(2)$ toplamı kaçtır?",
      options: ["$0$", "$4$", "$9$", "$13$", "$17$"],
      correct: 3,
      solution: ["Türev–integral ilişkisini (analizin temel teoremi) uygula: $F'(x)=3x^{2}+1$, çünkü değişken alt sınırda değil üst sınırdadır.", "$F'(2)$'yi hesapla: $F'(2)=3\\cdot 4+1=13$.", "$F(2)$'yi bul: üst ve alt sınır eşit olduğundan $\\displaystyle F(2)=\\int_{2}^{2} (3t^{2}+1)\\,dt=0$.", "Toplamı yaz: $F'(2)+F(2)=13+0=13$."],
      answer: "$13$",
    },
    {
      id: "integral-kavrami-04",
      difficulty: "Orta",
      prompt: "Bir eğrinin her $(x,y)$ noktasındaki teğetinin eğimi $4x-3$'tür. Bu eğri $(2,5)$ noktasından geçtiğine göre, eğrinin $x=1$ apsisli noktasının ordinatı kaçtır?",
      options: ["$-1$", "$0$", "$1$", "$2$", "$3$"],
      correct: 3,
      solution: ["Teğet eğimi türevdir: $y'=4x-3$. Eğriyi bulmak için integral al: $\\displaystyle y=\\int (4x-3)\\,dx=2x^{2}-3x+c$.", "$(2,5)$ noktasını yerine koy: $5=2\\cdot 4-3\\cdot 2+c=8-6+c=2+c$. Buradan $c=3$.", "Eğri: $y=2x^{2}-3x+3$.", "$x=1$ için ordinatı hesapla: $y=2-3+3=2$.", "Kontrol: $y'=4x-3$ ve $(2,5)$: $2\\cdot 4-6+3=5$. Sağlanır."],
      answer: "$2$",
    },
    {
      id: "integral-kavrami-05",
      difficulty: "Zor",
      prompt: "$\\displaystyle\\int f(x)\\,dx=x^{2}\\ln x+c$ olduğuna göre, $f(e)$ kaçtır?",
      options: ["$1$", "$2$", "$e$", "$2e$", "$3e$"],
      correct: 4,
      solution: ["İntegralin sonucu antiderivatiftir; dolayısıyla $f(x)=\\big(x^{2}\\ln x\\big)'$.", "Çarpım kuralı: $\\big(x^{2}\\ln x\\big)'=2x\\cdot\\ln x+x^{2}\\cdot\\dfrac{1}{x}=2x\\ln x+x$.", "$f(x)=2x\\ln x+x$. İstenen $f(e)$: $\\ln e=1$ olduğundan $f(e)=2e\\cdot 1+e=2e+e=3e$.", "Çeldirici kontrolü: $\\ln$ türevini atlayıp yalnız $2x\\ln x$ alan $2e$ (D) bulur; $+x$ terimini unutmamak gerekir."],
      answer: "$3e$",
    },
    {
      id: "integral-kavrami-06",
      difficulty: "Zor",
      prompt: "$f''(x)=12x-2$, $f'(1)=4$ ve $f(0)=3$ olduğuna göre $f(1)$ kaçtır?",
      options: ["$4$", "$5$", "$6$", "$7$", "$8$"],
      correct: 0,
      solution: ["İlk integral: $\\displaystyle f'(x)=\\int (12x-2)\\,dx=6x^{2}-2x+c_{1}$.", "$f'(1)=4$ koşulu: $6-2+c_{1}=4\\Rightarrow c_{1}=0$. Yani $f'(x)=6x^{2}-2x$.", "İkinci integral: $\\displaystyle f(x)=\\int (6x^{2}-2x)\\,dx=2x^{3}-x^{2}+c_{2}$.", "$f(0)=3$ koşulu: $0-0+c_{2}=3\\Rightarrow c_{2}=3$. Yani $f(x)=2x^{3}-x^{2}+3$.", "İstenen değer: $f(1)=2-1+3=4$."],
      answer: "$4$",
    },
  ],
};

export default quiz;
