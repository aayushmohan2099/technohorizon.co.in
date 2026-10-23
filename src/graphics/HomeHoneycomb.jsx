import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Code, Briefcase, GraduationCap, Users } from 'lucide-react';

/**
 * STRICT RULE: Exactly ONE fluid honeycomb animation on the whole site,
 * exclusively in Section 04: "One connected partner. Four specialist capabilities."
 */
const capabilities = [
  {
    id: 'software-it-solutions',
    title: 'Software Development & IT Solutions',
    short: 'Software & IT',
    icon: Code,
    color: '#0F4C81',
    route: '/services/software-it-solutions',
    cx: 260,
    cy: 160,
    summary: 'High-availability bespoke web applications, systems integration, and legacy modernization engineered for institutional scale.'
  },
  {
    id: 'business-consultancy',
    title: 'Business Consultancy, BPR & DPR',
    short: 'Advisory & DPR',
    icon: Briefcase,
    color: '#0A3358',
    route: '/services/business-consultancy',
    cx: 460,
    cy: 160,
    summary: 'Process re-engineering, detailed project reports (DPR), and administrative roadmaps connecting policy intent with field execution.'
  },
  {
    id: 'training-skill-development',
    title: 'Training & Skill Development',
    short: 'Training & Skills',
    icon: GraduationCap,
    color: '#0F4C81',
    route: '/services/training-skill-development',
    cx: 260,
    cy: 340,
    summary: 'Train-the-Trainer frameworks, digital adoption sandboxes, and institutional change management ensuring technology sticks.'
  },
  {
    id: 'manpower-solutions',
    title: 'Manpower Solutions',
    short: 'Manpower Solutions',
    icon: Users,
    color: '#E53E3E',
    route: '/services/manpower-solutions',
    cx: 460,
    cy: 340,
    summary: 'Executive recruitment, specialized technical project staffing, and turnkey manpower deployment aligned with institutional SLAs.'
  }
];

