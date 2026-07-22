import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import EasterEgg from './components/EasterEgg'

function App() {
  return (
    <Layout>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      
      {/* Floating Easter Egg */}
      <EasterEgg />
    </Layout>
  )
}

export default App