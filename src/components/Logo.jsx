import React from "react";

const Logo = ({ className = "w-9 h-9" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Ring */}
      <circle
        cx="20"
        cy="20"
        r="18"
        stroke="#915EFF"
        strokeWidth="2"
        fill="none"
        opacity="0.8"
      />
      
      {/* Inner Code Symbol */}
      <rect
        x="8"
        y="12"
        width="24"
        height="16"
        rx="4"
        fill="rgba(145, 94, 255, 0.1)"
        stroke="#915EFF"
        strokeWidth="1.5"
      />
      
      {/* Code Lines */}
      <rect x="12" y="16" width="12" height="1.5" rx="0.5" fill="#915EFF" opacity="0.8" />
      <rect x="12" y="19" width="8" height="1.5" rx="0.5" fill="#00d4aa" opacity="0.8" />
      <rect x="12" y="22" width="10" height="1.5" rx="0.5" fill="#dfd9ff" opacity="0.8" />
      
      {/* Bracket Symbols */}
      <path
        d="M 6 14 L 4 16 L 4 24 L 6 26"
        stroke="#915EFF"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 34 14 L 36 16 L 36 24 L 34 26"
        stroke="#915EFF"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Center Dot */}
      <circle cx="20" cy="20" r="2" fill="#915EFF" />
    </svg>
  );
};

export default Logo;
