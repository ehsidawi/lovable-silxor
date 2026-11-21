import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Send } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { services } from "@/data/services";
import {
  engagementTypes,
  companySizes,
  environments,
  timelines,
  contactMethods,
  needSchema,
  contextSchema,
  contactSchema,
  consultationSchema,
} from "@/lib/consultation";
import SmartLink from "@/components/SmartLink";
import { useSearchParams } from "react-router-dom";
import { inquiryPreset, practices } from "@/data/practices";

const steps = ["What you need", "Your context", "Contact details"];
const areas = [
  ...services.map((s) => ({ id: s.slug, label: s.name })),
  ...(services.find((s) => s.slug === "identity")?.blocks ?? []).map((b) => ({
    id: b.id ?? "",
    label: b.title.replace(/ \/ /g, " · "),
  })),
];
const initial = {
  engagement_type: "",
  service_areas: [] as string[],
  company: "",
  role: "",
  company_size: "",
  environment: "",
  timeline: "",
  description: "",
  name: "",
  work_email: "",
  phone: "",
  preferred_contact: "Email",
  meeting_windows: "",
  time_zone: "",
  website: "",
};
type Field = keyof typeof initial;
const BookAssessment = () => {
  const [params] = useSearchParams();
  const preset = inquiryPreset(params.get("practice"), params.get("service"));
  const [step, setStep] = useState(0);
  const [values, setValues] = useState(() =>
    preset
      ? {
          ...initial,
          engagement_type: preset.engagement_type,
          service_areas: preset.service_areas,
        }
      : initial,
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const pending = false;
  const [saved, setSaved] = useState(false);
  const [failure, setFailure] = useState("");
  const [mailto, setMailto] = useState("");
  const heading = useRef<HTMLHeadingElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const moved = useRef(false);
  useEffect(() => {
    setValues((v) => ({
      ...v,
      time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC",
    }));
  }, []);
  useEffect(() => {
    if (moved.current) heading.current?.focus();
  }, [step, saved]);
  const update = (key: Field, value: string | string[]) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => {
      const next = { ...e };
      delete next[key];
      if (key === "preferred_contact") delete next.phone;
      return next;
    });
    setFailure("");
  };
  const validate = () => {
    const result = [needSchema, contextSchema, contactSchema][step].safeParse(
      values,
    );
    if (result.success) {
      setErrors({});
      return true;
    }
    const next: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const key = String(issue.path[0]);
      if (!next[key]) next[key] = issue.message;
    }
    setErrors(next);
    requestAnimationFrame(() => {
      const first = form.current?.querySelector<HTMLElement>(
        '[aria-invalid="true"]',
      );
      first?.focus();
    });
    return false;
  };
  const field = (
    key: Exclude<Field, "service_areas" | "website">,
    label: string,
    options?: readonly string[],
    max = 100,
    type = "text",
    optional = false,
  ) => (
    <div
      className={
        key === "description" || key === "meeting_windows"
          ? "sm:col-span-2"
          : ""
      }
      key={key}
    >
      <label htmlFor={key} className="mb-2 block text-sm font-semibold">
        {label}
        {optional && (
          <span className="ml-2 font-normal text-muted-foreground">
            Optional
          </span>
        )}
      </label>
      {options ? (
        <select
          id={key}
          name={key}
          value={values[key]}
          onChange={(e) => update(key, e.target.value)}
          aria-invalid={Boolean(errors[key])}
          aria-describedby={errors[key] ? `${key}-error` : undefined}
          className="h-11 w-full rounded-sm border border-input bg-background px-3 text-base text-foreground"
        >
          <option value="">Select an option</option>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : key === "description" || key === "meeting_windows" ? (
        <Textarea
          id={key}
          name={key}
          value={values[key]}
          maxLength={max}
          rows={key === "description" ? 4 : 2}
          onChange={(e) => update(key, e.target.value)}
          aria-invalid={Boolean(errors[key])}
          aria-describedby={`${key}-hint${errors[key] ? ` ${key}-error` : ""}`}
        />
      ) : (
        <Input
          id={key}
          name={key}
          type={type}
          value={values[key]}
          maxLength={max}
          className="h-11 rounded-sm"
          autoComplete={
            key === "name"
              ? "name"
              : key === "work_email"
                ? "email"
                : key === "company"
                  ? "organization"
                  : key === "role"
                    ? "organization-title"
                    : key === "phone"
                      ? "tel"
                      : "off"
          }
          onChange={(e) => update(key, e.target.value)}
          aria-invalid={Boolean(errors[key])}
          aria-describedby={errors[key] ? `${key}-error` : undefined}
        />
      )}
      {key === "description" && (
        <p
          id="description-hint"
          className="mt-2 text-xs leading-relaxed text-muted-foreground"
        >
          A short outline of your goals and constraints. Do not include
          passwords or sensitive production data. Up to 2000 characters.
        </p>
      )}
      {key === "meeting_windows" && (
        <p
          id="meeting_windows-hint"
          className="mt-2 text-xs text-muted-foreground"
        >
          For example, Tuesdays and Thursdays, 09:00 to 12:00. A meeting is
          confirmed separately.
        </p>
      )}
      {errors[key] && (
        <p id={`${key}-error`} className="mt-2 text-sm text-destructive">
          {errors[key]}
        </p>
      )}
    </div>
  );
  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (pending || !validate()) return;
    if (step < 2) {
      moved.current = true;
      setStep(step + 1);
      return;
    }
    const parsed = consultationSchema.safeParse(values);
    if (!parsed.success) {
      setFailure("Review your details before sending.");
      return;
    }
    const d = parsed.data;
    const label = (id: string) => areas.find((a) => a.id === id)?.label ?? id;
    const body = [
      "WHAT YOU NEED",
      ...(preset ? ["Practice: " + preset.practice.inquiryLabel] : []),
      "Engagement: " + d.engagement_type,
      ...d.service_areas.map((id) => "  * " + label(id)),
      "",
      "YOUR CONTEXT",
      "Company: " + d.company,
      "Role: " + d.role,
      "Company size: " + d.company_size,
      "Environment: " + d.environment,
      "Timeline: " + d.timeline,
      "Goals: " + d.description,
      "",
      "CONTACT DETAILS",
      "Name: " + d.name,
      "Work email: " + d.work_email,
      "Phone: " + (d.phone || "Not provided"),
      "Preferred contact: " + d.preferred_contact,
      "Meeting windows: " + d.meeting_windows,
      "Time zone: " + d.time_zone,
    ].join("\n");
    const href = `mailto:hello@silxor.com?subject=${encodeURIComponent(`${preset ? preset.practice.name + " " : ""}Consultation Request: ${d.company}, ${d.name}`)}&body=${encodeURIComponent(body)}`;
    setMailto(href);
    window.location.href = href;
    moved.current = true;
    setSaved(true);
    setValues(initial);
  };
  return (
    <PageShell
      title="Book a Consultation | Silxor"
      description="Tell Silxor about your technology or talent needs. Submit a consultation request with your project context and contact preferences."
      path="/book"
    >
      <PageHero
        eyebrow="Consultation"
        title="Start with the decision."
        lead="Prepare a request for the right practice. Your email app opens a draft addressed to hello@silxor.com. You choose when to send it."
        crumbs={[{ label: "Home", to: "/" }, { label: "Book a Consultation" }]}
      />
      <section className="ed-section">
        <div className="container-content ed-book-layout">
          <aside className="ed-book-progress">
            <p className="ed-kicker">Book a Consultation</p>
            <ol aria-label="Consultation progress">
              {steps.map((label, i) => (
                <li
                  key={label}
                  aria-current={i === step && !saved ? "step" : undefined}
                >
                  <span>0{i + 1}</span>
                  <span>{label}</span>
                  <span className="sr-only">
                    {saved || i < step
                      ? "Completed"
                      : i === step
                        ? "Current step"
                        : "Upcoming"}
                  </span>
                </li>
              ))}
            </ol>
            <p className="ed-note">
              A meeting is confirmed separately. Please do not include sensitive
              production data.
            </p>
          </aside>
          <div className="ed-book-form">
            {saved ? (
              <div role="status" className="ed-book-success">
                <CheckCircle2
                  className="mb-4 h-12 w-12 text-forest"
                  aria-hidden="true"
                />
                <h2
                  ref={heading}
                  tabIndex={-1}
                  className="font-display text-3xl font-bold"
                >
                  Your request is ready to send
                </h2>
                <p className="r-lead mt-4">
                  Your request is prepared for hello@silxor.com. If your email
                  app opened, press send there to deliver it. If it did not, use
                  the link below or contact us directly. The website has not
                  sent this request.
                </p>
                {mailto && (
                  <Button asChild className="mt-4 mr-3">
                    <a href={mailto}>
                      Open the email again <Send aria-hidden="true" />
                    </a>
                  </Button>
                )}
                <Button asChild variant="outline" className="mt-4">
                  <SmartLink to="/services">
                    Explore our services <ArrowRight aria-hidden="true" />
                  </SmartLink>
                </Button>
              </div>
            ) : (
              <>
                {step === 0 && (
                  <nav
                    aria-label="Choose a practice"
                    className="ed-book-practices"
                  >
                    <p className="ed-mini">Start from a practice</p>
                    <ul>
                      {practices.map((p) => (
                        <li key={p.id}>
                          <SmartLink
                            to={`/book?practice=${p.id}`}
                            aria-current={
                              preset?.practice.id === p.id ? "true" : undefined
                            }
                            onClick={() => {
                              setValues((v) => ({
                                ...v,
                                engagement_type: p.engagement,
                                service_areas: [p.services[0]],
                              }));
                              setErrors({});
                            }}
                          >
                            <span>{p.code}</span>
                            {p.name}
                          </SmartLink>
                        </li>
                      ))}
                    </ul>
                    {preset && (
                      <p role="status" className="ed-book-note">
                        Set up for{" "}
                        <strong>{preset.practice.inquiryLabel}</strong>. You can
                        change any selection below.
                      </p>
                    )}
                  </nav>
                )}
                <h2
                  ref={heading}
                  tabIndex={-1}
                  className="font-display text-2xl font-bold"
                >
                  {steps[step]}
                </h2>
                <form
                  ref={form}
                  onSubmit={submit}
                  noValidate
                  className="mt-4"
                  aria-busy={pending}
                >
                  <div hidden aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={values.website}
                      onChange={(e) => update("website", e.target.value)}
                      maxLength={200}
                    />
                  </div>
                  {step === 0 && (
                    <div className="mb-4 max-w-md">
                      {field(
                        "engagement_type",
                        "What do you need?",
                        engagementTypes,
                      )}
                    </div>
                  )}
                  {step === 0 && (
                    <fieldset>
                      <legend className="mb-4 text-sm text-muted-foreground">
                        Select the areas you would like to discuss.
                      </legend>
                      <div className="ed-area-groups">
                        {practices.map((p) => (
                          <section key={p.id}>
                            <h3>{p.name}</h3>
                            {areas
                              .filter((a) => p.services.includes(a.id))
                              .map((a) => (
                                <label
                                  key={a.id}
                                  htmlFor={`area-${a.id}`}
                                  className="ed-area-option"
                                >
                                  <Checkbox
                                    id={`area-${a.id}`}
                                    className="h-5 w-5 border-input"
                                    checked={values.service_areas.includes(
                                      a.id,
                                    )}
                                    aria-invalid={Boolean(errors.service_areas)}
                                    aria-describedby={
                                      errors.service_areas
                                        ? "service_areas-error"
                                        : undefined
                                    }
                                    onCheckedChange={(checked) =>
                                      update(
                                        "service_areas",
                                        checked
                                          ? [...values.service_areas, a.id]
                                          : values.service_areas.filter(
                                              (id) => id !== a.id,
                                            ),
                                      )
                                    }
                                  />
                                  <span>{a.label}</span>
                                </label>
                              ))}
                          </section>
                        ))}
                        <details>
                          <summary className="min-h-11 cursor-pointer py-3 font-semibold">
                            Identity disciplines
                          </summary>
                          {areas
                            .filter(
                              (a) => !services.some((s) => s.slug === a.id),
                            )
                            .map((a) => (
                              <label
                                key={a.id}
                                htmlFor={`area-${a.id}`}
                                className="ed-area-option"
                              >
                                <Checkbox
                                  id={`area-${a.id}`}
                                  className="h-5 w-5 border-input"
                                  checked={values.service_areas.includes(a.id)}
                                  aria-invalid={Boolean(errors.service_areas)}
                                  onCheckedChange={(checked) =>
                                    update(
                                      "service_areas",
                                      checked
                                        ? [...values.service_areas, a.id]
                                        : values.service_areas.filter(
                                            (id) => id !== a.id,
                                          ),
                                    )
                                  }
                                />
                                <span>{a.label}</span>
                              </label>
                            ))}
                        </details>
                      </div>
                      {errors.service_areas && (
                        <p
                          id="service_areas-error"
                          role="alert"
                          className="mt-3 text-sm text-destructive"
                        >
                          {errors.service_areas}
                        </p>
                      )}
                    </fieldset>
                  )}

                  {step === 1 && (
                    <div className="grid gap-3 sm:grid-cols-2">
                      {field("company", "Company", undefined, 160)}
                      {field("role", "Your role", undefined, 100)}
                      {field("company_size", "Company size", companySizes)}
                      {field("environment", "Environment", environments)}
                      {field("timeline", "Timeline", timelines)}
                      {field(
                        "description",
                        "What would you like to achieve?",
                        undefined,
                        2000,
                      )}
                    </div>
                  )}
                  {step === 2 && (
                    <>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {field("name", "Your name")}
                        {field(
                          "work_email",
                          "Work email",
                          undefined,
                          254,
                          "email",
                        )}
                        {field("phone", "Phone", undefined, 40, "tel", true)}
                        {field(
                          "preferred_contact",
                          "Preferred contact method",
                          contactMethods,
                        )}
                        {field(
                          "meeting_windows",
                          "Preferred meeting time windows",
                          undefined,
                          300,
                        )}
                        {field("time_zone", "Time zone", undefined, 100)}
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        We will reply by email first, including when you prefer
                        a phone conversation. Your details are used to review
                        and respond to this request.{" "}
                        <SmartLink
                          to="/privacy"
                          className="underline underline-offset-4"
                        >
                          Privacy Policy
                        </SmartLink>
                      </p>
                    </>
                  )}
                  {failure && (
                    <p role="alert" className="mt-5 text-sm text-destructive">
                      {failure}
                    </p>
                  )}
                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-4">
                    {step > 0 ? (
                      <Button
                        type="button"
                        variant="outline"
                        disabled={pending}
                        onClick={() => {
                          moved.current = true;
                          setErrors({});
                          setStep(step - 1);
                        }}
                      >
                        <ArrowLeft aria-hidden="true" />
                        Back
                      </Button>
                    ) : (
                      <span className="text-xs text-muted-foreground">
                        Step {step + 1} of 3
                      </span>
                    )}
                    <Button type="submit" disabled={pending}>
                      {pending
                        ? "Sending…"
                        : step === 2
                          ? "Prepare email draft"
                          : "Continue"}
                      {step === 2 ? (
                        <Send aria-hidden="true" />
                      ) : (
                        <ArrowRight aria-hidden="true" />
                      )}
                    </Button>
                  </div>
                </form>
              </>
            )}
            <div className="mt-4 border-t border-border pt-4 text-sm">
              <a
                href="mailto:hello@silxor.com"
                className="font-semibold underline underline-offset-4"
              >
                hello@silxor.com
              </a>
              <p className="mt-3 text-muted-foreground">+1 979 500 3390</p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};
export default BookAssessment;
