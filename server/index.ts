import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import compression from "compression";
import helmet from "helmet";

const app = express();

// Add security headers
app.use(helmet({
  contentSecurityPolicy: process.env.NODE_ENV === 'production' ? undefined : false,
}));

// Compress responses
app.use(compression());

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Optimized logging middleware
app.use((req, res, next) => {
  // Only log API requests to reduce noise
  if (req.path.startsWith("/api")) {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      
      // Only log response body in development
      if (process.env.NODE_ENV !== 'production' && capturedJsonResponse) {
        const jsonStr = JSON.stringify(capturedJsonResponse);
        logLine += ` :: ${jsonStr.length > 80 ? jsonStr.slice(0, 79) + "…" : jsonStr}`;
      }

      log(logLine);
    });
    }

  next();
});

// For Vercel, we need to export the app as a module
export default app;

// Initialize server regardless of environment
(async () => {
  const server = await registerRoutes(app);

  // Global error handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    // Don't expose error details in production
    const errorResponse = process.env.NODE_ENV === 'production' 
      ? { message } 
      : { message, stack: err.stack };

    res.status(status).json(errorResponse);
    
    // Only log errors in development or if they're serious in production
    if (process.env.NODE_ENV !== 'production' || status >= 500) {
      console.error(err);
    }
  });

  // Setup Vite in development mode, regardless of environment
  // This ensures the same behavior in Vercel as in local development
  if (process.env.NODE_ENV === "development") {
    // Only setup Vite with HMR when not in Vercel environment
    if (process.env.VERCEL !== "1") {
      await setupVite(app, server);
    } else {
      // For Vercel in development mode, still use Vite but without HMR
      serveStatic(app);
    }
  } else {
    serveStatic(app);
  }

  // Only start the server when not in Vercel serverless environment
  if (process.env.VERCEL !== "1") {
    // Use process.env.PORT for compatibility with hosting platforms or default to 5000
    const port = process.env.PORT || 5000;
    server.listen({
      port,
      host: "0.0.0.0",
    }, () => {
      log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
    });
  } else {
    log("Server initialized for Vercel serverless environment");
  }
})().catch(err => {
  console.error("Failed to start server:", err);
  if (process.env.VERCEL !== "1") {
    process.exit(1);
  }
});
