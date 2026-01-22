import { Header, Footer } from './components/layout'
import { Hero, About, Projects, Skills, Contact } from './components/sections'

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
