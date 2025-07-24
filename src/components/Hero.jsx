"use client";

import { motion } from "framer-motion";

import { styles } from "../styles";
import DeveloperSVG from "./DeveloperSVG";

const Hero = () => {
  return (
    <section
      className={`relative w-full h-screen mx-auto flex items-center justify-center`}
      style={{ paddingTop: "60px" }}
    >
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-center gap-10`}
      >
        {/* Left Side - Tagline */}
        <div className="flex-1 flex flex-row items-start gap-5">
          <div>
            <h1
              className={`${styles.heroHeadText} text-white whitespace-nowrap`}
            >
              Hi, I'm <span className="text-[#915EFF]">Johnson</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Bringing your ideas to life with modern and scalable web
              applications.
            </p>
          </div>
        </div>

        {/* Right Side - SVG Illustration */}
        <div className="flex-1 flex justify-center items-center h-full">
          <DeveloperSVG />
        </div>
      </div>
    </section>
  );
};

export default Hero;
