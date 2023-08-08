import React from 'react';
import './index.css';

function App() {
  return (
    <div className="portfolio-container flex items-center justify-center h-screen bg-gray-000">
      <div className="portfolio-card-container flex bg-white p-8">
        <div className="w-/4 pr-6">
          <div className="w-14 h-24 relative drop-shadow-md shadow-lg shadow-indigo-500/50 gradient-border">
            <img
              src={process.env.PUBLIC_URL + '/media/portrait.jpg'}
              alt="Avatar"
              className="rounded-full"
            />
          </div>
        </div>

        <div className="portfolio-about-me w-3/4">
          <p className="text-gray-600">
            What's up! My name is
          </p>
          <h1 className="text-2xl font-bold mb-4">Bazinga</h1>
          <p className="text-gray-600">
            a Front-End and Back-End developer who needs a job, please hire me!
          </p>
          {/* You can add more content or components here */}
        </div>

          <div className="flex flex-col-2 justify-between space-y-2">
              <a
                href={process.env.PUBLIC_URL + '/media/your-resume.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button flex justify-center font-mono font-bold text-base/10 text-white p-2 w-32 h-14 rounded-full drop-shadow-md  bg-indigo-500
                hover:bg-indigo-700 "
              >
                Resume
              </a>

            <div className="flex space-between space-x-3">
                <a
                  href="https://github.com/aveneil-lucena"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-button transition ease-in-out delay-50 w-14 h-14 p-2 bg-gray-200 drop-shadow-md rounded-md 
                  hover:bg-gradient-to-t hover:from-gray-500 hover:to-white-200 ... hover:scale-110 duration-100"
                >
                  <img
                    src={process.env.PUBLIC_URL + '/icons/github.svg'}
                    alt="GitHub"
                    className=""
                  />
                </a>
                <a
                  href="https://www.instagram.com/neil_luc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram-button transition ease-in-out delay-50 w-14 h-14 p-2 bg-gray-200 drop-shadow-md rounded-md 
                  hover:bg-gradient-to-t hover:from-pink-500 hover:to-yellow-500 ... hover:scale-110 duration-100"
                >
                  <img
                    src={process.env.PUBLIC_URL + '/icons/instagram.svg'}
                    alt="Instagram"
                    className=""
                  />
                </a>
                <a
                  href="https://linkedin.com/in/aveneil-lucena"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-button transition ease-in-out delay-50 w-14 h-14 p-2 bg-gray-200 drop-shadow-md rounded-md 
                  hover:bg-gradient-to-t hover:from-blue-500 hover:to-blue-200 ... hover:scale-110 duration-100"
                >
                  <img
                    src={process.env.PUBLIC_URL + '/icons/linkedin.svg'}
                    alt="LinkedIn"
                    className=""
                  />
                </a>
                
            </div>
          </div>

      </div>
    </div>
  );
}

export default App;
