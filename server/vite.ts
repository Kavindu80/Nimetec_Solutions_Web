import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as true,
  };

  try {
    const vite = await createViteServer({
      ...viteConfig,
      configFile: false,
      customLogger: {
        ...viteLogger,
        error: (msg, options) => {
          viteLogger.error(msg, options);
          // Don't exit in Vercel environment
          if (process.env.VERCEL !== "1") {
            process.exit(1);
          }
        },
      },
      server: serverOptions,
      appType: "custom",
    });

    app.use(vite.middlewares);

    // Serve static files from client/public
    const publicDir = path.resolve(import.meta.dirname, "..", "client", "public");
    if (fs.existsSync(publicDir)) {
      app.use(express.static(publicDir));
    }

    // Serve static files from client/assets
    const assetsDir = path.resolve(import.meta.dirname, "..", "client", "assets");
    if (fs.existsSync(assetsDir)) {
      app.use('/assets', express.static(assetsDir));
    }

    app.use("*", async (req, res, next) => {
      const url = req.originalUrl;

      try {
        const clientTemplate = path.resolve(
          import.meta.dirname,
          "..",
          "client",
          "index.html",
        );

        // always reload the index.html file from disk incase it changes
        let template = await fs.promises.readFile(clientTemplate, "utf-8");
        template = template.replace(
          `src="/src/main.tsx"`,
          `src="/src/main.tsx?v=${nanoid()}"`,
        );
        const page = await vite.transformIndexHtml(url, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(page);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } catch (err) {
    console.error("Error setting up Vite:", err);
    // Fallback to serving static files if Vite fails
    fallbackServeStatic(app);
  }
}

// Fallback to serving static files if Vite fails
function fallbackServeStatic(app: Express) {
  // Serve the client/public directory
  const publicDir = path.resolve(import.meta.dirname, "..", "client", "public");
  if (fs.existsSync(publicDir)) {
    app.use(express.static(publicDir));
  }

  // Serve the client/assets directory
  const assetsDir = path.resolve(import.meta.dirname, "..", "client", "assets");
  if (fs.existsSync(assetsDir)) {
    app.use('/assets', express.static(assetsDir));
  }

  // Serve client/src directory for development
  const srcDir = path.resolve(import.meta.dirname, "..", "client", "src");
  if (fs.existsSync(srcDir)) {
    app.use('/src', express.static(srcDir));
  }

  // Serve index.html for all other routes
  app.use("*", (req, res) => {
    const indexPath = path.resolve(import.meta.dirname, "..", "client", "index.html");
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send("Not found");
    }
  });
}
