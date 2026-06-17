import type { Lang } from "./i18n";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "code"; text: string }
  | { type: "stat"; num: string; label: string }
  | { type: "mistake"; title: string; text: string };

export type PostMeta = {
  slug: string;
  category: Record<Lang, string>;
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  author: string;
  readTime: Record<Lang, string>;
  date: Record<Lang, string>;
  thumb: string;
  img: string;
};

export type Post = PostMeta & {
  body: Record<Lang, Block[]>;
  related: string[];
};

export const posts: Post[] = [
  {
    slug: "mistakes",
    thumb: "📊",
    img: "https://picsum.photos/seed/analytics-mistakes/800/450",
    author: "דן כהן / Dan Cohen",
    category: { he: "מדריך", en: "Guide" },
    title: {
      he: "5 טעויות נפוצות בהטמעת אנליטיקס",
      en: "5 Common Analytics Implementation Mistakes",
    },
    excerpt: {
      he: "גילינו את הטעויות שחברות עושות כשהן מטמיעות מערכות מדידה ואיך להימנע מהן.",
      en: "The mistakes companies make when implementing measurement systems — and how to avoid them.",
    },
    readTime: { he: "4 דקות קריאה", en: "4 min read" },
    date: { he: "15 בדצמבר, 2024", en: "December 15, 2024" },
    related: ["roi", "tracking"],
    body: {
      he: [
        { type: "p", text: "גילינו את הטעויות שחברות עושות כשהן מטמיעות מערכות מדידה ואיך להימנע מהן. בחודשים האחרונים עבדנו עם תריסר חברות בגדלים שונים, וראינו דפוסים חוזרים בדרך שבה הן ניגשות לאנליטיקס." },
        { type: "h2", text: "1. התחלה בלי תוכנית מדידה" },
        { type: "mistake", title: "🚩 הטעות", text: "הרבה חברות קופצות ישר להטמעה בלי לתכנן קודם מה בדיוק הן רוצות לעקוב." },
        { type: "p", text: "זה כמו לנסוע בלי מפה. מטמיעים כל אירוע שעשוי להיות שימושי, ובתוך חודש מוצאים את עצמכם עם מאות אירועים לא מסודרים שאיש לא משתמש בהם." },
        { type: "p", text: "**הפתרון:** בנו Tracking Plan קודם. שמרו אותו פשוט: אילו שאלות עסקיות צריך לשאול? אילו נתונים נדרשים כדי לענות עליהן?" },
        { type: "h2", text: "2. הגדרה של יותר מדי KPIs" },
        { type: "p", text: "אם הכל חשוב — אז כלום לא חשוב. חברות שמגדירות 50+ KPIs בדרך כלל מסיימות בלי אף אחד שאחראי עליהם." },
        { type: "p", text: "התחילו עם 3-5 KPIs ליבה שמספקים ערך ממשי. אחרי שהם במקום, הוסיפו עוד." },
        { type: "h2", text: "3. אי תיאום בין צוותים" },
        { type: "mistake", title: "🚩 הטעות", text: "הצוות הדיגיטלי מטמיע tracking אחד, הצוות האנליטי מצפה לאירוע אחר, והם לעולם לא מדברים." },
        { type: "p", text: "כך נוצרת ערמה של דאטה לא ניתן לתרגום. בנו את ה‑Tracking Plan יחד, לא בנפרד." },
        { type: "h2", text: "4. שימוש בדוחות ברירת המחדל" },
        { type: "p", text: "אם אתם רק משתמשים בדוחות הסטנדרטיים של Google Analytics או Mixpanel — אתם לא מפיקים הרבה. בנו דוחות מותאמים לשאלות שלכם, לא להפך." },
        { type: "h2", text: "5. הנחה שהדאטה מדויק כבר מהיום הראשון" },
        { type: "p", text: "דאטה טוב הוא תהליך. כשמתחילים יהיה רעש: אירועים שלא נמדדו, דיוק חלקי, סדר שבור. זה בסדר גמור — תכננו זמן לביקורת ותיקון." },
        { type: "h2", text: "הדרך קדימה" },
        { type: "p", text: "אנליטיקס טוב הוא מרתון, לא ספרינט. בנו יסודות חזקים, עבדו עם צוות שיודע לעבוד עם דאטה נכון, ותנו למערכת להשתרש." },
        { type: "p", text: "אם אתם מתקרבים להטמעה, או תקועים עם תשתית קיימת — בואו נדבר. זה בדיוק מה שאנחנו עושים." },
      ],
      en: [
        { type: "p", text: "We mapped out the mistakes companies make when implementing measurement systems — and how to avoid them. Over the past few months we worked with a dozen companies of different sizes and saw recurring patterns in how they approach analytics." },
        { type: "h2", text: "1. Starting without a measurement plan" },
        { type: "mistake", title: "🚩 The mistake", text: "Many companies jump straight into implementation without first planning exactly what they want to track." },
        { type: "p", text: "It's like driving without a map. You implement every event that might be useful, and within a month you're left with hundreds of disorganized events no one uses." },
        { type: "p", text: "**The fix:** Build a Tracking Plan first. Keep it simple: which business questions need answering? What data is required to answer them?" },
        { type: "h2", text: "2. Defining too many KPIs" },
        { type: "p", text: "If everything is important, nothing is. Companies that define 50+ KPIs usually end up with no one accountable for any of them." },
        { type: "p", text: "Start with 3-5 core KPIs that deliver real value. Once they're in place, add more." },
        { type: "h2", text: "3. Lack of coordination between teams" },
        { type: "mistake", title: "🚩 The mistake", text: "The digital team implements one tracking scheme, the analytics team expects a different event, and they never talk." },
        { type: "p", text: "This creates a pile of untranslatable data. Build the Tracking Plan together, not in silos." },
        { type: "h2", text: "4. Relying on default reports" },
        { type: "p", text: "If you only use the standard reports from Google Analytics or Mixpanel, you're not getting much. Build custom reports that fit your questions — not the other way around." },
        { type: "h2", text: "5. Assuming data is accurate from day one" },
        { type: "p", text: "Good data is a process. When you start there will be noise: missed events, partial accuracy, broken ordering. That's perfectly fine — plan time for audits and fixes." },
        { type: "h2", text: "The way forward" },
        { type: "p", text: "Good analytics is a marathon, not a sprint. Build strong foundations, work with a team that knows how to handle data properly, and let the system take root." },
        { type: "p", text: "If you're approaching an implementation, or stuck with existing infrastructure — let's talk. It's exactly what we do." },
      ],
    },
  },
  {
    slug: "roi",
    thumb: "🎯",
    img: "https://picsum.photos/seed/analytics-roi/800/450",
    author: "שלומית יוסף / Shlomit Yosef",
    category: { he: "מחקר", en: "Research" },
    title: {
      he: "ה-ROI של אנליטיקס: הנתונים",
      en: "The ROI of Analytics: The Numbers",
    },
    excerpt: {
      he: "עיון במחקרים האחרונים על האופן שבו חברות משתנות כשהן משתמשות בדאטה טוב.",
      en: "A look at recent research on how companies transform when they use good data.",
    },
    readTime: { he: "6 דקות קריאה", en: "6 min read" },
    date: { he: "22 בנובמבר, 2024", en: "November 22, 2024" },
    related: ["mistakes", "tracking"],
    body: {
      he: [
        { type: "p", text: "עיון במחקרים האחרונים על האופן שבו חברות משתנות כשהן משתמשות בדאטה טוב. המספרים מדברים בעד עצמם — והם די מדהימים." },
        { type: "h2", text: "למה הדאטה משנה כל כך הרבה?" },
        { type: "p", text: "בעולם שבו כל חברה מדברת על \"הבנת הלקוח\", מפתיע כמה מהן בעצם לא משתמשות בדאטה כדי לעשות את זה. בדקנו את המחקרים האחרונים, והתוצאות ברורות." },
        { type: "stat", num: "23×", label: "חברות שמשתמשות בנתונים בצורה אפקטיבית נוטות לגייס יותר לקוחות" },
        { type: "h2", text: "הנתונים מהמחקרים המובילים" },
        { type: "p", text: "ארבעה מחקרים גדולים בשנתיים האחרונות הראו דפוסים עקביים:" },
        { type: "h3", text: "1. גיוס לקוחות" },
        { type: "p", text: "חברות שמקבלות החלטות מבוססות דאטה נוטות **פי 23 לגייס לקוחות** יותר מחברות שלא. זה לא שינוי קטן — זה משנה את המשחק." },
        { type: "stat", num: "6×", label: "שיפור בשימור לקוחות" },
        { type: "h3", text: "2. שימור" },
        { type: "p", text: "קל יותר לשמר לקוח קיים מאשר למצוא חדש. חברות שמשתמשות בדאטה כדי להבין את הלקוחות שלהן משפרות שימור פי 6." },
        { type: "h3", text: "3. רווחיות" },
        { type: "p", text: "בסך הכל, חברות שמשתמשות בדאטה בצורה אפקטיבית **רווחיות פי 19** מהמתחרים שלהן." },
        { type: "h2", text: "בואו נפרק את זה" },
        { type: "p", text: "אם אתם מנהלים חברה עם הכנסה של $10M:" },
        { type: "ul", items: [
          "שיפור של פי 6 בשימור פירושו כמעט $5M בהכנסות נוספות משמירה על לקוחות קיימים",
          "גיוס יעיל יותר פירושו $2-3M בהכנסות נוספות מלקוחות חדשים",
          "בסך הכל: דאטה טוב עשוי להחזיר $7-8M בהכנסות נוספות",
        ] },
        { type: "h2", text: "אבל... זה דורש עבודה" },
        { type: "p", text: "זו לא הבטחה לכסף קל. החברות האלו:" },
        { type: "ol", items: [
          "בנו תשתית אנליטיקה איתנה",
          "הטמיעו תרבות דאטה",
          "השקיעו בצוות או בשותפים שיודעים מה הם עושים",
        ] },
        { type: "p", text: "אבל ההשקעה מחזירה את עצמה בחודשים, לא בשנים." },
        { type: "h2", text: "האם זה בשבילכם?" },
        { type: "p", text: "אם אתם מובילים עסק או צוות ומרגישים שאתם לא מפיקים ערך מהדאטה שלכם — עכשיו הזמן לתקן את זה." },
      ],
      en: [
        { type: "p", text: "A look at recent research on how companies transform when they use good data. The numbers speak for themselves — and they're pretty staggering." },
        { type: "h2", text: "Why does data matter so much?" },
        { type: "p", text: "In a world where every company talks about \"understanding the customer\", it's surprising how many don't actually use data to do it. We reviewed the latest studies, and the results are clear." },
        { type: "stat", num: "23×", label: "Companies that use data effectively are more likely to acquire customers" },
        { type: "h2", text: "The numbers from leading studies" },
        { type: "p", text: "Four major studies over the past two years showed consistent patterns:" },
        { type: "h3", text: "1. Customer acquisition" },
        { type: "p", text: "Companies that make data-driven decisions are **23x more likely to acquire customers** than those that don't. That's not a small shift — it's a game changer." },
        { type: "stat", num: "6×", label: "Improvement in customer retention" },
        { type: "h3", text: "2. Retention" },
        { type: "p", text: "It's easier to keep an existing customer than to find a new one. Companies that use data to understand their customers improve retention by 6x." },
        { type: "h3", text: "3. Profitability" },
        { type: "p", text: "Overall, companies that use data effectively are **19x more profitable** than their competitors." },
        { type: "h2", text: "Let's break it down" },
        { type: "p", text: "If you run a company with $10M in revenue:" },
        { type: "ul", items: [
          "A 6x improvement in retention means nearly $5M in additional revenue from keeping existing customers",
          "More efficient acquisition means $2-3M in additional revenue from new customers",
          "In total: good data could return $7-8M in additional revenue",
        ] },
        { type: "h2", text: "But... it takes work" },
        { type: "p", text: "This isn't a promise of easy money. These companies:" },
        { type: "ol", items: [
          "Built solid analytics infrastructure",
          "Embedded a data culture",
          "Invested in a team or partners who know what they're doing",
        ] },
        { type: "p", text: "But the investment pays off in months, not years." },
        { type: "h2", text: "Is it for you?" },
        { type: "p", text: "If you lead a business or a team and feel you're not getting value from your data — now is the time to fix it." },
      ],
    },
  },
  {
    slug: "tracking",
    thumb: "🚀",
    img: "https://picsum.photos/seed/analytics-tracking/800/450",
    author: "עמית רבין / Amit Rabin",
    category: { he: "טיפ", en: "Tip" },
    title: {
      he: "בנו תחילה תוכנית מדידה",
      en: "Build Your Tracking Plan First",
    },
    excerpt: {
      he: "כיצד להגדיר tracking plan שלא תצטרכו להחליף כל חודש.",
      en: "How to define a tracking plan you won't need to replace every month.",
    },
    readTime: { he: "5 דקות קריאה", en: "5 min read" },
    date: { he: "8 בנובמבר, 2024", en: "November 8, 2024" },
    related: ["mistakes", "roi"],
    body: {
      he: [
        { type: "p", text: "כיצד להגדיר tracking plan שלא תצטרכו להחליף כל חודש. זה קל יותר ממה שחושבים." },
        { type: "h2", text: "למה צריך tracking plan?" },
        { type: "p", text: "אם מתחילים בלי תוכנית, אתם בעצם אומרים: \"בואו נעקוב אחרי הכל ונקווה שזה יהיה שימושי.\" ספוילר: זה לא יהיה." },
        { type: "h2", text: "שלוש שאלות בסיסיות" },
        { type: "p", text: "שלוש השאלות האלו הן כל מה שאתם צריכים:" },
        { type: "ol", items: [
          "**מה אנחנו מנסים להשיג?** (מטרות עסקיות)",
          "**איך נדע אם הצלחנו?** (מדדים שאפשר למדוד)",
          "**אילו פעולות של המשתמש מעידות שאנחנו מתקדמים?** (אירועים)",
        ] },
        { type: "h2", text: "דוגמה: אתר E-commerce" },
        { type: "p", text: "בואו ניקח חנות מקוונת:" },
        { type: "h3", text: "מטרה: הגדלת הכנסות" },
        { type: "p", text: "זה נשמע טבעי אבל כללי מדי. בואו נפרק:" },
        { type: "ul", items: [
          "האם אנחנו מגדילים הזמנות חוזרות מלקוחות קיימים?",
          "האם אנחנו מגייסים לקוחות חדשים?",
          "האם אנחנו משנים את ה‑AOV (ממוצע ערך הזמנה)?",
        ] },
        { type: "h3", text: "מדדים" },
        { type: "code", text: "Conversion Rate = (מספר הזמנות / מספר מבקרים) × 100\nCustomer Lifetime Value = סך הרווח מכל לקוח\nRepeat Purchase Rate = (לקוחות חוזרים / סך הלקוחות)" },
        { type: "h3", text: "אירועים שצריך לעקוב" },
        { type: "ul", items: [
          "user_viewed_product",
          "user_added_to_cart",
          "user_started_checkout",
          "user_completed_purchase",
          "user_applied_discount",
        ] },
        { type: "h2", text: "כיצד לא לעשות זאת" },
        { type: "p", text: "אל תעקבו אחרי 150 אירועים בתקווה שאחד מהם יהיה שימושי. זה רק מאפיל על הנתונים שאתם באמת צריכים." },
        { type: "h2", text: "כיצד לעשות זאת נכון" },
        { type: "ol", items: [
          "התחילו עם 5-10 אירועים בליבה",
          "עקבו אחריהם במשך חודש",
          "אם הם שימושיים — שמרו אותם",
          "אם לא — החליפו אותם",
          "הוסיפו עוד רק אחרי שביססתם את מה שיש",
        ] },
        { type: "p", text: "בצורה הפשוטה הזו, ה‑Tracking Plan שלכם משתפר עם הזמן במקום להפוך לבוץ." },
      ],
      en: [
        { type: "p", text: "How to define a tracking plan you won't need to replace every month. It's easier than you think." },
        { type: "h2", text: "Why a tracking plan?" },
        { type: "p", text: "If you start without a plan, you're essentially saying: \"Let's track everything and hope it's useful.\" Spoiler: it won't be." },
        { type: "h2", text: "Three basic questions" },
        { type: "p", text: "These three questions are all you need:" },
        { type: "ol", items: [
          "**What are we trying to achieve?** (business goals)",
          "**How will we know if we succeeded?** (measurable metrics)",
          "**Which user actions tell us we're making progress?** (events)",
        ] },
        { type: "h2", text: "Example: an E-commerce site" },
        { type: "p", text: "Let's take an online store:" },
        { type: "h3", text: "Goal: increase revenue" },
        { type: "p", text: "It sounds natural but it's too general. Let's break it down:" },
        { type: "ul", items: [
          "Are we growing repeat orders from existing customers?",
          "Are we acquiring new customers?",
          "Are we changing AOV (average order value)?",
        ] },
        { type: "h3", text: "Metrics" },
        { type: "code", text: "Conversion Rate = (orders / visitors) × 100\nCustomer Lifetime Value = total profit per customer\nRepeat Purchase Rate = (returning customers / total customers)" },
        { type: "h3", text: "Events to track" },
        { type: "ul", items: [
          "user_viewed_product",
          "user_added_to_cart",
          "user_started_checkout",
          "user_completed_purchase",
          "user_applied_discount",
        ] },
        { type: "h2", text: "How not to do it" },
        { type: "p", text: "Don't track 150 events hoping one will be useful. It only buries the data you actually need." },
        { type: "h2", text: "How to do it right" },
        { type: "ol", items: [
          "Start with 5-10 core events",
          "Track them for a month",
          "If they're useful — keep them",
          "If not — replace them",
          "Add more only after you've established what you have",
        ] },
        { type: "p", text: "Done this simply, your Tracking Plan improves over time instead of turning into mud." },
      ],
    },
  },
];

