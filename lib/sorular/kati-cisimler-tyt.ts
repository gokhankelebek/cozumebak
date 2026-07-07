import type { TopicQuiz } from "./types";

// kati-cisimler-tyt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "kati-cisimler-tyt",
  questions: [
    {
      id: "kati-cisimler-tyt-01",
      difficulty: "Orta",
      prompt: "Bir su deposu, taban yarıçapı $2$ metre, yüksekliği $5$ metre olan dik silindir biçimindedir. Depo tamamen doluyken içindeki suyun tamamı, taban alanı $10$ metrekare olan dikdörtgen bir havuza boşaltılıyor. Suyun havuzda oluşturduğu yükseklik kaç $\\pi$ metredir?",
      options: ["$\\pi$", "$2\\pi$", "$4\\pi$", "$5\\pi$", "$20\\pi$"],
      correct: 1,
      solution: ["Silindirdeki su hacmi: $$V=\\pi r^{2}h=\\pi\\cdot 2^{2}\\cdot 5=20\\pi.$$", "Havuzda taban alanı $10$ olduğundan yükseklik: $$h=\\dfrac{V}{\\text{taban}}=\\dfrac{20\\pi}{10}=2\\pi\\ \\text{metre}.$$", "(Çeldirici: hacmi $10$'a bölmeyi unutan $20\\pi$, ya da yarıçap yerine çap kullanan $4$ kat hata yapar.)"],
      answer: "$2\\pi$",
    },
    {
      id: "kati-cisimler-tyt-02",
      difficulty: "Kolay",
      prompt: "Bir kuyumcu, kenarı $6$ cm olan küp biçimli bir altın külçesini eritip, kenarı $3$ cm olan küçük küpler dökecektir. Eritmede kayıp olmadığına göre, kaç tane küçük küp elde edilir?",
      options: ["$2$", "$4$", "$6$", "$8$", "$9$"],
      correct: 3,
      solution: ["Büyük küpün hacmi: $6^{3}=216$ cm³.", "Küçük küpün hacmi: $3^{3}=27$ cm³.", "Küçük küp sayısı: $$\\dfrac{216}{27}=8.$$", "(Çeldirici: kenar oranı $\\tfrac{6}{3}=2$'yi doğrudan cevap sanan A şıkkına düşer; oysa hacim oranı $2^{3}=8$'dir.)"],
      answer: "$8$",
    },
    {
      id: "kati-cisimler-tyt-03",
      difficulty: "Orta",
      prompt: "Bir dondurma külahı, taban yarıçapı $3$ cm, yüksekliği $8$ cm olan dik koni biçimindedir. Külahın üstüne, yarıçapı yine $3$ cm olan yarım küre biçiminde dondurma konuyor. Külah ve üstündeki yarım kürenin toplam hacmi kaç $\\pi$ cm³'tür?",
      options: ["$18\\pi$", "$24\\pi$", "$36\\pi$", "$42\\pi$", "$48\\pi$"],
      correct: 3,
      solution: ["Koni hacmi: $$V_k=\\dfrac{1}{3}\\pi r^{2}h=\\dfrac{1}{3}\\pi\\cdot 9\\cdot 8=24\\pi.$$", "Yarım küre hacmi (tam kürenin yarısı): $$V_{yk}=\\dfrac{1}{2}\\cdot\\dfrac{4}{3}\\pi r^{3}=\\dfrac{2}{3}\\pi\\cdot 3^{3}=\\dfrac{2}{3}\\pi\\cdot 27=18\\pi.$$", "Toplam: $24\\pi+18\\pi=42\\pi$.", "(Çeldirici: yarım küre yerine tam küre alan $24\\pi+36\\pi=60\\pi$ ya da koninin $\\tfrac13$'ünü unutan kişi şaşar.)"],
      answer: "$42\\pi$",
    },
    {
      id: "kati-cisimler-tyt-04",
      difficulty: "Orta",
      prompt: "Bir hediye kutusu, kenarları $5$ cm, $4$ cm ve $3$ cm olan dikdörtgenler prizması biçimindedir. Kutunun tüm dış yüzeyi süs kağıdıyla kaplanacaktır. $1$ cm² kağıt $0{,}5$ kuruş olduğuna göre, gereken kağıdın maliyeti kaç kuruştur?",
      options: ["$47$", "$60$", "$94$", "$120$", "$188$"],
      correct: 0,
      solution: ["Yüzey alanı $2(ab+bc+ac)$: $$2(5\\cdot 4+4\\cdot 3+5\\cdot 3)=2(20+12+15)=2\\cdot 47=94\\ \\text{cm}^{2}.$$", "Maliyet: $94\\cdot 0{,}5=47$ kuruş.", "(Çeldirici: yüzey alanı $94$'ü doğrudan cevap sanan C şıkkına, ya da $2$ çarpanını unutup $47\\cdot 0{,}5$ yapan başka şıkka düşer.)"],
      answer: "$47$",
    },
    {
      id: "kati-cisimler-tyt-05",
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
