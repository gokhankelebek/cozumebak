import type { TopicSoruTipleri } from "./types";

// Türevin Tanımı (AYT · Türev). Teacher's catalogue of how ÖSYM asks this
// topic. Ordered easy→hard. Every örnek is hand-verified; celdiriciler map each
// classic wrong answer to the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "turevin-tanimi",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "turevin-tanimi-01-h-tanimi",
      ad: "h→0 tanım limitini türev olarak tanıma",
      aciklama:
        "lim(h→0) [f(a+h)−f(a)]/h biçimindeki limit verilir; öğrencinin bunun f′(a) olduğunu görmesi beklenir. Konunun kapı sorusu.",
      yontem: [
        "Limitin biçimine bak: [f(a+h)−f(a)]/h, h→0 ⇒ bu tam olarak f′(a) tanımıdır.",
        "Limiti açmaya çalışma; f′(x)'i kurallarla al.",
        "a noktasını türevde yerine koy.",
      ],
      celdiriciler: [
        { hata: "h=0'ı doğrudan koyup 0/0'a takılmak, sonra limiti 0 sanmak", uretir: "0 cevabı" },
        { hata: "Limiti türev yerine f(a) değeri sanmak", uretir: "f(a) — fonksiyon değeri, türev değil" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      kombinasyon: ["limit-hesaplama"],
      ornek: { soru: "f(x)=x²−x ise lim(h→0) [f(2+h)−f(2)]/h kaçtır?", cevap: "Limit f′(2)'dir; f′(x)=2x−1, f′(2)=3" },
    },
    {
      id: "turevin-tanimi-02-x-a-tanimi",
      ad: "x→a tanımı: [f(x)−f(a)]/(x−a) ile hesap",
      aciklama:
        "Türevin ikinci tanım biçimi. Ya doğrudan hesaplatılır (çarpanlara ayır, sadeleştir) ya da öğrencinin biçimi tanıyıp f′(a) demesi istenir.",
      yontem: [
        "f′(a) = lim(x→a) [f(x)−f(a)]/(x−a) olduğunu tanı.",
        "Doğrudan hesap istenirse f(a)'yı koy, payı çarpanlarına ayır, (x−a) ile sadeleştir.",
        "Sadeleşen ifadede x=a yaz.",
      ],
      celdiriciler: [
        { hata: "Sadeleştirmeden x=a koyup 0/0'ı '0' veya 'tanımsız' saymak", uretir: "0 ya da 'limit yoktur' cevabı" },
        { hata: "Limit yerine f(a)'yı hesaplamak", uretir: "f(a) değeri" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      kombinasyon: ["limit-hesaplama"],
      ornek: { soru: "f(x)=x²+3 ise lim(x→2) [f(x)−f(2)]/(x−2) kaçtır?", cevap: "f(2)=7; (x²−4)/(x−2)=x+2 → limit 4 (= f′(2)=2⋅2)" },
    },
    {
      id: "turevin-tanimi-03-ortalama-anlik",
      ad: "Ortalama değişim hızı vs anlık değişim hızı",
      aciklama:
        "Bir aralıktaki ortalama değişim hızı (kesen eğimi) ile bir noktadaki anlık değişim hızı (türev, teğet eğimi) ayrımı. Genelde ikisinden biri hesaplatılır ya da karşılaştırılır.",
      yontem: [
        "Ortalama değişim hızı: [f(b)−f(a)]/(b−a) — türev YOK, sadece iki nokta.",
        "Anlık değişim hızı: f′(a) — türev alınır, nokta konur.",
        "Soruda 'aralık' geçiyorsa ortalama, 'anında/noktasında' geçiyorsa anlık istenir.",
      ],
      celdiriciler: [
        { hata: "Ortalama istenirken türev alıp bir uç noktada değerlendirmek", uretir: "f′(a) veya f′(b) — anlık hız" },
        { hata: "Farkı aralık uzunluğuna bölmeyi unutmak", uretir: "f(b)−f(a) — bölünmemiş fark" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      ornek: { soru: "f(x)=x²−3x fonksiyonunun [1, 4] aralığındaki ortalama değişim hızı kaçtır?", cevap: "[f(4)−f(1)]/(4−1) = [4−(−2)]/3 = 2" },
    },
    {
      id: "turevin-tanimi-04-katsayili-limit",
      ad: "Katsayılı tanım limiti: f(a+kh) biçimi",
      aciklama:
        "f′(a) verilir; lim(h→0) [f(a+kh)−f(a)]/h türü limit istenir. Öğrenci limiti tanıma dönüştürüp k çarpanını çıkarabilmeli.",
      yontem: [
        "Pay ve paydayı k ile dengele: [f(a+kh)−f(a)]/h = k·[f(a+kh)−f(a)]/(kh).",
        "u=kh dönüşümüyle limit k·f′(a) olur.",
        "Verilen f′(a) değeriyle çarp.",
      ],
      celdiriciler: [
        { hata: "k çarpanını unutup limiti doğrudan f′(a) sanmak", uretir: "f′(a) — k katı eksik" },
        { hata: "k ile çarpmak yerine bölmek", uretir: "f′(a)/k" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "f′(a)=4 ise lim(h→0) [f(a+3h)−f(a)]/h kaçtır?", cevap: "3·f′(a) = 3⋅4 = 12" },
    },
    {
      id: "turevin-tanimi-05-sureklilik-turevlenebilirlik",
      ad: "Süreklilik–türevlenebilirlik ilişkisi (köşe noktası)",
      aciklama:
        "Mutlak değerli veya köşeli bir fonksiyonun kritik noktadaki durumu sorulur: sürekli mi, türevlenebilir mi? Kritik bilgi: türev ⇒ süreklilik, ama tersi geçerli DEĞİL.",
      yontem: [
        "Önce süreklilik: soldan/sağdan limit ve fonksiyon değeri eşit mi?",
        "Sonra soldan ve sağdan türevleri ayrı ayrı hesapla.",
        "Tek taraflı türevler farklıysa köşe (sivri uç) vardır: sürekli ama türevlenemez.",
      ],
      celdiriciler: [
        { hata: "'Sürekli ise türevlenebilir' sanmak", uretir: "'Süreklidir ve türevlenebilir' seçeneği" },
        { hata: "Tek taraflı türevlerden yalnız birine bakıp karar vermek", uretir: "Türev varmış gibi sayısal bir eğim değeri" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["sureklilik"],
      ornek: { soru: "f(x)=|x−2| fonksiyonu x=2 noktasında türevlenebilir mi?", cevap: "Süreklidir; ama f′₋(2)=−1 ≠ f′₊(2)=1 olduğundan türevlenemez (köşe)" },
    },
    {
      id: "turevin-tanimi-06-parcali-parametre",
      ad: "Parçalı fonksiyonda türevlenebilirlikten parametre bulma",
      aciklama:
        "İki parçalı fonksiyonun ek noktasında türevlenebilir olduğu söylenir; a, b katsayıları istenir. İKİ koşul birden kurulur: süreklilik VE türev eşitliği.",
      yontem: [
        "Süreklilik denklemi: ek noktada iki parçanın değerlerini eşitle.",
        "Türev denklemi: iki parçanın türevlerini ek noktada eşitle.",
        "İki denklemli sistemi çöz; istenen kombinasyonu (a+b, a·b …) hesapla.",
      ],
      celdiriciler: [
        { hata: "Yalnız süreklilik kurup türev eşitliğini atlamak", uretir: "Tek denklem — parametreler tek başına belirlenemez, rastgele/yanlış çift" },
        { hata: "Yalnız türevleri eşitleyip sürekliliği atlamak", uretir: "Sabit terim (b) yanlış bulunur" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["turev-alma-kurallari", "sureklilik"],
      ornek: { soru: "f(x)= ax²+b (x≤1), 4x (x>1) fonksiyonu x=1'de türevlenebilir ise a·b kaçtır?", cevap: "Türev: 2a=4 ⇒ a=2; süreklilik: a+b=4 ⇒ b=2; a·b=4" },
    },
    {
      id: "turevin-tanimi-07-gizlenmis-tanim",
      ad: "Gizlenmiş tanım limiti (payda çarpanlı / iki yönlü)",
      aciklama:
        "Tanım limiti kılık değiştirir: paydada x²−a² gibi çarpanlı ifade ya da payda f(a+kh)−f(a−mh) gibi iki yönlü fark. Gerçek sınav zorluğu; limit tanım parçalarına ayrılır.",
      yontem: [
        "Paydayı çarpanlarına ayır; [f(x)−f(a)]/(x−a) parçasını izole et.",
        "İki yönlü farkta payı f(a) ekleyip çıkararak iki tanım limitine böl.",
        "Her parça k·f′(a) verir; katsayıları topla (f(a−mh) parçası +m·f′(a) katkısı yapar).",
      ],
      celdiriciler: [
        { hata: "Payda çarpanını (x+a gibi) hesaba katmamak", uretir: "Kalan çarpan kadar yanlış ölçekli f′(a)" },
        { hata: "f(a−mh) parçasının işaretini yanlış yönetip katkıyı çıkarmak", uretir: "(k−m)·f′(a) — eksik toplam" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["limit-hesaplama", "turev-alma-kurallari"],
      ornek: { soru: "f türevlenebilir, lim(x→3) [f(x)−f(3)]/(x²−9) = 2 ise f′(3) kaçtır?", cevap: "x²−9=(x−3)(x+3); limit f′(3)·1/6 = 2 ⇒ f′(3)=12" },
    },
  ],
};

export default kb;
