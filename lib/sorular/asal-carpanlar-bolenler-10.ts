import type { TopicQuiz } from "./types";

// asal-carpanlar-bolenler-10 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "asal-carpanlar-bolenler-10",
  questions: [
    {
      id: "asal-carpanlar-bolenler-10-01",
      difficulty: "Kolay",
      prompt: "$126$ sayısının asal çarpanlarına ayrılmış biçimi aşağıdakilerden hangisidir?",
      options: ["$2\\cdot 3\\cdot 7^2$", "$2^2\\cdot 3\\cdot 7$", "$2\\cdot 3^2\\cdot 7$", "$2\\cdot 3^3\\cdot 7$", "$2^2\\cdot 3^2\\cdot 7$"],
      correct: 2,
      solution: ["$126$ çift olduğu için önce $2$ ile bölelim: $126=2\\cdot 63$.", "$63=9\\cdot 7=3^2\\cdot 7$.", "Birleştirince $126=2\\cdot 3^2\\cdot 7$ elde edilir.", "Kontrol: $2\\cdot 9\\cdot 7=126$."],
      answer: "$126=2\\cdot 3^2\\cdot 7$ (C)",
    },
    {
      id: "asal-carpanlar-bolenler-10-02",
      difficulty: "Kolay",
      prompt: "$2^2\\cdot 5^3\\cdot 7$ biçiminde yazılan sayının kaç pozitif böleni vardır?",
      options: ["$6$", "$12$", "$16$", "$30$", "$24$"],
      correct: 4,
      solution: ["Bölen sayısı, üslerin birer fazlasının çarpımıdır.", "Üsler: $2,\\ 3,\\ 1$.", "Bölen sayısı $=(2+1)(3+1)(1+1)=3\\cdot 4\\cdot 2$.", "$=24$."],
      answer: "$24$ pozitif bölen (E)",
    },
    {
      id: "asal-carpanlar-bolenler-10-03",
      difficulty: "Orta",
      prompt: "$600$ sayısının kaç çift böleni vardır?",
      options: ["$6$", "$12$", "$20$", "$18$", "$24$"],
      correct: 3,
      solution: ["Önce ayıralım: $600=2^3\\cdot 3\\cdot 5^2$.", "Toplam bölen sayısı: $(3+1)(1+1)(2+1)=4\\cdot 2\\cdot 3=24$.", "Tek bölen sayısı için $2$'yi yok say, geriye $3\\cdot 5^2$ kalır: $(1+1)(2+1)=6$.", "Çift bölen sayısı $=24-6=18$."],
      answer: "$18$ çift bölen (D)",
    },
    {
      id: "asal-carpanlar-bolenler-10-04",
      difficulty: "Orta",
      prompt: "$2^a\\cdot 3^2\\cdot 5$ biçimindeki bir sayının $36$ pozitif böleni olduğuna göre $a$ kaçtır?",
      options: ["$4$", "$5$", "$3$", "$6$", "$2$"],
      correct: 1,
      solution: ["Bölen sayısı formülü: $(a+1)(2+1)(1+1)=36$.", "$(a+1)\\cdot 3\\cdot 2=36\\Rightarrow (a+1)\\cdot 6=36$.", "$a+1=6\\Rightarrow a=5$."],
      answer: "$a=5$ (B)",
    },
    {
      id: "asal-carpanlar-bolenler-10-05",
      difficulty: "Orta",
      prompt: "Bir depoda toplam sayısı $N=2^4\\cdot 3^2\\cdot 7$ olan özdeş vidalar, ancak grup içindeki vida sayısı $N$'yi tam bölen ve $6$'nın katı olacak biçimde eşit gruplara ayrılabiliyor. Buna göre kaç farklı grup büyüklüğü seçilebilir?",
      options: ["$8$", "$24$", "$20$", "$16$", "$30$"],
      correct: 3,
      solution: ["Grup büyüklüğü, $N$'nin bir böleni ve $6=2\\cdot 3$'ün katı olmalıdır.", "Bölen $2^x\\cdot 3^y\\cdot 7^z$ biçiminde; $6$'nın katı olması için $x\\ge 1$ ve $y\\ge 1$ gerekir.", "$x\\in\\{1,2,3,4\\}$ (4 seçenek), $y\\in\\{1,2\\}$ (2 seçenek), $z\\in\\{0,1\\}$ (2 seçenek).", "Sayısı: $4\\cdot 2\\cdot 2=16$."],
      answer: "$16$ farklı grup büyüklüğü (D)",
    },
    {
      id: "asal-carpanlar-bolenler-10-06",
      difficulty: "Zor",
      prompt: "$1800$ sayısının kaç pozitif böleni tam karedir?",
      options: ["$8$", "$6$", "$4$", "$12$", "$3$"],
      correct: 0,
      solution: ["Ayıralım: $1800=2^3\\cdot 3^2\\cdot 5^2$.", "Bir bölenin tam kare olması için $2^x\\cdot 3^y\\cdot 5^z$'de $x,y,z$ çift olmalıdır.", "$x\\in\\{0,2\\}$ (2 seçenek), $y\\in\\{0,2\\}$ (2 seçenek), $z\\in\\{0,2\\}$ (2 seçenek).", "Sayısı: $2\\cdot 2\\cdot 2=8$ (bunlar $1,4,9,25,36,100,225,900$)."],
      answer: "$8$ tam kare bölen (A)",
    },
  ],
};

export default quiz;
