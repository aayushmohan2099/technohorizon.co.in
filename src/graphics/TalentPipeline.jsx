import React from 'react';

/**
 * TalentPipeline.jsx
 * Original SVG diagram representing institutional manpower solutions:
 * Profile scoping, multi-tier vetting, deployment coordination, and SLA governance.
 */
export default function TalentPipeline() {
  return (
    <div style={{ width: '100%', maxWidth: '640px', margin: '0 auto' }}>
      <svg
        viewBox="0 0 600 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
        role="img"
        aria-label="Manpower solutions talent pipeline showing requisition, vetting, deployment, and SLA management"
      >
        <rect x="10" y="10" width="580" height="360" rx="16" fill="#F8FAFD" stroke="#DCE5EF" strokeWidth="1.5" />

        {/* Pipeline Track */}
        <line x1="80" y1="140" x2="520" y2="140" stroke="#BDD0E4" strokeWidth="4" />
        <line x1="80" y1="140" x2="380" y2="140" stroke="#0F4C81" strokeWidth="4" />
        <line x1="380" y1="140" x2="520" y2="140" stroke="#E53E3E" strokeWidth="4" strokeDasharray="6 4" />

        {/* Node 1: Requisition Scoping */}
        <g transform="translate(80, 140)">
          <circle r="22" fill="#FFFFFF" stroke="#0F4C81" strokeWidth="3" />
          <text y="5" textAnchor="middle" fill="#0F4C81" fontSize="12" fontWeight="800">01</text>
          <text y="45" textAnchor="middle" fill="#071B31" fontSize="12" fontWeight="700">Requirement</text>
          <text y="60" textAnchor="middle" fill="#52657B" fontSize="9.5">SLA & skill matrix</text>
        </g>

        {/* Node 2: Multi-Tier Screening */}
        <g transform="translate(220, 140)">
          <circle r="22" fill="#FFFFFF" stroke="#0F4C81" strokeWidth="3" />
          <text y="5" textAnchor="middle" fill="#0F4C81" fontSize="12" fontWeight="800">02</text>
          <text y="45" textAnchor="middle" fill="#071B31" fontSize="12" fontWeight="700">Screening</text>
          <text y="60" textAnchor="middle" fill="#52657B" fontSize="9.5">Background & skills</text>
        </g>

        {/* Node 3: Stakeholder Selection */}
        <g transform="translate(360, 140)">
          <circle r="22" fill="#EAF3FB" stroke="#0F4C81" strokeWidth="3" />
          <text y="5" textAnchor="middle" fill="#0F4C81" fontSize="12" fontWeight="800">03</text>
          <text y="45" textAnchor="middle" fill="#071B31" fontSize="12" fontWeight="700">Coordination</text>
          <text y="60" textAnchor="middle" fill="#52657B" fontSize="9.5">Candidate interview</text>
        </g>

        {/* Node 4: Deployment & SLA */}
        <g transform="translate(500, 140)">
          <circle r="26" fill="#071B31" stroke="#E53E3E" strokeWidth="3" />
          <text y="6" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="800">04</text>
          <text y="48" textAnchor="middle" fill="#E53E3E" fontSize="12" fontWeight="700">Deployment</text>
          <text y="63" textAnchor="middle" fill="#52657B" fontSize="9.5">Field onboarding</text>
        </g>

        {/* Lower Capability Card Grid */}
        <g transform="translate(40, 230)">
          <rect width="160" height="90" rx="8" fill="#FFFFFF" stroke="#DCE5EF" />
          <text x="14" y="28" fill="#0A3358" fontSize="11" fontWeight="700">Executive Search</text>
          <text x="14" y="46" fill="#52657B" fontSize="9">Program leaders</text>
          <text x="14" y="60" fill="#52657B" fontSize="9">Enterprise architects</text>
          <text x="14" y="74" fill="#52657B" fontSize="9">Operations directors</text>
        </g>

        <g transform="translate(220, 230)">
          <rect width="160" height="90" rx="8" fill="#FFFFFF" stroke="#DCE5EF" />
          <text x="14" y="28" fill="#0A3358" fontSize="11" fontWeight="700">Project Staffing</text>
          <text x="14" y="46" fill="#52657B" fontSize="9">Software engineers</text>
          <text x="14" y="60" fill="#52657B" fontSize="9">Data analysts</text>
          <text x="14" y="74" fill="#52657B" fontSize="9">Database administrators</text>
        </g>

        <g transform="translate(400, 230)">
          <rect width="160" height="90" rx="8" fill="#FFFFFF" stroke="#DCE5EF" />
          <text x="14" y="28" fill="#E53E3E" fontSize="11" fontWeight="700">Institutional Workforce</text>
          <text x="14" y="46" fill="#52657B" fontSize="9">Rollout coordinators</text>
          <text x="14" y="60" fill="#52657B" fontSize="9">Counter staff</text>
          <text x="14" y="74" fill="#52657B" fontSize="9">Verification personnel</text>
        </g>

        <text x="300" y="55" textAnchor="middle" fill="#071B31" fontSize="13" fontWeight="700">
          Statutory Compliance • Vetted Talent • SLA-Governed Deployments
        </text>
      </svg>
    </div>
  );
}
