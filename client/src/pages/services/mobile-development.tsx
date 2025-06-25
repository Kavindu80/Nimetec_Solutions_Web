import ServiceLayout from "./ServiceLayout";
import { Smartphone, Code, Zap, Bell, Layout, CheckCircle, PieChart, Tablet, BarChart, Star, TrendingUp, Shield, RefreshCw, Phone, Gauge, Users, GitMerge, FileCode } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function MobileDevelopmentPage() {
  return (
    <ServiceLayout 
      title="Mobile Development" 
      description="Enterprise-grade native and cross-platform mobile applications that deliver exceptional user experiences and drive business growth."
      icon={<Smartphone className="text-white w-10 h-10" />}
    >
      <div className="py-16 animated-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats for Mobile Success */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                <span className="gradient-text">Mobile Success Metrics</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our mobile applications consistently deliver exceptional results across key performance indicators.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { value: "68%", label: "User Retention Rate", icon: <Star className="text-white w-6 h-6" /> },
                { value: "4.9", label: "Average App Rating", icon: <TrendingUp className="text-white w-6 h-6" /> },
                { value: "47%", label: "Conversion Increase", icon: <BarChart className="text-white w-6 h-6" /> },
                { value: "2.8x", label: "Engagement Growth", icon: <Zap className="text-white w-6 h-6" /> }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl group will-change-transform"
                  style={{ willChange: "transform, box-shadow" }}
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-primary to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-primary/20 transition-all duration-300 transform group-hover:-translate-y-1">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{stat.value}</div>
                    <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Overview Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Mobile App Development Excellence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  In today's digital landscape, a powerful, intuitive mobile application is critical for businesses seeking to engage users and accelerate growth. At Nimtec, we craft <span className="highlight-text">exceptional mobile experiences</span> that transform ideas into market-leading applications.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our specialized mobile development team combines deep technical expertise with user-centered design principles to create applications that not only look stunning but also <span className="highlight-text">perform flawlessly</span> across all devices and platforms.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  From native iOS and Android development to cross-platform solutions, we leverage cutting-edge technologies to deliver high-performance, scalable applications that drive measurable business results.
                </p>
                
                <div className="rounded-xl overflow-hidden mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                    alt="Mobile app development" 
                    className="w-full h-[220px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Client testimonial */}
                <div className="mt-8 p-5 bg-primary/5 rounded-xl border border-primary/10 relative testimonial-card">
                  <blockquote className="text-gray-600 italic relative z-10">
                    "Nimtec transformed our business with an exceptional mobile solution. User engagement increased by 250% post-launch, with significantly higher conversion and retention rates."
                  </blockquote>
                  <div className="mt-4 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      MR
                    </div>
                    <div className="ml-3">
                      <div className="font-medium text-gray-900">Michael Rodriguez</div>
                      <div className="text-sm text-gray-500">Chief Digital Officer, TechVision</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="rounded-xl overflow-hidden shadow-xl mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" 
                    alt="Mobile app design process" 
                    className="w-full h-[260px] object-cover"
                  />
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-primary/5 rounded-2xl p-8 border border-gray-100 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Our Mobile Development Approach</h3>
                <ul className="space-y-4">
                  {[
                      { step: "Discovery & Strategy", description: "Aligning mobile solutions with your business objectives", timeline: "1-2 weeks" },
                    { step: "UX/UI Design", description: "Creating intuitive, engaging user experiences", timeline: "2-3 weeks" },
                      { step: "Development & Engineering", description: "Building with optimal technology stack for your needs", timeline: "4-8 weeks" },
                      { step: "Quality Assurance", description: "Comprehensive testing across devices and operating systems", timeline: "1-2 weeks" },
                      { step: "Deployment & Optimization", description: "Launching with app store optimization strategies", timeline: "1 week" },
                      { step: "Ongoing Evolution", description: "Continuous improvement based on user feedback and analytics", timeline: "Ongoing" }
                  ].map((item, index) => (
                    <li key={index} className="flex group feature-card">
                      <div className="mr-4 text-primary feature-icon-container">
                        <CheckCircle className="w-6 h-6 group-hover:text-primary/80" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="font-semibold text-gray-900">{item.step}</h4>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{item.timeline}</span>
                        </div>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Technologies Section */}
          <section className="mb-20 py-16 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
            
            <div className="text-center mb-12 relative z-10">
              <span className="px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4 inline-block">
                TECHNOLOGY EXPERTISE
              </span>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Cutting-Edge <span className="gradient-text">Mobile Technologies</span></h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We leverage the latest mobile frameworks and tools to build high-performance, feature-rich applications that exceed user expectations.
              </p>
            </div>

            <div className="relative mx-auto mb-16 max-w-5xl px-6">
              <img 
                src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Mobile development team working" 
                className="w-full h-[280px] object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent rounded-xl flex items-center">
                <div className="p-8 max-w-md">
                  <h3 className="text-2xl font-bold text-white mb-3">Full-Stack Mobile Excellence</h3>
                  <p className="text-white/90">
                    Our engineers excel in both frontend and backend mobile development, creating seamless, integrated experiences.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 relative z-10">
              {[
                {
                  name: "React Native",
                  description: "Cross-platform development with near-native performance and exceptional code reusability",
                  icon: <Code className="text-primary w-8 h-8" />,
                  projects: 56,
                  expertise: "Expert",
                  stats: {
                    performance: 92,
                    usage: 78,
                    satisfaction: 94
                  },
                  image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                },
                {
                  name: "Flutter",
                  description: "Google's UI toolkit for beautifully animated, natively compiled applications",
                  icon: <Layout className="text-primary w-8 h-8" />,
                  projects: 42,
                  expertise: "Advanced",
                  stats: {
                    performance: 94,
                    usage: 68,
                    satisfaction: 90
                  },
                  image: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                },
                {
                  name: "Swift",
                  description: "Apple's powerful, intuitive language for iOS with comprehensive platform integration",
                  icon: <Zap className="text-primary w-8 h-8" />,
                  projects: 64,
                  expertise: "Expert",
                  stats: {
                    performance: 96,
                    usage: 62,
                    satisfaction: 92
                  },
                  image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                },
                {
                  name: "Kotlin",
                  description: "Modern, concise language for Android with enhanced safety features and productivity",
                  icon: <Smartphone className="text-primary w-8 h-8" />,
                  projects: 58,
                  expertise: "Expert",
                  stats: {
                    performance: 95,
                    usage: 64,
                    satisfaction: 93
                  },
                  image: "https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1039&q=80"
                }
              ].map((tech, index) => (
                <Card 
                  key={index} 
                  className="border border-gray-100 hover:border-primary/30 transition-all duration-300 group feature-card perspective-card overflow-hidden hover:shadow-lg will-change-transform"
                  style={{ willChange: "transform, box-shadow" }}
                >
                  <div className="h-36 overflow-hidden relative">
                    <img 
                      src={tech.image} 
                      alt={tech.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      {tech.expertise}
                    </div>
                  </div>
                  <CardContent className="p-5 card-inner">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 bg-primary/10 rounded-lg">{tech.icon}</div>
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{tech.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">{tech.description}</p>
                    
                    {/* Tech stats visualization - enhanced */}
                    <div className="space-y-3 mb-3">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-500">Performance</span>
                          <span className="font-medium text-gray-700">{tech.stats.performance}%</span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-blue-600"
                            style={{ 
                              width: `${tech.stats.performance}%`,
                              transition: "width 1s ease-in-out",
                              willChange: "width" 
                            }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-500">Market Usage</span>
                          <span className="font-medium text-gray-700">{tech.stats.usage}%</span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-primary/60"
                            style={{ 
                              width: `${tech.stats.usage}%`,
                              transition: "width 1s ease-in-out",
                              willChange: "width"
                            }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-500">Satisfaction</span>
                          <span className="font-medium text-gray-700">{tech.stats.satisfaction}%</span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary/80 to-blue-400"
                            style={{ 
                              width: `${tech.stats.satisfaction}%`,
                              transition: "width 1s ease-in-out",
                              willChange: "width"
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
                      <div className="text-xs font-medium text-primary/80">
                        {tech.projects}+ Projects
                      </div>
                      <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
                        <FileCode className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Additional technologies */}
            <div className="mt-12 flex flex-wrap justify-center gap-3 px-6 relative z-10">
              <h4 className="w-full text-center text-gray-700 font-medium mb-4">Additional Technologies & Tools</h4>
              {[
                "Firebase", "GraphQL", "App Store Connect", "Google Play Console", "Apple Pay", 
                "Google Pay", "Push Notifications", "AR Kit", "Maps Integration", "Analytics",
                "Authentication", "Biometrics", "Offline Storage", "CI/CD", "Automated Testing"
              ].map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="tech-badge bg-gray-100 text-gray-700 py-1.5 px-3 hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </section>

          {/* App Types */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Mobile Solutions We Deliver</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We develop a wide range of mobile applications tailored to your specific industry needs and business objectives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "E-commerce Applications",
                  description: "Feature-rich shopping experiences with secure payment processing, personalized recommendations, and seamless checkout flows.",
                  badges: ["Shopping Cart", "Payment Integration", "User Accounts"],
                  icon: <BarChart className="text-primary w-8 h-8" />,
                  clients: "32% of clients",
                  image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                },
                {
                  title: "Enterprise Mobility",
                  description: "Custom business solutions that streamline operations, improve productivity, and provide valuable real-time data insights.",
                  badges: ["Secure Access", "Data Synchronization", "Offline Capability"],
                  icon: <Shield className="text-primary w-8 h-8" />,
                  clients: "28% of clients",
                  image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                },
                {
                  title: "Social Networking",
                  description: "Engaging platforms that connect users, facilitate content sharing, and build vibrant communities around shared interests.",
                  badges: ["User Profiles", "Real-time Chat", "Content Sharing"],
                  icon: <Users className="text-primary w-8 h-8" />,
                  clients: "18% of clients",
                  image: "https://images.unsplash.com/photo-1573152143286-0c422b4d2175?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                },
                {
                  title: "Health & Fitness",
                  description: "Innovative applications that track health metrics, provide personalized workout plans, and encourage healthy lifestyle habits.",
                  badges: ["Activity Tracking", "Progress Monitoring", "Personalization"],
                  icon: <TrendingUp className="text-primary w-8 h-8" />,
                  clients: "15% of clients",
                  image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                },
                {
                  title: "On-Demand Services",
                  description: "Sophisticated platforms connecting service providers with customers for food delivery, transportation, and home services.",
                  badges: ["Location Tracking", "Real-time Updates", "Booking System"],
                  icon: <Zap className="text-primary w-8 h-8" />,
                  clients: "22% of clients",
                  image: "https://images.unsplash.com/photo-1571867424488-4565932edb41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                },
                {
                  title: "Educational Platforms",
                  description: "Interactive learning experiences with progress tracking, assessments, and engaging multimedia content for students of all ages.",
                  badges: ["Interactive Content", "Progress Tracking", "Assessments"],
                  icon: <FileCode className="text-primary w-8 h-8" />,
                  clients: "12% of clients",
                  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
                }
              ].map((appType, index) => (
                <Card key={index} className="border border-gray-100 hover:shadow-lg transition-shadow feature-card overflow-hidden">
                  <div className="h-40 overflow-hidden relative">
                    <img 
                      src={appType.image} 
                      alt={appType.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                      <h3 className="text-xl font-bold text-white">{appType.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">{appType.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {appType.badges.map((badge, badgeIndex) => (
                        <Badge key={badgeIndex} variant="secondary" className="bg-primary/10 text-primary">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500 mt-4 flex justify-between items-center pt-3 border-t border-gray-100">
                      <span className="font-medium">{appType.clients}</span>
                      <div className="p-2 bg-primary/5 rounded-full">
                        {appType.icon}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-20 bg-gradient-to-br from-gray-50 to-primary/5 py-16 px-6 rounded-3xl">
            <div className="text-center mb-12">
              <span className="px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4 inline-block">
                CORE CAPABILITIES
              </span>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Distinctive Mobile Features</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our mobile applications include advanced features that provide exceptional experiences and drive engagement.
              </p>
            </div>
            
            <div className="relative mx-auto mb-16 max-w-5xl">
              <img 
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" 
                alt="Mobile app features" 
                className="w-full h-[250px] object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent rounded-xl flex items-center">
                <div className="p-8 max-w-md">
                  <h3 className="text-2xl font-bold text-white mb-3">End-to-End Solutions</h3>
                  <p className="text-white/90">
                    We handle every aspect of mobile app development, from concept to deployment and ongoing optimization.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Cross-platform Development",
                  description: "Build once, deploy everywhere with solutions that work seamlessly across iOS and Android, reducing development time and costs.",
                  icon: <Tablet className="text-white w-6 h-6" />,
                  benefits: ["Faster time-to-market", "Consistent user experience", "Cost-effective development", "Simplified maintenance"],
                  color: "from-blue-500 to-indigo-600"
                },
                {
                  title: "Native iOS & Android",
                  description: "Platform-specific applications that leverage the full capabilities of each operating system for optimal performance and user experience.",
                  icon: <Smartphone className="text-white w-6 h-6" />,
                  benefits: ["Maximum performance", "Platform-specific features", "Optimized UX", "Hardware integration"],
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  title: "App Store Optimization",
                  description: "Maximize visibility and downloads with strategic keyword placement, compelling descriptions, and eye-catching visuals.",
                  icon: <PieChart className="text-white w-6 h-6" />,
                  benefits: ["Increased visibility", "Higher conversion rates", "Competitive analysis", "Ongoing optimization"],
                  color: "from-amber-500 to-orange-600"
                },
                {
                  title: "Engagement Features",
                  description: "Engage users with timely, relevant push notifications, in-app messaging, and personalized content that drives retention.",
                  icon: <Bell className="text-white w-6 h-6" />,
                  benefits: ["Increased retention", "Personalized messaging", "Event-triggered alerts", "Behavioral targeting"],
                  color: "from-rose-500 to-pink-600"
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group will-change-transform"
                  style={{ willChange: "transform, box-shadow" }}
                >
                  <div className="flex items-start">
                    <div className="mr-6 flex-shrink-0">
                      <div 
                        className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}
                        style={{ willChange: "transform" }}
                      >
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">{feature.title}</h3>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <div className="grid grid-cols-2 gap-3">
                      {feature.benefits.map((benefit, i) => (
                          <div 
                            key={i} 
                            className="flex items-center text-sm text-gray-600 p-2 rounded-lg bg-gray-50 group-hover:bg-primary/5 transition-colors"
                          >
                          <CheckCircle className="text-primary w-4 h-4 mr-2 flex-shrink-0" />
                            <span className="font-medium">{benefit}</span>
                          </div>
                      ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Case Studies */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Success Stories</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover how our mobile applications have helped businesses transform their digital presence and achieve remarkable growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  client: "GourmetGo",
                  title: "Streamlined Ordering Experience",
                  description: "Developed a cross-platform delivery app with real-time order tracking, payment processing, and AI-powered recommendations.",
                  results: ["210% increase in mobile orders", "4.9/5 app store rating", "38% higher average order value", "65% user retention rate"],
                  image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1922&q=80",
                  year: 2023
                },
                {
                  client: "FitLife Pro",
                  title: "AI-Powered Fitness Platform",
                  description: "Created an advanced fitness app with personalized workout plans, nutrition tracking, and social community features.",
                  results: ["87% user retention rate", "120,000+ monthly active users", "45% increase in subscription conversions", "32% improved workout adherence"],
                  image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                  year: 2020
                },
                {
                  client: "ShopSmart",
                  title: "Retail Loyalty Ecosystem",
                  description: "Built a comprehensive loyalty platform with personalized offers, rewards tracking, and seamless in-store/online integration.",
                  results: ["45% increase in repeat purchases", "72% digital coupon redemption rate", "34% higher customer lifetime value", "3.2M app downloads"],
                  image: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2095&q=80",
                  year: 2022
                }
              ].map((case_study, index) => (
                <Card 
                  key={index} 
                  className="border border-gray-100 hover:border-primary/20 transition-all duration-300 overflow-hidden hover:shadow-xl group will-change-transform"
                  style={{ willChange: "transform, box-shadow" }}
                >
                  <div className="h-52 overflow-hidden relative">
                    <img 
                      src={case_study.image} 
                      alt={case_study.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ willChange: "transform" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                      <div className="transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                        <div className="text-sm font-medium text-white bg-primary rounded-full px-3 py-1 w-fit mb-2 shadow-lg">
                        {case_study.client}
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-primary-50 transition-colors">{case_study.title}</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-5">{case_study.description}</p>
                    <div className="bg-gray-50 rounded-xl p-4 group-hover:bg-primary/5 transition-colors">
                      <div className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Star className="w-4 h-4 text-primary mr-2" />
                        <span>Key Results:</span>
                      </div>
                      <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                        {case_study.results.map((result, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-start bg-white p-2 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300"
                          >
                            <CheckCircle className="text-primary w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700 font-medium">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-5 pt-3 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-500">
                        <Smartphone className="w-4 h-4 mr-2" />
                        <span>Launched: {case_study.year}</span>
                      </div>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors">Case Study</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Testimonial */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 flex flex-col justify-center">
                  <div className="text-primary mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>
                </div>
                  <blockquote className="text-xl text-gray-600 mb-6">
                    "Working with Nimtec on our mobile app was transformative for our business. They understood our vision and delivered a beautiful, high-performing application that exceeded our expectations. The results speak for themselves – our user engagement metrics have tripled, and we've seen a significant increase in customer satisfaction."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-4">
                      DP
                    </div>
                    <div>
                  <div className="font-bold text-gray-900">David Park</div>
                      <div className="text-gray-500">CEO, GourmetGo</div>
                    </div>
                  </div>
                </div>
                <div className="relative h-full min-h-[300px]">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                    alt="Mobile app in use" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </ServiceLayout>
  );
} 