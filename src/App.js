import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certifications from './components/Certification';

function App() {
  return (
    <div className="text-light">
      <Hero />
      <About />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      {/* <Certifications /> */}
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;