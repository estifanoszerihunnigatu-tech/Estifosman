import { useState, useEffect } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = ['home', 'about', 'education', 'skills', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className={`fixed w-full z-50 py-4 transition-smooth ${scrolled ? 'glass-nav' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold text-white flex items-center space-x-2 hover:opacity-80 transition-smooth"
          >
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <i className="fas fa-code text-sm text-white"></i>
            </div>
            <span className="gradient-text font-bold">Estifanos</span>
            <span className="text-gray-300">Zerihun</span>
          </button>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'education', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`flex items-center space-x-2 transition-smooth capitalize ${
                  activeSection === section
                    ? 'text-white font-semibold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeSection === section && (
                  <div className="w-2 h-2 gradient-bg rounded-full"></div>
                )}
                <span>{section}</span>
              </button>
            ))}
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 p-2 hover:bg-white/10 rounded-lg transition-smooth"
            aria-label="Toggle menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 glass-card rounded-xl p-4 animate-fade-in-up">
            {['home', 'about', 'education', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-smooth capitalize ${
                  activeSection === section
                    ? 'gradient-bg text-white'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{section}</span>
                  {activeSection === section && (
                    <i className="fas fa-chevron-right text-sm"></i>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
