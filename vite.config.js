// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { libInjectCss } from "vite-plugin-lib-inject-css";

const isNpmBuild = process.env.BUILD_TARGET === "npm";

export default defineConfig({
  plugins: [react(), libInjectCss()],
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
  build: isNpmBuild
    ? {
        lib: {
          entry: resolve(__dirname, "src/index.js"),
          name: "FluidSystem",
          fileName: (format) => `fluid-system.${format}.js`,
        },
        rollupOptions: {
          external: ["react", "react-dom"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
          },
        },
      }
    : {
        outDir: "dist-app",
      },
});
