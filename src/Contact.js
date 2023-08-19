import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = ({ closeModal }) => {    
    const form = useRef();

    const [currentTheme] = useState('light'); // 'light', 'dark', or 'nebula'  
    
    const [notification, setNotification] = useState({ 
        message: '', 
        show: false 
    });    

    const [timerProgress, setTimerProgress] = useState(0);

    const showNotification = (message, duration = 3000) => {
        setNotification({ message, show: true });
        setTimerProgress(0); // Reset timer progress

    // Start the timer
    const timer = setTimeout(() => {
    setNotification({ message: "", show: false });
    setTimerProgress(0); // Reset timer progress
    }, duration);

    // Update the timer progress every 100ms
    const interval = setInterval(() => {
        setTimerProgress((prevProgress) => prevProgress + (100 / duration) * 100);
    }, 100);

    // Clear the timer and interval on unmount or when showing another notification
    return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            'service_8epfwtc', 
            'template_hszdikz', 
            form.current, 
            '3ak7rT509eLo80psg')
        .then((result) => {
          console.log(result.text);
          showNotification('Message successfully sent!', 6000);
        })
        .catch((error) => {
          console.log(error.text);
          showNotification('There was an error sending the message.', 7000); 
          // Show the message for a longer duration
        });
    };


  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50`}>
      <div className={`modal-overlay ${currentTheme}`}>
      {/* Themes Dropdown 
      <ThemesDropdown currentTheme={currentTheme} onChange={handleThemeChange} />*/}
        <div className={`modal-content ${currentTheme} bg-white max-w-md p-4 rounded-lg relative`}>          
          <main className="relative py-4">
          {/* Notification when user submits contact form */}
          {notification.show && (
          <div className="notification">
            {notification.message}
            <div className="timer-bar-container">
              <div
                className="timer-bar"
                style={{ width: `${timerProgress}%` }}
              ></div>
            </div>
          </div>
        )}
            <div className={`contact-input ${currentTheme} relative z-10 max-w-screen-xl mx-auto sm:px-4 md:px-8 `}>
            {/* Close Button on the contact form */}
                <button 
                onClick={closeModal} 
                className={`close-contact-button ${currentTheme} absolute top-2 right-2`}>
                    <img
                    src={process.env.PUBLIC_URL + '/icons/close.svg'}
                    alt="Close"
                    className="w-10 h-10"
                    />
                </button>
            {/* Contact form */}
            <div className="max-w-lg space-y-2 px-4 sm:mx-auto sm:text-center sm:px-0">
                <p className={`contact-heading ${currentTheme} text-cyan-400 font-semibold text-3xl sm:text-4xl`}>
                    Hit me up!
                </p>
                <p className={`contact-intro ${currentTheme} text-[19px]`}>
                    Send me a message if you'd like to contact me! 😎👍
                </p>
            </div>
            <div className={`contact-form-box ${currentTheme} mt-12 shadow-[0_-15px_25px_-15px_rgba(0,0,0,0.3)] mx-auto px-24 p-6 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl`}>
                <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
                <label className={`contact-full-name ${currentTheme} font-medium `}>
                    Full Name</label>
                <input
                type="text"
                name="user_name"
                required
                className={`contact-fullname-textarea ${currentTheme} w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-gray-600 shadow-md rounded-lg`}
                placeholder="Name"
                />
            </div>
            <div>
                <label className={`contact-email ${currentTheme} font-medium`}>
                    Email</label>
                <input
                type="email"
                name="user_email"
                required
                className={`contact-email-textarea ${currentTheme} w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-gray-600 shadow-md rounded-lg`}
                placeholder="example@email.com"
                />
            </div>
            {/*<div>
                <label className="font-medium">
                    Phone Number
                </label>
                <div className="relative mt-2">
                    <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                        <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                            <option>US</option>
                            <option>ES</option>
                            <option>MR</option>
                        </select>
                    </div>
                    <input
                        type="number"
                        placeholder="+1 (555) 000-000"
                        required
                        className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                    />
                </div>
            </div>*/}
            <div>
                <label className={`contact-message ${currentTheme} font-medium`}>
                    Message</label>
                <textarea
                name="message"
                required
                className={`contact-message-textarea ${currentTheme} w-full mt-2 h-56 px-3 py-1 resize-none appearance-none bg-transparent outline-none border focus:border-gray-600 shadow-md rounded-lg`}
                placeholder="Type here..."
                ></textarea>
            </div>
            <button
                type="submit"
                className="w-full px-2 py-3 text-white font-medium bg-indigo-800 hover:bg-indigo-500 active:bg-gray-900 shadow-md rounded-lg duration-150 hover:animate-pulse"
            >
                Submit
            </button>
            </form>
            </div>
            </div>
            <div className={`contact-modal-gradient ${currentTheme} absolute inset-0 blur-[120px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]`}>
            </div>
        </main>
        </div>
      </div>
    </div>
    )
}

export default Contact;
