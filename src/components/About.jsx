import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { aboutData } from "../assets/data/aboutData.js";

const About = () => {
  const SmallAbout = () => {
    return (
      <>
        <div className="about-content flex flex-col sm:flex-row items-center justify-around pt-12 px-5">
          <h2 className="text-4xl md:text-5xl text-orange-500 mb-[40px] ">
            {aboutData.title}
          </h2>
          <div className="aboutme flex flex-col items-start justify-evenly w-full sm:w-[50%] py-4 text-center">
            <p className="opacity-70 break-words whitespace-normal">
              {aboutData.desc1}
              <br />
              <br />
              {aboutData.desc2}
              <br />
              <br />
              {aboutData.desc3}
              {aboutData.desc4}
            </p>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="about sm:h-dvh">
      <div className="line-divider flex justify-center items-center gap-4 mx-auto h-[50px] w-[85%] py-12">
        <div className="dot rounded-full w-2 h-2 bg-orange-500"></div>
        <div className="dot rounded-full w-2 h-2 bg-orange-500"></div>
        <div className="line rounded-lg w-[95%] h-1 bg-orange-500"></div>
      </div>
      <div className="block sm:hidden">
        <SmallAbout />
      </div>
      <div className="hidden sm:block">
        <div className="about-content flex flex-col sm:flex-row items-center justify-between pt-12 px-5 ">
          <div className="aboutme flex flex-col items-start  w-full sm:w-[50%] ">
            <h2 className="text-4xl md:text-5xl text-orange-500 mb-[40px] ">
              {aboutData.title}
            </h2>
            <p className="opacity-70 break-words whitespace-normal">
              <Fade cascade damping={0.013}>
                {aboutData.desc1}
              </Fade>
              <br />
              <br />
              <Fade cascade damping={0.013}>
                {aboutData.desc2}
              </Fade>
              <br />
              <br />
              <Fade cascade damping={0.013}>
                {aboutData.desc3}
              </Fade>
              <Fade cascade damping={0.013}>
                {aboutData.desc4}
              </Fade>
            </p>
          </div>
          <div className="about-img w-[300px] md:w-[380px]">
            <Slide duration={1500}>
              <img src={aboutData.img} alt={aboutData.title} />
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
