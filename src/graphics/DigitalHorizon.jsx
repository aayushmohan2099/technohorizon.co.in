import React from 'react';

/**
 * Digital Horizon Hero Graphic
 * Flowing data paths, sweeping horizon arcs, service nodes, subtle red pulse.
 * STRICT REQUIREMENT: NEVER use honeycomb or hex grid here.
 */
export default function DigitalHorizon() {
  return (
    <div className="digital-horizon-wrapper" style={{ width: '100%', height: '100%', position: 'relative' }}>
      <svg
        viewBox="0 0 640 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', maxHeight: '520px' }}
        role="img"
        aria-label="Abstract digital horizon representing connected enterprise software, institutional advisory, and talent networks"
      >
        <defs>
          <linearGradient id="dh-sky-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EAF3FB" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="dh-arc-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0F4C81" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#0F4C81" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0A3358" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="dh-path-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0F4C81" stopOpacity="0.2" />
            <stop offset="70%" stopColor="#0F4C81" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#E53E3E" stopOpacity="0.95" />
          </linearGradient>

          <filter id="dh-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Backing Aura */}
        <ellipse cx="360" cy="240" rx="260" ry="160" fill="url(#dh-sky-grad)" filter="blur(20px)" />

        {/* Sweeping Horizon Arcs */}
        <path
          d="M 40 420 C 180 340, 380 340, 600 420"
          stroke="#DCE5EF"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M 60 370 C 200 280, 420 280, 580 370"
          stroke="#BDD0E4"
          strokeWidth="2"
        />
        <path
          d="M 100 310 C 240 210, 420 210, 540 310"
          stroke="url(#dh-arc-grad)"
          strokeWidth="2.5"
        />
        <path
          d="M 160 250 C 280 150, 400 150, 480 250"
          stroke="#0F4C81"
          strokeWidth="3"
        />

        {/* Dynamic Curved Flow Paths */}
        <path
          d="M 40 180 C 160 180, 220 260, 360 260 C 460 260, 520 180, 600 190"
          stroke="url(#dh-path-grad)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 80 220 C 180 220, 260 140, 380 140 C 480 140, 540 220, 600 240"
          stroke="#0A3358"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="8 6"
        />

        {/* Vertical Data Vectors */}
        <line x1="220" y1="120" x2="220" y2="340" stroke="#DCE5EF" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="360" y1="80" x2="360" y2="380" stroke="#BDD0E4" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="480" y1="140" x2="480" y2="340" stroke="#DCE5EF" strokeWidth="1" strokeDasharray="3 3" />

        {/* Connected Node Clusters */}
        {/* Node 1: Software Core */}
        <g transform="translate(220, 260)">
          <circle r="20" fill="#FFFFFF" stroke="#0F4C81" strokeWidth="3" filter="drop-shadow(0 4px 10px rgba(15, 76, 129, 0.2))" />
          <circle r="7" fill="#0F4C81" />
          <text x="0" y="38" textAnchor="middle" fill="#0A3358" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">
            Software & IT
          </text>
        </g>

        {/* Node 2: Institutional Advisory */}
        <g transform="translate(360, 140)">
          <circle r="24" fill="#FFFFFF" stroke="#0A3358" strokeWidth="3" filter="drop-shadow(0 6px 14px rgba(10, 51, 88, 0.25))" />
          <circle r="9" fill="#0A3358" />
          <text x="0" y="-34" textAnchor="middle" fill="#0A3358" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">
            Advisory & DPR
          </text>
        </g>

        {/* Node 3: Workforce & Training */}
        <g transform="translate(480, 250)">
          <circle r="18" fill="#FFFFFF" stroke="#0F4C81" strokeWidth="3" filter="drop-shadow(0 4px 10px rgba(15, 76, 129, 0.2))" />
          <circle r="6" fill="#0F4C81" />
          <text x="0" y="36" textAnchor="middle" fill="#0A3358" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">
            Training & Skills
          </text>
        </g>

        {/* Node 4: Manpower Hub with Red Accent Signal */}
        <g transform="translate(360, 260)">
          <circle r="30" fill="#FFFFFF" stroke="#E53E3E" strokeWidth="3" filter="url(#dh-glow)" />
          <circle r="12" fill="#E53E3E">
            <animate attributeName="r" values="10;13;10" dur="3s" repeatCount="indefinite" />
          </circle>
          <text x="0" y="48" textAnchor="middle" fill="#E53E3E" fontSize="13" fontWeight="800" fontFamily="Inter, sans-serif">
            Talent & Delivery
          </text>
        </g>

        {/* Inter-Node Micro Signals */}
        <circle cx="290" cy="260" r="4" fill="#0F4C81" />
        <circle cx="360" cy="200" r="3.5" fill="#0A3358" />
        <circle cx="420" cy="255" r="4" fill="#0F4C81" />
        <circle cx="530" cy="205" r="3" fill="#E53E3E" />
      </svg>
    </div>
  );
}
