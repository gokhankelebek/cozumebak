# çözümebak — Next.js + MDX

Türk lise matematiği referans sitesi. Tasarım dili HTML prototipiyle birebir aynı;
fark şu: artık **içerik MDX olarak yazılıyor**, çatı (header/footer/grid) ve bileşenler
tek yerde yaşıyor ve matematik **derleme anında** (sunucuda) HTML'e dönüştürülüyor —
yani SEO için kusursuz.

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # üretim derlemesi (statik HTML üretir)
```

## Yeni konu eklemek (2 adım)

Tüm site **tek bir kaynaktan** beslenir: [`lib/curriculum.ts`](lib/curriculum.ts).
Bu dosya grades → units → topics ağacını tutar; index sayfaları, breadcrumb,
önceki/sonraki, arama ve sitemap hepsi buradan türetilir.

**1. Manifest'e konuyu ekle** — `lib/curriculum.ts` içindeki `TOPICS` dizisine bir
girdi ekle (içerik hazır olunca `status: "published"`):

```ts
{
  slug: "ikinci-derece-fonksiyonlar",
  title: "İkinci Dereceden Fonksiyonlar",
  track: "10",
  unit: "ikinci-derece-10",
  summary: "Parabol, tepe noktası ve kökler.",
  minutes: 6, difficulty: "Kolay", questionCount: 18,
  status: "published",
},
```

**2. MDX dosyasını oluştur** — `app/konular/ikinci-derece-fonksiyonlar/page.mdx`:

```mdx
import { topicMetadata } from "@/lib/seo";

export const metadata = topicMetadata("ikinci-derece-fonksiyonlar");

<Konu slug="ikinci-derece-fonksiyonlar" />

Bir parabolün tepe noktası: $x = -\dfrac{b}{2a}$.

<Ornek>
  <Soru>$f(x)=x^2-4x+3$ parabolünün tepe noktasını bulunuz.</Soru>
  <Cozum>

  1. $x = -\dfrac{b}{2a} = -\dfrac{-4}{2} = 2$.
  2. $f(2) = 4 - 8 + 3 = -1$.

  <Cevap>Tepe noktası $(2,\,-1)$.</Cevap>

  </Cozum>
