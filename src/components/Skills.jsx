import React from 'react';
import { BarChart3, Database, LineChart, Cpu, Users, Shield, Code, Palette, Camera, Brain } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 85 },
        { name: "JavaScript (ES6+)", level: 88 },
        { name: "Node.js & Express", level: 80 },
        { name: "HTML5 & CSS3", level: 90 },
        { name: "API Development & Integration", level: 82 }
      ]
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Responsive Web Design", level: 92 },
        { name: "Frontend Frameworks", level: 85 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Web Performance Optimization", level: 80 },
        { name: "Progressive Web Apps", level: 75 }
      ]
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Mobile App Development",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React Native", level: 80 },
        { name: "iOS & Android Development", level: 78 },
        { name: "Mobile UI/UX", level: 85 },
        { name: "App Store Deployment", level: 75 },
        { name: "Cross-Platform Apps", level: 82 }
      ]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UX/UI Development",
      color: "from-indigo-500 to-blue-500",
      skills: [
        { name: "User Research & Testing", level: 85 },
        { name: "Wireframing & Prototyping", level: 88 },
        { name: "Figma & Design Tools", level: 90 },
        { name: "User Interface Design", level: 87 },
        { name: "Design Systems", level: 82 }
      ]
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "E-Commerce Development",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Shopify Development", level: 83 },
        { name: "WooCommerce", level: 80 },
        { name: "Payment Gateway Integration", level: 85 },
        { name: "Shopping Cart Optimization", level: 82 },
        { name: "E-commerce Analytics", level: 88 }
      ]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Analysis & Visualization",
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Microsoft Excel", level: 95 },
        { name: "Power BI", level: 90 },
        { name: "Data Visualization", level: 88 },
        { name: "Business Intelligence", level: 85 },
        { name: "Data Analytics", level: 90 }
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database & Backend",
      color: "from-teal-500 to-cyan-500",
      skills: [
        { name: "SQL & Databases", level: 78 },
        { name: "MongoDB", level: 72 },
        { name: "Data Modeling", level: 80 },
        { name: "RESTful APIs", level: 83 },
        { name: "Server Management", level: 75 }
      ]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Machine Learning",
      color: "from-pink-500 to-red-500",
      skills: [
        { name: "AI Integration", level: 75 },
        { name: "Machine Learning Basics", level: 70 },
        { name: "ChatGPT & LLM APIs", level: 80 },
        { name: "Python (Basic)", level: 68 },
        { name: "Predictive Analytics", level: 72 }
      ]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Graphic Design",
      color: "from-violet-500 to-purple-500",
      skills: [
        { name: "Adobe Photoshop", level: 78 },
        { name: "Canva", level: 85 },
        { name: "Brand Identity Design", level: 80 },
        { name: "Logo Design", level: 82 },
        { name: "Visual Communication", level: 83 }
      ]
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Photography & Media",
      color: "from-amber-500 to-orange-500",
      skills: [
        { name: "Digital Photography", level: 80 },
        { name: "Photo Editing", level: 82 },
        { name: "Composition & Lighting", level: 85 },
        { name: "Product Photography", level: 78 },
        { name: "Content Creation", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Technical Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A diverse skill set spanning data analytics, web development, AI, graphic design, photography, and more
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center text-white mb-4 shadow-md`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Languages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <span className="font-semibold text-slate-900">English</span>
              <span className="text-slate-600 ml-2">(Fluent)</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <span className="font-semibold text-slate-900">Twi</span>
              <span className="text-slate-600 ml-2">(Fluent)</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <span className="font-semibold text-slate-900">Fante</span>
              <span className="text-slate-600 ml-2">(Fluent)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}