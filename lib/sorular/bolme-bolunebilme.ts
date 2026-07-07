import type { TopicQuiz } from "./types";

// bolme-bolunebilme — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "bolme-bolunebilme",
  questions: [
    {
      id: "bolme-bolunebilme-01",
      difficulty: "Kolay",
      prompt: "Bir kargo firması, barkod numarasının $9$ ile bölümünden kalanı hızlı kontrol için rakamlar toplamından hesaplıyor. Barkod $8472$ ise sistem bu sayının $9$ ile bölümünden kalanı kaydedecek. Buna göre kaydedilen kalan kaçtır?",
      options: ["$3$", "$2$", "$1$", "$0$", "$4$"],
      correct: 0,
      solution: ["Rakamlar toplamı: $8+4+7+2=21$.", "$21=9\\cdot 2+3$ olduğundan $8472$'nin $9$ ile bölümünden kalan $3$'tür."],
      answer: "$3$",
    },
    {
      id: "bolme-bolunebilme-02",
      difficulty: "Orta",
      prompt: "Üç basamaklı $\\overline{2a4}$ plaka numarası hem $2$'ye hem $3$'e tam bölünebilecek şekilde $a$ rakamı seçilecektir. Buna göre $a$ kaç farklı değer alabilir?",
      options: ["$2$", "$3$", "$4$", "$5$", "$1$"],
      correct: 2,
      solution: ["$2$ ile bölünme: son rakam $4$ (çift) → her $a$ için sağlanır.", "$3$ ile bölünme: $2+a+4=6+a$, $3$'ün katı olmalı; $a\\in\\{0,3,6,9\\}$.", "Toplam $4$ farklı $a$ değeri vardır ($204$, $234$, $264$, $294$)."],
      answer: "$4$",
    },
    {
      id: "bolme-bolunebilme-03",
      difficulty: "Zor",
      prompt: "Bir otomat, $5$'e bölündüğünde $2$, $4$'e bölündüğünde $3$ kalanını veren en küçük pozitif tam sayıyı \"arıza kodu\" olarak gösteriyor. Aynı sayının $12$ ile bölümünden kalan soruluyor. Buna göre bu kalan kaçtır?",
      options: ["$8$", "$9$", "$10$", "$7$", "$11$"],
      correct: 3,
      solution: ["Sayı $n$: $n=5a+2$ ve $n=4b+3$.", "En küçük çözüm: $a=1$, $b=1$ → $n=7$ ($7=5\\cdot 1+2$, $7=4\\cdot 1+3$).", "Genel çözüm $n=20k+7$; $7\\bmod 12=7$."],
      answer: "$7$",
    },
    {
      id: "bolme-bolunebilme-04",
      difficulty: "Orta",
      prompt: "Bir kitaplıkta her kitabın sırt etiketinde $\\overline{3x4}$ biçiminde üç basamaklı bir kod vardır. Sistem yalnızca $11$ ile tam bölünen kodları \"geçerli\" sayıyor. Buna göre kodun geçerli olması için $x$ rakamı kaç olmalıdır?",
      options: ["$5$", "$6$", "$7$", "$8$", "$9$"],
      correct: 2,
      solution: ["$11$ kuralı: birler basamağından başlayarak dönüşümlü toplam, $4-x+3=7-x$.", "Bu değer $0$ ya da $11$'in katı olmalı. $x$ bir rakam olduğundan $7-x$ değeri $-2$ ile $7$ arasındadır; bu aralıkta uygun olan tek değer $0$'dır.", "$7-x=0\\Rightarrow x=7$. (Gerçekten $374=11\\cdot 34$.)"],
      answer: "$7$",
    },
    {
      id: "bolme-bolunebilme-05",
      difficulty: "Orta",
      prompt: "Bir depoda $A$ kolisinde bulunan ürün sayısı $7$'ye bölündüğünde $4$, $B$ kolisindeki ürün sayısı $7$'ye bölündüğünde $5$ kalanını veriyor. İki koli birleştirildiğinde toplam ürün, yine $7$'şerli paketlere konuyor. Buna göre son pakette kaç ürün artar (kalan kaçtır)?",
      options: ["$0$", "$1$", "$2$", "$3$", "$4$"],
      correct: 2,
      solution: ["$A=7k+4$, $B=7m+5$ yaz.", "Topla: $A+B=7(k+m)+9$.", "$9=7\\cdot 1+2$ olduğundan $A+B$'nin $7$ ile bölümünden kalan $2$'dir."],
      answer: "$2$",
    },
    {
      id: "bolme-bolunebilme-06",
      difficulty: "Orta",
      prompt: "Bir spor salonunda dolaplar $1$'den başlayarak ardışık numaralandırılmıştır. Yönetim, numarası **hem $3$'e hem $4$'e** tam bölünen dolapları bakıma alacaktır. Bakıma alınacak dolapların numaraları $1$ ile $100$ arasındadır. Buna göre kaç dolap bakıma alınır?",
      options: ["$6$", "$7$", "$8$", "$9$", "$10$"],
      correct: 2,
      solution: ["Hem $3$'e hem $4$'e bölünen sayı, EKOK$(3,4)=12$'nin katıdır.", "$1$ ile $100$ arasındaki $12$ katları: $12,24,36,48,60,72,84,96$.", "Bunlar $8$ tanedir."],
      answer: "$8$",
    },
  ],
};

export default quiz;
