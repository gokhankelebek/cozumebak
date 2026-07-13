import type { TopicSoruTipleri } from "./types";

// Hareket Problemleri (TYT · Problemler). Teacher's catalogue of how ÖSYM asks
// this topic. Ordered easy→hard. Every örnek is hand-verified; celdiriciler map
// each classic wrong answer to the exact mistake that produces it. Tek formül
// vardır: yol = hız × zaman — bütün tipler bu bağıntının hangi hızla (toplam,
// fark, bağıl, ortalama) kurulacağını sorar.
const kb: TopicSoruTipleri = {
  slug: "hareket-problemleri",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "hareket-01-yol-hiz-zaman",
      ad: "Yol = hız × zaman (birim çevirmeli temel hesap)",
      aciklama:
        "Tek araç, tek yolculuk; üç nicelikten ikisi verilir. TYT'nin tuzağı dakika-saat karışıklığıdır — süre neredeyse hep dakika verilir.",
      yontem: [
        "x = v⋅t bağıntısını yaz; istenmeyeni yalnız bırak.",
        "Birimleri eşitle: dakikayı 60'a bölerek saate çevir (40 dk = 40∕60 = 2∕3 saat).",
        "Gerekirse m/s ↔ km/sa çevir: km/sa değeri 18'e bölüp 5 ile çarparak m/s yap.",
      ],
      celdiriciler: [
        { hata: "Dakikayı saate çevirmeden çarpmak", uretir: "72⋅40 = 2880 gibi ölçeksiz dev sayı" },
        { hata: "Dakikayı 100'e bölmek (0,40 saat sanmak)", uretir: "72⋅0,4 = 28,8 — doğrusu 48" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "Saatte 72 km hızla giden bir araç 40 dakikada kaç km yol alır?", cevap: "t = 40∕60 = 2∕3 saat; x = 72⋅2∕3 = 48 km" },
    },
    {
      id: "hareket-02-zit-yon",
      ad: "Zıt yönde hareket (hızlar toplanır)",
      aciklama:
        "Birbirine doğru ya da birbirinden uzağa hareket eden iki araç; karşılaşma veya belirli uzaklığa gelme süresi istenir. Aradaki mesafe her saat (v₁+v₂) kadar değişir.",
      yontem: [
        "Yaklaşma/uzaklaşma hızı = v₁ + v₂.",
        "Kapanacak (ya da açılacak) mesafeyi belirle.",
        "t = mesafe ÷ (v₁+v₂); ara mesafe verilmişse önce farkı al.",
      ],
      celdiriciler: [
        { hata: "Hızların farkını almak (aynı yön formülünü kullanmak)", uretir: "360∕20 = 18 saat — doğrusu 3" },
        { hata: "Karşılaşma anında iki aracın eşit yol aldığını sanmak", uretir: "360∕2 = 180 km üzerinden kurulmuş yanlış süreler" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "Aralarında 360 km bulunan iki araç aynı anda 70 km/sa ve 50 km/sa hızlarla birbirine doğru hareket ediyor. Kaç saat sonra karşılaşırlar?", cevap: "t = 360∕(70+50) = 360∕120 = 3 saat" },
    },
    {
      id: "hareket-03-tren-kopru",
      ad: "Tünel/köprü geçen tren (kendi boyu + köprü boyu)",
      aciklama:
        "Uzunluğu olan araç bir köprüyü/tüneli TAMAMEN geçer. Alınan yol köprü boyu değil, köprü + tren boyudur; son vagon çıkana kadar geçiş bitmez.",
      yontem: [
        "Alınacak yol = tren boyu + köprü boyu.",
        "t = (L_tren + L_köprü) ÷ v; hız m/s, boylar metre — birimler zaten uyumludur.",
        "'Tünelin içinde tamamen kaybolma' sorulursa yol = tünel − tren olur; fiili dikkatle oku.",
      ],
      celdiriciler: [
        { hata: "Tren boyunu ihmal edip yalnız köprü boyunu almak", uretir: "600∕25 = 24 saniye — doğrusu 32" },
        { hata: "Yalnız tren boyunu almak (köprüyü unutmak)", uretir: "200∕25 = 8 saniye" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "200 m uzunluğundaki bir tren 25 m/s hızla 600 m'lik bir köprüyü kaç saniyede tamamen geçer?", cevap: "yol = 200+600 = 800 m; t = 800∕25 = 32 saniye" },
    },
    {
      id: "hareket-04-ayni-yon-takip",
      ad: "Aynı yönde takip (hızlar farkı ile yetişme)",
      aciklama:
        "Önde giden araca arkadaki daha hızlı araç yetişir. Aradaki açık her saat (v₂−v₁) kadar kapanır; hızları toplayan öğrenci klasik kurbandır.",
      yontem: [
        "Kapanma hızı = hızlı − yavaş (v₂ − v₁).",
        "Aradaki açığı belirle (verilmişse doğrudan, verilmemişse önce hesapla).",
        "Yetişme süresi t = açık ÷ (v₂−v₁).",
      ],
      celdiriciler: [
        { hata: "Aynı yönde de hızları toplamak", uretir: "150∕(90+60) = 1 saat — doğrusu 5" },
        { hata: "Açığı yalnız hızlı aracın hızına bölmek", uretir: "150∕90 ≈ 1,67 saat" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "Bir araç 150 km öndeki 60 km/sa hızlı kamyonu 90 km/sa hızla takip ediyor. Kaç saatte yetişir?", cevap: "t = 150∕(90−60) = 150∕30 = 5 saat" },
    },
    {
      id: "hareket-05-gecikmeli-cikis",
      ad: "Gecikmeli çıkış (önce yola çıkanın açtığı ara)",
      aciklama:
        "Aynı noktadan biri önce çıkar; ikinci araç sonradan aynı yönde hareket edip yetişir. Takip probleminin iki aşamalısı: önce açılan arayı hesapla, sonra kapat. Sürenin KİME göre istendiği ikinci tuzaktır.",
      yontem: [
        "Açılan ara = birinci aracın hızı × gecikme süresi.",
        "Kapanma hızı = v₂ − v₁; yetişme süresi = ara ÷ (v₂−v₁).",
        "Cevabı sorunun saatine bağla: 'otomobilin çıkışından' ile 'kamyonun çıkışından' farklı sayılardır.",
      ],
      celdiriciler: [
        { hata: "Süreyi yanlış araca göre vermek (ilk aracın toplam süresini yazmak)", uretir: "5 yerine 3+5 = 8 saat" },
        { hata: "Açılan arayı hız farkı yerine hızlı aracın hızına bölmek", uretir: "150∕80 = 1,875 saat" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["birinci-derece-denklem-tyt"],
      ornek: { soru: "Bir kamyon 50 km/sa hızla yola çıkıyor; 3 saat sonra aynı noktadan 80 km/sa hızla bir otomobil aynı yönde hareket ediyor. Otomobil çıkışından kaç saat sonra kamyona yetişir?", cevap: "ara = 50⋅3 = 150 km; t = 150∕(80−50) = 5 saat" },
    },
    {
      id: "hareket-06-ortalama-hiz",
      ad: "Gidiş-dönüş ortalama hız (harmonik ortalama)",
      aciklama:
        "Eşit yol farklı hızlarla gidilip dönülür, ortalama hız istenir. Ortalama hız = toplam yol ÷ toplam süre; hızların aritmetik ortalaması DEĞİLDİR — TYT'nin en meşhur çeldiricisi seçeneklerde her zaman durur.",
      yontem: [
        "Tek yön için hızların ortak katı bir mesafe seç (60 ve 40 için 120 km).",
        "Her yönün süresini hesapla, topla.",
        "Ortalama = toplam yol ÷ toplam süre; kestirme: v_ort = 2⋅v₁⋅v₂ ∕ (v₁+v₂).",
      ],
      celdiriciler: [
        { hata: "Aritmetik ortalama almak: (v₁+v₂)÷2", uretir: "(60+40)∕2 = 50 — doğrusu 48" },
        { hata: "Süreleri eşit varsayıp yolları ortalamak", uretir: "Aritmetik ortalamayla aynı kapıya çıkan 50" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      ornek: { soru: "Bir araç iki şehir arasını gidişte 60 km/sa, dönüşte 40 km/sa hızla alıyor. Yolculuğun tamamı için ortalama hız kaç km/sa'tir?", cevap: "Tek yön 120 km al: süreler 2+3 = 5 saat, yol 240 km ⇒ 240∕5 = 48 km/sa" },
    },
    {
      id: "hareket-07-akinti",
      ad: "Akıntıda / yürüyen bantta hız (v ± akıntı)",
      aciklama:
        "Nehirde kayık ya da yürüyen bantta yolcu: akıntı yönünde hızlar toplanır, akıntıya karşı çıkarılır. Gidiş-dönüş sorulduğunda iki yönün süreleri ayrı hesaplanır — tek hızla götürmek en pahalı hatadır.",
      yontem: [
        "Akıntı yönü hızı = v_tekne + v_akıntı; akıntıya karşı = v_tekne − v_akıntı.",
        "Her yönün süresini ayrı hesapla: t = yol ÷ etkin hız.",
        "Toplam süre = süreler toplamı; verilen süreden akıntı hızı da geri çözülebilir.",
      ],
      celdiriciler: [
        { hata: "İki yönde de durgun su hızını kullanmak", uretir: "48∕10 = 4,8 saat — doğrusu 5" },
        { hata: "Akıntıyı her iki yönde de eklemek", uretir: "48∕12 = 4 saat" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["oran-oranti-tyt"],
      ornek: { soru: "Durgun sudaki hızı 10 km/sa olan kayık, akıntı hızı 2 km/sa olan nehirde 24 km gidip başlangıç noktasına dönüyor. Yolculuk toplam kaç saat sürer?", cevap: "Gidiş: 24∕12 = 2 saat; dönüş: 24∕8 = 3 saat ⇒ toplam 5 saat" },
    },
  ],
};

export default kb;
