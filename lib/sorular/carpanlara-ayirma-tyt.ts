import type { TopicQuiz } from "./types";

// carpanlara-ayirma-tyt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "carpanlara-ayirma-tyt",
  questions: [
    {
      id: "carpanlara-ayirma-tyt-01",
      difficulty: "Orta",
      prompt: "Bir kenarı $a$ metre olan kare biçimli bir bahçenin her kenarı $3$ metre kısaltıldığında alanı $a^{2}-6a+9$ metrekare ile ifade edilir. Bu yeni karenin bir kenarı kaç metredir?",
      options: ["$a-9$", "$a-6$", "$a-3$", "$a+3$", "$3a$"],
      correct: 2,
      solution: ["Alan bir karenin alanı olduğundan ifade tam kare olmalı: $a^{2}-6a+9$.", "İlk ve son terim tam kare: $a^{2}=(a)^{2}$, $9=3^{2}$. Orta terim kontrolü: $2\\cdot a\\cdot 3=6a$; uyuyor (işaret $-$).", "$(a-b)^2=a^2-2ab+b^2$ ile $a^{2}-6a+9=(a-3)^{2}$.", "Karenin alanı (kenar)$^2$ olduğundan kenar $a-3$ metredir. Çeldirici A) $a-9$, $9=3^2$ yerine kenarı $9$ sanmaktan; C doğru."],
      answer: "$a-3$",
    },
    {
      id: "carpanlara-ayirma-tyt-02",
      difficulty: "Kolay",
      prompt: "Bir manav, fiyatı $x$ lira olan bir ürünü önce $\\%$ değil de sabit bir hesapla satıyor: $x$ liralık üründen $x^{2}-25$ liralık ciro, $x-5$ adet satıştan elde ediliyor. Buna göre bir adet ürünün ortalama satış tutarı kaç liradır? $(x\\neq 5)$",
      options: ["$x-5$", "$x+5$", "$5x$", "$x^{2}-5$", "$x+25$"],
      correct: 1,
      solution: ["Ortalama tutar $=\\dfrac{x^{2}-25}{x-5}$.", "Pay iki kare farkı: $x^{2}-25=(x-5)(x+5)$.", "Sadeleştir: $\\dfrac{(x-5)(x+5)}{x-5}=x+5$ ($x\\neq 5$)."],
      answer: "$x+5$",
    },
    {
      id: "carpanlara-ayirma-tyt-03",
      difficulty: "Orta",
      prompt: "Ardışık iki tam sayıdan büyüğü $a$, küçüğü $b$'dir. Bu iki sayının kareleri farkı $a^{2}-b^{2}=37$ olduğuna göre, sayıların toplamı kaçtır?",
      options: ["$19$", "$37$", "$35$", "$38$", "$36$"],
      correct: 1,
      solution: ["Ardışık ve $a>b$ olduğundan $a-b=1$.", "İki kare farkı: $a^{2}-b^{2}=(a-b)(a+b)=1\\cdot(a+b)=a+b$.", "Verilen $a^{2}-b^{2}=37$ olduğundan $a+b=37$. Çeldirici A) $19$, sayıları $18$ ve $19$ sanıp birini yazmaktan; B doğru."],
      answer: "$37$",
    },
    {
      id: "carpanlara-ayirma-tyt-04",
      difficulty: "Orta",
      prompt: "Bir öğrenci $\\dfrac{x^{2}-x-6}{x^{2}-9}$ ifadesini sadeleştirip $x=5$ için değerini hesaplamak istiyor. $(x\\neq 3,\\ x\\neq -3)$ Buna göre sonuç kaçtır?",
      options: ["$\\dfrac{1}{2}$", "$\\dfrac{3}{4}$", "$\\dfrac{7}{8}$", "$\\dfrac{2}{3}$", "$1$"],
      correct: 2,
      solution: ["Pay: çarpımı $-6$, toplamı $-1$ olan sayılar $-3$ ve $+2$; $x^{2}-x-6=(x-3)(x+2)$.", "Payda iki kare farkı: $x^{2}-9=(x-3)(x+3)$.", "Ortak çarpan $(x-3)$ sadeleşir: $\\dfrac{(x-3)(x+2)}{(x-3)(x+3)}=\\dfrac{x+2}{x+3}$.", "$x=5$ için: $\\dfrac{5+2}{5+3}=\\dfrac{7}{8}$."],
      answer: "$\\dfrac{7}{8}$",
    },
    {
      id: "carpanlara-ayirma-tyt-05",
      difficulty: "Kolay",
      prompt: "$x+y=8$ ve $xy=12$ olduğuna göre $x^{2}+y^{2}$ ifadesinin değeri kaçtır?",
      options: ["$40$", "$52$", "$64$", "$76$", "$88$"],
      correct: 0,
      solution: ["Tam kare özdeşliği: $(x+y)^{2}=x^{2}+2xy+y^{2}$.", "$x^{2}+y^{2}=(x+y)^{2}-2xy$ biçiminde yaz.", "Verilenleri koy: $(8)^{2}-2\\cdot 12=64-24=40$. Çeldirici C) $64$, $-2xy$ terimini unutup yalnız $(x+y)^2$ yazmaktan; A doğru."],
      answer: "$40$",
    },
    {
      id: "carpanlara-ayirma-tyt-06",
      difficulty: "Kolay",
      prompt: "Bir dikdörtgenin alanı $x^{2}+7x+12$ santimetrekaredir ve bir kenarının uzunluğu $x+3$ santimetredir. Buna göre diğer kenarın uzunluğu kaç santimetredir?",
      options: ["$x+1$", "$x+2$", "$x+4$", "$x+6$", "$x+9$"],
      correct: 2,
      solution: ["Alanı ayır: çarpımı $12$, toplamı $7$ olan sayılar $3$ ve $4$; $x^{2}+7x+12=(x+3)(x+4)$.", "Diğer kenar $=\\dfrac{\\text{alan}}{\\text{kenar}}=\\dfrac{(x+3)(x+4)}{x+3}=x+4$."],
      answer: "$x+4$",
    },
  ],
};

export default quiz;
