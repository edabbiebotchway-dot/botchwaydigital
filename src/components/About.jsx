import React, { useState } from 'react';
import { Award, Briefcase, GraduationCap, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

export default function About() {
  const [showMore, setShowMore] = useState(false);

  const highlights = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "15+ Certifications",
      description: "Data Analytics, Power BI, Cybersecurity, and Project Management"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "2+ Years Experience",
      description: "Full-Stack Development, Data Management & IT Support"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Proven Results",
      description: "15% revenue growth, 30% cost reduction for clients"
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
              <div className="w-full max-w-md aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl overflow-hidden p-2">
                <img 
                  src="/images/professional-photo-1.jpg" 
                  alt="Emmanuel Dabbie Botchway - Professional Photo" 
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    // Fallback to photo-2 if photo-1 doesn't load
                    e.target.onerror = null;
                    e.target.src = "/images/professional-photo-2.jpg";
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-lg opacity-20 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500 rounded-lg opacity-20 -z-10"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Full-Stack Developer & Digital Solutions Expert
            </h3>
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              I'm the founder of <span className="font-bold text-blue-600">Botchway I.T Solution</span>, specializing 
              in <span className="font-semibold">full-stack web development</span>, <span className="font-semibold">mobile 
              application development</span>, <span className="font-semibold">e-commerce solutions</span>, 
              <span className="font-semibold">UX/UI design</span>, data analytics, AI integration, graphic design, 
              and professional photography.
            </p>
            
            {/* Collapsible content */}
            <div className={`overflow-hidden transition-all duration-500 ${showMore ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                My technical expertise includes modern web technologies (React, JavaScript, HTML/CSS, Tailwind), 
                mobile app development (React Native), full-stack development (frontend + backend), UX/UI design 
                (Figma, user research, prototyping), e-commerce platforms (Shopify, WooCommerce), advanced data 
                analytics with Power BI and Excel, AI and machine learning applications, creative graphic design, 
                and professional photography.
              </p>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Through Botchway I.T Solution, I've built scalable web applications, launched mobile apps, designed 
                intuitive user experiences, developed e-commerce stores, and contributed to 15% revenue growth 
                for clients while reducing operational costs by 30%. I'm passionate about creating digital 
                solutions that combine technical excellence with beautiful design.
              </p>
            </div>

            {/* Read More Button */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {showMore ? (
                <>
                  Show Less
                  <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  Read More
                  <ChevronDown className="w-5 h-5" />
                </>
              )}
            </button>

            <div className="flex flex-wrap gap-3 mt-6">
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