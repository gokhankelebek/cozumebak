// ─────────────────────────────────────────────────────────────────────────────
// Hedef net — puan hesaplamanın tersi: "bu programa girmek için kaç net lazım?"
//
//   1. Hedef sıra: programın taban sırası (lib/tercih.ts → esasSira; ikisinden
//      zor olanı). "Güvenli" hedefte robotun eşiği (0,8 × taban) kullanılır.
//   2. Gereken puan: ÖSYM'nin puan → sıra tablosunu tersine okuruz (ikili arama
//      ile siralamaTahmini'nin tersi). Puan değil sıra esas alınır, çünkü taban
//      puanlar yıldan yıla oynar ama sıralar daha kararlıdır.
//   3. Gereken ham puan = yerleştirme puanı − OBP katkısı.
//   4. Gereken ağırlıklı net: Σ katsayı × net = ham − 100.
//
// Kaydırıcılar öğrencinin kendi planıdır; robot yalnızca istenince ("Kalanı
// robot dağıtsın") devreye girer ve "dengeli dağıtım" yapar: öğrencinin
// dokunmadığı her testte, son deneme netinden testin tavanına kalan boşluğun
// AYNI ORANI kapatılır. Bu hem soru sınırını gözetir hem de yükü dengeler;
// öğrencinin elle ayarladığı testler olduğu gibi kalır (dagit → kilitli).
// ─────────────────────────────────────────────────────────────────────────────

import { siralamaTahmini } from "@/lib/yksSiralama";
import { AGIRLIK, katsayi, obp, obpCarpani, testBilgisi, type PuanTuru, type TestKey } from "@/lib/yksPuan";
import type { Program } from "@/lib/tercih";

/** Robotun "Güvenli" eşiğiyle aynı: öğrenci sırası ≤ 0,8 × taban. */
export const GUVENLI_ORANI = 0.8;
/** Netler 0,25'lik adımlarla değişir (bir yanlış = −0,25 net). */
export const NET_ADIMI = 0.25;

export type HedefTipi = "taban" | "guvenli";

/**
 * Bu sıraya (veya daha iyisine) ulaşmak için gereken en düşük puan.
 * obpli=true → yerleştirme puanı (OBP dahil), false → sınav (ham) puanı.
 */
export function gerekenPuan(tur: PuanTuru, hedefSira: number, obpli: boolean): number {
  let alt = 100;
  let ust = obpli ? 560 : 500;
  if (siralamaTahmini(tur, ust, obpli).sira > hedefSira) return ust;
  for (let i = 0; i < 40; i++) {
    const orta = (alt + ust) / 2;
    if (siralamaTahmini(tur, orta, obpli).sira <= hedefSira) ust = orta;
    else alt = orta;
  }
  return ust;
}

export interface OgrenciBilgisi {
  /** null: diploma notu girilmedi → OBP'siz sınav puanı dağılımı kullanılır. */
  diploma: number | null;
  oncekiYil: boolean;
}

export interface Hedef {
  /** null: programın sıra şartı yok ve kontenjanı dolmadı → puanın hesaplanması yeterli. */
  hedefSira: number | null;
  /** Hedef sıraya karşılık gelen puan (OBP'li veya OBP'siz, obpli'ye göre). */
  gerekenPuan: number | null;
  /** Gereken sınav (ham) puanı; 100–500. */
  gerekenHam: number;
  /** Σ katsayı × net için gereken toplam (ham − 100). */
  gerekenToplam: number;
  obpli: boolean;
  obpKatki: number;
  /** Hedefi neyin belirlediği: taban, kılavuz şartı, öğrencinin yazdığı sıra/puan veya hiçbiri. */
  belirleyen: "taban" | "sira-sarti" | "puan-sarti" | "serbest" | "sira" | "puan";
  /** Ham puan 500'ü geçiyorsa: tam netle bile ulaşılamaz. */
  ulasilamaz: boolean;
}

