// Figures for the TYT "Gruplara Ayırma ve Dağıtma" lesson.
// Conventions: text/lines dark #0e1b33, accent #e5492b, grid/axis grey #8a93a6.
// All coordinates are hand-computed; no external libraries.

const KOYU = "#0e1b33";
const VURGU = "#e5492b";
const GRI = "#8a93a6";

// ---------------------------------------------------------------------------
// 1) Dört durum tablosu: 3 nesne, 2 kutu, boş kutuya izin var.
// Label column x 0..108. Cells: columns x 110..310 and 316..516 (width 200),
// rows y 46..186 and 192..332 (height 140). Header row y 8..40.
// Inside a cell: lines start at cell top + 26, step 22; count at bottom right.
const SUT = [110, 316];
const SAT = [46, 192];

function Hucre({
  x,
  y,
  sol,
  sag,
  sayi,
}: {
  x: number;
  y: number;
  sol: string[];
  sag: string[];
  sayi: string;
}) {
  return (
    <g>
      <rect x={x} y={y} width="200" height="140" rx="6" fill="none" stroke={GRI} strokeWidth="1.2" />
      {sol.map((s, i) => (
        <text key={`s${i}`} x={x + 14} y={y + 26 + i * 22} fontSize="12" fill={KOYU}>
          {s}
        </text>
      ))}
      {sag.map((s, i) => (
        <text key={`r${i}`} x={x + 108} y={y + 26 + i * 22} fontSize="12" fill={KOYU}>
          {s}
        </text>
      ))}
      <text x={x + 186} y={y + 128} fontSize="14" fontWeight="700" textAnchor="end" fill={VURGU}>
        {sayi}
      </text>
    </g>
  );
}

