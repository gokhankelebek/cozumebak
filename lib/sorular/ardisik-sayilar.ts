import type { TopicQuiz } from "./types";

// ardisik-sayilar — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "ardisik-sayilar",
  questions: [
    {
      id: "ardisik-sayilar-01",
      difficulty: "Orta",
      prompt: "Bir otobüs durağında $15$ ardışık tam sayı ile numaralandırılmış koltukların toplam numarası $525$'tür. En küçük numara $n$ ise en büyük koltuk numarası $n+14$'tür. Buna göre en büyük koltuk numarası kaçtır?",
      options: ["$40$", "$42$", "$41$", "$38$", "$39$"],
      correct: 1,
      solution: ["Toplam: $n+(n+1)+\\cdots+(n+14)=15n+\\dfrac{14\\cdot 15}{2}=15n+105$.", "$15n+105=525 \\Rightarrow 15n=420 \\Rightarrow n=28$.", "En büyük: $28+14=42$."],
      answer: "$42$",
    },
    {
      id: "ardisik-sayilar-02",
      difficulty: "Kolay",
      prompt: "Bir spor salonunda dört ardışık **çift** numaralı dolabın numaraları toplamı $100$'dür. Buna göre en büyük dolap numarası kaçtır?",
      options: ["$26$", "$24$", "$30$", "$28$", "$22$"],
      correct: 3,
      solution: ["Dolaplar $n,\\ n+2,\\ n+4,\\ n+6$ olsun ($n$ çift).", "Toplam: $4n+12=100 \\Rightarrow 4n=88 \\Rightarrow n=22$.", "En büyük: $22+6=28$."],
      answer: "$28$",
    },
    {
      id: "ardisik-sayilar-03",
      difficulty: "Kolay",
      prompt: "Bir asansörde $7$ ardışık kat düğmesinin numaraları toplamı $49$'dur. Buna göre ortadaki (dördüncü) düğmenin numarası kaçtır?",
      options: ["$7$", "$6$", "$8$", "$5$", "$4$"],
      correct: 0,
      solution: ["Düğmeler $n,\\ n+1,\\ \\dots,\\ n+6$; toplam $7n+21=49$.", "$7n=28 \\Rightarrow n=4$.", "Ortadaki (dördüncü) düğme: $n+3=7$."],
      answer: "$7$",
    },
    {
      id: "ardisik-sayilar-04",
      difficulty: "Orta",
      prompt: "Bir tiyatroda koltuklar $1$. sıradan başlayarak sıra numarası kadar koltuk içerecek biçimde diziliyor: $1$. sırada $1$, $2$. sırada $2$, $\\dots$, $n$. sırada $n$ koltuk. Salon tam dolduğunda toplam $210$ koltuk kullanılmıştır. Buna göre salonda kaç sıra ($n$) vardır?",
      options: ["$18$", "$19$", "$20$", "$21$", "$22$"],
      correct: 2,
      solution: ["Toplam koltuk: $1+2+\\cdots+n=\\dfrac{n(n+1)}{2}=210$.", "$n(n+1)=420$. Ardışık iki sayının çarpımı $420$: $20\\cdot 21=420$.", "Buradan $n=20$. (Çeldirici: $\\dfrac{n(n+1)}{2}=210$ yerine $n(n+1)=210$ alıp yanlış kök aramak.)"],
      answer: "$20$",
    },
    {
      id: "ardisik-sayilar-05",
      difficulty: "Orta",
      prompt: "Bir maratonda ardışık $9$ tam sayı ile numaralandırılmış istasyonların numaralarının **aritmetik ortalaması** $40$'tır. Buna göre en büyük istasyon numarası kaçtır?",
      options: ["$42$", "$43$", "$44$", "$45$", "$48$"],
      correct: 2,
      solution: ["Terim sayısı $9$ (tek) olduğundan ortalama, tam ortadaki ($5.$) terime eşittir: orta terim $=40$.", "En büyük terim, ortadan $4$ adım ileridedir: $40+4=44$.", "(Çeldirici: ortalamayı ilk terim sanıp $40+8=48$ demek, ya da yanlış adım sayısı.)"],
      answer: "$44$",
    },
    {
      id: "ardisik-sayilar-06",
      difficulty: "Zor",
      prompt: "Bir depoda ardışık **çift** numaralı $6$ raf vardır; numaralarının toplamı $90$'dır. Görevli, en küçük ve en büyük raf numarasının **çarpımını** etikete yazacaktır. Buna göre etikete yazılacak çarpım kaçtır?",
      options: ["$180$", "$200$", "$220$", "$240$", "$260$"],
      correct: 1,
      solution: ["Raflar $n,\\ n+2,\\ n+4,\\ n+6,\\ n+8,\\ n+10$ olsun ($n$ çift).", "Toplam: $6n+30=90 \\Rightarrow 6n=60 \\Rightarrow n=10$.", "Numaralar: $10,12,14,16,18,20$; en küçük $10$, en büyük $20$.", "Çarpım: $10\\cdot 20=200$. (Çeldirici: ardışık çift farkı $1$ sanıp $6n+15$ kurmak yanlış $n$ verir.)"],
      answer: "$200$",
    },
  ],
};

export default quiz;
