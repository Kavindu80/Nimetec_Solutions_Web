import { ArrowLeft, CheckCircle, Calendar, Users, Building, BarChart, CreditCard, Globe, Shield, LineChart, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { useEffect } from "react";
import ProjectCTA from "@/components/project-cta";

export default function DigitalWalletProProject() {
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
          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          alt="Digital Wallet Pro" 
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
              <Badge className="bg-primary text-white text-xs px-4 py-1.5 shadow-lg shadow-primary/30 font-medium">Web App</Badge>
              <Badge className="bg-primary text-white text-xs px-4 py-1.5 shadow-lg shadow-primary/30 font-medium">FinTech</Badge>
              <Badge className="bg-primary text-white text-xs px-4 py-1.5 shadow-lg shadow-primary/30 font-medium">React</Badge>
            </div>
            
            <div className="relative" style={{animation: 'fadeIn 1s ease-out forwards'}}>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur-xl opacity-70"></div>
              
              <div className="absolute inset-0 text-4xl md:text-7xl font-black tracking-tight text-transparent"
                   style={{
                     textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
                     letterSpacing: '-0.02em',
                     transform: 'translate(2px, 2px)',
                   }}>
                Digital Wallet Pro
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
                Digital Wallet Pro
              </h1>
            </div>
            
            <div className="relative pl-6 border-l-4 border-primary" style={{animation: 'slideInUp 1s ease-out forwards'}}>
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm -left-6 rounded-l-lg"></div>
              
              <p className="text-xl md:text-2xl text-white max-w-3xl font-medium leading-relaxed relative px-4 py-2 -ml-6"
                 style={{
                   textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                   position: 'relative',
                 }}>
                A secure web-based financial platform with 
                <span className="font-bold"> essential payment features </span>
                <span className="text-primary font-bold" style={{
                  textShadow: '0 0 10px rgba(var(--primary-rgb), 0.8), 0 0 20px rgba(var(--primary-rgb), 0.4)'
                }}> for the emerging Sri Lankan market</span>.
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
                Digital Wallet Pro is a new web-based financial platform designed to provide Sri Lankan users with a secure and convenient way to manage their finances online. As an early-stage startup, the platform is focused on building its user base while offering essential features including bill payments, money transfers, and basic financial management tools.
              </p>
              <p>
                The web application was developed to address the growing demand for digital financial services in Sri Lanka, particularly among young professionals and small business owners. With its simple interface and strong security foundation, Digital Wallet Pro aims to make digital financial services more accessible to the average Sri Lankan.
              </p>
              <p>
                Currently, the platform offers integration with selected local banks, supports the Sri Lankan Rupee with plans to add more currencies, and provides basic financial tracking tools. The team is actively working on expanding features and partnerships to enhance the platform's capabilities.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-primary mr-3" />
                <div>
                  <span className="text-sm text-muted-foreground">Project Timeline</span>
                  <p className="font-medium">August 2023 - January 2024</p>
                </div>
              </div>
              <div className="flex items-center">
                <Building className="w-5 h-5 text-primary mr-3" />
                <div>
                  <span className="text-sm text-muted-foreground">Client</span>
                  <p className="font-medium">FinanceForward</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-primary mr-3" />
                <div>
                  <span className="text-sm text-muted-foreground">Team Size</span>
                  <p className="font-medium">3 Developers, 1 Designer, 1 Product Manager</p>
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
                  {/* Users Metric with animated progress bar */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-sm font-medium flex items-center">
                        <Users className="w-4 h-4 mr-1.5 text-primary/70" />
                        Active Users
                      </div>
                      <div className="text-2xl font-bold text-primary">5K+</div>
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
                    <div className="text-xs text-muted-foreground mt-1">Monthly active users</div>
                  </div>
                  
                  {/* Transactions Metric with animated progress bar */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-sm font-medium flex items-center">
                        <CreditCard className="w-4 h-4 mr-1.5 text-primary/70" />
                        Transactions
                      </div>
                      <div className="text-2xl font-bold text-primary">₨15M+</div>
                    </div>
                    <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary/70 to-primary rounded-full" 
                        style={{ 
                          '--target-width': '60%',
                          animation: 'growWidth 1.5s ease-out forwards'
                        } as React.CSSProperties}
                      ></div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Monthly transaction volume</div>
                  </div>
                  
                  {/* Rating Metric with animated progress bar */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-sm font-medium flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1.5 text-primary/70" />
                        User Rating
                      </div>
                      <div className="text-2xl font-bold text-primary">4.2★</div>
                    </div>
                    <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary/70 to-primary rounded-full" 
                        style={{ 
                          '--target-width': '82%',
                          animation: 'growWidth 1.5s ease-out forwards'
                        } as React.CSSProperties}
                      ></div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Average user satisfaction</div>
                  </div>
                  
                  {/* Security Metric with animated progress bar */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-sm font-medium flex items-center">
                        <Shield className="w-4 h-4 mr-1.5 text-primary/70" />
                        Security
                      </div>
                      <div className="text-2xl font-bold text-primary">95%</div>
                    </div>
                    <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary/70 to-primary rounded-full" 
                        style={{ 
                          '--target-width': '90%',
                          animation: 'growWidth 1.5s ease-out forwards'
                        } as React.CSSProperties}
                      ></div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Security compliance score</div>
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
                            <div className="text-xs font-medium">Initial funding</div>
                            <div className="text-xs text-muted-foreground">Seed round secured</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-card/50 rounded-lg p-3 border border-border/20">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mr-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          </div>
                          <div>
                            <div className="text-xs font-medium">Zero breaches</div>
                            <div className="text-xs text-muted-foreground">Bank-grade security</div>
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
                title: "Basic Bill Payments",
                description: "Pay selected utility bills and services with simple scheduling and upcoming payment notifications.",
                icon: <CreditCard className="w-5 h-5 text-primary" />
              },
              {
                title: "Sri Lankan Rupee Support",
                description: "Focused on local currency with plans to add more currencies in future updates as the platform grows.",
                icon: <Globe className="w-5 h-5 text-primary" />
              },
              {
                title: "Simple Financial Tracking",
                description: "Basic dashboards to monitor spending categories and transaction history for better financial awareness.",
                icon: <BarChart className="w-5 h-5 text-primary" />
              },
              {
                title: "Selected Bank Integration",
                description: "Connect with select Sri Lankan banks for basic fund transfers and account balance checking.",
                icon: <Building className="w-5 h-5 text-primary" />
              },
              {
                title: "Cryptocurrency Education",
                description: "Information about cryptocurrencies with plans to add trading features in future platform updates.",
                icon: <LineChart className="w-5 h-5 text-primary" />
              },
              {
                title: "Standard Security",
                description: "Industry-standard encryption and authentication to protect user data and financial information.",
                icon: <Shield className="w-5 h-5 text-primary" />
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
            {/* Welcome Screen */}
            <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-6 border border-border/50">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-2/5 space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <Shield className="w-4 h-4 mr-2" />
                    User Onboarding
                  </div>
                  <h3 className="text-2xl font-bold">Welcome Screen</h3>
                  <p className="text-muted-foreground">
                    The welcome screen introduces users to Digital Wallet Pro with a clean, 
                    intuitive interface. New users can quickly create an account or returning 
                    users can log in securely to access their financial dashboard.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Simple registration process</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Secure authentication</span>
                  </div>
                </div>
                <div className="w-full md:w-3/5 overflow-hidden rounded-xl shadow-xl">
                  <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                    <img 
                      src="/assets/Digital Wallet Pro/welcome screen for Digital Wallet Pro.png" 
                      alt="Digital Wallet Pro Welcome Screen" 
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Home Screen */}
            <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-6 border border-border/50">
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="w-full md:w-2/5 space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Main Interface
                  </div>
                  <h3 className="text-2xl font-bold">Home Screen</h3>
                  <p className="text-muted-foreground">
                    The home screen provides users with a quick overview of their account balance, 
                    recent transactions, and quick access to key features like bill payments and 
                    money transfers. The clean design prioritizes ease of use.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Account balance overview</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Quick action buttons</span>
                  </div>
                </div>
                <div className="w-full md:w-3/5 overflow-hidden rounded-xl shadow-xl">
                  <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                    <img 
                      src="/assets/Digital Wallet Pro/home screen.png" 
                      alt="Digital Wallet Pro Home Screen" 
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Dashboard */}
            <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-6 border border-border/50">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-2/5 space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <BarChart className="w-4 h-4 mr-2" />
                    Financial Tracking
                  </div>
                  <h3 className="text-2xl font-bold">Financial Dashboard</h3>
                  <p className="text-muted-foreground">
                    The financial dashboard provides users with basic analytics about their spending 
                    habits, income sources, and transaction history. Users can track their financial 
                    activities and make informed decisions about their money.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Spending category breakdown</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Monthly transaction summary</span>
                  </div>
                </div>
                <div className="w-full md:w-3/5 overflow-hidden rounded-xl shadow-xl">
                  <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                    <img 
                      src="/assets/Digital Wallet Pro/financial dashboard.png" 
                      alt="Digital Wallet Pro Financial Dashboard" 
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Send Money Screen */}
            <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-6 border border-border/50">
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="w-full md:w-2/5 space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Money Transfer
                  </div>
                  <h3 className="text-2xl font-bold">Send Money Screen</h3>
                  <p className="text-muted-foreground">
                    The send money feature allows users to transfer funds to other accounts 
                    quickly and securely. Users can select recipients, enter amounts, and 
                    complete transfers with just a few clicks.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Simple transfer process</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Recent recipients list</span>
                  </div>
                </div>
                <div className="w-full md:w-3/5 overflow-hidden rounded-xl shadow-xl">
                  <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                    <img 
                      src="/assets/Digital Wallet Pro/Send Money Screen.png" 
                      alt="Digital Wallet Pro Send Money Screen" 
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
                name: "React",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                description: "Frontend library"
              },
              {
                name: "Node.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                description: "Backend runtime"
              },
              {
                name: "Express",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                description: "Web framework"
              },
              {
                name: "MongoDB",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                description: "Database"
              },
              {
                name: "Redux",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
                description: "State management"
              },
              {
                name: "AWS",
                icon: "/assets/icons/AWS.png",
                description: "Cloud infrastructure"
              },
              {
                name: "Stripe",
                icon: "/assets/icons/Stripe.png",
                description: "Payment processing"
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
              Architecture Overview
            </h3>
            <p className="text-sm text-muted-foreground">
              Digital Wallet Pro uses a straightforward web architecture with React for the frontend and Node.js for the backend. The application follows a monolithic approach for simplicity and faster development in this early stage. Data is stored in MongoDB with basic caching, while selected AWS services provide the hosting infrastructure. Security includes standard encryption for data in transit and at rest, with plans to implement more advanced security features as the platform scales.
            </p>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mb-16">
          <ProjectCTA projectType="fintech solution" />
        </div>
      </main>
      
      {/* Footer will be added by the layout */}
    </div>
  );
} 