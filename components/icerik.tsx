import type { ReactNode } from "react";

// Worked-example container. The author drops <Soru>, <Ipucu>, <Cozum> inside.
export function Ornek({ children }: { children: ReactNode }) {
  return (
    <div className="example">
      <div className="example-head">Örnek</div>
      <div className="example-body">{children}</div>
    </div>
  );
}

// The question prompt (math in children is rendered at build time).
export function Soru({ children }: { children: ReactNode }) {
  return (
    <>
      <span className="q-label">Soru</span>
      <div className="q-text">{children}</div>
    </>
  );
}

// The green answer box that pays off the solution.
export function Cevap({ children }: { children: ReactNode }) {
  return (
    <div className="answer">
      <span className="answer-pre">Sonuç:</span> {children}
    </div>
  );
}

// Figure wrapper — children hold the SVG and an <Altyazi> caption.
export function Figur({ children }: { children: ReactNode }) {
  return <figure className="fig">{children}</figure>;
}

export function Altyazi({ children }: { children: ReactNode }) {
  return <figcaption>{children}</figcaption>;
}
