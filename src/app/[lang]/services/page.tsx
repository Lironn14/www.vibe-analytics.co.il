import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { LANGS } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import PageShell from "@/components/PageShell";
import { Arrow, icons } from "@/components/icons";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

function Check() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function ServicesPage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang;
  const d = getDict(lang);
  const s = d.services;
  const base = `/${lang}`;

  return (
    <PageShell lang={lang} theme="light">
      <section className="phero wrap">
        <div className="softbg">
          <div className="blob b1" />
          <div className="blob b2" />
        </div>
        <span className="eyebrow reveal">
          <span className="dot" />
          {s.eyebrow}
        </span>
        <h1 className="reveal" data-d="1">
          {s.title[0]}
          <b>{s.title[1]}</b>
        </h1>
        <p className="reveal" data-d="2">
          {s.sub}
        </p>
        <div className="sindex reveal" data-d="3">
          {s.index.map((it) => (
            <a href={`#${it.id}`} key={it.id}>
              <b>{it.n}</b> {it.t}
            </a>
          ))}
        </div>
      </section>

      {/* 01 IMPLEMENTATION */}
      <section className="sblock wrap" id="impl">
        <div className="shead reveal">
          <span className="idx">01</span>
          <div>
            <span className="en">{s.impl.en}</span>
            <h2>{s.impl.h}</h2>
          </div>
          <div className="ico">{icons.grid()}</div>
        </div>
        <p className="sintro reveal" data-d="1">
          {s.impl.intro}
        </p>
        <div className="timeline">
          {s.impl.steps.map((st, i) => (
            <div className="tstep reveal" data-d="1" key={i}>
              <div className="tn">{st.n}</div>
              <div>
                <h4>
                  {st.h} <span className="en">{st.en}</span>
                </h4>
                <p>{st.p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 02 AUDIT */}
      <section className="sblock wrap" id="audit">
        <div className="shead reveal">
          <span className="idx">02</span>
          <div>
            <span className="en">{s.audit.en}</span>
            <h2>{s.audit.h}</h2>
          </div>
          <div className="ico">{icons.search()}</div>
        </div>
        <div className="scols">
          <div className="reveal" data-d="1">
            <p className="sintro" style={{ marginTop: 0 }}>
              {s.audit.intro}
            </p>
            <div className="checklist" style={{ marginTop: 26 }}>
              {s.audit.checklist.map((c, i) => (
                <div className="ci" key={i}>
                  <span className="ck">
                    <Check />
                  </span>
                  <div>
                    <h4>{c.h}</h4>
                    <p>{c.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="vpanel audit reveal" data-d="2" data-spotlight="true">
            <div className="vt">
              <b>{s.audit.panelTitle}</b>
              <span style={{ color: "#5fe0a8" }}>{s.audit.panelChecks}</span>
            </div>
            <div className="rows">
              {s.audit.rows.map((r, i) => (
                <div className="arow" key={i}>
                  <span className="nm">{r.nm}</span>
                  <span className="bar">
                    <i style={{ width: `${r.w}%` }} />
                  </span>
                  <span className={`st ${r.st}`}>{r.lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03 CONSULTING */}
      <section className="sblock wrap" id="consult">
        <div className="shead reveal">
          <span className="idx">03</span>
          <div>
            <span className="en">{s.consult.en}</span>
            <h2>{s.consult.h}</h2>
          </div>
          <div className="ico">{icons.chat()}</div>
        </div>
        <p className="sintro reveal" data-d="1">
          {s.consult.intro}
        </p>
        <div className="benefits">
          {s.consult.benefits.map((b, i) => {
            const Icon = icons[b.icon];
            return (
              <div className="benefit reveal" data-d={String(i + 1)} key={i}>
                <div className="ico">{Icon && <Icon width={24} height={24} />}</div>
                <h4>{b.h}</h4>
                <p>{b.p}</p>
              </div>
            );
          })}
        </div>
        <div className="highlight reveal" data-d="2">
          <span className="spark">⚡</span>
          <p>
            {s.consult.highlight[0]}
            <b>{s.consult.highlight[1]}</b>
            {s.consult.highlight[2]}
          </p>
        </div>
      </section>

      <section className="wrap" id="cta">
        <div className="cta-final reveal">
          <h2>
            {s.ctaTitle[0]}
            <b>{s.ctaTitle[1]}</b>
          </h2>
          <p>{s.ctaP}</p>
          <Link href={`${base}/contact`} className="btn btn-primary" style={{ fontSize: "1.12rem", padding: "1.05em 2em" }}>
            {d.common.cta}
            <Arrow lang={lang} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
