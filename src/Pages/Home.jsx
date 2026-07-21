function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="animate-[fadeInUp_1s_ease] text-center md:text-left">
          <p className="text-accent-blue text-lg font-medium mb-2">
            Hello, I'm
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-linear-to-r from-accent-blue to-accent-blue-dark bg-clip-text text-transparent leading-tight">
            Yusuf
          </h1>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start items-center mb-6">
            <p className="text-xl sm:text-2xl text-text-secondary font-light">
              CS Student
            </p>
            <span className="text-accent-blue text-2xl hidden sm:block">|</span>
            <p className="text-xl sm:text-2xl text-text-secondary font-light">
              Aspiring Web Designer
            </p>
          </div>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
            Third-year Computer Science student at Murang'a University of Technology, 
            currently on industrial attachment. I craft clean, user-friendly web experiences.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 bg-linear-to-r from-accent-blue to-accent-blue-dark text-white 
                rounded-full font-medium hover:shadow-lg hover:shadow-accent-blue/25 
                hover:-translate-y-0.5 transition-all duration-300"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 border-2 border-accent-blue text-text-primary 
                rounded-full font-medium hover:bg-accent-blue/10 
                hover:-translate-y-0.5 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right Visual */}
        <button 
          onClick={() => scrollToSection('about')} 
          className="animate-[fadeInUp_1s_ease_0.2s_both] flex justify-center w-full"
        >
          <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 
            bg-bg-card/30 backdrop-blur-md
            border border-border/50 rounded-2xl flex items-center justify-center
            shadow-2xl shadow-black/50 hover:border-accent-blue hover:bg-bg-card/40 
            transition-all duration-300 cursor-pointer hover:scale-105">
            <div className="text-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto mb-4
                shadow-lg shadow-accent-blue/30 ring-2 ring-accent-blue ring-offset-4 
                ring-offset-transparent overflow-hidden">
                <img 
                  src="/yusuf.jpg" 
                  alt="Yusuf" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1">Yusuf</h3>
              <p className="text-white/80">Web Designer</p>
            </div>
          </div>
        </button>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer"
      >
        <div className="w-6 h-10 border-2 border-text-secondary rounded-2xl relative">
          <div className="w-1 h-2 bg-accent-blue rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-pulse" />
        </div>
        <p className="text-xs text-text-secondary">Scroll down</p>
      </button>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

export default Home