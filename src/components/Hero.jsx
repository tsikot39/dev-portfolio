"use client";

import { styles } from "../styles";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className={`relative w-full h-screen mx-auto flex items-center justify-center`}
      style={{ paddingTop: "60px" }}
    >
      <div
        className={`max-w-4xl w-full mx-auto ${styles.paddingX} flex flex-col items-center justify-center text-center`}
      >
        {/* Centered Content */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Johnson</span>
          </h1>
          <p
            className={`text-[#dfd9ff] font-medium mt-2 lg:text-[24px] sm:text-[20px] xs:text-[18px] text-[16px] lg:leading-[36px] sm:leading-[28px] leading-[24px]`}
          >
            Architecting scalable solutions and leading technical innovation in
            AI, SaaS, and enterprise systems.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToProjects}
            className="group mt-8 bg-tertiary hover:bg-[#915EFF] text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg border-2 border-[#915EFF] hover:border-[#915EFF] flex items-center gap-2 mx-auto"
          >
            Go To Projects
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
