"use client";

import React from "react";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="bg-[#1d1836] p-6 rounded-2xl mb-6">
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px]"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
        <p
          className="text-secondary text-[14px] mt-1"
          style={{ margin: 0 }}
        >
          {experience.date}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-secondary text-[14px] pl-1"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} text-center`}>
          Career Overview
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Professional Experience.
        </h2>
      </div>

      <div className="mt-20 flex flex-col">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`experience-${index}`}
            experience={experience}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