</Ornek>
```

## Yazara açık bileşenler (her MDX dosyasında otomatik kullanılır)

| Bileşen | İş |
| --- | --- |
| `<Konu slug="…"/>` | Breadcrumb + başlık + etiket çipleri — hepsi manifest'ten gelir |
| `<KonuNav slug="…"/>` | Önceki/sonraki konu (aynı ünitede, manifest'ten) |
| `<KonuBaslik …/>` | Manuel başlık (tek seferlik sayfalar için; normalde `<Konu>` kullan) |
| `<Ornek>` | Çözümlü örnek kutusu |
| `<Soru>` | Soru metni etiketi |
| `<Ipucu>` | Açılır ipucu |
| `<Cozum>` | İmza etkileşim: "Çözüme Bak" → adım adım çözüm (yeşil) |
| `<Cevap>` | Yeşil sonuç kutusu |
| `<Figur>` / `<Altyazi>` | Şekil ve alt yazı |
| `<Sorular slug="…"/>` | İnteraktif çözümlü soru seti (A–E, ÖSYM formatı) — banka `lib/sorular/<slug>.ts` |

### Konuya soru seti eklemek

1. `lib/sorular/<slug>.ts` dosyasını oluştur (örnek: `lib/sorular/turevin-tanimi.ts`) —
   5 şıklı sorular, adım adım çözüm ve sonuç; math için `String.raw` + `$...$`.
2. `lib/sorular/index.ts` içindeki `BANKS`'e kaydet.
3. Konu MDX'inin sonuna (KonuNav'dan önce) `<Sorular slug="<slug>" />` ekle.

Soru içeriği sunucuda render edilir (SEO'ya dahil); istemci adası yalnızca
şık seçimi/skor durumunu yönetir. Cevaplar `localStorage`'a yazılır
(`cb-quiz:<slug>`) — ileride ilerleme takibinin temeli. `<Konu>` çipindeki
soru sayısı, banka varsa gerçek sayıyı gösterir.

Düz markdown numaralı liste `<Cozum>` içine konunca otomatik olarak numaralı
adım çemberlerine dönüşür. Tablolar `.konu` içinde otomatik stillenir.

## Mimari notları

- **Tek kaynak (manifest):** [`lib/curriculum.ts`](lib/curriculum.ts) — grades/units/topics
  ağacı. Index sayfaları (`/9-sinif` … `/ayt`, `/konular`), breadcrumb, önceki/sonraki,
  arama indeksi ve `sitemap.xml` hepsi buradan türetilir.
- **Tek çatı:** `app/layout.tsx` (header + footer + kareli grid + fontlar + KaTeX CSS).
- **Tasarım sistemi:** `app/globals.css` — tüm CSS değişkenleriyle tema burada.
- **İstemci adaları:** sadece `components/SiteHeader.tsx` (scroll),
  `components/SearchBox.tsx` (anlık arama) ve `components/Reveal.tsx`
  ("Çözüme Bak" / "İpucu" aç-kapa — içerik yine sunucuda render edilir, sadece
  CSS ile gizlenir; yani çözümler arama motorlarına görünür). Geri kalan her
  şey sunucuda statik HTML.
- **Arama:** `components/SearchBox.tsx` + `lib/searchIndex.ts` — manifest'ten üretilen
  statik indekste, Türkçe-duyarlı (ı/türev) anlık eşleme. Backend yok.
- **Konu durumu:** her topic `status: "published" | "soon"`. `soon` konular index'te
  görünür ama tıklanınca "Yakında" stub sayfası (`noindex`) açar — içerik gelince sadece
  `status`'ü çevirip MDX dosyasını eklemen yeterli.
- **SEO / Matematik:** Matematik `remark-math` + `lib/rehypeKatexServer.mjs`
  ile **derleme anında** HTML'e çevrilir — tarayıcıda KaTeX çalışmaz, arama
  motorları formülleri render edilmiş hâlde görür. Üç bilinçli karar:
  - **Bellek:** KaTeX çıktısı yalnızca HTML (`output: "html"`). rehype-katex'in
    varsayılanı olan MathML ikizi her formülün derlenmiş boyutunu ikiye katlar;
    tarihsel Vercel OOM'unun (SIGKILL) baş şüphelisi budur. HTML-only build
    yerel ölçümde ~2.3 GB tepe bellekle geçer (Vercel makinesi 8 GB). MathML'i
    geri açmak istersen önce tepe belleği yeniden ölç.
  - **Erişilebilirlik:** MathML olmadığı için her formül `role="img"` +
    LaTeX kaynağını taşıyan `aria-label` alır.
  - **Display sezgiseli:** Tek satırlık `$$…$$` micromark'ta "inline" sayılır;
    paragrafta tek başına duran matematik display bloğuna terfi ettirilir
    (eski istemci renderer'ın sezgiseliyle birebir aynı).
  Her konunun `metadata`'sı `lib/seo.ts`'teki `topicMetadata(slug)`'tan gelir;
  yapılandırılmış veri (`LearningResource`, `BreadcrumbList`) `<Konu>`
  bileşeni üzerinden her konu sayfasına otomatik eklenir (`lib/jsonLd.ts`).

## Yayına alma (Vercel)

Ek yapılandırma gerekmez — Next.js 15 App Router Vercel'de otomatik algılanır.

```bash
npm i -g vercel   # bir kez
vercel            # önizleme dağıtımı
vercel --prod     # üretim
```

`app/layout.tsx` içindeki `metadataBase` `https://cozumebak.com` olarak ayarlı; alan adını
Vercel proje ayarlarından bağla. `sitemap.xml` ve `robots.txt` otomatik üretilir.
**Not:** `output: "export"` (statik export) eklenmedi — metadata route'ları ve OG görsel
üretimi (`next/og`) için Vercel Node runtime gerekiyor; sayfalar zaten SSG olarak statiktir.
