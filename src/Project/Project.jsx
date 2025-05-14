import React from 'react';
import './Projects.css';
import img1 from '../Images/Fitseeker.jpg';
import img2 from '../Images/NeoVita.png';

function Projects() {
  const projects = [
    {
      title: 'Fitseeker',
      description: 'A web application built with Php.FitSeeker is a web platform connecting users with qualified trainers in dance, music, and related fields. It allows users to search, select, and rate trainers, and purchase musical instruments and training equipment.',
      link: '#',
      image: img1
    },
    {
      title: 'NeoVita',
      description: 'A web application built with React and Node.js.NeoVita is a web app that supports expectant mothers and newborns, offering features like doctor appointment management, personalized fitness guidance, healthcare resources, and vaccination schedule tracking to promote a healthier future for both.',
      link: '#',
      image: img2
    },
 
  ];

  return (
    <div className="Container">
      <div className="NavContainer">

      </div>
      <section className="projects-section" id="projects">
        <div className="projects-container">
          <div className="projects-text">
            <h1 className="projects-title">My Projects</h1>
            <p className="projects-description">
              Explore a collection of my work, showcasing my skills in web development, design, and problem-solving. Each project reflects my passion for creating impactful and user-friendly solutions.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <a href={project.link} className="cta-button primary">
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;