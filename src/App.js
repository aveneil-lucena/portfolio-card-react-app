import React, { useState } from 'react';
import './index.css';
import './animations.css';
import Contact from './Contact';
import ThemesDropdown from './ThemesDropdown';

const App = () => {

  const [showModal, setShowModal] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('light'); // 'light', 'dark', or 'sunset'

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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
      <div className="portfolio-card-container flex p-8 rounded-t-2xl z-0
      shadow-[0_-10px_18px_-15px_rgba(0,0,0,0.3)]">
        <div className={`portfolio-avatars ${currentTheme} w-1/4 p-8 z-0 `}>
        {/* First Avatar */}
          <div className={`avatar-icon ${currentTheme} gradient-border flex justify-center items-start w-[150px] h-[150px] mr-14 m-1 absolute drop-shadow-md shadow-md `}>
            <img
              src={process.env.PUBLIC_URL + '/media/portrait.jpg'}
              alt="Avatar"
              className="rounded-full "
            />
          </div>
        {/* Second Avatar */}
          <div className={`avatar-icon ${currentTheme} gradient-border flex justify-between items-start w-[120px] h-[120px] ml-4 m-1 absolute drop-shadow-md shadow-md `}>
            <img
              src={process.env.PUBLIC_URL + '/media/mittens.png'}
              alt="Second Avatar"
              className="rounded-full"
            />
          </div>
        {/* Third Avatar */}
          <div className={`avatar-icon ${currentTheme} gradient-border flex justify-between items-start w-[120px] h-[120px] ml-4 m-1 absolute drop-shadow-md shadow-md `}>
            <img
              src={process.env.PUBLIC_URL + '/media/moo.png'}
              alt="Third Avatar"
              className="rounded-full"
            />
          </div>
        </div>

        {/* Portfolio About Me Container */}
        <div className={`portfolio-about-me ${currentTheme} w-full transparent `}>
          <p className={`text-intro ${currentTheme} text-base drop-shadow-sm`}>
            What's up! Welcome to my Portfolio Card, my name is
          </p>
          <h1 className={`text-intro-name ${currentTheme} mb-2 text-5xl font-bold drop-shadow-sm tracking-widest animate-pulse`}>Name</h1>
          <p className={`text-intro-container ${currentTheme} text-lg drop-shadow-sm`}>
            a <b><span className={`text-full-stack ${currentTheme} drop-shadow-sm`}>Full-Stack Developer</span></b> with a passion for creativity, simplicity, and the aesthetically pleasing. 
            <br></br>

            <br></br>I love to code, but I also have a hobby for games, and photography,video
            <br></br>cinematography and video editing.
            <br></br>
            <br></br>I also have two cats, Mittens and Moo, who are extremely crucial in my development role. 😸
          </p>
          {/* You can add more content or components here */}
        </div>
      </div>

      {/* Portfolio Buttons Container */}
      <div className={`portfolio-buttons-container ${currentTheme} flex bottom-0 items-end justify-end p-6 pt-14 pb-14 bg-gray-000 rounded-b-2xl`}>
        <a
          href={process.env.PUBLIC_URL + '/media/your-resume.pdf'}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button flex justify-center font-sans text-xl/9 text-white p-2 mr-4 w-48 h-14 rounded-full drop-shadow-lg bg-indigo-500 hover:bg-indigo-700 hover:animate-pulse hover:shadow-inner"
        >
          Resume
        </a>
        <button
          className="contact-button flex justify-center font-sans text-xl/9 text-white p-2 mr-[430px] w-48 h-14 rounded-full drop-shadow-lg bg-indigo-500 hover:bg-indigo-700 hover:animate-pulse hover:shadow-inner"
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
          bg-gradient-to-t from-purple-100 to-transparent ... hover:instagram-button ... drop-shadow-lg hover:scale-125 duration-250 "
        >
          <img
            src={process.env.PUBLIC_URL + '/icons/instagram.svg'}
            alt="Instagram"
            className=""
          />
        </a>
        <a
          href="https://linkedin.com/in/example-link"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-button transition ease-in-out delay-50 w-14 h-14 p-2 bg-gray-200 drop-shadow-lg rounded-md 
          bg-gradient-to-t from-purple-100 to-transparent... hover:linkedin-button ... hover:scale-125 duration-250"
        >
          <img
            src={process.env.PUBLIC_URL + '/icons/linkedin.svg'}
            alt="LinkedIn"
            className=""
          />
        </a>
        </div>
        
        {/* Allows the modal to close on exit button click */ }
        {showModal && (
          <Contact closeModal={closeModal}></Contact>
        )}
        </div>
      </div>

      
  );
}

export default App;
