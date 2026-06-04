// Figures for the 10th-grade "Doğruyu Oranla Bölme" lesson.
// Coordinates hand-computed so each figure is mathematically faithful.
// Conventions: axis #8a93a6, accent point/segment #e5492b, dark #0e1b33,
// hollow fill #fbf9f4.

// (1) A(2,1), B(8,7) ve orta nokta M(5,4); köşegen parça üzerinde M ortada.
// Ölçek: 1 birim = 22 px; orijin (30, 190). px x = 30 + 22*x, py = 190 - 22*y.
// A(2,1) -> (74, 168);  M(5,4) -> (140, 102);  B(8,7) -> (206, 36).
export function OrtaNokta() {
  return (
    <svg viewBox="0 0 250 210" role="img" aria-label="Koordinat düzleminde A(2,1) ve B(8,7) noktaları ile orta noktaları M(5,4); M parçayı iki eşit kısma böler">
      <line x1="14" y1="190" x2="240" y2="190" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="30" y1="14" x2="30" y2="204" stroke="#8a93a6" strokeWidth="1.5" />
      <text x="230" y="204" fontSize="12" fill="#0e1b33">x</text>
      <text x="16" y="24" fontSize="12" fill="#0e1b33">y</text>
      <text x="20" y="203" fontSize="11" fill="#8a93a6">O</text>
      {/* doğru parçası A -> B */}
      <line x1="74" y1="168" x2="206" y2="36" stroke="#0e1b33" strokeWidth="2" />
      {/* uçlar */}
      <circle cx="74" cy="168" r="3.5" fill="#0e1b33" />
      <circle cx="206" cy="36" r="3.5" fill="#0e1b33" />
      {/* orta nokta vurgulu */}
      <circle cx="140" cy="102" r="4.5" fill="#e5492b" />
      <text x="52" y="182" fontSize="12" fill="#0e1b33">A(2,1)</text>
      <text x="178" y="30" fontSize="12" fill="#0e1b33">B(8,7)</text>
      <text x="148" y="106" fontSize="12" fill="#e5492b">M(5,4)</text>
    </svg>
  );
}

// (2) A(2,1), B(8,7) parçasını A'dan 1:2 oranında bölen P(4,3).
// |AP| : |PB| = 1 : 2 — P, A'ya yakın. Aynı ölçek.
// A(2,1) -> (74,168); P(4,3) -> (118,124); B(8,7) -> (206,36).
export function OranlaBolme() {
  return (
    <svg viewBox="0 0 250 210" role="img" aria-label="A(2,1) ve B(8,7) parçasını A'dan 1'e 2 oranında bölen P(4,3) noktası; AP kısa, PB iki katı uzun">
      <line x1="14" y1="190" x2="240" y2="190" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="30" y1="14" x2="30" y2="204" stroke="#8a93a6" strokeWidth="1.5" />
      <text x="230" y="204" fontSize="12" fill="#0e1b33">x</text>
      <text x="16" y="24" fontSize="12" fill="#0e1b33">y</text>
      <text x="20" y="203" fontSize="11" fill="#8a93a6">O</text>
      {/* AP kısa parça (accent) */}
      <line x1="74" y1="168" x2="118" y2="124" stroke="#e5492b" strokeWidth="3" />
      {/* PB uzun parça (dark) */}
      <line x1="118" y1="124" x2="206" y2="36" stroke="#0e1b33" strokeWidth="2" />
      <circle cx="74" cy="168" r="3.5" fill="#0e1b33" />
      <circle cx="206" cy="36" r="3.5" fill="#0e1b33" />
      <circle cx="118" cy="124" r="4.5" fill="#e5492b" />
      <text x="52" y="182" fontSize="12" fill="#0e1b33">A(2,1)</text>
      <text x="178" y="30" fontSize="12" fill="#0e1b33">B(8,7)</text>
      <text x="124" y="120" fontSize="12" fill="#e5492b">P(4,3)</text>
      <text x="78" y="150" fontSize="10" fill="#e5492b">1</text>
      <text x="158" y="86" fontSize="10" fill="#0e1b33">2</text>
    </svg>
  );
}
