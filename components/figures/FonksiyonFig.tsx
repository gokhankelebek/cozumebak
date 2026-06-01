// Figures for the TYT lesson "Fonksiyon Grafikleri ve İşlemleri".
// Coordinates are pre-computed so each graph is mathematically faithful.

// (1) Doğrusal fonksiyon y = 2x + 1, y eksenini (0,1) noktasında keser.
// Pixel scale: origin at (40,160); 30 px per x-unit, 20 px per y-unit.
// (0,1) -> (40,140); (2,5) -> (100,60).
export function DogruGrafik() {
  return (
    <svg viewBox="0 0 240 200" role="img" aria-label="y eşittir 2x artı 1 doğrusal fonksiyon grafiği, y kesişimi (0, 1)">
      <line x1="20" y1="160" x2="220" y2="160" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="40" y1="20" x2="40" y2="190" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="10" y1="200" x2="190" y2="20" stroke="#e5492b" strokeWidth="2.5" />
      <circle cx="40" cy="140" r="4" fill="#0e1b33" />
      <text x="46" y="136" fontSize="12" fill="#0e1b33">(0, 1)</text>
      <text x="208" y="155" fontSize="12" fill="#0e1b33">x</text>
      <text x="46" y="32" fontSize="12" fill="#0e1b33">y</text>
      <text x="150" y="55" fontSize="12" fill="#e5492b">y = 2x + 1</text>
    </svg>
  );
}

// (2) Grafik okuma: bir doğrusal grafikte x = 2 için f(2) = 5 değeri kesik
// çizgilerle okunuyor. Aynı doğru y = 2x + 1; (2,5) -> (100,60).
export function GrafikOkuma() {
  return (
    <svg viewBox="0 0 240 200" role="img" aria-label="Grafikten x eşittir 2 için f(2) eşittir 5 değerinin kesik çizgiyle okunması">
      <line x1="20" y1="160" x2="220" y2="160" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="40" y1="20" x2="40" y2="190" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="10" y1="200" x2="190" y2="20" stroke="#0e1b33" strokeWidth="2.5" />
      <line x1="100" y1="160" x2="100" y2="60" stroke="#e5492b" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="40" y1="60" x2="100" y2="60" stroke="#e5492b" strokeWidth="1.5" strokeDasharray="4 3" />
      <circle cx="100" cy="60" r="4" fill="#e5492b" />
      <text x="92" y="174" fontSize="12" fill="#0e1b33">x = 2</text>
      <text x="8" y="64" fontSize="12" fill="#0e1b33">5</text>
      <text x="106" y="55" fontSize="12" fill="#e5492b">f(2) = 5</text>
      <text x="208" y="155" fontSize="12" fill="#0e1b33">x</text>
      <text x="46" y="32" fontSize="12" fill="#0e1b33">y</text>
    </svg>
  );
}
