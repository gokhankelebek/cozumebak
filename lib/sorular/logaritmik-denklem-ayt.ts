import type { TopicQuiz } from "./types";

// logaritmik-denklem-ayt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "logaritmik-denklem-ayt",
  questions: [
    {
      id: "logaritmik-denklem-ayt-01",
      difficulty: "Orta",
      prompt: "$\\log_3(x-2)+\\log_3(2x-1)=2$ denklemini sağlayan $x$ değeri için, $4x$ kaçtır?",
      options: ["$7$", "$10$", "$12$", "$14$", "$16$"],
      correct: 3,
      solution: ["**Tanım kümesi:** $x-2>0$ ve $2x-1>0 \\Rightarrow x>2$.", "Logaritmaları birleştir: $\\log_3\\big[(x-2)(2x-1)\\big]=2$.", "Üslü biçime geç: $(x-2)(2x-1)=3^{2}=9$.", "Düzenle: $2x^{2}-5x+2=9 \\Rightarrow 2x^{2}-5x-7=0 \\Rightarrow (2x-7)(x+1)=0$.", "Kökler $x=\\dfrac{7}{2}$ ve $x=-1$. **Kontrol:** $\\dfrac{7}{2}>2$ kabul; $x=-1$ tanım dışı, **atılır**.", "İstenen: $4x=4\\cdot\\dfrac{7}{2}=14$."],
      answer: "$14$",
    },
    {
      id: "logaritmik-denklem-ayt-02",
      difficulty: "Orta",
      prompt: "$\\log_2(x^{2}-x)=\\log_2(3x-4)$ denklemini sağlayan $x$ değeri için, $x^{2}+1$ kaçtır?",
      options: ["$2$", "$3$", "$5$", "$8$", "$10$"],
      correct: 2,
      solution: ["**Tanım kümesi:** $3x-4>0 \\Rightarrow x>\\dfrac{4}{3}$ ve $x^{2}-x>0$.", "Tabanlar aynı olduğundan argümanları eşitle: $x^{2}-x=3x-4$.", "Düzenle: $x^{2}-4x+4=0 \\Rightarrow (x-2)^{2}=0 \\Rightarrow x=2$.", "**Kontrol:** $x=2$ için $3x-4=2>0$ ve $x^{2}-x=2>0$; her iki argüman da pozitif, kök kabul.", "İstenen: $x^{2}+1=4+1=5$."],
      answer: "$5$",
    },
    {
      id: "logaritmik-denklem-ayt-03",
      difficulty: "Orta",
      prompt: "$\\log_{1/3}(x-1)\\ge -1$ eşitsizliğini sağlayan $x$ değerlerinin alabileceği tam sayıların toplamı kaçtır?",
      options: ["$5$", "$7$", "$9$", "$12$", "$14$"],
      correct: 2,
      solution: ["**Tanım kümesi:** $x-1>0 \\Rightarrow x>1$.", "Sağ tarafı $\\log_{1/3}3=-1$ biçiminde yaz: $\\log_{1/3}(x-1)\\ge\\log_{1/3}3$.", "Taban $0<\\dfrac{1}{3}<1$ olduğundan yön **değişir**: $x-1\\le 3$.", "Çöz: $x\\le 4$.", "Tanım kümesiyle kesiştir: $1<x\\le 4$.", "Bu aralıktaki tam sayılar $2,\\ 3,\\ 4$; toplamı $2+3+4=9$."],
      answer: "$9$",
    },
    {
      id: "logaritmik-denklem-ayt-04",
      difficulty: "Orta",
      prompt: "$\\left(\\log_2 x\\right)^{2}-3\\log_2 x+2=0$ denkleminin kökleri $x_1$ ve $x_2$'dir. Buna göre $x_1\\cdot x_2$ çarpımı kaçtır?",
      options: ["$4$", "$6$", "$8$", "$12$", "$16$"],
      correct: 2,
      solution: ["**Tanım kümesi:** $x>0$.", "$\\log_2 x=t$ değişken değiştir: $t^{2}-3t+2=0 \\Rightarrow (t-1)(t-2)=0$, yani $t=1$ veya $t=2$.", "Geri dön: $\\log_2 x=1\\Rightarrow x_1=2$; $\\log_2 x=2\\Rightarrow x_2=4$. Her ikisi de pozitif, kabul.", "Çarpım: $x_1\\cdot x_2=2\\cdot 4=8$."],
      answer: "$8$",
    },
    {
      id: "logaritmik-denklem-ayt-05",
      difficulty: "Orta",
      prompt: "$\\log_5(x-1)+\\log_5(x+5)=\\log_5(3x+7)$ denklemini sağlayan $x$ değeri için $x^{2}-2$ kaçtır?",
      options: ["$2$", "$5$", "$7$", "$11$", "$14$"],
      correct: 2,
      solution: ["**Tanım kümesi:** $x-1>0$, $x+5>0$ ve $3x+7>0 \\Rightarrow x>1$.", "Sol tarafı birleştir: $\\log_5\\big[(x-1)(x+5)\\big]=\\log_5(3x+7)$.", "Tabanlar aynı, argümanları eşitle: $(x-1)(x+5)=3x+7$.", "Aç: $x^{2}+4x-5=3x+7 \\Rightarrow x^{2}+x-12=0 \\Rightarrow (x+4)(x-3)=0$.", "Kökler $x=3$ ve $x=-4$. **Kontrol:** $x=3>1$ kabul; $x=-4$ tanım dışı, **atılır**.", "İstenen: $x^{2}-2=3^{2}-2=9-2=7$."],
      answer: "$7$",
    },
    {
      id: "logaritmik-denklem-ayt-06",
      difficulty: "Zor",
      prompt: "$2\\le \\log_3(2x-1)\\le 4$ koşulunu sağlayan $x$ tam sayılarının en küçüğü ile en büyüğünün toplamı kaçtır?",
      options: ["$46$", "$47$", "$48$", "$49$", "$50$"],
      correct: 0,
      solution: ["**Tanım kümesi:** $2x-1>0 \\Rightarrow x>\\dfrac{1}{2}$ (sınırlar zaten bunu sağlayacak).", "Taban $3>1$, yön korunur. Eşitsizliği üslü biçime çevir: $3^{2}\\le 2x-1\\le 3^{4}$, yani $9\\le 2x-1\\le 81$.", "Her tarafa $1$ ekle: $10\\le 2x\\le 82$.", "İkiye böl: $5\\le x\\le 41$.", "En küçük tam sayı $5$, en büyük $41$; toplam $5+41=46$."],
      answer: "$46$",
    },
  ],
};

export default quiz;
