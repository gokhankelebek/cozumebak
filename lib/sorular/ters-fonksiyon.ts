import type { TopicQuiz } from "./types";

// ters-fonksiyon — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "ters-fonksiyon",
  questions: [
    {
      id: "ters-fonksiyon-01",
      difficulty: "Kolay",
      prompt: "$f(x)=4x-5$ fonksiyonunun tersi $f^{-1}(x)$ aşağıdakilerden hangisidir?",
      options: ["$\\dfrac{x+5}{4}$", "$\\dfrac{x-5}{4}$", "$4x+5$", "$\\dfrac{1}{4x-5}$", "$\\dfrac{x}{4}-5$"],
      correct: 0,
      solution: ["$y=4x-5$ yaz.", "$x$ ile $y$'yi yer değiştir: $x=4y-5$.", "$y$'yi yalnız bırak: $4y=x+5\\Rightarrow y=\\dfrac{x+5}{4}$.", "Doğrulama: $f\\!\\left(\\dfrac{x+5}{4}\\right)=4\\cdot\\dfrac{x+5}{4}-5=(x+5)-5=x$."],
      answer: "$f^{-1}(x)=\\dfrac{x+5}{4}$ (A).",
    },
    {
      id: "ters-fonksiyon-02",
      difficulty: "Kolay",
      prompt: "$f(x)=\\dfrac{x-3}{2}$ olduğuna göre $f^{-1}(2)$ kaçtır?",
      options: ["$-1$", "$1$", "$5$", "$4$", "$7$"],
      correct: 4,
      solution: ["$f^{-1}(2)$ demek \"$f(x)=2$ yapan $x$\" demektir.", "$\\dfrac{x-3}{2}=2$ yaz.", "$x-3=4\\Rightarrow x=7$.", "Kontrol: $f(7)=\\dfrac{7-3}{2}=2$ olduğundan $f^{-1}(2)=7$."],
      answer: "$f^{-1}(2)=7$ (E).",
    },
    {
      id: "ters-fonksiyon-03",
      difficulty: "Orta",
      prompt: "$f$ fonksiyonunun grafiği $(-1,\\ 6)$ noktasından geçmektedir. Buna göre $f^{-1}$'in grafiği hangi noktadan geçer?",
      options: ["$(-1,\\ 6)$", "$(6,\\ -1)$", "$(1,\\ -6)$", "$(-6,\\ 1)$", "$(6,\\ 1)$"],
      correct: 1,
      solution: ["$f$ ve $f^{-1}$ grafikleri $y=x$ doğrusuna göre simetriktir: $(a,b)\\to(b,a)$.", "$f$ üzerindeki $(-1,6)$ noktası, $f^{-1}$ üzerinde $(6,-1)$ olur.", "Yani koordinatların işareti değişmez, yalnızca yerleri değişir."],
      answer: "$(6,\\ -1)$ (B).",
    },
    {
      id: "ters-fonksiyon-04",
      difficulty: "Orta",
      prompt: "$f(x)=\\dfrac{2x+1}{x-3}$ fonksiyonunun tersi $f^{-1}(x)$ aşağıdakilerden hangisidir?",
      options: ["$\\dfrac{x-3}{2x+1}$", "$\\dfrac{3x+1}{x-2}$", "$\\dfrac{3x-1}{x+2}$", "$\\dfrac{2x+1}{x+3}$", "$\\dfrac{x+3}{2x-1}$"],
      correct: 1,
      solution: ["$y=\\dfrac{2x+1}{x-3}$ yaz, $x$ ile $y$'yi değiştir: $x=\\dfrac{2y+1}{y-3}$.", "İçler-dışlar çarpımı: $x(y-3)=2y+1\\Rightarrow xy-3x=2y+1$.", "$y$'li terimleri topla: $xy-2y=3x+1\\Rightarrow y(x-2)=3x+1$.", "$y=\\dfrac{3x+1}{x-2}$."],
      answer: "$f^{-1}(x)=\\dfrac{3x+1}{x-2}$ (B).",
    },
    {
      id: "ters-fonksiyon-05",
      difficulty: "Orta",
      prompt: "Bir taksinin ücreti, gidilen $x$ km yol için $f(x)=6x+15$ (TL) kuralıyla hesaplanıyor. Bir yolculukta ödenen ücret $51$ TL olduğuna göre, kaç km yol gidilmiştir? (Yani $f^{-1}(51)$ kaçtır?)",
      options: ["$5$", "$6$", "$9$", "$11$", "$66$"],
      correct: 1,
      solution: ["Sorulan $f^{-1}(51)$, yani \"$f(x)=51$ yapan $x$\"tir.", "$6x+15=51$ yaz.", "$6x=36\\Rightarrow x=6$.", "Kontrol: $f(6)=6\\cdot 6+15=51$ TL, doğru."],
      answer: "$f^{-1}(51)=6$ km (B).",
    },
    {
      id: "ters-fonksiyon-06",
      difficulty: "Zor",
      prompt: "$f$ doğrusal bir fonksiyondur ve $f(2)=1$, $f(5)=7$ olarak veriliyor. Buna göre $f^{-1}(11)$ kaçtır?",
      options: ["$5$", "$6$", "$7$", "$8$", "$19$"],
      correct: 2,
      solution: ["Eğim: $a=\\dfrac{7-1}{5-2}=\\dfrac{6}{3}=2$.", "$f(x)=2x+b$ ve $f(2)=1\\Rightarrow 2\\cdot 2+b=1\\Rightarrow b=-3$, yani $f(x)=2x-3$.", "$f^{-1}(11)$: $2x-3=11\\Rightarrow 2x=14\\Rightarrow x=7$.", "Kontrol: $f(7)=2\\cdot 7-3=11$, doğru."],
      answer: "$f^{-1}(11)=7$ (C).",
    },
  ],
};

export default quiz;
