import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { prerenderPlugin } from "./scripts/prerender-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/__l5e/assets-v1": {
        target: "https://silxor.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
  plugins: [react(), prerenderPlugin(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    // Hooks and the renderer must share one React instance, including linked dependencies.
    dedupe: ["react", "react-dom"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
