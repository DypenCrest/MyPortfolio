import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import SkillAndExperience from "../components/SkillAndExperience";

const Home = () => {
  return (
    <>
      <header id="head">
        <Hero />
      </header>

      <main className="px-4 lg:px-24">
        <div id="aboutMe">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="SkillExperience">
          <SkillAndExperience />
        </div>
      </main>
      <footer id="foot">
        <Contact />
      </footer>
    </>
  );
};

export default Home;
