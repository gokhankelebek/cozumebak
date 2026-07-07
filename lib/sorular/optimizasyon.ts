import type { TopicQuiz } from "./types";

// optimizasyon — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "optimizasyon",
  questions: [
    {
      id: "optimizasyon-01",
      difficulty: "Orta",
      prompt: "Bir peyzaj firması, bir kenarı $x$, komşu kenarı $y$ metre olan dikdörtgen biçimli bir bahçeyi çevirecektir. Bahçenin alanı $600\\,\\text{m}^{2}$ olacaktır. Uzunluğu $x$ olan iki karşılıklı kenar metresi $4$ TL'ye, uzunluğu $y$ olan iki karşılıklı kenar ise metresi $6$ TL'ye çitle çevrilecektir. Firma, toplam çit maliyetini en küçük yapacak boyutları seçmektedir. Buna göre en küçük toplam çit maliyeti kaç TL'dir?",
      options: ["$360$", "$420$", "$480$", "$560$", "$720$"],
      correct: 2,
      solution: ["**Kısıt:** Alan $x\\,y=600 \\Rightarrow y=\\dfrac{600}{x}$.", "**Maliyet:** $x$ kenarı iki adet ($2\\cdot 4x$), $y$ kenarı iki adet ($2\\cdot 6y$): $$C(x)=8x+12y=8x+12\\cdot\\frac{600}{x}=8x+\\frac{7200}{x},\\quad x>0.$$", "**Türev sıfır:** $C'(x)=8-\\dfrac{7200}{x^{2}}=0 \\Rightarrow x^{2}=900 \\Rightarrow x=30$.", "**Doğrula:** $C''(x)=\\dfrac{14400}{x^{3}}>0$ olduğundan $x=30$ bir **minimumdur**. Bu durumda $y=\\dfrac{600}{30}=20$.", "**Maliyet:** $C(30)=8\\cdot 30+\\dfrac{7200}{30}=240+240=480$ TL."],
      answer: "$480$ TL",
    },
    {
      id: "optimizasyon-02",
      difficulty: "Zor",
      prompt: "Bir ambalaj atölyesinde, kenarları $9\\,\\text{cm}$ ve $24\\,\\text{cm}$ olan dikdörtgen bir mukavvanın dört köşesinden $x\\times x$ boyutunda birer kare kesilip kenarlar yukarı katlanarak üstü açık bir kutu yapılıyor. Atölye, kutunun hacmini en büyük yapan $x$ değerini seçmektedir. Buna göre yapılan kutunun en büyük hacmi kaç $\\text{cm}^{3}$'tür?",
      options: ["$200$", "$216$", "$240$", "$250$", "$288$"],
      correct: 0,
      solution: ["**Boyutlar:** Katlamadan sonra yükseklik $x$, taban kenarları $9-2x$ ve $24-2x$ olur; taban pozitif olmalı: $0<x<4{,}5$.", "**Hacim:** $V(x)=x(9-2x)(24-2x)=4x^{3}-66x^{2}+216x$.", "**Türev sıfır:** $V'(x)=12x^{2}-132x+216=12(x^{2}-11x+18)=12(x-2)(x-9)=0 \\Rightarrow x=2$ veya $x=9$.", "**Eleme:** $x=9$ tanım aralığı dışındadır ($9>4{,}5$); geçerli aday $x=2$.", "**Doğrula:** $V'$ işareti $x=2$'de $+$'dan $-$'ye döner, dolayısıyla maksimumdur. $V(2)=2\\cdot(9-4)\\cdot(24-4)=2\\cdot 5\\cdot 20=200$."],
      answer: "$200$",
    },
    {
      id: "optimizasyon-03",
      difficulty: "Orta",
      prompt: "Bir apart otelin $100$ odası vardır. Aylık kira $4000$ TL olduğunda bütün odalar doludur. İşletme, kirayı her $200$ TL artırdığında ortalama olarak $1$ oda boş kalmaktadır. İşletme, aylık toplam kira gelirini en büyük yapacak kirayı belirlemek istemektedir. Buna göre elde edilebilecek en büyük aylık toplam kira geliri kaç TL'dir?",
      options: ["$600\\,000$", "$660\\,000$", "$700\\,000$", "$720\\,000$", "$750\\,000$"],
      correct: 3,
      solution: ["**Değişken:** Kira $200$ TL'lik $x$ artış yapılsın. Kira $4000+200x$, dolu oda sayısı $100-x$ olur ($0\\le x\\le 100$).", "**Gelir:** $G(x)=(4000+200x)(100-x)$.", "**Düzenleme:** $G(x)=400000+16000x-200x^{2}$.", "**Türev sıfır:** $G'(x)=16000-400x=0 \\Rightarrow x=40$.", "**Doğrula:** $G''(x)=-400<0$ olduğundan $x=40$ bir **maksimumdur**. Kira $4000+200\\cdot 40=12000$ TL, dolu oda $100-40=60$. Gelir $G(40)=12000\\cdot 60=720000$ TL."],
      answer: "$720\\,000$ TL",
    },
    {
      id: "optimizasyon-04",
      difficulty: "Orta",
      prompt: "Hacmi $500$ birim küp olan, tabanı kare ve üstü açık dikdörtgenler prizması biçimli bir kutunun toplam yüzey alanı (taban + dört yan yüz) en küçük olacaktır. Taban kenarı $x$ ile gösterilsin. Buna göre yüzey alanını en küçük yapan $x$ değeri kaçtır?",
      options: ["$5$", "$8$", "$10$", "$12$", "$15$"],
      correct: 2,
      solution: ["**Kısıt:** Taban kare $x\\times x$, yükseklik $h$; hacim $x^{2}h=500\\Rightarrow h=\\dfrac{500}{x^{2}}$.", "**Yüzey (üstü açık):** taban $x^{2}$ + dört yan yüz $4xh$: $A(x)=x^{2}+4x\\cdot\\dfrac{500}{x^{2}}=x^{2}+\\dfrac{2000}{x}$.", "**Türev sıfır:** $A'(x)=2x-\\dfrac{2000}{x^{2}}=0\\Rightarrow 2x^{3}=2000\\Rightarrow x^{3}=1000\\Rightarrow x=10$.", "**Doğrula:** $A''(x)=2+\\dfrac{4000}{x^{3}}>0$ olduğundan $x=10$ bir **minimumdur**."],
      answer: "$10$",
    },
    {
      id: "optimizasyon-05",
      difficulty: "Orta",
      prompt: "Bir cisim $A(0,4)$ noktasından harekete başlayıp $x$ ekseni üzerindeki $P(x,0)$ noktasına, oradan da $B(6,2)$ noktasına gidecektir. Yol, $A$ ile $P$ arası ve $P$ ile $B$ arası uzunlukların **karelerinin toplamını** ($\\,|AP|^{2}+|PB|^{2}\\,$) en küçük yapacak biçimde seçilmektedir. Buna göre $P$ noktasının apsisi $x$ kaçtır?",
      options: ["$2$", "$3$", "$4$", "$5$", "$6$"],
      correct: 1,
      solution: ["Uzaklık kareleri: $|AP|^{2}=(x-0)^{2}+(0-4)^{2}=x^{2}+16$ ve $|PB|^{2}=(x-6)^{2}+(0-2)^{2}=(x-6)^{2}+4$.", "Toplam: $f(x)=x^{2}+16+(x-6)^{2}+4=x^{2}+(x-6)^{2}+20$.", "Türev sıfır: $f'(x)=2x+2(x-6)=4x-12=0\\Rightarrow x=3$.", "$f''(x)=4>0$ olduğundan $x=3$ bir **minimumdur**."],
      answer: "$3$",
    },
    {
      id: "optimizasyon-06",
      difficulty: "Orta",
      prompt: "$y=12-x^{2}$ parabolü ile $x$ ekseni arasında, tabanı $x$ ekseni üzerinde ve üst köşeleri parabol üzerinde olan, $y$ eksenine göre simetrik bir dikdörtgen çiziliyor. Birinci bölgedeki üst köşe $(x,\\,12-x^{2})$ ile gösteriliyor. Bu dikdörtgenin alanı en çok kaç birim karedir?",
      options: ["$16$", "$24$", "$32$", "$\\dfrac{64}{3}$", "$\\dfrac{96}{3}$"],
      correct: 2,
      solution: ["Dikdörtgenin tabanı $2x$, yüksekliği $12-x^{2}$ ($0<x<2\\sqrt 3$). Alan $A(x)=2x(12-x^{2})=24x-2x^{3}$.", "Türev sıfır: $A'(x)=24-6x^{2}=0\\Rightarrow x^{2}=4\\Rightarrow x=2$.", "$A''(x)=-12x<0$ olduğundan $x=2$ maksimumdur. Yükseklik $12-2^{2}=8$.", "Alan $A=2\\cdot 2\\cdot 8=32$."],
      answer: "$32$",
    },
  ],
};

export default quiz;