// Extra blog cards that don't link to a full post (mirrors the design).
export const extraCards = [
  { thumb: "💡", img: "https://picsum.photos/seed/sales-growth/800/450", category: { he: "סיפור לקוח", en: "Case Study" }, author: "דן כהן / Dan Cohen",
    title: { he: "קידום מכירות מבוסס דאטה", en: "Data-Driven Sales Growth" },
    excerpt: { he: "כיצד חברה בינונית השתמשה בניתוח מתקדם כדי להגדיל מכירות ב‑40% בשנה.", en: "How a mid-size company used advanced analytics to grow sales 40% in a year." } },
  { thumb: "🔍", img: "https://picsum.photos/seed/audit-101/800/450", category: { he: "מדריך", en: "Guide" }, author: "שלומית יוסף / Shlomit Yosef",
    title: { he: "ביקורת אנליטיקס 101", en: "Analytics Audit 101" },
    excerpt: { he: "כל מה שצריך לדעת כדי להעריך אם הדאטה שלכם מדויק ואמין.", en: "Everything you need to know to assess whether your data is accurate and reliable." } },
  { thumb: "🎓", img: "https://picsum.photos/seed/data-budget/800/450", category: { he: "שיעור", en: "Lesson" }, author: "עמית רבין / Amit Rabin",
    title: { he: "דאטה בתקציב: לסטארטאפים", en: "Data on a Budget: For Startups" },
    excerpt: { he: "כיצד לבנות תשתית אנליטיקה חזקה גם בתקציב צר.", en: "How to build strong analytics infrastructure even on a tight budget." } },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
