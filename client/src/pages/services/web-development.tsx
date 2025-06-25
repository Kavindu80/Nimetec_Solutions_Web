import ServiceLayout from "./ServiceLayout";
import { Globe, Code, Zap, BarChart, Layers, CheckCircle, Monitor, Cpu, Database, Users, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function WebDevelopmentPage() {
  return (
    <ServiceLayout 
      title="Web Development" 
      description="Enterprise-grade web applications built with cutting-edge technologies, delivering exceptional performance and user experience."
      icon={<Globe className="text-white w-10 h-10" />}
    >
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Web Development Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  At Nimtec, we craft powerful, innovative web solutions that transform your digital presence. Our expert team combines technical prowess with creative excellence to build applications that drive business growth and enhance user engagement.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  From sleek corporate websites to complex enterprise platforms, we deliver tailored solutions that align perfectly with your business objectives. Our development process focuses on clean code, intuitive design, and seamless functionality.
                </p>
                <p className="text-lg text-gray-600">
                  We embrace cutting-edge technologies and industry best practices to ensure your web application is not only visually stunning but also secure, scalable, and future-proof.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-medium">Responsive across all devices</div>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-medium">Lightning-fast performance</div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Web Development Team" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-xl font-bold text-white mb-2">Expert Web Development</h3>
                  <p className="text-white/90">Bringing your vision to life with precision and innovation</p>
                      </div>
              </div>
            </div>
          </section>

          {/* Technologies Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Technologies We Leverage</h2>
            <div className="mb-8">
              <p className="text-lg text-gray-600 max-w-3xl">
                We utilize the latest and most powerful technologies to create web applications that are fast, secure, and scalable. Our tech stack is carefully selected to ensure optimal performance and maintainability.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Frontend Excellence</h3>
                <p className="text-gray-600 mb-6">
                  Our frontend development focuses on creating beautiful, responsive interfaces that provide exceptional user experiences across all devices.
                </p>
                <div className="grid grid-cols-2 gap-6">
              {[
                {
                  name: "React",
                      description: "Component-based UI development",
                      icon: <Code className="text-primary w-6 h-6" />
                },
                {
                  name: "Next.js",
                      description: "Server-side rendering & optimization",
                      icon: <Zap className="text-primary w-6 h-6" />
                    },
                    {
                      name: "TypeScript",
                      description: "Type-safe JavaScript development",
                      icon: <CheckCircle className="text-primary w-6 h-6" />
                    },
                    {
                      name: "Tailwind CSS",
                      description: "Utility-first styling framework",
                      icon: <Layers className="text-primary w-6 h-6" />
                    }
                  ].map((tech, index) => (
                    <div key={index} className="flex flex-col p-4 bg-white rounded-xl shadow-sm">
                      <div className="mb-3">{tech.icon}</div>
                      <h4 className="font-bold text-gray-900">{tech.name}</h4>
                      <p className="text-sm text-gray-600">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Backend Power</h3>
                <p className="text-gray-600 mb-6">
                  Our backend solutions provide robust, scalable foundations that ensure your applications perform reliably under any load.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      name: "Node.js",
                      description: "High-performance JavaScript runtime",
                      icon: <Cpu className="text-primary w-6 h-6" />
                    },
                    {
                      name: "PostgreSQL",
                      description: "Advanced relational database",
                      icon: <Database className="text-primary w-6 h-6" />
                    },
                    {
                      name: "GraphQL",
                      description: "Efficient API query language",
                      icon: <Globe className="text-primary w-6 h-6" />
                    },
                    {
                      name: "Docker",
                      description: "Containerization for consistency",
                      icon: <Layers className="text-primary w-6 h-6" />
                }
              ].map((tech, index) => (
                    <div key={index} className="flex flex-col p-4 bg-white rounded-xl shadow-sm">
                      <div className="mb-3">{tech.icon}</div>
                      <h4 className="font-bold text-gray-900">{tech.name}</h4>
                      <p className="text-sm text-gray-600">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl relative">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Code on screen" 
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center p-12">
                <div className="max-w-lg">
                  <h3 className="text-2xl font-bold text-white mb-3">Modern Development Practices</h3>
                  <p className="text-white/90 text-lg">
                    We follow industry best practices including CI/CD, test-driven development, and agile methodologies to deliver high-quality, maintainable code.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-20">
            <div className="flex flex-col md:flex-row justify-between items-start mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Key Capabilities</h2>
                <p className="text-lg text-gray-600 max-w-2xl">
                  We deliver comprehensive web solutions that address your most complex business challenges while providing exceptional user experiences.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80" 
                  alt="Web development planning" 
                  className="w-full md:w-[300px] h-[200px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Progressive Web Apps",
                  description: "Create fast, responsive applications that work offline and provide native app-like experiences with push notifications and home screen installation.",
                  icon: <Zap className="text-white w-6 h-6" />,
                  color: "from-blue-500 to-indigo-600"
                },
                {
                  title: "E-commerce Solutions",
                  description: "Build powerful online stores with secure payment processing, inventory management, and personalized shopping experiences that drive conversion.",
                  icon: <Globe className="text-white w-6 h-6" />,
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  title: "Custom CMS Platforms",
                  description: "Develop tailored content management systems that give complete control over website content with intuitive interfaces for non-technical users.",
                  icon: <Layers className="text-white w-6 h-6" />,
                  color: "from-amber-500 to-orange-600"
                },
                {
                  title: "Performance Optimization",
                  description: "Ensure lightning-fast loading speeds, smooth interactions, and optimal user experiences across all devices and connection speeds for maximum engagement.",
                  icon: <BarChart className="text-white w-6 h-6" />,
                  color: "from-purple-500 to-violet-600"
                },
                {
                  title: "API Development",
                  description: "Create robust, secure, and well-documented APIs that connect your web applications with other systems and services seamlessly.",
                  icon: <Database className="text-white w-6 h-6" />,
                  color: "from-pink-500 to-rose-600"
                },
                {
                  title: "Accessibility Compliance",
                  description: "Ensure your web applications are accessible to all users, including those with disabilities, meeting WCAG standards and legal requirements.",
                  icon: <Users className="text-white w-6 h-6" />,
                  color: "from-cyan-500 to-blue-600"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className={`bg-gradient-to-r ${feature.color} p-6`}>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Case Studies */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mb-10">
              Our web development expertise has helped businesses across industries achieve remarkable results through innovative digital solutions.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  client: "Global E-commerce Brand",
                  title: "150% Sales Growth with Custom Platform",
                  description: "We developed a high-performance e-commerce platform with AI-powered product recommendations and an optimized checkout process.",
                  results: ["150% increase in online sales", "30% reduction in cart abandonment", "42% improvement in page load speed"],
                  image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                },
                {
                  client: "Financial Services Leader",
                  title: "Secure Client Portal Development",
                  description: "Created an enterprise-grade client portal with advanced security features, real-time data visualization, and seamless integration with legacy systems.",
                  results: ["99.9% uptime performance", "45% increase in client engagement", "68% reduction in support requests"],
                  image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                },
                {
                  client: "Healthcare Innovation Company",
                  title: "Advanced Patient Management System",
                  description: "Built a comprehensive web application for secure patient records management, telemedicine services, and automated appointment scheduling.",
                  results: ["60% reduction in administrative tasks", "95% patient satisfaction rating", "28% increase in appointment bookings"],
                  image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                }
              ].map((case_study, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col h-full">
                  <div className="h-52 overflow-hidden relative">
                    <img 
                      src={case_study.image} 
                      alt={case_study.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                      <div className="text-sm font-medium text-primary bg-white/90 rounded-full px-4 py-1 w-fit mb-2">
                        {case_study.client}
                      </div>
                      <h3 className="text-xl font-bold text-white">{case_study.title}</h3>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-gray-600 mb-6">{case_study.description}</p>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {case_study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="text-primary mr-2 mt-1">
                              <CheckCircle className="w-4 h-4" />
                            </div>
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </ServiceLayout>
  );
} 