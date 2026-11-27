import type { TopicSoruTipleri } from "./types";

// BİRİNCİ DERECEDEN DENKLEM VE EŞİTSİZLİK PROBLEMLERİ (9. sınıf · Nicelikler ve
// Değişimler). Sözel durumu bilinmeyenle modelleme, denklemi ya da eşitsizliği
// çözme ve sonucu bağlama geri okuma. Arketipler MEB programındaki öğrenme
// çıktılarından ve okul sınavlarının alışılmış soru kalıplarından çıkarıldı
// (ÖSYM kataloğundan değil). Ordered easy→hard. Every örnek is hand-verified.
const kb: TopicSoruTipleri = {
  slug: "birinci-derece-problemler-9",
  durum: "taslak",
  tipler: [
    {
      id: "problem-9-01-sozelden-denkleme",
      ad: "Sözel ifadeyi denkleme çevirme",
      aciklama:
        "'Bir sayının 3 katının 5 eksiği 22'dir' gibi tek cümlelik bir ifade verilir. Sorunun ölçtüğü şey çeviridir: 'katı', 'eksiği', 'fazlası', 'yarısı' sözcüklerinin sırası işlemlerin sırasını belirler.",
      yontem: [
        "Bilinmeyeni adlandır: 'Sayı x olsun.'",
        "Cümleyi sözcük sözcük çevir: '3 katı' → 3x, '5 eksiği' → 3x − 5.",
        "Eşitliği yaz ve çöz.",
        "Bulduğun sayıyı cümlede yerine koyarak dene.",
      ],
      celdiriciler: [
        { hata: "'5 eksiğinin 3 katı' ile '3 katının 5 eksiği'ni karıştırmak", uretir: "3(x − 5) = 22 denkleminden çıkan, tam olmayan değer" },
        { hata: "'5'ten eksiği' gibi okuyup 5 − 3x yazmak", uretir: "Negatif çıkan sayı" },
        { hata: "Sabiti karşıya geçirirken işareti değiştirmemek", uretir: "3x = 17'den gelen değer" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "Bir sayının 3 katının 5 eksiği 22'dir. Bu sayı kaçtır?",
        cevap: "3x − 5 = 22 ⇒ 3x = 27 ⇒ x = 9 (kontrol: 3⋅9 − 5 = 22)",
      },
    },
    {
      id: "problem-9-02-toplam-kisiti",
      ad: "Toplamı bilinen iki parça",
      aciklama:
        "İki grubun toplamı ve aralarındaki ilişki verilir (30 kişilik sınıfta kızların sayısı erkeklerin 2 katından 3 eksik). Tek bilinmeyen yeter: parçalardan biri x ise diğeri ilişkiden yazılır ve toplam denklemi kurulur.",
      yontem: [
        "İlişkide 'şunun katı' diye anılan grubu x seç.",
        "Diğer grubu x cinsinden yaz.",
        "İki ifadenin toplamını verilen toplama eşitle ve çöz.",
        "İKİ grubu da hesapla, toplamı kontrol et, sorunun hangisini istediğine bak.",
      ],
      celdiriciler: [
        { hata: "x'i bulup sorulan diğer grubu hesaplamamak", uretir: "İstenen grubun değil öbür grubun sayısı" },
        { hata: "İlişkiyi ters gruba yazmak", uretir: "Toplamı tutan ama grupları yer değiştirmiş cevap" },
        { hata: "Toplam denkleminde sabiti unutmak (x + 2x = 30)", uretir: "İlişkideki '3 eksik' kısmını sağlamayan sayılar" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "30 kişilik bir sınıfta kız öğrencilerin sayısı, erkek öğrencilerin sayısının 2 katından 3 eksiktir. Sınıfta kaç kız öğrenci vardır?",
        cevap: "Erkek x, kız 2x − 3; x + 2x − 3 = 30 ⇒ x = 11; kız = 2⋅11 − 3 = 19 (kontrol: 11 + 19 = 30)",
      },
    },
    {
      id: "problem-9-03-sabit-ve-degisken",
      ad: "Sabit tutar + birim tutar problemi",
      aciklama:
        "Bir kez ödenen sabit bir tutar ile her birimde ödenen tutar vardır (üyelik + seans, açılış + kilometre). Toplam verilip birim sayısı ya da birim sayısı verilip toplam sorulur. Doğrusal fonksiyon konusunun problem hâlidir.",
      yontem: [
        "Sabit tutarı ve birim tutarı ayır; x'in neyi saydığını yaz.",
        "Modeli kur: toplam = birim tutar ⋅ x + sabit tutar.",
        "Verilen toplamı yerine koyup x'i çöz.",
        "Cevabı birimiyle yaz.",
      ],
      celdiriciler: [
        { hata: "Toplamdan sabit tutarı çıkarmadan bölmek", uretir: "Gerçek değerden büyük birim sayısı" },
        { hata: "Sabit tutarı da x ile çarpmak", uretir: "Çok küçük çıkan birim sayısı" },
        { hata: "Birim sayısı yerine toplam tutarı cevap vermek", uretir: "Sorunun istemediği büyüklük" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["dogrusal-fonksiyonlar-9"],
      ornek: {
        soru: "Bir spor salonu 600 TL üyelik ücreti ve her seans için 50 TL alıyor. Toplam 1350 TL ödeyen bir üye kaç seansa katılmıştır?",
        cevap: "50x + 600 = 1350 ⇒ 50x = 750 ⇒ x = 15 seans",
      },
    },
    {
      id: "problem-9-04-iki-tarife",
      ad: "İki tarifeyi karşılaştırma",
      aciklama:
        "Sabit ücreti düşük ama birim ücreti yüksek bir seçenek ile tersi verilir. 'Kaç birimde eşit öderler?' sorusu denklemle, 'hangi durumda A daha ucuz?' sorusu eşitsizlikle çözülür. Açık uçlu sınavlarda yorum cümlesi de puanlanır.",
      yontem: [
        "Her tarife için ayrı model yaz.",
        "Eşitlik için iki modeli birbirine eşitle ve x'i bul.",
        "Hangisinin ucuz olduğunu görmek için eşitlik noktasından büyük bir x dene.",
        "Sonucu cümleyle yaz: 'x saatten fazla kullanımda A tarifesi ucuzdur.'",
      ],
      celdiriciler: [
        { hata: "Eşitlik noktasını bulup karşılaştırma sorusunu cevapsız bırakmak", uretir: "Yarım çözüm" },
        { hata: "Birim ücreti düşük olanı her durumda ucuz saymak", uretir: "Az kullanımda yanlış tarife seçimi" },
        { hata: "Denklemde sabitleri aynı tarafa toplarken işaret hatası", uretir: "Negatif ya da kesirli eşitlik noktası" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["dogrusal-fonksiyonlar-9"],
      ornek: {
        soru: "A tarifesi 200 TL sabit ücret ve saat başına 15 TL, B tarifesi 80 TL sabit ücret ve saat başına 25 TL'dir. Kaç saatlik kullanımda iki tarife aynı tutarı verir? Daha uzun kullanımda hangisi ucuzdur?",
        cevap: "200 + 15x = 80 + 25x ⇒ 120 = 10x ⇒ x = 12 saat (ikisi de 380 TL). 12 saatten uzun kullanımda birim ücreti düşük olan A ucuzdur.",
      },
    },
    {
      id: "problem-9-05-en-cok-en-az",
      ad: "'En çok' ve 'en az' problemleri (eşitsizlik)",
      aciklama:
        "Bütçe, kapasite ya da hedef gibi bir sınır vardır ve 'en çok kaç tane', 'en az kaç gün' sorulur. Model eşitsizliktir: 'en çok, aşmamalı' ≤, 'en az, yeterli olmalı' ≥. Sonuç çoğu zaman kesirli çıkar ve bağlama göre yuvarlanır.",
      yontem: [
        "Sınırı ve sınırlanan toplamı belirle.",
        "Eşitsizliği kur: harcama ≤ bütçe ya da birikim ≥ hedef.",
        "Çöz; sonuç tam sayı değilse 'en çok' için aşağı, 'en az' için yukarı yuvarla.",
        "Bulduğun sayıyı ve bir fazlasını (ya da eksiğini) deneyerek kontrol et.",
      ],
      celdiriciler: [
        { hata: "'En çok'ta yukarı yuvarlamak", uretir: "Bütçeyi aşan, bir fazla adet" },
        { hata: "Eşitsizlik yerine denklem kurup kesirli sonucu cevap vermek", uretir: "Tam sayı olmayan adet" },
        { hata: "Daha önce harcanan tutarı bütçeden düşmemek", uretir: "Olduğundan büyük adet" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "500 TL'si olan Elif 140 TL'lik bir kitap aldıktan sonra tanesi 35 TL olan defterlerden en çok kaç tane alabilir?",
        cevap: "140 + 35x ≤ 500 ⇒ 35x ≤ 360 ⇒ x ≤ 10,28… ⇒ en çok 10 defter (10 defter 490 TL, 11 defter 525 TL)",
      },
    },
    {
      id: "problem-9-06-negatifle-bolme",
      ad: "Negatif katsayılı eşitsizlik",
      aciklama:
        "Bilinmeyenin katsayısı negatiftir (7 − 2x > 15). Çözüm sıradan bir denklem gibi ilerler, tek fark son adımdadır: negatif sayıyla bölünce eşitsizlik yön değiştirir. Çözüm kümesi çoğu zaman sayı doğrusunda ya da aralıkla da istenir.",
      yontem: [
        "Sabitleri bir tarafa topla: −2x > 8.",
        "Negatif katsayıya böl ve YÖNÜ ÇEVİR: x < −4.",
        "Sayı doğrusunda göster: −4 boş nokta, sola doğru taralı; aralık (−∞, −4).",
        "Çözümden bir sayı seçip ilk eşitsizlikte dene.",
      ],
      celdiriciler: [
        { hata: "Negatifle bölerken yönü çevirmemek", uretir: "Doğru çözümün tam tersi aralık" },
        { hata: "Sınır değeri çözüme katmak (< yerine ≤)", uretir: "Bir fazla tam sayı, dolu nokta" },
        { hata: "Sabiti karşıya geçirirken işaret hatası", uretir: "Kaymış sınır değeri" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["gercek-sayilar"],
      ornek: {
        soru: "7 − 2x > 15 eşitsizliğini sağlayan en büyük tam sayı kaçtır?",
        cevap: "−2x > 8 ⇒ x < −4; en büyük tam sayı −5 (kontrol: 7 − 2⋅(−5) = 17 > 15; x = −4 için 15 > 15 sağlanmaz)",
      },
    },
    {
      id: "problem-9-07-iki-tarafta-bilinmeyen",
      ad: "Yetişme ve eşitlenme problemleri",
      aciklama:
        "İki nicelik farklı başlangıç değerlerinden farklı hızlarla değişir (iki kumbara, iki depo) ve ne zaman eşitlenecekleri sorulur. Bilinmeyen iki tarafta da bulunur; biri artarken diğeri azalıyorsa işaretler karışır.",
      yontem: [
        "x'i geçen süre (hafta, dakika) olarak seç.",
        "Her nicelik için 'başlangıç ± hız ⋅ x' ifadesini yaz; azalan için eksi kullan.",
        "İki ifadeyi eşitle, bilinmeyenleri bir tarafa topla ve çöz.",
        "Bulduğun x için iki niceliği de hesaplayıp eşit olduklarını gör.",
      ],
      celdiriciler: [
        { hata: "Azalan niceliği de artı ile yazmak", uretir: "Negatif süre ya da hiç eşitlenmeyen model" },
        { hata: "Bilinmeyenleri toplarken birini karşıya işaret değiştirmeden geçirmek", uretir: "Hız farkı yerine hız toplamına bölünmüş süre" },
        { hata: "Süreyi bulup istenen ortak miktarı hesaplamamak", uretir: "Sorulan miktar yerine süre" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      ornek: {
        soru: "Ali'nin kumbarasında 120 TL, Zeynep'in kumbarasında 300 TL vardır. Ali her hafta 40 TL, Zeynep 10 TL biriktirirse kaç hafta sonra paraları eşit olur?",
        cevap: "120 + 40x = 300 + 10x ⇒ 30x = 180 ⇒ x = 6 hafta (ikisinin de 360 TL'si olur)",
      },
    },
  ],
};

export default kb;
