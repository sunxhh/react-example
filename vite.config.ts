import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import fs from "fs";

const path = resolve(__dirname, "packages");
const dirs = fs.readdirSync(path);
const input: Record<string, string> = {};
const proxy: any = {};

dirs.forEach((item) => {
  const p = `${path}/${item}/index.html`;
  input[item] = p;
  proxy[`/${item}`] = {
    target: "http://localhost:5173",
    rewrite: () => {
      return `/packages/${item}/index.html`;
    },
  };
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy,
  },
  build: {
    rollupOptions: {
      input,
    },
  },
});
