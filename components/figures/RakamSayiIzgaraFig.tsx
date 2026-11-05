// Figure for the "Rakamlarla Sayı Oluşturma" lesson.
// 5×5 grid of two-digit numbers ab with a, b ∈ {1,2,3,4,5}
// (row = onlar basamağı a, column = birler basamağı b).
// a < b (rakamları artan): 10 cells = C(5,2), accent.
// a = b (diagonal): 5 cells, dark tint. a > b (azalan): 10 cells, grey.
// Azalmayan = artan + eşit = 10 + 5 = 15.
// Grid origin (90,46), cell 32 → grid spans x 90..250, y 46..206.

const X0 = 90;
const Y0 = 46;
const S = 32;
const D = [1, 2, 3, 4, 5];

export function RakamSayiArtanIzgara() {
  return (
    <svg
      viewBox="0 0 440 226"
      role="img"
      aria-label="1'den 5'e kadar rakamlarla yazılan iki basamaklı sayıların 5'e 5 tablosu. Onlar basamağı birler basamağından küçük olan 10 hücre rakamları artan sayılar, köşegendeki 5 hücre rakamları eşit sayılar, kalan 10 hücre rakamları azalan sayılar. Rakamları azalmayan sayılar 10 artı 5 eşittir 15."
    >
      <text x={X0 + (5 * S) / 2} y="24" fontSize="11" textAnchor="middle" fill="#8a93a6">
        birler basamağı (b)
      </text>
      <text
        x="30"
        y={Y0 + (5 * S) / 2}
        fontSize="11"
        textAnchor="middle"
        fill="#8a93a6"
        transform={`rotate(-90 30 ${Y0 + (5 * S) / 2})`}
      >
        onlar basamağı (a)
      </text>
      {/* column and row headers */}
      {D.map((d, i) => (
        <g key={`h${d}`}>
          <text x={X0 + i * S + S / 2} y={Y0 - 8} fontSize="12" textAnchor="middle" fill="#0e1b33" fontWeight="700">
            {d}
          </text>
          <text x={X0 - 12} y={Y0 + i * S + S / 2 + 4} fontSize="12" textAnchor="middle" fill="#0e1b33" fontWeight="700">
            {d}
          </text>
        </g>
      ))}
      {/* cells */}
      {D.map((a, r) =>
        D.map((b, c) => {
          const kind = a < b ? "up" : a === b ? "eq" : "down";
          const fill = kind === "up" ? "#e5492b" : kind === "eq" ? "#0e1b33" : "none";
          const op = kind === "up" ? 0.16 : kind === "eq" ? 0.14 : 0;
          const tc = kind === "up" ? "#e5492b" : kind === "eq" ? "#0e1b33" : "#8a93a6";
          return (
            <g key={`${a}${b}`}>
              <rect
                x={X0 + c * S}
                y={Y0 + r * S}
                width={S}
                height={S}
                fill={fill}
                fillOpacity={op}
                stroke="#8a93a6"
                strokeWidth="0.8"
              />
              <text
                x={X0 + c * S + S / 2}
                y={Y0 + r * S + S / 2 + 4}
                fontSize="12"
                textAnchor="middle"
                fill={tc}
                fontWeight={kind === "down" ? "400" : "700"}
              >
                {`${a}${b}`}
              </text>
            </g>
          );
        })
      )}
      {/* legend */}
      <rect x="276" y="64" width="16" height="16" fill="#e5492b" fillOpacity="0.16" stroke="#8a93a6" strokeWidth="0.8" />
      <text x="300" y="77" fontSize="12" fill="#0e1b33">artan (a &lt; b): 10</text>
      <rect x="276" y="96" width="16" height="16" fill="#0e1b33" fillOpacity="0.14" stroke="#8a93a6" strokeWidth="0.8" />
      <text x="300" y="109" fontSize="12" fill="#0e1b33">eşit (a = b): 5</text>
      <rect x="276" y="128" width="16" height="16" fill="none" stroke="#8a93a6" strokeWidth="0.8" />
      <text x="300" y="141" fontSize="12" fill="#8a93a6">azalan (a &gt; b): 10</text>
      <line x1="276" y1="160" x2="430" y2="160" stroke="#8a93a6" strokeWidth="0.8" />
      <text x="276" y="180" fontSize="12" fontWeight="700" fill="#e5492b">azalmayan: 10 + 5 = 15</text>
    </svg>
  );
}
