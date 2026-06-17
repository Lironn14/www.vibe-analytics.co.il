import type { Lang } from "@/lib/i18n";
import { LANGS } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import PageShell from "@/components/PageShell";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default function AboutPage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang;
  const d = getDict(lang);
  const a = d.about;

  return (
    <PageShell lang={lang} theme="light">
      <section className="phero wrap">
        <span className="eyebrow reveal">
          <span className="dot" />
          {a.eyebrow}
        </span>
        <h1 className="reveal" data-d="1">
          {a.title[0]}
          <b>{a.title[1]}</b>
        </h1>
      </section>

      <section className="content-section wrap reveal">
        <div className="about-bio">
          <div className="about-text">
            <p>{a.bodyP1}</p>
            <p>{a.bodyP2}</p>

            <div className="founder-card">
              <span className="founder-avatar">
                {a.founderName
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </span>
              <div className="founder-txt">
                <h4>{a.founderName}</h4>
                <span className="role">{a.founderRole}</span>
                <span className="tag">{a.founderTag}</span>
              </div>
            </div>
          </div>

          <div className="about-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://picsum.photos/seed/founder-lironn/480/600" alt={a.founderName} loading="lazy" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
