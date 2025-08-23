// @flow strict

import * as React from 'react';

function ProjectCard({ project }) {

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>






      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">&apos;</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">&apos;,</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white">tools:</span>
            <span className="text-gray-400">{` [`}&apos;</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-amber-300">{tag}</span>
                  {
                    project.tools.length - 1 !== i &&
                    <span className="text-gray-400">&apos; {`, `}&apos;</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-gray-400">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
            <span className="text-orange-400">{project.role}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Description:</span>
                        <span className="text-gray-400">'</span>

            <span className="text-cyan-400">{ project.description}</span>
            
            <span className="text-gray-400">'</span>
          </div>
          <div><span className="text-gray-400">{`};`}</span></div>

                 
         <div className="relative mt-4 lg:mt-8">
         {project.link && 
         (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="absolute right-1 lg:right-8 top-1/2 -translate-y-1/2 bg-gradient-to-r 
          from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white 
          text-xs lg:text-sm 
          px-3 lg:px-4 py-1 lg:py-2 rounded-full"
        >
          Visit
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 inline-block ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>  

        </a>

      )}
      {project.github_repo && 
         (
        <a
          href={project.github_repo}
          target="_blank"
          rel="noreferrer"
 className={`absolute 
      ${!project.link ? "right-1 lg:right-8" : "right-20 lg:right-40"} 
      top-1/2 -translate-y-1/2 
      bg-gradient-to-r from-pink-500 to-violet-600 
      hover:from-pink-600 hover:to-violet-700 
      text-white text-xs lg:text-sm
      px-3 lg:px-4 py-1 lg:py-2 rounded-full`}
  
        >
          Code
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 inline-block ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>  

        </a>

      )}

     


      </div>
        </code>
      </div>
    </div>
  );
};

export default ProjectCard;