import Link from "next/link";

export default function KonuBaslik({
  ustbilgi,
  baslik,
  etiketler = [],
  yol = [],
}: {
  ustbilgi: string;
  baslik: string;
  etiketler?: string[];
  yol?: string[];
}) {
  const ara = yol.slice(1); // first item is always "Anasayfa" → rendered as a link
  return (
    <>
      <nav className="crumb">
        <Link href="/">Anasayfa</Link>
        {ara.map((y, i) => (
          <span key={i}>
            {" \u203A "}
            {i === ara.length - 1 ? <strong>{y}</strong> : y}
          </span>
        ))}
      </nav>
      <header className="konu-head">
        <p className="eyebrow">{ustbilgi}</p>
        <h1>{baslik}</h1>
        <div className="chips">
          {etiketler.map((e, i) => (
            <span key={i}>{e}</span>
          ))}
        </div>
      </header>
    </>
  );
}
