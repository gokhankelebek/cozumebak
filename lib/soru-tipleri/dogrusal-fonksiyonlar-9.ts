import type { TopicSoruTipleri } from "./types";

// DOĞRUSAL FONKSİYONLAR (9. sınıf · Nicelikler ve Değişimler). Yazılı ve ortak
// sınav soruları: f(x) = ax + b'de eğim ile y kesişimini bulma, okuma ve günlük
// hayata bağlama. Arketipler MEB programındaki öğrenme çıktılarından ve okul
// sınavlarının alışılmış soru kalıplarından çıkarıldı (ÖSYM kataloğundan değil).
// Ordered easy→hard. Every örnek is hand-verified.
const kb: TopicSoruTipleri = {
  slug: "dogrusal-fonksiyonlar-9",
  durum: "taslak",
  tipler: [
    {
      id: "dogrusal-9-01-dogru-oranti",
      ad: "Doğru orantılı nicelikler: f(x) = ax",
      aciklama:
        "İki nicelik doğru orantılıdır (ücret–ağırlık, yol–süre) ve bir değer çifti verilir; kural ya da başka bir değer istenir. Doğru orantının grafiği orijinden geçer, yani b = 0'dır; a ise birim başına değişimdir.",
      yontem: [
        "Doğru orantıyı f(x) = ax biçiminde yaz; sabit terim yoktur.",
        "Verilen çifti yerine koy ve a'yı bul: a = y⁄x.",
        "İstenen x değerini kuralda yerine yaz.",
        "Birimi cevaba ekle; a'nın anlamını ('kilogram başına 45 TL') bir cümleyle söyle.",
      ],
      celdiriciler: [
        { hata: "Oranı ters kurmak (a = x⁄y almak)", uretir: "Birim fiyat yerine onun tersiyle bulunan çok küçük değer" },
        { hata: "Doğru orantıya sabit terim eklemek", uretir: "Orijinden geçmeyen, f(0) ≠ 0 olan kural" },
        { hata: "Artışı çarpma yerine toplama ile taşımak ('4 kg fazla, 4 TL fazla')", uretir: "Oranı korumayan değer" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      kombinasyon: ["birinci-derece-problemler-9"],
      ornek: {
        soru: "Bir manavda elmanın ücreti ağırlığıyla doğru orantılıdır ve 3 kg elma 135 TL'dir. Ücreti ağırlığa bağlayan fonksiyonu yazıp 7 kg elmanın ücretini bulunuz.",
        cevap: "f(x) = ax, 135 = 3a ⇒ a = 45; f(x) = 45x ⇒ f(7) = 315 TL (a = 45: kilogram başına ücret)",
      },
    },
    {
      id: "dogrusal-9-02-egim-iki-nokta",
      ad: "İki noktadan eğim bulma",
      aciklama:
        "Grafiğin geçtiği iki nokta (ya da tablodan iki satır) verilir, eğim istenir. Eğim, y'deki değişimin x'teki değişime oranıdır; soru çoğu zaman eğimin işaretinden fonksiyonun artan mı azalan mı olduğunu da sorar.",
      yontem: [
        "Noktaları (x₁, y₁) ve (x₂, y₂) olarak adlandır.",
        "Eğim = (y₂ − y₁)⁄(x₂ − x₁); payda ve paydada AYNI noktadan başla.",
        "İşarete bak: eğim pozitifse fonksiyon artan, negatifse azalandır.",
        "Sağlama: x bir birim artınca y eğim kadar değişmeli.",
      ],
      celdiriciler: [
        { hata: "Payda ve paydada farklı noktadan başlamak", uretir: "Doğru eğimin ters işaretlisi" },
        { hata: "Oranı ters kurmak (x farkını y farkına bölmek)", uretir: "Eğimin çarpmaya göre tersi" },
        { hata: "Negatif koordinatta çıkarma hatası (4 − (−2) yerine 4 − 2)", uretir: "Farkı küçük hesaplanmış yanlış eğim" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "Grafiği A(1, 3) ve B(4, 9) noktalarından geçen doğrusal fonksiyonun eğimi kaçtır? Fonksiyon artan mıdır?",
        cevap: "Eğim = (9 − 3)⁄(4 − 1) = 6⁄3 = 2; eğim pozitif olduğundan fonksiyon artandır.",
      },
    },
    {
      id: "dogrusal-9-03-kurali-bulma",
      ad: "İki değerden fonksiyonun kuralını bulma",
      aciklama:
        "f doğrusal fonksiyonunun iki değeri verilir (f(1) = 5, f(3) = 11 gibi); kural ya da üçüncü bir değer istenir. Yazılıların en klasik açık uçlu sorusudur ve her adım ayrı puanlanır: eğim, sabit terim, kural, istenen değer.",
      yontem: [
        "Verilenleri nokta olarak yaz: (1, 5) ve (3, 11).",
        "Eğimi bul: a = (11 − 5)⁄(3 − 1).",
        "Noktalardan birini f(x) = ax + b'de yerine koyup b'yi bul.",
        "Kuralı yaz, kullanmadığın noktayla sağla, sonra istenen değeri hesapla.",
      ],
      celdiriciler: [
        { hata: "b'yi bulmadan f(x) = ax ile devam etmek", uretir: "Sabit terimi eksik, verilen noktaları sağlamayan kural" },
        { hata: "b'yi bulurken işaret hatası (5 = 3 + b'den b = 8)", uretir: "Yalnız bir noktayı sağlayan kural" },
        { hata: "Kuralı bulup soruda istenen değeri hesaplamayı unutmak", uretir: "Yarım kalan çözüm, eksik puan" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "f doğrusal bir fonksiyondur. f(1) = 5 ve f(3) = 11 olduğuna göre f(10) kaçtır?",
        cevap: "a = (11 − 5)⁄(3 − 1) = 3; 5 = 3⋅1 + b ⇒ b = 2; f(x) = 3x + 2 (sağlama: f(3) = 11) ⇒ f(10) = 32",
      },
    },
    {
      id: "dogrusal-9-04-eksen-kesisim",
      ad: "Eksen kesişimleri ve eksenlerle oluşan üçgen",
      aciklama:
        "Kuralı verilen fonksiyonun grafiğinin eksenleri kestiği noktalar, çoğu zaman da grafiğin eksenlerle oluşturduğu üçgenin alanı istenir. y kesişimi için x = 0, x kesişimi için f(x) = 0 alınır; ikisini karıştırmak konunun en yaygın hatasıdır.",
      yontem: [
        "y kesişimi: x = 0 yaz, nokta (0, b).",
        "x kesişimi: f(x) = 0 çöz, nokta (−b⁄a, 0).",
        "Alan isteniyorsa dik kenarlar bu iki kesişimin orijine uzaklıklarıdır (mutlak değer al).",
        "Alan = (taban ⋅ yükseklik)⁄2.",
      ],
      celdiriciler: [
        { hata: "x kesişimini x = 0 koyarak aramak", uretir: "y kesişiminin x kesişimi diye yazılması" },
        { hata: "Alanda ikiye bölmeyi unutmak", uretir: "Doğru alanın iki katı" },
        { hata: "Negatif kesişimi uzunluk olarak negatif almak", uretir: "Negatif çıkan alan" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "f(x) = −2x + 6 fonksiyonunun grafiği ile koordinat eksenleri arasında kalan üçgenin alanı kaç birimkaredir?",
        cevap: "y kesişimi (0, 6); −2x + 6 = 0 ⇒ x = 3, x kesişimi (3, 0); alan = (3⋅6)⁄2 = 9",
      },
    },
    {
      id: "dogrusal-9-05-tablo-grafik-okuma",
      ad: "Tablodan ya da grafikten kural çıkarma",
      aciklama:
        "x–y tablosu ya da ızgaralı bir grafik verilir; ilişkinin doğrusal olup olmadığı, kuralı ve bir değer istenir. Doğrusallığın işareti, eşit x adımlarında y'nin hep aynı miktarda değişmesidir.",
      yontem: [
        "x'teki adımların eşit olduğunu kontrol et, y'deki farkları yaz.",
        "Farklar sabitse ilişki doğrusaldır; eğim = y farkı⁄x farkı.",
        "x = 0 satırı (ya da grafiğin y eksenini kestiği nokta) b'yi verir.",
        "Kuralı yaz ve tablodaki başka bir satırla sağla.",
      ],
      celdiriciler: [
        { hata: "y farkını doğrudan eğim saymak (x adımı 1 değilken)", uretir: "Eğimin x adımı katı kadar büyük kural" },
        { hata: "Tablonun ilk satırını b sanmak (x = 0 olmadığı hâlde)", uretir: "Sabit terimi kaymış kural" },
        { hata: "Grafikte kare sayarken eksen ölçeğine bakmamak", uretir: "Ölçek oranı kadar hatalı eğim" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      ornek: {
        soru: "x = 0, 2, 4 için y sırasıyla 7, 11, 15 değerlerini alıyor. Bu ilişkinin kuralını yazınız; y = 31 olduğunda x kaçtır?",
        cevap: "x 2 artınca y 4 artıyor ⇒ eğim = 4⁄2 = 2; x = 0 için y = 7 ⇒ f(x) = 2x + 7; 2x + 7 = 31 ⇒ x = 12",
      },
    },
    {
      id: "dogrusal-9-06-gunluk-hayat-modeli",
      ad: "Sabit ücret + birim ücret modeli",
      aciklama:
        "Açılış ücreti ve kilometre ücreti, abonelik ve kullanım ücreti gibi bir durum anlatılır. Sabit kısım b, birim başına değişen kısım a olur: f(x) = ax + b. Soru ya toplamı ya da toplamdan x'i ister; ülke geneli ortak sınavların sevdiği bağlamlı soru tipidir.",
      yontem: [
        "Değişmeyen tutarı b, birim başına tutarı a olarak ayır.",
        "x'in neyi saydığını yaz (km, saat, adet) ve kuralı kur.",
        "İstenene göre x'i yerine koy ya da f(x) = verilen tutar denklemini çöz.",
        "Cevabı birimiyle yaz ve bağlama uygun mu diye bak (negatif km olmaz).",
      ],
      celdiriciler: [
        { hata: "Sabit ücreti de x ile çarpmak", uretir: "Her birimde açılış ücreti eklenmiş, çok büyük tutar" },
        { hata: "Tutardan sabit ücreti çıkarmadan birim ücrete bölmek", uretir: "Olduğundan büyük, çoğu zaman tam çıkmayan x" },
        { hata: "a ile b'nin yerini karıştırmak", uretir: "Eğimi sabit ücret olan ters model" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["birinci-derece-problemler-9"],
      ornek: {
        soru: "Bir taksi 40 TL açılış ücreti ve kilometre başına 25 TL alıyor. 290 TL ödeyen bir yolcu kaç kilometre yol gitmiştir?",
        cevap: "f(x) = 25x + 40; 25x + 40 = 290 ⇒ 25x = 250 ⇒ x = 10 km",
      },
    },
    {
      id: "dogrusal-9-07-artan-azalan-parametre",
      ad: "Parametreli eğim: artan–azalan koşulu",
      aciklama:
        "Eğimde bir parametre bulunur (f(x) = (m − 3)x + 5 gibi) ve fonksiyonun artan ya da azalan olması için m'nin alabileceği değerler sorulur. Koşul yalnız x'in katsayısına bakar; sabit terimin hiçbir etkisi yoktur.",
      yontem: [
        "x'in katsayısını (eğimi) ayır.",
        "Artan için eğim > 0, azalan için eğim < 0 eşitsizliğini yaz.",
        "Eşitsizliği çöz; negatifle bölersen yönü çevir.",
        "'En büyük / en küçük tam sayı' isteniyorsa sınırın dâhil OLMADIĞINA dikkat et.",
      ],
      celdiriciler: [
        { hata: "Sınır değeri dâhil etmek (eğim = 0 almak)", uretir: "Sabit fonksiyon veren, bir fazla ya da bir eksik tam sayı" },
        { hata: "Koşulu sabit terime uygulamak", uretir: "Eğimle ilgisi olmayan aralık" },
        { hata: "Artan–azalan koşulunu ters yazmak", uretir: "Doğru aralığın tümleyeni" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      ornek: {
        soru: "f(x) = (m − 3)x + 5 fonksiyonu azalan olduğuna göre m'nin alabileceği en büyük tam sayı değeri kaçtır?",
        cevap: "Azalan ⇒ m − 3 < 0 ⇒ m < 3; en büyük tam sayı 2 (m = 3 olursa fonksiyon sabit olur)",
      },
    },
  ],
};

export default kb;
