import type { TopicQuiz } from "./types";

// ucgende-trigonometri-ayt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "ucgende-trigonometri-ayt",
  questions: [
    {
      id: "ucgende-trigonometri-ayt-01",
      difficulty: "Orta",
      prompt: "Kenar uzunlukları $a=7$, $b=8$ ve $c=13$ birim olan bir üçgen veriliyor. Buna göre, bu üçgenin alanı kaç birimkaredir?",
      options: ["$10\\sqrt{3}$", "$12\\sqrt{3}$", "$14\\sqrt{3}$", "$14\\sqrt{2}$", "$28$"],
      correct: 2,
      solution: ["$c=13$ kenarının karşısındaki $C$ açısını bulmak için kosinüs teoremini açı biçiminde yaz: $\\cos C=\\dfrac{a^{2}+b^{2}-c^{2}}{2ab}$.", "Değerleri yerine koy: $\\cos C=\\dfrac{49+64-169}{2\\cdot 7\\cdot 8}=\\dfrac{-56}{112}=-\\dfrac{1}{2}$.", "Kosinüsü $-\\dfrac{1}{2}$ olan açı $C=120^{\\circ}$'dir; buradan $\\sin C=\\dfrac{\\sqrt{3}}{2}$ bulunur.", "$C$ açısı $a$ ile $b$ kenarları arasında olduğundan alan formülü doğrudan uygulanır: $\\text{Alan}=\\dfrac{1}{2}\\,a\\,b\\,\\sin C=\\dfrac{1}{2}\\cdot 7\\cdot 8\\cdot\\dfrac{\\sqrt{3}}{2}$.", "Sadeleştir: $\\text{Alan}=\\dfrac{56\\sqrt{3}}{4}=14\\sqrt{3}$."],
      answer: "$14\\sqrt{3}$",
    },
    {
      id: "ucgende-trigonometri-ayt-02",
      difficulty: "Orta",
      prompt: "Bir $ABC$ üçgeninde $b=5$, $c=8$ birim ve bu iki kenar arasındaki $A$ açısı $60^{\\circ}$'dir. Buna göre, bu üçgenin çevrel çemberinin yarıçapı $R$ kaç birimdir?",
      options: ["$\\dfrac{7\\sqrt{3}}{3}$", "$\\dfrac{7}{3}$", "$\\dfrac{7\\sqrt{3}}{2}$", "$7$", "$\\dfrac{14\\sqrt{3}}{3}$"],
      correct: 0,
      solution: ["Karşı açısı bilinen bir kenar yok; önce kosinüs teoremiyle $a$ kenarını bul: $a^{2}=b^{2}+c^{2}-2bc\\cos A=25+64-2\\cdot 5\\cdot 8\\cdot\\cos 60^{\\circ}$.", "$\\cos 60^{\\circ}=\\dfrac{1}{2}$ ile: $a^{2}=89-80\\cdot\\dfrac{1}{2}=89-40=49 \\Rightarrow a=7$.", "Artık $a=7$ kenarı ile karşı açısı $A=60^{\\circ}$ elimizde; sinüs teoremini $2R$ ile yaz: $2R=\\dfrac{a}{\\sin A}=\\dfrac{7}{\\sin 60^{\\circ}}=\\dfrac{7}{\\dfrac{\\sqrt{3}}{2}}=\\dfrac{14}{\\sqrt{3}}$.", "Paydayı rasyonelleştir: $2R=\\dfrac{14}{\\sqrt{3}}\\cdot\\dfrac{\\sqrt{3}}{\\sqrt{3}}=\\dfrac{14\\sqrt{3}}{3}$.", "İkiye böl: $R=\\dfrac{7\\sqrt{3}}{3}$."],
      answer: "$\\dfrac{7\\sqrt{3}}{3}$",
    },
    {
      id: "ucgende-trigonometri-ayt-03",
      difficulty: "Orta",
      prompt: "Kenar uzunlukları $a=13$, $b=14$ ve $c=15$ birim olan bir üçgen veriliyor. Buna göre, bu üçgenin çevrel çemberinin yarıçapı $R$ kaç birimdir?",
      options: ["$\\dfrac{63}{8}$", "$\\dfrac{65}{8}$", "$8$", "$\\dfrac{65}{4}$", "$\\dfrac{33}{4}$"],
      correct: 1,
      solution: ["Bir kenar ile karşı açısını elde etmek için $a=13$ kenarının karşısındaki $A$ açısını kosinüs teoremiyle bul: $\\cos A=\\dfrac{b^{2}+c^{2}-a^{2}}{2bc}=\\dfrac{196+225-169}{2\\cdot 14\\cdot 15}$.", "Hesapla: $\\cos A=\\dfrac{252}{420}=\\dfrac{3}{5}$.", "Sinüsü bul: $\\sin A=\\sqrt{1-\\cos^{2}A}=\\sqrt{1-\\dfrac{9}{25}}=\\sqrt{\\dfrac{16}{25}}=\\dfrac{4}{5}$.", "Sinüs teoremini $2R$ ile uygula: $2R=\\dfrac{a}{\\sin A}=\\dfrac{13}{\\dfrac{4}{5}}=\\dfrac{65}{4}$.", "İkiye böl: $R=\\dfrac{65}{8}$."],
      answer: "$\\dfrac{65}{8}$",
    },
    {
      id: "ucgende-trigonometri-ayt-04",
      difficulty: "Zor",
      prompt: "Bir $ABC$ üçgeninde $b=2\\sqrt{3}$ birim, $c=2$ birim ve bu iki kenar arasındaki açı $A=30^{\\circ}$'dir. Buna göre, $a$ kenarının karşısındaki $A$ açısı dışında kalan, $b$ kenarının karşısındaki $B$ açısı kaç derecedir?",
      options: ["$30$", "$45$", "$60$", "$90$", "$120$"],
      correct: 4,
      solution: ["Kosinüs teoremi: $a^{2}=b^{2}+c^{2}-2bc\\cos A=12+4-2\\cdot 2\\sqrt{3}\\cdot 2\\cdot\\cos 30^{\\circ}$.", "$\\cos 30^{\\circ}=\\dfrac{\\sqrt{3}}{2}$ ile: $a^{2}=16-8\\sqrt{3}\\cdot\\dfrac{\\sqrt{3}}{2}=16-12=4 \\Rightarrow a=2$.", "Sinüs teoremi: $\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}\\Rightarrow \\dfrac{2}{\\sin 30^{\\circ}}=\\dfrac{2\\sqrt{3}}{\\sin B}$.", "$\\sin 30^{\\circ}=\\dfrac12$ ile: $\\dfrac{2}{1/2}=4=\\dfrac{2\\sqrt{3}}{\\sin B}\\Rightarrow \\sin B=\\dfrac{2\\sqrt{3}}{4}=\\dfrac{\\sqrt{3}}{2}$.", "$\\sin B=\\dfrac{\\sqrt{3}}{2}$ veren açı $60^{\\circ}$ ya da $120^{\\circ}$'dir. $A=30^{\\circ}$ olduğundan $B=120^{\\circ}$ alınırsa açılar toplamı $30+120=150$ olur ve $C=30^{\\circ}$ kalır (geçerli). $B=60^{\\circ}$ ise $C=90^{\\circ}$ olur. İki kenarla aralarındaki açı (SAS) verildiğinde üçgen tek türlü belirlidir; $a=c=2$ olduğundan üçgen ikizkenardır ve $A=C$, yani $C=30^{\\circ}$, dolayısıyla $B=120^{\\circ}$'dir."],
      answer: "$120$",
    },
    {
      id: "ucgende-trigonometri-ayt-05",
      difficulty: "Kolay",
      prompt: "Bir $ABC$ üçgeninde $\\dfrac{a}{\\sin A}=12$ birimdir ve $a=6$ birimdir. Buna göre, $a$ kenarını gören (karşı) $A$ açısı kaç derecedir?",
      options: ["$30$", "$45$", "$60$", "$90$", "$120$"],
      correct: 0,
      solution: ["Sinüs teoremi: $\\dfrac{a}{\\sin A}=12 \\Rightarrow \\sin A=\\dfrac{a}{12}=\\dfrac{6}{12}=\\dfrac12$.", "$\\sin A=\\dfrac12$ veren dar açı $A=30^{\\circ}$'dir (geniş açı seçeneği $150^{\\circ}$ şıklarda yok)."],
      answer: "$30$",
    },
    {
      id: "ucgende-trigonometri-ayt-06",
      difficulty: "Zor",
      prompt: "Bir $ABC$ üçgeninde $b=6$, $c=10$ birim ve bu iki kenar arasındaki $A$ açısı için $\\cos A=\\dfrac{4}{5}$ veriliyor ($A$ dar açı). Buna göre, $a$ kenarının uzunluğunun karesi ($a^{2}$) ile üçgenin alanının ($S$) toplamı $a^{2}+S$ kaçtır?",
      options: ["$40$", "$48$", "$54$", "$58$", "$76$"],
      correct: 3,
      solution: ["Kosinüs teoremi: $a^{2}=b^{2}+c^{2}-2bc\\cos A=36+100-2\\cdot 6\\cdot 10\\cdot\\dfrac{4}{5}$.", "Hesapla: $a^{2}=136-120\\cdot\\dfrac{4}{5}=136-96=40$.", "Sinüsü bul: $A$ dar açı olduğundan $\\sin A=\\sqrt{1-\\dfrac{16}{25}}=\\dfrac{3}{5}$.", "Alan: $S=\\dfrac12\\,b\\,c\\,\\sin A=\\dfrac12\\cdot 6\\cdot 10\\cdot\\dfrac{3}{5}=30\\cdot\\dfrac{3}{5}=18$.", "Toplamı yaz: $a^{2}+S=40+18=58$."],
      answer: "$58$",
    },
  ],
};

export default quiz;
