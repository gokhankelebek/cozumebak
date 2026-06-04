// Figures for the 10th-grade "Sayma ve Permütasyon" lesson.
// Tree (ağaç şeması) showing the multiplication rule: a meal with 2 starters
// (çorba) and 3 mains (ana yemek) gives 2·3 = 6 distinct menus. Each starter
// branches to all 3 mains; counting the leaves gives the product.
// Conventions: branches/text dark #0e1b33, accent leaves #e5492b, axis #8a93a6.
// Coordinates hand-computed; root at left, two level-1 nodes, six leaves.

// Root (40,120). Level-1 nodes: Ç1 (150,60), Ç2 (150,180).
// Leaves from Ç1 at x=300, y = 30, 60, 90. Leaves from Ç2 at y = 150, 180, 210.
export function CarpmaAgaci() {
  const leavesTop = [30, 60, 90];
  const leavesBot = [150, 180, 210];
  return (
    <svg viewBox="0 0 360 240" role="img" aria-label="Çarpma kuralı ağaç şeması: 2 çorbadan her biri 3 ana yemeğe dallanıyor, toplam 2 çarpı 3 eşittir 6 menü">
      {/* level-1 branches: root -> Ç1, Ç2 */}
      <line x1="40" y1="120" x2="150" y2="60" stroke="#0e1b33" strokeWidth="1.6" />
      <line x1="40" y1="120" x2="150" y2="180" stroke="#0e1b33" strokeWidth="1.6" />
      {/* level-2 branches from Ç1 */}
      {leavesTop.map((y, i) => (
        <line key={`t${i}`} x1="150" y1="60" x2="300" y2={y} stroke="#e5492b" strokeWidth="1.4" />
      ))}
      {/* level-2 branches from Ç2 */}
      {leavesBot.map((y, i) => (
        <line key={`b${i}`} x1="150" y1="180" x2="300" y2={y} stroke="#e5492b" strokeWidth="1.4" />
      ))}

      {/* nodes */}
      <circle cx="40" cy="120" r="3.5" fill="#0e1b33" />
      <circle cx="150" cy="60" r="3.5" fill="#0e1b33" />
      <circle cx="150" cy="180" r="3.5" fill="#0e1b33" />
      {[...leavesTop, ...leavesBot].map((y, i) => (
        <circle key={`l${i}`} cx="300" cy={y} r="3.5" fill="#e5492b" />
      ))}

      {/* labels */}
      <text x="138" y="56" fontSize="12" fill="#0e1b33" fontWeight="700">Ç1</text>
      <text x="138" y="194" fontSize="12" fill="#0e1b33" fontWeight="700">Ç2</text>
      <text x="308" y="34" fontSize="11" fill="#e5492b">A1</text>
      <text x="308" y="64" fontSize="11" fill="#e5492b">A2</text>
      <text x="308" y="94" fontSize="11" fill="#e5492b">A3</text>
      <text x="308" y="154" fontSize="11" fill="#e5492b">A1</text>
      <text x="308" y="184" fontSize="11" fill="#e5492b">A2</text>
      <text x="308" y="214" fontSize="11" fill="#e5492b">A3</text>
      <text x="14" y="124" fontSize="11" fill="#8a93a6">menü</text>
    </svg>
  );
}
