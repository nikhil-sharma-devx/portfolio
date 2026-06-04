import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import AcademicProjects from './components/AcademicProjects'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Publications from './components/Publications'
import Achievements from './components/Achievements'
import Education from './components/Education'
import CurrentlyExploring from './components/CurrentlyExploring'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    const els = document.querySelectorAll('.reveal')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <AcademicProjects />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Publications />
      <Achievements />
      <Education />
      <CurrentlyExploring />
      <Contact />
      <Footer />
    </>
  )
}

export default App
