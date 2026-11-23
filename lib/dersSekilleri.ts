import type { Sekil } from "@/lib/sorular/sekil";

// ─────────────────────────────────────────────────────────────────────────────
// Lesson figures (konu anlatımı) drawn with the quiz figure engine, so lessons
// and questions share one house style. components/figures/*Fig.tsx wrap these
// specs under their old export names; the MDX pages are unchanged.
//
// Figures carry no prose: explanations live in the <Altyazi> caption. Every
// spec here is listed on /dev/sekiller with the checker's findings.
// ─────────────────────────────────────────────────────────────────────────────

const DERS: [number, number] = [320, 230];
const EKSENLI: [number, number] = [290, 270];

// Shared by the TYT and AYT line lessons: the slope triangle of A(1, 2)–B(4, 8).
const EGIM: Sekil = {
  aciklama: "A(1, 2) ve B(4, 8) noktalarından geçen doğru; kesik çizgili eğim üçgeninde Δx = 3 ve Δy = 6",
  boyut: EKSENLI,
  eksen: { x: [-0.9, 5.6], y: [-0.9, 9.4] },
  noktalar: { A: [1, 2], B: [4, 8], C: [4, 2], P1: [0.4, 0.8], P2: [4.5, 9] },
  dogrular: [{ p: ["P1", "P2"] }, { p: ["A", "C"], kesik: true }, { p: ["C", "B"], kesik: true }],
  dikler: [["A", "C", "B"]],
  kenarlar: [
    { p: ["A", "C"], metin: "Δx", vurgu: true, ic: true },
    { p: ["C", "B"], metin: "Δy", vurgu: true },
  ],
  isaretli: ["A", "B"],
  etiketMetni: { A: "A(1, 2)", B: "B(4, 8)" },
  etiketYonu: { A: 305 },
  gizli: ["C", "P1", "P2"],
};

// ── Graph helpers ───────────────────────────────────────────────────────────
const parabol = (x: number) => x * x - 4 * x + 3;
const kubik = (x: number) => x ** 3 - 6 * x ** 2 + 9 * x + 1;
const alanF = (x: number) => 0.15 * x * x + 1;
// Left-endpoint Riemann strips under alanF on [1.2, 4.6]: corner points and edges.
const SERIT = { a: 1.2, b: 4.6, n: 4 };
const seritNoktalari: Record<string, [number, number]> = {};
const seritKenarlari: { p: [string, string]; kesik: true }[] = [];
for (let i = 0; i < SERIT.n; i++) {
  const w = (SERIT.b - SERIT.a) / SERIT.n;
  const x0 = SERIT.a + i * w;
  const h = alanF(x0);
  seritNoktalari[`R${i}a`] = [x0, h];
  seritNoktalari[`R${i}b`] = [x0 + w, h];
  seritNoktalari[`R${i}c`] = [x0 + w, 0];
  seritKenarlari.push({ p: [`R${i}a`, `R${i}b`], kesik: true }, { p: [`R${i}b`, `R${i}c`], kesik: true });
}
// Trig graphs are drawn with y stretched by 1.6 so the wave is legible; the
// tick labels still read 1 and −1.
const TRIG_K = 1.6;
const trigTikler = {
  noktalar: {
    X1: [Math.PI / 2, 0], X2: [Math.PI, 0], X3: [(3 * Math.PI) / 2, 0], X4: [2 * Math.PI, 0],
    Y1: [0, TRIG_K], Y2: [0, -TRIG_K], Y1b: [2 * Math.PI, TRIG_K], Y2b: [2 * Math.PI, -TRIG_K],
  } as Record<string, [number, number]>,
  etiketMetni: { X1: "π/2", X2: "π", X3: "3π/2", X4: "2π", Y1: "1", Y2: "−1" },
  dogrular: [{ p: ["Y1", "Y1b"] as [string, string], kesik: true }, { p: ["Y2", "Y2b"] as [string, string], kesik: true }],
  gizli: ["Y1b", "Y2b"],
};

