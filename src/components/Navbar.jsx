import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-bg-primary/95 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            <img 
             src="./avatar.png" 
             alt="Yusuf Logo" 
             className="w-8 h-8 rounded-full inline-block mr-2"
            />
            <span className="bg-linear-to-r from-accent-blue to-accent-blue-dark bg-clip-text text-transparent">
              YUSUF
            </span>
            <span className="text-accent-blue">...</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors duration-300 py-2
                  ${location.pathname === link.path 
                    ? 'text-text-primary' 
                    : 'text-text-secondary hover:text-text-primary'
                  }
                  after:content-[''] after:absolute after:bottom-0 after:left-0 
                  after:w-0 after:h-0.5 after:bg-accent-blue after:transition-all after:duration-300
                  hover:after:w-full
                  ${location.pathname === link.path ? 'after:w-full' : ''}
                `}
              >
                {link.label}
              </Link>
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
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-300
                  ${location.pathname === link.path 
                    ? 'text-accent-blue bg-accent-blue/10' 
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-card'
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar