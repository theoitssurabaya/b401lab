import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "id";

const SUPPORTED_LANGS: Language[] = ["en", "id"];
const DEFAULT_LANG: Language = "en";

/** Extracts the language prefix from a pathname like /en, /id, /en/about, /id/about */
function parseLangFromPath(pathname: string): Language | null {
  const segment = pathname.split("/")[1];
  if (SUPPORTED_LANGS.includes(segment as Language)) {
    return segment as Language;
  }
  return null;
}

/** Build the target URL when switching language, preserving sub-path */
export function buildLangUrl(targetLang: Language, currentPathname: string): string {
  const segments = currentPathname.split("/");
  // segments[0] is always "" (leading slash), segments[1] is the lang prefix
  const isKnownLang = SUPPORTED_LANGS.includes(segments[1] as Language);
  if (isKnownLang) {
    segments[1] = targetLang;
    return segments.join("/") || "/";
  }
  return `/${targetLang}`;
}

interface LanguageContextType {
  lang: Language;
}

const LanguageContext = createContext<LanguageContextType>({ lang: DEFAULT_LANG });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const lang = parseLangFromPath(pathname);

  // Redirect to default language if no valid lang prefix in the URL
  useEffect(() => {
    if (lang === null) {
      const target = buildLangUrl(DEFAULT_LANG, pathname);
      window.history.replaceState(null, "", target);
      setPathname(target);
    }
  }, [lang, pathname]);

  const resolvedLang = lang ?? DEFAULT_LANG;

  return (
    <LanguageContext.Provider value={{ lang: resolvedLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