export const DERS_SEKILLERI = {
  // ── UcgenFig ──────────────────────────────────────────────────────────────
  IcAcilar: {
    aciklama: "İç açıları A, B ve C köşelerinde işaretli bir üçgen",
    boyut: DERS,
    noktalar: { A: [0, 0], B: [6, 0], C: [2.4, 3.6] },
    cokgenler: [["A", "B", "C"]],
    acilar: [{ p: ["C", "A", "B"] }, { p: ["A", "B", "C"] }, { p: ["B", "C", "A"] }],
  },
  DisAci: {
    aciklama: "AB kenarı B'den uzatılmış üçgen; B'deki dış açı d, A ve C iç açılarının toplamına eşit",
    boyut: DERS,
    noktalar: { A: [0, 0], B: [5, 0], C: [2, 3.4], D: [7.6, 0] },
    cokgenler: [["A", "B", "C"]],
    dogrular: [{ p: ["B", "D"] }],
    acilar: [{ p: ["C", "A", "B"] }, { p: ["B", "C", "A"] }, { p: ["D", "B", "C"], metin: "d", vurgu: true }],
    gizli: ["D"],
  },
  Ikizkenar: {
    aciklama: "İkizkenar üçgen: AB ve AC kenarları eşit, B ve C taban açıları eşit",
    boyut: DERS,
    noktalar: { A: [3, 4.2], B: [0, 0], C: [6, 0] },
    cokgenler: [["A", "B", "C"]],
    esitler: [{ p: ["A", "B"] }, { p: ["A", "C"] }],
    acilar: [{ p: ["A", "B", "C"] }, { p: ["B", "C", "A"] }],
  },

  // ── AcilarFig ─────────────────────────────────────────────────────────────
  TumlerButunler: {
    aciklama: "Solda toplamı 90 derece olan tümler açılar α ve β, sağda toplamı 180 derece olan bütünler açılar α ve β",
    boyut: [420, 200],
    noktalar: {
      O: [0, 0], P: [0, 3], Q: [3, 0], R: [2.457, 1.721], T1: [1.5, -1.1],
      O2: [8, 0], L: [5.2, 0], K: [10.8, 0], S: [6.5, 2.598], T2: [8, -1.1],
    },
    dogrular: [{ p: ["O", "P"] }, { p: ["O", "Q"] }, { p: ["O", "R"] }, { p: ["L", "K"] }, { p: ["O2", "S"] }],
    acilar: [
      { p: ["Q", "O", "R"], metin: "α", vurgu: true },
      { p: ["R", "O", "P"], metin: "β", yaricap: 46 },
      { p: ["S", "O2", "L"], metin: "α", vurgu: true },
      { p: ["K", "O2", "S"], metin: "β" },
    ],
    yazilar: [
      { nokta: "T1", metin: "α + β = 90°" },
      { nokta: "T2", metin: "α + β = 180°" },
    ],
    gizli: ["O", "P", "Q", "R", "T1", "O2", "L", "K", "S", "T2"],
  },
  TersAcilar: {
    aciklama: "Kesişen iki doğru: karşılıklı ters açılar a ve a, b ve b eşit",
    boyut: DERS,
    noktalar: { O: [0, 0], P1: [3, 1.6], P2: [-3, 1.6], P3: [-3, -1.6], P4: [3, -1.6] },
    dogrular: [{ p: ["P3", "P1"] }, { p: ["P2", "P4"] }],
    acilar: [
      { p: ["P1", "O", "P2"], metin: "a", yaricap: 18 },
      { p: ["P3", "O", "P4"], metin: "a", yaricap: 18 },
      { p: ["P2", "O", "P3"], metin: "b", vurgu: true, cift: true, yaricap: 30 },
      { p: ["P4", "O", "P1"], metin: "b", vurgu: true, cift: true, yaricap: 30 },
    ],
    gizli: ["O", "P1", "P2", "P3", "P4"],
  },
  ParalelKesen: {
    aciklama: "Paralel d1 ve d2 doğrularını bir kesen kesiyor; yöndeş α açıları eşit, iç ters β açıları eşit",
    boyut: DERS,
    noktalar: {
      d1: [0, 2], R1: [8, 2], d2: [0, 0], R2: [8, 0],
      T1: [5.5, 3.5], T2: [2.5, -1.5], P: [4.6, 2], Q: [3.4, 0],
    },
    dogrular: [{ p: ["d1", "R1"] }, { p: ["d2", "R2"] }, { p: ["T1", "T2"] }],
    acilar: [
      { p: ["R1", "P", "T1"], metin: "α" },
      { p: ["T2", "P", "R1"], metin: "β", cift: true },
      { p: ["R2", "Q", "T1"], metin: "α", vurgu: true },
      { p: ["T1", "Q", "d2"], metin: "β", vurgu: true, cift: true },
    ],
    gizli: ["R1", "R2", "T1", "T2", "P", "Q"],
  },

  // ── DikUcgenFig ───────────────────────────────────────────────────────────
  Pisagor: {
    aciklama: "C köşesi dik olan ABC dik üçgeni: dik kenarlar a ve b, hipotenüs c",
    boyut: DERS,
    noktalar: { C: [0, 0], B: [4, 0], A: [0, 3] },
    cokgenler: [["A", "B", "C"]],
    dikler: [["A", "C", "B"]],
    kenarlar: [
      { p: ["C", "B"], metin: "a" },
      { p: ["C", "A"], metin: "b" },
      { p: ["A", "B"], metin: "c" },
    ],
  },
  Ucgen304560: {
    aciklama: "30-60-90 üçgeni: 30 derecenin karşısı x, 60 derecenin karşısı x kök 3, hipotenüs 2x",
    boyut: DERS,
    noktalar: { P: [0, 0], Q: [3.464, 0], R: [0, 2] },
    cokgenler: [["P", "Q", "R"]],
    dikler: [["R", "P", "Q"]],
    acilar: [
      { p: ["R", "Q", "P"], metin: "30°" },
      { p: ["P", "R", "Q"], metin: "60°" },
    ],
    kenarlar: [
      { p: ["P", "Q"], metin: "x√3" },
      { p: ["P", "R"], metin: "x" },
      { p: ["Q", "R"], metin: "2x" },
    ],
    gizli: ["P", "Q", "R"],
  },
  Ucgen454590: {
    aciklama: "45-45-90 üçgeni: dik kenarlar x ve x, hipotenüs x kök 2",
    boyut: DERS,
    noktalar: { P: [0, 0], Q: [3, 0], R: [0, 3] },
    cokgenler: [["P", "Q", "R"]],
    dikler: [["R", "P", "Q"]],
    acilar: [
      { p: ["R", "Q", "P"], metin: "45°" },
      { p: ["P", "R", "Q"], metin: "45°" },
    ],
    kenarlar: [
      { p: ["P", "Q"], metin: "x" },
      { p: ["P", "R"], metin: "x" },
      { p: ["Q", "R"], metin: "x√2" },
    ],
    gizli: ["P", "Q", "R"],
  },

  // ── BenzerlikFig ──────────────────────────────────────────────────────────
  BenzerUcgenler: {
    aciklama: "Benzer ABC ve A'B'C' üçgenleri: karşılıklı açılar eşit, AB = 6 ve A'B' = 4",
    boyut: [420, 200],
    noktalar: { A: [0, 0], B: [6, 0], C: [1.8, 3.6], "A'": [8, 0], "B'": [12, 0], "C'": [9.2, 2.4] },
    cokgenler: [["A", "B", "C"], ["A'", "B'", "C'"]],
    acilar: [
      { p: ["B", "A", "C"] },
      { p: ["C", "B", "A"], cift: true },
      { p: ["B'", "A'", "C'"] },
      { p: ["C'", "B'", "A'"], cift: true },
    ],
    kenarlar: [
      { p: ["A", "B"], metin: "6", vurgu: true },
      { p: ["A'", "B'"], metin: "4", vurgu: true },
    ],
  },
  Thales: {
    aciklama: "ABC üçgeninde BC'ye paralel DE doğru parçası; AD = 3, DB = 6, AE = 4, EC = x",
    boyut: DERS,
    noktalar: { A: [3, 5], B: [0, 0], C: [7, 0], D: [2, 3.333], E: [4.333, 3.333] },
    cokgenler: [["A", "B", "C"]],
    dogrular: [{ p: ["D", "E"] }],
    kenarlar: [
      { p: ["A", "D"], metin: "3" },
      { p: ["D", "B"], metin: "6" },
      { p: ["A", "E"], metin: "4" },
      { p: ["E", "C"], metin: "x", vurgu: true },
    ],
  },
  AlanTabanYukseklik: {
    aciklama: "Tabanı a olan üçgen ve tepeden tabana dik inen h yüksekliği (kesik çizgi)",
    boyut: DERS,
    noktalar: { A: [2, 3.5], B: [0, 0], C: [6, 0], H: [2, 0] },
    cokgenler: [["A", "B", "C"]],
    dogrular: [{ p: ["A", "H"], kesik: true }],
    dikler: [["A", "H", "C"]],
    kenarlar: [
      { p: ["A", "H"], metin: "h", vurgu: true },
      { p: ["B", "C"], metin: "a", konum: 0.7 },
    ],
    gizli: ["H"],
  },

  // ── DortgenFig ────────────────────────────────────────────────────────────
  Paralelkenar: {
    aciklama: "ABCD paralelkenarı: AB tabanı a, D'den tabana inen yükseklik h (kesik çizgi)",
    boyut: DERS,
    noktalar: { A: [0, 0], B: [5, 0], C: [6.5, 3], D: [1.5, 3], H: [1.5, 0] },
    cokgenler: [["A", "B", "C", "D"]],
    dogrular: [{ p: ["D", "H"], kesik: true }],
    dikler: [["D", "H", "B"]],
    kenarlar: [
      { p: ["D", "H"], metin: "h", vurgu: true },
      { p: ["A", "B"], metin: "a" },
    ],
    gizli: ["H"],
  },
  Yamuk: {
    aciklama: "ABCD yamuğu: paralel kenarlar DC = a ve AB = c, aralarındaki uzaklık h (kesik çizgi)",
    boyut: DERS,
    noktalar: { A: [0, 0], B: [7, 0], C: [5, 3], D: [1.5, 3], H: [1.5, 0] },
    cokgenler: [["A", "B", "C", "D"]],
    dogrular: [{ p: ["D", "H"], kesik: true }],
    dikler: [["D", "H", "B"]],
    kenarlar: [
      { p: ["D", "C"], metin: "a" },
      { p: ["A", "B"], metin: "c" },
      { p: ["D", "H"], metin: "h", vurgu: true },
    ],
    gizli: ["H"],
  },
  EskenarDortgen: {
    aciklama: "ABCD eşkenar dörtgeni: kenarları eşit, köşegenleri e ve f birbirini dik ortalıyor",
    boyut: DERS,
    noktalar: { A: [-3, 0], B: [0, -2], C: [3, 0], D: [0, 2], O: [0, 0] },
    cokgenler: [["A", "B", "C", "D"]],
    dogrular: [{ p: ["A", "C"] }, { p: ["B", "D"] }],
    dikler: [["C", "O", "D"]],
    esitler: [{ p: ["A", "B"] }, { p: ["B", "C"] }, { p: ["C", "D"] }, { p: ["D", "A"] }],
    kenarlar: [
      { p: ["A", "O"], metin: "e", vurgu: true, konum: 0.5 },
      { p: ["O", "D"], metin: "f", vurgu: true, konum: 0.5 },
    ],
    gizli: ["O"],
  },

  // ── EskenarAlanFig ────────────────────────────────────────────────────────
  EskenarAlan: {
    aciklama: "Kenarı a olan eşkenar ABC üçgeni ve tabana inen h yüksekliği",
    boyut: DERS,
    noktalar: { B: [0, 0], C: [4, 0], A: [2, 3.464], H: [2, 0] },
    cokgenler: [["A", "B", "C"]],
    dogrular: [{ p: ["A", "H"], kesik: true }],
    dikler: [["A", "H", "C"]],
    kenarlar: [
      { p: ["A", "B"], metin: "a" },
      { p: ["A", "C"], metin: "a" },
      { p: ["B", "C"], metin: "a", konum: 0.75 },
      { p: ["A", "H"], metin: "h", vurgu: true },
    ],
    gizli: ["H"],
  },

  // ── YardimciElemanlarFig ──────────────────────────────────────────────────
  Kenarortay: {
    aciklama: "ABC üçgeninde A köşesinden BC'nin orta noktası D'ye çizilen kenarortay; BD ve DC eşit",
    boyut: DERS,
    noktalar: { A: [2, 4], B: [0, 0], C: [7, 0], D: [3.5, 0] },
    cokgenler: [["A", "B", "C"]],
    dogrular: [{ p: ["A", "D"] }],
    esitler: [{ p: ["B", "D"] }, { p: ["D", "C"] }],
  },
  Aciortay: {
    aciklama: "ABC üçgeninde A açısını iki eşit α açısına bölen ve BC'yi E'de kesen açıortay",
    boyut: DERS,
    noktalar: { A: [1.5, 4], B: [0, 0], C: [7, 0], E: [2.702, 0] },
    cokgenler: [["A", "B", "C"]],
    dogrular: [{ p: ["A", "E"] }],
    acilar: [
      { p: ["B", "A", "E"], metin: "α", vurgu: true, yaricap: 40 },
      { p: ["E", "A", "C"], metin: "α", vurgu: true, yaricap: 40 },
    ],
  },

  // ── KosinusTeoremiFig ─────────────────────────────────────────────────────
  KosinusTeoremi: {
    aciklama: "ABC üçgeni: A köşesinde buluşan b ve c kenarları ve aralarındaki A açısı, karşı kenar a",
    boyut: DERS,
    noktalar: { A: [1, 3.6], B: [0, 0], C: [6, 0] },
    cokgenler: [["A", "B", "C"]],
    acilar: [{ p: ["B", "A", "C"] }],
    kenarlar: [
      { p: ["B", "C"], metin: "a", vurgu: true },
      { p: ["A", "C"], metin: "b" },
      { p: ["A", "B"], metin: "c" },
    ],
  },

  // ── CemberFig ─────────────────────────────────────────────────────────────
  MerkezCevreAci: {
    aciklama: "O merkezli çemberde aynı AB yayını gören merkez açı 2α ve çevre açı α",
    boyut: DERS,
    noktalar: { O: [0, 0], A: [-2.298, -1.928], B: [2.298, -1.928], C: [-0.521, 2.954] },
    cemberler: [{ merkez: "O", nokta: "A" }],
    cemberYaylari: [{ merkez: "O", bas: "A", son: "B", vurgu: true }],
    dogrular: [{ p: ["O", "A"] }, { p: ["O", "B"] }, { p: ["C", "A"] }, { p: ["C", "B"] }],
    acilar: [
      { p: ["A", "O", "B"], metin: "2α", vurgu: true },
      { p: ["A", "C", "B"], metin: "α", yaricap: 44 },
    ],
    isaretli: ["O"],
  },
  Teget: {
    aciklama: "O merkezli çembere T noktasında çizilen teğet; teğet OT yarıçapına dik",
    boyut: DERS,
    noktalar: { O: [0, 0], T: [2.165, 1.25], P1: [1.065, 3.155], P2: [3.265, -0.655] },
    cemberler: [{ merkez: "O", nokta: "T" }],
    dogrular: [{ p: ["O", "T"] }, { p: ["P1", "P2"] }],
    dikler: [["O", "T", "P2"]],
    kenarlar: [{ p: ["O", "T"], metin: "r" }],
    isaretli: ["O", "T"],
    gizli: ["P1", "P2"],
  },
  DaireDilimi: {
    aciklama: "O merkezli, r yarıçaplı dairede merkez açısı α olan taranmış AOB daire dilimi",
    boyut: DERS,
    noktalar: { O: [0, 0], A: [3, 0], B: [1.026, 2.819] },
    cemberler: [{ merkez: "O", nokta: "A" }],
    dilimler: [{ merkez: "O", bas: "A", son: "B" }],
    dogrular: [{ p: ["O", "A"] }, { p: ["O", "B"] }],
    acilar: [{ p: ["A", "O", "B"], metin: "α" }],
    kenarlar: [{ p: ["O", "A"], metin: "r", ic: true }],
    isaretli: ["O"],
  },

  // ── GeometrikSekillerFig ──────────────────────────────────────────────────
  DisAcilarToplam: {
    aciklama: "ABC üçgeninin her köşesinde bir kenar uzatılmış; A, B ve C'deki dış açılar x, y ve z",
    boyut: DERS,
    noktalar: {
      A: [0, 0], B: [6, 0], C: [2.2, 3.6],
      D: [8, 0], E: [0.893, 4.838], F: [-0.938, -1.536],
    },
    cokgenler: [["A", "B", "C"]],
    dogrular: [{ p: ["B", "D"] }, { p: ["C", "E"] }, { p: ["A", "F"] }],
    acilar: [
      { p: ["B", "A", "F"], metin: "x", vurgu: true },
      { p: ["C", "B", "D"], metin: "y", vurgu: true },
      { p: ["A", "C", "E"], metin: "z", vurgu: true },
    ],
    gizli: ["D", "E", "F"],
  },
  UcgenEsitsizligi: {
    aciklama: "ABC üçgeni: taban BC = a, diğer kenarlar AB = c ve AC = b",
    boyut: DERS,
    noktalar: { B: [0, 0], C: [6, 0], A: [2.4, 2.6] },
    cokgenler: [["A", "B", "C"]],
    kenarlar: [
      { p: ["B", "C"], metin: "a" },
      { p: ["A", "B"], metin: "c", vurgu: true },
      { p: ["A", "C"], metin: "b", vurgu: true },
    ],
  },
  // ── AnalitikFig / DogruAnalitikFig / UzaklikFig ──────────────────────────
  IkiNokta: {
    aciklama: "Koordinat düzleminde A(1, 2) ve B(4, 6) noktaları ve aralarındaki doğru parçası",
    boyut: EKSENLI,
    eksen: { x: [-0.9, 5.6], y: [-0.9, 7.2] },
    noktalar: { A: [1, 2], B: [4, 6] },
    dogrular: [{ p: ["A", "B"] }],
    isaretli: ["A", "B"],
    etiketMetni: { A: "A(1, 2)", B: "B(4, 6)" },
  },
  Egim: EGIM,
  DogruEgim: EGIM,
  UzaklikPisagor: {
    aciklama: "A(1, 2) ve B(4, 6) arasındaki uzaklık: dik kenarları Δx = 3 ve Δy = 4 olan dik üçgenin hipotenüsü, |AB| = 5; dik köşe C(4, 2)",
    boyut: EKSENLI,
    eksen: { x: [-0.9, 5.8], y: [-0.9, 7.2] },
    noktalar: { A: [1, 2], B: [4, 6], C: [4, 2] },
    dogrular: [{ p: ["A", "B"] }, { p: ["A", "C"], kesik: true }, { p: ["C", "B"], kesik: true }],
    dikler: [["A", "C", "B"]],
    kenarlar: [
      { p: ["A", "C"], metin: "Δx = 3", ic: true },
      { p: ["C", "B"], metin: "Δy = 4" },
      { p: ["A", "B"], metin: "|AB| = 5", vurgu: true },
    ],
    isaretli: ["A", "B", "C"],
    etiketMetni: { A: "A(1, 2)", B: "B(4, 6)", C: "C(4, 2)" },
    etiketYonu: { A: 305 },
  },

  // ── CemberAnalitikFig ─────────────────────────────────────────────────────
  CemberMerkez: {
    aciklama: "Koordinat düzleminde merkezi M(a, b), yarıçapı r olan çember ve merkezden çembere çizilen r yarıçapı",
    boyut: EKSENLI,
    eksen: { x: [-1.8, 6], y: [-4.6, 3] },
    noktalar: { M: [2, -1], R: [4.298, 0.928] },
    cemberler: [{ merkez: "M", nokta: "R" }],
    dogrular: [{ p: ["M", "R"] }],
    kenarlar: [{ p: ["M", "R"], metin: "r", vurgu: true }],
    isaretli: ["M"],
    etiketMetni: { M: "M(a, b)" },
    gizli: ["R"],
  },

  // ── BirimCemberFig / TrigonometriFig ──────────────────────────────────────
  BirimCember: {
    aciklama: "Merkezi orijinde olan birim çember; I, II, III, IV bölgeleri ve α açısının bitim kenarının çemberi kestiği P noktası",
    boyut: [280, 280],
    eksen: { x: [-1.45, 1.45], y: [-1.45, 1.45] },
    noktalar: { O: [0, 0], E: [1, 0], P: [0.5, 0.866], Y1: [1.08, 1.08], Y2: [-1.08, 1.08], Y3: [-1.08, -1.08], Y4: [1.08, -1.08] },
    cemberler: [{ merkez: "O", nokta: "E" }],
    dogrular: [{ p: ["O", "P"] }],
    acilar: [{ p: ["E", "O", "P"], metin: "α", vurgu: true }],
    yazilar: [
      { nokta: "Y1", metin: "I", duz: true },
      { nokta: "Y2", metin: "II", duz: true },
      { nokta: "Y3", metin: "III", duz: true },
      { nokta: "Y4", metin: "IV", duz: true },
    ],
    isaretli: ["P"],
    gizli: ["O", "E", "Y1", "Y2", "Y3", "Y4"],
  },
  BolgeIsaret: {
    aciklama: "Birim çemberin dört bölgesinde pozitif olan trigonometrik fonksiyonlar: I'de hepsi, II'de sin, III'te tan, IV'te cos",
    boyut: [280, 280],
    eksen: { x: [-1.45, 1.45], y: [-1.45, 1.45] },
    noktalar: {
      O: [0, 0], E: [1, 0],
      N1: [0.5, 0.62], N2: [-0.5, 0.62], N3: [-0.5, -0.62], N4: [0.5, -0.62],
      S1: [0.5, 0.36], S2: [-0.5, 0.36], S3: [-0.5, -0.36], S4: [0.5, -0.36],
    },
    cemberler: [{ merkez: "O", nokta: "E" }],
    yazilar: [
      { nokta: "N1", metin: "I", duz: true },
      { nokta: "N2", metin: "II", duz: true },
      { nokta: "N3", metin: "III", duz: true },
      { nokta: "N4", metin: "IV", duz: true },
      { nokta: "S1", metin: "hepsi +", duz: true, vurgu: true },
      { nokta: "S2", metin: "sin +", duz: true, vurgu: true },
      { nokta: "S3", metin: "tan +", duz: true, vurgu: true },
      { nokta: "S4", metin: "cos +", duz: true, vurgu: true },
    ],
    gizli: ["O", "E", "N1", "N2", "N3", "N4", "S1", "S2", "S3", "S4"],
  },
  RadyanTanim: {
    aciklama: "O merkezli, r yarıçaplı çemberde uzunluğu r olan AB yayı merkezde 1 radyanlık açı görür",
    boyut: DERS,
    noktalar: { O: [0, 0], A: [3, 0], B: [1.621, 2.524] },
    cemberler: [{ merkez: "O", nokta: "A" }],
    cemberYaylari: [{ merkez: "O", bas: "A", son: "B", vurgu: true, metin: "r" }],
    dogrular: [{ p: ["O", "A"] }, { p: ["O", "B"] }],
    acilar: [{ p: ["A", "O", "B"], metin: "1 rad", yaricap: 30 }],
    kenarlar: [
      { p: ["O", "A"], metin: "r" },
    ],
    isaretli: ["O"],
  },

  // ── KatiCisimFig / KatiCisim2Fig ──────────────────────────────────────────
  Prizma: {
    aciklama: "Dikdörtgenler prizması: ayrıtları a, b ve c",
    boyut: DERS,
    noktalar: {},
    noktalar3d: { A: [0, 0, 0], B: [6, 0, 0], C: [6, 0, 4], D: [0, 0, 4], E: [0, 3.5, 0], F: [6, 3.5, 0], G: [6, 3.5, 4], H: [0, 3.5, 4] },
    dogrular: [
      { p: ["A", "B"] }, { p: ["B", "F"] }, { p: ["F", "E"] }, { p: ["E", "A"] }, { p: ["E", "H"] }, { p: ["H", "G"] },
      { p: ["G", "F"] }, { p: ["B", "C"] }, { p: ["C", "G"] },
      { p: ["A", "D"], kesik: true }, { p: ["D", "C"], kesik: true }, { p: ["D", "H"], kesik: true },
    ],
    kenarlar: [
      { p: ["A", "B"], metin: "a" },
      { p: ["A", "E"], metin: "b" },
      { p: ["B", "C"], metin: "c" },
    ],
    gizli: ["A", "B", "C", "D", "E", "F", "G", "H"],
  },
  Silindir: {
    aciklama: "Dik dairesel silindir: taban yarıçapı r, yüksekliği h",
    boyut: DERS,
    noktalar: { O: [0, 0], O2: [0, 5], L: [-3, 0], R: [3, 0], L2: [-3, 5], R2: [3, 5] },
    elipsler: [{ merkez: "O", rx: 3, ry: 1.08, arkaKesik: true }, { merkez: "O2", rx: 3, ry: 1.08 }],
    dogrular: [{ p: ["L", "L2"] }, { p: ["R", "R2"] }, { p: ["O2", "R2"] }],
    isaretli: ["O2"],
    kenarlar: [
      { p: ["O2", "R2"], metin: "r" },
      { p: ["R", "R2"], metin: "h" },
    ],
    gizli: ["O", "O2", "L", "R", "L2", "R2"],
  },
  Koni: {
    aciklama: "Dik koni: taban yarıçapı r, yüksekliği h",
    boyut: DERS,
    noktalar: { O: [0, 0], T: [0, 5.5], L: [-3.5, 0], R: [3.5, 0] },
    elipsler: [{ merkez: "O", rx: 3.5, ry: 1.05, arkaKesik: true, tepe: "T" }],
    dogrular: [{ p: ["T", "O"], kesik: true }, { p: ["O", "R"], kesik: true }],
    dikler: [["T", "O", "R"]],
    isaretli: ["O"],
    kenarlar: [
      { p: ["O", "R"], metin: "r" },
      { p: ["T", "O"], metin: "h", ic: true },
    ],
    gizli: ["O", "T", "L", "R"],
  },
  Piramit: {
    aciklama: "Kare tabanlı dik piramit: taban ayrıtı a, tepeden taban merkezine inen yükseklik h",
    boyut: DERS,
    noktalar: {},
    noktalar3d: { A: [0, 0, 0], B: [6, 0, 0], C: [6, 0, 6], D: [0, 0, 6], T: [3, 7, 3], O: [3, 0, 3], M: [3, 0, 0] },
    dogrular: [
      { p: ["A", "B"] }, { p: ["B", "C"] }, { p: ["T", "A"] }, { p: ["T", "B"] }, { p: ["T", "C"] },
      { p: ["A", "D"], kesik: true }, { p: ["D", "C"], kesik: true }, { p: ["T", "D"], kesik: true },
      { p: ["T", "O"], kesik: true }, { p: ["O", "M"], kesik: true },
    ],
    dikler: [["T", "O", "M"]],
    kenarlar: [
      { p: ["A", "B"], metin: "a" },
      { p: ["T", "O"], metin: "h" },
    ],
    gizli: ["A", "B", "C", "D", "T", "O", "M"],
  },
  Kure: {
    aciklama: "Yarıçapı r olan küre; ekvator çemberi ve merkezden çizilen yarıçap",
    boyut: DERS,
    noktalar: { O: [0, 0], R: [3, 0] },
    cemberler: [{ merkez: "O", nokta: "R" }],
    elipsler: [{ merkez: "O", rx: 3, ry: 0.9, arkaKesik: true }],
    dogrular: [{ p: ["O", "R"] }],
    kenarlar: [{ p: ["O", "R"], metin: "r" }],
    isaretli: ["O"],
    gizli: ["O", "R"],
  },
  // ── ParabolFig ────────────────────────────────────────────────────────────
  Parabol: {
    aciklama: "y = x² − 4x + 3 parabolü: kökleri x = 1 ve x = 3, tepe noktası T(2, −1), y eksenini 3'te kesiyor, simetri ekseni x = 2 kesik çizgi",
    boyut: EKSENLI,
    eksen: { x: [-0.9, 5.3], y: [-1.9, 5.8] },
    noktalar: { T: [2, -1], K1: [1, 0], K3: [3, 0], Y: [0, 3], S1: [2, -1.7], S2: [2, 5.4] },
    egriler: [{ f: parabol, x: [-0.45, 4.45] }],
    dogrular: [{ p: ["S1", "S2"], kesik: true }],
    isaretli: ["T", "K1", "K3", "Y"],
    etiketMetni: { T: "T(2, −1)", K1: "1", K3: "3", Y: "3", S2: "x = 2" },
    vurguluNoktalar: ["T"],
    etiketYonu: { K1: 135, K3: 45, S2: 90 },
    gizli: ["S1"],
  },

  // ── UstelLogFig ───────────────────────────────────────────────────────────
  UstelGrafik: {
    aciklama: "y = 2 üzeri x grafiği: artan, y eksenini 1'de kesiyor, solda x eksenine yaklaşıyor",
    boyut: EKSENLI,
    eksen: { x: [-3.6, 3.4], y: [-0.9, 6.8] },
    noktalar: { Y: [0, 1] },
    egriler: [{ f: (x) => 2 ** x, x: [-3.5, 2.7], vurgu: true, metin: "y = 2^x", metinX: 2.3, metinYonu: 0 }],
    isaretli: ["Y"],
    etiketMetni: { Y: "1" },
    etiketYonu: { Y: 145 },
  },
  UstelAzalan: {
    aciklama: "y = (1/2) üzeri x grafiği: azalan, y eksenini 1'de kesiyor, sağda x eksenine yaklaşıyor",
    boyut: EKSENLI,
    eksen: { x: [-3.4, 3.6], y: [-0.9, 6.8] },
    noktalar: { Y: [0, 1] },
    egriler: [{ f: (x) => 0.5 ** x, x: [-2.7, 3.5], vurgu: true, metin: "y = (1/2)^x", metinX: -2.3, metinYonu: 180 }],
    isaretli: ["Y"],
    etiketMetni: { Y: "1" },
    etiketYonu: { Y: 35 },
  },
  UstelLogSimetri: {
    aciklama: "y = 2 üzeri x ile y = log tabanı 2 x eğrileri y = x doğrusuna göre simetrik; (0, 1) ve (1, 0) noktaları",
    boyut: [290, 290],
    eksen: { x: [-3, 6.6], y: [-3, 6.6], o: false },
    noktalar: { A: [0, 1], B: [1, 0] },
    egriler: [
      { f: (x) => 2 ** x, x: [-3, 2.7], vurgu: true, metin: "y = 2^x", metinX: 2.4, metinYonu: 180 },
      { f: (x) => Math.log2(x), x: [0.125, 6.4], metin: "y = log_2 x", metinX: 5.6, metinYonu: 270 },
      { f: (x) => x, x: [-2.6, 6.2], kesik: true, metin: "y = x", metinX: 5.6, metinYonu: 180 },
    ],
    isaretli: ["A", "B"],
    etiketMetni: { A: "(0, 1)", B: "(1, 0)" },
    etiketYonu: { A: 160, B: 290 },
  },

  // ── TurevGrafik / TurevTanimFig ───────────────────────────────────────────
  TurevGrafik: {
    aciklama: "f(x) = x³ − 6x² + 9x + 1 eğrisi ve yerel maksimumu (1, 5) noktasındaki yatay teğet",
    boyut: EKSENLI,
    eksen: { x: [-0.8, 4.9], y: [-1.2, 7] },
    noktalar: { M: [1, 5], K: [1, 0] },
    egriler: [
      { f: kubik, x: [-0.4, 4.4], metin: "y = f(x)", metinX: 4.15, metinYonu: 0 },
      { f: () => 5, x: [0.05, 2.1], vurgu: true },
    ],
    dogrular: [{ p: ["M", "K"], kesik: true }],
    isaretli: ["M"],
    etiketMetni: { M: "(1, 5)", K: "1" },
    etiketYonu: { M: 90 },
  },
  TurevTanimFig: {
    aciklama: "f(x) = x² eğrisinde A(1, 1) ve B(3, 9) noktalarından geçen kesen ve A noktasındaki teğet",
    boyut: EKSENLI,
    // y is drawn at 0.4 scale so the parabola fits; labels give the true values.
    eksen: { x: [-0.9, 3.9], y: [-0.6, 4.5] },
    noktalar: { A: [1, 0.4], B: [3, 3.6] },
    egriler: [
      { f: (x) => 0.4 * x * x, x: [-0.7, 3.3], metin: "y = x^2", metinX: -0.5, metinYonu: 90 },
      { f: (x) => 0.4 * (4 * x - 3), x: [0.65, 3.5], vurgu: true, metin: "kesen", duz: true, metinX: 3.45, metinYonu: 0 },
      { f: (x) => 0.4 * (2 * x - 1), x: [0.3, 2.6], metin: "teğet", duz: true, metinX: 2.5, metinYonu: 0 },
    ],
    isaretli: ["A", "B"],
    etiketMetni: { A: "A(1, 1)", B: "B(3, 9)" },
    etiketYonu: { B: 160 },
  },

  // ── IntegralAlanFig / IntegralIkiEgriFig ──────────────────────────────────
  IntegralAlan: {
    aciklama: "y = f(x) eğrisi ile x ekseni arasında, x = a ile x = b arasındaki taranmış A alanı ve alanı yaklaşık veren dört dikdörtgen şerit",
    boyut: EKSENLI,
    eksen: { x: [-0.6, 6.2], y: [-0.6, 6.2] },
    noktalar: { Ka: [SERIT.a, 0], Kb: [SERIT.b, 0], Fa: [SERIT.a, alanF(SERIT.a)], Fb: [SERIT.b, alanF(SERIT.b)], Y: [2.475, 0.9], ...seritNoktalari },
    alanlar: [{ ust: alanF, x: [SERIT.a, SERIT.b] }],
    egriler: [{ f: alanF, x: [0, 5.6], vurgu: true, metin: "y = f(x)", metinX: 5.3, metinYonu: 180 }],
    dogrular: [{ p: ["Ka", "Fa"] }, { p: ["Kb", "Fb"] }, ...seritKenarlari],
    yazilar: [{ nokta: "Y", metin: "A", vurgu: true }],
    etiketMetni: { Ka: "a", Kb: "b" },
    etiketYonu: { Ka: 270, Kb: 270 },
    gizli: ["Fa", "Fb", "Y", ...Object.keys(seritNoktalari)],
  },
  IntegralIkiEgri: {
    aciklama: "y = x doğrusu üstte, y = x² parabolü altta; x = 0 ile x = 1 arasında aralarında kalan taranmış bölge",
    boyut: EKSENLI,
    eksen: { x: [-0.25, 1.5], y: [-0.25, 1.55] },
    noktalar: { K: [1, 1], K1: [1, 0], Y: [0.5, 0.375] },
    alanlar: [{ ust: (x) => x, alt: (x) => x * x, x: [0, 1] }],
    egriler: [
      { f: (x) => x, x: [-0.15, 1.4], metin: "y = x", metinX: 1.35, metinYonu: 180 },
      { f: (x) => x * x, x: [-0.2, 1.22], vurgu: true, metin: "y = x^2", metinX: 1.2, metinYonu: 0 },
    ],
    dogrular: [{ p: ["K", "K1"], kesik: true }],
    yazilar: [{ nokta: "Y", metin: "A", vurgu: true }],
    isaretli: ["K"],
    etiketMetni: { K1: "1" },
    etiketYonu: { K1: 270 },
    gizli: ["K", "Y"],
  },

  // ── LimitFig ──────────────────────────────────────────────────────────────
  SicramaFig: {
    aciklama: "x = 3'te sıçrayan parçalı fonksiyon: soldan limit 1 (dolu nokta), sağdan limit 5 (içi boş nokta)",
    boyut: EKSENLI,
    eksen: { x: [-0.6, 6.2], y: [-0.6, 7] },
    noktalar: { D: [3, 1], B: [3, 5], K: [3, 0], Y1: [0, 1], Y5: [0, 5] },
    egriler: [
      { f: (x) => 0.5 + x / 6, x: [0, 3] },
      { f: (x) => 5 + 0.4 * (x - 3), x: [3, 5.8] },
    ],
    dogrular: [{ p: ["K", "B"], kesik: true }, { p: ["Y1", "D"], kesik: true }, { p: ["Y5", "B"], kesik: true }],
    isaretli: ["D"],
    bosNoktalar: ["B"],
    etiketMetni: { K: "3", Y1: "1", Y5: "5" },
    etiketYonu: { K: 270, Y1: 180, Y5: 180 },
    gizli: ["D", "B"],
  },
  DelikFig: {
    aciklama: "y = x + 2 doğrusu; x = 2 noktasında içi boş daireyle gösterilen delik, limit 4",
    boyut: EKSENLI,
    eksen: { x: [-2.4, 4.6], y: [-0.8, 6.8] },
    noktalar: { H: [2, 4], K: [2, 0], Y: [0, 4] },
    egriler: [{ f: (x) => x + 2, x: [-2.2, 4.4], vurgu: true, metin: "y = x + 2", metinX: 4, metinYonu: 0 }],
    dogrular: [{ p: ["K", "H"], kesik: true }, { p: ["Y", "H"], kesik: true }],
    bosNoktalar: ["H"],
    etiketMetni: { K: "2", Y: "4" },
    etiketYonu: { K: 270, Y: 180 },
    gizli: ["H"],
  },
  AsimptotFig: {
    aciklama: "Düşey asimptotu x = a, yatay asimptotu y = L olan iki kollu rasyonel fonksiyon grafiği",
    boyut: EKSENLI,
    eksen: { x: [-3.6, 10], y: [-4.6, 9.4] },
    noktalar: { V1: [3, -4.4], V2: [3, 9.2], H1: [-3.4, 2], H2: [9.8, 2] },
    egriler: [
      { f: (x) => (2 * x + 1) / (x - 3), x: [-3.4, 2.99], vurgu: true },
      { f: (x) => (2 * x + 1) / (x - 3), x: [3.01, 9.8], vurgu: true },
    ],
    dogrular: [{ p: ["V1", "V2"], kesik: true }, { p: ["H1", "H2"], kesik: true }],
    etiketMetni: { V1: "x = a", H2: "y = L" },
    etiketYonu: { V1: 0, H2: 270 },
    gizli: ["V2", "H1"],
  },

  // ── FonksiyonFig ──────────────────────────────────────────────────────────
  DogruGrafik: {
    aciklama: "y = 2x + 1 doğrusal fonksiyon grafiği, y eksenini (0, 1) noktasında kesiyor",
    boyut: EKSENLI,
    eksen: { x: [-2.2, 3.4], y: [-2.4, 6.8] },
    noktalar: { Y: [0, 1] },
    egriler: [{ f: (x) => 2 * x + 1, x: [-1.6, 2.7], vurgu: true, metin: "y = 2x + 1", metinX: 2.5, metinYonu: 0 }],
    isaretli: ["Y"],
    etiketMetni: { Y: "(0, 1)" },
    etiketYonu: { Y: 0 },
  },
  GrafikOkuma: {
    aciklama: "y = 2x + 1 doğrusunda x = 2'den dikey, oradan yatay gidilerek f(2) = 5 değerinin okunması",
    boyut: EKSENLI,
    eksen: { x: [-2.2, 3.4], y: [-2.4, 6.8] },
    noktalar: { P: [2, 5], K: [2, 0], Y: [0, 5] },
    egriler: [{ f: (x) => 2 * x + 1, x: [-1.6, 2.7] }],
    dogrular: [{ p: ["K", "P"], kesik: true }, { p: ["P", "Y"], kesik: true }],
    isaretli: ["P"],
    etiketMetni: { P: "f(2) = 5", K: "2", Y: "5" },
    vurguluNoktalar: ["P"],
    etiketYonu: { P: 0, K: 270, Y: 180 },
  },

  // ── TersFonksiyonFig ──────────────────────────────────────────────────────
  TersSimetri: {
    aciklama: "f(x) = 2x − 1 ve tersi f⁻¹(x) = (x + 1)/2 doğruları y = x doğrusuna göre simetrik; (2, 3) noktası (3, 2) noktasına yansıyor",
    boyut: [290, 290],
    eksen: { x: [-1.6, 7.6], y: [-1.6, 7.6], o: false },
    noktalar: { P: [2, 3], Q: [3, 2] },
    egriler: [
      { f: (x) => 2 * x - 1, x: [-0.3, 4.2], vurgu: true, metin: "f", metinX: 4, metinYonu: 180 },
      { f: (x) => (x + 1) / 2, x: [-1.4, 7.4], metin: "f^{−1}", metinX: 7, metinYonu: 90 },
      { f: (x) => x, x: [-1.3, 7], kesik: true, metin: "y = x", metinX: 6.8, metinYonu: 180 },
    ],
    dogrular: [{ p: ["P", "Q"], kesik: true }],
    isaretli: ["P", "Q"],
    etiketMetni: { P: "(2, 3)", Q: "(3, 2)" },
    etiketYonu: { P: 160, Q: 300 },
  },

  // ── MutlakDegerFig ────────────────────────────────────────────────────────
  TemelV: {
    aciklama: "y = |x| grafiği, tepe noktası orijin",
    boyut: EKSENLI,
    eksen: { x: [-4.6, 4.8], y: [-1, 4.8] },
    noktalar: {},
    egriler: [{ f: Math.abs, x: [-4.2, 4.2], vurgu: true, metin: "y = |x|", metinX: 3.6, metinYonu: 0 }],
  },
  OtelenmisV: {
    aciklama: "y = |x − 2| − 1 grafiği, tepe noktası (2, −1)",
    boyut: EKSENLI,
    eksen: { x: [-2, 6.4], y: [-1.9, 4.6] },
    noktalar: { T: [2, -1] },
    egriler: [{ f: (x) => Math.abs(x - 2) - 1, x: [-1.4, 5.5], vurgu: true, metin: "y = |x − 2| − 1", metinX: 5.3, metinYonu: 0 }],
    isaretli: ["T"],
    etiketMetni: { T: "(2, −1)" },
    etiketYonu: { T: 270 },
  },

  // ── DonusumGrafikFig ──────────────────────────────────────────────────────
  DikeyOteleme: {
    aciklama: "y = x² grafiği ile 2 birim yukarı ötelenmiş y = x² + 2 grafiği",
    boyut: EKSENLI,
    eksen: { x: [-3, 3.2], y: [-0.8, 7.4] },
    noktalar: { T: [0, 2] },
    egriler: [
      { f: (x) => x * x, x: [-2.5, 2.5], metin: "y = x^2", metinX: 2.4, metinYonu: 0 },
      { f: (x) => x * x + 2, x: [-2.2, 2.2], vurgu: true, metin: "y = x^2 + 2", metinX: -2.1, metinYonu: 180 },
    ],
    isaretli: ["T"],
    etiketMetni: { T: "2" },
    etiketYonu: { T: 0 },
  },
  YansimaXEkseni: {
    aciklama: "y = x² grafiği ve x eksenine göre yansıması y = −x² grafiği",
    boyut: EKSENLI,
    eksen: { x: [-3, 3.2], y: [-4.8, 4.8], o: false },
    noktalar: {},
    egriler: [
      { f: (x) => x * x, x: [-2.1, 2.1], metin: "y = x^2", metinX: 2, metinYonu: 0 },
      { f: (x) => -x * x, x: [-2.1, 2.1], vurgu: true, metin: "y = −x^2", metinX: 2, metinYonu: 0 },
    ],
  },

  // ── TrigonometriFig ───────────────────────────────────────────────────────
  SinusGrafik: {
    aciklama: "y = sin x grafiği, 0'dan 2π'ye bir tam periyot; en büyük değer 1, en küçük değer −1",
    boyut: [340, 200],
    eksen: { x: [-0.7, 7.3], y: [-2.5, 2.5] },
    noktalar: trigTikler.noktalar,
    egriler: [{ f: (x) => TRIG_K * Math.sin(x), x: [0, 2 * Math.PI], vurgu: true, metin: "y = sin x", metinX: 0.9, metinYonu: 120 }],
    dogrular: trigTikler.dogrular,
    etiketMetni: trigTikler.etiketMetni,
    etiketYonu: { X1: 270, X2: 90, X3: 90, X4: 270, Y1: 180, Y2: 180 },
    gizli: trigTikler.gizli,
  },
  KosinusGrafik: {
    aciklama: "y = cos x grafiği, 0'dan 2π'ye bir tam periyot; 1'den başlıyor",
    boyut: [340, 200],
    eksen: { x: [-0.7, 7.3], y: [-2.5, 2.5] },
    noktalar: trigTikler.noktalar,
    egriler: [{ f: (x) => TRIG_K * Math.cos(x), x: [0, 2 * Math.PI], vurgu: true, metin: "y = cos x", metinX: 2.4, metinYonu: 0 }],
    dogrular: trigTikler.dogrular,
    etiketMetni: trigTikler.etiketMetni,
    etiketYonu: { X2: 270, X4: 90, Y1: 180, Y2: 180 },
    gizli: trigTikler.gizli,
  },
} satisfies Record<string, Sekil>;

export type DersSekliAdi = keyof typeof DERS_SEKILLERI;
