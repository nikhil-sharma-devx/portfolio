import { FiDatabase, FiGithub } from 'react-icons/fi'

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="reveal">
          <div className="section-label"><span className="line" /> 🚀 Featured Project</div>
          <h2 className="section-title">Personal Project</h2>
        </div>
        <div className="featured-project reveal">
          <div className="fp-glow" />
          <div className="fp-badge">Personal Project</div>
          <div className="fp-date">December 2025 to Present</div>
          <div className="fp-header">
            <div className="project-icon fp-icon"><FiDatabase /></div>
            <div>
              <h3>Natural Language to SQL using RAG</h3>
              <p className="fp-hook">
                Built a production grade RAG system that converts natural language
                into accurate SQL queries in real time.
              </p>
            </div>
          </div>
          <p className="fp-desc">
            Built a production grade NL2SQL system that converts natural language
            queries into SQL using Retrieval Augmented Generation (RAG).
            Demonstrates ability to build scalable, production ready AI systems
            integrating LLMs with structured data.
          </p>
          <ul className="fp-highlights">
            <li>Designed modular architecture with SOLID principles and CQRS pattern</li>
            <li>Implemented semantic retrieval with embeddings and cross-encoder re-ranking</li>
            <li>Built query rewriting and expansion pipeline for improved accuracy</li>
            <li>Enabled real-time streaming responses using async APIs</li>
            <li>Optimized performance with semantic caching, dynamic TTL, and connection pooling</li>
            <li>Developed analytics and feedback system for continuous improvement</li>
          </ul>
          <div className="fp-impact">
            <strong>💡 Impact:</strong> Demonstrates ability to build scalable,
            production ready AI systems integrating LLMs with structured data.
          </div>
          <div className="fp-footer">
            <div className="pc-tags">
              <span className="tag">Python</span>
              <span className="tag">FastAPI</span>
              <span className="tag">RAG</span>
              <span className="tag">LLMs</span>
              <span className="tag">SQL</span>
              <span className="tag">PostgreSQL</span>
            </div>
            <div className="pc-actions">
              <a href="https://github.com/nikhil-sharma-devx" target="_blank" rel="noreferrer" className="pc-btn">
                <FiGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
