import React from 'react';

const Hero = () => (
  <section id="hero" className="py-2 text-center text-light fade-in">
    <div className="container py-3">
      <h1 className="display-3 fw-bold slide-in section-delay-1">Sarella Sai Durga Prasad</h1>
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

        <a target='_blank' href="https://www.naukri.com/mnjuser/homepage" className="btn btn-outline-primary btn-lg card-hover">Naukri</a>
        <a target='_blank' href="https://linkedin.com/in/yourusername" className="btn btn-outline-primary btn-lg card-hover">LinkedIn</a>
      </div>
    </div>
  </section>
);

export default Hero;