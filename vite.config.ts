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
    '__DEV__': true,
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
    // Always disable minification to match development mode
    minify: false,
    // Always enable sourcemaps
    sourcemap: true,
    assetsDir: "assets",
    // Disable CSS code splitting to match development mode
    cssCodeSplit: false,
    // Ensure we generate a working client-side only build for Vercel
    ssrManifest: false,
    // Don't use chunking in development mode
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
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
    // Always enable sourcemaps for CSS
    devSourcemap: true
  },
  // Force development mode
  mode: "development",
  // Preserve dynamic imports in development mode
  optimizeDeps: {
    disabled: true
  }
});
