{services.map((service, index) => (
  <div key={index} className="group service-card">
    <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 h-full flex flex-col card-hover">
      <div className="mb-6 service-icon transition-transform">
        <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center shadow-lg">
          {service.icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">{service.title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
      <div className="mt-auto">
        <Link href={`${service.href}#content`}>
          <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary hover:text-white">
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  </div>
))} 