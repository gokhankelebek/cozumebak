// Figures for the "Açılar ve Doğrular" lesson (TYT).
// Each export returns a self-contained, schematic SVG. Colors use presentation
// attributes only: main #0e1b33, accent #e5492b, faint #8a93a6.

// (1) Tümler (toplam 90°) ve bütünler (toplam 180°) açıları.
export function TumlerButunler() {
  return (
    <svg viewBox="0 0 520 230" role="img" aria-label="Tümler açılar toplamı doksan derece, bütünler açılar toplamı yüz seksen derece">
      <text x="120" y="24" fontSize="14" fontWeight="700" fill="#0e1b33" textAnchor="middle">Tümler ( 90° )</text>
      <text x="380" y="24" fontSize="14" fontWeight="700" fill="#0e1b33" textAnchor="middle">Bütünler ( 180° )</text>

      {/* Tümler: dik açının iki parçası */}
      <line x1="40" y1="190" x2="210" y2="190" stroke="#0e1b33" strokeWidth="2" />
      <line x1="40" y1="190" x2="40" y2="60" stroke="#0e1b33" strokeWidth="2" />
      <line x1="40" y1="190" x2="150" y2="80" stroke="#e5492b" strokeWidth="2" />
      <rect x="40" y="175" width="15" height="15" fill="none" stroke="#8a93a6" strokeWidth="1.5" />
      <text x="78" y="150" fontSize="14" fill="#e5492b" textAnchor="middle">α</text>
      <text x="120" y="185" fontSize="14" fill="#0e1b33" textAnchor="middle">β</text>
      <text x="125" y="220" fontSize="13" fill="#8a93a6" textAnchor="middle">α + β = 90°</text>

      {/* Bütünler: doğru açının iki parçası */}
      <line x1="280" y1="190" x2="490" y2="190" stroke="#0e1b33" strokeWidth="2" />
      <line x1="385" y1="190" x2="335" y2="80" stroke="#e5492b" strokeWidth="2" />
      <text x="350" y="155" fontSize="14" fill="#e5492b" textAnchor="middle">α</text>
      <text x="430" y="178" fontSize="14" fill="#0e1b33" textAnchor="middle">β</text>
      <text x="385" y="220" fontSize="13" fill="#8a93a6" textAnchor="middle">α + β = 180°</text>
    </svg>
  );
}

// (2) Kesişen iki doğru: ters açılar eşittir, komşu açılar bütünlerdir.
export function TersAcilar() {
  return (
    <svg viewBox="0 0 360 260" role="img" aria-label="Kesişen iki doğruda karşılıklı ters açılar eşittir">
      <line x1="40" y1="60" x2="320" y2="200" stroke="#0e1b33" strokeWidth="2" />
      <line x1="40" y1="200" x2="320" y2="60" stroke="#0e1b33" strokeWidth="2" />
      <circle cx="180" cy="130" r="3" fill="#0e1b33" />

      <text x="180" y="90" fontSize="15" fill="#0e1b33" textAnchor="middle">a</text>
      <text x="180" y="185" fontSize="15" fill="#0e1b33" textAnchor="middle">a</text>
      <text x="115" y="135" fontSize="15" fill="#e5492b" textAnchor="middle">b</text>
      <text x="245" y="135" fontSize="15" fill="#e5492b" textAnchor="middle">b</text>

      <text x="180" y="240" fontSize="13" fill="#8a93a6" textAnchor="middle">Ters açılar eşit, komşu açılar bütünler (a + b = 180°)</text>
    </svg>
  );
}

// (3) Bir kesenin kestiği iki paralel doğru: yöndeş ve iç ters açılar.
export function ParalelKesen() {
  return (
    <svg viewBox="0 0 420 290" role="img" aria-label="Bir kesenin kestiği iki paralel doğruda yöndeş ve iç ters açılar">
      {/* iki paralel doğru */}
      <line x1="30" y1="90" x2="390" y2="90" stroke="#0e1b33" strokeWidth="2" />
      <line x1="30" y1="210" x2="390" y2="210" stroke="#0e1b33" strokeWidth="2" />
      {/* kesen */}
      <line x1="120" y1="40" x2="300" y2="260" stroke="#e5492b" strokeWidth="2" />

      {/* yön okları (paralellik) */}
      <polygon points="360,86 350,82 350,90" fill="#8a93a6" />
      <polygon points="360,206 350,202 350,210" fill="#8a93a6" />

      {/* üst kesişim: d1 */}
      <text x="195" y="80" fontSize="14" fill="#0e1b33" textAnchor="middle">1</text>
      <text x="150" y="108" fontSize="14" fill="#0e1b33" textAnchor="middle">2</text>
      <text x="210" y="120" fontSize="14" fill="#0e1b33" textAnchor="middle">3</text>

      {/* alt kesişim: d2 */}
      <text x="263" y="200" fontSize="14" fill="#e5492b" textAnchor="middle">1'</text>
      <text x="218" y="228" fontSize="14" fill="#e5492b" textAnchor="middle">2'</text>
      <text x="278" y="240" fontSize="14" fill="#e5492b" textAnchor="middle">3'</text>

      <text x="60" y="84" fontSize="13" fill="#8a93a6" textAnchor="middle">d₁</text>
      <text x="60" y="204" fontSize="13" fill="#8a93a6" textAnchor="middle">d₂</text>
      <text x="210" y="282" fontSize="13" fill="#8a93a6" textAnchor="middle">d₁ ∥ d₂ : yöndeş ( 1 = 1' ), iç ters ( 3 = 2' )</text>
    </svg>
  );
}
