import React from "react";
import { Zoom } from "react-awesome-reveal";
import { useNavigate } from "react-router";
import { projects } from "../assets/data/projectData";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="project-section flex flex-col sm:flex-row items-center px-5 h-full w-full py-12 ">
        <div className="flex flex-col items-center sm:items-start sm:justify-evenly w-full h-full gap-4 ">
          <h2 className="text-4xl md:text-5xl text-orange-500">PROJECTS</h2>
          <div className="w-full text-end">
            <span
              onClick={() => {
                navigate("projects");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-zinc-300 font-semibold hover:text-orange-400 cursor-pointer underline"
            >
              View All
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 md:gap-4">
            {projects.slice(0, 3).map((project, index) => (
              <Zoom>
                <div className="flex justify-center items-center w-full md:w-[380px] h-full md:h-[500px] md:border-4 rounded-xl border-orange-400 duration-300 py-2 md:px-4">
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex items-center justify-center w-full h-[250px] md:w-[300px] bg-black ">
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
              </Zoom>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
