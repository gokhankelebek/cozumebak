import type { TopicQuiz } from "./types";

// cemberin-analitik-incelenmesi — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "cemberin-analitik-incelenmesi",
  questions: [
    {
      id: "cemberin-analitik-incelenmesi-01",
      difficulty: "Kolay",
      prompt: "Merkezi $M(-3,5)$ ve yarıçapı $2\\sqrt{2}$ olan çemberin standart denklemi aşağıdakilerden hangisidir?",
      options: ["$(x+3)^2+(y-5)^2=8$", "$(x-3)^2+(y+5)^2=8$", "$(x+3)^2+(y-5)^2=2\\sqrt{2}$", "$(x+3)^2+(y-5)^2=4$", "$(x-3)^2+(y+5)^2=8$"],
      correct: 0,
      solution: ["Standart biçim: $(x-a)^2+(y-b)^2=r^2$.", "$a=-3$ olduğundan $(x-(-3))^2=(x+3)^2$; $b=5$ olduğundan $(y-5)^2$.", "Sağ tarafta $r^2$ yazılır: $r^2=(2\\sqrt{2})^2=4\\cdot 2=8$.", "Denklem: $(x+3)^2+(y-5)^2=8$."],
      answer: "$(x+3)^2+(y-5)^2=8$.",
    },
    {
      id: "cemberin-analitik-incelenmesi-02",
      difficulty: "Orta",
      prompt: "$x^2+y^2+10x-8y+5=0$ çemberinin merkezi $M(a,b)$ ve yarıçapı $r$ olduğuna göre, $a+b+r$ toplamı kaçtır?",
      options: ["$1$", "$5$", "$7$", "$-3$", "$11$"],
      correct: 1,
      solution: ["Terimleri grupla: $(x^2+10x)+(y^2-8y)=-5$.", "Kareye tamamla: $x$ grubunda $10$'un yarısı $5$; $25$ ekle. $y$ grubunda $-8$'in yarısı $-4$; $16$ ekle. Eklenenleri sağ tarafa da ekle.", "$(x+5)^2+(y-4)^2=-5+25+16=36$.", "Oku: $a=-5$, $b=4$, $r=\\sqrt{36}=6$.", "$a+b+r=-5+4+6=5$."],
      answer: "$a+b+r=5$.",
    },
    {
      id: "cemberin-analitik-incelenmesi-03",
      difficulty: "Orta",
      prompt: "Bir çemberin çapının uçları $A(-3,2)$ ve $B(5,8)$'dir. Bu çemberin denklemi aşağıdakilerden hangisidir?",
      options: ["$(x-1)^2+(y-5)^2=100$", "$(x+1)^2+(y+5)^2=25$", "$(x-1)^2+(y-5)^2=25$", "$(x-1)^2+(y-5)^2=10$", "$(x-4)^2+(y-3)^2=25$"],
      correct: 2,
      solution: ["Merkez, çapın orta noktasıdır: $M=\\left(\\dfrac{-3+5}{2},\\dfrac{2+8}{2}\\right)=(1,5)$.", "Yarıçap karesi (merkez ile bir uç arası): $r^2=|MA|^2=(1-(-3))^2+(5-2)^2=4^2+3^2=16+9=25$.", "Denklem: $(x-1)^2+(y-5)^2=25$."],
      answer: "$(x-1)^2+(y-5)^2=25$.",
    },
    {
      id: "cemberin-analitik-incelenmesi-04",
      difficulty: "Kolay",
      prompt: "$P(6,-1)$ noktası $(x-2)^2+(y+4)^2=30$ çemberine göre hangi bölgededir?",
      options: ["Çemberin üzerinde", "Çemberin dışında", "Merkezde", "Belirlenemez", "Çemberin içinde"],
      correct: 4,
      solution: ["Noktayı denklemin sol tarafına koy: $(6-2)^2+(-1+4)^2=4^2+3^2=16+9=25$.", "Sağ taraf $r^2=30$ ile karşılaştır: $25<30$.", "Değer $r^2$'den küçük olduğundan nokta çemberin içindedir."],
      answer: "Çemberin içinde ($25<30$).",
    },
    {
      id: "cemberin-analitik-incelenmesi-05",
      difficulty: "Orta",
      prompt: "Bir dairesel bahçe havuzunun merkezi, koordinat düzleminde $M(4,-3)$ noktasına yerleştirilmiştir. Havuzun kenarı $y$ eksenine tam olarak teğet olduğuna göre, havuz sınırını temsil eden çemberin denklemi aşağıdakilerden hangisidir?",
      options: ["$(x-4)^2+(y+3)^2=9", "$(x-4)^2+(y+3)^2=25$", "$(x-4)^2+(y+3)^2=16$", "$(x+4)^2+(y-3)^2=16$", "$(x-4)^2+(y+3)^2=4$"],
      correct: 2,
      solution: ["Çember $y$ eksenine teğet ise yarıçap, merkezin $y$ eksenine uzaklığına eşittir: $r=|a|=|4|=4$.", "Sağ tarafa $r^2=4^2=16$ yazılır.", "Merkez $M(4,-3)$ için denklem: $(x-4)^2+(y+3)^2=16$."],
      answer: "$(x-4)^2+(y+3)^2=16$.",
    },
    {
      id: "cemberin-analitik-incelenmesi-06",
      difficulty: "Zor",
      prompt: "$x^2+y^2-6x+2y-15=0$ çemberi üzerinde ordinatı $2$ olan (yani $y=2$) noktalar bulunmaktadır. Bu noktaların apsislerinin (x değerlerinin) toplamı kaçtır?",
      options: ["$6$", "$-2$", "$3$", "$8$", "$-6$"],
      correct: 0,
      solution: ["Önce kareye tamamla: $(x^2-6x)+(y^2+2y)=15$.", "$9$ ve $1$ ekle: $(x-3)^2+(y+1)^2=15+9+1=25$.", "$y=2$ koy: $(x-3)^2+(2+1)^2=25\\Rightarrow (x-3)^2+9=25\\Rightarrow (x-3)^2=16$.", "$x-3=\\pm 4\\Rightarrow x=7$ veya $x=-1$.", "Apsislerin toplamı: $7+(-1)=6$."],
      answer: "Apsislerin toplamı $6$'dır.",
    },
  ],
};

export default quiz;
