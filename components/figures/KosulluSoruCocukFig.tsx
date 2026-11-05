// Figure for the "Koşullu Olasılık Soruları" page (slug: kosullu-olasilik-sorulari).
// Two-child family: the four equally likely outcomes (büyük, küçük) = KK, KE, EK, EE,
// filtered by two different pieces of information.
//   Left panel  "En az biri kız":   EE is crossed out → KK is 1 of 3.
//   Right panel "Büyük çocuk kız":  EK and EE crossed out → KK is 1 of 2.
// Boxes: width 38, height 40, step 42. Left panel x0 = 15, right panel x0 = 205; y = 44..84.
// Conventions: dark #0e1b33, accent #e5492b, muted #8a93a6.
const CIKTILAR = ["KK", "KE", "EK", "EE"];

function Panel({ x0, title, kept, result }: { x0: number; title: string; kept: string[]; result: string }) {
  return (
    <g>
      <text x={x0 + 82} y="28" fontSize="11.5" fill="#0e1b33" fontWeight="700" textAnchor="middle">{title}</text>
      {CIKTILAR.map((c, i) => {
        const x = x0 + i * 42;
        const isKept = kept.includes(c);
        const isTarget = c === "KK";
        return (
          <g key={c}>
            <rect
              x={x}
              y="44"
              width="38"
              height="40"
              rx="4"
              fill={isTarget ? "#e5492b" : "#ffffff"}
              fillOpacity={isTarget ? 0.18 : 1}
              stroke={isKept ? "#0e1b33" : "#8a93a6"}
              strokeWidth={isKept ? 1.6 : 1}
            />
            <text
              x={x + 19}
              y="69"
              fontSize="13"
              fill={isKept ? (isTarget ? "#e5492b" : "#0e1b33") : "#8a93a6"}
              fontWeight={isTarget ? "700" : "400"}
              textAnchor="middle"
            >
              {c}
            </text>
            {!isKept && (
              <g>
                <line x1={x + 3} y1="47" x2={x + 35} y2="81" stroke="#8a93a6" strokeWidth="1.4" />
                <line x1={x + 35} y1="47" x2={x + 3} y2="81" stroke="#8a93a6" strokeWidth="1.4" />
              </g>
            )}
          </g>
        );
      })}
      <text x={x0 + 82} y="110" fontSize="11" fill="#0e1b33" textAnchor="middle">{`kalan durum: ${kept.length}`}</text>
      <text x={x0 + 82} y="130" fontSize="13" fill="#e5492b" fontWeight="700" textAnchor="middle">{result}</text>
    </g>
  );
}

export function KsIkiCocuk() {
  return (
    <svg
      viewBox="0 0 390 165"
      role="img"
      aria-label="İki çocuklu ailede dört eş olasılıklı durum: KK, KE, EK, EE; ilk harf büyük çocuktur. Soldaki panelde en az biri kız bilgisiyle EE elenir, kalan 3 durumdan biri KK, olasılık 1/3. Sağdaki panelde büyük çocuk kız bilgisiyle EK ve EE elenir, kalan 2 durumdan biri KK, olasılık 1/2"
    >
      <Panel x0={15} title="Bilgi: en az biri kız" kept={["KK", "KE", "EK"]} result="P(KK | bilgi) = 1/3" />
      <line x1="195" y1="16" x2="195" y2="136" stroke="#8a93a6" strokeWidth="1" strokeDasharray="3 3" />
      <Panel x0={205} title="Bilgi: büyük çocuk kız" kept={["KK", "KE"]} result="P(KK | bilgi) = 1/2" />
      <text x="15" y="156" fontSize="10" fill="#8a93a6">Harf sırası: (büyük çocuk, küçük çocuk). K: kız, E: erkek.</text>
    </svg>
  );
}
