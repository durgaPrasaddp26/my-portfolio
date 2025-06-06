import React from 'react';

const sections = [
    { name: 'Home', id: 'hero' },
    { name: 'About Me', id: 'about-me' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'contact' },
];

const navLinkStyle = {
    position: 'relative',
    color: '#ffffff',
    margin: '0 10px',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
};

const navLinkHoverStyle = {
    color: '#00ffd1',
};

const underlineStyle = {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: '-4px',
    width: '100%',
    height: '2px',
    backgroundColor: '#00ffd1',
    transform: 'scaleX(0)',
    transition: 'transform 0.3s ease',
    transformOrigin: 'left',
};

const Navbar = () => {

   const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }

  // 🛠️ SAFETY CHECK
  const navbarCollapse = document.getElementById('navbarNav');
  const toggleButton = document.querySelector('.navbar-toggler');

  if (navbarCollapse && navbarCollapse.classList.contains('show')) {
    navbarCollapse.classList.remove('show');
  }

  if (toggleButton) {
    toggleButton.setAttribute('aria-expanded', 'false');
  }
};



    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark fixed-top"
            style={{
                background: 'rgba(0, 0, 0, 20)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                zIndex: 100000,
            }}
        >
            <div className="container-fluid">
                <a
                    className="navbar-brand fw-bold"
                    href="#hero"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('hero');
                    }}
                    style={{ color: '#00ffd1', fontWeight: 'bold', fontSize: '1.3rem' }}
                >
                    MyPortfolio 🚀
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {sections.map((section) => (
                            <li className="nav-item" key={section.id}>
                                <a
                                    href={`#${section.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(section.id);
                                    }}
                                    className="nav-link"
                                    style={{
                                        ...navLinkStyle,
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.color = navLinkHoverStyle.color;
                                        const underline = document.createElement('div');
                                        Object.assign(underline.style, underlineStyle, { transform: 'scaleX(1)' });
                                        e.target.appendChild(underline);
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.color = '#ffffff';
                                        if (e.target.lastChild && e.target.lastChild.style) {
                                            e.target.removeChild(e.target.lastChild);
                                        }
                                    }}
                                >
                                    {section.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
