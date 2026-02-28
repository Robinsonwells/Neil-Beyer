export default function Services() {
  const services = [
    {
      title: "Property Marketing & Tenant Placement",
      description: "We feature your properties on major rental websites with thorough tenant vetting to ensure quality occupants.",
      icon: "🏘️"
    },
    {
      title: "Maintenance & Repairs Coordination",
      description: "Established vendor network including electricians, plumbers, and contractors to keep your property in top condition.",
      icon: "🔧"
    },
    {
      title: "Rent Collection & Financial Reporting",
      description: "Streamlined rent collection processes with transparent financial reporting to keep you informed.",
      icon: "💰"
    },
    {
      title: "Lease Administration & Legal Compliance",
      description: "Professional lease management ensuring regulatory adherence and protecting your investment.",
      icon: "📋"
    },
    {
      title: "24/7 Emergency Support",
      description: "Round-the-clock response for urgent issues to protect your property and maintain tenant satisfaction.",
      icon: "🚨"
    },
    {
      title: "Investment Maximization",
      description: "Results-driven approach focused on maximizing returns and minimizing vacancies for property owners.",
      icon: "📈"
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-black via-gray-900 to-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(249,115,22,0.15),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-center text-white">
          Our Services
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16 text-lg">
          Comprehensive property management solutions tailored to your unique needs
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900/50 to-blue-950/30 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-500/20 hover:border-orange-500/50"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-orange-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
