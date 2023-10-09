// src/Skills.js
import React, { useState } from 'react';
import './Skills.css';
import Certificate from './Certificate.png';

const Skills = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="skills">
        <h2>Skills</h2>
        <ul className="skill-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
        <div className='button'>
          <button>Click Hear</button>
        </div>
      </div>
      <div className="card-inner back">
        <img src={Certificate} alt="Frontend Develoiper" />
      </div>
    </div>
  );
};

export default Skills;
