import React from 'react';
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Sales and Marketing Supervisor",
      company: "True Harvest Enterprise",
      location: "Accra, Ghana",
      period: "January 2024 - Present",
      current: true,
      achievements: [
        "Supervise daily sales operations for team of 3 staff members, ensuring 100% compliance with company standards",
        "Analyze sales data using Excel to identify trends and optimize product placement, contributing to 15% revenue growth",
        "Maintain customer database of 200+ clients and generate monthly performance reports for management review",
        "Handle monetary transactions averaging GHS 50,000 monthly with zero discrepancies",
        "Develop and implement customer retention strategies, improving repeat customer rate by 20%"
      ]
    },
    {
      title: "IT Support, Purchasing Officer & Medicine Counter Assistant",
      company: "Space Pharmacy Ltd",
      location: "Accra, Ghana",
      period: "September 2019 - August 2021",
      current: false,
      achievements: [
        "Provided IT support to 15+ staff members, resolving 95% of technical issues within 24 hours",
        "Monitored and maintained computer systems, network infrastructure, and pharmacy management software",
        "Set up new user accounts and conducted training sessions for junior staff on software applications",
        "Managed inventory data for 500+ pharmaceutical products using Excel, reducing stock discrepancies by 30%",
        "Processed customer transactions and maintained accurate daily sales records for financial reporting",
        "Collaborated with vendors to optimize purchasing decisions based on sales data analysis"
      ]
    },
    {
      title: "Pupils Teacher & Office Clerk",
      company: "Medie Presby Basic School 2",
      location: "Accra, Ghana",
      period: "August 2018 - August 2019",
      current: false,
      achievements: [
        "Taught Mathematics and ICT to 120+ students across JHS 1-3, achieving 85% pass rate in final exams",
        "Assisted Head Teacher with administrative duties including data entry and record management",
        "Validated teacher payroll data monthly on NTC portal, ensuring 100% accuracy for 25+ staff members",
        "Supervised and coordinated end-of-term and mock examinations for 200+ students"
      ]
    },
    {
      title: "Supervising Officer",
      company: "Narhgrant Enterprise",
      location: "Accra, Ghana",
      period: "December 2016 - June 2018",
      current: false,
      achievements: [
        "Maintained daily sales records and generated weekly/monthly reports for management and CEO",
        "Managed customer bookings and inquiries via telephone, maintaining 95% customer satisfaction rate",
        "Processed banking transactions and utility bill payments averaging GHS 30,000 monthly",
        "Coordinated with stakeholders to ensure seamless service delivery and client retention",
        "Educated 100+ customers on company services and products, increasing service adoption by 25%"
      ]
    },
    {
      title: "Regional Field Officer",
      company: "Charter House Ghana",
      location: "Accra, Ghana",
      period: "July 2016 - December 2016",
      current: false,
      achievements: [
        "Recruited and screened 150+ youth participants for company program, ensuring gender-balanced participation",
        "Collected and managed baseline data through surveys and interviews using paper-based systems",
        "Maintained accurate participant records and generated progress reports for program management",
        "Managed team of 5 volunteers, providing guidance and resolving operational challenges",
        "Coordinated with partner organizations to facilitate participant referrals and program integration"
      ]
    },
    {
      title: "IT Support Officer (Internship)",
      company: "Ghana Atomic Energy Commission",
      location: "Accra, Ghana",
      period: "June 2014 - October 2014",
      current: false,
      achievements: [
        "Assisted in troubleshooting and configuring network infrastructure across multiple departments",
        "Supported networking setup for newly constructed accounting office in 2014",
        "Resolved network connectivity issues at GAEC Hospital, GAEC School, and University of Nuclear and Allied Science administration offices"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Over 6 years of diverse experience in sales operations, IT support, and data management
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 relative">
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className={`md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 transform hover:-translate-y-1">
                      <div className="mb-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold text-slate-900 flex-1">
                            {exp.title}
                          </h3>
                          {exp.current && (
                            <span className="ml-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="flex items-center text-blue-600 font-semibold mb-2">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {exp.company}
                        </div>
                        <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.period}
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-slate-700">
                            <TrendingUp className="w-4 h-4 mr-2 mt-1 text-blue-600 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}