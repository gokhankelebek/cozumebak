// Figures for the "Analitik Geometri (TYT)" lesson. Coordinates are
// pre-computed so each figure is mathematically faithful. Named exports are
// imported directly in the MDX.

// (1) Koordinat ekseni üzerinde A(1,2) ve B(4,6); aralarındaki doğru parçası.
// Ölçek: 1 birim = 28 px; orijin (40, 180). x: 40 + 28*x, y: 180 - 28*y.
export function IkiNokta() {
  return (
    <svg viewBox="0 0 240 220" role="img" aria-label="Koordinat düzleminde A ve B noktaları ve aralarındaki doğru parçası">
      <line x1="20" y1="180" x2="225" y2="180" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="40" y1="20" x2="40" y2="200" stroke="#8a93a6" strokeWidth="1.5" />
      <text x="215" y="196" fontSize="12" fill="#0e1b33">x</text>
      <text x="26" y="30" fontSize="12" fill="#0e1b33">y</text>
      <text x="32" y="194" fontSize="11" fill="#8a93a6">O</text>
      <line x1="68" y1="124" x2="152" y2="12" stroke="#0e1b33" strokeWidth="2" />
      <circle cx="68" cy="124" r="3" fill="#e5492b" />
      <circle cx="152" cy="12" r="3" fill="#e5492b" />
      <text x="50" y="120" fontSize="12" fill="#0e1b33">A(1,2)</text>
      <text x="158" y="16" fontSize="12" fill="#0e1b33">B(4,6)</text>
    </svg>
  );
}

// (2) Bir doğru ve eğimini gösteren dik üçgen: yatay Δx ve dikey Δy kesik çizgi.
// A(1,2) -> B(4,8), eğim 2. Ölçek: 1 birim = 24 px; orijin (40, 200).
export function Egim() {
  return (
    <svg viewBox="0 0 260 230" role="img" aria-label="Bir doğru ile eğimini gösteren dik üçgen, yatay delta x ve dikey delta y">
      <line x1="20" y1="200" x2="245" y2="200" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="40" y1="20" x2="40" y2="220" stroke="#8a93a6" strokeWidth="1.5" />
      <text x="235" y="216" fontSize="12" fill="#0e1b33">x</text>
      <text x="26" y="30" fontSize="12" fill="#0e1b33">y</text>
      <text x="32" y="214" fontSize="11" fill="#8a93a6">O</text>
      <line x1="52" y1="164" x2="148" y2="20" stroke="#0e1b33" strokeWidth="2" />
      <line x1="64" y1="152" x2="160" y2="152" stroke="#e5492b" strokeWidth="1.5" strokeDasharray="5 4" />
      <line x1="160" y1="152" x2="160" y2="8" stroke="#e5492b" strokeWidth="1.5" strokeDasharray="5 4" />
      <circle cx="64" cy="152" r="3" fill="#e5492b" />
      <circle cx="160" cy="8" r="3" fill="#e5492b" />
      <text x="44" y="148" fontSize="12" fill="#0e1b33">A(1,2)</text>
      <text x="166" y="12" fontSize="12" fill="#0e1b33">B(4,8)</text>
      <text x="96" y="168" fontSize="12" fill="#e5492b">Δx</text>
      <text x="166" y="88" fontSize="12" fill="#e5492b">Δy</text>
    </svg>
  );
}
