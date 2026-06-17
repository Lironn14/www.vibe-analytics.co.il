import type { Lang } from "@/lib/i18n";
import { LANGS } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import PageShell from "@/components/PageShell";
import { icons } from "@/components/icons";
import ContactForm from "./ContactForm";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default function ContactPage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang;
  const d = getDict(lang);
  const c = d.contact;

  return (
    <PageShell lang={lang} theme="light">
      <section className="contact-hero">
        <div className="softbg">
          <div className="blob b1" />
          <div className="blob b2" />
        </div>
        <div className="wrap">
          <h1>
            {c.heroTitle[0]}
            <b>{c.heroTitle[1]}</b>
          </h1>
          <p className="lead">{c.heroLead}</p>
        </div>
      </section>

      <section className="form-section wrap">
        <div className="form-wrap">
          <div className="form-col">
            <h2>
              {c.colTitle[0]}
              <b>{c.colTitle[1]}</b>
            </h2>
            <p>{c.colP}</p>

            {c.items.map((it, i) => {
              const Icon = icons[it.icon];
              return (
                <div className="contact-item" key={i}>
                  <div className="ico">{Icon && <Icon />}</div>
                  <div className="txt">
                    <h4>{it.h}</h4>
                    <p dir={it.ltr ? "ltr" : undefined}>{it.v}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="form-col">
            <ContactForm lang={lang} c={c} />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
