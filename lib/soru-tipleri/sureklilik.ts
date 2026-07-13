import type { TopicSoruTipleri } from "./types";

// Süreklilik (AYT · Limit ve Süreklilik). Teacher's catalogue of how ÖSYM asks
// this topic. Ordered easy→hard. Every örnek is hand-verified; celdiriciler map
// each classic wrong answer to the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "sureklilik",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "sureklilik-01-uc-kosul",
      ad: "Noktada süreklilik: üç koşul kontrolü",
      aciklama:
        "Verilen (çoğunlukla parçalı) fonksiyonun bir noktada sürekli olup olmadığı sorulur. Tanım sorusu: f(a) var mı, limit var mı, ikisi eşit mi?",
      yontem: [
        "1) f(a) tanımlı mı? Değeri hangi parçadan geldiğine dikkat et.",
        "2) lim(x→a) f(x) var mı? Soldan ve sağdan ayrı hesapla, eşit olmalı.",
        "3) lim(x→a) f(x) = f(a) mı? Üçü de sağlanırsa süreklidir.",
      ],
      celdiriciler: [
        { hata: "Yalnızca f(a) tanımlı diye sürekli saymak", uretir: "Limitsiz noktada 'süreklidir' yanlış hükmü" },
        { hata: "Tek yönlü limitle karar vermek (sağdan bakıp soldan bakmamak)", uretir: "Sıçramalı noktada 'süreklidir' yanlış hükmü" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      kombinasyon: ["limit-kavrami"],
      ornek: {
        soru: "f(x) = { x+3, x<2 ; 7−x, x≥2 } fonksiyonu x=2 noktasında sürekli midir?",
        cevap: "Soldan 2+3=5, sağdan 7−2=5, f(2)=5. Üç değer eşit ⇒ süreklidir",
      },
    },
    {
      id: "sureklilik-02-parcali-parametre",
      ad: "Parçalı fonksiyonun sürekli olması için parametre",
      aciklama:
        "İki parçalı fonksiyonda birleşme noktasında süreklilik istenip parametre sorulur. Konunun standart sorusu: sol limit = sağ limit = fonksiyon değeri.",
      yontem: [
        "Birleşme noktasını belirle; her parça kendi aralığında zaten sürekli.",
        "Sol parçaya ve sağ parçaya birleşme noktasını koy, iki ifadeyi eşitle.",
        "Denklemi parametre için çöz.",
      ],
      celdiriciler: [
        { hata: "Parçalara birleşme noktası yerine 0 gibi rastgele değer koymak", uretir: "İlgisiz bir parametre değeri" },
        { hata: "Eşitliği kurup denklemi yanlış tarafa çözmek (2+a=4'ten a=6)", uretir: "İşaret/aktarma hatalı parametre" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "f(x) = { 2x+a, x<1 ; x²+3, x≥1 } tüm gerçek sayılarda sürekli ise a kaçtır?",
        cevap: "x=1'de: soldan 2+a, sağdan 1+3=4. 2+a=4 ⇒ a=2",
      },
    },
    {
      id: "sureklilik-03-delik-doldurma",
      ad: "0/0'lı parçada delik doldurma (kaldırılabilir süreksizlik)",
      aciklama:
        "x≠a için rasyonel (0/0 tipinde) ifade, x=a için ayrı bir k değeri verilir; süreklilik için k istenir. k, sadeleştirme sonrası limite eşit olmalıdır.",
      yontem: [
        "Pay ve paydayı çarpanlara ayır, ortak çarpanı sadeleştir.",
        "Sadeleşmiş ifadede x=a koyarak limiti bul.",
        "Süreklilik için k = limit; delik bu değerle 'doldurulur'.",
      ],
      celdiriciler: [
        { hata: "0/0 görüp 'limit yoktur, k bulunamaz' demek", uretir: "'Süreklilik sağlanamaz' yanlış hükmü" },
        { hata: "k'yı limit yerine 0 almak (paydayı sıfır yapan değerle karıştırma)", uretir: "k=0" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["limit-hesaplama"],
      ornek: {
        soru: "f(x) = { (x²−9)/(x−3), x≠3 ; k, x=3 } fonksiyonu x=3'te sürekli ise k kaçtır?",
        cevap: "(x²−9)/(x−3) = x+3 (x≠3); lim(x→3) = 6 ⇒ k=6",
      },
    },
    {
      id: "sureklilik-04-sureksizlik-turu",
      ad: "Süreksizlik türü tespiti (kaldırılabilir / sıçrama / sonsuz)",
      aciklama:
        "Fonksiyonun süreksiz olduğu noktalarda türü sorulur: sadeleşen çarpanın sıfırı delik (kaldırılabilir), sol-sağ limitleri farklıysa sıçrama, limit ±∞ ise sonsuz süreksizlik.",
      yontem: [
        "Rasyonelse çarpanlara ayır: sadeleşen çarpanın sıfırı → kaldırılabilir (delik).",
        "Sadeleşmeyen payda sıfırı → sonsuz süreksizlik (düşey asimptot).",
        "Parçalıda sol ve sağ limit farklı iki sonlu değerse → sıçrama.",
      ],
      celdiriciler: [
        { hata: "Paydanın her sıfırında sonsuz süreksizlik var sanmak", uretir: "Delik noktasını da 'asimptot' olarak sınıflamak" },
        { hata: "Kaldırılabilir noktada limitin var olduğunu gözden kaçırmak", uretir: "'Limit yok' gerekçeli yanlış tür" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["sonsuzda-limit-asimptot"],
      ornek: {
        soru: "g(x) = (x−1)/(x²−1) fonksiyonunun süreksiz olduğu noktaların türleri nedir?",
        cevap: "g(x)=1/(x+1) (x≠1). x=1'de kaldırılabilir (delik, limit 1/2), x=−1'de sonsuz süreksizlik",
      },
    },
    {
      id: "sureklilik-05-grafikten-sayma",
      ad: "Grafikten süreksiz noktaları sayma",
      aciklama:
        "Grafiği verilen fonksiyonun kaç noktada süreksiz olduğu sorulur. Dolu-boş nokta çiftleri, delikler ve düşey asimptotlar tek tek taranır.",
      yontem: [
        "Sıçrama ara: grafiğin koptuğu, sol ve sağın farklı yükseklikte olduğu noktalar.",
        "Delik ara: boş yuvarlak — üstünde/altında ayrı dolu nokta olsa da olmasa da süreksizdir.",
        "Düşey asimptot apsisi tanım kümesindeyse (fonksiyona orada değer atanmışsa) onu da say; sivri/köşe noktalar SÜREKLİDİR, sayma.",
      ],
      celdiriciler: [
        { hata: "Limitin var olduğu delik noktasını sürekli saymak", uretir: "Doğru sayının 1 eksiği" },
        { hata: "Köşe (sivri) noktayı süreksiz saymak (türevlenemezlikle karıştırma)", uretir: "Doğru sayının 1 fazlası" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["limit-kavrami"],
      ornek: {
        soru: "Grafikte x=−1'de sıçrama, x=1'de delik (limit var, f(1) farklı), x=3'te düşey asimptot varsa f kaç noktada süreksizdir?",
        cevap: "Üçü de süreksizlik: sıçrama + delik + sonsuz süreksizlik ⇒ 3 nokta",
      },
    },
    {
      id: "sureklilik-06-uc-parca-iki-parametre",
      ad: "Üç parçalı fonksiyonda iki parametre (sınav ayarı)",
      aciklama:
        "Üç parçalı fonksiyon tüm gerçek sayılarda sürekli; iki birleşme noktasından iki denklem kurulup a·b veya a+b istenir. Gerçek AYT zorluğu budur.",
      yontem: [
        "İki birleşme noktasını da ayrı ayrı ele al; her birinde sol limit = sağ limit yaz.",
        "Kolay çözülen denklemi (tek bilinmeyenli olanı) önce çöz, sonucu diğerine taşı.",
        "Her x değerinde DOĞRU parçayı kullandığını iki kez kontrol et (x=2 hangi parçada?).",
      ],
      celdiriciler: [
        { hata: "Yalnızca bir birleşme noktasını kontrol etmek", uretir: "Tek parametreli, eksik cevap" },
        { hata: "Sınır değeri yanlış parçaya koymak (x=2'yi x<2 parçasında f(2) sanmak)", uretir: "Denklemleri kaydırılmış, tutarsız parametre çifti" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      ornek: {
        soru: "f(x) = { x+a, x<0 ; x²+2, 0≤x<2 ; bx, x≥2 } tüm gerçek sayılarda sürekli ise a·b kaçtır?",
        cevap: "x=0: a=0+2 ⇒ a=2. x=2: 4+2=2b ⇒ b=3. a·b=6",
      },
    },
    {
      id: "sureklilik-07-tanimsiz-vs-sureksiz",
      ad: "Tanımsız nokta ile süreksiz nokta ayrımı",
      aciklama:
        "İnce kavram sorusu: fonksiyon tanım kümesinde olmayan noktada süreksiz SAYILMAZ; süreksizlik ancak fonksiyonun tanımlı olduğu (ör. parçalı tanımla değer atanmış) noktada aranır.",
      yontem: [
        "Önce tanım kümesini yaz: payda sıfırları tanım kümesinde değilse fonksiyon oralarda 'tanımsız'dır, 'süreksiz' değil.",
        "Parçalı tanımla o noktaya değer atanmışsa artık tanımlıdır; üç koşulu orada sına.",
        "'Kaç noktada süreksiz?' sorusunda yalnız tanımlı olup koşulu bozan noktaları say.",
      ],
      celdiriciler: [
        { hata: "1/x tipinde fonksiyonu x=0'da 'süreksiz' saymak (tanımsızken)", uretir: "Süreksiz nokta sayısını 1 fazla bulmak" },
        { hata: "Değer atanmış noktada limiti kontrol etmeden 'tanımlı, o hâlde sürekli' demek", uretir: "Sonsuz süreksizlikli noktada 'süreklidir' hükmü" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["limit-kavrami"],
      ornek: {
        soru: "f(x)=1/x ile g(x) = { 1/x, x≠0 ; 2, x=0 } fonksiyonlarından hangisi x=0'da süreksizdir?",
        cevap: "f, x=0'da tanımsız — süreksizlik aranmaz; tanım kümesinde süreklidir. g, x=0'da tanımlı ama limit yok (±∞) ⇒ g süreksizdir",
      },
    },
  ],
};

export default kb;
