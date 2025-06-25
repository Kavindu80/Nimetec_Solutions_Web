import { z } from 'zod';

// Contact form validation schema
const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  projectType: z.string().min(1, "Project type is required"),
  message: z.string().min(10, "Message must be at least 10 characters long")
});

export default async function handler(req, res) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const validatedData = contactSchema.parse(req.body);
    
    // In a real application, you would:
    // 1. Save the contact form to a database
    // 2. Send an email notification to the company
    // 3. Send a confirmation email to the user
    
    console.log("Contact form submission:", validatedData);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return res.status(200).json({ 
      success: true, 
      message: "Contact form submitted successfully" 
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        success: false, 
        message: error.errors[0].message 
      });
    } else {
      return res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  }
} 