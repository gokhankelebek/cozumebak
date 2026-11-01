// Figure for the "Kombinasyon: Seçme Problemleri" deep page (kombinasyon-secme).
// Ardışık olmayan seçim, boşluk yöntemi: 7 lambadan 3'ü yanacak, yan yana iki
// lamba birlikte yanmayacak. Önce 4 sönük lamba dizilir; aralarında ve iki
// uçta 5 boşluk oluşur. Yanacak 3 lamba farklı boşluklara konur: C(5,3) = 10.
// Row 1 (y=70): gaps at x = 40, 120, 200, 280, 360; unlit lamps at x = 80, 160, 240, 320.
// Chosen gaps in the example: 2, 3, 5 (x = 120, 200, 360).
// Row 2 (y=160): the resulting 7-lamp strip at x = 50 + 50·i, pattern ○●○●○○●.
// Conventions: dark #0e1b33, lit/accent #e5492b, helper/grey #8a93a6.

const GAP_X = [40, 120, 200, 280, 360];
const UNLIT_X = [80, 160, 240, 320];
const CHOSEN = [1, 2, 4]; // 0-based gap indices -> gaps 2, 3, 5
const STRIP = [false, true, false, true, false, false, true]; // true = lit

export function BoslukYontemi() {
  return (
    <svg
      viewBox="0 0 400 214"
      role="img"
      aria-label="Boşluk yöntemi: 4 sönük lamba arasında ve iki uçta 5 boşluk var; yanacak 3 lamba 2, 3 ve 5 numaralı boşluklara konunca sönük, yanık, sönük, yanık, sönük, sönük, yanık düzeni oluşuyor; hiçbir iki yanık lamba yan yana değil"
    >
      <text x="200" y="22" fontSize="10" fill="#0e1b33" textAnchor="middle" fontWeight="700">
        4 sönük lamba, 5 boşluk: C(5, 3) = 10
      </text>

      {/* row 1: gaps and unlit lamps */}
      {GAP_X.map((x, i) => {
        const chosen = CHOSEN.includes(i);
        return (
          <g key={`g${i}`}>
            <rect
              x={x - 9}
              y="52"
              width="18"
              height="36"
              rx="4"
              fill={chosen ? "#e5492b" : "none"}
              fillOpacity={chosen ? 0.12 : 0}
              stroke={chosen ? "#e5492b" : "#8a93a6"}
              strokeWidth="1.2"
              strokeDasharray="3 3"
            />
            <text x={x} y="104" fontSize="10" fill={chosen ? "#e5492b" : "#8a93a6"} textAnchor="middle" fontWeight={chosen ? 700 : 400}>
              {i + 1}
            </text>
            {chosen && <circle cx={x} cy="70" r="6" fill="#e5492b" />}
          </g>
        );
      })}
      {UNLIT_X.map((x, i) => (
        <circle key={`u${i}`} cx={x} cy="70" r="11" fill="#fff" stroke="#0e1b33" strokeWidth="1.6" />
      ))}
      <text x="8" y="48" fontSize="9" fill="#8a93a6">boşluk</text>

      {/* arrow down */}
      <line x1="200" y1="112" x2="200" y2="132" stroke="#8a93a6" strokeWidth="1.4" />
      <polygon points="195,128 205,128 200,136" fill="#8a93a6" />

      {/* row 2: resulting strip of 7 lamps */}
      {STRIP.map((lit, i) => {
        const x = 50 + 50 * i;
        return (
          <g key={`s${i}`}>
            <circle cx={x} cy="160" r="11" fill={lit ? "#e5492b" : "#fff"} stroke={lit ? "#e5492b" : "#0e1b33"} strokeWidth="1.6" />
            <text x={x} y="186" fontSize="10" fill="#8a93a6" textAnchor="middle">
              {i + 1}
            </text>
          </g>
        );
      })}
      <text x="200" y="207" fontSize="10" fill="#0e1b33" textAnchor="middle">
        Örnek düzen: 2, 4 ve 7 yanık
      </text>
    </svg>
  );
}
