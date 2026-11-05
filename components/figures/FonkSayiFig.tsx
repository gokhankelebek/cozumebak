// Figures for the TYT lesson "Fonksiyon Sayısı".
// Conventions: text/main strokes #0e1b33, accent #e5492b, secondary #8a93a6.
// All coordinates are hand-computed; no external libraries.

// (1) Her eleman bir görüntü seçer. A = {a, b, c}, B = {1, 2, 3, 4}.
// A ellipse centre (90,110), elements at y = 55, 110, 165 (x = 90).
// B ellipse centre (270,110), elements at y = 40, 86, 132, 178 (x = 270).
// Grey dashed lines: every option (3 · 4 = 12 lines).
// Red arrows: one chosen function a→2, b→2, c→4.
export function FonkSayiSecim() {
  const aY = [55, 110, 165];
  const bY = [40, 86, 132, 178];
  const chosen: [number, number][] = [
    [55, 86],
    [110, 86],
    [165, 178],
  ];
  return (
    <svg
      viewBox="0 0 360 236"
      role="img"
      aria-label="A kümesindeki a, b, c elemanlarının her biri B kümesindeki 1, 2, 3, 4 elemanlarından birini seçer. Gri kesik çizgiler bütün seçenekleri, kırmızı oklar seçilmiş bir fonksiyonu gösterir: a 2'ye, b 2'ye, c 4'e gider. Toplam 4 çarpı 4 çarpı 4 eşittir 64 fonksiyon."
    >
      <defs>
        <marker id="fs-ok-kirmizi" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#e5492b" />
        </marker>
      </defs>
      <ellipse cx="90" cy="110" rx="48" ry="82" fill="none" stroke="#0e1b33" strokeWidth="1.5" />
      <ellipse cx="270" cy="110" rx="48" ry="94" fill="none" stroke="#0e1b33" strokeWidth="1.5" />
      <text x="84" y="20" fontSize="14" fontWeight="700" fill="#0e1b33">A</text>
      <text x="264" y="10" fontSize="14" fontWeight="700" fill="#0e1b33">B</text>

      {/* every option, dashed grey */}
      {aY.map((ya) =>
        bY.map((yb) => (
          <line key={`o${ya}-${yb}`} x1="98" y1={ya} x2="262" y2={yb} stroke="#8a93a6" strokeWidth="0.9" strokeDasharray="3 3" />
        )),
      )}

      {/* one chosen function, red arrows */}
      {chosen.map(([ya, yb]) => (
        <line key={`c${ya}`} x1="98" y1={ya} x2="258" y2={yb} stroke="#e5492b" strokeWidth="2" markerEnd="url(#fs-ok-kirmizi)" />
      ))}

      {/* A elements */}
      {aY.map((y, i) => (
        <g key={`a${y}`}>
          <circle cx="90" cy={y} r="3.5" fill="#0e1b33" />
          <text x="66" y={y + 4} fontSize="13" fill="#0e1b33">{["a", "b", "c"][i]}</text>
        </g>
      ))}
      {/* B elements */}
      {bY.map((y, i) => (
        <g key={`b${y}`}>
          <circle cx="270" cy={y} r="3.5" fill="#0e1b33" />
          <text x="280" y={y + 4} fontSize="13" fill="#0e1b33">{i + 1}</text>
        </g>
      ))}

      <text x="180" y="226" fontSize="12" fill="#0e1b33" textAnchor="middle">
        her eleman 4 seçenek: 4 · 4 · 4 = 64
      </text>
    </svg>
  );
}

// (2) Örten fonksiyonu gruplayarak sayma: A = {1, 2, 3, 4} → B = {a, b, c}.
// A elements at x = 80, y = 40, 80, 120, 160. B elements at x = 280, y = 60, 100, 140.
// Dashed rounded box around 1 and 2 (the pair that shares an image):
// x 62..98, y 26..94. Block arrow from (100,60) to b (272,100).
// 3 → c (y 140), 4 → a (y 60).
export function FonkSayiOrtenGrup() {
  return (
    <svg
      viewBox="0 0 360 250"
      role="img"
      aria-label="Dört elemanlı A kümesinden üç elemanlı B kümesine örten fonksiyon. 1 ve 2 elemanları kesik çizgili bir kutuyla aynı görüntüyü paylaşan ikili olarak gruplanmış ve b'ye gidiyor; 3 elemanı c'ye, 4 elemanı a'ya gidiyor. Birinci adımda ikili 4'ün 2'li kombinasyonu yani 6 yolla, ikinci adımda üç blok üç görüntüye 3 faktöriyel yani 6 yolla eşlenir."
    >
      <defs>
        <marker id="fs-ok-koyu" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#0e1b33" />
        </marker>
        <marker id="fs-ok-vurgu" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#e5492b" />
        </marker>
      </defs>
      <ellipse cx="80" cy="100" rx="44" ry="86" fill="none" stroke="#0e1b33" strokeWidth="1.5" />
      <ellipse cx="280" cy="100" rx="44" ry="70" fill="none" stroke="#0e1b33" strokeWidth="1.5" />
      <text x="74" y="10" fontSize="14" fontWeight="700" fill="#0e1b33">A</text>
      <text x="274" y="24" fontSize="14" fontWeight="700" fill="#0e1b33">B</text>

      {/* pair block */}
      <rect x="62" y="26" width="36" height="68" rx="10" fill="none" stroke="#e5492b" strokeWidth="1.5" strokeDasharray="5 3" />

      {/* arrows */}
      <line x1="100" y1="60" x2="268" y2="99" stroke="#e5492b" strokeWidth="2" markerEnd="url(#fs-ok-vurgu)" />
      <line x1="88" y1="120" x2="268" y2="139" stroke="#0e1b33" strokeWidth="1.6" markerEnd="url(#fs-ok-koyu)" />
      <line x1="88" y1="160" x2="269" y2="63" stroke="#0e1b33" strokeWidth="1.6" markerEnd="url(#fs-ok-koyu)" />

      {/* A elements */}
      {[40, 80, 120, 160].map((y, i) => (
        <g key={`a${y}`}>
          <circle cx="80" cy={y} r="3.5" fill="#0e1b33" />
          <text x="56" y={y + 4} fontSize="13" fill="#0e1b33" textAnchor="end">{i + 1}</text>
        </g>
      ))}
      {/* B elements */}
      {[60, 100, 140].map((y, i) => (
        <g key={`b${y}`}>
          <circle cx="280" cy={y} r="3.5" fill="#0e1b33" />
          <text x="292" y={y + 4} fontSize="13" fill="#0e1b33">{["a", "b", "c"][i]}</text>
        </g>
      ))}

      <text x="20" y="216" fontSize="12" fill="#e5492b">1. adım: ikiliyi seç → C(4, 2) = 6</text>
      <text x="20" y="238" fontSize="12" fill="#0e1b33">2. adım: üç bloğu a, b, c'ye eşle → 3! = 6</text>
    </svg>
  );
}

