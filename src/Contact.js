import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = ({ closeModal, children }) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8epfwtc', 'template_hszdikz', form.current, '3ak7rT509eLo80psg')
            .then((result) => {
                console.log(result.text);
                console.log("Message sent!")
                // Add any additional logic here, such as showing a success message
            }, (error) => {
                console.log(error.text);
                console.log("There was an error sending the message.")
                // Handle the error and provide user feedback if needed
        });
    };


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay">
        <div className="modal-content bg-white max-w-md p-4 rounded-lg shadow-lg relative">          <main className="relative py-4">
            <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
            {/* Close Button */}
            <button 
              onClick={closeModal} 
              className="close-button text-gray-500 absolute top-2 right-2 animate-pulse">
                <img
                  src={process.env.PUBLIC_URL + '/icons/close.svg'}
                  alt="Close"
                  className="w-10 h-10"
                />
            </button>
                <div className="max-w-lg space-y-2 px-4 sm:mx-auto sm:text-center sm:px-0">
                    <p className="text-cyan-400 font-semibold text-3xl sm:text-4xl">
                        Hit me up!
                    </p>
                    <p className="text-gray-900">
                        Send me a message if you're interested!
                        😎
                    </p>
                </div>
                <div className="mt-12 mx-auto px-24 p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl">
                <form ref={form} onSubmit={sendEmail} className="space-y-5">
  <div>
    <label className="font-medium">Full Name</label>
    <input
      type="text"
      name="user_name"
      required
      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
    />
  </div>
  <div>
    <label className="font-medium">Email</label>
    <input
      type="email"
      name="user_email"
      required
      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
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
    <label className="font-medium">Message</label>
    <textarea
      name="message"
      required
      className="w-full mt-2 h-56 px-3 py-1 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
      placeholder="..."
    ></textarea>
  </div>
  <button
    type="submit"
    className="w-full px-2 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
  >
    Submit
  </button>
                    </form>
                </div>
            </div>
            <div className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
        </main>
        {children}
        </div>
      </div>
    </div>
    )
}

export default Contact;
