export type Lang = "he" | "en";
export const LANGS: Lang[] = ["he", "en"];
export const DEFAULT_LANG: Lang = "he";

export function dir(lang: Lang) {
  return lang === "he" ? "rtl" : "ltr";
}

export function otherLang(lang: Lang): Lang {
  return lang === "he" ? "en" : "he";
}
