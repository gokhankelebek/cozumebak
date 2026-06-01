// Figure for the analytic-geometry lesson on lines: a line through two marked
// points A(1,2) and B(4,8) with a dashed slope triangle showing Δx (horizontal)
// and Δy (vertical). Coordinates are pre-computed so the slope m = Δy/Δx = 6/3 = 2
// is faithful to the picture. One-off figures live next to where they're used.
export function DogruEgim() {
  return (
    <svg viewBox="0 0 520 360" role="img" aria-label="x-y ekseninde iki noktadan geçen bir doğru ve eğimi gösteren kesik çizgili Δx Δy üçgeni">
      <line stroke="#8a93a6" strokeWidth="1.5" x1="60" y1="36" x2="60" y2="332" />
      <line stroke="#8a93a6" strokeWidth="1.5" x1="40" y1="300" x2="500" y2="300" />
      <polygon points="60,30 56,40 64,40" fill="#8a93a6" />
      <polygon points="506,300 496,296 496,304" fill="#8a93a6" />
      <text fill="#8a93a6" fontSize="14" x="492" y="320">x</text>
      <text fill="#8a93a6" fontSize="14" x="44" y="42">y</text>

      <line stroke="#0e1b33" strokeWidth="2.5" x1="60" y1="300" x2="420" y2="84" />

      <line stroke="#e5492b" strokeWidth="1.6" strokeDasharray="6 5" x1="140" y1="252" x2="320" y2="252" />
      <line stroke="#e5492b" strokeWidth="1.6" strokeDasharray="6 5" x1="320" y1="252" x2="320" y2="144" />

      <text fill="#e5492b" fontSize="14" x="210" y="272">Δx = 3</text>
      <text fill="#e5492b" fontSize="14" x="328" y="204">Δy = 6</text>

      <circle cx="140" cy="252" r="5" fill="#0e1b33" />
      <circle cx="320" cy="144" r="5" fill="#0e1b33" />

      <text fill="#0e1b33" fontSize="14" x="112" y="244">A(1, 2)</text>
      <text fill="#0e1b33" fontSize="14" x="330" y="138">B(4, 8)</text>
    </svg>
  );
}
