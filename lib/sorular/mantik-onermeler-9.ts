import type { TopicQuiz } from "./types";

// mantik-onermeler-9 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "mantik-onermeler-9",
  questions: [
    {
      id: "mantik-onermeler-9-01",
      difficulty: "Kolay",
      prompt: "Aşağıdaki cümlelerden hangisi bir önerme **değildir**?",
      options: ["$12$ asal sayıdır.", "Kapıyı kapat.", "$4^2=16$'dır.", "$-3<0$'dır.", "$0$ çift sayıdır."],
      correct: 1,
      solution: ["Bir önerme, doğru ($1$) ya da yanlış ($0$) olduğu kesin söylenebilen yargı cümlesidir.", "$12$ asal sayıdır: yanlış ($12$ asal değildir) ama doğruluk değeri belirlidir, yani önermedir.", "Kapıyı kapat: emir cümlesidir; doğru/yanlış denemez, önerme değildir.", "$4^2=16$ doğru, $-3<0$ doğru, $0$ çift sayıdır doğru; hepsi önermedir.", "Dolayısıyla önerme olmayan tek cümle emir cümlesidir."],
      answer: "Emir cümlesi olan \"Kapıyı kapat.\" önerme değildir. Doğru seçenek B.",
    },
    {
      id: "mantik-onermeler-9-02",
      difficulty: "Kolay",
      prompt: "$p=1$ ve $q=0$ iken $p'\\vee q$ bileşik önermesinin doğruluk değeri kaçtır?",
      options: ["$0$", "$1$", "$p$'ye bağlıdır", "$2$", "Belirsizdir"],
      correct: 0,
      solution: ["Önce içteki değili al: $p=1$ olduğundan $p'=0$.", "$q=0$ verilmiştir.", "$p'\\vee q=0\\vee 0$. Veya bağlacı en az biri doğruysa doğrudur; burada ikisi de $0$ olduğundan sonuç $0$'dır."],
      answer: "$p'\\vee q=0$. Doğru seçenek A.",
    },
    {
      id: "mantik-onermeler-9-03",
      difficulty: "Orta",
      prompt: "$p=0$, $q=1$ ve $r=0$ iken $(p\\Rightarrow q)\\wedge(r\\vee p')$ bileşik önermesinin doğruluk değeri kaçtır?",
      options: ["$p$'ye bağlıdır", "$0$", "$1$", "Her zaman $0$", "Belirsizdir"],
      correct: 2,
      solution: ["$p\\Rightarrow q$: öncül $p=0$ olduğundan koşullu önerme daima doğrudur, yani $1$.", "$p'=1$ ($p=0$'ın değili), $r=0$ olduğundan $r\\vee p'=0\\vee 1=1$.", "İki parçayı ve ile birleştir: $(p\\Rightarrow q)\\wedge(r\\vee p')=1\\wedge 1=1$."],
      answer: "İfadenin değeri $1$'dir. Doğru seçenek C.",
    },
    {
      id: "mantik-onermeler-9-04",
      difficulty: "Orta",
      prompt: "\"Her öğrenci matematik sever.\" önermesinin değili aşağıdakilerden hangisidir?",
      options: ["Her öğrenci matematik sevmez.", "Hiçbir öğrenci matematik sevmez.", "Bazı öğrenciler matematik sever.", "Bazı öğrenciler matematik sevmez.", "Her öğrenci matematik sever değildir."],
      correct: 3,
      solution: ["Evrensel niceleyicinin (her) değili alınınca varlıksal niceleyiciye (bazı) döner ve yüklem olumsuzlanır.", "Kural: \"her ... doğru\"nun değili \"bazı ... değil\"dir.", "Yani \"Her öğrenci matematik sever\" önermesinin değili \"Bazı öğrenciler matematik sevmez\"dir.", "\"Hiçbir öğrenci sevmez\" ifadesi değil değil, daha güçlü bir olumsuzlamadır; doğru cevap değildir."],
      answer: "Değili \"Bazı öğrenciler matematik sevmez.\" ifadesidir. Doğru seçenek D.",
    },
    {
      id: "mantik-onermeler-9-05",
      difficulty: "Orta",
      prompt: "De Morgan kuralına göre $(p\\wedge q')'$ ifadesinin $p'$ ve $q$ cinsinden eşiti aşağıdakilerden hangisidir?",
      options: ["$p'\\wedge q'$", "$p'\\wedge q$", "$p\\vee q'$", "$p'\\vee q'$", "$p'\\vee q$"],
      correct: 4,
      solution: ["De Morgan: $(p\\wedge q')'=p'\\vee (q')'$. Değil alınınca $\\wedge$ ile $\\vee$ yer değiştirir ve her parçanın değili alınır.", "$(q')'=q$ (bir önermenin değilinin değili kendisidir).", "Böylece $(p\\wedge q')'=p'\\vee q$ elde edilir."],
      answer: "$(p\\wedge q')'=p'\\vee q$. Doğru seçenek E.",
    },
    {
      id: "mantik-onermeler-9-06",
      difficulty: "Zor",
      prompt: "Bir öğrenci \"Sınavı geçersem sinemaya giderim.\" diyor. Burada $p$: \"Sınavı geçtim\", $q$: \"Sinemaya gittim\" önermeleridir. Öğrencinin bu sözünün ($p\\Rightarrow q$) **yalan** (yanlış) olduğu durum aşağıdakilerden hangisidir?",
      options: ["Sınavı geçti ve sinemaya gitti.", "Sınavı geçti ama sinemaya gitmedi.", "Sınavı geçemedi ama sinemaya gitti.", "Sınavı geçemedi ve sinemaya gitmedi.", "Hiçbir durumda söz yalan olmaz."],
      correct: 1,
      solution: ["Koşullu önerme $p\\Rightarrow q$ yalnızca öncül doğru ($p=1$) ve sonuç yanlış ($q=0$) iken yanlıştır; diğer tüm durumlarda doğrudur.", "Sözün yalan olması, öğrencinin sınavı geçmesine ($p=1$) rağmen sinemaya gitmemesi ($q=0$) demektir.", "Geçti ve gitti: $1\\Rightarrow 1=1$ (doğru). Geçemedi ama gitti: $0\\Rightarrow 1=1$ (doğru). Geçemedi ve gitmedi: $0\\Rightarrow 0=1$ (doğru).", "Yalnız \"geçti ama gitmedi\" durumu $1\\Rightarrow 0=0$ olduğundan sözü yalan yapar."],
      answer: "Söz yalnız \"Sınavı geçti ama sinemaya gitmedi.\" durumunda yalandır. Doğru seçenek B.",
    },
  ],
};

export default quiz;
