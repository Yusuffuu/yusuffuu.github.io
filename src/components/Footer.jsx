import { Mail, ExternalLink, GitBranch, X, Camera, MessageCircle, MessageCircleDashed } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const renderIcon = (Icon, className) => {
    const SafeIcon = Icon || ExternalLink
    return <SafeIcon className={className} />
  }

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ]

  const socialLinks = [
    { icon: GitBranch, label: 'GitHub', link: 'https://github.com/Yusuffuu' },
    { icon: ExternalLink, label: 'LinkedIn', link: 'https://www.linkedin.com/in/joseph-karanja-92a3862a9' },
    { icon: Camera, label: 'Instagram', link: 'https://www.instagram.com/it.s_y.u.s.u.f?igsh=dTBnNGk3c2E0dW5j' },
    { icon: X, label: 'X (Twitter)', link: 'https://x.com/y_u_s_u_f_u' },
    { icon: MessageCircle, label: 'WhatsApp', link: 'https://wa.me/qr/REYXZ45FZTFSA1' },
    { icon: MessageCircleDashed, label: 'Facebook', link: 'https://www.facebook.com/share/1JeE8V3Rgj/' }
  ]

  return (
    <footer className="bg-bg-card/40 backdrop-blur-md border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-2xl font-bold inline-block mb-3"
            >
              <span className="bg-linear-to-r from-accent-blue to-accent-blue-dark bg-clip-text text-transparent">
                Joseph Karanja
              </span>
              <span className="text-accent-blue">.</span>
            </button>
            <p className="text-text-secondary text-sm">
              CS Student & Aspiring Web Designer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-primary font-semibold mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-text-secondary hover:text-accent-blue 
                    hover:translate-x-1 transition-all duration-300 text-sm text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-text-primary font-semibold mb-3">Connect</h4>
            <div className="flex flex-col gap-2 text-sm">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-secondary hover:text-accent-blue 
                    hover:translate-x-1 transition-all duration-300"
                >
                  {renderIcon(social.icon, "w-4 h-4")}
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-text-secondary">
          <div className="flex items-center gap-4">
            <p>&copy; {currentYear} Karanja. All rights reserved.</p>
            <img 
              src="https://visitor-badge.laobi.icu/badge?page_id=Yusuffuu.Yusuf-portfolio&theme=dark" 
              alt="visitor count"
              className="h-5 opacity-70"
            />
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:karanjajose003@gmail.com" className="hover:text-accent-blue transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer