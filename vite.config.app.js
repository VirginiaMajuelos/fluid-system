// vite.config.app.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@atoms": resolve(__dirname, "src/components/Atoms"),
      "@molecules": resolve(__dirname, "src/components/Molecules"),
      "@context": resolve(__dirname, "src/context"),
      "@mocks": resolve(__dirname, "src/Mocks"),
      "@utils": resolve(__dirname, "src/utils"),
      "@pages": resolve(__dirname, "src/pages"),
      "@assets": resolve(__dirname, "src/assets"),
    },
  },
  build: {
    outDir: "dist-app", // Cambia el nombre de la carpeta de salida para evitar conflictos
  },
});
