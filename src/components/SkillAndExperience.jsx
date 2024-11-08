import React from "react";
import Experience from "./Experiences/Experience";
import Skills from "./Skills/Skills";

const SkillAndExperience = () => {
  return (
    <div className="md:h-dvh py-8">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[40%]">
        <h2 className="text-4xl md:text-5xl text-orange-500 mb-[40px] ">
            SKILLS
            </h2>
          <Skills />
        </div>
        <div className="w-full md:w-[60%]">
          <h2 className="text-4xl md:text-5xl text-orange-500 mb-[40px] ">Experience</h2>
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default SkillAndExperience;
