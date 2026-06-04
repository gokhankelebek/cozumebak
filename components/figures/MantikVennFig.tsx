// Figures for the 9th-grade "Mantık: Önermeler ve Niceleyiciler" lesson.
// Venn-style diagrams that translate the bağlaçlar into shaded regions, so the
// truth tables get a visual anchor: ve (∧) = overlap, veya (∨) = whole union.
// Conventions: outline #8a93a6, accent shade #e5492b, dark text #0e1b33,
// page fill #fbf9f4. Two overlapping circles, hand-placed.
//   Left circle  p: center (95,80), r=52  -> spans x 43..147
//   Right circle q: center (165,80), r=52 -> spans x 113..217
//   Overlap (lens) lies roughly x 113..147.

// (1) p ∧ q : only the lens (intersection) is shaded accent.
export function VeVenn() {
  return (
    <svg viewBox="0 0 260 170" role="img" aria-label="p ve q bağlacının Venn şeması: yalnız iki dairenin kesişimi (ortak bölge) taranmıştır">
      <rect x="2" y="2" width="256" height="166" fill="#fbf9f4" stroke="#8a93a6" strokeWidth="1" />
      {/* clip the q-circle by the p-circle to shade only the lens */}
      <defs>
        <clipPath id="clip-p-ve">
          <circle cx="95" cy="80" r="52" />
        </clipPath>
      </defs>
      <circle cx="165" cy="80" r="52" fill="#e5492b" fillOpacity="0.35" clipPath="url(#clip-p-ve)" />
      <circle cx="95" cy="80" r="52" fill="none" stroke="#0e1b33" strokeWidth="1.6" />
      <circle cx="165" cy="80" r="52" fill="none" stroke="#0e1b33" strokeWidth="1.6" />
      <text x="60" y="50" fontSize="15" fill="#0e1b33" textAnchor="middle">p</text>
      <text x="200" y="50" fontSize="15" fill="#0e1b33" textAnchor="middle">q</text>
      <text x="130" y="155" fontSize="13" fill="#e5492b" textAnchor="middle">p ∧ q (ortak bölge)</text>
    </svg>
  );
}

// (2) p ∨ q : the whole union of both circles is shaded accent.
export function VeyaVenn() {
  return (
    <svg viewBox="0 0 260 170" role="img" aria-label="p veya q bağlacının Venn şeması: iki dairenin birleşimi (tüm taralı bölge) taranmıştır">
      <rect x="2" y="2" width="256" height="166" fill="#fbf9f4" stroke="#8a93a6" strokeWidth="1" />
      <circle cx="95" cy="80" r="52" fill="#e5492b" fillOpacity="0.35" />
      <circle cx="165" cy="80" r="52" fill="#e5492b" fillOpacity="0.35" />
      <circle cx="95" cy="80" r="52" fill="none" stroke="#0e1b33" strokeWidth="1.6" />
      <circle cx="165" cy="80" r="52" fill="none" stroke="#0e1b33" strokeWidth="1.6" />
      <text x="60" y="50" fontSize="15" fill="#0e1b33" textAnchor="middle">p</text>
      <text x="200" y="50" fontSize="15" fill="#0e1b33" textAnchor="middle">q</text>
      <text x="130" y="155" fontSize="13" fill="#e5492b" textAnchor="middle">p ∨ q (birleşim)</text>
    </svg>
  );
}
