"use client";

import React from "react";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <div className="xs:w-[250px] w-full">
    <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-lg">
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Professional Summary.</h2>
      </div>

      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Software Developer and Technical Lead with 10+ years of proven expertise in leading enterprise-grade solutions
for the healthcare industry. I specialize in architecting scalable, secure systems that drive business
transformation and operational excellence. Experienced in leading and managing software developers and
technical support teams. Deep proficiency in full-stack development with modern and legacy technologies.
      </p>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
