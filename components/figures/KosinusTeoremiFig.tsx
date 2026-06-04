// Figure for the 10th-grade "Sinüs ve Kosinüs Teoremi" lesson.
// Shows a general (non-right) triangle ABC with the cosine-theorem setup:
// two known sides b and c meeting at vertex A (marked angle), and the
// opposite side a sought. Colors follow the site convention:
// main stroke #0e1b33, accent #e5492b, faint #8a93a6, fill #fbf9f4.

// Triangle vertices (hand-placed in SVG pixels, y grows downward):
//   A = (60, 40)   top-left vertex where sides b and c meet (angle A)
//   B = (40, 180)  bottom-left
//   C = (250, 170) bottom-right
// Side a = BC (opposite A, the unknown), b = AC (A->C), c = AB (A->B).
// Label midpoints:
//   AB midpoint = (50, 110)   -> c
//   AC midpoint = (155, 105)  -> b
//   BC midpoint = (145, 175)  -> a
export function KosinusTeoremi() {
  return (
    <svg viewBox="0 0 290 210" role="img" aria-label="Herhangi bir ABC üçgeni: A köşesinde buluşan b ve c kenarları ile A açısı verilmiş, karşı kenar a kosinüs teoremiyle bulunuyor">
      <polygon points="60,40 40,180 250,170" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      {/* angle arc at A */}
      <path d="M 56 64 A 24 24 0 0 1 84 50" fill="none" stroke="#e5492b" strokeWidth="2" />
      {/* vertex labels */}
      <text x="46" y="34" fontSize="14" fill="#0e1b33" fontWeight="bold">A</text>
      <text x="24" y="190" fontSize="14" fill="#0e1b33" fontWeight="bold">B</text>
      <text x="256" y="172" fontSize="14" fill="#0e1b33" fontWeight="bold">C</text>
      {/* angle label */}
      <text x="74" y="70" fontSize="12" fill="#e5492b">A</text>
      {/* side labels: c = AB, b = AC, a = BC (unknown, accented) */}
      <text x="34" y="112" fontSize="14" fill="#0e1b33">c</text>
      <text x="152" y="98" fontSize="14" fill="#0e1b33">b</text>
      <text x="142" y="192" fontSize="14" fill="#e5492b" fontWeight="bold">a</text>
    </svg>
  );
}
