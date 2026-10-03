import PageShell from "@/components/layout/PageShell";
import Seo from "@/components/Seo";

const PHONE_DISPLAY = "+1 (979) 500-3390";
const TELEGRAM_URL = "https://t.me/+19795003390";
const WHATSAPP_URL = `https://wa.me/19795003390?text=${encodeURIComponent(
  "Hello Silxor Team, I would like to book a technical assessment."
)}`;

const TelegramIcon = ({ size = 22 }: { size?: number }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21.5 4.5 2.9 11.7c-.9.35-.85 1.6.05 1.9l4.6 1.5 1.7 5.3c.28.86 1.4.98 1.9.22l2.4-3.4 4.6 3.4c.7.5 1.7.1 1.85-.75L21.5 4.5Z" />
    <path d="m7.55 15.1 10.9-9.3-7.7 10.4" />
  </svg>
);

const WhatsAppIcon = ({ size = 22 }: { size?: number }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z" />
    <path d="M9.3 8.5c-.4.2-.8.8-.8 1.5 0 1.2 1 2.7 2.2 3.9 1.2 1.2 2.7 2.2 3.9 2.2.7 0 1.3-.4 1.5-.8l-1.8-1.2-.9.6c-.7-.3-2.3-1.9-2.6-2.6l.6-.9-1.2-1.8Z" />
  </svg>
);

const channels = [
  {
    name: "Telegram",
    href: TELEGRAM_URL,
    description: "Opens a direct chat with Silxor in your Telegram app or web client.",
    Icon: TelegramIcon,
  },
  {
    name: "WhatsApp",
    href: WHATSAPP_URL,
    description: "Opens a WhatsApp chat with Silxor with your message pre-filled.",
    Icon: WhatsAppIcon,
  },
];

const BookAssessment = () => (
  <PageShell
    title="Book an Assessment | Silxor"
    description="Book a technical assessment with Silxor. Choose Telegram or WhatsApp and chat directly with our team."
    path="/book"
  >
    <main id="main" tabIndex={-1} className="outline-none">
      <section className="r-section">
        <div className="container-content">
          <span className="r-eyebrow">Schedule</span>
          <h1 className="r-title" style={{ marginTop: 16 }}>
            Book an Assessment
          </h1>
          <p className="r-lead" style={{ marginTop: 12, maxWidth: 620 }}>
            A short technical discovery with a senior Silxor engineer. No cost. No obligation. Choose
            how you want to reach us.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginTop: 32 }}>
            {channels.map(({ name, href, description, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="r-card group flex flex-col"
                style={{ padding: 28, borderRadius: 28 }}
              >
                <div className="r-node" style={{ width: 48, height: 48 }}>
                  <Icon size={22} />
                </div>
                <h2
                  className="font-display font-[600]"
                  style={{ fontSize: 20, color: "#FFFFFF", marginTop: 18 }}
                >
                  {name}
                </h2>
                <p
                  className="font-body font-[300]"
                  style={{ fontSize: 14, color: "#C6CAD0", lineHeight: 1.7, marginTop: 8 }}
                >
                  {description}
                </p>
                <span
                  className="font-mono inline-flex items-center gap-2"
                  style={{
                    fontSize: 10.5,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                    marginTop: "auto",
                    paddingTop: 20,
                  }}
                >
                  Open {name}
                  <svg
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </a>
            ))}
          </div>

          <p
            className="font-mono"
            style={{
              fontSize: 10,
              letterSpacing: "0.2em",
              color: "#B8BCC2",
              textTransform: "uppercase",
              marginTop: 20,
            }}
          >
            Direct line {PHONE_DISPLAY} &middot; Telegram or WhatsApp only
          </p>
        </div>
      </section>
    </main>
  </PageShell>
);

export default BookAssessment;
