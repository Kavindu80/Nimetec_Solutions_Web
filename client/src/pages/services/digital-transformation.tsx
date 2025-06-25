import ServiceLayout from "./ServiceLayout";
import { BarChart, Lightbulb, Repeat, Users, CheckCircle, TrendingUp, LineChart, Zap, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DigitalTransformationPage() {
  return (
    <ServiceLayout 
      title="Digital Transformation" 
      description="Strategic technology adoption and process optimization to help your business thrive in the digital age."
      icon={<TrendingUp className="text-white w-10 h-10" />}
    >
      <div className="py-16 animated-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats for Startups */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                <span className="gradient-text">Startup Digital Success</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Digital transformation is the key to startup growth and competitive advantage in today's market.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { value: "3.2x", label: "Faster Growth Rate", icon: <Rocket className="text-primary w-6 h-6" /> },
                { value: "67%", label: "Higher Valuation", icon: <TrendingUp className="text-primary w-6 h-6" /> },
                { value: "43%", label: "Cost Reduction", icon: <BarChart className="text-primary w-6 h-6" /> },
                { value: "58%", label: "Improved Customer Experience", icon: <Users className="text-primary w-6 h-6" /> }
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
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Digital Transformation Strategy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  Digital transformation is more than just implementing new technologies—it's about reimagining your <span className="highlight-text">startup's processes</span>, culture, and customer experiences to meet the demands of an increasingly digital world.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  At Nimtec, we partner with <span className="highlight-text">early-stage and growth-stage startups</span> to develop and execute comprehensive digital transformation strategies that drive innovation, improve efficiency, and create competitive advantages.
                </p>
                <p className="text-lg text-gray-600">
                  Our approach combines strategic consulting, technical expertise, and change management to ensure your digital initiatives deliver measurable business value and sustainable growth—all with <span className="highlight-text">startup-friendly budgets</span> and timelines.
                </p>
                
                {/* Startup testimonial */}
                <div className="mt-8 p-5 bg-primary/5 rounded-xl border border-primary/10 relative testimonial-card">
                  <blockquote className="text-gray-600 italic relative z-10">
                    "Nimtec's digital transformation strategy helped us scale our operations 5x while reducing our overhead costs. Their startup-focused approach was exactly what we needed."
                  </blockquote>
                  <div className="mt-4 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      JS
                    </div>
                    <div className="ml-3">
                      <div className="font-medium text-gray-900">Jamie Smith</div>
                      <div className="text-sm text-gray-500">CEO, TechLaunch</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Our Startup Transformation Framework</h3>
                <ul className="space-y-4">
                  {[
                    { step: "Discovery & Assessment", description: "Analyzing your current state and identifying transformation opportunities", timeline: "1-2 weeks" },
                    { step: "Vision & Strategy", description: "Defining your digital future and roadmap to get there", timeline: "1-2 weeks" },
                    { step: "Technology Selection", description: "Choosing the right tools and platforms for your needs", timeline: "1-2 weeks" },
                    { step: "Process Redesign", description: "Optimizing workflows for the digital environment", timeline: "2-3 weeks" },
                    { step: "Implementation", description: "Deploying solutions with minimal disruption", timeline: "4-8 weeks" },
                    { step: "Change Management", description: "Ensuring adoption and measuring outcomes", timeline: "Ongoing" }
                  ].map((item, index) => (
                    <li key={index} className="flex group feature-card">
                      <div className="mr-4 text-primary feature-icon-container">
                        <CheckCircle className="w-6 h-6" />
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
          </section>

          {/* Transformation Areas */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Startup Transformation Areas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Customer Experience",
                  description: "Create seamless, personalized digital experiences that help your startup acquire and retain customers at lower cost.",
                  icon: <Users className="text-primary w-8 h-8" />,
                  benefits: ["Higher conversion rates", "Improved retention", "Lower CAC"]
                },
                {
                  title: "Operational Efficiency",
                  description: "Streamline processes and automate routine tasks to maximize your startup's runway and optimize resource allocation.",
                  icon: <Zap className="text-primary w-8 h-8" />,
                  benefits: ["Extended runway", "Faster execution", "Scalable operations"]
                },
                {
                  title: "Business Model Innovation",
                  description: "Develop new revenue streams and business models that can help your startup disrupt markets and attract investors.",
                  icon: <Lightbulb className="text-primary w-8 h-8" />,
                  benefits: ["New revenue opportunities", "Higher valuation", "Market differentiation"]
                },
                {
                  title: "Data-Driven Decision Making",
                  description: "Implement analytics and BI tools that give your startup the insights needed to make faster, better strategic decisions.",
                  icon: <BarChart className="text-primary w-8 h-8" />,
                  benefits: ["Reduced uncertainty", "Faster pivots", "Better investor metrics"]
                },
                {
                  title: "Team Productivity",
                  description: "Equip your startup team with digital collaboration tools and workflows that maximize output with minimal headcount.",
                  icon: <Users className="text-primary w-8 h-8" />,
                  benefits: ["Do more with less", "Remote-friendly", "Talent attraction"]
                },
                {
                  title: "Technology Foundation",
                  description: "Build scalable, future-proof tech infrastructure that can grow with your startup from MVP to enterprise scale.",
                  icon: <Repeat className="text-primary w-8 h-8" />,
                  benefits: ["Scale without rebuilding", "Tech debt prevention", "Faster iterations"]
                }
              ].map((area, index) => (
                <Card key={index} className="border border-gray-100 hover:shadow-lg transition-shadow feature-card">
                  <CardContent className="p-6">
                    <div className="mb-4 feature-icon-container">{area.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{area.title}</h3>
                    <p className="text-gray-600 mb-4">{area.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Startup Benefits:</h4>
                      <ul className="space-y-1">
                        {area.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            <span className="text-gray-600 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Digital Technologies */}
          <section className="mb-20 py-10 px-6 bg-white rounded-2xl shadow-md border border-gray-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Startup-Ready Technologies</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We help startups implement scalable technologies that provide immediate value while supporting future growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Cloud Infrastructure",
                  description: "Pay-as-you-go cloud solutions that scale with your startup's growth without large upfront investments",
                  badges: ["AWS", "GCP", "Azure"],
                  popular: true
                },
                {
                  name: "No-Code/Low-Code",
                  description: "Rapid development platforms that let you build MVPs and validate ideas with minimal engineering resources",
                  badges: ["Bubble", "Webflow", "Airtable"],
                  popular: true
                },
                {
                  name: "Analytics & BI",
                  description: "Data tools that provide actionable insights for product decisions and investor metrics",
                  badges: ["Mixpanel", "Amplitude", "Looker"],
                  popular: false
                },
                {
                  name: "AI & Automation",
                  description: "Smart tools that help your small team accomplish more with fewer resources",
                  badges: ["GPT", "ML APIs", "RPA"],
                  popular: true
                },
                {
                  name: "DevOps & CI/CD",
                  description: "Automated development pipelines that enable faster iterations and reliable deployments",
                  badges: ["GitHub Actions", "CircleCI", "Vercel"],
                  popular: false
                },
                {
                  name: "Customer Engagement",
                  description: "Tools to acquire, engage and retain users throughout their journey with your product",
                  badges: ["Intercom", "Customer.io", "Segment"],
                  popular: false
                },
                {
                  name: "Collaboration Tools",
                  description: "Digital workspaces that keep your distributed team aligned and productive",
                  badges: ["Slack", "Notion", "Linear"],
                  popular: false
                },
                {
                  name: "API Ecosystems",
                  description: "Ready-made services that provide enterprise functionality without building from scratch",
                  badges: ["Stripe", "Twilio", "Auth0"],
                  popular: true
                }
              ].map((tech, index) => (
                <Card key={index} className="border border-gray-100 hover:border-primary/20 transition-colors feature-card overflow-hidden">
                  {tech.popular && (
                    <div className="absolute top-0 right-0">
                      <Badge className="m-2 bg-primary text-white">Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{tech.name}</h3>
                    <p className="text-gray-600 mb-4">{tech.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {tech.badges.map((badge, badgeIndex) => (
                        <Badge key={badgeIndex} variant="secondary" className="tech-badge bg-primary/10 text-primary">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-20 bg-gray-50 py-16 px-6 rounded-3xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Startup Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                {
                  title: "Lean Strategy",
                  description: "Focused digital roadmaps that prioritize high-impact initiatives with minimal resource investment for maximum startup ROI.",
                  icon: <Lightbulb className="text-white w-6 h-6" />,
                  benefits: ["Capital-efficient", "Quick wins first", "Measurable outcomes"]
                },
                {
                  title: "Agile Implementation",
                  description: "Rapid, iterative approach to digital transformation that allows your startup to adapt quickly to market feedback.",
                  icon: <Repeat className="text-white w-6 h-6" />,
                  benefits: ["2-week sprints", "Continuous delivery", "Pivot-ready"]
                },
                {
                  title: "Growth-Focused Data",
                  description: "Analytics implementation that focuses on metrics that matter for startup growth and investor conversations.",
                  icon: <BarChart className="text-white w-6 h-6" />,
                  benefits: ["North Star metrics", "Investor dashboards", "Growth tracking"]
                },
                {
                  title: "Founder Support",
                  description: "Strategic guidance and mentorship to help founders navigate technical decisions and digital challenges.",
                  icon: <Users className="text-white w-6 h-6" />,
                  benefits: ["Tech advisory", "Investor pitch support", "Network access"]
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

          {/* Transformation Maturity */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Digital Maturity Assessment</h2>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
              <p className="text-lg text-gray-600 mb-6">
                Understanding your organization's current digital capabilities is the first step in any successful transformation. Our comprehensive assessment framework evaluates your maturity across key dimensions:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {[
                  {
                    dimension: "Customer Experience",
                    levels: ["Basic digital presence", "Multi-channel engagement", "Omnichannel experience", "Predictive personalization"]
                  },
                  {
                    dimension: "Operations & Processes",
                    levels: ["Manual processes", "Partial automation", "Integrated workflows", "Intelligent automation"]
                  },
                  {
                    dimension: "Technology & Architecture",
                    levels: ["Legacy systems", "Modernized core", "Cloud-native", "Composable architecture"]
                  },
                  {
                    dimension: "Data & Analytics",
                    levels: ["Basic reporting", "Business intelligence", "Advanced analytics", "AI-driven insights"]
                  },
                  {
                    dimension: "Organization & Culture",
                    levels: ["Traditional", "Digitally aware", "Collaborative", "Innovative"]
                  },
                  {
                    dimension: "Strategy & Leadership",
                    levels: ["Reactive", "Coordinated", "Strategic", "Transformative"]
                  }
                ].map((dimension, index) => (
                  <Card key={index} className="border-none shadow-sm">
                    <CardContent className="p-5">
                      <h3 className="font-bold text-gray-900 mb-3">{dimension.dimension}</h3>
                      <div className="space-y-2">
                        {dimension.levels.map((level, levelIndex) => (
                          <div key={levelIndex} className="flex items-center">
                            <div className={`w-2 h-2 rounded-full ${levelIndex === 3 ? 'bg-primary' : 'bg-gray-300'} mr-2`}></div>
                            <span className={`text-sm ${levelIndex === 3 ? 'text-primary font-medium' : 'text-gray-600'}`}>
                              {level}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Case Studies */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Startup Success Stories</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how we've helped startups transform digitally and achieve their growth goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  client: "FinTech Startup",
                  title: "Zero to Series A",
                  description: "Helped an early-stage fintech startup build a scalable digital platform that attracted 50,000 users in 6 months.",
                  results: "Secured $4.2M Series A funding, 12x user growth, 85% reduction in customer acquisition cost",
                  logo: "💰",
                  year: 2023
                },
                {
                  client: "E-commerce Platform",
                  title: "Digital Growth Engine",
                  description: "Transformed a traditional retail startup into an omnichannel business with integrated online and offline experiences.",
                  results: "3x revenue growth in 12 months, 65% increase in repeat purchases, successful expansion to 3 new markets",
                  logo: "🛒",
                  year: 2020
                },
                {
                  client: "SaaS Startup",
                  title: "Enterprise-Ready Scaling",
                  description: "Implemented digital transformation that prepared a B2B SaaS startup to serve enterprise clients without rebuilding.",
                  results: "Closed first enterprise deal worth $450K, 99.99% platform uptime, passed SOC 2 compliance audit",
                  logo: "🚀",
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
                        <TrendingUp className="w-4 h-4 mr-1" />
                        <span>{case_study.year}</span>
                      </div>
                      <Badge variant="outline" className="bg-primary/5">Case Study</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Startup Success Metrics */}
          <section className="mb-20 overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4 inline-block">
                  MEASURABLE OUTCOMES
                </span>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  Startup <span className="gradient-text">Success Metrics</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our digital transformation services deliver measurable results that help startups grow faster and more efficiently.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "User Acquisition",
                    metrics: [
                      { label: "Reduced CAC", value: "-42%" },
                      { label: "Conversion Rate", value: "+38%" },
                      { label: "Organic Traffic", value: "+125%" }
                    ],
                    icon: <Users className="text-white w-6 h-6" />,
                    color: "from-blue-500 to-blue-600"
                  },
                  {
                    title: "Operational Efficiency",
                    metrics: [
                      { label: "Process Time", value: "-65%" },
                      { label: "Resource Usage", value: "-40%" },
                      { label: "Team Productivity", value: "+52%" }
                    ],
                    icon: <Zap className="text-white w-6 h-6" />,
                    color: "from-green-500 to-green-600"
                  },
                  {
                    title: "Growth Metrics",
                    metrics: [
                      { label: "MRR Growth", value: "+87%" },
                      { label: "User Retention", value: "+35%" },
                      { label: "Expansion Revenue", value: "+63%" }
                    ],
                    icon: <TrendingUp className="text-white w-6 h-6" />,
                    color: "from-purple-500 to-purple-600"
                  }
                ].map((category, index) => (
                  <Card key={index} className="border-none shadow-lg overflow-hidden feature-card">
                    <div className={`h-2 w-full bg-gradient-to-r ${category.color}`}></div>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-6">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4 shadow-md feature-icon-container`}>
                          {category.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                      </div>
                      
                      <div className="space-y-4">
                        {category.metrics.map((metric, i) => (
                          <div key={i} className="flex justify-between items-center">
                            <span className="text-gray-600">{metric.label}</span>
                            <span className="text-lg font-bold text-gray-900 stat-counter">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <div className="text-xs text-gray-500">Based on average results from our startup clients</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Rocket className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Startup-Friendly ROI Timeline</h4>
                    <p className="text-gray-600 mb-4">
                      Our digital transformation initiatives are designed to deliver quick wins within 30-60 days, with major ROI milestones at 3, 6, and 12 months to align with typical startup funding and growth cycles.
                    </p>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary/30 via-primary/60 to-primary w-3/4"></div>
                    </div>
                    <div className="flex justify-between mt-1 text-xs text-gray-500">
                      <span>Quick Wins</span>
                      <span>Core Improvements</span>
                      <span>Full Transformation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Timeline */}
          <section className="mb-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4 inline-block">
                  STRUCTURED APPROACH
                </span>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  Startup Transformation <span className="gradient-text">Timeline</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our proven process delivers results at each stage, aligned with startup growth milestones.
                </p>
              </div>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute top-0 left-1/2 w-1 h-full bg-gray-200 transform -translate-x-1/2 z-0"></div>
                
                {/* Timeline items */}
                <div className="relative z-10">
                  {[
                    {
                      phase: "Phase 1: Discovery",
                      duration: "Weeks 1-2",
                      description: "We analyze your current systems, identify pain points, and define transformation goals aligned with your startup's vision.",
                      outcomes: ["Digital maturity assessment", "Opportunity identification", "Stakeholder alignment"],
                      icon: <Lightbulb className="w-6 h-6 text-white" />,
                      position: "left"
                    },
                    {
                      phase: "Phase 2: Strategy",
                      duration: "Weeks 3-4",
                      description: "Develop a tailored digital roadmap prioritizing quick wins and long-term strategic initiatives for maximum ROI.",
                      outcomes: ["Digital transformation roadmap", "Technology stack recommendations", "Resource planning"],
                      icon: <BarChart className="w-6 h-6 text-white" />,
                      position: "right"
                    },
                    {
                      phase: "Phase 3: Implementation",
                      duration: "Months 2-3",
                      description: "Agile execution of prioritized initiatives with continuous testing and refinement to ensure business value.",
                      outcomes: ["Core systems transformation", "Process automation", "Data integration"],
                      icon: <Zap className="w-6 h-6 text-white" />,
                      position: "left"
                    },
                    {
                      phase: "Phase 4: Optimization",
                      duration: "Month 4+",
                      description: "Continuous improvement based on real-world performance data and evolving business needs.",
                      outcomes: ["Performance optimization", "User adoption", "ROI measurement"],
                      icon: <TrendingUp className="w-6 h-6 text-white" />,
                      position: "right"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center mb-16 last:mb-0">
                      {/* Content based on position */}
                      {item.position === "left" ? (
                        <>
                          <div className="w-1/2 pr-8">
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
                              <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{item.phase}</h3>
                              <div className="text-sm text-primary font-medium mb-3">{item.duration}</div>
                              <p className="text-gray-600 mb-4">{item.description}</p>
                              <div className="space-y-2">
                                <h4 className="font-medium text-gray-900">Key Outcomes:</h4>
                                <ul className="space-y-1">
                                  {item.outcomes.map((outcome, i) => (
                                    <li key={i} className="flex items-center text-sm">
                                      <CheckCircle className="text-primary w-4 h-4 mr-2 flex-shrink-0" />
                                      <span>{outcome}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg z-10 animate-pulse">
                              {item.icon}
                            </div>
                          </div>
                          <div className="w-1/2 pl-8"></div>
                        </>
                      ) : (
                        <>
                          <div className="w-1/2 pr-8"></div>
                          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg z-10 animate-pulse">
                              {item.icon}
                            </div>
                          </div>
                          <div className="w-1/2 pl-8">
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
                              <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{item.phase}</h3>
                              <div className="text-sm text-primary font-medium mb-3">{item.duration}</div>
                              <p className="text-gray-600 mb-4">{item.description}</p>
                              <div className="space-y-2">
                                <h4 className="font-medium text-gray-900">Key Outcomes:</h4>
                                <ul className="space-y-1">
                                  {item.outcomes.map((outcome, i) => (
                                    <li key={i} className="flex items-center text-sm">
                                      <CheckCircle className="text-primary w-4 h-4 mr-2 flex-shrink-0" />
                                      <span>{outcome}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-12 bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                <div className="inline-block mb-4">
                  <Badge className="bg-primary text-white px-3 py-1">STARTUP FRIENDLY</Badge>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Implementation Options</h3>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  We offer phased implementation approaches that align with your startup's funding cycles and growth stages, allowing you to scale your digital transformation as your business evolves.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </ServiceLayout>
  );
} 