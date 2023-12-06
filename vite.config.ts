import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts({ include: ["src"] })],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      input: {
        app: "./example/index.html",
      },
    },
    copyPublicDir: false,
  },
  server: {
    open: "/example/index.html",
  },
});
