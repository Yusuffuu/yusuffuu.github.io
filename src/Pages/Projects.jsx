import { Home, Flame, Receipt, Building2, Globe, User } from 'lucide-react'

function Projects() {
  const projects = [
    {
      id: 1,
      title: '511 HOMES - Receipt Generator',
      category: 'Web App',
      description: 'Automatically parses M-Pesa SMS messages and generates branded PDF receipts for landlords and property managers.',
      features: [
        'M-Pesa SMS auto-parsing',
        'Branded PDF receipts',
        'Receipt history & rent balance tracking'
      ],
      technologies: ['React', 'Tailwind CSS', 'Dexie.js', 'PDF Renderer'],
      icon: Receipt,
      dotColor: 'bg-green-500',
      link: 'https://511-homes.vercel.app/',
      buttonText: 'View Project'
    },
    {
      id: 2,
      title: 'GasBiz - Gas Supply System',
      category: 'E-Commerce',
      description: 'A gas supply management platform with multi-role dashboards for clients, salespeople, and administrators.',
      features: [
        'Client, Salesperson & Admin dashboards',
        'Dynamic pricing & order tracking',
        'Zone-based order assignment'
      ],
      technologies: ['React', 'Tailwind CSS', 'React Router', 'LocalStorage'],
      icon: Flame,
      dotColor: 'bg-orange-500',
      link: 'https://gasbiz.fantomgroupltd.com/#/',
      buttonText: 'View Project'
    },
    {
      id: 3,
      title: 'Fantom Group - Corporate Site',
      category: 'Brand & Corporate',
      description: 'A modern corporate website showcasing three business pillars: digital lending, property management, and insurance solutions.',
      features: [
        'Three service divisions with detail pages',
        'Animated hero with Framer Motion',
        'Contact form & Google Maps integration'
      ],
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'React Router'],
      icon: Building2,
      dotColor: 'bg-blue-500',
      link: 'https://yusuffuu.github.io/Fantom-group/',
      buttonText: 'View Project'
    },
    {
      id: 4,
      title: 'Personal Portfolio',
      category: 'Portfolio',
      description: 'The site you\'re viewing now — built to showcase my skills, projects, and journey as a developer.',
      features: [
        'Dark theme with glass-morphism',
        'Interactive skills with code previews',
        'EmailJS contact form & visitor counter'
      ],
      technologies: ['React', 'Tailwind CSS', 'EmailJS', 'GitHub Pages'],
      icon: User,
      dotColor: 'bg-accent-blue',
      link: 'https://yusuffuu.github.io/Yusuf-portfolio/',
      buttonText: 'View on GitHub'
    }
  ]

  const getButtonIcon = (id) => {
    switch (id) {
      case 1: return <Receipt className="w-5 h-5" />
      case 2: return <Flame className="w-5 h-5" />
      case 3: return <Building2 className="w-5 h-5" />
      case 4: return <Globe className="w-5 h-5" />
      default: return null
    }
  }

  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 
          bg-linear-to-r from-accent-blue to-accent-blue-dark bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-center text-text-secondary text-lg mb-12">
          Here are some of my recent web development projects
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-bg-card/30 backdrop-blur-md border border-border rounded-2xl p-6 sm:p-8 
                hover:-translate-y-2 transition-all duration-300 hover:border-accent-blue
                hover:shadow-2xl hover:shadow-black/50 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-accent-blue" />
                </div>
                <span className="px-3 py-1 bg-accent-blue/10 text-accent-blue 
                  text-xs font-medium rounded-full">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="mb-4">
                <ul className="space-y-1.5">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className={`w-1.5 h-1.5 ${project.dotColor} rounded-full mt-1.5 shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 border border-border text-text-secondary 
                        text-xs font-medium rounded-full hover:bg-accent-blue/10 
                        hover:border-accent-blue hover:text-accent-blue 
                        transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live Demo Button */}
              <div className="mt-auto pt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-5 py-2.5 
                    bg-linear-to-r from-accent-blue to-accent-blue-dark 
                    text-white font-medium rounded-xl
                    hover:shadow-lg hover:shadow-accent-blue/20 
                    hover:-translate-y-0.5 transition-all duration-300
                    gap-2 text-sm"
                >
                  {getButtonIcon(project.id)}
                  <span>{project.buttonText}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects