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
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(import.meta.dirname, "..", "dist", "public");
  
  // For Vercel environment, try to find the build directory in different locations
  let buildPath = distPath;
  
  if (process.env.VERCEL === "1") {
    // Check if we're in Vercel's production environment
    const possiblePaths = [
      distPath,
      path.resolve(import.meta.dirname, "..", "public"),
      path.resolve(import.meta.dirname, "public"),
      path.resolve(process.cwd(), "dist", "public"),
      path.resolve(process.cwd(), "public")
    ];
    
    for (const testPath of possiblePaths) {
      if (fs.existsSync(testPath)) {
        buildPath = testPath;
        log(`Found build directory at: ${buildPath}`);
        break;
      }
    }
  }

  if (!fs.existsSync(buildPath)) {
    log(`Warning: Could not find the build directory at ${buildPath}`);
    // Don't throw an error in Vercel environment, as the build might be handled differently
    if (process.env.VERCEL !== "1") {
      throw new Error(
        `Could not find the build directory: ${buildPath}, make sure to build the client first`,
      );
    }
  } else {
    app.use(express.static(buildPath));
  }

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    const indexPath = path.resolve(buildPath, "index.html");
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      // In Vercel environment, if we can't find index.html, serve a simple response
      if (process.env.VERCEL === "1") {
        res.send(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Nimtec Solutions</title>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
            </head>
            <body>
              <div id="root">Loading application...</div>
              <script type="module" src="/src/main.tsx"></script>
            </body>
          </html>
        `);
      } else {
        res.status(404).send("Not found");
      }
    }
  });
}
