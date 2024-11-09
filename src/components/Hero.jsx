import { Grid2 } from "@mui/material";
import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";
import { useNavigate } from "react-router";
import { headerData } from "../assets/data/headerData";
import { socialData } from "../assets/data/socialData";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero h-dvh">
      <Grid2
        container
        direction={{ md: "row", sm: "column", xs: "column" }}
        className="hero-container h-full relative"
      >
        <Grid2
          size={{ md: 4.3, sm: 5, xs: 12 }}
          className="hero-left flex items-end bg-orange-500 h-[37%] sm:h-full"
        >
          <Slide delay={900}>
            <div className="hcl-content flex gap-4 invisible md:visible md:my-12 md:mx-5 lg:m-12 w-full items-center justify-start ">
              {socialData?.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="hero-social hover:scale-125 duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Slide>
        </Grid2>
        <img
          className="hero-img lg:w-[400px] md:w-[350px] w-[250px]  absolute border-8 border-zinc-700 rounded-full left-[17%] top-[22%] md:left-[8%] md:top-[30%]  lg:left-[21%] lg:top-[21%]"
          src={headerData.image}
          alt="Dipen Shrestha"
        />
        <Grid2
          size={{ md: 7.7, sm: 7, xs: 12 }}
          className="hero-right h-[63%] sm:h-full pt-32 sm:pt-0"
        >
          <div className="flex flex-col justify-center items-center sm:items-end h-full">
            <div className="flex flex-col gap-4 items-center sm:items-start sm:mr-16 lg:mr-28 w-[86%] md:w-[60%] lg:w-[45%] break-words">
              <div className="about-header text-center sm:text-left z-20">
                <h6 className="opacity-80">{headerData.title}</h6>
                <h1 className="text-3xl md:text-4xl font-semibold">
                  {headerData.name}
                </h1>
              </div>
              <p className="about-desc text-center md:text-start text-sm lg:text-base opacity-70">
                {headerData.description}
              </p>
              <div className="flex flex-col w-full lg:flex-row gap-8">
                <Zoom delay={500} duration={500}>
                  <a href={headerData?.resumePdf}>
                    <button className="border-[3px] hover:bg-white hover:border-white hover:text-[#202020] border-orange-500 text-orange-500 rounded-2xl py-2 text-sm w-full lg:w-32 ">
                      Download CV
                    </button>
                  </a>
                </Zoom>
                <Zoom delay={800} duration={500}>
                  <button
                    onClick={() =>
                      document
                        .getElementById("foot")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                    className="border-[3px] border-orange-500 hover:bg-[#202020] hover:text-white text-[#202020] bg-orange-500 rounded-2xl py-2 text-sm w-full lg:w-32"
                  >
                    Contact
                  </button>
                </Zoom>
              </div>
            </div>
          </div>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Hero;
