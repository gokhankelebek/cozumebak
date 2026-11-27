import type { TopicSoruTipleri } from "./types";

// GERÇEK SAYILARDA İŞLEMLER VE ARALIKLAR (9. sınıf · Sayılar). İşlem
// özellikleri, işlem önceliği ve aralıklar: gösterim, sayı doğrusu, kesişim ve
// birleşim. Arketipler MEB programındaki öğrenme çıktılarından ve okul
// sınavlarının alışılmış soru kalıplarından çıkarıldı (ÖSYM kataloğundan
// değil). Ordered easy→hard. Every örnek is hand-verified.
const kb: TopicSoruTipleri = {
  slug: "gercek-sayilar",
  durum: "taslak",
  tipler: [
    {
      id: "gercek-01-ozellik-tanima",
      ad: "İşlem özelliğini tanıma ve kullanma",
      aciklama:
        "Bir eşitlikte hangi özelliğin kullanıldığı sorulur ya da bir işlemin bir özellik yardımıyla kısa yoldan yapılması istenir. Değişme sırayı, birleşme parantezin yerini değiştirir; dağılma çarpmayı toplamanın üzerine yayar.",
      yontem: [
        "Eşitliğin iki yanını karşılaştır: ne değişmiş?",
        "Yalnız sıra değiştiyse değişme, yalnız parantez yer değiştirdiyse birleşme özelliğidir.",
        "Çarpan parantezin içindeki her terime dağıtıldıysa dağılma özelliğidir.",
        "Kısa yol isteniyorsa sayıyı yuvarlak bir sayının toplamı ya da farkı olarak yaz ve dağıt.",
      ],
      celdiriciler: [
        { hata: "Değişme ile birleşmeyi karıştırmak", uretir: "Parantez değişimine 'değişme' demek" },
        { hata: "Dağıtırken çarpanı yalnız ilk terimle çarpmak", uretir: "17⋅(100 − 2) = 1700 − 2 gibi büyük sonuç" },
        { hata: "Değişme özelliğini çıkarma ve bölmede de geçerli saymak", uretir: "a − b = b − a kabulüyle ters işaretli sonuç" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "17⋅98 işlemini dağılma özelliğinden yararlanarak hesaplayınız.",
        cevap: "17⋅(100 − 2) = 17⋅100 − 17⋅2 = 1700 − 34 = 1666",
      },
    },
    {
      id: "gercek-02-islem-onceligi",
      ad: "İşlem önceliği",
      aciklama:
        "Parantez, üs, çarpma–bölme ve toplama–çıkarma içeren tek satırlık bir işlem verilir. Sıra: parantez içi, üs, soldan sağa çarpma ve bölme, soldan sağa toplama ve çıkarma.",
      yontem: [
        "Parantezin içini hesapla.",
        "Üsleri al.",
        "Çarpma ve bölmeleri soldan sağa yap.",
        "Toplama ve çıkarmaları soldan sağa yap.",
      ],
      celdiriciler: [
        { hata: "İşlemi baştan sona sırayla yapmak (önce 12 − 2)", uretir: "Öncelik gözetilmeden bulunan büyük sonuç" },
        { hata: "Üsten önce çarpmayı yapmak (2⋅2'nin karesini almak)", uretir: "Üssü yanlış tabana uygulanmış değer" },
        { hata: "Bölmeyi toplamadan sonraya bırakmak", uretir: "Son iki terimi önce toplayıp bölen sonuç" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      kombinasyon: ["uslu-ifadeler-9"],
      ornek: {
        soru: "12 − 2⋅(5 − 3)² + 8 : 4 işleminin sonucu kaçtır?",
        cevap: "12 − 2⋅2² + 8 : 4 = 12 − 2⋅4 + 2 = 12 − 8 + 2 = 6",
      },
    },
    {
      id: "gercek-03-aralik-gosterimi",
      ad: "Eşitsizlik, aralık ve sayı doğrusu arasında geçiş",
      aciklama:
        "Aynı küme üç biçimde yazılabilir: eşitsizlik (−2 ≤ x < 5), aralık ([−2, 5)) ve sayı doğrusu (dolu ve boş nokta). Soru bir gösterimi verip diğerini ya da aralıktaki tam sayıların sayısını ister.",
      yontem: [
        "Uçları belirle ve her ucun dâhil olup olmadığına bak.",
        "≤ ya da ≥ varsa köşeli parantez ve dolu nokta, < ya da > varsa normal parantez ve boş nokta kullan.",
        "Küçük ucu sola, büyük ucu sağa yaz.",
        "Tam sayı sayılıyorsa dâhil olmayan ucu sayma.",
      ],
      celdiriciler: [
        { hata: "Dâhil olmayan ucu da saymak", uretir: "Bir fazla tam sayı" },
        { hata: "Parantez türlerini ters kullanmak", uretir: "(−2, 5] gibi uçları yer değiştirmiş aralık" },
        { hata: "Tam sayıları sayarken 0'ı unutmak", uretir: "Bir eksik tam sayı" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "−2 ≤ x < 5 eşitsizliğini aralık olarak yazınız. Bu aralıkta kaç tam sayı vardır?",
        cevap: "[−2, 5); tam sayılar −2, −1, 0, 1, 2, 3, 4 ⇒ 7 tane (5 dâhil değil)",
      },
    },
    {
      id: "gercek-04-kesisim-birlesim",
      ad: "İki aralığın kesişimi ve birleşimi",
      aciklama:
        "İki aralık verilir, kesişimleri ve birleşimleri istenir. En güvenli yol ikisini aynı sayı doğrusunda üst üste çizmektir: iki taramanın çakıştığı yer kesişim, en az birinin taralı olduğu yer birleşimdir.",
      yontem: [
        "İki aralığı aynı sayı doğrusunda farklı yükseklikte çiz; uçları dolu ve boş noktayla işaretle.",
        "Kesişim: iki çizginin birlikte bulunduğu bölge.",
        "Birleşim: en soldaki uçtan en sağdaki uca, arada boşluk yoksa tek aralık.",
        "Her uç için ayrı ayrı sor: bu sayı sonuçta var mı?",
      ],
      celdiriciler: [
        { hata: "Kesişim ile birleşimi yer değiştirmek", uretir: "Küçük küme yerine büyük küme" },
        { hata: "Kesişimde ucu, yalnız bir aralıkta dâhil olduğu hâlde dâhil etmek", uretir: "Köşeli parantezle yazılmış yanlış uç" },
        { hata: "Birleşimde ucu, bir aralıkta dâhil olduğu hâlde dışarıda bırakmak", uretir: "Normal parantezle yazılmış yanlış uç" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["kumelerde-temel-kavramlar"],
      ornek: {
        soru: "A = [−3, 4) ve B = (1, 7] olduğuna göre A ∩ B ve A ∪ B kümelerini bulunuz.",
        cevap: "A ∩ B = (1, 4) (1 yalnız A'da, 4 yalnız B'de); A ∪ B = [−3, 7]",
      },
    },
    {
      id: "gercek-05-uc-nokta",
      ad: "Uç noktada buluşan aralıklar",
      aciklama:
        "İki aralık yalnız bir uçta buluşur: (−2, 3] ile [3, 6). Kesişim o tek sayıdan oluşabilir ya da boş olabilir; hepsi o ucun iki aralıkta da dâhil olup olmadığına bağlıdır. Parantez okumayı ölçen ince bir sorudur.",
      yontem: [
        "Ortak ucu bul.",
        "Bu sayı birinci aralıkta var mı, ikinci aralıkta var mı diye ayrı ayrı bak.",
        "İkisinde de varsa kesişim tek elemanlıdır: {3}. Birinde yoksa kesişim boş kümedir.",
        "Birleşimde ortak uç en az birinde varsa aralık kesintisiz yazılır.",
      ],
      celdiriciler: [
        { hata: "Tek elemanlı kesişimi aralık gibi yazmak ([3, 3) ya da (3))", uretir: "Geçersiz gösterim" },
        { hata: "Uç bir aralıkta dâhil değilken kesişime {3} demek", uretir: "Boş küme yerine tek elemanlı küme" },
        { hata: "Kesişim tek sayı diye birleşimi de iki ayrı parça yazmak", uretir: "Gereksiz bölünmüş birleşim" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      ornek: {
        soru: "A = (−2, 3] ve B = [3, 6) olduğuna göre A ∩ B ve A ∪ B kümelerini bulunuz.",
        cevap: "3 iki aralıkta da var ⇒ A ∩ B = {3}; A ∪ B = (−2, 6)",
      },
    },
    {
      id: "gercek-06-sonsuz-aralik",
      ad: "Sonsuza uzanan aralıklar",
      aciklama:
        "x ≥ 2 ya da x < −1 gibi tek taraflı eşitsizlikler aralıkla yazılır ve sınırlı bir aralıkla kesiştirilir. Sonsuz bir sayı olmadığından ∞ ve −∞ yanında her zaman normal parantez bulunur.",
      yontem: [
        "Tek taraflı eşitsizliği aralık olarak yaz: x ≥ 2 → [2, ∞).",
        "Sayı doğrusunda ok yönünü belirle: 'büyük' sağa, 'küçük' sola.",
        "Diğer aralıkla üst üste çizip ortak bölgeyi oku.",
        "Sonsuzun yanına köşeli parantez koymadığını kontrol et.",
      ],
      celdiriciler: [
        { hata: "Sonsuzun yanına köşeli parantez yazmak", uretir: "[2, ∞] gibi geçersiz gösterim" },
        { hata: "'Küçüktür'ü sağa doğru taramak", uretir: "Doğru aralığın tümleyeni" },
        { hata: "Kesişimde sınırlı aralığın diğer ucunu da sonsuza uzatmak", uretir: "Olduğundan büyük kesişim" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      kombinasyon: ["birinci-derece-problemler-9"],
      ornek: {
        soru: "A = [2, ∞) ve B = (−4, 5) olduğuna göre A ∩ B kümesini bulunuz ve bu kümedeki tam sayıların toplamını hesaplayınız.",
        cevap: "A ∩ B = [2, 5); tam sayılar 2, 3, 4 ⇒ toplam 9",
      },
    },
  ],
};

export default kb;
