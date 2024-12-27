import { defineConfig } from "vite";
import { resolve, join } from "node:path";
import { cwd } from "node:process";
import { globSync } from "node:fs";

// https://vite.dev/config/
export default defineConfig({
  root: join(cwd(), "src"),
  publicDir: join(cwd(), "public"),
  build: {
    rollupOptions: {
      input: globSync(resolve(cwd(), "src", "**/*.html")),
    },
    outDir: join(cwd(), "dist"),
  },
});
