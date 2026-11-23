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
} satisfies Record<string, Sekil>;

export type DersSekliAdi = keyof typeof DERS_SEKILLERI;
