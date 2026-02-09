import { useState } from 'react'

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null)
  
  const projects = [
    {
      title: "Crime File Management System",
      description: "A comprehensive system for managing crime records, investigations, and case files with secure access control and reporting features. Built with Java and MySQL for efficient data management.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      gradient: "from-purple-600 via-purple-700 to-blue-600",
      technologies: ["Java", "MySQL", "Swing", "JDBC"],
      features: ["Secure Login System", "Case Management", "Report Generation", "Data Encryption"]
    },
    {
      title: "Student Internship Management System",
      description: "Web-based platform for managing student internships, company placements, progress tracking, and performance evaluation. Streamlines the internship process for students and coordinators.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
      features: ["Student Portal", "Company Dashboard", "Progress Tracking", "Document Management"]
    }
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Some of my recent work and development projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-0 group-hover:opacity-50 transition duration-500`}></div>
                
                <div className="relative glass-card p-8 rounded-3xl hover:transform hover:scale-105 transition-smooth">
                  <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden border border-white/10">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-300 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-4 py-2 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-smooth">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${hoveredProject === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <h4 className="font-semibold text-gray-300 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-400">
                          <i className="fas fa-check-circle text-green-400 mr-3 text-sm"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button 
                    className={`w-full mt-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-semibold hover:opacity-90 transition-smooth transform hover:scale-105 flex items-center justify-center space-x-3 ${hoveredProject === index ? 'translate-y-0' : 'translate-y-8'}`}
                    onClick={() => alert('Project details: ' + project.title)}
                  >
                    <i className="fas fa-code"></i>
                    <span>View Project Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="glass-card p-8 rounded-3xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Want to see more projects?</h3>
              <p className="text-gray-300 mb-6">
                Check out my GitHub profile for additional projects, contributions, and open-source work.
              </p>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-4 gradient-bg text-white rounded-2xl font-bold hover:gradient-bg-hover transform hover:scale-105 transition-smooth"
              >
                <i className="fab fa-github text-2xl"></i>
                <span>Visit My GitHub</span>
                <i className="fas fa-arrow-right group-hover:translate-x-2 transition-smooth"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
