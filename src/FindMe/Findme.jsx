import React from 'react'
import './FindMe.css'
import { FaGithub, FaInstagram } from 'react-icons/fa';


function Findme() {
  return (
    <div>
       

       <section className="find-section">
      <div className="find-wrapper">
        <h2 className="find-heading">Find Me!</h2>
        <p className="find-description">
          I’m open to opportunities, collaborations, or just a friendly hello.
        </p>

        <div className="find-info">
          <p><strong>Email:</strong> b8819548@gmail.com</p>
          <p><strong>Location:</strong> Kerala, India</p>
        </div>

        <div className="find-socials">
          <a href="https://github.com/Yadhukrish-na" target="_blank" rel="noreferrer"><FaGithub />GitHub</a>
          <a href="https://www.instagram.com/y_adhu___.krish._?igsh=MWlpeXJxODR4dm9pbg==" target="_blank" rel="noreferrer"> <FaInstagram />Instagram</a>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Findme