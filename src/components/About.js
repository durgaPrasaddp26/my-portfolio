

import React from 'react';

const sections = [
  { name: 'Hero', id: 'hero' },
  { name: 'About Me', id: 'about-me' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Education', id: 'education' },
  { name: 'Cert', id: 'certifications' },
  { name: 'Resume', id: 'resume' },
  { name: 'Contact', id: 'contact' },

];

const About = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="navigate" className="py-5 bg-dark bg-opacity-50 fade-in section-delay-1">
      <div className="container">
        <h2 className="display-4 fw-bold text-center text-primary mb-5 slide-in section-delay-2">Navigate My Portfolio</h2>
        <div className="row row-cols-2 row-cols-md-4 g-4">
          {sections.map((section, index) => (
            <div key={section.id} className={`col slide-in section-delay-${(index % 3) + 1}`}>
              <div
                onClick={() => scrollToSection(section.id)}
                className="card bg-dark text-light border-primary card-hover h-100"
                style={{ cursor: 'pointer' }}
              >
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold text-primary">{section.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;