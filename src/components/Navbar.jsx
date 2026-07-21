import { useState, useEffect } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 bg-bg-primary/40 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - scrolls to top */}
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-2xl font-bold"
          >
            <img
              src="./avatar.png"
              alt="Yusuf Logo"
              className="w-8 h-8 rounded-full inline-block mr-2"
            />
            <span className="bg-linear-to-r from-accent-blue to-accent-blue-dark bg-clip-text text-transparent">
              YUSUF
            </span>
            <span className="text-accent-blue">...</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative text-sm font-medium transition-colors duration-300 py-2
                  ${activeSection === link.id
                    ? 'text-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                  }
                  after:content-[''] after:absolute after:bottom-0 after:left-0
                  after:w-0 after:h-0.5 after:bg-accent-blue after:transition-all after:duration-300
                  hover:after:w-full
                  ${activeSection === link.id ? 'after:w-full' : ''}
                `}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-6 h-5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block absolute h-0.5 w-6 bg-text-primary transform transition duration-300 ease-in-out
              ${isOpen ? 'rotate-45 top-2' : 'top-0'}`}
            />
            <span className={`block absolute h-0.5 w-6 bg-text-primary top-2 transition duration-300 ease-in-out
              ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <span className={`block absolute h-0.5 w-6 bg-text-primary transform transition duration-300 ease-in-out
              ${isOpen ? '-rotate-45 top-2' : 'top-4'}`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="flex flex-col gap-2 py-4 border-t border-border">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-300 text-left
                  ${activeSection === link.id
                    ? 'text-accent-blue bg-accent-blue/10'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-card'
                  }
                `}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar