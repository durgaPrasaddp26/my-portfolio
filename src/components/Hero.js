import React from 'react';

const Hero = () => (
  <div id="hero" className='pt-3'>
    <section className="pt-5 text-center text-light fade-in">
      <div className="container py-3">
        <h1 className="display-5 fw-bold slide-in section-delay-1">Sarella Sai Durga Prasad</h1>
        <p className="lead mt-3 slide-in section-delay-2">Frontend Developer</p>
        <div className="mt-4 d-flex justify-content-center gap-3 slide-in section-delay-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=saidurgaprasadsdp26@gmail.com"
            className="btn btn-outline-primary btn-lg card-hover"
          >
            Email
          </a>

          <a target='_blank' href="https://www.naukri.com/mnjuser/profile?id=&altresid" className="btn btn-outline-primary btn-lg card-hover">Naukri</a>
          <a target='_blank' href="http://linkedin.com/in/sarella-sai-durga-prasad-25543225a" className="btn btn-outline-primary btn-lg card-hover">LinkedIn</a>
        </div>
      </div>
    </section>
  </div>
);

export default Hero;