import { useLanguage, LOCALES, type Language } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const fontFor = (code: Language) =>
  code === "en" ? "'JetBrains Mono', monospace" : "'Noto Sans Arabic', 'Cairo', sans-serif";

const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      className="flex items-center gap-2"
      role="group"
      aria-label={t("Language", "اللغة", "زمان")}
      dir="ltr"
    >
      {LOCALES.map((locale, i) => {
        const active = language === locale.code;
        return (
          <div key={locale.code} className="flex items-center gap-2">
            {i > 0 && (
              <Separator
                orientation="vertical"
                aria-hidden
                className="bg-transparent"
                style={{ width: 1, height: 14, backgroundColor: "rgba(255,255,255,0.1)" }}
              />
            )}
            <Button
              variant="ghost"
              type="button"
              onClick={() => setLanguage(locale.code)}
              aria-pressed={active}
              aria-label={locale.ariaLabel}
              lang={locale.code}
              className="h-auto p-0 rounded-none font-normal hover:bg-transparent hover:text-inherit transition-colors duration-200"
              style={{
                fontSize: locale.code === "en" ? 11 : 13,
                fontFamily: fontFor(locale.code),
                fontWeight: active ? 600 : 400,
                color: active ? "#F0F1F3" : "#B8BCC2",
                background: "none",
                border: "none",
                borderBottom: active ? "1px solid #F0F1F3" : "1px solid transparent",
                cursor: "pointer",
                padding: 0,
                whiteSpace: "nowrap",
              }}
            >
              {locale.label}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default LanguageToggle;
