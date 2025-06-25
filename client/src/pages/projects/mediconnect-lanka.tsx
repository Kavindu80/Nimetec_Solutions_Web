import { ArrowLeft, CheckCircle, Calendar, Users, Building, BarChart, Activity, Stethoscope, Heart, LineChart, Layers, Globe, Award, MessageSquare, Video, Clock, Phone, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { useEffect } from "react";
import ProjectCTA from "@/components/project-cta";

export default function MediConnectLankaProject() {
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
          src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          alt="MediConnect Lanka - Healthcare Management" 
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
              <Badge className="bg-primary text-white text-xs px-4 py-1.5 shadow-lg shadow-primary/30 font-medium">Healthcare</Badge>
              <Badge className="bg-primary text-white text-xs px-4 py-1.5 shadow-lg shadow-primary/30 font-medium">Web App</Badge>
              <Badge className="bg-primary text-white text-xs px-4 py-1.5 shadow-lg shadow-primary/30 font-medium">Vue.js</Badge>
              <Badge className="bg-primary text-white text-xs px-4 py-1.5 shadow-lg shadow-primary/30 font-medium">Python</Badge>
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
                MediConnect Lanka
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
                MediConnect Lanka
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
                A comprehensive healthcare management system connecting 
                <span className="font-bold"> patients, doctors, and hospitals</span> 
                <span className="text-primary font-bold" style={{
                  textShadow: '0 0 10px rgba(var(--primary-rgb), 0.8), 0 0 20px rgba(var(--primary-rgb), 0.4)'
                }}> across Sri Lanka with telemedicine capabilities</span>.
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
                MediConnect Lanka is a newly launched healthcare management system designed to improve access to medical services across Sri Lanka. The platform aims to connect patients with healthcare providers through a unified digital ecosystem that streamlines appointment scheduling, medical record management, and telemedicine services.
              </p>
              <p>
                In its initial phase, the system focuses on basic connectivity between a select group of hospitals, clinics, and patients in urban areas, with plans to expand to rural regions as the platform grows. The early version includes fundamental features like appointment booking, basic electronic health records, and simple video consultation capabilities.
              </p>
              <p>
                As a recently launched startup solution, MediConnect Lanka is continuously collecting user feedback and making iterative improvements to enhance the user experience and add new functionalities. The development team is working closely with healthcare professionals to ensure the platform meets the specific needs of Sri Lanka's healthcare system.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-primary mr-3" />
                <div>
                  <span className="text-sm text-muted-foreground">Project Timeline</span>
                  <p className="font-medium">January 2023 - November 2023</p>
                </div>
              </div>
              <div className="flex items-center">
                <Building className="w-5 h-5 text-primary mr-3" />
                <div>
                  <span className="text-sm text-muted-foreground">Client</span>
                  <p className="font-medium">Ministry of Health, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-primary mr-3" />
                <div>
                  <span className="text-sm text-muted-foreground">Team Size</span>
                  <p className="font-medium">4 Developers, 1 Designer, 2 Healthcare Consultants</p>
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
                  {/* Hospitals Metric with animated progress bar */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-sm font-medium flex items-center">
                        <Building className="w-4 h-4 mr-1.5 text-primary/70" />
                        Hospitals Onboarded
                      </div>
                      <div className="text-2xl font-bold text-primary">32+</div>
                    </div>
                    <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary/70 to-primary rounded-full" 
                        style={{ 
                          '--target-width': '25%',
                          animation: 'growWidth 1.5s ease-out forwards'
                        } as React.CSSProperties}
                      ></div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Initial partner facilities</div>
                  </div>
                  
                  {/* Doctors Metric with animated progress bar */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-sm font-medium flex items-center">
                        <Stethoscope className="w-4 h-4 mr-1.5 text-primary/70" />
                        Doctors
                      </div>
                      <div className="text-2xl font-bold text-primary">180+</div>
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
                    <div className="text-xs text-muted-foreground mt-1">Registered healthcare providers</div>
                  </div>
                  
                  {/* Patients Metric with animated progress bar */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-sm font-medium flex items-center">
                        <Users className="w-4 h-4 mr-1.5 text-primary/70" />
                        Active Patients
                      </div>
                      <div className="text-2xl font-bold text-primary">3.5K+</div>
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
                    <div className="text-xs text-muted-foreground mt-1">Monthly active users</div>
                  </div>
                  
                  {/* Appointments Metric with animated progress bar */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-sm font-medium flex items-center">
                        <Calendar className="w-4 h-4 mr-1.5 text-primary/70" />
                        Appointments
                      </div>
                      <div className="text-2xl font-bold text-primary">2.8K+</div>
                    </div>
                    <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary/70 to-primary rounded-full" 
                        style={{ 
                          '--target-width': '28%',
                          animation: 'growWidth 1.5s ease-out forwards'
                        } as React.CSSProperties}
                      ></div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Monthly bookings</div>
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
                            <div className="text-xs font-medium">Phase 1 complete</div>
                            <div className="text-xs text-muted-foreground">On schedule</div>
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
                title: "Appointment Scheduling",
                description: "Simple booking system for patients to schedule appointments with doctors across different healthcare facilities.",
                icon: <Calendar className="w-5 h-5 text-primary" />
              },
              {
                title: "Basic Electronic Health Records",
                description: "Secure storage of patient medical history, test results, and treatment plans accessible to authorized healthcare providers.",
                icon: <Activity className="w-5 h-5 text-primary" />
              },
              {
                title: "Telemedicine Consultations",
                description: "Video-based remote consultations connecting patients with doctors for basic healthcare services without requiring in-person visits.",
                icon: <Video className="w-5 h-5 text-primary" />
              },
              {
                title: "Doctor Directory",
                description: "Searchable database of healthcare providers categorized by specialty, location, and availability for patient convenience.",
                icon: <Stethoscope className="w-5 h-5 text-primary" />
              },
              {
                title: "Hospital Network",
                description: "Integration with partner hospitals and clinics to streamline patient referrals and information sharing between facilities.",
                icon: <Building className="w-5 h-5 text-primary" />
              },
              {
                title: "Prescription Management",
                description: "Digital prescription system allowing doctors to prescribe medications and patients to access their prescription history.",
                icon: <Heart className="w-5 h-5 text-primary" />
              },
              {
                title: "Basic Analytics Dashboard",
                description: "Simple reporting tools for healthcare administrators to monitor system usage and basic operational metrics.",
                icon: <LineChart className="w-5 h-5 text-primary" />
              },
              {
                title: "Appointment Reminders",
                description: "Automated notifications for upcoming appointments to reduce no-shows and improve scheduling efficiency.",
                icon: <Clock className="w-5 h-5 text-primary" />
              },
              {
                title: "Multilingual Support",
                description: "Interface available in Sinhala, Tamil, and English to serve Sri Lanka's diverse population and improve accessibility.",
                icon: <Globe className="w-5 h-5 text-primary" />
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
          
          <div className="space-y-12">
            {/* Landing Page */}
            <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-6 border border-border/50">
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="w-full md:w-2/5 space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <Globe className="w-4 h-4 mr-2" />
                    Main Interface
                  </div>
                  <h3 className="text-2xl font-bold">Landing Page</h3>
                  <p className="text-muted-foreground">
                    The MediConnect Lanka landing page provides an intuitive entry point to the healthcare platform.
                    It features a clean, professional design with easy navigation to key services including appointment
                    booking, doctor search, and patient login.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>User-friendly navigation</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Quick access to core features</span>
                  </div>
                </div>
                <div className="w-full md:w-3/5 overflow-hidden rounded-xl shadow-xl">
                  <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                    <img 
                      src="/assets/Mediconnect/landing page.png" 
                      alt="MediConnect Lanka Landing Page" 
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Appointment Booking */}
            <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-6 border border-border/50">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-2/5 space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <Calendar className="w-4 h-4 mr-2" />
                    Patient Experience
                  </div>
                  <h3 className="text-2xl font-bold">Appointment Booking</h3>
                  <p className="text-muted-foreground">
                    The appointment booking interface allows patients to easily schedule medical appointments
                    with their preferred healthcare providers. Users can select their doctor, choose available time slots,
                    and specify the reason for their visit.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Doctor selection with specialties</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Available time slot display</span>
                  </div>
                </div>
                <div className="w-full md:w-3/5 overflow-hidden rounded-xl shadow-xl">
                  <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                    <img 
                      src="/assets/Mediconnect/appoinment booking.png" 
                      alt="MediConnect Appointment Booking" 
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Confirmation */}
            <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-6 border border-border/50">
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="w-full md:w-2/5 space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Confirmation Process
                  </div>
                  <h3 className="text-2xl font-bold">Appointment Confirmation</h3>
                  <p className="text-muted-foreground">
                    Once an appointment is scheduled, patients receive a detailed confirmation page with all
                    relevant information about their upcoming visit. This includes the doctor's details, 
                    appointment time, location, and preparation instructions.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Complete appointment summary</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Digital calendar integration</span>
                  </div>
                </div>
                <div className="w-full md:w-3/5 overflow-hidden rounded-xl shadow-xl">
                  <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                    <img 
                      src="/assets/Mediconnect/appoinment confirmation page.png" 
                      alt="MediConnect Appointment Confirmation" 
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Admin Panel */}
            <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-6 border border-border/50">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-2/5 space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <Building className="w-4 h-4 mr-2" />
                    Hospital Management
                  </div>
                  <h3 className="text-2xl font-bold">Admin Dashboard</h3>
                  <p className="text-muted-foreground">
                    The administrative dashboard provides hospital managers and healthcare administrators with
                    a comprehensive overview of the facility's operations. It includes patient statistics, 
                    appointment analytics, and resource management tools.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Real-time analytics visualization</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Comprehensive reporting tools</span>
                  </div>
                </div>
                <div className="w-full md:w-3/5 overflow-hidden rounded-xl shadow-xl">
                  <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                    <img 
                      src="/assets/Mediconnect/Admin Panel.png" 
                      alt="MediConnect Admin Dashboard" 
                      className="w-full object-contain"
                    />
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
                name: "Vue.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
                description: "Frontend framework"
              },
              {
                name: "Python",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                description: "Backend development"
              },
              {
                name: "Django",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
                description: "Web framework"
              },
              {
                name: "PostgreSQL",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                description: "Database"
              },
              {
                name: "Docker",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
                description: "Containerization"
              },
              {
                name: "WebRTC",
                icon: "/assets/icons/webrtc.png",
                description: "Video streaming"
              },
              {
                name: "AWS",
                icon: "/assets/icons/AWS.png",
                description: "Cloud infrastructure"
              },
              {
                name: "Figma",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
                description: "UI/UX design"
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
              MediConnect Lanka was developed using a modern tech stack with Vue.js for the frontend and Django for the backend. The system uses PostgreSQL for data storage and WebRTC for real-time video consultations. The development followed an agile methodology with iterative sprints and continuous feedback from healthcare professionals. The platform is deployed on AWS infrastructure using Docker containers for scalability and ease of maintenance.
            </p>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mb-16">
          <ProjectCTA projectType="healthcare solution" />
        </div>
      </main>
      
      {/* Footer will be added by the layout */}
    </div>
  );
} 