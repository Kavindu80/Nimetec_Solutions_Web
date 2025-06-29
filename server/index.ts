import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, log } from "./vite";
import compression from "compression";
import helmet from "helmet";
import { createServer } from "http";

const app = express();

// Add security headers with relaxed settings for development
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
  crossOriginOpenerPolicy: false,
  crossOriginResourcePolicy: false
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
      
      // Log response body in development
      if (capturedJsonResponse) {
        const jsonStr = JSON.stringify(capturedJsonResponse);
        logLine += ` :: ${jsonStr.length > 80 ? jsonStr.slice(0, 79) + "…" : jsonStr}`;
      }

      log(logLine);
    });
  }
  next();
});

// For Vercel, we need to export the app as a module
export default async (req: Request, res: Response) => {
  // Initialize server for Vercel serverless environment
  const server = createServer(app);
  await registerRoutes(app);
  
  // Set up Vite in development mode
  await setupVite(app, server);
  
  // Let Express handle the request
  return app(req, res);
};

// Only run the server directly when not on Vercel
if (process.env.VERCEL !== "1") {
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

    // Setup Vite for development
    await setupVite(app, server);

    // Use process.env.PORT for compatibility with hosting platforms or default to 5000
    const port = process.env.PORT || 5000;
    server.listen({
      port,
      host: "0.0.0.0",
    }, () => {
      log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
    });
  })().catch(err => {
    console.error("Failed to start server:", err);
    if (process.env.VERCEL !== "1") {
      process.exit(1);
    }
  });
}
