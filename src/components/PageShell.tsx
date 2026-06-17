import type { Lang } from "@/lib/i18n";
import Nav from "./Nav";
import Footer from "./Footer";

export default function PageShell({
  lang,
  theme,
  children,
}: {
  lang: Lang;
  theme: "light" | "dark";
  children: React.ReactNode;
}) {
  return (
    <div className={`theme-${theme}`}>
      <div className="progress" />
      {theme === "dark" && (
        <>
          <div className="aurora" />
          <div className="grid-bg" />
        </>
      )}
      <Nav lang={lang} theme={theme} />
      <main>{children}</main>
      <Footer lang={lang} theme={theme} />
    </div>
  );
}
