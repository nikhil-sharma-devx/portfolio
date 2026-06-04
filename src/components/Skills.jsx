import { FiCode, FiCpu, FiDatabase, FiLayers, FiTool, FiServer } from 'react-icons/fi'

const skills = [
  { icon: <FiCode />, title: 'Languages', items: ['Python', 'C++', 'Java', 'JavaScript', 'SQL'] },
  { icon: <FiCpu />, title: 'ML & AI', items: ['Deep Learning', 'NLP', 'Speech Processing', 'Model Optimization'] },
  { icon: <FiDatabase />, title: 'Data Engineering', items: ['PySpark', 'Databricks', 'Data Pipelines', 'ETL'] },
  { icon: <FiLayers />, title: 'Frameworks', items: ['TensorFlow', 'Scikit learn', 'React.js', 'Node.js'] },
  { icon: <FiServer />, title: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQL Server'] },
  { icon: <FiTool />, title: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Docker'] },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="reveal">
          <div className="section-label"><span className="line" /> Technical Skills</div>
          <h2 className="section-title">My Toolkit</h2>
        </div>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <div className="skill-card reveal" key={i}>
              <div className="skill-card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <div className="skill-tags">
                {s.items.map((item) => (
                  <span className="skill-tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
