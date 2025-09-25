import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, Award, Globe, Users, Wrench } from 'lucide-react';
import heroImage from '@/assets/hero-industrial.jpg';

const HeroSection = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-up, .slide-in-left, .scale-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Globe, number: '25+', label: 'Countries Served' },
    { icon: Award, number: '50+', label: 'Years Experience' },
    { icon: Users, number: '500+', label: 'Expert Engineers' },
    { icon: Wrench, number: '10K+', label: 'Projects Completed' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Industrial Manufacturing Facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-blue/90 via-industrial-blue/70 to-transparent"></div>
      </div>

      <div className="relative z-10 container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div ref={heroRef} className="text-white">
            <div className="fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Trusted Global Leader Since 1974
              </div>
            </div>

            <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="heading-xl text-white mb-6">
                Precision Engineering for the
                <span className="block text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text font-bold">
                  Oil & Gas Industry
                </span>
              </h1>
            </div>

            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl text-gray-200 leading-relaxed mb-8 max-w-lg">
                From precision manufacturing to performance tools, we deliver world-class engineering solutions 
                that power the global energy sector with reliability and innovation.
              </p>
            </div>

            <div className="fade-in-up flex flex-col sm:flex-row gap-4 mb-12" style={{ animationDelay: '0.3s' }}>
              <a href="#services" className="btn-hero group">
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <button className="btn-outline bg-white/10 border-white text-white hover:bg-white hover:text-industrial-blue group">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                Watch Our Story
              </button>
            </div>

            {/* Quick Stats */}
            <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="scale-in text-center"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md rounded-lg mb-2">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual Element */}
          <div className="hidden lg:block">
            <div className="slide-in-left relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold">Project Status</div>
                      <div className="text-gray-300 text-sm">Real-time Operations</div>
                    </div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-white">98.5%</div>
                      <div className="text-gray-300 text-sm">Quality Rate</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-white">24/7</div>
                      <div className="text-gray-300 text-sm">Support</div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">Global Operations</span>
                      <span className="text-gray-300 text-sm">Active</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center text-white animate-bounce">
          <div className="text-sm font-medium mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;