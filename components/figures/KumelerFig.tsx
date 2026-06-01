// Venn diagrams for the "Kümeler" (TYT) lesson. Two overlapping circles A and B.
// The shaded region (fill="#fbe9e3") highlights the operation; untouched regions
// stay fill="#fbf9f4". SVG clip paths isolate exactly the region we want to fill.

export function Birlesim() {
  return (
    <svg viewBox="0 0 280 190" role="img" aria-label="A birleşim B taranmış: her iki dairenin tamamı">
      <circle cx="112" cy="95" r="62" fill="#fbe9e3" stroke="#0e1b33" strokeWidth="2" />
      <circle cx="168" cy="95" r="62" fill="#fbe9e3" stroke="#0e1b33" strokeWidth="2" />
      <text x="78" y="100" fontSize="16" fill="#0e1b33" textAnchor="middle">A</text>
      <text x="202" y="100" fontSize="16" fill="#0e1b33" textAnchor="middle">B</text>
      <text x="140" y="178" fontSize="14" fill="#e5492b" textAnchor="middle">A ∪ B</text>
    </svg>
  );
}

export function Kesisim() {
  return (
    <svg viewBox="0 0 280 190" role="img" aria-label="A kesişim B taranmış: yalnız ortak bölge">
      <defs>
        <clipPath id="kesisim-clip">
          <circle cx="112" cy="95" r="62" />
        </clipPath>
      </defs>
      <circle cx="112" cy="95" r="62" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <circle cx="168" cy="95" r="62" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <circle cx="168" cy="95" r="62" fill="#fbe9e3" clipPath="url(#kesisim-clip)" />
      <circle cx="112" cy="95" r="62" fill="none" stroke="#0e1b33" strokeWidth="2" />
      <circle cx="168" cy="95" r="62" fill="none" stroke="#0e1b33" strokeWidth="2" />
      <text x="78" y="100" fontSize="16" fill="#0e1b33" textAnchor="middle">A</text>
      <text x="202" y="100" fontSize="16" fill="#0e1b33" textAnchor="middle">B</text>
      <text x="140" y="178" fontSize="14" fill="#e5492b" textAnchor="middle">A ∩ B</text>
    </svg>
  );
}

export function Fark() {
  return (
    <svg viewBox="0 0 280 190" role="img" aria-label="A fark B taranmış: A'nın B dışında kalan kısmı">
      <defs>
        <clipPath id="fark-clip">
          <circle cx="112" cy="95" r="62" />
        </clipPath>
        <mask id="fark-mask">
          <rect x="0" y="0" width="280" height="190" fill="white" />
          <circle cx="168" cy="95" r="62" fill="black" />
        </mask>
      </defs>
      <circle cx="112" cy="95" r="62" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <circle cx="168" cy="95" r="62" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <circle cx="112" cy="95" r="62" fill="#fbe9e3" clipPath="url(#fark-clip)" mask="url(#fark-mask)" />
      <circle cx="112" cy="95" r="62" fill="none" stroke="#0e1b33" strokeWidth="2" />
      <circle cx="168" cy="95" r="62" fill="none" stroke="#0e1b33" strokeWidth="2" />
      <text x="78" y="100" fontSize="16" fill="#0e1b33" textAnchor="middle">A</text>
      <text x="202" y="100" fontSize="16" fill="#0e1b33" textAnchor="middle">B</text>
      <text x="140" y="178" fontSize="14" fill="#e5492b" textAnchor="middle">A \ B</text>
    </svg>
  );
}
