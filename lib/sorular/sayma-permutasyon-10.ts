import type { TopicQuiz } from "./types";

// sayma-permutasyon-10 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "sayma-permutasyon-10",
  questions: [
    {
      id: "sayma-permutasyon-10-01",
      difficulty: "Kolay",
      prompt: "Bir mağazada $4$ farklı tişört, $2$ farklı pantolon ve $3$ farklı ayakkabı vardır. Birer tişört, pantolon ve ayakkabı seçilerek kaç farklı kıyafet kombinasyonu oluşturulabilir?",
      options: ["$9$", "$14$", "$24$", "$18$", "$12$"],
      correct: 2,
      solution: ["Seçim ardışık aşamalardan oluşur: önce tişört, sonra pantolon, sonra ayakkabı.", "Çarpma kuralı uygulanır: $4\\cdot 2\\cdot 3$.", "$4\\cdot 2\\cdot 3=24$."],
      answer: "$24$ farklı kombinasyon.",
    },
    {
      id: "sayma-permutasyon-10-02",
      difficulty: "Kolay",
      prompt: "$\\dfrac{7!}{5!}$ ifadesinin değeri kaçtır?",
      options: ["$7$", "$35$", "$5040$", "$42$", "$720$"],
      correct: 3,
      solution: ["Büyük faktöriyeli açıp sadeleştir: $7!=7\\cdot 6\\cdot 5!$.", "$\\dfrac{7\\cdot 6\\cdot 5!}{5!}=7\\cdot 6$.", "$7\\cdot 6=42$."],
      answer: "$42$.",
    },
    {
      id: "sayma-permutasyon-10-03",
      difficulty: "Orta",
      prompt: "$8$ kişilik bir kulüpten başkan, başkan yardımcısı ve sekreter seçilecektir. Bir kişi aynı anda birden fazla görevi üstlenemeyeceğine göre bu seçim kaç farklı şekilde yapılabilir?",
      options: ["$336$", "$512$", "$56$", "$40320$", "$24$"],
      correct: 0,
      solution: ["Görevler birbirinden farklı olduğundan sıra önemlidir; $8$ kişiden $3$'ünün sıralı seçimi gerekir.", "$P(8,3)=\\dfrac{8!}{5!}=8\\cdot 7\\cdot 6$.", "$8\\cdot 7\\cdot 6=336$."],
      answer: "$336$.",
    },
    {
      id: "sayma-permutasyon-10-04",
      difficulty: "Orta",
      prompt: "$0,1,2,3,4,5,6$ rakamları kullanılarak, rakamları tekrarsız $3$ basamaklı kaç sayı yazılabilir?",
      options: ["$343$", "$210$", "$120$", "$294$", "$180$"],
      correct: 4,
      solution: ["Yüzler basamağı $0$ olamaz: $7$ rakamdan $0$ hariç $6$ seçenek.", "Onlar basamağı: $0$ dâhil kalan $6$ rakamdan biri, $6$ seçenek.", "Birler basamağı: kalan $5$ rakamdan biri, $5$ seçenek.", "Çarp: $6\\cdot 6\\cdot 5=180$."],
      answer: "$180$ sayı.",
    },
    {
      id: "sayma-permutasyon-10-05",
      difficulty: "Zor",
      prompt: "$3$ kadın ve $4$ erkek bir sıraya, kadınlar yan yana olacak şekilde kaç farklı şekilde dizilebilir?",
      options: ["$144$", "$720$", "$5040$", "$120$", "$864$"],
      correct: 1,
      solution: ["$3$ kadını tek bir blok say: blok $+$ $4$ erkek $=5$ nesne, $5!=120$ diziliş.", "Blok içindeki $3$ kadın kendi aralarında $3!=6$ şekilde sıralanır.", "Çarp: $120\\cdot 6=720$."],
      answer: "$720$.",
    },
    {
      id: "sayma-permutasyon-10-06",
      difficulty: "Orta",
      prompt: "$P(n,2)=42$ olduğuna göre $n$ kaçtır?",
      options: ["$6$", "$8$", "$7$", "$21$", "$42$"],
      correct: 2,
      solution: ["$P(n,2)=\\dfrac{n!}{(n-2)!}=n(n-1)$.", "$n(n-1)=42$ denklemi çözülür.", "Ardışık iki tam sayının çarpımı $42$: $7\\cdot 6=42$, dolayısıyla $n=7$."],
      answer: "$n=7$.",
    },
  ],
};

export default quiz;
