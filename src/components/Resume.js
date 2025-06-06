import React from 'react';

const Resume = () => (
  <section id="resume" className="py-5 bg-dark bg-opacity-50 fade-in section-delay-1">
    <div className="container">
      <h2 className="display-4 fw-bold text-center text-primary mb-5 slide-in section-delay-2">Resume</h2>

      <div className="card bg-dark text-light border-primary card-hover mx-auto slide-in section-delay-3" style={{ maxWidth: '900px' }}>
        <div className="card-body text-center">
          <p className="lead text-white mb-4">
            View or download my resume to explore my skills, experience, and projects.
          </p>

          {/* PDF Preview */}
          <div className="mb-4" style={{ height: '480px' }}>
            <iframe
              src="https://drive.google.com/file/d/1_UkZIJcxt7_KdP0fVIw7yJUgZ1NWJXh-/preview"
              width="80%"
              height="100%"
              allow="autoplay"
              title="Resume Preview"
              style={{ borderRadius: '12px', border: '1px solid #ccc' }}
            ></iframe>
          </div>

          {/* Download Button */}
          <a
            target='_blank'
            href="https://drive.google.com/u/0/uc?id=1_UkZIJcxt7_KdP0fVIw7yJUgZ1NWJXh-&export=download"
            className="btn btn-primary btn-lg card-hover"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
