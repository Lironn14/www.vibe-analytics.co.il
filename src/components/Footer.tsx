import Link from "next/link";
import Image from "next/image";
import type { Lang } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";

export default function Footer({ lang, theme }: { lang: Lang; theme: "light" | "dark" }) {
  const d = getDict(lang).common;
  const f = d.footer;
  const base = `/${lang}`;
  const logo = theme === "dark" ? "/assets/logo-dark.png" : "/assets/logo-light.png";

  return (
    <footer className="foot wrap">
      <div className="grid">
        <div>
          <Link className="brand" href={base} style={{ marginBottom: 16 }}>
            <Image src={logo} alt="Vibe Analytics" width={132} height={42} />
            <span className="en">Vibe Analytics</span>
          </Link>
          <p style={{ color: "var(--l-muted)", maxWidth: "34ch" }}>{f.tagline}</p>
        </div>
        <div>
          <h4>{f.navTitle}</h4>
          <Link href={base}>{d.nav.home}</Link>
          <Link href={`${base}/services`}>{d.nav.services}</Link>
          <Link href={`${base}/blog`}>{d.nav.blog}</Link>
          <Link href={`${base}/about`}>{d.nav.about}</Link>
          <Link href={`${base}/contact`}>{d.nav.contact}</Link>
        </div>
        <div>
          <h4>{f.contactTitle}</h4>
          <a href={`mailto:${f.email}`} className="en" dir="ltr">
            {f.email}
          </a>
          <Link href={`${base}/contact`}>{f.consult}</Link>
          <a href="https://linkedin.com" target="_blank" rel="noopener" className="en" dir="ltr">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="copy">
        <span>{f.copy}</span>
        <Link href={`${base}/terms`}>{f.terms}</Link>
        <span className="en" dir="ltr">
          {f.slogan}
        </span>
      </div>
    </footer>
  );
}
