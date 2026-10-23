import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ProjectCard({ project }) {
  const isApproved = project.verificationStatus === 'approved';

  return (
    <div className="card" style={{ height: '100%', justifyContent: 'space-between' }}>
      <div>
        {/* Top Badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: 'var(--space-md)' }}>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--color-primary)',
              backgroundColor: 'var(--color-primary-light)',
              padding: '4px 10px',
              borderRadius: 'var(--radius-pill)'
            }}
          >
            {project.sector}
          </span>

          <span className={`status-pill ${isApproved ? 'status-pill-approved' : 'status-pill-pending'}`}>
            {isApproved ? <CheckCircle2 size={12} /> : <AlertCircle size={12} />}
            <span>{isApproved ? 'Verified Record' : 'Candidate Under Review'}</span>
          </span>
        </div>

        {/* Title */}
        <h3 style={{ fontSize: '1.35rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-sm)', lineHeight: 1.25 }}>
          {project.title}
        </h3>

        {/* Summary */}
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem', lineHeight: 1.55, marginBottom: 'var(--space-lg)' }}>
          {project.summary}
        </p>

        {/* Client Name if approved */}
        {project.clientName && (
          <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-md)' }}>
            <strong>Institutional Reference:</strong> {project.clientName}
          </div>
        )}
      </div>

      {/* Card Action Link */}
      <div style={{ paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-border-subtle)', marginTop: 'var(--space-md)' }}>
        {isApproved ? (
          <Link
            to={`/projects/${project.slug}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: 600,
              fontSize: '0.9375rem',
              color: 'var(--color-primary)'
            }}
          >
            <span>View Case Study</span>
            <ArrowRight size={16} />
          </Link>
        ) : (
          <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-tertiary)', fontStyle: 'italic' }}>
            Historical record reserved for editorial verification.
          </span>
        )}
      </div>
    </div>
  );
}