// (3) "Önce her kutuya bir top koy" yöntemi neden çift sayar?
// Two rows of three boxes (K1, K2, K3). Boxes: x = 90, 170, 250; width 64; height 48.
// Row 1 y = 34..82, row 2 y = 112..160. Ball radius 11.
// Dark balls = 1. tur (her kutuya bir), red balls = 2. tur (kalan top).
// Yol 1: 1→K1, 2→K2, 3→K3, sonra 4→K1. Yol 2: 4→K1, 2→K2, 3→K3, sonra 1→K1.
// Both end with K1 = {1, 4}, K2 = {2}, K3 = {3}.
export function FonkSayiCiftSayim() {
  const boxX = [90, 170, 250];
  const rows = [
    { y: 34, label: "Yol 1", k1: [1, 4] },
    { y: 112, label: "Yol 2", k1: [4, 1] },
  ];
  return (
    <svg
      viewBox="0 0 400 214"
      role="img"
      aria-label="Önce her kutuya bir top koyma yönteminin çift sayımı. Yol 1'de ilk turda 1, 2, 3 numaralı toplar K1, K2, K3 kutularına konur, sonra 4 numaralı top K1'e eklenir. Yol 2'de ilk turda 4, 2, 3 numaralı toplar konur, sonra 1 numaralı top K1'e eklenir. İki yol da aynı dağılımla biter: K1'de 1 ve 4, K2'de 2, K3'te 3. Yöntem bu dağılımı iki kez sayar."
    >
      {boxX.map((x, i) => (
        <text key={`h${x}`} x={x + 32} y="24" fontSize="12" fontWeight="700" fill="#0e1b33" textAnchor="middle">
          K{i + 1}
        </text>
      ))}
      {rows.map((r) => (
        <g key={r.label}>
          <text x="14" y={r.y + 29} fontSize="12" fill="#0e1b33" fontWeight="700">{r.label}</text>
          {boxX.map((x) => (
            <rect key={`r${r.y}-${x}`} x={x} y={r.y} width="64" height="48" rx="4" fill="none" stroke="#0e1b33" strokeWidth="1.4" />
          ))}
          {/* K1: first-round ball (dark) and second-round ball (red) */}
          <circle cx="108" cy={r.y + 24} r="11" fill="#0e1b33" />
          <text x="108" y={r.y + 28} fontSize="12" fill="#ffffff" textAnchor="middle">{r.k1[0]}</text>
          <circle cx="136" cy={r.y + 24} r="11" fill="#e5492b" />
          <text x="136" y={r.y + 28} fontSize="12" fill="#ffffff" textAnchor="middle">{r.k1[1]}</text>
          {/* K2, K3 */}
          <circle cx="202" cy={r.y + 24} r="11" fill="#0e1b33" />
          <text x="202" y={r.y + 28} fontSize="12" fill="#ffffff" textAnchor="middle">2</text>
          <circle cx="282" cy={r.y + 24} r="11" fill="#0e1b33" />
          <text x="282" y={r.y + 28} fontSize="12" fill="#ffffff" textAnchor="middle">3</text>
        </g>
      ))}
      {/* brace-like bracket on the right joining both rows */}
      <path d="M326 58 L340 58 L340 136 L326 136" fill="none" stroke="#8a93a6" strokeWidth="1.4" />
      <text x="346" y="93" fontSize="11" fill="#0e1b33">aynı</text>
      <text x="346" y="107" fontSize="11" fill="#0e1b33">dağılım</text>

      {/* legend */}
      <circle cx="20" cy="190" r="6" fill="#0e1b33" />
      <text x="32" y="194" fontSize="11" fill="#0e1b33">1. tur: her kutuya bir top</text>
      <circle cx="200" cy="190" r="6" fill="#e5492b" />
      <text x="212" y="194" fontSize="11" fill="#0e1b33">2. tur: kalan top</text>
    </svg>
  );
}
