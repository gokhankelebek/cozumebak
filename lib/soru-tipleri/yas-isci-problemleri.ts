import type { TopicSoruTipleri } from "./types";

// Yaş, İşçi ve Havuz Problemleri (TYT · Oran-Orantı ve Problemler). Teacher's
// catalogue of how ÖSYM asks this topic. Ordered easy→hard. Every örnek is
// hand-verified; celdiriciler map each classic wrong answer to the exact
// mistake that produces it. Problemler TYT'nin en büyük bloğu; yaş-işçi-havuz
// üçlüsü bu blokta neredeyse her yıl temsil edilir.
const kb: TopicSoruTipleri = {
  slug: "yas-isci-problemleri",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "yas-isci-01-zaman-ilkesi",
      ad: "Zamanın herkese eşit işlemesi (fark sabit, toplam k⋅n artar)",
      aciklama:
        "Konunun temel ilkesini doğrudan yoklayan soru: n yıl geçince HERKES n yaş değişir. Buradan iki hızlı sonuç: iki kişinin yaş farkı hiç değişmez; k kişinin yaşları toplamı n yılda k⋅n artar.",
      yontem: [
        "n yıl sonrası için her kişiye +n, n yıl öncesi için her kişiye −n uygula.",
        "Fark sorulursa hesap yapma: yaş farkı her an sabittir.",
        "Toplam sorulursa kişi sayısını unutma: yeni toplam = eski toplam + k⋅n.",
      ],
      celdiriciler: [
        { hata: "n yılı yalnızca bir kişiye eklemek (toplama +n demek)", uretir: "45+4=49 — doğrusu 45+3⋅4=57" },
        { hata: "Yaş farkının da zamanla büyüdüğünü sanmak", uretir: "Farka n eklenmiş yanlış değer" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "Üç kardeşin yaşları toplamı bugün 45'tir. 4 yıl sonra yaşları toplamı kaç olur?",
        cevap: "Her kardeş 4 yaş alır: 45 + 3⋅4 = 57",
      },
    },
    {
      id: "yas-isci-02-toplam-kat",
      ad: "Yaşlar toplamı + kat ilişkisi (baba-oğul klasiği)",
      aciklama:
        "Bugünkü toplam ve 'biri diğerinin k katı' bilgisi verilir; tek bilinmeyenle çözülür. Konunun ısınma denklemi.",
      yontem: [
        "Küçüğe x de; büyüğü k⋅x olarak yaz.",
        "Toplam denklemini kur: x + k⋅x = (k+1)⋅x = toplam.",
        "Toplamı (k+1)'e böl; soru hangi kişiyi istiyorsa ONU cevapla.",
      ],
      celdiriciler: [
        { hata: "Toplamı (k+1) yerine k'ye bölmek", uretir: "48÷5 = 9,6 — kesirli, şıklara uymayan değer" },
        { hata: "Oğul istenirken babayı (ya da tersini) işaretlemek", uretir: "8 yerine 40" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "Bir baba ile oğlunun yaşları toplamı 48'dir. Babanın yaşı oğlunun yaşının 5 katı olduğuna göre oğul kaç yaşındadır?",
        cevap: "x + 5x = 48 ⇒ 6x = 48 ⇒ x = 8 (baba 40; sağlama: 40 = 5⋅8)",
      },
    },
    {
      id: "yas-isci-03-yil-sonra-kat",
      ad: "Kaç yıl sonra k katı olur? (tek denklemli kat sorusu)",
      aciklama:
        "Bugünkü yaşlar verilir, 'kaç yıl sonra/önce biri diğerinin k katı olur' istenir. Aranan süre t; iki tarafa da t işlenir.",
      yontem: [
        "Süreye t de; t yıl sonra için HER İKİ yaşa +t ekle (önce için −t).",
        "Kat koşulunu kur: büyük + t = k⋅(küçük + t).",
        "Denklemi çöz; bulduğun t'yi yaşlara geri koyup katı sağla.",
      ],
      celdiriciler: [
        { hata: "t'yi yalnızca bir kişiye eklemek (38+t = 3⋅8 kurmak)", uretir: "t = −14 gibi anlamsız/negatif süre" },
        { hata: "Kat ilişkisini ters kurmak (3(38+t) = 8+t)", uretir: "Negatif, soruyla çelişen t değeri" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "Bir annenin yaşı 38, kızının yaşı 8'dir. Kaç yıl sonra annenin yaşı kızının yaşının 3 katı olur?",
        cevap: "38+t = 3(8+t) ⇒ 38+t = 24+3t ⇒ 14 = 2t ⇒ t = 7 (sağlama: 45 = 3⋅15)",
      },
    },
    {
      id: "yas-isci-04-birlikte-calisma",
      ad: "Birim iş ve birlikte çalışma (1/a + 1/b)",
      aciklama:
        "İşi a günde bitiren, bir günde işin 1/a'sını yapar; birlikte çalışınca birim işler TOPLANIR, süreler toplanmaz. İşçi sorularının omurgası.",
      yontem: [
        "Tüm işi 1 kabul et; her işçinin günlük işini 1/süre olarak yaz.",
        "Birlikte günlük iş: 1/a + 1/b (paydaları eşitleyip topla).",
        "Ortak süre bu kesrin TERSİDİR: 1 ÷ (1/a + 1/b).",
      ],
      celdiriciler: [
        { hata: "Süreleri doğrudan toplamak", uretir: "8+24 = 32 gün" },
        { hata: "Sürelerin ortalamasını almak", uretir: "(8+24)/2 = 16 gün" },
        { hata: "Birim işleri toplayıp tersini almayı unutmak", uretir: "1/6'yı 'gün' sanmak" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["oran-oranti-tyt"],
      ornek: {
        soru: "Bir işi A işçisi 8 günde, B işçisi 24 günde bitirebiliyor. İkisi birlikte çalışırsa iş kaç günde biter?",
        cevap: "1/8 + 1/24 = 3/24 + 1/24 = 4/24 = 1/6 ⇒ iş 6 günde biter",
      },
    },
    {
      id: "yas-isci-05-havuz-bosaltan",
      ad: "Havuz problemi (dolduran + / boşaltan −)",
      aciklama:
        "Dolduran ve boşaltan musluk birlikte açıktır. Boşaltan musluk işi geri götürür; hızı NEGATİF işaretle katılır, net hız farktır.",
      yontem: [
        "Dolduranın saatlik işi +1/a, boşaltanın saatlik etkisi −1/b.",
        "Net saatlik dolum: 1/a − 1/b (pozitifse havuz dolar).",
        "Dolma süresi net hızın tersidir; kısmi süre sorulursa net hızı süreyle çarp.",
      ],
      celdiriciler: [
        { hata: "Boşaltan musluğu da + almak", uretir: "1/4 + 1/12 = 1/3 ⇒ 3 saat" },
        { hata: "Sürelerin farkını almak", uretir: "12 − 4 = 8 saat" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "Bir havuzu dolduran musluk tek başına 4 saatte dolduruyor; boşaltan musluk dolu havuzu 12 saatte boşaltıyor. Havuz boşken ikisi birlikte açılırsa havuz kaç saatte dolar?",
        cevap: "1/4 − 1/12 = 3/12 − 1/12 = 2/12 = 1/6 ⇒ havuz 6 saatte dolar",
      },
    },
    {
      id: "yas-isci-06-iki-zaman-kat",
      ad: "n yıl önce k katı, m yıl sonra p katı (iki denklemli yaş)",
      aciklama:
        "Geçmiş ve gelecekteki iki ayrı kat ilişkisi verilir; iki bilinmeyenli sistem kurulur. Yaş sorularının sınav ayarı.",
      yontem: [
        "Bugünkü yaşlara x ve y de; her koşul için HERKESE aynı kaydırmayı uygula.",
        "İki denklem yaz: (x−n) = k(y−n) ve (x+m) = p(y+m).",
        "Birinden x'i çekip diğerine koy; bulduğun yaşları HER İKİ koşulda sağla.",
      ],
      celdiriciler: [
        { hata: "Kaydırmayı (−5/+5) yalnızca bir kişiye uygulamak", uretir: "Oğul için 1,25 gibi kesirli, anlamsız yaş" },
        { hata: "Sistemi çözüp bugünkü yaş yerine 5 yıl önceki yaşı işaretlemek", uretir: "10 yerine 5" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["sayi-problemleri"],
      ornek: {
        soru: "Bir babanın yaşı 5 yıl önce oğlunun yaşının 7 katıydı; 5 yıl sonra ise 3 katı olacaktır. Oğul bugün kaç yaşındadır?",
        cevap: "b−5 = 7(o−5) ⇒ b = 7o−30; b+5 = 3(o+5) ⇒ 7o−25 = 3o+15 ⇒ 4o = 40 ⇒ o = 10 (b = 40; sağlama: 35 = 7⋅5, 45 = 3⋅15)",
      },
    },
    {
      id: "yas-isci-07-kalan-is",
      ad: "İşin bir kısmı yapıldıktan sonra kalan iş",
      aciklama:
        "Birlikte başlanır, biri ayrılır (ya da geç katılır); kalan işi kimin kaç günde bitirdiği istenir. Aşamalı kurgu, gerçek sınav zorluğu.",
      yontem: [
        "Birlikte çalışılan sürede biten işi hesapla: süre ⋅ (1/a + 1/b).",
        "Kalan işi bul: 1 − biten kısım.",
        "Kalan işi, devam eden kişinin günlük işine böl: kalan ÷ (1/süre). Soru toplam süreyi mi, kalan süreyi mi istiyor — dikkat.",
      ],
      celdiriciler: [
        { hata: "Kalan işi 1'den çıkarmayı unutup tüm işi devredene yaptırmak", uretir: "10 yerine 15" },
        { hata: "Kalan süre istenirken toplam süreyi vermek (ya da tersi)", uretir: "10 yerine 12" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      ornek: {
        soru: "Bir işi A işçisi 10 günde, B işçisi 15 günde bitirebiliyor. İkisi birlikte 2 gün çalıştıktan sonra A ayrılıyor. Kalan işi B tek başına kaç günde bitirir?",
        cevap: "Birlikte günlük iş 1/10 + 1/15 = 5/30 = 1/6; 2 günde 2/6 = 1/3 biter, kalan 2/3; B için süre (2/3) ÷ (1/15) = 10 gün",
      },
    },
  ],
};

export default kb;
