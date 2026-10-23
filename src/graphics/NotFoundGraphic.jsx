import React from 'react';

/**
 * NotFoundGraphic.jsx
 * Original SVG abstract pathway for 404 page.
 * STRICT: NEVER use honeycomb or hex pattern here.
 */
export default function NotFoundGraphic() {
  return (
    <div style={{ width: '100%', maxWidth: '420px', margin: '0 auto' }}>
      <svg
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
        role="img"
        aria-label="Abstract redirected pathway to destination"
      >
        <rect width="400" height="300" rx="16" fill="#F5F8FC" stroke="#DCE5EF" strokeWidth="1.5" />

        {/* Ambient Arcs */}
        <path d="M 40 260 C 140 180, 260 180, 360 260" stroke="#BDD0E4" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M 60 220 C 160 120, 240 120, 340 220" stroke="#0F4C81" strokeWidth="2.5" />

        {/* Broken and Rerouted Pathway */}
        <path d="M 60 160 L 170 160" stroke="#E53E3E" strokeWidth="3" strokeDasharray="6 4" />
        <circle cx="170" cy="160" r="8" fill="#E53E3E" />
        
        {/* Re-route Curve */}
        <path d="M 170 160 C 200 160, 220 90, 280 90 L 340 90" stroke="#0F4C81" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="340" cy="90" r="10" fill="#0F4C81" />
        <circle cx="340" cy="90" r="4" fill="#FFFFFF" />

        {/* 404 Label */}
        <text x="200" y="240" textAnchor="middle" fill="#071B31" fontSize="32" fontWeight="800" fontFamily="Inter, sans-serif">
          404
        </text>
        <text x="200" y="265" textAnchor="middle" fill="#52657B" fontSize="12" fontWeight="500">
          Route Not Found • Returning to Verified Pathways
        </text>
      </svg>
    </div>
  );
}
