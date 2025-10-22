import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.subject && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      primary: "edabbiebotchway@gmail.com",
      secondary: "emmanuel.botchway@ghanasig.org",
      link: "mailto:edabbiebotchway@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      primary: "+233 540 545 048",
      secondary: "+233 503 981 810",
      link: "tel:+233540545048"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      primary: "Accra, Ghana",
      secondary: "Available for remote work",
      link: null
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      primary: "Emmanuel Dabbie Botchway",
      secondary: "Connect with me professionally",
      link: "https://www.linkedin.com/in/emmanueldabbiebotchway"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Have a project in mind or want to discuss data analytics opportunities? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 mb-2">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-blue-600 hover:text-blue-700 font-medium block mb-1"
                        >
                          {info.primary}
                        </a>
                      ) : (
                        <p className="text-slate-900 font-medium mb-1">{info.primary}</p>
                      )}
                      <p className="text-slate-600 text-sm">{info.secondary}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
              <h4 className="font-bold text-slate-900 mb-3">Availability</h4>
              <div className="space-y-2 text-slate-700">
                <p className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Available for freelance projects
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Open to full-time opportunities
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Remote work preferred
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h4>
                  <p className="text-slate-600">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-slate-700 font-semibold mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-slate-700 font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-slate-700 font-semibold mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-slate-700 font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}