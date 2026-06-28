import Navbar from './components/Navbar'
import Footer from './components/Footer'

function Layout({ children }) {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("./bgimage.gif")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark overlay to maintain readability */}
        <div className="absolute inset-0 bg-bg-primary/50 backdrop-blur-sm"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout