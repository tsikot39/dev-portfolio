import React from "react";

const DeveloperSVG = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        width="500"
        height="350"
        viewBox="0 0 500 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-full max-h-full"
        style={{ borderRadius: "16px" }}
      >
        {/* Rounded Background */}
        <rect
          x="0"
          y="0"
          width="500"
          height="350"
          rx="16"
          ry="16"
          fill="rgba(20, 20, 30, 0.8)"
          stroke="rgba(145, 94, 255, 0.3)"
          strokeWidth="1"
        />

        {/* Central Code Window */}
        <rect
          x="180"
          y="95"
          width="140"
          height="160"
          rx="12"
          fill="#1a1a2e"
          stroke="#915EFF"
          strokeWidth="2"
        />

        {/* Window Header */}
        <rect x="180" y="95" width="140" height="30" rx="12" fill="#2a2a4a" />
        <rect x="180" y="113" width="140" height="2" fill="#915EFF" />

        {/* Window Dots */}
        <circle cx="195" cy="110" r="3" fill="#ff5f57" />
        <circle cx="210" cy="110" r="3" fill="#ffbd2e" />
        <circle cx="225" cy="110" r="3" fill="#28ca42" />

        {/* Code Lines */}
        <rect
          x="190"
          y="135"
          width="100"
          height="3"
          rx="1"
          fill="#915EFF"
          opacity="0.8"
        />
        <rect
          x="190"
          y="150"
          width="80"
          height="3"
          rx="1"
          fill="#00d4aa"
          opacity="0.8"
        />
        <rect
          x="200"
          y="165"
          width="90"
          height="3"
          rx="1"
          fill="#dfd9ff"
          opacity="0.8"
        />
        <rect
          x="190"
          y="180"
          width="70"
          height="3"
          rx="1"
          fill="#915EFF"
          opacity="0.8"
        />
        <rect
          x="200"
          y="195"
          width="95"
          height="3"
          rx="1"
          fill="#00d4aa"
          opacity="0.8"
        />
        <rect
          x="190"
          y="210"
          width="85"
          height="3"
          rx="1"
          fill="#dfd9ff"
          opacity="0.8"
        />
        <rect
          x="200"
          y="225"
          width="75"
          height="3"
          rx="1"
          fill="#915EFF"
          opacity="0.8"
        />
        <rect
          x="190"
          y="240"
          width="110"
          height="3"
          rx="1"
          fill="#00d4aa"
          opacity="0.8"
        />

        {/* Floating Tech Icons - Perfectly Centered Layout */}

        {/* React Icon - Top Left */}
        <g transform="translate(60, 80)">
          <text
            x="0"
            y="-25"
            fontSize="9"
            fill="#915EFF"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="bold"
          >
            React
          </text>
          <circle
            r="18"
            stroke="#915EFF"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
          <ellipse
            rx="18"
            ry="7"
            stroke="#915EFF"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
            transform="rotate(60)"
          />
          <ellipse
            rx="18"
            ry="7"
            stroke="#915EFF"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
            transform="rotate(-60)"
          />
          <circle r="3" fill="#915EFF" />
        </g>

        {/* Next.js Icon - Top Center */}
        <g transform="translate(250, 50)">
          <text
            x="0"
            y="-25"
            fontSize="9"
            fill="#00d4aa"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="bold"
          >
            Next.js
          </text>
          <rect
            x="-16"
            y="-16"
            width="32"
            height="32"
            rx="6"
            fill="#00d4aa"
            opacity="0.2"
          />
          <rect
            x="-12"
            y="-12"
            width="24"
            height="24"
            rx="4"
            fill="#00d4aa"
            opacity="0.8"
          />
          <text
            x="0"
            y="3"
            fontSize="11"
            fill="#1a1a2e"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="bold"
          >
            N
          </text>
        </g>

        {/* TypeScript Icon - Top Right */}
        <g transform="translate(440, 80)">
          <text
            x="0"
            y="-25"
            fontSize="9"
            fill="#00d4aa"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="bold"
          >
            TypeScript
          </text>
          <rect
            x="-16"
            y="-16"
            width="32"
            height="32"
            rx="6"
            fill="#00d4aa"
            opacity="0.2"
          />
          <rect
            x="-12"
            y="-12"
            width="24"
            height="24"
            rx="4"
            fill="#00d4aa"
            opacity="0.8"
          />
          <text
            x="0"
            y="3"
            fontSize="9"
            fill="#1a1a2e"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="bold"
          >
            TS
          </text>
        </g>

        {/* Node.js Icon - Bottom Left */}
        <g transform="translate(60, 270)">
          <rect
            x="-16"
            y="-16"
            width="32"
            height="32"
            rx="6"
            fill="#915EFF"
            opacity="0.2"
          />
          <rect
            x="-12"
            y="-12"
            width="24"
            height="24"
            rx="4"
            fill="#915EFF"
            opacity="0.8"
          />
          <text
            x="0"
            y="3"
            fontSize="9"
            fill="#ffffff"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="bold"
          >
            JS
          </text>
          <text
            x="0"
            y="32"
            fontSize="9"
            fill="#915EFF"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="bold"
          >
            Node.js
          </text>
        </g>

        {/* Database Icon - Bottom Center */}
        <g transform="translate(250, 300)">
          <ellipse rx="18" ry="6" fill="#dfd9ff" opacity="0.8" />
          <ellipse
            rx="18"
            ry="6"
            cy="6"
            fill="none"
            stroke="#dfd9ff"
            strokeWidth="2"
            opacity="0.8"
          />
          <ellipse
            rx="18"
            ry="6"
            cy="12"
            fill="none"
            stroke="#dfd9ff"
            strokeWidth="2"
            opacity="0.8"
          />
          <line
            x1="-18"
            y1="0"
            x2="-18"
            y2="12"
            stroke="#dfd9ff"
            strokeWidth="2"
            opacity="0.8"
          />
          <line
            x1="18"
            y1="0"
            x2="18"
            y2="12"
            stroke="#dfd9ff"
            strokeWidth="2"
            opacity="0.8"
          />
          <text
            x="0"
            y="32"
            fontSize="9"
            fill="#dfd9ff"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="bold"
          >
            Database
          </text>
        </g>

        {/* Python Icon - Bottom Right */}
        <g transform="translate(440, 270)">
          <rect
            x="-16"
            y="-16"
            width="32"
            height="32"
            rx="6"
            fill="#dfd9ff"
            opacity="0.2"
          />
          <rect
            x="-12"
            y="-12"
            width="24"
            height="24"
            rx="4"
            fill="#dfd9ff"
            opacity="0.8"
          />
          <text
            x="0"
            y="3"
            fontSize="9"
            fill="#1a1a2e"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="bold"
          >
            PY
          </text>
          <text
            x="0"
            y="32"
            fontSize="9"
            fill="#dfd9ff"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="bold"
          >
            Python
          </text>
        </g>

        {/* Floating Particles - Balanced for increased height */}
        <circle cx="30" cy="40" r="1.5" fill="#915EFF" opacity="0.5" />
        <circle cx="470" cy="35" r="1" fill="#00d4aa" opacity="0.6" />
        <circle cx="15" cy="175" r="1.5" fill="#dfd9ff" opacity="0.4" />
        <circle cx="485" cy="165" r="1" fill="#915EFF" opacity="0.5" />
        <circle cx="30" cy="310" r="1.5" fill="#00d4aa" opacity="0.4" />
        <circle cx="470" cy="315" r="1" fill="#dfd9ff" opacity="0.6" />
        <circle cx="150" cy="25" r="1" fill="#915EFF" opacity="0.3" />
        <circle cx="350" cy="325" r="1.5" fill="#00d4aa" opacity="0.4" />
        <circle cx="120" cy="320" r="1" fill="#dfd9ff" opacity="0.5" />
        <circle cx="380" cy="30" r="1.5" fill="#915EFF" opacity="0.3" />

        {/* Connection Lines - Updated for condensed layout */}
        <path
          d="M 78 98 Q 100 120 180 130"
          stroke="#915EFF"
          strokeWidth="1.5"
          opacity="0.4"
          fill="none"
          strokeDasharray="4,4"
        />
        <path
          d="M 250 66 L 250 95"
          stroke="#00d4aa"
          strokeWidth="1.5"
          opacity="0.4"
          fill="none"
          strokeDasharray="4,4"
        />
        <path
          d="M 422 98 Q 400 120 320 130"
          stroke="#00d4aa"
          strokeWidth="1.5"
          opacity="0.4"
          fill="none"
          strokeDasharray="4,4"
        />
        <path
          d="M 78 252 Q 120 240 180 240"
          stroke="#915EFF"
          strokeWidth="1.5"
          opacity="0.4"
          fill="none"
          strokeDasharray="4,4"
        />
        <path
          d="M 250 288 L 250 255"
          stroke="#dfd9ff"
          strokeWidth="1.5"
          opacity="0.4"
          fill="none"
          strokeDasharray="4,4"
        />
        <path
          d="M 422 252 Q 380 240 320 240"
          stroke="#dfd9ff"
          strokeWidth="1.5"
          opacity="0.4"
          fill="none"
          strokeDasharray="4,4"
        />

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
