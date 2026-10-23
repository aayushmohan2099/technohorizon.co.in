import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  CheckCircle2, ArrowRight, FileText,
  Calendar, HelpCircle, ShieldCheck
} from 'lucide-react';
import { usePageSeo } from '../lib/seo';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SectionHeading from '../components/ui/SectionHeading';
import CtaBand from '../components/ui/CtaBand';
import SoftwareFlow from '../graphics/SoftwareFlow';
import AdvisoryWorkflow from '../graphics/AdvisoryWorkflow';
import LearningLadder from '../graphics/LearningLadder';
import TalentPipeline from '../graphics/TalentPipeline';
import servicesData from '../data/services.json';
import projectsData from '../data/projects.json';

const graphicMap = {
  SoftwareFlow,
  AdvisoryWorkflow,
  LearningLadder,
  TalentPipeline
};

export default function ServiceDetail({ forcedSlug }) {
  const { slug } = useParams();
  const activeSlug = forcedSlug || slug;

  const service = servicesData.find(s => s.slug === activeSlug || s.id === activeSlug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  usePageSeo({
    title: `${service.title} — Techno Horizon`,
    description: service.summary
  });

  const GraphicComponent = graphicMap[service.heroGraphic] || SoftwareFlow;
  const relatedProjects = projectsData.filter(
    p => p.published === true && p.serviceIds && p.serviceIds.includes(service.id)
  );

  return (
    <div className="service-detail-page">
      {/* Service Hero */}
      <section className="section-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: service.shortTitle }
            ]}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 0.9fr',
              gap: 'var(--space-3xl)',
              alignItems: 'center'
            }}
            className="service-hero-grid"
          >
            <div>
              <span className="eyebrow eyebrow-red">{service.shortTitle}</span>
              <h1 style={{ marginBottom: 'var(--space-md)' }}>
                {service.headline}
              </h1>
              <p className="lead" style={{ marginBottom: 'var(--space-xl)' }}>
                {service.summary}
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to={service.primaryCta.href} className="btn btn-primary btn-lg">
                  <span>{service.primaryCta.label}</span>
                  <ArrowRight size={18} />
                </Link>
                {service.secondaryCta && (
                  <Link to={service.secondaryCta.href} className="btn btn-outline btn-lg">
                    <span>{service.secondaryCta.label}</span>
                  </Link>
                )}
              </div>
            </div>

            {/* Custom SVG Graphic */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <GraphicComponent />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Technical Scope"
            title="Specialized Capabilities"
            lead="Detailed functional specializations engineered to meet high institutional standards and operational complexity."
          />

          <div className="grid-3">
            {service.capabilities.map((cap) => (
              <div key={cap.title} className="card" style={{ height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-sm)' }}>
                  <CheckCircle2 size={18} color="var(--color-primary)" />
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-deep)' }}>
                    {cap.title}
                  </h3>
                </div>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Deliverables Grid */}
      <section className="section section-ice">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: 'var(--space-3xl)',
              alignItems: 'flex-start'
            }}
            className="service-process-grid"
          >
            {/* Process Stages */}
            <div>
              <span className="eyebrow">Lifecycle</span>
              <h2 style={{ marginBottom: 'var(--space-md)' }}>
                Engagement & Delivery Stages
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-xl)' }}>
                Disciplined step-by-step methodology ensuring complete transparency and compliance at every handoff.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {service.processStages.map((stage) => (
                  <div
                    key={stage.step}
                    style={{
                      backgroundColor: 'var(--color-white)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-card)',
                      padding: 'var(--space-lg)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        color: 'var(--color-primary)',
                        fontFamily: 'var(--font-heading)',
                        minWidth: '32px'
                      }}
                    >
                      {stage.step}
                    </span>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary-deep)', marginBottom: '4px' }}>
                        {stage.name}
                      </h4>
                      <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', margin: 0 }}>
                        {stage.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typical Deliverables Panel */}
            <div
              style={{
                backgroundColor: 'var(--color-surface-navy)',
                color: 'var(--color-white)',
                borderRadius: 'var(--radius-card-lg)',
                padding: 'var(--space-2xl)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-md)' }}>
                <FileText size={20} color="var(--color-accent-red)" />
                <h3 style={{ color: 'var(--color-white)', fontSize: '1.35rem' }}>
                  Typical Deliverables
                </h3>
              </div>
              <p style={{ color: 'var(--color-text-inverse-secondary)', fontSize: '0.9375rem', marginBottom: 'var(--space-lg)' }}>
                Every engagement produces tangible, documented assets that remain the property of the client organization.
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {service.deliverables.map((deliv) => (
                  <li key={deliv} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.875rem', color: 'var(--color-white)' }}>
                    <CheckCircle2 size={16} color="var(--color-primary-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 'var(--space-2xl)', paddingTop: 'var(--space-lg)', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-inverse-secondary)', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Procurement Readiness
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-white)' }}>
                  Deliverables adhere to institutional SLA milestones and public audit criteria.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <section className="section section-white">
          <div className="container">
            <SectionHeading
              eyebrow="Demonstrated Capability"
              title="Related Project Engagements"
              lead="Review verified case studies demonstrating our execution in this discipline."
            />

            <div className="grid-2">
              {relatedProjects.map((project) => (
                <div key={project.id} className="card" style={{ justifyContent: 'space-between' }}>
                  <div>
                    <span className="eyebrow" style={{ marginBottom: 'var(--space-xs)' }}>{project.sector}</span>
                    <h3 style={{ fontSize: '1.35rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-sm)' }}>
                      {project.title}
                    </h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem', lineHeight: 1.55, marginBottom: 'var(--space-md)' }}>
                      {project.summary}
                    </p>
                  </div>
                  <div>
                    <Link to={`/projects/${project.slug}`} className="btn btn-outline btn-sm">
                      <span>View Case Study</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Domain FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="section section-ice">
          <div className="container">
            <SectionHeading
              eyebrow="Common Questions"
              title="Frequently Asked Questions"
              lead="Key considerations regarding our approach, compliance readiness, and engagement models."
            />

            <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {service.faqs.map((faq) => (
                <div
                  key={faq.q}
                  style={{
                    backgroundColor: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-card)',
                    padding: 'var(--space-xl)'
                  }}
                >
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-xs)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <HelpCircle size={18} color="var(--color-primary)" />
                    <span>{faq.q}</span>
                  </h4>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, margin: 0, paddingLeft: '26px' }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Band */}
      <CtaBand
        title={`Initiate a Discussion on ${service.shortTitle}`}
        subtitle="Contact our practice directors to discuss requirements, project timelines, and technical feasibility."
        primaryAction={{ label: service.primaryCta.label, href: service.primaryCta.href }}
        secondaryAction={{ label: 'Request a Proposal', href: '/request-proposal' }}
      />

      <style>{`
        @media (max-width: 1024px) {
          .service-hero-grid,
          .service-process-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
