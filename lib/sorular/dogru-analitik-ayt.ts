import type { TopicQuiz } from "./types";

// dogru-analitik-ayt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "dogru-analitik-ayt",
  questions: [
    {
      id: "dogru-analitik-ayt-01",
      difficulty: "Orta",
      prompt: "$4x-3y+5=0$ doğrusuna dik olan ve $A(2,1)$ noktasından geçen $d$ doğrusu çiziliyor. Buna göre $d$ doğrusunun orijine uzaklığı kaçtır?",
      options: ["$1$", "$2$", "$\\dfrac{12}{5}$", "$3$", "$\\dfrac{16}{5}$"],
      correct: 1,
      solution: ["Verilen doğrunun eğimi: $4x-3y+5=0 \\Rightarrow m_1=-\\dfrac{a}{b}=-\\dfrac{4}{-3}=\\dfrac{4}{3}$.", "$d$ buna dik olduğundan eğimi negatif terstir: $m_2=-\\dfrac{3}{4}$.", "$A(2,1)$ noktasından nokta–eğim biçimi: $y-1=-\\dfrac{3}{4}(x-2)$.", "Düzenle: $4y-4=-3x+6 \\Rightarrow 3x+4y-10=0$.", "Orijinin bu doğruya uzaklığı: $d=\\dfrac{\\lvert 3\\cdot 0+4\\cdot 0-10\\rvert}{\\sqrt{3^2+4^2}}=\\dfrac{10}{5}=2$."],
      answer: "$2$",
    },
    {
      id: "dogru-analitik-ayt-02",
      difficulty: "Orta",
      prompt: "Köşeleri $A(1,1)$, $B(5,1)$ ve $C(3,6)$ olan bir üçgen koordinat düzleminde veriliyor. Buna göre $ABC$ üçgeninin alanı kaç birim karedir?",
      options: ["$8$", "$9$", "$10$", "$12$", "$15$"],
      correct: 2,
      solution: ["Koordinatlarla üçgen alanı formülü: $S=\\dfrac{1}{2}\\lvert x_A(y_B-y_C)+x_B(y_C-y_A)+x_C(y_A-y_B)\\rvert$.", "Değerleri yerleştir: $S=\\dfrac{1}{2}\\lvert 1(1-6)+5(6-1)+3(1-1)\\rvert$.", "Hesapla: $S=\\dfrac{1}{2}\\lvert -5+25+0\\rvert=\\dfrac{1}{2}\\cdot 20$.", "Sonuç: $S=10$."],
      answer: "$10$",
    },
    {
      id: "dogru-analitik-ayt-03",
      difficulty: "Orta",
      prompt: "$(k-1)x+3y-7=0$ doğrusu, $2x+y+4=0$ doğrusuna paraleldir. Buna göre $k$ kaçtır?",
      options: ["$4$", "$5$", "$6$", "$7$", "$8$"],
      correct: 3,
      solution: ["$ax+by+c=0$ biçiminde eğim $m=-\\dfrac{a}{b}$'dir.", "Birinci doğrunun eğimi: $m_1=-\\dfrac{k-1}{3}$.", "İkinci doğrunun eğimi: $m_2=-\\dfrac{2}{1}=-2$.", "Paralellik koşulu $m_1=m_2$: $-\\dfrac{k-1}{3}=-2 \\Rightarrow k-1=6$.", "Çöz: $k=7$."],
      answer: "$7$",
    },
    {
      id: "dogru-analitik-ayt-04",
      difficulty: "Orta",
      prompt: "Bir $d$ doğrusu $A(0,6)$ ve $B(8,0)$ noktalarından geçmektedir. Orijinden $d$ doğrusuna inilen dikmenin ayağı $H$ noktasıdır. Buna göre $|OH|$ kaç birimdir?",
      options: ["$\\dfrac{12}{5}$", "$\\dfrac{18}{5}$", "$\\dfrac{24}{5}$", "$5$", "$\\dfrac{28}{5}$"],
      correct: 2,
      solution: ["$d$ doğrusunun denklemi (eksenleri kesim biçiminden): $\\dfrac{x}{8}+\\dfrac{y}{6}=1$.", "Paydaları eşitle ($24$ ile çarp): $3x+4y=24$, yani $3x+4y-24=0$.", "$|OH|$, orijinin bu doğruya uzaklığıdır: $|OH|=\\dfrac{\\lvert 3\\cdot 0+4\\cdot 0-24\\rvert}{\\sqrt{3^{2}+4^{2}}}$.", "Hesapla: $|OH|=\\dfrac{24}{\\sqrt{25}}=\\dfrac{24}{5}$."],
      answer: "$\\dfrac{24}{5}$",
    },
    {
      id: "dogru-analitik-ayt-05",
      difficulty: "Orta",
      prompt: "$d_1:\\ 3x-4y+12=0$ ve $d_2:\\ 3x-4y-8=0$ doğruları birbirine paraleldir. Buna göre $d_1$ ile $d_2$ arasındaki uzaklık kaç birimdir?",
      options: ["$2$", "$3$", "$4$", "$5$", "$6$"],
      correct: 2,
      solution: ["Paralel doğrular arası uzaklık için $d_1$ üzerinde bir nokta seç. $x=0$ alırsak $-4y+12=0\\Rightarrow y=3$, yani $P(0,3)\\in d_1$.", "Bu noktanın $d_2:\\ 3x-4y-8=0$ doğrusuna uzaklığını al: $d=\\dfrac{\\lvert 3\\cdot 0-4\\cdot 3-8\\rvert}{\\sqrt{3^{2}+(-4)^{2}}}$.", "Payı hesapla: $\\lvert 0-12-8\\rvert=\\lvert -20\\rvert=20$.", "Böl: $d=\\dfrac{20}{5}=4$."],
      answer: "$4$",
    },
    {
      id: "dogru-analitik-ayt-06",
      difficulty: "Zor",
      prompt: "$A(-1,4)$ ve $B(5,-2)$ noktaları veriliyor. $[AB]$ doğru parçasının orta dikmesi (orta noktasından geçip $[AB]$'ye dik olan doğru) $y$ eksenini hangi noktada keser?",
      options: ["$(0,-1)$", "$(0,0)$", "$(0,1)$", "$(0,2)$", "$(0,3)$"],
      correct: 0,
      solution: ["Orta nokta: $M=\\left(\\dfrac{-1+5}{2},\\dfrac{4+(-2)}{2}\\right)=(2,1)$.", "$[AB]$ eğimi: $m_{AB}=\\dfrac{-2-4}{5-(-1)}=\\dfrac{-6}{6}=-1$.", "Orta dikmenin eğimi negatif terstir: $m=-\\dfrac{1}{-1}=1$.", "$M(2,1)$'den geçen orta dikme: $y-1=1\\cdot(x-2)\\Rightarrow y=x-1$.", "$y$ eksenini kestiği yerde $x=0$: $y=-1$, yani nokta $(0,-1)$."],
      answer: "$(0,-1)$",
    },
    {
      id: "dogru-analitik-ayt-07",
      difficulty: "Zor",
      prompt: "Eğimi $-2$ olan bir $d$ doğrusu, koordinat eksenleriyle birlikte alanı $9$ birim kare olan bir üçgen oluşturmaktadır. $d$ doğrusunun $y$ eksenini pozitif yarıda kestiği bilindiğine göre, $d$ doğrusunun $y$ eksenini kestiği noktanın ordinatı kaçtır?",
      options: ["$3$", "$4$", "$5$", "$6$", "$9$"],
      correct: 3,
      solution: ["Doğruyu $y=-2x+n$ biçiminde yaz ($n>0$ veriliyor).", "$y$ kesişimi $(0,n)$; $x$ kesişimi için $0=-2x+n\\Rightarrow x=\\dfrac{n}{2}$, yani $\\left(\\dfrac{n}{2},0\\right)$.", "Eksenlerle oluşan dik üçgenin alanı: $S=\\dfrac{1}{2}\\cdot\\left|\\dfrac{n}{2}\\right|\\cdot|n|=\\dfrac{n^{2}}{4}$.", "$\\dfrac{n^{2}}{4}=9\\Rightarrow n^{2}=36\\Rightarrow n=6$ (pozitif kök seçilir)."],
      answer: "$6$",
    },
  ],
};

export default quiz;
