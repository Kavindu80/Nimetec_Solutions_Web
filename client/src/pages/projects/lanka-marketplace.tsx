import { ArrowLeft, CheckCircle, Calendar, Users, Building, BarChart, ShoppingCart, Globe, CreditCard, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { useEffect } from "react";
import ProjectCTA from "@/components/project-cta";

export default function LankaMarketplaceProject() {
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
          src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          alt="Lanka Marketplace" 
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
              <Badge className="bg-primary text-white text-xs px-4 py-1.5 shadow-lg shadow-primary/30 font-medium">E-commerce</Badge>
              <Badge className="bg-primary text-white text-xs px-4 py-1.5 shadow-lg shadow-primary/30 font-medium">Web App</Badge>
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
                Lanka Marketplace
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
                Lanka Marketplace
              </h1>
            </div>
            
            <div className="relative pl-6 border-l-4 border-primary" style={{animation: 'slideInUp 1s ease-out forwards'}}>
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm -left-6 rounded-l-lg"></div>
              
              <p className="text-xl md:text-2xl text-white max-w-3xl font-medium leading-relaxed relative px-4 py-2 -ml-6"
                 style={{
                   textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                   position: 'relative',
                 }}>
                A comprehensive e-commerce platform connecting 
                <span className="font-bold"> local Sri Lankan businesses </span>
                <span className="text-primary font-bold" style={{
                  textShadow: '0 0 10px rgba(var(--primary-rgb), 0.8), 0 0 20px rgba(var(--primary-rgb), 0.4)'
                }}> with customers worldwide</span>.
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
                Lanka Marketplace is a comprehensive e-commerce platform specifically designed to empower local Sri Lankan businesses by connecting them with customers both within Sri Lanka and internationally. This project addresses the growing need for digitalization among local businesses and provides them with a user-friendly platform to showcase and sell their products globally.
              </p>
              <p>
                The platform features a sophisticated inventory management system, integrated payment gateways supporting multiple currencies, real-time analytics for sellers, and a personalized shopping experience for customers. The project was built with scalability in mind, ensuring it can handle growing traffic and transaction volumes as more businesses and customers join the platform.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-primary mr-3" />
                <div>
                  <span className="text-sm text-muted-foreground">Project Timeline</span>
                  <p className="font-medium">January 2023 - December 2023</p>
                </div>
              </div>
              <div className="flex items-center">
                <Building className="w-5 h-5 text-primary mr-3" />
                <div>
                  <span className="text-sm text-muted-foreground">Client</span>
                  <p className="font-medium">Lanka Commerce Ltd</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-primary mr-3" />
                <div>
                  <span className="text-sm text-muted-foreground">Team Size</span>
                  <p className="font-medium">7 Developers, 2 Designers, 1 Project Manager</p>
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
                  {/* Sales Increase Metric with animated progress bar */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-sm font-medium flex items-center">
                        <BarChart className="w-4 h-4 mr-1.5 text-primary/70" />
                        Sales Growth
                      </div>
                      <div className="text-2xl font-bold text-primary">300%</div>
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
                    <div className="text-xs text-muted-foreground mt-1">Increase in sales for merchants</div>
                  </div>
                  
                  {/* User Base Metric with animated progress bar */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-sm font-medium flex items-center">
                        <Users className="w-4 h-4 mr-1.5 text-primary/70" />
                        User Base
                      </div>
                      <div className="text-2xl font-bold text-primary">50K+</div>
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
                    <div className="text-xs text-muted-foreground mt-1">Active users</div>
                  </div>
                  
                  {/* Businesses Onboarded Metric with animated progress bar */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-sm font-medium flex items-center">
                        <ShoppingCart className="w-4 h-4 mr-1.5 text-primary/70" />
                        Businesses
                      </div>
                      <div className="text-2xl font-bold text-primary">1,200+</div>
                    </div>
                    <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary/70 to-primary rounded-full" 
                        style={{ 
                          '--target-width': '80%',
                          animation: 'growWidth 1.5s ease-out forwards'
                        } as React.CSSProperties}
                      ></div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Local businesses onboarded</div>
                  </div>
                  
                  {/* Global Reach Metric with animated progress bar */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-sm font-medium flex items-center">
                        <Globe className="w-4 h-4 mr-1.5 text-primary/70" />
                        Global Reach
                      </div>
                      <div className="text-2xl font-bold text-primary">35+</div>
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
                    <div className="text-xs text-muted-foreground mt-1">Countries reached</div>
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
                            <div className="text-xs font-medium">Within budget</div>
                            <div className="text-xs text-muted-foreground">5% under</div>
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
                title: "Multi-vendor Marketplace",
                description: "Allows any Sri Lankan business to create their own storefront within the platform, with customizable branding and product categories.",
                icon: <ShoppingCart className="w-5 h-5 text-primary" />
              },
              {
                title: "Inventory Management",
                description: "Sophisticated system for tracking stock levels, managing variants, and receiving low-stock alerts to ensure optimal inventory levels.",
                icon: <Share2 className="w-5 h-5 text-primary" />
              },
              {
                title: "Multi-currency Support",
                description: "Supports transactions in multiple currencies with real-time exchange rates, making international purchases seamless.",
                icon: <CreditCard className="w-5 h-5 text-primary" />
              },
              {
                title: "Personalized Recommendations",
                description: "AI-powered recommendation engine that suggests products based on browsing history, purchase patterns, and user preferences.",
                icon: <Users className="w-5 h-5 text-primary" />
              },
              {
                title: "Integrated Shipping",
                description: "Seamless integration with local and international shipping providers with real-time tracking and delivery updates.",
                icon: <Globe className="w-5 h-5 text-primary" />
              },
              {
                title: "Analytics Dashboard",
                description: "Comprehensive analytics for sellers to track sales, customer behavior, and inventory performance with actionable insights.",
                icon: <BarChart className="w-5 h-5 text-primary" />
              }
            ].map((feature, index) => (
              <Card key={index} className="border border-border/50 bg-card/60 backdrop-blur-md hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
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
            {/* Home Screenshot */}
            <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-6 border border-border/50">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-2/5 space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Main Storefront
                  </div>
                  <h3 className="text-2xl font-bold">Home Page</h3>
                  <p className="text-muted-foreground">
                    The main landing page showcases featured products, popular categories, and special promotions. 
                    The intuitive design helps users quickly find what they're looking for with a personalized 
                    shopping experience based on browsing history.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Personalized product recommendations</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Featured local businesses</span>
                  </div>
                </div>
                <div className="w-full md:w-3/5 overflow-hidden rounded-xl shadow-xl">
                  <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                    <img 
                      src="/assets/Lanka Mart/home.png" 
                      alt="Lanka Marketplace Homepage" 
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Seller Dashboard */}
            <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-6 border border-border/50">
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="w-full md:w-2/5 space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <BarChart className="w-4 h-4 mr-2" />
                    Merchant Tools
                  </div>
                  <h3 className="text-2xl font-bold">Seller Dashboard</h3>
                  <p className="text-muted-foreground">
                    A comprehensive analytics dashboard that provides sellers with real-time insights into their store performance,
                    inventory levels, and customer behavior. Merchants can track sales trends, manage products, and optimize their strategy.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Real-time sales analytics</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Inventory management system</span>
                  </div>
                </div>
                <div className="w-full md:w-3/5 overflow-hidden rounded-xl shadow-xl">
                  <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                    <img 
                      src="/assets/Lanka Mart/seller.png" 
                      alt="Seller Dashboard" 
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Order Management */}
            <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-6 border border-border/50">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-2/5 space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <Share2 className="w-4 h-4 mr-2" />
                    Order Tracking
                  </div>
                  <h3 className="text-2xl font-bold">Order Management</h3>
                  <p className="text-muted-foreground">
                    The order management system allows both sellers and buyers to track orders from purchase to delivery.
                    It includes status updates, shipping information, and delivery confirmation with a user-friendly interface.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Real-time order tracking</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Automated status updates</span>
                  </div>
                </div>
                <div className="w-full md:w-3/5 overflow-hidden rounded-xl shadow-xl">
                  <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                    <img 
                      src="/assets/Lanka Mart/order.png" 
                      alt="Order Management" 
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Processing */}
            <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-6 border border-border/50">
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="w-full md:w-2/5 space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Secure Payments
                  </div>
                  <h3 className="text-2xl font-bold">Payment Processing</h3>
                  <p className="text-muted-foreground">
                    Our multi-currency payment system supports various payment methods including credit cards, digital wallets,
                    and local payment options. The secure checkout process ensures safe transactions for all users.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Multi-currency support</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Secure payment processing</span>
                  </div>
                </div>
                <div className="w-full md:w-3/5 overflow-hidden rounded-xl shadow-xl">
                  <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                    <img 
                      src="/assets/Lanka Mart/payment.png" 
                      alt="Payment Gateway" 
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
                description: "Frontend UI library"
              },
              {
                name: "Node.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                description: "Backend runtime"
              },
              {
                name: "MongoDB",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                description: "Database"
              },
              {
                name: "Express",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                description: "Backend framework"
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
                name: "Tailwind CSS",
                icon: "/assets/icons/tailwind.png",
                description: "CSS framework"
              }
            ].map((tech, index) => (
              <Card key={index} className="border border-border/50 bg-card/60 backdrop-blur-md hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-4" />
                  <h3 className="text-lg font-bold mb-1">{tech.name}</h3>
                  <p className="text-muted-foreground text-sm">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Challenges and Solutions */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Challenges & Solutions</h2>
          
          <div className="space-y-8">
            <div className="bg-muted/50 rounded-xl p-6 border border-border/50">
              <h3 className="text-xl font-bold mb-3">Multi-currency Transactions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-muted-foreground font-medium mb-2">Challenge:</div>
                  <p className="text-sm text-muted-foreground">
                    Implementing real-time currency conversion while ensuring accurate transaction records and financial reporting across different currencies posed significant challenges.
                  </p>
                </div>
                <div>
                  <div className="text-primary font-medium mb-2">Solution:</div>
                  <p className="text-sm text-muted-foreground">
                    We integrated a currency exchange API with rate caching and implemented dual-record keeping that stored both the original currency amount and the converted amount, ensuring financial accuracy and transparent reporting.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-xl p-6 border border-border/50">
              <h3 className="text-xl font-bold mb-3">Scalable Architecture</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-muted-foreground font-medium mb-2">Challenge:</div>
                  <p className="text-sm text-muted-foreground">
                    Building an architecture that could handle the projected growth from a few hundred to thousands of vendors, with seasonal traffic spikes during holidays and sales events.
                  </p>
                </div>
                <div>
                  <div className="text-primary font-medium mb-2">Solution:</div>
                  <p className="text-sm text-muted-foreground">
                    We implemented a microservices architecture deployed on AWS with auto-scaling capabilities, containerized with Docker and orchestrated by Kubernetes to handle variable loads efficiently.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-xl p-6 border border-border/50">
              <h3 className="text-xl font-bold mb-3">Local Payment Integration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-muted-foreground font-medium mb-2">Challenge:</div>
                  <p className="text-sm text-muted-foreground">
                    Integrating with local Sri Lankan payment gateways that had limited documentation and APIs while maintaining a seamless checkout experience.
                  </p>
                </div>
                <div>
                  <div className="text-primary font-medium mb-2">Solution:</div>
                  <p className="text-sm text-muted-foreground">
                    We built custom adapter layers for each local payment provider and implemented a unified payment interface that standardized the checkout flow regardless of the payment method used.
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
                Lanka Marketplace has transformed our business. Before the platform, we were limited to local customers, but now we ship our handcrafted products internationally. The platform is intuitive for both sellers and customers, and the analytics tools have helped us understand our market better. Working with Nimtec was a pleasure – they truly understood our requirements and delivered beyond our expectations.
              </blockquote>
              
              <div className="flex items-center pl-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-4">
                  PR
                </div>
                <div>
                  <div className="font-bold">Priyanka Rajapaksa</div>
                  <div className="text-sm text-muted-foreground">CEO, Lanka Commerce Ltd</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mb-16">
          <ProjectCTA projectType="e-commerce solution" />
        </div>
      </main>
      
      {/* Footer will be added by the layout */}
    </div>
  );
} 