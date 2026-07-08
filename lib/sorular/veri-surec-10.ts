import type { TopicQuiz } from "./types";

// veri-surec-10 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "veri-surec-10",
  questions: [
    {
      id: "veri-surec-10-01",
      difficulty: "Kolay",
      prompt: "Bir istatistiksel araştırmanın adımları karışık olarak veriliyor:\n\nI. Bulgulara ulaşma (veriyi özetleme)\nII. Değerlendirme\nIII. Soru belirleme\nIV. Veri toplama\n\nBu adımların doğru sıralaması aşağıdakilerden hangisidir?",
      options: ["III - IV - I - II", "III - I - IV - II", "IV - III - I - II", "I - III - IV - II", "III - IV - II - I"],
      correct: 0,
      solution: ["Derste süreç şöyle verilir: önce net bir $\\textbf{soru belirlenir}$ (III).", "Sonra uygun bir örneklemden $\\textbf{veri toplanır}$ (IV).", "Ardından veri özetlenerek $\\textbf{bulgulara ulaşılır}$ (I).", "Son olarak sonuç yorumlanıp sınırları belirtilerek $\\textbf{değerlendirilir}$ (II).", "Doğru sıra: III - IV - I - II."],
      answer: "Doğru sıralama III - IV - I - II'dir (A).",
    },
    {
      id: "veri-surec-10-02",
      difficulty: "Kolay",
      prompt: "Aşağıdaki değişkenlerden hangisi $\\textbf{nicel (sayısal)}$ bir değişkendir?",
      options: ["Bir öğrencinin sevdiği takım", "Bir telefonun rengi", "Kişinin kan grubu", "Bir sınıftaki öğrencilerin boy uzunluğu", "Bir kişinin medeni durumu"],
      correct: 3,
      solution: ["Nicel değişken $\\textbf{ölçülen ya da sayılan}$ bir sayıdır; kategorik değişken ise bir $\\textbf{grup/etiket}$ belirtir.", "Sevilen takım, renk, kan grubu ve medeni durum birer $\\textbf{grup/etikettir}$ → kategorik.", "Boy uzunluğu ise ölçülen bir sayıdır (örneğin $165$ cm) → nicel.", "Bu nedenle nicel olan tek seçenek boy uzunluğudur."],
      answer: "Boy uzunluğu ölçülen bir sayı olduğundan nicel değişkendir (D).",
    },
    {
      id: "veri-surec-10-03",
      difficulty: "Orta",
      prompt: "Bir belediye, şehirdeki tüm ailelerin geri dönüşüm alışkanlığını öğrenmek istiyor. Aşağıdaki veri toplama planlarından hangisi $\\textbf{en güvenilir}$ sonucu verir?",
      options: ["Sadece çevre gönüllüsü derneğinin üyeleriyle görüşmek", "Yalnız belediye web sitesine giren ve ankete katılmak isteyenlerin yanıtlarını toplamak", "Şehrin tüm mahallelerinden rastgele seçilen ailelerle görüşmek", "Yalnız en zengin mahalledeki ailelerle görüşmek", "'Doğayı seven biri olarak geri dönüşüm yapar mısınız?' sorusunu sormak"],
      correct: 2,
      solution: ["Güvenilir bir örneklem $\\textbf{temsil edici}$, yeterince büyük ve $\\textbf{rastgele}$ seçilmiş olmalıdır.", "Çevre gönüllüleri zaten konuyla ilgili özel bir gruptur → seçim yanlılığı.", "Web sitesine girip gönüllü katılanlar öz-seçim (gönüllü yanıt) yanlılığı taşır.", "Tek bir zengin mahalle şehri temsil etmez → coğrafi/sosyal yanlılık.", "'Doğayı seven biri olarak' ifadesi yönlendirici sorudur → yanlı veri.", "Tüm mahallelerden rastgele seçim ise evreni temsil eder → en güvenilir plandır."],
      answer: "Tüm mahallelerden rastgele seçim temsil edici ve tarafsız olduğundan en güvenilirdir (C).",
    },
    {
      id: "veri-surec-10-04",
      difficulty: "Orta",
      prompt: "Bir anketör hazırladığı sorulardan birini şöyle yazmıştır: \"Bilinçli ve sorumlu bir vatandaş olarak seçimlerde oy kullanır mısınız?\" Bu sorunun temel kusuru aşağıdakilerden hangisidir?",
      options: ["Soru nicel yerine kategorik veri topluyor", "Soru içindeki 'bilinçli ve sorumlu' ifadesi kişiyi yönlendiriyor, yanlı veri üretiyor", "Örneklem çok küçük seçilmiş", "Örneklem rastgele seçilmemiş", "Sonuç tüm evrene genellenemez"],
      correct: 1,
      solution: ["Bu bir örneklem ya da genelleme sorunu değil, $\\textbf{soru kalitesi}$ sorunudur.", "Sorular açık ve $\\textbf{yönlendirmesiz}$ olmalıdır.", "'Bilinçli ve sorumlu bir vatandaş olarak' ifadesi kişiyi olumlu yanıt vermeye iter → $\\textbf{yönlendirici (taraflı) soru}$.", "Bu da yanıtı yukarı çekerek yanlı veri üretir.", "Örneklem büyüklüğü, rastgelelik ve genelleme burada asıl kusur değildir."],
      answer: "Sorudaki 'bilinçli ve sorumlu' ifadesi yönlendirici olduğundan yanlı veri üretir (B).",
    },
    {
      id: "veri-surec-10-05",
      difficulty: "Orta",
      prompt: "Bir öğrenci, okulundaki $600$ öğrencinin yabancı dil kursu ihtiyacını araştırıyor. Yalnız İngilizce hazırlık sınıfındaki $60$ öğrenciyle anket yapıyor ve \"okulumuzdaki öğrencilerin $\\%75$'i ek dil kursu istiyor\" sonucuna varıyor. Bu değerlendirmeyle ilgili aşağıdakilerden hangisi $\\textbf{doğrudur}$?",
      options: ["Örneklem yeterince büyük olduğu için sonuç tüm okula genellenebilir", "Örneklem rastgele seçildiği için sonuç güvenilirdir", "Hazırlık sınıfı öğrencileri dile zaten ilgili özel bir gruptur; örneklem temsil edici değildir, sonuç tüm okula genellenemez", "Sonuç yalnız soru yönlendirici olduğu için hatalıdır", "$60$ kişi $600$ kişinin tam yarısı olduğundan örneklem yeterlidir"],
      correct: 2,
      solution: ["Örneklem yalnız $\\textbf{İngilizce hazırlık sınıfından}$ seçilmiştir; bu öğrenciler dile zaten ilgilidir.", "Bu özel grup tüm okulu $\\textbf{temsil etmez}$ → seçim yanlılığı vardır.", "Örneklem rastgele seçilmediği için sonuç güvenilir sayılamaz.", "$60$ kişi $600$ kişinin $\\frac{60}{600}=\\%10$'udur, yarısı değildir; ayrıca büyüklük tek başına yanlılığı düzeltmez.", "Bu nedenle $\\%75$ sonucu tüm okula $\\textbf{genellenemez}$."],
      answer: "Örneklem dile ilgili özel bir gruptan seçildiği için temsil edici değildir; sonuç genellenemez (C).",
    },
    {
      id: "veri-surec-10-06",
      difficulty: "Zor",
      prompt: "Bir konuda iki farklı örneklem karşılaştırılıyor:\n\nI. Ülke genelinden rastgele seçilmiş $800$ kişi\nII. Tek bir üniversitenin kampüsünden seçilmiş $3000$ kişi\n\nHer iki örneklemle de \"ülkedeki yetişkinlerin ortalama günlük internet süresi\" araştırılmak isteniyor. Bu durumla ilgili aşağıdaki yargılardan hangisi $\\textbf{doğrudur}$?",
      options: ["II daha büyük olduğundan her zaman daha güvenilirdir", "I daha küçük olsa da rastgele ve temsil edici olduğundan sonucu ülkeye daha güvenilir biçimde genellenebilir", "İki örneklem de aynı ölçüde güvenilirdir çünkü ikisi de yeterince büyüktür", "II kampüsten seçildiği için ülke ortalamasını olduğundan düşük gösterir; başka bir kusuru yoktur", "I rastgele olduğu için büyüklüğü ne olursa olsun tek başına yetersizdir"],
      correct: 1,
      solution: ["Güvenilirliği belirleyen tek etken büyüklük değildir; $\\textbf{temsil edicilik}$ ve $\\textbf{rastgelelik}$ de gereklidir.", "II örneklemi $3000$ kişiyle büyük olsa da tek bir üniversite kampüsünden alınmıştır; öğrenci-ağırlıklı bu grup ülkedeki tüm yetişkinleri temsil etmez.", "Büyük örneklem, yanlılığı $\\textbf{otomatik olarak düzeltmez}$ (tek gruptan çok kişi de evreni temsil etmez).", "I örneklemi $800$ kişiyle daha küçüktür ama ülke genelinden rastgele seçilmiştir → temsil edicidir.", "Bu nedenle I, sonucu ülkeye daha güvenilir biçimde genelleme imkânı verir."],
      answer: "Rastgele ve temsil edici olan I örneklemi, daha küçük olmasına rağmen ülkeye daha güvenilir biçimde genellenebilir (B).",
    },
  ],
};

export default quiz;
