import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText, ShieldCheck, Mail, AlertTriangle,
  ArrowRight, CheckCircle2, Building
} from 'lucide-react';
import { usePageSeo } from '../lib/seo';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SectionHeading from '../components/ui/SectionHeading';
import CtaBand from '../components/ui/CtaBand';
import siteData from '../data/site.json';

export default function SubmitRfp() {
  usePageSeo({
    title: 'RFP & Tender Coordination Desk — Techno Horizon',
    description: 'Guidelines and direct institutional contact protocols for submitting public tenders, RFPs, and procurement documents to Techno Horizon.'
  });

  return (
    <div className="submit-rfp-page">
      <section className="section-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Submit RFP / Tender' }]} />

          <div style={{ maxWidth: '820px' }}>
            <span className="eyebrow eyebrow-red">Tender Coordination</span>
            <h1 style={{ marginBottom: 'var(--space-md)' }}>
              RFP & Tender Information Desk
            </h1>
            <p className="lead" style={{ marginBottom: 'var(--space-xl)' }}>
              Techno Horizon participates in institutional tenders, expressions of interest (EOIs), and public RFPs across custom software development, systems integration, BPR/DPR advisory, and specialized manpower.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href={`mailto:${siteData.contactEmail}?subject=${encodeURIComponent('[Tender / RFP Coordination] Submission Notice')}`}
                className="btn btn-primary btn-lg"
              >
                <Mail size={18} />
                <span>Submit Tender via Official Email</span>
              </a>
              <Link to="/contact" className="btn btn-outline btn-lg">
                <span>General Procurement Inquiry</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Informational & Guidance Section */}
      <section className="section section-white">
        <div className="container">
          {/* Institutional Security Notice */}
          <div
            style={{
              backgroundColor: 'var(--status-pending-bg)',
              border: '1px solid var(--status-pending-border)',
              borderRadius: 'var(--radius-card-lg)',
              padding: 'var(--space-2xl)',
              marginBottom: 'var(--space-3xl)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px'
            }}
          >
            <AlertTriangle size={26} color="var(--status-pending-text)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h3 style={{ color: 'var(--status-pending-text)', fontSize: '1.25rem', marginBottom: '8px' }}>
                Secure Document Handling Protocol (PRD Policy)
              </h3>
              <p style={{ fontSize: '0.9375rem', color: '#78350F', lineHeight: 1.6, marginBottom: '12px' }}>
                In accordance with corporate security rules and public procurement integrity, this portal maintains a static intake architecture. We strictly do not provide browser-based file upload forms without an authenticated enterprise backend with virus scanning, encrypted transit, and role-based custody logging.
              </p>
              <div style={{ fontSize: '0.875rem', color: '#92400E', fontWeight: 600 }}>
                Official Tender Submissions: Transmit official tender dossiers, RFP links, and scope matrices directly to <u>{siteData.contactEmail}</u>.
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.15fr 0.85fr',
              gap: 'var(--space-3xl)',
              alignItems: 'flex-start'
            }}
            className="rfp-info-grid"
          >
            {/* Left Column: Submission Guidelines */}
            <div>
              <span className="eyebrow">Tender Protocol</span>
              <h2 style={{ fontSize: '1.85rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-md)' }}>
                Information to Include with Your RFP Notice
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: 'var(--space-xl)' }}>
                To ensure your tender notification is instantly directed to the appropriate technical bid director, please include the following parameters in your correspondence:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  {
                    title: 'Tender / Reference Identifier',
                    desc: 'The official tender notice number, e-Procurement portal ID (e.g., GeM / State Portal), or EOI reference.'
                  },
                  {
                    title: 'Issuing Department / Entity',
                    desc: 'Full statutory name of the issuing government department, PSU, or corporate enterprise.'
                  },
                  {
                    title: 'Relevant Scope Domains',
                    desc: 'Specify whether the scope covers software development, systems integration, BPR/DPR advisory, training, or manpower solutions.'
                  },
                  {
                    title: 'Critical Deadlines',
                    desc: 'Pre-bid meeting date, technical query submission deadline, and final bid submission cutoff.'
                  },
                  {
                    title: 'Official Document Access / Links',
                    desc: 'Official portal link or attached public tender schedules for evaluation.'
                  }
                ].map((item, idx) => (
                  <div
                    key={item.title}
                    style={{
                      backgroundColor: 'var(--color-surface-ice)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-card)',
                      padding: 'var(--space-md) var(--space-lg)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px'
                    }}
                  >
                    <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 style={{ fontSize: '1.05rem', color: 'var(--color-primary-deep)', marginBottom: '2px' }}>
                        {item.title}
                      </h4>
                      <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', margin: 0 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Bid Desk Coordination */}
            <div>
              <div
                style={{
                  backgroundColor: 'var(--color-surface-navy)',
                  color: 'var(--color-white)',
                  borderRadius: 'var(--radius-card-lg)',
                  padding: 'var(--space-2xl)',
                  boxShadow: 'var(--shadow-md)',
                  marginBottom: 'var(--space-xl)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-md)' }}>
                  <Building size={22} color="var(--color-accent-red)" />
                  <h3 style={{ color: 'var(--color-white)', fontSize: '1.35rem' }}>
                    Institutional Bid Desk
                  </h3>
                </div>

                <p style={{ color: 'var(--color-text-inverse-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: 'var(--space-xl)' }}>
                  Our dedicated tendering desk monitors state procurement notifications and prepares compliant technical dossiers, qualification matrices, and financial schedules.
                </p>

                <div
                  style={{
                    backgroundColor: 'rgba(234, 243, 251, 0.08)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--space-md)',
                    border: '1px solid rgba(234, 243, 251, 0.15)',
                    marginBottom: 'var(--space-lg)'
                  }}
                >
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-primary-light)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px' }}>
                    Direct Tender Coordination Email
                  </div>
                  <a
                    href={`mailto:${siteData.contactEmail}`}
                    style={{
                      color: 'var(--color-white)',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <Mail size={16} color="var(--color-accent-red)" />
                    <span>{siteData.contactEmail}</span>
                  </a>
                </div>

                <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-inverse-secondary)', lineHeight: 1.5 }}>
                  <strong>Acknowledgment SLA:</strong> All formal tender queries and RFP documents are acknowledged within 24 hours by our lead bid manager.
                </div>
              </div>

              {/* Backend Integration Architecture Note */}
              <div
                style={{
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-card)',
                  padding: 'var(--space-lg)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <ShieldCheck size={18} color="var(--color-primary)" />
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-primary-deep)' }}>
                    Enterprise Server-Side Requirements
                  </span>
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  If your organization requires a direct API upload pipeline, our serverless intake backend supports TLS 1.3, cryptographic checksum validation, ClamAV scanning, and authenticated S3 storage. Contact us to configure your institutional endpoint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand
        title="Need pre-bid consultation or scope clarification?"
        subtitle="Connect with our institutional practice directors to discuss tender technical parameters."
        primaryAction={{ label: 'Schedule Consultation', href: '/schedule-consultation' }}
        secondaryAction={{ label: 'Request a Proposal', href: '/request-proposal' }}
      />

      <style>{`
        @media (max-width: 1024px) {
          .rfp-info-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
