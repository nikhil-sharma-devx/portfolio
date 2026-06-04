import { FiZap } from 'react-icons/fi'

const items = [
  'Retrieval Augmented Generation (RAG) systems',
  'Scalable data pipelines using PySpark and Databricks',
  'Production level ML system design',
]

export default function CurrentlyExploring() {
  return (
    <section id="exploring">
      <div className="container">
        <div className="reveal">
          <div className="section-label"><span className="line" /> Currently Exploring</div>
          <h2 className="section-title">What I'm Working On</h2>
        </div>
        <div className="exploring-grid reveal">
          {items.map((item, i) => (
            <div className="exploring-item" key={i}>
              <FiZap className="exploring-icon" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
