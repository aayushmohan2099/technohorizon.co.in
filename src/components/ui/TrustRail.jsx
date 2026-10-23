import React from 'react';
import clientsData from '../../data/clients.json';

export default function TrustRail({ title = 'Supporting mission-critical institutional and enterprise work.' }) {
  // Filter for approved display items (excluding the company's own logo from the client rail)
  const displayClients = clientsData.filter(
    c => c.approvedForDisplay === true && c.id !== 'techno-horizon'
  );

  return (
    <div className="section section-ice" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-2xl)', borderBottom: '1px solid var(--color-border-subtle)' }}>
      <div className="container">
        {title && (
          <p
            style={{
              textAlign: 'center',
              fontSize: '0.9375rem',
              fontWeight: 600,
              color: 'var(--color-text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: 'var(--space-xl)'
            }}
          >
            {title}
          </p>
        )}

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px 36px'
          }}
          className="trust-rail-container"
        >
          {displayClients.map((client) => {
            // For SVCG or items without approved logo image, render dignified accessible text badge
            if (!client.logoPath || !client.logoApproved) {
              return (
                <div
                  key={client.id}
                  style={{
                    backgroundColor: 'var(--color-white)',
                    border: '1px dashed var(--color-border-strong)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '8px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '52px',
                    boxShadow: 'var(--shadow-subtle)'
                  }}
                  title={`${client.name} — Institutional reference candidate`}
                >
                  <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary-deep)', letterSpacing: '0.02em' }}>
                    {client.name}
                  </span>
                </div>
              );
            }

            return (
              <div
                key={client.id}
                style={{
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '10px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '62px',
                  minWidth: '130px',
                  boxShadow: 'var(--shadow-subtle)',
                  transition: 'transform var(--transition-fast), border-color var(--transition-fast)'
                }}
                className="trust-rail-card"
                title={`${client.name} (${client.relationshipType})`}
              >
                <img
                  src={client.logoPath}
                  alt={client.name}
                  style={{
                    maxHeight: '38px',
                    maxWidth: '120px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: client.hasTransparentLogo ? 'none' : 'grayscale(15%)',
                    transition: 'filter var(--transition-fast)'
                  }}
                />
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--space-lg)' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)', fontStyle: 'italic' }}>
            Institutional reference candidates based on project records and historical engagements.
          </span>
        </div>
      </div>

      <style>{`
        .trust-rail-card:hover {
          border-color: var(--color-primary);
          transform: translateY(-2px);
        }
        .trust-rail-card:hover img {
          filter: none;
        }
      `}</style>
    </div>
  );
}
