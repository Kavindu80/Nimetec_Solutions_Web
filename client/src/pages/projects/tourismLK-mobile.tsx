import { ArrowLeft, CheckCircle, Calendar, Users, Building, BarChart, Camera, Map, Lightbulb, LineChart, Layers, Globe, Award, Star, Compass, Smartphone, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { useEffect } from "react";
import ProjectCTA from "@/components/project-cta";

export default function TourismLKMobileProject() {
  // Add global styles using useEffect
  useEffect(() => {
    // Create a style element
    const styleElement = document.createElement("style");
    styleElement.textContent = `
      @keyframes pulse {
        0% { opacity: 0.1; transform: scale(0.97); }
        50% { opacity: 0.3; transform: scale(1); }
        100% { opacity: 0.1; transform: scale(0.97); }
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes slideInRight {
        from { transform: translateX(-20px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      
      @keyframes slideInUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      
      @keyframes growWidth {
        from { width: 0; }
        to { width: var(--target-width, 100%); }
      }
      
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
    `;
    
    // Append to document head
    document.head.appendChild(styleElement);
    
    // Clean up on component unmount
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar will be added by the layout */}
      
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          alt="TourismLK Mobile - Sri Lanka Landscape" 
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        
        {/* Animated accent elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-20" 
               style={{
                 background: 'radial-gradient(circle at 50% 50%, rgba(var(--primary-rgb), 0.8) 0%, transparent 70%)',
                 animation: 'pulse 8s infinite ease-in-out',
               }}>
          </div>
          
          {/* Floating geometric shapes */}
          <div className="hidden md:block">
            <div className="absolute top-[20%] left-[10%] w-16 h-16 rounded-lg bg-primary/20 backdrop-blur-md"
                style={{animation: 'float 6s infinite ease-in-out'}}></div>
            <div className="absolute top-[30%] right-[15%] w-24 h-24 rounded-full bg-primary/10 backdrop-blur-md"
                style={{animation: 'float 8s infinite ease-in-out 1s'}}></div>
            <div className="absolute top-[60%] left-[20%] w-12 h-12 rounded-md bg-primary/15 backdrop-blur-md rotate-45"
                style={{animation: 'float 7s infinite ease-in-out 0.5s'}}></div>
          </div>
        </div>
        
        {/* Stylized curved shape overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[70%] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-black/60 backdrop-blur-sm" 
               style={{
                 clipPath: 'polygon(0 30%, 100% 0%, 100% 100%, 0% 100%)',
                 borderTopRightRadius: '60%',
                 animation: 'fadeIn 1.5s ease-out forwards',
               }}>
          </div>
        </div>
        
        {/* Content with enhanced styling */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-12 z-10">
          <div className="max-w-7xl mx-auto">
            {/* Badges */}
            <div className="mb-4 flex space-x-2" style={{animation: 'slideInRight 0.8s ease-out forwards'}}>
              <Badge className="bg-primary text-white text-xs px-4 py-1.5 shadow-lg shadow-primary/30 font-medium">Tourism</Badge>
              <Badge className="bg-primary text-white text-xs px-4 py-1.5 shadow-lg shadow-primary/30 font-medium">Mobile App</Badge>
              <Badge className="bg-primary text-white text-xs px-4 py-1.5 shadow-lg shadow-primary/30 font-medium">Flutter</Badge>
              <Badge className="bg-primary text-white text-xs px-4 py-1.5 shadow-lg shadow-primary/30 font-medium">AR</Badge>
            </div>
            
            {/* Title with dramatic text effects */}
            <div className="relative" style={{animation: 'fadeIn 1s ease-out forwards'}}>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur-xl opacity-70"></div>
              
              <div className="absolute inset-0 text-4xl md:text-7xl font-black tracking-tight text-transparent"
                   style={{
                     textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
                     letterSpacing: '-0.02em',
                     transform: 'translate(2px, 2px)',
                   }}>
                TourismLK Mobile
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black mb-4 tracking-tight relative"
                  style={{
                    textShadow: '0 4px 16px rgba(0,0,0,0.9), 0 2px 4px rgba(var(--primary-rgb), 0.8), 0 8px 24px rgba(0,0,0,0.5)',
                    background: 'linear-gradient(to bottom right, #ffffff, #c0c0c0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-0.02em',
                    position: 'relative',
                    transform: 'perspective(500px) rotateX(5deg)',
                    transformStyle: 'preserve-3d',
                  }}>
                TourismLK Mobile
              </h1>
            </div>
            
            {/* Description with better contrast and styling */}
            <div className="relative pl-6 border-l-4 border-primary" style={{animation: 'slideInUp 1s ease-out forwards'}}>
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm -left-6 rounded-l-lg"></div>
              
              <p className="text-xl md:text-2xl text-white max-w-3xl font-medium leading-relaxed relative px-4 py-2 -ml-6"
                 style={{
                   textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                   position: 'relative',
                 }}>
                A comprehensive tourism app showcasing 
                <span className="font-bold"> Sri Lanka's destinations</span> 
                <span className="text-primary font-bold" style={{
                  textShadow: '0 0 10px rgba(var(--primary-rgb), 0.8), 0 0 20px rgba(var(--primary-rgb), 0.4)'
                }}> with AR features and personalized recommendations</span>.
              </p>
              
              <div className="absolute -left-1 top-0 bottom-0 w-1 bg-primary shadow-[0_0_15px_rgba(var(--primary-rgb),1)]"></div>
            </div>
          </div>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="mb-6">
          <Link href="/#portfolio">
            <Button variant="ghost" className="group">
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
        
        {/* Project Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Project Overview</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                TourismLK Mobile is a newly launched tourism application designed to showcase Sri Lanka's diverse destinations to both local and international travelers. The app aims to provide an immersive experience through carefully curated content, basic AR features, and a user-friendly booking system.
              </p>
              <p>
                Developed in collaboration with the Sri Lanka Tourism Board, this early-stage app focuses on highlighting popular and hidden gem destinations across the island. It includes basic information about cultural sites, beaches, wildlife sanctuaries, and adventure activities, with plans to expand content as the user base grows.
              </p>
              <p>
                The app features a simple booking system for accommodations and tours, multilingual support for several major languages, and early implementations of AR experiences at select locations. As a recently launched product, TourismLK Mobile is continuously being improved based on initial user feedback, with new features and destination content being added regularly.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-primary mr-3" />
                <div>
                  <span className="text-sm text-muted-foreground">Project Timeline</span>
                  <p className="font-medium">June 2023 - December 2023</p>
                </div>
              </div>
              <div className="flex items-center">
                <Building className="w-5 h-5 text-primary mr-3" />
                <div>
                  <span className="text-sm text-muted-foreground">Client</span>
                  <p className="font-medium">Sri Lanka Tourism Board</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-primary mr-3" />
                <div>
                  <span className="text-sm text-muted-foreground">Team Size</span>
                  <p className="font-medium">3 Developers, 1 Designer, 1 Content Specialist</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card className="overflow-hidden border-2 border-primary/20 bg-card/60 backdrop-blur-md h-full shadow-lg hover:shadow-xl transition-all duration-300" 
                  style={{animation: 'fadeIn 0.8s ease-out'}}>
              <div className="bg-gradient-to-br from-muted/80 via-muted to-muted/90 p-0">
                <div className="bg-gradient-to-r from-primary/10 to-transparent px-6 py-5 border-b border-primary/10">
                  <h3 className="text-xl font-bold mb-1 flex items-center">
                    <span className="bg-primary/10 p-1.5 rounded-md mr-2">
                      <BarChart className="w-5 h-5 text-primary" />
                    </span>
                    Key Metrics
                    <span className="ml-2 px-2 py-0.5 bg-primary/10 rounded text-xs text-primary font-normal">2023</span>
                  </h3>
                  <p className="text-xs text-muted-foreground">Early adoption highlights</p>
                </div>
                
                <div className="p-6 space-y-6">
                  {/* Downloads Metric with animated progress bar */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-sm font-medium flex items-center">
                        <Smartphone className="w-4 h-4 mr-1.5 text-primary/70" />
                        App Downloads
                      </div>
                      <div className="text-2xl font-bold text-primary">25K+</div>
                    </div>
                    <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary/70 to-primary rounded-full" 
                        style={{ 
                          '--target-width': '45%',
                          animation: 'growWidth 1.5s ease-out forwards'
                        } as React.CSSProperties}
                      ></div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Since launch (Dec 2023)</div>
                  </div>
                  
                  {/* Languages Metric with animated progress bar */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-sm font-medium flex items-center">
                        <Globe className="w-4 h-4 mr-1.5 text-primary/70" />
                        Languages
                      </div>
                      <div className="text-2xl font-bold text-primary">8+</div>
                    </div>
                    <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary/70 to-primary rounded-full" 
                        style={{ 
                          '--target-width': '30%',
                          animation: 'growWidth 1.5s ease-out forwards'
                        } as React.CSSProperties}
                      ></div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Major international languages</div>
                  </div>
                  
                  {/* User Rating Metric with animated progress bar */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-sm font-medium flex items-center">
                        <Star className="w-4 h-4 mr-1.5 text-primary/70" />
                        User Rating
                      </div>
                      <div className="text-2xl font-bold text-primary">4.2★</div>
                    </div>
                    <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary/70 to-primary rounded-full" 
                        style={{ 
                          '--target-width': '75%',
                          animation: 'growWidth 1.5s ease-out forwards'
                        } as React.CSSProperties}
                      ></div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Average app store rating</div>
                  </div>
                  
                  {/* AR Experiences Metric with animated progress bar */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-sm font-medium flex items-center">
                        <Camera className="w-4 h-4 mr-1.5 text-primary/70" />
                        AR Experiences
                      </div>
                      <div className="text-2xl font-bold text-primary">15+</div>
                    </div>
                    <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary/70 to-primary rounded-full" 
                        style={{ 
                          '--target-width': '35%',
                          animation: 'growWidth 1.5s ease-out forwards'
                        } as React.CSSProperties}
                      ></div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Interactive AR points of interest</div>
                  </div>
                  
                  {/* Project Success Section */}
                  <div className="mt-6 pt-6 border-t border-border/30">
                    <div className="text-sm font-semibold mb-3 flex items-center">
                      <span className="bg-green-500/10 p-1 rounded mr-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </span>
                      Project Success
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-card/50 rounded-lg p-3 border border-border/20">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mr-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          </div>
                          <div>
                            <div className="text-xs font-medium">Initial launch</div>
                            <div className="text-xs text-muted-foreground">Dec 2023</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-card/50 rounded-lg p-3 border border-border/20">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mr-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          </div>
                          <div>
                            <div className="text-xs font-medium">Phase 1 complete</div>
                            <div className="text-xs text-muted-foreground">On budget</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Project Features */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Destination Explorer",
                description: "Browse through curated collections of Sri Lanka's most beautiful destinations with detailed information and high-quality images.",
                icon: <Map className="w-5 h-5 text-primary" />
              },
              {
                title: "AR Experiences",
                description: "Experience select historical and cultural sites with augmented reality features that bring stories and information to life.",
                icon: <Camera className="w-5 h-5 text-primary" />
              },
              {
                title: "Booking System",
                description: "Simple and intuitive booking system for accommodations, tours, and activities with secure payment processing.",
                icon: <Calendar className="w-5 h-5 text-primary" />
              },
              {
                title: "Travel Planner",
                description: "Create personalized itineraries based on interests, duration of stay, and budget with suggestions for optimal routes.",
                icon: <Compass className="w-5 h-5 text-primary" />
              },
              {
                title: "Multilingual Support",
                description: "Access content in multiple languages to cater to international travelers with native language interface options.",
                icon: <Globe className="w-5 h-5 text-primary" />
              },
              {
                title: "Local Insights",
                description: "Discover hidden gems and authentic experiences with recommendations from local experts and community contributors.",
                icon: <Lightbulb className="w-5 h-5 text-primary" />
              }
            ].map((feature, index) => (
              <Card key={index} className="border border-border/50 bg-card/60 backdrop-blur-md hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors duration-300"></div>
                  
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Screenshots */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">App Screenshots</h2>
          
          <div className="relative">
            {/* Mobile device frame background */}
            <div className="hidden lg:block absolute -left-16 top-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-gradient-to-br from-primary/10 to-primary/5 rounded-[60px] border-8 border-muted/80 shadow-xl transform -rotate-12 z-0"></div>
            <div className="hidden lg:block absolute -right-16 top-1/4 -translate-y-1/2 w-[280px] h-[560px] bg-gradient-to-br from-primary/10 to-primary/5 rounded-[50px] border-8 border-muted/80 shadow-xl transform rotate-6 z-0"></div>
            
            {/* Main content */}
            <div className="relative z-10 space-y-16">
              {/* Splash & Onboarding */}
              <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-3xl p-6 md:p-10 border border-border/50 shadow-lg">
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                  <div className="w-full lg:w-1/2 order-2 lg:order-1 space-y-6">
                    <div className="space-y-4">
                      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        <Map className="w-4 h-4 mr-2" />
                        First Impression
                      </div>
                      <h3 className="text-3xl font-bold">Splash & Onboarding</h3>
                      <p className="text-muted-foreground text-lg">
                        The app welcomes users with stunning visuals of Sri Lanka's landscapes and a
                        smooth onboarding process that introduces key features and helps users set up
                        their preferences for a personalized experience.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-border/50">
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 bg-primary/10 p-2 rounded-full">
                            <CheckCircle className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Visual Introduction</h4>
                            <p className="text-sm text-muted-foreground">Captivating imagery showcasing Sri Lanka's beauty</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-border/50">
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 bg-primary/10 p-2 rounded-full">
                            <Compass className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Guided Setup</h4>
                            <p className="text-sm text-muted-foreground">Step-by-step introduction to app features</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-1/2 order-1 lg:order-2">
                    <div className="relative mx-auto max-w-[320px]">
                      {/* Phone frame */}
                      <div className="absolute inset-0 bg-black rounded-[36px] -m-3 shadow-2xl"></div>
                      <div className="relative rounded-[30px] overflow-hidden border-[8px] border-black shadow-inner">
                        <img 
                          src="/assets/TourisumLK/Splash & Onboarding Screens.png" 
                          alt="TourismLK Splash and Onboarding Screens" 
                          className="w-full object-cover"
                        />
                      </div>
                      {/* Phone notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* User Dashboard */}
              <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-3xl p-6 md:p-10 border border-border/50 shadow-lg">
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                  <div className="w-full lg:w-1/2 order-2 lg:order-2 space-y-6">
                    <div className="space-y-4">
                      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        <Users className="w-4 h-4 mr-2" />
                        User Experience
                      </div>
                      <h3 className="text-3xl font-bold">User Dashboard</h3>
                      <p className="text-muted-foreground text-lg">
                        The personalized dashboard provides travelers with recommended destinations,
                        saved itineraries, upcoming bookings, and recent activities, all tailored to
                        their preferences and travel history.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-border/50">
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 bg-primary/10 p-2 rounded-full">
                            <Lightbulb className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Smart Recommendations</h4>
                            <p className="text-sm text-muted-foreground">Personalized destination suggestions based on user preferences</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-border/50">
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 bg-primary/10 p-2 rounded-full">
                            <Map className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Trip Management</h4>
                            <p className="text-sm text-muted-foreground">Easy access to saved trips and booking history</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-1/2 order-1 lg:order-1">
                    <div className="relative mx-auto max-w-[320px] rotate-3">
                      {/* Phone frame */}
                      <div className="absolute inset-0 bg-black rounded-[36px] -m-3 shadow-2xl"></div>
                      <div className="relative rounded-[30px] overflow-hidden border-[8px] border-black shadow-inner">
                        <img 
                          src="/assets/TourisumLK/user dashbaard.png" 
                          alt="TourismLK User Dashboard" 
                          className="w-full object-cover"
                        />
                      </div>
                      {/* Phone notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hotel Booking */}
              <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-3xl p-6 md:p-10 border border-border/50 shadow-lg">
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                  <div className="w-full lg:w-1/2 order-2 lg:order-1 space-y-6">
                    <div className="space-y-4">
                      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        <Calendar className="w-4 h-4 mr-2" />
                        Accommodation
                      </div>
                      <h3 className="text-3xl font-bold">Hotel Booking</h3>
                      <p className="text-muted-foreground text-lg">
                        The hotel booking interface allows users to search, filter, and compare accommodations
                        across Sri Lanka with detailed information, photos, amenities, and verified reviews
                        to help travelers make informed decisions.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-border/50">
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 bg-primary/10 p-2 rounded-full">
                            <CheckCircle className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Advanced Filtering</h4>
                            <p className="text-sm text-muted-foreground">Find the perfect stay with customizable search options</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-border/50">
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 bg-primary/10 p-2 rounded-full">
                            <Star className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Verified Reviews</h4>
                            <p className="text-sm text-muted-foreground">Authentic feedback from other travelers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-1/2 order-1 lg:order-2">
                    <div className="relative mx-auto max-w-[320px] -rotate-2">
                      {/* Phone frame */}
                      <div className="absolute inset-0 bg-black rounded-[36px] -m-3 shadow-2xl"></div>
                      <div className="relative rounded-[30px] overflow-hidden border-[8px] border-black shadow-inner">
                        <img 
                          src="/assets/TourisumLK/Hotel Booking Enables users to search and filter.png" 
                          alt="TourismLK Hotel Booking Interface" 
                          className="w-full object-cover"
                        />
                      </div>
                      {/* Phone notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Booking System */}
              <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-3xl p-6 md:p-10 border border-border/50 shadow-lg">
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                  <div className="w-full lg:w-1/2 order-2 lg:order-2 space-y-6">
                    <div className="space-y-4">
                      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        <Calendar className="w-4 h-4 mr-2" />
                        Reservations
                      </div>
                      <h3 className="text-3xl font-bold">Booking System</h3>
                      <p className="text-muted-foreground text-lg">
                        The comprehensive booking system streamlines the reservation process for tours,
                        activities, and transportation with clear pricing, availability calendars, and
                        secure payment processing for a hassle-free experience.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-border/50">
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 bg-primary/10 p-2 rounded-full">
                            <Calendar className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Real-time Availability</h4>
                            <p className="text-sm text-muted-foreground">Up-to-date booking calendars for all activities</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-border/50">
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 bg-primary/10 p-2 rounded-full">
                            <CheckCircle className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Secure Checkout</h4>
                            <p className="text-sm text-muted-foreground">Safe and simple payment processing</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-1/2 order-1 lg:order-1">
                    <div className="relative mx-auto max-w-[320px] rotate-2">
                      {/* Phone frame */}
                      <div className="absolute inset-0 bg-black rounded-[36px] -m-3 shadow-2xl"></div>
                      <div className="relative rounded-[30px] overflow-hidden border-[8px] border-black shadow-inner">
                        <img 
                          src="/assets/TourisumLK/Booking System Screens.png" 
                          alt="TourismLK Booking System" 
                          className="w-full object-cover"
                        />
                      </div>
                      {/* Phone notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Technologies Used */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Technologies Used</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Flutter",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
                description: "UI framework"
              },
              {
                name: "Dart",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
                description: "Programming language"
              },
              {
                name: "Firebase",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
                description: "Backend & authentication"
              },
              {
                name: "ARCore",
                icon: "/assets/icons/arcore.png",
                description: "AR capabilities"
              },
              {
                name: "Google Maps",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
                description: "Maps integration"
              },
              {
                name: "Stripe",
                icon: "/assets/icons/Stripe.png",
                description: "Payment processing"
              },
              {
                name: "Figma",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
                description: "UI/UX design"
              },
              {
                name: "Git",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                description: "Version control"
              }
            ].map((tech, index) => (
              <Card key={index} className="border border-border/50 bg-card/60 backdrop-blur-md hover:shadow-md transition-shadow group">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 p-2 rounded-full bg-muted/50 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                    <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
                  </div>
                  <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors duration-300">{tech.name}</h3>
                  <p className="text-muted-foreground text-sm">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-muted/30 rounded-xl border border-border/50">
            <h3 className="text-lg font-bold mb-3 flex items-center">
              <Layers className="w-5 h-5 mr-2 text-primary" />
              Development Approach
            </h3>
            <p className="text-sm text-muted-foreground">
              TourismLK Mobile was built using Flutter to ensure a consistent experience across both iOS and Android platforms. The app leverages Firebase for backend services, user authentication, and cloud storage. AR experiences are implemented using ARCore and ARKit integrations. The development followed an agile methodology with regular feedback cycles from tourism industry stakeholders to ensure the app meets the needs of both travelers and local businesses.
            </p>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mb-16">
          <ProjectCTA projectType="mobile application" />
        </div>
      </main>
      
      {/* Footer will be added by the layout */}
    </div>
  );
} 