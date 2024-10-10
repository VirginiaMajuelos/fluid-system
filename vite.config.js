import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
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
});
