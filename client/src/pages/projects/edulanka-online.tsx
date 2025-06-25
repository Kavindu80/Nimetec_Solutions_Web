import { ArrowLeft, CheckCircle, Calendar, Users, Building, BarChart, BookOpen, GraduationCap, Lightbulb, LineChart, Layers, Video, Award, PieChart, Presentation, Laptop, Globe, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { useEffect } from "react";
import ProjectCTA from "@/components/project-cta";

export default function EduLankaOnlineProject() {
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
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          alt="EduLanka Online - Students collaborating" 
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
              <Badge className="bg-primary text-white text-xs px-4 py-1.5 shadow-lg shadow-primary/30 font-medium">EdTech</Badge>
              <Badge className="bg-primary text-white text-xs px-4 py-1.5 shadow-lg shadow-primary/30 font-medium">Mobile App</Badge>
              <Badge className="bg-primary text-white text-xs px-4 py-1.5 shadow-lg shadow-primary/30 font-medium">React Native</Badge>
              <Badge className="bg-primary text-white text-xs px-4 py-1.5 shadow-lg shadow-primary/30 font-medium">Firebase</Badge>
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
                EduLanka Mobile
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
                EduLanka Mobile
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
                A powerful mobile learning app designed for 
                <span className="font-bold"> Sri Lankan students and educators</span>, 
                <span className="text-primary font-bold" style={{
                  textShadow: '0 0 10px rgba(var(--primary-rgb), 0.8), 0 0 20px rgba(var(--primary-rgb), 0.4)'
                }}> with offline learning capabilities</span>.
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
                EduLanka Mobile is an innovative educational app specifically designed to address the unique needs of Sri Lankan schools and universities. The app bridges the gap between traditional classroom learning and digital education on-the-go, providing a comprehensive mobile solution that enhances the learning experience for students while offering powerful tools for educators.
              </p>
              <p>
                The mobile app was developed in response to the growing need for accessible, high-quality education across Sri Lanka, particularly in remote areas where educational resources and internet connectivity are limited. By leveraging mobile technology, EduLanka Mobile democratizes access to education, allowing students from all backgrounds to benefit from interactive lessons, expert instruction, and collaborative learning environments directly from their smartphones.
              </p>
              <p>
                With features like offline content access, push notifications for assignments, touch-optimized interfaces, and AI-powered learning recommendations, EduLanka Mobile represents a significant leap forward in educational technology for Sri Lanka's academic institutions. The app supports both synchronous and asynchronous learning, making it flexible enough to accommodate various teaching styles and learning preferences, even in areas with intermittent connectivity.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-primary mr-3" />
                <div>
                  <span className="text-sm text-muted-foreground">Project Timeline</span>
                  <p className="font-medium">March 2023 - November 2023</p>
                </div>
              </div>
              <div className="flex items-center">
                <Building className="w-5 h-5 text-primary mr-3" />
                <div>
                  <span className="text-sm text-muted-foreground">Client</span>
                  <p className="font-medium">Ministry of Education, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-primary mr-3" />
                <div>
                  <span className="text-sm text-muted-foreground">Team Size</span>
                  <p className="font-medium">5 Developers, 3 Designers, 2 Education Specialists, 1 Project Manager</p>
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
                  <p className="text-xs text-muted-foreground">Platform performance highlights</p>
                </div>
                
                <div className="p-6 space-y-6">
                  {/* Schools Metric with animated progress bar */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-sm font-medium flex items-center">
                        <Building className="w-4 h-4 mr-1.5 text-primary/70" />
                        Schools Onboarded
                      </div>
                      <div className="text-2xl font-bold text-primary">200+</div>
                    </div>
                    <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary/70 to-primary rounded-full" 
                        style={{ 
                          '--target-width': '70%',
                          animation: 'growWidth 1.5s ease-out forwards'
                        } as React.CSSProperties}
                      ></div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Across all provinces</div>
                  </div>
                  
                  {/* Students Metric with animated progress bar */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-sm font-medium flex items-center">
                        <Users className="w-4 h-4 mr-1.5 text-primary/70" />
                        Active Students
                      </div>
                      <div className="text-2xl font-bold text-primary">50K+</div>
                    </div>
                    <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary/70 to-primary rounded-full" 
                        style={{ 
                          '--target-width': '85%',
                          animation: 'growWidth 1.5s ease-out forwards'
                        } as React.CSSProperties}
                      ></div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Daily active users</div>
                  </div>
                  
                  {/* Satisfaction Metric with animated progress bar */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-sm font-medium flex items-center">
                        <Award className="w-4 h-4 mr-1.5 text-primary/70" />
                        Satisfaction Rate
                      </div>
                      <div className="text-2xl font-bold text-primary">95%</div>
                    </div>
                    <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary/70 to-primary rounded-full" 
                        style={{ 
                          '--target-width': '95%',
                          animation: 'growWidth 1.5s ease-out forwards'
                        } as React.CSSProperties}
                      ></div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">User satisfaction score</div>
                  </div>
                  
                  {/* Improvement Metric with animated progress bar */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-sm font-medium flex items-center">
                        <LineChart className="w-4 h-4 mr-1.5 text-primary/70" />
                        Performance Boost
                      </div>
                      <div className="text-2xl font-bold text-primary">32%</div>
                    </div>
                    <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary/70 to-primary rounded-full" 
                        style={{ 
                          '--target-width': '65%',
                          animation: 'growWidth 1.5s ease-out forwards'
                        } as React.CSSProperties}
                      ></div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Avg. improvement in test scores</div>
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
                            <div className="text-xs font-medium">On-time delivery</div>
                            <div className="text-xs text-muted-foreground">Nov 2023</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-card/50 rounded-lg p-3 border border-border/20">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mr-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          </div>
                          <div>
                            <div className="text-xs font-medium">Exceeded goals</div>
                            <div className="text-xs text-muted-foreground">+15% metrics</div>
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
                title: "Offline Learning",
                description: "Download lessons, videos, and assignments for offline access, enabling students to continue learning even without an internet connection.",
                icon: <Video className="w-5 h-5 text-primary" />
              },
              {
                title: "Interactive Content Library",
                description: "Touch-optimized interactive educational content including videos, simulations, quizzes, and exercises aligned with Sri Lankan curriculum standards.",
                icon: <BookOpen className="w-5 h-5 text-primary" />
              },
              {
                title: "Progress Tracking",
                description: "Visual analytics and reporting tools for students, teachers, and administrators to monitor learning progress directly from their mobile devices.",
                icon: <LineChart className="w-5 h-5 text-primary" />
              },
              {
                title: "AI Learning Assistant",
                description: "Mobile-optimized intelligent learning assistant that provides personalized recommendations and answers questions through a chat interface.",
                icon: <Lightbulb className="w-5 h-5 text-primary" />
              },
              {
                title: "Push Notifications",
                description: "Timely alerts for new assignments, upcoming deadlines, and important announcements to keep students engaged and on track.",
                icon: <MessageSquare className="w-5 h-5 text-primary" />
              },
              {
                title: "Multilingual Support",
                description: "Full support for Sinhala, Tamil, and English languages with native keyboard integration for all three languages.",
                icon: <Globe className="w-5 h-5 text-primary" />
              },
              {
                title: "Mobile Assessment",
                description: "Complete exams and quizzes directly from the mobile app with auto-saving capabilities to prevent data loss during connectivity issues.",
                icon: <Award className="w-5 h-5 text-primary" />
              },
              {
                title: "Cross-Device Sync",
                description: "Seamless synchronization across devices when online, ensuring students can switch between smartphones and tablets without losing progress.",
                icon: <Laptop className="w-5 h-5 text-primary" />
              },
              {
                title: "Parent Monitoring",
                description: "Dedicated mobile interface for parents to monitor their children's progress and receive updates directly on their smartphones.",
                icon: <Users className="w-5 h-5 text-primary" />
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
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Platform Screenshots</h2>
          
          <div className="relative">
            {/* Mobile device frame background */}
            <div className="hidden lg:block absolute -left-16 top-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-gradient-to-br from-primary/10 to-primary/5 rounded-[60px] border-8 border-muted/80 shadow-xl transform -rotate-12 z-0"></div>
            <div className="hidden lg:block absolute -right-16 top-1/4 -translate-y-1/2 w-[280px] h-[560px] bg-gradient-to-br from-primary/10 to-primary/5 rounded-[50px] border-8 border-muted/80 shadow-xl transform rotate-6 z-0"></div>
            
            {/* Main content */}
            <div className="relative z-10 space-y-16">
              {/* Student Dashboard */}
              <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-3xl p-6 md:p-10 border border-border/50 shadow-lg">
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                  <div className="w-full lg:w-1/2 order-2 lg:order-1 space-y-6">
                    <div className="space-y-4">
                      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        <Users className="w-4 h-4 mr-2" />
                        Student Experience
              </div>
                      <h3 className="text-3xl font-bold">Student Dashboard</h3>
                      <p className="text-muted-foreground text-lg">
                        The personalized student dashboard provides an overview of enrolled courses, upcoming assignments, 
                        progress tracking, and recommended learning materials tailored to each student's learning journey.
                      </p>
            </div>
            
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-border/50">
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 bg-primary/10 p-2 rounded-full">
                            <CheckCircle className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Personalized Learning</h4>
                            <p className="text-sm text-muted-foreground">AI-powered recommendations based on learning style and progress</p>
              </div>
            </div>
          </div>
          
                      <div className="bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-border/50">
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 bg-primary/10 p-2 rounded-full">
                            <LineChart className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Progress Tracking</h4>
                            <p className="text-sm text-muted-foreground">Visual analytics to monitor learning achievements</p>
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
                          src="/assets/Edulanka/Student Dashboard.png" 
                          alt="EduLanka Student Dashboard" 
                          className="w-full object-cover"
                        />
                      </div>
                      {/* Phone notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-xl"></div>
                    </div>
                  </div>
              </div>
            </div>
            
              {/* Teacher Dashboard */}
              <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-3xl p-6 md:p-10 border border-border/50 shadow-lg">
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                  <div className="w-full lg:w-1/2 order-2 lg:order-2 space-y-6">
                    <div className="space-y-4">
                      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        Teacher Tools
              </div>
                      <h3 className="text-3xl font-bold">Teacher Dashboard</h3>
                      <p className="text-muted-foreground text-lg">
                        A comprehensive dashboard for educators to manage their classes, track student performance,
                        create and assign learning materials, and communicate with students through an integrated platform.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-border/50">
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 bg-primary/10 p-2 rounded-full">
                            <Users className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Class Management</h4>
                            <p className="text-sm text-muted-foreground">Tools to organize and manage multiple classes efficiently</p>
                          </div>
            </div>
          </div>
          
                      <div className="bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-border/50">
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 bg-primary/10 p-2 rounded-full">
                            <BarChart className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Performance Analytics</h4>
                            <p className="text-sm text-muted-foreground">Detailed insights into student engagement and results</p>
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
                          src="/assets/Edulanka/teachers dashboard.png" 
                          alt="EduLanka Teacher Dashboard" 
                          className="w-full object-cover"
                        />
                      </div>
                      {/* Phone notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Course Details */}
              <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-3xl p-6 md:p-10 border border-border/50 shadow-lg">
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                  <div className="w-full lg:w-1/2 order-2 lg:order-1 space-y-6">
                    <div className="space-y-4">
                      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Course Content
                </div>
                      <h3 className="text-3xl font-bold">Course Details</h3>
                      <p className="text-muted-foreground text-lg">
                        Detailed course pages provide comprehensive information about the curriculum, learning objectives,
                        lesson materials, and assessment criteria. Students can access multimedia content, assignments, and resources.
                      </p>
              </div>
              
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-border/50">
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 bg-primary/10 p-2 rounded-full">
                            <Video className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Interactive Content</h4>
                            <p className="text-sm text-muted-foreground">Rich multimedia lessons with videos and simulations</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-border/50">
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 bg-primary/10 p-2 rounded-full">
                            <BookOpen className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Structured Learning</h4>
                            <p className="text-sm text-muted-foreground">Organized curriculum aligned with educational standards</p>
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
                          src="/assets/Edulanka/course details.png" 
                          alt="EduLanka Course Details" 
                          className="w-full object-cover"
                        />
                      </div>
                      {/* Phone notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Login & Onboarding */}
              <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-3xl p-6 md:p-10 border border-border/50 shadow-lg">
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                  <div className="w-full lg:w-1/2 order-2 lg:order-2 space-y-6">
                    <div className="space-y-4">
                      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        <Laptop className="w-4 h-4 mr-2" />
                        Authentication
                      </div>
                      <h3 className="text-3xl font-bold">Login & Onboarding</h3>
                      <p className="text-muted-foreground text-lg">
                        The secure authentication system provides role-based access for students, teachers, and administrators.
                        New users receive a personalized onboarding experience to help them navigate the platform effectively.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-border/50">
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 bg-primary/10 p-2 rounded-full">
                            <CheckCircle className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Secure Access</h4>
                            <p className="text-sm text-muted-foreground">Role-based authentication with data protection</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-border/50">
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 bg-primary/10 p-2 rounded-full">
                            <Lightbulb className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Guided Setup</h4>
                            <p className="text-sm text-muted-foreground">Interactive onboarding process for new users</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-1/2 order-1 lg:order-1">
                    <div className="relative mx-auto max-w-[320px] rotate-1">
                      {/* Phone frame */}
                      <div className="absolute inset-0 bg-black rounded-[36px] -m-3 shadow-2xl"></div>
                      <div className="relative rounded-[30px] overflow-hidden border-[8px] border-black shadow-inner">
                        <img 
                          src="/assets/Edulanka/EduLanka Online splash login.png" 
                          alt="EduLanka Login Screen" 
                          className="w-full object-cover"
                        />
                      </div>
                      {/* Phone notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-xl"></div>
                    </div>
                </div>
              </div>
            </div>
            
              {/* App Store badges */}
              <div className="text-center pt-8">
                <p className="text-lg font-medium mb-6">Download the EduLanka app</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="bg-black text-white rounded-xl px-6 py-3 flex items-center space-x-3 hover:bg-black/90 transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                      <path d="M12 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                      <path d="M9 7v0a3 3 0 0 1 6 0v0"></path>
                      <path d="M12 19V5"></path>
                      <path d="M9.5 16.5a4.95 4.95 0 0 1-2.44-2.2A10.58 10.58 0 0 1 6 10.2V10a6 6 0 1 1 12 0v0a10.58 10.58 0 0 1-1.06 4.1 4.95 4.95 0 0 1-2.44 2.2"></path>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-xl font-medium -mt-1">App Store</div>
                    </div>
                  </div>
                  
                  <div className="bg-black text-white rounded-xl px-6 py-3 flex items-center space-x-3 hover:bg-black/90 transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">GET IT ON</div>
                      <div className="text-xl font-medium -mt-1">Google Play</div>
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
                name: "React Native",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                description: "Mobile app framework"
              },
              {
                name: "Redux",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
                description: "State management"
              },
              {
                name: "Firebase",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
                description: "Backend & authentication"
              },
              {
                name: "TypeScript",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                description: "Programming language"
              },
              {
                name: "MongoDB",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                description: "Mobile-optimized database"
              },
              {
                name: "Redis",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
                description: "Caching layer"
              },
              {
                name: "AWS Amplify",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
                description: "Mobile backend services"
              },
              {
                name: "Expo",
                icon: "https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg",
                description: "Mobile development platform"
              },
              {
                name: "TensorFlow Lite",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
                description: "Mobile AI framework"
              },
              {
                name: "Socket.io",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
                description: "Real-time communication"
              },
              {
                name: "Native Base",
                icon: "/assets/icons/nativebase-removebg-preview.png",
                description: "UI component library"
              },
              {
                name: "Jest",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
                description: "Testing framework"
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
              Mobile Architecture
            </h3>
            <p className="text-sm text-muted-foreground">
              EduLanka Mobile utilizes a hybrid architecture with React Native for cross-platform compatibility, Firebase for real-time data synchronization, and offline-first design patterns. The app implements local storage caching for offline content access, background sync capabilities when connectivity is restored, and optimized data transfer to minimize bandwidth usage. The frontend uses native UI components for optimal performance, while the backend leverages serverless functions for scalability and reduced operational overhead.
            </p>
          </div>
        </div>
        
        {/* Challenges and Solutions */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Challenges & Solutions</h2>
          
          <div className="space-y-8">
            <div className="bg-muted/50 rounded-xl p-6 border border-border/50 hover:border-primary/20 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Globe className="w-4 h-4 text-primary" />
                </span>
                Internet Connectivity in Rural Areas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-muted-foreground font-medium mb-2 flex items-center">
                    <span className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center mr-2">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </span>
                    Challenge:
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Many rural areas in Sri Lanka have limited or unreliable internet connectivity, which posed a significant challenge for delivering a rich, interactive mobile learning experience to all students regardless of their location.
                  </p>
                </div>
                <div>
                  <div className="text-primary font-medium mb-2 flex items-center">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                    </span>
                    Solution:
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We implemented a robust offline mode in the app, allowing students to download entire courses, videos, and interactive content when they have connectivity and access them later without an internet connection. The app intelligently syncs progress and completed assignments when connectivity is restored.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-xl p-6 border border-border/50 hover:border-primary/20 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Laptop className="w-4 h-4 text-primary" />
                </span>
                Device Diversity
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-muted-foreground font-medium mb-2 flex items-center">
                    <span className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center mr-2">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </span>
                    Challenge:
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Students access the app from a wide variety of mobile devices, from high-end smartphones to basic entry-level Android devices with limited processing power and storage capacity.
                  </p>
                </div>
                <div>
                  <div className="text-primary font-medium mb-2 flex items-center">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                    </span>
                    Solution:
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We implemented adaptive content delivery that optimizes media quality based on device capabilities, a lightweight mode for older devices, and modular content downloading to allow students with limited storage to select only the materials they need most.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-xl p-6 border border-border/50 hover:border-primary/20 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <MessageSquare className="w-4 h-4 text-primary" />
                </span>
                Multilingual Support
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-muted-foreground font-medium mb-2 flex items-center">
                    <span className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center mr-2">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </span>
                    Challenge:
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sri Lanka has three official languages (Sinhala, Tamil, and English), and supporting all three languages throughout the platform, including complex educational content and technical terminology, was challenging.
                  </p>
                </div>
                <div>
                  <div className="text-primary font-medium mb-2 flex items-center">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                    </span>
                    Solution:
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We built a robust localization system with context-aware translations and collaborated with language experts to ensure accurate educational terminology. We also implemented an AI-assisted translation workflow for new content, followed by human review for quality assurance.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-xl p-6 border border-border/50 hover:border-primary/20 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Laptop className="w-4 h-4 text-primary" />
                </span>
                Device Diversity
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-muted-foreground font-medium mb-2 flex items-center">
                    <span className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center mr-2">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </span>
                    Challenge:
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Students access the app from a wide variety of mobile devices, from high-end smartphones to basic entry-level Android devices with limited processing power and storage capacity.
                  </p>
                </div>
                <div>
                  <div className="text-primary font-medium mb-2 flex items-center">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                    </span>
                    Solution:
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We implemented adaptive content delivery that optimizes media quality based on device capabilities, a lightweight mode for older devices, and modular content downloading to allow students with limited storage to select only the materials they need most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 relative">
            <div className="text-4xl text-primary opacity-20 absolute top-6 left-8">
              "
            </div>
            <div className="relative z-10">
              <blockquote className="text-xl text-muted-foreground italic mb-8 pl-8">
                The EduLanka mobile app has transformed education in our school. Before implementing this solution, many of our students in remote areas had limited access to quality educational resources. Now, they can download lessons when they visit areas with connectivity and continue learning offline at home. The app's intuitive interface makes it easy for both students and teachers to adopt, and the push notifications help keep everyone on track with assignments and deadlines.
              </blockquote>
              
              <div className="flex items-center pl-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-4">
                  DR
                </div>
                <div>
                  <div className="font-bold">Dr. Ramesh Perera</div>
                  <div className="text-sm text-muted-foreground">Principal, National College of Education, Colombo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mb-16">
          <ProjectCTA projectType="educational platform" />
        </div>
      </main>
      
      {/* Footer will be added by the layout */}
    </div>
  );
} 