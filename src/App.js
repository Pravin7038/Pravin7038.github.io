import React from 'react';
import './App.css';

function App() {
  const handleSmoothScroll = (targetId) => {
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  };

  const openResume = (resumeLink) => {
    window.open(resumeLink, '_blank');

  };

  const downloadResume = (resumePath) => {
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <div className="App">
      <nav id="nav-menu">
        <ul>
          <li><button className="nav-link home" onClick={() => handleSmoothScroll('#home')}>Home</button></li>
          <li><button className="nav-link about" onClick={() => handleSmoothScroll('#about')}>About</button></li>
          <li><button className="nav-link skills" onClick={() => handleSmoothScroll('#skills')}>Skills</button></li>
          <li><button className="nav-link projects" onClick={() => handleSmoothScroll('#projects')}>Projects</button></li>
          <li><button className="nav-link contact" onClick={() => handleSmoothScroll('#contact')}>Contact</button></li>
          <li><button className="nav-link resume" id="resume-link-1" onClick={() => downloadResume('Pravin-Pawar-Resume.pdf')}>
          Resume
        </button></li>
        </ul>
      </nav>

      <section id="home">
        <h1>Welcome to My Portfolio</h1>
        <img className="home-img" src="Pravin-Pawar-Image.png.png" alt="Professional Photo" />
      </section>

      <section id="about" className="about section">
        <h2>About Me</h2>
        <p id="user-detail-intro">A highly motivated and passionate Full Stack Web Developer, with a solid foundation in programming concepts and have completed several projects in HTML, CSS, JavaScript, React, MongoDB. Committed to delivering high-quality and user-friendly web applications. Eager to learn from experienced professionals.</p>
        <p id="user-detail-name">Pravin Pawar</p>
        <button className="nav-link resume" id="resume-link-2"  onClick={() => downloadResume('Pravin-Pawar-Resume.pdf')}>Download Resume</button>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <div className="skills-card">
          <img className="skills-card-img" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="Skill Image" />
          <p className="skills-card-name">React.js</p>
        </div>
        <div className="skills-card">
          <img className="skills-card-img" src="https://w1.pngwing.com/pngs/136/126/png-transparent-javascript-logo-angularjs-nodejs-computer-programming-web-development-computer-software-jquery-yellow.png" alt="Skill Image" />
          <p className="skills-card-name">Javascript</p>
        </div>
      </section>

      {/* <section id="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <img src="https://user-images.githubusercontent.com/115461514/221498510-9df35a9c-0406-4010-b004-72d002460102.jpeg" alt="Project Image" />
          <h3 className="project-title">Daily Lifestyle</h3>
          <p className="project-description">It is an E-commerse website have some functionalities like below:- login signup filter sort single product page multi product page search bar cart page payment page adminpage admindashboard</p>
          <p className="project-tech-stack">Tech Stack Used: HTML, CSS, JavaScript</p>
          <a className="project-github-link" href="https://github.com/Pravin7038/Daily-Lifestyle" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          <a className="project-deployed-link" href="https://dreamy-fenglisu-427c70.netlify.app" target="_blank" rel="noopener noreferrer">Project Demo</a>
        </div>
        <div className="project-card">
          <img src="Gifts.com.jpg" alt="Project Image" />
          <h3 className="project-title">Gifts.com</h3>
          <p className="project-description">It is an E-commerse website have some functionalities like below:- login signup filter sort single product page multi product page search bar cart page payment page adminpage admindashboard</p>
          <p className="project-tech-stack">Tech Stack Used: HTML, CSS, JavaScript</p>
          <a className="project-github-link" href="https://github.com/Pravin7038/Gifts.com" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          <a className="project-deployed-link" href="https://whimsical-cheesecake-1a2335.netlify.app" target="_blank" rel="noopener noreferrer">Project Demo</a>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <ul>
          <li id="contact-github">GitHub: <a href="https://github.com/Pravin7038" target="_blank" rel="noopener noreferrer">Pravin7038</a></li>
          <li id="contact-linkedin">LinkedIn: <a href="https://www.linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer">Pravin Pawar</a></li>
          <li id="contact-phone">Phone: 7350199360</li>
          <li id="contact-email">Email: pravin08pawar@example.com</li>
        </ul>
      </section> */}
    </div>
  );
}

export default App;
