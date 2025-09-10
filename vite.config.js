import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    command === "build" &&
    dts({
      entryRoot: "src",
      outDir: "dist",
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  build:
    command === "build"
      ? {
        lib: {
          entry: path.resolve(__dirname, "src/index.ts"),
          name: "PmPortalLibrary",
          formats: ["es", "cjs"],
          fileName: (format) =>
            format === "es"
              ? "pm-portal-library.es.js"
              : "pm-portal-library.cjs.js",
        },
        rollupOptions: {
          external: ["react", "react-dom", "react/jsx-runtime"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
              "react/jsx-runtime": "jsxRuntime",
            },
            assetFileNames: (assetInfo) => {
              if (assetInfo.name === "style.css") return "pm-library-portal.css";
              return assetInfo.name;
            },
          },
        },
      }
      : undefined, // when running dev, don't use lib build
  optimizeDeps: {
    include: ["@popperjs/core"]
  }
}));
