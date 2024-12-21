import { defineConfig } from "vite";
import { resolve, join } from "node:path";
import { cwd } from "node:process";
import { globSync } from "node:fs";

const base = process.env.NODE_ENV === "production" ? "/brentbuell.com/" : "/";
// https://vite.dev/config/
export default defineConfig({
  base,
  root: join(cwd(), "src"),
  publicDir: join(cwd(), "public"),
  build: {
    rollupOptions: {
      input: globSync(resolve(cwd(), "src", "**/*.html")),
    },
    outDir: join(cwd(), "dist"),
  },
});
