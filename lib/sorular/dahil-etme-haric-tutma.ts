import type { TopicQuiz } from "./types";

// dahil-etme-haric-tutma — özgün pekiştirme soruları. Her cevap ve her
// çeldiricinin hangi hatadan geldiği bir Python sayım betiğiyle denetlendi.
const quiz: TopicQuiz = {
  slug: "dahil-etme-haric-tutma",
  questions: [
    {
      id: "dahil-etme-haric-tutma-01",
      difficulty: "Kolay",
      prompt:
        "Bir sınıfta $25$ öğrenci vardır. Bu öğrenciler arasında **aynı ayda doğmuş** en az kaç öğrencinin bulunduğu kesin olarak söylenebilir?",
      options: ["$2$", "$3$", "$4$", "$12$", "$13$"],
      correct: 1,
      solution: [
        "Kutular aylardır: $12$ kutu var. Öğrenciler bu kutulara dağıtılıyor.",
        "En şanssız durumu kuralım: öğrencileri aylara olabildiğince eşit dağıtırız. Her aya $2$ öğrenci koyarsak $12\\cdot 2=24$ öğrenci yerleşir.",
        "$25$. öğrenci hangi aya düşerse düşsün o ayda $3$ öğrenci olur. Yani her dağılımda en az bir ayda en az $3$ öğrenci vardır: $\\left\\lceil \\dfrac{25}{12} \\right\\rceil = 3$.",
        "$4$ kesin değildir: yukarıdaki dağılımda hiçbir ayda $4$ öğrenci yoktur.",
        "Dikkat: $25:12$ bölümünün tam kısmı olan $2$ yazılmaz; artan bir öğrenci olduğu için bir üste yuvarlanır. $12$ ay (kutu) sayısıdır, cevap değildir. $13$ ise \"aynı ayda doğan iki öğrencinin kesin bulunması için en az kaç öğrenci gerekir\" sorusunun cevabıdır.",
      ],
      answer: "$3$",
    },
    {
      id: "dahil-etme-haric-tutma-02",
      difficulty: "Kolay",
      prompt:
        "Birbirinden farklı $4$ mektup, her biri bir mektuba ait olan $4$ zarfa, her zarfa bir mektup girecek biçimde yerleştirilecektir. **Hiçbir mektubun kendi zarfına girmediği** kaç farklı yerleştirme vardır?",
      options: ["$8$", "$9$", "$12$", "$15$", "$20$"],
      correct: 1,
      solution: [
        "Tüm yerleştirmeler: $4!=24$.",
        "$A_i$: $i$. mektup kendi zarfında. Bir mektup sabitse kalanlar $3!=6$, iki mektup sabitse $2!=2$, üç mektup sabitse $1$, dördü sabitse $1$ yerleştirme vardır.",
        "Dahil etme–hariç tutma ile en az bir mektubun kendi zarfına girdiği yerleştirmeler: $4\\cdot 6-6\\cdot 2+4\\cdot 1-1=24-12+4-1=15$.",
        "Hiçbiri kendi zarfında değil: $24-15=9$. Formül olarak: $D_4=4!-C(4,1)\\cdot 3!+C(4,2)\\cdot 2!-C(4,3)\\cdot 1!+C(4,4)\\cdot 0!=24-24+12-4+1=9$.",
        "Denetim: $1$. mektup $2$, $3$ ya da $4$. zarfa girebilir. $1$. mektup $2$. zarfa girsin. $2$. mektup $1$. zarfa girerse $3$. ve $4$. mektuplar yer değiştirir ($1$ yol). $2$. mektup $3$. ya da $4$. zarfa girerse kalan iki mektubun yerleşimi tek biçimde belirlenir ($2$ yol). Toplam $3$ yol. $1$. mektubun $3$. ya da $4$. zarfa girdiği durumlar da aynı biçimde $3$'er yol verir: $3\\cdot 3=9$.",
        "Yaygın hatalar: $4!-4=20$ yazmak ($D_n=n!-n$ değildir); $24-24+12=12$'de durup son iki terimi unutmak; $24-24+12-4=8$'de durup son terimi unutmak; $15$ olan \"en az bir\" sayısını cevap sanmak.",
      ],
      answer: "$9$",
    },
    {
      id: "dahil-etme-haric-tutma-03",
      difficulty: "Kolay",
      prompt:
        "$A, E, K, L, M$ harfleri kullanılarak, harfler tekrar edilebilmek üzere, $3$ harfli anlamlı veya anlamsız kelimeler yazılacaktır. Bu kelimelerden kaç tanesinin **ilk harfi sesli veya son harfi sessizdir**?",
      options: ["$30$", "$65$", "$75$", "$95$", "$125$"],
      correct: 3,
      solution: [
        "Sesli harfler $A, E$ ($2$ tane), sessiz harfler $K, L, M$ ($3$ tane). Tüm kelimeler: $5^3=125$.",
        "İlk harfi sesli: $2\\cdot 5\\cdot 5=50$. Son harfi sessiz: $5\\cdot 5\\cdot 3=75$.",
        "İkisi birden (ilk harf sesli **ve** son harf sessiz): $2\\cdot 5\\cdot 3=30$. Ortadaki harfin $5$ seçeneği unutulmamalıdır.",
        "İlk harfi sesli veya son harfi sessiz: $50+75-30=95$.",
        "Tümleyenle denetim: istenmeyen kelimelerde ilk harf sessiz ve son harf sesli olmalı: $3\\cdot 5\\cdot 2=30$. $125-30=95$ ✓.",
        "Yaygın hatalar: kesişimi çıkarmayıp $50+75=125$ bulmak (bu, tüm kelimelerin sayısıdır; oysa ilk harfi sessiz ve son harfi sesli olan kelimeler koşulu sağlamaz); kesişimi iki kez çıkarıp yalnız birini sağlayanların sayısını, $50+75-2\\cdot 30=65$'i bulmak; yalnız \"son harfi sessiz\" koşulunu sayıp $75$ yazmak; \"veya\" yerine \"ve\" okuyup $30$ yazmak.",
      ],
      answer: "$95$",
    },
    {
      id: "dahil-etme-haric-tutma-04",
      difficulty: "Kolay",
      prompt:
        "$10$ ile $100$ arasındaki tam sayılardan ($10$ ve $100$ **hariç**) kaç tanesi $3$ ile veya $5$ ile bölünür?",
      options: ["$35$", "$41$", "$43$", "$46$", "$47$"],
      correct: 1,
      solution: [
        "Sayılar $11, 12, \\dots, 99$'dur.",
        "$3$'ün katları: $12, 15, \\dots, 99$. Sayısı $\\dfrac{99-12}{3}+1=30$.",
        "$5$'in katları: $15, 20, \\dots, 95$. Sayısı $\\dfrac{95-15}{5}+1=17$.",
        "Hem $3$ hem $5$ ile bölünenler $\\text{EKOK}(3,5)=15$'in katlarıdır: $15, 30, \\dots, 90$, yani $6$ tane.",
        "$3$ veya $5$ ile bölünenler: $30+17-6=41$.",
        "Denetim: $1$–$99$ arasında $33+19-6=46$ sayı vardır; bunlardan $1$–$10$ arasındakiler ($3, 5, 6, 9, 10$) çıkarılırsa $46-5=41$ ✓. Uçları dahil sayan $10$ ve $100$'ü de ekleyip $43$ bulur.",
        "Yaygın hatalar: kesişimi çıkarmayıp $30+17=47$ bulmak; aralığı $1$'den başlatıp $46$ bulmak; uçları dahil edip $43$ bulmak; kesişimi iki kez çıkarıp yalnız birine bölünenlerin sayısını, $30+17-2\\cdot 6=35$'i bulmak.",
      ],
      answer: "$41$",
    },
    {
      id: "dahil-etme-haric-tutma-05",
      difficulty: "Orta",
      prompt:
        "Bir okulda satranç, müzik ve tiyatro kulüpleri vardır. Satranç kulübünde $20$, müzik kulübünde $25$, tiyatro kulübünde $18$ öğrenci vardır. Satranç ve müzik kulüplerinin ikisine de üye $8$, satranç ve tiyatro kulüplerinin ikisine de üye $6$, müzik ve tiyatro kulüplerinin ikisine de üye $7$ öğrenci vardır (bu sayılara üç kulübe birden üye olanlar da dahildir). Bu kulüplerden en az birine üye olan $45$ öğrenci olduğuna göre, **en az iki** kulübe üye olan kaç öğrenci vardır?",
      options: ["$3$", "$12$", "$15$", "$18$", "$21$"],
      correct: 2,
      solution: [
        "Üç kulübe birden üye olanların sayısı $x$ olsun. Üç kümeli dahil etme–hariç tutma: $45=(20+25+18)-(8+6+7)+x=63-21+x$.",
        "Buradan $x=3$ bulunur.",
        "Yalnız iki kulübe üye olanlar: satranç–müzik $8-3=5$, satranç–tiyatro $6-3=3$, müzik–tiyatro $7-3=4$. Toplam $12$.",
        "En az iki kulübe üye olanlar: $12+3=15$. Kısa yol: $(8+6+7)-2x=21-6=15$; çünkü üç kulübe üye olanlar $21$'in içinde üç kez sayılmıştır, iki fazla sayımı çıkarırız.",
        "Denetim: yalnız satranç $20-5-3-3=9$, yalnız müzik $25-5-4-3=13$, yalnız tiyatro $18-3-4-3=8$. $9+13+8+12+3=45$ ✓ ve hiçbir bölge negatif değil.",
        "Yaygın hatalar: $21$ yazmak (üçlü kesişimi üç kez saymak), $21-3=18$ yazmak (bir kez fazla sayıldığını sanmak), $12$ yazmak (\"tam iki\" ile \"en az iki\"yi karıştırmak).",
      ],
      answer: "$15$",
    },
    {
      id: "dahil-etme-haric-tutma-06",
      difficulty: "Orta",
      prompt:
        "Bir çekmecede $5$ çift siyah ve $5$ çift kahverengi eldiven vardır. Her çiftte bir sağ el, bir sol el eldiveni bulunur; aynı renkteki ve aynı ele ait eldivenler birbirinden ayırt edilemez. Çekmeceye bakılmadan eldiven alınıyor. Alınanlar arasında **aynı renkten bir sağ ve bir sol** eldiven bulunmasının kesin olması için en az kaç eldiven alınmalıdır?",
      options: ["$2$", "$3$", "$6$", "$10$", "$11$"],
      correct: 4,
      solution: [
        "Bu soruda kutular yalnız renkler değildir; bir eldivenin rengi ve hangi ele ait olduğu birlikte önemlidir.",
        "Alınanlar arasında aynı renkten bir sağ ve bir sol eldiven yoksa, her renkten alınan eldivenlerin hepsi aynı ele aittir. Bir renkte bir elin en çok $5$ eldiveni vardır; bu yüzden böyle bir seçimde her renkten en çok $5$, toplamda en çok $10$ eldiven bulunabilir.",
        "$10$ eldiven, aynı renkten bir sağ–sol çifti oluşmadan gerçekten alınabilir: örneğin $5$ siyah sol ve $5$ kahverengi sol eldiven ya da $5$ siyah sol ve $5$ kahverengi sağ eldiven. Yani $10$ eldiven yetmez.",
        "$11$ eldiven alınırsa bu sınır aşılır; demek ki bir renkte hem sağ hem sol eldiven bulunmak zorundadır. Cevap $10+1=11$.",
        "Yaygın hatalar: sağ–sol ayrımını unutup yalnız renklere bakarak $2+1=3$ bulmak; tek rengin sol eldivenlerini düşünüp $5+1=6$ bulmak; en kötü durumu doğru kurup $+1$'i unutmak ($10$); ilk iki eldivenin çift olabileceği en iyi durumu düşünmek ($2$).",
      ],
      answer: "$11$",
    },
    {
      id: "dahil-etme-haric-tutma-07",
      difficulty: "Orta",
      prompt:
        "$1$'den $15$'e kadar olan tam sayılar ($1$ ve $15$ dahil) arasından birbirinden farklı sayılar seçilecektir. En az kaç sayı seçilirse, seçilenler arasında **toplamı $16$ olan** iki sayının bulunduğu kesindir?",
      options: ["$2$", "$7$", "$8$", "$9$", "$15$"],
      correct: 3,
      solution: [
        "Kutuları toplamı $16$ olan çiftler olarak kuralım: $\\{1,15\\}, \\{2,14\\}, \\{3,13\\}, \\{4,12\\}, \\{5,11\\}, \\{6,10\\}, \\{7,9\\}$. Bunlar $7$ kutudur.",
        "$8$'in eşi yine $8$ olurdu; ama sayılar farklı seçildiği için $8$ hiçbir çifte girmez. $\\{8\\}$ ayrı bir kutudur. Toplam $8$ kutu vardır.",
        "En şanssız durum: her çiftten bir sayı ve $8$ seçilir, örneğin $1,2,3,4,5,6,7,8$. Bu $8$ sayıda toplamı $16$ olan iki sayı yoktur.",
        "Şimdi her $9$ sayılık seçimde böyle bir çiftin bulunduğunu gösterelim. $9$ sayı $8$ kutuya dağılırsa iki sayı aynı kutuya düşer. $\\{8\\}$ kutusuna yalnız bir sayı girebilir (sayılar farklıdır); bu yüzden aynı kutuya düşen iki sayı aynı çifttedir ve toplamları $16$'dır. Cevap $8+1=9$.",
        "Örnekteki $1,2,\\dots,8$ seçiminde de bunu görürüz: $9$. sayı $9$–$15$ arasından olmak zorundadır ve seçilmiş eşiyle toplamı $16$ yapar.",
        "Yaygın hatalar: $8$'i ayrı kutu saymayıp $7+1=8$ bulmak ya da $8$ kutu bulup $+1$'i unutmak; yalnız çift sayısını ($7$) yazmak; ilk iki sayının $1$ ve $15$ gelebileceği en iyi durumu düşünmek ($2$); en kötü durumda bir çiftin iki sayısının da seçilebileceğini sanıp $2\\cdot 7+1=15$ bulmak (oysa bir çiftin iki sayısı birlikte seçilirse toplamı $16$ olan iki sayı zaten bulunur).",
      ],
      answer: "$9$",
    },
    {
      id: "dahil-etme-haric-tutma-08",
      difficulty: "Orta",
      prompt:
        "Bir sınıfta numaralı $6$ sıra bulunur ve $6$ öğrencinin her birinin kendine ait bir sırası vardır. Öğrenciler her sıraya bir öğrenci oturacak biçimde yeniden oturacaktır. **En az $4$ öğrencinin** kendi sırasına oturduğu kaç farklı oturuş vardır?",
      options: ["$15$", "$16$", "$21$", "$22$", "$30$"],
      correct: 1,
      solution: [
        "\"En az $4$\" demek tam $4$, tam $5$ veya tam $6$ öğrencinin kendi sırasında olması demektir. Bu durumlar ayrıktır; ayrı ayrı sayıp toplarız.",
        "Tam $4$: kendi sırasına oturacak $4$ öğrenci $C(6,4)=15$ biçimde seçilir; kalan $2$ öğrencinin ikisi de kendi sırasında olmamalıdır, bu da $D_2=1$ biçimde olur (yer değiştirirler). $15\\cdot 1=15$.",
        "Tam $5$: imkânsızdır. $5$ öğrenci kendi sırasındaysa geriye kalan tek sıra altıncı öğrencinin kendi sırasıdır. Sayı $0$.",
        "Tam $6$: herkes kendi sırasında, $1$ oturuş.",
        "Toplam: $15+0+1=16$.",
        "Yaygın hatalar: yalnız tam $4$'ü sayıp $15$ yazmak; tam $5$'i $C(6,5)=6$ sanıp tam $6$'yı unutmak ($15+6=21$); tam $5$'i $6$ sanıp tam $6$'yı da eklemek ($15+6+1=22$); kalan $2$ öğrenciyi serbest bırakıp $C(6,4)\\cdot 2!=30$ yazmak (bu, herkesin kendi sırasında olduğu oturuşu $15$ kez sayar).",
      ],
      answer: "$16$",
    },
    {
      id: "dahil-etme-haric-tutma-09",
      difficulty: "Orta",
      prompt:
        "$1$'den $300$'e kadar olan tam sayılardan ($1$ ve $300$ dahil) kaç tanesi $2$, $3$ ve $5$ sayılarından **yalnız birine** bölünür?",
      options: ["$110$", "$120$", "$140$", "$210$", "$220$"],
      correct: 2,
      solution: [
        "Tek kümeler: $2$'ye bölünen $150$, $3$'e bölünen $100$, $5$'e bölünen $60$. Toplam $S_1=310$.",
        "İkili kesişimler ($\\text{EKOK}$'lar $6$, $10$, $15$): $50+30+20$, toplam $S_2=100$. Üçlü kesişim ($30$'un katları): $S_3=10$.",
        "Yalnız $2$'ye bölünenler: $150-50-30+10=80$. Yalnız $3$'e: $100-50-20+10=40$. Yalnız $5$'e: $60-30-20+10=20$.",
        "Yalnız birine bölünenler: $80+40+20=140$. Genel kalıp: $S_1-2S_2+3S_3=310-200+30=140$.",
        "Neden $3S_3$? Üçüne de bölünen bir sayı $S_1$'de $3$ kez sayılır, $2S_2$'de $6$ kez çıkarılır; sıfır kez sayılması için $3$ kez geri eklenmelidir.",
        "Yaygın hatalar: $S_1-2S_2=110$ (üçlüyü geri eklememek), $S_1-2S_2+S_3=120$ (üçlüyü bir kez eklemek), $S_1-S_2=210$ (ikilileri bir kez çıkarmak), $220$ (\"en az biri\" sayısını yazmak).",
      ],
      answer: "$140$",
    },
    {
      id: "dahil-etme-haric-tutma-10",
      difficulty: "Zor",
      prompt:
        "Ali ile Ayşe bir çift, Can ile Ece başka bir çifttir. Bu dört kişi ile arkadaşları Deniz ve Efe, toplam $6$ kişi, düz bir sırada yan yana dizilecektir. **Ali ile Ayşe yan yana olmayacak ve Can ile Ece de yan yana olmayacak** biçimde kaç farklı diziliş vardır?",
      options: ["$240$", "$336$", "$384$", "$480$", "$624$"],
      correct: 1,
      solution: [
        "Tüm dizilişler: $6!=720$.",
        "$A$: Ali ile Ayşe yan yana. İkisini tek blok sayarsak $5$ birim $5!$ biçimde dizilir, blok kendi içinde $2$ biçimde: $s(A)=2\\cdot 120=240$. Benzer biçimde $s(B)=240$ (Can ile Ece yan yana).",
        "$A\\cap B$: iki çift de yan yana. İki blok ve $2$ kişi, $4$ birim: $4!\\cdot 2\\cdot 2=96$.",
        "En az bir çift yan yana: $240+240-96=384$.",
        "Hiçbir çift yan yana değil: $720-384=336$.",
        "Yaygın hatalar: kesişimi geri eklemeyip $720-480=240$ bulmak; yalnız bir çifti düşünüp $720-240=480$ bulmak; \"iki çift birden yan yana olmasın\" diye okuyup $720-96=624$ yazmak; tümleyeni almadan $384$ yazmak.",
      ],
      answer: "$336$",
    },
    {
      id: "dahil-etme-haric-tutma-11",
      difficulty: "Zor",
      prompt:
        "Bir torbada $8$ kırmızı, $5$ mavi, $3$ beyaz ve $2$ yeşil top vardır. Toplar yalnız renkleriyle ayırt edilir; torbaya bakılmadan ve geri atılmadan birer birer çekilir. Çekilen toplar arasında **aynı renkten $4$ top bulunması henüz kesin olmayacak** biçimde **en çok** kaç top çekilebilir?",
      options: ["$9$", "$10$", "$11$", "$12$", "$13$"],
      correct: 2,
      solution: [
        "Soru ters yöndendir: aynı renkten $4$ top içermeyen en uzun çekilişi, yani en kötü durumu arıyoruz.",
        "Aynı renkten $4$ top olmaması için her renkten en çok $3$ top çekilebilir; ama torbada $3$'ten az topu olan bir renkten ancak o kadar top çekilebilir.",
        "Kırmızıdan $3$, maviden $3$, beyazdan $3$ (torbadaki bütün beyazlar) ve yeşilden $2$ (torbadaki bütün yeşiller): $3+3+3+2=11$ top. Bu çekilişte aynı renkten $4$ top yoktur.",
        "$12$. top kırmızı ya da mavi olmak zorundadır (beyaz ve yeşil toplar tükenmiştir) ve o rengin $4$. topu olur. Yani $11$ top çekildiğinde aynı renkten $4$ top kesin değildir, $12$ top çekildiğinde kesindir. Cevap $11$.",
        "Yaygın hatalar: renklerin top sayılarına bakmadan $4\\cdot 3=12$ yazmak (yeşilden $3$ top çekilebileceğini varsaymak) ya da bunun bir fazlası olan $13$'ü yazmak; en kötü durumu doğru kurup \"en az kaç top çekilmeli ki kesin olsun\" sorusunun cevabı olan $11+1=12$'yi yazmak; yeşil $4$ topa ulaşamadığı için yeşil topları en kötü duruma hiç katmamak ($3+3+3=9$) ya da bunun bir fazlası olan $10$'u yazmak.",
      ],
      answer: "$11$",
    },
    {
      id: "dahil-etme-haric-tutma-12",
      difficulty: "Zor",
      prompt:
        "$1$'den $30$'a kadar olan tam sayılar ($1$ ve $30$ dahil) arasından birbirinden farklı sayılar seçilecektir. En az kaç sayı seçilirse, seçilenler arasında **toplamı $3$'e bölünen** iki sayının bulunduğu kesindir?",
      options: ["$2$", "$3$", "$4$", "$11$", "$12$"],
      correct: 4,
      solution: [
        "Sayıları $3$'e bölümünden kalana göre ayıralım: kalanı $0$ olan $10$, kalanı $1$ olan $10$, kalanı $2$ olan $10$ sayı var.",
        "İki sayının toplamı $3$'e bölünür $\\iff$ ikisinin de kalanı $0$'dır ya da biri $1$, diğeri $2$ kalanlıdır.",
        "Toplamı $3$'e bölünen iki sayı içermeyen bir seçimde: kalanı $0$ olanlardan en çok $1$ sayı bulunabilir; kalanı $1$ olanlarla kalanı $2$ olanlardan ise yalnız bir sınıfın sayıları bulunabilir ve o sınıfın $10$ sayısının hepsi alınabilir.",
        "En şanssız durum: örneğin $3$ ile birlikte $1, 4, 7, \\dots, 28$ ($10$ sayı), toplam $11$ sayı. Bunların hiçbir ikisinin toplamı $3$'e bölünmez.",
        "$12$. sayı ya kalanı $0$ olan ikinci bir sayıdır ya da kalanı $2$ olan bir sayıdır; her iki durumda da toplamı $3$'e bölünen bir çift oluşur. Cevap $11+1=12$.",
        "Yaygın hatalar: $0$ kalanını ayrı bir kutu saymayıp en kötü durumu $10$ sayı sanmak ($11$); kalanı $0$ olan iki sayının toplamının da $3$'e bölündüğünü unutup $20+1=21$ bulmak; yalnız $3$ kalan kutusuna bakıp $3$ ya da $4$ yazmak; en iyi durumu düşünüp $2$ yazmak.",
      ],
      answer: "$12$",
    },
  ],
};

export default quiz;
