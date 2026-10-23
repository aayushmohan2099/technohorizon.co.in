import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, AlertCircle, Mail } from 'lucide-react';
import { usePageSeo } from '../lib/seo';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import siteData from '../data/site.json';

export default function PrivacyPolicy() {
  usePageSeo({
    title: 'Privacy Policy Framework — Techno Horizon',
    description: 'Privacy policy framework governing data handling, institutional inquiries, and communications with Techno Horizon.'
  });

  return (
    <div className="privacy-page">
      <section className="section-hero">
        <div className="container container-narrow">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

          <span className="eyebrow eyebrow-red">Governance</span>
          <h1 style={{ marginBottom: 'var(--space-md)' }}>
            Privacy Policy Framework
          </h1>
          <p className="lead" style={{ marginBottom: 'var(--space-lg)' }}>
            Information practices governing communications, proposal inquiries, and institutional correspondence with Techno Horizon.
          </p>
          <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-tertiary)' }}>
            Last Updated: October 2026 • Legal Review Status: Provisional Framework Awaiting Final Counsel Ratification
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container container-narrow">
          {/* Legal Status Notice */}
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
                Provisional Policy Framework
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#78350F', margin: 0, lineHeight: 1.5 }}>
                This document articulates our data handling principles. Final binding statutory clauses remain subject to formal ratification by designated legal counsel. We do not make unsubstantiated regulatory compliance assertions prior to formal audit.
              </p>
            </div>
          </div>

          <article style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
            <section>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-sm)' }}>
                1. Information We Collect
              </h2>
              <p>
                Techno Horizon collects only information deliberately provided by authorized representatives of institutional clients, government departments, and commercial enterprises. This includes contact names, work email addresses, telephone numbers, organizational affiliations, and project scope summaries submitted through our proposal and consultation inquiry forms.
              </p>
              <p>
                <strong>No Consumer Accounts or Authentication:</strong> As an institutional services enterprise, our website operates without user accounts, login systems, or consumer tracking cookies. We do not store passwords, credit card numbers, or consumer payment instruments.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-sm)' }}>
                2. Use of Information
              </h2>
              <p>
                Information submitted through this portal is utilized solely for:
              </p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Evaluating project scopes, technical feasibility, and procurement requirements.</li>
                <li>Drafting formal proposals, Detailed Project Reports (DPR), and commercial estimates.</li>
                <li>Coordinating scheduling for expert scoping discussions and training workshops.</li>
                <li>Fulfilling statutory compliance requirements governing institutional procurement.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-sm)' }}>
                3. Data Security & Storage Standards
              </h2>
              <p>
                We enforce strict data protection protocols. Project briefs and correspondence are handled through secure mail infrastructure. Inquiries are routed only to the designated practice heads responsible for the requested technical domain. We do not sell, rent, or monetize client inquiry records under any circumstance.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-sm)' }}>
                4. Data Protection Inquiries & Rights
              </h2>
              <p>
                To inquire about data records, request deletion of an uncontracted proposal inquiry, or seek clarification on our information practices, please contact our administrative desk:
              </p>
              <div
                style={{
                  backgroundColor: 'var(--color-surface-ice)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-md) var(--space-lg)',
                  marginTop: 'var(--space-sm)'
                }}
              >
                <div style={{ fontWeight: 700, color: 'var(--color-primary-deep)' }}>
                  Techno Horizon Privacy Desk
                </div>
                <div>Official Email: <a href={`mailto:${siteData.contactEmail}`}>{siteData.contactEmail}</a></div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-tertiary)', marginTop: '4px' }}>
                  Entity Status: {siteData.legalNamePendingVerification}
                </div>
              </div>
            </section>
          </article>
        </div>
      </section>
    </div>
  );
}
