import { FiMic, FiHeart, FiImage, FiShield, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    icon: <FiMic />,
    title: 'Speech Emotion Recognition',
    hook: 'Developed a deep learning system that detects human emotions from speech with 85% accuracy.',
    badge: 'Academic Project',
    highlights: [
      'Extracted features using MFCC and Mel Spectrograms',
      'Trained and evaluated CNN, LSTM, GRU, and MLP models',
      'Achieved 85% test accuracy, improving performance by 20%',
      'Published research in IEEE Xplore',
    ],
    tags: ['Python', 'TensorFlow', 'Librosa', 'Scikit learn'],
    paper: 'https://ieeexplore.ieee.org/document/10863993',
  },
  {
    icon: <FiHeart />,
    title: 'Heart Disease Prediction',
    hook: 'Built a machine learning model to predict heart disease risk with improved accuracy.',
    badge: 'Academic Project',
    highlights: [
      'Improved prediction accuracy by 30% using ML techniques',
      'Identified key health indicators and risk patterns',
      'Designed system for early detection and decision support',
    ],
    tags: ['Python', 'Machine Learning'],
  },
  {
    icon: <FiImage />,
    title: 'Neural Style Transfer',
    hook: 'Created a deep learning application that transforms images into artistic styles.',
    badge: 'Academic Project',
    highlights: [
      'Built deep learning model using TensorFlow',
      'Created interactive web interface for image uploads',
      'Achieved high quality transformation with reduced processing time',
    ],
    tags: ['Python', 'TensorFlow', 'Web Technologies'],
  },
  {
    icon: <FiShield />,
    title: 'Digital Payment System',
    hook: 'Designed a secure backend system simulating high volume digital transactions.',
    badge: 'Academic Project',
    highlights: [
      'Developed REST APIs with encryption and authentication',
      'Implemented multi factor authentication and IP based validation',
      'Focused on system security and transaction reliability',
    ],
    tags: ['Python', 'Backend Development'],
  },
]

export default function AcademicProjects() {
  return (
    <section id="academic-projects">
      <div className="container">
        <div className="reveal">
          <div className="section-label"><span className="line" /> 🎓 Academic Projects</div>
          <h2 className="section-title">Academic ML Projects</h2>
        </div>
        <div className="projects-grid-new">
          {projects.map((p, i) => (
            <div className="project-card-new reveal" key={i}>
              <div className="pc-top">
                <div className="project-icon">{p.icon}</div>
                <span className="pc-badge">{p.badge}</span>
              </div>
              <h3>{p.title}</h3>
              <p className="pc-hook">{p.hook}</p>
              <ul className="pc-highlights">
                {p.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
              <div className="pc-tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="pc-actions">
                {p.paper && (
                  <a href={p.paper} target="_blank" rel="noreferrer" className="pc-btn accent">
                    <FiExternalLink /> Research Paper
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
