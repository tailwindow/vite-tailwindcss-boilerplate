import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import mkcert from "vite-plugin-mkcert";
import viteSSR from "vite-ssr/plugin.js";
import VitePWA from "./pwa.config.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteSSR(), VitePWA, mkcert()],
  server: {
    port: 8080,
    https: true,
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
});
