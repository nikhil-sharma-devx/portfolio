export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="reveal">
          <div className="section-label"><span className="line" /> Education</div>
          <h2 className="section-title">Academic Background</h2>
        </div>
        <div className="edu-grid">
          <div className="edu-card reveal">
            <div>
              <h3>B.Tech Computer Science</h3>
              <h4>Chandigarh University</h4>
              <div className="edu-badge">🎓 100% Merit Scholarship</div>
            </div>
            <div className="edu-meta">
              <div className="year">2021 to 2025</div>
              <div className="score">GPA: 7.69 / 10</div>
            </div>
          </div>
          <div className="edu-card reveal">
            <div>
              <h3>Senior Secondary (XII)</h3>
              <h4>Vidya Sagar Sr. Sec. School, Jaipur</h4>
            </div>
            <div className="edu-meta">
              <div className="year">2021</div>
              <div className="score">78.2%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
