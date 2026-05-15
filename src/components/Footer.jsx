import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold inline-block mb-3">
              <span className="bg-linear-to-r from-accent-blue to-accent-blue-dark bg-clip-text text-transparent">
                Yusuf
              </span>
              <span className="text-accent-blue">.</span>
            </Link>
            <p className="text-text-secondary text-sm">
              CS Student & Aspiring Web Designer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-primary font-semibold mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-text-secondary hover:text-accent-blue 
                    hover:translate-x-1 transition-all duration-300 text-sm"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-text-primary font-semibold mb-3">Contact</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a 
                href="mailto:karanjajose003@gmail.com"
                className="text-text-secondary hover:text-accent-blue transition-colors duration-300"
              >
                karanjajose003@gmail.com
              </a>
              <a 
                href="tel:0790392893"
                className="text-text-secondary hover:text-accent-blue transition-colors duration-300"
              >
                0790392893
              </a>
              <p className="text-text-secondary">P.O Box 75-10200, Murang'a</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row 
          justify-between items-center gap-2 text-sm text-text-secondary">
          <p>&copy; {currentYear} Yusuf. All rights reserved.</p>
          <p>Made with ❤️ by Yusuf</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer