import type { TopicSoruTipleri } from "./types";

// İkinci Dereceden Denklemler (AYT · İkinci Dereceden Denklemler). Teacher's
// catalogue of how ÖSYM asks this topic. Ordered easy→hard. Every örnek is
// hand-verified; celdiriciler map each classic wrong answer to the exact
// mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "ikinci-derece-denklem-ayt",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "ikinci-derece-denklem-01-kok-bulma",
      ad: "Kök bulma (çarpanlara ayırma / formül)",
      aciklama:
        "Denklemin kökleri doğrudan istenir. Çarpanlara ayrılıyorsa ayır; ayrılmıyorsa diskriminant formülü. Konunun kapı sorusu.",
      yontem: [
        "Önce çarpanlara ayırmayı dene: x²+bx+c'de çarpımı c, toplamı −b olan iki sayı ara.",
        "Ayrılmıyorsa formül: x = (−b ± √Δ) / 2a, Δ = b²−4ac.",
        "Kökleri denklemde yerine koyup sağlamasını yap (10 saniyelik sigorta).",
      ],
      celdiriciler: [
        { hata: "Çarpanlardaki sayıları kök sanmak ((x−2)(x−3)'ten kökleri −2, −3 okumak)", uretir: "Doğru köklerin işaretçe tersleri" },
        { hata: "Formülde −b yerine b yazmak", uretir: "Kökler toplamı ters işaretli yanlış kök çifti" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      kombinasyon: ["carpanlara-ayirma-tyt"],
      ornek: { soru: "x²−5x+6=0 denkleminin büyük kökü kaçtır?", cevap: "(x−2)(x−3)=0 ⇒ kökler 2 ve 3, büyük kök 3" },
    },
    {
      id: "ikinci-derece-denklem-02-diskriminant",
      ad: "Diskriminantla kök varlığı / çift kök koşulu (parametre)",
      aciklama:
        "Parametreli denklemde 'çift (çakışık) kök', 'farklı iki reel kök' ya da 'reel kök yok' koşulu verilir. Δ'nın işareti üzerinden parametre çözülür.",
      yontem: [
        "Δ = b²−4ac'yi parametre cinsinden yaz.",
        "Koşulu çevir: çift kök ⇒ Δ=0, farklı iki reel kök ⇒ Δ>0, reel kök yok ⇒ Δ<0.",
        "Denklemi/eşitsizliği parametre için çöz; 'tam sayı' gibi ek koşul varsa en son uygula.",
      ],
      celdiriciler: [
        { hata: "Δ = b²+4ac yazmak (işaret hatası)", uretir: "Parametrenin ters işaretli değeri" },
        { hata: "Çift kök için Δ=0 yerine Δ>0 kullanmak", uretir: "Tek değer yerine aralık — şıklarla eşleşmeyen sonuç" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "x²−6x+m=0 denkleminin çift kökü olduğuna göre m kaçtır?", cevap: "Δ=36−4m=0 ⇒ m=9" },
    },
    {
      id: "ikinci-derece-denklem-03-vieta",
      ad: "Vieta: kökler toplamı ve çarpımı",
      aciklama:
        "Kökleri bulmadan x₁+x₂=−b/a ve x₁·x₂=c/a kullanılır; çoğu kez katsayıda bilinmeyen vardır. a'ya bölmeyi unutturan katsayılar bilerek seçilir.",
      yontem: [
        "Denklemi ax²+bx+c=0 biçimine getir, a, b, c'yi netleştir.",
        "x₁+x₂ = −b/a, x₁·x₂ = c/a yaz — a≠1 ise bölmeyi atlama.",
        "Verilen koşulu (toplam/çarpım değeri) formüle eşleyip bilinmeyeni çöz.",
      ],
      celdiriciler: [
        { hata: "a'ya bölmeyi unutmak (x₁·x₂=c sanmak)", uretir: "Doğru cevabın a katı / a'da biri" },
        { hata: "Çarpım formülüne toplamın eksisini bulaştırmak (x₁·x₂=−c/a yazmak)", uretir: "Doğru cevabın işaretçe tersi" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "2x²−6x+k=0 denkleminde köklerin çarpımı 5 ise k kaçtır?", cevap: "x₁·x₂=k/2=5 ⇒ k=10" },
    },
    {
      id: "ikinci-derece-denklem-04-simetrik-ifade",
      ad: "Köklere bağlı simetrik ifade (x₁²+x₂², 1/x₁+1/x₂)",
      aciklama:
        "Kökler bulunmadan, istenen ifade toplam-çarpım cinsine çevrilir: x₁²+x₂²=(x₁+x₂)²−2x₁x₂, 1/x₁+1/x₂=(x₁+x₂)/(x₁x₂). ÖSYM'nin Vieta üstüne kurduğu standart ikinci adım.",
      yontem: [
        "Vieta ile x₁+x₂ ve x₁·x₂'yi yaz.",
        "İstenen ifadeyi bu ikisine çevir: kare toplamı için (toplam)²−2(çarpım); ters toplamı için toplam/çarpım.",
        "Sayıları yerine koy; kökleri TEK TEK bulmaya asla kalkışma.",
      ],
      celdiriciler: [
        { hata: "x₁²+x₂² = (x₁+x₂)² sanmak (2x₁x₂'yi düşmemek)", uretir: "Doğru cevaptan 2x₁x₂ kadar büyük değer" },
        { hata: "−2x₁x₂ yerine +2x₁x₂ almak", uretir: "Doğru cevaptan 4x₁x₂ kadar sapmış değer" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "x²−4x+2=0 denkleminin kökleri x₁ ve x₂ ise x₁²+x₂² kaçtır?", cevap: "x₁²+x₂²=(x₁+x₂)²−2x₁x₂=16−2·2=12" },
    },
    {
      id: "ikinci-derece-denklem-05-bir-kok-verilen",
      ad: "Bir kökü verilen denklemde parametre + diğer kök",
      aciklama:
        "Parametreli denklemin bir kökü sayı olarak verilir; parametre ve/veya diğer kök istenir. Kökü yerine koy, sonra Vieta ile diğer köke geç. İki soruluk iş tek soruda.",
      yontem: [
        "Verilen kökü denklemde yerine koy, parametreyi çöz.",
        "Diğer kök için Vieta kullan: x₂ = (kökler toplamı) − x₁ ya da x₂ = (kökler çarpımı) / x₁.",
        "Sorunun NEYİ istediğini işaretle: parametre mi, diğer kök mü? (En çok burada puan gider.)",
      ],
      celdiriciler: [
        { hata: "Parametreyi bulup diğer kök yerine parametreyi işaretlemek", uretir: "Parametrenin değeri (soru diğer kökü sorarken)" },
        { hata: "Kökü yerine koyarken bir terimin işaretini ters almak", uretir: "Yanlış parametre, ondan türeyen yanlış diğer kök" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "x²−7x+m=0 denkleminin bir kökü 2'dir. Diğer kökü kaçtır?",
        cevap: "4−14+m=0 ⇒ m=10; kökler toplamı 7 ⇒ diğer kök 7−2=5",
      },
    },
    {
      id: "ikinci-derece-denklem-06-denklem-kurma",
      ad: "Dönüştürülmüş kökleri verilen denklemi kurma",
      aciklama:
        "Kökleri x₁, x₂ olan denklemden, kökleri 2x₁ ve 2x₂ ya da x₁+1 ve x₂+1 gibi dönüşmüş yeni denklem istenir. x²−(toplam)x+(çarpım)=0 kalıbı kurulur.",
      yontem: [
        "Eski denklemden Vieta ile x₁+x₂ ve x₁·x₂'yi çıkar.",
        "Yeni köklerin toplamını ve çarpımını eskiler cinsinden hesapla (ör. (x₁+1)(x₂+1)=x₁x₂+x₁+x₂+1).",
        "Yeni denklemi yaz: x² − (yeni toplam)x + (yeni çarpım) = 0. Toplamın önündeki EKSİ kalıbın parçasıdır.",
      ],
      celdiriciler: [
        { hata: "x²−Sx+P kalıbında toplamın işaretini düz yazmak (x²+Sx+P)", uretir: "Orta terimi işaretçe ters denklem" },
        { hata: "Yalnız toplamı dönüştürüp çarpımı eski bırakmak", uretir: "Sabit terimi yanlış denklem" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      ornek: {
        soru: "x²−3x+1=0 denkleminin kökleri x₁, x₂'dir. Kökleri x₁+1 ve x₂+1 olan denklem nedir?",
        cevap: "Yeni toplam=3+2=5, yeni çarpım=1+3+1=5 ⇒ x²−5x+5=0",
      },
    },
    {
      id: "ikinci-derece-denklem-07-ortak-kok",
      ad: "Ortak kök problemi",
      aciklama:
        "İki denklemin bir ortak kökü olduğu söylenir, parametre istenir. Kökü belli denklemin köklerini tek tek deneyip parametre denklemini kurmak en hızlı yol; ek koşul (tam sayı vb.) doğru dalı seçtirir.",
      yontem: [
        "Katsayıları belli olan denklemin köklerini bul.",
        "Her kökü parametreli denklemde yerine koy, her dal için parametreyi hesapla.",
        "Sorudaki ek koşulla (parametre tam sayı, pozitif vb.) doğru dalı seç.",
      ],
      celdiriciler: [
        { hata: "Ek koşulu görmeyip öteki kökten gelen kesirli parametrede kalmak", uretir: "Diğer dalın kesirli/koşula aykırı değeri" },
        { hata: "Kökü yerine koyarken kare almayı unutmak (x² yerine x yazmak)", uretir: "Birinci dereceden yanlış denklemin ürettiği parametre" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["ikinci-derece-denklem-sistemleri-11"],
      ornek: {
        soru: "x²−5x+6=0 ile x²−ax+8=0 denklemlerinin bir ortak kökü vardır. a tam sayı olduğuna göre a kaçtır?",
        cevap: "İlk denklemin kökleri 2 ve 3. x=2: 4−2a+8=0 ⇒ a=6 (tam sayı ✓); x=3: a=17/3 (elenir). a=6",
      },
    },
  ],
};

export default kb;
