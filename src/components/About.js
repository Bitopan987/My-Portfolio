import React from 'react';
import fileSaver from 'file-saver';

export default function About() {
  const saveFile = () => {
    fileSaver.saveAs('./assets/Resume.pdf', "Bitopan's Resume1.pdf");
  };
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Bitopan Deka.
            <br className="hidden lg:inline-block" />I am passionate about web
            development.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a programming enthusiast,a MERN stack web developer, a learner
            and a good listener. I have been sharpening my web development
            skills by building websites and applications for more than a year
            now.
            <br className="hidden lg:inline-block" />I love working with
            JavaScript, which is truly an amazing language to build to web
            applictaions.
          </p>
          <div className="flex justify-center">
            <button
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg align-middle"
              onClick={saveFile}
            >
              <i className="fas fa-cloud-download-alt self-center mr-1"></i>
              View My Resume
            </button>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
