import React from "react";
import { skillData } from "../../assets/data/skillData";

const Skills = () => {
  return (
    <div className="flex flex-wrap py-4 gap-2">
      {skillData.map((skill, index) => (
        <div className="w-[80px] h-[70px] md:w-[150px] md:h-[120px] flex justify-center items-center bg-zinc-800 rounded-lg p-2">
          <img src={skill.logo} className="max-h-full max-w-full" />
        </div>
      ))}
    </div>
  );
};

export default Skills;
