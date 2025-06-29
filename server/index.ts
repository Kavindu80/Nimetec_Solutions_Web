import express, { type Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
import compression from "compression";
import helmet from "helmet";

// Create a simple Express app for Vercel
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

// Simple logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// API routes
app.post("/api/contact", async (req, res) => {
  try {
    // In a real app, you would validate and save the contact form
    console.log("Contact form submission:", req.body);
    
    res.json({ 
      success: true, 
      message: "Contact form submitted successfully" 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: "Internal server error" 
    });
  }
});

// Serve static files from client/public
const publicDir = path.join(process.cwd(), "client", "public");
if (fs.existsSync(publicDir)) {
  app.use(express.static(publicDir));
}

// Serve static files from client/assets
const assetsDir = path.join(process.cwd(), "client", "assets");
if (fs.existsSync(assetsDir)) {
  app.use('/assets', express.static(assetsDir));
}

// Serve client/src directory for development
const srcDir = path.join(process.cwd(), "client", "src");
if (fs.existsSync(srcDir)) {
  app.use('/src', express.static(srcDir));
}

// Serve index.html for all other routes
app.use("*", (req, res) => {
  const indexPath = path.join(process.cwd(), "client", "index.html");
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send("Not found");
  }
});

// Export for Vercel serverless function
export default function handler(req: Request, res: Response) {
  // Let Express handle the request
  return app(req, res);
}

// Start server when running locally
if (process.env.VERCEL !== "1") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
