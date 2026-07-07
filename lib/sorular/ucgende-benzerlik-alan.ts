import type { TopicQuiz } from "./types";

// ucgende-benzerlik-alan — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "ucgende-benzerlik-alan",
  questions: [
    {
      id: "ucgende-benzerlik-alan-01",
      difficulty: "Kolay",
      prompt: "Benzer iki üçgenin benzerlik oranı (küçükten büyüğe) $\\dfrac{2}{3}$'tür. Küçük üçgenin çevresi $24$ birim ise büyük üçgenin çevresi kaç birimdir?",
      options: ["$30$", "$32$", "$36$", "$40$", "$48$"],
      correct: 2,
      solution: ["Çevre oranı benzerlik oranı $k$ ile aynıdır: $\\dfrac{24}{C_{\\text{büyük}}}=\\dfrac{2}{3}$.", "$C_{\\text{büyük}}=24\\cdot\\dfrac{3}{2}=36$."],
      answer: "$36$",
    },
    {
      id: "ucgende-benzerlik-alan-02",
      difficulty: "Kolay",
      prompt: "Benzer iki üçgende küçük üçgenin alanı $16$ birim karedir. Benzerlik oranı (küçükten büyüğe) $\\dfrac{4}{5}$ ise büyük üçgenin alanı kaç birim karedir?",
      options: ["$20$", "$22$", "$24$", "$25$", "$28$"],
      correct: 3,
      solution: ["Alan oranı $k^{2}=\\left(\\dfrac{5}{4}\\right)^{2}=\\dfrac{25}{16}$.", "$A_{\\text{büyük}}=16\\cdot\\dfrac{25}{16}=25$."],
      answer: "$25$",
    },
    {
      id: "ucgende-benzerlik-alan-03",
      difficulty: "Orta",
      prompt: "$\\triangle ABC$'de $D\\in[AB]$, $E\\in[AC]$ ve $[DE]\\parallel[BC]$. $AD=4$, $DB=6$, $AE=6$ birimdir. Buna göre $EC$ kaç birimdir?",
      options: ["$4$", "$6$", "$8$", "$9$", "$12$"],
      correct: 3,
      solution: ["$\\dfrac{AD}{DB}=\\dfrac{AE}{EC}\\Rightarrow\\dfrac{4}{6}=\\dfrac{6}{EC}$.", "$4\\cdot EC=36\\Rightarrow EC=9$."],
      answer: "$9$",
    },
    {
      id: "ucgende-benzerlik-alan-04",
      difficulty: "Orta",
      prompt: "Bir mimar, bir maketin ölçeğini $1{:}50$ olarak belirliyor (maket küçük, gerçek bina büyük). Maketteki bir teras tabanının alanı $8$ cm$^2$'dir. Buna göre gerçek terasın taban alanı kaç cm$^2$'dir?",
      options: ["$400$", "$4000$", "$20000$", "$200000$", "$20$"],
      correct: 2,
      solution: ["Benzerlik (ölçek) oranı $k=50$.", "Alan oranı $k^2=50^2=2500$.", "Gerçek alan: $8\\cdot 2500=20000$ cm$^2$.", "Çeldirici: $8\\cdot 50=400$ (alanı $k$ ile çarpmak) en sık yapılan hatadır."],
      answer: "$20000$",
    },
    {
      id: "ucgende-benzerlik-alan-05",
      difficulty: "Orta",
      prompt: "Bir üçgen bahçenin tabanına paralel bir çit çekilerek bahçe, tepe tarafında küçük bir üçgen ile altta bir yamuğa ayrılıyor. Çit, tepeden inen kenarı tepeden itibaren $\\dfrac{2}{5}$ oranında bölüyor (tepe tarafı $2$ birim, taban tarafı $3$ birim). Buna göre tepedeki küçük üçgenin alanının, tüm bahçenin alanına oranı kaçtır?",
      options: ["$\\dfrac{2}{5}$", "$\\dfrac{4}{25}$", "$\\dfrac{2}{25}$", "$\\dfrac{4}{9}$", "$\\dfrac{9}{25}$"],
      correct: 1,
      solution: ["Tabana paralel çit, küçük üçgeni tüm üçgene benzer yapar.", "Benzerlik oranı $k=\\dfrac{2}{5}$.", "Alan oranı $k^2=\\dfrac{4}{25}$.", "Çeldirici: $\\dfrac{2}{5}$ kenar oranıdır; alanda karesi alınmalı."],
      answer: "$\\dfrac{4}{25}$",
    },
    {
      id: "ucgende-benzerlik-alan-06",
      difficulty: "Zor",
      prompt: "İki benzer üçgen biçimli arazinin alanları sırasıyla $48$ m$^2$ ve $75$ m$^2$'dir. Küçük arazinin çevresine $40$ m tel çekilmiştir. Buna göre büyük arazinin çevresine kaç metre tel gerekir?",
      options: ["$45$", "$48$", "$50$", "$60$", "$64$"],
      correct: 2,
      solution: ["Alan oranı: $\\dfrac{75}{48}=\\dfrac{25}{16}$.", "Benzerlik oranı: $k=\\sqrt{\\dfrac{25}{16}}=\\dfrac{5}{4}$.", "Çevre oranı $k$ olduğundan: $40\\cdot\\dfrac{5}{4}=50$ m.", "Çeldirici: çevreyi $\\dfrac{75}{48}$ ile çarpmak (alan oranıyla) yanlıştır; karekökü alınmalı."],
      answer: "$50$ m",
    },
  ],
};

export default quiz;
