import React from 'react';

const projects = [
  {
    name: 'Landwey',
    desc: 'Real estate BUY/SELL/POST Properties',
    tech: 'React.js, Java Script, HTML, CSS, Bootstrap, MUI, AXIOS, AWS Amplify, Mangodb, OAuth, GIT, GITHUB, POSTMAN etc..',
    links: [
      { label: 'Live Demo', url: 'https://www.landwey.in/' },
      { label: 'Dashboards', url: 'https://admin.landwey.in/' },
    ]
  },
  {
    name: 'Crypto-Patel',
    desc: 'Crypto/Blockchain news dashboard with real-time feeds.',
    tech: 'Next.js, SSR, SSG, Java Script, HTML, CSS, Bootstrap, MUI, AXIOS, Firebase, AWS Amplify, Mangodb, OAuth, GIT, GITHUB, POSTMAN etc..',
    links: [
      { label: 'Live Demo', url: 'https://cryptopatel.com/' },
      { label: 'Social Media', url: 'https://www.instagram.com/cryptopatel/?hl=en' },
    ]
  },
  {
    name: 'Quant Check',
    desc: 'Experience the future of crypto trading with our groundbreaking Crypto Backtesting Platform. Create or Copy Winning Strategies.',
    tech: 'React.js, Java Script, HTML, CSS, Bootstrap, MUI,AXIOS, AWS Amplify, Mangodb, OAuth, GIT, GITHUB, POSTMAN etc..',
    links: [
      { label: 'Live Demo', url: '' },
      { label: 'Social Media', url: 'https://www.instagram.com/quantcheck/' },
    ]
  },

  {
    name: 'KEBAPP',
    desc: 'KEBAPP Restaurant Onboarding Platform for Customers Internationally',
    tech: 'React.js, Java Script, HTML, CSS, Bootstrap, MUI, AXIOS, AWS Amplify, Mangodb, OAuth, GIT, GITHUB, POSTMAN etc..',
    links: [
      { label: 'Live Demo', url: 'https://vendor-onboarding.kebapp-chefs.com/' },
      { label: 'Social Media', url: 'https://www.instagram.com/kebappcoin.official/' },
    ]
  },
  {
    name: 'Nithin-Fibre-Works',
    desc: "Nithin Fibre Works is a trusted company based in Hyderabad, providing expert services in industrial fabrication and plastic welding solutions with precision and reliability",
    tech: 'HTML,CSS, Java ScriptReact, MUI, GIT, GITHUB, Github Pages',
    links: [
      { label: 'Live Demo', url: '  https://durgaprasaddp26.github.io/nithin-fibre-works/' },
      { label: 'Social Media', url: '' },
    ]
  },
  {
    name: 'Samstapana',
    desc: 'Construction company website with CMS capabilities.',
    tech: 'HTML,CSS, Java ScriptReact, MUI,  POSTMAN, GIT, GITHUB,',
    links: [
      { label: 'Live Demo', url: '' },
      { label: 'Social Media', url: '' },
    ]
  }
];


const Projects = () => (
  <section id="projects" className="py-5 fade-in section-delay-1">
    <div className="container">
      <h2 className="display-4 fw-bold text-center text-primary mb-5">Projects</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {projects.map((project, index) => (
          <div key={project.name} className={`col slide-in section-delay-${index % 3 + 1}`}>
            <div className="card bg-dark text-light border-primary card-hover h-100">
              <div className="card-body d-flex flex-column">
                <h3 className="card-title h4 fw-bold">{project.name}</h3>
                <p className="card-text text-white">{project.desc}</p>
                <p className="card-text"><small className="text-primary">Tech used: {project.tech}</small></p>
                <div className="mt-auto d-flex gap-2 flex-wrap">
                   {project.links.map(({ label, url }) =>
                    url ? (
                      <a
                        key={label}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary"
                      >
                        {label}
                      </a>
                    ) : (
                      <button key={label} className="btn btn-secondary" disabled>
                        {label}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);



export default Projects;