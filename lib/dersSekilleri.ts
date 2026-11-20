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
} satisfies Record<string, Sekil>;

export type DersSekliAdi = keyof typeof DERS_SEKILLERI;
