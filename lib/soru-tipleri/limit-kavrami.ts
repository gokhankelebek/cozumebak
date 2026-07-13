import type { TopicSoruTipleri } from "./types";

// Limit Kavramı (AYT · Limit). Teacher's catalogue of how ÖSYM asks this
// topic. Ordered easy→hard. Every örnek is hand-verified; celdiriciler map each
// classic wrong answer to the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "limit-kavrami",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "limit-kavrami-01-grafik-okuma",
      ad: "Grafikten soldan/sağdan limit okuma",
      aciklama:
        "Grafiği verilen fonksiyonda bir noktaya soldan ve sağdan yaklaşırken eğrinin hangi yüksekliğe gittiği okunur; çoğu soru bunları f(a) ile toplatır.",
      yontem: [
        "x=a'nın SOLUNDAN parmağını eğri üzerinde a'ya doğru yürüt; ulaşılan yükseklik soldan limit.",
        "Aynısını sağdan yap; içi boş/dolu noktalara aldanma — limit için eğrinin gittiği yer önemli.",
        "f(a) istenirse yalnız DOLU noktanın yüksekliğini oku; limitle karıştırma.",
      ],
      celdiriciler: [
        { hata: "Soldan limit yerine dolu noktanın değerini (f(a)) okumak", uretir: "Limit yerine fonksiyon değeriyle kurulmuş yanlış toplam" },
        { hata: "Soldan ve sağdan yönleri ters okumak", uretir: "İki tek yönlü limitin yer değiştirdiği değer" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "f'nin grafiğinde x→2⁻ iken f(x)→3, x→2⁺ iken f(x)→1 ve f(2)=4'tür. lim(x→2⁻) f(x) + f(2) kaçtır?",
        cevap: "Soldan limit 3, fonksiyon değeri 4; toplam 3+4=7",
      },
    },
    {
      id: "limit-kavrami-02-limitin-varligi",
      ad: "Limitin varlığı (soldan = sağdan koşulu)",
      aciklama:
        "Parçalı fonksiyonda kritik noktada iki tek yönlü limit ayrı hesaplanır; eşitse limit var, değilse yok. ÖSYM çoğunlukla iki tek yönlü limiti toplatır.",
      yontem: [
        "Kritik noktanın solunda geçerli kuralla soldan limiti hesapla.",
        "Sağında geçerli kuralla sağdan limiti hesapla.",
        "Eşitlerse limit ortak değerdir; farklıysa lim(x→a) f(x) YOKTUR.",
      ],
      celdiriciler: [
        { hata: "Tek parçayı iki yön için de kullanmak", uretir: "İki tek yönlü limiti eşit çıkaran yanlış sonuç" },
        { hata: "x≤a ve x>a sınırını yanlış tarafa dahil etmek", uretir: "Sol/sağ kuralları yer değiştirmiş değerler" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      kombinasyon: ["sureklilik"],
      ornek: {
        soru: "f(x) = x² (x<1), 3−x (x≥1) ise lim(x→1⁻) f(x) + lim(x→1⁺) f(x) kaçtır?",
        cevap: "Soldan 1²=1, sağdan 3−1=2; toplam 1+2=3 (limit yok, ama tek yönlüler var)",
      },
    },
    {
      id: "limit-kavrami-03-parcali-kritik-nokta",
      ad: "Parçalı fonksiyonda kritik noktada limit",
      aciklama:
        "İki parçanın kritik noktada aynı değere ulaştığı kurgulanır; öğrenciden iki yönü de kontrol edip ortak limiti bulması beklenir.",
      yontem: [
        "Soldan limit için soldaki kuralı, sağdan limit için sağdaki kuralı kullan.",
        "İkisi eşitse limit bu ortak değerdir.",
        "Kritik nokta dışındaki bir noktada limit isteniyorsa yalnız o noktayı kapsayan parçayı kullan — iki yön hesabı gerekmez.",
      ],
      celdiriciler: [
        { hata: "Kritik nokta dışındaki limitte de iki parçayı karıştırmak", uretir: "Yanlış parçadan hesaplanmış değer" },
        { hata: "Sağdan limitte soldaki kuralı kullanmak", uretir: "Tek yönlü değerlerden biri hatalı toplam/limit" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "f(x) = x²−1 (x<3), 2x+2 (x≥3) ise lim(x→3) f(x) kaçtır?",
        cevap: "Soldan 9−1=8, sağdan 6+2=8; eşit olduğundan limit 8",
      },
    },
    {
      id: "limit-kavrami-04-delikli-grafik",
      ad: "Limit var ama f(a) farklı (delikli nokta)",
      aciklama:
        "Fonksiyon a'da limitten farklı tanımlanır (grafikte içi boş nokta + ayrık dolu nokta). Limitin f(a)'dan bağımsız olduğunu ölçen kavram sorusu.",
      yontem: [
        "Limiti a'nın ÇEVRESİNDEKİ kuraldan hesapla; x≠a olduğundan sadeleştirme serbest.",
        "f(a)'yı yalnız a için verilen özel tanımdan oku.",
        "İstenen kombinasyonu (lim − f(a) gibi) kur; ikisinin farklı olabileceğini unutma.",
      ],
      celdiriciler: [
        { hata: "Limit diye f(a)'nın özel değerini almak", uretir: "Limit yerine fonksiyon değeri (örnekte 4 yerine 1)" },
        { hata: "f(a) tanımlı ve limitten farklı diye 'limit yok' demek", uretir: "'Limit yoktur' şeklinde yanlış yargı" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["sureklilik", "limit-hesaplama"],
      ornek: {
        soru: "f(x) = (x²−4)/(x−2) (x≠2) ve f(2)=1 ise lim(x→2) f(x) − f(2) kaçtır?",
        cevap: "x≠2 için f(x)=x+2, limit 4; f(2)=1 olduğundan 4−1=3",
      },
    },
    {
      id: "limit-kavrami-05-parametre-bulma",
      ad: "Limitin varlığı için parametre bulma",
      aciklama:
        "Parçalı fonksiyonda kritik noktada limitin var olması koşulundan bilinmeyen (a, b) çözülür. Varlık koşulunu denkleme çeviren klasik AYT sorusu.",
      yontem: [
        "Soldan limiti soldaki kuraldan, sağdan limiti sağdaki kuraldan parametre cinsinden yaz.",
        "Limit var ⇒ soldan = sağdan; denklemi kur.",
        "Parametreyi çöz; iki bilinmeyen varsa limitin değeri de veri olarak kullanılır.",
      ],
      celdiriciler: [
        { hata: "Koşulu soldan = f(a) biçiminde kurmak (süreklilikle karıştırma)", uretir: "Yanlış denklemden gelen parametre" },
        { hata: "Parametreli parçayı yanlış yöne yazmak", uretir: "Denklemin iki yanı yer değiştirmiş, işaretçe kaymış değer" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["sureklilik"],
      ornek: {
        soru: "f(x) = ax−1 (x<2), x²+a (x≥2) fonksiyonunun x=2'de limiti varsa a kaçtır?",
        cevap: "Soldan 2a−1, sağdan 4+a; 2a−1=4+a ⇒ a=5 (iki taraf da 9)",
      },
    },
    {
      id: "limit-kavrami-06-tam-deger-isaret",
      ad: "Tam değer / işaret fonksiyonunda tek yönlü limit",
      aciklama:
        "⌊x⌋ veya |x−a|/(x−a) içeren tek yönlü limitler. Tam sayı noktalarında sol ve sağ farklıdır; yön analizi şarttır.",
      yontem: [
        "x→n⁻ iken (n tam sayı) ⌊x⌋ = n−1; x→n⁺ iken ⌊x⌋ = n.",
        "|x−a| için: x<a iken |x−a| = −(x−a), x>a iken |x−a| = x−a; işaret fonksiyonu soldan −1, sağdan +1 verir.",
        "Tam sayı olmayan noktada ⌊x⌋ sabittir; iki yön de aynı değeri verir, panik yok.",
      ],
      celdiriciler: [
        { hata: "x→n⁻ iken ⌊x⌋ = n almak", uretir: "Soldan limit 1 fazla (örnekte 3 yerine 4)" },
        { hata: "|x−a|/(x−a) için soldan limiti +1 almak", uretir: "İşaretçe ters tek yönlü değer" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["sureklilik"],
      ornek: {
        soru: "lim(x→2⁻) ⌊x⌋ + lim(x→2⁺) ⌊x⌋ kaçtır?",
        cevap: "Soldan ⌊x⌋→1, sağdan ⌊x⌋→2; toplam 1+2=3",
      },
    },
  ],
};

export default kb;
