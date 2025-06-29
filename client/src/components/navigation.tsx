import { useState, useEffect, useRef, useCallback, memo } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Code, Menu, X, ChevronDown, Layers, ArrowRight } from "lucide-react";

// Memoized navigation item component to prevent unnecessary re-renders
const NavItem = memo(({ 
  item, 
  activeSection, 
  onClick 
}: { 
  item: { name: string; id: string }; 
  activeSection: string;
  onClick: (id: string) => void;
}) => {
  const isActive = activeSection === item.id;
  
  return (
    <motion.button
      key={item.id} 
      onClick={() => onClick(item.id)}
      className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 ${
        isActive 
          ? "text-primary" 
          : "text-foreground/80 hover:text-primary"
      }`}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      style={{ willChange: "transform" }}
    >
      {item.name}
      {isActive && (
        <motion.div
          layoutId="activeNavIndicator"
          className="absolute bottom-0 left-0 right-0 mx-auto w-1/2 h-0.5 bg-primary"
          initial={{ width: 0 }}
          animate={{ width: "50%" }}
          transition={{ 
            type: "spring", 
            stiffness: 600, 
            damping: 30,
            duration: 0.15
          }}
          style={{ 
            transformOrigin: "center",
            left: "25%",
            willChange: "transform, opacity, width"
          }}
        />
      )}
    </motion.button>
  );
});

// Memoized mobile nav item component
const MobileNavItem = memo(({ 
  item, 
  activeSection, 
  onClick,
  onClose
}: { 
  item: { name: string; id: string }; 
  activeSection: string;
  onClick: (id: string) => void;
  onClose: () => void;
}) => {
  const isActive = activeSection === item.id;
  
  const handleClick = useCallback(() => {
    onClick(item.id);
    onClose();
  }, [item.id, onClick, onClose]);
  
  return (
    <motion.button
      onClick={handleClick}
      className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-base font-medium ${
        isActive 
          ? "bg-primary/10 text-primary" 
          : "text-foreground hover:bg-muted/50 hover:text-primary"
      }`}
      whileTap={{ scale: 0.98 }}
    >
      {item.name}
      {isActive && <motion.div className="h-2 w-2 rounded-full bg-primary" layoutId="mobileActiveIndicator" />}
    </motion.button>
  );
});

// Premium Logo Component
const PremiumLogo = memo(() => {
  return (
    <div className="flex items-center">
      <div className="relative premium-logo">
        {/* Logo Shape */}
        <motion.div 
          className="absolute -left-1.5 -top-1.5 w-8 h-8 rounded-md bg-gradient-to-br from-blue-600 to-blue-400 opacity-70 blur-[2px]"
          animate={{ 
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ willChange: "transform" }}
        />
        <motion.div 
          className="h-8 w-8 bg-gradient-to-br from-primary to-blue-600 rounded-md flex items-center justify-center relative z-10"
          initial={{ rotate: -5 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white font-bold text-xl">N</span>
        </motion.div>
      </div>
      
      <div className="ml-3">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.span 
            className="font-extrabold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-600 to-primary bg-size-200 animate-gradient-x"
          >
            Nimtec
          </motion.span>
          <motion.span 
            className="font-bold text-xl text-gray-800 ml-1"
          >
            Solution
          </motion.span>
        </motion.div>
        <motion.p 
          className="text-xs tracking-wider uppercase text-gray-500 font-medium"
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Premium Software Development
        </motion.p>
      </div>
    </div>
  );
});

// Mobile Logo - Simplified version
const MobileLogo = memo(() => {
  return (
    <div className="flex items-center">
      <div className="relative premium-logo">
        <motion.div 
          className="absolute -left-1 -top-1 w-6 h-6 rounded-md bg-gradient-to-br from-blue-600 to-blue-400 opacity-70 blur-[1px]"
          animate={{ 
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="h-6 w-6 bg-gradient-to-br from-primary to-blue-600 rounded-md flex items-center justify-center relative z-10">
          <span className="text-white font-bold text-base">N</span>
        </div>
      </div>
      
      <div className="ml-3">
        <span className="font-bold text-lg">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 bg-size-200 animate-gradient-x">Nimtec</span>
          <span className="text-foreground ml-1">Solution</span>
        </span>
      </div>
    </div>
  );
});

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Transform values for subtle effect based on scroll
  const navbarY = useTransform(scrollY, [0, 100], [0, -2]);
  const navbarOpacity = useTransform(scrollY, [0, 100], [1, 0.98]);
  const navbarShadow = useTransform(
    scrollY, 
    [0, 100], 
    ['0px 0px 0px rgba(0,0,0,0)', '0px 10px 20px rgba(0,0,0,0.05)']
  );

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    if (window.scrollY > 20 && !isScrolled) {
      setIsScrolled(true);
    } else if (window.scrollY <= 20 && isScrolled) {
      setIsScrolled(false);
    }
      
    // Determine active section based on scroll position with a bit of offset
    const scrollPosition = window.scrollY + 100;
      const sections = ["home", "services", "portfolio", "about", "contact"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          if (activeSection !== section) {
            setActiveSection(section);
          }
            break;
          }
        }
      }
  }, [isScrolled, activeSection]);

  useEffect(() => {
    // Use RAF for smooth scroll handling
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  const closeMobileMenu = useCallback(() => {
      setIsMobileMenuOpen(false);
  }, []);
  
  const performScroll = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Update the URL hash without triggering a navigation
      window.history.replaceState({}, '', `/#${sectionId}`);
      
      // Calculate the correct scroll position accounting for the header
      const yOffset = -70; // Account for fixed header
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      
      // Use requestAnimationFrame for smoother scrolling
      requestAnimationFrame(() => {
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      });
      
      // Update the active section
      setActiveSection(sectionId);
    }
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    // First close the mobile menu if it's open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      
      // Add a slight delay to allow the mobile menu to close before scrolling
      setTimeout(() => {
        performScroll(sectionId);
      }, 300);
    } else {
      performScroll(sectionId);
    }
  }, [isMobileMenuOpen, performScroll]);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={{ 
        y: navbarY,
        opacity: navbarOpacity,
        boxShadow: navbarShadow,
        willChange: "transform, opacity, box-shadow"
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-primary/10" 
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Modern Brand Logo - Enhanced */}
          <motion.div 
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection("home")}
            style={{ willChange: "transform" }}
          >
            <PremiumLogo />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <NavItem 
                  key={item.id} 
                  item={item}
                  activeSection={activeSection}
                  onClick={scrollToSection}
                      />
              ))}
            </div>
            
            <motion.div
              className="ml-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ willChange: "transform" }}
            >
              <Button 
                className="bg-primary hover:bg-primary/90 text-white hover:text-white transition-all duration-300 px-6 rounded-md group glossy-button"
                onClick={() => scrollToSection("contact")}
              >
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-foreground hover:bg-primary/5"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md border-l border-primary/10">
                <div className="flex justify-between items-center mb-8 mt-2">
                  <MobileLogo />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={closeMobileMenu}
                    className="text-foreground hover:bg-muted"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="space-y-2 py-4">
                    {navItems.map((item) => (
                    <MobileNavItem
                        key={item.id}
                      item={item}
                      activeSection={activeSection}
                      onClick={scrollToSection}
                      onClose={closeMobileMenu}
                          />
                    ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                    <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    onClick={() => {
                      scrollToSection("contact");
                      closeMobileMenu();
                    }}
                    >
                      Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
      {/* Animated highlight line */}
      {isScrolled && (
        <motion.div 
          className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{ willChange: "transform, opacity" }}
        />
      )}
    </motion.nav>
  );
}
