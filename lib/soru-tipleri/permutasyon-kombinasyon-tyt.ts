import type { TopicSoruTipleri } from "./types";

// PERMÜTASYON – KOMBİNASYON (+ BİNOM). Müfredatta TYT konusu görünse de ÖSYM bunu
// AYT'de ve AYT derinliğinde soruyor: 2018-2025 kâğıtlarında sayma+olasılık
// birlikte yılda ~2,6 soru. Ölçülen 24 gerçek sorunun 5'i doğrudan binom
// açılımıydı; bu yüzden binoma iki tip ayrıldı. Sorular saf sayma olarak
// gelmiyor; bölünebilirlik, üslü ifade, eşitsizlik ve şekil okumayla kaynaşıyor.
// Ordered easy→hard. Her örnek elle doğrulandı; her çeldirici gerçek kâğıtlarda
// ölçülmüş öğrenci hatasına dayanıyor.
const kb: TopicSoruTipleri = {
  slug: "permutasyon-kombinasyon-tyt",
  durum: "verified",
  tipler: [
    {
      id: "permutasyon-kombinasyon-tyt-01-ic-sirasi-sabit",
      ad: "İç sırası sabit dizilim (tekrarlı permütasyona inen sayım)",
      aciklama:
        "Bütün elemanlar tek sıraya diziliyor ama bir grubun kendi içindeki sırası sabit tutuluyor: 'A, B'den önce gelecek', 'fiyatlar artan sırada olacak', 'her boydan küçük olan önde duracak'. Sırası sabitlenen grup, elemanları birbirinin aynısıymış gibi davranmaya zorlar; sayım doğrudan tekrarlı permütasyona ya da yer seçimi kombinasyonuna iner.",
      yontem: [
        "Sırası sabit tutulan grupları ve her birinin eleman sayısını çıkar.",
        "Toplam n! yaz, sırası sabit her k'lı grup için k!'e böl: n! / (k₁!⋅k₂!⋅…).",
        "Aynı hesabı yer seçimiyle de yapabilirsin: grubun oturacağı yerleri C(n, k) ile seç, sıra zaten zorunlu olduğu için çarpan ekleme.",
        "Şekilli sorularda önce eşleşmeyi (ön–arka, alt–üst) şekilden oku; sabitlenmiş bir bölme varsa hangi ikiliyi kilitlediğini belirle.",
        "Sağlama: küçük bir örnekte (3 eleman, 2'sinin sırası sabit) elle say, formülle tutuyor mu bak.",
      ],
      celdiriciler: [
        { hata: "Kısıtı yok sayıp doğrudan n! demek", uretir: "Doğru cevabın k! katı — şıklarda en büyük değer" },
        { hata: "'İki grup var' diye sonucu yalnızca 2'ye bölmek", uretir: "n!/2 — grup 3 ve daha kalabalıksa tutmayan değer" },
        { hata: "Sırası sabit grubun yerlerini seçtikten sonra bir de kendi içinde sıralamak", uretir: "Kısıt uygulanmamış, yine n! büyüklüğünde sayım" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "A, B, C, D, E, F harflerinin altısı da bir sıraya diziliyor. Dizilişte soldan sağa önce A, sonra B, sonra C yer alacak; ayrıca D, E'den önce gelecektir. Kaç farklı diziliş vardır?",
        cevap: "6! / (3!⋅2!) = 720/12 = 60 (yer seçimiyle sağlama: A,B,C'ye C(6,3) = 20, D,E'ye C(3,2) = 3, F'ye 1 ⇒ 20⋅3 = 60)",
      },
    },
    {
      id: "permutasyon-kombinasyon-tyt-02-yasakli-yerlesim",
      ad: "Yasaklı yerleşim (yan yana olmama, tümleyenle sayma)",
      aciklama:
        "Belirli kişilerin/nesnelerin yan yana, karşı karşıya ya da uç noktada bulunmaması isteniyor. Doğrudan saymak durum patlaması yaratır; yasaklıyı sayıp toplamdan çıkarmak kısa yoldur. Masa/oturma kurgusu geldiğinde ilk iş masanın dairesel mi yoksa sandalyelerin ayırt edilir mi olduğunu okumaktır.",
      yontem: [
        "Kısıtsız toplamı yaz: sandalyeler ayırt ediliyorsa n!, gerçekten dairesel dizilimse (n−1)!.",
        "Yasaklı durumu blok yaparak say: yan yana istenen ikili tek nesne sayılır ⇒ (n−1)!⋅2!.",
        "Toplamdan yasaklıyı çıkar: istenen = kısıtsız − yasaklı.",
        "Birden çok yasak varsa (hem yan yana hem karşı karşıya) bunların kesişip kesişmediğini kontrol et; kesişmiyorsa ikisini de çıkar, kesişiyorsa kesişimi geri ekle.",
        "Şekilli masada 'karşı karşıya' eşleşmesini sandalye sandalye çıkar; sayıyı şekilden oku, varsayma.",
      ],
      celdiriciler: [
        { hata: "Sandalyeleri ayırt edilen masayı dairesel sayıp bir dönme çarpanına bölmek", uretir: "Doğru cevabın n'de biri" },
        { hata: "İki ayrı yasağı kesişimini kontrol etmeden çıkarmak", uretir: "Ortak durumlar iki kez düşülmüş, gereğinden küçük sonuç" },
        { hata: "Blokta ikilinin kendi içindeki 2! sıralamasını unutmak", uretir: "Yasaklı sayı yarıya inmiş, cevap fazla çıkar" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "5 kişi yan yana dizilmiş 5 sandalyeye oturacaktır. Ali ile Burak'ın yan yana oturmaması koşuluyla kaç farklı oturma düzeni vardır?",
        cevap: "Kısıtsız 5! = 120; yan yana (blok) 4!⋅2! = 24⋅2 = 48 ⇒ 120 − 48 = 72",
      },
    },
    {
      id: "permutasyon-kombinasyon-tyt-03-en-az-bir-tumleyen",
      ad: "'En az bir' koşullu seçim (tümleyenle sayma)",
      aciklama:
        "Bir havuzdan birkaç eleman seçilirken 'en az biri şu türden olsun' deniyor. Doğrudan sayınca 'tam 1 tane, tam 2 tane…' diye durumlara bölünür; tümleyeni (hiçbiri o türden değil) çıkarmak tek adımda bitirir. Kilit nokta, seçilenlerin ayırt edilip edilmediğini metinden okumaktır: iki gün 'iki ayrı etkinliğe' ayrılıyorsa seçim sıralıdır.",
      yontem: [
        "Havuzu ve tür sayılarını çıkar; takvim/aralık kurgusunda uç günleri dahil ederek say.",
        "Seçilenler ayırt ediliyor mu, bak: 'başkan–yazman', 'iki ayrı etkinlik' ⇒ sıralı (permütasyon); 'ikisi birden' ⇒ kombinasyon.",
        "Kısıtsız toplamı yaz.",
        "Tümleyeni yaz: aranan türden hiç seçilmediği durum sayısı.",
        "İstenen = toplam − tümleyen.",
      ],
      celdiriciler: [
        { hata: "Aralıktaki gün/eleman sayısını uç değerleri katmadan saymak", uretir: "Havuz 1-2 eksik, tüm sayım kayar" },
        { hata: "Ayırt edilen iki görevi kombinasyonla saymak", uretir: "Doğru cevabın yarısı" },
        { hata: "'En az bir' yerine 'tam bir' okuyup tek durumu saymak", uretir: "Diğer durumlar atlanmış, küçük sonuç" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["kumeler-tyt"],
      ornek: {
        soru: "Bir sınıftaki 5 kız ve 4 erkek öğrenciden 2'si seçilip biri başkan, diğeri yazman olacaktır. Seçilenlerden en az birinin erkek olması koşuluyla kaç farklı görevlendirme yapılabilir?",
        cevap: "Sıralı toplam 9⋅8 = 72; tümleyen (ikisi de kız) 5⋅4 = 20 ⇒ 72 − 20 = 52",
      },
    },
    {
      id: "permutasyon-kombinasyon-tyt-04-durum-ayrimli-secim",
      ad: "Durum ayrımlı seçim (eşitsizlik koşulunu sağlayan ikilileri listeleme)",
      aciklama:
        "Birkaç değer sınıfından, her sınıfta birden çok ama ayırt edilebilir nesne var; toplamı/farkı bir eşiği aşacak biçimde iki tanesi seçiliyor. İş iki katmanlı: önce hangi değer ikililerinin koşulu sağladığı kaba aritmetikle listelenir, sonra her ikili için sayım yapılır. Tümleyen burada genellikle daha uzun sürer.",
      yontem: [
        "Değer sınıflarını ve her sınıftaki nesne sayısını yaz.",
        "Sayma yapmadan, yalnız aritmetikle hangi değer ikililerinin koşulu sağladığını listele; eşitlik durumunu ('büyüktür' mü 'büyük eşit' mi) tek tek dene.",
        "Farklı sınıflardan seçimde sayıları çarp: m⋅n.",
        "Aynı sınıftan seçimde C(k, 2) al — nesneler ayırt edilebiliyorsa bu durum tek değildir.",
        "Bütün uygun durumları topla; listeden bir ikili atlanmadığını değer değer kontrol et.",
      ],
      celdiriciler: [
        { hata: "Sınır durumunu yanlış almak ('büyüktür' istenirken eşiti de saymak)", uretir: "Fazladan bir durumun sayısı kadar büyük cevap" },
        { hata: "Aynı değerdeki nesneleri özdeş sanıp o durumu tek saymak", uretir: "C(k,2) yerine 1 — eksik sayım" },
        { hata: "Uygun değer ikililerinden birini listeden atlamak", uretir: "Şıklarda hemen komşuda duran eksik toplam" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["sayi-problemleri"],
      ornek: {
        soru: "Bir rafta ağırlıkları 2 kg olan 3 farklı, 3 kg olan 4 farklı ve 5 kg olan 2 farklı paket vardır. Bu paketlerden 2'si, ağırlıkları toplamı 6 kg'dan büyük olacak biçimde kaç farklı şekilde seçilebilir?",
        cevap: "Uygun ikililer: 2+5 = 7 ⇒ 3⋅2 = 6; 3+5 = 8 ⇒ 4⋅2 = 8; 5+5 = 10 ⇒ C(2,2) = 1. (2+2 = 4, 2+3 = 5, 3+3 = 6 elenir; 6 > 6 değildir.) Toplam = 6 + 8 + 1 = 15",
      },
    },
    {
      id: "permutasyon-kombinasyon-tyt-05-binom-genel-terim",
      ad: "Binom genel terimi (belirli üslü terimin katsayısı)",
      aciklama:
        "İki terimlinin kuvveti alınır; belirli bir x kuvvetinin (çoğu zaman sabit terimin) katsayısı istenir ya da katsayı verilip parametre sorulur. Terimlerden biri hemen her zaman paydadadır (a/x, 1/x²), yani üssü negatiftir — sorunun bütün ayarı buraya kurulmuştur.",
      yontem: [
        "Genel terimi yaz: (A + B)ⁿ için T = C(n, k)⋅A^(n−k)⋅B^k.",
        "A ve B'deki x kuvvetlerini negatif üsleriyle birlikte topla, tek bir x^(…) üssü elde et.",
        "Bu üssü istenene eşitle, k'yi çöz; k tek başına belirlenir. Sabit terim isteniyorsa üs = 0.",
        "k'yi katsayıya taşı: parantez içindeki sabit çarpan katsayıya kendi k'ncı kuvvetiyle girer, işareti de yanında gelir.",
        "İki terimin katsayı oranı verilmişse önce her iki üs denklemini kurup k'leri bul, sonra oranı yaz — kombinasyon katsayıları büyük ölçüde sadeleşir.",
      ],
      celdiriciler: [
        { hata: "Paydadaki x'in negatif üssünü unutup üs denklemini yalnız n−k üzerinden kurmak", uretir: "Yanlış k, dolayısıyla bambaşka bir terimin katsayısı" },
        { hata: "Parantezdeki sabit çarpanı katsayıya katmamak (yalnız C(n,k) demek)", uretir: "Örnekte 240 yerine 15 — sabit çarpanın kuvveti düşmüş" },
        { hata: "Negatif tabanda işareti düşürmek", uretir: "Doğru cevabın işaretçe tersi" },
        { hata: "Terim sırası ile üssü karıştırmak (k'ncı terim ⇒ indis k−1)", uretir: "Bir kayık terimin katsayısı" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["uslu-ifadeler"],
      ornek: {
        soru: "(x² − 2/x)⁶ açılımındaki sabit terim kaçtır?",
        cevap: "T = C(6,k)⋅(x²)^(6−k)⋅(−2/x)^k = C(6,k)⋅(−2)^k⋅x^(12−3k); sabit terim için 12 − 3k = 0 ⇒ k = 4 ⇒ C(6,4)⋅(−2)⁴ = 15⋅16 = 240",
      },
    },
    {
      id: "permutasyon-kombinasyon-tyt-06-binom-katsayi-iliskileri",
      ad: "Binomda katsayılar toplamı, terim sayısı ve katsayı simetrisi",
      aciklama:
        "Genel terim tek başına yetmez; açılımın bütününe ait bir bilgi verilir: katsayılar toplamı, katsayıların aritmetik ortalaması ya da iki terimin katsayısının eşitliği. Üç ayrı binom bilgisi tek denklemde kaynaşır: katsayılar toplamı = ifadenin x = 1'deki değeri, terim sayısı = n + 1, ve C(n, r) = C(n, n − r) simetrisi.",
      yontem: [
        "Katsayılar toplamı isteniyorsa değişkene 1 ver; ifadenin sayısal değeri doğrudan toplamı verir.",
        "Terim sayısını n + 1 al — 'n tane' demek konunun en sık bir-hatasıdır.",
        "Katsayıların aritmetik ortalaması = (x = 1'deki değer) / (n + 1) kurup n'i çöz.",
        "Tabandan ortak çarpan alınabiliyorsa önce dışarı al; açılım saf binoma iner, üsler sabit bir kaymayla indise bağlanır.",
        "İki katsayı eşitse iki kol dene: ya indisler eşittir (çoğu soruda tutmaz) ya da indislerin toplamı n'dir — ikincisi n'i tek başına verir.",
      ],
      celdiriciler: [
        { hata: "Terim sayısını n almak (n + 1 yerine)", uretir: "Ortalamada bir kayık payda, yanlış n" },
        { hata: "C(n,r) = C(n,n−r) simetrisini atlayıp yalnız 'indisler eşit' kolunu denemek", uretir: "'Çözüm yok' sonucu ya da soruyu boş bırakma" },
        { hata: "İşareti değişen tabanda (−1)^k çarpanını düşürmek", uretir: "x = 1'de yanlış toplam, dolayısıyla yanlış n" },
        { hata: "Tabandaki ortak çarpanı dışarı almadan genel terimi kurmak", uretir: "Üsler indise düzgün bağlanmaz, denklem kurulamaz" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["uslu-ifadeler", "carpanlara-ayirma-tyt"],
      ornek: {
        soru: "(x + 1)ⁿ açılımında x⁴'lü terimin katsayısı ile x⁶'lı terimin katsayısı birbirine eşittir. Buna göre bu ortak katsayı kaçtır?",
        cevap: "x⁴'ün katsayısı C(n,4), x⁶'nın katsayısı C(n,6); 4 ≠ 6 olduğundan simetriden 4 + 6 = n ⇒ n = 10 ⇒ ortak katsayı C(10,4) = 210 (sağlama: C(10,6) = 210)",
      },
    },
    {
      id: "permutasyon-kombinasyon-tyt-07-esik-en-kucuk-n",
      ad: "Sayma sonucunu eşiğe bağlama (en küçük n, tam sayı avı)",
      aciklama:
        "Soru bir denklemle değil, bir saymayla bitiyor: 'en küçük n kaçtır', 'n'in alabileceği tam sayı değerlerinin toplamı kaçtır'. Kurulan C(n, k) ≥ N ya da benzeri eşitsizlik, cevabı iki ardışık tam sayı arasına sıkıştırır. Asıl iş eşitsizliğin uç noktasındadır; şıklar da ardışık tam sayılardan seçildiği için bir-hata yapan öğrenci kendini 'doğru' şıkta bulur.",
      yontem: [
        "Metindeki 'hiçbir ikisi aynı olmayacak' ifadesini sıralama değil, kümelerin farklı olması diye oku — sayım kombinasyondur.",
        "Eşitsizliği kur: kaç farklı seçim yapılabildiği, karşılanması gereken sayıdan büyük eşit olmalı.",
        "C(n, k)'yi açıp sadeleştir; genelde n cinsinden ikinci dereceden bir eşitsizlik kalır.",
        "Ardışık iki tam sayıyı elle dene: küçüğü koşulu bozmalı, büyüğü sağlamalı. Cevap, sağlayan ilk değerdir.",
        "Son adımı okumadan işaretleme: istenen n mi, n − 1 mi, yoksa uygun değerlerin toplamı mı?",
      ],
      celdiriciler: [
        { hata: "'Hiçbir ikisi aynı değil' koşulunu sıralama sanıp permütasyonla saymak", uretir: "k! kat şişmiş sayım, çok küçük n" },
        { hata: "Eşitsizliği sağlamayan son değeri (n − 1) işaretlemek", uretir: "Doğru cevabın yanındaki şık — klasik bir-hata" },
        { hata: "'Büyük eşit' yerine 'kesin büyük' çözmek", uretir: "Sınırda tam oturan durumlarda bir fazla n" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["ikinci-derece-esitsizlik-ayt"],
      ornek: {
        soru: "Bir kursta 20 öğrenci vardır. Her öğrenciye, n farklı seçmeli dersten 2'sinden oluşan bir ders programı verilecektir. Hiçbir iki öğrencinin programı aynı olmayacağına göre n en az kaç olmalıdır?",
        cevap: "C(n,2) ≥ 20 ⇒ n(n−1)/2 ≥ 20 ⇒ n(n−1) ≥ 40; n = 6 için 6⋅5 = 30 < 40 (yetmez), n = 7 için 7⋅6 = 42 ≥ 40 ⇒ n = 7",
      },
    },
  ],
};

export default kb;
