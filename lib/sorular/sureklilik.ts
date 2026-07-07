import type { TopicQuiz } from "./types";

// sureklilik — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "sureklilik",
  questions: [
    {
      id: "sureklilik-01",
      difficulty: "Orta",
      prompt: "$f(x)=\\begin{cases}\\dfrac{x^{2}-ax+b}{x-3},& x\\ne 3\\\\[2mm] c,& x=3\\end{cases}$ fonksiyonu $x=3$ noktasında süreklidir. Ayrıca $x\\ne 3$ için pay, $(x-3)$ ile tam bölünmekte ve bölümün diğer çarpanı $(x-2)$ olmaktadır. Buna göre $a+b+c$ kaçtır?",
      options: ["$8$", "$10$", "$11$", "$12$", "$14$"],
      correct: 3,
      solution: ["Pay tam bölünüp bölümün diğer çarpanı $(x-2)$ olduğundan: $x^{2}-ax+b=(x-3)(x-2)=x^{2}-5x+6$.", "Katsayıları eşitle: $a=5$ ve $b=6$.", "$x\\ne 3$ için $f(x)=\\dfrac{(x-3)(x-2)}{x-3}=x-2$.", "Süreklilik için $c=\\lim\\limits_{x\\to 3}f(x)=\\lim\\limits_{x\\to 3}(x-2)=1$.", "Sonuç: $a+b+c=5+6+1=12$."],
      answer: "$12$",
    },
    {
      id: "sureklilik-02",
      difficulty: "Orta",
      prompt: "$f(x)=\\begin{cases}2x+a,& x<1\\\\ x^{2}+b,& 1\\le x\\le 2\\\\ bx-3,& x>2\\end{cases}$ fonksiyonu tüm reel sayılarda süreklidir. Buna göre $a\\cdot b$ çarpımı kaçtır?",
      options: ["$35$", "$40$", "$42$", "$48$", "$56$"],
      correct: 2,
      solution: ["Her parça kendi aralığında polinom olduğundan, yalnız $x=1$ ve $x=2$ birleşme noktalarını sınarız.", "**$x=2$ noktası:** Soldan $\\lim\\limits_{x\\to 2^{-}}f(x)=2^{2}+b=4+b$, sağdan $\\lim\\limits_{x\\to 2^{+}}f(x)=b\\cdot 2-3=2b-3$.", "Eşitle: $4+b=2b-3\\Rightarrow b=7$.", "**$x=1$ noktası:** Soldan $\\lim\\limits_{x\\to 1^{-}}f(x)=2\\cdot 1+a=2+a$, sağdan $\\lim\\limits_{x\\to 1^{+}}f(x)=1^{2}+b=1+b$.", "Eşitle: $2+a=1+b=1+7=8\\Rightarrow a=6$.", "Sonuç: $a\\cdot b=6\\cdot 7=42$."],
      answer: "$42$",
    },
    {
      id: "sureklilik-03",
      difficulty: "Orta",
      prompt: "$f(x)=\\begin{cases}\\dfrac{\\sqrt{x+4}-2}{x},& x\\ne 0\\\\[2mm] a,& x=0\\end{cases}$ fonksiyonu $x=0$ noktasında süreklidir. Buna göre $8a$ kaçtır?",
      options: ["$1$", "$2$", "$3$", "$4$", "$6$"],
      correct: 1,
      solution: ["$x\\ne 0$ için ifadeyi eşleniğiyle genişlet: $\\dfrac{\\sqrt{x+4}-2}{x}\\cdot\\dfrac{\\sqrt{x+4}+2}{\\sqrt{x+4}+2}=\\dfrac{(x+4)-4}{x\\left(\\sqrt{x+4}+2\\right)}$.", "Sadeleştir: $\\dfrac{x}{x\\left(\\sqrt{x+4}+2\\right)}=\\dfrac{1}{\\sqrt{x+4}+2}$.", "Limiti al: $\\lim\\limits_{x\\to 0}f(x)=\\dfrac{1}{\\sqrt{4}+2}=\\dfrac{1}{4}$.", "Süreklilik için $a=\\lim\\limits_{x\\to 0}f(x)=\\dfrac{1}{4}$.", "Sonuç: $8a=8\\cdot\\dfrac{1}{4}=2$."],
      answer: "$2$",
    },
    {
      id: "sureklilik-04",
      difficulty: "Zor",
      prompt: "$f(x)=\\begin{cases}\\dfrac{\\sin 4x}{x},& x<0\\\\[2mm] x^{2}+a,& 0\\le x<2\\\\[1mm] bx-2,& x\\ge 2\\end{cases}$ fonksiyonu tüm reel sayılarda süreklidir. Buna göre $a+b$ kaçtır?",
      options: ["$5$", "$6$", "$7$", "$8$", "$9$"],
      correct: 4,
      solution: ["**$x=0$ noktası:** Soldan ($x<0$): $\\lim\\limits_{x\\to 0^{-}}\\dfrac{\\sin 4x}{x}=4$ (temel limit; $\\frac{\\sin 4x}{x}=4\\cdot\\frac{\\sin 4x}{4x}\\to 4$).", "Sağdan ($0\\le x<2$, kural $x^{2}+a$): $\\lim\\limits_{x\\to 0^{+}}(x^{2}+a)=a$, ayrıca $f(0)=a$.", "Süreklilik için $4=a\\Rightarrow a=4$.", "**$x=2$ noktası:** Soldan ($0\\le x<2$): $\\lim\\limits_{x\\to 2^{-}}(x^{2}+a)=4+a=4+4=8$.", "Sağdan ($x\\ge 2$, kural $bx-2$): $f(2)=2b-2$. Süreklilik için $2b-2=8\\Rightarrow b=5$.", "İstenen: $a+b=4+5=9$."],
      answer: "$9$",
    },
    {
      id: "sureklilik-05",
      difficulty: "Zor",
      prompt: "$f(x)=\\begin{cases}\\dfrac{x^{2}-x-6}{x-3},& x\\ne 3\\\\[2mm] m,& x=3\\end{cases}$ fonksiyonu $x=3$'te sürekli; $g(x)=\\dfrac{x+1}{x^{2}-2x-3}$ fonksiyonu ise $x=n$ noktasında **kaldırılabilir** süreksizliğe sahiptir. Buna göre $m+n$ kaçtır?",
      options: ["$2$", "$3$", "$4$", "$5$", "$6$"],
      correct: 2,
      solution: ["**$f$:** Pay $x^{2}-x-6=(x-3)(x+2)$, sadeleştir: $\\dfrac{(x-3)(x+2)}{x-3}=x+2$ ($x\\ne 3$). Limit $\\lim\\limits_{x\\to 3}(x+2)=5$. Süreklilik için $m=5$.", "**$g$:** Payda $x^{2}-2x-3=(x-3)(x+1)$. Süreksizlik adayları $x=3$ ve $x=-1$.", "Pay $x+1$, paydadaki $(x+1)$ ile sadeleşir: $g(x)=\\dfrac{x+1}{(x-3)(x+1)}=\\dfrac{1}{x-3}$ ($x\\ne -1$).", "$x=-1$ sadeleştiği için orada **kaldırılabilir** süreksizlik (delik) vardır; $x=3$ ise sonsuz süreksizliktir. O hâlde $n=-1$.", "İstenen: $m+n=5+(-1)=4$."],
      answer: "$4$",
    },
    {
      id: "sureklilik-06",
      difficulty: "Orta",
      prompt: "$f(x)=x^{3}+x-3$ fonksiyonu $\\mathbb{R}$'de süreklidir. **Ara Değer Teoremi**'ne göre, $f$ fonksiyonunun bir kökü aşağıdaki aralıklardan hangisinde **kesinlikle** vardır?",
      options: ["$(-1,0)$", "$(0,1)$", "$(1,2)$", "$(2,3)$", "$(3,4)$"],
      correct: 2,
      solution: ["Polinom her yerde sürekli; Ara Değer Teoremi uygulanabilir. Uç değerlerin işaretine bak.", "$f(0)=0+0-3=-3<0$.", "$f(1)=1+1-3=-1<0$. İşaret değişmedi, $(0,1)$ garanti değil.", "$f(2)=8+2-3=7>0$. $f(1)=-1<0$ ile $f(2)=7>0$ arasında işaret değişti: $f(1)\\cdot f(2)<0$.", "Süreklilik $+$ işaret değişimi $\\Rightarrow$ $(1,2)$ aralığında en az bir kök kesinlikle vardır."],
      answer: "$(1,2)$",
    },
  ],
};

export default quiz;
