import type { TopicQuiz } from "./types";

// iki-kategorik-degisken-10 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "iki-kategorik-degisken-10",
  questions: [
    {
      id: "iki-kategorik-degisken-10-01",
      difficulty: "Kolay",
      prompt: "Bir kafede $150$ kişinin mesleği (öğrenci/öğretmen) ile içecek tercihi (kahve/çay) çapraz tabloda gösterilmiştir.\n\n| | Kahve | Çay | Toplam |\n|---|:---:|:---:|:---:|\n| **Öğrenci** | $40$ | $60$ | $100$ |\n| **Öğretmen** | $30$ | $20$ | $50$ |\n| **Toplam** | $70$ | $80$ | $150$ |\n\nBu tabloya göre çayı seven toplam kaç kişi vardır?",
      options: ["$60$", "$70$", "$80$", "$90$", "$150$"],
      correct: 2,
      solution: ["Çayı seven kişi sayısı, çay sütununun marjinal (kenar) toplamıdır.", "Çay sütunu: $60+20=80$.", "Yani çayı seven $80$ kişi vardır."],
      answer: "$80$ kişi (çay sütununun toplamı $60+20=80$).",
    },
    {
      id: "iki-kategorik-degisken-10-02",
      difficulty: "Kolay",
      prompt: "Yukarıdaki tabloya göre öğretmenlerin yüzde kaçı kahve sever?",
      options: ["$\\%40$", "$\\%60$", "$\\%43$", "$\\%20$", "$\\%30$"],
      correct: 1,
      solution: ["\"Öğretmenlerin yüzdesi\" istendiği için bütün, öğretmen satırının toplamıdır: $50$.", "Kahve içen öğretmen sayısı $30$.", "Satır yüzdesi: $\\dfrac{30}{50}\\cdot 100=\\%60$."],
      answer: "$\\%60$ ($\\dfrac{30}{50}\\cdot 100$).",
    },
    {
      id: "iki-kategorik-degisken-10-03",
      difficulty: "Orta",
      prompt: "Aynı tabloya göre kahve sevenlerin yüzde kaçı öğrencidir? (En yakın tam sayıya yuvarlayınız.)",
      options: ["$\\%57$", "$\\%40$", "$\\%27$", "$\\%43$", "$\\%86$"],
      correct: 0,
      solution: ["\"Kahve sevenlerin yüzdesi\" istendiği için bütün, kahve sütununun toplamıdır: $70$.", "Öğrenci olan kahve içenler $40$.", "Sütun yüzdesi: $\\dfrac{40}{70}\\cdot 100\\approx \\%57$."],
      answer: "Yaklaşık $\\%57$ ($\\dfrac{40}{70}\\cdot 100$).",
    },
    {
      id: "iki-kategorik-degisken-10-04",
      difficulty: "Orta",
      prompt: "Bir çapraz tabloda satır toplamları $90$ ve $110$; sütun toplamları $120$ ve $80$ olarak veriliyor (genel toplam $200$). $1.$ satır $1.$ sütun hücresi $50$ ise $1.$ satır $2.$ sütun hücresi kaçtır?",
      options: ["$30$", "$70$", "$60$", "$40$", "$50$"],
      correct: 3,
      solution: ["Bir satırdaki hücrelerin toplamı o satırın marjinal toplamına eşittir.", "$1.$ satırın toplamı $90$, ilk hücre $50$.", "Eksik hücre $=90-50=40$."],
      answer: "$40$ ($90-50$).",
    },
    {
      id: "iki-kategorik-degisken-10-05",
      difficulty: "Orta",
      prompt: "$300$ kişilik bir araştırmada yaş grubu ile sabah sporu yapma durumu inceleniyor. Gençlerin $90$'ından $54$'ü, yetişkinlerin $120$'sinden $42$'si sabah sporu yapmaktadır. Yaş grubu ile sabah sporu yapma arasındaki ilişki için aşağıdakilerden hangisi doğrudur?",
      options: ["Ham sayılar ($54>42$) farklı olduğundan ilişki yoktur.", "Her iki grupta yapan sayısı toplam $96$ kişi olduğundan ilişki vardır.", "Her iki grubun oranı da $\\%50$ olduğundan ilişki yoktur.", "Oranlar $\\%54$ ve $\\%42$ olup yakın olduğundan ilişki yoktur.", "Gençlerde oran $\\%60$, yetişkinlerde $\\%35$ olup belirgin farklı olduğundan ilişki vardır."],
      correct: 4,
      solution: ["İlişki, ham sayılarla değil grupların kendi oranlarıyla karşılaştırılır.", "Gençlerde spor oranı: $\\dfrac{54}{90}\\cdot 100=\\%60$.", "Yetişkinlerde spor oranı: $\\dfrac{42}{120}\\cdot 100=\\%35$.", "Oranlar belirgin farklı ($\\%60$ ile $\\%35$) olduğundan yaş grubu ile sabah sporu yapma arasında ilişki vardır."],
      answer: "İlişki vardır; gençlerde oran $\\%60$, yetişkinlerde $\\%35$ olup belirgin farklıdır.",
    },
    {
      id: "iki-kategorik-degisken-10-06",
      difficulty: "Orta",
      prompt: "$250$ kişilik bir çapraz tabloda bir hücrenin genel yüzdesi $\\%16$ olarak hesaplanmıştır. Bu hücredeki birey sayısı kaçtır?",
      options: ["$16$", "$40$", "$25$", "$34$", "$160$"],
      correct: 1,
      solution: ["Genel yüzde $=\\dfrac{\\text{hücre}}{\\text{genel toplam}}\\cdot 100$.", "Buradan hücre $=\\dfrac{16}{100}\\cdot 250$.", "$\\dfrac{16}{100}\\cdot 250=40$."],
      answer: "$40$ kişi ($\\dfrac{16}{100}\\cdot 250$).",
    },
  ],
};

export default quiz;
