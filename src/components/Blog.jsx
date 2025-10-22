import React from 'react';
import { Calendar, Clock, ArrowRight, TrendingUp, BookOpen } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      title: "Mastering Power BI: Top 10 DAX Functions Every Analyst Should Know",
      excerpt: "Discover the essential DAX functions that will transform your Power BI dashboards and make your data analysis more efficient and powerful.",
      category: "Power BI",
      date: "October 10, 2025",
      readTime: "8 min read",
      image: "powerbi",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Analytics in 2025: Trends and Technologies Shaping the Future",
      excerpt: "Explore the latest trends in data analytics, from AI integration to real-time analytics, and how they're transforming business intelligence.",
      category: "Industry Trends",
      date: "October 5, 2025",
      readTime: "6 min read",
      image: "trends",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Building Your First ETL Pipeline: A Beginner's Guide",
      excerpt: "Learn how to create efficient Extract, Transform, Load processes that ensure data quality and consistency across your organization.",
      category: "Data Engineering",
      date: "September 28, 2025",
      readTime: "10 min read",
      image: "etl",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Excel Tips & Tricks: Advanced Formulas for Data Analysis",
      excerpt: "Unlock the power of Excel with these advanced formulas and techniques that will supercharge your data analysis workflow.",
      category: "Excel",
      date: "September 20, 2025",
      readTime: "7 min read",
      image: "excel",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "How to Create Interactive Dashboards That Drive Business Decisions",
      excerpt: "Best practices for designing dashboards that not only look great but also provide actionable insights for stakeholders.",
      category: "Data Visualization",
      date: "September 15, 2025",
      readTime: "9 min read",
      image: "dashboard",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "From Data to Insights: My Journey into Data Analytics",
      excerpt: "A personal story about transitioning into data analytics, the challenges faced, and lessons learned along the way.",
      category: "Career",
      date: "September 8, 2025",
      readTime: "5 min read",
      image: "journey",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Latest Articles & Insights
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Sharing knowledge, tips, and insights about data analytics, business intelligence, and technology
          </p>
        </div>

        {/* Featured Post */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl overflow-hidden mb-12 shadow-xl border border-blue-100">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            <div className="flex flex-col justify-center">
              <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full mb-4 w-fit">
                Featured Post
              </span>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                {blogPosts[0].title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-6 mb-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {blogPosts[0].date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {blogPosts[0].readTime}
                </div>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 w-fit">
                Read Article
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className={`bg-gradient-to-br ${blogPosts[0].color} rounded-xl flex items-center justify-center min-h-[300px]`}>
              <TrendingUp className="w-32 h-32 text-white/80" />
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.slice(1).map((post, index) => (
            <article
              key={index}
              className="bg-slate-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className={`h-48 bg-gradient-to-br ${post.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <BookOpen className="w-16 h-16 text-white/80 transform group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
                  {post.category}
                </span>

                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>

                <button className="text-blue-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}