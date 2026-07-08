import type { TopicQuiz } from "./types";

// ikinci-derece-fonksiyonlar — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "ikinci-derece-fonksiyonlar",
  questions: [
    {
      id: "ikinci-derece-fonksiyonlar-01",
      difficulty: "Kolay",
      prompt: "$f(x)=-3x^2+12x-7$ parabolü için aşağıdakilerden hangisi doğrudur?",
      options: ["Kollar yukarı; $y$ eksenini $(0,-7)$ noktasında keser", "Kollar aşağı; $y$ eksenini $(0,-7)$ noktasında keser", "Kollar aşağı; $y$ eksenini $(0,12)$ noktasında keser", "Kollar yukarı; $y$ eksenini $(0,-3)$ noktasında keser", "Kollar aşağı; $y$ eksenini $(0,-3)$ noktasında keser"],
      correct: 1,
      solution: ["Baş katsayı $a=-3<0$ olduğundan kollar aşağı doğrudur.", "$y$ eksenini kestiği noktanın ordinatı $c$ sabitidir: $f(0)=-7$.", "Buna göre $y$ eksenini $(0,-7)$ noktasında keser."],
      answer: "Kollar aşağı; $y$ eksenini $(0,-7)$ noktasında keser.",
    },
    {
      id: "ikinci-derece-fonksiyonlar-02",
      difficulty: "Orta",
      prompt: "$f(x)=2x^2-8x+1$ parabolünün tepe noktası aşağıdakilerden hangisidir?",
      options: ["$T(-2,25)$", "$T(4,1)$", "$T(2,-7)$", "$T(2,-15)$", "$T(-2,-7)$"],
      correct: 2,
      solution: ["Apsis: $r=-\\dfrac{b}{2a}=-\\dfrac{-8}{2\\cdot 2}=\\dfrac{8}{4}=2$.", "Ordinat: $k=f(2)=2\\cdot 2^2-8\\cdot 2+1=8-16+1=-7$.", "Tepe noktası $T(2,-7)$'dir."],
      answer: "$T(2,-7)$.",
    },
    {
      id: "ikinci-derece-fonksiyonlar-03",
      difficulty: "Orta",
      prompt: "$f(x)=x^2-10x+21$ fonksiyonu tepe biçiminde yazıldığında en küçük değeri kaç olur?",
      options: ["$21$", "$-4$", "$-25$", "$-5$", "$5$"],
      correct: 1,
      solution: ["Tam kareye tamamla: $x^2-10x=(x-5)^2-25$.", "Buna göre $f(x)=(x-5)^2-25+21=(x-5)^2-4$.", "$a=1>0$ olduğundan en küçük değer tepe ordinatı $k=-4$'tür."],
      answer: "En küçük değer $-4$.",
    },
    {
      id: "ikinci-derece-fonksiyonlar-04",
      difficulty: "Orta",
      prompt: "Tepe noktası $T(-1,4)$ olan ve $(1,0)$ noktasından geçen parabolün denklemi aşağıdakilerden hangisidir?",
      options: ["$f(x)=(x+1)^2+4$", "$f(x)=-x^2-2x+3$", "$f(x)=x^2+2x+5$", "$f(x)=-(x-1)^2+4$", "$f(x)=-x^2+2x+3$"],
      correct: 1,
      solution: ["Tepe biçimi: $f(x)=a(x+1)^2+4$.", "$(1,0)$ noktasını yerine koy: $0=a(1+1)^2+4=4a+4 \\Rightarrow a=-1$.", "Denklem: $f(x)=-(x+1)^2+4=-x^2-2x+3$."],
      answer: "$f(x)=-x^2-2x+3$.",
    },
    {
      id: "ikinci-derece-fonksiyonlar-05",
      difficulty: "Orta",
      prompt: "Yerden yukarı atılan bir cismin $t$ saniyedeki yüksekliği $h(t)=-5t^2+30t$ metredir. Cisim ulaşabileceği en büyük yüksekliğe hangi anda erişir ve bu yükseklik kaç metredir?",
      options: ["$t=6$ s'de, $0$ metre", "$t=3$ s'de, $45$ metre", "$t=3$ s'de, $90$ metre", "$t=6$ s'de, $45$ metre", "$t=5$ s'de, $25$ metre"],
      correct: 1,
      solution: ["$h(t)=-5t^2+30t$ aşağı açılan bir paraboldür; en büyük yükseklik tepe noktasındadır.", "En yüksek an: $t=-\\dfrac{b}{2a}=-\\dfrac{30}{2\\cdot(-5)}=\\dfrac{30}{10}=3$ saniye.", "Yükseklik: $h(3)=-5\\cdot 3^2+30\\cdot 3=-45+90=45$ metre."],
      answer: "$t=3$ saniyede, $45$ metre.",
    },
    {
      id: "ikinci-derece-fonksiyonlar-06",
      difficulty: "Zor",
      prompt: "$x$ eksenini $-1$ ve $7$ noktalarında kesen, tepe noktasının ordinatı $-32$ olan parabolün denklemi aşağıdakilerden hangisidir?",
      options: ["$f(x)=(x+1)(x-7)$", "$f(x)=2x^2-12x-14$", "$f(x)=2x^2-12x+14$", "$f(x)=-2x^2+12x+14$", "$f(x)=2x^2-6x-14$"],
      correct: 1,
      solution: ["Kökler simetriktir; tepe apsisi köklerin ortasıdır: $r=\\dfrac{-1+7}{2}=3$.", "Çarpan biçimi: $f(x)=a(x+1)(x-7)$. Tepe ordinatı: $f(3)=a(3+1)(3-7)=a\\cdot 4\\cdot(-4)=-16a$.", "$-16a=-32 \\Rightarrow a=2$.", "Denklem: $f(x)=2(x+1)(x-7)=2(x^2-6x-7)=2x^2-12x-14$."],
      answer: "$f(x)=2x^2-12x-14$.",
    },
  ],
};

export default quiz;
