// ─────────────────────────────────────────────────────────────────────────────
// Tercih listesi — 24 tercihlik listeyi saklama ve strateji kontrolleri.
//
// ÖSYM yerleştirmesi adayı, puanının yettiği EN ÜSTTEKİ tercihine yerleştirir;
// üstteki bir programa yerleşememek alttakilere zarar vermez. Bu yüzden doğru
// strateji listeyi gerçek isteğe göre sıralamak ve sona güvenli programlar
// koymaktır. Kontroller bu iki ilkeye dayanır; "hangi bölüm daha iyi" yargısı
// vermez, yalnızca sıralamanın sonucunu açıklar.
// ─────────────────────────────────────────────────────────────────────────────

import type { PuanTuru } from "@/lib/yksPuan";
import type { Program, Sinif, Uygunluk } from "@/lib/tercih";

export const EN_FAZLA_TERCIH = 24;
export const LISTE_ANAHTARI = "cb-tercih:v1";

export interface ListeOgesi {
  tur: PuanTuru;
  kod: string;
}

export interface ListeSatiri extends ListeOgesi {
  program: Program | null;
  /** Öğrencinin bu puan türündeki sırası girilmediyse null. */
  sinif: Sinif | null;
  uygunluk: Uygunluk | null;
}

export type UyariTuru = "uygunsuz" | "guvenli-yok" | "hepsi-zor" | "siralama" | "bilinmiyor" | "dolu";

export interface Uyari {
  tur: UyariTuru;
  /** "dikkat": öğrenciyi açıkta bırakabilir; "bilgi": düşünmesi gereken bir nokta. */
  seviye: "dikkat" | "bilgi";
  mesaj: string;
  /** İlgili satırların liste içindeki sırası (1'den başlar). */
  satirlar?: number[];
}

/** Küçük sayı = yerleşmesi daha kesin. */
const KESINLIK: Record<Sinif, number> = { guvenli: 0, hedef: 1, hayal: 2, zor: 3 };

export function listeyiOku(): ListeOgesi[] {
  try {
    const raw = localStorage.getItem(LISTE_ANAHTARI);
    if (!raw) return [];
    const v = JSON.parse(raw);
    if (!Array.isArray(v)) return [];
    return v
      .filter((x) => x && typeof x.kod === "string" && typeof x.tur === "string")
      .slice(0, EN_FAZLA_TERCIH);
  } catch {
    return [];
  }
}

export function listeyiYaz(liste: ListeOgesi[]) {
  try {
    localStorage.setItem(LISTE_ANAHTARI, JSON.stringify(liste));
  } catch {
    /* storage blocked → list lives only for this visit */
  }
}

function adi(s: ListeSatiri, i: number) {
  return `${i + 1}. tercihin (${s.program?.ad ?? s.kod})`;
}

/** Listeye bakıp öğrenciye açıklanabilir uyarılar üretir. */
export function stratejiKontrol(satirlar: ListeSatiri[]): Uyari[] {
  const uyarilar: Uyari[] = [];
  if (satirlar.length === 0) return uyarilar;

  const uygunsuz = satirlar.flatMap((s, i) => (s.uygunluk?.uygun === false ? [i + 1] : []));
  if (uygunsuz.length) {
    uyarilar.push({
      tur: "uygunsuz",
      seviye: "dikkat",
      mesaj:
        uygunsuz.length === 1
          ? `${uygunsuz[0]}. tercihinin başarı sırası şartını karşılamıyorsun; ÖSYM bu tercihi değerlendirmeye almaz.`
          : `${uygunsuz.join(", ")}. tercihlerinin başarı sırası şartını karşılamıyorsun; ÖSYM bunları değerlendirmeye almaz.`,
      satirlar: uygunsuz,
    });
  }

  const bilinen = satirlar
    .map((s, i) => ({ s, i }))
    .filter(({ s }) => s.sinif != null && s.uygunluk?.uygun !== false);
  const bilinmeyen = satirlar.flatMap((s, i) => (s.sinif == null ? [i + 1] : []));
  if (bilinmeyen.length) {
    uyarilar.push({
      tur: "bilinmiyor",
      seviye: "bilgi",
      mesaj:
        bilinmeyen.length === 1
          ? `${bilinmeyen[0]}. tercihin için o puan türündeki sıralamanı girmedin; bu tercih kontrol edilemedi.`
          : `${bilinmeyen.join(", ")}. tercihlerin için o puan türlerindeki sıralamanı girmedin; bu tercihler kontrol edilemedi.`,
      satirlar: bilinmeyen,
    });
  }

  if (bilinen.length) {
    const guvenliVar = bilinen.some(({ s }) => s.sinif === "guvenli");
    if (!guvenliVar) {
      uyarilar.push({
        tur: "guvenli-yok",
        seviye: "dikkat",
        mesaj:
          "Listende hiç Güvenli program yok. Tabanlar beklenenden yükselirse hiçbir yere yerleşemeyebilirsin; listenin sonuna gerçekten okumayı kabul edeceğin birkaç Güvenli program ekle.",
      });
    }
    if (bilinen.every(({ s }) => s.sinif === "zor")) {
      uyarilar.push({
        tur: "hepsi-zor",
        seviye: "dikkat",
        mesaj: "Listendeki programların hepsine son yıllarda senin sıralamandan çok daha iyi sıralamalarla yerleşilmiş.",
      });
    }

    // Daha kesin bir program, daha az kesin bir programın üstündeyse: ÖSYM alttakine hiç bakmaz.
    // Bu her zaman yanlış değildir (öğrenci üsttekini gerçekten daha çok isteyebilir), o yüzden "bilgi".
    const ciftler: [number, number][] = [];
    for (let a = 0; a < bilinen.length; a++) {
      for (let b = a + 1; b < bilinen.length; b++) {
        const ust = bilinen[a];
        const alt = bilinen[b];
        if (ust.s.sinif === "guvenli" && KESINLIK[alt.s.sinif!] >= KESINLIK.hedef) ciftler.push([ust.i, alt.i]);
      }
    }
    if (ciftler.length) {
      const [u, a] = ciftler[0];
      const digerleri = ciftler.length - 1;
      uyarilar.push({
        tur: "siralama",
        seviye: "bilgi",
        mesaj:
          `${adi(satirlar[u], u)} Güvenli görünüyor ve ${adi(satirlar[a], a)} üstünde. ` +
          "ÖSYM seni üstteki ilk uygun programa yerleştirir; üsttekine yerleşirsen alttakine hiç bakılmaz. " +
          "Alttaki programı gerçekten daha çok istiyorsan onu yukarı taşı." +
          (digerleri > 0 ? ` (Listende bunun gibi ${digerleri} durum daha var.)` : ""),
        satirlar: [u + 1, a + 1],
      });
    }
  }

  if (satirlar.length >= EN_FAZLA_TERCIH) {
    uyarilar.push({
      tur: "dolu",
      seviye: "bilgi",
      mesaj: `ÖSYM'de en fazla ${EN_FAZLA_TERCIH} tercih yapabilirsin; listen dolu.`,
    });
  }
  return uyarilar;
}

/** ÖSYM tercih ekranına girmek için düz metin: sıra, program kodu, program ve üniversite. */
export function listeMetni(satirlar: ListeSatiri[]): string {
  return satirlar
    .map((s, i) => {
      const p = s.program;
      return `${i + 1}. ${s.kod} — ${p ? `${p.ad}, ${p.uni.ad} (${p.uni.sehir})` : "bilinmeyen program"} [${s.tur}]`;
    })
    .join("\n");
}
