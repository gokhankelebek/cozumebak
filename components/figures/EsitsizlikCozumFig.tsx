// Figure for the 9th-grade "1. Derece Denklem ve Eşitsizlik Problemleri" lesson.
// Number line showing the solution set of an inequality.
// Conventions: axis #8a93a6, accent segment/dot #e5492b, dark text #0e1b33,
// hollow-dot fill #fbf9f4. All coordinates hand-computed.

// Solution set of  x < -2  on the number line.
// Axis y=70, x runs 20..300. Scale: 30 px per unit, x=0 at px 200.
// -2 -> 200 + (-2)*30 = 140 ; 0 -> 200 ; 2 -> 260 ; -4 -> 80.
// The ray goes from the hollow endpoint at -2 (px 140) leftward (decreasing x),
// i.e. toward smaller pixel x, ending with an arrow near px 30.
export function EsitsizlikCozum() {
  return (
    <svg viewBox="0 0 320 110" role="img" aria-label="Sayı doğrusunda x küçüktür -2 eşitsizliğinin çözüm kümesi: -2 noktası boş (hariç), sol taraf işaretli">
      <line x1="20" y1="70" x2="300" y2="70" stroke="#8a93a6" strokeWidth="1.5" />
      {/* tick marks at -4, -2, 0, 2 -> px 80, 140, 200, 260 */}
      {[80, 140, 200, 260].map((x, i) => (
        <line key={i} x1={x} y1="65" x2={x} y2="75" stroke="#8a93a6" strokeWidth="1.5" />
      ))}
      <text x="72" y="90" fontSize="12" fill="#0e1b33">−4</text>
      <text x="132" y="90" fontSize="12" fill="#0e1b33">−2</text>
      <text x="196" y="90" fontSize="12" fill="#0e1b33">0</text>
      <text x="256" y="90" fontSize="12" fill="#0e1b33">2</text>
      {/* solution ray: from -2 (px 140) leftward to px 35, with arrow */}
      <line x1="140" y1="50" x2="35" y2="50" stroke="#e5492b" strokeWidth="3" />
      <polygon points="35,50 47,44 47,56" fill="#e5492b" />
      {/* hollow endpoint at -2 (excluded, strict <) */}
      <circle cx="140" cy="50" r="5" fill="#fbf9f4" stroke="#e5492b" strokeWidth="2" />
      <text x="150" y="38" fontSize="13" fill="#e5492b">x &lt; −2</text>
    </svg>
  );
}
