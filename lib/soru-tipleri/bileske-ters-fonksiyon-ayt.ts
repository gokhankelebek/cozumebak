import type { TopicSoruTipleri } from "./types";

// Bileşke ve Ters Fonksiyon (AYT · Fonksiyonlar). Teacher's catalogue of how
// ÖSYM asks this topic. Ordered easy→hard. Every örnek is hand-verified;
// celdiriciler map each classic wrong answer to the exact mistake behind it.
const kb: TopicSoruTipleri = {
  slug: "bileske-ters-fonksiyon-ayt",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "bileske-ters-01-bileske-deger",
      ad: "Bileşke değer hesabı: (f∘g)(a)",
      aciklama:
        "İki fonksiyon açık verilir, bir noktadaki bileşke değeri istenir. İşlem sağdan sola: önce iç fonksiyon. Konunun açılış sorusu.",
      yontem: [
        "(f∘g)(a) = f(g(a)): önce g(a)'yı hesapla.",
        "Çıkan sonucu f'ye girdi olarak ver.",
        "Sıra kritik — f∘g ile g∘f genelde farklıdır.",
      ],
      celdiriciler: [
        { hata: "Sırayı ters uygulayıp (g∘f)(a) hesaplamak", uretir: "f(2)=4, g(4)=17 (doğrusu 13)" },
        { hata: "Bileşkeyi çarpım sanmak: f(a)·g(a)", uretir: "4·5=20" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "f(x)=3x−2 ve g(x)=x²+1 ise (f∘g)(2) kaçtır?",
        cevap: "g(2)=4+1=5; f(5)=15−2=13",
      },
    },
    {
      id: "bileske-ters-02-ters-hizli-okuma",
      ad: "f⁻¹(a)=b ⇔ f(b)=a hızlı değer okuma",
      aciklama:
        "Ters fonksiyonun bir noktadaki değeri istenir. Formül çıkarmaya gerek yok: f⁻¹(a)=b demek f(b)=a demektir; tek denklem çözülür.",
      yontem: [
        "f⁻¹(a)=b yaz ve f(b)=a denklemine çevir.",
        "b'yi çöz — ters fonksiyonun formülünü bulmak zaman kaybıdır.",
        "Kontrol: bulduğun b'yi f'ye koy, a çıkmalı.",
      ],
      celdiriciler: [
        { hata: "f⁻¹(7) yerine f(7) hesaplamak", uretir: "3·7+1=22" },
        { hata: "Tersi çarpmaya göre ters sanmak: 1/f(7)", uretir: "1/22" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: {
        soru: "f(x)=3x+1 ise f⁻¹(7) kaçtır?",
        cevap: "f(b)=7 ⇒ 3b+1=7 ⇒ b=2",
      },
    },
    {
      id: "bileske-ters-03-ters-formul",
      ad: "Ters fonksiyon formülü — (ax+b)/(cx+d) kalıbı",
      aciklama:
        "Doğrusal ya da rasyonel fonksiyonun tersinin formülü (veya tersinin bir değeri) istenir. y'yi x cinsinden çözme alışkanlığı ölçülür.",
      yontem: [
        "y=f(x) yaz, içler dışlar çarpımıyla paydadan kurtul.",
        "x'li terimleri bir tarafa topla, x parantezine al, x'i çöz.",
        "Pratik kalıp: f(x)=(ax+b)/(cx+d) ⇒ f⁻¹(x)=(−dx+b)/(cx−a).",
      ],
      celdiriciler: [
        { hata: "Pratik kalıpta işaretleri karıştırmak: (x−3)/(x+2) yazmak", uretir: "f⁻¹(3)=0/5=0 (doğrusu 6)" },
        { hata: "Ters yerine fonksiyonun kendisinde değer hesaplamak: f(3)", uretir: "9/2" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "f(x)=(2x+3)/(x−1) ise f⁻¹(3) kaçtır?",
        cevap: "f⁻¹(x)=(x+3)/(x−2) ⇒ f⁻¹(3)=6/1=6 (kontrol: f(6)=15/5=3)",
      },
    },
    {
      id: "bileske-ters-04-bilinmeyen-fonksiyon",
      ad: "Bileşkeden bilinmeyen fonksiyonu bulma (değişken değiştirme)",
      aciklama:
        "f ile (f∘g) verilir g istenir — ya da f(2x+1)=… biçiminde bileşik ifade verilip f istenir. Değişken değiştirme (t deyip x'i çözme) sorunun omurgası.",
      yontem: [
        "Dış fonksiyon biliniyorsa: f(g(x)) ifadesini aç, g(x)'i tek başına çöz.",
        "İç ifade karmaşıksa t de: t=2x+1 ⇒ x=(t−1)/2, yerine koy.",
        "Bulduğun fonksiyonu bir noktada asıl eşitlikle sağlayarak doğrula.",
      ],
      celdiriciler: [
        { hata: "Verilen bileşkeyi (g∘f) sanıp denklemi ters kurmak", uretir: "g(x)=2x+7 ⇒ g(3)=13 (doğrusu 8)" },
        { hata: "g(x)'i çözerken sabiti unutmak: 3g(x)=6x+5'ten g(x)=2x+5/3'ü yanlış sadeleştirmek", uretir: "Tam sayı olmayan, şıklarla uyuşmayan değer" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "f(x)=3x−1 ve (f∘g)(x)=6x+5 ise g(3) kaçtır?",
        cevap: "3g(x)−1=6x+5 ⇒ g(x)=2x+2 ⇒ g(3)=8",
      },
    },
    {
      id: "bileske-ters-05-grafik-nokta-okuma",
      ad: "Grafikten/noktadan ters fonksiyon değeri okuma",
      aciklama:
        "f'nin grafiği ya da geçtiği noktalar verilir; f⁻¹'in bir değeri (çoğu kez f değeriyle karışık toplam) istenir. Kural: (a,b) f'nin üzerindeyse f⁻¹(b)=a — grafikler y=x doğrusuna göre simetriktir.",
      yontem: [
        "Grafikteki her noktayı (girdi, çıktı) çifti olarak listele.",
        "f⁻¹(b) soruluyorsa çıktısı b olan noktanın girdisini oku.",
        "y=x simetrisi: f⁻¹'in grafiği çizilmeden noktalar takas edilerek okunur.",
      ],
      celdiriciler: [
        { hata: "y=x simetrisini unutup f⁻¹(4) yerine grafikten f(4) aramak", uretir: "Eldeki 7'yi kullanan 7+7=14" },
        { hata: "Nokta koordinatlarını ters okumak: (1,4)'ten f⁻¹(1)=4 çıkarmak", uretir: "4+7=11" },
      ],
      zorluk: "Orta",
      sikCikar: false,
      kombinasyon: ["fonksiyon-grafik-tyt"],
      ornek: {
        soru: "f'nin grafiği (1,4) ve (3,7) noktalarından geçiyor. f⁻¹(4)+f(3) kaçtır?",
        cevap: "(1,4) üzerinde ⇒ f⁻¹(4)=1; f(3)=7; toplam 8",
      },
    },
    {
      id: "bileske-ters-06-karisik-deger",
      ad: "Bileşke + ters karışık değer: f⁻¹(g(a)) tarzı",
      aciklama:
        "İki fonksiyon verilir; f⁻¹(g(a)) ya da (f∘g)⁻¹(a) gibi ters ve bileşkenin iç içe geçtiği bir değer istenir. İçten dışa sabırla ilerleme ölçülür.",
      yontem: [
        "En içteki hesaptan başla: önce g(a)'yı bul.",
        "f⁻¹(sonuç) için f(b)=sonuç denklemini çöz — formül çıkarma.",
        "(f∘g)⁻¹(a) istenirse bileşkeyi kur, sonucu a'ya eşitleyip x'i çöz.",
      ],
      celdiriciler: [
        { hata: "İçten dışa sırayı bozup g(f⁻¹(a)) hesaplamak", uretir: "f⁻¹(7)=4, g(4)=6 (doğrusu 5)" },
        { hata: "Ters almayı unutup f(g(7)) hesaplamak", uretir: "f(9)=17" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      kombinasyon: ["fonksiyon-cesitleri-ayt"],
      ornek: {
        soru: "f(x)=2x−1 ve g(x)=x+2 ise f⁻¹(g(7)) kaçtır?",
        cevap: "g(7)=9; f(b)=9 ⇒ 2b−1=9 ⇒ b=5",
      },
    },
    {
      id: "bileske-ters-07-sira-kurali",
      ad: "(f∘g)⁻¹ = g⁻¹∘f⁻¹ sıra tuzağı",
      aciklama:
        "Bileşkenin tersi istenir; şıklarda hem g⁻¹∘f⁻¹ hem f⁻¹∘g⁻¹ sonuçları bulunur. Kural: bileşkenin tersi, terslerin TERS SIRADA bileşkesidir (çorap-ayakkabı: giyerken çorap önce, çıkarırken ayakkabı önce).",
      yontem: [
        "(f∘g)⁻¹ = g⁻¹∘f⁻¹ — sıra değişir; ezber yerine çorap-ayakkabı benzetmesini kullan.",
        "Değer soruluyorsa kuralsız da gider: bileşkeyi açık kur, a'ya eşitle, x'i çöz.",
        "İki yoldan biriyle çözüp diğeriyle sağlaması yap — sınavda 20 saniyelik sigorta.",
      ],
      celdiriciler: [
        { hata: "Sırayı korumak: (g∘f)⁻¹ için g⁻¹(f⁻¹(x)) yazmak", uretir: "g⁻¹(9/2)=−1/2 (doğrusu 2)" },
        { hata: "Tersleri almadan yalnız sırayı değiştirmek: (f∘g)(a) hesaplamak", uretir: "f(g(9))=28" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      ornek: {
        soru: "f(x)=2x ve g(x)=x+5 ise (g∘f)⁻¹(9) kaçtır?",
        cevap: "(g∘f)(x)=2x+5=9 ⇒ x=2 (kural: f⁻¹(g⁻¹(9))=f⁻¹(4)=2)",
      },
    },
  ],
};

export default kb;
