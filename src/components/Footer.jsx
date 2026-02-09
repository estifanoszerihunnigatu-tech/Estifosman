function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = ['about', 'education', 'skills', 'projects', 'contact']

  return (
    <footer className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
            <div className="mb-8 lg:mb-0 text-center lg:text-left">
              <button
                onClick={() => scrollToSection('home')}
                className="text-2xl font-bold text-white flex items-center space-x-3 mb-4 hover:opacity-80 transition-smooth"
              >
                <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                  <i className="fas fa-code text-white"></i>
                </div>
                <span className="gradient-text font-bold">Estifanos</span>
                <span className="text-gray-300">Zerihun</span>
              </button>
              <p className="text-gray-400 max-w-md">
                Computer Science Student | Web Developer | Tech Enthusiast
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-3 mt-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                <span className="text-gray-300">Based in Ethiopia</span>
              </div>
            </div>

            <div className="text-gray-400 text-center lg:text-right">
              <div className="mb-6">
                <div className="font-semibold text-white mb-4">Quick Links</div>
                <div className="flex flex-wrap justify-center lg:justify-end gap-6">
                  {quickLinks.map((link) => (
                    <button 
                      key={link} 
                      onClick={() => scrollToSection(link)}
                      className="text-gray-400 hover:text-white transition-smooth capitalize"
                    >
                      {link}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-sm">© {new Date().getFullYear()} Estifanos Zerihun. All rights reserved.</p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-500 text-sm mb-6 md:mb-0 text-center">
                <p className="flex items-center justify-center md:justify-start">
                  <i className="fas fa-heart text-red-500 mx-2"></i>
                  Built with React, Tailwind CSS, and passion
                </p>
                <p className="mt-2">Madda Walabu University • 3rd Year Computer Science</p>
              </div>
              
              <div className="flex items-center space-x-6">
                <a 
                  href="mailto:estifanoszerihunnigatu@gmail.com"
                  className="text-gray-400 hover:text-white transition-smooth"
                  title="Email"
                >
                  <i className="fas fa-envelope text-xl"></i>
                </a>
                <a 
                  href="tel:+251934923899"
                  className="text-gray-400 hover:text-white transition-smooth"
                  title="Phone"
                >
                  <i className="fas fa-phone text-xl"></i>
                </a>
                <button
                  onClick={scrollToTop}
                  className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white hover:gradient-bg-hover transform hover:scale-110 transition-smooth"
                  aria-label="Scroll to top"
                  title="Back to top"
                >
                  <i className="fas fa-arrow-up"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
