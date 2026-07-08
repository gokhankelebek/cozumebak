import type { TopicQuiz } from "./types";

// turevde-uygulamalar — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "turevde-uygulamalar",
  questions: [
    {
      id: "turevde-uygulamalar-01",
      difficulty: "Kolay",
      prompt: "$f(x)=x^2-12x+7$ fonksiyonu aşağıdaki aralıkların hangisinde azalandır?",
      options: ["$(-\\infty,6)$", "$(6,\\infty)$", "$(-\\infty,12)$", "$(-6,\\infty)$", "$(0,6)$"],
      correct: 0,
      solution: ["Türevi al: $f'(x)=2x-12$.", "Kritik noktayı bul: $2x-12=0\\Rightarrow x=6$.", "$a>0$ olan parabolde türev, kökün solunda negatiftir: $x<6$ için $f'(x)<0$, yani $f$ azalandır.", "Dolayısıyla azalan aralık $(-\\infty,6)$'dır."],
      answer: "$(-\\infty,6)$",
    },
    {
      id: "turevde-uygulamalar-02",
      difficulty: "Orta",
      prompt: "$f(x)=x^3-3x^2-9x+2$ fonksiyonunun yerel maksimum değeri kaçtır?",
      options: ["$-25$", "$-1$", "$7$", "$2$", "$3$"],
      correct: 2,
      solution: ["Türevi al: $f'(x)=3x^2-6x-9=3(x^2-2x-3)=3(x-3)(x+1)$.", "Kritik noktalar: $x=-1$ ve $x=3$.", "İkinci türev: $f''(x)=6x-6$. $f''(-1)=-12<0$ olduğundan $x=-1$ yerel maksimumdur.", "Değeri hesapla: $f(-1)=(-1)^3-3(-1)^2-9(-1)+2=-1-3+9+2=7$."],
      answer: "Yerel maksimum değeri $7$'dir ($x=-1$).",
    },
    {
      id: "turevde-uygulamalar-03",
      difficulty: "Orta",
      prompt: "$f(x)=x^3-6x^2+5$ fonksiyonunun kritik noktaları ikinci türev testiyle sınıflandırıldığında aşağıdakilerden hangisi doğrudur?",
      options: ["$x=0$ yerel minimum, $x=4$ yerel maksimum", "$x=0$ yerel maksimum, $x=4$ yerel minimum", "$x=0$ ve $x=4$ ikisi de yerel maksimum", "$x=2$ yerel minimum, başka ekstremum yok", "$x=0$ ve $x=6$ kritik noktalardır"],
      correct: 1,
      solution: ["Türevi al: $f'(x)=3x^2-12x=3x(x-4)$.", "Kritik noktalar: $x=0$ ve $x=4$.", "İkinci türev: $f''(x)=6x-12$.", "$f''(0)=-12<0$ olduğundan $x=0$ yerel maksimumdur.", "$f''(4)=24-12=12>0$ olduğundan $x=4$ yerel minimumdur."],
      answer: "$x=0$ yerel maksimum, $x=4$ yerel minimum.",
    },
    {
      id: "turevde-uygulamalar-04",
      difficulty: "Orta",
      prompt: "$f(x)=x^3-3x$ fonksiyonunun $[0,3]$ kapalı aralığındaki en küçük değeri kaçtır?",
      options: ["$0$", "$-2$", "$2$", "$18$", "$-9$"],
      correct: 1,
      solution: ["Türevi al: $f'(x)=3x^2-3=3(x-1)(x+1)$; kritik noktalar $x=1$ ve $x=-1$.", "Yalnızca $x=1$ aralık içindedir ($x=-1$ aralık dışıdır).", "Kapalı aralıkta adaylar: uçlar $x=0,\\ 3$ ve kritik $x=1$.", "Değerleri hesapla: $f(0)=0$, $f(1)=1-3=-2$, $f(3)=27-9=18$.", "En küçüğü $f(1)=-2$'dir."],
      answer: "En küçük değer $-2$'dir ($x=1$).",
    },
    {
      id: "turevde-uygulamalar-05",
      difficulty: "Orta",
      prompt: "Bir duvarın önüne, duvara dayalı dikdörtgen bir bahçe çevrilecektir. Duvar tarafına tel çekilmeyecek; kalan üç kenar için toplam $60$ m tel kullanılacaktır. Bu bahçenin alanı en fazla kaç $\\text{m}^2$ olabilir?",
      options: ["$225$", "$400$", "$450$", "$500$", "$900$"],
      correct: 2,
      solution: ["Duvara dik iki kenar $x$, duvara paralel kenar $y$ olsun. Tel kısıtı: $2x+y=60$, buradan $y=60-2x$.", "Alan: $A(x)=x\\cdot y=x(60-2x)=60x-2x^2$.", "Türev: $A'(x)=60-4x=0\\Rightarrow x=15$.", "İkinci türev: $A''(x)=-4<0$ olduğundan bu bir maksimumdur; $y=60-2\\cdot15=30$.", "En büyük alan: $A=15\\cdot30=450\\ \\text{m}^2$."],
      answer: "$450\\ \\text{m}^2$.",
    },
    {
      id: "turevde-uygulamalar-06",
      difficulty: "Zor",
      prompt: "Kare tabanlı, üstü açık bir kutunun hacmi $32\\ \\text{cm}^3$ olacaktır. Kutunun toplam yüzey alanının (taban + dört yan yüz) en küçük olması için gereken malzeme kaç $\\text{cm}^2$'dir?",
      options: ["$32$", "$40$", "$48$", "$56$", "$64$"],
      correct: 2,
      solution: ["Taban kenarı $x$, yükseklik $h$ olsun. Hacim kısıtı: $x^2h=32\\Rightarrow h=\\dfrac{32}{x^2}$.", "Üstü açık kutunun yüzey alanı: $S=x^2+4xh=x^2+4x\\cdot\\dfrac{32}{x^2}=x^2+\\dfrac{128}{x}$.", "Türev: $S'(x)=2x-\\dfrac{128}{x^2}=0\\Rightarrow 2x^3=128\\Rightarrow x^3=64\\Rightarrow x=4$.", "İkinci türev $S''(x)=2+\\dfrac{256}{x^3}>0$ olduğundan bu bir minimumdur.", "Yüzey alanı: $S=4^2+\\dfrac{128}{4}=16+32=48\\ \\text{cm}^2$."],
      answer: "$48\\ \\text{cm}^2$.",
    },
  ],
};

export default quiz;
