import React from 'react';

const skills = [
  'React.js', 'Next.js', 'JavaScript', 'Jquery', 'HTML', 'CSS (SCSS)', 'Svelte', 'React Native', 'Tailwind',
  'Bootstrap', 'MUI', 'GSAP', 'Firebase', 'AWS Amplify', 'AWS Cognito', 'Git', 'GitHub', 'DynamoDB', 'Postman', "Swagger", 'OAuth', "Data Scraping", "API Int", "REST", "LLM'S", "Debugging","Dev Testing"
];

const Skills = () => (
  <div id='skills' className='pt-3'>
    <section className="pt-5  bg-opacity-50 fade-in section-delay-1">
      <div className="container">
        <h2 className="display-5 fw-bold text-center text-primary mb-5 slide-in section-delay-2">Skills</h2>
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6 g-4">
          {skills.map((skill, index) => (
            <div key={skill} className={`col slide-in section-delay-${(index % 3) + 1}`}>
              <div className="card bg-black text-light border-primary card-hover h-100">
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold text-primary">{skill}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Skills;