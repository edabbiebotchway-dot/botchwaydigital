import React from 'react';
import { Award, Briefcase, GraduationCap, TrendingUp } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "15+ Certifications",
      description: "Data Analytics, Power BI, Cybersecurity, and Project Management"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "2+ Years Experience",
      description: "Sales Operations, IT Support, and Data Management"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Proven Results",
      description: "15% revenue growth, 30% reduction in stock discrepancies"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "Currently pursuing Data Science training at ALX Africa"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-full max-w-md aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl overflow-hidden">
                <div className="w-full h-full bg-slate-800 m-4 rounded-2xl flex items-center justify-center">
                  <span className="text-8xl font-bold text-blue-400">EB</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-lg opacity-20 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500 rounded-lg opacity-20 -z-10"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Multi-Disciplinary Digital Expert & Innovator
            </h3>
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              I'm the founder of <span className="font-bold text-blue-600">Botchway Digital</span>, a comprehensive 
              digital solutions firm specializing in full-stack development, data analytics, AI, UX/UI design, 
              graphic design, and professional photography. With expertise spanning the entire digital ecosystem, 
              I deliver end-to-end solutions that drive business growth and innovation.
            </p>
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              My technical arsenal includes web and mobile development (React, JavaScript, full-stack), advanced 
              data analytics with Power BI and Excel, AI and machine learning applications, modern UX/UI design, 
              creative graphic design, and professional photography. This unique combination allows me to approach 
              projects holistically, from concept to deployment.
            </p>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Through Botchway Digital, I've contributed to 15% revenue growth for clients, reduced operational 
              discrepancies by 30%, and created stunning digital experiences across web, mobile, and visual media. 
              I'm passionate about leveraging technology and creativity to solve complex challenges and create 
              value for businesses and individuals.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium">
                Based in Accra, Ghana
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium">
                Available for Projects
              </span>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                {item.title}
              </h4>
              <p className="text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}