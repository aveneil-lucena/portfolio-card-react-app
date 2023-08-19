import React from 'react';
import './index.css';
import './animations.css';
import ThemesDropdown from './ThemesDropdown';

const ProjectsOverlay = ({ closeModal, currentTheme }) => {
    // Project data goes here!
    const projects = [
        { name: "HobinRood", image: '../public/media/Mittens.png', desc: "A mock-RobinHood stock app" },
        { name: "Project 2", image: '../public/media/Mittens.png', desc: "To be added!" },
        { name: "Project 3", image: '../public/media/Mittens.png', desc: "To be added!" },
        { name: "Project 4", image: '../public/media/Mittens.png', desc: "To be added!" },
    // Add more projects
    ];

  return (
  <div className={`projects-container ${currentTheme} space-background gradient-bg flex flex-col items-center justify-center h-screen `}>
       <div className={`projects-overlay`}></div> 
      {/* Projects Card Container */}
      <div className="projects-card-container flex p-20 rounded-2xl z-0
      shadow-[0_-10px_18px_-15px_rgba(0,0,0,0.3)]">
        {/* Close Button on the contact form */}
        <button 
        onClick={closeModal} 
        className={`close-projects-button ${currentTheme} absolute top-2 right-2`}>
            <img
            src={process.env.PUBLIC_URL + '/icons/close.svg'}
            alt="Close"
            className="w-10 h-10"
        />
        </button>
        {/* Projects About Me Container */}
        <div className={`projects-about-me ${currentTheme} w-full transparent `}>
          <p className={`text-intro ${currentTheme} text-base drop-shadow-sm`}>
            {/* Text Goes Here */ }
          </p>
          <h1 className={`text-intro-name ${currentTheme} mb-2 text-5xl font-bold drop-shadow-sm tracking-wide`}>
            THIS IS THE PROJECTS CARD UI</h1>

          {/* Project content */}
          <div className={`projects-row ${currentTheme} flex space-x-4`}>
            {projects.map((project, index) => (
            <div key={index} className={`project-card ${currentTheme} w-48 h-56 p-4 border rounded-md flex flex-col items-center`}>
                <img src={project.image} alt={project.name} className="w-full h-auto" />
                <h3 className={`project-name ${currentTheme} mt-2 text-lg font-semibold text-center`}>{project.name}</h3>
                <p className={`project-description ${currentTheme} mt-2 text-md text-center`}>{project.desc}</p>
            </div>
            ))}
        </div>

        </div>
      </div>
    </div>

  );
}

export default ProjectsOverlay;
