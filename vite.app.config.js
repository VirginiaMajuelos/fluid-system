// vite.app.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@context": resolve(__dirname, "src/context"),
      "@molecules": resolve(__dirname, "src/components/Molecules"),
      "@pages": resolve(__dirname, "src/pages"),
      "@styles": resolve(__dirname, "src/styles"),
      "@utils": resolve(__dirname, "src/utils"),
      "@components": resolve(__dirname, "src/components"),
      "@atoms": resolve(__dirname, "src/components/Atoms"),
      "@assets": resolve(__dirname, "src/assets"),
      "@mocks": resolve(__dirname, "src/Mocks"),
    },
  },
  build: {
    outDir: "dist-app",
    rollupOptions: {
      entry: resolve(__dirname, "index.html"),
    },
  },
});
