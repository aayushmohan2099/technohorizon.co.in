import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, ArrowRight, Layers, FileText, Users } from 'lucide-react';
import { usePageSeo } from '../lib/seo';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SectionHeading from '../components/ui/SectionHeading';
import ApproachProcess from '../graphics/ApproachProcess';
import CtaBand from '../components/ui/CtaBand';

export default function Approach() {
  usePageSeo({
    title: 'Our Delivery Approach & Methodology — Techno Horizon',
    description: 'Structured thinking. Practical execution. Discover our 5-stage lifecycle for institutional software engineering, BPR/DPR advisory, and workforce enablement.'
  });

  return (
    <div className="approach-page">
      <section className="section-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Approach' }]} />

          <div style={{ maxWidth: '820px' }}>
            <span className="eyebrow eyebrow-red">Delivery Framework</span>
            <h1 style={{ marginBottom: 'var(--space-md)' }}>
              Structured thinking. Practical execution.
            </h1>
            <p className="lead" style={{ marginBottom: 'var(--space-xl)' }}>
              Transformations succeed when analytical rigor directly shapes software engineering and workforce enablement. Our delivery methodology ensures accountability from initial problem diagnosis to long-term operational governance.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/request-proposal" className="btn btn-primary">
                <span>Start a Project</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn btn-outline">
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Five-Stage Branching Process Diagram */}
      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Lifecycle Stages"
            title="The Five Delivery Phases"
            lead="A disciplined progression ensuring that requirements, blueprints, code, training, and governance advance in coordinated harmony."
          />

          <ApproachProcess />
        </div>
      </section>

      {/* Key Delivery Pillars */}
      <section className="section section-ice">
        <div className="container">
          <SectionHeading
            eyebrow="Governance Pillars"
            title="How We Maintain Quality & Compliance"
            lead="Methodological safeguards embedded into every institutional engagement."
          />

          <div className="grid-3">
            <div className="card">
              <div style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>
                <Users size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-xs)' }}>
                Stakeholder Alignment & Field Interviews
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                We avoid desktop assumptions. Our consultants conduct ground interviews with field officers, clerks, and system users to map undocumented workflow dependencies and operational friction.
              </p>
            </div>

            <div className="card">
              <div style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>
                <ShieldCheck size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-xs)' }}>
                Risk & Regulatory Awareness
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                Every deliverable—whether a Detailed Project Report or software database schema—undergoes rigorous review against statutory compliance mandates, audit rules, and security frameworks.
              </p>
            </div>

            <div className="card">
              <div style={{ color: 'var(--color-accent-red)', marginBottom: 'var(--space-sm)' }}>
                <Layers size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-xs)' }}>
                Cross-Disciplinary Coordination
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                Software engineers, process analysts, instructional designers, and talent recruiters maintain shared sprint reviews, eliminating the handoff delays typical of multi-vendor consortia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Map */}
      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Initiating Work"
            title="How an Engagement Typically Begins"
            lead="From initial exploratory discussion to formal contract milestones and kickoff."
          />

          <div
            style={{
              backgroundColor: 'var(--color-surface-ice)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-card-lg)',
              padding: 'var(--space-2xl)'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 'var(--space-xl)'
              }}
              className="engagement-steps-grid"
            >
              <div>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-primary)', display: 'block', marginBottom: '8px' }}>
                  Step 01
                </span>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--color-primary-deep)', marginBottom: '6px' }}>
                  Intake Consultation
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Review of objectives, institutional context, existing technical assets, and procurement timelines.
                </p>
              </div>

              <div>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-primary)', display: 'block', marginBottom: '8px' }}>
                  Step 02
                </span>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--color-primary-deep)', marginBottom: '6px' }}>
                  Technical Proposal
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Submission of scope specifications, work breakdown structure, team composition, and milestones.
                </p>
              </div>

              <div>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-primary)', display: 'block', marginBottom: '8px' }}>
                  Step 03
                </span>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--color-primary-deep)', marginBottom: '6px' }}>
                  Contracting & SLAs
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Mutual alignment on formal Service Level Agreements, IP terms, delivery schedules, and audit criteria.
                </p>
              </div>

              <div>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-accent-red)', display: 'block', marginBottom: '8px' }}>
                  Step 04
                </span>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--color-primary-deep)', marginBottom: '6px' }}>
                  Mobilization & Kickoff
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Immediate deployment of core engineering, advisory, or staffing resources with scheduled governance syncs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand
        title="Apply our delivery approach to your upcoming initiative"
        subtitle="Schedule an orientation discussion with our engineering and advisory leadership."
        primaryAction={{ label: 'Schedule Consultation', href: '/schedule-consultation' }}
        secondaryAction={{ label: 'Request a Proposal', href: '/request-proposal' }}
      />

      <style>{`
        @media (max-width: 900px) {
          .engagement-steps-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .engagement-steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
