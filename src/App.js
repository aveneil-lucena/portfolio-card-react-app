import React from 'react';
import './index.css';

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-500">
      <div className="bg-white p-8 shadow-md rounded-lg flex">
        <div className="w-1/4 pr-6">
          <div className="w-24 h-24 relative gradient-border">
            <img
              src={process.env.PUBLIC_URL + '/media/portrait.jpg'}
              alt="Avatar"
              className="rounded-full"
            />
          </div>

          <div className="socials flex justify-between items-center">
          <div className="flex justify-between items-center">
          <div className="mt-4 flex justify-between text-center">
            <a
              href={process.env.PUBLIC_URL + '/media/your-resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button font-mono text-white-1000 p-2 hover:underline bg-gray-200 
              rounded-lg hover:bg-gray-300 hover:no-underline"
            >
              RESUME
            </a>

            <div className="flex space-x-2">
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-button p-2 w-20 h-20 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  {<img
                    src={process.env.PUBLIC_URL + '/icons/github.svg'}
                    alt="Avatar"
                    className=""
                  />}
                </a>
                <a
                  href="https://instagram.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram-button p-2 w-20 h-20 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  {<img
                    src={process.env.PUBLIC_URL + '/icons/instagram.svg'}
                    alt="Avatar"
                    className=""
                  />}
                </a>
                <a
                  href="https://linkedin.com/in/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-button p-2 w-20 h-20 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  {<img
                    src={process.env.PUBLIC_URL + '/icons/linkedin.svg'}
                    alt="Avatar"
                    className=""
                  />}
                </a>
              </div>
          </div>
          </div>
          </div>
        </div>
        <div className="w-3/4">
          <p className="text-gray-600">
            What's up! My name is
          </p>
          <h1 className="text-2xl font-bold mb-4">REDACTED</h1>
          <p className="text-gray-600">
            a Front-End and Back-End developer who needs a job, please hire me!
          </p>
          {/* You can add more content or components here */}
        </div>
      </div>
    </div>
  );
}

export default App;
