import type { TopicSoruTipleri } from "./types";

// Parabol (AYT). Teacher's catalogue of how ÖSYM asks this topic. Ordered
// easy→hard. Every örnek is hand-verified; celdiriciler map each classic
// wrong answer to the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "parabol-ayt",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "parabol-01-tepe-noktasi",
      ad: "Tepe noktası hesabı (r=−b/2a, k=f(r))",
      aciklama:
        "Denklemi verilen parabolün tepe noktası, simetri ekseni ya da en küçük/en büyük değeri istenir. Konunun ısınma sorusu.",
      yontem: [
        "Tepe apsisi: r = −b/(2a); simetri ekseni x=r doğrusudur.",
        "Tepe ordinatı: k = f(r) — apsisi fonksiyonda yerine koy.",
        "y=a(x−r)²+k biçiminde verilmişse tepe T(r, k) doğrudan okunur.",
      ],
      celdiriciler: [
        { hata: "r=−b/(2a) yerine r=b/(2a) almak", uretir: "Apsisi işaretçe ters tepe noktası" },
        { hata: "Tepe biçiminden okurken (x−r)'deki işareti ters çevirmemek", uretir: "y=(x+2)²'de tepeyi x=2 sanmak" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "y=x²−6x+5 parabolünün tepe noktası nedir?",
        cevap: "r=−(−6)/(2⋅1)=3, k=f(3)=9−18+5=−4 ⇒ T(3, −4)",
      },
    },
    {
      id: "parabol-02-eksen-kesisimleri",
      ad: "Eksenleri kestiği noktalar",
      aciklama:
        "y eksenini kestiği nokta (0, c); x eksenini kestiği noktalar ax²+bx+c=0 denkleminin kökleri. Kesişimlerle ilgili toplam/uzaklık istenir.",
      yontem: [
        "y ekseni kesişimi için x=0 koy: nokta (0, c).",
        "x ekseni kesişimleri için y=0 çöz; kökler apsisleri verir.",
        "Kök toplamı −b/a, kök çarpımı c/a ile hesabı kısalt.",
      ],
      celdiriciler: [
        { hata: "y eksenini kestiği noktayı kök sanmak (c'yi apsis almak)", uretir: "(−8, 0) gibi eksen karışıklığı" },
        { hata: "Kök toplamını b/a almak (işaret hatası)", uretir: "Toplamı işaretçe ters değer" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "y=x²−2x−8 parabolü x eksenini apsisleri x₁, x₂ olan noktalarda, y eksenini ordinatı k olan noktada kesiyor. x₁+x₂+k kaçtır?",
        cevap: "x₁+x₂=−(−2)/1=2, k=c=−8 ⇒ 2+(−8)=−6",
      },
    },
    {
      id: "parabol-03-grafik-katsayi-isaret",
      ad: "Grafikten a, b, c işaret analizi (Δ dahil)",
      aciklama:
        "Grafiği çizilmiş parabolün katsayılarının işaretleri istenir. Kollar a'yı, y kesişimi c'yi, tepe apsisinin işareti (a ile birlikte) b'yi verir; x eksenini kesme sayısı Δ'yı söyler.",
      yontem: [
        "Kollar yukarı ⇒ a>0, aşağı ⇒ a<0.",
        "y eksenini kestiği nokta (0, c): üstte ise c>0, altta ise c<0.",
        "Tepe apsisi r=−b/(2a): r'nin işareti ile a'nın işaretinden b çözülür (r>0 ve a<0 ⇒ b>0 gibi).",
        "x eksenini iki noktada keserse Δ>0, teğetse Δ=0, kesmezse Δ<0.",
      ],
      celdiriciler: [
        { hata: "b'nin işaretini tepe apsisiyle aynı sanmak (a'yı hesaba katmamak)", uretir: "b'nin işaretçe tersi (ör. b<0)" },
        { hata: "Kollar aşağıyken Δ<0 sanmak (yön ile kök sayısını karıştırmak)", uretir: "Yanlış Δ işareti" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "Kolları aşağı yönlü, y eksenini pozitif tarafta kesen ve tepe apsisi pozitif olan parabol için a, b, c işaretleri nedir?",
        cevap: "Kollar aşağı ⇒ a<0; r=−b/(2a)>0 ve a<0 ⇒ b>0; (0,c) üstte ⇒ c>0",
      },
    },
    {
      id: "parabol-04-tepeden-parametre",
      ad: "Tepe koşulundan parametre bulma",
      aciklama:
        "Tepe noktası (ya da 'tepe x ekseni üzerinde', 'en küçük değeri k') koşulu verilir, denklemdeki bilinmeyen istenir. Tepe x ekseni üzerinde ⇔ Δ=0 eşdeğerliği kritik.",
      yontem: [
        "Tepe apsisini r=−b/(2a) ile bul (parametre içermiyorsa sayı çıkar).",
        "Koşulu kur: tepe x ekseninde ise f(r)=0 (eşdeğeri Δ=0); en küçük/en büyük değer k ise f(r)=k.",
        "Oluşan denklemi parametre için çöz.",
      ],
      celdiriciler: [
        { hata: "Koşulu f(r) yerine f(0)'da kurmak", uretir: "c üzerinden gelen ilgisiz değer (ör. m=0)" },
        { hata: "'Tepe x ekseninde' iken Δ>0 yazmak", uretir: "Tek değer yerine aralık" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["ikinci-derece-denklemler-ayt"],
      ornek: {
        soru: "y=x²−4x+m parabolünün tepe noktası x ekseni üzerinde olduğuna göre m kaçtır?",
        cevap: "r=2, f(2)=4−8+m=m−4=0 ⇒ m=4 (kontrol: Δ=16−4m=0 ⇒ m=4)",
      },
    },
    {
      id: "parabol-05-denklem-yazma",
      ad: "Grafiği verilen parabolün denklemini yazma",
      aciklama:
        "Kökler + bir nokta ya da tepe + bir nokta verilir; denklem (veya denklemden bir değer) istenir. Doğru biçimi seçmek işi bitirir: kökler ⇒ y=a(x−x₁)(x−x₂), tepe ⇒ y=a(x−r)²+k.",
      yontem: [
        "Kökler verildiyse y=a(x−x₁)(x−x₂), tepe verildiyse y=a(x−r)²+k yaz.",
        "Verilen üçüncü noktayı yerine koyup a'yı bul.",
        "İstenen büyüklüğü (katsayı, tepe ordinatı, f(değer)) bu denklemden hesapla.",
      ],
      celdiriciler: [
        { hata: "a'yı bulmadan a=1 varsaymak", uretir: "a katı kadar ölçek hatalı değer (ör. tepe ordinatı −1)" },
        { hata: "Çarpan biçiminde kök işaretini ters yazmak: (x+1)(x+3)", uretir: "Kökleri −1, −3 olan yanlış parabol" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "x eksenini x=1 ve x=3 noktalarında kesen ve (0, 6) noktasından geçen parabolün tepe noktasının ordinatı kaçtır?",
        cevap: "y=a(x−1)(x−3); 6=a(−1)(−3)=3a ⇒ a=2; r=2, y_T=2(2−1)(2−3)=−2",
      },
    },
    {
      id: "parabol-06-dogru-kesisim",
      ad: "Parabol–doğru kesişimi (teğetlik, Δ analizi)",
      aciklama:
        "Parabol ile doğru eşitlenir; kesişim sayısını ortak denklemin Δ'sı belirler: Δ>0 iki nokta, Δ=0 teğet, Δ<0 kesişmez. ÖSYM en çok teğetlik koşulunu sorar.",
      yontem: [
        "İki denklemi eşitle, her şeyi bir tarafa topla: ikinci derece denklem elde et.",
        "Teğet ⇒ Δ=0, kesişmez ⇒ Δ<0, iki noktada keser ⇒ Δ>0 koşulunu kur.",
        "Parametreyi çöz; teğet noktası istenirse çift kökü x=−b/(2a) ile bul.",
      ],
      celdiriciler: [
        { hata: "Δ'yı parabolün kendi denkleminde hesaplamak (doğruyu hiç katmamak)", uretir: "Parametreden bağımsız, ilgisiz sonuç" },
        { hata: "Eşitlerken doğrunun terimlerini yanlış işaretle taşımak", uretir: "Kaymış katsayılı denklemden yanlış k" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["dogru-analitik-ayt", "ikinci-derece-denklemler-ayt"],
      ornek: {
        soru: "y=x²+3x+7 parabolü ile y=x+k doğrusu teğet olduğuna göre k kaçtır?",
        cevap: "x²+3x+7=x+k ⇒ x²+2x+(7−k)=0; Δ=4−4(7−k)=0 ⇒ 4k=24 ⇒ k=6",
      },
    },
    {
      id: "parabol-07-maks-min-sozel",
      ad: "Maksimum–minimum sözel problemi (top atışı, kâr, alan)",
      aciklama:
        "Yükseklik–zaman, kâr–adet gibi ikinci derece modellenen sözel durum. En büyük değer ve o değere ulaşılan an tepe noktasından okunur.",
      yontem: [
        "Modeli tanı: a<0 ise tepe maksimumu, a>0 ise minimumu verir.",
        "Tepe apsisi r=−b/(2a): en büyük/küçük değerin GERÇEKLEŞTİĞİ an/adet budur.",
        "Tepe ordinatı f(r): en büyük/küçük DEĞERİN kendisi budur. Soru hangisini istiyor, dikkatle oku.",
      ],
      celdiriciler: [
        { hata: "En büyük değeri soran soruya tepe apsisini (anı) vermek", uretir: "80 yerine 4 gibi zaman değeri" },
        { hata: "r=−b/(2a) hesabında a'nın negatif işaretini düşürmek", uretir: "İşaretçe/ölçekçe yanlış an (ör. t=−4)" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["fonksiyonlar-ayt"],
      ornek: {
        soru: "Yerden atılan bir topun yüksekliği h(t)=−5t²+40t (metre) ile modelleniyor. Topun ulaşabileceği en büyük yükseklik kaç metredir?",
        cevap: "r=−40/(2⋅(−5))=4, h(4)=−5⋅16+40⋅4=−80+160=80 metre",
      },
    },
  ],
};

export default kb;
