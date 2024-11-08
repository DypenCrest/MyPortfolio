import React from "react";
import { experienceData } from "../../assets/data/experienceData";

const Experience = () => {
  return (
    <div className="flex-col space-y-2">
      {experienceData.map((item) => (
        <div
          className="flex flex-col md:flex-row bg-zinc-800 rounded-lg p-4"
          key={item?.id}
        >
          <div className="w-full md:w-[25%] text-zinc-400">
            {item?.startYear} - {item.endYear}
          </div>
          <div className="w-full md:w-[75%]">
            <h2>
              {item.jobtitle} {item.company && "-"} {item.company}
            </h2>
            <p className="text-zinc-400 text-sm">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
