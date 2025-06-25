import ServiceLayout from "./ServiceLayout";
import { Wrench, Shield, Clock, BarChart, CheckCircle, Zap, HeartPulse, Gauge, Rocket, TrendingUp, RefreshCw, Server, Code, Database, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function MaintenanceSupportPage() {
  return (
    <ServiceLayout 
      title="Maintenance & Support" 
      description="Comprehensive application maintenance and technical support services to keep your digital assets performing at their best."
      icon={<Wrench className="text-white w-10 h-10" />}
    >
      <div className="py-16 animated-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Key Metrics */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                <span className="gradient-text">Our Proven Track Record</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We've built a reputation for excellence in maintenance and support services across diverse industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { value: "50+", label: "Projects Delivered", icon: <Rocket className="text-primary w-6 h-6" /> },
                { value: "30+", label: "Happy Clients", icon: <Users className="text-primary w-6 h-6" /> },
                { value: "99.9%", label: "Uptime Guarantee", icon: <Gauge className="text-primary w-6 h-6" /> },
                { value: "24/7", label: "Technical Support", icon: <HeartPulse className="text-primary w-6 h-6" /> }
              ].map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform hover:scale-105">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center shadow-lg">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Overview Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Application Maintenance Excellence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  In today's fast-paced digital landscape, your software applications are the backbone of your business operations. Ensuring they remain secure, performant, and aligned with evolving business needs is critical to maintaining <span className="highlight-text">competitive advantage</span> and <span className="highlight-text">user satisfaction</span>.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  At Nimtec, we provide <span className="highlight-text">comprehensive maintenance services</span> that go beyond simple bug fixes. Our proactive approach focuses on continuous improvement, performance optimization, and strategic enhancements that extend the lifespan and value of your digital assets.
                </p>
                <p className="text-lg text-gray-600">
                  With flexible service level agreements, dedicated support teams, and transparent reporting, we ensure your applications receive the attention they need while allowing your internal teams to focus on innovation and growth.
                </p>
                
                {/* Client testimonial */}
                <div className="mt-8 p-5 bg-primary/5 rounded-xl border border-primary/10 relative testimonial-card">
                  <blockquote className="text-gray-600 italic relative z-10">
                    "Nimtec's maintenance team has been instrumental in keeping our platform running smoothly. Their proactive approach has prevented numerous potential issues and significantly improved our system's performance."
                  </blockquote>
                  <div className="mt-4 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      JD
                    </div>
                    <div className="ml-3">
                      <div className="font-medium text-gray-900">James Davidson</div>
                      <div className="text-sm text-gray-500">CTO, TechInnovate</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-[500px]">
                <img 
                  src="/assets/monitoring.webp" 
                  alt="Software engineers working on maintenance"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <div className="text-white font-bold text-xl mb-2">Proactive Maintenance</div>
                  <p className="text-white/80 text-sm">Our team continuously monitors and optimizes your applications to prevent issues before they impact your business.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Service Types */}
          <section className="mb-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-3xl -z-10"></div>
            
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-12">
              <div className="md:col-span-1">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Comprehensive Support Services</h2>
                <p className="text-lg text-gray-600">
                  Our range of maintenance and support services are designed to keep your software running flawlessly while continually improving its performance, security, and user experience.
                </p>
                
                <div className="mt-8 relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Support team collaborating"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Bug Fixing & Error Resolution",
                    description: "Swift identification and resolution of issues that affect your application's functionality and user experience.",
                    icon: <Wrench className="text-primary w-8 h-8" />,
                    features: ["Root cause analysis", "Rapid resolution", "Regression testing"]
                  },
                  {
                    title: "Security Maintenance",
                    description: "Proactive monitoring and patching to protect your application from emerging vulnerabilities and threats.",
                    icon: <Shield className="text-primary w-8 h-8" />,
                    features: ["Security audits", "Patch management", "Vulnerability scanning"]
                  },
                  {
                    title: "Performance Optimization",
                    description: "Continuous monitoring and tuning to ensure your application remains fast and responsive as your user base grows.",
                    icon: <Gauge className="text-primary w-8 h-8" />,
                    features: ["Load testing", "Database optimization", "Code profiling"]
                  },
                  {
                    title: "Technology Updates",
                    description: "Keeping your application's dependencies, libraries, and frameworks up-to-date with the latest versions.",
                    icon: <RefreshCw className="text-primary w-8 h-8" />,
                    features: ["Dependency management", "Framework upgrades", "API version updates"]
                  },
                  {
                    title: "Infrastructure Management",
                    description: "Ensuring your hosting environment remains optimized, secure, and cost-effective.",
                    icon: <Server className="text-primary w-8 h-8" />,
                    features: ["Cloud optimization", "Scaling management", "Infrastructure as code"]
                  },
                  {
                    title: "24/7 Technical Support",
                    description: "Around-the-clock assistance for critical issues with defined SLAs tailored to your business needs.",
                    icon: <HeartPulse className="text-primary w-8 h-8" />,
                    features: ["Rapid response", "Issue prioritization", "Clear communication"]
                  }
                ].map((service, index) => (
                  <Card key={index} className="border border-gray-100 hover:shadow-lg transition-shadow feature-card">
                    <CardContent className="p-6">
                      <div className="mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="space-y-2">
                        <ul className="space-y-1">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center">
                              <CheckCircle className="text-primary w-4 h-4 mr-2 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Support Plans */}
          <section className="mb-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <span className="px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4 inline-block">
                  FLEXIBLE SUPPORT PACKAGES
                </span>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  Choose Your <span className="gradient-text">Support Level</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Select the perfect maintenance plan for your business needs, with flexible options that can be tailored to your specific requirements.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Standard Support",
                    description: "Essential maintenance for stable applications with predictable usage patterns.",
                    price: "$50",
                    period: "per month",
                    features: [
                      { name: "Business hours support (9AM-5PM)", included: true },
                      { name: "8-hour response time", included: true },
                      { name: "Monthly maintenance window", included: true },
                      { name: "Security patches & updates", included: true },
                      { name: "Basic performance monitoring", included: true },
                      { name: "Dedicated support engineer", included: false },
                      { name: "Proactive optimization", included: false },
                      { name: "24/7 critical support", included: false }
                    ],
                    highlight: false,
                    badge: "Basic",
                    cta: "Reliable Support",
                    color: "border-gray-200"
                  },
                  {
                    title: "Premium Support",
                    description: "Enhanced support for business-critical applications that require greater attention.",
                    price: "$75",
                    period: "per month",
                    features: [
                      { name: "Extended hours support (7AM-9PM)", included: true },
                      { name: "4-hour response for critical issues", included: true },
                      { name: "Weekly maintenance window", included: true },
                      { name: "Priority bug fixes", included: true },
                      { name: "Advanced performance monitoring", included: true },
                      { name: "Dedicated support engineer", included: true },
                      { name: "Quarterly performance reviews", included: true },
                      { name: "Weekend emergency support", included: false }
                    ],
                    highlight: true,
                    badge: "Popular",
                    cta: "Most Popular",
                    color: "border-primary"
                  },
                  {
                    title: "Enterprise Support",
                    description: "Comprehensive support for mission-critical systems requiring maximum uptime.",
                    price: "$150",
                    period: "per month",
                    features: [
                      { name: "24/7 support coverage", included: true },
                      { name: "1-hour response for critical issues", included: true },
                      { name: "On-demand maintenance windows", included: true },
                      { name: "Real-time monitoring & alerts", included: true },
                      { name: "Continuous performance tuning", included: true },
                      { name: "Dedicated support team", included: true },
                      { name: "Monthly strategy sessions", included: true },
                      { name: "Custom SLA options", included: true }
                    ],
                    highlight: false,
                    badge: "Premium",
                    cta: "Maximum Protection",
                    color: "border-gray-200"
                  }
                ].map((plan, index) => (
                  <Card 
                    key={index} 
                    className={`relative border ${plan.color} hover:shadow-xl transition-all duration-300 ${
                      plan.highlight ? 'shadow-lg ring-2 ring-primary/30 scale-105' : ''
                    } rounded-xl overflow-hidden`}
                  >
                    {plan.badge && (
                      <div className="absolute top-4 left-4">
                        <Badge className={`${plan.highlight ? 'bg-primary' : 'bg-gray-900'} text-white text-xs py-1`}>
                          {plan.badge}
                        </Badge>
                      </div>
                    )}
                    
                    {plan.highlight && (
                      <div className="absolute top-0 right-0">
                        <div className="bg-primary text-white text-xs py-1 px-3 rounded-bl-lg font-medium">
                          RECOMMENDED
                        </div>
                      </div>
                    )}
                    
                    <CardContent className="p-6 pt-14">
                      <div className="text-center mb-6">
                        <h3 className={`text-2xl font-bold ${plan.highlight ? 'text-primary' : 'text-gray-900'}`}>
                          {plan.title}
                        </h3>
                        <p className="text-gray-600 mt-2 mb-4 h-12">{plan.description}</p>
                        <div className="flex items-baseline justify-center mt-6 mb-4">
                          <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                          <span className="text-gray-600 ml-1">{plan.period}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-8">
                        {plan.features.map((feature, i) => (
                          <div key={i} className="flex items-center py-1.5">
                            <div className="mr-3 flex-shrink-0">
                              {feature.included ? (
                                <CheckCircle className={`w-5 h-5 ${plan.highlight ? 'text-primary' : 'text-green-500'}`} />
                              ) : (
                                <CheckCircle className="w-5 h-5 text-gray-300" />
                              )}
                            </div>
                            <span className={`${feature.included ? 'text-gray-700' : 'text-gray-400'} text-sm`}>
                              {feature.name}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="pt-4 text-center">
                        <Button 
                          className={`w-full py-3 text-base font-semibold rounded-md ${
                            plan.highlight 
                              ? 'bg-primary hover:bg-primary/90 text-white' 
                              : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                          }`}
                        >
                          Get Started
                        </Button>
                        <div className="text-xs text-gray-500 mt-2">{plan.cta}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-10 bg-white p-6 rounded-xl border border-primary/10 shadow-sm">
                <div className="flex items-start">
                  <Shield className="text-primary w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Custom Support Solutions</h4>
                    <p className="text-gray-600">
                      Need something more specific? We offer custom maintenance and support solutions tailored to your exact requirements. Contact us to discuss your needs and we'll create a bespoke support package just for you.
                    </p>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { label: "Flexible contracts", icon: <Clock className="w-4 h-4 text-primary" /> },
                        { label: "Dedicated support team", icon: <Users className="w-4 h-4 text-primary" /> },
                        { label: "Custom SLAs", icon: <Award className="w-4 h-4 text-primary" /> }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center">
                          <div className="mr-2">{item.icon}</div>
                          <span className="text-sm text-gray-700">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-20 bg-gray-50 py-16 px-6 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
            
            <div className="text-center mb-12 relative z-10">
              <span className="px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4 inline-block">
                OUR APPROACH
              </span>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">What Sets Us Apart</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our maintenance and support services are designed to deliver exceptional value through these key differentiators.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="relative rounded-xl overflow-hidden h-[500px] shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Support team collaboration"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent/30 flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">Dedicated Support Team</h3>
                  <p className="text-white/90">
                    Our specialized engineers become an extension of your team, providing consistent, knowledgeable support for your applications.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    title: "Proactive Monitoring",
                    description: "We don't wait for problems to occur. Our advanced monitoring tools detect potential issues before they impact your business.",
                    icon: <Gauge className="text-white w-6 h-6" />,
                    benefits: ["Early issue detection", "Reduced downtime", "Performance insights"]
                  },
                  {
                    title: "DevOps Integration",
                    description: "Our maintenance processes integrate seamlessly with modern DevOps practices for continuous delivery and improvement.",
                    icon: <RefreshCw className="text-white w-6 h-6" />,
                    benefits: ["Streamlined deployment", "Automated testing", "Efficient updates"]
                  },
                  {
                    title: "Data-Driven Optimization",
                    description: "We use comprehensive analytics to identify patterns and implement targeted improvements to your systems.",
                    icon: <BarChart className="text-white w-6 h-6" />,
                    benefits: ["Performance optimization", "Resource efficiency", "Enhanced user experience"]
                  },
                  {
                    title: "Code Quality Focus",
                    description: "We maintain and improve your codebase with an emphasis on clean code, testing, and sustainable architecture.",
                    icon: <Code className="text-white w-6 h-6" />,
                    benefits: ["Reduced technical debt", "Improved maintainability", "Easier future development"]
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex feature-card bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                    <div className="mr-5">
                      <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center shadow-lg feature-icon-container group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">{feature.title}</h3>
                      <p className="text-gray-600 mb-3 text-sm">{feature.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {feature.benefits.map((benefit, i) => (
                          <Badge key={i} variant="outline" className="bg-primary/5 text-primary text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Maintenance Process */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Support Process</h2>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    step: "1. Detection & Alerting",
                    description: "Issues are identified through automated monitoring systems, user reports, or scheduled system reviews.",
                    icon: <Shield className="text-white w-6 h-6" />
                  },
                  {
                    step: "2. Analysis & Prioritization",
                    description: "Our team analyzes the issue, determines the root cause, and prioritizes based on business impact.",
                    icon: <BarChart className="text-white w-6 h-6" />
                  },
                  {
                    step: "3. Resolution & Testing",
                    description: "We implement a solution, thoroughly test it in multiple environments, and verify the fix.",
                    icon: <Wrench className="text-white w-6 h-6" />
                  },
                  {
                    step: "4. Documentation & Prevention",
                    description: "We document the solution and implement preventive measures to strengthen your system.",
                    icon: <RefreshCw className="text-white w-6 h-6" />
                  }
                ].map((process, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                    <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-4 shadow-lg">
                      {process.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{process.step}</h3>
                    <p className="text-gray-600 text-sm">{process.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-white p-6 rounded-xl border border-primary/10 shadow-sm">
                <div className="flex items-center">
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center shadow-lg mr-4">
                    <Rocket className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Continuous Improvement Cycle</h4>
                    <p className="text-gray-600">
                      Beyond fixing issues, we implement a continuous improvement cycle to enhance your application's performance, security, and user experience over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <span className="px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4 inline-block">
                MODERN TOOLSET
              </span>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Support Technologies</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We utilize industry-leading tools and platforms to deliver exceptional maintenance and support services.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "Monitoring", tools: ["Datadog", "New Relic", "Prometheus", "Grafana"] },
                { name: "Incident Management", tools: ["PagerDuty", "Opsgenie", "VictorOps", "Jira"] },
                { name: "DevOps", tools: ["GitHub Actions", "Jenkins", "CircleCI", "Terraform"] },
                { name: "Communication", tools: ["Slack", "Microsoft Teams", "Discord", "Zoom"] },
                { name: "Documentation", tools: ["Confluence", "Notion", "GitHub Wiki", "DocuWare"] },
                { name: "Security", tools: ["Snyk", "SonarQube", "OWASP ZAP", "Qualys"] },
                { name: "Performance", tools: ["Lighthouse", "WebPageTest", "JMeter", "LoadRunner"] },
                { name: "Container Management", tools: ["Kubernetes", "Docker", "Rancher", "OpenShift"] },
                { name: "Database", tools: ["MongoDB Compass", "pgAdmin", "MySQL Workbench", "Redis"] },
                { name: "Log Management", tools: ["ELK Stack", "Splunk", "Graylog", "Sumo Logic"] },
                { name: "Code Quality", tools: ["ESLint", "Prettier", "Rubocop", "StyleCop"] },
                { name: "Testing", tools: ["Jest", "Cypress", "Selenium", "Postman"] }
              ].map((category, index) => (
                <Card key={index} className="border border-gray-100 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <div className="space-y-1">
                      {category.tools.map((tool, toolIndex) => (
                        <div key={toolIndex} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mr-2"></div>
                          {tool}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Case Studies */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Success Stories</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how our maintenance and support services have helped businesses improve reliability and focus on growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  client: "E-commerce Platform",
                  title: "Holiday Season Readiness",
                  description: "Prepared an online retailer's platform for 300% traffic increase during Black Friday sales period.",
                  results: "Zero downtime during peak traffic, 99.98% uptime throughout the season, 42% faster page load times",
                  logo: "🛒",
                  year: 2023
                },
                {
                  client: "SaaS Provider",
                  title: "Performance Optimization",
                  description: "Resolved critical performance bottlenecks for a growing B2B SaaS platform experiencing scaling issues.",
                  results: "75% reduction in database load, 60% faster API response times, supporting 3x user growth without additional hardware",
                  logo: "⚙️",
                  year: 2023
                },
                {
                  client: "Mobile App Developer",
                  title: "System Modernization",
                  description: "Migrated legacy backend services to a modern, cloud-native architecture while maintaining full functionality.",
                  results: "40% reduction in operational costs, 99.99% uptime, 65% faster feature deployment cycle",
                  logo: "📱",
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
                <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="Client testimonial"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <blockquote className="text-xl italic text-gray-600 mb-6">
                    "Nimtec's maintenance team has been exceptional. They quickly understood our complex application ecosystem and implemented proactive monitoring that has prevented numerous potential outages. Their support has allowed our development team to focus on building new features rather than fighting fires."
                  </blockquote>
                  <div className="font-bold text-gray-900">Michael Chen</div>
                  <div className="text-gray-500">CTO, TechVision Solutions</div>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Dashboard Mockup */}
          <section className="mb-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-80"></div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4 inline-block">
                  REAL-TIME INSIGHTS
                </span>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  Startup <span className="gradient-text">Monitoring Dashboard</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our custom monitoring dashboard gives you real-time visibility into your application's health and performance.
                </p>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-gray-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center mr-3">
                      <Gauge className="w-5 h-5" />
                    </div>
                    <div className="font-bold">Nimtec Startup Monitoring</div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                      All Systems Operational
                    </div>
                    <div className="text-xs text-gray-400">Last updated: 2 minutes ago</div>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-6">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    {[
                      { label: "Uptime", value: "99.98%", trend: "up", change: "+0.03%" },
                      { label: "Response Time", value: "87ms", trend: "down", change: "-12ms" },
                      { label: "Error Rate", value: "0.02%", trend: "down", change: "-0.01%" },
                      { label: "CPU Usage", value: "24%", trend: "neutral", change: "0%" }
                    ].map((metric, i) => (
                      <div key={i} className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-500 mb-1">{metric.label}</div>
                        <div className="flex items-end justify-between">
                          <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                          <div className={`flex items-center text-xs ${
                            metric.trend === 'up' ? 'text-green-500' : 
                            metric.trend === 'down' ? 'text-green-500' : 
                            'text-gray-500'
                          }`}>
                            {metric.trend === 'up' && <TrendingUp className="w-3 h-3 mr-1" />}
                            {metric.trend === 'down' && <TrendingUp className="w-3 h-3 mr-1 transform rotate-180" />}
                            {metric.change}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Charts */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Traffic Chart */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-medium text-gray-900">Traffic (last 24h)</h3>
                        <div className="text-xs text-gray-500">1.2M requests</div>
                      </div>
                      <div className="h-40 flex items-end space-x-1">
                        {[35, 42, 38, 30, 35, 60, 65, 75, 58, 62, 80, 70, 85, 80, 75, 65, 70, 85, 90, 95, 80, 70, 65, 60].map((height, i) => (
                          <div 
                            key={i} 
                            className="bg-gradient-to-t from-primary/80 to-primary/40 rounded-t w-full"
                            style={{ height: `${height}%` }}
                          ></div>
                        ))}
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-gray-500">
                        <span>00:00</span>
                        <span>06:00</span>
                        <span>12:00</span>
                        <span>18:00</span>
                        <span>23:59</span>
                      </div>
                    </div>
                    
                    {/* Response Time Chart */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-medium text-gray-900">Response Time (ms)</h3>
                        <div className="text-xs text-gray-500">Avg: 87ms</div>
                      </div>
                      <div className="h-40 relative">
                        <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-gray-300"></div>
                        <div className="absolute left-0 h-full flex items-center">
                          <div className="text-xs text-gray-500">100ms</div>
                        </div>
                        <div className="h-full flex items-center justify-center">
                          <svg className="w-full h-24" viewBox="0 0 300 100" preserveAspectRatio="none">
                            <path 
                              d="M0,50 C20,40 40,30 60,50 C80,70 100,80 120,50 C140,20 160,10 180,30 C200,50 220,60 240,40 C260,20 280,30 300,50" 
                              fill="none" 
                              stroke="rgb(59, 130, 246)" 
                              strokeWidth="3"
                              className="animate-pulse"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-gray-500">
                        <span>00:00</span>
                        <span>06:00</span>
                        <span>12:00</span>
                        <span>18:00</span>
                        <span>23:59</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Recent Alerts */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium text-gray-900">Recent Alerts</h3>
                      <Badge variant="outline" className="bg-primary/5 text-primary">View All</Badge>
                    </div>
                    <div className="space-y-3">
                      {[
                        { severity: "info", message: "Scheduled maintenance completed successfully", time: "2h ago", icon: <CheckCircle className="w-4 h-4 text-green-500" /> },
                        { severity: "warning", message: "Increased API latency detected and resolved", time: "8h ago", icon: <Clock className="w-4 h-4 text-yellow-500" /> },
                        { severity: "info", message: "System update deployed with 0 downtime", time: "1d ago", icon: <RefreshCw className="w-4 h-4 text-blue-500" /> }
                      ].map((alert, i) => (
                        <div key={i} className="flex items-center p-2 hover:bg-gray-100 rounded-md">
                          <div className="mr-3">{alert.icon}</div>
                          <div className="flex-1">
                            <div className="text-sm text-gray-900">{alert.message}</div>
                          </div>
                          <div className="text-xs text-gray-500">{alert.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Our custom monitoring dashboard is designed specifically for startups, focusing on the metrics that matter most to your business and investors.
                </p>
                <div className="mt-6">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Request Demo Access
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Support Framework */}
          <section className="mb-20">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Our Support Framework</h3>
              <ul className="space-y-4">
                {[
                  { step: "Initial Assessment", description: "Comprehensive evaluation of your application architecture and code quality", benefit: "Clear roadmap" },
                  { step: "Custom Support Plan", description: "Tailored maintenance strategy based on your business priorities and technical needs", benefit: "Optimized ROI" },
                  { step: "Proactive Monitoring", description: "24/7 system oversight to identify issues before they impact your users", benefit: "Prevent downtime" },
                  { step: "Rapid Issue Resolution", description: "Swift problem diagnosis and resolution with defined SLAs", benefit: "Minimize disruption" },
                  { step: "Performance Tuning", description: "Regular optimization to ensure your application performs at its best", benefit: "Enhanced UX" },
                  { step: "Continuous Improvement", description: "Ongoing enhancements to keep your application current with evolving technology", benefit: "Future-proof" }
                ].map((item, index) => (
                  <li key={index} className="flex group feature-card">
                    <div className="mr-4 text-primary feature-icon-container">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="font-semibold text-gray-900">{item.step}</h4>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{item.benefit}</span>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </ServiceLayout>
  );
} 