import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users, Trophy, Rocket, Globe, BarChart3, Clock } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import type { LucideIcon } from "lucide-react";

// 3D Stat Card Component
interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  delay?: number;
  color?: string;
}

const StatCard = ({ icon: Icon, value, label, delay = 0, color = "from-primary to-blue-600" }: StatCardProps) => {
  const isYearsCard = label.includes("Years");
  
  return (
    <motion.div 
      className={`relative group premium-card ${isYearsCard ? 'featured-card' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.7, 
        delay,
        type: "spring",
        stiffness: 100
      }}
    >
      {/* Enhanced 3D shadow effect with stronger glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${isYearsCard ? 'from-indigo-600/30 to-blue-500/40' : 'from-blue-600/20 to-primary/30'} rounded-xl blur-xl group-hover:blur-md transition-all duration-300 opacity-80 transform translate-y-2`}></div>
      <div className={`absolute inset-0 bg-gradient-to-br ${isYearsCard ? 'from-indigo-400/20 to-blue-500/30' : 'from-blue-400/10 to-primary/20'} rounded-xl blur-md group-hover:blur-sm transition-all duration-300 opacity-60 transform -translate-y-1 translate-x-1`}></div>
      
      {/* Card content with enhanced 3D effects */}
      <div className={`p-3 sm:p-4 md:p-6 bg-white backdrop-blur-md rounded-xl shadow-xl border ${isYearsCard ? 'border-indigo-200/50' : 'border-white/30'} relative transform transition-transform duration-300 glow-border`}>
        <div className="flex items-start">
          {/* Premium 3D icon container */}
          <div className={`flex-shrink-0 p-3 sm:p-4 bg-gradient-to-br ${color} rounded-lg shadow-lg premium-icon relative overflow-hidden`}>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white drop-shadow-md" />
            {/* Reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent opacity-30 h-1/2"></div>
          </div>
          
          <div className="ml-3 sm:ml-5">
            {/* Enhanced number display with 3D text effect */}
            <div className="flex items-baseline">
              <div className={`text-2xl sm:text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${isYearsCard ? 'from-indigo-600 to-blue-500' : 'from-primary to-blue-700'} animate-number drop-shadow-sm filter`}>
                {value}
              </div>
              <div className="ml-1 text-xs sm:text-sm font-semibold text-blue-600">+</div>
            </div>
            <div className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-medium text-gray-600">{label}</div>
          </div>
        </div>
        
        {/* Enhanced interactive elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
        <div className="absolute -right-1 -top-1 w-10 h-10 bg-gradient-to-br from-white/80 to-white/20 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
      </div>
    </motion.div>
  );
};

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  // Transform values for parallax effect - optimized for better performance
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "3%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    // Set loaded state after a small delay for entrance animations
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Handle scroll to hide indicator after scrolling
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    // Ensure content fits in viewport
    const adjustLayout = () => {
      const vh = window.innerHeight;
      const section = document.getElementById('home');
      if (section) {
        if (vh < 700) {
          section.classList.add('compact-layout');
        } else {
          section.classList.remove('compact-layout');
        }
      }
    };
    
    // Run immediately and on resize
    adjustLayout();
    window.addEventListener('resize', adjustLayout);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', adjustLayout);
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
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
    }
  }, []);

  // Memoize stats to avoid unnecessary re-renders
  const stats = useMemo(() => [
    { 
      icon: Rocket, 
      value: "50", 
      label: "Projects Delivered",
      color: "from-blue-500 to-blue-700"
    },
    { 
      icon: Users, 
      value: "95", 
      label: "Client Satisfaction %",
      color: "from-primary to-blue-600" 
    },
    { 
      icon: Clock, 
      value: "5", 
      label: "Years of Excellence",
      color: "from-indigo-600 to-blue-500"
      }
  ], []);

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="relative py-6 sm:py-8 md:py-10 flex flex-col justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white"
      style={{ minHeight: 'calc(100vh)', willChange: "transform" }}
    >
      {/* Enhanced Background Layers */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
      
      {/* Subtle accent blurs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/20 rounded-full filter blur-[100px]" style={{ willChange: "transform" }}></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-50/30 to-transparent"></div>
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary/10 rounded-full filter blur-[80px]" style={{ willChange: "transform" }}></div>
      
      {/* Main Content */}
      <motion.div 
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6 items-center relative z-10"
        style={{ y: contentY, willChange: "transform" }}
      >
        {/* Left Content - 3 columns */}
        <div className="lg:col-span-3 space-y-4 sm:space-y-6 md:space-y-8">
          {/* Main Heading - Improved contrast for visibility */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight tracking-tight"
            style={{ opacity: titleOpacity, willChange: "opacity" }}
          >
            Let's build
            <span className="block">something</span>
            <span className="block">
              <span className="text-primary font-extrabold relative inline-block">
              amazing
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none">
                <motion.path 
                  d="M2 10C100 2 200 2 298 10" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                    className="text-primary"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  style={{ willChange: "stroke-dashoffset" }}
                />
              </svg>
              </span>
            </span>
            <span className="block">together</span>
          </motion.h1>

          {/* Description - Enhanced visibility */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ willChange: "transform, opacity" }}
          >
            <p className="text-base sm:text-lg xl:text-xl text-gray-700 leading-relaxed max-w-xl font-medium">
              Transform your business with cutting-edge software solutions. From enterprise web applications 
              to innovative mobile apps, we're your trusted technology partner in Sri Lanka.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5, type: "spring", stiffness: 400, damping: 17 }}
              style={{ willChange: "transform, opacity" }}
            >
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-semibold hover:shadow-2xl transition-all duration-200 transform group relative overflow-hidden w-full sm:w-auto rounded-xl glossy-button"
                onClick={() => scrollToSection("contact")}
              >
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7, type: "spring", stiffness: 400, damping: 17 }}
              style={{ willChange: "transform, opacity" }}
            >
              <Button 
                size="lg"
                variant="outline" 
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-semibold hover:shadow-xl transition-all duration-200 group w-full sm:w-auto border-0 rounded-xl glossy-button"
                onClick={() => scrollToSection("portfolio")}
              >
                <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                View Our Work
              </Button>
            </motion.div>
          </div>

          {/* Enhanced Premium Professional Stats Section */}
          <motion.div 
            className="relative z-10 mb-10 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mt-4 sm:mt-6 md:mt-8">
              {stats.map((stat, index) => (
                <StatCard 
                    key={index} 
                  icon={stat.icon}
                  value={stat.value}
                  label={stat.label}
                  delay={0.6 + index * 0.2}
                  color={stat.color}
                />
                ))}
            </div>
          </motion.div>
        </div>

        {/* Right side content - Feature highlights (2 columns) */}
        <div className="lg:col-span-2 mt-6 lg:mt-0">
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          >
            {/* Premium Image Display with Enhanced 3D Effects */}
            <div className="absolute -inset-3 bg-gradient-to-r from-primary via-blue-600 to-blue-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500 transform group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-white rounded-xl opacity-20 transform translate-y-2 translate-x-2"></div>
            
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-600 rounded-2xl opacity-75 blur-sm"></div>
              <div className="relative rounded-xl overflow-hidden border-2 border-white/50 shadow-2xl transform transition-transform group-hover:scale-[1.01] duration-500 premium-image-frame">
                <img 
                  src="/assets/startup.jpg" 
                  alt="Nimtec Solutions - Software Development Excellence" 
                  className="w-full h-auto object-cover rounded-xl"
                  style={{ maxHeight: '380px' }}
                loading="eager"
                fetchPriority="high"
              />
                
                {/* Enhanced lighting effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Floating label with enhanced 3D effect */}
            <motion.div 
                  className="absolute bottom-3 sm:bottom-4 left-0 right-0 px-4 sm:px-6 text-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-3 rounded-lg inline-flex items-center transform hover:translate-y-[-5px] transition-transform duration-300 shadow-xl">
                    <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 mr-2 sm:mr-3 drop-shadow-glow" />
                    <span className="text-white text-xs sm:text-sm md:text-base font-semibold">Trusted Technology Partner</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Enhanced Floating badges with 3D effects */}
            <motion.div 
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-full shadow-xl flex items-center gap-1.5 sm:gap-2 float-badge border border-blue-100"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }}
            >
              <motion.div 
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="premium-icon"
              >
                <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </motion.div>
              <span className="text-xs font-semibold">Global Standards</span>
            </motion.div>

            <motion.div 
              className="absolute top-1/2 -right-4 sm:-right-6 bg-gradient-to-r from-primary to-blue-600 px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-3 rounded-full shadow-xl flex items-center gap-2 sm:gap-3 text-white float-badge transform hover:scale-105 transition-transform duration-300"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              style={{ filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.15))' }}
            >
              <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              <span className="text-xs font-semibold">Data-Driven Solutions</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll indicator - Positioned at the bottom edge of the screen with improved visibility */}
      {showScrollIndicator && (
      <motion.div
          className="absolute left-0 right-0 bottom-2 sm:bottom-4 flex justify-center opacity-0 z-10 pointer-events-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
      >
          <div className="flex flex-col items-center">
            <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2 font-medium">Scroll to explore</p>
          <motion.div
              className="w-1 sm:w-1.5 h-6 sm:h-8 relative"
              animate={{ y: [0, 5, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary to-blue-600 rounded-full">
                <div className="w-full h-1.5 bg-white rounded-full relative top-0"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
