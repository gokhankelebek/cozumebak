// Figure for the 12th-grade "Aritmetik Dizi" lesson.
// Shows the first terms of the arithmetic sequence 2, 5, 8, 11, 14 (a1=2, d=3)
// as dots on a number line, with the constant gap +3 marked between consecutive
// terms — making the "equal step" idea visible.
// Conventions: axis #8a93a6, accent #e5492b, dark #0e1b33, fill #fbf9f4.
//
// Number line: y=120, x=0 at px 30, scale 18 px/unit.
// term values: 2->66, 5->120... wait recompute below explicitly.
// 0->30. value v -> 30 + 18*v.
//   2  -> 30 + 36  = 66
//   5  -> 30 + 90  = 120
//   8  -> 30 + 144 = 174
//   11 -> 30 + 198 = 228
//   14 -> 30 + 252 = 282
// Arc midpoints (for "+3" labels): between 66&120 -> 93; 120&174 ->147;
//   174&228 ->201; 228&282 ->255.
export function DiziSayiDogrusu() {
  return (
    <svg viewBox="0 0 320 150" role="img" aria-label="Sayı doğrusu üzerinde 2, 5, 8, 11, 14 aritmetik dizisinin terimleri; ardışık terimler arasındaki fark her zaman 3'tür">
      {/* number line */}
      <line x1="20" y1="120" x2="310" y2="120" stroke="#8a93a6" strokeWidth="1.5" />

      {/* ticks + value labels */}
      <line x1="66" y1="115" x2="66" y2="125" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="120" y1="115" x2="120" y2="125" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="174" y1="115" x2="174" y2="125" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="228" y1="115" x2="228" y2="125" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="282" y1="115" x2="282" y2="125" stroke="#8a93a6" strokeWidth="1.5" />

      <text x="66" y="140" fontSize="12" fill="#0e1b33" textAnchor="middle">2</text>
      <text x="120" y="140" fontSize="12" fill="#0e1b33" textAnchor="middle">5</text>
      <text x="174" y="140" fontSize="12" fill="#0e1b33" textAnchor="middle">8</text>
      <text x="228" y="140" fontSize="12" fill="#0e1b33" textAnchor="middle">11</text>
      <text x="282" y="140" fontSize="12" fill="#0e1b33" textAnchor="middle">14</text>

      {/* term dots */}
      <circle cx="66" cy="120" r="4.5" fill="#e5492b" />
      <circle cx="120" cy="120" r="4.5" fill="#e5492b" />
      <circle cx="174" cy="120" r="4.5" fill="#e5492b" />
      <circle cx="228" cy="120" r="4.5" fill="#e5492b" />
      <circle cx="282" cy="120" r="4.5" fill="#e5492b" />

      {/* term index labels above */}
      <text x="66" y="105" fontSize="10" fill="#8a93a6" textAnchor="middle">a₁</text>
      <text x="120" y="105" fontSize="10" fill="#8a93a6" textAnchor="middle">a₂</text>
      <text x="174" y="105" fontSize="10" fill="#8a93a6" textAnchor="middle">a₃</text>
      <text x="228" y="105" fontSize="10" fill="#8a93a6" textAnchor="middle">a₄</text>
      <text x="282" y="105" fontSize="10" fill="#8a93a6" textAnchor="middle">a₅</text>

      {/* constant-gap arcs with +3 labels */}
      <path d="M 66 120 A 27 22 0 0 1 120 120" fill="none" stroke="#0e1b33" strokeWidth="1.2" />
      <path d="M 120 120 A 27 22 0 0 1 174 120" fill="none" stroke="#0e1b33" strokeWidth="1.2" />
      <path d="M 174 120 A 27 22 0 0 1 228 120" fill="none" stroke="#0e1b33" strokeWidth="1.2" />
      <path d="M 228 120 A 27 22 0 0 1 282 120" fill="none" stroke="#0e1b33" strokeWidth="1.2" />

      <text x="93" y="92" fontSize="11" fill="#e5492b" textAnchor="middle">+3</text>
      <text x="147" y="92" fontSize="11" fill="#e5492b" textAnchor="middle">+3</text>
      <text x="201" y="92" fontSize="11" fill="#e5492b" textAnchor="middle">+3</text>
      <text x="255" y="92" fontSize="11" fill="#e5492b" textAnchor="middle">+3</text>
    </svg>
  );
}
