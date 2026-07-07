import type { TopicQuiz } from "./types";

// permutasyon-kombinasyon-tyt — harvested from the lesson's static exam section, each
// question independently re-verified before shipping.
const quiz: TopicQuiz = {
  slug: "permutasyon-kombinasyon-tyt",
  questions: [
    {
      id: "permutasyon-kombinasyon-tyt-01",
      difficulty: "Orta",
      prompt: "Bir kafede $4$ farklı kahve, $3$ farklı süt türü ve $2$ farklı şurup bulunmaktadır. Bir müşteri **bir kahve seçip** isteğe bağlı olarak yanına bir süt türü (ya da sütsüz) ve isteğe bağlı bir şurup (ya da şurupsuz) ekleyebiliyor. Bu kafede kaç farklı içecek hazırlanabilir?",
      options: ["$9$", "$24$", "$36$", "$48$", "$60$"],
      correct: 3,
      solution: ["Kahve zorunlu: $4$ seçenek.", "Süt isteğe bağlı: $3$ tür $+$ \"sütsüz\" $=4$ seçenek.", "Şurup isteğe bağlı: $2$ tür $+$ \"şurupsuz\" $=3$ seçenek.", "Ardışık seçim, çarparız: $4\\cdot 4\\cdot 3=48$.", "Çeldirici: süt ve şurupta \"hiç\" seçeneğini saymazsan $4\\cdot 3\\cdot 2=24$ (B) bulup yanılırsın."],
      answer: "$48$",
    },
    {
      id: "permutasyon-kombinasyon-tyt-02",
      difficulty: "Kolay",
      prompt: "$5$ farklı kitap bir rafa diziliyor. **En kalın** kitabın her zaman **en sağ uçta** bulunduğu kaç farklı diziliş vardır?",
      options: ["$24$", "$48$", "$60$", "$96$", "$120$"],
      correct: 0,
      solution: ["En kalın kitabın yeri sabit (en sağ uç): $1$ yol.", "Kalan $4$ kitap diğer $4$ yere sıralanır: $4!=24$.", "Toplam: $1\\cdot 24=24$.", "Çeldirici: kitabı sabitlemeyi unutup $5!=120$ (E) yazmak tipik hatadır."],
      answer: "$24$",
    },
    {
      id: "permutasyon-kombinasyon-tyt-03",
      difficulty: "Orta",
      prompt: "Bir öğrenci, $6$ farklı seçmeli dersten **en az $4$ tanesini** seçmek zorundadır. Bu öğrenci ders seçimini kaç farklı şekilde yapabilir?",
      options: ["$15$", "$20$", "$22$", "$31$", "$42$"],
      correct: 2,
      solution: ["$4$ ders: $C(6,4)=C(6,2)=\\dfrac{6\\cdot 5}{2}=15$.", "$5$ ders: $C(6,5)=C(6,1)=6$.", "$6$ ders: $C(6,6)=1$.", "Durumlar ayrık, toplarız: $15+6+1=22$.", "Çeldirici: yalnız $C(6,4)=15$ (A) ya da $5$ ve $6$'yı unutmak sık yapılan hatadır."],
      answer: "$22$",
    },
    {
      id: "permutasyon-kombinasyon-tyt-04",
      difficulty: "Orta",
      prompt: "Bir sınıftan $4$ kız ve $5$ erkek öğrenci arasından, içinde **en az $1$ kız** bulunan $3$ kişilik bir ekip seçilecektir. Bu ekip kaç farklı şekilde seçilebilir?",
      options: ["$10$", "$64$", "$74$", "$84$", "$120$"],
      correct: 2,
      solution: ["$9$ kişiden $3$ kişilik tüm seçimler: $C(9,3)=\\dfrac{9\\cdot 8\\cdot 7}{3\\cdot 2\\cdot 1}=84$.", "Hiç kız olmayan (hepsi erkek) seçimler: $C(5,3)=\\dfrac{5\\cdot 4\\cdot 3}{3\\cdot 2\\cdot 1}=10$.", "En az $1$ kız: $84-10=74$.", "Çeldirici: tümleyeni çıkarmayı unutup $84$ (D) yazmak tipik hatadır."],
      answer: "$74$",
    },
    {
      id: "permutasyon-kombinasyon-tyt-05",
      difficulty: "Orta",
      prompt: "$2,\\ 3,\\ 5,\\ 7,\\ 8$ rakamları kullanılarak, rakamları **farklı** ve **çift** olan üç basamaklı kaç sayı yazılabilir?",
      options: ["$12$", "$24$", "$36$", "$48$", "$60$"],
      correct: 1,
      solution: ["Sayının çift olması için birler basamağı $\\{2,8\\}$ den biri olmalı: $2$ seçenek.", "Yüzler basamağına kalan $4$ rakamdan biri (sıfır yok, kısıt yok): $4$ seçenek.", "Onlar basamağına kalan $3$ rakamdan biri: $3$ seçenek.", "Çarparız: $2\\cdot 4\\cdot 3=24$.", "Çeldirici: birler basamağını en sona bırakıp $5\\cdot 4\\cdot ?$ kurgusuna girmek karışıklık yaratır; kısıtlı basamaktan başla."],
      answer: "$24$",
    },
    {
      id: "permutasyon-kombinasyon-tyt-06",
      difficulty: "Kolay",
      prompt: "$8$ kişilik bir gruptan $3$ kişilik bir komisyon kaç farklı şekilde seçilebilir?",
      options: ["$24$", "$42$", "$56$", "$84$", "$336$"],
      correct: 2,
      solution: ["Sıra önemsiz: $C(8,3)=\\dfrac{8\\cdot 7\\cdot 6}{3\\cdot 2\\cdot 1}=56$.", "Çeldirici: paydadaki $3!$'i unutursan $P(8,3)=336$ (E) bulursun."],
      answer: "$56$",
    },
  ],
};

export default quiz;
