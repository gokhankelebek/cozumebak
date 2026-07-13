import type { TopicSoruTipleri } from "./types";

// Temel Kavramlar (TYT · Temel Kavramlar kümesi). Teacher's catalogue of how
// ÖSYM asks this topic. Ordered easy→hard. Every örnek is hand-verified;
// celdiriciler map each classic wrong answer to the exact mistake behind it.
const kb: TopicSoruTipleri = {
  slug: "temel-kavramlar",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "temel-kavramlar-01-sayi-kumeleri",
      ad: "Sayı kümeleri üyeliği (rasyonel mi, irrasyonel mi?)",
      aciklama:
        "Verilen sayı listesinden kaçının rasyonel/irrasyonel/tam sayı olduğu sorulur. Tuzak hep köklü sayılarda: kök içi tam kareyse sonuç rasyoneldir.",
      yontem: [
        "Her sayıyı en sade biçimine getir: √9=3, 12/4=3 gibi.",
        "Kök içi tam kare ⇒ rasyonel; tam kare değil ⇒ irrasyonel (√7, √12 gibi).",
        "π ve e her zaman irrasyoneldir; devirli/sonlu ondalıklar rasyoneldir.",
        "İstenen kümeye uyanları say.",
      ],
      celdiriciler: [
        { hata: "Her köklü sayıyı irrasyonel sanmak (√9'u da saymak)", uretir: "Doğru adetten 1-2 fazla" },
        { hata: "π'yi 22/7 diye rasyonel saymak", uretir: "Doğru adetten 1 eksik/fazla" },
        { hata: "0'ı hiçbir kümeye koymamak (0 doğal sayıdır)", uretir: "Eksik sayım" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "√9, π, −5, 2/3, √7 sayılarından kaç tanesi irrasyoneldir?",
        cevap: "√9=3 rasyonel, −5 tam, 2/3 rasyonel; irrasyoneller π ve √7 ⇒ 2 tane",
      },
    },
    {
      id: "temel-kavramlar-02-islem-onceligi",
      ad: "İşlem önceliği (dört işlem sırası)",
      aciklama:
        "Bölme/çarpma ile toplama/çıkarmanın karışık verildiği düz hesap sorusu. Sınavın açılış sorusu; hata tamamen sıra ihlalinden gelir.",
      yontem: [
        "Önce parantez içleri, sonra üs alma.",
        "Sonra çarpma ve bölme (soldan sağa), en son toplama ve çıkarma.",
        "Her adımı ayrı satırda yaz; zihinden zincirleme yapma.",
      ],
      celdiriciler: [
        { hata: "İşlemleri soldan sağa sırayla yapmak (önceliği yok saymak)", uretir: "16−12÷4+2⋅3 için 9 gibi kaymış değer" },
        { hata: "Çıkarmayı bölmeden önce yapmak", uretir: "Yanlış ara sonuçtan türeyen değer" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "16 − 12 ÷ 4 + 2⋅3 işleminin sonucu kaçtır?",
        cevap: "16 − 3 + 6 = 19",
      },
    },
    {
      id: "temel-kavramlar-03-negatif-isaret",
      ad: "Negatif sayılarla işlem (işaret kuralları ve üsler)",
      aciklama:
        "Negatif tabanın çift/tek kuvveti ve −a² ile (−a)² ayrımı. Kısa görünür ama işaret hatası şıklarda birebir bekletilir.",
      yontem: [
        "(−a)ⁿ: n çiftse sonuç pozitif, n tekse negatif.",
        "−a² ifadesinde üs yalnız a'ya aittir: −a² = −(a²).",
        "Çıkarma içindeki negatif sonucu parantezle taşı: 9 − (−8) = 9 + 8.",
      ],
      celdiriciler: [
        { hata: "(−3)² değerini −9 almak", uretir: "−9 − (−8) = −1" },
        { hata: "(−2)³ değerini +8 almak", uretir: "9 − 8 = 1" },
        { hata: "Eksi ile eksinin çarpımını eksi sanmak", uretir: "İşaretçe ters sonuç" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "(−3)² − (−2)³ işleminin sonucu kaçtır?",
        cevap: "9 − (−8) = 9 + 8 = 17",
      },
    },
    {
      id: "temel-kavramlar-04-aralik-uc-deger",
      ad: "x−y türü ifadenin en büyük / en küçük değeri (aralıktan uç seçimi)",
      aciklama:
        "x ve y tam sayıları aralıklarla verilir; x−y, x+y veya x⋅y ifadesinin en büyük/en küçük tam sayı değeri istenir. Açık aralıkta uç değerlerin dahil olmadığını görmek işin kalbi.",
      yontem: [
        "Açık aralıksa (< işareti) uçlar dahil değildir; alınabilen en uç TAM SAYILARI belirle.",
        "Farkı en küçük yapmak için x'i en küçük, y'yi en büyük seç.",
        "Farkı en büyük yapmak için x'i en büyük, y'yi en küçük seç.",
        "Seçtiğin değerleri yerine koyup hesapla.",
      ],
      celdiriciler: [
        { hata: "Açık aralığın uçlarını dahil saymak (x=−3, y=7 almak)", uretir: "−3 − 7 = −10" },
        { hata: "En küçük fark için x büyük, y küçük seçmek (yönleri karıştırmak)", uretir: "En büyük değeri en küçük diye vermek" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["tek-cift-sayilar", "sayi-problemleri"],
      ornek: {
        soru: "x ve y tam sayılar, −3 < x < 5 ve 2 < y < 7 ise x − y en az kaçtır?",
        cevap: "x en küçük −2, y en büyük 6 ⇒ −2 − 6 = −8",
      },
    },
    {
      id: "temel-kavramlar-05-faktoriyel",
      ad: "Faktöriyel içeren temel hesap",
      aciklama:
        "Faktöriyellerin bölüm/toplamı sadeleştirilerek hesaplanır. Büyük faktöriyeli açmadan sadeleştirmek beklenir.",
      yontem: [
        "n! = n⋅(n−1)! açılımıyla büyük faktöriyeli küçüğü cinsinden yaz.",
        "Bölümlerde ortak faktöriyeli sadeleştir, kalan çarpımı hesapla.",
        "0! = 1 ve 1! = 1 olduğunu unutma.",
      ],
      celdiriciler: [
        { hata: "Paydadaki 2! çarpanını unutmak", uretir: "6!/4! = 30 (doğru 15 yerine)" },
        { hata: "6!/4! ifadesini (6/4)! gibi sadeleştirmek", uretir: "Tanımsız/anlamsız değer" },
        { hata: "0! = 0 almak", uretir: "Paydası sıfırlanan ya da 1 eksik sonuç" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      ornek: {
        soru: "6! ÷ (4!⋅2!) işleminin sonucu kaçtır?",
        cevap: "720 ÷ (24⋅2) = 720 ÷ 48 = 15",
      },
    },
    {
      id: "temel-kavramlar-06-mutlak-degerce-karsilastirma",
      ad: "Mutlak değerce büyüklük karşılaştırma / sıralama",
      aciklama:
        "Negatifli sayı listesinde 'mutlak değerce en büyük/en küçük' ya da sayı doğrusunda sıfıra uzaklık sorulur. 'En büyük sayı' ile 'mutlak değerce en büyük sayı' bilerek çeliştirillir.",
      yontem: [
        "Her sayının mutlak değerini (sıfıra uzaklığını) yaz; işareti at.",
        "Mutlak değerleri karşılaştır; istenen sıralamayı bu değerler üzerinden yap.",
        "Cevap olarak mutlak değeri değil, sayının KENDİSİNİ ver.",
      ],
      celdiriciler: [
        { hata: "Mutlak değerce en büyük yerine en büyük sayıyı seçmek", uretir: "−6, 4, −3, 1 listesinde 4" },
        { hata: "Negatif sayının mutlak değerini negatif sanmak", uretir: "Ters sıralama" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      kombinasyon: ["mutlak-deger-tyt"],
      ornek: {
        soru: "−6, 4, −3, 1 sayılarından mutlak değerce en büyük olanı hangisidir?",
        cevap: "|−6|=6, |4|=4, |−3|=3, |1|=1 ⇒ −6",
      },
    },
  ],
};

export default kb;
