import React, { useState } from 'react';
import { Award, ChevronDown, ChevronUp, ExternalLink, GraduationCap, Shield, Briefcase, Globe } from 'lucide-react';

export default function Certifications() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const education = [
    {
      degree: "Data Science Training",
      institution: "ALX Africa",
      period: "In Progress",
      expected: "Expected Graduation: August 2026",
      current: true
    },
    {
      degree: "Data Analytics Training",
      institution: "Thrive Africa (Online)",
      period: "Completed",
      expected: "Graduated: September 2025",
      current: false
    },
    {
      degree: "Diploma in Information Technology Management",
      institution: "University of Professional Studies, Accra",
      period: "August 2013 - July 2015",
      current: false
    },
    {
      degree: "Senior School Certificate (General Arts)",
      institution: "Faith Community Baptist Senior High School",
      period: "September 2010 - June 2013",
      current: false
    }
  ];

  const certificationCategories = [
    {
      category: "Data Analytics & Business Intelligence",
      icon: <Award className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
      certs: [
        { name: "Data Analyst", provider: "SimpliLearn", date: "August 2025" },
        { name: "Business Intelligence using Excel", provider: "SimpliLearn", date: "August 2025" },
        { name: "Power BI for Beginners", provider: "SimpliLearn", date: "August 2025" },
        { name: "Introduction to Data Visualization", provider: "SimpliLearn", date: "August 2025" },
        { name: "Introduction to Data Analytics", provider: "SimpliLearn", date: "May 2024" }
      ]
    },
    {
      category: "IT & Cybersecurity",
      icon: <Shield className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
      certs: [
        { name: "Introduction to Cyber Security", provider: "SimpliLearn", date: "May 2022" },
        { name: "Introduction to Cybercrime", provider: "SimpliLearn", date: "October 2022" },
        { name: "Ethical Hacking for Beginners", provider: "SimpliLearn", date: "November 2022" }
      ]
    },
    {
      category: "Project Management & Professional Development",
      icon: <Briefcase className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500",
      certs: [
        { name: "Foundation of Project Management", provider: "Coventry University UK", date: "May 2021" },
        { name: "Digital Facilitation in Synchronous Events", provider: "International Labour Organization", date: "November 2022" },
        { name: "Business and Decent Work: MNE Declaration", provider: "International Labour Organization", date: "July 2022" }
      ]
    },
    {
      category: "Internet Governance",
      icon: <Globe className="w-5 h-5" />,
      color: "from-orange-500 to-red-500",
      certs: [
        { name: "Internet Governance Fellowship", provider: "EGIGFA", date: "November 2020" },
        { name: "Ghana School on Internet Governance Fellowship Mentor (GhanaSIG)", provider: "EGIGFA", date: "2022" },
        { name: "Internet Governance Fellowship", provider: "Bangladesh", date: "April 2021" }
      ]
    },
    {
      category: "Other Professional Certifications",
      icon: <GraduationCap className="w-5 h-5" />,
      color: "from-indigo-500 to-blue-500",
      certs: [
        { name: "ILO Convention No. 190 and No. 111: Violence, Harassment, Discrimination", provider: "ILO", date: "November 2022" },
        { name: "National Service Certification", provider: "Ghana", date: "August 2019" }
      ]
    }
  ];

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Continuous learning and professional development with 15+ industry certifications
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-600 font-semibold mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-slate-600 text-sm">
                      {edu.period}
                    </p>
                    {edu.expected && (
                      <p className="text-slate-500 text-sm mt-1">
                        {edu.expected}
                      </p>
                    )}
                  </div>
                  {edu.current && (
                    <span className="ml-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      Current
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Professional Certifications</h3>
          <div className="max-w-5xl mx-auto space-y-4">
            {certificationCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-slate-50 rounded-xl shadow-lg overflow-hidden border border-slate-200"
              >
                <button
                  onClick={() => toggleCategory(index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center text-white`}>
                      {category.icon}
                    </div>
                    <div className="text-left">
                      <h4 className="text-lg font-bold text-slate-900">
                        {category.category}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {category.certs.length} certification{category.certs.length > 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                  {expandedCategory === index ? (
                    <ChevronUp className="w-5 h-5 text-slate-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-600" />
                  )}
                </button>

                {expandedCategory === index && (
                  <div className="px-6 pb-4">
                    <div className="grid gap-3">
                      {category.certs.map((cert, certIndex) => (
                        <div 
                          key={certIndex}
                          className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h5 className="font-semibold text-slate-900 mb-1">
                                {cert.name}
                              </h5>
                              <div className="flex flex-wrap gap-2 text-sm">
                                <span className="text-blue-600 font-medium">
                                  {cert.provider}
                                </span>
                                <span className="text-slate-400">•</span>
                                <span className="text-slate-600">
                                  {cert.date}
                                </span>
                              </div>
                            </div>
                            <Award className="w-5 h-5 text-blue-600 flex-shrink-0 ml-2" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a 
              href="https://bit.ly/3HGB5Az"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              View Complete Certification Portfolio
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}