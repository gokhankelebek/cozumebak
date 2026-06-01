export function SutunGrafik() {
  return (
    <svg viewBox="0 0 300 200" role="img" aria-label="Günlere göre satılan kitap sayısını gösteren sütun grafiği">
      <line x1="40" y1="160" x2="280" y2="160" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="40" y1="30" x2="40" y2="160" stroke="#8a93a6" strokeWidth="1.5" />

      <rect x="60" y="120" width="36" height="40" fill="#e5492b" />
      <rect x="115" y="80" width="36" height="80" fill="#e5492b" />
      <rect x="170" y="100" width="36" height="60" fill="#e5492b" />
      <rect x="225" y="60" width="36" height="100" fill="#e5492b" />

      <text x="78" y="113" fontSize="11" fill="#0e1b33" textAnchor="middle">4</text>
      <text x="133" y="73" fontSize="11" fill="#0e1b33" textAnchor="middle">8</text>
      <text x="188" y="93" fontSize="11" fill="#0e1b33" textAnchor="middle">6</text>
      <text x="243" y="53" fontSize="11" fill="#0e1b33" textAnchor="middle">10</text>

      <text x="78" y="175" fontSize="12" fill="#0e1b33" textAnchor="middle">Pzt</text>
      <text x="133" y="175" fontSize="12" fill="#0e1b33" textAnchor="middle">Sal</text>
      <text x="188" y="175" fontSize="12" fill="#0e1b33" textAnchor="middle">Çar</text>
      <text x="243" y="175" fontSize="12" fill="#0e1b33" textAnchor="middle">Per</text>

      <text x="40" y="22" fontSize="11" fill="#8a93a6" textAnchor="middle">Kitap</text>
    </svg>
  );
}

export function DaireGrafik() {
  return (
    <svg viewBox="0 0 300 200" role="img" aria-label="40 kişinin seçimlerini gösteren daire grafiği; A dilimi yüzde 25">
      <circle cx="110" cy="100" r="80" fill="#fbe9e3" />

      <path d="M110 100 L110 20 A80 80 0 0 1 190 100 Z" fill="#e5492b" />
      <path d="M110 100 L190 100 A80 80 0 0 1 110 180 Z" fill="#0e1b33" />
      <path d="M110 100 L110 180 A80 80 0 0 1 33.92 75.28 Z" fill="#8a93a6" />

      <text x="150" y="65" fontSize="13" fill="#ffffff" textAnchor="middle">25%</text>
      <text x="150" y="140" fontSize="13" fill="#ffffff" textAnchor="middle">25%</text>
      <text x="80" y="150" fontSize="13" fill="#ffffff" textAnchor="middle">30%</text>
      <text x="80" y="60" fontSize="13" fill="#0e1b33" textAnchor="middle">20%</text>

      <rect x="225" y="40" width="14" height="14" fill="#e5492b" />
      <text x="245" y="51" fontSize="12" fill="#0e1b33" textAnchor="start">A</text>
      <rect x="225" y="62" width="14" height="14" fill="#0e1b33" />
      <text x="245" y="73" fontSize="12" fill="#0e1b33" textAnchor="start">B</text>
      <rect x="225" y="84" width="14" height="14" fill="#8a93a6" />
      <text x="245" y="95" fontSize="12" fill="#0e1b33" textAnchor="start">C</text>
      <rect x="225" y="106" width="14" height="14" fill="#fbe9e3" />
      <text x="245" y="117" fontSize="12" fill="#0e1b33" textAnchor="start">D</text>
    </svg>
  );
}
