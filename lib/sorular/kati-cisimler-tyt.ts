import type { TopicQuiz } from "./types";

// kati-cisimler-tyt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "kati-cisimler-tyt",
  questions: [
    {
      id: "kati-cisimler-tyt-01",
      sekil: {
        aciklama: "Taban yarıçapı 2 m, yüksekliği 5 m olan dik silindir biçimli su deposu.",
        noktalar: { O: [0, 0], O2: [0, 5], L: [-2, 0], R: [2, 0], L2: [-2, 5], R2: [2, 5] },
        elipsler: [{ merkez: "O", rx: 2, ry: 0.72, arkaKesik: true }, { merkez: "O2", rx: 2, ry: 0.72 }],
        dogrular: [{ p: ["L", "L2"] }, { p: ["R", "R2"] }, { p: ["O2", "R2"] }],
        isaretli: ["O2"],
        kenarlar: [
          { p: ["O2", "R2"], metin: "2" },
          { p: ["R", "R2"], metin: "5" },
        ],
        gizli: ["O", "O2", "L", "R", "L2", "R2"],
      },
      difficulty: "Orta",
      prompt: "Bir su deposu, taban yarıçapı $2$ metre, yüksekliği $5$ metre olan dik silindir biçimindedir. Depo tamamen doluyken içindeki suyun tamamı, taban alanı $10$ metrekare olan dikdörtgen bir havuza boşaltılıyor. Suyun havuzda oluşturduğu yükseklik kaç $\\pi$ metredir?",
      options: ["$\\pi$", "$2\\pi$", "$4\\pi$", "$5\\pi$", "$20\\pi$"],
      correct: 1,
      solution: ["Silindirdeki su hacmi: $$V=\\pi r^{2}h=\\pi\\cdot 2^{2}\\cdot 5=20\\pi.$$", "Havuzda taban alanı $10$ olduğundan yükseklik: $$h=\\dfrac{V}{\\text{taban}}=\\dfrac{20\\pi}{10}=2\\pi\\ \\text{metre}.$$", "(Çeldirici: hacmi $10$'a bölmeyi unutan $20\\pi$, ya da yarıçap yerine çap kullanan $4$ kat hata yapar.)"],
      answer: "$2\\pi$",
    },
    {
      id: "kati-cisimler-tyt-02",
      sekil: {
        aciklama: "Kenarı 6 cm olan küp biçimli altın külçe.",
        noktalar: {},
        noktalar3d: { A: [0, 0, 0], B: [6, 0, 0], C: [6, 0, 6], D: [0, 0, 6], E: [0, 6, 0], F: [6, 6, 0], G: [6, 6, 6], H: [0, 6, 6] },
        dogrular: [{ p: ["A", "B"] }, { p: ["B", "F"] }, { p: ["F", "E"] }, { p: ["E", "A"] }, { p: ["E", "H"] }, { p: ["H", "G"] }, { p: ["G", "F"] }, { p: ["B", "C"] }, { p: ["C", "G"] }, { p: ["A", "D"], kesik: true }, { p: ["D", "C"], kesik: true }, { p: ["D", "H"], kesik: true }],
        kenarlar: [
          { p: ["A", "B"], metin: "6" },
        ],
        gizli: ["A", "B", "C", "D", "E", "F", "G", "H"],
      },
      difficulty: "Kolay",
      prompt: "Bir kuyumcu, kenarı $6$ cm olan küp biçimli bir altın külçesini eritip, kenarı $3$ cm olan küçük küpler dökecektir. Eritmede kayıp olmadığına göre, kaç tane küçük küp elde edilir?",
      options: ["$2$", "$4$", "$6$", "$8$", "$9$"],
      correct: 3,
      solution: ["Büyük küpün hacmi: $6^{3}=216$ cm³.", "Küçük küpün hacmi: $3^{3}=27$ cm³.", "Küçük küp sayısı: $$\\dfrac{216}{27}=8.$$", "(Çeldirici: kenar oranı $\\tfrac{6}{3}=2$'yi doğrudan cevap sanan A şıkkına düşer; oysa hacim oranı $2^{3}=8$'dir.)"],
      answer: "$8$",
    },
    {
      id: "kati-cisimler-tyt-03",
      sekil: {
        aciklama: "Taban yarıçapı 3 cm, yüksekliği 8 cm olan dik koni biçimli külah ve üstünde yarıçapı 3 cm olan yarım küre dondurma.",
        noktalar: { T: [0, 0], O: [0, 8], L: [-3, 8], R: [3, 8] },
        elipsler: [{ merkez: "O", rx: 3, ry: 0.9, arkaKesik: true }],
        cemberYaylari: [{ merkez: "O", bas: "R", son: "L" }],
        dogrular: [{ p: ["T", "L"] }, { p: ["T", "R"] }, { p: ["T", "O"], kesik: true }, { p: ["O", "R"], kesik: true }],
        isaretli: ["O"],
        kenarlar: [
          { p: ["O", "R"], metin: "3", ic: true },
          { p: ["T", "O"], metin: "8", ic: true },
        ],
        gizli: ["T", "O", "L", "R"],
      },
      difficulty: "Orta",
      prompt: "Bir dondurma külahı, taban yarıçapı $3$ cm, yüksekliği $8$ cm olan dik koni biçimindedir. Külahın üstüne, yarıçapı yine $3$ cm olan yarım küre biçiminde dondurma konuyor. Külah ve üstündeki yarım kürenin toplam hacmi kaç $\\pi$ cm³'tür?",
      options: ["$18\\pi$", "$24\\pi$", "$36\\pi$", "$42\\pi$", "$48\\pi$"],
      correct: 3,
      solution: ["Koni hacmi: $$V_k=\\dfrac{1}{3}\\pi r^{2}h=\\dfrac{1}{3}\\pi\\cdot 9\\cdot 8=24\\pi.$$", "Yarım küre hacmi (tam kürenin yarısı): $$V_{yk}=\\dfrac{1}{2}\\cdot\\dfrac{4}{3}\\pi r^{3}=\\dfrac{2}{3}\\pi\\cdot 3^{3}=\\dfrac{2}{3}\\pi\\cdot 27=18\\pi.$$", "Toplam: $24\\pi+18\\pi=42\\pi$.", "(Çeldirici: yarım küre yerine tam küre alan $24\\pi+36\\pi=60\\pi$ ya da koninin $\\tfrac13$'ünü unutan kişi şaşar.)"],
      answer: "$42\\pi$",
    },
    {
      id: "kati-cisimler-tyt-04",
      sekil: {
        aciklama: "Kenarları 5 cm, 4 cm ve 3 cm olan dikdörtgenler prizması biçimli kutu.",
        noktalar: {},
        noktalar3d: { A: [0, 0, 0], B: [5, 0, 0], C: [5, 0, 4], D: [0, 0, 4], E: [0, 3, 0], F: [5, 3, 0], G: [5, 3, 4], H: [0, 3, 4] },
        dogrular: [{ p: ["A", "B"] }, { p: ["B", "F"] }, { p: ["F", "E"] }, { p: ["E", "A"] }, { p: ["E", "H"] }, { p: ["H", "G"] }, { p: ["G", "F"] }, { p: ["B", "C"] }, { p: ["C", "G"] }, { p: ["A", "D"], kesik: true }, { p: ["D", "C"], kesik: true }, { p: ["D", "H"], kesik: true }],
        kenarlar: [
          { p: ["A", "B"], metin: "5" },
          { p: ["B", "C"], metin: "4" },
          { p: ["A", "E"], metin: "3" },
        ],
        gizli: ["A", "B", "C", "D", "E", "F", "G", "H"],
      },
      difficulty: "Orta",
      prompt: "Bir hediye kutusu, kenarları $5$ cm, $4$ cm ve $3$ cm olan dikdörtgenler prizması biçimindedir. Kutunun tüm dış yüzeyi süs kağıdıyla kaplanacaktır. $1$ cm² kağıt $0{,}5$ kuruş olduğuna göre, gereken kağıdın maliyeti kaç kuruştur?",
      options: ["$47$", "$60$", "$94$", "$120$", "$188$"],
      correct: 0,
      solution: ["Yüzey alanı $2(ab+bc+ac)$: $$2(5\\cdot 4+4\\cdot 3+5\\cdot 3)=2(20+12+15)=2\\cdot 47=94\\ \\text{cm}^{2}.$$", "Maliyet: $94\\cdot 0{,}5=47$ kuruş.", "(Çeldirici: yüzey alanı $94$'ü doğrudan cevap sanan C şıkkına, ya da $2$ çarpanını unutup $47\\cdot 0{,}5$ yapan başka şıkka düşer.)"],
      answer: "$47$",
    },
    {
      id: "kati-cisimler-tyt-05",
      sekil: {
        aciklama: "Taban ayrıtı 4 cm, yüksekliği 12 cm olan kare dik piramit.",
        noktalar: {},
        noktalar3d: { K1: [-1.5, 12, 2], K2: [-1.5, 0, 2], A: [0, 0, 0], B: [4, 0, 0], C: [4, 0, 4], D: [0, 0, 4], T: [2.0, 12, 2.0], O: [2.0, 0, 2.0], M: [2.0, 0, 0] },
        dogrular: [{ p: ["A", "B"] }, { p: ["B", "C"] }, { p: ["T", "A"] }, { p: ["T", "B"] }, { p: ["T", "C"] }, { p: ["A", "D"], kesik: true }, { p: ["D", "C"], kesik: true }, { p: ["T", "D"], kesik: true }, { p: ["T", "O"], kesik: true }, { p: ["O", "M"], kesik: true }],
        dikler: [["T", "O", "M"]],
        kenarlar: [
          { p: ["A", "B"], metin: "4" },
        ],
        olculer: [{ p: ["K1", "K2"], metin: "12" }],
        gizli: ["A", "B", "C", "D", "T", "O", "M", "K1", "K2"],
      },
      difficulty: "Zor",
      prompt: "Bir fabrika, taban ayrıtı $4$ cm ve yüksekliği $12$ cm olan kare dik piramit biçiminde çikolatalar üretiyor. Aynı çikolatadan $8$ tanesi eritilip kayıpsız olarak küp biçimli bir kalıba dökülüyor. Oluşan küpün bir kenarı kaç cm olur?",
      options: ["$4$", "$6$", "$8$", "$12$", "$16$"],
      correct: 2,
      solution: ["Bir piramidin hacmi: $$V=\\dfrac{1}{3}\\,a^{2}h=\\dfrac{1}{3}\\cdot 4^{2}\\cdot 12=\\dfrac{1}{3}\\cdot 16\\cdot 12=64\\ \\text{cm}^{3}.$$", "$8$ tanesinin toplam hacmi: $8\\cdot 64=512$ cm³.", "Bu hacim bir küpün hacmi olduğundan kenar: $$a^{3}=512\\Rightarrow a=\\sqrt[3]{512}=8\\ \\text{cm}.$$", "(Çeldirici: $\\tfrac13$ çarpanını unutup piramit hacmini $192$ alan, ya da $512$'nin küpkökü yerine kenarı $4$ veya $16$ sanan tuzağa düşer.)"],
      answer: "$8$",
    },
    {
      id: "kati-cisimler-tyt-06",
      difficulty: "Kolay",
      prompt: "Bir silindir biçimli kutunun taban yarıçapı $r$, yüksekliği $h$'dir. Yarıçap aynı kalıp yükseklik $2$ katına çıkarılırsa, yeni silindirin hacmi eski hacmin kaç katı olur?",
      options: ["$\\dfrac{1}{2}$", "$1$", "$2$", "$4$", "$8$"],
      correct: 2,
      solution: ["Eski hacim $V=\\pi r^{2}h$.", "Yeni hacim, yükseklik $2h$ olunca: $$V'=\\pi r^{2}(2h)=2\\pi r^{2}h=2V.$$", "Oran $\\dfrac{V'}{V}=2$.", "(Çeldirici: yarıçap değişmediği halde $2^{2}=4$ kat sanan, ya da $r$ de iki katına çıkmış gibi $8$ kat diyen tuzağa düşer.)"],
      answer: "$2$",
    },
  ],
};

export default quiz;
