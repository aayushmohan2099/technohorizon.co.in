import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, CheckCircle2, AlertCircle, ArrowRight, Layers } from 'lucide-react';
import { usePageSeo } from '../lib/seo';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SectionHeading from '../components/ui/SectionHeading';
import CtaBand from '../components/ui/CtaBand';
import historyData from '../data/history.json';

export default function Journey() {
  usePageSeo({
    title: 'Our Journey & Evolution — Techno Horizon',
    description: 'Explore the strategic milestones and capability evolution of Techno Horizon across institutional software, consulting, training, and manpower.'
  });

  const verifiedMilestones = historyData.filter(h => h.published === true);
  const pendingCandidates = historyData.filter(h => h.published === false);

  return (
    <div className="journey-page">
      <section className="section-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'About', href: '/about' }, { label: 'Our Journey' }]} />

          <div style={{ maxWidth: '820px' }}>
            <span className="eyebrow eyebrow-red">Company Evolution</span>
            <h1 style={{ marginBottom: 'var(--space-md)' }}>
              The Evolution of Our Integrated Capabilities
            </h1>
            <p className="lead" style={{ marginBottom: 'var(--space-xl)' }}>
              Techno Horizon's growth mirrors the increasing complexity of institutional delivery — progressing from core requirements advisory into enterprise software engineering, workforce training cascades, and specialized staffing.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">
                <span>Discuss Our Experience</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/projects" className="btn btn-outline">
                <span>View Case Studies</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Evolution Timeline */}
      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Capability Milestones"
            title="Strategic Progression Across Four Disciplines"
            lead="In accordance with our strict enterprise editorial standards, this timeline charts verified capability milestones rather than unverified corporate dates."
          />

          <div
            style={{
              maxWidth: '860px',
              margin: '0 auto',
              position: 'relative',
              paddingLeft: 'var(--space-2xl)'
            }}
            className="journey-timeline"
          >
            {/* Timeline Vertical Track */}
            <div
              style={{
                position: 'absolute',
                top: '10px',
                bottom: '10px',
                left: '20px',
                width: '3px',
                backgroundColor: 'var(--color-primary-light)'
              }}
            />

            {verifiedMilestones.map((milestone, idx) => (
              <div
                key={milestone.id}
                style={{
                  position: 'relative',
                  marginBottom: 'var(--space-3xl)'
                }}
              >
                {/* Milestone Node */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-32px',
                    top: '4px',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-white)',
                    border: '4px solid var(--color-primary)',
                    boxShadow: 'var(--shadow-subtle)'
                  }}
                />

                <div
                  className="card"
                  style={{
                    marginLeft: 'var(--space-md)',
                    borderLeft: '4px solid var(--color-primary)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-xs)' }}>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary)', letterSpacing: '0.05em' }}>
                      {milestone.era}
                    </span>
                    <span className="status-pill status-pill-approved">
                      <CheckCircle2 size={12} />
                      <span>Verified Milestone</span>
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-sm)' }}>
                    {milestone.title}
                  </h3>

                  <p style={{ color: 'var(--color-text-main)', fontWeight: 500, fontSize: '1.05rem', lineHeight: 1.55, marginBottom: 'var(--space-sm)' }}>
                    {milestone.summary}
                  </p>

                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem', lineHeight: 1.55 }}>
                    {milestone.context}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Archival Review Notice Box */}
          <div
            style={{
              maxWidth: '860px',
              margin: 'var(--space-3xl) auto 0 auto',
              backgroundColor: 'var(--status-pending-bg)',
              border: '1px solid var(--status-pending-border)',
              borderRadius: 'var(--radius-card)',
              padding: 'var(--space-xl)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <AlertCircle size={22} color="var(--status-pending-text)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ color: 'var(--status-pending-text)', fontSize: '1.1rem', marginBottom: '6px' }}>
                  Editorial Verification Ledger: Archival Candidates Pending Review
                </h4>
                <p style={{ fontSize: '0.9375rem', color: '#78350F', lineHeight: 1.55, marginBottom: '12px' }}>
                  Historical records from earlier public profile documents (including early regional training and digitization projects) are catalogued in our internal ledger and held in pending review state until formally certified by company leadership.
                </p>
                <div style={{ fontSize: '0.8125rem', color: '#92400E', fontWeight: 600 }}>
                  Candidates on File: {pendingCandidates.length} archival milestone(s) preserved under strict editorial quarantine.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBand
        title="Ready to discuss your organization's requirements?"
        subtitle="Connect with our practice leaders to explore software, advisory, training, or manpower collaboration."
        primaryAction={{ label: 'Discuss Our Experience', href: '/contact' }}
        secondaryAction={{ label: 'Schedule a Consultation', href: '/schedule-consultation' }}
      />

      <style>{`
        @media (max-width: 640px) {
          .journey-timeline {
            padding-left: var(--space-xl) !important;
          }
        }
      `}</style>
    </div>
  );
}
