import type { TopicSoruTipleri } from "./types";

// MUTLAK DEĞER FONKSİYONLARI (9. sınıf · Nicelikler ve Değişimler). f(x) = |x|
// grafiği, ötelemeler ve temel mutlak değerli denklemler. Arketipler MEB
// programındaki öğrenme çıktılarından ve okul sınavlarının alışılmış soru
// kalıplarından çıkarıldı (ÖSYM kataloğundan değil). Ordered easy→hard. Every
// örnek is hand-verified.
const kb: TopicSoruTipleri = {
  slug: "mutlak-deger-fonksiyonlari-9",
  durum: "taslak",
  tipler: [
    {
      id: "mutlak-9-01-deger-hesabi",
      ad: "Mutlak değerli ifadeyi hesaplama",
      aciklama:
        "İçinde birkaç mutlak değer bulunan sayısal bir ifade verilir. Önce her mutlak değerin içi hesaplanır, sonra işareti atılır; mutlak değerin önündeki eksi ise yerinde kalır.",
      yontem: [
        "Her mutlak değerin içindeki işlemi yap.",
        "Sonucu sıfıra uzaklık olarak yaz: negatifse işaretini at.",
        "Mutlak değerin DIŞINDAKİ işaretleri değiştirme.",
        "Kalan toplama–çıkarma işlemini soldan sağa bitir.",
      ],
      celdiriciler: [
        { hata: "İçteki işlemi yapmadan terimlerin mutlak değerini ayrı ayrı almak (|3 − 8| = 3 + 8)", uretir: "Olduğundan büyük değer" },
        { hata: "Mutlak değerin önündeki eksiyi de pozitife çevirmek", uretir: "Çıkarılacak terimi eklenmiş sonuç" },
        { hata: "Mutlak değeri negatif bırakmak", uretir: "|−7| = −7 alınarak bulunan küçük değer" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "|−7| + |3 − 8| − |−2| işleminin sonucu kaçtır?",
        cevap: "7 + |−5| − 2 = 7 + 5 − 2 = 10",
      },
    },
    {
      id: "mutlak-9-02-tepe-noktasi",
      ad: "Tepe noktası ve en küçük değer",
      aciklama:
        "f(x) = |x − a| + b biçiminde bir kural verilir; grafiğin tepe (kırılma) noktası ve fonksiyonun en küçük değeri istenir. Mutlak değerin içini sıfır yapan x tepe noktasının apsisidir, dışarıdaki sabit de en küçük değerdir.",
      yontem: [
        "Mutlak değerin içini sıfıra eşitle: x − a = 0 ⇒ x = a.",
        "Bu x'i kuralda yerine yaz; değer b çıkar. Tepe noktası (a, b).",
        "|x − a| en az 0 olduğundan fonksiyonun en küçük değeri b'dir.",
        "Grafik bu noktadan yukarı açılan bir V'dir; en büyük değeri yoktur.",
      ],
      celdiriciler: [
        { hata: "Öteleme yönünü ters almak (|x − 3| için tepe x = −3)", uretir: "Apsisi ters işaretli tepe noktası" },
        { hata: "Tepe noktasının apsisini en küçük değer sanmak", uretir: "b yerine a'nın cevap verilmesi" },
        { hata: "|x + 2| biçiminde içi sıfırlayan değeri +2 almak", uretir: "x = −2 yerine x = 2" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "f(x) = |x − 3| + 2 fonksiyonunun grafiğinin tepe noktasını ve fonksiyonun en küçük değerini bulunuz.",
        cevap: "x − 3 = 0 ⇒ x = 3, f(3) = 2; tepe noktası (3, 2), en küçük değer 2",
      },
    },
    {
      id: "mutlak-9-03-oteleme-kural",
      ad: "Ötelemeden kuralı yazma",
      aciklama:
        "f(x) = |x| grafiğinin kaç birim sağa–sola ve yukarı–aşağı ötelendiği ya da yeni tepe noktası verilir; kural ve çoğu zaman bir değer istenir. Sağa–sola öteleme mutlak değerin İÇİNE ters işaretle, yukarı–aşağı öteleme DIŞINA aynı işaretle yazılır.",
      yontem: [
        "Yeni tepe noktasını (a, b) olarak belirle.",
        "Kuralı f(x) = |x − a| + b biçiminde yaz; a negatifse içerisi artıya döner.",
        "Tepe noktasını kuralda deneyerek sağla.",
        "İstenen değeri hesapla.",
      ],
      celdiriciler: [
        { hata: "Sola ötelemeyi |x − a| ile yazmak", uretir: "Grafiği ters yöne kaydıran kural" },
        { hata: "Yukarı ötelemeyi mutlak değerin içine yazmak", uretir: "Dikey yerine yatay kaymış grafik" },
        { hata: "Yatay ve dikey öteleme miktarlarını yer değiştirmek", uretir: "Tepe noktası (b, a) olan kural" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["geometrik-donusumler-9"],
      ornek: {
        soru: "f(x) = |x| grafiği 1 birim sola ve 4 birim yukarı öteleniyor. Elde edilen g fonksiyonunun kuralını yazıp g(2) değerini bulunuz.",
        cevap: "Tepe noktası (−1, 4) ⇒ g(x) = |x + 1| + 4; g(2) = |3| + 4 = 7",
      },
    },
    {
      id: "mutlak-9-04-denklem-iki-durum",
      ad: "|A| = c denklemi (iki durum)",
      aciklama:
        "Mutlak değerli ifade pozitif bir sayıya eşitlenir. İçerideki ifade o sayıya ya da onun ters işaretlisine eşit olabilir; iki ayrı denklem çözülür. Soru genellikle çözüm kümesini ya da köklerin toplamını ister.",
      yontem: [
        "Mutlak değeri yalnız bırak: |A| = c.",
        "c > 0 ise iki denklem yaz: A = c ve A = −c.",
        "İkisini ayrı ayrı çöz.",
        "Bulduğun değerleri ilk denklemde dene ve çözüm kümesini yaz.",
      ],
      celdiriciler: [
        { hata: "Yalnız A = c durumunu çözmek", uretir: "İki kökten biri eksik çözüm kümesi" },
        { hata: "İkinci durumda yalnız bir terimin işaretini değiştirmek (−2x − 1 = 7 yazmak)", uretir: "Denklemi sağlamayan ikinci kök" },
        { hata: "Mutlak değeri yalnız bırakmadan ikiye ayırmak", uretir: "Dışarıdaki sabiti hesaba katmayan kökler" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["birinci-derece-problemler-9"],
      ornek: {
        soru: "|2x − 1| = 7 denkleminin çözüm kümesini bulunuz.",
        cevap: "2x − 1 = 7 ⇒ x = 4; 2x − 1 = −7 ⇒ x = −3; Ç = {−3, 4} (kontrol: |−7| = 7, |7| = 7)",
      },
    },
    {
      id: "mutlak-9-05-cozumsuz-tek-cozum",
      ad: "Çözümü olmayan ya da tek çözümlü denklem",
      aciklama:
        "Mutlak değer yalnız bırakılınca karşısında negatif bir sayı ya da sıfır kalır. Mutlak değer negatif olamayacağı için ilk durumda çözüm yoktur; sıfıra eşitse tek çözüm vardır. Ezbere iki durum yazan öğrenciyi ayıklayan sorudur.",
      yontem: [
        "Mutlak değeri yalnız bırak.",
        "Karşı taraf negatifse dur: çözüm kümesi boş kümedir.",
        "Karşı taraf 0 ise içeriyi sıfıra eşitle; tek çözüm vardır.",
        "Karşı taraf pozitifse iki durumla devam et.",
      ],
      celdiriciler: [
        { hata: "Negatife eşit mutlak değeri iki duruma ayırıp çözmek", uretir: "Gerçekte denklemi sağlamayan iki 'kök'" },
        { hata: "Sıfıra eşit mutlak değerde iki farklı kök aramak", uretir: "Aynı kökün iki kez sayılması" },
        { hata: "Mutlak değeri yalnız bırakmadan karar vermek", uretir: "Çözümü olan denkleme 'çözüm yok' demek ya da tersi" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      ornek: {
        soru: "|x − 4| + 3 = 1 denkleminin çözüm kümesini bulunuz.",
        cevap: "|x − 4| = −2; mutlak değer negatif olamaz ⇒ Ç = ∅",
      },
    },
    {
      id: "mutlak-9-06-uzaklik-yorumu",
      ad: "Sayı doğrusunda uzaklık olarak mutlak değer",
      aciklama:
        "'Sayı doğrusunda 3'e uzaklığı 5 birim olan sayılar' gibi sözel bir ifade verilir ve denklem kurulması istenir. |x − a|, x'in a'ya uzaklığıdır; ifadeyi mutlak değere çevirmek sorunun asıl ölçtüğü beceridir.",
      yontem: [
        "Uzaklığı ölçülen iki sayıyı belirle: x ve a.",
        "Denklemi kur: |x − a| = uzaklık.",
        "İki durumu çöz ya da doğrudan a'dan sağa ve sola uzaklık kadar git.",
        "İki cevabı sayı doğrusunda işaretleyerek kontrol et.",
      ],
      celdiriciler: [
        { hata: "|x + a| yazmak", uretir: "−a'ya uzaklığı veren, yanlış merkezli sayılar" },
        { hata: "Yalnız sağdaki sayıyı bulmak", uretir: "İki cevaptan biri eksik" },
        { hata: "Uzaklığı sıfırdan ölçmek (|x| = 5)", uretir: "Merkezi kaymış −5 ve 5 cevabı" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      ornek: {
        soru: "Sayı doğrusunda 3'e uzaklığı 5 birim olan sayıları bulunuz.",
        cevap: "|x − 3| = 5 ⇒ x − 3 = 5 ya da x − 3 = −5 ⇒ x = 8 ya da x = −2",
      },
    },
    {
      id: "mutlak-9-07-eksen-kesisim",
      ad: "Grafiğin eksenleri kestiği noktalar",
      aciklama:
        "f(x) = |x − a| + b biçimindeki fonksiyonun grafiğinin eksenleri kestiği noktalar ya da x eksenini kestiği iki nokta arasındaki uzaklık istenir. b negatifse grafik x eksenini iki noktada keser, b = 0 ise eksene tek noktada dokunur, b pozitifse hiç kesmez.",
      yontem: [
        "y kesişimi için x = 0 yaz ve f(0)'ı hesapla.",
        "x kesişimi için f(x) = 0 yaz: |x − a| = −b.",
        "−b pozitifse iki durumu çöz; iki kesişim tepe noktasına göre simetriktir.",
        "İki nokta arası uzaklık, apsislerin farkının mutlak değeridir.",
      ],
      celdiriciler: [
        { hata: "b pozitifken de x kesişimi aramak", uretir: "Var olmayan kesişim noktaları" },
        { hata: "y kesişiminde tepe noktasının ordinatını yazmak", uretir: "f(0) yerine b" },
        { hata: "Yalnız bir x kesişimi bulmak", uretir: "Uzaklığın yarısı ya da eksik cevap" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      ornek: {
        soru: "f(x) = |x − 2| − 3 fonksiyonunun grafiğinin x eksenini kestiği noktalar arasındaki uzaklık kaç birimdir?",
        cevap: "|x − 2| = 3 ⇒ x = 5 ya da x = −1; uzaklık = 5 − (−1) = 6 (y kesişimi: f(0) = 2 − 3 = −1)",
      },
    },
  ],
};

export default kb;
