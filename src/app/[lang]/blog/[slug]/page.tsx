import Link from "next/link";
import { notFound } from "next/navigation";
import type { Lang } from "@/lib/i18n";
import { LANGS } from "@/lib/i18n";
import PageShell from "@/components/PageShell";
import { icons } from "@/components/icons";
import { getPost, posts, type Block } from "@/lib/posts";

export function generateStaticParams() {
  return LANGS.flatMap((lang) => posts.map((p) => ({ lang, slug: p.slug })));
}

function renderInline(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part));
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return <p>{renderInline(block.text)}</p>;
    case "h2":
      return <h2>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "ul":
      return (
        <ul>
          {block.items.map((it, i) => (
            <li key={i}>{renderInline(it)}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((it, i) => (
            <li key={i}>{renderInline(it)}</li>
          ))}
        </ol>
      );
    case "code":
      return <div className="code-box">{block.text}</div>;
    case "stat":
      return (
        <div className="stat-box">
          <div className="num">{block.num}</div>
          <div className="label">{block.label}</div>
        </div>
      );
    case "mistake":
      return (
        <div className="mistake-box">
          <h3>{block.title}</h3>
          <p>{block.text}</p>
        </div>
      );
  }
}

export default function BlogPostPage({
  params,
}: {
  params: { lang: Lang; slug: string };
}) {
  const { lang, slug } = params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = post.related.map((s) => getPost(s)).filter(Boolean) as NonNullable<
    ReturnType<typeof getPost>
  >[];
  const related_label = lang === "he" ? "פוסטים קשורים" : "Related posts";
  const base = `/${lang}`;

  return (
    <PageShell lang={lang} theme="light">
      <section className="post-hero wrap">
        <h1>{post.title[lang]}</h1>
        <div className="post-meta">
          <div className="item">
            {icons.clock()}
            {post.readTime[lang]}
          </div>
          <div className="item">
            {icons.person()}
            {post.author}
          </div>
          <div className="item">
            {icons.calendar()}
            {post.date[lang]}
          </div>
        </div>
      </section>

      <article className="post-content wrap">
        {post.body[lang].map((b, i) => (
          <BlockView block={b} key={i} />
        ))}

        <div className="related">
          <h3>{related_label}</h3>
          <div className="related-grid">
            {related.map((r) => (
              <Link href={`${base}/blog/${r.slug}`} className="related-card" key={r.slug}>
                <span className="cat">{r.category[lang]}</span>
                <h4>{r.title[lang]}</h4>
                <p>{r.excerpt[lang]}</p>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </PageShell>
  );
}
