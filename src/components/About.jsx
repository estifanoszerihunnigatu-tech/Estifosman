function About() {
  const personalInfo = [
    { icon: 'fa-user', label: 'Full Name', value: 'Estifanos Zerihun Nigatu' },
    { icon: 'fa-envelope', label: 'Email', value: 'estifanoszerihunnigatu@gmail.com' },
    { icon: 'fa-phone', label: 'Phone', value: '+251 934 923 899' },
    { icon: 'fa-map-marker-alt', label: 'Location', value: 'Bale Robe, Ethiopia' },
    { icon: 'fa-university', label: 'University', value: 'Madda Walabu University' },
  ]

  const languages = [
    { language: 'Amharic', level: 'Native', percentage: 100, color: 'from-blue-500 to-blue-600' },
    { language: 'English', level: 'Fluent', percentage: 85, color: 'from-purple-500 to-purple-600' },
    { language: 'Sidamu Afoo', level: 'Intermediate', percentage: 70, color: 'from-cyan-500 to-cyan-600' },
    { language: 'Arabic', level: 'Basic', percentage: 40, color: 'from-gray-500 to-gray-600' },
  ]

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">About</span> Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get to know more about my background, skills, and what drives me
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="glass-card p-8 rounded-3xl hover:transform hover:scale-105 transition-smooth">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <i className="fas fa-user-circle text-blue-400 mr-3"></i>
                Personal Information
              </h3>
              <div className="space-y-6">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-smooth">
                    <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                      <i className={`fas ${info.icon} text-white`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-400 text-sm">{info.label}</div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-3xl hover:transform hover:scale-105 transition-smooth">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <i className="fas fa-language text-purple-400 mr-3"></i>
                Languages
              </h3>
              <div className="space-y-8">
                {languages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${lang.color}`}></div>
                        <span className="font-medium">{lang.language}</span>
                      </div>
                      <span className="text-blue-400 font-semibold">{lang.level}</span>
                    </div>
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${lang.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
