import React from "react";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import { contactData } from "../assets/data/contactData";
import { socialData } from "../assets/data/socialData";

const Contact = () => {
  return (
    <div className="text-center w-full">
      <Bounce>
        <h1 className="text-4xl md:text-8xl text-orange-500">STAY IN TOUCH</h1>
      </Bounce>

      <div className="line-divider flex items-center mx-auto pt-[20px] w-full">
        <div className="line rounded-lg w-full h-1 bg-orange-500"></div>
      </div>
      <div className="bg-zinc-900">
        <div className="flex flex-col md:flex-row justify-between gap-8 py-12 px-4  md:px-32 text-start">
          <div className="space-y-4">
            <h2 className="font-bold text-xl text-orange-500">SOCIAL</h2>
            <Slide>
              <div className="flex gap-4 w-full items-center justify-start ">
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
          </div>
          <div>
            <h2 className="text-xl font-bold text-orange-500">
              DIPEN SHRESTHA
            </h2>
            <div className="flex flex-col text-sm text-zinc-400">
              <span>{contactData.email}</span>
              <span>{contactData.phone}</span>
              <span>{contactData.address}</span>
            </div>
          </div>
        </div>
        <div className="divider py-4 px-28 w-full">
          <div className="divider h-[1px] bg-zinc-500 w-full"></div>
        </div>
        <Fade>
          <div className="flex justify-center items-center gap-1 pb-12">
            <span>&copy; 2024 Made with &hearts; by </span>
            <span
              className="underline hover:text-orange-400 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              DIPEN SHRESTHA.
            </span>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Contact;
