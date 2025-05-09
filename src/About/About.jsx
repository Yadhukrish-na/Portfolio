import React from 'react'
import './About.css'
import img3 from '../Images/Me.jpg'

function About() {
  return (
    <div className='aboutC'>

      <div className='aboutSub'>
        <div className="about-me-container">
          <div className="about-me-content">
            <div className="about-me-text">
              <h1>About Me</h1>
              <p>

                Hi, I'm Yadhukrishna Suresh. I'm a Web Developer.
                I'm passionate about building innovative digital solutions and dedicated to creating seamless user experiences.
              </p>
              <p>

                When I'm not working, you can find me exploring new coding trends or hiking in nature.
                I believe in continuous learning, teamwork, and delivering quality work, and I'm always looking for new challenges and opportunities to grow.
              </p>
              <div className="skills">
                <h3>Skills & Expertise:</h3>
                <ul>
                  <li>Html</li>
                  <li>Css</li>
                  <li>Php</li>
                  <li>MERN</li>
                </ul>
              </div>
            </div>
            <div className="about-me-image">
              <img src={img3} alt="Profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
