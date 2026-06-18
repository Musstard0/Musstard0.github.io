import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// User site: https://musstard0.github.io/ (served from repo root)
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
