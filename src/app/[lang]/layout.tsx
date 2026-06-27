import type { Metadata } from "next";
import Script from "next/script";
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
    title: {
      template: isHe ? "וייב אנליטיקס | Vibe Analytics - %s" : "Vibe Analytics - %s",
      default: isHe
        ? "וייב אנליטיקס | Vibe Analytics"
        : "Vibe Analytics | Analytics Agency",
    },
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
      <head>
        <Script id="gtm-head" strategy="afterInteractive">{`
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MDZLRWHN');
        `}</Script>
      </head>
      <body>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MDZLRWHN"
            height="0" width="0" style={{display:"none",visibility:"hidden"}} />
        </noscript>
        <SiteEffects />
        {children}
      </body>
    </html>
  );
}
