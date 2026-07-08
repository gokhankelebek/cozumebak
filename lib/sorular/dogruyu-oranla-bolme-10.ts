import type { TopicQuiz } from "./types";

// dogruyu-oranla-bolme-10 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "dogruyu-oranla-bolme-10",
  questions: [
    {
      id: "dogruyu-oranla-bolme-10-01",
      difficulty: "Kolay",
      prompt: "$A(-6,\\ 3)$ ve $B(4,\\ -9)$ noktalarının orta noktası aşağıdakilerden hangisidir?",
      options: ["$(-10,\\ 12)$", "$(-1,\\ -3)$", "$(-1,\\ 6)$", "$(5,\\ -3)$", "$(1,\\ 3)$"],
      correct: 1,
      solution: ["Orta nokta formülü: $M=\\left(\\dfrac{x_1+x_2}{2},\\ \\dfrac{y_1+y_2}{2}\\right)$.", "$x_M=\\dfrac{-6+4}{2}=\\dfrac{-2}{2}=-1$.", "$y_M=\\dfrac{3+(-9)}{2}=\\dfrac{-6}{2}=-3$.", "Buradan $M(-1,\\ -3)$ bulunur."],
      answer: "$M(-1,\\ -3)$",
    },
    {
      id: "dogruyu-oranla-bolme-10-02",
      difficulty: "Orta",
      prompt: "Bir doğru parçasının orta noktası $M(-1,\\ 4)$ ve bir ucu $A(3,\\ -2)$ olduğuna göre diğer uç $B$ aşağıdakilerden hangisidir?",
      options: ["$(1,\\ 1)$", "$(7,\\ -8)$", "$(-4,\\ 6)$", "$(-5,\\ 10)$", "$(2,\\ 2)$"],
      correct: 3,
      solution: ["Orta nokta uçların ortalaması olduğundan $B=2M-A$ ilişkisi geçerlidir.", "$x_B=2\\cdot(-1)-3=-2-3=-5$.", "$y_B=2\\cdot 4-(-2)=8+2=10$.", "Buradan $B(-5,\\ 10)$ bulunur."],
      answer: "$B(-5,\\ 10)$",
    },
    {
      id: "dogruyu-oranla-bolme-10-03",
      difficulty: "Orta",
      prompt: "$A(1,\\ 2)$ ile $B(13,\\ 10)$ arasındaki doğru parçasını, $A$'dan itibaren $3:1$ oranında içten bölen noktanın koordinatları aşağıdakilerden hangisidir?",
      options: ["$(10,\\ 8)$", "$(4,\\ 4)$", "$(7,\\ 6)$", "$(12,\\ 9)$", "$(6,\\ 5)$"],
      correct: 0,
      solution: ["$k:l=3:1$ olduğundan $k=3,\\ l=1$ ve $k+l=4$.", "Ağırlıklar çapraz gelir: $A$'nın koordinatına $l=1$, $B$'ninkine $k=3$ çarpanı düşer.", "$x_P=\\dfrac{1\\cdot 1+3\\cdot 13}{4}=\\dfrac{1+39}{4}=\\dfrac{40}{4}=10$.", "$y_P=\\dfrac{1\\cdot 2+3\\cdot 10}{4}=\\dfrac{2+30}{4}=\\dfrac{32}{4}=8$.", "Buradan $P(10,\\ 8)$ bulunur. ($A$'dan uzağa, $B$'ye yakın düşmesi $3:1$ oranıyla tutarlıdır.)"],
      answer: "$P(10,\\ 8)$",
    },
    {
      id: "dogruyu-oranla-bolme-10-04",
      difficulty: "Zor",
      prompt: "$ABCD$ paralelkenarında $A(2,\\ -1)$, $B(6,\\ 1)$ ve $C(10,\\ 7)$ veriliyor. Dördüncü köşe $D$ aşağıdakilerden hangisidir?",
      options: ["$(14,\\ 5)$", "$(3,\\ 7)$", "$(6,\\ 5)$", "$(4,\\ 3)$", "$(8,\\ 9)$"],
      correct: 2,
      solution: ["Paralelkenarda köşegenler $AC$ ve $BD$ birbirini ortalar; yani ortak orta noktaları aynıdır.", "$AC$'nin orta noktası: $M=\\left(\\dfrac{2+10}{2},\\ \\dfrac{-1+7}{2}\\right)=(6,\\ 3)$.", "$M$ aynı zamanda $BD$'nin orta noktası olduğundan $D=2M-B$.", "$x_D=2\\cdot 6-6=6$, $\\;y_D=2\\cdot 3-1=5$.", "Buradan $D(6,\\ 5)$ bulunur."],
      answer: "$D(6,\\ 5)$",
    },
    {
      id: "dogruyu-oranla-bolme-10-05",
      difficulty: "Orta",
      prompt: "Köşeleri $A(-2,\\ 4)$, $B(5,\\ -1)$ ve $C(6,\\ 3)$ olan üçgenin ağırlık merkezi aşağıdakilerden hangisidir?",
      options: ["$(9,\\ 6)$", "$\\left(\\dfrac{9}{2},\\ 3\\right)$", "$(2,\\ 2)$", "$(4,\\ 1)$", "$(3,\\ 2)$"],
      correct: 4,
      solution: ["Üçgenin ağırlık merkezi üç köşenin koordinat ortalamasıdır: $G=\\left(\\dfrac{x_A+x_B+x_C}{3},\\ \\dfrac{y_A+y_B+y_C}{3}\\right)$.", "$x_G=\\dfrac{-2+5+6}{3}=\\dfrac{9}{3}=3$.", "$y_G=\\dfrac{4+(-1)+3}{3}=\\dfrac{6}{3}=2$.", "Buradan $G(3,\\ 2)$ bulunur. (Ağırlık merkezinde ikiye değil üçe bölünür.)"],
      answer: "$G(3,\\ 2)$",
    },
    {
      id: "dogruyu-oranla-bolme-10-06",
      difficulty: "Orta",
      prompt: "Düz bir yolun üzerinde $A(0,\\ 0)$ noktasındaki durak ile $B(12,\\ 8)$ noktasındaki durak arasına bir bank yerleştirilecektir. Bank, $A$ durağından $B$ durağına doğru $|AB|$ uzunluğunun oranı $1:3$ olacak biçimde ($|AP|:|PB|=1:3$) konumlandırılıyor. Bankın koordinatları aşağıdakilerden hangisidir?",
      options: ["$(3,\\ 2)$", "$(4,\\ 8/3)$", "$(9,\\ 6)$", "$(6,\\ 4)$", "$(4,\\ 2)$"],
      correct: 0,
      solution: ["$|AP|:|PB|=1:3$ olduğundan $k=1,\\ l=3$ ve $k+l=4$.", "İçten bölme formülünde ağırlıklar çapraz gelir: $A$'ya $l=3$, $B$'ye $k=1$.", "$x_P=\\dfrac{3\\cdot 0+1\\cdot 12}{4}=\\dfrac{12}{4}=3$.", "$y_P=\\dfrac{3\\cdot 0+1\\cdot 8}{4}=\\dfrac{8}{4}=2$.", "Bank $A$'ya yakın düşer (oran küçük); $P(3,\\ 2)$ bulunur."],
      answer: "$P(3,\\ 2)$",
    },
  ],
};

export default quiz;
