import React from 'react';

/**
 * LearningLadder.jsx
 * Original SVG diagram representing institutional learning progression,
 * Train-the-Trainer cascades, and frontline adoption.
 */
export default function LearningLadder() {
  return (
    <div style={{ width: '100%', maxWidth: '640px', margin: '0 auto' }}>
      <svg
        viewBox="0 0 600 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
        role="img"
        aria-label="Institutional learning progression from training needs analysis to verified digital adoption"
      >
        <rect x="10" y="10" width="580" height="360" rx="16" fill="#F8FAFD" stroke="#DCE5EF" strokeWidth="1.5" />

        {/* Step 1: Baseline Assessment */}
        <g transform="translate(40, 260)">
          <rect width="180" height="70" rx="10" fill="#FFFFFF" stroke="#BDD0E4" strokeWidth="1.5" />
          <circle cx="28" cy="35" r="14" fill="#EAF3FB" />
          <text x="28" y="40" textAnchor="middle" fill="#0F4C81" fontSize="12" fontWeight="800">1</text>
          <text x="54" y="30" fill="#071B31" fontSize="12" fontWeight="700">Needs Analysis (TNA)</text>
          <text x="54" y="48" fill="#52657B" fontSize="10">Baseline literacy & gap audit</text>
        </g>

        {/* Connector 1 */}
        <path d="M 220 295 L 280 235" stroke="#0F4C81" strokeWidth="2" strokeDasharray="3 3" />

        {/* Step 2: Curriculum & Labs */}
        <g transform="translate(140, 180)">
          <rect width="200" height="70" rx="10" fill="#FFFFFF" stroke="#BDD0E4" strokeWidth="1.5" />
          <circle cx="28" cy="35" r="14" fill="#EAF3FB" />
          <text x="28" y="40" textAnchor="middle" fill="#0F4C81" fontSize="12" fontWeight="800">2</text>
          <text x="54" y="30" fill="#071B31" fontSize="12" fontWeight="700">Curricula & Sandboxes</text>
          <text x="54" y="48" fill="#52657B" fontSize="10">Bilingual scenario simulation</text>
        </g>

        {/* Connector 2 */}
        <path d="M 340 215 L 390 145" stroke="#0F4C81" strokeWidth="2" strokeDasharray="3 3" />

        {/* Step 3: Train-the-Trainer */}
        <g transform="translate(250, 100)">
          <rect width="200" height="70" rx="10" fill="#EAF3FB" stroke="#0F4C81" strokeWidth="2" />
          <circle cx="28" cy="35" r="14" fill="#0F4C81" />
          <text x="28" y="40" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800">3</text>
          <text x="54" y="30" fill="#0A3358" fontSize="12" fontWeight="700">Train-the-Trainer (ToT)</text>
          <text x="54" y="48" fill="#0F4C81" fontSize="10">Regional master facilitators</text>
        </g>

        {/* Connector 3 */}
        <path d="M 450 135 L 480 65" stroke="#E53E3E" strokeWidth="2.5" />

        {/* Step 4: Adoption & Certification */}
        <g transform="translate(360, 30)">
          <rect width="200" height="74" rx="10" fill="#071B31" stroke="#E53E3E" strokeWidth="2" filter="drop-shadow(0 6px 14px rgba(7,27,49,0.25))" />
          <circle cx="28" cy="37" r="14" fill="#E53E3E" />
          <text x="28" y="42" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800">4</text>
          <text x="54" y="32" fill="#FFFFFF" fontSize="12" fontWeight="700">Adoption & Mastery</text>
          <text x="54" y="50" fill="#B4C6D8" fontSize="10">Error reduction & live audits</text>
        </g>

        {/* Bottom Banner */}
        <g transform="translate(40, 340)">
          <text x="260" y="5" textAnchor="middle" fill="#52657B" fontSize="11" fontWeight="500">
            Institutional Scale: Frontline Readiness • Zero-Risk Sandboxes • Measurable Competency
          </text>
        </g>
      </svg>
    </div>
  );
}
