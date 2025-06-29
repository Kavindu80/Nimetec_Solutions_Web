// Simplified API handler for Vercel serverless functions
module.exports = (req, res) => {
  // Enable CORS
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

  // Default response for all other routes
  res.status(200).json({ status: "API is running" });
} 