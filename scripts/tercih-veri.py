#!/usr/bin/env python3
"""
Tercih robotu verisi — ÖSYM'nin resmî tablolarından public/tercih/<yıl>/*.json üretir.

Girdi (ÖSYM'den indir, aynı klasöre koy; dosya adları aşağıdaki gibi olmalı):
  puanlar-tablo4.xlsx  "En Küçük ve En Büyük Puanlar (TABLO-4)"  lisans sonuçları
  puanlar-tablo3.xlsx  "En Küçük ve En Büyük Puanlar (TABLO-3)"  ön lisans sonuçları
      → osym.gov.tr › "<yıl>-YKS Yerleştirme Sonuçlarına İlişkin Sayısal Bilgiler"
  kilavuz-tablo4.xls   Programlar ve Kontenjanlar Kılavuzu, Tablo-4 (lisans)
  kilavuz-tablo3.xls   Programlar ve Kontenjanlar Kılavuzu, Tablo-3 (ön lisans)
  kilavuz.pdf          Kılavuzun kendisi (PDF) — "Bk." açıklama maddelerinin metni
      → osym.gov.tr › "<yıl> YKS Yükseköğretim Programları ve Kontenjanları Kılavuzu"
      (bir önceki yılın resmî başarı sırasını, süreyi ve programın açıklama madde
      numaralarını tablolardan; maddelerdeki başarı sırası / puan şartlarını PDF'ten
      alıyoruz)

Kullanım:
  python3 -m venv /tmp/tv && /tmp/tv/bin/pip install openpyxl==3.1.5 xlrd==2.0.1 pypdf==5.1.0
  /tmp/tv/bin/python scripts/tercih-veri.py --girdi ~/indirilenler/osym --yil 2026

Her yıl Temmuz sonunda yeni sonuçlar ve kılavuz çıkınca yeniden çalıştır; ayrıca
lib/yksSiralama.ts içindeki puan dağılımını da güncelle (sıralama oradan hesaplanır).
"""

import argparse
import json
import re
from pathlib import Path

import openpyxl
import pypdf
import xlrd

PUAN_TURU_DOSYA = {"SAY": "say", "EA": "ea", "SÖZ": "soz", "DİL": "dil", "TYT": "tyt"}

UNI_TURU = {"DEVLET": "D", "VAKIF": "V", "KKTC": "K", "YURTDISI KAMU": "YK", "YURTDISI VAKIF": "YV"}

ILLER = (
    "ADANA ADIYAMAN AFYONKARAHİSAR AĞRI AMASYA ANKARA ANTALYA ARTVİN AYDIN BALIKESİR BİLECİK "
    "BİNGÖL BİTLİS BOLU BURDUR BURSA ÇANAKKALE ÇANKIRI ÇORUM DENİZLİ DİYARBAKIR EDİRNE ELAZIĞ "
    "ERZİNCAN ERZURUM ESKİŞEHİR GAZİANTEP GİRESUN GÜMÜŞHANE HAKKARİ HATAY ISPARTA MERSİN "
    "İSTANBUL İZMİR KARS KASTAMONU KAYSERİ KIRKLARELİ KIRŞEHİR KOCAELİ KONYA KÜTAHYA MALATYA "
    "MANİSA KAHRAMANMARAŞ MARDİN MUĞLA MUŞ NEVŞEHİR NİĞDE ORDU RİZE SAKARYA SAMSUN SİİRT SİNOP "
    "SİVAS TEKİRDAĞ TOKAT TRABZON TUNCELİ ŞANLIURFA UŞAK VAN YOZGAT ZONGULDAK AKSARAY BAYBURT "
    "KARAMAN KIRIKKALE BATMAN ŞIRNAK BARTIN ARDAHAN IĞDIR YALOVA KARABÜK KİLİS OSMANİYE DÜZCE"
).split()

# Adında il geçmeyen üniversiteler (ÖSYM tablosunda parantezli şehir de yok).
ELLE_SEHIR = {
    "GEBZE TEKNİK ÜNİVERSİTESİ": "KOCAELİ",
    "TÜRK-JAPON BİLİM VE TEKNOLOJİ ÜNİVERSİTESİ": "İSTANBUL",
}

KUCUK_KELIMELER = {"ve", "ile", "için"}

# Büyük harfle kalması gereken kısaltmalar ve özel yazımlar (başlık düzeninden sonra uygulanır).
OZEL_YAZIM = {"Tobb": "TOBB", "Ted": "TED", "Mef": "MEF", "Kto": "KTO", "Bezm-İ": "Bezm-i"}


def tr_lower(s: str) -> str:
    return s.replace("I", "ı").replace("İ", "i").lower()


