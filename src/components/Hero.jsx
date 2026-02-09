import { useState, useEffect } from 'react'

function Hero() {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const roles = ['CS Student', 'Web Developer', 'React Enthusiast', 'Problem Solver']

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    if (currentIndex < roles.length) {
      const timeout = setTimeout(() => {
        setCurrentText(roles[currentIndex].substring(0, currentText.length + 1))
        if (currentText.length === roles[currentIndex].length) {
          setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % roles.length)
            setCurrentText('')
          }, 1500)
        }
      }, 100)
      return () => {
        clearTimeout(timeout)
        clearInterval(cursorInterval)
      }
    }

    return () => clearInterval(cursorInterval)
  }, [currentText, currentIndex])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="relative inline-block mb-8">
            <div className="w-40 h-40 rounded-full mx-auto mb-6 overflow-hidden border-4 border-blue-500/30 shadow-xl animate-float">
              <img 
                src="/photo_2026-01-14_22-20-39.jpg" 
                alt="Estifanos Zerihun"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
              <i className="fas fa-bolt text-white text-sm"></i>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Estifanos Zerihun</span>
          </h1>
          
          <div className="text-2xl md:text-3xl font-semibold mb-6 h-12">
            <span className="text-blue-400">I'm a </span>
            <span className="text-white">{currentText}</span>
            <span className={`text-blue-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
          </div>
          
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            3rd Year Computer Science student at Madda Walabu University with passion for 
            creating innovative web solutions and cutting-edge applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative"
            >
              <div className="absolute -inset-1 gradient-bg rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <div className="relative px-8 py-4 gradient-bg text-white rounded-2xl font-bold text-lg hover:gradient-bg-hover transform hover:scale-105 transition-smooth flex items-center justify-center space-x-3">
                <i className="fas fa-paper-plane"></i>
                <span>Contact Me</span>
              </div>
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/20 hover:border-white/30 transform hover:scale-105 transition-smooth flex items-center justify-center space-x-3"
            >
              <i className="fas fa-eye"></i>
              <span>View Projects</span>
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { value: '3rd', label: 'Year CS', icon: 'fa-graduation-cap' },
              { value: '1+', label: 'Years Exp', icon: 'fa-code' },
              { value: '10+', label: 'Projects', icon: 'fa-project-diagram' },
              { value: '4', label: 'Languages', icon: 'fa-language' },
            ].map((stat, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl hover:transform hover:scale-105 transition-smooth">
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400 flex items-center justify-center space-x-2">
                  <i className={`fas ${stat.icon} text-blue-400`}></i>
                  <span>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 hover:text-white transition-smooth"
        aria-label="Scroll to about section"
      >
        <i className="fas fa-chevron-down text-2xl"></i>
      </button>
    </section>
  )
}

export default Hero
