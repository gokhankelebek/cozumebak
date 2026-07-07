import type { TopicQuiz } from "./types";

// sayi-basamaklari — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "sayi-basamaklari",
  questions: [
    {
      id: "sayi-basamaklari-01",
      difficulty: "Kolay",
      prompt: "Bir otopark plakasında iki basamaklı $\\overline{5a}$ yazılıdır. Plaka $3$'ün katı olacak biçimde $a$ rakamı seçilecektir. Buna göre $a$ kaç farklı değer alabilir?",
      options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
      correct: 2,
      solution: ["$3$ ile bölünebilirlik: $5+a$ toplamı $3$'ün katı olmalı.", "$a\\in\\{0,1,\\dots,9\\}$ için $5+a\\in\\{5,6,\\dots,14\\}$; $3$'ün katları: $6,9,12$.", "$a=1,4,7$ → $3$ farklı değer ($51$, $54$, $57$)."],
      answer: "$3$",
    },
    {
      id: "sayi-basamaklari-02",
      difficulty: "Orta",
      prompt: "İki basamaklı bir telefon kodunun rakamları toplamı $11$'dir. Kod ile rakamları yer değiştirilmiş hali arasındaki fark $27$'dir. Buna göre bu kod (ilk yazılış hâli) kaçtır?",
      options: ["$47$", "$74$", "$83$", "$56$", "$65$"],
      correct: 1,
      solution: ["Kod $\\overline{ab}=10a+b$, tersi $\\overline{ba}=10b+a$.", "Fark: $(10a+b)-(10b+a)=9(a-b)=27 \\Rightarrow a-b=3$.", "Rakam toplamı: $a+b=11$. Topla: $2a=14 \\Rightarrow a=7$, $b=4$.", "Kod: $74$."],
      answer: "$74$",
    },
    {
      id: "sayi-basamaklari-03",
      difficulty: "Kolay",
      prompt: "Üç basamaklı $\\overline{abc}$ sayısı ile $\\overline{cba}$ sayısı arasındaki fark $396$'dır; $b=5$ sabittir. Buna göre $a-c$ kaçtır?",
      options: ["$3$", "$5$", "$6$", "$7$", "$4$"],
      correct: 4,
      solution: ["$\\overline{abc}-\\overline{cba}=(100a+10b+c)-(100c+10b+a)=99(a-c)$.", "$99(a-c)=396 \\Rightarrow a-c=4$."],
      answer: "$4$",
    },
    {
      id: "sayi-basamaklari-04",
      difficulty: "Kolay",
      prompt: "Bir kargo barkodunda üç basamaklı $\\overline{8mn}$ sayısı yazılıdır ($m$ ve $n$ herhangi rakam). Sistem, soldaki $8$ rakamının **basamak değeri** ile **sayı (rakam) değeri** arasındaki farkı bir güvenlik koduna çeviriyor. Buna göre bu fark kaçtır?",
      options: ["$72$", "$720$", "$792$", "$800$", "$808$"],
      correct: 2,
      solution: ["$8$ rakamı **yüzler** basamağındadır; basamak değeri $8\\cdot 100=800$.", "Aynı rakamın **sayı değeri** $8$'dir.", "Fark: $800-8=792$. ($m$ ve $n$ sonucu etkilemez.) Çeldirici: basamak değerini $80$ ($\\Rightarrow 72$) sanmak ya da farkı almayı unutup $800$ demek."],
      answer: "$792$",
    },
    {
      id: "sayi-basamaklari-05",
      difficulty: "Orta",
      prompt: "İki basamaklı bir bilet numarası $\\overline{ab}$'nin rakamları toplamı $10$'dur. Bu numara, rakamları yer değiştirilmiş hâli $\\overline{ba}$'dan $18$ fazladır. Buna göre bilet numarası (ilk yazılış hâli) kaçtır?",
      options: ["$46$", "$55$", "$73$", "$64$", "$82$"],
      correct: 3,
      solution: ["Koşul: $\\overline{ab}-\\overline{ba}=18 \\Rightarrow 9(a-b)=18 \\Rightarrow a-b=2$.", "Rakam toplamı: $a+b=10$. Topla: $2a=12 \\Rightarrow a=6,\\ b=4$.", "Numara: $\\overline{ab}=64$. Doğrulama: $64-46=18$ ✓ ve $6+4=10$ ✓. (Çeldirici: $\\overline{ba}=46$ cevabını işaretlemek.)"],
      answer: "$64$",
    },
    {
      id: "sayi-basamaklari-06",
      difficulty: "Orta",
      prompt: "Bir dolap şifresi üç basamaklı $\\overline{2k6}$ biçimindedir ($k$ bir rakam). Şifrenin **$3$ ile bölünebilmesi** isteniyor. Buna göre $k$ kaç farklı değer alabilir?",
      options: ["$2$", "$3$", "$4$", "$5$", "$6$"],
      correct: 1,
      solution: ["$3$ ile bölünebilme: rakamlar toplamı $2+k+6=8+k$ sayısı $3$'ün katı olmalı.", "$k\\in\\{0,1,\\dots,9\\}$ için $8+k\\in\\{8,9,\\dots,17\\}$; $3$'ün katları: $9,12,15$.", "$8+k=9\\Rightarrow k=1$, $8+k=12\\Rightarrow k=4$, $8+k=15\\Rightarrow k=7$.", "$k\\in\\{1,4,7\\}$ → $3$ farklı değer. (Çeldirici: birler basamağına bakıp $5$/$2$ ile bölünebilme kuralıyla karıştırmak.)"],
      answer: "$3$",
    },
  ],
};

export default quiz;