def tr_title(s: str) -> str:
    """'ABDULLAH GÜL ÜNİVERSİTESİ' → 'Abdullah Gül Üniversitesi' (Türkçe büyük/küçük harf)."""
    out = []
    for i, w in enumerate(tr_lower(s).split(" ")):
        if i > 0 and w in KUCUK_KELIMELER:
            out.append(w)
            continue
        # Tireli kelimelerde her parçayı büyüt: "türk-japon" → "Türk-Japon"
        parcalar = []
        for p in w.split("-"):
            if not p:
                parcalar.append(p)
                continue
            ilk = {"i": "İ", "ı": "I"}.get(p[0], p[0].upper())
            parcalar.append(ilk + p[1:])
        kelime = "-".join(parcalar)
        out.append(OZEL_YAZIM.get(kelime, kelime))
    return " ".join(out)


def uni_ve_sehir(ham: str) -> tuple[str, str]:
    ham = ham.strip()
    m = re.search(r"\s*\(([^()]+)\)\s*$", ham)
    if m:
        ad = ham[: m.start()]
        yer = m.group(1).strip()
        if yer.startswith("KKTC-"):
            return tr_title(ad), f"KKTC – {tr_title(yer[5:])}"
        return tr_title(ad), tr_title(yer)
    if ham in ELLE_SEHIR:
        return tr_title(ham), tr_title(ELLE_SEHIR[ham])
    kelimeler = ham.split()
    for n in (2, 1):
        aday = " ".join(kelimeler[:n])
        if aday in ILLER:
            return tr_title(ham), tr_title(aday)
    raise SystemExit(f"Şehri bulunamayan üniversite: {ham!r} — ELLE_SEHIR'e ekle.")


def sayi(v):
    if v in (None, "", "--", "---"):
        return None
    try:
        return float(str(v).replace(",", "."))
    except ValueError:
        return None


def kilavuz_oku(yol: Path, madde_sutun: int, sira_sutun: int, puan_sutun: int) -> dict:
    """Program kodu → (süre, önceki yıl başarı sırası, önceki yıl en küçük puan, madde numaraları)."""
    sh = xlrd.open_workbook(str(yol)).sheet_by_index(0)
    out = {}
    for i in range(sh.nrows):
        kod = str(sh.cell_value(i, 0)).strip()
        if not kod.isdigit():
            continue
        sure = sayi(sh.cell_value(i, 2))
        sira = sayi(sh.cell_value(i, sira_sutun))
        puan = sayi(sh.cell_value(i, puan_sutun))
        ham_madde = sh.cell_value(i, madde_sutun)
        if isinstance(ham_madde, float):
            ham_madde = str(int(ham_madde))
        maddeler = {int(m) for m in re.findall(r"\d+", str(ham_madde))}
        out[kod] = (
            int(sure) if sure else None,
            int(sira) if sira else None,
            round(puan, 3) if puan else None,
            maddeler,
        )
    return out


def madde_sartlari(pdf: Path) -> tuple[dict[int, int], dict[int, int]]:
    """
    Kılavuzdaki "Bk. N …" açıklama maddelerinden başarı sırası ve puan şartlarını çıkarır:
      "…başarı sırası 300 bininci sırada olan adayın…"        → sira_sarti[N] = 300000
      "…ilgili yerleştirme puanının en az 350 olması gerekmektedir" → puan_sarti[N] = 350
    Bir madde iki farklı eşik verirse güvenli tarafta kalmak için hata verir.
    """
    metin = "\n".join((s.extract_text() or "") for s in pypdf.PdfReader(str(pdf)).pages)
    duz = re.sub(r"\s+", " ", metin)
    sira_sarti: dict[int, set] = {}
    puan_sarti: dict[int, set] = {}
    for no, govde in re.findall(r"Bk\. ?(\d{1,3}) (.*?)(?=Bk\. ?\d{1,3} |$)", duz):
        n = int(no)
        for m in re.finditer(r"başarı ?sırası (\d+) ?bininci", govde):
            sira_sarti.setdefault(n, set()).add(int(m.group(1)) * 1000)
        for m in re.finditer(r"yerleştirme pu ?anının en az (\d{3})", govde):
            puan_sarti.setdefault(n, set()).add(int(m.group(1)))
    for ad, d in (("başarı sırası", sira_sarti), ("puan", puan_sarti)):
        for n, v in d.items():
            if len(v) > 1:
                raise SystemExit(f"Bk. {n} maddesinde birden çok {ad} şartı var: {sorted(v)} — elle kontrol et.")
    if not sira_sarti:
        raise SystemExit("Kılavuzda hiç başarı sırası şartı bulunamadı — PDF metni değişmiş olabilir.")
    return {n: v.pop() for n, v in sira_sarti.items()}, {n: v.pop() for n, v in puan_sarti.items()}


