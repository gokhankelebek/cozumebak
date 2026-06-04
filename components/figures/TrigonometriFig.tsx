// Figures for the 11th-grade Trigonometri unit.
// Colors follow the site convention:
//   axis #8a93a6, accent #e5492b, dark #0e1b33, fill #fbf9f4.
// All coordinates are HAND-COMPUTED and documented inline.

// (1) Radyan: bir çemberde yarıçap uzunluğunda bir yay, merkezde 1 radyanlık
// açı görür. Çember merkezi O=(180,150), yarıçap r=110.
// 1 radyan ≈ 57.296°. Terminal kenarı bu açıyla çiziyoruz.
//   uç nokta: (180 + 110·cos57.296°, 150 - 110·sin57.296°)
//   cos57.296° ≈ 0.5403, sin57.296° ≈ 0.8415
//   x = 180 + 110·0.5403 = 180 + 59.4 = 239.4 ≈ 239
//   y = 150 - 110·0.8415 = 150 - 92.6 = 57.4 ≈ 57
// Yay üzerindeki orta nokta (açının yarısı ≈ 28.65° için etiket konumu):
//   cos28.65° ≈ 0.8772, sin28.65° ≈ 0.4801
//   x = 180 + 130·0.8772 = 180 + 114 = 294 ; y = 150 - 130·0.4801 = 150 - 62 = 88
export function RadyanTanim() {
  return (
    <svg viewBox="0 0 360 300" role="img" aria-label="Bir radyanın tanımı: yarıçap uzunluğundaki yay merkezde bir radyanlık açı görür">
      <circle cx="180" cy="150" r="110" stroke="#0e1b33" strokeWidth="2" fill="#fbf9f4" />
      {/* yatay yarıçap (başlangıç kenarı) */}
      <line x1="180" y1="150" x2="290" y2="150" stroke="#0e1b33" strokeWidth="2" />
      {/* terminal kenar (1 radyan) */}
      <line x1="180" y1="150" x2="239" y2="57" stroke="#e5492b" strokeWidth="2.5" />
      {/* yarıçap uzunluğundaki yay, kalın vurgulu */}
      <path d="M 290 150 A 110 110 0 0 0 239 57" stroke="#e5492b" strokeWidth="4" fill="none" />
      {/* küçük açı yayı */}
      <path d="M 215 150 A 35 35 0 0 0 200.9 121.4" stroke="#0e1b33" strokeWidth="1.5" fill="none" />
      <text x="222" y="138" fontSize="13" fill="#0e1b33" textAnchor="middle">1 rad</text>
      <text x="305" y="92" fontSize="13" fill="#e5492b" textAnchor="middle">yay = r</text>
      <text x="232" y="162" fontSize="14" fill="#0e1b33" textAnchor="middle">r</text>
      <circle cx="180" cy="150" r="3.5" fill="#0e1b33" />
      <text x="170" y="166" fontSize="14" fill="#0e1b33" textAnchor="middle">O</text>
    </svg>
  );
}

// (2) Sinüs grafiği: y = sin x, bir tam periyot 0..2π.
// Eksen merkezi (sol): x ekseni y=110'da, 0 noktası x=40'ta.
// Ölçek: 2π -> 280px, yani π -> 140px. Genlik 1 -> 70px.
// Örnek noktalar (x_pix, y_pix), y_pix = 110 - 70·sin:
//   0:    (40,110)
//   π/2:  (110, 110-70 = 40)        sin=1
//   π:    (180,110)                 sin=0
//   3π/2: (250, 110+70 = 180)       sin=-1
//   2π:   (320,110)                 sin=0
export function SinusGrafik() {
  return (
    <svg viewBox="0 0 360 220" role="img" aria-label="y eşittir sinüs x fonksiyonunun grafiği, sıfırdan iki pi'ye bir tam periyot">
      {/* eksenler */}
      <line x1="20" y1="110" x2="345" y2="110" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="40" y1="20" x2="40" y2="200" stroke="#8a93a6" strokeWidth="1.5" />
      <polygon points="345,110 335,105 335,115" fill="#8a93a6" />
      <polygon points="40,20 35,30 45,30" fill="#8a93a6" />
      <text x="338" y="128" fontSize="13" fill="#8a93a6" textAnchor="middle">x</text>
      <text x="26" y="30" fontSize="13" fill="#8a93a6" textAnchor="middle">y</text>
      {/* y = 1 ve y = -1 kılavuzları */}
      <line x1="40" y1="40" x2="320" y2="40" stroke="#8a93a6" strokeWidth="0.8" strokeDasharray="4 4" />
      <line x1="40" y1="180" x2="320" y2="180" stroke="#8a93a6" strokeWidth="0.8" strokeDasharray="4 4" />
      <text x="30" y="44" fontSize="12" fill="#8a93a6" textAnchor="middle">1</text>
      <text x="26" y="184" fontSize="12" fill="#8a93a6" textAnchor="middle">-1</text>
      {/* sinüs eğrisi: kübik Bézier yaklaşımıyla */}
      <path d="M 40 110 C 75 40, 145 40, 180 110 C 215 180, 285 180, 320 110"
            stroke="#e5492b" strokeWidth="2.5" fill="none" />
      {/* x ekseni işaretleri */}
      <text x="110" y="128" fontSize="12" fill="#0e1b33" textAnchor="middle">π/2</text>
      <text x="180" y="128" fontSize="12" fill="#0e1b33" textAnchor="middle">π</text>
      <text x="250" y="98" fontSize="12" fill="#0e1b33" textAnchor="middle">3π/2</text>
      <text x="320" y="128" fontSize="12" fill="#0e1b33" textAnchor="middle">2π</text>
    </svg>
  );
}

