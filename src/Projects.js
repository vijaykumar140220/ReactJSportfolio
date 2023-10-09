// src/components/Projects.js

import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>Project 1</h3>
        <p>
        simple to-do list with HTML, CSS, and JavaScript
        </p>
        <a href="https://vijaykumar140220.github.io/lifecycle-in-js/">View Project</a>
      </div>
      <div className="project-card">
        <h3>Project 2</h3>
        <p>
        Stone, Paper and Scissor Game using JavaScript
        </p>
        <a href="https://vijaykumar140220.github.io/stone-paper-scissor-game/">View Project</a>
      </div>
      <div className="project-card">
        <h3>Project 3</h3>
        <p>
        Portfolio Website Using HTML, CSS and JavaScript
        </p>
        <a href="https://vijaykumar140220.github.io/portfolio/">View Project</a>
      </div>
      <div className="project-card">
        <h3>Project 4</h3>
        <p>
        Image Search Engine Using HTML, CSS and JavaScript
        </p>
        <a href="https://vijaykumar140220.github.io/imagefindingwebsite/">View Project</a>
      </div>
      {/* Add more project cards as needed */}
    </section>
  );
};

export default Projects;