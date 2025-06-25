// Vercel serverless function entry point
import express from 'express';
import { z } from "zod";

const app = express();
app.use(express.json());

// Contact form validation schema
const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  projectType: z.string().min(1, "Project type is required"),
  message: z.string().min(10, "Message must be at least 10 characters long")
});

// API endpoint for contact form
app.post("/api/contact", async (req, res) => {
  try {
    const validatedData = contactSchema.parse(req.body);
    
    // In production, you would:
    // 1. Save to database
    // 2. Send notification emails
    // 3. etc.
    
    console.log("Contact form submission:", validatedData);
    
    res.json({ 
      success: true, 
      message: "Contact form submitted successfully" 
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ 
        success: false, 
        message: error.errors[0].message 
      });
    } else {
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  }
});

export default app; 