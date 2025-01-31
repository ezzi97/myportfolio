import Header from './components/Header'
import Achievements from './components/Achievements'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <section id="about" className="scroll-mt-16 pt-16">
        <Header />
      </section>
      <section id="achievements" className="scroll-mt-16 py-16">
        <Achievements />
      </section>
      <section id="projects" className="scroll-mt-16 py-16">
        <Projects />
      </section>
      <section id="education" className="scroll-mt-16 py-16">
        <Education />
      </section>
      <Footer />
    </div>
  )
}

export default App 