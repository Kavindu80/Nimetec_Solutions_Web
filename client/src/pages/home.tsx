import { useEffect, useCallback, useState } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import PortfolioSection from "@/components/portfolio-section";
import AboutSection from "@/components/about-section";
import TechnologiesSection from "@/components/technologies-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

export default function Home() {
  const [isHydrated, setIsHydrated] = useState(false);

  // Mark component as hydrated after initial render
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Optimized scroll handler using requestAnimationFrame
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Update the URL hash without triggering a navigation
      window.history.replaceState({}, '', `/#${sectionId}`);
      
      const yOffset = -70; // Account for fixed header
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      
      // Use requestAnimationFrame for smoother animation
      requestAnimationFrame(() => {
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      });
    }
  }, []);

  useEffect(() => {
    // Check for navigation requests from service pages
    const sectionToScroll = sessionStorage.getItem('scrollToSection');
    if (sectionToScroll) {
      // Clear the flag
      sessionStorage.removeItem('scrollToSection');
      
      // Give time for page to render before scrolling
      setTimeout(() => scrollToSection(sectionToScroll), 200);
    }
    // Check if we need to scroll to contact section (from project page navigation)
    else if (sessionStorage.getItem('scrollToContact') === 'true' || window.location.hash === '#contact') {
      // Clear the flag
      sessionStorage.removeItem('scrollToContact');
      
      // Execute after a short delay to ensure all components are mounted
      setTimeout(() => scrollToSection('contact'), 200);
    }
    // Check for hash in URL (e.g., /#services)
    else if (window.location.hash) {
      const sectionId = window.location.hash.substring(1); // Remove the # character
      setTimeout(() => scrollToSection(sectionId), 200);
    }
    
    // Optimize scroll performance
    document.documentElement.classList.add('gpu-accelerated');
    
    return () => {
      document.documentElement.classList.remove('gpu-accelerated');
    };
  }, [scrollToSection]);

  return (
    <div className="min-h-screen bg-background will-change-transform">
      <Navigation />
      <HeroSection />
      
      {/* Apply content visibility to offscreen sections for performance */}
      <div style={{ contentVisibility: "auto", containIntrinsicSize: "0 500px" }}>
        <ScrollAnimation 
          type="fade" 
          threshold={0.1}
          rootMargin="50px"
        >
          <ServicesSection />
        </ScrollAnimation>
        
        <ScrollAnimation 
          type="fade" 
          threshold={0.1}
          rootMargin="50px"
        >
          <PortfolioSection />
        </ScrollAnimation>
        
        <ScrollAnimation 
          type="fade" 
          threshold={0.1}
          rootMargin="50px"
        >
          <AboutSection />
        </ScrollAnimation>
        
        <ScrollAnimation 
          type="fade" 
          threshold={0.1}
          rootMargin="50px"
        >
          <TechnologiesSection />
        </ScrollAnimation>
        
        <ScrollAnimation 
          type="fade" 
          threshold={0.1}
          rootMargin="50px"
        >
          <ContactSection />
        </ScrollAnimation>
        
        <ScrollAnimation 
          type="fade" 
          threshold={0.1}
          rootMargin="50px"
        >
          <Footer />
        </ScrollAnimation>
      </div>
    </div>
  );
}