def sonuc_oku(yol: Path):
    ws = openpyxl.load_workbook(str(yol), read_only=True, data_only=True).worksheets[0]
    for r in ws.iter_rows(min_row=4, values_only=True):
        kod = str(r[0] or "").strip()
        if not kod.isdigit():
            continue
        yield {
            "kod": kod,
            "tur": str(r[1]).strip(),
            "uni": str(r[2]).strip(),
            "program": re.sub(r"\s+", " ", str(r[4])).strip(),
            "puanTuru": str(r[5]).strip(),
            "kontenjan": int(sayi(r[6]) or 0),
            "yerlesen": int(sayi(r[7]) or 0),
            "enKucuk": sayi(r[8]),
            "enBuyuk": sayi(r[9]),
        }


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--girdi", required=True, help="ÖSYM dosyalarının olduğu klasör")
    ap.add_argument("--yil", type=int, required=True, help="Sonuç yılı (ör. 2026)")
    ap.add_argument("--cikti", default=None, help="Varsayılan: public/tercih/<yıl>")
    a = ap.parse_args()

    girdi = Path(a.girdi).expanduser()
    cikti = Path(a.cikti) if a.cikti else Path(__file__).resolve().parent.parent / "public" / "tercih" / str(a.yil)
    cikti.mkdir(parents=True, exist_ok=True)

    kilavuz = {}
    kilavuz.update(kilavuz_oku(girdi / "kilavuz-tablo4.xls", 9, 10, 11))
    kilavuz.update(kilavuz_oku(girdi / "kilavuz-tablo3.xls", 8, 9, 10))
    sira_sarti, puan_sarti = madde_sartlari(girdi / "kilavuz.pdf")
    print("Başarı sırası şartı olan maddeler:", dict(sorted(sira_sarti.items())))
    print("Puan şartı olan maddeler:", dict(sorted(puan_sarti.items())))

    gruplar: dict[str, list] = {k: [] for k in PUAN_TURU_DOSYA}
    atlanan = 0
    for dosya in ("puanlar-tablo4.xlsx", "puanlar-tablo3.xlsx"):
        for p in sonuc_oku(girdi / dosya):
            # Yalnızca KKTC vatandaşlarına açık kontenjanlar Türkiye'deki aday için anlamsız.
            if "KKTC Uyruklu" in p["program"]:
                atlanan += 1
                continue
            if p["puanTuru"] not in gruplar or p["tur"] not in UNI_TURU:
                raise SystemExit(f"Beklenmeyen değer: {p}")
            gruplar[p["puanTuru"]].append(p)

    for puan_turu, programlar in gruplar.items():
        unis: list[list] = []
        uni_index: dict[str, int] = {}
        satirlar = []
        for p in programlar:
            if p["uni"] not in uni_index:
                ad, sehir = uni_ve_sehir(p["uni"])
                uni_index[p["uni"]] = len(unis)
                unis.append([ad, sehir, UNI_TURU[p["tur"]]])
            sure, onceki_sira, onceki_puan, maddeler = kilavuz.get(p["kod"], (None, None, None, set()))
            # Birden çok şart varsa en sıkı olanı (en küçük sıra, en yüksek puan) geçerlidir.
            siralar = [sira_sarti[m] for m in maddeler if m in sira_sarti]
            puanlar = [puan_sarti[m] for m in maddeler if m in puan_sarti]
            satirlar.append([
                p["kod"],
                uni_index[p["uni"]],
                p["program"],
                p["kontenjan"],
                p["yerlesen"],
                round(p["enKucuk"], 3) if p["enKucuk"] else None,
                round(p["enBuyuk"], 3) if p["enBuyuk"] else None,
                onceki_sira,
                onceki_puan,
                sure,
                min(siralar) if siralar else None,
                max(puanlar) if puanlar else None,
            ])
        veri = {
            "yil": a.yil,
            "puanTuru": puan_turu,
            "kaynak": "ÖSYM — En Küçük ve En Büyük Puanlar (Tablo 3/4) ve Programlar ve Kontenjanlar Kılavuzu",
            "alanlar": ["kod", "uni", "program", "kontenjan", "yerlesen", "enKucuk", "enBuyuk",
                        "oncekiSira", "oncekiPuan", "sure", "siraSarti", "puanSarti"],
            "unis": unis,
            "p": satirlar,
        }
        yol = cikti / f"{PUAN_TURU_DOSYA[puan_turu]}.json"
        yol.write_text(json.dumps(veri, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
        print(f"{puan_turu}: {len(satirlar)} program, {len(unis)} üniversite → {yol} ({yol.stat().st_size // 1024} KB)")
    print(f"KKTC uyruklu kontenjanı olduğu için atlanan: {atlanan}")


if __name__ == "__main__":
    main()
