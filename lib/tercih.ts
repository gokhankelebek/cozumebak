// ─────────────────────────────────────────────────────────────────────────────
// Tercih robotu — program verisi ve "Hayal / Hedef / Güvenli" sınıflandırması.
//
// Veri: public/tercih/<yıl>/<tür>.json, scripts/tercih-veri.py ile ÖSYM'nin
// resmî tablolarından üretilir. Her programda iki taban sıralaması vardır:
//   • sira:       son yılın en küçük yerleştirme puanından, ÖSYM'nin yığınsal puan
//                 dağılımıyla hesaplanan TAHMİNİ sıra (lib/yksSiralama.ts),
//   • oncekiSira: ÖSYM kılavuzundaki bir önceki yılın RESMÎ başarı sırası.
// Sınıflandırmada ikisinden zor olanı (küçük sayı) esas alınır: bir program ancak
// iki yıla göre de rahatsa "Güvenli" sayılır. Yanlış "güvenli" etiketi, yanlış
// "hayal" etiketinden çok daha pahalıdır.
// ─────────────────────────────────────────────────────────────────────────────

import type { PuanTuru } from "@/lib/yksPuan";
import { siralamaTahmini } from "@/lib/yksSiralama";

export const TERCIH_VERI_YILI = 2026;

export const DOSYA: Record<PuanTuru, string> = { SAY: "say", EA: "ea", SÖZ: "soz", DİL: "dil", TYT: "tyt" };

export type UniTuru = "D" | "V" | "K" | "YK" | "YV";

export const UNI_TURU_ETIKET: Record<UniTuru, string> = {
  D: "Devlet",
  V: "Vakıf",
  K: "KKTC",
  YK: "Yurt dışı (kamu)",
  YV: "Yurt dışı (vakıf)",
};

export type Ucret = "devlet" | "burslu" | "indirimli" | "ucretli";

export const UCRET_ETIKET: Record<Ucret, string> = {
  devlet: "Devlet (ücretsiz)",
  burslu: "Tam burslu",
  indirimli: "İndirimli",
  ucretli: "Ücretli",
};

export type Sinif = "guvenli" | "hedef" | "hayal" | "zor";

export const SINIF_ETIKET: Record<Sinif, { ad: string; aciklama: string }> = {
  guvenli: { ad: "Güvenli", aciklama: "Sıralaman son yıllardaki tabanın rahatça üstünde." },
  hedef: { ad: "Hedef", aciklama: "Tabana yakınsın; yerleşme ihtimalin gerçek ama garanti değil." },
  hayal: { ad: "Hayal", aciklama: "Tabanın biraz altındasın; iyi bir yılda olabilir." },
  zor: { ad: "Ulaşması zor", aciklama: "Son yıllarda bu sıralamayla yerleşilmedi." },
};

/** Öğrenci sırası ÷ program taban sırası eşikleri (küçük = daha iyi). */
const ESIK = { guvenli: 0.8, hedef: 1.1, hayal: 1.5 };

export interface Uni {
  ad: string;
  sehir: string;
  tur: UniTuru;
}

export interface Program {
  kod: string;
  uni: Uni;
  ad: string;
  kontenjan: number;
  yerlesen: number;
  enKucuk: number | null;
  enBuyuk: number | null;
  /** Son yılın tahmini taban sırası (en küçük puandan). */
  sira: number | null;
  /** Önceki yılın ÖSYM resmî taban başarı sırası. */
  oncekiSira: number | null;
  oncekiPuan: number | null;
  sure: number | null;
  ucret: Ucret;
  /** Son yıl kontenjan doldu mu? Dolmadıysa taban puanı bağlayıcı değildir. */
  doldu: boolean;
  /** Sınıflandırmada esas alınan (zor olan) taban sırası. */
  esasSira: number | null;
  /** ÖSYM kılavuzundaki başarı sırası şartı (ör. Tıp 50.000): bu sıranın altındakiler tercih edemez. */
  siraSarti: number | null;
  /** Kılavuzdaki en düşük yerleştirme puanı şartı (birkaç programda). */
  puanSarti: number | null;
}

interface HamVeri {
  yil: number;
  puanTuru: PuanTuru;
  unis: [string, string, UniTuru][];
  p: [
    kod: string,
    uni: number,
    ad: string,
    kontenjan: number,
    yerlesen: number,
    enKucuk: number | null,
    enBuyuk: number | null,
    oncekiSira: number | null,
    oncekiPuan: number | null,
    sure: number | null,
    siraSarti: number | null,
    puanSarti: number | null,
  ][];
}

export function ucretTuru(programAdi: string, uniTuru: UniTuru): Ucret {
  if (/\(Burslu\)/.test(programAdi)) return "burslu";
  if (/İndirimli\)/.test(programAdi)) return "indirimli";
  if (/\(Ücretli\)/.test(programAdi)) return "ucretli";
  // Devlet üniversitelerinde ikinci öğretim (İÖ) ücretlidir.
  if (uniTuru === "D") return /\(İÖ\)/.test(programAdi) ? "ucretli" : "devlet";
  if (uniTuru === "YK") return "devlet";
  return "ucretli";
}

