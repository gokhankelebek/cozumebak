// Figures for the 9th-grade "Algoritmik Düşünme" lesson.
// Flowchart diagrams built from the standard symbols:
// oval = Başla/Bitir, dikdörtgen = işlem, eşkenar dörtgen = karar.
// Conventions: axis/arrow #8a93a6, accent (karar/yön) #e5492b,
// dark text/fill #0e1b33, shape fill #fbf9f4.
// Coordinates hand-computed; the viewBox is 260 wide so shapes are centered.

// (1) Geçti / Kaldı flowchart:
//   Başla -> "Notu al: n" -> karar "n >= 50?" -> Evet: "Geçti yaz" / Hayır: "Kaldı yaz" -> Bitir
// Vertical layout, center column x=130. Each block ~36 px tall, gaps 18 px.
export function GectiKaldiAkis() {
  return (
    <svg viewBox="0 0 260 430" role="img" aria-label="Geçti-Kaldı akış şeması: Başla, notu al, n 50 ve üzeri mi kararı; evet ise Geçti, hayır ise Kaldı yazılır, sonra Bitir">
      {/* Başla (oval) */}
      <ellipse cx="130" cy="28" rx="48" ry="18" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="1.5" />
      <text x="130" y="33" fontSize="13" fill="#0e1b33" textAnchor="middle">Başla</text>
      {/* arrow down */}
      <line x1="130" y1="46" x2="130" y2="64" stroke="#8a93a6" strokeWidth="1.5" />
      <polygon points="130,70 126,62 134,62" fill="#8a93a6" />
      {/* İşlem: Notu al (dikdörtgen) */}
      <rect x="72" y="70" width="116" height="34" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="1.5" />
      <text x="130" y="91" fontSize="12.5" fill="#0e1b33" textAnchor="middle">Notu al: n</text>
      {/* arrow down */}
      <line x1="130" y1="104" x2="130" y2="122" stroke="#8a93a6" strokeWidth="1.5" />
      <polygon points="130,128 126,120 134,120" fill="#8a93a6" />
      {/* Karar: n >= 50? (eşkenar dörtgen), center (130,162), half-w 60, half-h 34 */}
      <polygon points="130,128 190,162 130,196 70,162" fill="#fbf9f4" stroke="#e5492b" strokeWidth="1.8" />
      <text x="130" y="166" fontSize="12.5" fill="#0e1b33" textAnchor="middle">n ≥ 50 ?</text>
      {/* Evet branch: down to left block */}
      <line x1="130" y1="196" x2="130" y2="214" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="130" y1="214" x2="66" y2="214" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="66" y1="214" x2="66" y2="246" stroke="#8a93a6" strokeWidth="1.5" />
      <polygon points="66,252 62,244 70,244" fill="#8a93a6" />
      <text x="100" y="210" fontSize="11" fill="#e5492b" textAnchor="middle">Evet</text>
      {/* Hayır branch: right to right block */}
      <line x1="190" y1="162" x2="218" y2="162" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="218" y1="162" x2="218" y2="246" stroke="#8a93a6" strokeWidth="1.5" />
      <polygon points="218,252 214,244 222,244" fill="#8a93a6" />
      <text x="218" y="156" fontSize="11" fill="#e5492b" textAnchor="middle">Hayır</text>
      {/* İşlem: "Geçti" yaz (left) center x=66 */}
      <rect x="18" y="252" width="96" height="34" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="1.5" />
      <text x="66" y="273" fontSize="12.5" fill="#0e1b33" textAnchor="middle">&quot;Geçti&quot; yaz</text>
      {/* İşlem: "Kaldı" yaz (right) center x=218 -> but keep inside: x=170..254 */}
      <rect x="170" y="252" width="84" height="34" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="1.5" />
      <text x="212" y="273" fontSize="12.5" fill="#0e1b33" textAnchor="middle">&quot;Kaldı&quot; yaz</text>
      {/* merge arrows down to Bitir at (130, 388) */}
      <line x1="66" y1="286" x2="66" y2="332" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="66" y1="332" x2="130" y2="332" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="212" y1="286" x2="212" y2="332" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="212" y1="332" x2="130" y2="332" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="130" y1="332" x2="130" y2="356" stroke="#8a93a6" strokeWidth="1.5" />
      <polygon points="130,362 126,354 134,354" fill="#8a93a6" />
      {/* Bitir (oval) */}
      <ellipse cx="130" cy="390" rx="48" ry="18" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="1.5" />
      <text x="130" y="395" fontSize="13" fill="#0e1b33" textAnchor="middle">Bitir</text>
    </svg>
  );
}

