import type { TopicQuiz } from "./types";

// koklu-ifadeler — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "koklu-ifadeler",
  questions: [
    {
      id: "koklu-ifadeler-01",
      difficulty: "Orta",
      prompt: "Kenar uzunlukları sırasıyla $4\\sqrt{2}$ cm ve $5\\sqrt{3}$ cm olan iki karenin alanları $A$ ve $B$ olduğuna göre $B-A$ kaç cm²'dir?",
      options: ["$37$", "$41$", "$43$", "$45$", "$47$"],
      correct: 2,
      solution: ["Karenin alanı kenarın karesidir: $A=\\left(4\\sqrt{2}\\right)^{2}=16\\cdot 2=32$.", "$B=\\left(5\\sqrt{3}\\right)^{2}=25\\cdot 3=75$.", "Fark: $B-A=75-32=43$."],
      answer: "$43$",
    },
    {
      id: "koklu-ifadeler-02",
      difficulty: "Orta",
      prompt: "$\\dfrac{\\sqrt{48}-\\sqrt{12}+\\sqrt{27}}{\\sqrt{3}}$ ifadesinin değeri kaçtır?",
      options: ["$3$", "$4$", "$5$", "$6$", "$7$"],
      correct: 2,
      solution: ["Kökleri sadeleştir: $\\sqrt{48}=4\\sqrt{3}$, $\\sqrt{12}=2\\sqrt{3}$, $\\sqrt{27}=3\\sqrt{3}$.", "Payı topla: $4\\sqrt{3}-2\\sqrt{3}+3\\sqrt{3}=5\\sqrt{3}$.", "Paydaya böl: $\\dfrac{5\\sqrt{3}}{\\sqrt{3}}=5$."],
      answer: "$5$",
    },
    {
      id: "koklu-ifadeler-03",
      difficulty: "Kolay",
      prompt: "$a=2\\sqrt{5}$ ve $b=3\\sqrt{2}$ olduğuna göre $a\\cdot b$ ifadesinin değeri kaçtır?",
      options: ["$5\\sqrt{10}$", "$6\\sqrt{10}$", "$10\\sqrt{6}$", "$12\\sqrt{5}$", "$15\\sqrt{2}$"],
      correct: 1,
      solution: ["Çarpım kuralı: $\\sqrt{m}\\cdot\\sqrt{n}=\\sqrt{mn}$.", "Katsayıları ve kökleri çarp: $a\\cdot b=2\\sqrt{5}\\cdot 3\\sqrt{2}=6\\sqrt{10}$."],
      answer: "$6\\sqrt{10}$",
    },
    {
      id: "koklu-ifadeler-04",
      difficulty: "Orta",
      prompt: "Bir dik üçgenin dik kenarları $\\sqrt{18}$ cm ve $\\sqrt{32}$ cm'dir. Bu üçgenin alanı kaç cm²'dir?",
      options: ["$6$", "$12$", "$18$", "$24$", "$36$"],
      correct: 1,
      solution: ["Dik kenarları çarp: $\\sqrt{18}\\cdot\\sqrt{32}=\\sqrt{18\\cdot 32}=\\sqrt{576}=24$.", "Alan, çarpımın yarısıdır: $\\dfrac{24}{2}=12$ cm².", "Çeldirici D ($24$): yarıya bölmeyi unutmak bu yanlışa götürür."],
      answer: "$12$",
    },
    {
      id: "koklu-ifadeler-05",
      difficulty: "Orta",
      prompt: "Bir kare şeklindeki seranın alanı $48$ m²'dir. Bu seranın bir kenar uzunluğu, en sade köklü biçimde kaç metredir?",
      options: ["$4\\sqrt{2}$", "$2\\sqrt{12}$", "$4\\sqrt{3}$", "$6\\sqrt{2}$", "$3\\sqrt{6}$"],
      correct: 2,
      solution: ["Kenar, alanın kareköküdür: $\\sqrt{48}$.", "En büyük tam kare çarpanını ayır: $48=16\\cdot 3$, yani $\\sqrt{48}=\\sqrt{16}\\cdot\\sqrt{3}=4\\sqrt{3}$.", "Çeldirici B ($2\\sqrt{12}$): $48=4\\cdot 12$ ile durup tam sadeleştirmemek bu yanlıştır; $2\\sqrt{12}=4\\sqrt{3}$ olsa da en sade biçim değildir."],
      answer: "$4\\sqrt{3}$",
    },
    {
      id: "koklu-ifadeler-06",
      difficulty: "Zor",
      prompt: "$\\sqrt{2}\\approx 1{,}41$ ve $\\sqrt{5}\\approx 2{,}24$ olarak veriliyor. Buna göre $\\sqrt{2}\\cdot\\sqrt{10}$ ifadesinin yaklaşık değeri aşağıdakilerden hangisine en yakındır?",
      options: ["$3{,}2$", "$4{,}5$", "$5{,}0$", "$6{,}3$", "$7{,}1$"],
      correct: 1,
      solution: ["Kök içlerini çarp: $\\sqrt{2}\\cdot\\sqrt{10}=\\sqrt{20}$.", "Sadeleştir: $\\sqrt{20}=\\sqrt{4\\cdot 5}=2\\sqrt{5}$.", "Yaklaşık değeri yerine koy: $2\\cdot 2{,}24=4{,}48\\approx 4{,}5$.", "Çeldirici D ($6{,}3$): $\\sqrt{20}$ yerine $\\sqrt{2}\\cdot\\sqrt{10}$'u $1{,}41\\cdot\\sqrt{10}$ gibi yanlış birleştirmekten doğar."],
      answer: "$4{,}5$",
    },
  ],
};

export default quiz;
