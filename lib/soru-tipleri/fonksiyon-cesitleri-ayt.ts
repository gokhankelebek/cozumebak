import type { TopicSoruTipleri } from "./types";

// Fonksiyon Çeşitleri (AYT · Fonksiyonlar). Teacher's catalogue of how ÖSYM asks
// this topic. Ordered easy→hard. Every örnek is hand-verified; celdiriciler map
// each classic wrong answer to the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "fonksiyon-cesitleri-ayt",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "fonksiyon-cesitleri-01-parcali",
      ad: "Parçalı tanımlı fonksiyonda değer",
      aciklama:
        "Fonksiyon iki (ya da üç) dalda tanımlanır; birkaç noktadaki değerlerin toplamı/farkı istenir. Konunun ısınma sorusu — tek iş doğru dalı seçmek.",
      yontem: [
        "Her girdi için önce koşulu kontrol et: x hangi aralıkta?",
        "Sınır noktasında eşitlik hangi dala aitse (≤, <) oradan hesapla.",
        "Değerleri ayrı ayrı bul, sonra istenen işlemi yap.",
      ],
      celdiriciler: [
        { hata: "Girdiyi yanlış dala koymak", uretir: "f(4)'ü üst daldan hesaplayınca 2·4+1=9 gibi yanlış terim" },
        { hata: "Sınır noktasında eşitliğin ait olduğu dalı karıştırmak", uretir: "x=3 tam sınırda iken iki daldan iki farklı değer" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "f(x) = 2x+1 (x<3), f(x) = x²−4 (x≥3) ise f(1)+f(4) kaçtır?",
        cevap: "1<3 ⇒ f(1)=2·1+1=3; 4≥3 ⇒ f(4)=16−4=12; toplam 15",
      },
    },
    {
      id: "fonksiyon-cesitleri-02-sabit-fonksiyon",
      ad: "Sabit fonksiyon koşulundan parametre",
      aciklama:
        "Rasyonel (ya da polinom) bir ifade 'sabit fonksiyondur' denir; parametre ve/veya sabit değer istenir. Anahtar: katsayılar orantılı olmalı.",
      yontem: [
        "(ax+b)/(cx+d) sabit ⇔ a/c = b/d; ortak oran sabit değerin kendisidir.",
        "Orandan parametreyi çöz.",
        "Sabit değer her x'te aynıdır — istenirse herhangi bir x koyarak (ör. x=0) bul.",
      ],
      celdiriciler: [
        { hata: "Orantı yerine yalnızca pay ve payda katsayılarını eşitlemek (a=c sanmak)", uretir: "a=2 gibi yanlış parametre" },
        { hata: "Sabit fonksiyonu birim fonksiyonla (f(x)=x) karıştırmak", uretir: "Parametreyi f(x)=x özdeşliğinden çözmeye çalışan çıkmaz denklem" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "f(x)=(ax+6)/(2x+3) sabit fonksiyon ise a+f(5) kaçtır?",
        cevap: "a/2=6/3=2 ⇒ a=4; sabit değer 2 (f(5)=26/13=2); a+f(5)=4+2=6",
      },
    },
    {
      id: "fonksiyon-cesitleri-03-dogrusal-katsayi",
      ad: "Doğrusal fonksiyonda f(f(x)) koşulundan katsayı",
      aciklama:
        "f(x)=ax+b verilir, f(f(x)) ya da f ile ilgili bir koşuldan a ve b istenir. a²'den çift kök çıkması sorunun asıl tuzağıdır.",
      yontem: [
        "f(f(x)) = a(ax+b)+b = a²x + ab + b olarak aç.",
        "Katsayıları verilen ifadeyle eşleştir: a² ve ab+b ayrı denklemler.",
        "a için iki kök çıkarsa sorudaki ek koşulu (a>0, f artan vb.) kullanarak seç.",
      ],
      celdiriciler: [
        { hata: "a²=4'ten yalnız a=2 alıp a=−2 dalını hiç kontrol etmemek (ya da tersi)", uretir: "a=−2, b=−9 dalı seçilirse a+b=−11" },
        { hata: "f(f(x)) yerine f(x)·f(x) hesaplamak", uretir: "İkinci dereceden, eşleşmeyen bir ifade" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "f(x)=ax+b (a>0) ve f(f(x))=4x+9 ise a+b kaçtır?",
        cevap: "a²=4, a>0 ⇒ a=2; ab+b=3b=9 ⇒ b=3; a+b=5",
      },
    },
    {
      id: "fonksiyon-cesitleri-04-tek-cift-parametre",
      ad: "Tek/çift fonksiyon koşulundan parametre",
      aciklama:
        "Polinom (bazen rasyonel) fonksiyonun tek ya da çift olduğu söylenir; katsayılardaki parametreler istenir. Kural: tek fonksiyonda yalnız tek dereceli, çift fonksiyonda yalnız çift dereceli terimler kalır.",
      yontem: [
        "Tek fonksiyon ⇒ çift dereceli terimler ve sabit terim sıfırlanır (f(0)=0).",
        "Çift fonksiyon ⇒ tek dereceli terimlerin katsayıları sıfırlanır; sabit terim serbesttir.",
        "Katsayı denklemlerini çöz; rasyonelde payda çiftse aynı kurallar paya uygulanır.",
      ],
      celdiriciler: [
        { hata: "Katsayıyı sıfıra eşitlerken işareti düşürmek (a+2=0'dan a=2 yazmak)", uretir: "a=2, b=−3 ⇒ a+b=−1 (doğrusu 1)" },
        { hata: "Tek/çift kurallarını ters uygulamak — çift fonksiyonda çift dereceli terimleri sıfırlamak", uretir: "4=0 gibi çelişki ya da sabit terimin gereksiz sıfırlanması" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["fonksiyon-grafik-tyt"],
      ornek: {
        soru: "f(x)=(a+2)x³+4x²+(b−3)x+1 çift fonksiyon ise a+b kaçtır?",
        cevap: "Tek dereceli katsayılar sıfır: a+2=0 ⇒ a=−2, b−3=0 ⇒ b=3; a+b=1",
      },
    },
    {
      id: "fonksiyon-cesitleri-05-tek-cift-deger",
      ad: "Tek/çift fonksiyonla değer hesabı (f(−a) ilişkisi)",
      aciklama:
        "f tek ya da çift bilgisi verilir; f(−a) veya f'den türetilmiş bir fonksiyonun negatif noktadaki değeri istenir. f tek ⇒ f(−a)=−f(a), f çift ⇒ f(−a)=f(a).",
      yontem: [
        "Önce verilen koşulu f cinsine indir: türetilmiş g varsa g'yi f ile yaz.",
        "Bilinen noktadan f'nin değerini çek.",
        "f(−a)'yı teklik/çiftlik kuralıyla bul, sonra istenen ifadeye geri taşı.",
      ],
      celdiriciler: [
        { hata: "Kaydırılmış fonksiyonu da tek sanmak: g(x)=f(x)+5 için g(−3)=−g(3) yazmak", uretir: "−12 (doğrusu −2)" },
        { hata: "Tek ve çift kurallarını karıştırıp f(−3)=f(3) almak", uretir: "g(−3)=7+5=12" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "f tek fonksiyon ve g(x)=f(x)+5 için g(3)=12 ise g(−3) kaçtır?",
        cevap: "f(3)=12−5=7; f tek ⇒ f(−3)=−7; g(−3)=−7+5=−2",
      },
    },
    {
      id: "fonksiyon-cesitleri-06-birebir-daraltma",
      ad: "Bire bir olması için tanım kümesini daraltma",
      aciklama:
        "Parabol gibi bire bir olmayan bir fonksiyonun tanım kümesi [k,∞) biçiminde kısıtlanır; bire birlik için k'nin alabileceği en küçük değer istenir. Anahtar: tepe noktasının apsisi.",
      yontem: [
        "İkinci dereceden fonksiyonun tepe apsisini bul: r = −b/(2a).",
        "Fonksiyon [r,∞) üzerinde tek yönlü (monoton) olduğundan bire birdir.",
        "En küçük k, tepe apsisi r'dir; yatay doğru testiyle zihinden doğrula.",
      ],
      celdiriciler: [
        { hata: "Tepe apsisi yerine tepe ordinatını (f(r)) almak", uretir: "k=−8 (f(3)=9−18+1) gibi ilgisiz değer" },
        { hata: "r=−b/(2a) hesabında işaret hatası", uretir: "k=−3" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["ikinci-derece-fonksiyonlar"],
      ornek: {
        soru: "f:[k,∞)→ℝ, f(x)=x²−6x+1 fonksiyonu bire bir ise k en az kaçtır?",
        cevap: "Tepe apsisi r=6/2=3; [3,∞) üzerinde f artan ⇒ bire bir; k=3",
      },
    },
    {
      id: "fonksiyon-cesitleri-07-orten-goruntu",
      ad: "Örtenlik için değer kümesi (görüntü kümesi hesabı)",
      aciklama:
        "Kapalı aralıkta tanımlı bir parabolün örten olması için değer kümesi istenir. Örten ⇔ değer kümesi = görüntü kümesi; tepe içeride mi kontrolü sorunun kalbi.",
      yontem: [
        "Tepe apsisini bul; tanım aralığının içinde mi bak.",
        "Tepe içerideyse min/max adaylarından biri tepe değeridir; uç noktaların değerlerini de hesapla.",
        "En küçük ve en büyük değerlerden görüntü kümesini yaz; örtenlik için değer kümesine eşitle.",
      ],
      celdiriciler: [
        { hata: "Tepeyi hiç kontrol etmeyip yalnız uç değerleri koymak", uretir: "[2,5] ⇒ a+b=7 (doğrusu [1,5] ve 6)" },
        { hata: "En büyük değer için iki ucu karşılaştırmayıp aralığın sağ ucunu almak", uretir: "Maksimumu f(3)=2 sanan yanlış aralık" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["ikinci-derece-fonksiyonlar"],
      ornek: {
        soru: "f:[0,3]→[a,b], f(x)=x²−4x+5 örten fonksiyon ise a+b kaçtır?",
        cevap: "Tepe x=2 içeride, f(2)=1; uçlar f(0)=5, f(3)=2; görüntü [1,5] ⇒ a+b=6",
      },
    },
  ],
};

export default kb;
