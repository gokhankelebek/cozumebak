import type { TopicQuiz } from "./types";

// tales-oklid-pisagor-9 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "tales-oklid-pisagor-9",
  questions: [
    {
      id: "tales-oklid-pisagor-9-01",
      difficulty: "Kolay",
      prompt: "Bir $ABC$ üçgeninde $BC$ kenarına paralel $DE$ doğrusu çiziliyor ($D\\in[AB]$, $E\\in[AC]$). $|AD|=8$, $|DB|=12$ ve $|AE|=?$ sorulmaktadır. $|EC|=15$ ise $|AE|$ kaç birimdir?",
      options: ["$8$", "$10$", "$12$", "$18$", "$22{,}5$"],
      correct: 1,
      solution: ["Tales orantısı: $\\dfrac{|AD|}{|DB|}=\\dfrac{|AE|}{|EC|}$.", "$\\dfrac{8}{12}=\\dfrac{|AE|}{15}$ yazılır.", "İçler-dışlar çarpımı: $12\\cdot|AE|=8\\cdot 15=120$.", "$|AE|=\\dfrac{120}{12}=10$."],
      answer: "$|AE|=10$",
    },
    {
      id: "tales-oklid-pisagor-9-02",
      difficulty: "Orta",
      prompt: "Bir $ABC$ üçgeninde $[BC]$ kenarına paralel $DE$ doğrusu çiziliyor. $|AD|=5$, $|DB|=3$ ve $|AC|=24$ ise $|AE|$ kaç birimdir?",
      options: ["$9$", "$12$", "$15$", "$16$", "$40$"],
      correct: 2,
      solution: ["Tales'i tüm kenar üzerinden kur: $\\dfrac{|AD|}{|AB|}=\\dfrac{|AE|}{|AC|}$.", "$|AB|=|AD|+|DB|=5+3=8$.", "$\\dfrac{5}{8}=\\dfrac{|AE|}{24}$ olur.", "$8\\cdot|AE|=5\\cdot 24=120\\Rightarrow |AE|=15$."],
      answer: "$|AE|=15$",
    },
    {
      id: "tales-oklid-pisagor-9-03",
      difficulty: "Kolay",
      prompt: "Bir dik üçgende, dik açıdan hipotenüse inen yüksekliğin hipotenüsü ayırdığı parçalar $6$ ve $24$ birimdir. Bu yüksekliğin uzunluğu kaç birimdir?",
      options: ["$12$", "$15$", "$18$", "$30$", "$144$"],
      correct: 0,
      solution: ["Öklid'in yükseklik bağıntısı: $h^2=p\\cdot k$.", "$h^2=6\\cdot 24=144$.", "$h=\\sqrt{144}=12$."],
      answer: "$h=12$",
    },
    {
      id: "tales-oklid-pisagor-9-04",
      difficulty: "Orta",
      prompt: "Bir dik üçgende dik açıdan inen yükseklik, hipotenüsü $9$ ve $16$ birimlik iki parçaya ayırıyor. İzdüşümü $9$ olan dik kenarın uzunluğu kaç birimdir?",
      options: ["$12$", "$13$", "$15$", "$20$", "$25$"],
      correct: 2,
      solution: ["Hipotenüs: $c=p+k=9+16=25$.", "Öklid'in dik kenar bağıntısı: $a^2=p\\cdot c$ (izdüşüm $\\times$ hipotenüs).", "$a^2=9\\cdot 25=225$.", "$a=\\sqrt{225}=15$."],
      answer: "$a=15$",
    },
    {
      id: "tales-oklid-pisagor-9-05",
      difficulty: "Orta",
      prompt: "Bir bayrak direği, yerden çekilen bir gergi teli ile sabitleniyor. Telin direğe bağlandığı nokta yerden $12$ m yüksekte, telin yere değdiği nokta ise direğin dibinden $5$ m uzaktadır. Direk ile yer birbirine dik olduğuna göre gergi telinin boyu kaç metredir?",
      options: ["$7$", "$13$", "$17$", "$60$", "$\\sqrt{7}$"],
      correct: 1,
      solution: ["Direk, yer ve tel bir dik üçgen oluşturur; tel hipotenüstür.", "Pisagor: $c^2=12^2+5^2=144+25=169$.", "$c=\\sqrt{169}=13$.", "Bu bir $5\\text{-}12\\text{-}13$ üçlüsüdür."],
      answer: "$13$ m",
    },
    {
      id: "tales-oklid-pisagor-9-06",
      difficulty: "Zor",
      prompt: "Dik kenarları $15$ ve $20$ birim olan bir dik üçgende, dik açıdan hipotenüse inen yüksekliğin uzunluğu kaç birimdir?",
      options: ["$10$", "$12$", "$17{,}5$", "$24$", "$25$"],
      correct: 1,
      solution: ["Önce hipotenüs: $c^2=15^2+20^2=225+400=625\\Rightarrow c=25$ (bu $3\\text{-}4\\text{-}5$ üçlüsünün $5$ katıdır).", "Alan iki yolla yazılır: $\\dfrac{1}{2}\\cdot 15\\cdot 20=\\dfrac{1}{2}\\cdot c\\cdot h$.", "$15\\cdot 20=25\\cdot h\\Rightarrow 300=25h$.", "$h=\\dfrac{300}{25}=12$. (Kontrol: izdüşümler $p=\\dfrac{15^2}{25}=9$, $k=\\dfrac{20^2}{25}=16$; $h^2=9\\cdot 16=144\\Rightarrow h=12$.)"],
      answer: "$h=12$",
    },
  ],
};

export default quiz;
