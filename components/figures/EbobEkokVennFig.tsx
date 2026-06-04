// Figure for the 10th-grade "EBOB-EKOK" lesson.
// Venn diagram of the prime factorizations of 48 and 72.
//   48 = 2^4 · 3        72 = 2^3 · 3^2
// Shared part (intersection) = 2^3 · 3  -> EBOB = 24.
// Whole union = 2^4 · 3^2 -> EKOK = 144.
// Conventions: outline #8a93a6, accent (intersection/EBOB) #e5492b,
// dark text #0e1b33, circle fills #fbf9f4. Coordinates hand-placed.
export function EbobEkokVenn() {
  return (
    <svg viewBox="0 0 360 220" role="img" aria-label="48 ve 72 sayılarının asal çarpanlarının Venn şeması: ortak kısım 2 üzeri 3 çarpı 3 yani EBOB 24, birleşim 2 üzeri 4 çarpı 3 üzeri 2 yani EKOK 144">
      {/* left circle (48) */}
      <circle cx="135" cy="110" r="85" fill="#fbf9f4" stroke="#8a93a6" strokeWidth="1.5" opacity="0.9" />
      {/* right circle (72) */}
      <circle cx="225" cy="110" r="85" fill="#fbf9f4" stroke="#8a93a6" strokeWidth="1.5" opacity="0.6" />
      {/* titles */}
      <text x="70" y="30" fontSize="13" fill="#0e1b33">48 = 2⁴·3</text>
      <text x="240" y="30" fontSize="13" fill="#0e1b33">72 = 2³·3²</text>
      {/* only-48 region: the extra 2 (2^4 vs 2^3) */}
      <text x="78" y="115" fontSize="13" fill="#0e1b33" textAnchor="middle">2</text>
      {/* shared region: 2^3 · 3 = EBOB */}
      <text x="180" y="100" fontSize="13" fill="#e5492b" textAnchor="middle">2³·3</text>
      <text x="180" y="120" fontSize="11" fill="#e5492b" textAnchor="middle">(EBOB)</text>
      {/* only-72 region: the extra 3 (3^2 vs 3^1) */}
      <text x="282" y="115" fontSize="13" fill="#0e1b33" textAnchor="middle">3</text>
      {/* captions */}
      <text x="180" y="205" fontSize="12" fill="#e5492b" textAnchor="middle">EBOB = 2³·3 = 24</text>
      <text x="180" y="220" fontSize="12" fill="#0e1b33" textAnchor="middle">EKOK = 2⁴·3² = 144</text>
    </svg>
  );
}