// (3) Kosinüs grafiği: y = cos x, bir tam periyot 0..2π.
// Aynı ölçek. y_pix = 110 - 70·cos:
//   0:    (40, 40)     cos=1
//   π/2:  (110,110)    cos=0
//   π:    (180,180)    cos=-1
//   3π/2: (250,110)    cos=0
//   2π:   (320, 40)    cos=1
export function KosinusGrafik() {
  return (
    <svg viewBox="0 0 360 220" role="img" aria-label="y eşittir kosinüs x fonksiyonunun grafiği, sıfırdan iki pi'ye bir tam periyot">
      <line x1="20" y1="110" x2="345" y2="110" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="40" y1="20" x2="40" y2="200" stroke="#8a93a6" strokeWidth="1.5" />
      <polygon points="345,110 335,105 335,115" fill="#8a93a6" />
      <polygon points="40,20 35,30 45,30" fill="#8a93a6" />
      <text x="338" y="128" fontSize="13" fill="#8a93a6" textAnchor="middle">x</text>
      <text x="26" y="30" fontSize="13" fill="#8a93a6" textAnchor="middle">y</text>
      <line x1="40" y1="40" x2="320" y2="40" stroke="#8a93a6" strokeWidth="0.8" strokeDasharray="4 4" />
      <line x1="40" y1="180" x2="320" y2="180" stroke="#8a93a6" strokeWidth="0.8" strokeDasharray="4 4" />
      <text x="30" y="44" fontSize="12" fill="#8a93a6" textAnchor="middle">1</text>
      <text x="26" y="184" fontSize="12" fill="#8a93a6" textAnchor="middle">-1</text>
      {/* kosinüs eğrisi: (40,40) tepe -> (180,180) dip -> (320,40) tepe */}
      <path d="M 40 40 C 75 40, 145 180, 180 180 C 215 180, 285 40, 320 40"
            stroke="#e5492b" strokeWidth="2.5" fill="none" />
      <text x="110" y="128" fontSize="12" fill="#0e1b33" textAnchor="middle">π/2</text>
      <text x="180" y="98" fontSize="12" fill="#0e1b33" textAnchor="middle">π</text>
      <text x="250" y="128" fontSize="12" fill="#0e1b33" textAnchor="middle">3π/2</text>
      <text x="320" y="98" fontSize="12" fill="#0e1b33" textAnchor="middle">2π</text>
    </svg>
  );
}

// (4) Bölgelerde işaret: birim çember dört bölgesi ve sin/cos/tan işaretleri.
// Merkez O=(180,150), r=120. ASTC kuralı.
export function BolgeIsaret() {
  return (
    <svg viewBox="0 0 360 320" role="img" aria-label="Birim çemberde dört bölge ve trigonometrik fonksiyonların işaretleri">
      <circle cx="180" cy="150" r="120" stroke="#0e1b33" strokeWidth="2" fill="#fbf9f4" />
      <line x1="48" y1="150" x2="312" y2="150" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="180" y1="18" x2="180" y2="282" stroke="#8a93a6" strokeWidth="1.5" />
      <polygon points="312,150 302,145 302,155" fill="#8a93a6" />
      <polygon points="180,18 175,28 185,28" fill="#8a93a6" />
      <text x="304" y="168" fontSize="13" fill="#8a93a6" textAnchor="middle">x</text>
      <text x="166" y="28" fontSize="13" fill="#8a93a6" textAnchor="middle">y</text>
      {/* I. bölge: hepsi + */}
      <text x="246" y="92" fontSize="13" fill="#0e1b33" textAnchor="middle">I</text>
      <text x="246" y="110" fontSize="11" fill="#e5492b" textAnchor="middle">hepsi +</text>
      {/* II. bölge: yalnız sin + */}
      <text x="114" y="92" fontSize="13" fill="#0e1b33" textAnchor="middle">II</text>
      <text x="114" y="110" fontSize="11" fill="#e5492b" textAnchor="middle">sin +</text>
      {/* III. bölge: yalnız tan + */}
      <text x="114" y="200" fontSize="13" fill="#0e1b33" textAnchor="middle">III</text>
      <text x="114" y="218" fontSize="11" fill="#e5492b" textAnchor="middle">tan +</text>
      {/* IV. bölge: yalnız cos + */}
      <text x="246" y="200" fontSize="13" fill="#0e1b33" textAnchor="middle">IV</text>
      <text x="246" y="218" fontSize="11" fill="#e5492b" textAnchor="middle">cos +</text>
      <circle cx="180" cy="150" r="3.5" fill="#0e1b33" />
    </svg>
  );
}
