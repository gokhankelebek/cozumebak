import type { TopicQuiz } from "./types";

// tek-cift-sayilar — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "tek-cift-sayilar",
  questions: [
    {
      id: "tek-cift-sayilar-01",
      difficulty: "Kolay",
      prompt: "$n$ bir tam sayıdır. Bir sensör, okunan değeri $T=(n+1)^{2}-(n-1)^{2}$ formülüyle hesaplıyor. Buna göre $T$ sayısının $4$ ile bölümünden kalan daima kaçtır?",
      options: ["$0$", "$1$", "$2$", "$3$", "$4$"],
      correct: 0,
      solution: ["Aç: $(n+1)^{2}-(n-1)^{2}=(n^{2}+2n+1)-(n^{2}-2n+1)=4n$.", "$4n$ her tam $n$ için $4$'ün katıdır; bölümünden kalan $0$'dır."],
      answer: "$0$",
    },
    {
      id: "tek-cift-sayilar-02",
      difficulty: "Orta",
      prompt: "Bir turnuvada $1$'den $41$'e kadar **ardışık tek** numaralı sporcu kaydı tutuluyor. Kayıt memuru tüm numaraların toplamını hesaplayacak. Buna göre bu toplam kaçtır?",
      options: ["$400$", "$420$", "$441$", "$484$", "$361$"],
      correct: 2,
      solution: ["Terimler $1,3,5,\\dots,41$; terim sayısı $\\dfrac{41-1}{2}+1=21$.", "Ardışık tek toplamı: $\\dfrac{(1+41)\\cdot 21}{2}=\\dfrac{42\\cdot 21}{2}=441$."],
      answer: "$441$",
    },
    {
      id: "tek-cift-sayilar-03",
      difficulty: "Orta",
      prompt: "İki sayaç aynı anda çalışıyor: birincinin değeri $5^{2026}$, ikincininki $3^{2027}$. Gösterge paneli iki değerin **toplamının paritesini** (tek/çift) kodluyor; çift için $2$, tek için $1$ yazıyor. Buna göre panelde görünen kod kaçtır?",
      options: ["$0$", "$1$", "$3$", "$4$", "$2$"],
      correct: 4,
      solution: ["$5$ tek olduğundan $5^{2026}$ tektir.", "$3$ tek olduğundan $3^{2027}$ tektir.", "tek $+$ tek $=$ çifttir; panel çift için $2$ yazar."],
      answer: "$2$",
    },
    {
      id: "tek-cift-sayilar-04",
      difficulty: "Orta",
      prompt: "Bir kontrol panelinde üç ölçüm cihazı sırasıyla $4^{6}$, $7^{5}$ ve $9^{3}$ değerlerini gösteriyor. Panel, bu üç değerin **toplamının** paritesini kodluyor: çift ise yeşil, tek ise kırmızı yanıyor. Buna göre panelde hangi renk yanar?",
      options: ["Kırmızı (tek)", "Yeşil (çift)", "Hem yeşil hem kırmızı", "Hiçbiri", "Belirlenemez"],
      correct: 1,
      solution: ["$4$ çift olduğundan $4^{6}$ **çift**.", "$7$ tek olduğundan $7^{5}$ **tek**; $9$ tek olduğundan $9^{3}$ **tek**.", "Toplam: çift $+$ tek $+$ tek $=$ çift $+$ (tek $+$ tek) $=$ çift $+$ çift $=$ **çift**.", "Panel çift için yeşil yanar. (Çeldirici: $7^5$ ve $9^3$'ü çift sanıp ya da üç tek terim sayıp tek demek.)"],
      answer: "Yeşil (çift)",
    },
    {
      id: "tek-cift-sayilar-05",
      difficulty: "Orta",
      prompt: "Bir koridorda ardışık tek numaralı üç dolap vardır; numaraları küçükten büyüğe $2n-1$, $2n+1$, $2n+3$ biçiminde yazılabilir ($n$ pozitif tam sayı). Buna göre bu üç numaranın toplamının $2$ ile bölümünden kalan daima kaçtır?",
      options: ["$0$", "$1$", "$2$", "$n$'ye bağlıdır", "$3$"],
      correct: 1,
      solution: ["Topla: $(2n-1)+(2n+1)+(2n+3)=6n+3$.", "$6n$ çifttir; çift $+$ tek $(3)$ $=$ **tek**. Yani toplam her $n$ için tektir.", "Tek sayının $2$ ile bölümünden kalan $1$'dir. (Çeldirici: $6n+3$'ü $3$'ün katı görüp kalanı $n$'ye bağlı sanmak; oysa parite sabittir.)"],
      answer: "$1$",
    },
    {
      id: "tek-cift-sayilar-06",
      difficulty: "Zor",
      prompt: "Bir oyunda $m$ puanı **tek**, $n$ puanı **çift** olan iki oyuncu vardır. Sistem, $P=m^{2}+n^{2}+m\\cdot n$ değerini hesaplayıp sonucun tek mi çift mi olduğuna göre sıra veriyor. Buna göre $P$ daima nasıldır?",
      options: ["Daima çift", "Daima tek", "$m$ ve $n$'ye göre değişir", "Daima $0$", "Daima asal"],
      correct: 1,
      solution: ["$m$ tek $\\Rightarrow m^{2}$ tek (üs pariteyi değiştirmez).", "$n$ çift $\\Rightarrow n^{2}$ çift.", "$m\\cdot n$: en az bir çarpan ($n$) çift olduğundan çift.", "Toplam: tek $+$ çift $+$ çift $=$ tek $+$ (çift $+$ çift) $=$ tek $+$ çift $=$ **tek**.", "Demek ki $P$ her zaman tektir. (Çeldirici: $m^2$'yi çift sanmak ya da $mn$'yi tek sanmak çift sonucuna götürür.)"],
      answer: "Daima tek",
    },
  ],
};

export default quiz;
