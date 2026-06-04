// Figure for the 9th-grade "Kümeler ve Sayı Kümeleri" lesson.
// Nested-sets diagram showing N ⊂ Z ⊂ Q ⊂ R, with the irrationals as the
// region inside R but outside Q. Concentric rounded rectangles, hand-placed.
// Conventions: axes/outline #8a93a6, accent #e5492b, dark text #0e1b33,
// inner fill #fbf9f4.

export function SayiKumeleri() {
  return (
    <svg viewBox="0 0 320 240" role="img" aria-label="İç içe sayı kümeleri: doğal sayılar tam sayıların, tam sayılar rasyonel sayıların, rasyonel sayılar gerçek sayıların alt kümesidir; irrasyonel sayılar gerçek sayıların içinde rasyonellerin dışındaki bölgedir">
      {/* R — outermost */}
      <rect x="8" y="8" width="304" height="224" rx="18" fill="#fbf9f4" stroke="#8a93a6" strokeWidth="2" />
      <text x="20" y="28" fontSize="15" fill="#0e1b33">ℝ</text>
      {/* Q — inside R, left side */}
      <rect x="22" y="40" width="180" height="180" rx="16" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <text x="34" y="60" fontSize="15" fill="#0e1b33">ℚ</text>
      {/* Z — inside Q */}
      <rect x="36" y="72" width="150" height="134" rx="14" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <text x="48" y="92" fontSize="15" fill="#0e1b33">ℤ</text>
      {/* N — innermost */}
      <rect x="52" y="104" width="118" height="86" rx="12" fill="#fbf9f4" stroke="#e5492b" strokeWidth="2.5" />
      <text x="64" y="124" fontSize="15" fill="#e5492b">ℕ</text>
      <text x="64" y="148" fontSize="11" fill="#0e1b33">0, 1, 2, …</text>
      <text x="100" y="178" fontSize="11" fill="#0e1b33">−2, −1</text>
      <text x="120" y="96" fontSize="11" fill="#0e1b33">½, ¾</text>
      {/* Irrationals: inside R, outside Q (right region) */}
      <text x="226" y="120" fontSize="13" fill="#0e1b33">İrrasyonel</text>
      <text x="238" y="142" fontSize="12" fill="#0e1b33">√2, π, e</text>
    </svg>
  );
}
