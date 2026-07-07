import type { TopicQuiz } from "./types";

// trigonometrik-fonksiyonlar-ayt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "trigonometrik-fonksiyonlar-ayt",
  questions: [
    {
      id: "trigonometrik-fonksiyonlar-ayt-01",
      difficulty: "Orta",
      prompt: "III. bölgede bulunan bir $x$ açısı için $\\tan x = 2$ veriliyor. Buna göre $\\dfrac{\\sin x - \\cos x}{\\sin x + \\cos x}$ ifadesinin değeri kaçtır?",
      options: ["$\\dfrac{1}{2}$", "$\\dfrac{1}{3}$", "$\\dfrac{2}{3}$", "$1$", "$3$"],
      correct: 1,
      solution: ["Pay ve paydayı $\\cos x$'e bölersek (III. bölgede $\\cos x \\neq 0$): $\\dfrac{\\sin x - \\cos x}{\\sin x + \\cos x} = \\dfrac{\\tan x - 1}{\\tan x + 1}$.", "$\\tan x = 2$ değerini yerine koy: $\\dfrac{2 - 1}{2 + 1} = \\dfrac{1}{3}$.", "İfade $\\tan x$ cinsinden yazıldığı için bölge işaretinden bağımsızdır; sonuç doğrudan bulunur."],
      answer: "$\\dfrac{1}{3}$",
    },
    {
      id: "trigonometrik-fonksiyonlar-ayt-02",
      difficulty: "Orta",
      prompt: "$\\dfrac{\\sin 150^{\\circ}\\cdot\\cos 300^{\\circ}}{\\tan 225^{\\circ}}$ işlemi yapılıyor. Buna göre bu ifadenin değeri kaçtır?",
      options: ["$-\\dfrac{1}{2}$", "$-\\dfrac{1}{4}$", "$\\dfrac{1}{8}$", "$\\dfrac{1}{4}$", "$\\dfrac{1}{2}$"],
      correct: 3,
      solution: ["$\\sin 150^{\\circ} = \\sin(180^{\\circ}-30^{\\circ}) = \\sin 30^{\\circ} = \\dfrac{1}{2}$.", "$\\cos 300^{\\circ} = \\cos(360^{\\circ}-60^{\\circ}) = \\cos 60^{\\circ} = \\dfrac{1}{2}$.", "$\\tan 225^{\\circ} = \\tan(180^{\\circ}+45^{\\circ}) = \\tan 45^{\\circ} = 1$.", "Yerine yaz: $\\dfrac{\\frac{1}{2}\\cdot\\frac{1}{2}}{1} = \\dfrac{1}{4}$."],
      answer: "$\\dfrac{1}{4}$",
    },
    {
      id: "trigonometrik-fonksiyonlar-ayt-03",
      difficulty: "Orta",
      prompt: "III. bölgede bulunan bir $x$ açısı için $\\cos x = -\\dfrac{5}{13}$ veriliyor. Buna göre $\\sin x + \\tan x$ ifadesinin değeri kaçtır?",
      options: ["$-\\dfrac{12}{13}$", "$\\dfrac{12}{5}$", "$\\dfrac{84}{65}$", "$\\dfrac{90}{65}$", "$\\dfrac{96}{65}$"],
      correct: 4,
      solution: ["Temel özdeşlik: $\\sin^{2}x = 1 - \\cos^{2}x = 1 - \\dfrac{25}{169} = \\dfrac{144}{169}$, yani $\\sin x = \\pm\\dfrac{12}{13}$.", "İşaret seç: $x$ III. bölgede olduğundan $\\sin x < 0$, böylece $\\sin x = -\\dfrac{12}{13}$.", "Tanjantı bul: $\\tan x = \\dfrac{\\sin x}{\\cos x} = \\dfrac{-\\frac{12}{13}}{-\\frac{5}{13}} = \\dfrac{12}{5}$ (III. bölgede $\\tan$ pozitif; tutarlı).", "Topla: $\\sin x + \\tan x = -\\dfrac{12}{13} + \\dfrac{12}{5} = \\dfrac{-60 + 156}{65} = \\dfrac{96}{65}$."],
      answer: "$\\dfrac{96}{65}$",
    },
    {
      id: "trigonometrik-fonksiyonlar-ayt-04",
      difficulty: "Zor",
      prompt: "$\\dfrac{\\sin 1^{\\circ}+\\sin 2^{\\circ}+\\sin 3^{\\circ}+\\cdots+\\sin 179^{\\circ}}{\\cos 90^{\\circ}+\\sin 90^{\\circ}}$ işleminin sonucu, $\\sin 90^{\\circ}$ dışındaki terimler **ikişerli** eşleştirilerek bulunmak isteniyor. Buna göre, paydaki $\\sin 1^{\\circ}+\\sin 2^{\\circ}+\\cdots+\\sin 179^{\\circ}$ toplamı için aşağıdaki eşleştirmelerden hangisi **doğrudur**?",
      options: ["$\\sin 1^{\\circ}=-\\sin 179^{\\circ}$", "$\\sin 1^{\\circ}=\\sin 179^{\\circ}$", "$\\sin 1^{\\circ}=\\cos 179^{\\circ}$", "$\\sin 2^{\\circ}=-\\sin 178^{\\circ}$", "$\\sin 89^{\\circ}=-\\sin 91^{\\circ}$"],
      correct: 1,
      solution: ["İndirgeme formülü: $\\sin(180^{\\circ}-x)=\\sin x$.", "$179^{\\circ}=180^{\\circ}-1^{\\circ}$ olduğundan $\\sin 179^{\\circ}=\\sin(180^{\\circ}-1^{\\circ})=\\sin 1^{\\circ}$.", "Demek ki $\\sin 1^{\\circ}=\\sin 179^{\\circ}$ eşitliği doğrudur (B). Aynı mantıkla $\\sin 2^{\\circ}=\\sin 178^{\\circ}$, $\\sin 89^{\\circ}=\\sin 91^{\\circ}$; bu yüzden işaretli seçenekler (A, D, E) yanlıştır.", "Kontrol: II. bölgede ($90^{\\circ}$–$180^{\\circ}$) $\\sin$ pozitif olduğundan $\\sin 179^{\\circ}>0$; işaretsiz B seçeneği tutarlıdır."],
      answer: "$\\sin 1^{\\circ}=\\sin 179^{\\circ}$",
    },
    {
      id: "trigonometrik-fonksiyonlar-ayt-05",
      difficulty: "Orta",
      prompt: "II. bölgede bulunan bir $x$ açısı için $5\\sin x-3=0$ eşitliği sağlanıyor. Buna göre $\\dfrac{\\tan x}{\\cos x}$ ifadesinin değeri kaçtır?",
      options: ["$-\\dfrac{15}{16}$", "$-\\dfrac{16}{15}$", "$-\\dfrac{20}{16}$", "$\\dfrac{15}{16}$", "$\\dfrac{16}{15}$"],
      correct: 3,
      solution: ["$\\sin x$'i bul: $5\\sin x=3\\Rightarrow \\sin x=\\dfrac{3}{5}$.", "$\\cos x$'i bul: $\\cos^{2}x=1-\\dfrac{9}{25}=\\dfrac{16}{25}$, yani $\\cos x=\\pm\\dfrac{4}{5}$. II. bölgede $\\cos x<0$ olduğundan $\\cos x=-\\dfrac{4}{5}$.", "$\\tan x=\\dfrac{\\sin x}{\\cos x}=\\dfrac{3/5}{-4/5}=-\\dfrac{3}{4}$.", "İfadeyi yaz: $\\dfrac{\\tan x}{\\cos x}=\\dfrac{-\\frac{3}{4}}{-\\frac{4}{5}}=-\\dfrac{3}{4}\\cdot\\left(-\\dfrac{5}{4}\\right)=\\dfrac{15}{16}$."],
      answer: "$\\dfrac{15}{16}$",
    },
    {
      id: "trigonometrik-fonksiyonlar-ayt-06",
      difficulty: "Orta",
      prompt: "$f(x)=\\sin x$ fonksiyonu için $f(x)+f(180^{\\circ}-x)+f(180^{\\circ}+x)+f(360^{\\circ}-x)$ ifadesi sadeleştiriliyor. Buna göre bu ifade aşağıdakilerden hangisine eşittir?",
      options: ["$4\\sin x$", "$2\\sin x$", "$0$", "$-2\\sin x$", "$\\sin x$"],
      correct: 2,
      solution: ["$f(x)=\\sin x$.", "$f(180^{\\circ}-x)=\\sin(180^{\\circ}-x)=\\sin x$ (II. bölge, $\\sin$ pozitif).", "$f(180^{\\circ}+x)=\\sin(180^{\\circ}+x)=-\\sin x$ (III. bölge, $\\sin$ negatif).", "$f(360^{\\circ}-x)=\\sin(360^{\\circ}-x)=\\sin(-x)=-\\sin x$ (IV. bölge, $\\sin$ negatif).", "Topla: $\\sin x+\\sin x-\\sin x-\\sin x=0$."],
      answer: "$0$",
    },
  ],
};

export default quiz;
