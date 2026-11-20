import type { Sekil } from "@/lib/sorular/sekil";
import { metinGenisligi, sekilYerlesim, YAZI, type Etiket } from "@/lib/sorular/sekilYerlesim";

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
  const parcalar = e.metin.match(/[A-Za-zÇĞİÖŞÜçğıöşüα-ω]+|[^A-Za-zÇĞİÖŞÜçğıöşüα-ω]+/g) ?? [e.metin];
  // Radicals: draw the vinculum over the radicand, as KaTeX does in the text.
  const taban = e.y + boyut * 0.34;
  const bas = e.x - metinGenisligi(e.metin, boyut) / 2;
  const kokler = [...e.metin.matchAll(/√([0-9A-Za-z]+)/g)].map((m) => {
    const x1 = bas + metinGenisligi(e.metin.slice(0, m.index! + 1), boyut);
    return { x1: x1 - boyut * 0.04, x2: x1 + metinGenisligi(m[1], boyut) + boyut * 0.04 };
  });
  return (
    <>
    <text
      x={f(e.x)}
      y={f(e.y + boyut * 0.34)}
      fontSize={boyut}
      fill={e.vurgu ? VURGU : KOYU}
      textAnchor="middle"
    >
      {parcalar.map((p, i) =>
        // Point names like "d1": the trailing digits become a subscript (d₁).
        e.tur === "nokta" && i > 0 && /^[0-9]+$/.test(p) ? (
          <tspan key={i} fontFamily="KaTeX_Main, 'Times New Roman', serif" fontSize={boyut * 0.7} dy={boyut * 0.25}>
            {p}
          </tspan>
        ) : /[A-Za-zÇĞİÖŞÜçğıöşüα-ω]/.test(p) ? (
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
    {kokler.map((k, i) => (
      <line key={i} x1={f(k.x1)} x2={f(k.x2)} y1={f(taban - boyut * 0.79)} y2={f(taban - boyut * 0.79)} stroke={e.vurgu ? VURGU : KOYU} strokeWidth={boyut * 0.045} />
    ))}
    </>
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
      {y.boyali.map((b, i) => (
        <polygon key={`b${i}`} points={b.map((p) => `${f(p.x)},${f(p.y)}`).join(" ")} fill="#e6e1d5" stroke="none" />
      ))}
      {y.dilimler.map((d, i) => {
        const x1 = d.merkez.x + d.r * Math.cos(d.t1);
        const y1 = d.merkez.y + d.r * Math.sin(d.t1);
        const x2 = d.merkez.x + d.r * Math.cos(d.t1 + d.d);
        const y2 = d.merkez.y + d.r * Math.sin(d.t1 + d.d);
        const buyuk = Math.abs(d.d) > Math.PI ? 1 : 0;
        const yon = d.d > 0 ? 1 : 0;
        const yay = `A ${f(d.r)} ${f(d.r)} 0 ${buyuk} ${yon} ${f(x2)} ${f(y2)}`;
        const yol = d.kesme ? `M ${f(x1)} ${f(y1)} ${yay} Z` : `M ${f(d.merkez.x)} ${f(d.merkez.y)} L ${f(x1)} ${f(y1)} ${yay} Z`;
        return <path key={`s${i}`} d={yol} fill="#e6e1d5" stroke="none" />;
      })}
      {y.cemberler.map((c, i) => (
        <circle key={`o${i}`} cx={f(c.merkez.x)} cy={f(c.merkez.y)} r={f(c.r)} fill="none" stroke={KOYU} strokeWidth={1.6} />
      ))}
      {y.elipsler.map((e, i) => {
        // Sampled paths: front part [t0, t1] solid, the rest (back) solid or dashed.
        const yol = (a: number, b: number) => {
          const n = Math.max(8, Math.ceil(((b - a) / (2 * Math.PI)) * 96));
          let d = "";
          for (let k = 0; k <= n; k++) {
            const t = a + ((b - a) * k) / n;
            d += `${k ? "L" : "M"} ${f(e.cx + e.rx * Math.cos(t))} ${f(e.cy + e.ry * Math.sin(t))} `;
          }
          return d;
        };
        return (
          <g key={`e${i}`} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d={yol(e.t0, e.t1)} stroke={KOYU} strokeWidth={1.6} />
            <path
              d={yol(e.t1, e.t0 + 2 * Math.PI)}
              stroke={e.arkaKesik ? YARDIMCI : KOYU}
              strokeWidth={e.arkaKesik ? 1.2 : 1.6}
              strokeDasharray={e.arkaKesik ? "4 3" : undefined}
            />
          </g>
        );
      })}
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
            d={`M ${f(x1)} ${f(y1)} A ${f(a.r)} ${f(a.r)} 0 ${Math.abs(a.d) > Math.PI ? 1 : 0} ${a.d > 0 ? 1 : 0} ${f(x2)} ${f(y2)}`}
            fill="none"
            stroke={a.vurgu ? VURGU : KOYU}
            strokeWidth={a.tur === "kalin" ? 2.8 : a.tur === "ana" ? 1.6 : 1.1}
            strokeLinecap="round"
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
