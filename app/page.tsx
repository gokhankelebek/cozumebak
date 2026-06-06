import Link from "next/link";
import Math from "@/components/Math";
import SearchBox from "@/components/SearchBox";
import PostCard from "@/components/PostCard";
import { TRACKS, unitsByTrack, trackStats } from "@/lib/curriculum";
import { publishedPosts } from "@/lib/blog";

const KONU = "/konular/turevin-tanimi";

export default function Home() {
  const latestPosts = publishedPosts().slice(0, 3);
  return (
    <main>
      <section className="hero container">
        <p className="eyebrow reveal-up d1">MEB Müfredatı · TYT · AYT</p>
        <h1 className="hero-title reveal-up d2">
          Konuyu öğren.
          <br />
          Soruyu çöz.
          <br />
          <em>
            Çözüme bak.
            <svg className="squiggle" viewBox="0 0 220 12" preserveAspectRatio="none">
              <path d="M3 8 Q 28 2, 55 7 T 110 7 T 165 7 T 217 6" />
            </svg>
          </em>
        </h1>
        <p className="hero-sub reveal-up d3">
          9, 10, 11 ve 12. sınıf matematiğinin tamamı — TYT ve AYT için adım adım
          çözümlü sorular, net konu anlatımları ve interaktif grafiklerle.
        </p>
        <div className="reveal-up d4">
          <SearchBox variant="hero" />
        </div>
        <div className="stats reveal-up d5">
          <div className="stat"><strong>1.200+</strong><span>konu anlatımı</span></div>
          <div className="stat"><strong>9.000+</strong><span>çözümlü soru</span></div>
          <div className="stat"><strong>4</strong><span>sınıf düzeyi</span></div>
          <div className="stat"><strong>TYT + AYT</strong><span>tam kapsam</span></div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <p className="eyebrow">Müfredat</p>
          <h2>Tüm lise matematiği, tek çatı altında</h2>
        </div>
        <div className="grid-cards">
          {TRACKS.map((tm) => {
            const stats = trackStats(tm.key);
            const units = unitsByTrack(tm.key)
              .map((u) => u.title)
              .join(" · ");
            return (
              <Link
                key={tm.key}
                className={`ccard${tm.kind === "exam" ? " exam" : ""}`}
                href={tm.route}
              >
                <div className="ccard-top">
                  <span className="ccard-badge">{tm.shortLabel}</span>
                  <span className="ccard-count">
                    {stats.units} ünite · {stats.questions.toLocaleString("tr")}+ soru
                  </span>
                </div>
                <h3>{tm.label}</h3>
                <p className="ccard-topics">{units}</p>
                <span className="ccard-link">
                  {tm.kind === "exam" ? "Sınava hazırlan →" : "Konulara git →"}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="section feats container">
        <div className="section-head">
          <p className="eyebrow">Neden çözümebak</p>
          <h2>Her cevabın ardında, anlaşılır bir yol</h2>
        </div>
        <div className="feat-grid">
          <div className="feat">
            <div className="ficon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h10M4 18h7" /></svg></div>
            <h3>Adım adım çözüm</h3>
            <p>Her soru; sonucu değil, sonuca götüren mantığı ara adımlarıyla gösterir.</p>
          </div>
          <div className="feat">
            <div className="ficon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 4h14v4l-5 4 5 4v4H5v-4l5-4-5-4z" /></svg></div>
            <h3>KaTeX ile net gösterim</h3>
            <p>Matematiksel ifadeler, basılı kitap kalitesinde ve her ekranda kusursuz.</p>
          </div>
          <div className="feat">
            <div className="ficon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 20V5m0 15h18M3 14c4-7 8 1 12-3s5 2 6-1" /></svg></div>
            <h3>İnteraktif grafikler</h3>
            <p>Soyut kavramları teğet, eğim ve alan gibi figürlerle gözünde canlandır.</p>
          </div>
          <div className="feat">
            <div className="ficon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
            <h3>Müfredata tam uyum</h3>
            <p>MEB kazanımları ve YKS çıkmış sorularıyla birebir hizalanmış içerik.</p>
          </div>
        </div>
      </section>

      <section className="featured container">
        <div className="featured-inner">
          <div className="featured-text">
            <p className="eyebrow">Öne Çıkan Konu · AYT</p>
            <h2>Türevin Tanımı ve Temel Kuralları</h2>
            <p>
              Limit tanımından başlayıp kuvvet, çarpım, bölüm ve zincir kurallarına;
              her adımı çözümlü örnekler ve interaktif grafiklerle.
            </p>
            <Link href={KONU} className="btn btn-primary">Konuyu incele →</Link>
          </div>
          <div className="featured-card">
            <div className="fc-label">Türevin limit tanımı</div>
            <div className="fc-math">
              <Math display tex="f'(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}" />
            </div>
          </div>
        </div>
      </section>

      {latestPosts.length > 0 && (
        <section className="section container">
          <div className="section-head">
            <p className="eyebrow">Blog</p>
            <h2>Son Yazılar</h2>
          </div>
          <div className="post-list home-posts">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="home-posts-more">
            <Link href="/blog" className="btn btn-ghost">
              Tüm yazılar →
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
