import { Button } from "@/components/ui/button";

export default function ProjectCTA({ projectType = "project" }) {
  const scrollToContact = () => {
    // First navigate to the homepage if not already there
    if (window.location.pathname !== '/') {
      // Force a full page load to ensure proper navigation and scrolling
      window.location.href = '/#contact';
      // Set a flag in sessionStorage to indicate we need to scroll
      sessionStorage.setItem('scrollToContact', 'true');
    } else {
      // If already on homepage, just scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        // Update the URL hash when scrolling to contact
        window.history.pushState({}, '', '/#contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="text-center bg-[#f7f9fc] rounded-xl p-10 border border-border/10 shadow-sm">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Have a similar {projectType} in mind?</h2>
      <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
        We can help you create a custom {projectType} solution tailored to your business needs. 
        Let's discuss how we can bring your vision to life.
      </p>
      <Button 
        className="bg-primary text-white px-8 py-6 text-lg hover:bg-primary/90 transition-all duration-300"
        onClick={scrollToContact}
      >
        Contact Us
      </Button>
    </div>
  );
} 