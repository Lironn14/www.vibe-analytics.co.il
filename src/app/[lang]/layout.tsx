import type { Metadata } from "next";
import { LANGS, dir, type Lang } from "@/lib/i18n";
import SiteEffects from "@/components/SiteEffects";
import "../globals.css";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const isHe = params.lang === "he";
  return {
    title: isHe
      ? "Vibe Analytics — תובנות. צמיחה. ROI"
      : "Vibe Analytics — Insights. Growth. ROI",
    description: isHe
      ? "סוכנות אנליטיקס בוטיק: הטמעה, סקירת מערכות וייעוץ אסטרטגי."
      : "A boutique analytics agency: implementation, audits, and strategic consulting.",
  };
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Lang };
}) {
  return (
    <html lang={params.lang} dir={dir(params.lang)}>
      <body>
        <SiteEffects />
        {children}
      </body>
    </html>
  );
}
