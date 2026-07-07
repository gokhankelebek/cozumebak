import type { TopicQuiz } from "./types";

// cember-daire-tyt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "cember-daire-tyt",
  questions: [
    {
      id: "cember-daire-tyt-01",
      difficulty: "Kolay",
      prompt: "Yarıçapı $5$ birim olan bir çemberde merkez açısı $90°$ olan bir yayın uzunluğu kaç birimdir?",
      options: ["$\\pi$", "$2\\pi$", "$\\dfrac{5\\pi}{2}$", "$5\\pi$", "$10\\pi$"],
      correct: 2,
      solution: ["Yay uzunluğu: $\\dfrac{90}{360}\\cdot 2\\pi r=\\dfrac{1}{4}\\cdot 10\\pi=\\dfrac{5\\pi}{2}$."],
      answer: "$\\dfrac{5\\pi}{2}$",
    },
    {
      id: "cember-daire-tyt-02",
      difficulty: "Kolay",
      prompt: "Bir çemberde aynı yayı gören merkez açı $80°$ ise, bu yayı gören çevre açı kaç derecedir?",
      options: ["$20$", "$40$", "$80$", "$100$", "$160$"],
      correct: 1,
      solution: ["Çevre açı, merkez açının yarısıdır: $\\dfrac{80°}{2}=40°$."],
      answer: "$40$",
    },
    {
      id: "cember-daire-tyt-03",
      difficulty: "Orta",
      prompt: "Yarıçapı $10$ birim olan bir çemberde, merkezden bir kirişe inilen dikmenin uzunluğu $6$ birimdir. Buna göre kirişin uzunluğu kaç birimdir?",
      options: ["$12$", "$14$", "$16$", "$18$", "$20$"],
      correct: 2,
      solution: ["Kirişin yarısı $HA$: $10^{2}=6^{2}+HA^{2}\\Rightarrow HA^{2}=64\\Rightarrow HA=8$.", "Kiriş: $AB=2\\cdot 8=16$."],
      answer: "$16$",
    },
    {
      id: "cember-daire-tyt-04",
      difficulty: "Orta",
      prompt: "Bir pizza, yarıçapı $20$ cm olan tam bir daire şeklindedir ve merkezden $8$ eşit dilime kesilmiştir. Bir kişi $3$ dilim yiyor. Buna göre yenen pizzanın alanı kaç cm$^2$'dir?",
      options: ["$100\\pi$", "$120\\pi$", "$150\\pi$", "$160\\pi$", "$400\\pi$"],
      correct: 2,
      solution: ["Tüm alan: $\\pi\\cdot 20^2=400\\pi$ cm$^2$.", "Yenen pay: $\\dfrac{3}{8}\\cdot 400\\pi=150\\pi$ cm$^2$.", "Çeldirici: $400\\pi$ tüm pizzadır; $\\dfrac{3}{8}$ oranını uygulamayı atlamak hatadır."],
      answer: "$150\\pi$",
    },
    {
      id: "cember-daire-tyt-05",
      difficulty: "Zor",
      prompt: "Bir gemi, deniz fenerinden tam $13$ km uzaktadır. Fenerin etrafındaki sığ (tehlikeli) bölge, fener merkezli yarıçapı $5$ km olan bir dairedir. Gemi, bu daireye **teğet** olacak şekilde düz bir rotada ilerleyip tehlikeli bölgeyi sıyırarak geçiyor. Buna göre geminin, teğet değme noktasına olan uzaklığı kaç km'dir?",
      options: ["$8$", "$10$", "$12$", "$14$", "$18$"],
      correct: 2,
      solution: ["Teğet değme noktasında yarıçapa dik; dik üçgende hipotenüs merkez–gemi uzaklığı $13$.", "Pisagor: $\\text{teğet}^2=13^2-5^2=169-25=144\\Rightarrow \\text{teğet}=12$ km ($5$-$12$-$13$).", "Çeldirici: $13-5=8$ (uzaklıkları çıkarmak) yanlıştır; Pisagor gerekir."],
      answer: "$12$",
    },
    {
      id: "cember-daire-tyt-06",
      difficulty: "Orta",
      prompt: "Dairesel bir bahçenin etrafına çevre boyunca tel çekiliyor; kullanılan tel uzunluğu $12\\pi$ m'dir. Aynı bahçenin yarıçapı $2$ katına çıkarılırsa, **alanı** kaç kat artar?",
      options: ["$2$", "$3$", "$4$", "$6$", "$8$"],
      correct: 2,
      solution: ["Yarıçap $2$ katına çıkıyor: $k=2$.", "Alan oranı $k^2=2^2=4$; alan $4$ kat artar.", "Çeldirici: yarıçap $2$ katı olunca **çevre** $2$ kat, ama **alan** $4$ kat artar; ikisi karıştırılmamalı."],
      answer: "$4$",
    },
  ],
};

export default quiz;
