const express = require('express');
const fs = require('fs');
const path = require('path');
const compression = require('compression');

// Create Express app
const app = express();

// Middleware
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Simple logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// API routes
app.post("/api/contact", (req, res) => {
  try {
    // In a real app, you would validate and save the contact form
    console.log("Contact form submission:", req.body);
    
    res.status(200).json({ 
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

// Default API response
app.get("/api", (req, res) => {
  res.status(200).json({ status: "API is running" });
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

// Simple handler for Vercel serverless function
module.exports = (req, res) => {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Handle API routes
  if (req.url === '/api' || req.url === '/api/') {
    res.status(200).json({ status: "API is running" });
    return;
  }

  // Serve static HTML for all other routes
  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <title>Nimtec Solution - Development Mode</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background-color: #fafafa;
        color: #2d3748;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        text-align: center;
      }
      .container {
        max-width: 800px;
        padding: 20px;
      }
      h1 {
        color: #4a5568;
      }
      p {
        margin: 20px 0;
        line-height: 1.6;
      }
      .button {
        display: inline-block;
        background-color: #4299e1;
        color: white;
        padding: 12px 24px;
        border-radius: 4px;
        text-decoration: none;
        font-weight: bold;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Nimtec Solution - Development Mode</h1>
      <p>
        This is a simplified version of your website running in development mode.
        The full development environment is available locally with all features.
      </p>
      <p>
        API endpoints are functional. Try the contact form or other API features.
      </p>
      <a href="/api" class="button">Check API Status</a>
    </div>
  </body>
</html>
  `;
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}; 