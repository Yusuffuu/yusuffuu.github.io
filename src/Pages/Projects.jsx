import { Home, Flame } from 'lucide-react'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Prestige Home Properties',
      category: 'Web Application',
      description: 'A comprehensive property listing platform that revolutionizes the house-hunting experience. Clients can search for vacant houses online without physical visits, while landlords can showcase their apartments to potential tenants.',
      features: [
        'Online house search functionality',
        'Landlord dashboard for property management',
        'Apartment listing and showcase system',
        'User-friendly search filters',
        'Real-time property availability updates'
      ],
      technologies: ['HTML', 'PHP', 'MySQL', 'CSS', 'JavaScript'],
      icon: Home,
      dotColor: 'bg-blue-500',
      link: null
    },
    {
      id: 2,
      title: 'GasBiz - Gas Supply System',
      category: 'E-Commerce Platform',
      description: 'A comprehensive gas supply management system that connects clients, salespeople, and administrators. Features include product ordering, order tracking, role-based dashboards, and real-time order management.',
      features: [
        'Multi-role dashboard (Client, Salesperson, Admin)',
        'Product ordering with dynamic pricing',
        'Order tracking and status updates',
        'Zone-based order assignment',
        'Sales performance analytics',
        'Responsive design for all devices'
      ],
      technologies: ['React', 'Tailwind CSS', 'React Router', 'Lucide Icons', 'LocalStorage'],
      icon: Flame,
      dotColor: 'bg-orange-500',
      link: 'https://yusuffuu.github.io/Gas-Biz/',
      buttonText: 'View Live Project'
    }
  ]

  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 
          bg-linear-to-r from-accent-blue to-accent-blue-dark bg-clip-text text-transparent">
          Academic Projects
        </h2>
        <p className="text-center text-text-secondary text-lg mb-12">
          Here are some projects I've worked on during my studies
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8 
                hover:-translate-y-2 transition-all duration-300 hover:border-accent-blue
                hover:shadow-2xl hover:shadow-black/50 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-5">
                <div className="w-14 h-14 bg-accent-blue/10 rounded-xl flex items-center justify-center">
                  <project.icon className="w-7 h-7 text-accent-blue" />
                </div>
                <span className="px-3 py-1 bg-accent-blue/10 text-accent-blue 
                  text-xs font-medium rounded-full">
                  {project.category}
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-text-primary mb-3">
                {project.title}
              </h3>
              <p className="text-text-secondary leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="mb-5">
                <h4 className="text-lg font-semibold text-text-primary mb-3">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-text-secondary">
                      <span className={`w-2 h-2 ${project.dotColor} rounded-full mt-2 shrink-0`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-5">
                <h4 className="text-lg font-semibold text-text-primary mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 border border-border text-text-secondary 
                        text-sm font-medium rounded-full hover:bg-accent-blue/10 
                        hover:border-accent-blue hover:text-accent-blue 
                        transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live Demo Button - Only shows for projects with a link */}
              {project.link && (
                <div className="mt-auto pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 
                      bg-linear-to-r from-accent-blue to-accent-blue-dark 
                      text-white font-medium rounded-xl
                      hover:shadow-lg hover:shadow-accent-blue/20 
                      hover:-translate-y-0.5 transition-all duration-300
                      gap-2"
                  >
                    <Flame className="w-5 h-5" />
                    <span>{project.buttonText}</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects