import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', company: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      subtitle: 'Available 24/7'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'sales@globaloiltools.com',
      subtitle: 'Response within 4 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Houston, Texas, USA',
      subtitle: 'Global headquarters'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-industrial-blue/10 rounded-full text-sm font-semibold text-industrial-blue mb-4">
              Get in Touch
            </div>
            <h2 className="heading-lg mb-6">
              Ready to Start Your
              <span className="block text-industrial-blue">Next Project?</span>
            </h2>
            <p className="text-xl text-industrial max-w-2xl mx-auto leading-relaxed">
              Connect with our engineering experts to discuss your requirements and discover 
              how we can optimize your operations.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="fade-in-up">
              <h3 className="heading-md mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className="fade-in-up flex items-start space-x-4"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-industrial-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-industrial-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-industrial-blue font-medium">{info.details}</p>
                      <p className="text-sm text-industrial">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="fade-in-up mt-12 p-6 bg-white rounded-xl border border-border">
                <h4 className="font-semibold text-foreground mb-4">Why Choose Us?</h4>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-industrial-steel">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    50+ years of industry experience
                  </div>
                  <div className="flex items-center text-sm text-industrial-steel">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    ISO 9001:2015 certified processes
                  </div>
                  <div className="flex items-center text-sm text-industrial-steel">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    24/7 global support network
                  </div>
                  <div className="flex items-center text-sm text-industrial-steel">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    Trusted by Fortune 500 companies
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="fade-in-up card-industrial p-8">
              <h3 className="heading-md mb-8">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-industrial-blue focus:border-transparent transition-all duration-200 bg-background"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-industrial-blue focus:border-transparent transition-all duration-200 bg-background"
                      placeholder="Your Company Name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-industrial-blue focus:border-transparent transition-all duration-200 bg-background"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-industrial-blue focus:border-transparent transition-all duration-200 bg-background resize-none"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-hero w-full sm:w-auto group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;