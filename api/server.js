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

  // For API requests, return a simple message
  if (req.url.startsWith('/api/')) {
    res.status(200).json({ 
      message: "API endpoint available", 
      endpoint: req.url,
      method: req.method
    });
    return;
  }

  // For all other requests, redirect to the static site
  res.writeHead(302, { Location: '/' });
  res.end();
}; 