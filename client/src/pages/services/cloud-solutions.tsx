import ServiceLayout from "./ServiceLayout";
import { Cloud, Server, CheckCircle, Database, Lock, BarChart, Settings, GitBranch, Monitor, Network, Shield, Cpu, LucideTerminal, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CloudSolutionsPage() {
  return (
    <ServiceLayout 
      title="Cloud Solutions" 
      description="Enterprise-grade cloud architecture and DevOps solutions ensuring optimal performance, scalability, and security for your business applications."
      icon={<Cloud className="text-white w-10 h-10" />}
    >
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Cloud Infrastructure Excellence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  In today's digital landscape, robust and scalable cloud infrastructure is essential for business growth and innovation. At Nimtec, we design and implement <span className="text-primary font-medium">cutting-edge cloud solutions</span> that provide the reliability, performance, and security your applications demand.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our specialized team of cloud architects and DevOps engineers work collaboratively to create optimized environments that scale seamlessly with your business, significantly reduce operational costs, and accelerate your development cycles.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  From infrastructure as code to continuous integration/continuous deployment pipelines, we implement industry best practices that ensure your systems are resilient, secure, and easily maintainable for the long term.
                </p>
                
                <div className="rounded-xl overflow-hidden shadow-lg mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2034&q=80" 
                    alt="Cloud infrastructure visualization" 
                    className="w-full h-[220px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div>
                <div className="rounded-xl overflow-hidden shadow-xl mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                    alt="Data center servers" 
                    className="w-full h-[260px] object-cover"
                  />
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-primary/5 rounded-2xl p-8 border border-gray-100 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Our Cloud Approach</h3>
                <ul className="space-y-4">
                  {[
                      { step: "Assessment & Strategy", description: "Evaluating current infrastructure and aligning with business objectives", timeline: "1-2 weeks" },
                      { step: "Architecture Design", description: "Creating scalable, resilient cloud architecture blueprints", timeline: "2-3 weeks" },
                      { step: "Implementation", description: "Setting up infrastructure with security and performance in mind", timeline: "3-6 weeks" },
                      { step: "DevOps Integration", description: "Implementing CI/CD pipelines and automation processes", timeline: "2-4 weeks" },
                      { step: "Monitoring & Optimization", description: "Ensuring optimal performance and cost-efficiency", timeline: "Ongoing" },
                      { step: "Continuous Support", description: "Providing expert management and improvements", timeline: "Ongoing" }
                  ].map((item, index) => (
                      <li key={index} className="flex group hover:bg-white hover:shadow-sm p-2 rounded-lg transition-all">
                      <div className="mr-4 text-primary">
                          <CheckCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
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
          <section className="mb-20">
            <div className="text-center mb-12">
              <span className="px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4 inline-block">
                TECH STACK
              </span>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Advanced Cloud Technologies</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We leverage industry-leading tools and platforms to build resilient, scalable, and secure cloud infrastructure for your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Docker",
                  description: "Containerization platform enabling consistent application deployment across environments with isolated dependencies",
                  icon: <Server className="text-primary w-8 h-8" />,
                  features: ["Application packaging", "Environment consistency", "Resource isolation"],
                  image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                },
                {
                  name: "Kubernetes",
                  description: "Container orchestration system for automated deployment, scaling, and management of containerized applications",
                  icon: <Settings className="text-primary w-8 h-8" />,
                  features: ["Auto-scaling", "Self-healing", "Service discovery"],
                  image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                },
                {
                  name: "Terraform",
                  description: "Infrastructure as code tool for building, changing, and versioning cloud infrastructure efficiently",
                  icon: <Cloud className="text-primary w-8 h-8" />,
                  features: ["Infrastructure as code", "Multi-cloud support", "Version control"],
                  image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                },
                {
                  name: "CI/CD Tools",
                  description: "Automation servers and pipelines for building, testing, and deploying software with increased reliability",
                  icon: <GitBranch className="text-primary w-8 h-8" />,
                  features: ["Automated deployment", "Continuous testing", "Rapid iterations"],
                  image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1488&q=80"
                }
              ].map((tech, index) => (
                <Card key={index} className="border border-gray-100 hover:border-primary/20 transition-all duration-300 group overflow-hidden">
                  <div className="h-36 overflow-hidden">
                    <img 
                      src={tech.image} 
                      alt={tech.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-md">{tech.icon}</div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{tech.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">{tech.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {tech.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-primary/5 text-primary/80">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Cloud Platforms */}
          <section className="mb-20 py-16 bg-gradient-to-br from-gray-50 to-primary/5 rounded-3xl px-6">
            <div className="text-center mb-12">
              <span className="px-4 py-1.5 text-sm font-medium bg-white text-primary rounded-full mb-4 inline-block shadow-sm">
                MULTI-CLOUD EXPERTISE
              </span>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Cloud Platforms We Support</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide expert implementation, management, and optimization services across all major cloud platforms.
              </p>
            </div>
            
            <div className="relative mx-auto mb-16 max-w-5xl">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" 
                alt="Global cloud network" 
                className="w-full h-[280px] object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent rounded-xl flex items-center">
                <div className="p-8 max-w-md">
                  <h3 className="text-2xl font-bold text-white mb-3">Global Cloud Infrastructure</h3>
                  <p className="text-white/90">
                    Deploy your applications in multiple regions for improved performance, reliability, and disaster recovery.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden bg-white">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                    alt="AWS Cloud Infrastructure" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <div className="h-16 flex items-center mb-2">
                      <div className="w-12 h-12 text-[#FF9900] bg-white rounded-lg flex items-center justify-center shadow-md">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                        <path d="M18.75 11.25H15a.75.75 0 0 1-.75-.75V7.5a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75zM15.75 9h2.25v1.5h-2.25V9zM18.75 16.5H15a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 .75.75h3.75a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75zm-.75 3h-2.25V18h2.25v1.5zM9 11.25H5.25a.75.75 0 0 1-.75-.75V7.5a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75zM6 9h2.25v1.5H6V9zM9 16.5H5.25a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 .75.75H9a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75zm-.75 3H6V18h2.25v1.5z" />
                      </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Amazon Web Services (AWS)</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive cloud services including compute power, storage, databases, and more with global reach and reliability.
                  </p>
                  <div className="space-y-2">
                    {["EC2, S3, RDS, Lambda", "CloudFront, Route 53", "ECS, EKS, Fargate"].map((service, idx) => (
                      <div key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end mt-4">
                    <Badge variant="outline" className="bg-[#FF9900]/10 text-[#FF9900] border-[#FF9900]/20">
                      Advanced Partner
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden bg-white">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80" 
                    alt="Microsoft Azure Cloud" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <div className="h-16 flex items-center mb-2">
                      <div className="w-12 h-12 text-[#0078D4] bg-white rounded-lg flex items-center justify-center shadow-md">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                        <path d="M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12z" />
                        <path fill="white" d="M10.5 8.25L6 14.25h3V18l4.5-6h-3z" />
                      </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Microsoft Azure</h3>
                  <p className="text-gray-600 mb-4">
                    Enterprise-grade cloud computing platform with integrated services for modern application development and management.
                  </p>
                  <div className="space-y-2">
                    {["Virtual Machines, App Service", "Azure SQL, Cosmos DB", "Azure Kubernetes Service"].map((service, idx) => (
                      <div key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end mt-4">
                    <Badge variant="outline" className="bg-[#0078D4]/10 text-[#0078D4] border-[#0078D4]/20">
                      Silver Partner
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden bg-white">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" 
                    alt="Google Cloud Platform" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <div className="h-16 flex items-center mb-2">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                        <svg viewBox="0 0 24 24" className="w-10 h-10">
                        <path fill="#4285F4" d="M12 11v2h2v-2h-2zm-1-1h4v4h-4v-4z" />
                        <path fill="#EA4335" d="M17 7h-2v2h2V7zm-1-1v4h-4V6h4z" />
                        <path fill="#FBBC05" d="M12 17v-2h-2v2h2zm-1 1H7v-4h4v4z" />
                        <path fill="#34A853" d="M7 12V7h5v5H7z" />
                        <path fill="#4285F4" d="M17 12h-5v5h5v-5z" />
                      </svg>
                    </div>
                  </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Google Cloud Platform</h3>
                  <p className="text-gray-600 mb-4">
                    Cutting-edge infrastructure with advanced data analytics, machine learning, and networking capabilities.
                  </p>
                  <div className="space-y-2">
                    {["Compute Engine, Cloud Run", "Cloud SQL, BigQuery", "Google Kubernetes Engine"].map((service, idx) => (
                      <div key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end mt-4">
                    <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-200">
                      Certified Partner
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Key Capabilities</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our cloud solutions include powerful features that drive innovation, improve reliability, and optimize costs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Multi-Cloud Expertise",
                  description: "Expert implementation and management across AWS, Azure, and GCP, tailored to your specific business requirements.",
                  icon: <Cloud className="text-white w-6 h-6" />,
                  benefits: ["Best-fit cloud selection", "Avoid vendor lock-in", "Cost optimization"],
                  color: "from-blue-500 to-indigo-600"
                },
                {
                  title: "Auto-scaling Infrastructure",
                  description: "Dynamic resource allocation that automatically adjusts to traffic demands, ensuring optimal performance during peak times.",
                  icon: <BarChart className="text-white w-6 h-6" />,
                  benefits: ["Handle traffic spikes", "Reduce idle capacity", "Pay only for what you use"],
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  title: "CI/CD Implementation",
                  description: "Automated build, test, and deployment processes that accelerate development cycles and improve code quality.",
                  icon: <GitBranch className="text-white w-6 h-6" />,
                  benefits: ["Faster releases", "Reduced errors", "Continuous feedback"],
                  color: "from-amber-500 to-orange-600"
                },
                {
                  title: "Container Orchestration",
                  description: "Efficient management of containerized applications with Kubernetes for improved scalability and resource utilization.",
                  icon: <Database className="text-white w-6 h-6" />,
                  benefits: ["Consistent environments", "Simplified scaling", "Reduced overhead"],
                  color: "from-rose-500 to-pink-600"
                },
                {
                  title: "Infrastructure as Code",
                  description: "Version-controlled infrastructure definitions that enable consistent, repeatable deployments and simplified management.",
                  icon: <LucideTerminal className="text-white w-6 h-6" />,
                  benefits: ["Version control", "Consistent environments", "Automated provisioning"],
                  color: "from-purple-500 to-violet-600"
                },
                {
                  title: "Security & Compliance",
                  description: "Comprehensive security controls and compliance frameworks to protect your data and meet regulatory requirements.",
                  icon: <Shield className="text-white w-6 h-6" />,
                  benefits: ["Data protection", "Regulatory compliance", "Continuous monitoring"],
                  color: "from-cyan-500 to-blue-600"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                  <div className="flex items-start">
                    <div className="mr-6 flex-shrink-0">
                      <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">{feature.title}</h3>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {feature.benefits.map((benefit, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-primary/5 text-primary/80">
                            {benefit}
                          </Badge>
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
              <span className="px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4 inline-block">
                CLIENT SUCCESS
              </span>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Success Stories</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover how our cloud solutions have helped businesses achieve remarkable results and drive digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  client: "E-commerce Platform",
                  title: "Scaling for Black Friday",
                  description: "Implemented auto-scaling infrastructure that handled a 500% traffic increase during peak shopping season.",
                  results: "Zero downtime, 40% cost reduction compared to previous static infrastructure",
                  image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2215&q=80"
                },
                {
                  client: "FinTech Startup",
                  title: "Secure Cloud Migration",
                  description: "Migrated legacy financial systems to AWS with enhanced security controls and compliance measures.",
                  results: "Achieved SOC 2 compliance, 99.99% uptime, 60% faster transaction processing",
                  image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                },
                {
                  client: "SaaS Provider",
                  title: "DevOps Transformation",
                  description: "Implemented CI/CD pipelines and container orchestration for a multi-tenant SaaS application.",
                  results: "Deployment frequency increased from monthly to daily, 70% reduction in bugs reaching production",
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                }
              ].map((case_study, index) => (
                <Card key={index} className="border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={case_study.image} 
                      alt={case_study.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                      <div className="text-sm font-medium text-primary bg-white/90 rounded-full px-3 py-1 w-fit mb-2">
                        {case_study.client}
                      </div>
                      <h3 className="text-xl font-bold text-white">{case_study.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">{case_study.description}</p>
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <div className="font-semibold text-gray-900 mb-1">Results:</div>
                      <div className="text-gray-600">{case_study.results}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Testimonial */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 flex flex-col justify-center">
                <div className="text-primary mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>
                </div>
                <blockquote className="text-xl text-gray-600 mb-6">
                  "Nimtec's cloud expertise transformed our infrastructure. They migrated our systems to a multi-cloud architecture that improved our reliability, reduced costs, and accelerated our development cycles. Their team was professional, knowledgeable, and responsive throughout the entire process."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-4">
                    JS
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Jennifer Smith</div>
                    <div className="text-gray-500">CTO, DataFlow</div>
                  </div>
                </div>
              </div>
              <div className="relative h-full min-h-[300px]">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Cloud engineering team" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
} 