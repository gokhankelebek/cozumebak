import type { TopicSoruTipleri } from "./types";

// Oran–Orantı (TYT · Problemler). Teacher's catalogue of how ÖSYM asks this
// topic. TYT sorar gibi: hikâye tabanlı, günlük bağlam, "3k–5k yaz" refleksi.
// Ordered easy→hard. Every örnek is hand-verified; celdiriciler map each
// classic wrong answer to the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "oran-oranti-tyt",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "oran-oranti-01-orandan-deger",
      ad: "Orandan değer bulma (k'lı gösterim)",
      aciklama:
        "a/b = 3/5 tipi bir oran ve a+b (ya da b−a) verilir; büyüklüklerden biri veya türetilmiş bir ifade istenir. Konunun açılış sorusu; her şey a=3k, b=5k yazmakla çözülür.",
      yontem: [
        "Oranı k ile aç: a:b = 3:5 ⇒ a=3k, b=5k.",
        "Verilen toplamı/farkı k cinsinden kur: a+b = 8k.",
        "k'yı bul, İSTENEN ifadeyi hesapla — k'yı değil.",
      ],
      celdiriciler: [
        { hata: "Toplam verilmişken fark denklemi kurmak (8k yerine 2k=32)", uretir: "k=16'dan b−a=32 — verilen toplamın kendisi çıkar" },
        { hata: "k'yı bulup istenen ifade yerine k'yı işaretlemek", uretir: "Doğru cevabın k'ya bölünmüşü (8 yerine 4)" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "a/b = 3/5 ve a+b = 32 ise b−a kaçtır?", cevap: "a=3k, b=5k ⇒ 8k=32, k=4 ⇒ b−a=2k=8" },
    },
    {
      id: "oran-oranti-02-dogru-oranti",
      ad: "Doğru orantı (birim fiyat / birim iş)",
      aciklama:
        "Kilogram–fiyat, sayfa–süre gibi birlikte artan iki çokluk. TYT bunu market/kırtasiye hikâyesiyle sorar; birim değere inmek en hızlı yol.",
      yontem: [
        "İki çokluk birlikte artıyorsa doğru orantı: oranlar sabit.",
        "Birim değeri bul (1 kg'ın fiyatı, 1 sayfanın süresi).",
        "İstenen miktarla çarp; ya da doğrudan içler–dışlar kur.",
      ],
      celdiriciler: [
        { hata: "Ters orantı kurup çarpımları eşitlemek", uretir: "60⋅4/7 ≈ 34,3 gibi anlamsız kesirli değer" },
        { hata: "Birim fiyatı ters bölmek (4/60'tan gitmek)", uretir: "Gerçekçi olmayan küçük fiyat" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      kombinasyon: ["sayi-problemleri"],
      ornek: { soru: "4 kg elma 60 TL ise aynı elmanın 7 kg'ı kaç TL'dir?", cevap: "Birim fiyat 60/4=15 TL ⇒ 7⋅15=105 TL" },
    },
    {
      id: "oran-oranti-03-ters-oranti",
      ad: "Ters orantı (işçi–gün, hız–zaman)",
      aciklama:
        "Biri artarken diğeri azalan çokluklar: işçi sayısı–süre, hız–zaman. İmza cümle: 'aynı işi ... kaç günde bitirir?'. Çarpımlar sabittir.",
      yontem: [
        "Biri artarken diğeri azalıyorsa ters orantı: x⋅y = sabit.",
        "İlk durumun çarpımını hesapla (toplam iş yükü).",
        "Yeni duruma böl: sabit ⁄ yeni değer.",
      ],
      celdiriciler: [
        { hata: "Doğru orantı kurmak (6/10 = 4/t oranlamak)", uretir: "t ≈ 6,7 — işçi azaldığı hâlde sürenin kısalması" },
        { hata: "Orantı yerine fark mantığı: 2 işçi eksildi diye 2 gün eklemek", uretir: "15 yerine 12" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["yas-isci-problemleri", "hareket-problemleri"],
      ornek: { soru: "Bir işi 6 işçi 10 günde bitiriyor. Aynı işi 4 işçi kaç günde bitirir?", cevap: "6⋅10=60 = 4⋅t ⇒ t=15 gün" },
    },
    {
      id: "oran-oranti-04-zincirleme-oran",
      ad: "Zincirleme (bileşik) oran — ortak terimi eşitleme",
      aciklama:
        "a:b ve b:c ayrı ayrı verilir, a:b:c (ya da a:c) istenir. Anahtar: ortak terim b'yi iki oranda AYNI sayıya genişletmek (EKOK'una).",
      yontem: [
        "Ortak terimi belirle: b bir oranda 4, diğerinde 6 değerini almış.",
        "b'yi EKOK(4,6)=12'ye taşı: ilk oranı 3 ile, ikinciyi 2 ile genişlet.",
        "Zinciri yaz: a:b:c — artık üçü de aynı k ile açılabilir.",
      ],
      celdiriciler: [
        { hata: "b'yi eşitlemeden oranları yan yana yazmak", uretir: "3:4:5 gibi bozuk üçlü" },
        { hata: "Yalnız bir oranı genişletmek", uretir: "3:12:10 gibi tutarsız zincir" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "a:b = 3:4 ve b:c = 6:5 ise a:b:c kaçtır?", cevap: "b'yi 12'de eşitle: 9:12 ve 12:10 ⇒ a:b:c = 9:12:10" },
    },
    {
      id: "oran-oranti-05-paylastirma",
      ad: "Oranla paylaştırma (miras / bilye dağıtımı)",
      aciklama:
        "Bir bütün 2:3:4 gibi bir oranla kişilere dağıtılır; en çok/en az alan ya da iki pay arasındaki fark istenir. Toplam pay sayısına bölmek işin kalbi.",
      yontem: [
        "Payları k ile aç: 2k, 3k, 4k.",
        "Bütünü toplam paya eşitle: 2k+3k+4k = 9k = bütün.",
        "k'yı bul, istenen kişinin payını hesapla.",
      ],
      celdiriciler: [
        { hata: "Bütünü toplam pay 9 yerine kişi sayısı 3'e bölmek", uretir: "180/3=60'ı bir pay sanmak" },
        { hata: "En çok istenirken k'yı ya da en az payı vermek", uretir: "80 yerine 20 veya 40" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["sayi-problemleri"],
      ornek: { soru: "180 bilye üç kardeşe 2:3:4 oranında paylaştırılıyor. En çok bilye alan kardeş kaç bilye alır?", cevap: "9k=180 ⇒ k=20 ⇒ en çok 4k=80" },
    },
    {
      id: "oran-oranti-06-aritmetik-ortalama",
      ad: "Oran + aritmetik ortalama bağlantısı",
      aciklama:
        "İki sayının oranı ve aritmetik ortalaması birlikte verilir. Ortalama aslında gizlenmiş bir toplam bilgisidir: AO=20 demek a+b=40 demektir.",
      yontem: [
        "Ortalamayı toplama çevir: (a+b)/2 = 20 ⇒ a+b = 40.",
        "Oranı k ile aç ve toplama bağla: 2k+3k = 5k = 40.",
        "k'dan istenen sayıya geç.",
      ],
      celdiriciler: [
        { hata: "Ortalamayı doğrudan toplam sanmak (a+b=20 kurmak)", uretir: "Doğru cevabın yarısı: 24 yerine 12" },
        { hata: "İstenen b yerine a'yı vermek", uretir: "24 yerine 16" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      ornek: { soru: "a/b = 2/3 ve a ile b'nin aritmetik ortalaması 20 ise b kaçtır?", cevap: "a+b=40 ⇒ 5k=40, k=8 ⇒ b=3k=24" },
    },
    {
      id: "oran-oranti-07-oran-degisimi",
      ad: "Ekleme–çıkarma ile oranın değişmesi (sınav ayarı)",
      aciklama:
        "Başlangıç oranı verilir; bir gruba ekleme, diğerinden çıkarma yapılınca yeni oran oluşur. İki durum da k cinsinden yazılıp yeni orana eşitlenir. TYT'nin ayırt edici oran sorusu.",
      yontem: [
        "Başlangıcı k ile aç: kırmızı 3k, mavi 5k.",
        "Değişimi uygula: kırmızı 3k+6, mavi 5k−2.",
        "Yeni oranı denkleme dök (eşitlik ise doğrudan eşitle), k'yı çöz.",
        "İstenen başlangıç mı son durum mu — soruyu tekrar oku.",
      ],
      celdiriciler: [
        { hata: "Çıkarılanı da eklemek (5k−2 yerine 5k+2 yazmak)", uretir: "3k+6=5k+2 ⇒ k=2'den toplam 16" },
        { hata: "Başlangıç istenirken son durumdaki toplamı vermek", uretir: "32 yerine 36" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["karisim-problemleri", "sayi-problemleri"],
      ornek: {
        soru: "Bir torbada kırmızı topların mavi toplara oranı 3:5'tir. Torbaya 6 kırmızı top eklenip 2 mavi top çıkarılınca sayılar eşitleniyor. Başlangıçta torbada toplam kaç top vardır?",
        cevap: "3k+6 = 5k−2 ⇒ 2k=8, k=4 ⇒ toplam 8k=32 (sağlama: 12+6 = 20−2 = 18)",
      },
    },
  ],
};

export default kb;
