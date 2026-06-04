import { FiAward, FiBookOpen, FiCode } from 'react-icons/fi'

const achievements = [
  { icon: <FiAward />, text: '100% Academic Scholarship with Chandigarh University' },
  { icon: <FiBookOpen />, text: 'Research Paper Published in IEEE Xplore (ICSCNA 2024)' },
  { icon: <FiCode />, text: 'Built multiple production level ML and backend systems' },
]

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <div className="reveal">
          <div className="section-label"><span className="line" /> Achievements</div>
          <h2 className="section-title">Milestones</h2>
        </div>
        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <div className="achievement-card reveal" key={i}>
              <div className="achievement-icon">{a.icon}</div>
              <p>{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
