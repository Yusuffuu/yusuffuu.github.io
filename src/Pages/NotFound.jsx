import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Search, AlertTriangle } from 'lucide-react'

function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-8xl font-bold text-border/20 select-none">
          404
        </div>
        <div className="absolute top-20 right-10 text-8xl font-bold text-border/20 select-none">
          404
        </div>
        <div className="absolute bottom-20 right-10 text-8xl font-bold text-border/20 select-none">
          404
        </div>
        <div className="absolute bottom-20 left-10 text-8xl font-bold text-border/20 select-none">
          404
        </div>
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-accent-blue/10 rounded-full flex items-center justify-center">
            <Search className="w-12 h-12 text-accent-blue" />
          </div>
        </div>

        {/* 404 Number */}
        <h1 className="text-8xl sm:text-9xl font-bold bg-linear-to-r from-accent-blue to-accent-blue-dark 
          bg-clip-text text-transparent mb-4">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-text-secondary text-base sm:text-lg mb-8 max-w-md mx-auto leading-relaxed">
          Oops! The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="https://yusuffuu.github.io"
            className="flex items-center justify-center gap-2 px-6 py-3 
              bg-linear-to-r from-accent-blue to-accent-blue-dark 
              text-white rounded-full font-medium 
              hover:shadow-lg hover:shadow-accent-blue/25 hover:-translate-y-0.5 
              transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-text-secondary text-sm mb-4">You might be looking for:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link 
              to="/about"
              className="px-4 py-2 bg-bg-card border border-border rounded-full 
                text-sm text-text-secondary hover:text-accent-blue hover:border-accent-blue 
                transition-all duration-300"
            >
              About Me
            </Link>
            <Link 
              to="/projects"
              className="px-4 py-2 bg-bg-card border border-border rounded-full 
                text-sm text-text-secondary hover:text-accent-blue hover:border-accent-blue 
                transition-all duration-300"
            >
              Projects
            </Link>
            <Link 
              to="/contact"
              className="px-4 py-2 bg-bg-card border border-border rounded-full 
                text-sm text-text-secondary hover:text-accent-blue hover:border-accent-blue 
                transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Fun Message */}
        <div className="mt-8 flex items-center justify-center gap-2 text-text-secondary text-sm">
          <AlertTriangle className="w-4 h-4" />
          <span>Error 404 - Page not found</span>
        </div>
      </div>
    </section>
  )
}

export default NotFound