export function hedefHesapla(p: Program, tur: PuanTuru, tip: HedefTipi, o: OgrenciBilgisi): Hedef {
  const obpli = o.diploma != null;
  const obpKatki = obpli ? obp(o.diploma!) * obpCarpani(o.oncekiYil) : 0;

  let hedefSira: number | null = null;
  let belirleyen: Hedef["belirleyen"] = "serbest";
  if (p.doldu && p.esasSira != null) {
    hedefSira = tip === "guvenli" ? Math.max(1, Math.floor(p.esasSira * GUVENLI_ORANI)) : p.esasSira;
    belirleyen = "taban";
  }
  if (p.siraSarti != null && (hedefSira == null || p.siraSarti < hedefSira)) {
    hedefSira = p.siraSarti;
    belirleyen = "sira-sarti";
  }

  let puan: number | null = null;
  let ham = 100;
  if (hedefSira != null) {
    puan = gerekenPuan(tur, hedefSira, obpli);
    ham = obpli ? puan - obpKatki : puan;
  }
  if (p.puanSarti != null) {
    // Şart yerleştirme puanı üzerinden; OBP bilinmiyorsa sıfır varsayılır (temkinli).
    const sartHam = p.puanSarti - obpKatki;
    if (sartHam > ham) {
      ham = sartHam;
      puan = obpli ? p.puanSarti : sartHam;
      belirleyen = "puan-sarti";
    }
  }
  ham = Math.max(100, ham);
  return {
    hedefSira,
    gerekenPuan: puan,
    gerekenHam: ham,
    gerekenToplam: ham - 100,
    obpli,
    obpKatki,
    belirleyen,
    ulasilamaz: ham > 500,
  };
}

export type Netler = Partial<Record<TestKey, number>>;

/** Bu puan türünü oluşturan testler (TYT önce). */
export function turTestleri(tur: PuanTuru): TestKey[] {
  return Object.keys(AGIRLIK[tur]) as TestKey[];
}

/** Σ katsayı × net. */
export function agirlikliToplam(tur: PuanTuru, netler: Netler): number {
  return turTestleri(tur).reduce((s, k) => s + katsayi(tur, k) * (netler[k] ?? 0), 0);
}

export interface Dagitim {
  /** Her test için önerilen hedef net (kilitliler aynen). */
  hedef: Record<TestKey, number>;
  /** "yetiyor": şu anki (ve kilitli) netler zaten yeterli; "mumkun"; "imkansiz": tam netle bile yetmez. */
  durum: "yetiyor" | "mumkun" | "imkansiz";
  /** Kilitsiz testlerde kalan boşluğun kapatılması gereken oranı (0–1). */
  oran: number;
  /** imkansiz ise eksik kalan ağırlıklı puan. */
  eksikPuan: number;
}

const yukariYuvarla = (n: number) => Math.ceil(n / NET_ADIMI - 1e-9) * NET_ADIMI;

/**
 * Gereken toplamı, kilitsiz testlere dengeli dağıtır: her testte
 * hedef = mevcut + oran × (soru − mevcut). Netler 0,25'lik adımlara oturtulur;
 * toplam hedefin altında kalmaz ve hedefi en fazla bir adım (≈ 1 puandan az) aşar.
 */
