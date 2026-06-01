// Figure for the AYT analytic-geometry lesson on circles: x-y axes with a circle
// whose center O(a, b) is marked by a dot, plus a radius segment of length r drawn
// from the center out to the circle. Coordinates are pre-computed so the picture is
// faithful: 1 birim = 40px, origin at (200, 200). Center O(2, -1) → (280, 240),
// radius r = 3 → 120px. The radius points up-right to a point on the circle.
export function CemberMerkez() {
  // origin (0,0) of the math plane in svg pixels
  const ox = 200;
  const oy = 200;
  const unit = 40;
  // center O(2, -1)
  const cx = ox + 2 * unit; // 280
  const cy = oy - -1 * unit; // 240
  const r = 3 * unit; // 120
  // a point on the circle for the radius end: 53.13° → (cos, sin) ≈ (0.6, 0.8)
  const px = cx + r * 0.6; // 352
  const py = cy - r * 0.8; // 144

  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="x-y koordinat ekseninde, merkezi O(a, b) noktasında olan ve yarıçapı r olan bir çember; merkezden çembere çizilmiş r uzunluğunda bir yarıçap doğru parçası">
      <line stroke="#8a93a6" strokeWidth="1.5" x1={ox} y1="20" x2={ox} y2="384" />
      <line stroke="#8a93a6" strokeWidth="1.5" x1="16" y1={oy} x2="384" y2={oy} />
      <polygon points={`${ox},14 ${ox - 4},24 ${ox + 4},24`} fill="#8a93a6" />
      <polygon points={`390,${oy} 380,${oy - 4} 380,${oy + 4}`} fill="#8a93a6" />
      <text fill="#8a93a6" fontSize="14" x={ox + 8} y="28">y</text>
      <text fill="#8a93a6" fontSize="14" x="372" y={oy - 8}>x</text>

      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#0e1b33" strokeWidth="2.5" />

      <line stroke="#e5492b" strokeWidth="2" x1={cx} y1={cy} x2={px} y2={py} />
      <text fill="#e5492b" fontSize="15" x={(cx + px) / 2 + 6} y={(cy + py) / 2 - 4}>r</text>

      <circle cx={cx} cy={cy} r="4.5" fill="#0e1b33" />
      <text fill="#0e1b33" fontSize="14" x={cx + 10} y={cy + 18}>O(a, b)</text>
    </svg>
  );
}
