import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        onClick={() => setLanguage("en")}
        className="h-auto p-0 rounded-none font-normal hover:bg-transparent hover:text-inherit font-mono font-[400] transition-colors duration-200"
        style={{
          fontSize: 11,
          color: language === "en" ? "#F0F1F3" : "#B8BCC2",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        EN
      </Button>
      <Separator
        orientation="vertical"
        className="bg-transparent"
        style={{ width: 1, height: 14, backgroundColor: "rgba(255,255,255,0.1)" }}
      />
      <Button
        variant="ghost"
        onClick={() => setLanguage("ar")}
        className="h-auto p-0 rounded-none font-normal hover:bg-transparent hover:text-inherit transition-colors duration-200"
        style={{
          fontSize: 13,
          fontFamily: "'Cairo', sans-serif",
          fontWeight: 400,
          color: language === "ar" ? "#F0F1F3" : "#B8BCC2",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        ع
      </Button>
    </div>
  );
};

export default LanguageToggle;
