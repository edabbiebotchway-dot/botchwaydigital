import React from 'react';
import { BarChart3, Database, FileSpreadsheet, Settings, TrendingUp, PieChart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Power BI Dashboard Development",
      description: "Create interactive and visually appealing Power BI dashboards that transform your data into actionable insights. Custom KPIs, real-time monitoring, and automated reporting.",
      features: [
        "Custom dashboard design",
        "DAX expressions & calculations",
        "Real-time data connections",
        "Interactive visualizations"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Analysis & Insights",
      description: "Comprehensive data analysis services to uncover trends, patterns, and opportunities. Transform raw data into meaningful business intelligence.",
      features: [
        "Statistical analysis",
        "Trend identification",
        "Predictive analytics",
        "Performance metrics"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FileSpreadsheet className="w-8 h-8" />,
      title: "Advanced Excel Solutions",
      description: "Leverage advanced Excel capabilities for data management, automation, and analysis. Custom formulas, pivot tables, macros, and complex calculations.",
      features: [
        "Complex formulas & functions",
        "Pivot tables & charts",
        "Data validation & cleaning",
        "Automated workflows"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "ETL Process Implementation",
      description: "Design and implement efficient ETL (Extract, Transform, Load) processes to ensure data quality, consistency, and accessibility across your organization.",
      features: [
        "Data extraction pipelines",
        "Transformation logic",
        "Data quality assurance",
        "Integration solutions"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Business Intelligence Consulting",
      description: "Strategic BI consulting to help you make data-driven decisions. From strategy development to implementation and optimization.",
      features: [
        "BI strategy development",
        "Tool selection & implementation",
        "Best practices guidance",
        "Training & support"
      ],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Sales & Operations Analytics",
      description: "Specialized analytics for sales operations, customer behavior, inventory management, and operational efficiency optimization.",
      features: [
        "Sales performance tracking",
        "Customer analytics",
        "Inventory optimization",
        "Process improvement"
      ],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Services I Offer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive data analytics and business intelligence services to help your business thrive
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full px-6 py-3 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-blue-100">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Choose Me?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2+
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Years Experience</h4>
              <p className="text-slate-600 text-sm">In data analytics and operations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                15+
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Certifications</h4>
              <p className="text-slate-600 text-sm">Industry-recognized credentials</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                100%
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Client Satisfaction</h4>
              <p className="text-slate-600 text-sm">Proven track record of success</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                24/7
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Support Available</h4>
              <p className="text-slate-600 text-sm">Committed to your success</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to Transform Your Data?
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help you unlock the full potential of your data and drive business growth
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}