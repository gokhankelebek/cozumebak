import type { TopicSoruTipleri } from "./types";

// Polinom Kavramı (AYT · Polinomlar). Teacher's catalogue of how ÖSYM asks this
// topic: polinom olma koşulu, derece, P(1)/P(0) altın kuralları, katsayı avı.
// Ordered easy→hard. Every örnek is hand-verified; celdiriciler map each classic
// wrong answer to the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "polinom-kavrami-ayt",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "polinom-kavrami-01-polinom-olma",
      ad: "Polinom olma koşulu (parametre bulma)",
      aciklama:
        "Üssünde parametre olan ifadenin polinom olması için üslerin negatif olmayan TAM sayı olması gerekir. Konunun tanım sorusu.",
      yontem: [
        "Her terimin üssünü yaz; polinomsa üs doğal sayı (0, 1, 2, …) olmalı.",
        "Parametreli üs için 'negatif olmayan tam sayı' koşulunu kur: üs ≥ 0 ve tam sayı.",
        "Koşulu sağlayan parametre değerlerini listele; üssün 0 olabileceğini (x⁰ = 1 sabit terimdir) unutma.",
      ],
      celdiriciler: [
        { hata: "Üssün 0 olamayacağını sanıp üs > 0 almak", uretir: "Bir eksik sayım (7 yerine 6)" },
        { hata: "m'nin 0 olamayacağını sanmak (doğal sayıya 0'ı dahil etmemek)", uretir: "Bir eksik sayım (7 yerine 6)" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "P(x)=x⁶⁻ᵐ+4x+1 ifadesi bir polinom olduğuna göre m kaç farklı doğal sayı değeri alabilir?",
        cevap: "6−m ∈ {0,1,…,6} olmalı ⇒ m ∈ {0,1,…,6}, 7 değer",
      },
    },
    {
      id: "polinom-kavrami-02-katsayilar-toplami",
      ad: "Katsayılar toplamı P(1), sabit terim P(0) — dönüşümlü ifadede",
      aciklama:
        "P(ax+b) verilir, P(x)'in katsayılar toplamı veya sabit terimi istenir. İç ifadeyi 1'e (veya 0'a) eşitleyip x'i çekmek altın kuraldır.",
      yontem: [
        "Katsayılar toplamı = P(1), sabit terim = P(0). Önce hangisinin istendiğini netleştir.",
        "İç ifadeyi hedefe eşitle: P(3x+1) verilmişse P(1) için 3x+1 = 1 ⇒ x = 0.",
        "Bulduğun x'i verilen ifadenin SAĞ tarafında yerine koy.",
      ],
      celdiriciler: [
        { hata: "Katsayılar toplamı için doğrudan x = 1 koymak (iç ifadeyi 1'e eşitlememek)", uretir: "P(1) yerine P(a+b) değeri (2 yerine 5)" },
        { hata: "Katsayılar toplamını P(0) sanmak", uretir: "Sabit terim ile karışmış cevap" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "P(3x+1)=9x²−6x+2 olduğuna göre P(x) polinomunun katsayılar toplamı kaçtır?",
        cevap: "P(1) için 3x+1=1 ⇒ x=0: P(1)=9⋅0−6⋅0+2=2",
      },
    },
    {
      id: "polinom-kavrami-03-derece",
      ad: "Türetilmiş derece hesabı — P(xⁿ), P·Q, kuvvetler",
      aciklama:
        "deg P ve deg Q verilir; P(x²)·Q³(x) gibi bileşik ifadenin derecesi istenir. Kurallar: çarpımda dereceler TOPLANIR, P(xⁿ)'de derece n katına çıkar, Pᵏ'nin derecesi k·deg P olur.",
      yontem: [
        "deg[P(xⁿ)] = n·deg P — her x yerine xⁿ girdiği için üsler n ile çarpılır.",
        "deg(Pᵏ) = k·deg P ve deg(P·Q) = deg P + deg Q.",
        "İfadeyi parça parça hesapla, en son dereceleri topla.",
      ],
      celdiriciler: [
        { hata: "P(x²) derecesini çarpmak yerine toplamak (3+2=5 almak)", uretir: "Bir eksik toplam (12 yerine 11)" },
        { hata: "Çarpımda dereceleri toplamak yerine çarpmak", uretir: "Aşırı büyük değer (12 yerine 36)" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "deg P(x)=3 ve deg Q(x)=2 olduğuna göre deg[P(x²)⋅Q³(x)] kaçtır?",
        cevap: "deg P(x²)=3⋅2=6, deg Q³=3⋅2=6 ⇒ 6+6=12",
      },
    },
    {
      id: "polinom-kavrami-04-ic-ifade-degeri",
      ad: "P(ax+b) verilip P(c) isteme (uygun x seçimi)",
      aciklama:
        "P(2x+1) = … verilir, P(5) istenir. Polinomu açmak yerine iç ifadeyi c'ye eşitleyip x'i bulmak en hızlı yoldur; yön şaşırılırsa soru yanlış çözülür.",
      yontem: [
        "İç ifadeyi istenen değere eşitle: 2x+1 = 5 ⇒ x = 2.",
        "Bulduğun x'i eşitliğin sağ tarafında yerine koy.",
        "Kontrol: bulduğun x gerçekten iç ifadeyi c yapıyor mu?",
      ],
      celdiriciler: [
        { hata: "x = 5'i doğrudan sağ tarafta yerine koymak (bu P(11)'i verir)", uretir: "15 yerine 45" },
        { hata: "İç ifadeyi eşitlerken denklemi yanlış çözmek (2x+1=5 ⇒ x=3 gibi)", uretir: "Yanlış noktada hesaplanmış değer" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "P(2x+1)=x²+3x+5 olduğuna göre P(5) kaçtır?",
        cevap: "2x+1=5 ⇒ x=2: P(5)=4+6+5=15",
      },
    },
    {
      id: "polinom-kavrami-05-polinom-esitligi",
      ad: "Polinom eşitliğinden (özdeşlik) katsayı bulma",
      aciklama:
        "İki polinom her x için eşitse aynı dereceli terimlerin katsayıları eşittir. Katsayılardan denklem sistemi kurdurur.",
      yontem: [
        "Her iki tarafı da derecelere göre hizala; eksik dereceli terimin katsayısı 0'dır.",
        "Aynı dereceli katsayıları eşitle, denklem sistemini yaz.",
        "Sistemi çöz (genelde toplama/çıkarma yeter), istenen kombinasyonu hesapla.",
      ],
      celdiriciler: [
        { hata: "a−b = 1 denklemini a+b = 1 diye kurmak (işaret karışıklığı)", uretir: "a ve b yer değişmiş çözüm (24 yerine yanlış çarpım)" },
        { hata: "Sabit terimleri eşitlemeyi unutup c'yi belirsiz bırakmak", uretir: "c'siz, eksik bir sonuç" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      ornek: {
        soru: "Her x için (a+b)x²+(a−b)x+4 = 5x²+x+c olduğuna göre a⋅b⋅c kaçtır?",
        cevap: "a+b=5, a−b=1 ⇒ a=3, b=2; c=4 ⇒ 3⋅2⋅4=24",
      },
    },
    {
      id: "polinom-kavrami-06-cift-tek-katsayilar",
      ad: "Çift / tek dereceli terimlerin katsayıları toplamı",
      aciklama:
        "Açılamayacak kadar büyük bir polinomda (kuvvet biçiminde verilir) çift veya tek dereceli katsayıların toplamı istenir. Formül: çift = [P(1)+P(−1)]/2, tek = [P(1)−P(−1)]/2.",
      yontem: [
        "P(1) ve P(−1) değerlerini hesapla — polinomu asla açma.",
        "Çift dereceliler için toplamın yarısı: [P(1)+P(−1)]/2 (sabit terim de çift kabul edilir).",
        "Tek dereceliler için farkın yarısı: [P(1)−P(−1)]/2. P(−1) hesabında işaretlere dikkat.",
      ],
      celdiriciler: [
        { hata: "Tek istendiği hâlde çift formülünü ([P(1)+P(−1)]/2) kullanmak", uretir: "1 yerine 0" },
        { hata: "P(−1) hesabında tek kuvvetin işaretini çevirmemek", uretir: "P(−1)=1 alınmış, yanlış pay" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "P(x)=(x²+x−1)⁵ polinomunda tek dereceli terimlerin katsayıları toplamı kaçtır?",
        cevap: "P(1)=1⁵=1, P(−1)=(−1)⁵=−1 ⇒ [1−(−1)]/2=1",
      },
    },
    {
      id: "polinom-kavrami-07-fonksiyonel-esitlik",
      ad: "Fonksiyonel eşitlikten değer bulma (ardışık adım)",
      aciklama:
        "P(x+k) = P(x) + … biçiminde bir fark bağıntısı ve bir başlangıç değeri verilir; ileri bir değer istenir. Uygun x'ler sırayla konularak zincir kurulur. Gerçek sınav zorluğu burada.",
      yontem: [
        "Bağıntıya başlangıçtan itibaren uygun x değerlerini sırayla koy: x = 0, sonra x = k, …",
        "Her adımda bir önceki değeri kullanarak zinciri ilerlet.",
        "İstenen noktaya ulaşınca dur; adım sayısını (kaç kez k eklendiğini) kontrol et.",
      ],
      celdiriciler: [
        { hata: "Tek adımda gitmek: P(4) = P(0) + (4⋅4+4) sanmak", uretir: "17 yerine 21" },
        { hata: "x = 4 koyup P(6) yönünde ilerlemek (bağıntının yönünü şaşırmak)", uretir: "İstenmeyen noktanın değeri" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["polinomlarda-bolme-ayt"],
      ornek: {
        soru: "Her x için P(x+2)=P(x)+4x+4 ve P(0)=1 olduğuna göre P(4) kaçtır?",
        cevap: "x=0: P(2)=1+4=5; x=2: P(4)=5+(8+4)=17",
      },
    },
  ],
};

export default kb;
