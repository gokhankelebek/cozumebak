import type { TopicQuiz } from "./types";

// bagimli-bagimsiz-olaylar-10 — generated ÖSYM-style questions, each independently
// re-solved and checked (single correct option) before shipping.
const quiz: TopicQuiz = {
  slug: "bagimli-bagimsiz-olaylar-10",
  questions: [
    {
      id: "bagimli-bagimsiz-olaylar-10-01",
      difficulty: "Kolay",
      prompt: "Bir madenî para ile bir zar birlikte atılıyor. Paranın **yazı**, zarın **tek sayı** gelme olasılığı kaçtır?",
      options: ["$\\dfrac{1}{4}$", "$\\dfrac{1}{2}$", "$\\dfrac{1}{6}$", "$\\dfrac{1}{12}$", "$\\dfrac{1}{3}$"],
      correct: 0,
      solution: ["Para ile zar birbirini etkilemez, yani olaylar bağımsızdır.", "$P(\\text{yazı})=\\dfrac{1}{2}$.", "Zarda tek sayılar $1,3,5$ olduğundan $P(\\text{tek})=\\dfrac{3}{6}=\\dfrac{1}{2}$.", "Bağımsız olaylarda kesişim çarpılır: $\\dfrac{1}{2}\\cdot\\dfrac{1}{2}=\\dfrac{1}{4}$."],
      answer: "$\\dfrac{1}{4}$",
    },
    {
      id: "bagimli-bagimsiz-olaylar-10-02",
      difficulty: "Orta",
      prompt: "Bir kutuda $4$ kırmızı, $6$ mavi kalem vardır. Geri koymadan art arda iki kalem çekiliyor. İkisinin de **mavi** olma olasılığı kaçtır?",
      options: ["$\\dfrac{9}{25}$", "$\\dfrac{5}{18}$", "$\\dfrac{1}{3}$", "$\\dfrac{3}{5}$", "$\\dfrac{2}{5}$"],
      correct: 2,
      solution: ["Geri koymadan çekildiği için olaylar bağımlıdır.", "İlk mavi: $\\dfrac{6}{10}=\\dfrac{3}{5}$.", "İkinci mavi (kalan $9$ kalem, $5$ mavi): $\\dfrac{5}{9}$.", "Çarp: $\\dfrac{6}{10}\\cdot\\dfrac{5}{9}=\\dfrac{30}{90}=\\dfrac{1}{3}$."],
      answer: "$\\dfrac{1}{3}$",
    },
    {
      id: "bagimli-bagimsiz-olaylar-10-03",
      difficulty: "Orta",
      prompt: "Bir zar $3$ kez atılıyor. **En az bir kez $5$** gelme olasılığı kaçtır?",
      options: ["$\\dfrac{125}{216}$", "$\\dfrac{91}{216}$", "$\\dfrac{1}{2}$", "$\\dfrac{25}{216}$", "$\\dfrac{5}{72}$"],
      correct: 1,
      solution: ["\"En az bir\" için tümleyeni kullanmak kolaydır: hiç $5$ gelmemesi.", "Bir atışta $5$ gelmeme olasılığı $\\dfrac{5}{6}$.", "Üç atışta hiç $5$ yok: $\\left(\\dfrac{5}{6}\\right)^3=\\dfrac{125}{216}$.", "$P(\\text{en az bir }5)=1-\\dfrac{125}{216}=\\dfrac{91}{216}$."],
      answer: "$\\dfrac{91}{216}$",
    },
    {
      id: "bagimli-bagimsiz-olaylar-10-04",
      difficulty: "Orta",
      prompt: "Bir okçu hedefi $0{,}7$, başka bir okçu ise $0{,}5$ olasılıkla vuruyor. İkisi bağımsız atış yapıyor. Hedefin **en az biri** tarafından vurulma olasılığı kaçtır?",
      options: ["$0{,}35$", "$0{,}15$", "$1{,}2$", "$0{,}85$", "$0{,}65$"],
      correct: 3,
      solution: ["\"En az biri vurur\" için tümleyen: ikisinin de ıskalaması.", "$P(\\text{1. ıska})=1-0{,}7=0{,}3$, $P(\\text{2. ıska})=1-0{,}5=0{,}5$.", "Bağımsız oldukları için ikisi de ıska: $0{,}3\\cdot 0{,}5=0{,}15$.", "$P(\\text{en az biri vurur})=1-0{,}15=0{,}85$."],
      answer: "$0{,}85$",
    },
    {
      id: "bagimli-bagimsiz-olaylar-10-05",
      difficulty: "Zor",
      prompt: "Bir torbada $5$ kırmızı, $4$ yeşil bilye vardır. Geri koymadan iki bilye çekiliyor. İkisinin **aynı renk** olma olasılığı kaçtır?",
      options: ["$\\dfrac{4}{9}$", "$\\dfrac{5}{9}$", "$\\dfrac{5}{18}$", "$\\dfrac{1}{6}$", "$\\dfrac{20}{81}$"],
      correct: 0,
      solution: ["\"Aynı renk\" iki ayrık yoldan olur: ikisi de kırmızı veya ikisi de yeşil.", "İkisi de kırmızı: $\\dfrac{5}{9}\\cdot\\dfrac{4}{8}=\\dfrac{20}{72}$.", "İkisi de yeşil: $\\dfrac{4}{9}\\cdot\\dfrac{3}{8}=\\dfrac{12}{72}$.", "\"Veya\" olduğu için topla: $\\dfrac{20}{72}+\\dfrac{12}{72}=\\dfrac{32}{72}=\\dfrac{4}{9}$."],
      answer: "$\\dfrac{4}{9}$",
    },
    {
      id: "bagimli-bagimsiz-olaylar-10-06",
      difficulty: "Orta",
      prompt: "Bir torbada $2$ kırmızı, $3$ beyaz, $1$ siyah top vardır. Geri koymadan art arda üç top çekiliyor. Çekiliş sırasının **beyaz–beyaz–kırmızı** olma olasılığı kaçtır?",
      options: ["$\\dfrac{1}{12}$", "$\\dfrac{1}{5}$", "$\\dfrac{1}{10}$", "$\\dfrac{1}{6}$", "$\\dfrac{1}{20}$"],
      correct: 2,
      solution: ["Toplam $2+3+1=6$ top vardır; geri koymadan çekildiği için olaylar bağımlıdır.", "İlk beyaz: $\\dfrac{3}{6}$.", "İkinci beyaz (kalan $5$ top, $2$ beyaz): $\\dfrac{2}{5}$.", "Üçüncü kırmızı (kalan $4$ top, $2$ kırmızı): $\\dfrac{2}{4}$.", "Çarp: $\\dfrac{3}{6}\\cdot\\dfrac{2}{5}\\cdot\\dfrac{2}{4}=\\dfrac{1}{2}\\cdot\\dfrac{2}{5}\\cdot\\dfrac{1}{2}=\\dfrac{1}{10}$."],
      answer: "$\\dfrac{1}{10}$",
    },
  ],
};

export default quiz;
