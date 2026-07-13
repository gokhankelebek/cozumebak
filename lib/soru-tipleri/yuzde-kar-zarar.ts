import type { TopicSoruTipleri } from "./types";

// Yüzde, Kâr-Zarar ve Faiz Problemleri (TYT · Oran-Orantı ve Problemler).
// Teacher's catalogue of how ÖSYM asks this topic. Ordered easy→hard. Every
// örnek is hand-verified; celdiriciler map each classic wrong answer to the
// exact mistake that produces it. Konunun tek anahtarı: her yüzde değişimini
// ÇARPAN olarak yürütmek (%k artış → 1+k/100, %k azalış → 1−k/100).
const kb: TopicSoruTipleri = {
  slug: "yuzde-kar-zarar",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "yuzde-01-yuzde-carpan",
      ad: "Yüzde hesabı ve artış/azalış çarpanı",
      aciklama:
        "Bir sayının %a'sı ya da %a zam/indirim sonrası yeni değer. Konunun ısınma sorusu; çarpan alışkanlığını kurar.",
      yontem: [
        "x'in %a'sı = (a/100)⋅x; hızlı kesirleri ezber et (%20 = 1/5, %25 = 1/4).",
        "%a artış: yeni değer = x⋅(1 + a/100); %a azalış: x⋅(1 − a/100).",
        "Soru artış MİKTARINI mı, yeni DEĞERİ mi istiyor — son satırı dikkatli oku.",
      ],
      celdiriciler: [
        { hata: "Yeni fiyat istenirken yalnızca artış miktarını vermek", uretir: "455 yerine 105" },
        { hata: "%30'u 30 TL sanıp doğrudan eklemek", uretir: "350+30 = 380" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "Fiyatı 350 TL olan bir ürüne %30 zam yapılırsa yeni fiyatı kaç TL olur?",
        cevap: "350 ⋅ 1,30 = 455 TL (artış: 350⋅0,30 = 105)",
      },
    },
    {
      id: "yuzde-02-kar-zarar-maliyet",
      ad: "Kâr-zarar: yüzde daima maliyet üzerinden",
      aciklama:
        "Alış (maliyet) ve kâr/zarar yüzdesi verilir, satış istenir — ya da tersi. Aksi söylenmedikçe yüzde MALİYET üzerinden işler: satış = maliyet⋅(1 ± k/100).",
      yontem: [
        "Referansı sabitle: kâr da zarar da maliyete oranlanır.",
        "%k kârla satış = maliyet⋅(1 + k/100); %k zararla satış = maliyet⋅(1 − k/100).",
        "Maliyet isteniyorsa satışı çarpana BÖL; asla yüzdeyi satıştan çıkarma.",
      ],
      celdiriciler: [
        { hata: "Yüzdeyi TL sanıp maliyete doğrudan eklemek", uretir: "160+35 = 195" },
        { hata: "Çarpanı 1,35 yerine 0,35 almak (kârı satışın kendisi sanmak)", uretir: "160⋅0,35 = 56" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "160 TL'ye alınan bir ürün %35 kârla satılırsa satış fiyatı kaç TL olur?",
        cevap: "160 ⋅ 1,35 = 216 TL (kâr: 216−160 = 56 = 160'ın %35'i)",
      },
    },
    {
      id: "yuzde-03-ardisik-degisim",
      ad: "Ardışık yüzde değişimi (zincirleme çarpan)",
      aciklama:
        "Üst üste zam/indirim. Yüzdeler TOPLANMAZ; çarpanlar çarpılır. %20 zam + %20 indirim = %4 kayıp, ÖSYM'nin en sevdiği tuzak.",
      yontem: [
        "Her değişimi çarpana çevir: %25 zam → 1,25; %20 indirim → 0,80.",
        "Çarpanları sırayla çarp; sıra sonucu değiştirmez.",
        "Sonucu yüzdeye çevir: toplam çarpan 0,96 ise net %4 azalış demektir.",
      ],
      celdiriciler: [
        { hata: "Yüzdeleri toplayıp çıkarmak (%25 zam − %20 indirim)", uretir: "%5 artış — doğrusu 1,25⋅0,8 = 1, fiyat değişmez" },
        { hata: "İkinci değişimi zamlı fiyat yerine ilk fiyat üzerinden uygulamak", uretir: "1,25x − 0,20x = 1,05x, yine sahte %5 artış" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "Bir ürünün fiyatına önce %25 zam, sonra yeni fiyat üzerinden %20 indirim yapılıyor. Son fiyat ilk fiyata göre nasıl değişir?",
        cevap: "1,25 ⋅ 0,80 = 1,00 ⇒ fiyat değişmez (100 TL → 125 TL → 100 TL)",
      },
    },
    {
      id: "yuzde-04-butunu-bulma",
      ad: "Yüzdesi verilen değerden bütünü (orijinali) bulmak",
      aciklama:
        "İndirimli/zamlı fiyat ya da bir yüzdenin karşılığı verilir; asıl (ilk) değer istenir. Geriye dönüşte çarpana BÖLÜNÜR, yüzde eklenip çıkarılmaz.",
      yontem: [
        "Bilinmeyen bütüne x de; verilen değeri çarpanla bağla: x⋅çarpan = verilen.",
        "x'i çek: x = verilen ÷ çarpan (indirimde 1−k/100'e, zamda 1+k/100'e böl).",
        "Sağlama: bulduğun x'e aynı yüzdeyi uygula, verilen değere dönmelisin.",
      ],
      celdiriciler: [
        { hata: "İndirimli fiyata aynı yüzdeyi geri eklemek", uretir: "340⋅1,15 = 391 — doğrusu 400" },
        { hata: "Bölmek yerine bir kez daha çarpmak", uretir: "340⋅0,85 = 289" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "Bir ürünün %15 indirimli fiyatı 340 TL'dir. İndirimden önceki fiyatı kaç TL'dir?",
        cevap: "0,85x = 340 ⇒ x = 340 ÷ 0,85 = 400 TL (sağlama: 400⋅0,85 = 340)",
      },
    },
    {
      id: "yuzde-05-basit-faiz",
      ad: "Basit faiz (yıllık oran, gerekirse ay→yıl çevrimi)",
      aciklama:
        "Faiz = anapara⋅oran⋅zaman/100; faiz her dönem yalnızca ANAPARA üzerinden işler. Süre ay verilirse yıla çevrilir. TYT'de az ama düzenli görülen tip.",
      yontem: [
        "Formülü yaz: Faiz = (Anapara ⋅ oran ⋅ zaman) / 100, zaman YIL cinsinden.",
        "Ay verildiyse çevir: n ay = n/12 yıl.",
        "Soru faizi mi, vade sonu toplamı mı (anapara + faiz) istiyor — ayır.",
      ],
      celdiriciler: [
        { hata: "Ayı yıla çevirmeden zamanı 18 almak", uretir: "900 yerine 10800" },
        { hata: "Faiz istenirken vade sonu toplamı vermek (ya da tersi)", uretir: "900 ile 3900 karışır" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      ornek: {
        soru: "3000 TL, yıllık %20 basit faizle 18 ay yatırılıyor. Kaç TL faiz getirir?",
        cevap: "18 ay = 1,5 yıl; Faiz = 3000⋅20⋅1,5/100 = 900 TL (vade sonu: 3900 TL)",
      },
    },
    {
      id: "yuzde-06-etiket-indirim-kar",
      ad: "Etiket-indirim-kâr zinciri (esnaf sorusu)",
      aciklama:
        "Maliyet üzerine %a eklenerek etiket yazılır, etiket üzerinden %b indirim yapılır; maliyete göre net kâr/zarar istenir. İki farklı referans (etiket ve maliyet) aynı soruda — gerçek sınav ayarı.",
      yontem: [
        "Maliyete M de; etiket = M⋅(1 + a/100).",
        "İndirim ETİKET üzerinden: satış = etiket⋅(1 − b/100) = M⋅(1+a/100)(1−b/100).",
        "Net çarpanı maliyetle karşılaştır: çarpan 1,2 ise maliyete göre %20 kâr.",
      ],
      celdiriciler: [
        { hata: "Yüzdeleri toplayıp çıkarmak (%60 − %25)", uretir: "%35 kâr — doğrusu 1,6⋅0,75 = 1,2 ⇒ %20" },
        { hata: "Kâr yüzdesini maliyet yerine satış üzerinden hesaplamak", uretir: "0,2/1,2 ≈ %16,7" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["oran-oranti-tyt"],
      ornek: {
        soru: "Bir esnaf, maliyetinin %60 fazlasını etiket fiyatı olarak yazdığı ürünü etiket üzerinden %25 indirimle satıyor. Bu satıştaki kârı maliyetinin yüzde kaçıdır?",
        cevap: "Satış = M⋅1,6⋅0,75 = 1,2M ⇒ kâr 0,2M, yani maliyetin %20'si",
      },
    },
    {
      id: "yuzde-07-iki-mal-net",
      ad: "Biri kârla biri zararla satılan iki mal (net sonuç)",
      aciklama:
        "İki ürün AYNI fiyata satılır; birinden %k kâr, diğerinden %k zarar edilir. Simetri yanıltıcıdır: maliyetler farklı olduğundan net sonuç başa baş DEĞİLDİR.",
      yontem: [
        "Her ürünün maliyetini satıştan geriye bul: kârlıda satış ÷ (1+k/100), zararlıda satış ÷ (1−k/100).",
        "Toplam maliyet ile toplam satışı karşılaştır.",
        "Aynı satış fiyatı ve eşit yüzdelerde sonuç DAİMA zarardır (zararlı malın maliyeti daha büyük).",
      ],
      celdiriciler: [
        { hata: "%20 kâr ile %20 zararın birbirini götürdüğünü sanmak", uretir: "'Ne kâr ne zarar' — doğrusu 20 TL zarar" },
        { hata: "Maliyeti çarpana bölmek yerine satıştan yüzde ekleyip çıkarmak (240⋅0,8 ve 240⋅1,2)", uretir: "Toplam maliyet 480 çıkar, yine sahte 'başa baş'" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["sayi-problemleri"],
      ornek: {
        soru: "Bir satıcı iki ürünün her birini 240 TL'ye satıyor; birinden %20 kâr, diğerinden %20 zarar ediyor. Satıcının bu iki satıştaki net durumu nedir?",
        cevap: "Maliyetler: 240÷1,2 = 200 ve 240÷0,8 = 300; toplam maliyet 500, toplam satış 480 ⇒ 20 TL zarar",
      },
    },
  ],
};

export default kb;
