import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg-secondary border-t border-border">
      {/* ... content stays the same ... */}
      <div className="border-t border-border pt-6 flex flex-col sm:flex-row 
        justify-between items-center gap-2 text-sm text-text-secondary">
        <p>&copy; {currentYear} Yusuf. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="mailto:karanjajose003@gmail.com" className="hover:text-accent-blue transition-colors">
            <Mail className="w-4 h-4" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer