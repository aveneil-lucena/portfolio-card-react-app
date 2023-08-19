import React from 'react';
import './index.css';
import './animations.css';
import ThemesDropdown from './ThemesDropdown';

const ProjectsOverlay = ({ closeModal, currentTheme }) => {

  return (
  <div className={`projects-container ${currentTheme} space-background gradient-bg flex flex-col items-center justify-center h-screen `}>
      {/* Projects Card Container */}
      <div className="projects-card-container flex p-8 rounded-t-2xl z-0
      shadow-[0_-10px_18px_-15px_rgba(0,0,0,0.3)]">
        {/* Close Button on the contact form */}
        <button 
        onClick={closeModal} 
        className={`close-button ${currentTheme} absolute top-2 right-2`}>
            <img
            src={process.env.PUBLIC_URL + '/icons/close.svg'}
            alt="Close"
            className="w-10 h-10"
        />
        </button>
        {/* Projects About Me Container */}
        <div className={`projects-about-me ${currentTheme} w-full transparent `}>
          <p className={`text-intro ${currentTheme} text-base drop-shadow-sm`}>
            THIS IS THE PROJECTS CARD UI
          </p>
          <h1 className={`text-intro-name ${currentTheme} mb-2 text-5xl font-bold drop-shadow-sm tracking-wide animate-pulse`}>THIS IS THE PROJECTS CARD UI</h1>
          <p className={`text-intro-container ${currentTheme} text-lg drop-shadow-sm`}>
            a <b><span className={`text-full-stack ${currentTheme} drop-shadow-sm`}>THIS IS THE PROJECTS CARD UI</span></b>THIS IS THE PROJECTS CARD UI 
            <br></br>
            <br></br>THIS IS THE PROJECTS CARD UI
            <br></br>THIS IS THE PROJECTS CARD UI
            <br></br>
            <br></br>THIS IS THE PROJECTS CARD UI
          </p>
          {/* You can add more content or components here */}
        </div>
      </div>

      {/* Projects Buttons Container 
      <div className={`projects-buttons-container ${currentTheme} flex bottom-0 items-end justify-end p-6 pt-14 pb-14 bg-gray-000 rounded-b-2xl`}>
        <a
          href={process.env.PUBLIC_URL + '/media/your-resume.pdf'}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button flex justify-center font-sans text-xl/9 text-white p-2 mr-4 w-48 h-14 rounded-full drop-shadow-lg bg-indigo-500 hover:bg-indigo-700 hover:animate-pulse hover:shadow-inner"
        >
          Resume
        </a>
        <button
          className="contact-button flex justify-center font-sans text-xl/9 text-white p-2 mr-[501px] w-48 h-14 rounded-full drop-shadow-lg bg-indigo-500 hover:bg-indigo-700 hover:animate-pulse hover:shadow-inner"
          onClick={openModal}
        >
          Contact Me!
        </button>
        <div className="flex space-x-4 items-center">
        <a
          href="https://github.com/example-link"
          target="_blank"
          rel="noopener noreferrer"
          className="github-button transition ease-in-out delay-50 w-14 h-14 p-2 bg-gray-200 drop-shadow-lg rounded-md 
          bg-gradient-to-t from-purple-100 to-transparent ... hover:bg-gradient-to-t hover:from-gray-500 hover:to-white-200 ... hover:scale-125 duration-250 "
        >
          <img
            src={process.env.PUBLIC_URL + '/icons/github.svg'}
            alt="GitHub"
            className=""
          />
        </a>
        <a
          href="https://www.instagram.com/example-link/"                target="_blank"
          rel="noopener noreferrer"
          className="instagram-button transition ease-in-out delay-50 w-14 h-14 p-2 bg-gray-200 drop-shadow-lg rounded-md 
          bg-gradient-to-t from-purple-100 to-transparent ... hover:instagram-button ... drop-shadow-lg hover:scale-125 duration-250 hover:img:invert"
        >
          <img
            src={process.env.PUBLIC_URL + '/icons/instagram.svg'}
            alt="Instagram"
            className=""
          />
        </a>
        </div>
        
        {/* Allows the modal to close on exit button click 
        {showModal && (
          <Contact closeModal={closeModal}></Contact>
        )}
        </div> */}
  {/* Render your project containers and other content */}

      </div>

      
  );
}

export default ProjectsOverlay;
