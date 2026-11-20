import type { Sekil } from "@/lib/sorular/sekil";
import { sekilYerlesim, YAZI, type Etiket } from "@/lib/sorular/sekilYerlesim";

// Draws a quiz figure (server component). All placement happens in
// lib/sorular/sekilYerlesim.ts; this file only paints it. The SVG is drawn
// 1:1 (width = viewBox width) so every figure has the same line weight and
// type size; on narrow screens it scales down via max-width.

const KOYU = "#0e1b33";
const VURGU = "#e5492b";
const YARDIMCI = "#6b7385";

const f = (n: number) => Math.round(n * 10) / 10;

// Letters in KaTeX_Math italic, everything else (digits, °, ?, +) in KaTeX_Main —
// the same faces the question text uses.
function Yazi({ e }: { e: Etiket }) {
  const boyut = e.tur === "nokta" ? YAZI.nokta : YAZI.sayi;
  const parcalar = e.metin.match(/[A-Za-zÇĞİÖŞÜçğıöşü]+|[^A-Za-zÇĞİÖŞÜçğıöşü]+/g) ?? [e.metin];
  return (
    <text
      x={f(e.x)}
      y={f(e.y + boyut * 0.34)}
      fontSize={boyut}
      fill={e.vurgu ? VURGU : KOYU}
      textAnchor="middle"
    >
      {parcalar.map((p, i) =>
        /[A-Za-zÇĞİÖŞÜçğıöşü]/.test(p) ? (
          <tspan key={i} fontFamily="KaTeX_Math, 'Times New Roman', serif" fontStyle="italic">
            {p}
          </tspan>
        ) : (
          <tspan key={i} fontFamily="KaTeX_Main, 'Times New Roman', serif">
            {p}
          </tspan>
        ),
      )}
    </text>
  );
}

export default function SoruSekli({ sekil }: { sekil: Sekil }) {
  const y = sekilYerlesim(sekil);
  const w = y.vb.x1 - y.vb.x0;
  const h = y.vb.y1 - y.vb.y0;
  return (
    <svg
      className="soru-sekil"
      viewBox={`${f(y.vb.x0)} ${f(y.vb.y0)} ${f(w)} ${f(h)}`}
      width={Math.round(w)}
      height={Math.round(h)}
      role="img"
      aria-label={sekil.aciklama}
    >
      {y.cizgiler.map((c, i) => (
        <line
          key={`c${i}`}
          x1={f(c.a.x)}
          y1={f(c.a.y)}
          x2={f(c.b.x)}
          y2={f(c.b.y)}
          stroke={c.tur === "yardimci" ? YARDIMCI : KOYU}
          strokeWidth={c.tur === "ana" ? 1.6 : 1.1}
          strokeDasharray={c.tur === "yardimci" ? "4 3" : undefined}
          strokeLinecap="round"
        />
      ))}
      {y.yaylar.map((a, i) => {
        const x1 = a.merkez.x + a.r * Math.cos(a.t1);
        const y1 = a.merkez.y + a.r * Math.sin(a.t1);
        const x2 = a.merkez.x + a.r * Math.cos(a.t1 + a.d);
        const y2 = a.merkez.y + a.r * Math.sin(a.t1 + a.d);
        return (
          <path
            key={`a${i}`}
            d={`M ${f(x1)} ${f(y1)} A ${a.r} ${a.r} 0 0 ${a.d > 0 ? 1 : 0} ${f(x2)} ${f(y2)}`}
            fill="none"
            stroke={a.vurgu ? VURGU : KOYU}
            strokeWidth={1.1}
          />
        );
      })}
      {y.noktalar.map((p, i) => (
        <circle key={`n${i}`} cx={f(p.x)} cy={f(p.y)} r={2.6} fill={KOYU} />
      ))}
      {y.etiketler.map((e, i) => (
        <Yazi key={`e${i}`} e={e} />
      ))}
    </svg>
  );
}
