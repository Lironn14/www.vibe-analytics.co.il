import type { Lang } from "@/lib/i18n";
import { LANGS } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import PageShell from "@/components/PageShell";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default function TermsPage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang;
  const d = getDict(lang);
  const t = d.terms;

  return (
    <PageShell lang={lang} theme="light">
      <section className="phero wrap">
        <span className="eyebrow reveal">
          <span className="dot" />
          {t.eyebrow}
        </span>
        <h1 className="reveal" data-d="1">
          {t.title[0]}
          <b>{t.title[1]}</b>
        </h1>
        <p className="updated reveal" data-d="2">
          {t.updated}
        </p>
      </section>

      <section className="content-section legal wrap reveal">
        {t.sections.map((s, i) => (
          <div className="legal-block" key={i}>
            <h2>{s.h}</h2>
            <p>{s.p}</p>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
