// Figure for the derivative lesson: f(x)=x^3-6x^2+9x+1 with the horizontal
// tangent at its local maximum (1, 5). Coordinates are pre-computed so the
// curve is mathematically faithful. One-off figures like this live next to
// where they're used and are imported directly in the MDX.
export default function TurevGrafik() {
  return (
    <svg viewBox="0 0 520 360" role="img" aria-label="Bir fonksiyon eğrisi ve yerel maksimumdaki yatay teğet doğrusu">
      <g className="gridline">
        <line x1="56" y1="36" x2="56" y2="320" /><line x1="142" y1="36" x2="142" y2="320" />
        <line x1="228" y1="36" x2="228" y2="320" /><line x1="314" y1="36" x2="314" y2="320" />
        <line x1="400" y1="36" x2="400" y2="320" /><line x1="486" y1="36" x2="486" y2="320" />
        <line x1="56" y1="320" x2="486" y2="320" /><line x1="56" y1="276" x2="486" y2="276" />
        <line x1="56" y1="232" x2="486" y2="232" /><line x1="56" y1="188" x2="486" y2="188" />
        <line x1="56" y1="144" x2="486" y2="144" /><line x1="56" y1="100" x2="486" y2="100" />
        <line x1="56" y1="56" x2="486" y2="56" />
      </g>
      <line className="axis" x1="86" y1="36" x2="86" y2="332" />
      <line className="axis" x1="48" y1="320" x2="500" y2="320" />
      <polygon points="86,30 82,40 90,40" fill="var(--ink-faint)" />
      <polygon points="506,320 496,316 496,324" fill="var(--ink-faint)" />
      <text className="axlabel" x="494" y="338">x</text>
      <text className="axlabel" x="70" y="42">y</text>
      <line className="tangent" x1="96" y1="101.5" x2="288" y2="101.5" />
      <polyline
        className="curve"
        points="76.1,318.3 96.2,239.6 116.3,180.7 136.4,139.8 156.5,114.5 176.6,102.9 186.6,101.5 196.7,102.8 216.7,112.1 236.8,128.8 256.9,150.8 277,175.8 297.1,202 317.2,227.1 337.3,249 357.4,265.7 377.5,275 387.5,276.3 397.6,274.9 417.7,263.3 437.8,238.1 457.9,197.1 478,138.3"
      />
      <circle className="ptdot" cx="186.6" cy="101.5" r="5.5" />
      <text className="ptlabel" x="196" y="96">(1, 5) — eğim = 0</text>
    </svg>
  );
}
