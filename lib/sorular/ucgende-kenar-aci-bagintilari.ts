import type { TopicQuiz } from "./types";

// ucgende-kenar-aci-bagintilari — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "ucgende-kenar-aci-bagintilari",
  questions: [
    {
      id: "ucgende-kenar-aci-bagintilari-01",
      difficulty: "Orta",
      prompt: "Bir $ABC$ üçgeninde $\\widehat{A}=45°$, $\\widehat{B}=95°$, $\\widehat{C}=40°$ olduğuna göre, kenarların büyükten küçüğe doğru sıralaması aşağıdakilerden hangisidir?",
      options: ["$a>b>c$", "$b>a>c$", "$c>a>b$", "$b>c>a$", "$a>c>b$"],
      correct: 1,
      solution: ["Kenar-açı ilişkisinde büyük açının karşısında uzun kenar bulunur.", "Açı sıralaması: $\\widehat{B}>\\widehat{A}>\\widehat{C}$ ($95°>45°>40°$).", "Karşı kenarlar aynı sırayı izler: $b>a>c$."],
      answer: "$b>a>c$ (B seçeneği).",
    },
    {
      id: "ucgende-kenar-aci-bagintilari-02",
      difficulty: "Kolay",
      prompt: "Uzunlukları $4$, $7$ ve $10$ birim olan üç çubukla bir üçgen oluşturulmak isteniyor. Buna göre aşağıdakilerden hangisi doğrudur?",
      options: ["Oluşmaz, çünkü $4+7=11>10$'dur.", "Oluşmaz, çünkü $10>7$'dir.", "Oluşur, çünkü $4+7=11>10$'dur.", "Oluşur, çünkü $10>4+7$'dir.", "Oluşmaz, çünkü $4+10=14>7$'dir."],
      correct: 2,
      solution: ["Üçgen eşitsizliği için en uzun kenar, diğer iki kenarın toplamından küçük olmalıdır.", "En uzun kenar $10$; diğerlerinin toplamı $4+7=11$.", "$10<11$ olduğundan eşitsizlik sağlanır, üçgen oluşur."],
      answer: "Oluşur, çünkü $4+7=11>10$'dur (C seçeneği).",
    },
    {
      id: "ucgende-kenar-aci-bagintilari-03",
      difficulty: "Orta",
      prompt: "Bir üçgenin iki kenarı $12$ ve $5$ birimdir. Üçüncü kenarın uzunluğu bir tam sayı ise alabileceği tüm değerlerin toplamı kaçtır?",
      options: ["$96$", "$108$", "$117$", "$119$", "$132$"],
      correct: 1,
      solution: ["Üçüncü kenar $x$ için aralık: $|12-5|<x<12+5$, yani $7<x<17$.", "Uçlar dâhil değildir; tam sayılar $8,\\ 9,\\ \\dots,\\ 16$.", "Adet: $16-8+1=9$ değer.", "Toplam: $\\dfrac{(8+16)\\cdot 9}{2}=\\dfrac{24\\cdot 9}{2}=108$."],
      answer: "$108$ (B seçeneği).",
    },
    {
      id: "ucgende-kenar-aci-bagintilari-04",
      difficulty: "Orta",
      prompt: "Çevresi $24$ birim olan bir üçgenin iki kenarı $6$ ve $11$ birimdir. Bu üçgenin üçüncü kenarı ile ilgili aşağıdakilerden hangisi doğrudur?",
      options: ["Üçüncü kenar $7$'dir ve üçgen eşitsizliği sağlanır.", "Üçüncü kenar $7$'dir fakat üçgen eşitsizliği sağlanmaz.", "Üçüncü kenar $13$'tür ve üçgen eşitsizliği sağlanır.", "Üçüncü kenar $6$'dır ve üçgen eşitsizliği sağlanmaz.", "Üçüncü kenar $5$'tir ve üçgen eşitsizliği sağlanır."],
      correct: 0,
      solution: ["Üçüncü kenar: $24-6-11=7$.", "En uzun kenar $11$; diğerlerinin toplamı $6+7=13$.", "$11<13$ olduğundan üçgen eşitsizliği sağlanır."],
      answer: "Üçüncü kenar $7$'dir ve üçgen eşitsizliği sağlanır (A seçeneği).",
    },
    {
      id: "ucgende-kenar-aci-bagintilari-05",
      difficulty: "Zor",
      prompt: "Kenar uzunlukları $x-1$, $x+2$ ve $x+5$ birim olan bir üçgende $x$ bir tam sayıdır. Buna göre $x$ en az kaç olabilir?",
      options: ["$2$", "$3$", "$4$", "$5$", "$6$"],
      correct: 3,
      solution: ["En uzun kenar $x+5$'tir; üçgen eşitsizliği için diğer ikisinin toplamından küçük olmalı: $x+5<(x-1)+(x+2)$.", "$x+5<2x+1\\Rightarrow 4<x\\Rightarrow x>4$.", "Kenarların pozitifliği ($x-1>0\\Rightarrow x>1$) bu koşulu aşmaz.", "Tam sayı $x>4$'ün en küçüğü $5$'tir."],
      answer: "$5$ (D seçeneği).",
    },
    {
      id: "ucgende-kenar-aci-bagintilari-06",
      difficulty: "Orta",
      prompt: "Bir marangozun elinde $3$ birim ve $8$ birim uzunluğunda iki çubuk vardır. Bu iki çubuğu üçgen bir çerçevenin iki kenarı yapacak, üçüncü kenar için de tam sayı uzunlukta bir çubuk kesecektir. Marangozun kesebileceği en uzun üçüncü çubuk kaç birimdir?",
      options: ["$9$", "$10$", "$11$", "$12$", "$5$"],
      correct: 1,
      solution: ["Üçüncü kenar $x$ için aralık: $|8-3|<x<8+3$, yani $5<x<11$.", "Uçlar dâhil değildir; en büyük tam sayı $10$'dur ($5+10=15>8$ ve $8+3=11>10$ sağlanır).", "Bu nedenle en uzun üçüncü çubuk $10$ birimdir."],
      answer: "$10$ birim (B seçeneği).",
    },
  ],
};

export default quiz;