export function GadDortDurum() {
  return (
    <svg
      viewBox="0 0 520 340"
      role="img"
      aria-label="Dört durum tablosu: 3 nesne 2 kutuya, kutular boş kalabilir. Nesneler farklı ve kutular farklıysa 8 dağıtım, nesneler farklı ve kutular özdeşse 4, nesneler özdeş ve kutular farklıysa 4, nesneler özdeş ve kutular özdeşse 2 dağıtım vardır"
    >
      {/* column headers */}
      <text x={SUT[0] + 100} y="22" fontSize="12" fontWeight="700" textAnchor="middle" fill={KOYU}>
        Kutular farklı
      </text>
      <text x={SUT[0] + 100} y="37" fontSize="11" textAnchor="middle" fill={GRI}>
        1. kutu | 2. kutu
      </text>
      <text x={SUT[1] + 100} y="22" fontSize="12" fontWeight="700" textAnchor="middle" fill={KOYU}>
        Kutular özdeş
      </text>
      <text x={SUT[1] + 100} y="37" fontSize="11" textAnchor="middle" fill={GRI}>
        kutuların adı yok
      </text>

      {/* row headers */}
      <text x="4" y={SAT[0] + 62} fontSize="12" fontWeight="700" fill={KOYU}>
        Nesneler
      </text>
      <text x="4" y={SAT[0] + 78} fontSize="12" fontWeight="700" fill={KOYU}>
        farklı
      </text>
      <text x="4" y={SAT[0] + 96} fontSize="11" fill={GRI}>
        (a, b, c)
      </text>
      <text x="4" y={SAT[1] + 62} fontSize="12" fontWeight="700" fill={KOYU}>
        Nesneler
      </text>
      <text x="4" y={SAT[1] + 78} fontSize="12" fontWeight="700" fill={KOYU}>
        özdeş
      </text>
      <text x="4" y={SAT[1] + 96} fontSize="11" fill={GRI}>
        (● ● ●)
      </text>

      <Hucre
        x={SUT[0]}
        y={SAT[0]}
        sol={["abc | –", "ab | c", "ac | b", "bc | a"]}
        sag={["c | ab", "b | ac", "a | bc", "– | abc"]}
        sayi="8"
      />
      <Hucre
        x={SUT[1]}
        y={SAT[0]}
        sol={["{abc} { }", "{ab} {c}", "{ac} {b}", "{bc} {a}"]}
        sag={[]}
        sayi="4"
      />
      <Hucre
        x={SUT[0]}
        y={SAT[1]}
        sol={["●●● | –", "●● | ●", "● | ●●", "– | ●●●"]}
        sag={[]}
        sayi="4"
      />
      <Hucre x={SUT[1]} y={SAT[1]} sol={["{●●●} { }", "{●●} {●}"]} sag={[]} sayi="2" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// 2) Adlı gruplardan adsız gruplara: 4 kişi (A, B, C, D), 2'şer kişilik.
// Left list (Mavi | Kırmızı) rows at y = 56, 80 | 118, 142 | 180, 204.
// Each pair converges to a right item at y = 68, 130, 192.
// Arrow lines from x=150 to x=238, arrowhead tip at x=248.
const CIFTLER: { sol: [string, string]; sag: string; y: [number, number]; yHedef: number }[] = [
  { sol: ["AB | CD", "CD | AB"], sag: "{AB, CD}", y: [56, 80], yHedef: 68 },
  { sol: ["AC | BD", "BD | AC"], sag: "{AC, BD}", y: [118, 142], yHedef: 130 },
  { sol: ["AD | BC", "BC | AD"], sag: "{AD, BC}", y: [180, 204], yHedef: 192 },
];

export function GadAdliAdsiz() {
  return (
    <svg
      viewBox="0 0 400 236"
      role="img"
      aria-label="Dört kişinin Mavi ve Kırmızı adlı iki takıma ikişer ikişer ayrılmasının 6 yolu, takım adları silinince ikişer ikişer eşleşerek 3 adsız ayırmaya iner"
    >
      <text x="30" y="24" fontSize="12" fontWeight="700" fill={KOYU}>
        Mavi | Kırmızı
      </text>
      <text x="30" y="38" fontSize="11" fill={GRI}>
        adlı: 6 ayırma
      </text>
      <text x="258" y="24" fontSize="12" fontWeight="700" fill={VURGU}>
        Adsız gruplar
      </text>
      <text x="258" y="38" fontSize="11" fill={GRI}>
        6 ÷ 2! = 3 ayırma
      </text>
      {CIFTLER.map((c, i) => (
        <g key={i}>
          <text x="40" y={c.y[0] + 4} fontSize="13" fill={KOYU}>
            {c.sol[0]}
          </text>
          <text x="40" y={c.y[1] + 4} fontSize="13" fill={KOYU}>
            {c.sol[1]}
          </text>
          <line x1="150" y1={c.y[0]} x2="238" y2={c.yHedef} stroke={GRI} strokeWidth="1.3" />
          <line x1="150" y1={c.y[1]} x2="238" y2={c.yHedef} stroke={GRI} strokeWidth="1.3" />
          <polygon points={`248,${c.yHedef} 238,${c.yHedef - 5} 238,${c.yHedef + 5}`} fill={GRI} />
          <text x="258" y={c.yHedef + 5} fontSize="13" fontWeight="700" fill={VURGU}>
            {c.sag}
          </text>
        </g>
      ))}
    </svg>
  );
}

// ---------------------------------------------------------------------------
// 3) Bayrak direkleri: yeni bayrağın asılabileceği yerler.
// Poles at x = 80, 200, 320, from y = 36 to y = 206. Flags hang to the right of
// the pole: width 36, height 22. Pole 1: a (56..78), b (94..116);
// pole 2: c (56..78); pole 3: empty. Free places (accent circles, r = 5) at
// y = 46 (top), between flags, and under the last flag.
const DIREKLER = [80, 200, 320];

function Bayrak({ x, y, ad }: { x: number; y: number; ad: string }) {
  return (
    <g>
      <rect x={x} y={y} width="36" height="22" fill="#ffffff" stroke={KOYU} strokeWidth="1.4" />
      <text x={x + 18} y={y + 16} fontSize="13" fontWeight="700" textAnchor="middle" fill={KOYU}>
        {ad}
      </text>
    </g>
  );
}

function Yer({ x, y }: { x: number; y: number }) {
  return <circle cx={x + 18} cy={y} r="5" fill="#ffffff" stroke={VURGU} strokeWidth="1.8" />;
}

export function GadBayrakYerleri() {
  return (
    <svg
      viewBox="0 0 400 262"
      role="img"
      aria-label="Üç direk: birinci direkte a ve b bayrakları, ikinci direkte c bayrağı var, üçüncü direk boş. Dördüncü bayrak birinci direkte 3, ikinci direkte 2, üçüncü direkte 1 yere asılabilir; toplam 6 yer, yani direk sayısı artı asılmış bayrak sayısı"
    >
      {DIREKLER.map((x, i) => (
        <g key={i}>
          <line x1={x} y1="36" x2={x} y2="206" stroke={KOYU} strokeWidth="2.4" />
          <line x1={x - 16} y1="206" x2={x + 16} y2="206" stroke={KOYU} strokeWidth="2.4" />
          <text x={x} y="226" fontSize="12" textAnchor="middle" fill={KOYU}>
            {`${i + 1}. direk`}
          </text>
        </g>
      ))}

      {/* pole 1: a, b and three free places */}
      <Yer x={DIREKLER[0]} y={46} />
      <Bayrak x={DIREKLER[0]} y={56} ad="a" />
      <Yer x={DIREKLER[0]} y={86} />
      <Bayrak x={DIREKLER[0]} y={94} ad="b" />
      <Yer x={DIREKLER[0]} y={126} />
      <text x={DIREKLER[0] + 46} y="130" fontSize="12" fontWeight="700" fill={VURGU}>
        3 yer
      </text>

      {/* pole 2: c and two free places */}
      <Yer x={DIREKLER[1]} y={46} />
      <Bayrak x={DIREKLER[1]} y={56} ad="c" />
      <Yer x={DIREKLER[1]} y={88} />
      <text x={DIREKLER[1] + 46} y="92" fontSize="12" fontWeight="700" fill={VURGU}>
        2 yer
      </text>

      {/* pole 3: empty, one free place */}
      <Yer x={DIREKLER[2]} y={46} />
      <text x={DIREKLER[2] + 32} y="50" fontSize="12" fontWeight="700" fill={VURGU}>
        1 yer
      </text>

      <text x="200" y="252" fontSize="12" textAnchor="middle" fill={KOYU}>
        4. bayrak için 3 + 2 + 1 = 6 yer (3 direk + 3 bayrak)
      </text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// 4) Çubuk–yıldız: 4 özdeş şeker (yıldız), 2 çubuk (ayraç), 3 çocuk.
// Six boxes per row: x = 20 + 32·i (i = 0..5), width 28, rows y = 40, 88, 136.
// Stars as accent text, bars as dark vertical lines centred in the box.
// Translation text starts at x = 232.
const SATIRLAR: { dizi: string[]; anlam: string }[] = [
  { dizi: ["*", "*", "|", "*", "|", "*"], anlam: "Ayşe 2, Bora 1, Cem 1" },
  { dizi: ["|", "*", "*", "*", "*", "|"], anlam: "Ayşe 0, Bora 4, Cem 0" },
  { dizi: ["*", "*", "*", "*", "|", "|"], anlam: "Ayşe 4, Bora 0, Cem 0" },
];
const SATIR_Y = [40, 88, 136];

export function GadCubukYildiz() {
  return (
    <svg
      viewBox="0 0 400 180"
      role="img"
      aria-label="Çubuk ve yıldız gösterimi: 4 yıldız ve 2 çubuktan oluşan her dizi bir dağıtımdır. Yıldız yıldız çubuk yıldız çubuk yıldız dizisi Ayşe 2, Bora 1, Cem 1 demektir; çubuk, dört yıldız, çubuk dizisi Ayşe 0, Bora 4, Cem 0; dört yıldız ve iki çubuk dizisi Ayşe 4, Bora 0, Cem 0 demektir"
    >
      <text x="20" y="22" fontSize="12" fontWeight="700" fill={KOYU}>
        4 yıldız + 2 çubuk
      </text>
      <text x="232" y="22" fontSize="12" fontWeight="700" fill={VURGU}>
        Dağıtım
      </text>
      {SATIRLAR.map((s, r) => (
        <g key={r}>
          {s.dizi.map((h, i) => {
            const x = 20 + 32 * i;
            const y = SATIR_Y[r];
            return (
              <g key={i}>
                <rect x={x} y={y} width="28" height="28" rx="3" fill="none" stroke={GRI} strokeWidth="1" />
                {h === "*" ? (
                  <text x={x + 14} y={y + 20} fontSize="16" textAnchor="middle" fill={VURGU}>
                    ★
                  </text>
                ) : (
                  <line x1={x + 14} y1={y + 4} x2={x + 14} y2={y + 24} stroke={KOYU} strokeWidth="3" />
                )}
              </g>
            );
          })}
          <text x="232" y={SATIR_Y[r] + 19} fontSize="12" fill={KOYU}>
            {s.anlam}
          </text>
        </g>
      ))}
    </svg>
  );
}
