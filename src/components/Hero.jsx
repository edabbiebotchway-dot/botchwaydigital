import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob top-0 -left-4"></div>
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 top-0 -right-4"></div>
        <div className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 bottom-8 left-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
              <span className="text-blue-300 text-sm font-medium">Botchway Digital</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Emmanuel Dabbie Botchway
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Founder & Chief Digital Officer | Full-Stack Developer
            </p>
            
            <p className="text-lg text-gray-400 mb-8 max-w-2xl">
              Complete digital solutions spanning web & mobile development, data analytics, AI, UX/UI design, 
              graphic design, and photography. Transforming ideas into powerful digital experiences with 
              Botchway Digital.
            </p>

            {/* Contact buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
              >
                Get In Touch
              </a>
              <a 
                href="#portfolio" 
                className="px-8 py-3 bg-transparent border-2 border-blue-400 hover:bg-blue-400/10 rounded-lg font-semibold transition-all duration-300"
              >
                View My Work
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a 
                href="https://www.linkedin.com/in/emmanueldabbiebotchway" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:edabbiebotchway@gmail.com"
                className="p-3 bg-white/10 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a 
                href="tel:+233540545048"
                className="p-3 bg-white/10 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Phone"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right content - Image placeholder */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50">
                <div className="w-72 h-72 bg-slate-800 rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-blue-400">EB</span>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-lg opacity-80 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500 rounded-lg opacity-80 animate-float animation-delay-2000"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-blue-400" />
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}