export function parse(ham: HamVeri): Program[] {
  const unis: Uni[] = ham.unis.map(([ad, sehir, tur]) => ({ ad, sehir, tur }));
  const tur = ham.puanTuru;
  return ham.p.map(([kod, u, ad, kontenjan, yerlesen, enKucuk, enBuyuk, oncekiSira, oncekiPuan, sure, siraSarti, puanSarti]) => {
    const uni = unis[u];
    const doldu = enKucuk != null && yerlesen >= kontenjan;
    const sira = enKucuk != null ? siralamaTahmini(tur, enKucuk, true).sira : null;
    const adaylar = [sira, oncekiSira].filter((x): x is number => x != null && x > 0);
    return {
      kod,
      uni,
      ad,
      kontenjan,
      yerlesen,
      enKucuk,
      enBuyuk,
      sira,
      oncekiSira,
      oncekiPuan,
      sure,
      ucret: ucretTuru(ad, uni.tur),
      doldu,
      esasSira: adaylar.length ? Math.min(...adaylar) : null,
      siraSarti: siraSarti ?? null,
      puanSarti: puanSarti ?? null,
    };
  });
}

export interface Uygunluk {
  uygun: boolean;
  /** Uygun değilse kısa açıklama. */
  neden?: string;
}

/**
 * Kılavuzdaki başarı sırası / puan şartını sağlıyor mu? Puan şartı (ör. en az 350)
 * sıraya çevrilir; öğrencinin puanını değil sırasını bildiğimiz için yaklaşıktır.
 */
export function uygunluk(p: Program, ogrenciSira: number, tur: PuanTuru): Uygunluk {
  if (p.siraSarti != null && ogrenciSira > p.siraSarti) {
    return { uygun: false, neden: `Bu programı tercih etmek için en az ${p.siraSarti.toLocaleString("tr-TR")}. sıra gerekir.` };
  }
  if (p.puanSarti != null) {
    const gerekenSira = siralamaTahmini(tur, p.puanSarti, true).sira;
    if (ogrenciSira > gerekenSira) {
      return {
        uygun: false,
        neden: `Bu program en az ${p.puanSarti} yerleştirme puanı ister (yaklaşık ${gerekenSira.toLocaleString("tr-TR")}. sıra).`,
      };
    }
  }
  return { uygun: true };
}

export async function programlariYukle(tur: PuanTuru): Promise<Program[]> {
  const res = await fetch(`/tercih/${TERCIH_VERI_YILI}/${DOSYA[tur]}.json`);
  if (!res.ok) throw new Error(`Veri yüklenemedi (${res.status})`);
  return parse((await res.json()) as HamVeri);
}

/**
 * Öğrenci sırasına göre sınıf. Kontenjanı dolmayan programlarda son yerleşen
 * herkes alındığı için taban bağlayıcı değildir → "güvenli" sayılır.
 */
export function siniflandir(p: Program, ogrenciSira: number): Sinif {
  if (!p.doldu) return "guvenli";
  if (p.esasSira == null) return "zor";
  const r = ogrenciSira / p.esasSira;
  if (r <= ESIK.guvenli) return "guvenli";
  if (r <= ESIK.hedef) return "hedef";
  if (r <= ESIK.hayal) return "hayal";
  return "zor";
}

/** Öğrencilerin aradığı yaygın kısaltmalar (ÖSYM tablosunda tam ad yazar). */
const KISALTMA: Record<string, string> = {
  "Orta Doğu Teknik Üniversitesi": "odtü metu",
  "İstanbul Teknik Üniversitesi": "itü",
  "Yıldız Teknik Üniversitesi": "ytü",
  "Karadeniz Teknik Üniversitesi": "ktü",
  "Gebze Teknik Üniversitesi": "gtü",
  "Dokuz Eylül Üniversitesi": "deü",
  "İzmir Yüksek Teknoloji Enstitüsü": "iyte",
  "Boğaziçi Üniversitesi": "boun",
  "Marmara Üniversitesi": "mü",
  "Hacettepe Üniversitesi": "hü",
  "Ankara Yıldırım Beyazıt Üniversitesi": "aybü",
  "TOBB Ekonomi ve Teknoloji Üniversitesi": "etü",
  "Abdullah Gül Üniversitesi": "agü",
};

/** Bir program için aranabilir metin: bölüm, üniversite, şehir ve kısaltma. */
export function aramaMetni(p: Program): string {
  return aramaAnahtari(`${p.ad} ${p.uni.ad} ${p.uni.sehir} ${KISALTMA[p.uni.ad] ?? ""}`);
}

/** Türkçe'ye duyarlı, aksan ve büyük/küçük harf bağımsız arama anahtarı. */
export function aramaAnahtari(s: string): string {
  return s
    .replace(/İ/g, "i")
    .replace(/I/g, "ı")
    .toLowerCase()
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c");
}
