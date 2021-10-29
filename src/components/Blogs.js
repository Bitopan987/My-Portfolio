import React from 'react';
import { blogs } from '../data';

export default function Blogs() {
  return (
    <section id="blogs">
      <div className="container px-5 py-10 mx-auto text-center">
        <i className="fas fa-blog inline-block mb-4 text-4xl"></i>
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          My Blog Posts
        </h1>
        <p className="lg:w-3/4 mx-auto leading-relaxed text-base">
          “I write to discover what I know.” ― Flannery O'Connor
          <br />I have written a few blog post to discover what I know and will
          continue to do so as I learn and explore more.
        </p>
        <div className="flex flex-wrap m-4">
          {blogs.map((blog) => (
            <div className="p-4 md:w-1/2 w-full" key={blog.title}>
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <i className="fab fa-readme block text-3xl text-gray-500 mb-4"></i>
                <h3 className="font-bold">{blog.title}</h3>
                <p className="leading-relaxed mb-6">{blog.description}</p>
                <div className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <a
                      href={blog.link}
                      className="title-font font-medium text-white"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read Blog
                    </a>
                    <span className="text-gray-500 text-sm uppercase">
                      Published on : {blog.published}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
