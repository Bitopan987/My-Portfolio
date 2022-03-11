import { CodeIcon, EyeIcon } from '@heroicons/react/solid';
import React from 'react';
import { projects } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps/Websites I've Built
          </h1>
          <p className="lg:w-3/4 xl:w-3/4 mx-auto leading-relaxed text-base">
            “I hear and and I forget.I see and I remember. I do and I
            understand. ” ― Confucius
            <br />I have worked on a variety of projects using each tech stack
            listed on my skills list to learn and understand the working of it.
          </p>
        </div>
        <div className="flex flex-wrap m-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="sm:w-1/2 w-100 p-4 shadow-md mb-5"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 shadow-lg">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <div className="mt-3">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        className="bg-gray-600 text-white px-3 py-2 cursor-pointer"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <EyeIcon className="w-5 inline-block" /> View live
                      </a>
                    )}
                    <a
                      href={project.repoLink}
                      className="bg-gray-600 text-white px-3 py-2 ml-2 cursor-pointer"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github mr-1"></i>View Repository
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
          <a
            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            href="https://github.com/bitopan987"
            target="_blank"
            rel="noreferrer"
          >
            See More
          </a>
        </div>
      </div>
    </section>
  );
}
