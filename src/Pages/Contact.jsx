import { useState } from 'react'
import { Phone, Mail, MapPin, Github, Linkedin } from 'lucide-react'

function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '0790392893',
      link: 'tel:0790392893'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'karanjajose003@gmail.com',
      link: 'mailto:karanjajose003@gmail.com'
    },
    {
      icon: MapPin,
      label: 'P.O Box',
      value: "75-10200, Murang'a",
      link: null
    }
  ]

  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ... title stays same ... */}
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Contact Information
            </h3>
            <p className="text-text-secondary mb-6">
              I'm currently available for freelance work and interesting projects.
            </p>

            <div className="space-y-3 mb-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-bg-card border border-border 
                    rounded-xl hover:border-accent-blue hover:translate-x-1 
                    transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-accent-blue" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-text-primary">{info.label}</h4>
                    {info.link ? (
                      <a href={info.link} className="text-accent-blue hover:text-blue-400 transition-colors duration-300">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-text-secondary">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-3">Find me on</h4>
              <div className="flex gap-3">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-bg-card border border-border 
                    rounded-full text-text-secondary hover:border-accent-blue 
                    hover:text-text-primary hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-bg-card border border-border 
                    rounded-full text-text-secondary hover:border-accent-blue 
                    hover:text-text-primary hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          {/* ... form section stays same ... */}
        </div>
      </div>
    </section>
  )
}

export default Contact