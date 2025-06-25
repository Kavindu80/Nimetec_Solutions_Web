import { ReactNode, useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ChevronLeft, Phone, Mail, MessageSquare } from "lucide-react";
import { Link } from "wouter";

interface ServiceLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  icon: ReactNode;
}

export default function ServiceLayout({ children, title, description, icon }: ServiceLayoutProps) {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if there's a hash in the URL to scroll to specific section
    if (window.location.hash === '#content') {
      const contentElement = document.getElementById('service-content');
      if (contentElement) {
        setTimeout(() => {
          contentElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  // Navigate back to services section
  const navigateToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Store scroll info in sessionStorage
    sessionStorage.setItem('scrollToSection', 'services');
    
    // Navigate to home page
    window.location.href = '/#services';
  };

  // Navigate to contact section
  const navigateToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Store scroll info in sessionStorage
    sessionStorage.setItem('scrollToSection', 'contact');
    
    // Navigate to home page
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hide the default navigation for service pages */}
      <div className="hidden">
        <Navigation />
      </div>
      
      {/* Service-specific navigation - enhanced with GPU acceleration and better styling */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm will-change-transform">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Back to Services Button - Enhanced */}
            <button
              onClick={navigateToServices}
              className="relative flex items-center gap-2 px-5 py-2.5 text-gray-700 hover:text-primary transition-colors group rounded-lg hover:bg-primary/5 border border-transparent hover:border-primary/10"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top rounded-l-lg"></div>
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="font-medium">Back to Services</span>
            </button>
            
            {/* Page Title - Centered */}
            <div className="font-semibold text-lg text-gray-900 gpu-accelerated">{title}</div>
            
            {/* Contact Us Button - Enhanced */}
            <button
              onClick={navigateToContact}
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg shadow-md hover:shadow-lg hover:bg-primary/90 transition-all duration-300 group"
            >
              <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">Contact Us</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Hero Section with enhanced styling */}
      <div className="relative overflow-hidden">
        {/* Background gradient with animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 z-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/20 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-gradient-to-t from-primary/10 to-transparent"></div>
          
          {/* Floating elements for visual interest */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-blob"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-primary/5 rounded-full blur-xl animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center shadow-lg mb-4 md:mb-0 animate-pulse-subtle">
              {icon}
            </div>
            
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
              <p className="text-xl text-gray-600 max-w-3xl">{description}</p>
            </div>
          </div>
          
          {/* Service navigation breadcrumbs - improved styling */}
          <div className="mt-12 flex items-center space-x-2 text-sm">
            <Link href="/">
              <a className="text-gray-500 hover:text-primary transition-colors px-2 py-1 rounded hover:bg-primary/5">Home</a>
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/#services">
              <a onClick={navigateToServices} className="text-gray-500 hover:text-primary transition-colors px-2 py-1 rounded hover:bg-primary/5">Services</a>
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-primary font-medium px-2 py-1 bg-primary/5 rounded">{title}</span>
          </div>
        </div>
      </div>
      
      {/* Content anchor for smooth scrolling */}
      <div id="service-content"></div>
      
      {children}
      
      {/* CTA Section - Redesigned with more professional and stylish look */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-12 overflow-hidden relative">
        {/* Subtle design elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-100/10 rounded-full filter blur-3xl opacity-30"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-100/50 shadow-sm text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Ready to get started?</h2>
            <p className="text-base text-gray-600 mb-6 max-w-xl mx-auto">
              Let's discuss how our {title.toLowerCase()} services can help your business grow and succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={navigateToContact}
                className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 text-sm font-medium rounded-lg shadow hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Contact Us</span>
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => window.location.href = "/#portfolio"}
                className="border border-primary/20 bg-white text-primary hover:bg-primary hover:text-white px-5 py-2.5 text-sm font-medium rounded-lg transition-colors duration-300"
              >
                  View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
} 