"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import type { Lang } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { Arrow } from "./icons";

export default function Nav({ lang, theme }: { lang: Lang; theme: "light" | "dark" }) {
  const d = getDict(lang).common;
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const logo = theme === "dark" ? "/assets/logo-dark.png" : "/assets/logo-light.png";

  const base = `/${lang}`;
  const links = [
    { href: `${base}/services`, label: d.nav.services },
    { href: `${base}/blog`, label: d.nav.blog },
    { href: `${base}/about`, label: d.nav.about },
    { href: `${base}/contact`, label: d.nav.contact },
  ];

  function toggleLang() {
    const other = lang === "he" ? "en" : "he";
    const rest = pathname.replace(/^\/(he|en)/, "");
    router.push(`/${other}${rest}`);
  }

  function toggleMenu() {
    setOpen((o) => {
      const next = !o;
      document.body.classList.toggle("menu-open", next);
      return next;
    });
  }

  function closeMenu() {
    setOpen(false);
    document.body.classList.remove("menu-open");
  }

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <header className="nav">
        <div className="wrap">
          <Link className="brand" href={base} onClick={closeMenu}>
            <Image src={logo} alt="Vibe Analytics" width={120} height={38} priority />
            <span className="en">Vibe Analytics</span>
          </Link>
          <nav className="nav-links">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={isActive(l.href) ? "active" : undefined}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="nav-cta">
            <button className="lang" onClick={toggleLang}>
              {d.langToggle}
            </button>
            <button className="nav-burger" onClick={toggleMenu} aria-label={d.menuLabel}>
              <span />
            </button>
            <Link href={`${base}/contact`} className="btn btn-primary">
              {d.cta}
              <Arrow lang={lang} />
            </Link>
          </div>
        </div>
      </header>

      <nav className="mobile-menu">
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={closeMenu}>
            {l.label}
          </Link>
        ))}
        <Link href={`${base}/contact`} className="btn btn-primary" onClick={closeMenu}>
          {d.cta}
          <Arrow lang={lang} />
        </Link>
      </nav>
    </>
  );
}
