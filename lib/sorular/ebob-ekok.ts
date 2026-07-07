import type { TopicQuiz } from "./types";

// ebob-ekok — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "ebob-ekok",
  questions: [
    {
      id: "ebob-ekok-01",
      difficulty: "Kolay",
      prompt: "İki sınıfın öğrenci sayıları $15$ ile $25$'tir. Okul yönetimi, her iki sınıftan da eşit ve tam sayıda öğrenci alarak karma bir grup kurmak istiyor; gruptaki öğrenci sayısı her iki sınıf sayısını da **tam bölmeli** ve mümkün olduğunca **büyük** olmalıdır. Buna göre grupta en çok kaç öğrenci olur?",
      options: ["$5$", "$4$", "$3$", "$6$", "$7$"],
      correct: 0,
      solution: ["İstenen, $15$ ile $25$'in en büyük ortak böleni: $\\text{EBOB}(15,25)$.", "$15=3\\cdot 5$, $25=5^{2}$ → ortak asal yalnızca $5$; $\\text{EBOB}=5$."],
      answer: "$5$",
    },
    {
      id: "ebob-ekok-02",
      difficulty: "Orta",
      prompt: "Üç farklı zil, sırasıyla $12$, $18$ ve $24$ saniyede bir çalıyor. Hepsi aynı anda çaldıktan sonra ilk kez yeniden birlikte çaldıkları anın kaç saniye sonra olduğu soruluyor. Buna göre bu süre kaç saniyedir?",
      options: ["$48$", "$60$", "$72$", "$84$", "$96$"],
      correct: 2,
      solution: ["Birlikte çalma süresi EKOK$(12,18,24)$ olmalıdır.", "$12=2^{2}\\cdot 3$, $18=2\\cdot 3^{2}$, $24=2^{3}\\cdot 3$ → EKOK $=2^{3}\\cdot 3^{2}=8\\cdot 9=72$."],
      answer: "$72$",
    },
    {
      id: "ebob-ekok-03",
      difficulty: "Orta",
      prompt: "Dikdörtgen bir bahçenin kenarları sırasıyla $48$ m ve $72$ m'dir. Bahçe, kenarları boyunca boşluk kalmayacak şekilde eş kenarlı kare çit bölmelerine ayrılacaktır. Buna göre bir karenin kenar uzunluğu en çok kaç metredir?",
      options: ["$12$", "$16$", "$18$", "$20$", "$24$"],
      correct: 4,
      solution: ["Kare kenarı hem $48$'i hem $72$'yi bölmeli → $\\text{EBOB}(48,72)$.", "$48=2^{4}\\cdot 3$, $72=2^{3}\\cdot 3^{2}$ → $\\text{EBOB}=2^{3}\\cdot 3=24$."],
      answer: "$24$",
    },
    {
      id: "ebob-ekok-04",
      difficulty: "Orta",
      prompt: "Bir terzi, biri $36$ cm, diğeri $48$ cm uzunluğunda iki kumaş şeridini hiç artık bırakmadan **eşit uzunlukta** ve mümkün olan **en uzun** parçalara kesecektir. Kesilen tüm parçalar bir kutuya konuyor. Buna göre kutuda toplam kaç parça olur?",
      options: ["$5$", "$6$", "$7$", "$8$", "$9$"],
      correct: 2,
      solution: ["Parça uzunluğu hem $36$'yı hem $48$'i bölmeli ve en uzun olmalı → $\\text{EBOB}(36,48)$.", "$36=2^{2}\\cdot 3^{2}$, $48=2^{4}\\cdot 3$ → $\\text{EBOB}=2^{2}\\cdot 3=12$ cm.", "Parça sayısı: $\\dfrac{36}{12}+\\dfrac{48}{12}=3+4=7$."],
      answer: "$7$",
    },
    {
      id: "ebob-ekok-05",
      difficulty: "Zor",
      prompt: "İki makinenin günlük ürettiği parça sayılarının en büyük ortak böleni $8$, en küçük ortak katı $240$'tır. Makinelerden biri günde $48$ parça üretiyorsa diğerinin günlük üretimi soruluyor. Buna göre diğer makine günde kaç parça üretir?",
      options: ["$30$", "$36$", "$40$", "$45$", "$50$"],
      correct: 2,
      solution: ["İki sayı için $\\text{EBOB}\\cdot\\text{EKOK}=a\\cdot b$.", "Yerleştir: $8\\cdot 240=48\\cdot b\\Rightarrow 1920=48b\\Rightarrow b=40$.", "Kontrol: $48=2^{4}\\cdot 3$, $40=2^{3}\\cdot 5$ → $\\text{EBOB}=8$, $\\text{EKOK}=2^{4}\\cdot 3\\cdot 5=240$. Tutarlı."],
      answer: "$40$",
    },
    {
      id: "ebob-ekok-06",
      difficulty: "Kolay",
      prompt: "Bir otogardan üç farklı hat otobüsü sırasıyla $10$, $15$ ve $20$ dakikada bir hareket ediyor. Üç hat aynı anda kalktıktan sonra ilk kez yine aynı anda hareket edecekleri ana kadar geçen süre soruluyor. Buna göre bu süre kaç dakikadır?",
      options: ["$30$", "$45$", "$60$", "$90$", "$120$"],
      correct: 2,
      solution: ["\"Yine aynı anda\" → $\\text{EKOK}(10,15,20)$.", "$10=2\\cdot 5$, $15=3\\cdot 5$, $20=2^{2}\\cdot 5$ → $\\text{EKOK}=2^{2}\\cdot 3\\cdot 5=60$."],
      answer: "$60$",
    },
  ],
};

export default quiz;
