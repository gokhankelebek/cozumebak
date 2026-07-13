import type { TopicSoruTipleri } from "./types";

// Polinomlarda Bölme (AYT · Polinomlar). Teacher's catalogue of how ÖSYM asks
// this topic. Ordered easy→hard. Every örnek is hand-verified; celdiriciler map
// each classic wrong answer to the exact mistake that produces it.
const kb: TopicSoruTipleri = {
  slug: "polinomlarda-bolme-ayt",
  durum: "verified", // → "verified" after teacher sign-off
  tipler: [
    {
      id: "polinomlarda-bolme-01-kalan-teoremi",
      ad: "Kalan teoremi: (x−a) ile bölümden kalan",
      aciklama:
        "P(x)'in (x−a) ile bölümünden kalan P(a)'dır. Bölme yapmadan tek yerine koymayla biten ısınma sorusu.",
      yontem: [
        "Böleni sıfır yapan değeri bul: x−a=0 ⇒ x=a.",
        "Bu değeri polinomda yerine koy: kalan = P(a).",
        "ASLA gerçekten bölme yapma; kalan teoremi tek adımda bitirir.",
      ],
      celdiriciler: [
        { hata: "Bölenin kökünü ters işaretle almak (x−2 için x=−2 koymak)", uretir: "P(−a) değeri — işaretleri kaymış bambaşka bir sayı" },
        { hata: "Polinomun sabit terimini kalan sanmak", uretir: "Sabit terim (yalnızca x ile bölümde doğru olurdu)" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "P(x)=x³−2x²+3x−5 polinomunun (x−2) ile bölümünden kalan kaçtır?", cevap: "Kalan = P(2)=8−8+6−5=1" },
    },
    {
      id: "polinomlarda-bolme-02-ax-arti-b",
      ad: "(ax+b) ile bölümden kalan: P(−b/a)",
      aciklama:
        "Bölen (2x−1), (3x+2) gibi baş katsayısı 1 olmayan birinci derece. Kalan yine kökte değer: P(−b/a). Kesirli yerine koyma işlem disiplini ister.",
      yontem: [
        "Böleni sıfırla: ax+b=0 ⇒ x=−b/a (kesir çıkmasından korkma).",
        "Bu kesri polinomda yerine koy: kalan = P(−b/a).",
        "Kesirli üs alma işlemlerini payda payda yürüt, en sonda topla.",
      ],
      celdiriciler: [
        { hata: "Kökün işaretini ters almak (2x−1 için x=−1/2 koymak)", uretir: "P(−b/a) yerine P(b/a) simetriği — tek terimli işaret farkı" },
        { hata: "Kökü katsayıya bölmeden x=b almak (2x−1 için x=2 ya da x=1)", uretir: "Çok büyük, alakasız bir kalan değeri" },
      ],
      zorluk: "Kolay",
      sikCikar: true,
      ornek: { soru: "P(x)=4x²+2x+1 polinomunun (2x−1) ile bölümünden kalan kaçtır?", cevap: "2x−1=0 ⇒ x=1/2, kalan = P(1/2)=4·(1/4)+1+1=3" },
    },
    {
      id: "polinomlarda-bolme-03-tam-bolunme",
      ad: "Tam bölünme koşulundan parametre (çarpan teoremi)",
      aciklama:
        "P(x) içinde bilinmeyen katsayı var; (x−a) ile TAM bölündüğü söyleniyor. Çarpan teoremi: P(a)=0 kur, parametreyi çöz.",
      yontem: [
        "Tam bölünme = kalan sıfır = (x−a) çarpandır: P(a)=0 yaz.",
        "Bölenin kökünü polinomda yerine koy, parametreli denklem kur.",
        "Denklemi bilinmeyen için çöz; soru devam ediyorsa polinomu güncelleyip isteneni hesapla.",
      ],
      celdiriciler: [
        { hata: "Kökü ters işaretle koymak (x−3 için P(−3)=0 yazmak)", uretir: "Parametrenin işaret/değerce yanlış hâli" },
        { hata: "Kalanı 0 yerine bölenin kendisine eşitlemek", uretir: "Kurulamayan ya da saçma bir denklem" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["polinom-kavrami-ayt", "carpanlara-ayirma-tyt"],
      ornek: { soru: "P(x)=x³+mx−6 polinomu (x−3) ile tam bölünüyorsa m kaçtır?", cevap: "P(3)=27+3m−6=0 ⇒ 3m=−21 ⇒ m=−7" },
    },
    {
      id: "polinomlarda-bolme-04-bolme-ozdesligi",
      ad: "Bölme özdeşliği ile değer bulma (P = B·Q + K)",
      aciklama:
        "Bölüm ve kalan verilir, P(x)'in bir noktadaki değeri istenir. Özdeşliği yazıp noktayı koymak yeter; öğrenci çoğu kez kalanı unutur.",
      yontem: [
        "Özdeşliği kur: P(x) = Bölen(x)·Bölüm(x) + Kalan(x).",
        "İstenen x değerini özdeşliğin sağ tarafında yerine koy.",
        "Kalanı toplamayı UNUTMA — en sık kaybedilen puan burası.",
      ],
      celdiriciler: [
        { hata: "Kalanı eklemeyi unutmak (yalnız B·Q hesaplamak)", uretir: "Doğru cevaptan kalan kadar küçük değer" },
        { hata: "Kalanı toplamak yerine çıkarmak", uretir: "Doğru cevaptan kalanın iki katı kadar sapma" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      ornek: {
        soru: "P(x) polinomunun (x−1) ile bölümünde bölüm x²+2x, kalan 3'tür. P(2) kaçtır?",
        cevap: "P(x)=(x−1)(x²+2x)+3, P(2)=(2−1)(4+4)+3=8+3=11",
      },
    },
    {
      id: "polinomlarda-bolme-05-ikinci-dereceden-bolen",
      ad: "İkinci dereceden bölenin kalanından birinci derece kalana geçiş",
      aciklama:
        "P(x)'in (x²+px+q) ile bölümünden kalan ax+b verilir; bölen çarpanlarına ayrılıp köklerde değer okunur. Özdeşlikte bölünen terimi sıfırlama fikri sınanır.",
      yontem: [
        "Özdeşliği yaz: P(x) = (x²+px+q)·Q(x) + (ax+b).",
        "Böleni çarpanlarına ayır, köklerini bul.",
        "Kök yerine konunca çarpım terimi yok olur: P(kök) = a·kök + b. İstenen kalan buradan okunur.",
      ],
      celdiriciler: [
        { hata: "Bölenin yanlış çarpanının kökünü kullanmak", uretir: "Kalan polinomun öteki kökteki değeri — işaretçe/değerce farklı sayı" },
        { hata: "Kalanı sabit sanıp yalnız b'yi cevap vermek", uretir: "Kalan polinomun sabit terimi" },
      ],
      zorluk: "Orta",
      sikCikar: true,
      kombinasyon: ["carpanlara-ayirma-tyt"],
      ornek: {
        soru: "P(x) polinomunun (x²−x−6) ile bölümünden kalan 3x+2'dir. P(x)'in (x−3) ile bölümünden kalan kaçtır?",
        cevap: "x²−x−6=(x−3)(x+2), x=3 ⇒ P(3)=3·3+2=11",
      },
    },
    {
      id: "polinomlarda-bolme-06-iki-bolenden-kalan",
      ad: "(x−a)(x−b) ile bölümden kalan (iki noktadan doğru kurma)",
      aciklama:
        "İki ayrı birinci derece bölenin kalanları verilir; ikinci dereceden çarpımla bölümden kalan istenir. Kalan mx+n alınır, iki koşuldan sistem çözülür. AYT'nin klasiği.",
      yontem: [
        "Bölen 2. dereceden olduğu için kalan en çok 1. derecedendir: K(x)=mx+n yaz.",
        "Özdeşlikte x=a ve x=b koy: P(a)=ma+n, P(b)=mb+n. Verilen kalanlar bu değerlerdir.",
        "İki bilinmeyenli sistemi çöz, K(x)'i (ya da istenen K(c) değerini) yaz.",
      ],
      celdiriciler: [
        { hata: "Kalanı sabit sanmak (verilen kalanlardan birini aynen yazmak)", uretir: "P(a) ya da P(b) değerinin kendisi" },
        { hata: "Sistemi taraf tarafa çıkarırken işaret hatası yapmak", uretir: "m doğru, n yanlış (ya da tersi) bir K(x)" },
      ],
      zorluk: "Zor",
      sikCikar: true,
      ornek: {
        soru: "P(x)'in (x−1) ile bölümünden kalan 4, (x−2) ile bölümünden kalan 7'dir. P(x)'in (x−1)(x−2) ile bölümünden kalan nedir?",
        cevap: "K(x)=mx+n: m+n=4, 2m+n=7 ⇒ m=3, n=1 ⇒ K(x)=3x+1",
      },
    },
    {
      id: "polinomlarda-bolme-07-horner",
      ad: "Horner yöntemi: bölüm polinomunu bulma",
      aciklama:
        "Yalnız kalan değil BÖLÜM polinomu ya da onun bir değeri istenir. Horner tablosu (sentetik bölme) uzun bölmeyi saniyelere indirir.",
      yontem: [
        "Katsayıları derece sırasıyla yaz (eksik derece için 0 koymayı unutma).",
        "Bölenin kökünü sola al; ilk katsayıyı indir, 'çarp-topla' zinciriyle ilerle: aşağı inen her sayı kökle çarpılıp sonraki katsayıya eklenir.",
        "Son sayı kalandır; öndeki sayılar bölümün katsayılarıdır (derece bir düşer).",
      ],
      celdiriciler: [
        { hata: "Kalanı bölüm polinomunun sabit terimi olarak katmak", uretir: "Sabit terimi kalan kadar kaymış yanlış Q(x)" },
        { hata: "Eksik dereceli terim için tabloya 0 yazmamak", uretir: "Katsayıları kaymış, derecesi tutmayan bölüm" },
      ],
      zorluk: "Zor",
      sikCikar: false,
      ornek: {
        soru: "P(x)=2x³−5x²+x+3 polinomunun (x−2) ile bölümünden elde edilen bölüm Q(x) ise Q(1) kaçtır?",
        cevap: "Horner (kök 2): 2, −1, −1 | kalan 1 ⇒ Q(x)=2x²−x−1, Q(1)=2−1−1=0",
      },
    },
  ],
};

export default kb;
