import React, { useState } from 'react';
import { Award, ChevronDown, ChevronUp, ExternalLink, GraduationCap, Shield, Briefcase, Globe, Eye, ChevronRight } from 'lucide-react';
import CertificateModal from './CertificateModal';

export default function Certifications() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const openModal = (cert) => {
    setSelectedCertificate(cert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  const toggleDescription = (certId) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [certId]: !prev[certId]
    }));
  };

  const education = [
    {
      id: 'edu-1',
      degree: "Data Science Training",
      institution: "ALX Africa",
      period: "In Progress",
      expected: "Expected Graduation: August 2026",
      current: true,
      description: "Comprehensive data science program covering Python programming, machine learning algorithms, statistical analysis, data visualization, and advanced analytics. This intensive program includes hands-on projects, real-world case studies, and industry mentorship to prepare students for careers in data science and analytics.",
      shortDescription: "Comprehensive data science program covering Python programming, machine learning algorithms..."
    },
    {
      id: 'edu-2',
      degree: "Data Analytics Training",
      institution: "Thrive Africa (Online)",
      period: "Completed",
      expected: "Graduated: September 2025",
      current: false,
      description: "Advanced data analytics training program focusing on Excel advanced functions, Power BI dashboard development, data visualization techniques, ETL processes, and DAX expressions. The program included practical projects and real-world applications in business intelligence and data-driven decision making.",
      shortDescription: "Advanced data analytics training program focusing on Excel advanced functions, Power BI dashboard development..."
    },
    {
      id: 'edu-3',
      degree: "Diploma in Information Technology Management",
      institution: "University of Professional Studies, Accra",
      period: "August 2013 - July 2015",
      current: false,
      description: "Comprehensive IT management program covering systems administration, network management, database systems, software development lifecycle, project management, and business technology integration. The program provided both theoretical knowledge and practical skills for IT leadership roles.",
      shortDescription: "Comprehensive IT management program covering systems administration, network management..."
    },
    {
      id: 'edu-4',
      degree: "Senior School Certificate (General Arts)",
      institution: "Faith Community Baptist Senior High School",
      period: "September 2010 - June 2013",
      current: false,
      description: "WASSCE Certificate in General Arts with focus on English, Mathematics, Economics, Geography, and Government. This foundational education provided strong analytical and communication skills that have been essential in my professional development.",
      shortDescription: "WASSCE Certificate in General Arts with focus on English, Mathematics, Economics..."
    }
  ];

  const certificationCategories = [
    {
      category: "Artificial Intelligence & Machine Learning",
      icon: <Award className="w-5 h-5" />,
      color: "from-violet-500 to-purple-500",
      certs: [
        { 
          id: 'cert-18',
          name: "ILO Masterclass on AI", 
          provider: "International Labour Organization", 
          date: "2024",
          image: "/certificates/ilo-masterclass-ai.jpg",
          description: "Advanced masterclass on artificial intelligence applications in the workplace, covering AI ethics, automation impacts on labor markets, responsible AI deployment, and future of work considerations in the age of AI transformation."
        },
        { 
          id: 'cert-19',
          name: "Introduction to Modern AI", 
          provider: "Cisco", 
          date: "2024",
          image: "/certificates/intro-modern-ai-cisco.jpg",
          description: "Comprehensive introduction to modern artificial intelligence concepts including machine learning fundamentals, neural networks, AI applications in networking and cybersecurity, and emerging AI technologies shaping digital transformation."
        }
      ]
    },
    {
      category: "Data Analytics & Business Intelligence",
      icon: <Award className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
      certs: [
        { 
          id: 'cert-1',
          name: "Data Analyst", 
          provider: "SimpliLearn", 
          date: "August 2025",
          image: "/certificates/data-analyst-simplilearn.jpg",
          description: "Comprehensive data analysis certification covering statistical analysis, data visualization, and business intelligence tools. This certification validates expertise in transforming raw data into actionable business insights."
        },
        { 
          id: 'cert-2',
          name: "Business Intelligence using Excel", 
          provider: "SimpliLearn", 
          date: "August 2025",
          image: "/certificates/business-intelligence-excel-simplilearn.jpg",
          description: "Advanced Excel techniques for business intelligence including pivot tables, advanced formulas, data modeling, and dashboard creation for executive reporting."
        },
        { 
          id: 'cert-3',
          name: "Power BI for Beginners", 
          provider: "SimpliLearn", 
          date: "August 2025",
          image: "/certificates/power-bi-beginners-simplilearn.jpg",
          description: "Introduction to Power BI covering data connection, transformation, visualization creation, and dashboard development for business intelligence solutions."
        },
        { 
          id: 'cert-4',
          name: "Introduction to Data Visualization", 
          provider: "SimpliLearn", 
          date: "August 2025",
          image: "/certificates/intro-data-visualization-simplilearn.jpg",
          description: "Fundamentals of data visualization principles, chart types, color theory, and best practices for creating effective visual representations of data."
        },
        { 
          id: 'cert-5',
          name: "Introduction to Data Analytics", 
          provider: "SimpliLearn", 
          date: "May 2024",
          image: "/certificates/intro-data-analytics-simplilearn.jpg",
          description: "Foundational course covering data analysis methodologies, statistical concepts, data cleaning techniques, and basic analytical tools for business applications."
        },
        { 
          id: 'cert-17',
          name: "Data Analytics Training", 
          provider: "Thrive Africa", 
          date: "September 2025",
          image: "/certificates/data-analytics-thrive-africa.jpg",
          description: "Advanced data analytics training program focusing on Excel advanced functions, Power BI dashboard development, data visualization techniques, ETL processes, and DAX expressions."
        }
      ]
    },
    {
      category: "IT & Cybersecurity",
      icon: <Shield className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
      certs: [
        { 
          id: 'cert-6',
          name: "Introduction to Cyber Security", 
          provider: "SimpliLearn", 
          date: "May 2022",
          image: "/certificates/intro-cybersecurity-simplilearn.jpg",
          description: "Comprehensive introduction to cybersecurity concepts, threat landscape, security protocols, and best practices for protecting digital assets and information systems."
        },
        { 
          id: 'cert-7',
          name: "Introduction to Cybercrime", 
          provider: "SimpliLearn", 
          date: "October 2022",
          image: "/certificates/intro-cybercrime-simplilearn.jpg",
          description: "Understanding cybercrime types, attack vectors, prevention strategies, and legal frameworks for combating digital crimes and protecting organizational assets."
        },
        { 
          id: 'cert-8',
          name: "Ethical Hacking for Beginners", 
          provider: "SimpliLearn", 
          date: "November 2022",
          image: "/certificates/ethical-hacking-beginners-simplilearn.jpg",
          description: "Introduction to ethical hacking methodologies, penetration testing techniques, vulnerability assessment, and security testing tools for defensive cybersecurity."
        },
        { 
          id: 'cert-20',
          name: "Introduction to CISSP: Security Assessment and Testing & Security Operations", 
          provider: "SimpliLearn", 
          date: "2024",
          image: "/certificates/intro-cissp-security-simplilearn.jpg",
          description: "Foundational CISSP training covering security assessment methodologies, testing procedures, security operations management, incident response, disaster recovery, and security monitoring best practices for enterprise environments."
        }
      ]
    },
    {
      category: "Networking & Infrastructure",
      icon: <Globe className="w-5 h-5" />,
      color: "from-cyan-500 to-blue-500",
      certs: [
        { 
          id: 'cert-21',
          name: "Networking Basics", 
          provider: "Cisco", 
          date: "2024",
          image: "/certificates/networking-basics-cisco.jpg",
          description: "Foundational networking certification covering network fundamentals, TCP/IP protocols, network topologies, routing and switching basics, network security essentials, and troubleshooting methodologies for modern network infrastructure."
        }
      ]
    },
    {
      category: "Project Management & Professional Development",
      icon: <Briefcase className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500",
      certs: [
        { 
          id: 'cert-9',
          name: "Foundation of Project Management", 
          provider: "Coventry University UK", 
          date: "May 2021",
          image: "/certificates/foundation-project-management-coventry.jpg",
          description: "University-level project management certification covering project lifecycle, planning methodologies, risk management, and stakeholder communication strategies."
        },
        { 
          id: 'cert-22',
          name: "Professional Development Skills", 
          provider: "ALX Africa", 
          date: "2024",
          image: "/certificates/professional-development-alx.jpg",
          description: "Comprehensive professional development program covering communication skills, leadership principles, teamwork and collaboration, time management, problem-solving techniques, emotional intelligence, and career advancement strategies for the modern workplace."
        },
        { 
          id: 'cert-10',
          name: "Digital Facilitation in Synchronous Events", 
          provider: "International Labour Organization", 
          date: "November 2022",
          image: "/certificates/digital-facilitation-synchronous-ilo.jpg",
          description: "Professional certification in digital facilitation techniques for virtual meetings, online workshops, and synchronous learning environments."
        },
        { 
          id: 'cert-11',
          name: "Business and Decent Work: MNE Declaration", 
          provider: "International Labour Organization", 
          date: "July 2022",
          image: "/certificates/business-decent-work-mne-ilo.jpg",
          description: "ILO certification on multinational enterprise guidelines, decent work principles, and responsible business practices in global supply chains."
        }
      ]
    },
    {
      category: "Internet Governance",
      icon: <Globe className="w-5 h-5" />,
      color: "from-orange-500 to-red-500",
      certs: [
        { 
          id: 'cert-12',
          name: "Internet Governance Fellowship", 
          provider: "EGIGFA", 
          date: "November 2020",
          image: "/certificates/internet-governance-fellowship-egigfa.jpg",
          description: "Comprehensive fellowship program covering internet governance principles, multi-stakeholder processes, digital policy development, and global internet infrastructure management."
        },
        { 
          id: 'cert-13',
          name: "Ghana School on Internet Governance Fellowship Mentor (GhanaSIG)", 
          provider: "EGIGFA", 
          date: "2022",
          image: "/certificates/ghanasig-mentor-egigfa.jpg",
          description: "Mentorship certification for Ghana School on Internet Governance, involving training facilitation, curriculum development, and guidance for internet governance professionals."
        },
        { 
          id: 'cert-14',
          name: "Internet Governance Fellowship", 
          provider: "Bangladesh", 
          date: "April 2021",
          image: "/certificates/internet-governance-fellowship-bangladesh.jpg",
          description: "International fellowship program on internet governance, digital rights, cybersecurity policy, and regional internet governance frameworks in South Asia."
        }
      ]
    },
    {
      category: "Other Professional Certifications",
      icon: <GraduationCap className="w-5 h-5" />,
      color: "from-indigo-500 to-blue-500",
      certs: [
        { 
          id: 'cert-15',
          name: "ILO Convention No. 190 and No. 111: Violence, Harassment, Discrimination", 
          provider: "ILO", 
          date: "November 2022",
          image: "/certificates/ilo-convention-190-111-ilo.jpg",
          description: "International Labour Organization certification on workplace violence prevention, harassment policies, and anti-discrimination measures in professional environments."
        },
        { 
          id: 'cert-16',
          name: "National Service Certification", 
          provider: "Ghana", 
          date: "August 2019",
          image: "/certificates/national-service-ghana.jpg",
          description: "Official certification of completion of Ghana National Service, demonstrating commitment to national development and professional service to the country."
        }
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
            Continuous learning and professional development with 20+ industry certifications
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {education.map((edu) => (
              <div 
                key={edu.id}
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
                
                {/* Expandable Description */}
                <div className="mt-4">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {expandedDescriptions[edu.id] ? edu.description : edu.shortDescription}
                  </p>
                  <button
                    onClick={() => toggleDescription(edu.id)}
                    className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1 transition-colors"
                  >
                    {expandedDescriptions[edu.id] ? 'Show Less' : 'Read More'}
                    <ChevronRight className={`w-4 h-4 transition-transform ${expandedDescriptions[edu.id] ? 'rotate-90' : ''}`} />
                  </button>
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
                      {category.certs.map((cert) => (
                        <div 
                          key={cert.id}
                          className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <h5 className="font-semibold text-slate-900 mb-1">
                                {cert.name}
                              </h5>
                              <div className="flex flex-wrap gap-2 text-sm mb-2">
                                <span className="text-blue-600 font-medium">
                                  {cert.provider}
                                </span>
                                <span className="text-slate-400">•</span>
                                <span className="text-slate-600">
                                  {cert.date}
                                </span>
                              </div>
                              
                              {/* Expandable Description */}
                              <div className="mt-2">
                                <p className="text-slate-600 text-sm leading-relaxed">
                                  {expandedDescriptions[cert.id] ? cert.description : `${cert.description.substring(0, 100)}...`}
                                </p>
                                <button
                                  onClick={() => toggleDescription(cert.id)}
                                  className="mt-1 text-blue-600 hover:text-blue-800 text-xs font-medium flex items-center gap-1 transition-colors"
                                >
                                  {expandedDescriptions[cert.id] ? 'Show Less' : 'Read More'}
                                  <ChevronRight className={`w-3 h-3 transition-transform ${expandedDescriptions[cert.id] ? 'rotate-90' : ''}`} />
                                </button>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              <button
                                onClick={() => openModal(cert)}
                                className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                title="View Certificate"
                              >
                                <Eye className="w-4 h-4" />
                                View
                              </button>
                              <Award className="w-5 h-5 text-blue-600" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>


        </div>

        {/* Certificate Modal */}
        <CertificateModal 
          isOpen={isModalOpen}
          onClose={closeModal}
          certificate={selectedCertificate}
        />
      </div>
    </section>
  );
}