import React, { useState } from 'react';
import './index.css';
import './animations.css';
import Contact from './Contact';
import ProjectsOverlay from './ProjectsOverlay';
import ThemesDropdown from './ThemesDropdown';

const App = () => {

  const [showModal, setShowModal] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('light'); // 'light', 'dark', or 'nebula'
  const [showProjectsOverlay, setShowProjectsOverlay] = useState(false);

  const openContactModal = () => {
    setShowModal(true);
  };

  const openProjectsOverlay = () => {
    setShowProjectsOverlay(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setShowProjectsOverlay(false);
  };

  const handleThemeChange = (theme) => {
    console.log('Selected Theme:', theme);
    setCurrentTheme(theme);
  };



  return (
  <div className={`portfolio-container ${currentTheme} space-background gradient-bg flex flex-col items-center justify-center h-screen `}>
      {/* Themes Dropdown */}
      <ThemesDropdown currentTheme={currentTheme} onChange={handleThemeChange}/>

      {/* Portfolio Card Container */}
      <div className={`portfolio-card-container ${currentTheme} flex p-8 rounded-2xl z-0
      shadow-[0_-10px_18px_-15px_rgba(0,0,0,0.3)]`}>
        <div className={`portfolio-avatars ${currentTheme} w-1/4 mt-[-30px] p-8 z-0 `}>
        {/* First Avatar */}
          <div className={`avatar-icon ${currentTheme} gradient-border flex justify-center items-start w-[150px] h-[150px] mr-14 m-1 absolute drop-shadow-md shadow-md `}>
            <img
              src={process.env.PUBLIC_URL + '/media/portrait.png'}
              alt="Avatar"
              className="rounded-full"
              title="Me!"
              draggable="false"
              onError={(e) => {
                e.target.src = process.env.PUBLIC_URL + '/icons/unavailable.svg';
              }}
            />
          </div>
        {/* Second Avatar */}
          <div className={`avatar-icon ${currentTheme} gradient-border flex justify-between items-start w-[120px] h-[120px] ml-4 m-1 mt-5 absolute drop-shadow-md shadow-md `}>
            <img
              src={process.env.PUBLIC_URL + '/media/Mittens.png'}
              alt="Second Avatar"
              className="rounded-full"
              title="Mittens!"
              draggable="false"
              onError={(e) => {
                e.target.src = process.env.PUBLIC_URL + '/icons/unavailable.svg';
              }}
            />
          </div>
        {/* Third Avatar */}
          <div className={`avatar-icon ${currentTheme} gradient-border flex justify-between items-start w-[120px] h-[120px] ml-4 m-1 mt-5 absolute drop-shadow-md shadow-md `}>
            <img
              src={process.env.PUBLIC_URL + '/media/Moo.png'}
              alt="Third Avatar"
              className="rounded-full"
              title="Moo!"
              draggable="false"
              onError={(e) => {
                e.target.src = process.env.PUBLIC_URL + '/icons/unavailable.svg';
              }}
            />
          </div>
        </div>

        {/* Portfolio About Me Container */}
        <div className={`portfolio-about-me ${currentTheme} w-full transparent `}>
          <p className={`text-intro ${currentTheme} text-base drop-shadow-sm`}>
            Hey there, welcome to my Portfolio Card! My name is
          </p>
          <h1 className={`text-intro-name ${currentTheme} mb-2 text-5xl font-bold drop-shadow-sm tracking-wider`}>
            AVENEIL LUCENA</h1>
          <p className={`text-intro-container ${currentTheme} text-lg drop-shadow-sm`}>
            I am a 
            <b><span className={`text-full-stack ${currentTheme} drop-shadow-sm`}> Full-Stack Developer</span></b> with a passion for designing, creativity, and of relaxing themes. 
            <br></br>

            <br></br>I love to code, but I also have a hobby for games such as <span className="game-hover animate-pulse" id="maplestory">MapleStory</span>, <span className="game-hover animate-pulse" id="overwatch">Overwatch</span>, <span className="game-hover animate-pulse" id="valorant">Valorant</span>,
            <br></br>as well as photography, cinematography, and video editing.
            <br></br>
            <br></br>I also have two cats, <b>Mittens</b> and <b>Moo</b>, who are crucial to my development role. 😸
            <br></br>
            <br></br>Thanks for checking out this small portfolio card of mine, take a look around!
          </p>
          {/* You can add more content or components here */}
        </div>
      </div>

      {/* Portfolio Buttons Container */}
      <div className={`portfolio-buttons-container ${currentTheme} flex items-end justify-end bg-gray-000 rounded-2xl`}>
      {/* Resume Button */}
        <a
          href={process.env.PUBLIC_URL + '/media/your-resume.pdf'}
          target="_blank"
          rel="noopener noreferrer"
          className={`resume-button ${currentTheme} flex justify-center font-sans text-xl/7 text-white p-2 mr-4 w-[105px] h-12 rounded-full drop-shadow-lg hover:bg-slate-500 hover:animate-pulse hover:shadow-inner`}
        >
          Resume
        </a>
      {/* Contact Button */}
        <button
          className={`contact-button ${currentTheme} flex justify-center font-sans text-xl/7 text-white p-2 mr-4 w-[135px] h-12 rounded-full drop-shadow-lg  hover:bg-slate-500 hover:animate-pulse hover:shadow-inner`}
          onClick={openContactModal}
        >
          Contact Me
        </button>
      {/* Projects Button */}
      <button
        className={`projects-button ${currentTheme} flex justify-center font-sans text-xl/7 text-white p-2 mr-2 sm:mr-[50px] md:mr-[185px] lg:mr-[235px] w-[105px] h-12 rounded-full drop-shadow-lg  hover:bg-slate-500 hover:animate-pulse hover:shadow-inner`}
        onClick={openProjectsOverlay}
      >
        Projects
      </button>
        <div className="flex space-x-4 items-center">
        <a
          href="https://github.com/aveneil-lucena"
          target="_blank"
          rel="noopener noreferrer"
          title="My GitHub! 😃"
          className="github-button transition ease-in-out delay-50 w-14 h-14 p-2 mr-1 bg-gray-200 drop-shadow-lg rounded-md 
          bg-gradient-to-t from-purple-100 to-transparent ... hover:bg-gradient-to-t hover:from-gray-500 hover:to-white-200 ... hover:scale-125 duration-250 "
        >
          <img
            src={process.env.PUBLIC_URL + '/icons/github.svg'}
            alt="GitHub"
            className=""
          />
        </a>
        <a
          href="https://www.linkedin.com/in/aveneil-lucena/"                
          target="_blank"
          rel="noopener noreferrer"
          title="My LinkedIn! 😃"
          className="linkedin-button transition ease-in-out delay-50 w-14 h-14 p-2 bg-gray-200 drop-shadow-lg rounded-md 
          bg-gradient-to-t from-purple-100 to-transparent ... hover:scale-125 duration-250"
        >
          <img
            src={process.env.PUBLIC_URL + '/icons/linkedin.svg'}
            alt="LinkedIn"
            className=""
          />
        </a>
        </div>
        
        {/* Projects Overlay */}
        {showProjectsOverlay && (
          <div className={`projects-overlay ${currentTheme}`}>  
            <ProjectsOverlay closeModal={closeModal}></ProjectsOverlay>   
            </div> 
        )}

        {/* Allows the modal to close on exit button click */ }
        {showModal && (
          <Contact closeModal={closeModal}></Contact>
        )}
        </div>
      </div>

      
  );
}

export default App;
