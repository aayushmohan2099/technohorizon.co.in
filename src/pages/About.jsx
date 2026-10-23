import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, ArrowRight, Building, Users, FileCheck } from 'lucide-react';
import { usePageSeo } from '../lib/seo';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SectionHeading from '../components/ui/SectionHeading';
import TrustRail from '../components/ui/TrustRail';
import CtaBand from '../components/ui/CtaBand';
import siteData from '../data/site.json';

export default function About() {
  usePageSeo({
    title: 'About Techno Horizon — Enterprise Services & Advisory',
    description: 'Learn about Techno Horizon: an integrated partner for enterprise software, business consultancy (BPR/DPR), workforce training, and manpower solutions.'
  });

  return (
    <div className="about-page">
      {/* Header Banner */}
      <section className="section-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'About' }]} />
          
          <div style={{ maxWidth: '820px' }}>
            <span className="eyebrow eyebrow-red">Company Profile</span>
            <h1 style={{ marginBottom: 'var(--space-md)' }}>
              Built around understanding the assignment — and seeing it through.
            </h1>
            <p className="lead" style={{ marginBottom: 'var(--space-xl)' }}>
              Techno Horizon is an Indian enterprise services company established to provide integrated technology execution, institutional business consultancy, large-scale workforce upskilling, and dedicated talent solutions.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/about/our-journey" className="btn btn-secondary">
                <span>View Our Journey & Evolution</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/approach" className="btn btn-outline">
                <span>Our Delivery Approach</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Client Rail */}
      <TrustRail />

      {/* Narrative & Operating Identity */}
      <section className="section section-white">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.15fr 0.85fr',
              gap: 'var(--space-3xl)',
              alignItems: 'center'
            }}
            className="about-split-grid"
          >
            <div>
              <span className="eyebrow">Our Mission</span>
              <h2 style={{ marginBottom: 'var(--space-md)' }}>
                Bridging the Divide Between Strategic Intent and Operational Reality
              </h2>
              <p style={{ marginBottom: 'var(--space-md)' }}>
                Large-scale organizational initiatives frequently struggle with execution. High-level policies and detailed project reports often fail to translate into usable software, while deployed digital systems often stumble due to poor frontline adoption or insufficient staffing.
              </p>
              <p style={{ marginBottom: 'var(--space-lg)' }}>
                Techno Horizon was organized specifically to resolve this friction. By uniting custom software engineering, business process re-engineering (BPR/DPR), frontline training cascades, and specialized manpower under one roof, we provide institutions with single-point execution capability.
              </p>

              <div
                style={{
                  backgroundColor: 'var(--color-surface-ice)',
                  borderLeft: '4px solid var(--color-primary)',
                  padding: 'var(--space-md) var(--space-lg)',
                  borderRadius: '0 var(--radius-md) var(--radius-md) 0'
                }}
              >
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-primary-deep)', marginBottom: '4px' }}>
                  Enterprise Position
                </div>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', margin: 0 }}>
                  We are not an off-the-shelf software vendor or self-service SaaS provider. We operate as an institutional delivery partner dedicated to bespoke development and procurement-aligned execution.
                </p>
              </div>
            </div>

            {/* Structured Facts Matrix */}
            <div
              style={{
                backgroundColor: 'var(--color-surface-navy)',
                color: 'var(--color-white)',
                borderRadius: 'var(--radius-card-lg)',
                padding: 'var(--space-2xl)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <h3 style={{ color: 'var(--color-white)', fontSize: '1.35rem', marginBottom: 'var(--space-lg)', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: 'var(--space-sm)' }}>
                Organizational Overview
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-inverse-secondary)', fontWeight: 600 }}>
                    Public-Facing Brand
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-white)' }}>
                    Techno Horizon
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-inverse-secondary)', fontWeight: 600 }}>
                    Core Service Disciplines
                  </div>
                  <div style={{ fontSize: '0.9375rem', color: 'var(--color-white)', marginTop: '2px' }}>
                    Software Development • BPR / DPR Advisory • Training & Change Management • Manpower Solutions
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-inverse-secondary)', fontWeight: 600 }}>
                    Target Customer Domains
                  </div>
                  <div style={{ fontSize: '0.9375rem', color: 'var(--color-white)', marginTop: '2px' }}>
                    Government Departments, PSUs, Statutory Boards, Private Enterprises & NGOs
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-inverse-secondary)', fontWeight: 600 }}>
                    Official Inquiries Channel
                  </div>
                  <div style={{ fontSize: '0.9375rem', color: 'var(--color-primary-light)', fontWeight: 600, marginTop: '2px' }}>
                    {siteData.contactEmail}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Intended Principles */}
      <section className="section section-ice">
        <div className="container">
          <SectionHeading
            eyebrow="Our Standard"
            title="Intended Operating Principles"
            lead="Guiding standards that govern every advisory assignment, software architecture review, and staffing engagement."
          />

          <div className="grid-3">
            <div className="card">
              <div style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>
                <FileCheck size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-xs)' }}>
                Procurement & Audit Rigor
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                Our documentation, DPRs, and project roadmaps are authored with institutional audit readiness in mind, adhering to government planning standards and transparent procurement norms.
              </p>
            </div>

            <div className="card">
              <div style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>
                <ShieldCheck size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-xs)' }}>
                Security & Data Integrity
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                We engineer systems with strict role-based access control (RBAC), encrypted data pipelines, comprehensive audit logging, and adherence to statutory privacy frameworks.
              </p>
            </div>

            <div className="card">
              <div style={{ color: 'var(--color-accent-red)', marginBottom: 'var(--space-sm)' }}>
                <Users size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-xs)' }}>
                Human-Centric Adoption
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                We recognize that digital platforms are only as effective as the frontline staff operating them. We invest heavily in localized simulation sandboxes and continuous change management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand
        title="Explore an Engagement with Techno Horizon"
        subtitle="Learn how our integrated software, consulting, and workforce teams can support your organization's goals."
        primaryAction={{ label: 'Request a Proposal', href: '/request-proposal' }}
        secondaryAction={{ label: 'Schedule Consultation', href: '/schedule-consultation' }}
      />

      <style>{`
        @media (max-width: 1024px) {
          .about-split-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
