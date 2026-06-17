import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { LANGS } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import PageShell from "@/components/PageShell";
import { Arrow } from "@/components/icons";
import { posts, extraCards } from "@/lib/posts";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default function BlogPage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang;
  const d = getDict(lang);
  const b = d.blog;
  const base = `/${lang}`;

  return (
    <PageShell lang={lang} theme="light">
      <section className="blog-hero">
        <div className="softbg">
          <div className="blob b1" />
        </div>
        <div className="wrap">
          <h1>{b.title}</h1>
          <p className="lead">{b.lead}</p>
        </div>
      </section>

      <section className="blog-section wrap">
        <div className="blog-grid">
          {posts.map((p, i) => (
            <Link
              href={`${base}/blog/${p.slug}`}
              className="blog-card reveal"
              data-d={String((i % 3) + 1)}
              key={p.slug}
            >
              <div className="thumb">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.title[lang]} loading="lazy" />
              </div>
              <div className="content">
                <span className="cat">{p.category[lang]}</span>
                <h3>{p.title[lang]}</h3>
                <p>{p.excerpt[lang]}</p>
                <div className="meta">
                  <span className="author">👤 {p.author}</span>
                  <span className="more">
                    {b.readMore}
                    <Arrow lang={lang} />
                  </span>
                </div>
              </div>
            </Link>
          ))}

          {extraCards.map((c, i) => (
            <article className="blog-card reveal" data-d={String((i % 3) + 1)} key={i}>
              <div className="thumb">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt={c.title[lang]} loading="lazy" />
              </div>
              <div className="content">
                <span className="cat">{c.category[lang]}</span>
                <h3>{c.title[lang]}</h3>
                <p>{c.excerpt[lang]}</p>
                <div className="meta">
                  <span className="author">👤 {c.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
