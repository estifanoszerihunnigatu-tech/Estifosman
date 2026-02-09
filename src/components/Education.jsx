import { useState } from 'react'

function Education() {
  const [showCertificates, setShowCertificates] = useState({})

  const toggleCertificates = (index) => {
    setShowCertificates(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const educationHistory = [
    {
      side: 'left',
      institution: 'Madda Walabu University',
      period: '2022 - Present',
      degree: 'B.Sc. in Computer Science (3rd Year)',
      courses: ['Web Programming', 'Java Programming', 'Operating Systems', 'Software Engineering', 'Automata Theory', 'Assembly Language']
    },
    {
      side: 'right',
      institution: 'HAWASSA Preparatory School',
      period: '2019 - 2021',
      degree: 'Natural Science Stream'
    },
    {
      side: 'left',
      institution: 'Hayole Educational Project / Fura Mode Academy',
      period: '2015 - 2018',
      degree: 'Secondary Education - Hawassa Special Board'
    }
  ]

  const certifications = [
    {
      title: '5 Million Ethio Coders',
      description: 'Programming Fundamentals Certificate',
      icon: 'fa-medal',
      color: 'from-purple-500 to-pink-500',
      link: 'https://www.udacity.com/certificate/e/af32bf9e-a82f-11f0-adc6-07d512018002',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: 'ESHE E-Learning Platform',
      description: 'Multiple Course Certifications',
      icon: 'fa-certificate',
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      certificates: [
        { name: 'Certificate 1', link: 'https://lms.courses.ethernet.edu.et/certificates/6aec9aba5cce4e07939a15422281285d' },
        { name: 'Certificate 2', link: 'https://lms.courses.ethernet.edu.et/certificates/d79970be781e495aa8e389d188ce72d8' },
        { name: 'Certificate 3', link: 'https://lms.courses.ethernet.edu.et/certificates/744b82bb8cf3423d8ffce3aee8449f0f' },
        { name: 'Certificate 4', link: 'https://lms.courses.ethernet.edu.et/certificates/fdd2d961f9ac429dbdb607025fcf9f94' },
        { name: 'Certificate 5', link: 'https://lms.courses.ethernet.edu.et/certificates/7261d1235dba43e999027ccdca605649' },
        { name: 'Certificate 6', link: 'https://lms.courses.ethernet.edu.et/certificates/beea445c846c4f7ca5aaaa137940aad3' },
        { name: 'Certificate 7', link: 'https://lms.courses.ethernet.edu.et/certificates/612ef65f0d574e7aa4b86a64a11c5478' }
      ]
    }
  ]

  const projects = [
    {
      title: "Crime File Management System",
      description: "A comprehensive system for managing crime records, investigations, and case files with secure access control and reporting features.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      gradient: "from-purple-600 via-purple-700 to-blue-600",
      technologies: ["Java", "MySQL", "Swing", "JDBC"],
      features: ["Secure Login System", "Case Management", "Report Generation", "Data Encryption"]
    },
    {
      title: "Student Internship Management System",
      description: "Web-based platform for managing student internships, company placements, progress tracking, and performance evaluation.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
      features: ["Student Portal", "Company Dashboard", "Progress Tracking", "Document Management"],
      link: "http://localhost:3000"
    }
  ]

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Education</span> Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My academic path and professional certifications
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"></div>
            
            {educationHistory.map((edu, index) => (
              <div key={index} className={`relative mb-12 ${edu.side === 'left' ? 'md:pr-1/2 md:pl-0 pl-12' : 'md:pl-1/2 md:pr-0 pl-12 md:text-right'}`}>
                <div className={`absolute ${edu.side === 'left' ? 'left-0' : 'md:left-1/2 left-0'} transform ${edu.side === 'left' ? 'md:-translate-x-1/2' : 'md:translate-x-1/2'} -translate-x-1/2 w-6 h-6 gradient-bg rounded-full border-4 border-gray-900`}></div>
                
                <div className="glass-card p-8 rounded-3xl hover:transform hover:scale-105 transition-smooth">
                  <div className={`flex ${edu.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-start justify-between mb-6`}>
                    <h3 className="text-2xl font-bold">{edu.institution}</h3>
                    <span className="px-4 py-2 gradient-bg rounded-full text-sm font-semibold">{edu.period}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{edu.degree}</p>
                  {edu.courses && (
                    <div>
                      <h4 className="font-semibold text-gray-300 mb-4">Key Courses:</h4>
                      <div className="flex flex-wrap gap-3">
                        {edu.courses.map((course, i) => (
                          <span key={i} className="px-4 py-2 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-smooth">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Featured Projects Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12">
              Featured <span className="gradient-text">Projects</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group">
                  <div className="glass-card p-8 rounded-3xl hover:transform hover:scale-105 transition-smooth">
                    {/* Project Image */}
                    <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden border border-white/10">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                      />
                    </div>
                    
                    {/* Project Title & Description */}
                    <h4 className="text-2xl font-bold mb-4">{project.title}</h4>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-300 mb-3">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-4 py-2 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-smooth">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-300 mb-3">Key Features:</h5>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-400">
                            <i className="fas fa-check-circle text-green-400 mr-3 text-sm"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* View Button */}
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-semibold hover:opacity-90 transition-smooth transform hover:scale-105 flex items-center justify-center space-x-3`}
                      >
                        <i className="fas fa-external-link-alt"></i>
                        <span>View Live Project</span>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    ) : (
                      <button 
                        className={`w-full py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-semibold hover:opacity-90 transition-smooth transform hover:scale-105 flex items-center justify-center space-x-3`}
                        onClick={() => alert('Project: ' + project.title)}
                      >
                        <i className="fas fa-code"></i>
                        <span>View Project Details</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="gradient-text">Certifications</span> & Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="group">
                  <div className="glass-card p-8 rounded-3xl hover:transform hover:scale-105 transition-smooth">
                    {/* Certificate Image */}
                    {cert.image && (
                      <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden border border-white/10">
                        <img 
                          src={cert.image} 
                          alt={cert.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                        />
                      </div>
                    )}
                    
                    <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth`}>
                      <i className={`fas ${cert.icon} text-white text-2xl`}></i>
                    </div>
                    <h4 className="text-2xl font-bold mb-3">{cert.title}</h4>
                    <p className="text-gray-300 mb-4">{cert.description}</p>
                    
                    {/* Single certificate link */}
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-6 py-3 gradient-bg text-white rounded-xl font-semibold hover:gradient-bg-hover transform hover:scale-105 transition-smooth"
                      >
                        <i className="fas fa-certificate"></i>
                        <span>View Certificate</span>
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    )}
                    
                    {/* Multiple certificates */}
                    {cert.certificates && (
                      <div className="space-y-4">
                        <button
                          onClick={() => toggleCertificates(index)}
                          className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 gradient-bg text-white rounded-xl font-semibold hover:gradient-bg-hover transform hover:scale-105 transition-smooth"
                        >
                          <i className="fas fa-certificate"></i>
                          <span>View Certificates ({cert.certificates.length})</span>
                          <i className={`fas fa-chevron-${showCertificates[index] ? 'up' : 'down'} transition-transform`}></i>
                        </button>
                        
                        {showCertificates[index] && (
                          <div className="space-y-3 animate-fade-in-up">
                            <p className="text-sm text-gray-400">
                              Click any certificate to view:
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                              {cert.certificates.map((certificate, i) => (
                                <a
                                  key={i}
                                  href={certificate.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/50 rounded-lg transition-smooth text-sm group"
                                >
                                  <i className="fas fa-certificate text-blue-400 group-hover:scale-110 transition-transform"></i>
                                  <span className="font-medium">Certificate {i + 1}</span>
                                  <i className="fas fa-external-link-alt text-xs opacity-0 group-hover:opacity-100 transition-opacity"></i>
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
