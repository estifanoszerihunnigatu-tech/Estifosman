import { useEffect, useRef } from 'react'

function ParticleBackground() {
  const containerRef = useRef(null)
  
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    
    const particles = []
    const particleCount = 50
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.classList.add('particle')
      
      const size = Math.random() * 5 + 1
      const left = Math.random() * 100
      const opacity = Math.random() * 0.3 + 0.1
      const duration = Math.random() * 20 + 10
      
      particle.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(59, 130, 246, 0.2);
        width: ${size}px;
        height: ${size}px;
        left: ${left}vw;
        opacity: ${opacity};
        animation: particleFloat ${duration}s linear infinite;
        animation-delay: ${Math.random() * 5}s;
      `
      
      container.appendChild(particle)
      particles.push(particle)
    }
    
    return () => {
      particles.forEach(p => p.remove())
    }
  }, [])
  
  return (
    <>
      <div ref={containerRef} className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"></div>
      <style>{`
        @keyframes particleFloat {
          from { transform: translateY(100vh) rotate(0deg); }
          to { transform: translateY(-100vh) rotate(360deg); }
        }
      `}</style>
    </>
  )
}

export default ParticleBackground
