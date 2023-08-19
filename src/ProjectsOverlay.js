import React, { useState } from 'react';
import './index.css';
import './animations.css';

const ProjectsOverlay = ({ closeModal, currentTheme }) => {
    // Project data goes here!
    const projects = [
        { name: "Portfolio Website", image: process.env.PUBLIC_URL + '/media/Mittens.png', desc: "My developer portfolio website. Much more stuff from my portfolio card." },
        { name: "Portfolio Card", image: process.env.PUBLIC_URL + '/media/Moo.png', desc: "My developer portfolio card, a smaller project compared to the website portfolio." },
        { name: "HobinRood", image: process.env.PUBLIC_URL + '/media/Mittens.png', desc: "A mock-RobinHood stock application where user can sign up, monitor real-time stock values, and more." },
        { name: "Smart Chart Clinician", image: process.env.PUBLIC_URL + '/media/Moo.png', desc: "A Remix react-based application where EMT's log patient care, and real-time ambulance scheduling." },
        { name: "Project", image: process.env.PUBLIC_URL + '/icons/react.svg', desc: "To be added!" },
        { name: "Project", image: process.env.PUBLIC_URL + '/icons/react.svg', desc: "To be added!" },
        { name: "Project", image: process.env.PUBLIC_URL + '/icons/react.svg', desc: "To be added!" },
        { name: "Project", image: process.env.PUBLIC_URL + '/icons/react.svg', desc: "To be added!" },
        { name: "Project", image: process.env.PUBLIC_URL + '/icons/react.svg', desc: "To be added!" },
        { name: "Project", image: process.env.PUBLIC_URL + '/icons/react.svg', desc: "To be added!" },
        { name: "Project", image: process.env.PUBLIC_URL + '/icons/react.svg', desc: "To be added!" },
        { name: "Project", image: process.env.PUBLIC_URL + '/icons/react.svg', desc: "To be added!" },
        
        
    // Add more projects
    ];

    const itemsPerPage = 6; // Number of projects per page

    const [currentPage, setCurrentPage] = useState(1);
  
    const indexOfLastProject = currentPage * itemsPerPage;
    const indexOfFirstProject = indexOfLastProject - itemsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  
    const totalPages = Math.ceil(projects.length / itemsPerPage);
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

  return (
  <div className={`projects-container ${currentTheme} space-background gradient-bg flex flex-col items-center justify-center h-screen `}>

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
            className="w-16 h-16"
        />
        </button>
        {/* Projects About Me Container */}
        <div className={`projects-about-me ${currentTheme} w-full transparent `}>
          <p className={`text-intro ${currentTheme} text-base drop-shadow-sm`}>
            {/* Text Goes Here */ }
          </p>
          <h1 className={`text-intro-name ${currentTheme} mb-3 text-5xl font-bold drop-shadow-sm tracking-wide`}>
            Take a look at some of my projects!
          </h1>
          <h2 className={`text-intro-name ${currentTheme} mb-6 text-2xl font-thin drop-shadow-sm tracking-wide`}>
            This page will gradually expand with more projects in the future!
          </h2>

          {/* Project content */}
          <div className={`projects-row ${currentTheme} flex`}>
            {currentProjects.map((project, index) => (
            <div key={index} className={`project-card ${currentTheme} w-56 h-60 p-2 rounded-md flex flex-col items-center`}>
                <img src={project.image} alt={project.name} className="w-full h-[35%]" />
                <h3 className={`project-name ${currentTheme} mt-2 text-lg font-semibold text-center underline`}>{project.name}</h3>
                <p className={`project-description ${currentTheme} mt-2 text-md text-center`}>{project.desc}</p>
            </div>
            ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
            <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
            >
                {index + 1}
            </button>
            ))}
        </div>

        </div>
      </div>
    </div>

  );
}

export default ProjectsOverlay;
