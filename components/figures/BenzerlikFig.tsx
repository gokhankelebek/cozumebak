// Figures for the lesson "Üçgende Benzerlik ve Alan".
// Schematic and clean; correct labels matter more than exact scale.

export function BenzerUcgenler() {
  return (
    <svg viewBox="0 0 460 240" role="img" aria-label="Büyük ve küçük iki benzer üçgen, karşılıklı kenarları orantılı">
      <polygon points="30,200 250,200 90,40" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <text x="20" y="214" fontSize="14" fill="#0e1b33" textAnchor="middle">A</text>
      <text x="258" y="214" fontSize="14" fill="#0e1b33" textAnchor="middle">B</text>
      <text x="90" y="32" fontSize="14" fill="#0e1b33" textAnchor="middle">C</text>
      <text x="140" y="216" fontSize="14" fill="#e5492b" textAnchor="middle">6</text>

      <polygon points="300,200 410,200 330,120" fill="#ffffff" stroke="#0e1b33" strokeWidth="2" />
      <text x="292" y="214" fontSize="14" fill="#0e1b33" textAnchor="middle">A'</text>
      <text x="418" y="214" fontSize="14" fill="#0e1b33" textAnchor="middle">B'</text>
      <text x="330" y="112" fontSize="14" fill="#0e1b33" textAnchor="middle">C'</text>
      <text x="355" y="216" fontSize="14" fill="#e5492b" textAnchor="middle">4</text>

      <text x="230" y="30" fontSize="13" fill="#8a93a6" textAnchor="middle">benzer üçgenler (~)</text>
    </svg>
  );
}

export function Thales() {
  return (
    <svg viewBox="0 0 300 240" role="img" aria-label="Bir üçgende tabana paralel doğru, kenarları orantılı parçalara bölüyor">
      <polygon points="40,210 260,210 150,30" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <line x1="95" y1="120" x2="205" y2="120" stroke="#e5492b" strokeWidth="2" />

      <text x="32" y="224" fontSize="14" fill="#0e1b33" textAnchor="middle">B</text>
      <text x="268" y="224" fontSize="14" fill="#0e1b33" textAnchor="middle">C</text>
      <text x="150" y="22" fontSize="14" fill="#0e1b33" textAnchor="middle">A</text>
      <text x="82" y="118" fontSize="14" fill="#0e1b33" textAnchor="middle">D</text>
      <text x="218" y="118" fontSize="14" fill="#0e1b33" textAnchor="middle">E</text>

      <text x="112" y="78" fontSize="13" fill="#0e1b33" textAnchor="middle">3</text>
      <text x="80" y="172" fontSize="13" fill="#0e1b33" textAnchor="middle">6</text>
      <text x="188" y="78" fontSize="13" fill="#0e1b33" textAnchor="middle">4</text>
      <text x="222" y="172" fontSize="13" fill="#0e1b33" textAnchor="middle">x</text>

      <text x="150" y="135" fontSize="12" fill="#e5492b" textAnchor="middle">DE ∥ BC</text>
    </svg>
  );
}

export function AlanTabanYukseklik() {
  return (
    <svg viewBox="0 0 280 200" role="img" aria-label="Üçgen, taban ve tepeden inen yükseklik kesik çizgi ile işaretli">
      <polygon points="30,160 250,160 170,40" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <line x1="170" y1="40" x2="170" y2="160" stroke="#e5492b" strokeWidth="2" strokeDasharray="6 4" />
      <polyline points="158,160 158,148 170,148" fill="none" stroke="#8a93a6" strokeWidth="1.5" />

      <text x="135" y="176" fontSize="14" fill="#0e1b33" textAnchor="middle">taban</text>
      <text x="184" y="104" fontSize="14" fill="#e5492b" textAnchor="middle">yükseklik</text>
    </svg>
  );
}
