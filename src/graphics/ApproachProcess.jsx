import React from 'react';

/**
 * ApproachProcess.jsx
 * Branching delivery methodology diagram:
 * Discover → Define → Engineer / Advise → Deploy / Enable → Support / Improve
 */
export default function ApproachProcess() {
  const stages = [
    {
      num: '01',
      name: 'Discover',
      sub: 'Needs & Compliance',
      artifacts: 'Field Interviews • Baseline Audit • Scope Charter',
      color: '#0F4C81'
    },
    {
      num: '02',
      name: 'Define',
      sub: 'Architecture & DPR',
      artifacts: 'System Specs • Financial Outlay • Risk Register',
      color: '#0A3358'
    },
    {
      num: '03',
      name: 'Engineer & Advise',
      sub: 'Development & BPR',
      artifacts: 'Secure Modules • To-Be Workflows • Test Suites',
      color: '#0F4C81'
    },
    {
      num: '04',
      name: 'Deploy & Enable',
      sub: 'Rollout & Training',
      artifacts: 'Train-the-Trainer • Field Sandboxes • Staffing',
      color: '#E53E3E'
    },
    {
      num: '05',
      name: 'Support & Evolve',
      sub: 'SLA Governance',
      artifacts: 'Security Patching • SLA Reviews • Telemetry',
      color: '#071B31'
    }
  ];

  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 'var(--space-md)',
          position: 'relative'
        }}
        className="approach-stages-grid"
      >
        {stages.map((stg, idx) => (
          <div
            key={stg.num}
            style={{
              backgroundColor: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-card)',
              padding: 'var(--space-lg)',
              boxShadow: 'var(--shadow-subtle)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 'var(--space-sm)'
                }}
              >
                <span
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: stg.color,
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  {stg.num}
                </span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--color-text-tertiary)'
                  }}
                >
                  Stage {idx + 1}
                </span>
              </div>

              <h4 style={{ fontSize: '1.2rem', color: 'var(--color-primary-deep)', marginBottom: '4px' }}>
                {stg.name}
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: 'var(--space-md)' }}>
                {stg.sub}
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-surface-ice)',
                borderRadius: 'var(--radius-sm)',
                padding: '10px 12px',
                borderLeft: `3px solid ${stg.color}`
              }}
            >
              <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-tertiary)', marginBottom: '3px' }}>
                Typical Deliverables
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-main)', lineHeight: 1.4 }}>
                {stg.artifacts}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .approach-stages-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .approach-stages-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
