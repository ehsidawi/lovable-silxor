import { useState, useId } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useLanguage } from "@/context/LanguageContext";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  submitLead,
  buildMailtoHref,
  LEAD_LIMITS,
  type LeadPayload,
} from "@/lib/submitLead";

const INTERESTS = [
  { value: "cybersecurity", en: "Cybersecurity", ar: "الأمن السيبراني" },
  { value: "cloud", en: "Cloud & Infrastructure", ar: "السحابة والبنية التحتية" },
  { value: "private-ai", en: "Private AI", ar: "الذكاء الاصطناعي الخاص" },
  { value: "identity", en: "Identity & Access", ar: "الهوية والوصول" },
  { value: "managed-services", en: "Managed Services", ar: "الخدمات المُدارة" },
  { value: "advisory", en: "Advisory", ar: "الاستشارات" },
] as const;

const TIMELINES = [
  { value: "immediate", en: "Immediate (0–1 month)", ar: "فوري (0-1 شهر)" },
  { value: "short", en: "Short term (1–3 months)", ar: "قصير المدى (1-3 أشهر)" },
  { value: "mid", en: "Mid term (3–6 months)", ar: "متوسط المدى (3-6 أشهر)" },
  { value: "long", en: "Long term (6+ months)", ar: "طويل المدى (6+ أشهر)" },
  { value: "exploring", en: "Just exploring", ar: "أستكشف فقط" },
] as const;

