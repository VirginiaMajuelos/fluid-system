// vite.lib.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
  plugins: [react(), libInjectCss()],
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
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "FluidSystem",
      fileName: (format) => `components/index.${format}.js`, 
      formats: ["es", "cjs"], 
    },
    outDir: "dist-lib",
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
        entryFileNames: "components/[name].js",
        assetFileNames: "components/[name][extname]",
      },
    },
  },
});
