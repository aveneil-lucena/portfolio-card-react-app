import React, { useState } from 'react';
import './index.css';
import './animations.css';

const ProjectsOverlay = ({ closeModal, currentTheme }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
    setShowTooltip(true);
    };

    const handleMouseLeave = () => {
    setShowTooltip(false);
    };

    // Projects data goes here!
    const projects = [
        { name: "Portfolio Website", 
        image: process.env.PUBLIC_URL + '/icons/configurations.svg', 
        desc: "My developer portfolio website. Much more stuff from my portfolio card.",
            link: "https://www.google.com",
            tooltip: "Under construction!" },
        { name: "Portfolio Card", 
        image: process.env.PUBLIC_URL + '/media/Projects/portfolio-card-app-preview.png', 
        desc: "My developer portfolio card, a smaller project compared to the website portfolio.",
            link: "https://www.google.com",
            tooltip: "You're on it right now!" },
        { name: "HobinRood", 
        image: process.env.PUBLIC_URL + '/media/Projects/hobinrood-app-preview.png', 
        desc: "A mock-RobinHood stock application where user can sign up, monitor real-time stock values, and more.",
            link: "https://not-robin-hood.vercel.app/",
            tooltip: "Since this is a mock-app with a real database, just use dummy-data such as 123@gmail.com and 1234567 as your password or so.", },
        { name: "OtterSoft Smart Chart Clinician", 
        image: process.env.PUBLIC_URL + '/icons/react.svg', 
        desc: "A Remix react-based application where EMT's log patient care, and real-time ambulance scheduling.",
            link: "#",
            tooltip: "NDA to showcase unfortunately 😔",
        },
        { name: "Project", 
        image: process.env.PUBLIC_URL + '/icons/react.svg', 
        desc: "To be added!",
            link: "#" 
        },
        { name: "Project", 
        image: process.env.PUBLIC_URL + '/icons/react.svg', 
        desc: "To be added!",
            link: "#" 
        },
        { name: "Project", 
        image: process.env.PUBLIC_URL + '/media/Mittens.png', 
        desc: "To be added!",
            link: "#",
            tooltip: "Very business!"
        },        
        { name: "Project", 
        image: process.env.PUBLIC_URL + '/media/Moo.png', 
        desc: "To be added!",
            link: "#",
            tooltip: "Just hangin' around."
        },
        { name: "Project", 
        image: process.env.PUBLIC_URL + '/icons/react.svg', 
        desc: "To be added!",
            link: "#",
            tooltip: "Tooltip!" 
        },       
        // More projects along the way
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
          <h1 className={`projects-text-intro-header ${currentTheme} mb-3 text-5xl font-bold drop-shadow-sm tracking-wide`}>
            Take a look at some of my projects!
          </h1>
          <h2 className={`projects-text-intro ${currentTheme} mb-6 text-2xl font-thin drop-shadow-sm tracking-wide`}>
            This page will gradually expand with more projects in the future!
          </h2>

          {/* Project cards content */}
          <div className={`projects-row ${currentTheme} flex`}>
            {currentProjects.map((project, index) => (
                <div key={index}>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`project-link`}
                        onMouseEnter={() => setShowTooltip(true)}  // Set showTooltip to true on mouse enter
                        onMouseLeave={() => setShowTooltip(false)} // Set showTooltip to false on mouse leave
                    >
                    <div className={`project-card ${currentTheme} w-56 h-60 p-2 rounded-md flex flex-col items-center`}>
                        <img src={project.image} alt={project.name} className={`react-icon ${currentTheme} w-full h-[35%]`} />
                        <h3 className={`project-name ${currentTheme} mt-2 text-lg font-semibold text-center underline`}>{project.name}</h3>
                        <p className={`project-description ${currentTheme} mt-2 text-md text-center`}>{project.desc}</p>
                        {/* Checks if tooltip exists within project data, else doesn't display */}
                        {project.tooltip && (
                        <div className={`tooltip ${currentTheme} ${showTooltip ? 'tooltip-pulsate' : ''}`}>
                            <p className={`tooltip-text ${currentTheme}`}>{project.tooltip}</p>
                        </div>
                        )}
                    </div>
                </a>
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
