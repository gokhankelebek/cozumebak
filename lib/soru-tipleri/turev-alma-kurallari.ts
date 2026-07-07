import type { TopicSoruTipleri } from "./types";

// Türev Alma Kuralları (AYT · Türev). Teacher's catalogue of how ÖSYM asks this
// topic. Ordered easy→hard. Every örnek is hand-verified; celdiriciler map each
// classic wrong answer to the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "turev-alma-kurallari",
  durum: "taslak", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "turev-alma-01-kuvvet",
      ad: "Kuvvet kuralı (polinom türevi)",
      aciklama:
        "Polinom veya kuvvet toplamının türevi ve bir noktada değeri. Konunun ısınma sorusu.",
      yontem: [
        "Her terim için üssü katsayıyla çarp, üssü bir azalt: (x^n)' = n·x^(n-1).",
        "Sabit terimin türevi 0; x'in katsayısı sabit terime iner.",
        "İstenen noktayı türevde yerine koy.",
      ],
      celdiriciler: [
        { hata: "Sabit terimi türevde koruyup eklemek", uretir: "Doğru cevaptan sabit kadar sapma" },
        { hata: "Üssü azaltmadan yalnızca katsayıyla çarpmak", uretir: "Bir derece yüksek yanlış ifade" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "f(x)=2x³−4x+1 ise f′(2) kaçtır?", cevap: "f′(x)=6x²−4, f′(2)=20" },
    },
    {
      id: "turev-alma-02-negatif-kesirli-us",
      ad: "Negatif ve kesirli üslü (köklü / 1÷x) türev",
      aciklama:
        "İfadeyi önce üslü biçime çevirmeyi gerektiren köklü ve paydada değişkenli türevler.",
      yontem: [
        "√x = x^(1/2), 1/x = x^(−1), 1/x² = x^(−2) biçiminde yaz.",
        "Kuvvet kuralını uygula; kesirli/negatif üste dikkat.",
        "Sonucu tekrar kök/kesir biçimine döndür.",
      ],
      celdiriciler: [
        { hata: "Negatif üsün türevinde işareti yanlış almak", uretir: "Doğru terimin işaretçe tersi" },
        { hata: "Kesirli üsü 1 azaltmak yerine sabit bırakmak", uretir: "Yanlış üslü ifade" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "f(x)=√x + 1/x ise f′(1) kaçtır?", cevap: "f′(x)=1/(2√x) − 1/x², f′(1)=−1/2" },
    },
    {
      id: "turev-alma-03-carpim",
      ad: "Çarpım kuralı",
      aciklama: "İki çarpanın çarpımının türevi. En sık çeldirici: türevleri ayrı ayrı çarpmak.",
      yontem: [
        "(f·g)′ = f′·g + f·g′.",
        "Çarpanları ve türevlerini ayrı yaz, formüle yerleştir.",
        "Sadeleştir, sonra noktayı koy.",
      ],
      celdiriciler: [
        { hata: "(f·g)′ = f′·g′ sanmak", uretir: "Çarpanların türevlerinin çarpımı — çoğunlukla düşük dereceli, hatalı ifade" },
        { hata: "İkinci terimde f·g′ yerine f′·g′ yazmak", uretir: "Tek terimi yanlış toplam" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "f(x)=(x²+1)(x−3) ise f′(1) kaçtır?", cevap: "f′(x)=2x(x−3)+(x²+1)=3x²−6x+1, f′(1)=−2" },
    },
    {
      id: "turev-alma-04-bolum",
      ad: "Bölüm kuralı",
      aciklama: "Rasyonel ifadenin türevi. Pay sırası ve payda karesi kritik.",
      yontem: [
        "(f/g)′ = (f′·g − f·g′) / g².",
        "Payda kesinlikle KARE alınır.",
        "Payı düzenle; işaret hatasına karşı iki kez kontrol et.",
      ],
      celdiriciler: [
        { hata: "Payı f·g′ − f′·g (ters sıra) yazmak", uretir: "Doğru cevabın işaretçe tersi" },
        { hata: "Paydanın karesini almayı unutmak", uretir: "Yanlış ölçekli değer" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "f(x)=(x+1)/(x−1) ise f′(3) kaçtır?", cevap: "f′(x)=−2/(x−1)², f′(3)=−1/2" },
    },
    {
      id: "turev-alma-05-zincir",
      ad: "Zincir kuralı (bileşke fonksiyon)",
      aciklama:
        "Dıştaki fonksiyonun türevi çarpı içteki fonksiyonun türevi. İç türevi unutmak konunun bir numaralı hatası.",
      yontem: [
        "Dış fonksiyonun türevini al, içi olduğu gibi bırak.",
        "İçteki fonksiyonun türeviyle çarp: [g(h(x))]′ = g′(h(x))·h′(x).",
        "İç türevi ASLA unutma.",
      ],
      celdiriciler: [
        { hata: "İç türevi (h′(x)) unutmak", uretir: "Doğru cevabın iç türev katı kadar küçüğü" },
        { hata: "Üsü bir azaltmayı unutmak", uretir: "Bir derece yüksek yanlış ifade" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: { soru: "f(x)=(2x−1)⁴ ise f′(1) kaçtır?", cevap: "f′(x)=4(2x−1)³·2=8(2x−1)³, f′(1)=8" },
    },
    {
      id: "turev-alma-06-carpim-zincir",
      ad: "Çarpım + zincir birleşimi (sınav ayarı)",
      aciklama:
        "Bir çarpanı bileşke olan çarpım. Gerçek sınav zorluğu burada; iki kuralın sırası şaşırılır.",
      yontem: [
        "Önce çarpım kuralını kur: (u·v)′ = u′v + uv′.",
        "Bileşke olan çarpanın türevini zincir kuralıyla al.",
        "Ortak çarpan parantezine alıp sadeleştir.",
      ],
      celdiriciler: [
        { hata: "Bileşke çarpanda iç türevi unutmak", uretir: "İkinci terimi eksik hesaplanmış toplam" },
        { hata: "Yalnız çarpım ya da yalnız zincir uygulamak", uretir: "İki terimden biri eksik" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["ozel-fonksiyon-turevleri", "turevde-uygulamalar"],
      ornek: { soru: "f(x)=x·(2x−1)³ ise f′(1) kaçtır?", cevap: "f′(x)=(2x−1)³+6x(2x−1)², f′(1)=1+6=7" },
    },
    {
      id: "turev-alma-07-katsayi-bulma",
      ad: "Türevden katsayı bulma (ters problem)",
      aciklama:
        "f′ ile ilgili bir koşul verilip fonksiyondaki bilinmeyen katsayı istenir. Kuralı ters yönde kullandırır.",
      yontem: [
        "Fonksiyonun türevini bilinmeyen katsayı cinsinden al.",
        "Verilen koşulu (ör. f′(x₀)=k) türevde yerine koy.",
        "Oluşan denklemi katsayı için çöz.",
      ],
      celdiriciler: [
        { hata: "Koşulu türev yerine fonksiyonda kullanmak", uretir: "İlgisiz bir katsayı değeri" },
        { hata: "Türev alırken katsayının üssünü yanlış indirmek", uretir: "Ölçekçe kaymış katsayı" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      ornek: { soru: "f(x)=x³+ax ve f′(2)=15 ise a kaçtır?", cevap: "f′(x)=3x²+a, 12+a=15 ⇒ a=3" },
    },
  ],
};

export default kb;
