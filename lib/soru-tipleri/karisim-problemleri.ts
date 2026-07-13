import type { TopicSoruTipleri } from "./types";

// Karışım Problemleri (TYT · Problemler). Teacher's catalogue of how ÖSYM asks
// this topic. Ordered easy→hard. Every örnek is hand-verified; celdiriciler map
// each classic wrong answer to the exact mistake that produces it. Altın kural:
// karışımda TAKİP EDİLEN ŞEY MADDE MİKTARIDIR (litre/kg cinsinden tuz, şeker,
// asit) — yüzdeler asla doğrudan toplanmaz/çıkarılmaz.
const kb: TopicSoruTipleri = {
  slug: "karisim-problemleri",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "karisim-01-madde-miktari",
      ad: "Karışımdaki madde miktarı (yüzde × toplam)",
      aciklama:
        "Oranı verilen tek karışımda madde ya da su miktarı istenir. Konunun ısınma sorusu; genellikle daha zor tiplerin ilk adımı olarak gömülü gelir.",
      yontem: [
        "Madde miktarı = yüzde × toplam: %a'lık K litrelik karışımda madde = (a÷100)⋅K.",
        "Su (çözücü) miktarı = toplam − madde.",
        "Soru maddeyi mi suyu mu istiyor, son cümleyi mutlaka tekrar oku.",
      ],
      celdiriciler: [
        { hata: "Su istenirken madde miktarını vermek (ya da tersi)", uretir: "Doğru cevabın toplamdan farkı — %25'lik 80 litrede su yerine 20 demek" },
        { hata: "%25'i doğrudan 25 litre sanmak (toplamla çarpmamak)", uretir: "Toplam hacimden bağımsız, yüzde sayısına eşit yanlış değer" },
      ],
      zorluk: "Kolay",
      sikCikar: false,
      ornek: { soru: "Tuz oranı %25 olan 80 litrelik çözeltide kaç litre su vardır?", cevap: "Tuz = 0,25⋅80 = 20 litre ⇒ su = 80−20 = 60 litre" },
    },
    {
      id: "karisim-02-iki-karisim-birlesme",
      ad: "İki karışımın birleştirilmesi",
      aciklama:
        "Oranları farklı iki karışım tek kaba dökülür, yeni oran istenir. TYT'nin en klasik karışım kalıbı; yüzdeleri toplayan/ortalayan öğrenciyi hedefler.",
      yontem: [
        "Her karışımın MADDE miktarını ayrı hesapla (yüzde × hacim).",
        "Madde miktarlarını topla, hacimleri topla — yüzdeleri değil.",
        "Yeni oran = toplam madde ÷ toplam hacim × 100.",
      ],
      celdiriciler: [
        { hata: "Yüzdelerin aritmetik ortalamasını almak", uretir: "(20+50)÷2 = %35 — hacimler eşit değilse yanlış" },
        { hata: "Yüzdeleri doğrudan toplamak", uretir: "%20+%50 = %70 gibi anlamsız büyük oran" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      kombinasyon: ["yuzde-kar-zarar", "oran-oranti-tyt"],
      ornek: { soru: "Tuz oranı %20 olan 30 litrelik çözelti ile tuz oranı %50 olan 20 litrelik çözelti karıştırılıyor. Yeni oran yüzde kaçtır?", cevap: "Tuz: 0,20⋅30 + 0,50⋅20 = 6+10 = 16; hacim 50 ⇒ 16∕50 = %32" },
    },
    {
      id: "karisim-03-su-ekleme",
      ad: "Karışıma su ekleme (madde sabit, toplam artar)",
      aciklama:
        "Karışıma saf su katılır, yeni oran ya da eklenecek su istenir. Anahtar fikir: madde miktarı DEĞİŞMEZ, yalnız payda büyür.",
      yontem: [
        "Önce mevcut madde miktarını hesapla — bu sayı sabit kalacak.",
        "Yeni hacim = eski hacim + eklenen su.",
        "Yeni oran = sabit madde ÷ yeni hacim; su miktarı isteniyorsa denklemi buradan kur.",
      ],
      celdiriciler: [
        { hata: "Su ekleyince oranın değişmeyeceğini sanmak", uretir: "Başlangıç yüzdesinin aynısı — örnekte %40" },
        { hata: "Eklenen suyu yüzdeden düz düşmek (%40 − %20 gibi)", uretir: "Hacim oranı kurulmadan elde edilen kaba yüzde" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "Tuz oranı %40 olan 30 litrelik çözeltiye 20 litre su ekleniyor. Yeni tuz oranı yüzde kaçtır?", cevap: "Tuz sabit: 0,40⋅30 = 12; yeni hacim 50 ⇒ 12∕50 = %24" },
    },
    {
      id: "karisim-04-buharlastirma",
      ad: "Karışımdan su buharlaştırma (madde sabit, toplam azalır)",
      aciklama:
        "Su buharlaşır, oran yükselir; buharlaşan miktar ya da yeni oran istenir. Su eklemenin aynadaki görüntüsü — madde yine sabittir.",
      yontem: [
        "Madde miktarını hesapla; buharlaşma maddeyi GÖTÜRMEZ.",
        "Buharlaşan su x ise yeni hacim = eski hacim − x.",
        "Denklem: madde ÷ (eski hacim − x) = hedef oran; x'i çöz ve sağla.",
      ],
      celdiriciler: [
        { hata: "Tuzun da suyla birlikte buharlaştığını varsaymak", uretir: "Oranı sabit tutan, denklemi kurulamayan yanlış model" },
        { hata: "Yüzde farkını hacimle çarpmak (60⋅0,05 gibi kestirme)", uretir: "3 — doğru denklemin verdiği 15'in çok uzağında" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "Tuz oranı %15 olan 60 litrelik çözeltiden kaç litre su buharlaşırsa oran %20 olur?", cevap: "Tuz = 0,15⋅60 = 9; 9∕(60−x) = 0,20 ⇒ 60−x = 45 ⇒ x = 15" },
    },
    {
      id: "karisim-05-saf-madde-ekleme",
      ad: "Karışıma saf madde ekleme (pay VE payda artar)",
      aciklama:
        "Karışıma saf tuz/şeker katılır. Su eklemeden farkı: eklenen miktar hem madde toplamına hem hacme girer — paydayı unutmak konunun bir numaralı hatası.",
      yontem: [
        "Mevcut madde miktarını hesapla.",
        "Eklenen saf madde x ise yeni madde = eski madde + x VE yeni hacim = eski hacim + x.",
        "Denklem: (madde + x) ÷ (hacim + x) = hedef oran; içler dışlar çarpıp x'i çöz.",
      ],
      celdiriciler: [
        { hata: "x'i paydaya eklemeyi unutmak: (4+x)∕40 = 0,20 yazmak", uretir: "x = 4 — doğrusu 5" },
        { hata: "Saf maddeyi %100 yerine kendi oranında saymak", uretir: "0,20x'li karma denklemden çıkan küçük yanlış değer" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "Tuz oranı %10 olan 40 litrelik çözeltiye kaç litre saf tuz eklenirse oran %20 olur?", cevap: "(4+x)∕(40+x) = 0,20 ⇒ 4+x = 8+0,2x ⇒ 0,8x = 4 ⇒ x = 5 (sağlama: 9∕45 = %20)" },
    },
    {
      id: "karisim-06-hedef-oran-denklem",
      ad: "Hedef orana ulaşmak için miktar bulma (denklem kurma)",
      aciklama:
        "İki karışımdan belirli oranda yeni karışım hazırlanır; birinden ne kadar alınacağı sorulur. İki bilinmeyenli görünür ama toplam verildiği için tek bilinmeyene iner. Gerçek sınav zorluğu burada.",
      yontem: [
        "Miktarlara x ve (toplam − x) de.",
        "Madde denklemi kur: oran₁⋅x + oran₂⋅(toplam − x) = hedef oran ⋅ toplam.",
        "x'i çöz; hızlı yol isteyen terazi (alligation) kullanır: miktarlar, oranların hedefe uzaklıklarıyla TERS orantılıdır.",
      ],
      celdiriciler: [
        { hata: "Terazi yönteminde uzaklıkları ters eşleştirmek", uretir: "İki cevabın yer değiştirmesi — %40'lıktan 40 yerine 20 bulmak" },
        { hata: "Madde yerine hacim denklemiyle yetinmek (x + y = 60'ı çözmeye çalışmak)", uretir: "Tek denklemle sonuca gidemeyen, seçenekten sallama cevap" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["birinci-derece-denklem-tyt"],
      ornek: { soru: "%10'luk ve %40'lık tuzlu sulardan %30'luk 60 litre karışım hazırlanacaktır. %40'lık çözeltiden kaç litre alınmalıdır?", cevap: "0,10(60−y) + 0,40y = 0,30⋅60 ⇒ 6 + 0,3y = 18 ⇒ y = 40" },
    },
    {
      id: "karisim-07-fiyat-karisimi",
      ad: "Fiyat karışımı (iki fiyatlı ürün harmanı)",
      aciklama:
        "İki farklı fiyatlı ürün karıştırılıp harman fiyatı istenir. Tuz-su ile aynı iskelet: 'madde' burada toplam paradır; karışım fiyatı ağırlıklı ortalamadır.",
      yontem: [
        "Her ürünün toplam tutarını hesapla (birim fiyat × miktar).",
        "Tutarları topla, miktarları topla.",
        "Harman fiyatı = toplam tutar ÷ toplam miktar.",
      ],
      celdiriciler: [
        { hata: "Fiyatların aritmetik ortalamasını almak", uretir: "(40+60)÷2 = 50 TL — miktarlar eşit değilse yanlış, doğrusu 48" },
        { hata: "Tutar yerine miktarla ağırlıklandırmayı ters kurmak", uretir: "Pahalı ürüne fazla ağırlık veren şişkin fiyat (52 gibi)" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      kombinasyon: ["yuzde-kar-zarar"],
      ornek: { soru: "Kilosu 40 TL olan çaydan 3 kg ile kilosu 60 TL olan çaydan 2 kg karıştırılıyor. Karışımın kilosu kaç TL'dir?", cevap: "Tutar: 40⋅3 + 60⋅2 = 120+120 = 240 TL; 240∕5 = 48 TL" },
    },
  ],
};

export default kb;
