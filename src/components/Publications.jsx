import { FiArrowUpRight, FiBookOpen } from 'react-icons/fi'

export default function Publications() {
  return (
    <section id="publications">
      <div className="container">
        <div className="reveal">
          <div className="section-label"><span className="line" /> Research</div>
          <h2 className="section-title">Research & Publications</h2>
        </div>
        <div className="pub-card reveal">
          <div className="pub-venue"><FiBookOpen /> ICSCNA 2024 · IEEE Xplore</div>
          <h3>
            The Sound of Sentiment: Optimizing Emotion Recognition in Speech
            with Neural Networks
          </h3>
          <ul>
            <li>
              Published in IEEE Xplore (ICSCNA 2024)
            </li>
            <li>
              Focused on improving emotion detection using neural networks
            </li>
            <li>
              Explored optimization techniques for speech based AI systems
            </li>
          </ul>
          <div className="pub-links">
            <a
              href="https://ieeexplore.ieee.org/document/10863993"
              target="_blank"
              rel="noreferrer"
              className="pub-link"
            >
              View Paper <FiArrowUpRight />
            </a>
            <a
              href="https://doi.org/10.1109/ICSCNA63714.2024.10863993"
              target="_blank"
              rel="noreferrer"
              className="pub-link secondary"
            >
              DOI <FiArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
