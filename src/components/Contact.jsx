import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: 'fa-envelope',
      title: 'Email',
      value: 'estifanoszerihunnigatu@gmail.com',
      type: 'email',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: 'fa-phone',
      title: 'Phone',
      value: '+251 934 923 899',
      type: 'phone',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'fa-map-marker-alt',
      title: 'Location',
      value: 'Bale Robe, Ethiopia',
      type: 'location',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'fa-university',
      title: 'University',
      value: 'Madda Walabu University',
      type: 'education',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const socialLinks = [
    { name: 'GitHub', icon: 'fa-github', color: 'hover:bg-gray-800', link: 'https://github.com' },
    { name: 'LinkedIn', icon: 'fa-linkedin', color: 'hover:bg-blue-700', link: 'https://linkedin.com' },
    { name: 'Twitter', icon: 'fa-twitter', color: 'hover:bg-blue-400', link: 'https://twitter.com' },
    { name: 'Telegram', icon: 'fa-telegram', color: 'hover:bg-blue-500', link: 'https://t.me/Kiyaye143III' },
    { name: 'Facebook', icon: 'fa-facebook', color: 'hover:bg-pink-600', link: 'https://www.facebook.com/estifanoszerihun.este' }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setIsSubmitted(true)
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-purple-500/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="glass-card p-8 rounded-3xl hover:transform hover:scale-105 transition-smooth">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <i className="fas fa-paper-plane text-blue-400 mr-3"></i>
                Send me a message
              </h3>
              
              {isSubmitted && (
                <div className="mb-6 p-6 bg-gradient-to-r from-green-500/20 to-green-400/10 border border-green-500/30 rounded-2xl text-green-400 animate-fade-in-up">
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-check-circle text-2xl"></i>
                    <div className="flex-1">
                      <div className="font-bold text-lg">Message Sent Successfully!</div>
                      <div className="text-sm mt-1">I'll get back to you within 24 hours.</div>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="block text-gray-300 font-medium">Your Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-smooth"
                      placeholder="Estifanos Zerihun"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-gray-300 font-medium">Your Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-smooth"
                      placeholder="estifanos@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-gray-300 font-medium">Subject *</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-smooth"
                    placeholder="Project Inquiry or Collaboration"
                    required
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-gray-300 font-medium">Message *</label>
                  <textarea 
                    rows="6" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none transition-smooth"
                    placeholder="Hello! I'd like to discuss a project with you..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-4 gradient-bg text-white font-bold rounded-2xl hover:gradient-bg-hover transform hover:scale-105 transition-smooth flex items-center justify-center space-x-3 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
            
            <div>
              <div className="grid grid-cols-2 gap-6 mb-12">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.type === 'email' ? `mailto:${info.value}` : info.type === 'phone' ? `tel:${info.value.replace(/\s+/g, '')}` : '#'}
                    className="group"
                  >
                    <div className="glass-card p-6 rounded-2xl hover:transform hover:scale-105 transition-smooth text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth`}>
                        <i className={`fas ${info.icon} text-white text-2xl`}></i>
                      </div>
                      <h4 className="font-bold mb-2">{info.title}</h4>
                      <p className="text-gray-300 text-sm">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="glass-card p-8 rounded-3xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <i className="fas fa-share-alt text-purple-400 mr-3"></i>
                  Connect with me
                </h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-gray-300 ${social.color} transform hover:scale-110 transition-smooth`}
                      aria-label={social.name}
                      title={social.name}
                    >
                      <i className={`fab ${social.icon} text-xl`}></i>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 glass-card p-6 rounded-3xl">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-3 animate-pulse"></div>
                  <span className="text-green-400 font-semibold">Currently Available</span>
                </div>
                <p className="text-gray-300">
                  I'm actively seeking internship opportunities, freelance projects, and collaborations. 
                  Feel free to reach out for any inquiries!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
