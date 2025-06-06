import React from 'react';

const certifications = [
  {
    name: 'React Developer Certification',
    issuer: 'Coursera',
    date: 'June 2023',
    image: 'https://drive.google.com/uc?export=view&id=1-KpF4lxykDxgBPne9sH9X20VAAGhZYY7',
  },
];

const Certifications = () => (
  <section id="certifications" className="py-5 bg-dark bg-opacity-50 fade-in section-delay-1">
    <div className="container">
      <h2 className="display-4 fw-bold text-center text-primary mb-5 slide-in section-delay-2">Certifications</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {certifications.map((cert, index) => (
          <div key={cert.name} className={`col slide-in section-delay-${(index % 3) + 1}`}>
            <div className="card bg-dark text-light border-primary card-hover h-100">
              <img
                src={cert.image}
                alt={`${cert.name} certificate`}
                className="card-img-top border-bottom border-primary"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h3 className="card-title h4 fw-bold text-primary">{cert.name}</h3>
                <p className="card-text text-muted">Issuer: {cert.issuer}</p>
                <p className="card-text text-muted">Date: {cert.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;