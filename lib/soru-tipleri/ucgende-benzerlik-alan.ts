import type { TopicSoruTipleri } from "./types";

// Üçgende Benzerlik ve Alan (TYT · Temel Geometri). Teacher's catalogue of how
// ÖSYM asks this topic. Ordered easy→hard. Every örnek is hand-verified and the
// configurations are geometrically realizable; celdiriciler map each classic
// wrong answer to the exact mistake that produces it. Konunun bir numaralı
// tuzağı: çevre k ile, alan k² ile orantılıdır.
const kb: TopicSoruTipleri = {
  slug: "ucgende-benzerlik-alan",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "ucgende-benzerlik-01-tales-paralel",
      ad: "Paralel kesenle Tales (parça oranından uzunluk)",
      aciklama:
        "△ABC'de [DE] ∥ [BC] olacak biçimde D∈[AB], E∈[AC]. Paralellik kenarları AYNI oranda böler: AD/DB = AE/EC. Konunun açılış sorusu.",
      yontem: [
        "Paralel doğruyu gör: [DE] ∥ [BC] ⇒ kenarlar orantılı bölünür.",
        "Oranı parça-parça kur: AD/DB = AE/EC (üst parçalar bir tarafta, alt parçalar diğer tarafta).",
        "İçler-dışlar çarpımı ile bilinmeyeni çek.",
        "Dikkat: parça/parça oranı ile parça/bütün (AD/AB) oranını karıştırma.",
      ],
      celdiriciler: [
        { hata: "Oranı parça/bütün kurmak: AD/AB = AE/EC yazmak", uretir: "EC = 12 (doğrusu 4)" },
        { hata: "Oranı ters çevirmek: DB/AD = AE/EC", uretir: "EC = 16" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "△ABC'de D∈[AB], E∈[AC] ve [DE] ∥ [BC]. AD=6, DB=3, AE=8 birim ise EC kaç birimdir?",
        cevap: "AD/DB = AE/EC ⇒ 6/3 = 8/EC ⇒ EC = 4",
      },
    },
    {
      id: "ucgende-benzerlik-02-aa-kenar",
      ad: "AA benzerliği ile kenar bulma (DE'den BC'ye geçiş)",
      aciklama:
        "[DE] ∥ [BC] iken △ADE ~ △ABC olur (AA). Paralel kenarın kendisi sorulunca oran parça/parça DEĞİL, parça/bütün alınır: DE/BC = AD/AB. Tales sorusunun bir kademe üstü.",
      yontem: [
        "Paralellikten iki eş açı bul: △ADE ~ △ABC (AA benzerliği).",
        "Benzer üçgenlerde oran BÜTÜN kenarlar arasındadır: DE/BC = AD/AB = AE/AC.",
        "AB = AD + DB toplamını yazmayı unutma.",
        "Oranı kur, istenen kenarı çek.",
      ],
      celdiriciler: [
        { hata: "DE/BC oranını AD/DB (parça/parça) ile kurmak", uretir: "DE = 18 (doğrusu 6)" },
        { hata: "AB yerine DB kullanmak: DE/BC = AD/DB karıştırması ile aynı kapıya çıkan eşleme hatası", uretir: "Şıklarda duran 18 veya 4,5 gibi kaymış değerler" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "△ABC'de D∈[AB], E∈[AC] ve [DE] ∥ [BC]. AD=4, DB=2, BC=9 birim ise DE kaç birimdir?",
        cevap: "△ADE ~ △ABC ⇒ DE/BC = AD/AB = 4/6 ⇒ DE = 9⋅2/3 = 6",
      },
    },
    {
      id: "ucgende-benzerlik-03-alan-orani-k2",
      ad: "Benzerlik oranı → alan oranı k² (çevre k, alan k² tuzağı)",
      aciklama:
        "Benzerlik oranı k ise uzunluklar (kenar, çevre, yükseklik) k ile, ALAN k² ile orantılıdır. Alanı k ile çarpmak konunun bir numaralı hatasıdır; ÖSYM bu yanlışın ürettiği değeri hep şıklara koyar.",
      yontem: [
        "Benzerlik oranını yönüyle yaz: k = küçük/büyük (hangi üçgenden hangisine gittiğine dikkat).",
        "Uzunluk isteniyorsa k ile, alan isteniyorsa k² ile çarp.",
        "Alan oranı: A₁/A₂ = k².",
        "Sağlama: büyük üçgenin alanı küçüğünkinden büyük çıkmalı.",
      ],
      celdiriciler: [
        { hata: "Alan oranını k sanmak (kareyi almamak)", uretir: "45 yerine 30" },
        { hata: "Oranı ters yönde uygulamak (büyükten küçüğe k² ile bölmek yerine çarpmak)", uretir: "20⋅4/9 ≈ 8,9 gibi küçülmüş değer" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "Benzer iki üçgenin benzerlik oranı (küçükten büyüğe) 2/3'tür. Küçük üçgenin alanı 20 birim kare ise büyük üçgenin alanı kaç birim karedir?",
        cevap: "Alan oranı k² = 4/9 ⇒ A_büyük = 20⋅9/4 = 45",
      },
    },
    {
      id: "ucgende-benzerlik-04-paralel-alan-bolme",
      ad: "Tabana paralel doğru ile alan bölme (üçgen + yamuk)",
      aciklama:
        "[DE] ∥ [BC] üçgeni tepede küçük bir üçgen ile altta bir yamuğa ayırır. Küçük üçgenin alanı k² ile bulunur; yamuk alanı FARKTAN gelir. İki tuzak üst üste: k² unutulur ya da yamuk yerine üçgen verilir.",
      yontem: [
        "△ADE ~ △ABC benzerliğini kur; k = AD/AB.",
        "Küçük üçgenin alanı: A(ADE) = k²⋅A(ABC).",
        "Yamuğun alanı fark ile: A(DECB) = A(ABC) − A(ADE).",
        "Soruda üçgen mi yamuk mu istendiğini bir kez daha oku.",
      ],
      celdiriciler: [
        { hata: "Küçük üçgen alanını k ile hesaplamak: 36⋅1/2", uretir: "Yamuk 18 (doğrusu 27)" },
        { hata: "Yamuk yerine küçük üçgenin alanını işaretlemek", uretir: "9" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "△ABC'de D∈[AB], E∈[AC] ve [DE] ∥ [BC]; AD/AB = 1/2 ve A(ABC) = 36 birim karedir. DECB yamuğunun alanı kaç birim karedir?",
        cevap: "A(ADE) = (1/2)²⋅36 = 9 ⇒ A(DECB) = 36−9 = 27",
      },
    },
    {
      id: "ucgende-benzerlik-05-kenarortay-alan",
      ad: "Kenarortay ile alan bölme (altı eş parça)",
      aciklama:
        "Bir kenarortay üçgeni iki EŞİT alana böler; üç kenarortay ağırlık merkezinde kesişir ve üçgeni altı EŞ alana ayırır. G merkezli parça-alan soruları bu iki cümleyle çözülür.",
      yontem: [
        "Tek kenarortay: iki eş alan (tabanlar eşit, yükseklik ortak).",
        "Üç kenarortay: altı eş parça; her biri A(ABC)/6.",
        "İstenen bölgenin kaç parçadan oluştuğunu say (ör. △AGB iki parçadır).",
        "Parça sayısı × A(ABC)/6.",
      ],
      celdiriciler: [
        { hata: "△AGB'yi tek parça sanıp A/6 vermek", uretir: "9 (doğrusu 18)" },
        { hata: "Kenarortayın alanı yalnız ikiye böldüğünü düşünüp A/2 vermek", uretir: "27" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "△ABC'nin kenarortayları G noktasında kesişiyor ve A(ABC) = 54 birim karedir. A(AGB) kaç birim karedir?",
        cevap: "Kenarortaylar üçgeni 6 eş parçaya böler; △AGB bunların ikisidir ⇒ 2⋅54/6 = 18",
      },
    },
    {
      id: "ucgende-benzerlik-06-ayni-yukseklik",
      ad: "Aynı yükseklikli üçgenlerde taban oranı = alan oranı",
      aciklama:
        "Tepe noktası ortak, tabanları aynı doğru üzerinde olan üçgenlerde yükseklik ortaktır; alanlar TABANLARLA orantılıdır (kare alınmaz — benzerlik yok, yükseklik ortaklığı var). ÖSYM'nin alan bölme sorularının motoru.",
      yontem: [
        "Tabanların aynı doğru üzerinde, tepenin ortak olduğunu doğrula ⇒ yükseklik ortak.",
        "Alan oranı = taban oranı: A(ABD)/A(ADC) = BD/DC.",
        "Bütünle çalışırken payda taban TOPLAMI olur: A(ABD)/A(ABC) = BD/BC.",
        "Bu kural benzerlik değildir; k² almaya kalkma.",
      ],
      celdiriciler: [
        { hata: "BD/DC = 2/4 oranını BD/BC sanmak", uretir: "12 (doğrusu 8)" },
        { hata: "Benzerlik var sanıp taban oranının karesini almak: (1/3)²", uretir: "24/9 = 8/3 gibi kesirli saçma değer" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["dik-ucgen-pisagor"],
      ornek: {
        soru: "△ABC'de D∈[BC], BD=2, DC=4 birim ve A(ABC)=24 birim karedir. A(ABD) kaç birim karedir?",
        cevap: "Yükseklik ortak ⇒ A(ABD)/A(ABC) = BD/BC = 2/6 ⇒ A(ABD) = 24⋅1/3 = 8",
      },
    },
    {
      id: "ucgende-benzerlik-07-alandan-cevreye",
      ad: "Alan oranından çevre/kenar bulma (karekök yönü)",
      aciklama:
        "Alanlar verilir, çevre ya da kenar istenir — k² tuzağının TERS yönü. Alan oranının KAREKÖKÜ alınmadan çevreye geçilemez. Sınav ayarındaki karışık soru.",
      yontem: [
        "Alan oranını yaz ve sadeleştir: A₁/A₂ = 27/48 = 9/16.",
        "Benzerlik oranı karekökle gelir: k = √(9/16) = 3/4.",
        "Çevre (ve her uzunluk) k ile orantılıdır: Ç_büyük = Ç_küçük⋅(1/k yönünde) = 18⋅4/3.",
        "Sağlama: büyük üçgenin çevresi büyük çıkmalı.",
      ],
      celdiriciler: [
        { hata: "Çevreyi alan oranıyla çarpmak (karekök almamak)", uretir: "18⋅16/9 = 32 (doğrusu 24)" },
        { hata: "k = 3/4'ü ters yönde uygulamak: 18⋅3/4", uretir: "13,5 — küçülmüş çevre" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      ornek: {
        soru: "Benzer iki üçgenin alanları sırasıyla 27 ve 48 birim karedir. Küçük üçgenin çevresi 18 birim ise büyük üçgenin çevresi kaç birimdir?",
        cevap: "A oranı 27/48 = 9/16 ⇒ k = 3/4 ⇒ Ç_büyük = 18⋅4/3 = 24",
      },
    },
  ],
};

export default kb;
