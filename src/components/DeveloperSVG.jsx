import React from "react";

const DeveloperSVG = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-full max-h-full rounded-xl"
        style={{ borderRadius: "12px" }}
      >
        {/* Background */}
        <rect width="400" height="400" fill="url(#bgGradient)" />

        {/* Desk Surface */}
        <rect x="50" y="280" width="300" height="80" rx="8" fill="#2a2a4a" />
        <rect x="50" y="280" width="300" height="8" rx="4" fill="#3a3a5a" />

        {/* Desktop Computer Setup */}

        {/* Monitor */}
        <rect
          x="140"
          y="180"
          width="120"
          height="80"
          rx="4"
          fill="#1a1a2e"
          stroke="#915EFF"
          strokeWidth="2"
        />
        <rect x="145" y="185" width="110" height="70" rx="2" fill="#0a0a0a" />

        {/* Monitor Stand */}
        <rect x="190" y="260" width="20" height="20" fill="#2a2a4a" />
        <rect x="180" y="275" width="40" height="8" rx="4" fill="#3a3a5a" />

        {/* Code on Screen - Terminal/IDE */}
        <rect
          x="150"
          y="190"
          width="100"
          height="12"
          fill="#915EFF"
          opacity="0.3"
        />
        <text
          x="155"
          y="200"
          fontSize="8"
          fill="#915EFF"
          fontFamily="monospace"
        >
          const developer = &#123;
        </text>

        <rect x="155" y="205" width="80" height="2" fill="#00d4aa" />
        <rect x="155" y="210" width="90" height="2" fill="#dfd9ff" />
        <rect x="155" y="215" width="70" height="2" fill="#915EFF" />
        <rect x="155" y="220" width="85" height="2" fill="#00d4aa" />
        <rect x="155" y="225" width="60" height="2" fill="#dfd9ff" />
        <rect x="155" y="230" width="75" height="2" fill="#915EFF" />
        <rect x="155" y="235" width="50" height="2" fill="#00d4aa" />

        <text
          x="155"
          y="248"
          fontSize="8"
          fill="#dfd9ff"
          fontFamily="monospace"
        >
          &#125;;
        </text>

        {/* Keyboard */}
        <rect
          x="120"
          y="290"
          width="160"
          height="40"
          rx="6"
          fill="#1a1a2e"
          stroke="#915EFF"
          strokeWidth="1"
        />
        <rect x="125" y="295" width="150" height="30" rx="3" fill="#2a2a4a" />

        {/* Keyboard Keys */}
        {[...Array(12)].map((_, i) => (
          <rect
            key={i}
            x={130 + i * 11}
            y="300"
            width="8"
            height="8"
            rx="1"
            fill="#3a3a5a"
          />
        ))}
        {[...Array(11)].map((_, i) => (
          <rect
            key={i}
            x={135 + i * 11}
            y="312"
            width="8"
            height="8"
            rx="1"
            fill="#3a3a5a"
          />
        ))}

        {/* Mouse */}
        <ellipse
          cx="320"
          cy="310"
          rx="12"
          ry="18"
          fill="#1a1a2e"
          stroke="#00d4aa"
          strokeWidth="1"
        />
        <ellipse cx="320" cy="305" rx="8" ry="12" fill="#2a2a4a" />

        {/* Developer Character */}
        <g transform="translate(200, 160)">
          {/* Head */}
          <circle
            cx="0"
            cy="-80"
            r="20"
            fill="#2a2a4a"
            stroke="#915EFF"
            strokeWidth="2"
          />

          {/* Hair */}
          <path
            d="M -18 -95 Q 0 -105 18 -95 Q 15 -85 0 -85 Q -15 -85 -18 -95"
            fill="#1a1a1a"
          />

          {/* Body */}
          <rect
            x="-15"
            y="-60"
            width="30"
            height="50"
            rx="6"
            fill="#1a1a2e"
            stroke="#915EFF"
            strokeWidth="1"
          />

          {/* Arms */}
          <rect x="-25" y="-45" width="12" height="25" rx="6" fill="#2a2a4a" />
          <rect x="13" y="-45" width="12" height="25" rx="6" fill="#2a2a4a" />

          {/* Hands on Keyboard */}
          <ellipse cx="-20" cy="-15" rx="4" ry="6" fill="#3a3a5a" />
          <ellipse cx="20" cy="-15" rx="4" ry="6" fill="#3a3a5a" />
        </g>

        {/* Floating Tech Stack Elements */}

        {/* Frontend Technologies - Left Side */}
        <g transform="translate(80, 120)">
          {/* React */}
          <circle r="15" stroke="#915EFF" strokeWidth="2" fill="none" />
          <ellipse
            rx="15"
            ry="6"
            stroke="#915EFF"
            strokeWidth="1.5"
            fill="none"
            transform="rotate(60)"
          />
          <ellipse
            rx="15"
            ry="6"
            stroke="#915EFF"
            strokeWidth="1.5"
            fill="none"
            transform="rotate(-60)"
          />
          <text
            x="0"
            y="35"
            fontSize="10"
            fill="#915EFF"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="bold"
          >
            React
          </text>
        </g>

        <g transform="translate(60, 200)">
          {/* Next.js */}
          <rect x="-12" y="-12" width="24" height="24" rx="4" fill="#00d4aa" />
          <text
            x="0"
            y="3"
            fontSize="8"
            fill="#1a1a2e"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="bold"
          >
            NEXT
          </text>
          <text
            x="0"
            y="25"
            fontSize="10"
            fill="#00d4aa"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="bold"
          >
            Next.js
          </text>
        </g>

        {/* Backend Technologies - Right Side */}
        <g transform="translate(320, 120)">
          {/* Node.js */}
          <rect x="-12" y="-12" width="24" height="24" rx="4" fill="#00d4aa" />
          <text
            x="0"
            y="3"
            fontSize="12"
            fill="#1a1a2e"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="bold"
          >
            N
          </text>
          <text
            x="0"
            y="35"
            fontSize="10"
            fill="#00d4aa"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="bold"
          >
            Node.js
          </text>
        </g>

        <g transform="translate(340, 200)">
          {/* C# */}
          <rect x="-12" y="-12" width="24" height="24" rx="4" fill="#915EFF" />
          <text
            x="0"
            y="3"
            fontSize="10"
            fill="#ffffff"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="bold"
          >
            C#
          </text>
          <text
            x="0"
            y="25"
            fontSize="10"
            fill="#915EFF"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="bold"
          >
            C#
          </text>
        </g>

        {/* Database - Bottom Left */}
        <g transform="translate(100, 350)">
          <ellipse rx="20" ry="6" fill="#dfd9ff" />
          <ellipse
            rx="20"
            ry="6"
            cy="6"
            fill="none"
            stroke="#dfd9ff"
            strokeWidth="2"
          />
          <ellipse
            rx="20"
            ry="6"
            cy="12"
            fill="none"
            stroke="#dfd9ff"
            strokeWidth="2"
          />
          <line
            x1="-20"
            y1="0"
            x2="-20"
            y2="12"
            stroke="#dfd9ff"
            strokeWidth="2"
          />
          <line
            x1="20"
            y1="0"
            x2="20"
            y2="12"
            stroke="#dfd9ff"
            strokeWidth="2"
          />
          <text
            x="0"
            y="30"
            fontSize="10"
            fill="#dfd9ff"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="bold"
          >
            Database
          </text>
        </g>

        {/* Mobile Device - Bottom Right */}
        <g transform="translate(300, 350)">
          <rect
            x="-10"
            y="-15"
            width="20"
            height="35"
            rx="4"
            fill="#1a1a2e"
            stroke="#00d4aa"
            strokeWidth="2"
          />
          <rect
            x="-8"
            y="-10"
            width="16"
            height="25"
            rx="2"
            fill="#00d4aa"
            opacity="0.3"
          />
          <rect x="-6" y="-8" width="5" height="5" rx="1" fill="#915EFF" />
          <rect x="1" y="-8" width="5" height="5" rx="1" fill="#00d4aa" />
          <rect x="-6" y="-2" width="5" height="5" rx="1" fill="#dfd9ff" />
          <rect x="1" y="-2" width="5" height="5" rx="1" fill="#915EFF" />
          <text
            x="0"
            y="35"
            fontSize="10"
            fill="#00d4aa"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="bold"
          >
            Mobile
          </text>
        </g>

        {/* Floating Code Snippets */}
        <g opacity="0.6" fontSize="12" fontFamily="monospace">
          <text x="50" y="50" fill="#915EFF">
            function
          </text>
          <text x="320" y="60" fill="#00d4aa">
            const
          </text>
          <text x="30" y="260" fill="#dfd9ff">
            return
          </text>
          <text x="350" y="260" fill="#915EFF">
            async
          </text>
        </g>

        {/* Coffee Cup */}
        <g transform="translate(350, 295)">
          <rect
            x="-6"
            y="-8"
            width="12"
            height="12"
            rx="2"
            fill="#1a1a2e"
            stroke="#915EFF"
            strokeWidth="1"
          />
          <path
            d="M 6 -4 Q 10 -4 10 0 Q 10 4 6 4"
            stroke="#915EFF"
            strokeWidth="1"
            fill="none"
          />
          <ellipse cx="0" cy="-8" rx="5" ry="2" fill="#2a2a4a" />
        </g>

        {/* Code Brackets */}
        <g opacity="0.4" fontSize="24" fontFamily="monospace" fill="#915EFF">
          <text x="20" y="100">
            {"{"}
          </text>
          <text x="360" y="100">
            {"}"}
          </text>
          <text x="20" y="380">
            {"</"}
          </text>
          <text x="350" y="380">
            {">"}
          </text>
        </g>

        {/* Connection Lines */}
        <g opacity="0.4" stroke="#915EFF" strokeWidth="1" strokeDasharray="3,3">
          <path d="M 95 120 Q 140 140 140 180" />
          <path d="M 305 120 Q 260 140 260 180" />
          <path d="M 120 350 Q 160 320 180 290" />
          <path d="M 280 350 Q 240 320 220 290" />
        </g>

        {/* Floating Particles */}
        <circle cx="70" cy="80" r="2" fill="#915EFF" opacity="0.6" />
        <circle cx="330" cy="90" r="1.5" fill="#00d4aa" opacity="0.7" />
        <circle cx="40" cy="150" r="1" fill="#dfd9ff" opacity="0.5" />
        <circle cx="360" cy="140" r="2" fill="#915EFF" opacity="0.4" />
        <circle cx="80" cy="380" r="1.5" fill="#00d4aa" opacity="0.6" />
        <circle cx="320" cy="380" r="2" fill="#dfd9ff" opacity="0.5" />

        {/* Gradient Definitions */}
        <defs>
          <radialGradient id="bgGradient" cx="50%" cy="50%" r="50%">
            <stop
              offset="0%"
              style={{ stopColor: "#1a1a2e", stopOpacity: 1 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#16213e", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#0f0f1e", stopOpacity: 1 }}
            />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default DeveloperSVG;
