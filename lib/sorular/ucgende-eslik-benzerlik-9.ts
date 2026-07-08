import type { TopicQuiz } from "./types";

// ucgende-eslik-benzerlik-9 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "ucgende-eslik-benzerlik-9",
  questions: [
    {
      id: "ucgende-eslik-benzerlik-9-01",
      difficulty: "Kolay",
      prompt: "$ABC$ ve $DEF$ üçgenlerinde $\\widehat{A}=\\widehat{D}=40^\\circ$ ve $\\widehat{B}=\\widehat{E}=70^\\circ$ veriliyor. Bu iki üçgen için aşağıdakilerden hangisi doğrudur?",
      options: ["İki açıları karşılıklı eşit olduğundan A.A kuralına göre benzerdir.", "Üç kenarı eşit olduğundan K.K.K kuralına göre eştir.", "İki kenar ve bir açı eşit olduğundan K.A.K kuralına göre eştir.", "Yalnızca bir açıları eşit olduğundan ne eş ne benzerdir.", "Açıları eşit olsa da kenar bilgisi verilmediğinden benzer olduğu söylenemez."],
      correct: 0,
      solution: ["$\\widehat{A}=\\widehat{D}$ ve $\\widehat{B}=\\widehat{E}$ olduğundan iki çift karşılıklı açı eşittir.", "Üçgenlerin iç açıları toplamı $180^\\circ$ olduğundan üçüncü açılar da otomatik olarak eşit olur ($\\widehat{C}=\\widehat{F}=70^\\circ$).", "İki açının karşılıklı eşit olması benzerlik için yeterlidir; bu A.A kuralıdır.", "Benzerlik için tüm kenar uzunluklarının bilinmesi gerekmez; sadece açı eşitliği yeterlidir."],
      answer: "İki açıları karşılıklı eşit olduğundan A.A kuralına göre benzerdir (A).",
    },
    {
      id: "ucgende-eslik-benzerlik-9-02",
      difficulty: "Kolay",
      prompt: "$ABC\\sim KLM$ olup benzerlik oranı $k=\\dfrac{|AB|}{|KL|}=4$ tür. $|KL|=7$ ise $|AB|$ kaçtır?",
      options: ["$1{,}75$", "$3$", "$11$", "$28$", "$47$"],
      correct: 3,
      solution: ["Benzerlik oranı tanımı: $\\dfrac{|AB|}{|KL|}=4$.", "Buradan $|AB|=4\\cdot|KL|$.", "$|AB|=4\\cdot 7=28$."],
      answer: "$|AB|=28$ (D).",
    },
    {
      id: "ucgende-eslik-benzerlik-9-03",
      difficulty: "Orta",
      prompt: "Benzer iki üçgenden küçüğünün kenar uzunlukları $5,\\ 12,\\ 13$ tür. Büyük üçgenin en uzun kenarı $39$ olduğuna göre, büyük üçgenin en kısa kenarı kaçtır?",
      options: ["$10$", "$15$", "$18$", "$36$", "$60$"],
      correct: 1,
      solution: ["Karşılıklı kenarlar orantılıdır; en uzun kenarlar birbirine karşılık gelir: $\\dfrac{39}{13}=3$, yani $k=3$.", "En kısa kenarlar da birbirine karşılık gelir; küçük üçgenin en kısa kenarı $5$ tir.", "Büyük üçgenin en kısa kenarı $=5\\cdot k=5\\cdot 3=15$."],
      answer: "$15$ (B).",
    },
    {
      id: "ucgende-eslik-benzerlik-9-04",
      difficulty: "Orta",
      prompt: "Benzer iki üçgenin benzerlik oranı $\\dfrac{\\text{büyük}}{\\text{küçük}}=\\dfrac{7}{4}$ tür. Küçük üçgenin bir kenarı $12$ olduğuna göre, büyük üçgendeki karşılığı kaçtır?",
      options: ["$\\dfrac{48}{7}$", "$19$", "$21$", "$27$", "$48$"],
      correct: 2,
      solution: ["Karşılıklı kenar oranı benzerlik oranına eşittir: $\\dfrac{x}{12}=\\dfrac{7}{4}$.", "İçler-dışlar çarpımı: $4x=7\\cdot 12=84$.", "$x=\\dfrac{84}{4}=21$."],
      answer: "$21$ (C).",
    },
    {
      id: "ucgende-eslik-benzerlik-9-05",
      difficulty: "Orta",
      prompt: "Boyu $1{,}6$ m olan bir kişi $1$ m gölge bırakırken, aynı anda ve aynı yerde bir aydınlatma direğinin gölgesi $15$ m ölçülmüştür. Buna göre direğin boyu kaç metredir?",
      options: ["$9{,}375$", "$14{,}4$", "$16{,}6$", "$18{,}75$", "$24$"],
      correct: 4,
      solution: ["Aynı anda oluşan cisim–gölge üçgenleri benzerdir; boy/gölge oranları eşittir.", "$\\dfrac{1{,}6}{1}=\\dfrac{h}{15}$ orantısını kur.", "$\\dfrac{1{,}6}{1}=1{,}6$ olduğundan $h=1{,}6\\cdot 15=24$."],
      answer: "Direğin boyu $24$ m (E).",
    },
    {
      id: "ucgende-eslik-benzerlik-9-06",
      difficulty: "Zor",
      prompt: "$ABC\\sim DEF$ olup benzerlik oranı $\\dfrac{\\text{küçük } DEF}{\\text{büyük } ABC}=\\dfrac{2}{5}$ tir. Büyük üçgen $ABC$ nin çevresi $45$ cm olduğuna göre, küçük üçgen $DEF$ nin çevresi kaç cm dir?",
      options: ["$7{,}2$", "$18$", "$40$", "$90$", "$112{,}5$"],
      correct: 1,
      solution: ["Benzer üçgenlerde çevreler oranı da kenar oranına, yani $k$ ye eşittir.", "$\\dfrac{\\text{Çevre}(DEF)}{\\text{Çevre}(ABC)}=\\dfrac{2}{5}$.", "$\\dfrac{\\text{Çevre}(DEF)}{45}=\\dfrac{2}{5}\\Rightarrow \\text{Çevre}(DEF)=\\dfrac{2}{5}\\cdot 45=18$ cm.", "(Dikkat: burada istenen çevredir; alan oranı $k^2$ olurdu, çevre oranı $k$ dır.)"],
      answer: "Küçük üçgenin çevresi $18$ cm (B).",
    },
  ],
};

export default quiz;
