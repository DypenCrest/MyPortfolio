export const sidebarItems = [
  {
    title: "Home",
    section: () =>
      document.getElementById("head").scrollIntoView({ behavior: "smooth" }),
  },
  {
    title: "About",
    section: () =>
      document.getElementById("aboutMe").scrollIntoView({ behavior: "smooth" }),
  },
  {
    title: "Projects",
    section: () =>
      document
        .getElementById("projects")
        .scrollIntoView({ behavior: "smooth" }),
  },
  {
    title: "Skills & Experience",
    section: () =>
      document
        .getElementById("SkillExperience")
        .scrollIntoView({ behavior: "smooth" }),
  },
  {
    title: "Contact",
    section: () =>
      document.getElementById("foot").scrollIntoView({ behavior: "smooth" }),
  },
];
