import React from 'react';

/**
 * AdvisoryWorkflow.jsx
 * Original SVG diagram representing BPR and DPR institutional advisory:
 * Current state audit, bottleneck elimination, target operating model, and DPR roadmap.
 */
export default function AdvisoryWorkflow() {
  return (
    <div style={{ width: '100%', maxWidth: '640px', margin: '0 auto' }}>
      <svg
        viewBox="0 0 600 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
        role="img"
        aria-label="Advisory transformation workflow: process diagnostics to deliverable decisions"
      >
        <rect x="10" y="10" width="580" height="360" rx="16" fill="#F8FAFD" stroke="#DCE5EF" strokeWidth="1.5" />

        {/* Phase 1: As-Is Current State Audit */}
        <g transform="translate(40, 50)">
          <rect width="145" height="110" rx="10" fill="#FFFFFF" stroke="#BDD0E4" strokeWidth="1.5" />
          <rect x="12" y="12" width="40" height="20" rx="4" fill="#F1F5F9" />
          <text x="32" y="26" textAnchor="middle" fill="#475569" fontSize="9.5" fontWeight="700">AS-IS</text>
          <text x="12" y="52" fill="#071B31" fontSize="13" fontWeight="700">Process Audit</text>
          <text x="12" y="70" fill="#52657B" fontSize="10.5">• Field observations</text>
          <text x="12" y="86" fill="#52657B" fontSize="10.5">• Bottleneck mapping</text>
          <text x="12" y="102" fill="#52657B" fontSize="10.5">• Paper trail analysis</text>
        </g>

        {/* Transition Arrow 1 */}
        <path d="M 195 105 L 230 105" stroke="#0F4C81" strokeWidth="2.5" markerEnd="url(#arrow-head)" />

        {/* Phase 2: BPR Re-engineering Engine */}
        <g transform="translate(230, 50)">
          <rect width="145" height="110" rx="10" fill="#EAF3FB" stroke="#0F4C81" strokeWidth="2" filter="drop-shadow(0 4px 10px rgba(15,76,129,0.12))" />
          <rect x="12" y="12" width="36" height="20" rx="4" fill="#0F4C81" />
          <text x="30" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="700">BPR</text>
          <text x="12" y="52" fill="#0A3358" fontSize="13" fontWeight="700">Optimization</text>
          <text x="12" y="70" fill="#0F4C81" fontSize="10.5">• Friction removal</text>
          <text x="12" y="86" fill="#0F4C81" fontSize="10.5">• Digital touchpoints</text>
          <text x="12" y="102" fill="#0F4C81" fontSize="10.5">• SOP standardization</text>
        </g>

        {/* Transition Arrow 2 */}
        <path d="M 385 105 L 420 105" stroke="#0F4C81" strokeWidth="2.5" />

        {/* Phase 3: Target Model & DPR */}
        <g transform="translate(420, 50)">
          <rect width="145" height="110" rx="10" fill="#071B31" stroke="#0A3358" strokeWidth="2" filter="drop-shadow(0 6px 14px rgba(7,27,49,0.2))" />
          <rect x="12" y="12" width="36" height="20" rx="4" fill="#E53E3E" />
          <text x="30" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="700">DPR</text>
          <text x="12" y="52" fill="#FFFFFF" fontSize="13" fontWeight="700">To-Be Blueprint</text>
          <text x="12" y="70" fill="#B4C6D8" fontSize="10.5">• Financial feasibility</text>
          <text x="12" y="86" fill="#B4C6D8" fontSize="10.5">• Technical specs</text>
          <text x="12" y="102" fill="#B4C6D8" fontSize="10.5">• Phased roadmaps</text>
        </g>

        {/* Downward Deliverables Gallery Box */}
        <g transform="translate(40, 190)">
          <rect width="525" height="135" rx="12" fill="#FFFFFF" stroke="#DCE5EF" strokeWidth="1.5" />
          <text x="24" y="32" fill="#0A3358" fontSize="13" fontWeight="700">Core Deliverable Artifacts Produced:</text>

          <g transform="translate(24, 46)">
            {/* Artifact 1 */}
            <g transform="translate(0, 0)">
              <rect width="112" height="66" rx="6" fill="#F8FAFD" stroke="#BDD0E4" />
              <text x="10" y="24" fill="#0F4C81" fontSize="10" fontWeight="700">As-Is Dossier</text>
              <text x="10" y="40" fill="#52657B" fontSize="8.5">Diagnostic audit</text>
              <text x="10" y="54" fill="#52657B" fontSize="8.5">& friction points</text>
            </g>
            {/* Artifact 2 */}
            <g transform="translate(122, 0)">
              <rect width="112" height="66" rx="6" fill="#F8FAFD" stroke="#BDD0E4" />
              <text x="10" y="24" fill="#0F4C81" fontSize="10" fontWeight="700">Process Map</text>
              <text x="10" y="40" fill="#52657B" fontSize="8.5">Standardized SOPs</text>
              <text x="10" y="54" fill="#52657B" fontSize="8.5">& role matrix</text>
            </g>
            {/* Artifact 3 */}
            <g transform="translate(244, 0)">
              <rect width="112" height="66" rx="6" fill="#F8FAFD" stroke="#BDD0E4" />
              <text x="10" y="24" fill="#0F4C81" fontSize="10" fontWeight="700">Detailed DPR</text>
              <text x="10" y="40" fill="#52657B" fontSize="8.5">Financial outlay</text>
              <text x="10" y="54" fill="#52657B" fontSize="8.5">& feasibility specs</text>
            </g>
            {/* Artifact 4 */}
            <g transform="translate(366, 0)">
              <rect width="112" height="66" rx="6" fill="#F8FAFD" stroke="#BDD0E4" />
              <text x="10" y="24" fill="#E53E3E" fontSize="10" fontWeight="700">Tender Schedule</text>
              <text x="10" y="40" fill="#52657B" fontSize="8.5">Procurement ready</text>
              <text x="10" y="54" fill="#52657B" fontSize="8.5">SLA & milestones</text>
            </g>
          </g>
        </g>

        {/* Global Arrow marker definition */}
        <defs>
          <marker id="arrow-head" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#0F4C81" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
