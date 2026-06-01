// Figures for the TYT geometry lesson "Üçgende Açılar ve Kenarlar".
// Three schematic SVGs: interior angles, exterior angle, isosceles triangle.
// Named exports, imported directly in the lesson MDX.

// (1) İç açılar toplamı: bir üçgen, üç iç açı A, B, C işaretli; A+B+C=180°.
export function IcAcilar() {
  return (
    <svg viewBox="0 0 300 220" role="img" aria-label="Üç iç açısı işaretli bir üçgen, iç açılar toplamı 180 derece">
      <polygon points="40,180 260,180 150,40" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <path d="M 64 180 A 24 24 0 0 0 53 161" fill="none" stroke="#e5492b" strokeWidth="2" />
      <path d="M 236 180 A 24 24 0 0 1 247 161" fill="none" stroke="#e5492b" strokeWidth="2" />
      <path d="M 137 58 A 22 22 0 0 0 163 58" fill="none" stroke="#e5492b" strokeWidth="2" />
      <text x="68" y="171" fontSize="14" fill="#0e1b33">A</text>
      <text x="222" y="171" fontSize="14" fill="#0e1b33">B</text>
      <text x="144" y="76" fontSize="14" fill="#0e1b33">C</text>
      <text x="28" y="196" fontSize="14" fill="#0e1b33" fontWeight="bold">A</text>
      <text x="258" y="196" fontSize="14" fill="#0e1b33" fontWeight="bold">B</text>
      <text x="144" y="34" fontSize="14" fill="#0e1b33" fontWeight="bold">C</text>
    </svg>
  );
}

// (2) Dış açı: bir kenarı uzatılmış üçgen; dış açı = komşu olmayan iki iç açının toplamı.
export function DisAci() {
  return (
    <svg viewBox="0 0 340 220" role="img" aria-label="Bir kenarı uzatılmış üçgen, dış açı komşu olmayan iki iç açının toplamına eşit">
      <polygon points="40,170 220,170 130,40" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <line x1="220" y1="170" x2="320" y2="170" stroke="#8a93a6" strokeWidth="2" strokeDasharray="5 4" />
      <path d="M 64 170 A 24 24 0 0 0 56 152" fill="none" stroke="#e5492b" strokeWidth="2" />
      <path d="M 116 56 A 22 22 0 0 0 144 56" fill="none" stroke="#e5492b" strokeWidth="2" />
      <path d="M 244 170 A 24 24 0 0 0 234 148" fill="none" stroke="#e5492b" strokeWidth="2" />
      <text x="66" y="160" fontSize="13" fill="#0e1b33">A</text>
      <text x="124" y="74" fontSize="13" fill="#0e1b33">C</text>
      <text x="246" y="158" fontSize="13" fill="#e5492b" fontWeight="bold">d</text>
      <text x="28" y="186" fontSize="14" fill="#0e1b33" fontWeight="bold">A</text>
      <text x="206" y="188" fontSize="14" fill="#0e1b33" fontWeight="bold">B</text>
      <text x="124" y="34" fontSize="14" fill="#0e1b33" fontWeight="bold">C</text>
      <text x="312" y="186" fontSize="14" fill="#8a93a6">D</text>
    </svg>
  );
}

// (3) İkizkenar üçgen: eşit kenarlar tik işaretli, taban açıları eşit.
export function Ikizkenar() {
  return (
    <svg viewBox="0 0 280 220" role="img" aria-label="İkizkenar üçgen, eşit kenarlar tik işaretli ve taban açıları eşit">
      <polygon points="50,180 230,180 140,40" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <line x1="88" y1="105" x2="102" y2="115" stroke="#e5492b" strokeWidth="2" />
      <line x1="178" y1="115" x2="192" y2="105" stroke="#e5492b" strokeWidth="2" />
      <path d="M 74 180 A 24 24 0 0 0 64 159" fill="none" stroke="#e5492b" strokeWidth="2" />
      <path d="M 206 180 A 24 24 0 0 1 216 159" fill="none" stroke="#e5492b" strokeWidth="2" />
      <text x="76" y="171" fontSize="13" fill="#0e1b33">B</text>
      <text x="196" y="171" fontSize="13" fill="#0e1b33">C</text>
      <text x="134" y="34" fontSize="14" fill="#0e1b33" fontWeight="bold">A</text>
      <text x="38" y="196" fontSize="14" fill="#0e1b33" fontWeight="bold">B</text>
      <text x="228" y="196" fontSize="14" fill="#0e1b33" fontWeight="bold">C</text>
    </svg>
  );
}
