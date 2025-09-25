import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Youtube, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully Subscribed!",
        description: "You'll receive our latest industry insights and updates.",
      });
      setEmail('');
    }
  };

  const footerSections = {
    services: [
      { name: 'Precision Manufacturing', href: '#manufacturing' },
      { name: 'Tool Repair Services', href: '#repair' },
      { name: 'Equipment Rental', href: '#rental' },
      { name: 'Performance Tools', href: '#performance' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Locations', href: '#locations' },
      { name: 'News & Insights', href: '#insights' },
      { name: 'Careers', href: '#careers' },
    ],
    support: [
      { name: 'Contact Support', href: '#contact' },
      { name: 'Documentation', href: '#docs' },
      { name: 'Quality Assurance', href: '#quality' },
      { name: 'Warranty Information', href: '#warranty' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Compliance', href: '#compliance' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-industrial-steel-dark text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">Stay Updated with Industry Insights</h3>
              <p className="text-gray-300 leading-relaxed">
                Get the latest news, technical updates, and industry developments delivered to your inbox.
              </p>
            </div>
            <div>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-industrial-steel-dark font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center group"
                >
                  Subscribe
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                <div className="w-6 h-6 bg-industrial-blue rounded-sm"></div>
              </div>
              <div>
                <div className="text-xl font-bold">Global Tools</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Oil & Gas Solutions</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Leading the oil and gas industry for over 50 years with precision manufacturing, 
              innovative tools, and unmatched engineering expertise.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-white/70" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-white/70" />
                sales@globaloiltools.com
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-white/70" />
                Houston, Texas, USA
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200 group"
                >
                  <social.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-3">
                {footerSections.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {footerSections.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-3">
                {footerSections.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerSections.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-max py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>
              © 2024 Global Oil & Gas Tools. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              ISO 9001:2015 Certified | API Compliant | Made with precision in USA
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;