// (2) Döngü (loop) flowchart for "1..5 toplamı":
//   Başla -> toplam=0, sayac=1 -> karar "sayac<=5?"
//     Evet -> toplam=toplam+sayac; sayac=sayac+1 -> (geri karara) ;
//     Hayır -> "toplam yaz" -> Bitir
// Center column x=120. Loop-back arrow runs up the right side.
export function DonguAkis() {
  return (
    <svg viewBox="0 0 300 380" role="img" aria-label="Döngü akış şeması: toplam sıfır ve sayaç bir; sayaç beşten küçük eşit olduğu sürece toplama sayaç eklenip sayaç bir artırılır; koşul bozulunca toplam yazılır">
      {/* Başla */}
      <ellipse cx="120" cy="26" rx="46" ry="17" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="1.5" />
      <text x="120" y="31" fontSize="13" fill="#0e1b33" textAnchor="middle">Başla</text>
      <line x1="120" y1="43" x2="120" y2="60" stroke="#8a93a6" strokeWidth="1.5" />
      <polygon points="120,66 116,58 124,58" fill="#8a93a6" />
      {/* İşlem: init */}
      <rect x="46" y="66" width="148" height="32" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="1.5" />
      <text x="120" y="86" fontSize="12" fill="#0e1b33" textAnchor="middle">toplam = 0, sayac = 1</text>
      <line x1="120" y1="98" x2="120" y2="114" stroke="#8a93a6" strokeWidth="1.5" />
      <polygon points="120,120 116,112 124,112" fill="#8a93a6" />
      {/* Karar center (120,152) half-w 64 half-h 32 */}
      <polygon points="120,120 184,152 120,184 56,152" fill="#fbf9f4" stroke="#e5492b" strokeWidth="1.8" />
      <text x="120" y="156" fontSize="12" fill="#0e1b33" textAnchor="middle">sayac ≤ 5 ?</text>
      {/* Hayır: right then down to "yaz" -> Bitir */}
      <line x1="184" y1="152" x2="240" y2="152" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="240" y1="152" x2="240" y2="246" stroke="#8a93a6" strokeWidth="1.5" />
      <polygon points="240,252 236,244 244,244" fill="#8a93a6" />
      <text x="212" y="146" fontSize="11" fill="#e5492b" textAnchor="middle">Hayır</text>
      {/* Evet: down to body */}
      <line x1="120" y1="184" x2="120" y2="200" stroke="#8a93a6" strokeWidth="1.5" />
      <polygon points="120,206 116,198 124,198" fill="#8a93a6" />
      <text x="92" y="198" fontSize="11" fill="#e5492b" textAnchor="middle">Evet</text>
      {/* İşlem body */}
      <rect x="20" y="206" width="148" height="44" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="1.5" />
      <text x="94" y="224" fontSize="11.5" fill="#0e1b33" textAnchor="middle">toplam = toplam + sayac</text>
      <text x="94" y="240" fontSize="11.5" fill="#0e1b33" textAnchor="middle">sayac = sayac + 1</text>
      {/* loop back: from body left up to karar left vertex */}
      <line x1="20" y1="228" x2="8" y2="228" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="8" y1="228" x2="8" y2="152" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="8" y1="152" x2="56" y2="152" stroke="#8a93a6" strokeWidth="1.5" />
      <polygon points="56,152 48,148 48,156" fill="#8a93a6" />
      {/* İşlem yaz (right column) center x=240 */}
      <rect x="186" y="252" width="108" height="32" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="1.5" />
      <text x="240" y="272" fontSize="12" fill="#0e1b33" textAnchor="middle">toplam yaz</text>
      <line x1="240" y1="284" x2="240" y2="300" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="240" y1="300" x2="120" y2="300" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="120" y1="300" x2="120" y2="318" stroke="#8a93a6" strokeWidth="1.5" />
      <polygon points="120,324 116,316 124,316" fill="#8a93a6" />
      {/* Bitir */}
      <ellipse cx="120" cy="350" rx="46" ry="17" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="1.5" />
      <text x="120" y="355" fontSize="13" fill="#0e1b33" textAnchor="middle">Bitir</text>
    </svg>
  );
}
