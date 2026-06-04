import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Nikhil Sharma. Built with React.</p>
        <div className="footer-links">
          <a href="https://github.com/nikhil-sharma-devx" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href="https://linkedin.com/in/nikhil-sharma-devx" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href="mailto:nikhil.sharma.devx@gmail.com" aria-label="Email"><FiMail /></a>
        </div>
      </div>
    </footer>
  )
}
