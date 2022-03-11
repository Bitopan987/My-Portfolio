import React from 'react';
import { ChatAltIcon } from '@heroicons/react/solid';
import emailjs from 'emailjs-com';
require('dotenv').config();

export default function Contact() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const serviceID = 'service_6e02h9m';
  const templateID = 'template_ct42acl';
  const clientID = process.env.REACT_APP_USERID;
  // console.log(clientID);

  function handleSubmit(e) {
    console.log(e);
    e.preventDefault();
    if (name === '' || email === '' || message === '') {
      alert("Fileds can't be empty");
    } else {
      let messageFormat = {
        name: name,
        email: email,
        message: message,
      };
      emailjs.send(serviceID, templateID, messageFormat, clientID).then(
        (response) => {
          alert('Message sent');
          setName('');
          setEmail('');
          setMessage('');
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          alert('Network error');
          console.log('FAILED...', err);
        }
      );
    }
  }

  return (
    <section id="contact" className="relative">
      <div className="text-center mb-5">
        <ChatAltIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          Reach Out to Me!
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Want to discuss a project/up for any work, or just want to say Hello?
          My inbox is Open for all.
        </p>
      </div>
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex  flex-col justify-between relative">
          <h2 className="text-center text-3xl text-white font-bold">
            Internet Community
          </h2>
          <nav className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md mb-10">
            <div className="lg:w-1/2 px-6 flex flex-col justify-between text-xl h-40 mb-10">
              <a
                href="https://github.com/Bitopan987"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github mr-1"></i>GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/bitopan-deka-850285234/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin mr-1"></i>LinkedIn
              </a>
              <a
                href="https://twitter.com/Bitopanxon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter mr-1"></i>Twitter
              </a>
            </div>
            <div className="lg:w-1/2 px-6 flex flex-col text-xl h-40 justify-between">
              <a
                href="https://medium.com/@bitopanxon1"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-medium mr-1"></i>Medium
              </a>
              <a
                href="https://www.codewars.com/users/Bitopan987"
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <img
                  src="/assets/projects/codewars.svg"
                  alt="codewars"
                  className="h-5 w-5 mr-1"
                />
                Codwars
              </a>
            </div>
          </nav>
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Guwahati,Assam <br />
                India
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                className="text-indigo-400 leading-relaxed"
                href="mailto:shishuplkr2595@gmail.com"
              >
                bitopanxon1@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">9395642144</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex justify-between flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Say Hello
          </h2>
          <p className="leading-relaxed mb-5"></p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
