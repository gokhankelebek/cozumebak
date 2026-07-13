import type { TopicSoruTipleri } from "./types";

// Rasyonel Sayılar (TYT · Sayılar). Kesir dört işlemi, devirli ondalıklar,
// sıralama ve merdiven kesir; TYT'nin işlem hızını ölçtüğü zemin konu.
// Ordered easy→hard. Every örnek is hand-verified; celdiriciler map each
// classic wrong answer to the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "rasyonel-sayilar",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "rasyonel-01-dort-islem",
      ad: "Kesirlerde karışık dört işlem",
      aciklama:
        "Toplama–çıkarma–çarpma–bölme aynı ifadede. Kurallar basit ama tuzaklar nettir: toplamada ortak payda, bölmede ikinci kesri ters çevirme, işlem önceliği. Sonuç en sade biçimde istenir.",
      yontem: [
        "İşlem önceliği: önce parantez, sonra çarpma–bölme, en son toplama–çıkarma.",
        "Toplama/çıkarmada paydaları EKOK ile eşitle, payları işle.",
        "Bölmede ikinci kesri ters çevirip çarp; çarpmadan ÖNCE çapraz sadeleştir.",
        "Sonucu en sade kesir olarak yaz.",
      ],
      celdiriciler: [
        { hata: "Payları ve paydaları ayrı ayrı toplamak (2⁄3 + 1⁄6 = 3⁄9 gibi)", uretir: "Ortak paydasız, gerçek değerden küçük kesir" },
        { hata: "Bölmede ters çevirmeden pay⁄pay, payda⁄payda bölmek", uretir: "Doğru cevabın tersi ya da ilgisiz kesir" },
        { hata: "İşlem önceliğini atlayıp soldan sağa gitmek", uretir: "Toplamayı bölmeden önce yapan yanlış değer" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "(2⁄3 + 1⁄6) ÷ 5⁄4 işleminin sonucu kaçtır?",
        cevap: "2⁄3 + 1⁄6 = 4⁄6 + 1⁄6 = 5⁄6; 5⁄6 ÷ 5⁄4 = 5⁄6 ⋅ 4⁄5 = 4⁄6 = 2⁄3",
      },
    },
    {
      id: "rasyonel-02-tanimsizlik",
      ad: "Payda sıfır olamaz (tanımsızlık koşulu)",
      aciklama:
        "a⁄b ifadesinde b = 0 tanımsızdır; 0⁄b = 0 ise geçerlidir. Kesrin tanımsız olduğu, sıfır olduğu ya da tanımlı olduğu x değerleri sorulur. Kısa ama her düzeyde tuzağa açık soru.",
      yontem: [
        "Tanımsızlık için PAYDAYI sıfıra eşitle, x'i çöz.",
        "Kesrin sıfır olması için PAYI sıfıra eşitle; aynı x paydayı da sıfırlıyorsa o değer geçersizdir.",
        "'Tanımlı olduğu değerler' istenirse paydayı sıfırlayan değerleri kümeden çıkar.",
      ],
      celdiriciler: [
        { hata: "Tanımsızlık için payı sıfırlamak (payda yerine)", uretir: "Kesri 0 yapan x'i tanımsızlık diye vermek" },
        { hata: "0⁄b'yi de tanımsız sanmak", uretir: "Sıfır değerini eleyip eksik çözüm kümesi" },
        { hata: "Hem payı hem paydayı sıfırlayan x'i 'kesir sıfırdır' saymak", uretir: "0⁄0 belirsizliğini gözden kaçıran fazladan değer" },
      ],
      zorluk: "Kolay",
      sikCikar: false,
      ornek: {
        soru: "(x + 3) ⁄ (2x − 8) kesri x'in hangi değeri için tanımsızdır?",
        cevap: "Payda 0 olamaz: 2x − 8 = 0 ⇒ x = 4",
      },
    },
    {
      id: "rasyonel-03-devirli-ondalik",
      ad: "Ondalık ↔ kesir çevirme (devirli ondalık dahil)",
      aciklama:
        "0,75 gibi sonlu ondalıkların ve 0,2333… (3 devirli) gibi devirli ondalıkların en sade kesre çevrilmesi. Kural: pay = (tüm sayı) − (devretmeyen kısım); payda = devreden basamak kadar 9, devretmeyen basamak kadar 0.",
      yontem: [
        "Sonlu ondalık: virgülden sonraki basamak sayısı kadar 10'un kuvvetine böl, sadeleştir (0,75 = 75⁄100 = 3⁄4).",
        "Devirli: pay = tüm rakamlar − devretmeyen kısım; payda = 9…90…0 (9'lar devreden, 0'lar devretmeyen basamak sayısınca).",
        "Özel hâl: 0,aaa… = a⁄9; 0,ababab… (iki basamak devirli) = ab⁄99.",
        "Sonucu mutlaka sadeleştir.",
      ],
      celdiriciler: [
        { hata: "Devretmeyen kısmı paydan çıkarmayı unutmak", uretir: "0,2333… için 23⁄90 (doğrusu 21⁄90 = 7⁄30)" },
        { hata: "9 ve 0 sayılarını ters yazmak (devreden kadar 0, devretmeyen kadar 9)", uretir: "Payda 90 yerine 09 mantığında bozuk kesir" },
        { hata: "Sadeleştirmeden bırakmak", uretir: "Şıklarda olmayan 21⁄90 gibi sadeleşmemiş değer" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "0,2333… (3 rakamı devirli) sayısının en sade kesir biçimi nedir?",
        cevap: "Pay = 23 − 2 = 21, payda = 90 ⇒ 21⁄90 = 7⁄30",
      },
    },
    {
      id: "rasyonel-04-tam-sayili-bilesik",
      ad: "Tam sayılı kesir ↔ bileşik kesir (işlemli dönüşüm)",
      aciklama:
        "Tam sayılı kesirlerle toplama–çıkarma yapılır, sonuç yine tam sayılı istenir. Dönüşüm yönü iki taraflı: a b⁄c = (a⋅c + b)⁄c ve bileşikten tam sayılıya bölme özdeşliğiyle dönülür.",
      yontem: [
        "Önce tüm tam sayılı kesirleri bileşiğe çevir: a b⁄c = (a⋅c + b)⁄c.",
        "İşlemi bileşik kesirlerle yap (ortak payda).",
        "Sonucu tam sayılıya döndür: payı paydaya böl, bölüm tam kısım, kalan yeni pay.",
        "Çıkarmada küçükten büyük çıkmıyorsa işaret takibini dikkatli yap.",
      ],
      celdiriciler: [
        { hata: "a b⁄c'yi a⋅(b⁄c) diye çarpım sanmak", uretir: "3 1⁄4 için 3⁄4 — tam kısmı yutan değer" },
        { hata: "Dönüşümde a⋅c + b yerine a + b⋅c yazmak", uretir: "Pay yanlış kurulmuş bileşik kesir" },
        { hata: "Tam kısımları ve kesir kısımlarını ayrı çıkarırken borç almayı unutmak", uretir: "Kesir kısmı negatif kalan bozuk sonuç" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      ornek: {
        soru: "3 1⁄4 − 1 5⁄6 işleminin sonucu kaçtır?",
        cevap: "13⁄4 − 11⁄6 = 39⁄12 − 22⁄12 = 17⁄12 = 1 5⁄12",
      },
    },
    {
      id: "rasyonel-05-siralama",
      ad: "Kesir sıralama (payda eşitleme / 1'e yakınlık)",
      aciklama:
        "Üç kesrin küçükten büyüğe sıralanması. Yollar: ortak payda, çapraz çarpım, payları 1 eksik kesirlerde 1'e yakınlık (1'den uzaklığı küçük olan büyüktür). Negatif kesir girince sıra ters döner.",
      yontem: [
        "Paydalar küçükse EKOK ile ortak paydaya getir, payları karşılaştır.",
        "Pay ve payda farkı sabitse (7⁄8, 8⁄9 gibi) 1'e yakınlığı kullan: 1 − kesir küçük olan büyüktür.",
        "İkili karşılaştırmada çapraz çarpım en hızlısıdır: a⋅d ile b⋅c'yi kıyasla.",
        "Negatif kesirlerde mutlak değerce büyük olan daha KÜÇÜKTÜR.",
      ],
      celdiriciler: [
        { hata: "Yalnız paylara ya da yalnız paydalara bakmak", uretir: "Paydalar farklıyken büyük paylıyı büyük sanan ters sıra" },
        { hata: "1'e yakınlıkta uzaklığı büyük olanı büyük sanmak", uretir: "Tam ters sıralama (5⁄6 > 7⁄8 demek)" },
        { hata: "Negatiflerde pozitif kuralını aynen uygulamak", uretir: "−2⁄3 < −3⁄4 gibi işareti hesaba katmayan sıra" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "a = 7⁄8, b = 8⁄9, c = 5⁄6 sayılarını küçükten büyüğe sıralayınız.",
        cevap: "1'den uzaklıklar: 1⁄8, 1⁄9, 1⁄6; en uzak 5⁄6, en yakın 8⁄9 ⇒ c < a < b",
      },
    },
    {
      id: "rasyonel-06-arada-kesir",
      ad: "İki kesir arasında kesir bulma",
      aciklama:
        "İki kesir arasındaki belirli paydalı kesirler (a⁄b < k⁄n < c⁄d) veya araya sıkışan tam sayı istenir; 'kaç tane k vardır' biçiminde gelir. Sınırların dahil olup olmadığı tuzağın kendisidir.",
      yontem: [
        "Üç kesri de ortak paydaya getir (aranan kesrin paydası genellikle EKOK'tur).",
        "Eşitsizliği paylara indir: alt pay < k < üst pay.",
        "Aralıktaki tam sayıları listele/say; sınırlar dahil DEĞİL (eşitsizlik keskinse).",
        "Aranan kesrin sadeleşip sınırlarla çakışmadığını kontrol et.",
      ],
      celdiriciler: [
        { hata: "Sınır değerleri de saymak (keskin eşitsizlikte)", uretir: "2 fazla değer" },
        { hata: "Yalnız aranan kesri genişletip sınırları paydasız bırakmak", uretir: "Paylar farklı ölçekte, yanlış aralık" },
        { hata: "İki kesrin 'tam ortası' istenince payların ortalamasını farklı paydalarla almak", uretir: "(a+c)⁄(b+d) türü, ortalama olmayan kesir" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["sayi-problemleri"],
      ornek: {
        soru: "2⁄5 < k⁄20 < 3⁄4 eşitsizliğini sağlayan kaç k tam sayısı vardır?",
        cevap: "8⁄20 < k⁄20 < 15⁄20 ⇒ 8 < k < 15 ⇒ k ∈ {9, 10, 11, 12, 13, 14}, 6 tane",
      },
    },
    {
      id: "rasyonel-07-merdiven-kesir",
      ad: "Merdiven (çok katlı) kesir",
      aciklama:
        "1 + 1⁄(1 + 1⁄2) gibi iç içe kesirler. En içteki kattan dışa doğru çözülür; ÖSYM bu tipi işlem disiplini ölçmek için sever. Bazen sonuç x'li verilip içteki bilinmeyen istenir.",
      yontem: [
        "EN İÇTEKİ kesirden başla; her katı tek kesre indir.",
        "1 ⁄ (kesir) = kesrin tersi; katları çevirirken pay–payda takla atar.",
        "Dışa doğru kat kat ilerle, her adımda sadeleştir.",
        "Ters problem (sonuç verilip içteki sayı istenirse) aynı merdiveni dıştan içe çöz.",
      ],
      celdiriciler: [
        { hata: "Dıştan içe doğru işlem yapmak", uretir: "1 + 1⁄1 + 1⁄2 = 5⁄2 gibi katları düzleştiren değer" },
        { hata: "1⁄(kesir) alırken ters çevirmeyi unutmak", uretir: "Ara katta kesrin kendisiyle devam eden yanlış zincir" },
        { hata: "Ara adımlarda sadeleştirmeyip payda hatası yapmak", uretir: "Büyük paydalı, şıklarla uyuşmayan kesir" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      ornek: {
        soru: "1 + 1 ⁄ (1 + 1⁄2) işleminin sonucu kaçtır?",
        cevap: "İçten dışa: 1 + 1⁄2 = 3⁄2; 1 ⁄ (3⁄2) = 2⁄3; 1 + 2⁄3 = 5⁄3",
      },
    },
  ],
};

export default kb;
