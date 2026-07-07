import type { TopicQuiz } from "./types";

// birim-cember-ayt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "birim-cember-ayt",
  questions: [
    {
      id: "birim-cember-ayt-01",
      difficulty: "Orta",
      prompt: "$\\alpha=-1755^{\\circ}$ veriliyor. Buna göre, $\\alpha$ açısının esas ölçüsünün radyan değeri ile bulunduğu bölgenin numarasının toplamı kaçtır?",
      options: ["$\\dfrac{\\pi}{4}$", "$\\dfrac{2+\\pi}{4}$", "$\\dfrac{4+\\pi}{4}$", "$\\dfrac{8+\\pi}{4}$", "$\\dfrac{4+3\\pi}{4}$"],
      correct: 2,
      solution: ["Esas ölçü için $360^{\\circ}$'nin katlarını ekle: $-1755^{\\circ}+5\\cdot 360^{\\circ}=-1755^{\\circ}+1800^{\\circ}=45^{\\circ}$.", "Sonuç $[0^{\\circ},360^{\\circ})$ aralığında olduğundan esas ölçü $45^{\\circ}$'dir.", "Radyana çevir: $45^{\\circ}=45\\cdot\\dfrac{\\pi}{180}=\\dfrac{\\pi}{4}$.", "Bölgesini belirle: $45^{\\circ}$, $0^{\\circ}$ ile $90^{\\circ}$ arasında olduğundan I. bölgededir; bölge numarası $1$'dir.", "Toplamı yaz: $\\dfrac{\\pi}{4}+1=\\dfrac{\\pi}{4}+\\dfrac{4}{4}=\\dfrac{4+\\pi}{4}$."],
      answer: "$\\dfrac{4+\\pi}{4}$",
    },
    {
      id: "birim-cember-ayt-02",
      difficulty: "Orta",
      prompt: "$\\theta=\\dfrac{47\\pi}{6}$ radyan veriliyor. Buna göre, $\\theta$ açısının esas ölçüsünün derece değeri ile bulunduğu bölgenin numarasının çarpımı kaçtır?",
      options: ["$1320$", "$990$", "$660$", "$330$", "$230$"],
      correct: 0,
      solution: ["$2\\pi$'yi aynı paydayla yaz: $2\\pi=\\dfrac{12\\pi}{6}$.", "$47=3\\cdot 12+11$ olduğundan üç tam tur çıkar: $\\dfrac{47\\pi}{6}-3\\cdot\\dfrac{12\\pi}{6}=\\dfrac{47\\pi-36\\pi}{6}=\\dfrac{11\\pi}{6}$.", "Esas ölçüyü dereceye çevir: $\\dfrac{11\\pi}{6}\\cdot\\dfrac{180}{\\pi}=\\dfrac{11\\cdot 180}{6}=330^{\\circ}$.", "Bölgesini belirle: $330^{\\circ}$, $270^{\\circ}$ ile $360^{\\circ}$ arasında olduğundan IV. bölgededir; bölge numarası $4$'tür.", "Çarpımı yaz: $330\\cdot 4=1320$."],
      answer: "$1320$",
    },
    {
      id: "birim-cember-ayt-03",
      difficulty: "Orta",
      prompt: "$\\alpha=1190^{\\circ}$ ve $\\beta=-430^{\\circ}$ veriliyor. Buna göre, $\\alpha$ ile $\\beta$ açılarının esas ölçülerinin toplamının esas ölçüsü kaç derecedir?",
      options: ["$400$", "$220$", "$110$", "$70$", "$40$"],
      correct: 4,
      solution: ["$\\alpha$'nın esas ölçüsü: $1190=3\\cdot 360+110$ olduğundan $1190^{\\circ}-1080^{\\circ}=110^{\\circ}$.", "$\\beta$'nın esas ölçüsü: $-430^{\\circ}+2\\cdot 360^{\\circ}=-430^{\\circ}+720^{\\circ}=290^{\\circ}$.", "Esas ölçüleri topla: $110^{\\circ}+290^{\\circ}=400^{\\circ}$.", "$400^{\\circ}$ bir tam turu aştığından esas ölçüsünü al: $400^{\\circ}-360^{\\circ}=40^{\\circ}$."],
      answer: "$40$",
    },
    {
      id: "birim-cember-ayt-04",
      difficulty: "Zor",
      prompt: "Bir saatin akrep kolu $1{:}00$ konumundan başlayıp ileri (saat) yönünde tam $5$ saat ilerliyor. Buna göre, akrebin taradığı açının matematiksel **pozitif yön**deki esas ölçüsü kaç derecedir?",
      options: ["$30$", "$120$", "$210$", "$240$", "$300$"],
      correct: 2,
      solution: ["Akrep $12$ saatte $360^{\\circ}$ döndüğüne göre saatte $\\dfrac{360^{\\circ}}{12}=30^{\\circ}$ döner.", "$5$ saat ilerlediğinde taranan açının büyüklüğü $5\\cdot 30^{\\circ}=150^{\\circ}$ olur.", "Hareket saat yönünde (matematiksel **negatif** yön) olduğundan yönlü açı $-150^{\\circ}$'dir.", "Esas ölçüye geç: $-150^{\\circ}+360^{\\circ}=210^{\\circ}$. Bu değer $[0^{\\circ},360^{\\circ})$ aralığındadır."],
      answer: "$210$",
    },
    {
      id: "birim-cember-ayt-05",
      difficulty: "Orta",
      prompt: "Birim çember üzerinde esas ölçüsü $\\dfrac{5\\pi}{3}$ olan bir $P$ noktası ile esas ölçüsü $\\dfrac{3\\pi}{4}$ olan bir $Q$ noktası alınıyor. Buna göre $P$ ile $Q$ noktalarının bulunduğu bölgelerin numaraları sırasıyla aşağıdakilerden hangisidir?",
      options: ["I ve II", "IV ve II", "IV ve III", "III ve II", "II ve IV"],
      correct: 1,
      solution: ["$P$ için dereceye çevir: $\\dfrac{5\\pi}{3}\\cdot\\dfrac{180}{\\pi}=\\dfrac{5\\cdot 180}{3}=300^{\\circ}$.", "$300^{\\circ}$ değeri $270^{\\circ}$ ile $360^{\\circ}$ arasındadır; $P$, **IV. bölge**dedir.", "$Q$ için dereceye çevir: $\\dfrac{3\\pi}{4}\\cdot\\dfrac{180}{\\pi}=\\dfrac{3\\cdot 180}{4}=135^{\\circ}$.", "$135^{\\circ}$ değeri $90^{\\circ}$ ile $180^{\\circ}$ arasındadır; $Q$, **II. bölge**dedir."],
      answer: "IV ve II",
    },
    {
      id: "birim-cember-ayt-06",
      difficulty: "Zor",
      prompt: "$\\alpha$ açısının esas ölçüsü $\\dfrac{7\\pi}{6}$ radyandır. Buna göre, $3\\alpha$ açısının esas ölçüsü kaç radyandır?",
      options: ["$\\dfrac{\\pi}{2}$", "$\\dfrac{2\\pi}{3}$", "$\\dfrac{5\\pi}{6}$", "$\\pi$", "$\\dfrac{3\\pi}{2}$"],
      correct: 4,
      solution: ["$\\alpha$ için en küçük pozitif değer olan esas ölçüyü kullan: $\\alpha=\\dfrac{7\\pi}{6}$.", "Üçe katla: $3\\alpha=3\\cdot\\dfrac{7\\pi}{6}=\\dfrac{21\\pi}{6}=\\dfrac{7\\pi}{2}$.", "$2\\pi=\\dfrac{4\\pi}{2}$ olduğundan tam turları at: $\\dfrac{7\\pi}{2}-\\dfrac{4\\pi}{2}=\\dfrac{3\\pi}{2}$ (bir tam tur çıktı, hâlâ $[0,2\\pi)$ dışına çıkmadı).", "$\\dfrac{3\\pi}{2}$ değeri $[0,2\\pi)$ aralığındadır; esas ölçü budur."],
      answer: "$\\dfrac{3\\pi}{2}$",
    },
  ],
};

export default quiz;
