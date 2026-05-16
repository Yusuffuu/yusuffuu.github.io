import { useState } from 'react'
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    setTimeout(() => {
      setStatus('')
    }, 5000)
  }

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
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 
          bg-linear-to-r from-accent-blue to-accent-blue-dark bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-center text-text-secondary text-lg mb-12">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
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
                  <ExternalLink className="w-5 h-5" />
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
                  <ExternalLink className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-text-primary mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-bg-secondary border border-border 
                    rounded-xl text-text-primary placeholder-gray-600
                    focus:outline-none focus:border-accent-blue focus:ring-2 
                    focus:ring-accent-blue/20 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-bg-secondary border border-border 
                    rounded-xl text-text-primary placeholder-gray-600
                    focus:outline-none focus:border-accent-blue focus:ring-2 
                    focus:ring-accent-blue/20 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Collaboration"
                  className="w-full px-4 py-3 bg-bg-secondary border border-border 
                    rounded-xl text-text-primary placeholder-gray-600
                    focus:outline-none focus:border-accent-blue focus:ring-2 
                    focus:ring-accent-blue/20 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or question..."
                  rows="5"
                  className="w-full px-4 py-3 bg-bg-secondary border border-border 
                    rounded-xl text-text-primary placeholder-gray-600 resize-y min-h-[120px]
                    focus:outline-none focus:border-accent-blue focus:ring-2 
                    focus:ring-accent-blue/20 transition-all duration-300"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-linear-to-r from-accent-blue to-accent-blue-dark 
                  text-white font-medium rounded-xl
                  hover:shadow-lg hover:shadow-accent-blue/25 
                  hover:-translate-y-0.5 transition-all duration-300"
              >
                Send Message
              </button>

              {status === 'success' && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500 
                  rounded-xl text-emerald-500 text-center">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact