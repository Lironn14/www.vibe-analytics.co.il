import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { LANGS } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import PageShell from "@/components/PageShell";
import { Arrow, icons } from "@/components/icons";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

const TOOLS = [
  { color: "#29B5E8", mk: "#29B5E8", name: "Google Analytics 4" },
  { color: "#6A4BF0", mk: "#7856FF", name: "Mixpanel" },
  { color: "#3B78E7", mk: "#4285F4", name: "Google Data Studio" },
  { color: "#5A3FD6", mk: "#5A3FD6", name: "Looker", rnd: true },
  { color: "#0F9D6E", mk: "#52BD95", name: "Segment", rnd: true },
  { color: "#1A73E8", mk: "#1A73E8", name: "Google Tag Manager" },
  { color: "#29B5E8", mk: "#29B5E8", name: "Snowflake" },
  { color: "#0078D4", mk: "#0078D4", name: "Microsoft Clarity" },
  { color: "#4285F4", mk: "#669DF6", name: "BigQuery", rnd: true },
];

export default function HomePage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang;
  const d = getDict(lang);
  const h = d.home;
  const base = `/${lang}`;

  return (
    <PageShell lang={lang} theme="light">
      <section className="hero">
        <div className="softbg">
          <div className="blob b1" />
          <div className="blob b2" />
        </div>
        <div className="wrap">
          <div className="reveal" data-d="1">
            <h1>
              {h.heroTitle[0]}
              <b>{h.heroTitle[1]}</b>
            </h1>
            <p className="lead">
              {h.heroLeadBrand && <>{"ב‑"}<bdi>Vibe Analytics</bdi>{", "}</>}{h.heroLead}
            </p>
            <div className="cta-row">
              <Link href={`${base}/contact`} className="btn btn-primary">
                {d.common.cta}
                <Arrow lang={lang} />
              </Link>
              <Link href={`${base}/services`} className="btn btn-ghost">
                {h.heroServices}
              </Link>
            </div>
          </div>
          <div className="report-wrap reveal" data-d="2">
            <div className="report-bg" />
            <div className="report">
              <div className="rhead">
                <div className="rtitle">
                  {h.reportTitle}
                  <small>{h.reportSub}</small>
                </div>
              </div>
              <div className="kpis">
                {h.kpis.map((k, i) => (
                  <div className="kpi" key={i}>
                    <div className="v">
                      <span data-count={k.v} data-suf={k.suf}>
                        0
                      </span>
                    </div>
                    <div className="l">{k.l}</div>
                  </div>
                ))}
              </div>
              <div className="rchart">
                <div
                  style={{ position: "absolute", inset: 12 }}
                  data-chart="area"
                  data-points="28,32,30,44,40,56,52,68,64,82,78,96"
                  data-stroke="#1f6fe0"
                />
              </div>
              <div
                className="rbars"
                data-chart="bars"
                data-points="44,58,50,72,66,90"
                data-labels={h.barLabels.join(",")}
                data-stroke="#3aa0ff"
              />
              <div className="floattag ft1">
                <div className="v">+38%</div>
                <div className="l">Conversion</div>
              </div>
              <div className="floattag ft2">
                <div className="v">ROI ↑</div>
                <div className="l">QoQ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="logos">
        <div className="wrap">
          <span className="lab">{h.logosLabel}</span>
          <div className="logos-scroll">
            <div className="marquee">
              {[...TOOLS, ...TOOLS, ...TOOLS].map((t, i) => (
                <span className="lg" style={{ color: t.color }} key={i}>
                  <span className={`mk${t.rnd ? " rnd" : ""}`} style={{ background: t.mk }} />
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec approach">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="tag">{h.servicesTag}</span>
            <h2>
              {h.servicesTitle[0]}
              <b>{h.servicesTitle[1]}</b>
            </h2>
            <p>{h.servicesSub}</p>
          </div>
          <div className="steps">
            {h.steps.map((s, i) => (
              <article className="stepc reveal" data-d={String(i + 1)} key={s.hash}>
                <div className="n">{s.n}</div>
                <h3>{s.title}</h3>
                <span className="en">{s.en}</span>
                <p>{s.p}</p>
                <Link href={`${base}/services#${s.hash}`} className="go">
                  {h.stepMore}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d={lang === "he" ? "M19 12H5M11 6l-6 6 6 6" : "M5 12h14M12 5l7 7-7 7"} />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec wrap">
        <div className="split">
          <div className="reveal">
            <span className="tag">{h.whyTag}</span>
            <h2 style={{ fontSize: "clamp(1.9rem,4.2vw,3.1rem)", fontFamily: "Rubik", fontWeight: 800 }}>
              {h.whyTitle[0]}
              <b>{h.whyTitle[1]}</b>
            </h2>
            <div className="why-list">
              {h.whyList.map((w, i) => (
                <div className="wi" key={i}>
                  <span className="ck">
                    <CheckIcon />
                  </span>
                  <div>
                    <h4>{w.h}</h4>
                    <p>{w.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="visual reveal" data-d="2" data-spotlight="true">
            <div className="vrow">
              <b>{h.revenueImpact}</b>
            </div>
            <div
              className="vchart"
              data-chart="area"
              data-points="30,28,36,34,46,44,58,64,60,76,84,98"
              data-stroke="#1f6fe0"
            />
            <div
              className="vbars"
              data-chart="bars"
              data-points="44,60,52,74,66,90"
              data-labels="Q1,Q2,Q3,Q4,Q5,Q6"
              data-stroke="#3aa0ff"
            />
          </div>
        </div>
      </section>

      <section className="sec wrap">
        <div className="sec-head reveal">
          <span className="tag">{h.whyDataTag}</span>
          <h2>
            {h.whyDataTitle[0]}
            <b>{h.whyDataTitle[1]}</b>
          </h2>
          <p>{h.whyDataSub}</p>
        </div>
        <div className="feat">
          {h.features.map((f, i) => {
            const Icon = icons[f.icon];
            return (
              <article className="fcard reveal" data-d={String(i + 1)} key={i}>
                <div className="img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={f.img} alt={f.alt} loading="lazy" />
                </div>
                <div className="content">
                  <div className="top">
                    <div className="num">
                      <span data-count={f.num} data-suf={f.suf}>
                        0
                      </span>
                    </div>
                    <div className="ico">{Icon && <Icon />}</div>
                  </div>
                  <h3>{f.h}</h3>
                  <p>{f.p}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="sec wrap metrics-sec">
        <div className="metrics">
          {h.metrics.map((m, i) => (
            <div className="metric reveal" data-d={String(i + 1)} key={i}>
              <div className="b">
                <span data-count={m.v}>0</span>
                {m.suf}
              </div>
              <div className="l">{m.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta wrap reveal">
        <h2>
          {h.ctaTitle[0]}
          <b>{h.ctaTitle[1]}</b>
          {h.ctaTitle[2]}
        </h2>
        <p>{h.ctaP}</p>
        <Link href={`${base}/contact`} className="btn btn-primary" style={{ fontSize: "1.12rem", padding: "1.05em 2em" }}>
          {d.common.cta}
          <Arrow lang={lang} />
        </Link>
      </section>
    </PageShell>
  );
}

function CheckIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
