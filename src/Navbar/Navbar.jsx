import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 60;
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionPosition - navbarHeight,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>YadhuKrishna</span>
      </div>
      <ul className="navbar-links">
        <li>
          <button 
            onClick={() => scrollToSection('home')} 
            className={activeSection === 'home' ? 'active' : ''}
          >
            Home
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('about')} 
            className={activeSection === 'about' ? 'active' : ''}
          >
            About
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('projects')} 
            className={activeSection === 'projects' ? 'active' : ''}
          >
            Projects
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('contact')} 
            className={activeSection === 'contact' ? 'active' : ''}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;