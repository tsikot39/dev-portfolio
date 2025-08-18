"use client";

import React, { useState } from "react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const handleCardClick = () => {
    window.open(source_code_link, "_blank");
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full transition-transform duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-contain rounded-2xl"
        />
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 leading-none">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color} leading-none`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const projectsPerPage = 3;

  // Calculate the indices for the current page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 200);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 200);
    }
  };

  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Featured Projects.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          These enterprise-grade solutions showcase my ability to architect and
          deliver business-critical applications that drive operational
          efficiency and digital transformation. Each project demonstrates
          strategic problem-solving, technical leadership, and measurable
          business impact through scalable, production-ready implementations.
        </p>
      </div>

      <div
        className={`mt-20 flex flex-wrap gap-7 transition-opacity duration-200 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {currentProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="bg-tertiary hover:bg-[#915EFF] text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 border border-[#915EFF] hover:border-white disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-tertiary disabled:hover:border-[#915EFF]"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-tertiary hover:bg-[#915EFF] text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 border border-[#915EFF] hover:border-white disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-tertiary disabled:hover:border-[#915EFF]"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <path
              d="M9 6L15 12L9 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
