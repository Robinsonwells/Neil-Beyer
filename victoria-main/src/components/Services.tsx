import { useState, useEffect, useRef } from 'react';

export default function Services() {
  const [activeTab, setActiveTab] = useState<'owners' | 'renters'>('owners');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const ownerServices = [
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

  const renterServices = [
    {
      title: "Property Search Assistance",
      description: "Access to a curated selection of quality rental properties that match your preferences and budget.",
      icon: "🔍"
    },
    {
      title: "Responsive Maintenance",
      description: "Quick response to maintenance requests with our network of professional contractors and repair specialists.",
      icon: "🛠️"
    },
    {
      title: "Transparent Communication",
      description: "Clear and timely communication for all your rental needs, questions, and concerns.",
      icon: "💬"
    },
    {
      title: "Flexible Lease Options",
      description: "Various lease terms and options to accommodate your lifestyle and timeline requirements.",
      icon: "📝"
    },
    {
      title: "24/7 Emergency Line",
      description: "Round-the-clock emergency support to address urgent issues and ensure your safety and comfort.",
      icon: "📞"
    },
    {
      title: "Move-In Support",
      description: "Comprehensive move-in assistance including property walkthroughs and orientation to your new home.",
      icon: "🏠"
    }
  ];

  const ownerTakeCareOf = [
    "Listing your property on all major rental platforms",
    "Professional photography and virtual tours",
    "Tenant screening and background checks",
    "All maintenance coordination and vendor management",
    "Monthly rent collection and financial reporting",
    "Lease renewals and legal documentation",
    "Emergency response 24/7/365",
    "Property inspections and condition reports",
    "Eviction proceedings if necessary",
    "Market analysis and rent optimization"
  ];

  const renterTakeCareOf = [
    "Finding quality rental properties in your area",
    "Coordinating property viewings and tours",
    "Processing rental applications efficiently",
    "All maintenance requests and repairs",
    "Clear communication and updates",
    "Lease documentation and move-in process",
    "24/7 emergency support line",
    "Property walkthroughs and orientation",
    "Renewal options and lease management",
    "Resolving any property-related issues"
  ];

  const services = activeTab === 'owners' ? ownerServices : renterServices;
  const takeCareOfList = activeTab === 'owners' ? ownerTakeCareOf : renterTakeCareOf;

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
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12 text-lg">
          Comprehensive property management solutions tailored to your unique needs
        </p>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-gray-900/50 p-1 backdrop-blur-sm border border-orange-500/30">
            <button
              onClick={() => setActiveTab('owners')}
              className={`px-8 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'owners'
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              For Owners
            </button>
            <button
              onClick={() => setActiveTab('renters')}
              className={`px-8 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'renters'
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              For Renters
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

        <div ref={sectionRef} className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/50 to-blue-950/30 backdrop-blur-sm p-8 rounded-lg border border-orange-500/20">
            <h3 className="text-2xl font-semibold mb-6 text-white">Things We Take Care Of</h3>
            <ul className="space-y-3">
              {takeCareOfList.map((item, index) => (
                <li
                  key={index}
                  className={`text-gray-300 flex items-start transition-all duration-500 ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-blue-950/30 backdrop-blur-sm p-8 rounded-lg border border-orange-500/20">
            <h3 className="text-2xl font-semibold mb-6 text-white">What You Need to Worry About Working With Us</h3>
            <ul className="space-y-3">
              {[...Array(8)].map((_, index) => (
                <li
                  key={index}
                  className={`text-gray-400 flex items-start transition-all duration-500 ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="text-gray-600 mr-3 mt-1">•</span>
                  <span className="invisible">placeholder</span>
                </li>
              ))}
              <li
                className={`text-orange-400 font-medium flex items-start transition-all duration-500 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                <span className="text-orange-500 mr-3 mt-1">→</span>
                <span>I think you get the idea</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
