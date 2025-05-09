import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import './Home.css';
import Contact from '../Contact/Contact';
import Projects from '../Project/Project';
import { motion } from 'framer-motion';
import Findme from '../FindMe/Findme';

function Home() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80;
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionPosition - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach(element => {
        const speed = parseFloat(element.dataset.speed) || 0.3;
        const yPos = -(scrollPosition * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='portfolio-container'>
      <Navbar />
      
      <section className="hero-section" id="home">
        <div className="particles-background" id="particles-js"></div>
        <div className="hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I'm <span className="gradient-text">YadhuKrishna Suresh</span>
              </h1>
              <motion.h2 
                className="hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Full Stack Developer
              </motion.h2>
              <p className="hero-description">
                I craft exceptional digital experiences with modern web technologies.
                Focused on performance, accessibility, and clean code.
              </p>
              <div className="hero-cta">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('projects')}
                  className="cta-button primary"
                >
                  View My Work
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="cta-button secondary"
                >
                  Contact Me
                </motion.button>
              </div>
            </div>
            <div className="hero-image parallax" data-speed="0.2">
              <div className="glow-effect"></div>
              <div className="profile-image"></div>
            </div>
          </motion.div>
          
          <div className="scroll-indicator">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="arrow-down"
              onClick={() => scrollToSection('about')}
            ></motion.div>
          </div>
        </div>
      </section>

      <div className="content-sections">
        <section id="about" className="section">
          <About />
        </section>

        <section id="projects" className="section dark-section">
          <Projects />
        </section>
        
        <section id="contact" className="section">
          <Contact />
        </section>
    
      </div>
    </div>
  );
}

export default Home;