export default function HomeHoneycomb() {
  const [activeId, setActiveId] = useState('software-it-solutions');
  const navigate = useNavigate();

  const activeCapability = capabilities.find(c => c.id === activeId) || capabilities[0];

  const handleSelect = (route) => {
    navigate(route);
  };

  // Hexagon point generator
  const getHexPoints = (cx, cy, r) => {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return points.join(' ');
  };

  return (
    <div className="home-honeycomb-component" style={{ width: '100%' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(320px, 1.25fr) minmax(280px, 1fr)',
          gap: 'var(--space-2xl)',
          alignItems: 'center'
        }}
        className="honeycomb-layout-grid"
      >
        {/* Interactive Honeycomb SVG Canvas */}
        <div
          style={{
            background: 'linear-gradient(135deg, #071B31 0%, #0A3358 100%)',
            borderRadius: 'var(--radius-card-lg)',
            padding: 'var(--space-xl)',
            boxShadow: 'var(--shadow-lg)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <svg
            viewBox="0 0 720 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', height: 'auto', display: 'block' }}
            role="region"
            aria-label="Fluid honeycomb network linking four core specialist capabilities"
          >
            <defs>
              <linearGradient id="hc-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4A90E2" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#EAF3FB" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#E53E3E" stopOpacity="0.8" />
              </linearGradient>

              <filter id="hc-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Background Ambient Hex Web */}
            <g opacity="0.15" stroke="#FFFFFF" strokeWidth="1">
              <polygon points={getHexPoints(140, 250, 52)} />
              <polygon points={getHexPoints(360, 80, 52)} />
              <polygon points={getHexPoints(360, 420, 52)} />
              <polygon points={getHexPoints(580, 250, 52)} />
            </g>

            {/* Connecting Pathways between Core Pillars */}
            <line x1="260" y1="160" x2="460" y2="160" stroke="url(#hc-line-grad)" strokeWidth="3" />
            <line x1="260" y1="160" x2="260" y2="340" stroke="url(#hc-line-grad)" strokeWidth="3" />
            <line x1="460" y1="160" x2="460" y2="340" stroke="url(#hc-line-grad)" strokeWidth="3" />
            <line x1="260" y1="340" x2="460" y2="340" stroke="url(#hc-line-grad)" strokeWidth="3" />
            <line x1="260" y1="160" x2="460" y2="340" stroke="#EAF3FB" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />
            <line x1="460" y1="160" x2="260" y2="340" stroke="#EAF3FB" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />

            {/* Central Convergence Hub */}
            <g transform="translate(360, 250)">
              <polygon
                points={getHexPoints(0, 0, 42)}
                fill="#071B31"
                stroke="#EAF3FB"
                strokeWidth="2"
              />
              <circle r="6" fill="#E53E3E" filter="url(#hc-glow)">
                <animate attributeName="r" values="5;7;5" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <text x="0" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="700" letterSpacing="0.05em">
                INTEGRATION
              </text>
            </g>

            {/* Interactive Hexagon Capability Nodes */}
            {capabilities.map((cap) => {
              const isSelected = activeId === cap.id;
              const hexPoints = getHexPoints(cap.cx, cap.cy, 68);

              return (
                <g
                  key={cap.id}
                  onClick={() => setActiveId(cap.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveId(cap.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  aria-label={`${cap.title}. Press Enter to view details.`}
                  style={{ cursor: 'pointer', outline: 'none' }}
                >
                  <polygon
                    points={hexPoints}
                    fill={isSelected ? '#FFFFFF' : '#0D2644'}
                    stroke={isSelected ? cap.color : '#3A5C80'}
                    strokeWidth={isSelected ? '3.5' : '1.5'}
                    style={{ transition: 'all var(--transition-normal)' }}
                  />

                  {/* Active highlight glow */}
                  {isSelected && (
                    <polygon
                      points={hexPoints}
                      fill="none"
                      stroke={cap.color === '#E53E3E' ? '#E53E3E' : '#4A90E2'}
                      strokeWidth="2"
                      filter="url(#hc-glow)"
                      opacity="0.8"
                    />
                  )}

                  {/* Inner text & identifier */}
                  <text
                    x={cap.cx}
                    y={cap.cy - 10}
                    textAnchor="middle"
                    fill={isSelected ? '#071B31' : '#FFFFFF'}
                    fontSize="13"
                    fontWeight="700"
                    fontFamily="Inter, sans-serif"
                  >
                    {cap.short}
                  </text>
                  <text
                    x={cap.cx}
                    y={cap.cy + 12}
                    textAnchor="middle"
                    fill={isSelected ? cap.color : '#A5C1DC'}
                    fontSize="10"
                    fontWeight="600"
                    letterSpacing="0.04em"
                  >
                    {isSelected ? 'ACTIVE FOCUS' : 'SELECT'}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Dynamic Capability Detail Panel */}
        <div
          style={{
            background: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-card-lg)',
            padding: 'var(--space-2xl)',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '380px'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 'var(--space-md)' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: activeCapability.color === '#E53E3E' ? 'var(--color-accent-red-light)' : 'var(--color-primary-light)',
                  color: activeCapability.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <activeCapability.icon size={22} />
              </div>
              <span className="status-pill status-pill-approved">Connected Capability</span>
            </div>

            <h3 style={{ fontSize: '1.65rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-sm)' }}>
              {activeCapability.title}
            </h3>

            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: 'var(--space-xl)' }}>
              {activeCapability.summary}
            </p>

            <div
              style={{
                backgroundColor: 'var(--color-surface-ice)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-md)',
                marginBottom: 'var(--space-xl)',
                borderLeft: `4px solid ${activeCapability.color}`
              }}
            >
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-main)', margin: 0, fontWeight: 500 }}>
                Interconnected Workflow: Seamlessly engages alongside BPR advisory, technical engineering, training cohorts, and staffing resources.
              </p>
            </div>
          </div>

          <div>
            <button
              onClick={() => handleSelect(activeCapability.route)}
              className="btn btn-primary"
              style={{ width: '100%' }}
              aria-label={`Explore ${activeCapability.title} Service Details`}
            >
              <span>Explore {activeCapability.short}</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .honeycomb-layout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
