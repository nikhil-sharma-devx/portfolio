import { FiAward, FiExternalLink } from 'react-icons/fi'

const certs = [
  {
    title: 'Advanced Machine Learning on Google Cloud',
    year: '2024',
    link: 'https://coursera.org/share/5e01ec990f7bcb7f50382902f86b0fd7',
  },
  {
    title: 'Introduction to Computer Vision and Image Processing',
    provider: 'IBM',
    link: 'https://coursera.org/share/9b9bfb293bba3c44612c4881f57d6288',
  },
  {
    title: 'Introduction to Data Science',
    provider: 'Coursera',
    link: 'https://coursera.org/share/6a165307424ce8e26517b37a903204d8',
  },
]

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <div className="reveal">
          <div className="section-label"><span className="line" /> Certifications</div>
          <h2 className="section-title">Credentials</h2>
        </div>
        <div className="cert-list">
          {certs.map((c, i) => (
            <a
              href={c.link}
              target="_blank"
              rel="noreferrer"
              className="cert-item reveal"
              key={i}
            >
              <div className="cert-icon"><FiAward /></div>
              <div className="cert-info">
                <h4>{c.title}</h4>
                <span>{c.provider && `${c.provider} · `}{c.year}</span>
              </div>
              <div className="cert-link-icon"><FiExternalLink /></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
