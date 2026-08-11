import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
  type ReactNode,
} from "react";
import kuDictionary from "@/i18n/ku";

export type Language = "en" | "ar" | "ku";

export const LOCALES: { code: Language; label: string; ariaLabel: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", label: "EN", ariaLabel: "English", dir: "ltr" },
  { code: "ar", label: "ع", ariaLabel: "العربية", dir: "rtl" },
  { code: "ku", label: "کوردی", ariaLabel: "کوردی", dir: "rtl" },
];

const STORAGE_KEY = "silxor.locale";

const isLanguage = (value: unknown): value is Language =>
  value === "en" || value === "ar" || value === "ku";

const readStoredLanguage = (): Language => {
  if (typeof window === "undefined") return "en";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isLanguage(stored) ? stored : "en";
  } catch {
    return "en";
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  /**
   * Translate a visible string.
   * `ku` is optional: when omitted the Sorani dictionary (src/i18n/ku.ts) is
   * looked up by the English source string, falling back to English.
   */
  t: (en: string, ar: string, ku?: string) => string;
  isRTL: boolean;
  dir: "ltr" | "rtl";
  /** Font stack to apply for the active locale (undefined for English). */
  localeFont: string | undefined;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (en) => en,
  isRTL: false,
  dir: "ltr",
  localeFont: undefined,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(readStoredLanguage);

  const isRTL = language === "ar" || language === "ku";
  const dir: "ltr" | "rtl" = isRTL ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [dir, language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage unavailable (private mode) — locale simply won't persist */
    }
  }, []);

  const t = useCallback(
    (en: string, ar: string, ku?: string) => {
      if (language === "ar") return ar;
      if (language === "ku") return ku ?? kuDictionary[en] ?? en;
      return en;
    },
    [language]
  );

  const localeFont = isRTL ? "'Noto Sans Arabic', 'Cairo', sans-serif" : undefined;

  const value = useMemo(
    () => ({ language, setLanguage, t, isRTL, dir, localeFont }),
    [language, setLanguage, t, isRTL, dir, localeFont]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
