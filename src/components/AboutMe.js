import React from 'react';

const AboutMe = () => (
    <section id="about-me" className="py-5 bg-dark bg-opacity-50 fade-in section-delay-1">
        <div className="container">
            <h2 className="display-4 fw-bold text-center text-primary mb-5 slide-in section-delay-2">About Me</h2>
            <div className="card bg-dark text-light border-primary card-hover mx-auto slide-in section-delay-3" style={{ maxWidth: '960px' }}>
                <div className="card-body">
                    <p className="lead">
                        I’m a passionate and performance-driven Frontend Developer with <strong className="text-success">2.3 years</strong> of experience at <strong className="text-primary">EchorTech</strong>, where I’ve built fast, scalable, and secure web applications from the ground up. I specialize in turning complex UI/UX visions into <strong className="text-warning">fluid, intuitive digital experiences</strong> .<br /><br />
                        Whether it’s crafting pixel-perfect components, integrating robust APIs, or optimizing for speed and accessibility — I take pride in writing <strong className="text-info">clean, reusable code</strong> that not only works, but wows. Known for my creativity, attention to detail, and speed, I thrive in fast-paced teams where ideas flow and impact matters. <br /><br />
                        Beyond just coding, I bring a <strong className="text-danger">builder’s mindset</strong> — constantly learning, experimenting, and pushing boundaries to deliver experiences that users love and remember.
                    </p>


                </div>
            </div>
        </div>
    </section>
);

export default AboutMe;