import { FiServer } from 'react-icons/fi'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="reveal">
          <div className="section-label"><span className="line" /> Experience</div>
          <h2 className="section-title">Professional Experience</h2>
        </div>
        <div className="timeline">
          <div className="timeline-item reveal">
            <div className="tl-dot" />
            <div className="tl-date">September 2025 to Present</div>
            <div className="tl-card">
              <div className="tl-header">
                <div className="tl-icon"><FiServer /></div>
                <div>
                  <h3>Data Engineering & AI Intern</h3>
                  <p className="tl-sub">Key Management Technologies (KMG)</p>
                </div>
              </div>
              <p className="tl-desc">
                Gained hands on experience working on real world data engineering
                workflows and modern AI system design.
              </p>
              <ul>
                <li>
                  Worked on building and understanding scalable data pipelines
                  using PySpark and Databricks
                </li>
                <li>
                  Explored data engineering concepts including ETL workflows,
                  data modeling, and distributed data processing
                </li>
                <li>
                  Learned and applied backend engineering principles including
                  SOLID principles and CQRS pattern for scalable system design
                </li>
                <li>
                  Developed understanding of Retrieval Augmented Generation (RAG)
                  architectures, integrating structured data sources with
                  LLM based querying systems
                </li>
                <li>
                  Built a personal NL2SQL project leveraging RAG concepts to
                  convert natural language queries into SQL queries
                </li>
                <li>
                  Strengthened knowledge of database systems, query optimization,
                  and real world data handling challenges
                </li>
              </ul>
              <div className="tl-impact">
                <strong>💡 Impact:</strong> Built strong foundational expertise in
                data engineering and modern AI system architecture, bridging the
                gap between machine learning models and production ready systems.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
