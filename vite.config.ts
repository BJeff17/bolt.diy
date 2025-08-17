import { defineConfig } from "vite";
import { vitePlugin as remix } from "@remix-run/dev";

export default defineConfig({
  plugins: [
    remix({
      // Configuration simplifiée pour le build
      ignoredRouteFiles: ["**/.*"],
    }),
  ],
  build: {
    target: "esnext",
    minify: true,
    rollupOptions: {
      external: ["workerd"],
    },
  },
  define: {
    "process.env.NODE_ENV": '"production"'
  }
});
