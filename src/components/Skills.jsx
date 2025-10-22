import React from 'react';
import { BarChart3, Database, LineChart, Cpu, Users, Shield, Code, Palette, Camera, Brain } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Analysis & Visualization",
      color: "from-blue-500 to-cyan-500",
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
      title: "Data Management",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "SQL (Basic)", level: 70 },
        { name: "Data Cleaning", level: 92 },
        { name: "ETL Processes", level: 85 },
        { name: "DAX Expressions", level: 88 },
        { name: "Data Transformation", level: 90 }
      ]
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React.js", level: 75 },
        { name: "Responsive Design", level: 88 },
        { name: "Tailwind CSS", level: 82 }
      ]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Artificial Intelligence & ML",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Machine Learning Basics", level: 65 },
        { name: "AI Tools & Platforms", level: 75 },
        { name: "Data Science", level: 70 },
        { name: "Python (Basic)", level: 68 },
        { name: "Predictive Analytics", level: 72 }
      ]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Graphic Design",
      color: "from-indigo-500 to-blue-500",
      skills: [
        { name: "Adobe Photoshop", level: 78 },
        { name: "Canva", level: 85 },
        { name: "UI/UX Design Basics", level: 72 },
        { name: "Brand Identity", level: 75 },
        { name: "Visual Communication", level: 80 }
      ]
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Photography & Media",
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Digital Photography", level: 80 },
        { name: "Photo Editing", level: 82 },
        { name: "Composition", level: 85 },
        { name: "Lighting Techniques", level: 75 },
        { name: "Content Creation", level: 78 }
      ]
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "IT & Systems",
      color: "from-pink-500 to-red-500",
      skills: [
        { name: "Network Configuration", level: 80 },
        { name: "Hardware/Software Installation", level: 85 },
        { name: "System Troubleshooting", level: 88 },
        { name: "Cybersecurity Basics", level: 75 },
        { name: "IT Support", level: 90 }
      ]
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Microsoft Office Suite",
      color: "from-teal-500 to-cyan-500",
      skills: [
        { name: "Excel (Advanced)", level: 95 },
        { name: "PowerPoint", level: 88 },
        { name: "Word", level: 90 },
        { name: "Outlook", level: 85 },
        { name: "Google Workspace", level: 82 }
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Business & Management",
      color: "from-violet-500 to-purple-500",
      skills: [
        { name: "CRM", level: 85 },
        { name: "Project Management", level: 80 },
        { name: "Process Optimization", level: 87 },
        { name: "Sales Operations", level: 88 },
        { name: "Team Leadership", level: 83 }
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