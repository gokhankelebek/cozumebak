import type { TopicSoruTipleri } from "./types";

// Optimizasyon (AYT · Türev). Teacher's catalogue of how ÖSYM asks this topic.
// Ordered easy→hard. Every örnek is hand-verified; celdiriciler map each
// classic wrong answer to the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "optimizasyon",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "optimizasyon-01-cevre-sabit-alan",
      ad: "Çevre sabit → alan maksimum (dikdörtgen)",
      aciklama:
        "Çevresi verilen dikdörtgenin en büyük alanı istenir. Kısıttan y çekilir, alan tek değişkene iner; cevap her zaman karede çıkar.",
      yontem: [
        "Kenarlar x ve y; çevre kısıtı 2x+2y=Ç ⇒ y=Ç/2−x.",
        "Alanı tek değişkenle yaz: A(x)=x⋅(Ç/2−x).",
        "A′(x)=0 çöz; A″<0 ile maksimum olduğunu doğrula.",
        "Kontrol: en büyük alan x=y (kare) iken çıkmalı.",
      ],
      celdiriciler: [
        { hata: "Çevre kısıtında 2'leri unutup y=Ç−x almak", uretir: "Örnekte A=x(40−x) ⇒ x=20, alan 400 (doğrusu 100)" },
        { hata: "x=10 bulup alanı hesaplamadan kenarı işaretlemek", uretir: "Alan yerine 10 cevabı" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      kombinasyon: ["turev-alma-kurallari"],
      ornek: {
        soru: "Çevresi 40 m olan dikdörtgen biçimli bir bahçenin alanı en çok kaç m² olabilir?",
        cevap: "y=20−x, A(x)=x(20−x)=20x−x²; A′=20−2x=0 ⇒ x=10, y=10, A=100 m²",
      },
    },
    {
      id: "optimizasyon-02-toplam-sabit-carpim",
      ad: "Toplamı sabit iki sayının çarpımı maksimum",
      aciklama:
        "Toplamları verilen iki (pozitif) sayının çarpımı ya da x²⋅y gibi ağırlıklı çarpımı en büyük yapılır. Sözel kılıfı en sade optimizasyon kalıbı.",
      yontem: [
        "Sayılar x ve y; kısıt x+y=S ⇒ y=S−x.",
        "Çarpımı tek değişkenle yaz (ör. f(x)=x²(S−x)).",
        "f′(x)=0 çöz; x=0 gibi uç adayları ele, ikinci türevle doğrula.",
        "İstenen çarpım değerini hesapla — sayıları değil çarpımı işaretle.",
      ],
      celdiriciler: [
        { hata: "Türev almadan sayıları eşit bölmek (x=y sanmak)", uretir: "Örnekte 6²⋅6=216 (doğrusu 256) — eşit bölme yalnız düz çarpımda çalışır" },
        { hata: "f′=0'ın x=0 kökünü aday diye işaretlemek", uretir: "Çarpım 0 — minimum ucu" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "Toplamları 12 olan iki pozitif sayıdan birinin karesi ile diğerinin çarpımı en çok kaçtır?",
        cevap: "f(x)=x²(12−x)=12x²−x³; f′=24x−3x²=3x(8−x)=0 ⇒ x=8, y=4; 8²⋅4=256",
      },
    },
    {
      id: "optimizasyon-03-kutu-katlama",
      ad: "Köşelerden kare kesip kutu katlama (klasik)",
      aciklama:
        "Kartonun dört köşesinden x×x kare kesilip üstü açık kutu yapılır; hacmi en büyük yapan x veya en büyük hacim istenir. Konunun en klasik sorusu.",
      yontem: [
        "Boyutları yaz: yükseklik x, taban kenarları (a−2x) ve (b−2x).",
        "Tanım aralığını belirle: taban kenarları pozitif olmalı.",
        "V(x)=x(a−2x)(b−2x) kur, V′(x)=0 çöz.",
        "Tanım aralığı DIŞINDAKİ kökü ele; kalan adayı işaret değişimiyle doğrula.",
      ],
      celdiriciler: [
        { hata: "Her kenardan iki köşe kesildiğini unutup taban kenarını a−x almak", uretir: "Örnekte V=x(12−x)² ⇒ x=4, V=256 (doğrusu 128)" },
        { hata: "Tanım aralığı dışındaki kökü elemeden işleme sokmak", uretir: "V=0 veren sınır değeri ya da negatif taban" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["turev-alma-kurallari"],
      ornek: {
        soru: "Kenarı 12 cm olan kare kartonun dört köşesinden x×x kareler kesilip üstü açık kutu yapılıyor. Kutunun hacmi en çok kaç cm³ olur?",
        cevap: "V(x)=x(12−2x)², V′=(12−2x)(12−6x)=0 ⇒ x=2 (x=6 sınırda elenir); V(2)=2⋅8²=128 cm³",
      },
    },
    {
      id: "optimizasyon-04-prizma-hacim-yuzey",
      ad: "Kare tabanlı prizma: hacim sabit → yüzey minimum",
      aciklama:
        "Hacmi verilen kare tabanlı (çoğunlukla üstü açık) kutunun en az malzemeyle yapılması istenir. Kısıttan h çekilir, yüzey x'e bağlanır; x³=sabit denklemi çıkar.",
      yontem: [
        "Taban kenarı x, yükseklik h; hacim kısıtı x²h=V ⇒ h=V/x².",
        "Yüzeyi doğru kur: üstü açıksa A=x²+4xh; kapalıysa A=2x²+4xh — soruyu iki kez oku.",
        "h'yi yerine koy, A(x)'i tek değişkene indir; A′(x)=0'dan x³ değerini çöz.",
        "A″>0 ile minimum olduğunu doğrula; istenirse h'yi de hesapla.",
      ],
      celdiriciler: [
        { hata: "Üstü açık kutuda kapak alanını da eklemek (2x² yazmak)", uretir: "Örnekte x³=32 ⇒ x=2∛4 — tam sayı çıkmayan değer" },
        { hata: "Yan yüz sayısını 4 yerine 2 almak", uretir: "x³=2V'den şişkin bir x değeri" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      kombinasyon: ["ikinci-turev-konkavlik"],
      ornek: {
        soru: "Hacmi 32 birim küp olan, kare tabanlı ve üstü açık bir kutunun yüzey alanını en küçük yapan taban kenarı x kaçtır?",
        cevap: "h=32/x², A(x)=x²+4x⋅32/x²=x²+128/x; A′=2x−128/x²=0 ⇒ x³=64 ⇒ x=4 (h=2)",
      },
    },
    {
      id: "optimizasyon-05-maliyet-gelir",
      ad: "Maliyet / gelir / kâr fonksiyonunda maks–min",
      aciklama:
        "Kâr, gelir veya maliyet fonksiyonu doğrudan verilir; en büyük kâr ya da en küçük maliyet istenir. Kurulum hazırdır, iş türev-doğrulama-değer hesabındadır.",
      yontem: [
        "Fonksiyonun türevini al, sıfırla: kritik üretim/satış miktarını bul.",
        "İkinci türevin işaretiyle maks mı min mi olduğunu doğrula.",
        "Kritik miktarı fonksiyonda YERİNE KOY — soru miktarı değil, en büyük/küçük DEĞERİ ister.",
      ],
      celdiriciler: [
        { hata: "K′=0 yerine K=0 çözmek (başabaş noktasıyla karıştırmak)", uretir: "Örnekte x=10 veya x=50 — kâr değil kök" },
        { hata: "Kârı en büyük yapan miktarı (x) en büyük kâr sanmak", uretir: "Örnekte 800 yerine 30 cevabı" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "Bir ürünün x adet satılmasından elde edilen kâr K(x)=−2x²+120x−1000 TL'dir. En büyük kâr kaç TL'dir?",
        cevap: "K′(x)=−4x+120=0 ⇒ x=30; K″=−4<0 (maks); K(30)=−1800+3600−1000=800 TL",
      },
    },
    {
      id: "optimizasyon-06-egriye-en-yakin-nokta",
      ad: "Eğri üzerindeki noktanın bir noktaya en yakın olması",
      aciklama:
        "Eğri üzerinde, verilen bir noktaya en yakın noktanın apsisi/ordinatı ya da en kısa uzaklık istenir. Kök türevinden kaçmak için uzaklığın KARESİ minimize edilir.",
      yontem: [
        "Eğri üzerindeki nokta (x, f(x)); uzaklık karesini yaz: d²=(x−a)²+(f(x)−b)².",
        "Eğri denklemini yerine koyup d²'yi tek değişkenli polinoma indir — kök almadan çalış.",
        "(d²)′=0 çöz; ikinci türevle minimum olduğunu doğrula.",
        "İstenene dikkat: apsis mi, nokta mı, uzaklığın kendisi mi? Uzaklık istenirse EN SONDA kök al.",
      ],
      celdiriciler: [
        { hata: "Eğri denklemini yerine koymayı unutup y'yi sabit gibi türevlemek", uretir: "Örnekte x=3 — noktanın kendi apsisi" },
        { hata: "d² yerine köklü d ile uğraşıp iç türevde hata yapmak", uretir: "Kritik nokta aynı ama işlem hatasıyla kayan değer" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["turev-alma-kurallari", "ikinci-turev-konkavlik"],
      ornek: {
        soru: "y=√x eğrisi üzerinde A(3, 0) noktasına en yakın olan noktanın apsisi kaçtır?",
        cevap: "d²=(x−3)²+(√x)²=x²−5x+9; (d²)′=2x−5=0 ⇒ x=5/2; (d²)″=2>0 (min)",
      },
    },
  ],
};

export default kb;
