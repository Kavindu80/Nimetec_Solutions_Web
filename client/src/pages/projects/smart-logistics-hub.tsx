import { ArrowLeft, CheckCircle, Calendar, Users, Building, BarChart, Truck, Globe, Package, LineChart, Layers, Box, Map, Shield, Database } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { useEffect } from "react";
import ProjectCTA from "@/components/project-cta";

export default function SmartLogisticsHubProject() {
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
          src="https://images.unsplash.com/photo-1586528116493-a029325540fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          alt="Smart Logistics Hub" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-20" 
               style={{
                 background: 'radial-gradient(circle at 50% 50%, rgba(var(--primary-rgb), 0.8) 0%, transparent 70%)',
                 animation: 'pulse 8s infinite ease-in-out',
               }}>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-[70%] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-black/60 backdrop-blur-sm" 
               style={{
                 clipPath: 'polygon(0 30%, 100% 0%, 100% 100%, 0% 100%)',
                 borderTopRightRadius: '60%',
                 animation: 'fadeIn 1.5s ease-out forwards',
               }}>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-12 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-4 flex space-x-2" style={{animation: 'slideInRight 0.8s ease-out forwards'}}>
              <Badge className="bg-primary text-white text-xs px-4 py-1.5 shadow-lg shadow-primary/30 font-medium">Enterprise</Badge>
              <Badge className="bg-primary text-white text-xs px-4 py-1.5 shadow-lg shadow-primary/30 font-medium">AI/ML</Badge>
              <Badge className="bg-primary text-white text-xs px-4 py-1.5 shadow-lg shadow-primary/30 font-medium">Angular</Badge>
            </div>
            
            <div className="relative" style={{animation: 'fadeIn 1s ease-out forwards'}}>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur-xl opacity-70"></div>
              
              <div className="absolute inset-0 text-4xl md:text-7xl font-black tracking-tight text-transparent"
                   style={{
                     textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
                     letterSpacing: '-0.02em',
                     transform: 'translate(2px, 2px)',
                   }}>
                Smart Logistics Hub
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
                Smart Logistics Hub
              </h1>
            </div>
            
            <div className="relative pl-6 border-l-4 border-primary" style={{animation: 'slideInUp 1s ease-out forwards'}}>
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm -left-6 rounded-l-lg"></div>
              
              <p className="text-xl md:text-2xl text-white max-w-3xl font-medium leading-relaxed relative px-4 py-2 -ml-6"
                 style={{
                   textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                   position: 'relative',
                 }}>
                A logistics management solution with 
                <span className="font-bold"> AI-assisted tracking </span>
                <span className="text-primary font-bold" style={{
                  textShadow: '0 0 10px rgba(var(--primary-rgb), 0.8), 0 0 20px rgba(var(--primary-rgb), 0.4)'
                }}> for Sri Lankan import/export businesses</span>.
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
                Smart Logistics Hub is a newly launched logistics management solution designed to help Sri Lankan import/export businesses streamline their supply chain operations. The platform combines basic AI capabilities with practical logistics management tools to provide better visibility and control over shipments.
              </p>
              <p>
                The solution was developed to address common challenges faced by local logistics companies, such as manual tracking processes, paperwork delays, and limited visibility across the supply chain. By digitizing these processes, Smart Logistics Hub helps businesses reduce operational costs and improve efficiency.
              </p>
              <p>
                Currently, the platform offers shipment tracking, basic inventory management, and simple customs documentation features. The development team is working on expanding the AI capabilities and integrating with more local customs and shipping partners as the platform grows.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-primary mr-3" />
                <div>
                  <span className="text-sm text-muted-foreground">Project Timeline</span>
                  <p className="font-medium">September 2023 - February 2024</p>
                </div>
              </div>
              <div className="flex items-center">
                <Building className="w-5 h-5 text-primary mr-3" />
                <div>
                  <span className="text-sm text-muted-foreground">Client</span>
                  <p className="font-medium">Ceylon Logistics</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-primary mr-3" />
                <div>
                  <span className="text-sm text-muted-foreground">Team Size</span>
                  <p className="font-medium">4 Developers, 1 Designer, 1 Product Manager</p>
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
                    <span className="ml-2 px-2 py-0.5 bg-primary/10 rounded text-xs text-primary font-normal">2024</span>
                  </h3>
                  <p className="text-xs text-muted-foreground">Platform performance highlights</p>
                </div>
                
                <div className="p-6 space-y-6">
                  {/* Cost Reduction Metric with animated progress bar */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-sm font-medium flex items-center">
                        <LineChart className="w-4 h-4 mr-1.5 text-primary/70" />
                        Cost Reduction
                      </div>
                      <div className="text-2xl font-bold text-primary">18%</div>
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
                    <div className="text-xs text-muted-foreground mt-1">Average operational savings</div>
                  </div>
                  
                  {/* Clients Metric with animated progress bar */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-sm font-medium flex items-center">
                        <Building className="w-4 h-4 mr-1.5 text-primary/70" />
                        Active Clients
                      </div>
                      <div className="text-2xl font-bold text-primary">12+</div>
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
                    <div className="text-xs text-muted-foreground mt-1">Import/export companies</div>
                  </div>
                  
                  {/* Tracking Accuracy Metric with animated progress bar */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-sm font-medium flex items-center">
                        <Truck className="w-4 h-4 mr-1.5 text-primary/70" />
                        Tracking Accuracy
                      </div>
                      <div className="text-2xl font-bold text-primary">92%</div>
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
                    <div className="text-xs text-muted-foreground mt-1">Real-time location accuracy</div>
                  </div>
                  
                  {/* Processing Time Metric with animated progress bar */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-sm font-medium flex items-center">
                        <Package className="w-4 h-4 mr-1.5 text-primary/70" />
                        Processing Time
                      </div>
                      <div className="text-2xl font-bold text-primary">-35%</div>
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
                    <div className="text-xs text-muted-foreground mt-1">Reduction in documentation time</div>
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
                            <div className="text-xs text-muted-foreground">Feb 2024</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-card/50 rounded-lg p-3 border border-border/20">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mr-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          </div>
                          <div>
                            <div className="text-xs font-medium">First clients</div>
                            <div className="text-xs text-muted-foreground">Onboarded</div>
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
                title: "Shipment Tracking",
                description: "Basic real-time tracking of shipments with location updates and estimated arrival times for better planning.",
                icon: <Truck className="w-5 h-5 text-primary" />
              },
              {
                title: "Inventory Management",
                description: "Simple inventory tracking system to monitor stock levels and manage warehouse operations efficiently.",
                icon: <Box className="w-5 h-5 text-primary" />
              },
              {
                title: "Customs Documentation",
                description: "Digital forms and templates to streamline customs documentation processes and reduce paperwork.",
                icon: <Package className="w-5 h-5 text-primary" />
              },
              {
                title: "Basic Analytics",
                description: "Simple reporting tools to analyze shipment data, identify bottlenecks, and track key performance indicators.",
                icon: <BarChart className="w-5 h-5 text-primary" />
              },
              {
                title: "Route Optimization",
                description: "Initial AI-assisted route planning to help reduce transportation costs and delivery times.",
                icon: <Globe className="w-5 h-5 text-primary" />
              },
              {
                title: "Mobile Access",
                description: "Basic mobile interface allowing users to track shipments and receive notifications while on the go.",
                icon: <LineChart className="w-5 h-5 text-primary" />
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
            {/* Landing Page Screenshot */}
            <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-6 border border-border/50">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-2/5 space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <Globe className="w-4 h-4 mr-2" />
                    Landing Page
                  </div>
                  <h3 className="text-2xl font-bold">Smart Logistics Hub Portal</h3>
                  <p className="text-muted-foreground">
                    The modern landing page showcases the platform's key benefits and features
                    for Sri Lankan import/export businesses. It highlights real-time shipment tracking,
                    AI-powered suggestions, and customs document digitization capabilities.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Clean, modern interface design</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Key benefits clearly highlighted</span>
                  </div>
                </div>
                <div className="w-full md:w-3/5 overflow-hidden rounded-xl shadow-xl">
                  <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                    <img 
                      src="/assets/Smart Logistics Hubs/Smart Logistics Hub Landing Page presents a modern and clean interface aimed at Sri Lankan logistics and importexport businesses.png" 
                      alt="Smart Logistics Hub Landing Page" 
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Shipment Management Screenshot */}
            <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-6 border border-border/50">
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="w-full md:w-2/5 space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <Truck className="w-4 h-4 mr-2" />
                    Shipment Management
                  </div>
                  <h3 className="text-2xl font-bold">Shipments Dashboard</h3>
                  <p className="text-muted-foreground">
                    The shipment management interface displays a comprehensive list of all shipments
                    with important details like status, origin, destination, ETA, and carrier information.
                    Users can easily track and manage multiple shipments from a single dashboard.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Organized shipment tracking table</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Quick status visualization</span>
                  </div>
                </div>
                <div className="w-full md:w-3/5 overflow-hidden rounded-xl shadow-xl">
                  <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                    <img 
                      src="/assets/Smart Logistics Hubs/Shipment Management screen in Smart Logistics Hub.png" 
                      alt="Shipment Management Dashboard" 
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Shipment Details */}
            <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-6 border border-border/50">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-2/5 space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <Package className="w-4 h-4 mr-2" />
                    Shipment Details
                  </div>
                  <h3 className="text-2xl font-bold">Detailed Tracking View</h3>
                  <p className="text-muted-foreground">
                    The detailed shipment view provides comprehensive information about each
                    individual shipment, including route visualization, status updates, and
                    delivery milestones to ensure complete visibility throughout the logistics process.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Detailed shipment information</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Visual tracking interface</span>
                  </div>
                </div>
                <div className="w-full md:w-3/5 overflow-hidden rounded-xl shadow-xl">
                  <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                    <img 
                      src="/assets/Smart Logistics Hubs/Shipment Management Screen.png" 
                      alt="Detailed Shipment View" 
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics */}
            <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-6 border border-border/50">
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="w-full md:w-2/5 space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <BarChart className="w-4 h-4 mr-2" />
                    Analytics Dashboard
                  </div>
                  <h3 className="text-2xl font-bold">Reports & Analytics</h3>
                  <p className="text-muted-foreground">
                    The analytics dashboard provides comprehensive insights into logistics operations
                    with visual charts and graphs showing key performance indicators, shipment volumes,
                    and delivery efficiency metrics to help optimize supply chain performance.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Visual data representation</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Performance trend analysis</span>
                  </div>
                </div>
                <div className="w-full md:w-3/5 overflow-hidden rounded-xl shadow-xl">
                  <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                    <img 
                      src="/assets/Smart Logistics Hubs/Smart Logistics Hub Reports & Analytics screen.png" 
                      alt="Reports and Analytics Dashboard" 
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
                name: "Angular",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
                description: "Frontend framework"
              },
              {
                name: "Python",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                description: "Backend development"
              },
              {
                name: "TensorFlow",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
                description: "AI capabilities"
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
                name: "AWS",
                icon: "/assets/icons/AWS.png",
                description: "Cloud hosting"
              },
              {
                name: "Bootstrap",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
                description: "UI components"
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
              Architecture Overview
            </h3>
            <p className="text-sm text-muted-foreground">
              Smart Logistics Hub uses Angular for the frontend with Bootstrap for responsive UI components. The backend is built with Python using Flask, with PostgreSQL for data storage. Basic AI capabilities are implemented using TensorFlow for route optimization and demand forecasting. The system is containerized with Docker and deployed on AWS for scalability and reliability. This architecture provides a solid foundation for the initial launch, with room to expand as the platform grows.
            </p>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mb-16">
          <ProjectCTA projectType="logistics solution" />
        </div>
      </main>
      
      {/* Footer will be added by the layout */}
    </div>
  );
} 