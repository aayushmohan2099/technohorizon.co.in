import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, AlertCircle, ShieldCheck } from 'lucide-react';
import { usePageSeo } from '../lib/seo';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import siteData from '../data/site.json';

export default function Terms() {
  usePageSeo({
    title: 'Terms of Engagement Framework — Techno Horizon',
    description: 'Terms governing public website usage, institutional proposals, and preliminary scoping with Techno Horizon.'
  });

  return (
    <div className="terms-page">
      <section className="section-hero">
        <div className="container container-narrow">
          <Breadcrumbs items={[{ label: 'Terms of Engagement' }]} />

          <span className="eyebrow eyebrow-red">Governance</span>
          <h1 style={{ marginBottom: 'var(--space-md)' }}>
            Terms of Engagement Framework
          </h1>
          <p className="lead" style={{ marginBottom: 'var(--space-lg)' }}>
            Terms and principles governing portal interaction, informational content, and preliminary institutional scoping.
          </p>
          <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-tertiary)' }}>
            Last Updated: October 2026 • Legal Review Status: Provisional Framework Awaiting Final Counsel Ratification
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container container-narrow">
          {/* Status Callout */}
          <div
            style={{
              backgroundColor: 'var(--status-pending-bg)',
              border: '1px solid var(--status-pending-border)',
              borderRadius: 'var(--radius-card)',
              padding: 'var(--space-lg) var(--space-xl)',
              marginBottom: 'var(--space-2xl)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px'
            }}
          >
            <AlertCircle size={20} color="var(--status-pending-text)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 style={{ color: 'var(--status-pending-text)', fontSize: '1rem', marginBottom: '4px' }}>
                Institutional Scope Notice
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#78350F', margin: 0, lineHeight: 1.5 }}>
                The contents of this portal provide informational overviews of Techno Horizon's service capabilities. Formal contractual obligations, deliverables, service level agreements (SLAs), and commercial commitments arise solely through mutually executed institutional contracts or tender awards.
              </p>
            </div>
          </div>

          <article style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
            <section>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-sm)' }}>
                1. Nature of Services
              </h2>
              <p>
                Techno Horizon provides enterprise software engineering, business process re-engineering (BPR), detailed project report (DPR) formulation, institutional training, and manpower solutions. We are an enterprise services partner and do not sell self-service SaaS software, consumer packages, or off-the-shelf subscriptions.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-sm)' }}>
                2. Intellectual Property & Brand Marks
              </h2>
              <p>
                All proprietary methodologies, original vector illustrations, architectural diagrams, and textual content published on this portal are the intellectual property of Techno Horizon. Third-party statutory logos, client marks, and department emblems referenced on this site belong strictly to their respective owners and are displayed solely as factual reference candidates in accordance with historical project materials.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-sm)' }}>
                3. Consultation Requests & Scoping
              </h2>
              <p>
                Submitting an inquiry through our proposal or consultation forms constitutes a preliminary scoping request and does not form a binding contract for services or guarantee faculty availability. Official commitments commence only upon formal contract execution or tender award.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-sm)' }}>
                4. Governing Law & Inquiries
              </h2>
              <p>
                Any preliminary inquiries regarding our terms should be directed to our corporate coordination desk at <a href={`mailto:${siteData.contactEmail}`}>{siteData.contactEmail}</a>.
              </p>
              <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-tertiary)', marginTop: '8px' }}>
                Corporate Entity: {siteData.legalNamePendingVerification}
              </div>
            </section>
          </article>
        </div>
      </section>
    </div>
  );
}
