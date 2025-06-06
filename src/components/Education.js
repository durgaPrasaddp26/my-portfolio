import React from 'react';

const Education = () => (
  <div id="education" className='pt-3'>
    <section className="pt-5 fade-in section-delay-3">
      <div className="container">
        <h2 className="display-5 fw-bold text-center text-primary mb-5">Education</h2>
        <div className="mx-auto" style={{ maxWidth: '720px' }}>
          <div className="card mb-3 bg-black text-light border-primary card-hover slide-in section-delay-1">
            <div className="card-body">
              <h3 className="card-title h5 fw-bold">B-Tech, CSE - DRK Institute of Science and Technology</h3>
              <p className="card-text">Graduated in 2022 | CGPA: 6.66</p>
            </div>
          </div>
          <div className="card bg-black text-light border-primary card-hover slide-in section-delay-2">
            <div className="card-body">
              <h3 className="card-title h5 fw-bold">Diploma - JNGP (OU)</h3>
              <p className="card-text">Completed in 2017 | 67.48%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

);

export default Education;