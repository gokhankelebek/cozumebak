import type { TopicSoruTipleri } from "./types";

// Üçgende Trigonometri (AYT · Trigonometri). Teacher's catalogue of how ÖSYM asks
// this topic. Ordered easy→hard. Every örnek is hand-verified; celdiriciler map
// each classic wrong answer to the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "ucgende-trigonometri-ayt",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "ucgende-trig-01-sinus-teoremi",
      ad: "Sinüs teoremi (kenar/açı bulma, çevrel çember yarıçapı)",
      aciklama:
        "Bir kenar ile KARŞI açısı verilir; başka bir kenar, bir açı ya da çevrel çemberin yarıçapı istenir. a/sinA = b/sinB = c/sinC = 2R oranı kurulur. Konunun ısınma sorusu; oranın R değil 2R olduğu bu tipin can damarı.",
      yontem: [
        "Kenarları karşı açılarıyla eşleştir: a↔A, b↔B, c↔C.",
        "Bilinen kenar–açı çiftiyle oranı yaz: a/sinA = b/sinB = 2R.",
        "İçler-dışlar çarpımıyla istenen kenarı veya sinüs değerini çek.",
        "R isteniyorsa önce 2R'yi bul, MUTLAKA ikiye böl; paydada kök kaldıysa rasyonelleştir.",
        "sinB'den açıya geçerken 180°−B ihtimalini üçgen eşitsizliği/açı toplamıyla ele.",
      ],
      celdiriciler: [
        { hata: "Oranı ters kurmak (b = a·sinA/sinB)", uretir: "Doğru cevabın sinüsler oranınca tersi — 4√2 yerine 2√2 gibi" },
        { hata: "a/sinA'yı doğrudan R sanmak (2'yi unutmak)", uretir: "Doğru yarıçapın iki katı" },
        { hata: "Kenarı komşu açıyla eşleştirmek (a'yı B ile)", uretir: "Yanlış açı çiftinden gelen ilgisiz kenar" },
        { hata: "sinB = √3/2'den yalnız 60°'yi görüp 120° ihtimalini atlamak", uretir: "Geniş açılı üçgende yanlış açı seçimi" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      kombinasyon: ["ucgende-kenar-aci-bagintilari", "cemberde-acilar"],
      ornek: {
        soru: "ABC üçgeninde A=30°, B=45° ve a=4 birim ise b kaç birimdir?",
        cevap: "b = a·sinB/sinA = 4·(√2/2)/(1/2) = 2√2/(1/2) = 4√2",
      },
    },
    {
      id: "ucgende-trig-02-kosinus-kenar",
      ad: "Kosinüs teoremi ile kenar bulma (SAS)",
      aciklama:
        "İki kenar ve ARALARINDAKİ açı verilir, karşı kenar istenir. a² = b² + c² − 2bc·cosA formülünün düz yönü; ÖSYM'nin en standart üçgen trigonometri kalıbı.",
      yontem: [
        "Verilen açının verilen iki kenarın ARASINDA olduğunu doğrula.",
        "Formülü yaz: a² = b² + c² − 2bc·cosA.",
        "Kosinüs değerini koy, işaret ve 2 çarpanına dikkat ederek hesapla.",
        "Kök alırken tam kare çıkmasını bekle — çıkmıyorsa aritmetiği kontrol et.",
      ],
      celdiriciler: [
        { hata: "−2bc·cosA terimini + almak", uretir: "a² = 73+24 = 97 gibi şişkin kenar karesi" },
        { hata: "2bc'deki 2 çarpanını unutmak", uretir: "a² = 73−12 = 61 gibi ara değer" },
        { hata: "cos60° yerine sin60° kullanmak", uretir: "a² = 73−24√3 gibi köklü, temiz çıkmayan ifade" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "ABC üçgeninde b=3, c=8 birim ve aralarındaki açı A=60° ise a kaç birimdir?",
        cevap: "a² = 9+64−2·3·8·(1/2) = 73−24 = 49 ⇒ a = 7",
      },
    },
    {
      id: "ucgende-trig-03-kosinus-aci",
      ad: "Kosinüs teoremi ile açı bulma (üç kenar)",
      aciklama:
        "Üç kenarı verilen üçgende bir açı istenir. Formül açı yalnız kalacak biçimde ters çevrilir: cosA = (b²+c²−a²)/(2bc). Negatif çıkan kosinüs geniş açı demektir.",
      yontem: [
        "İstenen açının KARŞISINDAKİ kenarı belirle; formülde eksili terim odur.",
        "cosA = (b²+c²−a²)/(2bc) yaz — payda, açının kollarındaki iki kenarın çarpımının 2 katı.",
        "Kosinüs değerinden açıyı oku; negatifse açı 90°'den büyüktür.",
      ],
      celdiriciler: [
        { hata: "cosC = −1/2 çıkınca dar açı 60° seçmek", uretir: "120° yerine 60° — işaretin anlamını atlamak" },
        { hata: "Payda karşı kenarı da kullanmak (2ab yerine 2ac)", uretir: "Sadeleşmeyen, tabloda olmayan kosinüs değeri" },
        { hata: "Payı a²−b²−c² sırasıyla yazmak", uretir: "Doğru kosinüsün işaretçe tersi ⇒ 180°−açı" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "Kenarları a=7, b=8, c=13 olan üçgende C açısı kaç derecedir?",
        cevap: "cosC = (49+64−169)/(2·7·8) = −56/112 = −1/2 ⇒ C = 120°",
      },
    },
    {
      id: "ucgende-trig-04-trigonometrik-alan",
      ad: "Trigonometrik alan formülü (Alan = ½·b·c·sinA)",
      aciklama:
        "İki kenar ve aralarındaki açıdan alan istenir. Açı geniş verilerek sin(180°−x) = sinx bilgisi de yoklanır; alan geniş açıda da pozitiftir.",
      yontem: [
        "Açının iki kenarın ARASINDA olduğundan emin ol; değilse önce açıyı taşı.",
        "Alan = ½·b·c·sinA yaz — kosinüs DEĞİL, sinüs.",
        "Geniş açıda sin(180°−x) = sinx ile hesapla; alan asla negatif çıkmaz.",
      ],
      celdiriciler: [
        { hata: "½ çarpanını unutmak", uretir: "Doğru alanın iki katı — 10 yerine 20" },
        { hata: "sin yerine cos kullanmak", uretir: "Geniş açıda negatif 'alan' — 10 yerine −10√3" },
        { hata: "sin150°'yi −1/2 sanmak", uretir: "Negatif alan; işareti atıp yine 10 yazan öğrenci şans eseri kurtulur" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["ucgende-alan-10", "trigonometrik-fonksiyonlar"],
      ornek: {
        soru: "ABC üçgeninde b=8, c=5 birim ve aralarındaki açı A=150° ise alan kaç birimkaredir?",
        cevap: "Alan = ½·8·5·sin150° = 20·(1/2) = 10",
      },
    },
    {
      id: "ucgende-trig-05-ucgen-cesidi",
      ad: "Üçgen çeşidini belirleme (cos işaretinden)",
      aciklama:
        "Üç kenarı verilen üçgenin dar, dik ya da geniş açılı olduğu sorulur. Karar HER ZAMAN en büyük kenarın karşısındaki açıya bakılarak verilir: b²+c² ile a²'yi kıyasla.",
      yontem: [
        "En büyük kenarı belirle; en büyük açı onun karşısındadır.",
        "En büyük kenar a ise b²+c² ile a²'yi karşılaştır.",
        "b²+c² > a² ⇒ cosA > 0 ⇒ dar açılı; = ⇒ dik; < ⇒ geniş açılı.",
        "Sayısal açı istenirse cosA = (b²+c²−a²)/(2bc) ile devam et.",
      ],
      celdiriciler: [
        { hata: "Karşılaştırmayı küçük bir kenarın açısıyla yapmak", uretir: "Dar çıkan yan açıdan üçgene yanlışlıkla 'dar açılı' demek" },
        { hata: "Eşitsizlik yönünü ters okumak (b²+c² < a² iken dar demek)", uretir: "Geniş açılı üçgene dar açılı teşhisi" },
        { hata: "Önce üçgen eşitsizliğini kontrol etmemek", uretir: "Var olmayan üçgene çeşit atamak" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      ornek: {
        soru: "Kenarları 3, 5 ve 7 olan üçgen hangi çeşittir ve en büyük açısı kaç derecedir?",
        cevap: "cos = (9+25−49)/(2·3·5) = −15/30 = −1/2 ⇒ en büyük açı 120°, üçgen geniş açılıdır",
      },
    },
    {
      id: "ucgende-trig-06-sinus-kosinus-birlesik",
      ad: "Sinüs + kosinüs teoremi birleşik (sınav ayarı)",
      aciklama:
        "İki kenar ve aralarındaki açı verilir ama çevrel çember yarıçapı ya da başka bir açı istenir: önce kosinüsle eksik kenar bulunur, sonra sinüs teoremine geçilir. Gerçek AYT zorluğu bu zincirdedir.",
      yontem: [
        "Elde kenar–karşı açı çifti yok: önce kosinüs teoremiyle verilen açının karşı kenarını bul.",
        "Artık çift tamam: a/sinA = 2R (veya = b/sinB) ile devam et.",
        "R isteniyorsa 2R'yi ikiye böl; paydadaki kökü rasyonelleştir.",
      ],
      celdiriciler: [
        { hata: "Kenarı bulmadan doğrudan b/sinA gibi eşleşmeyen oran kurmak", uretir: "Kenar–açı çifti uyumsuz, ilgisiz bir R" },
        { hata: "2R'yi R olarak bırakmak", uretir: "Doğru yarıçapın iki katı — 7√3/3 yerine 14√3/3" },
        { hata: "Kosinüs adımında −2bc·cosA işaret hatası", uretir: "a yanlış ⇒ zincirin tamamı yanlış" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["cemberde-acilar", "trigonometrik-fonksiyonlar"],
      ornek: {
        soru: "ABC üçgeninde b=5, c=8 birim ve aralarındaki açı A=60° ise çevrel çemberin yarıçapı R kaç birimdir?",
        cevap: "a² = 25+64−40 = 49 ⇒ a=7; 2R = 7/sin60° = 14/√3 = 14√3/3 ⇒ R = 7√3/3",
      },
    },
    {
      id: "ucgende-trig-07-dortgen-kosegen-alan",
      ad: "Dörtgende köşegenlerle trigonometrik alan",
      aciklama:
        "Köşegen uzunlukları ve aralarındaki açı verilen dışbükey dörtgenin alanı: Alan = ½·d₁·d₂·sinθ. Üçgen alan formülünün dörtgene taşınmış hali; şekil paralelkenar/deltoid olsa da formül aynıdır.",
      yontem: [
        "Köşegenleri ve aralarındaki açıyı belirle: d₁, d₂, θ.",
        "Alan = ½·d₁·d₂·sinθ uygula — kenarlarla değil, KÖŞEGENLERLE.",
        "θ yerine 180°−θ verilmişse fark etmez: sinüsleri eşittir.",
      ],
      celdiriciler: [
        { hata: "½ çarpanını unutmak", uretir: "Doğru alanın iki katı — 12 yerine 24" },
        { hata: "sin yerine cos kullanmak", uretir: "12 yerine 12√3 gibi köklü yanlış değer" },
        { hata: "Formülü kenar uzunluklarıyla uygulamak", uretir: "Köşegen yerine kenar çarpımından gelen ilgisiz alan" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["ucgende-alan-10"],
      ornek: {
        soru: "Köşegenleri 8 ve 6 birim olan dışbükey bir dörtgende köşegenler arasındaki açı 30° ise alan kaç birimkaredir?",
        cevap: "Alan = ½·8·6·sin30° = 24·(1/2) = 12",
      },
    },
  ],
};

export default kb;
