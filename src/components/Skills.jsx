import { useState, useEffect } from 'react'

function Skills() {
  const [animatedPercentages, setAnimatedPercentages] = useState({})
  
  const technicalSkills = [
    { name: 'HTML/CSS', percentage: 88, color: 'from-orange-500 to-red-500' },
    { name: 'JavaScript', percentage: 60, color: 'from-yellow-400 to-yellow-500' },
    { name: 'React', percentage: 48, color: 'from-cyan-500 to-blue-500' },
    { name: 'Java', percentage: 80, color: 'from-red-500 to-orange-500' }
  ]

  const toolsSkills = [
    { name: 'Git/GitHub', percentage: 70, color: 'from-gray-700 to-gray-900' },
    { name: 'VS Code', percentage: 70, color: 'from-blue-500 to-blue-600' },
    { name: 'Tailwind CSS', percentage: 90, color: 'from-cyan-400 to-teal-500' },
    { name: 'Node.js', percentage: 60, color: 'from-green-500 to-green-600' }
  ]

  const additionalSkills = [
    'Problem Solving', 'Team Collaboration', 'Communication',
    'Time Management', 'Critical Thinking', 'Adaptability',
    'Project Management', 'Attention to Detail'
  ]

  useEffect(() => {
    const allSkills = [...technicalSkills, ...toolsSkills]
    const timeouts = allSkills.map((skill, index) => {
      return setTimeout(() => {
        setAnimatedPercentages(prev => ({
          ...prev,
          [skill.name]: skill.percentage
        }))
      }, index * 100)
    })
    
    return () => timeouts.forEach(timeout => clearTimeout(timeout))
  }, [])

  return (
    <section id="skills" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Technical expertise and tools I work with
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="glass-card p-8 rounded-3xl hover:transform hover:scale-105 transition-smooth">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <i className="fas fa-code text-blue-400 mr-3"></i>
                Technical Skills
              </h3>
              <div className="space-y-8">
                {technicalSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${skill.color}`}></div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-blue-400 font-semibold">
                        {animatedPercentages[skill.name] || 0}%
                      </span>
                    </div>
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${animatedPercentages[skill.name] || 0}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-3xl hover:transform hover:scale-105 transition-smooth">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <i className="fas fa-tools text-purple-400 mr-3"></i>
                Tools & Technologies
              </h3>
              <div className="space-y-8">
                {toolsSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${skill.color}`}></div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-purple-400 font-semibold">
                        {animatedPercentages[skill.name] || 0}%
                      </span>
                    </div>
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${animatedPercentages[skill.name] || 0}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Additional <span className="gradient-text">Competencies</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {additionalSkills.map((skill, index) => (
                <div key={index} className="px-6 py-3 bg-white/5 rounded-full hover:bg-white/10 transition-smooth group">
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-check-circle text-green-400 group-hover:scale-110 transition-smooth"></i>
                    <span className="font-medium">{skill}</span>
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

export default Skills
