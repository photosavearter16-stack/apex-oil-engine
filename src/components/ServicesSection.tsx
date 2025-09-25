import React from 'react';
import { ArrowRight, Cog, Wrench, Package, Target } from 'lucide-react';
import manufacturingImage from '@/assets/manufacturing.jpg';
import toolRepairImage from '@/assets/tool-repair.jpg';
import equipmentRentalImage from '@/assets/equipment-rental.jpg';
import performanceToolsImage from '@/assets/performance-tools.jpg';

const ServicesSection = () => {
  const services = [
    {
      icon: Cog,
      title: 'Precision Manufacturing',
      description: 'State-of-the-art manufacturing facilities producing high-precision tools and components for critical oil & gas operations worldwide.',
      image: manufacturingImage,
      features: ['CNC Machining', 'Quality Assurance', 'Custom Engineering', 'ISO Certified'],
      href: '#manufacturing'
    },
    {
      icon: Wrench,
      title: 'Tool Repair',
      description: 'Expert repair services extending the life of your critical equipment with certified technicians and genuine parts.',
      image: toolRepairImage,
      features: ['Expert Diagnostics', 'Genuine Parts', 'Quick Turnaround', 'Warranty Coverage'],
      href: '#repair'
    },
    {
      icon: Package,
      title: 'Equipment Rental',
      description: 'Comprehensive rental solutions providing access to premium tools and equipment when and where you need them.',
      image: equipmentRentalImage,
      features: ['Flexible Terms', 'Maintenance Included', 'Global Availability', 'Training Support'],
      href: '#rental'
    },
    {
      icon: Target,
      title: 'Performance Tools',
      description: 'Innovative high-performance tools designed to optimize productivity and reliability in demanding environments.',
      image: performanceToolsImage,
      features: ['Advanced Materials', 'Field Tested', 'Performance Data', 'Technical Support'],
      href: '#performance'
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-section">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-industrial-blue/10 rounded-full text-sm font-semibold text-industrial-blue mb-4">
              Our Core Services
            </div>
            <h2 className="heading-lg mb-6">
              Engineering Solutions for
              <span className="block text-industrial-blue">Global Energy Leaders</span>
            </h2>
            <p className="text-xl text-industrial max-w-3xl mx-auto leading-relaxed">
              Four decades of expertise delivering precision-engineered solutions that drive efficiency, 
              reliability, and innovation across the oil and gas industry.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="fade-in-up card-industrial group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden rounded-t-xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-blue/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-industrial-blue" />
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-8">
                <h3 className="heading-md mb-4 group-hover:text-industrial-blue transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-industrial mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-industrial-steel">
                      <div className="w-1.5 h-1.5 bg-industrial-blue rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Link */}
                <a
                  href={service.href}
                  className="inline-flex items-center text-industrial-blue font-semibold hover:text-industrial-blue-light transition-colors duration-200 group/link"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center fade-in-up">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-industrial border border-border max-w-4xl mx-auto">
            <h3 className="heading-md mb-4">Ready to Get Started?</h3>
            <p className="text-industrial mb-8 text-lg">
              Connect with our engineering experts to discuss your specific requirements and discover 
              how our solutions can optimize your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-hero">
                Request Consultation
              </a>
              <a href="#about" className="btn-outline">
                Learn About Our Company
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;