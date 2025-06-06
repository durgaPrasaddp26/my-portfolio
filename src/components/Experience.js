import React from 'react';

const Experience = () => (
  <section id="experience" className="py-5 bg-dark bg-opacity-50 fade-in section-delay-2">
    <div className="container">
      <h2 className="display-4 fw-bold text-center text-primary mb-5">Experience</h2>
      <div
        className="card bg-dark text-light border-primary card-hover mx-auto slide-in section-delay-2"
        style={{ maxWidth: '720px' }}
      >
        <div className="card-body">
          <h3 className="card-title h4 fw-bold">
            Frontend Developer <span className="fs-3 text-success animate-bounce-in">2.3 years</span> of Experience at
          </h3>

          <h5 className="text-primary">EchorTech (a Cygnus Digital Innovations)</h5>
          <p className="card-text">March 2022 – Present</p>

          <p className="mt-4">
            Developed dynamic websites using modern frameworks and technologies including:
          </p>
          <p className="mb-3">
            <strong>Languages & Frameworks:</strong> React.js, Next.js, HTML, SCSS, JavaScript, ES6, React-Native, Svelte, jQuery
            <br />
            <strong>Styling & Animation:</strong> Tailwind, Bootstrap, MUI, GSAP
            <br />
            <strong>Auth & Cloud:</strong> AWS Cognito, Amplify, Firebase, OAuth
            <br />
            <strong>Tools:</strong> Git, GitHub, Swagger, Postman
            <br />
            <strong>Other:</strong> API Integration, Data Scraping & Migration, DynamoDB, SEO, Testing & Debugging
            <br />
            <strong>LLMs:</strong> ChatGPT, DeepSeek, Claude, Grok, Bolt
          </p>
          <p> <strong>Testing & Debugging , SEO, Project
            Deployments </strong>etc.. enabling secure authentication
            and rapid deployment pipelines , crafting visually
            engaging and highly responsive web experiences. </p>

          <p>
            SEO-optimized, pixel-perfect websites with a focus on
            clean architecture and scalable design systems. Known for transforming complex UI/UX concepts into
            intuitive, production-ready code with speed, creativity, and attention to detail.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
