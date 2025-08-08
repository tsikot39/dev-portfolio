"use client";

import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const TechCard = ({ name, icon }) => (
  <div className="w-28 h-28 flex flex-col items-center justify-center bg-tertiary rounded-xl transition-transform duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer shadow-card">
    <img src={icon} alt={name} className="w-12 h-12 object-contain mb-2" />
    <p className="text-white text-[12px] font-medium text-center leading-tight">
      {name}
    </p>
  </div>
);

const Tech = () => {
  return (
    <>
      <div className="mb-12">
        <p className={styles.sectionSubText}>Technologies</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-6">
        {technologies.map((technology) => (
          <TechCard
            key={technology.name}
            name={technology.name}
            icon={technology.icon}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
