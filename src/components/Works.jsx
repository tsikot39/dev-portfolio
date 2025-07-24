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

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  const [currentPage, setCurrentPage] = useState(1);
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
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          The following projects demonstrate my skills and expertise through
          practical and real-world applications. Each project includes a brief
          description and links to code repositories or live sites.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {currentProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="w-36 bg-tertiary py-2 px-4 rounded-xl outline-none text-white font-bold shadow-md shadow-primary disabled:opacity-50"
        >
          &larr; Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="w-36 bg-tertiary py-2 px-4 rounded-xl outline-none text-white font-bold shadow-md shadow-primary disabled:opacity-50"
        >
          Next &rarr;
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
