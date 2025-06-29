// Simplified API handler for Vercel serverless functions
const fs = require('fs');
const path = require('path');

// Simple in-memory cache for static files
const fileCache = {};

module.exports = (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Add development mode headers
  res.setHeader('X-Development-Mode', 'true');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Handle contact form submission
  if (req.method === 'POST' && req.url === '/api/contact') {
    try {
      // In a real application, you would validate and save the contact form
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
    return;
  }

  // Default response for API routes
  if (req.url.startsWith('/api')) {
    res.status(200).json({ status: "API is running in development mode" });
    return;
  }

  // Default response for all other routes
  res.status(200).json({ status: "API is running in development mode" });
} 