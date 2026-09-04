import type { Locale } from "../data/site";

// Swaps the leading /en/ or /ar/ segment of a pathname for the other
// locale, keeping the rest of the path (used by the language switcher so
// it lands on the equivalent page rather than always the homepage).
export function altLocalePath(pathname: string, target: Locale): string {
  const stripped = pathname.replace(/^\/(en|ar)(\/|$)/, "/");
  return `/${target}${stripped}`.replace(/\/+/g, "/");
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "ar" : "en";
}
