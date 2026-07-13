import type { TopicSoruTipleri } from "./types";

// Dizi Kavramı (AYT · Diziler). Teacher's catalogue of how ÖSYM asks this
// topic. Diziler cluster ~2.5 soru/yıl; kavram sorusu genelde kümenin ısınma
// ayağıdır. Ordered easy→hard. Every örnek is hand-verified; celdiriciler map
// each classic wrong answer to the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "dizi-kavrami-ayt",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "dizi-kavrami-ayt-01-genel-terimden-terim",
      ad: "Genel terimden terim hesabı",
      aciklama:
        "Genel terim aₙ verilir, belirli bir terimin değeri istenir. Konunun ısınma sorusu; n yerine sayı koyma disiplini ölçülür.",
      yontem: [
        "İstenen terimin sırasını belirle: aₖ için n=k.",
        "Genel terimde n gördüğün HER yere aynı sayıyı koy.",
        "İşlem önceliğine dikkat ederek hesapla (önce kuvvet, sonra çarpma).",
      ],
      celdiriciler: [
        { hata: "n'yi yalnızca ilk terime koyup ikinciyi sabit bırakmak (n²−3n yerine n²−3)", uretir: "a₅ için 25−3=22" },
        { hata: "Ortadaki işareti ters almak (n²+3n hesaplamak)", uretir: "a₅ için 25+15=40" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "Genel terimi aₙ=n²−3n olan dizide a₅ kaçtır?", cevap: "a₅=5²−3⋅5=25−15=10" },
    },
    {
      id: "dizi-kavrami-ayt-02-terimden-n-bulma",
      ad: "Terim değerinden sıra (n) bulma",
      aciklama:
        "Bir terimin değeri verilir, kaçıncı terim olduğu sorulur. Genel terim denkleme dönüşür; n pozitif tam sayı çıkmalıdır.",
      yontem: [
        "Genel terimi verilen değere eşitle: aₙ=47 ise denklemi kur.",
        "n'yi çöz.",
        "n'nin pozitif tam sayı olduğunu kontrol et; değilse o sayı dizinin terimi değildir.",
      ],
      celdiriciler: [
        { hata: "Kaçıncı terim sorusunu terim hesabı sanıp a₄₇'yi hesaplamak", uretir: "3⋅47+2=143" },
        { hata: "Sabiti yanlış tarafa atmak (3n=47+2 yazmak)", uretir: "n=49/3 gibi tam olmayan değer" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "Genel terimi aₙ=3n+2 olan dizinin kaçıncı terimi 47'dir?", cevap: "3n+2=47 ⇒ 3n=45 ⇒ n=15" },
    },
    {
      id: "dizi-kavrami-ayt-03-dizi-olma-kosulu",
      ad: "Dizi belirtme (tanımlılık) koşulu — parametre",
      aciklama:
        "Rasyonel genel terimde payda hiçbir pozitif tam sayı n için sıfır olmamalıdır. Parametrenin alamayacağı değer sorulur; AYT'nin klasik kavram tuzağı.",
      yontem: [
        "Paydayı sıfıra eşitle, n'yi parametre cinsinden çöz.",
        "Bulunan n pozitif tam sayı OLURSA ifade dizi belirtmez.",
        "Seçenekleri tek tek dene: hangi parametre değeri n'yi pozitif tam sayı yapıyorsa o değer 'olamaz'.",
      ],
      celdiriciler: [
        { hata: "n=k/2'nin her k için sorun çıkardığını sanmak (tam sayı şartını atlamak)", uretir: "k=5 gibi geçerli değerleri de elemek" },
        { hata: "Koşulu tersine kurmak: paydayı sıfır yapan n varsa dizi olur sanmak", uretir: "Tam ters seçenek (olamaz yerine olabilir)" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "aₙ=(3n−1)/(2n−k) ifadesi bir dizi belirttiğine göre k aşağıdakilerden hangisi olamaz? (5, 6, 7, 9, 11)",
        cevap: "2n−k=0 ⇒ n=k/2; k=6 için n=3 pozitif tam sayı olur, payda sıfırlanır ⇒ k=6 olamaz",
      },
    },
    {
      id: "dizi-kavrami-ayt-04-indirgemeli-dizi",
      ad: "İndirgemeli (rekürans) dizi — zincirleme hesap",
      aciklama:
        "İlk terim ve aₙ₊₁ = f(aₙ) kuralı verilir; birkaç adım ilerideki terim istenir. Sabırlı, hatasız zincir hesabı ölçülür.",
      yontem: [
        "Kuralı n=1'den başlayarak sırayla uygula; her terimi yazarak ilerle.",
        "Her adımda bir önceki SONUCU kurala koy, baştaki a₁'i değil.",
        "İstenen indekse gelince dur; fazladan adım atma.",
      ],
      celdiriciler: [
        { hata: "Bir adım fazla ilerleyip a₅'i hesaplamak", uretir: "2⋅17−1=33" },
        { hata: "2aₙ−1 yerine 2(aₙ−1) uygulamak", uretir: "a₂=4, a₃=6, a₄=10 zinciri" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "a₁=3 ve aₙ₊₁=2aₙ−1 olduğuna göre a₄ kaçtır?",
        cevap: "a₂=2⋅3−1=5, a₃=2⋅5−1=9, a₄=2⋅9−1=17",
      },
    },
    {
      id: "dizi-kavrami-ayt-05-esit-terimler",
      ad: "İki dizinin eşit (ortak sıralı) terimleri",
      aciklama:
        "İki genel terim verilir; aynı sıradaki terimlerin eşit olduğu n veya o terimin değeri istenir. Basit denklem, ama sorunun NEYİ istediği okunmalıdır.",
      yontem: [
        "Genel terimleri eşitle: aₙ=bₙ.",
        "n'yi çöz; pozitif tam sayı olduğunu doğrula.",
        "Soru terim değerini istiyorsa n'yi dizilerden birinde yerine koy (ikisinde de aynı çıkmalı — kontrol fırsatı).",
      ],
      celdiriciler: [
        { hata: "Terim değeri sorulduğunda n'yi işaretlemek", uretir: "22 yerine 6" },
        { hata: "Sabitleri taşırken işaret hatası (4−8=2n kurmak)", uretir: "n=−2 (geçersiz)" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      ornek: {
        soru: "aₙ=3n+4 ve bₙ=5n−8 dizilerinin aynı sıradaki eşit terimlerinin değeri kaçtır?",
        cevap: "3n+4=5n−8 ⇒ 2n=12 ⇒ n=6; a₆=3⋅6+4=22 (kontrol: b₆=5⋅6−8=22)",
      },
    },
    {
      id: "dizi-kavrami-ayt-06-sn-den-terim",
      ad: "Kısmi toplamdan terim çekme (aₙ = Sₙ − Sₙ₋₁)",
      aciklama:
        "İlk n terimin toplamı Sₙ formülüyle verilir, tek bir terim istenir. Anahtar bağıntıyı bilmeyen soruyu hiç çözemez; bilen 30 saniyede bitirir.",
      yontem: [
        "Bağıntıyı yaz: aₙ = Sₙ − Sₙ₋₁ (n ≥ 2).",
        "İstenen indeks için iki toplamı ayrı ayrı hesapla.",
        "Farkı al. (a₁ istenirse a₁ = S₁ doğrudan.)",
      ],
      celdiriciler: [
        { hata: "aₙ'yi doğrudan Sₙ sanmak", uretir: "a₅ için 35" },
        { hata: "Sₙ₋₁ yerine Sₙ₊₁ çıkarmak", uretir: "35−48=−13" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["aritmetik-dizi-ayt"],
      ornek: {
        soru: "Bir dizinin ilk n teriminin toplamı Sₙ=n²+2n ise a₅ kaçtır?",
        cevap: "a₅=S₅−S₄=(25+10)−(16+8)=35−24=11",
      },
    },
    {
      id: "dizi-kavrami-ayt-07-monotonluk-sinirlilik",
      ad: "Monotonluk ve sınırlılık analizi",
      aciklama:
        "Rasyonel genel terimli dizinin artan/azalan ve sınırlı olup olmadığı sorulur. Polinom bölmesiyle 'sabit + kesir' biçimine ayırmak işi bitirir.",
      yontem: [
        "Genel terimi böl: (2n+3)/(n+1) = 2 + 1/(n+1) gibi sabit + kesir yaz.",
        "Kesir kısmı n büyüdükçe küçülüyorsa dizi azalan, büyüyorsa artandır.",
        "Sınırlar: ilk terim bir uç, kesirin limit değeri (buradaki 2) diğer uçtur — 2 < aₙ ≤ a₁.",
      ],
      celdiriciler: [
        { hata: "Pay ve payda ayrı ayrı büyüdüğü için diziyi artan sanmak", uretir: "'Monoton artan' seçeneği" },
        { hata: "Alt sınırı (limit değeri 2) görmeyip diziyi sınırsız sanmak", uretir: "'Sınırlı değildir' seçeneği" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      kombinasyon: ["limit-kavrami"],
      ornek: {
        soru: "aₙ=(2n+3)/(n+1) dizisinin monotonluk ve sınırlılık durumu nedir?",
        cevap: "aₙ=2+1/(n+1); 1/(n+1) azaldığından dizi monoton azalan, 2 < aₙ ≤ a₁=5/2 olduğundan sınırlıdır",
      },
    },
  ],
};

export default kb;
