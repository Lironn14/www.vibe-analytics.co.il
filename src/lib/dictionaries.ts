import type { Lang } from "./i18n";

type Dict = (typeof dictionaries)["he"];

export const dictionaries = {
  he: {
    common: {
      brand: "Vibe Analytics",
      cta: "לייעוץ בחינם",
      langToggle: "EN",
      menuLabel: "תפריט",
      nav: {
        home: "בית",
        services: "השירותים שלנו",
        about: "מי אנחנו",
        blog: "בלוג",
        contact: "צור קשר",
      },
      footer: {
        tagline:
          "הופכים דאטה להזדמנויות עסקיות. תובנות, צמיחה ו‑ROI לצוותי דיגיטל ומוצר.",
        navTitle: "ניווט",
        contactTitle: "צרו קשר",
        email: "hello@vibe-analytics.co.il",
        consult: "ייעוץ בחינם",
        copy: "© 2026 Vibe Analytics. כל הזכויות שמורות.",
        terms: "תקנון האתר",
        slogan: "תובנות · צמיחה · ROI",
      },
    },
    home: {
      heroTitle: ["תובנות. צמיחה. ", "ROI."],
      heroLeadBrand: true,
      heroLead:
        "אנו הופכים נתונים גולמיים להחלטות עסקיות שמייצרות צמיחה.",
      heroServices: "לשירותים",
      reportTitle: "Growth Overview",
      reportSub: "Last 6 months",
      kpis: [
        { v: 58, suf: "%", l: "יעדי הכנסה" },
        { v: 6, suf: "×", l: "שימור" },
        { v: 19, suf: "%", l: "שביעות רצון" },
      ],
      barLabels: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ"],
      logosLabel: "עובדים עם כלי האנליטיקס המובילים",
      servicesTag: "השירותים שלנו",
      servicesTitle: ["שותף אחד ", "לכל מסע הדאטה"],
      servicesSub:
        "מהקמת תשתית מדידה מדויקת, דרך אבחון ושדרוג מערכות קיימות, ועד ייעוץ אנליטי שוטף.",
      steps: [
        {
          n: "1",
          title: "הטמעת אנליטיקס",
          en: "Implementation",
          p: "בניית תשתית מדידה מדויקת לטווח ארוך — Tracking Plan, הגדרת KPIs, דוחות וליווי טכני עד עצמאות מלאה.",
          hash: "impl",
        },
        {
          n: "2",
          title: "סקירה ושדרוג של מערכת הדאטה",
          en: "Audit",
          p: "אבחון ושדרוג של תשתיות קיימות. מאתרים פערים ומחזירים את המערכת לדיוק, ביצועים ומהימנות מקסימלית.",
          hash: "audit",
        },
        {
          n: "3",
          title: "ייעוץ ואנליטיקס",
          en: "Consulting",
          p: "צוות אנליטיקס שמשתלב בצוות שלכם — ייעוץ אסטרטגי וקבלת החלטות מבוססת דאטה. בשבריר של הקמת צוות פנימי.",
          hash: "consult",
        },
      ],
      stepMore: "פרטים",
      whyTag: "למה Vibe?",
      whyTitle: ["חברות בוחרות בנו כי אנחנו ", "מקצוענים"],
      whyList: [
        {
          h: "זמינות אמיתית",
          p: "נפגשים בקביעות, מתעדפים משימות ועונים על השאלות הדיגיטליות היומיומיות שלכם.",
        },
        {
          h: "עומק טכני",
          p: "עוברים עם כל פיסת דאטה ומוודאים שהיא מיושרת עם אסטרטגיית המדידה והיעדים העסקיים.",
        },
        {
          h: "שבריר מהעלות",
          p: "מביאים יכולות של צוות אנליטי מלא — ללא העלות של גיוס במשרה מלאה.",
        },
      ],
      revenueImpact: "Revenue impact",
      whyDataTag: "למה שווה לכם להשקיע בדאטה שלכם?",
      whyDataTitle: ["מדידה דיגיטלית מדויקת", " היא היתרון התחרותי"],
      whyDataSub:
        "שלוש דרכים שבהן ניתוח נכון של הדאטה שלכם מתורגם ישירות לתוצאות בשורה התחתונה.",
      features: [
        {
          num: 23,
          suf: "×",
          img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=220&fit=crop",
          alt: "קבלת החלטות",
          icon: "chart",
          h: "קבלת החלטות טובה יותר",
          p: "חברות שמשתמשות בנתונים בצורה אפקטיבית נוטות פי 23 לגייס לקוחות, פי 6 לשמר אותם, ופי 19 להיות רווחיות יותר.",
        },
        {
          num: 58,
          suf: "%",
          img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=220&fit=crop",
          alt: "הגדלת הכנסות",
          icon: "dollar",
          h: "הגדלת הכנסות ורווחיות",
          p: "עסקים שמקבלים החלטות מבוססות נתונים הם בעלי סיכוי גבוה ב‑58% לעבור את יעדי ההכנסות שלהם — בזכות הבנה עמוקה של השוק והלקוחות.",
        },
        {
          num: 19,
          suf: "%",
          img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=220&fit=crop",
          alt: "שיפור חוויית המשתמש",
          icon: "user",
          h: "שיפור חוויית המשתמש",
          p: "חברות שממנפות את ניתוח הנתונים שלהן רואות עלייה של 19% בשביעות רצון הלקוחות וגידול של עד 10% בהכנסות.",
        },
      ],
      metrics: [
        { v: 23, suf: "×", l: "גיוס לקוחות" },
        { v: 6, suf: "×", l: "שימור לקוחות" },
        { v: 19, suf: "×", l: "רווחיות" },
        { v: 58, suf: "%", l: "עמידה ביעדים" },
      ],
      ctaTitle: ["מוכנים להפוך דאטה ל", "צמיחה", "?"],
      ctaP: "בואו נדבר. בשיחת ייעוץ קצרה נבין את האתגרים שלכם ונראה איפה הדאטה יכול לעבוד חזק יותר עבור העסק.",
    },
    services: {
      eyebrow: "השירותים שלנו",
      title: ["שותף אחד ", "לכל מסע הדאטה"],
      sub: "מהקמת תשתית מדידה מדויקת, דרך אבחון ושדרוג מערכות קיימות, ועד ייעוץ אנליטי שוטף — אנחנו לצידכם בכל שלב.",
      index: [
        { id: "impl", n: "01", t: "הטמעת אנליטיקס" },
        { id: "audit", n: "02", t: "סקירה ושדרוג של מערכת הדאטה" },
        { id: "consult", n: "03", t: "ייעוץ ואנליטיקס" },
      ],
      impl: {
        en: "Implementation",
        h: "הטמעת מערכות אנליטיקס",
        intro:
          "אחד השלבים החשובים בעבודה עם מערכות מדידה בארגונים הוא שלב ההטמעה. כדי לבנות תשתית מדויקת לטווח ארוך, צריך שותף שיודע לתרגם את היוז‑קייסים העסקיים לאירועים, יוזרים, דוחות ותובנות.",
        steps: [
          { n: "1", h: "בניית תוכנית מדידה מדויקת", en: "Tracking Plan", p: "מתמקדים במה שבאמת חשוב לעסק שלכם — מגדירים בדיוק אילו אירועים, מאפיינים ומשתמשים נמדדים." },
          { n: "2", h: "הגדרת מדדי ביצוע", en: "KPI Definition", p: "הגדרת KPIs ברי‑ביצוע, מותאמים לאסטרטגיה העסקית — כך שכל מספר מקושר למטרה." },
          { n: "3", h: "בניית דוחות ממוקדים", en: "Reporting", p: "בונים דוחות שעונים על השאלות העסקיות הכי דחופות — בלי רעש, רק תובנות שמניעות פעולה." },
          { n: "4", h: "ליווי טכני ועסקי", en: "Guidance", p: "ליווי צמוד לאורך כל תהליך ההטמעה — כדי לעבור אותו בשלום, ללא הפתעות." },
          { n: "5", h: "הדרכה פרקטית", en: "Training", p: "הדרכה מעשית וליווי אישי שמבטיחים עצמאות מלאה לצוותים שלכם בתוך המערכת." },
        ],
      },
      audit: {
        en: "Audit",
        h: "סקירה ושדרוג של מערכת הדאטה",
        intro:
          "חברות רבות מטמיעות עצמאית את תשתית האנליטיקס כבר בשלב הקמת החברה. ככל שהמוצר והתהליכים העסקיים נעשים מורכבים יותר, כך קשה לשמור על אחידות בנתונים — מה שמוביל לא פעם לחוסר עקביות ולפגיעה במהימנות הדוחות.",
        checklist: [
          { h: "ניתוח המצב הקיים", p: "מיפוי מלא של התשתית, האירועים והדוחות — להבין איפה אתם עומדים." },
          { h: "איתור הפערים", p: "מזהים חוסר עקביות, כפילויות ובעיות מהימנות שמעוותות את התמונה." },
          { h: "החזרה לדיוק ומהימנות", p: "פועלים יחד עם הצוות שלכם כדי להחזיר את המערכת לביצועים ומהימנות מקסימלית." },
        ],
        panelTitle: "Data Health Audit",
        panelChecks: "12 בדיקות",
        rows: [
          { nm: "עקביות אירועים", w: 48, st: "bad", lbl: "פער" },
          { nm: "כפילויות בדאטה", w: 66, st: "warn", lbl: "לבדיקה" },
          { nm: "מהימנות דוחות", w: 82, st: "warn", lbl: "לשיפור" },
          { nm: "מבנה Tracking Plan", w: 94, st: "ok", lbl: "תקין" },
          { nm: "דיוק KPIs", w: 90, st: "ok", lbl: "תקין" },
        ],
      },
      consult: {
        en: "Consulting",
        h: "שירותי ייעוץ ואנליטיקס",
        intro:
          "לעיתים תשתית האנליטיקס שלכם מצוינת — אבל חסר לכם הזמן והניסיון הטכני כדי לדלות את התובנות מתוך הדאטה. הצוות של Vibe Analytics מתמחה באיסוף המדדים החשובים ובבניית כלים אנליטיים שעוזרים בקבלת החלטות עסקיות אמיצות מבוססות דאטה.",
        benefits: [
          { icon: "team", h: "חלק מהצוות שלכם", p: "עובדים עם צוותי דיגיטל שזקוקים לתמיכה שוטפת בניתוח מוצר — מתפקדים כחלק בלתי נפרד מהצוות שמרכז את כל צרכי האנליטיקה." },
          { icon: "clock", h: "זמינות ותעדוף", p: "זמינים לשאלות שלכם, נפגשים בקביעות כדי לתעדף משימות ולנתח את השאלות הדיגיטליות היומיומיות שלכם." },
          { icon: "chart", h: "החלטות מבוססות דאטה", p: "ייעוץ אסטרטגי וכלים אנליטיים שהופכים שאלות עסקיות פתוחות להחלטות בטוחות ומדידות." },
        ],
        highlight: ["והחלק הכי טוב? זה יעלה לכם רק ", "שבריר מהעלות", " של העסקת צוות אנליטיקה במשרה מלאה."],
      },
      ctaTitle: ["לא בטוחים מאיפה להתחיל? ", "בואו נדבר"],
      ctaP: "בשיחת ייעוץ קצרה נבין את האתגרים שלכם ונמליץ על השלב הבא הנכון — הטמעה, אבחון או ליווי שוטף.",
    },
    blog: {
      title: "תובנות ויותר מזה",
      lead: "מדריכים, מחקרים ותובנות למי שרוצה להפיק את המיטב מהדאטה שלהם.",
      readMore: "קרא עוד",
    },
    contact: {
      heroTitle: ["בואו נדבר על ", "הדאטה שלכם"],
      heroLead:
        "דאטה טוב הוא לא רק כלי — זה יתרון תחרותי. בואו נחקור איך אנחנו יכולים להפוך את הנתונים שלכם להזדמנויות צמיחה אמיתיות.",
      colTitle: ["צרו ", "קשר"],
      colP: "מלאו את הטופס ונחזור אליכם תוך יום עסקי אחד. או, אם תעדיפו, אפשר להשיג אותנו ישירות בערוצים שלמטה.",
      items: [
        { icon: "mail", h: "אימייל", v: "hello@vibe-analytics.co.il", ltr: true },
        { icon: "phone", h: "טלפון", v: "050-123-4567", ltr: true },
        { icon: "clock", h: "שעות פעילות", v: "ראשון-חמישי, 9:00-18:00 (IST)", ltr: false },
      ],
      success: "תודה! נחזור אליך בקרוב.",
      labels: { name: "שם מלא", email: "אימייל", phone: "טלפון", message: "הודעה" },
      ph: { name: "שם פרטי ושם משפחה", email: "david@example.com", phone: "050-123-4567", message: "ספרו לנו על אתגרי הדאטה שלכם..." },
      submit: "שלח הודעה",
      reset: "נקה",
    },
    about: {
      eyebrow: "הסיפור שלנו",
      title: ["מי ", "אנחנו"],
      lead: "אנחנו בוני גשרים בין נתונים לתוצאות עסקיות משמעותיות.",
      bodyTitle: "איך הכל התחיל",
      bodyP1:
        "וייב אנליטיקס נוסדה על ידי לירון לוי, בעל תואר שני במנהל עסקים ובעל 15 שנות ניסיון בעולם האנליטיקס. במהלך הקריירה שלו עבד עם ארגונים בכל הגדלים — מסטארטאפים צעירים ועד חברות אנטרפרייז — ולמד להבין את הצרכים העסקיים האמיתיים שמסתתרים מאחורי כל בקשת דאטה.",
      bodyP2:
        "באמצעות מתודולוגיה מובנית ומוכחת, לירון והצוות מלווים את לקוחותיו בהפיכת נתונים גולמיים להחלטות מוצריות שמייצרות גידול אמיתי בהכנסות — ובעיקר, בדרך לעצמאות מלאה בעבודה עם הדאטה שלהם.",
      founderName: "לירון לוי",
      founderRole: "מייסד, Vibe Analytics",
      founderTag: "תואר שני במנהל עסקים · 15 שנות ניסיון באנליטיקס",
    },
    terms: {
      eyebrow: "מסמך משפטי",
      title: ["תקנון ", "האתר"],
      updated: "עודכן לאחרונה: 16 ביוני, 2026",
      sections: [
        {
          h: "1. כללי",
          p: "תקנון זה מסדיר את תנאי השימוש באתר Vibe Analytics (״האתר״) ובשירותי הייעוץ והאנליטיקס המוצעים על ידי החברה (״השירותים״). גלישה באתר ו/או הזמנת שירותים מהווה הסכמה לתנאים המפורטים במסמך זה. אם אינך מסכים לתנאי השימוש, אנא הימנע משימוש באתר ומהזמנת שירותים.",
        },
        {
          h: "2. השירותים",
          p: "Vibe Analytics מציעה שירותי ייעוץ, הטמעה וניתוח בתחום האנליטיקס העסקית, לרבות בניית תוכניות מדידה, הגדרת KPIs, הטמעת מערכות מדידה, וליווי שוטף. היקף השירותים, לוחות הזמנים והתנאים המסחריים הספציפיים לכל פרויקט יוסכמו בנפרד בכתב (הצעת מחיר, חוזה או התקשרות דומה) בין הלקוח לחברה, ותקנון זה יחול בנוסף להם.",
        },
        {
          h: "3. אחריות הלקוח",
          p: "הלקוח מתחייב לספק לחברה גישה, מידע ונתונים מדויקים ועדכניים ככל הנדרש למתן השירותים, ולשתף פעולה בלוחות הזמנים שנקבעו. החברה אינה אחראית לעיכובים או לתוצרים חסרים הנובעים מאי-העברת מידע, גישה או משאבים מצד הלקוח.",
        },
        {
          h: "4. תשלומים וביטולים",
          p: "התמורה בעבור השירותים, מועדי התשלום ותנאי הביטול יקבעו בהצעת המחיר או בהסכם הספציפי שנחתם עם הלקוח. אלא אם נאמר אחרת בכתב, תשלומים שבוצעו בעבור שירותים שניתנו אינם ניתנים להחזר.",
        },
        {
          h: "5. קניין רוחני",
          p: "כל זכויות הקניין הרוחני באתר, במתודולוגיות, בתבניות, בדוחות ובכלים שפותחו על ידי Vibe Analytics שייכות לחברה, אלא אם הוסכם אחרת בכתב. תוצרים שהוכנו במיוחד עבור לקוח במסגרת פרויקט ספציפי יועברו לשימוש הלקוח בהתאם לתנאים שיוסכמו בהסכם העבודה, אך אין בכך כדי להעניק ללקוח זכויות במתודולוגיה הכללית, בקוד או בכלים הפנימיים של החברה.",
        },
        {
          h: "6. סודיות ופרטיות",
          p: "החברה מתייחסת במידת הרצינות הראויה למידע עסקי ואישי שנחשף לה במסגרת מתן השירותים, ותשמור על סודיותו בהתאם לכל דין ולהסכמים שנחתמו עם הלקוח. לפרטים נוספים על אופן הטיפול במידע אישי, ניתן לפנות אלינו בכתובת המופיעה בעמוד 'צור קשר'.",
        },
        {
          h: "7. הגבלת אחריות",
          p: "השירותים והתכנים באתר מסופקים כמות שהם ('AS IS'). החברה עושה כל שביכולתה לספק שירות מקצועי ואיכותי, אך אינה מתחייבת לתוצאות עסקיות מסוימות, שכן אלו תלויות בגורמים רבים שאינם בשליטתה. בכל מקרה, אחריות החברה לא תעלה על הסכום ששולם בפועל על ידי הלקוח בעבור השירות הרלוונטי.",
        },
        {
          h: "8. שינויים בתקנון",
          p: "החברה רשאית לעדכן תקנון זה מעת לעת. הנוסח המחייב הוא הנוסח המפורסם באתר במועד השימוש. המשך השימוש באתר ובשירותים לאחר עדכון התקנון מהווה הסכמה לשינויים.",
        },
        {
          h: "9. דין וסמכות שיפוט",
          p: "על תקנון זה יחולו דיני מדינת ישראל, וסמכות השיפוט הבלעדית בכל עניין הנוגע לו תהא לבתי המשפט המוסמכים במחוז תל אביב.",
        },
        {
          h: "10. יצירת קשר",
          p: "לכל שאלה בנוגע לתקנון זה ניתן לפנות אלינו בכתובת hello@vibe-analytics.co.il.",
        },
      ],
    },
  },

  en: {
    common: {
      brand: "Vibe Analytics",
      cta: "Free Consultation",
      langToggle: "HE",
      menuLabel: "Menu",
      nav: {
        home: "Home",
        services: "Services",
        about: "About",
        blog: "Blog",
        contact: "Contact",
      },
      footer: {
        tagline:
          "Turning data into business opportunities. Insights, growth and ROI for digital and product teams.",
        navTitle: "Navigation",
        contactTitle: "Get in touch",
        email: "hello@vibe-analytics.co.il",
        consult: "Free consultation",
        copy: "© 2026 Vibe Analytics. All rights reserved.",
        terms: "Terms of Service",
        slogan: "Insights · Growth · ROI",
      },
    },
    home: {
      heroTitle: ["Insights. Growth. ", "ROI."],
      heroLeadBrand: false,
      heroLead:
        "We turn raw data into business decisions that drive growth.",
      heroServices: "Our Services",
      reportTitle: "Growth Overview",
      reportSub: "Last 6 months",
      kpis: [
        { v: 58, suf: "%", l: "Revenue Goals" },
        { v: 6, suf: "×", l: "Retention" },
        { v: 19, suf: "%", l: "Satisfaction" },
      ],
      barLabels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      logosLabel: "Working with leading analytics tools",
      servicesTag: "Our Services",
      servicesTitle: ["One partner ", "for your entire data journey"],
      servicesSub:
        "From building precise measurement infrastructure, through auditing and upgrading existing systems, to ongoing strategic analytics consulting.",
      steps: [
        { n: "1", title: "Analytics Implementation", en: "Implementation", p: "Build a robust measurement foundation for the long term — Tracking Plan, KPI definition, reporting, and technical guidance until full independence.", hash: "impl" },
        { n: "2", title: "Data Audit & Optimization", en: "Audit", p: "Diagnose and upgrade existing infrastructure. We identify gaps and restore your system to maximum accuracy, performance, and reliability.", hash: "audit" },
        { n: "3", title: "Analytics Consulting", en: "Consulting", p: "An analytics team integrated into your organization — strategic guidance and data-driven decision making. A fraction of the cost of a full in-house team.", hash: "consult" },
      ],
      stepMore: "Learn More",
      whyTag: "Why Vibe",
      whyTitle: ["Companies choose us because we're ", "professionals"],
      whyList: [
        { h: "Real Availability", p: "Regular meetings, prioritized tasks, and answers to your day-to-day digital questions." },
        { h: "Technical Depth", p: "We align every data point with your measurement strategy and business objectives." },
        { h: "A Fraction of the Cost", p: "All the capabilities of a full analytics team — without the expense of hiring full-time staff." },
      ],
      revenueImpact: "Revenue impact",
      whyDataTag: "Why Data",
      whyDataTitle: ["Effective data is a ", "competitive advantage"],
      whyDataSub: "Three ways that proper analysis of your data translates directly to bottom-line results.",
      features: [
        { num: 23, suf: "×", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=220&fit=crop", alt: "Better decisions", icon: "chart", h: "Better Decision Making", p: "Companies that use data effectively are 23x more likely to acquire customers, 6x more likely to retain them, and 19x more likely to be profitable." },
        { num: 58, suf: "%", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=220&fit=crop", alt: "Revenue growth", icon: "dollar", h: "Increased Revenue & Profitability", p: "Businesses making data-driven decisions have a 58% higher chance of exceeding revenue targets — thanks to deeper market and customer understanding." },
        { num: 19, suf: "%", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=220&fit=crop", alt: "User experience", icon: "user", h: "Improved User Experience", p: "Companies that leverage data analytics see a 19% increase in customer satisfaction and up to 10% revenue growth." },
      ],
      metrics: [
        { v: 23, suf: "×", l: "Customer Acquisition" },
        { v: 6, suf: "×", l: "Customer Retention" },
        { v: 19, suf: "×", l: "Profitability" },
        { v: 58, suf: "%", l: "Goal Achievement" },
      ],
      ctaTitle: ["Ready to turn data into ", "growth", "?"],
      ctaP: "Let's talk. In a brief consultation, we'll understand your challenges and show you where data can work harder for your business.",
    },
    services: {
      eyebrow: "Our Services",
      title: ["One partner ", "for your entire data journey"],
      sub: "From building precise measurement infrastructure, through auditing and upgrading existing systems, to ongoing strategic analytics consulting — we're with you at every step.",
      index: [
        { id: "impl", n: "01", t: "Implementation" },
        { id: "audit", n: "02", t: "Data Audit & Optimization" },
        { id: "consult", n: "03", t: "Consulting" },
      ],
      impl: {
        en: "Implementation",
        h: "Analytics Implementation",
        intro:
          "One of the most important stages of working with measurement systems is implementation. To build precise, long-term infrastructure, you need a partner who can translate business use cases into events, users, reports, and insights.",
        steps: [
          { n: "1", h: "Build a precise measurement plan", en: "Tracking Plan", p: "We focus on what truly matters to your business — defining exactly which events, properties, and users are measured." },
          { n: "2", h: "Define performance metrics", en: "KPI Definition", p: "Actionable KPIs aligned with your business strategy — so every number is tied to a goal." },
          { n: "3", h: "Build focused reports", en: "Reporting", p: "We build reports that answer your most pressing business questions — no noise, just insights that drive action." },
          { n: "4", h: "Technical & business guidance", en: "Guidance", p: "Close guidance throughout the implementation process — so you get through it smoothly, with no surprises." },
          { n: "5", h: "Practical training", en: "Training", p: "Hands-on training and personal guidance that ensure full independence for your teams within the system." },
        ],
      },
      audit: {
        en: "Audit",
        h: "Data Audit & Optimization",
        intro:
          "Many companies implement their analytics infrastructure independently at the founding stage. As the product and business processes grow more complex, it becomes hard to maintain data consistency — often leading to inconsistencies and reduced report reliability.",
        checklist: [
          { h: "Analyze the current state", p: "A full mapping of the infrastructure, events, and reports — to understand where you stand." },
          { h: "Identify the gaps", p: "We detect inconsistencies, duplicates, and reliability issues that distort the picture." },
          { h: "Restore accuracy & reliability", p: "We work alongside your team to bring the system back to maximum performance and reliability." },
        ],
        panelTitle: "Data Health Audit",
        panelChecks: "12 checks",
        rows: [
          { nm: "Event consistency", w: 48, st: "bad", lbl: "Gap" },
          { nm: "Data duplication", w: 66, st: "warn", lbl: "Review" },
          { nm: "Report reliability", w: 82, st: "warn", lbl: "Improve" },
          { nm: "Tracking Plan structure", w: 94, st: "ok", lbl: "OK" },
          { nm: "KPI accuracy", w: 90, st: "ok", lbl: "OK" },
        ],
      },
      consult: {
        en: "Consulting",
        h: "Analytics Consulting Services",
        intro:
          "Sometimes your analytics infrastructure is excellent — but you lack the time and technical experience to extract insights from the data. The Vibe Analytics team specializes in collecting the metrics that matter and building analytical tools that help you make bold, data-driven business decisions.",
        benefits: [
          { icon: "team", h: "Part of your team", p: "We work with digital teams that need ongoing product-analytics support — functioning as an integral part of the team that centralizes all analytics needs." },
          { icon: "clock", h: "Availability & prioritization", p: "Available for your questions, meeting regularly to prioritize tasks and analyze your day-to-day digital questions." },
          { icon: "chart", h: "Data-driven decisions", p: "Strategic guidance and analytical tools that turn open business questions into confident, measurable decisions." },
        ],
        highlight: ["And the best part? It costs you just ", "a fraction of the cost", " of hiring a full-time analytics team."],
      },
      ctaTitle: ["Not sure where to start? ", "Let's talk"],
      ctaP: "In a brief consultation we'll understand your challenges and recommend the right next step — implementation, audit, or ongoing support.",
    },
    blog: {
      title: "Insights & more",
      lead: "Guides, research and insights for anyone who wants to get the most out of their data.",
      readMore: "Read more",
    },
    contact: {
      heroTitle: ["Let's talk about ", "your data"],
      heroLead:
        "Good data isn't just a tool — it's a competitive advantage. Let's explore how we can turn your numbers into real growth opportunities.",
      colTitle: ["Get in ", "touch"],
      colP: "Fill in the form and we'll get back to you within one business day. Or, if you prefer, reach us directly through the channels below.",
      items: [
        { icon: "mail", h: "Email", v: "hello@vibe-analytics.co.il", ltr: true },
        { icon: "phone", h: "Phone", v: "+1 555-123-4567", ltr: true },
        { icon: "clock", h: "Hours", v: "Sun-Thu, 9:00-18:00 (IST)", ltr: false },
      ],
      success: "Thanks! We'll be in touch soon.",
      labels: { name: "Full name", email: "Email", phone: "Phone", message: "Message" },
      ph: { name: "First and last name", email: "david@example.com", phone: "+1 555-123-4567", message: "Tell us about your data challenges..." },
      submit: "Send message",
      reset: "Clear",
    },
    about: {
      eyebrow: "Our story",
      title: ["Who ", "we are"],
      lead: "We build bridges between data and meaningful business outcomes.",
      bodyTitle: "How it all started",
      bodyP1:
        "Vibe Analytics was founded by Lironn Levy, who holds an MBA and brings 15 years of experience in the world of analytics. Throughout his career he has worked with organizations of every size — from early-stage startups to enterprise companies — and learned to understand the real business needs behind every data request.",
      bodyP2:
        "Using a structured, proven methodology, Lironn and the team help clients turn raw data into product decisions that drive real revenue growth — and most importantly, toward full independence in working with their own data.",
      founderName: "Lironn Levy",
      founderRole: "Founder, Vibe Analytics",
      founderTag: "MBA · 15 years of analytics experience",
    },
    terms: {
      eyebrow: "Legal",
      title: ["Terms ", "of Service"],
      updated: "Last updated: June 16, 2026",
      sections: [
        {
          h: "1. General",
          p: "These Terms of Service govern your use of the Vibe Analytics website (the \"Site\") and the consulting and analytics services offered by the company (the \"Services\"). By browsing the Site and/or ordering Services, you agree to the terms set out in this document. If you do not agree to these terms, please refrain from using the Site or ordering Services.",
        },
        {
          h: "2. The Services",
          p: "Vibe Analytics provides consulting, implementation, and analysis services in the field of business analytics, including building tracking plans, defining KPIs, implementing measurement systems, and ongoing support. The scope of services, timelines, and specific commercial terms for each project will be agreed separately in writing (a proposal, contract, or similar agreement) between the client and the company, and these Terms apply in addition to that agreement.",
        },
        {
          h: "3. Client Responsibilities",
          p: "The client agrees to provide the company with accurate and up-to-date access, information, and data as required to deliver the Services, and to cooperate within the agreed timelines. The company is not responsible for delays or incomplete deliverables resulting from the client's failure to provide information, access, or resources.",
        },
        {
          h: "4. Payments and Cancellations",
          p: "Fees for the Services, payment schedules, and cancellation terms will be set out in the proposal or specific agreement signed with the client. Unless otherwise stated in writing, payments made for Services already rendered are non-refundable.",
        },
        {
          h: "5. Intellectual Property",
          p: "All intellectual property rights in the Site, methodologies, templates, reports, and tools developed by Vibe Analytics belong to the company, unless otherwise agreed in writing. Deliverables prepared specifically for a client as part of a given project will be made available for the client's use according to the terms agreed in the relevant work agreement, but this does not grant the client rights to the company's general methodology, code, or internal tools.",
        },
        {
          h: "6. Confidentiality and Privacy",
          p: "The company treats business and personal information disclosed to it in the course of providing the Services with the appropriate level of seriousness, and will maintain its confidentiality in accordance with applicable law and any agreements signed with the client. For more details on how personal information is handled, please contact us using the details on our Contact page.",
        },
        {
          h: "7. Limitation of Liability",
          p: "The Services and content on the Site are provided \"as is.\" The company makes every effort to provide a professional, high-quality service, but does not guarantee specific business outcomes, as these depend on many factors outside its control. In any event, the company's liability shall not exceed the amount actually paid by the client for the relevant service.",
        },
        {
          h: "8. Changes to These Terms",
          p: "The company may update these Terms from time to time. The version published on the Site at the time of use is the binding version. Continued use of the Site and Services after an update constitutes acceptance of the changes.",
        },
        {
          h: "9. Governing Law and Jurisdiction",
          p: "These Terms are governed by the laws of the State of Israel, and the courts of the Tel Aviv district shall have exclusive jurisdiction over any matter relating to them.",
        },
        {
          h: "10. Contact",
          p: "For any questions regarding these Terms, please contact us at hello@vibe-analytics.co.il.",
        },
      ],
    },
  },
} as const;

export function getDict(lang: Lang): Dict {
  return dictionaries[lang] as unknown as Dict;
}
