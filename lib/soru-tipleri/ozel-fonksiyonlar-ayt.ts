import type { TopicSoruTipleri } from "./types";

// Özel Fonksiyonlar (AYT · Fonksiyonlar). Teacher's catalogue of how ÖSYM asks
// this topic: mutlak değer, tam değer (taban), işaret ve parçalı fonksiyonlar.
// Ordered easy→hard. Every örnek is hand-verified; celdiriciler map each classic
// wrong answer to the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "ozel-fonksiyonlar-ayt",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "ozel-fonksiyonlar-01-mutlak-deger",
      ad: "Mutlak değer fonksiyonunda değer hesabı",
      aciklama:
        "Verilen noktada |…| içeren ifadenin değeri. Konunun ısınma sorusu; önce içeriyi hesapla, mutlak değeri en son al.",
      yontem: [
        "x değerini yerine koy, her mutlak değerin İÇİNİ sayısal olarak hesapla.",
        "İçerisi negatifse işaretini çevir: |−4| = 4. Mutlak değer asla negatif çıkmaz.",
        "Sonra toplama/çıkarma işlemlerini yap; |a−b| ≠ |a|−|b| olduğunu unutma.",
      ],
      celdiriciler: [
        { hata: "|a−b| yerine |a|−|b| hesaplamak", uretir: "İçi negatif terimlerde işareti ters kalmış toplam (7 yerine −1)" },
        { hata: "Mutlak değerden negatif sonuç çıkarmak (|−4| = −4)", uretir: "Doğru cevabın işaret hatalı versiyonu" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "f(x)=|x−5|+|x+2| ise f(1) kaçtır?", cevap: "f(1)=|−4|+|3|=4+3=7" },
    },
    {
      id: "ozel-fonksiyonlar-02-tam-deger",
      ad: "Tam değer (taban) fonksiyonunda değer hesabı",
      aciklama:
        "⌊x⌋ değeri: x'ten büyük olmayan en büyük tam sayı. Sorunun tüm tuzağı negatif sayılarda; taban daima AŞAĞIYA (sayı doğrusunda sola) gider.",
      yontem: [
        "Pozitifte ondalık kısmı at: ⌊3,7⌋ = 3. Tam sayının tabanı kendisidir.",
        "Negatifte aşağıya yuvarla: ⌊−2,4⌋ = −3, çünkü −2 sayısı −2,4'ten büyüktür ve koşulu sağlamaz.",
        "Terimleri tek tek hesapla, en son topla; ⌊a⌋+⌊b⌋ ≠ ⌊a+b⌋ olabilir.",
      ],
      celdiriciler: [
        { hata: "Negatifte ondalığı atıp ⌊−2,4⌋ = −2 almak", uretir: "Doğru cevaptan 1 fazla (0 yerine 1)" },
        { hata: "Tabanı en yakın tam sayıya yuvarlama sanmak (⌊3,7⌋ = 4)", uretir: "Pozitif terimlerde 1 fazla değer" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "⌊3,7⌋ + ⌊−2,4⌋ toplamı kaçtır?", cevap: "⌊3,7⌋=3, ⌊−2,4⌋=−3 ⇒ 3+(−3)=0" },
    },
    {
      id: "ozel-fonksiyonlar-03-isaret",
      ad: "İşaret fonksiyonu sgn(x) değer hesabı",
      aciklama:
        "sgn yalnızca işareti taşır: pozitife 1, negatife −1, sıfıra 0. Klasik tuzak, içerinin sıfır çıktığı terimi gözden kaçırmak.",
      yontem: [
        "Her sgn'nin içini ayrı hesapla; sayının kendisi değil yalnızca İŞARETİ önemli.",
        "sgn(pozitif)=1, sgn(negatif)=−1, sgn(0)=0 — üçüncü şıkkı unutma.",
        "Çıkan 1, −1, 0 değerleriyle işlemi bitir.",
      ],
      celdiriciler: [
        { hata: "İçi sıfır çıkan terimde sgn(0)=1 saymak", uretir: "Doğru cevaptan 1 fazla (0 yerine 1)" },
        { hata: "sgn değerini sayının kendisi sanmak (sgn(−7)=−7)", uretir: "Ölçekçe büyümüş, alakasız bir toplam" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "sgn(−7) + sgn(4²−16) + sgn(5) kaçtır?", cevap: "−1 + sgn(0) + 1 = −1+0+1 = 0" },
    },
    {
      id: "ozel-fonksiyonlar-04-tam-deger-aralik",
      ad: "Aralıktan tam değerli ifadenin değeri",
      aciklama:
        "x'in tam sayı olmadığı bir aralık verilir, ⌊x⌋ ve ⌊−x⌋ türü ifadelerin değeri istenir. ⌊−x⌋ = −⌊x⌋ sanmak konunun bir numaralı hatası.",
      yontem: [
        "Verilen aralıktan ⌊x⌋ değerini oku: n ≤ x < n+1 ise ⌊x⌋ = n.",
        "−x için aralığı işaret çevirerek yeniden yaz: 3 < x < 4 ise −4 < −x < −3.",
        "Yeni aralıktan ⌊−x⌋ değerini oku; x tam sayı DEĞİLSE ⌊x⌋+⌊−x⌋ = −1 çıkar.",
      ],
      celdiriciler: [
        { hata: "⌊−x⌋ = −⌊x⌋ sanmak (x tam sayıymış gibi davranmak)", uretir: "−1 yerine 0" },
        { hata: "−x aralığını çevirirken uçları karıştırıp ⌊−x⌋ = −3 almak", uretir: "−1 yerine 0" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      ornek: { soru: "3 < x < 4 olduğuna göre ⌊x⌋ + ⌊−x⌋ kaçtır?", cevap: "⌊x⌋=3; −4<−x<−3 ⇒ ⌊−x⌋=−4; 3+(−4)=−1" },
    },
    {
      id: "ozel-fonksiyonlar-05-karisik-zincir",
      ad: "Özel fonksiyonlarla değer zinciri — f(g(a))",
      aciklama:
        "Parçalı, mutlak değer, taban ve sgn aynı soruda zincirlenir: içten dışa hesap. ÖSYM'nin bu konudaki standart sınav ayarı.",
      yontem: [
        "En içteki fonksiyondan başla: önce g(a) değerini bitir.",
        "Çıkan sonucu dıştaki fonksiyona taşı; parçalıysa hangi parçaya düştüğünü koşuldan kontrol et.",
        "Her adımda özel fonksiyon kuralını (mutlak değer / taban / sgn) en son uygula.",
      ],
      celdiriciler: [
        { hata: "İçteki mutlak değeri atlayıp g(−4) = −5 ile devam etmek", uretir: "Yanlış parçaya düşülmüş değer (2 yerine −9)" },
        { hata: "⌊2,5⌋ değerini en yakına yuvarlayıp 3 almak", uretir: "Doğru cevaptan 1 fazla (2 yerine 3)" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["fonksiyon-cesitleri-ayt", "bileske-ters-fonksiyon-ayt"],
      ornek: {
        soru: "f(x)=2x+1 (x<3), f(x)=⌊x/2⌋ (x≥3) ve g(x)=|x−1| ise f(g(−4)) kaçtır?",
        cevap: "g(−4)=|−5|=5; 5≥3 ⇒ f(5)=⌊5/2⌋=⌊2,5⌋=2",
      },
    },
    {
      id: "ozel-fonksiyonlar-06-mutlak-toplam-aralik",
      ad: "İki mutlak değerin toplamı — aralıkta açılım / en küçük değer",
      aciklama:
        "|x−a|+|x−b| ifadesi kritik noktalar arasındaki aralıkta SABİTTİR ve en küçük değeri |a−b| olur. İşaret açılımı sorunun kalbidir.",
      yontem: [
        "Kritik noktaları bul: içerileri sıfır yapan x değerleri.",
        "Verilen aralıkta her içerinin işaretini belirle: negatifse −( ) ile, pozitifse olduğu gibi aç.",
        "Açılımları topla; kritik noktalar arasında x'ler sadeleşir ve sabit |a−b| kalır.",
      ],
      celdiriciler: [
        { hata: "Aralıkta negatif olan içeriyi pozitifmiş gibi açmak (|x−2| = x−2)", uretir: "Sabit yerine 2x+1 gibi değişkenli yanlış ifade" },
        { hata: "En küçük değeri kritik noktaları toplayarak aramak", uretir: "|a−b| yerine |a+b| değeri (5 yerine 1)" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "−3 ≤ x ≤ 2 için |x−2| + |x+3| ifadesinin değeri kaçtır?", cevap: "(2−x)+(x+3)=5 — aralıkta sabittir" },
    },
    {
      id: "ozel-fonksiyonlar-07-denklem-kok-sayisi",
      ad: "İç içe mutlak değerli denklemin kök sayısı",
      aciklama:
        "||x|−a| = k biçimindeki denklemde kök sayısı. Grafikle (W şekli) veya kademeli açılımla çözülür; her |…| = k adımı iki dal doğurur.",
      yontem: [
        "Dıştan aç: ||x|−a| = k ⇒ |x|−a = k veya |x|−a = −k.",
        "Her daldan |x| değerini çek; |x| = c denklemi c > 0 ise iki kök (x = ±c) verir.",
        "|x| negatif çıkan dalı at; geçerli dalların köklerini say.",
      ],
      celdiriciler: [
        { hata: "İkinci dalı (|x|−a = −k) hiç açmamak", uretir: "Kök sayısının yarısı (4 yerine 2)" },
        { hata: "|x| = c'den yalnız x = c almak, x = −c'yi unutmak", uretir: "Kök sayısının yarısı (4 yerine 2)" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["mutlak-deger-tyt"],
      ornek: {
        soru: "||x|−3| = 1 denkleminin kaç gerçek kökü vardır?",
        cevap: "|x|=4 veya |x|=2 ⇒ x∈{−4, −2, 2, 4}, 4 kök",
      },
    },
  ],
};

export default kb;
