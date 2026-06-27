import { useState, useRef } from 'react'
import { Phone, Mail, MapPin, ExternalLink, GitBranch, X, Camera, MessageCircle, MessageCircleDashed, Send, Loader } from 'lucide-react'
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('') // '', 'sending', 'success', 'error'

  // 🔑 REPLACE THESE with your actual EmailJS IDs
  const EMAILJS_SERVICE_ID = 'service_29a4o6q'
  const EMAILJS_TEMPLATE_ID = 'template_yknm9ka'
  const EMAILJS_PUBLIC_KEY = 'G7J3t4iSHKjyiB5UA'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    }

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus(''), 5000)
      })
      .catch((error) => {
        console.error('EmailJS Error:', error)
        setStatus('error')
        setTimeout(() => setStatus(''), 8000)
      })
  }

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '0790392893',
      link: 'tel:0790392893',
      action: 'Call now'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'karanjajose003@gmail.com',
      link: 'mailto:karanjajose003@gmail.com',
      action: 'Send email'
    },
    {
      icon: MapPin,
      label: 'P.O Box',
      value: "75-10200, Murang'a",
      link: null,
      action: null
    }
  ]

  const socialLinks = [
    { icon: GitBranch, label: 'GitHub', link: 'https://github.com/Yusuffuu' },
    { icon: ExternalLink, label: 'LinkedIn', link: 'https://www.linkedin.com/in/joseph-karanja-92a3862a9' },
    { icon: Camera, label: 'Instagram', link: 'https://www.instagram.com/it.s_j.o.s.e' },
    { icon: X, label: 'X (Twitter)', link: 'https://x.com/y_u_s_u_f_u' },
    { icon: MessageCircle, label: 'WhatsApp', link: 'https://wa.me/qr/REYXZ45FZTFSA1' },
    { icon: MessageCircleDashed, label: 'Facebook', link: 'https://www.facebook.com/share/1JeE8V3Rgj/' }
  ]

  const renderIcon = (Icon, className) => {
    const SafeIcon = Icon || ExternalLink
    return <SafeIcon className={className} />
  }

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
          {/* Left column: Contact Information & Social Links */}
          <div>
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Contact Information
            </h3>
            <p className="text-text-secondary mb-6">
              I'm currently available for freelance work and interesting projects.
            </p>

            <div className="space-y-3 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index}>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="flex items-center gap-4 p-4 bg-bg-card border border-border 
                        rounded-xl hover:border-accent-blue hover:translate-x-1 
                        transition-all duration-300 group cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center
                        group-hover:bg-accent-blue/20 transition-colors">
                        {renderIcon(info.icon, "w-6 h-6 text-accent-blue")}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-text-primary">{info.label}</h4>
                        <p className="text-accent-blue group-hover:text-blue-400 transition-colors">
                          {info.value}
                        </p>
                      </div>
                      <span className="text-xs text-accent-blue opacity-0 group-hover:opacity-100 transition-opacity">
                        {info.action} →
                      </span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 bg-bg-card border border-border 
                      rounded-xl hover:border-accent-blue hover:translate-x-1 
                      transition-all duration-300">
                      <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center">
                        {renderIcon(info.icon, "w-6 h-6 text-accent-blue")}
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-text-primary">{info.label}</h4>
                        <p className="text-text-secondary">{info.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links Section */}
            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-3">Connect with me</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-bg-card border border-border 
                      rounded-full text-text-secondary hover:border-accent-blue 
                      hover:text-text-primary hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {renderIcon(social.icon, "w-5 h-5")}
                    <span className="text-sm">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Contact Form */}
          <div className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-text-primary mb-6">
              Send Me a Message
            </h3>
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
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
                  disabled={status === 'sending'}
                  className="w-full px-4 py-3 bg-bg-secondary border border-border 
                    rounded-xl text-text-primary placeholder-gray-600
                    focus:outline-none focus:border-accent-blue focus:ring-2 
                    focus:ring-accent-blue/20 transition-all duration-300
                    disabled:opacity-50"
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
                  disabled={status === 'sending'}
                  className="w-full px-4 py-3 bg-bg-secondary border border-border 
                    rounded-xl text-text-primary placeholder-gray-600
                    focus:outline-none focus:border-accent-blue focus:ring-2 
                    focus:ring-accent-blue/20 transition-all duration-300
                    disabled:opacity-50"
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
                  disabled={status === 'sending'}
                  className="w-full px-4 py-3 bg-bg-secondary border border-border 
                    rounded-xl text-text-primary placeholder-gray-600
                    focus:outline-none focus:border-accent-blue focus:ring-2 
                    focus:ring-accent-blue/20 transition-all duration-300
                    disabled:opacity-50"
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
                  disabled={status === 'sending'}
                  className="w-full px-4 py-3 bg-bg-secondary border border-border 
                    rounded-xl text-text-primary placeholder-gray-600 resize-y min-h-30
                    focus:outline-none focus:border-accent-blue focus:ring-2 
                    focus:ring-accent-blue/20 transition-all duration-300
                    disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 bg-linear-to-r from-accent-blue to-accent-blue-dark 
                  text-white font-medium rounded-xl
                  hover:shadow-lg hover:shadow-accent-blue/25 
                  hover:-translate-y-0.5 transition-all duration-300
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0
                  flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {/* Success Message */}
              {status === 'success' && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500 
                  rounded-xl text-emerald-500 text-center animate-[fadeIn_0.3s_ease]">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {/* Error Message */}
              {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500 
                  rounded-xl text-red-500 text-center animate-[fadeIn_0.3s_ease]">
                  ❌ Failed to send. Please try again or email me directly.
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