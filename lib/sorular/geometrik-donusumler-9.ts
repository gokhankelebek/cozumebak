import type { TopicQuiz } from "./types";

// geometrik-donusumler-9 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "geometrik-donusumler-9",
  questions: [
    {
      id: "geometrik-donusumler-9-01",
      difficulty: "Kolay",
      prompt: "$M(-5,\\ 4)$ noktası sağa $6$ birim, aşağı $7$ birim ötelenirse görüntüsü aşağıdakilerden hangisidir?",
      options: ["$(-11,\\ 11)$", "$(1,\\ -3)$", "$(1,\\ 11)$", "$(-11,\\ -3)$", "$(11,\\ -3)$"],
      correct: 1,
      solution: ["Öteleme kuralı: $(x,\\ y)\\to(x+a,\\ y+b)$.", "Sağa $6$ demek $x$'e $+6$; aşağı $7$ demek $y$'ye $-7$.", "$x$ koordinatı: $-5+6=1$.", "$y$ koordinatı: $4-7=-3$.", "Görüntü: $(1,\\ -3)$."],
      answer: "$(1,\\ -3)$",
    },
    {
      id: "geometrik-donusumler-9-02",
      difficulty: "Kolay",
      prompt: "$N(7,\\ -3)$ noktasının $y$ eksenine göre yansıması aşağıdakilerden hangisidir?",
      options: ["$(7,\\ 3)$", "$(-7,\\ 3)$", "$(-7,\\ -3)$", "$(-3,\\ 7)$", "$(3,\\ -7)$"],
      correct: 2,
      solution: ["$y$ eksenine göre yansıma kuralı: $(x,\\ y)\\to(-x,\\ y)$.", "Yalnız $x$'in işareti değişir, $y$ aynı kalır.", "$x$: $7\\to -7$; $y$: $-3$ aynı kalır.", "Görüntü: $(-7,\\ -3)$."],
      answer: "$(-7,\\ -3)$",
    },
    {
      id: "geometrik-donusumler-9-03",
      difficulty: "Orta",
      prompt: "$K(-2,\\ 6)$ noktası orijin etrafında $90°$ (saat yönünün tersine) döndürülürse görüntüsü aşağıdakilerden hangisidir?",
      options: ["$(-6,\\ -2)$", "$(6,\\ -2)$", "$(2,\\ -6)$", "$(6,\\ 2)$", "$(-6,\\ 2)$"],
      correct: 0,
      solution: ["$90°$ (saat yönü tersi) dönme kuralı: $(x,\\ y)\\to(-y,\\ x)$.", "$-y=-(6)=-6$ yeni $x$ koordinatı olur.", "$x=-2$ yeni $y$ koordinatı olur.", "Görüntü: $(-6,\\ -2)$."],
      answer: "$(-6,\\ -2)$",
    },
    {
      id: "geometrik-donusumler-9-04",
      difficulty: "Orta",
      prompt: "$P(4,\\ -1)$ noktası önce orijin etrafında $180°$ döndürülüyor, sonra $x$ eksenine göre yansıtılıyor. Son görüntü aşağıdakilerden hangisidir?",
      options: ["$(-4,\\ 1)$", "$(4,\\ 1)$", "$(4,\\ -1)$", "$(-4,\\ -1)$", "$(1,\\ -4)$"],
      correct: 3,
      solution: ["$180°$ dönme kuralı: $(x,\\ y)\\to(-x,\\ -y)$.", "$P(4,\\ -1)\\to(-4,\\ 1)$.", "$x$ eksenine göre yansıma kuralı: $(x,\\ y)\\to(x,\\ -y)$.", "$(-4,\\ 1)\\to(-4,\\ -1)$.", "Son görüntü: $(-4,\\ -1)$."],
      answer: "$(-4,\\ -1)$",
    },
    {
      id: "geometrik-donusumler-9-06",
      difficulty: "Orta",
      prompt: "Bir robot süpürge koordinat düzleminde $R(2,\\ 5)$ noktasındadır. Önce sola $3$ birim, aşağı $6$ birim hareket ediyor; sonra bulunduğu konum $x$ eksenine göre yansıtılıyor. Robotun son görüntüsü aşağıdakilerden hangisidir?",
      options: ["$(-1,\\ -1)$", "$(5,\\ 1)$", "$(-1,\\ 1)$", "$(1,\\ -1)$", "$(-1,\\ 11)$"],
      correct: 2,
      solution: ["Öteleme: sola $3$ demek $x-3$, aşağı $6$ demek $y-6$.", "$R(2,\\ 5)\\to(2-3,\\ 5-6)=(-1,\\ -1)$.", "$x$ eksenine göre yansıma kuralı: $(x,\\ y)\\to(x,\\ -y)$.", "$(-1,\\ -1)\\to(-1,\\ 1)$.", "Son görüntü: $(-1,\\ 1)$."],
      answer: "$(-1,\\ 1)$",
    },
  ],
};

export default quiz;
