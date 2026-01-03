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
      className={`relative w-full min-h-screen mx-auto flex items-center justify-center pt-12`}
    >
      <div
        className={`max-w-4xl w-full mx-auto ${styles.paddingX} flex flex-col items-center justify-center text-center`}
      >
        {/* Centered Content */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            I'm <span className="text-[#915EFF]">Johnson</span>, a<br/><span className="sm:whitespace-nowrap">Software Developer.</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            React | React Native | Node.js | Python | .NET
          </p>
          {/* <p
            className={`text-[#dfd9ff] font-medium mt-2 lg:text-[24px] sm:text-[20px] xs:text-[18px] text-[16px] lg:leading-[36px] sm:leading-[28px] leading-[24px]`}
          >
            Architecting scalable solutions and leading technical innovation in
            enterprise systems, SaaS, and AI.
          </p> */}

          {/* CTA Button */}
          <button
            onClick={scrollToProjects}
            className="group mt-8 bg-tertiary hover:bg-[#915EFF] text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg border-2 border-[#915EFF] hover:border-[#915EFF] flex items-center gap-2 mx-auto"
          >
            View My Work
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-y-1"
            >
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
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
