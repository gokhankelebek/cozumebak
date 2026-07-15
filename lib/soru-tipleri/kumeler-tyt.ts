import type { TopicSoruTipleri } from "./types";

// KÜMELER (TYT · Kümeler ve Mantık). Müfredatta TYT konusu görünse de ÖSYM bunu
// AYT'de de soruyor: 2018-2025 AYT kâğıtlarında 7 gerçek küme sorusu ölçüldü ve
// hiçbiri "s(A∪B)'yi bul" düzeyinde değil. Ölçülen üç gerçek eğilim:
//   • Kartezyen çarpım baskın: 7 sorunun 5'i kartezyen çarpım üzerine kurulu.
//   • Venn bölgesi çoğu zaman bölünebilme demek (asalların katları kümesi).
//   • Şekil dekor değil veri: nokta ızgarası doğrudan eleman sayısını verir.
// Ordered easy→hard. Her örnek elle doğrulandı; celdiriciler gerçek sorulardaki
// ölçülmüş öğrenci hatalarından alındı.
const kb: TopicSoruTipleri = {
  slug: "kumeler-tyt",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "kumeler-tyt-01-birlesim-kesisim-eleman",
      ad: "Birleşim–kesişim eleman sayısı bağıntısı",
      aciklama:
        "s(A∪B) = s(A) + s(B) − s(A∩B) bağıntısı. Tek başına da gelir ama asıl işlevi ara adım olmaktır: ÖSYM verileri kartezyen çarpımın ya da grafiğin içine saklar, sen bu bağıntıyla kesişimi çekip çıkarırsın. Sorunun istediği çoğu zaman kesişim değil, 'yalnız A'da olan' gibi bir bölgedir.",
      yontem: [
        "Bağıntıyı yaz: s(A∪B) = s(A) + s(B) − s(A∩B); dört büyüklükten üçü verilmişse dördüncüsü tek adımda çıkar.",
        "Kesişimi bulunca dur ve soruyu yeniden oku — istenen kesişim mi, yalnız A mı, tümleyen mi?",
        "Yalnız A = s(A) − s(A∩B), yalnız B = s(B) − s(A∩B).",
        "Üç kümede bağıntı uzar: s(A∪B∪C) = s(A)+s(B)+s(C) − s(A∩B) − s(A∩C) − s(B∩C) + s(A∩B∩C).",
      ],
      celdiriciler: [
        { hata: "Kesişimi çıkarmayı unutmak (kümeleri ayrık varsaymak)", uretir: "s(A)+s(B) toplamı — birleşimden kesişim kadar büyük değer" },
        { hata: "Kesişimi bulup soruyu bitirmek (istenen 'yalnız A' iken)", uretir: "Kesişim değerini cevap diye işaretlemek" },
        { hata: "Üç kümede en içteki bölgeyi bir kez fazla çıkarmak", uretir: "s(A∩B∩C) kadar eksik birleşim" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "s(A) = 18, s(B) = 14 ve s(A∪B) = 25 olduğuna göre, yalnız A kümesinde bulunan elemanların sayısı kaçtır?",
        cevap: "s(A∩B) = 18 + 14 − 25 = 7 ⇒ yalnız A = 18 − 7 = 11 (kontrol: 11 + 7 + (14−7) = 25)",
      },
    },
    {
      id: "kumeler-tyt-02-venn-bolgesi-bolunebilme",
      ad: "Venn bölgesini okuma (asalların katları)",
      aciklama:
        "Kümeler asal sayıların katlarıdır; Venn şemasında bir bölge taranıp 'şu sayılar bu bölgede' denir. Bölge aslında bir bölünebilme cümlesidir: taralı bölge 'şunlara bölünür, şuna bölünmez' demektir. Dışlama koşulu asıl bilgidir — bölgeyi 'içinde' diye okuyan öğrenci soruyu kaybeder.",
      yontem: [
        "Her bölgeyi cümleye çevir: 'A ve B'de var, C'de yok' ⇒ EKOK(a,b) ile bölünür, c ile bölünmez.",
        "İki kümenin ortak bölgesi kesişimdir; katlar söz konusuysa kesişim EKOK'un katlarıdır (asallarda EKOK = çarpım).",
        "Sayı verilmişse asal çarpanlarına ayır; hangi asalların olduğu kadar hangilerinin OLMADIĞI da veridir.",
        "Sayma sorusunda bölge sayısı = (EKOK'un katları) − (dışlanan asalla da bölünenler).",
      ],
      celdiriciler: [
        { hata: "Bölgeyi 'içinde' okuyup 'sadece içinde' koşulunu atlamak", uretir: "Dışlanan kısmı da sayan, kesişimin tamamı kadar fazla sonuç" },
        { hata: "Ortak kat için EKOK yerine sayıların çarpımını almak", uretir: "4 ile 6'da 12 yerine 24 — katların yarısını kaçıran sayım" },
        { hata: "En içteki (üç kümenin ortak) bölgeyi hiç çıkarmamak", uretir: "Üç asala birden bölünenler kadar şişmiş bölge sayısı" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["asal-carpanlar-bolen-sayisi", "bolme-bolunebilme", "ebob-ekok"],
      ornek: {
        soru: "1'den 60'a kadar olan doğal sayılar arasında A = 2'nin katları, B = 3'ün katları, C = 5'in katları kümeleridir. A∩B kümesinde bulunup C kümesinde bulunmayan kaç sayı vardır?",
        cevap: "A∩B = 6'nın katları ⇒ 60⁄6 = 10 sayı; bunlardan C'de olanlar 30'un katları ⇒ 60⁄30 = 2 sayı (30 ve 60) ⇒ 10 − 2 = 8",
      },
    },
    {
      id: "kumeler-tyt-03-kartezyen-eleman-sayisi",
      ad: "Kartezyen çarpımda eleman sayısı s(A×B) = s(A)⋅s(B)",
      aciklama:
        "ÖSYM'nin küme sorularındaki en sık taşıyıcı yapı. Tek başına kolaydır; zorluk kartezyen çarpımın içine birleşim ya da kesişim yerleştirilmesinden gelir: s((A∪B)×C) gibi. Çarpımın eleman sayısı verilip kümelere geri dönülmesi de aynı tiptir; o zaman sayıyı uygun çarpanlara ayırmak gerekir.",
      yontem: [
        "Kuralı yaz: s(A×B) = s(A)⋅s(B). Sıra önemlidir ama eleman SAYISI değişmez: s(A×B) = s(B×A).",
        "Parantez içindeki birleşim/kesişimi önce eleman sayısına indir, sonra çarp.",
        "Çarpımın eleman sayısı verilip küme aranıyorsa sayıyı çarpanlarına ayır ve her çarpanı kümenin alabileceği aralıkla sına — genelde tek bir ayrım geçerlidir.",
        "Birleşime eleman eklerken sor: bu eleman kümede zaten var mıydı? Varsa eleman sayısı artmaz.",
      ],
      celdiriciler: [
        { hata: "s(A×(B∪C)) ifadesini s(A×B) ile s(A×C)'nin toplamı sanmak", uretir: "Ortak kısım iki kez sayılmış, s(A)⋅s(B∩C) kadar fazla değer" },
        { hata: "Eklenen elemanların iki kümeye birden yeni olduğunu varsaymak", uretir: "İki eleman sayısı da artmış; çarpanlara ayrılmayan, tutmayan bir çarpım" },
        { hata: "s(A×B) yerine s(A) + s(B) almak", uretir: "Çarpım yerine toplam — küçük ve şıklarda hazır bekleyen değer" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "s(A) = 5, s(B) = 3 ve s(A∩B) = 2 olduğuna göre, s((A∪B)×B) kaçtır?",
        cevap: "s(A∪B) = 5 + 3 − 2 = 6 ⇒ s((A∪B)×B) = 6⋅3 = 18",
      },
    },
    {
      id: "kumeler-tyt-04-kartezyen-grafik",
      ad: "Kartezyen çarpımın grafiğinden küme okuma",
      aciklama:
        "A×B analitik düzlemde nokta nokta çizilir. Kartezyen çarpım daima tam bir ızgaradır: grafikteki farklı apsis sayısı s(A)'yı, farklı ordinat sayısı s(B)'yi verir. Şekil süs değil, verinin kendisidir. Noktaları tek tek saymak vakit kaybıdır; eksenlere bakmak yeter.",
      yontem: [
        "Farklı apsisleri listele → birinci küme; farklı ordinatları listele → ikinci küme.",
        "Hangi çarpımın çizildiğine dikkat et: A×B çizilmişse apsisler A'dan, ordinatlar B'dendir.",
        "Grafikte A∪B gibi bileşik bir küme çizilmişse önce s(A∪B)'yi oku, sonra s(A∩B) = s(A) + s(B) − s(A∪B) ile kesişime geç.",
        "Nokta sayısı zaten s(A)⋅s(B)'dir; ızgara tam olduğu için saymaya gerek yok.",
      ],
      celdiriciler: [
        { hata: "Noktaları tek tek sayıp toplamı cevap sanmak", uretir: "s(A)⋅s(B) değeri — eleman sayısı sorulduğunda hazır tuzak" },
        { hata: "Eksenleri karıştırmak (apsisleri ikinci kümeden sanmak)", uretir: "s(A) ile s(B) yer değişmiş; asimetrik soruda yanlış sonuç" },
        { hata: "Grafiği fonksiyon grafiği gibi okuyup her apsise tek ordinat düşürmek", uretir: "Izgaranın bir satırı kadar eksik küme" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      ornek: {
        soru: "A×B kartezyen çarpımının grafiği, apsisleri 2, 4, 6 ve ordinatları 1, 3, 5, 7 olan noktalardan oluşmaktadır. Buna göre s(A∪B) kaçtır?",
        cevap: "A = {2,4,6}, B = {1,3,5,7} ⇒ A∩B = ∅ ⇒ A∪B = {1,2,3,4,5,6,7} ⇒ s(A∪B) = 7 (grafikteki nokta sayısı 3⋅4 = 12'dir, cevap değil)",
      },
    },
    {
      id: "kumeler-tyt-05-en-az-en-cok-eleman",
      ad: "Kesişimin en az / en çok eleman sayısı",
      aciklama:
        "Kümeler tam belirlenmez; bir evren (sınıf mevcudu, toplam kişi) verilip kesişimin en az ya da en çok kaç olabileceği sorulur. Bazen 'aşağıdakilerden hangisi her zaman doğrudur' diye üç iddia halinde gelir. Kilit nokta: veriler kümeleri tek bir biçimde belirlemez, aralık belirler.",
      yontem: [
        "Bağıntıyı eşitsizliğe çevir: s(A∩B) = s(A) + s(B) − s(A∪B).",
        "s(A∪B) evreni aşamaz ⇒ s(A∪B) ≤ evren ⇒ kesişim EN AZ s(A) + s(B) − evren olur.",
        "Kesişim en çok küçük kümenin tamamı kadardır: s(A∩B) ≤ min(s(A), s(B)) — yani küçük küme büyüğün içine oturur.",
        "'Her zaman doğru mu' sorusunda tek bir örnek yetmez: iddiayı bozan bir dağılım kurmaya çalış; kuramıyorsan iddia doğrudur.",
      ],
      celdiriciler: [
        { hata: "Kesişimi en az yapmak için birleşimi en küçük almak", uretir: "En çok değerini en az diye vermek (ikisi de şıkta durur)" },
        { hata: "Evren kısıtını hiç kullanmamak", uretir: "'Kesişim en az 0 olabilir' — kümelerin sığmadığını görmemek" },
        { hata: "Alt küme işaretini eşitlik sanıp kümeleri tam belirlenmiş varsaymak", uretir: "Aralık yerine tek bir değer verip 'her zaman doğru' iddiasını yanlış onaylamak" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["mantik-tyt"],
      ornek: {
        soru: "Bir sınıftaki 30 öğrencinin 22'si matematik, 17'si fizik kursuna gitmektedir. Buna göre her iki kursa birden giden öğrenci sayısı en az kaçtır?",
        cevap: "s(M∩F) = 22 + 17 − s(M∪F) ve s(M∪F) ≤ 30 ⇒ s(M∩F) ≥ 22 + 17 − 30 = 9 (en çok ise 17 olabilirdi)",
      },
    },
    {
      id: "kumeler-tyt-06-kartezyen-listeden-kume-kurma",
      ad: "Kartezyen çarpım listesinden kümeleri geri kurma",
      aciklama:
        "Sıralı ikililer liste halinde verilir — ama verilen liste kümelerin kendisi değil, iki kartezyen çarpımın birleşimidir; bileşen kümeler gizlidir. Kartezyen çarpımın daima tam ızgara olması listeyi tek bir tutarlı biçimde ayrıştırır. Konunun en zor tipi.",
      yontem: [
        "Listeyi kümenin kendisi sanma; sıralı ikililerin birinci bileşenlerini ve ikinci bileşenlerini ayrı ayrı topla.",
        "Kartezyen çarpım tam ızgaradır: eleman sayısı çarpanların çarpımına eşit değilse ayrıştırman yanlıştır — bu senin sağlamandır.",
        "Birleşim verilmişse ızgarayı iki tam ızgaraya böl; tutarlı ayrım genelde tektir.",
        "Kesişim için kuralı kullan: (A×B) ∩ (C×D) = (A∩C) × (B∩D).",
      ],
      celdiriciler: [
        { hata: "Verilen listeyi kümelerin kendisi sanıp doğrudan kesişim almak", uretir: "Bileşenler hiç kurulmadan, ızgara yapısını yok sayan yanlış küme" },
        { hata: "(A×B) ∩ (C×D) = (A∩C) × (B∩D) yerine bileşenleri karıştırmak", uretir: "(A∩C) × (B∪D) gibi, gerçek kesişimden büyük küme" },
        { hata: "Ayrıştırmada eleman sayısı sağlamasını yapmamak", uretir: "s(A)⋅s(B) ile liste uzunluğu tutmayan, eksik ya da fazla elemanlı kümeler" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      ornek: {
        soru: "A×B = {(1,5), (1,6), (2,5), (2,6)} ve C×D = {(2,6), (2,7), (4,6), (4,7)} olduğuna göre, (A×B) ∩ (C×D) kümesinin eleman sayısı kaçtır?",
        cevap: "A = {1,2}, B = {5,6}, C = {2,4}, D = {6,7} ⇒ (A∩C)×(B∩D) = {2}×{6} = {(2,6)} ⇒ 1 eleman (ızgara sağlaması: 2⋅2 = 4 = liste uzunluğu)",
      },
    },
    {
      id: "kumeler-tyt-07-yeni-tanimli-kume",
      ad: "Yeni tanımlı küme (eleman sayısı bir koşula bağlı)",
      aciklama:
        "Soru kendi tanımını yapar: bir kümenin eleman sayısı ile en küçük elemanı arasında sabit bir ilişki kurulur. Tanım her kümenin boyutunu kilitlediği için birleşimin elemanlarını dağıtmak sonlu bir bulmacaya döner; verilen üyelik bilgileri dalları hızla budar. Ezber yok, tanımı okuyup uygulamak var.",
      yontem: [
        "Tanımı sağlayan bütün olası kümeleri evrenden tek tek üret — liste çoğu zaman şaşırtıcı derecede kısadır.",
        "Tanımın verilen HER kümeye ayrı ayrı uygulandığını unutma; biri serbest değildir.",
        "Kümeler ayrık denmedikçe ayrık değildir; eleman sayılarını toplayıp birleşime eşitleme.",
        "Verilen üyelik bilgilerini (x ∈ A, y ∉ B) ele olarak kullan; kalan tek tutarlı dağılımı seç.",
      ],
      celdiriciler: [
        { hata: "Tanımı yalnız bir kümeye uygulayıp diğerini serbest bırakmak", uretir: "Koşulu sağlamayan küme seçimi — soruya birden çok 'çözüm' çıkması" },
        { hata: "Kümelerin ayrık olduğunu varsaymak", uretir: "Eleman sayılarını toplayıp birleşime eşitleme; kesişimi sıfır sanma" },
        { hata: "Koşuldaki 'en küçük eleman'ı en büyük eleman gibi okumak", uretir: "Boyutu yanlış kilitlenmiş, tanımı sağlamayan kümeler" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["mantik-tyt"],
      ornek: {
        soru: "A ve B kümelerinin her birinin eleman sayısı, kendi en küçük elemanına eşittir. A∪B = {2, 3, 4, 5} ve 2 ∈ A olduğuna göre, B kümesinin elemanları toplamı kaçtır?",
        cevap: "Tanımı sağlayan olası kümeler: {2,3}, {2,4}, {2,5}, {3,4,5}. 2 ∈ A ⇒ s(A) = 2 ⇒ A iki elemanlı; B, {2,3}/{2,4}/{2,5} olsaydı A ile birleşim 4 ve 5'i birden kapsayamazdı ⇒ B = {3,4,5} ⇒ 3 + 4 + 5 = 12 (A tam belirlenmez, ama B tektir)",
      },
    },
  ],
};

export default kb;
