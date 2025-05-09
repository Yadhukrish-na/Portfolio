import React from 'react'
import './Contact.css'
import Findme from '../FindMe/Findme'

function Contact() {
  return (
    <div>
       <div className="Container">
      <div className="NavContainer">
      
      </div>
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-text">
              <h1 className="contact-title">Get in Touch</h1>
              <p className="contact-description">
                I'm excited to connect with you! Whether you have a project in mind, a question, or just want to say hi, feel free to reach out using the form below.
              </p>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="cta-button primary">Send Message</button>
              </form>
            </div>
          </div>
          <section id="about" className="section">
          <Findme/>
        </section>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Contact
