import ServiceLayout from "./ServiceLayout";
import { Settings, Code, Database, Network, CheckCircle, Share2, Server, Lock, Globe, Zap, LineChart, Clock, Shield, AlertCircle, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ApiDevelopmentPage() {
  return (
    <ServiceLayout 
      title="API Development" 
      description="Robust, secure, and well-documented APIs that power your applications and enable seamless integrations."
      icon={<Settings className="text-white w-10 h-10" />}
    >
      <div className="py-16 animated-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview Section with Stats */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                <span className="gradient-text">API Development Excellence</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                In today's interconnected digital ecosystem, robust APIs are the foundation of modern software architecture.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {[
                  { value: "250+", label: "APIs Developed", icon: <Code className="text-primary w-6 h-6" /> },
                  { value: "99.9%", label: "Uptime Guarantee", icon: <Server className="text-primary w-6 h-6" /> },
                  { value: "40%", label: "Faster Integration", icon: <Zap className="text-primary w-6 h-6" /> }
                ].map((stat, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transform transition-transform hover:scale-105">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-14 h-14 gradient-bg rounded-full flex items-center justify-center shadow-lg">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  At Nimtec, we specialize in developing high-performance, secure, and scalable APIs that enable seamless integration between systems and services.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Whether you need <span className="highlight-text">RESTful APIs</span>, <span className="highlight-text">GraphQL endpoints</span>, or <span className="highlight-text">microservices architecture</span>, our experienced development team designs and implements solutions that meet your specific business requirements while adhering to industry best practices.
                </p>
                <p className="text-lg text-gray-600">
                  Our API development approach focuses on creating well-documented, developer-friendly interfaces that are easy to integrate, maintain, and scale as your business grows.
                </p>
                
                {/* Client logos */}
                <div className="mt-10">
                  <p className="text-sm text-gray-500 mb-4">TRUSTED BY INDUSTRY LEADERS</p>
                  <div className="grid grid-cols-3 gap-6">
                    {[
                      "Microsoft", "IBM", "Amazon", "Salesforce", "Oracle", "SAP"
                    ].map((client, index) => (
                      <div key={index} className="bg-gray-100 py-2 px-3 rounded text-center text-gray-600 text-sm">
                        {client}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Our API Development Process</h3>
                <ul className="space-y-4">
                  {[
                    { step: "Requirements Analysis", description: "Understanding your integration needs and business processes", days: "3-5 days" },
                    { step: "API Design & Architecture", description: "Creating optimal endpoint structures and data models", days: "5-10 days" },
                    { step: "Security Implementation", description: "Ensuring robust authentication and authorization", days: "3-7 days" },
                    { step: "Development & Testing", description: "Building and validating API functionality", days: "10-20 days" },
                    { step: "Documentation & SDK Creation", description: "Providing comprehensive guides and client libraries", days: "5-8 days" },
                    { step: "Deployment & Monitoring", description: "Ensuring reliability, performance, and continuous improvement", days: "2-5 days" }
                  ].map((item, index) => (
                    <li key={index} className="flex group feature-card">
                      <div className="mr-4 text-primary feature-icon-container">
                        <CheckCircle className="w-6 h-6 group-hover:text-primary/80" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="font-semibold text-gray-900">{item.step}</h4>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{item.days}</span>
                        </div>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
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
                CUTTING-EDGE STACK
              </span>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Technologies We <span className="gradient-text">Excel In</span></h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We leverage cutting-edge technologies to build APIs that are performant, secure, and scalable for startups and enterprises alike.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 relative z-10">
              {[
                {
                  name: "Node.js",
                  description: "High-performance JavaScript runtime for building scalable API servers",
                  icon: <Code className="text-primary w-8 h-8" />,
                  projects: 78,
                  expertise: "Advanced",
                  stats: {
                    performance: 92,
                    usage: 78,
                    satisfaction: 88
                  }
                },
                {
                  name: "Python",
                  description: "Versatile language with powerful frameworks like Django REST and FastAPI",
                  icon: <Settings className="text-primary w-8 h-8" />,
                  projects: 64,
                  expertise: "Expert",
                  stats: {
                    performance: 85,
                    usage: 65,
                    satisfaction: 92
                  }
                },
                {
                  name: "Go",
                  description: "Efficient, concurrent programming language ideal for high-performance APIs",
                  icon: <Server className="text-primary w-8 h-8" />,
                  projects: 42,
                  expertise: "Advanced",
                  stats: {
                    performance: 98,
                    usage: 45,
                    satisfaction: 90
                  }
                },
                {
                  name: "Express",
                  description: "Minimal and flexible Node.js web application framework for APIs",
                  icon: <Network className="text-primary w-8 h-8" />,
                  projects: 86,
                  expertise: "Expert",
                  stats: {
                    performance: 88,
                    usage: 82,
                    satisfaction: 85
                  }
                }
              ].map((tech, index) => (
                <Card key={index} className="border border-gray-100 hover:border-primary/20 transition-all duration-300 group feature-card perspective-card">
                  <CardContent className="p-6 card-inner">
                    <div className="mb-4 feature-icon-container">{tech.icon}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{tech.name}</h3>
                    <p className="text-gray-600 mb-4">{tech.description}</p>
                    
                    {/* Tech stats visualization */}
                    <div className="space-y-3 mb-4">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-500">Performance</span>
                          <span className="font-medium text-gray-700">{tech.stats.performance}%</span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-primary/60"
                            style={{ width: `${tech.stats.performance}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-500">Startup Usage</span>
                          <span className="font-medium text-gray-700">{tech.stats.usage}%</span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary/80 to-primary/40"
                            style={{ width: `${tech.stats.usage}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-500">Developer Satisfaction</span>
                          <span className="font-medium text-gray-700">{tech.stats.satisfaction}%</span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary/60 to-primary/30"
                            style={{ width: `${tech.stats.satisfaction}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">{tech.projects} Projects</span>
                      <Badge variant="outline" className="bg-primary/5">{tech.expertise}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Additional technologies */}
            <div className="mt-12 flex flex-wrap justify-center gap-3 px-6 relative z-10">
              <h4 className="w-full text-center text-gray-700 font-medium mb-4">Additional Technologies & Tools</h4>
              {[
                "AWS Lambda", "Azure Functions", "GraphQL", "REST", "OpenAPI", "Swagger", 
                "JWT", "OAuth 2.0", "MongoDB", "PostgreSQL", "Redis", "RabbitMQ",
                "Docker", "Kubernetes", "Terraform", "GitHub Actions"
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

          {/* API Types */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Types of APIs We Develop</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "RESTful APIs",
                  description: "Stateless, resource-oriented interfaces that follow REST architectural principles for maximum compatibility and ease of use.",
                  badges: ["Resource-based", "Stateless", "Cacheable"],
                  icon: <Globe className="text-primary w-8 h-8" />,
                  clients: "85% of clients"
                },
                {
                  title: "GraphQL APIs",
                  description: "Query language for APIs that enables clients to request exactly the data they need, reducing over-fetching and under-fetching.",
                  badges: ["Single Endpoint", "Strongly Typed", "Flexible Queries"],
                  icon: <Database className="text-primary w-8 h-8" />,
                  clients: "40% of clients"
                },
                {
                  title: "Microservices",
                  description: "Decomposed API architecture with independent, specialized services that can be developed, deployed, and scaled separately.",
                  badges: ["Scalable", "Resilient", "Domain-focused"],
                  icon: <Share2 className="text-primary w-8 h-8" />,
                  clients: "55% of clients"
                },
                {
                  title: "Webhook APIs",
                  description: "Event-driven interfaces that send real-time notifications to client applications when specific events occur.",
                  badges: ["Event-driven", "Real-time", "Asynchronous"],
                  icon: <Zap className="text-primary w-8 h-8" />,
                  clients: "30% of clients"
                },
                {
                  title: "Payment APIs",
                  description: "Secure interfaces for processing transactions, managing subscriptions, and handling financial operations.",
                  badges: ["PCI Compliant", "Secure", "Transactional"],
                  icon: <Lock className="text-primary w-8 h-8" />,
                  clients: "25% of clients"
                },
                {
                  title: "Integration APIs",
                  description: "Custom interfaces designed to connect disparate systems and enable seamless data exchange between platforms.",
                  badges: ["Interoperability", "Data Transformation", "System Connectors"],
                  icon: <Settings className="text-primary w-8 h-8" />,
                  clients: "60% of clients"
                }
              ].map((apiType, index) => (
                <Card key={index} className="border border-gray-100 hover:shadow-lg transition-shadow feature-card overflow-hidden">
                  <div className="h-1.5 bg-gradient-to-r from-primary to-primary/60"></div>
                  <CardContent className="p-6 pt-8">
                    <div className="flex items-center mb-4">
                      <div className="mr-3 feature-icon-container">
                        {apiType.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{apiType.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{apiType.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {apiType.badges.map((badge, badgeIndex) => (
                        <Badge key={badgeIndex} variant="secondary" className="bg-primary/10 text-primary">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500 mt-4">
                      <span className="font-medium">{apiType.clients}</span> choose this option
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-20 bg-gray-50 py-16 px-6 rounded-3xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                {
                  title: "RESTful APIs",
                  description: "Well-structured, resource-oriented interfaces following REST architectural principles for maximum compatibility and ease of use.",
                  icon: <Network className="text-white w-6 h-6" />,
                  benefits: ["Industry standard compatibility", "Scalable architecture", "Excellent caching support"]
                },
                {
                  title: "GraphQL",
                  description: "Flexible query language enabling clients to request exactly the data they need, optimizing performance and developer experience.",
                  icon: <Database className="text-white w-6 h-6" />,
                  benefits: ["Reduced over-fetching", "Single endpoint simplicity", "Strong typing system"]
                },
                {
                  title: "Microservices",
                  description: "Domain-focused, independently deployable services that enable scalability, resilience, and team autonomy.",
                  icon: <Share2 className="text-white w-6 h-6" />,
                  benefits: ["Independent scaling", "Technology flexibility", "Fault isolation"]
                },
                {
                  title: "API Documentation",
                  description: "Comprehensive, interactive documentation with Swagger/OpenAPI that makes your APIs easy to understand and integrate.",
                  icon: <Code className="text-white w-6 h-6" />,
                  benefits: ["Interactive testing", "Code generation", "Standardized specification"]
                }
              ].map((feature, index) => (
                <div key={index} className="flex feature-card bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="mr-6">
                    <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center shadow-lg feature-icon-container">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 mb-3">{feature.description}</p>
                    <ul className="space-y-1">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="text-primary w-4 h-4 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Security Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">API Security & Performance</h2>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4 feature-icon-container">
                      <Lock className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Security First Approach</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "OAuth 2.0 and JWT authentication",
                      "Role-based access control (RBAC)",
                      "API key management and rotation",
                      "Input validation and sanitization",
                      "Protection against common vulnerabilities (OWASP Top 10)"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="text-primary w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <div className="flex items-center text-sm text-primary font-medium mb-2">
                      <Lock className="w-4 h-4 mr-2" />
                      Security Certification
                    </div>
                    <p className="text-sm text-gray-600">
                      Our API development practices are certified by industry security standards including ISO 27001 and SOC 2 Type II.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4 feature-icon-container">
                      <Server className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Performance Optimization</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Response caching and compression",
                      "Rate limiting and throttling",
                      "Database query optimization",
                      "Asynchronous processing for heavy operations",
                      "Load balancing and horizontal scaling"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="text-primary w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <div className="flex items-center text-sm text-primary font-medium mb-2">
                      <LineChart className="w-4 h-4 mr-2" />
                      Performance Metrics
                    </div>
                    <p className="text-sm text-gray-600">
                      Our APIs consistently achieve sub-100ms response times and can handle thousands of requests per second with proper scaling.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Performance chart */}
              <div className="mt-10 p-6 bg-white rounded-xl border border-gray-100">
                <h4 className="text-lg font-medium mb-4 text-gray-900">API Performance Benchmarks</h4>
                <div className="h-16 flex items-end justify-between gap-1">
                  {[85, 40, 65, 90, 75, 60, 80, 95, 70, 85, 90, 100].map((height, i) => (
                    <div 
                      key={i} 
                      className="bg-gradient-to-t from-primary to-primary/60 rounded-t w-full"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                </div>
                <div className="flex justify-between mt-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                    <span className="text-gray-600">Average Response Time (ms)</span>
                  </div>
                  <span className="font-medium text-gray-900">67ms</span>
                </div>
              </div>
            </div>
          </section>

          {/* Case Studies */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Success Stories</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how our API solutions have helped businesses across industries achieve their goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  client: "Financial Services Provider",
                  title: "Payment Processing API",
                  description: "Developed a secure, PCI-compliant payment processing API handling millions of transactions monthly.",
                  results: "99.99% uptime, 200ms average response time, 40% reduction in integration time for partners",
                  logo: "🏦",
                  year: 2019
                },
                {
                  client: "E-commerce Platform",
                  title: "Product Catalog API",
                  description: "Built a high-performance GraphQL API for product catalog management with advanced filtering and search capabilities.",
                  results: "65% reduction in data transfer, 3x faster page loads, improved mobile experience",
                  logo: "🛒",
                  year: 2020
                },
                {
                  client: "Healthcare Provider",
                  title: "Medical Records Integration",
                  description: "Created a HIPAA-compliant API for secure medical records exchange between different healthcare systems.",
                  results: "Streamlined patient data access, 70% reduction in administrative workload, enhanced data security",
                  logo: "🏥",
                  year: 2021
                }
              ].map((case_study, index) => (
                <Card key={index} className="border border-gray-100 hover:shadow-lg transition-shadow feature-card testimonial-card">
                  <CardContent className="p-6 relative">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="text-sm text-primary font-semibold mb-1">{case_study.client}</div>
                        <h3 className="text-xl font-bold text-gray-900">{case_study.title}</h3>
                      </div>
                      <div className="text-4xl">{case_study.logo}</div>
                    </div>
                    <p className="text-gray-600 mb-4">{case_study.description}</p>
                    <div className="bg-primary/5 p-3 rounded-lg">
                      <div className="font-semibold text-gray-900 mb-1">Results:</div>
                      <div className="text-gray-600">{case_study.results}</div>
                    </div>
                    <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{case_study.year}</span>
                      </div>
                      <Badge variant="outline" className="bg-primary/5">Case Study</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Testimonial */}
            <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-4xl">
                  👨‍💼
                </div>
                <div>
                  <blockquote className="text-xl italic text-gray-600 mb-6">
                    "Nimtec's API development team delivered a solution that not only met our technical requirements but exceeded our expectations in terms of performance and security. Their documentation was exceptional, making it easy for our partners to integrate."
                  </blockquote>
                  <div className="font-bold text-gray-900">Michael Chen</div>
                  <div className="text-gray-500">CTO, Global Payments Inc.</div>
                </div>
              </div>
            </div>
          </section>
          
          {/* FAQ Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "How long does it take to develop a custom API?",
                  answer: "Development timelines vary based on complexity, but most API projects take between 4-12 weeks from requirements gathering to production deployment. We provide detailed timelines during our initial consultation."
                },
                {
                  question: "Do you provide API documentation?",
                  answer: "Yes, we provide comprehensive documentation using industry-standard tools like Swagger/OpenAPI. This includes interactive documentation, sample code, and SDKs for popular programming languages."
                },
                {
                  question: "How do you ensure API security?",
                  answer: "We implement multiple security layers including OAuth 2.0/JWT authentication, role-based access control, API keys, rate limiting, and input validation. All our APIs undergo security audits and penetration testing."
                },
                {
                  question: "Can you integrate with our existing systems?",
                  answer: "Absolutely. We specialize in creating APIs that integrate with legacy systems, third-party services, and modern cloud platforms. Our team has experience with a wide range of integration scenarios."
                },
                {
                  question: "Do you offer API maintenance services?",
                  answer: "Yes, we provide ongoing maintenance, monitoring, and support services to ensure your APIs remain secure, performant, and up-to-date. We offer flexible SLAs based on your business needs."
                },
                {
                  question: "What payment models do you offer?",
                  answer: "We offer both fixed-price project-based pricing and monthly retainer options. For complex projects, we may recommend a phased approach with milestones and payments tied to deliverables."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold mb-3 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Performance Metrics Section */}
          <section className="mb-20 py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-80"></div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4 inline-block">
                  PERFORMANCE FOCUSED
                </span>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">API <span className="gradient-text">Performance Metrics</span></h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our APIs are built for speed, reliability, and scalability - critical factors for startup success.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Response Time Metrics */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                      <Clock className="text-primary w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Response Time</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {[
                      { label: "Average Response", value: "67ms", target: "< 100ms", status: "success" },
                      { label: "95th Percentile", value: "125ms", target: "< 200ms", status: "success" },
                      { label: "99th Percentile", value: "210ms", target: "< 300ms", status: "success" }
                    ].map((metric, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-600">{metric.label}</span>
                          <div className="flex items-center">
                            <span className="font-bold text-gray-900 mr-2">{metric.value}</span>
                            <span className="text-xs text-gray-500">Target: {metric.target}</span>
                          </div>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full animate-pulse ${
                              metric.status === 'success' ? 'bg-green-500' : 'bg-yellow-500'
                            }`}
                            style={{ width: '70%' }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Industry benchmark: 250ms</span>
                      <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                        Exceeding Targets
                      </Badge>
                    </div>
                  </div>
                </div>
                
                {/* Throughput Metrics */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                      <Zap className="text-primary w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Throughput & Scalability</h3>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-center mb-2">
                      <div className="text-4xl font-bold text-gray-900 mb-1">10,000+</div>
                      <div className="text-sm text-gray-600">Requests per second</div>
                    </div>
                    
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden mt-4">
                      <div className="h-full w-full bg-gradient-to-r from-primary/60 to-primary relative">
                        <div className="absolute inset-0 bg-stripes opacity-20 animate-slide"></div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between mt-1 text-xs text-gray-500">
                      <span>0</span>
                      <span>5,000</span>
                      <span>10,000+</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { label: "Concurrent Users", value: "5,000+" },
                      { label: "Avg. CPU Usage", value: "30%" },
                      { label: "Auto-scaling Time", value: "< 30s" },
                      { label: "Data Transfer", value: "Optimized" }
                    ].map((item, i) => (
                      <div key={i} className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-sm text-gray-500">{item.label}</div>
                        <div className="font-semibold text-gray-900">{item.value}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Horizontal & vertical scaling</span>
                      <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                        Enterprise Ready
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Reliability Metrics */}
              <div className="mt-10 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                    <Shield className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Reliability & Uptime</h3>
                    <p className="text-gray-600">
                      Our APIs maintain exceptional reliability with comprehensive monitoring and redundancy.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  {[
                    { label: "Uptime SLA", value: "99.99%", icon: <Server className="w-5 h-5 text-green-500" /> },
                    { label: "Error Rate", value: "< 0.01%", icon: <AlertCircle className="w-5 h-5 text-green-500" /> },
                    { label: "Recovery Time", value: "< 5 min", icon: <RefreshCw className="w-5 h-5 text-green-500" /> },
                    { label: "Data Durability", value: "99.999%", icon: <Database className="w-5 h-5 text-green-500" /> }
                  ].map((metric, i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="flex justify-center mb-2">{metric.icon}</div>
                      <div className="font-bold text-gray-900 text-lg">{metric.value}</div>
                      <div className="text-sm text-gray-500">{metric.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-center mt-6 pt-4 border-t border-gray-100">
                  <div className="text-sm text-center max-w-2xl">
                    <span className="font-medium text-primary">Startup Advantage:</span> Our reliability metrics help you build investor and customer confidence with enterprise-grade infrastructure from day one.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </ServiceLayout>
  );
} 