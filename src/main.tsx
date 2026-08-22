import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

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
];

for (const selector of staticHeadDuplicates) {
  document.head.querySelector(selector)?.remove();
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