const schema = z.object({
  name: z.string().trim().min(1, "required").max(LEAD_LIMITS.name),
  organization: z.string().trim().min(1, "required").max(LEAD_LIMITS.organization),
  email: z.string().trim().min(1, "required").max(LEAD_LIMITS.email).email("invalid"),
  phone: z.string().trim().max(LEAD_LIMITS.phone).optional().or(z.literal("")),
  interest: z.string().trim().min(1, "required"),
  timeline: z.string().trim().min(1, "required"),
  summary: z.string().trim().min(1, "required").max(LEAD_LIMITS.summary),
  consent: z.boolean().refine((v) => v === true, "required"),
  company_website: z.string().max(0).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;
type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  interest: "",
  timeline: "",
  summary: "",
  consent: false,
  company_website: "",
};

type Status = "idle" | "submitting" | "ok" | "fallback" | "error";

const AssessmentForm = () => {
  const { t, language, localeFont } = useLanguage();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [mailtoHref, setMailtoHref] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const formTitleId = useId();
  const summaryId = useId();

  const messages: Record<string, { en: string; ar: string }> = {
    required: { en: "This field is required.", ar: "هذا الحقل مطلوب." },
    invalid: { en: "Enter a valid work email.", ar: "أدخل بريدًا إلكترونيًا صحيحًا." },
  };

  const fieldError = (key: keyof FormValues) => {
    const code = errors[key];
    if (!code) return undefined;
    const msg = messages[code] ?? messages.required;
    return t(msg.en, msg.ar);
  };

  const setField = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const nextErrors: FormErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormValues;
        nextErrors[key] = issue.message;
      }
      setErrors(nextErrors);
      // Move focus to error summary
      const summaryEl = document.getElementById(summaryId);
      summaryEl?.focus();
      return;
    }
    setErrors({});
    setStatus("submitting");
    setErrorMessage("");

    const payload: LeadPayload = {
      name: result.data.name,
      organization: result.data.organization,
      email: result.data.email,
      phone: result.data.phone || undefined,
      interest: result.data.interest,
      summary: result.data.summary,
      timeline: result.data.timeline,
      consent: result.data.consent,
      company_website: result.data.company_website || undefined,
      locale: language,
      submittedAt: new Date().toISOString(),
    };

    try {
      const outcome = await submitLead(payload);
      if (outcome.status === "ok") {
        setStatus("ok");
      } else if (outcome.status === "fallback") {
        setMailtoHref(outcome.mailtoHref);
        setStatus("fallback");
      } else {
        setErrorMessage(outcome.message);
        setStatus("error");
      }
    } catch {
      setMailtoHref(buildMailtoHref(payload));
      setErrorMessage(t("Something went wrong sending your request.", "حدث خطأ أثناء إرسال طلبك."));
      setStatus("error");
    }
  };

  const errorEntries = Object.entries(errors).filter(([, v]) => Boolean(v));

  if (status === "ok") {
    return (
      <div
        role="status"
        style={{
          border: "1px solid rgba(255,255,255,0.10)",
          backgroundColor: "#14171F",
          padding: 24,
          color: "#F0F1F3",
          fontFamily: localeFont,
        }}
      >
        <p className="font-body" style={{ fontSize: 15, lineHeight: 1.7 }}>
          {t(
            "Thank you. Your assessment request has been submitted. Our team will follow up shortly.",
            "شكراً لك. تم إرسال طلب التقييم الخاص بك. سيتواصل معك فريقنا قريباً."
          )}
        </p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      aria-labelledby={formTitleId}
      style={{
        border: "1px solid rgba(255,255,255,0.10)",
        backgroundColor: "#14171F",
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        fontFamily: localeFont,
      }}
    >
      <h2
        id={formTitleId}
        className="font-mono uppercase"
        style={{ fontSize: 13, letterSpacing: "0.15em", color: "#F0F1F3" }}
      >
        {t("Or tell us about your project", "أو أخبرنا عن مشروعك")}
      </h2>

      {errorEntries.length > 0 && (
        <div
          id={summaryId}
          role="alert"
          tabIndex={-1}
          style={{
            border: "1px solid rgba(230,80,80,0.5)",
            background: "rgba(230,80,80,0.08)",
            padding: 16,
            color: "#F5B5B5",
          }}
        >
          <p className="font-mono uppercase" style={{ fontSize: 11, letterSpacing: "0.1em", marginBottom: 8 }}>
            {t("Please fix the following:", "يرجى تصحيح ما يلي:")}
          </p>
          <ul style={{ paddingInlineStart: 18, listStyle: "disc" }}>
            {errorEntries.map(([key]) => (
              <li key={key} style={{ fontSize: 13 }}>
                <a href={`#field-${key}`} style={{ color: "#F5B5B5", textDecoration: "underline" }}>
                  {key}: {fieldError(key as keyof FormValues)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Honeypot */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
        <Label htmlFor="company_website">Company website</Label>
        <Input
          id="company_website"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          value={values.company_website}
          onChange={(e) => setField("company_website", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="field-name" style={{ color: "#B8BCC2", fontSize: 13 }}>
            {t("Full name", "الاسم الكامل")} *
          </Label>
          <Input
            id="field-name"
            name="name"
            value={values.name}
            maxLength={LEAD_LIMITS.name}
            onChange={(e) => setField("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "error-name" : undefined}
            autoComplete="name"
          />
          {errors.name && (
            <p id="error-name" style={{ color: "#F5B5B5", fontSize: 12 }}>
              {fieldError("name")}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="field-organization" style={{ color: "#B8BCC2", fontSize: 13 }}>
            {t("Organization", "المؤسسة")} *
          </Label>
          <Input
            id="field-organization"
            name="organization"
            value={values.organization}
            maxLength={LEAD_LIMITS.organization}
            onChange={(e) => setField("organization", e.target.value)}
            aria-invalid={Boolean(errors.organization)}
            aria-describedby={errors.organization ? "error-organization" : undefined}
            autoComplete="organization"
          />
          {errors.organization && (
            <p id="error-organization" style={{ color: "#F5B5B5", fontSize: 12 }}>
              {fieldError("organization")}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="field-email" style={{ color: "#B8BCC2", fontSize: 13 }}>
            {t("Work email", "البريد الإلكتروني للعمل")} *
          </Label>
          <Input
            id="field-email"
            name="email"
            type="email"
            dir="ltr"
            value={values.email}
            maxLength={LEAD_LIMITS.email}
            onChange={(e) => setField("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "error-email" : undefined}
            autoComplete="email"
          />
          {errors.email && (
            <p id="error-email" style={{ color: "#F5B5B5", fontSize: 12 }}>
              {fieldError("email")}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="field-phone" style={{ color: "#B8BCC2", fontSize: 13 }}>
            {t("Phone (optional)", "الهاتف (اختياري)")}
          </Label>
          <Input
            id="field-phone"
            name="phone"
            type="tel"
            dir="ltr"
            value={values.phone}
            maxLength={LEAD_LIMITS.phone}
            onChange={(e) => setField("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "error-phone" : undefined}
            autoComplete="tel"
          />
          {errors.phone && (
            <p id="error-phone" style={{ color: "#F5B5B5", fontSize: 12 }}>
              {fieldError("phone")}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="field-interest" style={{ color: "#B8BCC2", fontSize: 13 }}>
            {t("Service interest", "الخدمة المطلوبة")} *
          </Label>
          <Select value={values.interest} onValueChange={(v) => setField("interest", v)}>
            <SelectTrigger
              id="field-interest"
              aria-invalid={Boolean(errors.interest)}
              aria-describedby={errors.interest ? "error-interest" : undefined}
            >
              <SelectValue placeholder={t("Select a service", "اختر خدمة")} />
            </SelectTrigger>
            <SelectContent>
              {INTERESTS.map((i) => (
                <SelectItem key={i.value} value={i.value}>
                  {t(i.en, i.ar)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.interest && (
            <p id="error-interest" style={{ color: "#F5B5B5", fontSize: 12 }}>
              {fieldError("interest")}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="field-timeline" style={{ color: "#B8BCC2", fontSize: 13 }}>
            {t("Timeline", "الجدول الزمني")} *
          </Label>
          <Select value={values.timeline} onValueChange={(v) => setField("timeline", v)}>
            <SelectTrigger
              id="field-timeline"
              aria-invalid={Boolean(errors.timeline)}
              aria-describedby={errors.timeline ? "error-timeline" : undefined}
            >
              <SelectValue placeholder={t("Select a timeline", "اختر الجدول الزمني")} />
            </SelectTrigger>
            <SelectContent>
              {TIMELINES.map((i) => (
                <SelectItem key={i.value} value={i.value}>
                  {t(i.en, i.ar)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.timeline && (
            <p id="error-timeline" style={{ color: "#F5B5B5", fontSize: 12 }}>
              {fieldError("timeline")}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="field-summary" style={{ color: "#B8BCC2", fontSize: 13 }}>
          {t("Project summary", "ملخص المشروع")} *
        </Label>
        <Textarea
          id="field-summary"
          name="summary"
          rows={5}
          value={values.summary}
          maxLength={LEAD_LIMITS.summary}
          onChange={(e) => setField("summary", e.target.value)}
          aria-invalid={Boolean(errors.summary)}
          aria-describedby={errors.summary ? "error-summary" : undefined}
        />
        {errors.summary && (
          <p id="error-summary" style={{ color: "#F5B5B5", fontSize: 12 }}>
            {fieldError("summary")}
          </p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <Checkbox
          id="field-consent"
          checked={values.consent}
          onCheckedChange={(v) => setField("consent", v === true)}
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? "error-consent" : undefined}
          className="mt-1"
        />
        <Label htmlFor="field-consent" style={{ color: "#B8BCC2", fontSize: 13, lineHeight: 1.6 }}>
          {t("I agree to Silxor's ", "أوافق على ")}
          <Link to="/privacy" style={{ color: "#F0F1F3", textDecoration: "underline" }}>
            {t("privacy policy", "سياسة الخصوصية")}
          </Link>
          {t(" and consent to being contacted about this request.", " وأوافق على التواصل معي بخصوص هذا الطلب.")}
        </Label>
      </div>
      {errors.consent && (
        <p id="error-consent" style={{ color: "#F5B5B5", fontSize: 12, marginTop: -12 }}>
          {fieldError("consent")}
        </p>
      )}

      {status === "fallback" && (
        <div role="status" style={{ border: "1px solid rgba(240,241,243,0.2)", padding: 16, color: "#F0F1F3" }}>
          <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 8 }}>
            {t(
              "No submission backend is configured yet, so this request was not sent automatically. Please send it by email instead:",
              "لم يتم تهيئة نظام استلام الطلبات بعد، لذا لم يتم إرسال هذا الطلب تلقائياً. يرجى إرساله عبر البريد الإلكتروني بدلاً من ذلك:"
            )}
          </p>
          <a
            href={mailtoHref}
            style={{ color: "#F0F1F3", textDecoration: "underline", fontSize: 13 }}
          >
            {t("Send prepared email to hello@silxor.com", "إرسال البريد الإلكتروني الجاهز إلى hello@silxor.com")}
          </a>
        </div>
      )}

      {status === "error" && (
        <div role="alert" style={{ border: "1px solid rgba(230,80,80,0.5)", padding: 16, color: "#F5B5B5" }}>
          <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 8 }}>
            {errorMessage || t("Your request could not be submitted.", "تعذر إرسال طلبك.")}
          </p>
          {mailtoHref && (
            <a href={mailtoHref} style={{ color: "#F5B5B5", textDecoration: "underline", fontSize: 13 }}>
              {t("Send prepared email instead", "إرسال البريد الإلكتروني الجاهز بدلاً من ذلك")}
            </a>
          )}
        </div>
      )}

      <div className="flex items-center gap-3">
        <Button
          type="submit"
          disabled={status === "submitting"}
          className="h-auto rounded-none font-mono font-[400] uppercase transition-all duration-200"
          style={{
            fontSize: 11,
            letterSpacing: "0.12em",
            backgroundColor: "#F0F1F3",
            color: "#0B0B0B",
            padding: "14px 28px",
            minHeight: 44,
          }}
        >
          {status === "submitting"
            ? t("Sending…", "جارٍ الإرسال…")
            : t("Submit request", "إرسال الطلب")}
        </Button>
        {status === "error" && (
          <Button
            type="button"
            variant="ghost"
            onClick={() => setStatus("idle")}
            className="h-auto rounded-none font-mono font-[400] uppercase hover:bg-transparent hover:text-inherit"
            style={{ fontSize: 11, letterSpacing: "0.12em", color: "#F0F1F3", padding: "14px 20px", minHeight: 44 }}
          >
            {t("Retry", "إعادة المحاولة")}
          </Button>
        )}
      </div>
    </form>
  );
};

export default AssessmentForm;
