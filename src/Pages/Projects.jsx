import { Home, ClipboardList } from 'lucide-react'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Prestige Home Properties',
      category: 'Web Application',
      icon: Home,
      // ... rest stays same
    },
    {
      id: 2,
      title: 'Class Attendance System',
      category: 'Academic Management Tool',
      icon: ClipboardList,
      // ... rest stays same
    }
  ]

  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ... title section stays same ... */}
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="...">
              <div className="flex justify-between items-start mb-5">
                <div className="w-14 h-14 bg-accent-blue/10 rounded-xl flex items-center justify-center">
                  <project.icon className="w-7 h-7 text-accent-blue" />
                </div>
                {/* ... rest stays same ... */}
              </div>
              {/* ... rest of the card ... */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects