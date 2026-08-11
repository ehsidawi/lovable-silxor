import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const NotFound = () => {
  const { t, localeFont } = useLanguage();

  const linkBase: React.CSSProperties = {
    fontSize: 11,
    letterSpacing: "0.12em",
    padding: "14px 28px",
    borderRadius: 2,
    minHeight: 44,
    display: "inline-flex",
    alignItems: "center",
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="main">
        <section className="section-spacing" style={{ paddingTop: 140, paddingBottom: 120 }}>
          <div className="container-content" style={{ maxWidth: 640, margin: "0 auto" }}>
            <div className="section-eyebrow">{t("ERROR 404", "خطأ 404", "هەڵەی ٤٠٤")}</div>
            <h1
              className="font-display font-[700]"
              style={{ fontSize: 42, lineHeight: 1.15, color: "#FFFFFF", marginBottom: 12, fontFamily: localeFont }}
            >
              {t("This page is not available", "هذه الصفحة غير متاحة", "ئەم پەڕەیە بەردەست نییە")}
            </h1>
            <p
              className="font-body font-[300]"
              style={{
                fontSize: 16,
                color: "#B8BCC2",
                lineHeight: 1.7,
                marginBottom: 32,
                fontFamily: localeFont,
                textAlign: "start",
              }}
            >
              {t(
                "The address you requested does not exist or has moved. Try one of the links below, or contact our team and we will point you to the right resource.",
                "العنوان الذي طلبته غير موجود أو تم نقله. جرّب أحد الروابط أدناه، أو تواصل مع فريقنا وسنرشدك إلى المصدر الصحيح.",
                "ئەو ناونیشانەی داوات کرد بوونی نییە یان گوازراوەتەوە. یەکێک لەم بەستەرانەی خوارەوە تاقی بکەرەوە، یان پەیوەندی بە تیمەکەمانەوە بکە تا ڕێنماییت بکەین بۆ سەرچاوەی دروست."
              )}
            </p>
            <nav
              aria-label={t("Helpful links", "روابط مفيدة", "بەستەرە بەسوودەکان")}
              className="flex flex-wrap gap-3"
            >
              <Button
                asChild
                variant="ghost"
                className="h-auto p-0 rounded-none font-normal hover:bg-transparent hover:text-inherit"
              >
                <Link
                  to="/"
                  className="font-mono font-[400] uppercase transition-all duration-200"
                  style={{ ...linkBase, backgroundColor: "#F0F1F3", color: "#0B0B0B", fontFamily: localeFont }}
                >
                  {t("Back to Home", "العودة إلى الرئيسية", "گەڕانەوە بۆ سەرەتا")}
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="h-auto p-0 rounded-none font-normal hover:bg-transparent hover:text-inherit"
              >
                <Link
                  to="/solutions"
                  className="font-mono font-[400] uppercase transition-all duration-200"
                  style={{
                    ...linkBase,
                    color: "#F0F1F3",
                    border: "1px solid rgba(255,255,255,0.14)",
                    fontFamily: localeFont,
                  }}
                >
                  {t("Explore Solutions", "استكشف الحلول")}
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="h-auto p-0 rounded-none font-normal hover:bg-transparent hover:text-inherit"
              >
                <Link
                  to="/book"
                  className="font-mono font-[400] uppercase transition-all duration-200"
                  style={{
                    ...linkBase,
                    color: "#F0F1F3",
                    border: "1px solid rgba(255,255,255,0.14)",
                    fontFamily: localeFont,
                  }}
                >
                  {t("Book an Assessment", "احجز تقييماً")}
                </Link>
              </Button>
            </nav>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
