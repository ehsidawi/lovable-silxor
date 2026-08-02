import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";


const serviceOptions = [
  { en: "Infrastructure & Cloud Hosting", ar: "البنية التحتية والاستضافة السحابية" },
  { en: "Software Development", ar: "تطوير البرمجيات" },
  { en: "AI & Automation", ar: "الذكاء الاصطناعي والأتمتة" },
  { en: "Identity & Access Management", ar: "إدارة الهوية والوصول" },
  { en: "Technology Consulting", ar: "الاستشارات التقنية" },
  { en: "Multiple Services", ar: "خدمات متعددة" },
];

const ContactForm = () => {
  const { t, language } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    organization: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");

    try {
      const subject = encodeURIComponent(
        `Silxor - ${formState.service || 'General Inquiry'} - ${formState.organization}`
      );

      const body = encodeURIComponent(
        `Hello Silxor Team,\n\n` +
        `Name: ${formState.name}\n` +
        `Organization: ${formState.organization}\n` +
        `Email: ${formState.email}\n` +
        `Service Interest: ${formState.service}\n\n` +
        `Message:\n${formState.message}`
      );

      const mailtoUrl = `mailto:contact@silxor.com?subject=${subject}&body=${body}`;
      // Universal cross-client trigger: synthesized anchor click works in
      // Safari/iOS, Chrome, Firefox, and respects the user's default mail handler
      // (Gmail web, Outlook web, Apple Mail, Thunderbird, mobile clients).
      const link = document.createElement("a");
      link.href = mailtoUrl;
      link.rel = "noopener";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setStatus("success");
      setFormState({ name: "", organization: "", email: "", service: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#25282C",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 2,
    padding: "12px 16px",
    color: "#FFFFFF",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 300,
    fontSize: 14,
    outline: "none",
    transition: "border-color 200ms",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 400,
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "#B8BCC2",
    marginBottom: 8,
    display: "block",
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "rgba(240, 241, 243,0.4)";
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
  };

  return (
    <div
      style={{
        backgroundColor: "#25282C",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 4,
        padding: 40,
        marginTop: 32,
      }}
    >
      <h3 className="font-body font-[500] text-center" style={{ fontSize: 17, color: "#FFFFFF", marginBottom: 12 }}>
        {t("Or Send Us a Direct Message", "أو أرسل لنا رسالة مباشرة")}
      </h3>

      <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5" style={{ maxWidth: 720, margin: "0 auto" }}>
        <div>
          <label style={labelStyle}>{t("Full Name", "الاسم الكامل")} *</label>
          <input
            type="text"
            required
            placeholder={t("Your full name", "اسمك الكامل")}
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{ ...inputStyle, fontFamily: language === "ar" ? "'Cairo', sans-serif" : "'DM Sans', sans-serif" }}
          />
        </div>
        <div>
          <label style={labelStyle}>{t("Organization", "المؤسسة")} *</label>
          <input
            type="text"
            required
            placeholder={t("Company or ministry name", "اسم الشركة أو الوزارة")}
            value={formState.organization}
            onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{ ...inputStyle, fontFamily: language === "ar" ? "'Cairo', sans-serif" : "'DM Sans', sans-serif" }}
          />
        </div>
        <div>
          <label style={labelStyle}>{t("Email", "البريد الإلكتروني")} *</label>
          <input
            type="email"
            required
            placeholder="your@organization.com"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>{t("Service Interest", "الخدمة المطلوبة")} *</label>
          <select
            required
            value={formState.service}
            onChange={(e) => setFormState({ ...formState, service: e.target.value })}
            onFocus={handleFocus as any}
            onBlur={handleBlur as any}
            style={{ ...inputStyle, appearance: "none", cursor: "pointer", fontFamily: language === "ar" ? "'Cairo', sans-serif" : "'DM Sans', sans-serif" }}
          >
            <option value="" disabled>{t("Select a service", "اختر خدمة")}</option>
            {serviceOptions.map((opt) => (
              <option key={opt.en} value={opt.en}>{t(opt.en, opt.ar)}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label style={labelStyle}>{t("Message", "الرسالة")}</label>
          <textarea
            rows={4}
            placeholder={t("Describe the system you are building or the problem you need solved", "صف ما تبنيه أو التحدي الذي تواجهه")}
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            onFocus={handleFocus as any}
            onBlur={handleBlur as any}
            style={{ ...inputStyle, resize: "vertical", fontFamily: language === "ar" ? "'Cairo', sans-serif" : "'DM Sans', sans-serif" }}
          />
        </div>
        <div className="sm:col-span-2">
          <Button
            variant="ghost"
            type="submit"
            disabled={submitting}
            className="h-auto p-0 rounded-none hover:bg-transparent hover:text-inherit disabled:opacity-100 w-full font-mono font-[400] uppercase transition-all duration-200"
            style={{
              fontSize: 11,
              letterSpacing: "0.1em",
              backgroundColor: "#F0F1F3",
              color: "#0B0B0B",
              padding: "14px 28px",
              borderRadius: 2,
              border: "none",
              cursor: submitting ? "not-allowed" : "pointer",
              opacity: submitting ? 0.7 : 1,
            }}
            onMouseEnter={(e) => {
              if (!submitting) {
                e.currentTarget.style.backgroundColor = "#FFFFFF";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#F0F1F3";
            }}
          >
            {submitting ? t("Sending...", "جارٍ الإرسال...") : t("Send Message", "إرسال الرسالة")}
          </Button>

        </div>

        {status === "success" && (
          <div className="sm:col-span-2 font-body font-[300] text-center" style={{ fontSize: 14, color: "#F0F1F3", animation: "fadeIn 300ms ease" }}>
            {t("Your email client has opened with the message pre filled. Send it and our team will respond within one business day.", "تم فتح عميل البريد الإلكتروني مع رسالتك المعبأة مسبقاً. يرجى إرسالها لإتمام استفسارك.")}
          </div>
        )}
        {status === "error" && (
          <div className="sm:col-span-2 font-body font-[300] text-center" style={{ fontSize: 14, color: "#C94C4C" }}>
            {t("We could not open your email client. Please write to contact@silxor.com directly.", "حدث خطأ ما. يرجى مراسلتنا مباشرة على contact@silxor.com")}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