export function dagit(tur: PuanTuru, mevcut: Netler, kilitli: Netler, gerekenToplam: number): Dagitim {
  const testler = turTestleri(tur);
  const hedef = {} as Record<TestKey, number>;
  let kalan = gerekenToplam;
  let kapasite = 0;
  for (const k of testler) {
    const c = katsayi(tur, k);
    if (kilitli[k] != null) {
      hedef[k] = kilitli[k]!;
      kalan -= c * kilitli[k]!;
    } else {
      const m = Math.min(mevcut[k] ?? 0, testBilgisi(k).soru);
      hedef[k] = m;
      kalan -= c * m;
      kapasite += c * (testBilgisi(k).soru - m);
    }
  }
  if (kalan <= 1e-9) return { hedef, durum: "yetiyor", oran: 0, eksikPuan: 0 };

  const kilitsiz = testler.filter((k) => kilitli[k] == null);
  if (kalan > kapasite + 1e-9) {
    for (const k of kilitsiz) hedef[k] = testBilgisi(k).soru;
    return { hedef, durum: "imkansiz", oran: 1, eksikPuan: kalan - kapasite };
  }
  const oran = kalan / kapasite;

  // 1) Round every test DOWN to the 0,25 grid (never below its starting net).
  const ideal = {} as Record<TestKey, number>;
  for (const k of kilitsiz) {
    const soru = testBilgisi(k).soru;
    const m = hedef[k];
    ideal[k] = m + oran * (soru - m);
    hedef[k] = Math.min(soru, m + Math.floor((ideal[k] - m) / NET_ADIMI + 1e-9) * NET_ADIMI);
  }
  // 2) Add 0,25-net steps until the target is met. Each step goes to the test
  //    furthest behind its ideal share (keeps the plan balanced); the final step
  //    goes to the test whose step overshoots the least. Overshoot stays below one
  //    step (≈0,3–0,8 puan) instead of up to one step per test.
  let eksik = gerekenToplam - testler.reduce((t, k) => t + katsayi(tur, k) * hedef[k], 0);
  while (eksik > 1e-9) {
    const adaylar = kilitsiz
      .filter((k) => hedef[k] < testBilgisi(k).soru - 1e-9)
      .map((k) => {
        const adim = Math.min(NET_ADIMI, testBilgisi(k).soru - hedef[k]);
        return { k, adim, puan: katsayi(tur, k) * adim, geride: ideal[k] - hedef[k] };
      });
    if (adaylar.length === 0) break;
    const bitirenler = adaylar.filter((a) => a.puan >= eksik - 1e-9);
    const sec = bitirenler.length
      ? bitirenler.reduce((x, y) => (y.puan < x.puan ? y : x))
      : adaylar.reduce((x, y) => (y.geride > x.geride ? y : x));
    hedef[sec.k] += sec.adim;
    eksik -= sec.puan;
  }
  return { hedef, durum: "mumkun", oran, eksikPuan: 0 };
}

/**
 * "Bu testten tek başına kaç net daha yapsan eksik kapanır?" Testin kalan
 * boşluğu yetmiyorsa null. Sonuç 0,25'e yukarı yuvarlanır.
 */
export function tekBasina(tur: PuanTuru, test: TestKey, eksikToplam: number, simdikiNet: number): number | null {
  const c = katsayi(tur, test);
  if (eksikToplam <= 0 || c <= 0) return 0;
  const gereken = yukariYuvarla(eksikToplam / c);
  return simdikiNet + gereken <= testBilgisi(test).soru + 1e-9 ? gereken : null;
}

/** "İlk 1000'e girmek için": hedef doğrudan bir başarı sırası. */
export function siraHedefi(tur: PuanTuru, sira: number, o: OgrenciBilgisi): Hedef {
  const obpli = o.diploma != null;
  const obpKatki = obpli ? obp(o.diploma!) * obpCarpani(o.oncekiYil) : 0;
  const puan = gerekenPuan(tur, Math.max(1, Math.floor(sira)), obpli);
  const ham = Math.max(100, obpli ? puan - obpKatki : puan);
  return {
    hedefSira: Math.max(1, Math.floor(sira)),
    gerekenPuan: puan,
    gerekenHam: ham,
    gerekenToplam: ham - 100,
    obpli,
    obpKatki,
    belirleyen: "sira",
    ulasilamaz: ham > 500,
  };
}

export type PuanTipi = "yerlestirme" | "ham";

/**
 * "400 puan için": hedef doğrudan bir puan. Yerleştirme puanında OBP katkısı
 * düşülür (diploma notu yoksa 0 sayılır); ham puan olduğu gibi kullanılır.
 */
export function puanHedefi(tur: PuanTuru, puan: number, tip: PuanTipi, o: OgrenciBilgisi): Hedef {
  const obpli = tip === "yerlestirme" && o.diploma != null;
  const obpKatki = obpli ? obp(o.diploma!) * obpCarpani(o.oncekiYil) : 0;
  const ham = Math.max(100, puan - obpKatki);
  return {
    hedefSira: siralamaTahmini(tur, obpli ? puan : ham, obpli).sira,
    gerekenPuan: puan,
    gerekenHam: ham,
    gerekenToplam: ham - 100,
    obpli,
    obpKatki,
    belirleyen: "puan",
    ulasilamaz: ham > 500,
  };
}
