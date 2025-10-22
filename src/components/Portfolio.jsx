import React, { useState } from 'react';
import { ExternalLink, BarChart3, Database, TrendingUp, Filter } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "Sales Performance Dashboard",
      category: "Power BI",
      description: "Interactive Power BI dashboard analyzing sales trends, customer behavior, and revenue optimization for True Harvest Enterprise. Contributed to 15% revenue growth.",
      tags: ["Power BI", "DAX", "Data Visualization", "Sales Analytics"],
      image: "data-viz",
      metrics: ["15% Revenue Growth", "200+ Clients Tracked", "Monthly Reports"]
    },
    {
      title: "Inventory Management System",
      category: "Excel",
      description: "Advanced Excel-based inventory tracking system for Space Pharmacy Ltd managing 500+ pharmaceutical products with automated alerts and stock optimization.",
      tags: ["Excel", "Data Management", "Automation", "Inventory Control"],
      image: "inventory",
      metrics: ["30% Reduction in Discrepancies", "500+ Products", "Real-time Tracking"]
    },
    {
      title: "Customer Retention Analysis",
      category: "Data Analytics",
      description: "Comprehensive data analysis project identifying customer behavior patterns and implementing retention strategies, improving repeat customer rate by 20%.",
      tags: ["Data Analysis", "Excel", "Customer Analytics", "Strategy"],
      image: "customer",
      metrics: ["20% Retention Increase", "200+ Clients", "Predictive Insights"]
    },
    {
      title: "Financial Transaction System",
      category: "Data Management",
      description: "Developed transaction tracking and reporting system managing GHS 50,000+ monthly with zero discrepancies and automated reconciliation processes.",
      tags: ["Data Management", "Excel", "Financial Reporting", "Accuracy"],
      image: "finance",
      metrics: ["Zero Discrepancies", "GHS 50K+ Monthly", "100% Accuracy"]
    },
    {
      title: "ETL Data Pipeline",
      category: "Data Analytics",
      description: "Built ETL processes for data extraction, transformation, and loading from multiple sources, ensuring data quality and consistency for business intelligence.",
      tags: ["ETL", "Data Transformation", "SQL", "Power BI"],
      image: "etl",
      metrics: ["Multiple Data Sources", "Automated Processing", "Data Quality Assurance"]
    },
    {
      title: "Business Intelligence Reports",
      category: "Power BI",
      description: "Created comprehensive BI reports and dashboards for management decision-making, featuring KPIs, trends analysis, and predictive insights.",
      tags: ["Business Intelligence", "Power BI", "KPI Tracking", "Reporting"],
      image: "bi-reports",
      metrics: ["Real-time KPIs", "Interactive Dashboards", "Actionable Insights"]
    }
  ];

  const categories = [
    { name: 'All Projects', value: 'all', icon: <Filter className="w-4 h-4" /> },
    { name: 'Power BI', value: 'Power BI', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Data Analytics', value: 'Data Analytics', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'Excel', value: 'Excel', icon: <Database className="w-4 h-4" /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getImageGradient = (image) => {
    const gradients = {
      'data-viz': 'from-blue-500 to-cyan-500',
      'inventory': 'from-purple-500 to-pink-500',
      'customer': 'from-green-500 to-emerald-500',
      'finance': 'from-orange-500 to-red-500',
      'etl': 'from-indigo-500 to-blue-500',
      'bi-reports': 'from-yellow-500 to-orange-500'
    };
    return gradients[image] || 'from-blue-500 to-purple-500';
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Portfolio & Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real-world data analytics projects showcasing expertise in Power BI, Excel, and business intelligence
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveFilter(category.value)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeFilter === category.value
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`h-48 bg-gradient-to-br ${getImageGradient(project.image)} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <BarChart3 className="w-20 h-20 text-white/80 transform group-hover:scale-110 transition-transform duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4 space-y-2">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-slate-700 font-medium">{metric}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white text-slate-600 text-xs rounded-full border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm font-semibold">
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">
            Want to see more of my work or discuss a project?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
}