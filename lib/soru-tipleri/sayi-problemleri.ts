import type { TopicSoruTipleri } from "./types";

// Sayı Problemleri (TYT · Problemler). Teacher's catalogue of how ÖSYM asks
// this topic. TYT'nin en büyük bloğunun çekirdeği: sözel cümleyi denkleme
// çevirme becerisi. Ordered easy→hard. Every örnek is hand-verified;
// celdiriciler map each classic wrong answer to the exact mistake behind it.
const kb: TopicSoruTipleri = {
  slug: "sayi-problemleri",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "sayi-problemleri-01-denkleme-cevirme",
      ad: "Cümleyi denkleme çevirme (katının fazlası/eksiği)",
      aciklama:
        "'Bir sayının 3 katının 5 fazlası 26'dır' tipi tek bilinmeyenli çeviri sorusu. Konunun kapı sorusu; kat=çarpma, fazlası/eksiği=toplama-çıkarma sözlüğü her şeyi belirler.",
      yontem: [
        "Aranan sayıya x de; cümleyi SOLDAN SAĞA parça parça çevir.",
        "'3 katının 5 fazlası' = 3x+5 (önce kat, sonra fazlası).",
        "Denklemi çöz, sonucu cümleye geri koyup sağla.",
      ],
      celdiriciler: [
        { hata: "'Katının fazlası'nı '(x+5)'in 3 katı' diye okumak: 3(x+5)=26", uretir: "x=11/3 — tam çıkmayan değer, en yakın şıkka savrulma" },
        { hata: "Sayı istenirken 3 katını işaretlemek", uretir: "7 yerine 21" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      kombinasyon: ["birinci-derece-denklem-tyt"],
      ornek: { soru: "Bir sayının 3 katının 5 fazlası 26 ise bu sayı kaçtır?", cevap: "3x+5=26 ⇒ 3x=21 ⇒ x=7 (sağlama: 3⋅7+5=26)" },
    },
    {
      id: "sayi-problemleri-02-ardisik-sayilar",
      ad: "Ardışık sayılar (toplamdan sayı bulma)",
      aciklama:
        "Ardışık üç-dört sayının toplamı verilir, biri istenir. Kritik ayrım: ardışık TAM sayılar 1'er, ardışık TEK/ÇİFT sayılar 2'şer artar.",
      yontem: [
        "Ardışık tam sayılar: x, x+1, x+2 — tek/çift ise x, x+2, x+4.",
        "Toplamı denkleme dök, x'i çöz.",
        "İstenen 'en büyük' mü 'ortanca' mı — x'i değil onu ver.",
      ],
      celdiriciler: [
        { hata: "Tek sayıları x, x+1, x+2 diye 1'er artırmak", uretir: "3x+3=45'ten x=14 — tek olmayan sayı" },
        { hata: "En büyük istenirken en küçüğü (x'i) işaretlemek", uretir: "17 yerine 13" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      kombinasyon: ["ardisik-sayilar"],
      ornek: { soru: "Ardışık üç tek sayının toplamı 45 ise en büyüğü kaçtır?", cevap: "x+(x+2)+(x+4)=45 ⇒ 3x+6=45, x=13 ⇒ en büyük 17 (13+15+17=45)" },
    },
    {
      id: "sayi-problemleri-03-toplam-fark",
      ad: "Toplam–fark tipi (iki bilinmeyenli sistem)",
      aciklama:
        "İki sayının toplamı ve farkı (ya da biri diğerinin katı) verilir. İki denklemli sistemin en yumuşak hâli; taraf tarafa toplamak bilinmeyeni anında düşürür.",
      yontem: [
        "Büyüğe x, küçüğe y de: x+y = 40, x−y = 12.",
        "Taraf tarafa topla: 2x = 52 ⇒ x = 26.",
        "Pratik formül: büyük = (toplam+fark)/2, küçük = (toplam−fark)/2.",
      ],
      celdiriciler: [
        { hata: "Formülü ters kullanıp büyüğü (toplam−fark)/2 ile hesaplamak", uretir: "26 yerine küçük sayı 14" },
        { hata: "Toplamın yarısına farkın tamamını eklemek (20+12)", uretir: "32" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "İki sayının toplamı 40, farkı 12 ise büyük sayı kaçtır?", cevap: "Büyük = (40+12)/2 = 26 (sağlama: 26+14=40, 26−14=12)" },
    },
    {
      id: "sayi-problemleri-04-kesir-zinciri",
      ad: "Kesir problemleri ('kalanın ...si' zinciri)",
      aciklama:
        "Para/elma/yakıt hikâyesi: önce bütünün bir kesri, sonra KALANIN bir kesri harcanır, kalan miktar verilir. Tuzağın tamamı 'kalanın' kelimesinde gizlidir.",
      yontem: [
        "Bütüne x de. Her adımda KALAN kesri çarp: 1/3 harcandıysa kalan 2/3⋅x.",
        "'Kalanın 1/4'ü' ⇒ elde kalan (3/4)⋅(2/3)⋅x = x/2.",
        "Son kalanı verilen sayıya eşitle, x'i çöz; adım adım geri sağla.",
      ],
      celdiriciler: [
        { hata: "'Kalanın 1/4'ünü' bütünün 1/4'ü sanıp 1−1/3−1/4=5/12 ile kurmak", uretir: "(5/12)x=36'dan x=86,4 — tam çıkmayan değer" },
        { hata: "İlk harcamadan sonraki ara kalanı cevap sanmak", uretir: "72 yerine 48" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["rasyonel-sayilar", "oran-oranti-tyt"],
      ornek: {
        soru: "Bir kişi parasının önce 1/3'ünü, sonra kalanın 1/4'ünü harcıyor; geriye 36 TL kalıyor. Başlangıçtaki parası kaç TL'dir?",
        cevap: "Kalan = (2/3)⋅(3/4)⋅x = x/2 = 36 ⇒ x=72 (sağlama: 72→24 harca, 48 kalır→12 harca, 36 kalır)",
      },
    },
    {
      id: "sayi-problemleri-05-basamak",
      ad: "Basamak problemleri (rakamları yer değiştirme)",
      aciklama:
        "İki basamaklı sayının rakamları yer değişince sayının 27 artması/azalması tipi. Fark HER ZAMAN 9(b−a)'dır; bunu bilen soruyu 20 saniyede bitirir.",
      yontem: [
        "Sayıyı 10a+b, yer değiştirmişini 10b+a yaz.",
        "Fark: (10b+a)−(10a+b) = 9(b−a) — artışı buna eşitle.",
        "Rakam toplamı denklemiyle birleştirip a ve b'yi çöz; a rakam olmalı (1–9).",
      ],
      celdiriciler: [
        { hata: "Artışı ters yönde yazmak: (10a+b)−(10b+a)=27 kurmak", uretir: "b−a=−3'ten 63 — yani yer değiştirmiş sayının kendisi" },
        { hata: "9 parantezini görmeyip b−a=27 sanmak", uretir: "b=15 gibi rakam olamayacak değer" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["sayi-basamaklari"],
      ornek: {
        soru: "İki basamaklı bir sayının rakamları yer değiştirince sayı 27 artıyor. Rakamları toplamı 9 ise bu sayı kaçtır?",
        cevap: "9(b−a)=27 ⇒ b−a=3; a+b=9 ⇒ b=6, a=3 ⇒ sayı 36 (sağlama: 63−36=27)",
      },
    },
    {
      id: "sayi-problemleri-06-bolme-ozdesligi",
      ad: "Bölme özdeşliğiyle sayı bulma (bölüm–kalan)",
      aciklama:
        "'Büyük sayı küçüğe bölününce bölüm 4, kalan 7' tipi: bölme özdeşliği B = bölen⋅bölüm + kalan ile ikinci bilgi (fark/toplam) birleştirilir.",
      yontem: [
        "Özdeşliği yaz: Büyük = 4⋅küçük + 7.",
        "İkinci bilgiyi denkleme dök: Büyük − küçük = 58.",
        "Yerine koy: 4k+7−k = 58 ⇒ k'yı çöz. Kalan < bölen kontrolünü yap.",
      ],
      celdiriciler: [
        { hata: "Kalanı çıkarmak: Büyük = 4k−7 yazmak", uretir: "3k−7=58'den tam çıkmayan k" },
        { hata: "Farkı toplam okuyup Büyük + küçük = 58 kurmak", uretir: "5k+7=58'den kesirli değer" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      kombinasyon: ["bolme-bolunebilme"],
      ornek: {
        soru: "İki sayının farkı 58'dir. Büyük sayı küçüğe bölününce bölüm 4, kalan 7 oluyor. Küçük sayı kaçtır?",
        cevap: "B=4k+7 ve B−k=58 ⇒ 3k+7=58, k=17 (sağlama: B=75=4⋅17+7, 75−17=58, kalan 7<17)",
      },
    },
    {
      id: "sayi-problemleri-07-esitsizlik-en-az-en-cok",
      ad: "En az / en çok — eşitsizlikli sayı sorusu (sınav ayarı)",
      aciklama:
        "Toplam sabitken 'b en az kaçtır?' tipi. Denklem değil sınır mantığı ister: koşulu eşitsizliğe çevirip tam sayı sınırına yuvarlamak. TYT'nin eleyici sorusu.",
      yontem: [
        "Koşulu eşitsizlik olarak yaz: a < b ve a+b = 27.",
        "a'yı yok et: a = 27−b ⇒ 27−b < b ⇒ b > 13,5.",
        "Tam sayı sınırına DOĞRU yönde yuvarla: b en az 14. Uç değeri sağlayarak kontrol et.",
      ],
      celdiriciler: [
        { hata: "13,5'i aşağı yuvarlamak (a<b koşulunu esnetmek)", uretir: "14 yerine 13 — o zaman a=14>b olur, koşul bozulur" },
        { hata: "'En az' isterken 'en çok' mantığıyla a'yı 1 almak", uretir: "26" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["birinci-derece-denklem-tyt"],
      ornek: {
        soru: "a ve b pozitif tam sayılar, a < b ve a+b = 27 ise b en az kaçtır?",
        cevap: "27−b < b ⇒ b > 13,5 ⇒ b en az 14 (sağlama: a=13, b=14 ⇒ 13<14 ve toplam 27)",
      },
    },
  ],
};

export default kb;
