import { FiMapPin, FiMail, FiCode, FiAward } from 'react-icons/fi'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="reveal">
          <div className="section-label"><span className="line" /> About Me</div>
          <h2 className="section-title">Who I Am</h2>
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I am a Data Engineer and Machine Learning Engineer with a strong
              focus on building scalable data systems and intelligent
              applications. My work spans across deep learning, backend
              engineering, and data driven system design.
            </p>
            <p>
              I have hands on experience developing machine learning models for
              real world problems, including speech emotion recognition and
              healthcare prediction systems, along with building secure and
              scalable backend systems such as digital payment platforms.
            </p>
            <p>
              I am particularly interested in designing production ready ML
              systems, data pipelines, and retrieval augmented generation (RAG)
              architectures that bridge the gap between research and real world
              deployment.
            </p>
            <p>
              I enjoy solving complex problems, optimizing system performance,
              and continuously learning new technologies in AI and data
              engineering.
            </p>
          </div>
          <div className="about-info reveal">
            <div className="info-item">
              <div className="label">Location</div>
              <div className="value"><FiMapPin style={{ marginRight: 6, verticalAlign: 'middle' }} /> Jaipur, India</div>
            </div>
            <div className="info-item">
              <div className="label">Email</div>
              <div className="value"><FiMail style={{ marginRight: 6, verticalAlign: 'middle' }} /> nikhil.sharma.devx@gmail.com</div>
            </div>
            <div className="info-item">
              <div className="label">Focus</div>
              <div className="value"><FiCode style={{ marginRight: 6, verticalAlign: 'middle' }} /> ML & Data Systems</div>
            </div>
            <div className="info-item">
              <div className="label">Education</div>
              <div className="value"><FiAward style={{ marginRight: 6, verticalAlign: 'middle' }} /> B.Tech CS with 100% Scholarship</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
