import React from 'react';

/**
 * SoftwareFlow.jsx
 * Original SVG diagram representing connected enterprise software modules,
 * API integration layers, secure databases, and MIS dashboards.
 */
export default function SoftwareFlow() {
  return (
    <div style={{ width: '100%', maxWidth: '640px', margin: '0 auto' }}>
      <svg
        viewBox="0 0 600 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
        role="img"
        aria-label="Software architecture flow depicting user interfaces, API integration layer, and secure data services"
      >
        <defs>
          <linearGradient id="sf-grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F4C81" />
            <stop offset="100%" stopColor="#0A3358" />
          </linearGradient>
          <linearGradient id="sf-grad-light" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EAF3FB" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>

        {/* Outer Canvas Container */}
        <rect x="10" y="10" width="580" height="360" rx="16" fill="#F8FAFD" stroke="#DCE5EF" strokeWidth="1.5" />

        {/* Layer 1: Front-end Interfaces */}
        <g transform="translate(40, 40)">
          <rect width="140" height="64" rx="10" fill="#FFFFFF" stroke="#0F4C81" strokeWidth="2" filter="drop-shadow(0 4px 8px rgba(15,76,129,0.08))" />
          <text x="70" y="32" textAnchor="middle" fill="#0A3358" fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif">Web & Portals</text>
          <text x="70" y="48" textAnchor="middle" fill="#52657B" fontSize="10" fontFamily="Inter, sans-serif">Responsive UI</text>
        </g>

        <g transform="translate(40, 130)">
          <rect width="140" height="64" rx="10" fill="#FFFFFF" stroke="#0F4C81" strokeWidth="2" filter="drop-shadow(0 4px 8px rgba(15,76,129,0.08))" />
          <text x="70" y="32" textAnchor="middle" fill="#0A3358" fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif">Mobile & Field</text>
          <text x="70" y="48" textAnchor="middle" fill="#52657B" fontSize="10" fontFamily="Inter, sans-serif">Offline-Ready</text>
        </g>

        <g transform="translate(40, 220)">
          <rect width="140" height="64" rx="10" fill="#FFFFFF" stroke="#0F4C81" strokeWidth="2" filter="drop-shadow(0 4px 8px rgba(15,76,129,0.08))" />
          <text x="70" y="32" textAnchor="middle" fill="#0A3358" fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif">Executive MIS</text>
          <text x="70" y="48" textAnchor="middle" fill="#52657B" fontSize="10" fontFamily="Inter, sans-serif">Real-time Telemetry</text>
        </g>

        {/* Connecting Data Channels */}
        <path d="M 180 72 L 250 160" stroke="#0F4C81" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M 180 162 L 250 162" stroke="#0F4C81" strokeWidth="2.5" />
        <path d="M 180 252 L 250 164" stroke="#0F4C81" strokeWidth="2" strokeDasharray="4 4" />

        {/* Layer 2: API Gateway & Security Core */}
        <g transform="translate(250, 80)">
          <rect width="130" height="170" rx="12" fill="url(#sf-grad-blue)" stroke="#071B31" strokeWidth="2" filter="drop-shadow(0 8px 18px rgba(10,51,88,0.25))" />
          <circle cx="65" cy="40" r="16" fill="#E53E3E" />
          <text x="65" y="45" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800">API</text>
          <text x="65" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Security &</text>
          <text x="65" y="98" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Integration</text>
          <line x1="25" y1="115" x2="105" y2="115" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <text x="65" y="134" textAnchor="middle" fill="#A5C1DC" fontSize="10">RBAC Controls</text>
          <text x="65" y="148" textAnchor="middle" fill="#A5C1DC" fontSize="10">REST & SOAP</text>
        </g>

        {/* Data Channels to Backend */}
        <path d="M 380 165 L 440 110" stroke="#0A3358" strokeWidth="2.5" />
        <path d="M 380 165 L 440 220" stroke="#0A3358" strokeWidth="2.5" />

        {/* Layer 3: Backend & Data Stores */}
        <g transform="translate(440, 80)">
          <rect width="120" height="64" rx="10" fill="#FFFFFF" stroke="#0A3358" strokeWidth="1.5" />
          <text x="60" y="32" textAnchor="middle" fill="#0A3358" fontSize="12" fontWeight="700">RDBMS & Cloud</text>
          <text x="60" y="48" textAnchor="middle" fill="#52657B" fontSize="9.5">Statutory Stores</text>
        </g>

        <g transform="translate(440, 190)">
          <rect width="120" height="64" rx="10" fill="#FFFFFF" stroke="#0A3358" strokeWidth="1.5" />
          <text x="60" y="32" textAnchor="middle" fill="#0A3358" fontSize="12" fontWeight="700">Audit & Logs</text>
          <text x="60" y="48" textAnchor="middle" fill="#52657B" fontSize="9.5">Immutable Traces</text>
        </g>

        {/* Footer Indicator */}
        <text x="300" y="335" textAnchor="middle" fill="#7E90A3" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500">
          Stakeholder Needs → Solution Design → Modular Engineering → Integration → Operational Insight
        </text>
      </svg>
    </div>
  );
}
