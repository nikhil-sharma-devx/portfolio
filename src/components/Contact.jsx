import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [state, handleSubmit] = useForm("mlgzbojk") // <-- YOUR FORM ID

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="reveal">
          <div className="section-label"><span className="line" /> Contact</div>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="contact-grid">
          {/* LEFT SIDE (unchanged) */}
          <div className="reveal">
            <div className="contact-text">
              <p>
                I am always open to opportunities in Data Engineering, Machine
                Learning, and Software Development roles. Let's connect!
              </p>
            </div>

            <div className="contact-items">
              <a href="mailto:nikhil.sharma.devx@gmail.com" className="contact-item">
                <div className="contact-item-icon"><FiMail /></div>
                <div className="contact-item-text">
                  <h4>Email</h4>
                  <p>nikhil.sharma.devx@gmail.com</p>
                </div>
              </a>

              <div className="contact-item">
                <div className="contact-item-icon"><FiMapPin /></div>
                <div className="contact-item-text">
                  <h4>Location</h4>
                  <p>Jaipur, India</p>
                </div>
              </div>

              <a href="https://github.com/nikhil-sharma-devx" target="_blank" rel="noreferrer" className="contact-item">
                <div className="contact-item-icon"><FiGithub /></div>
                <div className="contact-item-text">
                  <h4>GitHub</h4>
                  <p>github.com/nikhil-sharma-devx</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/nikhil-sharma-devx" target="_blank" rel="noreferrer" className="contact-item">
                <div className="contact-item-icon"><FiLinkedin /></div>
                <div className="contact-item-text">
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/in/nikhil-sharma-devx</p>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <ValidationError field="email" errors={state.errors} />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
              />
              <ValidationError field="message" errors={state.errors} />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-submit"
              disabled={state.submitting}
            >
              {state.submitting && <>Sending...</>}
              {!state.submitting && !state.succeeded && <><FiSend /> Send Message</>}
              {state.succeeded && <><FiCheck /> Sent!</>}
            </button>

            {state.succeeded && (
              <p className="form-success">Thanks! I'll get back to you soon.</p>
            )}

            {state.errors && !state.succeeded && (
              <p className="form-error"><FiAlertCircle /> Something went wrong.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}