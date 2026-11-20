import type { Nokta, Sekil } from "@/lib/sorular/sekil";

// Renders a declarative Sekil as an inline SVG (server component). Colors follow
// the site's figure convention: stroke #0e1b33, accent #e5492b, faint #8a93a6,
// fill #fbf9f4.

const GENISLIK = 320; // viewBox width; 1 unit ≈ 1 CSS px at the default size
const BOSLUK = 34; // room for labels around the drawing
const MAKS_YUKSEKLIK = 290;

const KOYU = "#0e1b33";
const VURGU = "#e5492b";
const SOLUK = "#8a93a6";
const DOLGU = "#fbf9f4";

type P = { x: number; y: number };

const fark = (a: P, b: P): P => ({ x: a.x - b.x, y: a.y - b.y });
const uzunluk = (v: P) => Math.hypot(v.x, v.y) || 1;
const birim = (v: P): P => {
  const u = uzunluk(v);
  return { x: v.x / u, y: v.y / u };
};
const f = (n: number) => Math.round(n * 10) / 10;

export default function SoruSekli({ sekil }: { sekil: Sekil }) {
  const adlar = Object.keys(sekil.noktalar);
  const xs = adlar.map((k) => sekil.noktalar[k][0]);
  const ys = adlar.map((k) => sekil.noktalar[k][1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const spanX = maxX - minX || 1;
  const spanY = maxY - minY || 1;
  const olcek = Math.min((GENISLIK - 2 * BOSLUK) / spanX, (MAKS_YUKSEKLIK - 2 * BOSLUK) / spanY);
  const cizimG = spanX * olcek;
  const yukseklik = Math.round(spanY * olcek + 2 * BOSLUK);
  const solBosluk = (GENISLIK - cizimG) / 2;

  const ekran = (n: Nokta): P => ({
    x: solBosluk + (n[0] - minX) * olcek,
    y: BOSLUK + (maxY - n[1]) * olcek,
  });
  const N: Record<string, P> = {};
  for (const k of adlar) N[k] = ekran(sekil.noktalar[k]);

  // Centroid of the labelled shape: labels are pushed away from it.
  const merkezAdlar = sekil.cokgenler?.flat() ?? adlar;
  const merkez: P = {
    x: merkezAdlar.reduce((s, k) => s + N[k].x, 0) / merkezAdlar.length,
    y: merkezAdlar.reduce((s, k) => s + N[k].y, 0) / merkezAdlar.length,
  };

  const gizli = new Set(sekil.gizli ?? []);

  return (
    <svg
      className="soru-sekil"
      viewBox={`0 0 ${GENISLIK} ${yukseklik}`}
      role="img"
      aria-label={sekil.aciklama}
    >
      {sekil.cokgenler?.map((c, i) => (
        <polygon
          key={`c${i}`}
          points={c.map((k) => `${f(N[k].x)},${f(N[k].y)}`).join(" ")}
          fill={DOLGU}
          stroke={KOYU}
          strokeWidth={2}
          strokeLinejoin="round"
        />
      ))}

      {sekil.dogrular?.map((d, i) => (
        <line
          key={`d${i}`}
          x1={f(N[d.p[0]].x)}
          y1={f(N[d.p[0]].y)}
          x2={f(N[d.p[1]].x)}
          y2={f(N[d.p[1]].y)}
          stroke={d.kesik ? SOLUK : KOYU}
          strokeWidth={d.kesik ? 1.5 : 2}
          strokeDasharray={d.kesik ? "5 4" : undefined}
        />
      ))}

      {sekil.dikler?.map(([a, b, c], i) => {
        const B = N[b];
        const u = birim(fark(N[a], B));
        const v = birim(fark(N[c], B));
        const s = 13;
        const p1 = { x: B.x + u.x * s, y: B.y + u.y * s };
        const p2 = { x: B.x + (u.x + v.x) * s, y: B.y + (u.y + v.y) * s };
        const p3 = { x: B.x + v.x * s, y: B.y + v.y * s };
        return (
          <polyline
            key={`r${i}`}
            points={`${f(p1.x)},${f(p1.y)} ${f(p2.x)},${f(p2.y)} ${f(p3.x)},${f(p3.y)}`}
            fill="none"
            stroke={KOYU}
            strokeWidth={1.5}
          />
        );
      })}

      {sekil.acilar?.map((a, i) => {
        const B = N[a.p[1]];
        const u = birim(fark(N[a.p[0]], B));
        const v = birim(fark(N[a.p[2]], B));
        const t1 = Math.atan2(u.y, u.x);
        let t2 = Math.atan2(v.y, v.x);
        let d = t2 - t1;
        while (d <= -Math.PI) d += 2 * Math.PI;
        while (d > Math.PI) d -= 2 * Math.PI;
        t2 = t1 + d;
        const aci = Math.abs(d);
        const r = aci < 0.6 ? 30 : 22;
        const yay = (rr: number) =>
          `M ${f(B.x + rr * Math.cos(t1))} ${f(B.y + rr * Math.sin(t1))} A ${rr} ${rr} 0 0 ${d > 0 ? 1 : 0} ${f(
            B.x + rr * Math.cos(t2),
          )} ${f(B.y + rr * Math.sin(t2))}`;
        const orta = t1 + d / 2;
        const lr = r + (aci < 0.6 ? 18 : 15);
        const renk = a.vurgu ? VURGU : SOLUK;
        return (
          <g key={`a${i}`}>
            <path d={yay(r)} fill="none" stroke={renk} strokeWidth={1.5} />
            {a.cift && <path d={yay(r + 4)} fill="none" stroke={renk} strokeWidth={1.5} />}
            {a.metin && (
              <text
                x={f(B.x + lr * Math.cos(orta))}
                y={f(B.y + lr * Math.sin(orta))}
                fontSize={14}
                fill={a.vurgu ? VURGU : KOYU}
                textAnchor="middle"
                dominantBaseline="central"
              >
                {a.metin}
              </text>
            )}
          </g>
        );
      })}

      {sekil.kenarlar?.map((k, i) => {
        const A = N[k.p[0]];
        const B = N[k.p[1]];
        const m = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 };
        const t = birim(fark(B, A));
        let n = { x: -t.y, y: t.x };
        const disa = (n.x * (m.x - merkez.x) + n.y * (m.y - merkez.y)) >= 0;
        if (disa === !!k.ic) n = { x: -n.x, y: -n.y };
        const o = 15;
        return (
          <text
            key={`k${i}`}
            x={f(m.x + n.x * o)}
            y={f(m.y + n.y * o)}
            fontSize={15}
            fill={k.vurgu ? VURGU : KOYU}
            textAnchor="middle"
            dominantBaseline="central"
          >
            {k.metin}
          </text>
        );
      })}

      {adlar
        .filter((k) => !gizli.has(k))
        .map((k) => {
          const p = N[k];
          const yon = birim(fark(p, merkez));
          return (
            <text
              key={`n${k}`}
              x={f(p.x + yon.x * 15)}
              y={f(p.y + yon.y * 15)}
              fontSize={15}
              fontStyle="italic"
              fill={KOYU}
              textAnchor="middle"
              dominantBaseline="central"
            >
              {k}
            </text>
          );
        })}
    </svg>
  );
}
