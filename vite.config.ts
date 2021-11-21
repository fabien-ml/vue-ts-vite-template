import legacy from "@vitejs/plugin-legacy";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [legacy(), vue()],
  resolve: {
    alias: [
      {
        // for import like : @/x/y/z
        find: /@\//,
        replacement: `${path.resolve(__dirname, "src")}/`,
      },
      {
        // for import like : ~x/y/z
        find: /~(.*)/,
        replacement: `${path.resolve(__dirname, "node_modules")}/$1`,
      },
    ],
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        secure: false,
        rewrite: path => path.replace(/^\/api/, ""),
      },
    },
  },
});
