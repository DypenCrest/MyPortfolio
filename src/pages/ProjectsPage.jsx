import React from "react";
import { projects } from "../assets/data/projectData";

const ProjectsPage = () => {
  return (
    <div className="w-full py-12">
      <div className="project-section flex flex-col sm:flex-row items-center pt-12 px-5 lg:px-24 h-full w-full ">
        <div className="flex flex-col items-center sm:items-start sm:justify-evenly w-full h-full gap-8 ">
          <h2 className="text-4xl md:text-5xl text-orange-500">ALL PROJECTS</h2>
          <div className="flex flex-col flex-wrap sm:flex-row gap-12 md:gap-4">
            {projects.map((project, index) => (
              <div className="flex justify-center items-center w-full md:w-[400px] h-full md:h-[550px] md:border-4 rounded-xl border-orange-400 duration-300 z-0 py-2 md:px-4">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex items-center justify-center w-full h-[280px] md:w-[300px] md:h-[280px] bg-black ">
                    <img
                      className="max-h-full md:max-w-[300px]"
                      src={project.img}
                      alt="Project Preview"
                    />
                  </div>
                  <div className="break-all whitespace-normal">
                    <h1 className="text-center text-zinc-200 text-2xl">
                      {project.title}
                    </h1>
                    <p className="h-[120px] text-xs sm:text-sm text-center overflow-auto text-zinc-400">
                      {project.desc}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between gap-2 w-full">
                    <a href={project.git} target="_blank">
                      <button className="border-[3px] hover:bg-white hover:border-white hover:text-[#202020] border-orange-400 text-zinc-200 rounded-2xl py-2 text-sm w-full lg:w-32 ">
                        Github
                      </button>
                    </a>
                    <a href={project.demo} target="_blank">
                      <button className="border-[3px] hover:bg-white hover:border-white hover:text-[#202020] border-orange-400 text-zinc-200 rounded-2xl py-2 text-sm w-full lg:w-32 ">
                        Preview
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
