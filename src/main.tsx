import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "next-themes";

/**
 * The static index.html head carries sitewide metadata for non JS crawlers.
 * Once React takes over, every route renders its own head tags via Helmet,
 * so the static duplicates are removed to keep exactly one of each tag.
 */
const staticHeadDuplicates = [
  'meta[name="description"]',
  'meta[name="robots"]',
  'meta[property="og:title"]',
  'meta[property="og:description"]',
  'meta[property="og:url"]',
  'meta[name="twitter:title"]',
  'meta[name="twitter:description"]',
  'meta[name="twitter:url"]',
  'meta[name="twitter:card"]',
  'meta[property="og:type"]',
  'meta[property="og:image"]',
  'meta[name="twitter:image"]',
  'link[rel="canonical"]',
  'script[type="application/ld+json"]',
];

for (const selector of staticHeadDuplicates) {
  document.head.querySelectorAll(selector).forEach(node => node.remove());
}

const root = document.getElementById("root");
if (root) createRoot(root).render(
  <HelmetProvider>
    <ThemeProvider attribute="class" defaultTheme="light" storageKey="silxor-theme" enableSystem disableTransitionOnChange><App /></ThemeProvider>
  </HelmetProvider>
);
