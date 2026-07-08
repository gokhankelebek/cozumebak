import type { TopicQuiz } from "./types";

// olasilik-akil-yurutme-9 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "olasilik-akil-yurutme-9",
  questions: [
    {
      id: "olasilik-akil-yurutme-9-01",
      difficulty: "Kolay",
      prompt: "Bir madenî para atılıyor ve tura gelme deneysel olasılığı sırasıyla şu değerlerde ölçülüyor: $20$ atışta $0{,}35$, $200$ atışta $0{,}46$, $10000$ atışta $0{,}497$. Teorik tura olasılığı $0{,}5$ olduğuna göre, bu ölçümlerden hangisi teorik değere en yakındır ve neden?",
      options: ["$0{,}35$; çünkü en küçük değerdir", "$0{,}46$; çünkü orta büyüklükte bir denemedir", "$0{,}497$; çünkü en çok denemeyle elde edilmiştir", "$0{,}35$; çünkü ilk yapılan ölçümdür", "Üçü de teorik değere eşit uzaklıktadır"],
      correct: 2,
      solution: ["Deneme sayısı arttıkça deneysel olasılık teorik değere yaklaşır.", "$|0{,}35-0{,}5|=0{,}15$, $|0{,}46-0{,}5|=0{,}04$, $|0{,}497-0{,}5|=0{,}003$.", "En küçük fark $0{,}003$ olup bu değer $10000$ atışlık ölçümdür.", "Yani en çok denemeyle elde edilen $0{,}497$ teorik $0{,}5$ değerine en yakındır."],
      answer: "$0{,}497$; en çok denemeyle elde edildiği için teorik değere en yakındır.",
    },
    {
      id: "olasilik-akil-yurutme-9-02",
      difficulty: "Kolay",
      prompt: "Bir fabrikada üretilen $300$ ampulden $45$'i bozuk çıkmıştır. Aynı üretim koşullarında üretilecek $2000$ ampulden yaklaşık kaçının bozuk olması beklenir?",
      options: ["$150$", "$225$", "$300$", "$450$", "$667$"],
      correct: 2,
      solution: ["Gözlenen bozukluk oranı (deneysel olasılık): $\\dfrac{45}{300}=0{,}15$.", "Beklenen bozuk sayısı $\\approx$ deneysel olasılık $\\times$ yeni deneme sayısı.", "Beklenen $=0{,}15\\cdot 2000=300$."],
      answer: "Yaklaşık $300$ bozuk ampul.",
    },
    {
      id: "olasilik-akil-yurutme-9-03",
      difficulty: "Orta",
      prompt: "Bir seracı, bir tohum partisinden ektiği $600$ tohumun $456$'sının çimlendiğini gözlemliyor. Aynı partiden $150$ tohum daha ekerse yaklaşık kaç tohumun çimlenmesini bekler?",
      options: ["$114$", "$120$", "$126$", "$134$", "$144$"],
      correct: 0,
      solution: ["Çimlenme oranı (deneysel olasılık): $\\dfrac{456}{600}=0{,}76$.", "Beklenen çimlenme $=0{,}76\\cdot 150=114$."],
      answer: "Yaklaşık $114$ tohum.",
    },
    {
      id: "olasilik-akil-yurutme-9-04",
      difficulty: "Orta",
      prompt: "Bir çağrı merkezinde gelen $350$ aramanın $84$'ü teknik destek aramasıdır. Önümüzdeki ay $4500$ arama beklenirse, yaklaşık kaç tanesinin teknik destek araması olması beklenir?",
      options: ["$900$", "$960$", "$1000$", "$1080$", "$1200$"],
      correct: 3,
      solution: ["Teknik destek oranı: $\\dfrac{84}{350}=0{,}24$.", "Beklenen sayı $=0{,}24\\cdot 4500=1080$."],
      answer: "Yaklaşık $1080$ teknik destek araması.",
    },
    {
      id: "olasilik-akil-yurutme-9-05",
      difficulty: "Orta",
      prompt: "Bir öğrenci, bir zarı yalnızca $6$ kez atıp $4$ kez $5$ geldiğini görüyor ve \"Bu zarda $5$ gelme olasılığı yaklaşık $0{,}67$'dir\" diyor. Bu çıkarımla ilgili en doğru değerlendirme aşağıdakilerden hangisidir?",
      options: ["Doğrudur; deneysel olasılık $\\dfrac{4}{6}\\approx 0{,}67$ olarak hesaplanmıştır", "Güvenilir değildir; örneklem ($6$ atış) çok küçük olduğundan sonuç şansa bağlı sapmış olabilir", "Doğrudur; zar artık her zaman $0{,}67$ olasılıkla $5$ gösterir", "Yanlıştır; hilesiz zarda $5$ gelme olasılığı her zaman tam $0{,}5$'tir", "Güvenilirdir; $6$ atış bir tahmin için yeterli sayıda denemedir"],
      correct: 1,
      solution: ["Deneysel olasılık $\\dfrac{4}{6}\\approx 0{,}67$ doğru hesaplanmıştır, ancak çıkarımın güvenilirliği ayrı bir konudur.", "Yalnız $6$ atış çok küçük bir örneklemdir; bu kadar az denemede deneysel olasılık şans eseri büyük sapma gösterebilir.", "Hilesiz zarda teorik değer $\\dfrac{1}{6}\\approx 0{,}17$'dir; güvenilir bir tahmin için çok daha fazla deneme gerekir.", "Bu nedenle $0{,}67$ değerinden emin olunamaz."],
      answer: "Güvenilir değildir; örneklem çok küçük olduğundan sonuç şansa bağlı sapmış olabilir.",
    },
    {
      id: "olasilik-akil-yurutme-9-06",
      difficulty: "Zor",
      prompt: "Bir zar çok sayıda atıldığında $2$ gelme deneysel olasılığı kararlı biçimde $0{,}28$ ölçülüyor. Bu zarla ilgili aşağıdaki yorumlardan hangisi yanlıştır?",
      options: ["Hilesiz bir zarda $2$ gelme teorik olasılığı $\\dfrac{1}{6}\\approx 0{,}167$'dir", "Bol denemeye rağmen değer $0{,}167$'ye yaklaşmadığından zar hileli kabul edilir", "Bu zar $5000$ kez atılırsa yaklaşık $1400$ kez $2$ gelmesi beklenir", "Deneme sayısı arttıkça deneysel olasılığın teorik $0{,}167$ değerine yaklaşması beklenir", "Deneysel olasılığın kararlı biçimde $0{,}28$ olması teorik değerden belirgin bir sapmadır"],
      correct: 3,
      solution: ["Hilesiz zarda her yüzün teorik olasılığı $\\dfrac{1}{6}\\approx 0{,}167$'dir; A doğrudur.", "Beklenen sayı $=0{,}28\\cdot 5000=1400$; C doğrudur.", "Bir zar hilesizse deneme arttıkça deneysel olasılık $0{,}167$'ye yaklaşır; ancak bu zarda değer bol denemeye rağmen $0{,}28$'de kararlı kalmıştır. Bu, zarın hileli olduğunu gösterir (B ve E doğru).", "Dolayısıyla \"deneme arttıkça $0{,}167$'ye yaklaşması beklenir\" ifadesi bu hileli zar için yanlıştır; kararlı $0{,}28$ değeri tam da yaklaşmadığını gösterir.", "Aranan yanlış ifade D'dir."],
      answer: "D yanlıştır: hileli zarda deneme artsa da değer teorik $0{,}167$'ye yaklaşmaz, kararlı biçimde $0{,}28$'de kalır.",
    },
  ],
};

export default quiz;
