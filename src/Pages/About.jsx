import { GraduationCap, Briefcase, Code2, Heart } from 'lucide-react'

function About() {
  const skills = ['HTML', 'JavaScript', 'C', 'C++', 'PHP', 'MySQL']
  
  const hobbies = [
    { name: 'Swimming', icon: Heart, description: 'Staying active and refreshed' },
    { name: 'Skating', icon: Heart, description: 'Balance and freedom on wheels' }
  ]

  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 
          bg-linear-to-r from-accent-blue to-accent-blue-dark bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {/* Education Card */}
          <div className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8 
            hover:border-accent-blue hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-8 h-8 text-accent-blue" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div>
              <h4 className="text-xl font-medium text-text-primary mb-1">Computer Science</h4>
              <p className="text-accent-blue font-medium mb-1">Murang'a University of Technology</p>
              <p className="text-text-secondary text-sm mb-1">3rd Year Student</p>
              <p className="text-text-secondary text-sm">Currently on Industrial Attachment</p>
            </div>
          </div>

          {/* Experience Card */}
          <div className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8 
            hover:border-accent-blue hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-8 h-8 text-accent-blue" />
              <h3 className="text-2xl font-semibold">Experience</h3>
            </div>
            <div>
              <h4 className="text-xl font-medium text-text-primary mb-2">Web Design</h4>
              <p className="text-text-secondary">
                Building responsive and user-friendly web interfaces with modern technologies
              </p>
            </div>
          </div>

          {/* Skills Card */}
          <div className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8 
            hover:border-accent-blue hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-8 h-8 text-accent-blue" />
              <h3 className="text-2xl font-semibold">Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-linear-to-r from-accent-blue to-accent-blue-dark 
                    text-white text-sm font-medium rounded-full
                    hover:scale-105 hover:shadow-lg hover:shadow-accent-blue/30 
                    transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Hobbies Card */}
          <div className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8 
            hover:border-accent-blue hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-accent-blue" />
              <h3 className="text-2xl font-semibold">Hobbies</h3>
            </div>
            <div className="space-y-3">
              {hobbies.map((hobby) => (
                <div 
                  key={hobby.name}
                  className="flex items-center gap-4 p-3 bg-bg-secondary rounded-xl 
                    hover:bg-linear-to-br hover:from-[#1a1a2e] hover:to-[#16213e] 
                    transition-all duration-300"
                >
                  <hobby.icon className="w-8 h-8 text-accent-blue" />
                  <div>
                    <h4 className="font-medium text-text-primary">{hobby.name}</h4>
                    <p className="text-sm text-text-secondary">{hobby.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About