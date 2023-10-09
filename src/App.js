// src/App.js
import "./App.css"
import React from 'react';
import AboutMe from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';


import Navigation from './Navgition';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={ <AboutMe />}></Route>
        <Route path="/Projects" element={ <Projects />}></Route>
        <Route path="/Skills" element={ <Skills />}></Route>
        <Route path="/Contact" element={ <Contact />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
