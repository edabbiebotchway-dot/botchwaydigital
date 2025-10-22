import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Facebook, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' }
  ];

  const moreLinks = [
    { name: 'Certifications', href: '#certifications' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/emmanueldabbiebotchway', label: 'LinkedIn' },
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' }
  ];

  return (
    <footer className="bg-slate-900 text-white relative">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BD</span>
              </div>
              <span className="font-bold text-xl">Botchway Digital</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Complete digital solutions spanning web & mobile development, data analytics, AI, 
              UX/UI design, graphic design, and professional photography. Your trusted partner 
              for digital excellence.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-200"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Explore</h3>
            <ul className="space-y-3">
              {moreLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-200"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:edabbiebotchway@gmail.com"
                  className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-200 group"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-sm">edabbiebotchway@gmail.com</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+233540545048"
                  className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-200 group"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-sm">+233 540 545 048</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p className="text-sm">Accra, Ghana</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 mb-12 border border-blue-500/20">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Get the latest insights on data analytics, business intelligence, and industry trends
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Emmanuel Dabbie Botchway. All rights reserved. Built with{' '}
              <Heart className="w-4 h-4 inline text-red-500" /> and React
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
}