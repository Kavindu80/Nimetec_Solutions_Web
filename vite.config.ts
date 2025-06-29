import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Force development mode
const forceDevMode = process.env.VITE_FORCE_DEV_MODE === "true";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  define: {
    // Force development mode in the client code
    'process.env.NODE_ENV': JSON.stringify('development'),
  },
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "client", "assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    minify: false,
    sourcemap: true,
  },
  server: {
    fs: {
      strict: true,
      allow: [".."]
    },
    hmr: {
      overlay: true
    }
  },
  css: {
    devSourcemap: true
  },
  // Force development mode
  mode: "development"
});
