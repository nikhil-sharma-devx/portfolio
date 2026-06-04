import { useState, useEffect } from 'react'
import { FiGithub, FiLinkedin, FiMenu, FiX, FiDownload } from 'react-icons/fi'

const NAV_ITEMS = ['Projects', 'About', 'Experience', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#" className="nav-logo">Nikhil Sharma</a>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
          {menuOpen && (
            <button className="menu-toggle" onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: 20, right: 24 }}>
              <FiX />
            </button>
          )}
        </div>
        <div className="nav-right">
          <a href="/Nikhil_Sharma_Resume.pdf" download className="nav-resume-btn">
            <FiDownload /> Resume
          </a>
          <a href="https://github.com/nikhil-sharma-devx" target="_blank" rel="noreferrer" aria-label="GitHub" className="nav-icon-link"><FiGithub /></a>
          <a href="https://linkedin.com/in/nikhil-sharma-devx" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="nav-icon-link"><FiLinkedin /></a>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <FiMenu />
        </button>
      </div>
    </nav>
  )
}
