// src/components/AboutMe.js

import React from 'react';
import './About.css'; // Import the CSS file
import Img from './photo.jpg';
// import bc1 from './bc2.jpeg';

const AboutMe = () => {
    return (
        <>
        {/* <img src={bc1} alt="background" className='bc1' /> */}
        <section className='About'>
        <div className='profile'>
            <img src={Img} alt="vijay" />
        </div>
            <div className="about-me">
            <h2>About Me</h2>
            <p>
                Frontend developer proficient in HTML, CSS, and
                Bootstrap for creating visually appealing and responsive
                web layouts. Skilled in JavaScript and React for dynamic
                and interactive user interfaces, enhancing user
                experience through seamless functionality and modern
                design.

            </p>
            <h3>Education</h3>
            <ul className="education-list">
                <li>
                    <strong>PostGraduate:</strong> Master of Science in Computer
                    Science
                    <br />
                    <span className="school">PACHAIYAPPA'S COLLEGE FOR MEN,
                        KANCHIPURAM
                    </span>
                    <br />
                    <span className="grade">CGPA: 3.8/4.0</span>
                </li>
                <li>
                    <strong>UnderGraduate:</strong> Bachelor of Science in Computer
                    Science
                    <br />
                    <span className="school">B. S. ABDUR RAHMAN CRESCENT INSTITUTE OF
                        SCIENCE AND TECHNOLOGY
                    </span>
                    <br />
                    <span className="grade">CGPA:  6.83</span>
                </li>
                <li>
                    <strong>HSC:</strong>
                    <br />
                    <span className="school">MONTFORT CENTENARY ACADEMY HIGHER
                        SECONDARY</span>
                    <br />
                    <span className="grade">GRADE - 55.2%
                    </span>
                </li>
                <li>
                    <strong>SSLC:</strong>
                    <br />
                    <span className="school">MONTFORT CENTENARY ACADEMY HIGHER
                        SECONDARY</span>
                    <br />
                    <span className="grade">GRADE - 75.6%
                    </span>
                </li>
            </ul>
            </div>
        </section>
        </>
    );
};

export default AboutMe;
