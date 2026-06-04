import { useState, useEffect, useRef } from 'react'
import { FiArrowRight, FiDownload, FiMail, FiMapPin, FiGithub, FiLinkedin, FiExternalLink } from 'react-icons/fi'

const GDRIVE_URL = 'https://drive.google.com/file/d/1hRpMHn4VSCKAWHIHM-CeUTix-3KGNYoz/view?usp=sharing'
const roles = ['Data Engineer', 'Machine Learning Engineer', 'Backend Developer', 'RAG System Builder']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleGDrive = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setMenuOpen(false)
    window.open(GDRIVE_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="container hero-content">
        <div className="hero-badge">
          <span className="dot" />
          Open to opportunities
        </div>
        <h1>
          Hi, I'm <span className="gradient-text">Nikhil Sharma</span>
        </h1>
        <h2 className="hero-typing">
          <span className="typing-text">{displayed}</span>
          <span className="cursor">|</span>
        </h2>
        <p>
          I build scalable data systems and intelligent ML solutions, from
          production grade APIs to deep learning models solving real world problems.
        </p>

        <div className="hero-meta">
          <span className="hero-meta-item">
            <FiMapPin /> Jaipur, India
          </span>
          <a href="mailto:nikhil.sharma.devx@gmail.com" className="hero-meta-item">
            <FiMail /> nikhil.sharma.devx@gmail.com
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/nikhil-sharma-devx" target="_blank" rel="noreferrer" className="hero-social-link">
            <FiGithub /> GitHub
          </a>
          <a href="https://linkedin.com/in/nikhil-sharma-devx" target="_blank" rel="noreferrer" className="hero-social-link">
            <FiLinkedin /> LinkedIn
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <h3>1+</h3>
            <p>Year Exp.</p>
          </div>
          <div className="stat-item">
            <h3>4+</h3>
            <p>Projects</p>
          </div>
          <div className="stat-item">
            <h3>1</h3>
            <p>IEEE Paper</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Scholarship</p>
          </div>
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects <FiArrowRight />
          </a>
          <div className="resume-dropdown" ref={dropdownRef}>
            <button
              className="btn btn-outline resume-trigger"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FiDownload /> Resume ▾
            </button>
            <div className={`resume-menu ${menuOpen ? 'open' : ''}`}>
              <a href="/Nikhil_Sharma_Resume.pdf" download onClick={() => setMenuOpen(false)}>
                <FiDownload /> Download PDF
              </a>
              <button className="resume-menu-btn" onClick={handleGDrive}>
                <FiExternalLink /> View on Google Drive
              </button>
            </div>
          </div>
          <a href="#contact" className="btn btn-outline">
            <FiMail /> Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
