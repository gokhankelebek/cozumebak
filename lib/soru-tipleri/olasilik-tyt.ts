import type { TopicSoruTipleri } from "./types";

// OLASILIK. Müfredatta TYT konusu görünse de ÖSYM bunu AYT'de ve AYT
// derinliğinde soruyor (2018-2025: sayma+olasılık birlikte yılda ~2,6 soru).
// Ölçülen gerçek sorularda olasılık neredeyse hiç tek başına gelmiyor:
// kombinasyonla örnek uzay sayma, iadesiz çekiliş, koşullu olasılık, tek-çift
// ayrımı ve katı cisim/çokgen geometrisiyle kaynaşıyor. Ordered easy→hard.
// Her örnek elle doğrulandı; çeldiriciler gerçek kâğıtlarda ölçülen hatalar.
const kb: TopicSoruTipleri = {
  slug: "olasilik-tyt",
  durum: "verified",
  tipler: [
    {
      id: "olasilik-tyt-01-uygun-toplam-kombinasyon",
      ad: "Kombinasyonla uygun durum / tüm durum (aynı anda çekme)",
      aciklama:
        "Bir havuzdan aynı anda birkaç eleman çekiliyor; belirli bir renk/tür dağılımının olasılığı isteniyor. Konunun temel tipi: hem payda hem pay kombinasyonla sayılır. 'Aynı anda' ya da 'birlikte' dendiği anda seçim sırasızdır. Zorlaştırılmış hâlinde koşul iki katmanlıdır (hem grup başına alt sınır hem toplamda alt sınır) ve bir katmanı atlatmak sorunun ayarıdır.",
      yontem: [
        "Örnek uzayı yaz: havuzda n eleman varsa ve r tanesi çekiliyorsa tüm durum C(n, r).",
        "Uygun durumu grup grup say, gruplardan gelen sayıları çarp: C(a, i)⋅C(b, r−i).",
        "Birden çok dağılım uygunsa hepsini topla; hiçbir dağılımı atlama.",
        "Koşul iki katmanlıysa (grup başına ve toplamda) her iki katmanı da tek tek kontrol et; biri diğerini zaten sağlıyor olabilir, o zaman bağlayıcı olan öbürüdür.",
        "Tümleyen kısaysa onu say: uygun = tüm − uygunsuz. Simetrik grupların ikisini birden düşünmeyi unutma.",
        "Sadeleştir; olasılık 0 ile 1 arasında mı diye bak.",
      ],
      celdiriciler: [
        { hata: "'Aynı anda' çekilişte sıralı saymak (permütasyon kullanmak)", uretir: "Pay ve paydada r! çarpanı — dengesiz oran" },
        { hata: "İki katmanlı koşulda yalnız toplam alt sınırına bakıp grup kısıtını atlamak", uretir: "Elenmesi gereken dağılımlar da sayılmış, büyük olasılık" },
        { hata: "Tümleyeni tek dağılım sanıp öbür grubun simetrik durumunu unutmak", uretir: "Eksik düşülmüş tümleyen, doğru cevaptan büyük değer" },
        { hata: "Grup sayılarını çarpmak yerine toplamak", uretir: "C(a,i) + C(b,r−i) — anlamsız pay" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      kombinasyon: ["permutasyon-kombinasyon-tyt"],
      ornek: {
        soru: "Bir torbada 4 kırmızı, 3 mavi bilye vardır. Torbadan rastgele aynı anda 2 bilye çekiliyor. İkisinin de aynı renkte olma olasılığı kaçtır?",
        cevap: "Tüm durum C(7,2) = 21; uygun = C(4,2) + C(3,2) = 6 + 3 = 9 ⇒ 9/21 = 3/7",
      },
    },
    {
      id: "olasilik-tyt-02-en-az-bir-tumleyen",
      ad: "'En az bir' olayının olasılığı (tümleyen)",
      aciklama:
        "'En az biri şu türden olsun' deniyor. Doğrudan sayınca tam 1, tam 2, tam 3… diye durumlara bölünür; tümleyeni (hiçbiri o türden değil) bulup 1'den çıkarmak tek adımda bitirir. 'En az bir'in tümleyeni 'hiçbiri'dir — 'en çok bir' değil; bu ayrım tipin bütün ayarıdır.",
      yontem: [
        "Tümleyeni cümleyle kur: 'en az bir siyah'ın tümleyeni 'hiç siyah yok'tur.",
        "Tümleyenin olasılığını say: aranan türden hiç almadan yapılan seçim / tüm seçim.",
        "İstenen = 1 − P(tümleyen).",
        "Çekiliş iadesizse tümleyeni de kombinasyonla say; iadeliyse çarpım kuralını kullan.",
        "Sağlama: tümleyen büyüdükçe cevabın küçülmesi gerekir; iki değeri de mantık süzgecinden geçir.",
      ],
      celdiriciler: [
        { hata: "'En az bir'in tümleyenini 'en çok bir' sanmak", uretir: "Yanlış olay üzerinden kurulmuş, doğruyla ilgisiz oran" },
        { hata: "Tümleyeni bulup 1'den çıkarmayı unutmak", uretir: "P(hiçbiri) değeri — tam da cevabın tümleyeni, şıklarda mutlaka vardır" },
        { hata: "'En az bir' yerine 'tam bir' okuyup tek durumu saymak", uretir: "Diğer durumlar atlanmış, küçük olasılık" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["permutasyon-kombinasyon-tyt", "kumeler-tyt"],
      ornek: {
        soru: "Bir torbada 5 beyaz, 3 siyah top vardır. Torbadan rastgele aynı anda 3 top çekiliyor. Çekilen toplardan en az birinin siyah olma olasılığı kaçtır?",
        cevap: "Tüm durum C(8,3) = 56; tümleyen (hiç siyah yok) C(5,3) = 10 ⇒ 1 − 10/56 = 46/56 = 23/28",
      },
    },
    {
      id: "olasilik-tyt-03-iadesiz-ardisik-cekilis",
      ad: "İadesiz ardışık çekiliş ('tam olarak k. denemede')",
      aciklama:
        "Görünüşte birbirinin aynısı olan nesnelerden biri aranıyor; her denemede tutmayan nesne geri konmuyor. 'Tam olarak 3. denemede bulma' demek, ilk iki denemenin ikisinin de başarısız olması demektir. Koşullu olasılıklar ardışık çarpılır ve paydalar her adımda birer azalır; sonuç sadeleşince şaşırtıcı biçimde denemenin kaçıncı olduğundan bağımsız çıkar.",
      yontem: [
        "Olayı zincir hâlinde yaz: 1. deneme başarısız VE 2. deneme başarısız VE 3. deneme başarılı.",
        "Her adımın olasılığını, o ana kadar çekilenler dışarıda kalmış varsayarak yaz: pay ve payda birer azalır.",
        "Çarp ve sadeleştir. n nesneden birini arıyorsan sonuç her k için 1/n çıkar — bu, cevabı doğrulayan püf noktasıdır.",
        "'Tam olarak k. denemede' ile 'en çok k denemede'yi ayır: ikincisi ilk k denemenin toplamıdır.",
        "Metinde 'geri konuyor' geçiyor mu diye bak; geçmiyorsa payda sabit kalmaz.",
      ],
      celdiriciler: [
        { hata: "Nesneyi geri koyuyormuş gibi sabit paydayla çarpmak", uretir: "((n−1)/n)^(k−1)⋅(1/n) — 1/n'den küçük, şıkta duran değer" },
        { hata: "'Tam olarak 3. denemede' yerine 'en çok 3 denemede' okumak", uretir: "Üç durumun toplamı — cevabın 3 katı" },
        { hata: "Başarısız denemelerin payını azaltmayı unutmak (yalnız paydayı düşürmek)", uretir: "Zincirin ortasında bozulan, 1'i aşabilen değer" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["kosullu-olasilik"],
      ornek: {
        soru: "Bir çantada görünüşleri aynı olan 6 anahtar vardır; bunlardan yalnız biri kapıyı açmaktadır. Anahtarlar rastgele birer birer deneniyor ve açmayan anahtar çantaya geri konmuyor. Kapının tam olarak 3. denemede açılma olasılığı kaçtır?",
        cevap: "(5/6)⋅(4/5)⋅(1/4) = 1/6 (püf noktası: sonuç kaçıncı deneme olduğundan bağımsız, hep 1/6)",
      },
    },
    {
      id: "olasilik-tyt-04-iki-secim-uygunluk-kosulu",
      ad: "İki bağımsız seçimde uygunluk/sıralama koşulu",
      aciklama:
        "İki ayrı havuzdan birer nesne rastgele seçiliyor ve aralarında tek yönlü bir koşul aranıyor: 'kapak tencereyi örtebilsin', 'çek elbiseye yetsin', 'kartın numarası zarfınkinden büyük olsun'. Örnek uzay basit bir çarpımdır; asıl iş uygun durum sayımıdır. Havuzlardaki adetler eşit olmadığı için sayım ağırlıklı bir toplam olur.",
      yontem: [
        "Örnek uzayı yaz: iki havuzun eleman sayılarını çarp (m⋅n).",
        "Koşulun yönünü metinden bir kez daha oku: 'kendi boyu VEYA daha küçüğü' tek yönlüdür, tersi geçerli değildir.",
        "Uygun durumu ikinci havuzun her elemanı için ayrı say: o eleman kaç tane karşı nesneyle koşulu sağlıyor?",
        "Bu sayıları topla — adetler eşit değilse toplam ağırlıklı olur, sabit bir çarpanla geçme.",
        "Şekilli soruda adetleri şekilden say; iki havuzun adetlerini eşit varsayma.",
        "Uygun / tüm oranını sadeleştir.",
      ],
      celdiriciler: [
        { hata: "Örtme/yetme yönünü ters okumak (küçük kapağın büyük tencereyi örttüğünü saymak)", uretir: "Tümleyene yakın, bire yakın olasılık" },
        { hata: "'Yetebilme'yi tam eşitlik sanmak (≥ yerine =)", uretir: "Uygun durum sayısı çok küçük, minik olasılık" },
        { hata: "İki havuzun adetlerini eşit sanıp uygun sayıyı 1 + 2 + 3 gibi düz üçgensel toplam almak", uretir: "Ağırlıklandırılmamış pay — örnekte 22 yerine 6" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["permutasyon-kombinasyon-tyt"],
      ornek: {
        soru: "Bir masada 1. boy 3 tane, 2. boy 4 tane, 3. boy 5 tane tencere; ayrı bir kutuda 1., 2. ve 3. boy birer kapak vardır. Rastgele bir tencere ve rastgele bir kapak seçiliyor. Bir kapak, kendi boyundaki ve kendinden küçük boydaki tencereleri örtebildiğine göre, seçilen kapağın seçilen tencereyi örtebilme olasılığı kaçtır?",
        cevap: "Tüm durum 12⋅3 = 36; uygun: 1. kapak 3, 2. kapak 3 + 4 = 7, 3. kapak 3 + 4 + 5 = 12 ⇒ 3 + 7 + 12 = 22 ⇒ 22/36 = 11/18",
      },
    },
    {
      id: "olasilik-tyt-05-kosullu-olasilik",
      ad: "Koşullu olasılık (koşul örnek uzayı daraltır)",
      aciklama:
        "'… olduğu bilindiğine göre' ifadesi geçer. Koşul, örnek uzayı küçültür; artık payda bütün durumlar değil, koşulu sağlayan durumlardır. En sık kurgusu tek-çift ayrımıdır: çarpımın tekliği/çiftliği verilip toplamınki sorulur. Daralan uzayın içinde sezginin söylediğinden çok daha az durum kalması sorunun tam da ölçtüğü şey.",
      yontem: [
        "Bütün örnek uzayı say (çoğunlukla C(n, 2)).",
        "Koşulu sağlayan durumları say — bu yeni paydadır. Tek-çift kurgusunda tümleyenden gitmek kısadır: çarpım tek ⟺ ikisi de tek.",
        "Yeni uzayın İÇİNDE aranan olayı say: çarpım çiftken toplamın çift olması ancak ikisi de çift ise mümkündür (ikisi de tek olsaydı çarpım tek olurdu).",
        "P(A | B) = (A ve B'nin birlikte olduğu durum sayısı) / (B'nin durum sayısı).",
        "Sağlama: koşullu olasılık, koşulsuz olasılıktan farklı çıkmalı; aynı çıktıysa koşulu gerçekten kullanmamışsındır.",
      ],
      celdiriciler: [
        { hata: "Koşulu hiç kullanmayıp koşulsuz olasılığı hesaplamak", uretir: "Tam örnek uzay üzerinden oran — şıklarda mutlaka bulunan tuzak" },
        { hata: "Paydayı daraltıp payı daraltmamak", uretir: "Koşulu sağlamayan durumlar da paya girmiş, büyük değer" },
        { hata: "Çarpım çiftken toplamın 'ikisi de tek' hâlini de saymak", uretir: "Koşulla çelişen durumlar eklenmiş, doğru cevabın katı" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["kosullu-olasilik", "tek-cift-sayilar"],
      ornek: {
        soru: "1, 2, 3, 4, 5, 6 sayılarından rastgele iki farklı sayı seçiliyor. Seçilen sayıların çarpımının çift olduğu bilindiğine göre, toplamlarının çift olma olasılığı kaçtır?",
        cevap: "Tüm durum C(6,2) = 15; çarpım tek (ikisi de tek) C(3,2) = 3 ⇒ çarpım çift olan 15 − 3 = 12. Bu uzayda toplam çift ancak ikisi de çiftse olur: C(3,2) = 3 ⇒ 3/12 = 1/4",
      },
    },
    {
      id: "olasilik-tyt-06-toplam-olasilik-esit-olmayan-dallar",
      ad: "İki aşamalı seçim (dallar eşit olasılıklı değildir)",
      aciklama:
        "Önce eşit olasılıkla bir grup/kapı/çekmece seçiliyor, sonra o grubun İÇİNDEN rastgele bir eleman alınıyor. Gruplar eşit olasılıklı ama grup başına eleman sayıları farklı olduğundan elemanlar eşit olasılıklı DEĞİLDİR. Sorunun cezalandırdığı refleks tam olarak budur: bütün elemanları tek havuzda toplayıp 1/(toplam eleman) demek.",
      yontem: [
        "Ağacı çiz: önce grup seçimi (her biri 1/(grup sayısı)), sonra grup içi seçim (her biri 1/(o gruptaki eleman sayısı)).",
        "Her elemanın olasılığını çarparak bul: P(eleman) = 1/(grup sayısı) ⋅ 1/(o gruptaki eleman sayısı). Grupları kalabalık olanların elemanları daha düşük olasılıklıdır.",
        "Sağlama yap: bütün eleman olasılıklarının toplamı 1 olmalı.",
        "İşlem bağımsız olarak tekrarlanıp aynı elemanın gelmesi isteniyorsa her elemanın olasılığının karesini al ve topla.",
        "Farklı gruplardan çıkan dallar çakışmaya katkı vermez — o kolu sıfır say, hesaba katma.",
      ],
      celdiriciler: [
        { hata: "Bütün elemanları tek havuzda eşit olasılıklı sayıp 1/(toplam eleman) demek", uretir: "Örnekte 5/24 yerine 1/5 — sorunun kurulduğu asıl tuzak" },
        { hata: "Grup içi olasılığı grup seçim olasılığıyla çarpmamak (yalnız 1/(gruptaki eleman) almak)", uretir: "Toplamı 1 etmeyen, şişmiş olasılıklar" },
        { hata: "Farklı gruplardan gelen dalı da çakışmaya saymak", uretir: "Mümkün olmayan durum eklenmiş, büyük değer" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["kosullu-olasilik"],
      ornek: {
        soru: "Bir dolabın I. çekmecesinde 2, II. çekmecesinde 3 kalem vardır; kalemlerin hepsi birbirinden farklıdır. Bir öğrenci önce eşit olasılıkla bir çekmece seçiyor, sonra o çekmeceden rastgele bir kalem alıyor. Aldığı kalemi yerine koyduktan sonra aynı işlemi bağımsız olarak bir kez daha yapıyor. İki seferde de aynı kalemi alma olasılığı kaçtır?",
        cevap: "I'deki her kalem: (1/2)⋅(1/2) = 1/4; II'deki her kalem: (1/2)⋅(1/3) = 1/6. (Sağlama: 2⋅(1/4) + 3⋅(1/6) = 1.) Aynı kalem = 2⋅(1/4)² + 3⋅(1/6)² = 1/8 + 1/12 = 5/24",
      },
    },
    {
      id: "olasilik-tyt-07-geometrik-kurguda-olasilik",
      ad: "Geometrik şekil/katı cisim üzerinde olasılık",
      aciklama:
        "Olasılık bir geometri kurgusunun içine yerleştirilir: küpün köşelerinden üçü seçilir, düzgün çokgenin kenar vektörlerinden ikisi seçilir, dörtyüzlünün köşelerindeki karıncalar rastgele bir ayrıt seçip yürür. Örnek uzay yine kombinasyonla ya da çarpım kuralıyla sayılır; zorluk uygun durumu belirleyen geometrik olguyu görmektir. Uygun olay çoğu zaman iki koldan gerçekleşir ve ikinci kolu görmek sorunun tamamıdır.",
      yontem: [
        "Örnek uzayı say: 'köşelerden 3'ü seçiliyor' ⇒ C(n, 3); 'iki nesne bağımsız hareket ediyor' ⇒ seçenek sayılarının çarpımı.",
        "Uygun durumu geometriden oku: küpte bir yüzde 4 köşe vardır, dörtyüzlüde her köşe diğer üçüne komşudur, düzgün çokgende uç uca yönlendirilmiş kenar vektörleri arasındaki açı dış açının katıdır.",
        "Olayın kaç ayrı kolla gerçekleştiğini yaz: buluşma hem aynı noktada olabilir hem de aynı ayrıt üzerinde yer değiştirerek olabilir.",
        "Aynı durumu iki koldan saymadığını kontrol et; şekilde çakışan durum var mı bak.",
        "Sadeleştir.",
      ],
      celdiriciler: [
        { hata: "Olayın yalnız bir kolunu saymak (aynı noktada buluşmayı sayıp yer değiştirmeyi atlamak)", uretir: "Doğru cevabın belirgin biçimde altında bir değer" },
        { hata: "Vektörler arası açıyı çokgenin iç açısı sanmak", uretir: "Dar/geniş ayrımı ters dönmüş, tümleyen olasılık" },
        { hata: "Aynı yüzde/aynı doğrultuda sayılan durumu birden çok yüzde tekrar saymak", uretir: "Şişmiş pay, 1'i aşabilen olasılık" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["kati-cisimler-tyt", "permutasyon-kombinasyon-tyt"],
      ornek: {
        soru: "Bir küpün 8 köşesinden rastgele 3'ü seçiliyor. Seçilen üç köşenin küpün aynı yüzü üzerinde bulunma olasılığı kaçtır?",
        cevap: "Tüm durum C(8,3) = 56; her yüzde 4 köşe var ⇒ yüz başına C(4,3) = 4, altı yüz için 6⋅4 = 24. Üç köşe iki yüze birden düşemez (iki yüzün ortak köşesi en çok 2'dir) ⇒ 24/56 = 3/7",
      },
    },
  ],
};

export default kb;
