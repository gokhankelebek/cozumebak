import type { TopicSoruTipleri } from "./types";

// Katı Cisimler (TYT · Analitik Geometri ve Katı Cisimler). Bu katalog,
// 2018-2025 AYT kâğıtlarındaki gerçek katı cisim sorularından ÇIKARILDI —
// ders kitabı kalıplarından değil. Ölçülen tablo şu: ÖSYM bu konuda "koninin
// hacmini bulunuz" diye sormuyor. Cismi bir dönüşümün içine sokuyor (sarma,
// katlama, kesip birleştirme, batırma, yontma) ve dönüşüm boyunca hangi
// niceliğin korunduğunu, hangisinin korunmadığını sorguluyor. Formül, sorunun
// son satırı; iş, ayrıtları/yarıçapı belirlemekte.
//
// Ölçülen iki genel kural:
//  • Hacim korunur, yüzey alanı korunmaz. Sarma ve katlama uzunlukları korur,
//    alanları korumaz. Soruların çoğu tam bu ayrımın üzerine kurulu.
//  • Yarıçap çoğu zaman verilmez ÇÜNKÜ sadeleşir. Yarıçapı aramak tuzaktır.
//
// Her örnek elle doğrulandı ve şekilsiz çözülebilecek biçimde yazıldı.
const kb: TopicSoruTipleri = {
  slug: "kati-cisimler-tyt",
  durum: "taslak", // → öğretmen onayından sonra "verified"
  tipler: [
    {
      id: "kati-cisimler-tyt-01-acinim-sarma",
      ad: "Açınımdan cisme: daire diliminden koni, katlanan karton",
      aciklama:
        "Düz bir kâğıt/karton sarılarak ya da katlanarak cisim elde edilir. Daire diliminden koni klasiğidir: dilimin YAY UZUNLUĞU koninin taban çemberi, dairenin YARIÇAPI ise koninin ANA DOĞRUSU olur. Sarma ve katlama uzunlukları korur, alanları korumaz — sorunun tamamı bu cümlede.",
      yontem: [
        "Kâğıdın yarıçapını ana doğru (yan yükseklik) olarak işaretle — yükseklik ya da taban yarıçapı DEĞİLDİR.",
        "Kalan dilimin merkez açısını bul: 360° eksi çıkarılan dilimin açısı. Çıkarılan dilimle işlem yapma.",
        "Yay uzunluğunu yaz: (kalan açı/360)·2πR. Bunu taban çemberine eşitle: 2πr ⇒ taban yarıçapı r.",
        "Ana doğru, taban yarıçapı ve yükseklik bir dik üçgen kurar: h = √(R²−r²).",
        "Katlanan karton sorularında da aynı mantık: katlamadan önceki kenar uzunlukları aynen korunur; eğik yüzü Pisagor'la bağla.",
      ],
      celdiriciler: [
        { hata: "Kâğıdın yarıçapını koninin yüksekliği (ya da taban yarıçapı) sanmak", uretir: "8 yerine doğrudan 10 — ana doğruyu cevap vermek" },
        { hata: "Çıkarılan dilimin yayını kullanmak, kalan dilimin yerine", uretir: "r=4 ⇒ h=2√21 gibi şıklara uymayan köklü değer" },
        { hata: "Yayı tam çember alıp dilimi hiç düşmemek", uretir: "r=10 ⇒ h=0 — anlamsız sonuç" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["dik-ucgen-pisagor", "cember-daire-tyt"],
      ornek: {
        soru: "Yarıçapı 10 cm olan daire şeklindeki bir kâğıttan, merkez açısı 144° olan bir dilim çıkarılıyor. Kalan parça, kesik kenarları tam çakışacak biçimde sarılarak bir dik dairesel koni elde ediliyor. Bu koninin yüksekliği kaç cm'dir?",
        cevap: "Kalan açı 360−144=216°; yay = (216/360)·2π·10 = 12π. Taban çemberi 2πr = 12π ⇒ r = 6. Ana doğru = kâğıdın yarıçapı = 10 ⇒ h = √(10²−6²) = 8 cm",
      },
    },
    {
      id: "kati-cisimler-tyt-02-izdusum-3b-pisagor",
      ad: "Düzleme dik izdüşüm ve uzayda Pisagor (eğik ↔ izdüşüm)",
      aciklama:
        "Düzlem dışındaki bir noktadan düzlem üzerindeki noktalara eğikler çizilir. Her eğik; yükseklik ile o eğiğin izdüşümünün kurduğu dik üçgenin hipotenüsüdür. ÖSYM eğiği doğrudan vermez, İZDÜŞÜMÜNÜ verir (çoğu kez izdüşümlerin kurduğu bir üçgen üzerinden) ve eğiği geri kurdurur.",
      yontem: [
        "Noktanın düzleme dik izdüşümünü (ayağını) belirle; noktanın düzleme uzaklığı bu ayağa olan dik uzaklıktır.",
        "Her eğik için ayrı dik üçgen kur: dik kenarlar = yükseklik ve izdüşüm uzunluğu; hipotenüs = eğiğin kendisi.",
        "Eğik = √(yükseklik² + izdüşüm²). Yükseklik hipotenüs değildir — çıkarma yapma.",
        "İzdüşümler bir eşkenar/ikizkenar üçgen kuruyorsa, kenar eşitliğinden izdüşüm uzunluklarını çek; sonra her eğiği tek tek yaz.",
        "İstenen şey eğiklerin toplamı/çarpımı olabilir; izdüşümleri cevap verme.",
      ],
      celdiriciler: [
        { hata: "İzdüşüm uzunluğunu eğik uzunluğu sanıp doğrudan cevaplamak", uretir: "27 yerine 6+15 = 21" },
        { hata: "Yüksekliği hipotenüs sanıp kareleri çıkarmak", uretir: "10 yerine √(8²−6²) = √28" },
        { hata: "Yüksekliği tabana dik olmayan bir kenara oturtmak", uretir: "dik üçgen kurulmaz; köklü, şıklara uymayan değer" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["dik-ucgen-pisagor", "analitik-geometri-tyt"],
      ornek: {
        soru: "Bir düzlem üzerinde alınan K noktasından bu düzleme dik olarak çıkılan doğru üzerinde, düzleme uzaklığı 8 birim olan T noktası işaretleniyor. Düzlem üzerinde, K noktasına uzaklıkları sırasıyla 6 birim ve 15 birim olan A ve B noktaları için |TA| + |TB| toplamı kaç birimdir?",
        cevap: "T'nin izdüşümü K; her eğik yükseklik ile izdüşümün kurduğu dik üçgenin hipotenüsü. |TA|=√(8²+6²)=10 (6-8-10), |TB|=√(8²+15²)=√289=17 (8-15-17) ⇒ toplam 27 birim",
      },
    },
    {
      id: "kati-cisimler-tyt-03-hacim-esitliginden-oran",
      ad: "Hacim eşitliğinden oran çekme (taşan su, eşit hacimli cisimler)",
      aciklama:
        "Ölçülen en sık kalıp. İki hacim birbirine eşitlenir (batırılan cismin hacmi = taşan su; ya da doğrudan 'hacimleri eşit iki cisim') ve bir ORAN istenir. Eşitlik yazılınca yarıçap/yükseklik birbirine bağlanır, istenen oran sayıya iner. Ağzına kadar dolu kaba tamamen batırılan cisim, HACMİ KADAR su taşırır.",
      yontem: [
        "Batırma sorusunda önce yaz: taşan su hacmi = batan cismin hacmi (kap ağzına kadar doluysa).",
        "Verilen kesri KABIN hacmine oranla — kapta kalan suya değil.",
        "İki hacmi formülleriyle yaz ve eşitle; π ve ortak yükseklik çarpanları sadeleşir.",
        "Elde kalan yarıçap KARELERİNİN oranıdır: karekök almayı unutma. Oran hacimde kareye/küpe çıkar, uzunlukta çıkmaz.",
        "'Hacimleri eşit' kalıbında yarıçapların eşit OLMADIĞINA dikkat: eşitlik r²h çarpımlarını eşitler, r'leri değil.",
      ],
      celdiriciler: [
        { hata: "Taşan kesri kabın hacmi yerine kapta kalan suya oranlamak", uretir: "2 yerine 3√2/2 gibi köklü değer" },
        { hata: "Hacim oranını doğrudan yarıçap oranı sanıp karekök almamak", uretir: "2 yerine 4" },
        { hata: "'Hacimleri eşit' ifadesinden yarıçapları da eşit saymak", uretir: "oranı 1 vermek; ya da benzerlik oranını hacme uygulayıp küple çalışmak" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["oran-oranti-tyt", "ucgende-benzerlik-alan"],
      ornek: {
        soru: "Silindir biçimindeki bir kap ağzına kadar su doludur. Yüksekliği kabın yüksekliğinin yarısı olan silindir biçimindeki bir blok, bu kaba tamamen batırılıyor ve kaptaki suyun 1/8'i taşıyor. Kabın taban yarıçapının bloğun taban yarıçapına oranı kaçtır?",
        cevap: "Kap (R, H), blok (r, H/2). Taşan su = blok hacmi ⇒ πr²(H/2) = (1/8)πR²H ⇒ r²/2 = R²/8 ⇒ r² = R²/4 ⇒ R/r = 2",
      },
    },
    {
      id: "kati-cisimler-tyt-04-kosullu-yuzey-sayimi",
      ad: "Koşullu yüzey sayımı (\"zemin hariç\", bant sarma, kesişimler)",
      aciklama:
        "Yüzey alanı istenir ama formül doğrudan işlemez: sorudaki kayıt hangi yüzlerin sayılacağını değiştirir. \"Zemin hariç\", \"alt yüz hariç\", \"tamamen kapalı\" gibi ifadeler süs değildir — her biri bir yüzü listeye sokar ya da listeden çıkarır. Bant/şerit sarma sorularında bantlar ÜST ÜSTE BİNER; kesişen bölge iki kez sayılmamalıdır.",
      yontem: [
        "Önce yüz listesini çıkar: hangi yüzler sayılacak, hangileri kayıt gereği dışarıda? Kaydı cisimlerin HEPSİNE tutarlı uygula.",
        "\"Tamamen kapalı\" denmişse uç kapaklar sayılır (yarım silindirin iki yarım daire kapağı birlikte tam bir daire eder).",
        "Bant sarmada: her bandın geçtiği yüz sayısını belirle, bant alanı = genişlik × o yüzdeki uzunluk.",
        "Kaplanan alan = bantların ayrı ayrı alanları toplamı − kesişim alanları. Kesişimleri SAY: iki dik bant hem üstte hem altta kesişir.",
        "Alan ve hacim birlikte isteniyorsa iki denklemli sistem kur; a veya h'yi bulunca durma, istenen niceliği yaz.",
      ],
      celdiriciler: [
        { hata: "Bantların alanlarını doğrudan toplamak (kesişimleri çift saymak)", uretir: "152 yerine 160" },
        { hata: "Kesişimi yalnız üst yüzde sayıp alt yüzdekini atlamak", uretir: "152 yerine 156" },
        { hata: "\"Hariç\" kaydını cisimlerden yalnız birine uygulamak (ya da uç kapakları hiç saymamak)", uretir: "oranı yanlış tabanla kurmak — 7/6 yerine 1'e yakın değerler" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["dortgenler-tyt"],
      ornek: {
        soru: "Bir ayrıtı 10 cm olan küp biçimindeki bir kutuya, genişlikleri 2 cm olan iki bant sarılıyor. Bantlar ayrıtlara paralel, birbirine dik doğrultuda olup her biri kutuyu tam bir tur dolanmakta ve her biri dört yüzden geçmektedir. İki bandın kutu üzerinde kapladığı toplam alan kaç cm²'dir?",
        cevap: "Her bant 4 yüzden geçer: 4·(10·2) = 80 cm². İki bant dik olduğundan üst yüzde ve alt yüzde birer 2·2 = 4 cm²'lik kare bölgede kesişir. Kaplanan alan = 80+80 − 4 − 4 = 152 cm²",
      },
    },
    {
      id: "kati-cisimler-tyt-05-kesip-yeniden-birlestirme",
      ad: "Kesip yeniden birleştirme (hacim korunur, yüzey alanı korunmaz)",
      aciklama:
        "Bir prizma özdeş parçalara ayrılır, parçalar boşluk kalmadan FARKLI biçimde birleştirilir; son cismin yüzey alanı istenir. Ayırt edici nokta: hacim değişmez ama yüzey alanı DEĞİŞİR. İşin tamamı yeni prizmanın üç ayrıtını belirlemek; ayrıtlar çıkınca formül rutindir.",
      yontem: [
        "Kesme düzlemini oku ve tek bir parçanın üç ayrıtını yaz (özdeş parçalar ⇒ kesilen ayrıt ikiye bölünür).",
        "Yeni birleşmede parçaların HANGİ yüzlerinin çakıştığını belirle; çakışan yüz doğrultusunda ayrıt iki katına çıkar.",
        "Yeni üç ayrıtı yazıp yüzey alanını hesapla: 2(ab+bc+ac).",
        "Sağlama: hacim ilk cisminkiyle aynı mı? Aynı değilse ayrıtları yanlış okudun.",
        "Çakışan yüzler cismin İÇİNDE kalır; yüzey alanına eklenmez.",
      ],
      celdiriciler: [
        { hata: "Yüzey alanının da hacim gibi korunduğunu sanmak", uretir: "128 yerine ilk prizmanın alanı 136" },
        { hata: "Kesim yüzeylerini yeni cismin yüzeyine de eklemek (içeride kaldığını görmemek)", uretir: "128 + 2·12 = 152" },
        { hata: "Parçaları eski haliyle birleştirip aynı prizmayı kurmak", uretir: "3·4·8 prizmasının alanı 136 — 'değişmedi' sonucu" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["dortgenler-tyt"],
      ornek: {
        soru: "Ayrıt uzunlukları 3 cm, 4 cm ve 8 cm olan bir dikdörtgenler prizması, 8 cm'lik ayrıtlara dik bir düzlemle iki özdeş parçaya ayrılıyor. Bu iki parça, 4 cm × 4 cm boyutundaki yüzleri tam çakışacak biçimde birleştirilerek yeni bir dikdörtgenler prizması elde ediliyor. Yeni prizmanın yüzey alanı kaç cm²'dir?",
        cevap: "Kesim 8'i ikiye böler ⇒ her parça 3×4×4. Parçalar 4×4 yüzlerinden birleşince 3'lük ayrıt iki katına çıkar: yeni prizma 6×4×4. Yüzey alanı = 2(6·4+6·4+4·4) = 2·64 = 128 cm². (Hacim 96 cm³ ile korunuyor; ilk prizmanın alanı 136 idi.)",
      },
    },
    {
      id: "kati-cisimler-tyt-06-donusumde-hacim-izleme",
      ad: "Dönüşüm boyunca hacmi izleme (yontma; yarıçap sadeleşir)",
      aciklama:
        "Silindirin bir ucu yontularak koniye çevrilir (kalem klasiği) ya da benzer bir dönüşüm yapılır; hacimdeki YÜZDE değişim üzerinden bir uzunluk istenir. Kilit oran şu: aynı taban ve aynı yükseklikte koninin hacmi silindirin 1/3'üdür ⇒ bir parça silindir koniye dönüşürse o parçanın hacminin tam 2/3'ü yok olur. Yarıçap her terimde geçtiği için sadeleşir; verilmemesi eksiklik değil, tasarımdır.",
      yontem: [
        "Yarıçapa r de ve peşine düşme — sadeleşecek.",
        "İlk hacmi yaz: πr²·(toplam boy).",
        "Son hacmi parça parça yaz: kalan silindir + koni = πr²·h₁ + (1/3)πr²·h₂.",
        "Kısayol: yontulan h₂ boyundaki parçanın hacminin 2/3'ü gider ⇒ kayıp = (2/3)·h₂ / (toplam boy).",
        "Toplam boyun değişmediğini kontrol et: yontma boyu kısaltmıyorsa ilk hacmin tabanı aynı kalır.",
      ],
      celdiriciler: [
        { hata: "Yontulan parçanın tamamının yok olduğunu sanmak (koninin hacmini sıfır almak)", uretir: "%20 yerine %30" },
        { hata: "Koni hacminde 1/3 çarpanını unutup silindir gibi almak", uretir: "%0 — 'hacim değişmedi' sonucu" },
        { hata: "Yarıçapı bulmaya çalışmak; veri olmadığı için soruyu eksik sanmak", uretir: "çözümsüz bırakma — oysa r sadeleşiyor" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["yuzde-kar-zarar"],
      ornek: {
        soru: "Silindir biçimindeki 20 cm yüksekliğinde bir mumun bir ucu, toplam yüksekliği değişmeyecek biçimde, tepesi uçta olan bir koni oluşturacak şekilde yontuluyor. Yontularak koni haline getirilen kısmın yüksekliği 6 cm olduğuna göre, mumun hacmi yüzde kaç azalmıştır?",
        cevap: "İlk hacim πr²·20. Son hacim = πr²·14 + (1/3)πr²·6 = πr²·16. Azalma = 4πr²/20πr² = 1/5 ⇒ %20. (r sadeleşti; kısayol: (2/3)·6 = 4 birim boy kadar hacim gider, 4/20 = %20.)",
      },
    },
    {
      id: "kati-cisimler-tyt-07-birim-kup-elemeli",
      ad: "Birim küplerden cisim + \"hangisi olamaz\" (elemeli kalıp)",
      aciklama:
        "Birkaç birim küp, yüzleri tam çakışacak biçimde yapıştırılır; oluşabilecek cisimlerde iki köşe arasındaki uzaklığın hangi değeri ALAMAYACAĞI sorulur. Kalıp olumsuz: bir tek şık elenene kadar iş bitmez. Üç küp için yalnız İKİ dizilim vardır: doğrusal ve L biçimi. İkisini birden taramayan öğrenci mutlaka yanılır.",
      yontem: [
        "Bütün dizilimleri listele — üç küp için doğrusal (1×1×3) ve L biçimi; biri atlanırsa soru çöker.",
        "Köşelere koordinat ver (birim küpler ⇒ tam sayı koordinatlar).",
        "Her dizilim için köşeler arası uzaklıkları uzayda Pisagor'la üret: √(Δx²+Δy²+Δz²).",
        "İki dizilimin ürettiği uzaklıkları BİRLEŞTİR; şıklarda bu birleşik listede olmayanı işaretle.",
        "Ölçülen ayrıntı: doğrusal dizilim √10 ve √11'i üretir, L biçimi üretmez; buna karşılık 2√2 SADECE L biçiminde çıkar. Elemenin döndüğü yer tam burasıdır.",
      ],
      celdiriciler: [
        { hata: "Yalnız doğrusal dizilimi düşünüp L biçimini atlamak", uretir: "2√2'yi 'olamaz' sanmak — oysa L biçiminde çıkıyor" },
        { hata: "Cisim köşegenini √(1+9)=√10 alıp en büyük sanmak (1×1×3'te doğrusu √11)", uretir: "√11 yerine √10" },
        { hata: "\"Olamaz\" kalıbında ilk uyan şıkkı işaretleyip taramayı bırakmak", uretir: "3 ya da √6 gibi gerçekte oluşabilen bir uzaklığı cevap vermek" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["dik-ucgen-pisagor", "analitik-geometri-tyt", "olasilik-tyt"],
      ornek: {
        soru: "Üç birim küp, her biri diğerine bir yüzü tam çakışacak biçimde yapıştırılarak bir cisim oluşturuluyor. Oluşabilecek cisimlerin köşeleri arasındaki en büyük uzaklık kaç birimdir?",
        cevap: "İki dizilim var. Doğrusal dizilim 1×1×3 prizmadır; cisim köşegeni √(1²+1²+3²) = √11 ≈ 3,32. L biçiminde en büyük uzaklık ise √(2²+2²+1²) = 3'tür. √11 > 3 olduğundan en büyük uzaklık √11 birimdir.",
      },
    },
  ],
};

export default kb;
