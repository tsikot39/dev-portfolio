import React from "react";

const EarthSVG = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        width="700"
        height="700"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-full max-h-full"
      >
        {/* Stars */}
        <circle cx="80" cy="60" r="1.5" fill="#ffffff" opacity="0.9" />
        <circle cx="120" cy="40" r="1" fill="#87CEEB" opacity="0.7" />
        <circle cx="180" cy="30" r="1.2" fill="#ffffff" opacity="0.8" />
        <circle cx="280" cy="45" r="1.3" fill="#ffffff" opacity="0.9" />
        <circle cx="350" cy="70" r="1" fill="#87CEEB" opacity="0.7" />
        <circle cx="400" cy="90" r="1.5" fill="#ffffff" opacity="0.8" />
        <circle cx="450" cy="200" r="1.2" fill="#ffffff" opacity="0.9" />
        <circle cx="420" cy="260" r="0.9" fill="#87CEEB" opacity="0.7" />
        <circle cx="380" cy="320" r="1.4" fill="#ffffff" opacity="0.8" />
        <circle cx="280" cy="420" r="1.1" fill="#ffffff" opacity="0.9" />
        <circle cx="160" cy="430" r="0.8" fill="#dfd9ff" opacity="0.6" />
        <circle cx="60" cy="350" r="1" fill="#87CEEB" opacity="0.7" />
        <circle cx="40" cy="300" r="1.5" fill="#ffffff" opacity="0.9" />
        <circle cx="70" cy="180" r="1.1" fill="#ffffff" opacity="0.8" />

        {/* Earth Base - Larger and more prominent */}
        <circle cx="250" cy="250" r="120" fill="url(#earthGradient)" />

        {/* Continents - Simplified but recognizable */}

        {/* North America */}
        <path
          d="M 180 200 Q 160 180 170 160 Q 190 150 210 155 Q 230 160 250 170 Q 260 185 255 205 Q 245 225 230 235 Q 210 240 190 235 Q 175 225 175 210 Q 178 200 180 200 Z"
          fill="#2E8B57"
          opacity="0.9"
        />

        {/* South America */}
        <path
          d="M 200 280 Q 210 270 220 285 Q 225 300 220 320 Q 215 340 210 355 Q 205 365 200 355 Q 195 340 200 320 Q 205 300 200 285 Q 200 280 200 280 Z"
          fill="#228B22"
          opacity="0.85"
        />

        {/* Europe */}
        <path
          d="M 250 180 Q 265 175 280 185 Q 290 195 285 205 Q 280 215 270 210 Q 260 205 255 195 Q 250 185 250 180 Z"
          fill="#32CD32"
          opacity="0.8"
        />

        {/* Africa */}
        <path
          d="M 260 220 Q 275 215 290 230 Q 300 245 295 265 Q 290 285 285 305 Q 280 325 270 340 Q 265 350 255 345 Q 250 335 255 320 Q 260 300 265 280 Q 270 260 265 240 Q 260 225 260 220 Z"
          fill="#2E8B57"
          opacity="0.9"
        />

        {/* Asia */}
        <path
          d="M 300 190 Q 320 185 340 195 Q 350 205 345 220 Q 340 235 325 230 Q 310 225 305 210 Q 300 195 300 190 Z"
          fill="#228B22"
          opacity="0.85"
        />

        {/* Australia */}
        <path
          d="M 320 320 Q 340 315 355 325 Q 365 335 360 345 Q 350 350 335 345 Q 325 340 320 330 Q 320 325 320 320 Z"
          fill="#32CD32"
          opacity="0.7"
        />

        {/* Clouds */}
        <g opacity="0.4">
          <ellipse cx="220" cy="210" rx="25" ry="8" fill="#ffffff" />
          <ellipse cx="280" cy="240" rx="20" ry="6" fill="#ffffff" />
          <ellipse cx="240" cy="300" rx="18" ry="5" fill="#ffffff" />
        </g>

        {/* Atmosphere */}
        <circle
          cx="250"
          cy="250"
          r="120"
          fill="none"
          stroke="url(#atmosphereGradient)"
          strokeWidth="8"
          opacity="0.7"
        />

        {/* Orbital Ribbons/Bands - Similar to the 3D version */}

        {/* Pink/Purple Ribbon 1 */}
        <ellipse
          cx="250"
          cy="250"
          rx="160"
          ry="30"
          fill="none"
          stroke="url(#ribbon1Gradient)"
          strokeWidth="12"
          opacity="0.7"
          transform="rotate(15 250 250)"
        />

        {/* Blue Ribbon 2 */}
        <ellipse
          cx="250"
          cy="250"
          rx="180"
          ry="35"
          fill="none"
          stroke="url(#ribbon2Gradient)"
          strokeWidth="10"
          opacity="0.6"
          transform="rotate(-25 250 250)"
        />

        {/* Purple Ribbon 3 */}
        <ellipse
          cx="250"
          cy="250"
          rx="200"
          ry="40"
          fill="none"
          stroke="url(#ribbon3Gradient)"
          strokeWidth="8"
          opacity="0.5"
          transform="rotate(45 250 250)"
        />

        {/* Pink Ribbon 4 */}
        <ellipse
          cx="250"
          cy="250"
          rx="140"
          ry="25"
          fill="none"
          stroke="url(#ribbon4Gradient)"
          strokeWidth="14"
          opacity="0.8"
          transform="rotate(-60 250 250)"
        />

        {/* Blue-Purple Ribbon 5 */}
        <ellipse
          cx="250"
          cy="250"
          rx="220"
          ry="45"
          fill="none"
          stroke="url(#ribbon5Gradient)"
          strokeWidth="6"
          opacity="0.4"
          transform="rotate(75 250 250)"
        />

        {/* Light Pink Ribbon 6 */}
        <ellipse
          cx="250"
          cy="250"
          rx="170"
          ry="32"
          fill="none"
          stroke="url(#ribbon6Gradient)"
          strokeWidth="9"
          opacity="0.6"
          transform="rotate(-10 250 250)"
        />

        {/* Earth Highlight */}
        <ellipse
          cx="220"
          cy="220"
          rx="40"
          ry="60"
          fill="url(#highlightGradient)"
          opacity="0.3"
        />

        {/* Gradient Definitions */}
        <defs>
          <radialGradient id="earthGradient" cx="35%" cy="35%" r="65%">
            <stop
              offset="0%"
              style={{ stopColor: "#4682B4", stopOpacity: 1 }}
            />
            <stop
              offset="30%"
              style={{ stopColor: "#1E90FF", stopOpacity: 1 }}
            />
            <stop
              offset="60%"
              style={{ stopColor: "#0066CC", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#003D7A", stopOpacity: 1 }}
            />
          </radialGradient>

          <linearGradient
            id="atmosphereGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#87CEEB", stopOpacity: 0.8 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#4169E1", stopOpacity: 0.3 }}
            />
          </linearGradient>

          <linearGradient
            id="ribbon1Gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#915EFF", stopOpacity: 0.8 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#7c3aed", stopOpacity: 0.6 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#5b21b6", stopOpacity: 0.4 }}
            />
          </linearGradient>

          <linearGradient
            id="ribbon2Gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#00d4aa", stopOpacity: 0.7 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#10b981", stopOpacity: 0.5 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#059669", stopOpacity: 0.3 }}
            />
          </linearGradient>

          <linearGradient
            id="ribbon3Gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#dfd9ff", stopOpacity: 0.6 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#c4b5fd", stopOpacity: 0.4 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#a78bfa", stopOpacity: 0.2 }}
            />
          </linearGradient>

          <linearGradient
            id="ribbon4Gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#915EFF", stopOpacity: 0.9 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#8b5cf6", stopOpacity: 0.7 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#7c3aed", stopOpacity: 0.5 }}
            />
          </linearGradient>

          <linearGradient
            id="ribbon5Gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#00d4aa", stopOpacity: 0.5 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#34d399", stopOpacity: 0.3 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#10b981", stopOpacity: 0.2 }}
            />
          </linearGradient>

          <linearGradient
            id="ribbon6Gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#dfd9ff", stopOpacity: 0.7 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#915EFF", stopOpacity: 0.5 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#8b5cf6", stopOpacity: 0.3 }}
            />
          </linearGradient>

          <radialGradient id="highlightGradient" cx="50%" cy="50%" r="50%">
            <stop
              offset="0%"
              style={{ stopColor: "#ffffff", stopOpacity: 0.4 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#ffffff", stopOpacity: 0 }}
            />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default EarthSVG;
