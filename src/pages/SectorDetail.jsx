import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Landmark, Building2, CheckCircle2, ArrowRight,
  ShieldCheck, FileText, AlertCircle
} from 'lucide-react';
import { usePageSeo } from '../lib/seo';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SectionHeading from '../components/ui/SectionHeading';
import CtaBand from '../components/ui/CtaBand';
import sectorsData from '../data/sectors.json';
import servicesData from '../data/services.json';
import projectsData from '../data/projects.json';

export default function SectorDetail({ forcedSlug }) {
  const { slug } = useParams();
  const activeSlug = forcedSlug || slug;

  const sector = sectorsData.find(s => s.slug === activeSlug || s.id === activeSlug);

  if (!sector) {
    return <Navigate to="/sectors" replace />;
  }

  usePageSeo({
    title: `${sector.title} — Techno Horizon`,
    description: sector.summary
  });

  const relatedServices = servicesData.filter(
    s => sector.relatedServices && sector.relatedServices.includes(s.id)
  );

  const relatedProjects = projectsData.filter(
    p => p.published === true && (p.sector === 'Government' || p.sector === 'Citizen Services')
  );

  const isGov = sector.id === 'government-public-sector';

  return (
    <div className="sector-detail-page">
      {/* Sector Hero */}
      <section className="section-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Sectors', href: '/sectors' },
              { label: sector.title }
            ]}
          />

          <div style={{ maxWidth: '840px' }}>
            <span className="eyebrow eyebrow-red">Sector Focus</span>
            <h1 style={{ marginBottom: 'var(--space-md)' }}>
              {sector.headline}
            </h1>
            <p className="lead" style={{ marginBottom: 'var(--space-xl)' }}>
              {sector.summary}
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to={sector.cta.href} className="btn btn-primary btn-lg">
                <span>{sector.cta.label}</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-outline btn-lg">
                <span>Inquire for Your Agency</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Challenges & Solutions */}
      <section className="section section-white">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-3xl)'
            }}
            className="sector-split-grid"
          >
            {/* Operational Realities */}
            <div>
              <span className="eyebrow">Operating Realities</span>
              <h2 style={{ fontSize: '1.85rem', marginBottom: 'var(--space-md)' }}>
                Sector Challenges We Address
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-xl)' }}>
                Navigating complex regulatory environments requires understanding ground barriers before applying technology or staff.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {sector.challenges.map((ch, idx) => (
                  <div
                    key={ch}
                    style={{
                      backgroundColor: 'var(--color-surface-ice)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-card)',
                      padding: 'var(--space-md) var(--space-lg)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px'
                    }}
                  >
                    <span style={{ fontSize: '0.9375rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                      0{idx + 1}
                    </span>
                    <span style={{ fontSize: '0.9375rem', color: 'var(--color-text-main)', lineHeight: 1.5 }}>
                      {ch}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Targeted Solutions */}
            <div>
              <span className="eyebrow">Targeted Solutions</span>
              <h2 style={{ fontSize: '1.85rem', marginBottom: 'var(--space-md)' }}>
                How Techno Horizon Supports Delivery
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-xl)' }}>
                Integrated service packages shaped around specific sectoral procurement and execution requirements.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {sector.solutions.map((sol) => (
                  <div
                    key={sol.title}
                    style={{
                      backgroundColor: 'var(--color-white)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-card)',
                      padding: 'var(--space-lg)',
                      borderLeft: '4px solid var(--color-primary)'
                    }}
                  >
                    <h4 style={{ fontSize: '1.15rem', color: 'var(--color-primary-deep)', marginBottom: '6px' }}>
                      {sol.title}
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                      {sol.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procurement Considerations */}
      <section className="section section-ice">
        <div className="container">
          <SectionHeading
            eyebrow="Compliance & Procurement"
            title="Institutional Engagement Considerations"
            lead="How our engagement models integrate with public procurement guidelines and corporate governance."
          />

          <div className="grid-3">
            {sector.procurementConsiderations.map((item, idx) => (
              <div key={item} className="card">
                <div style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>
                  <ShieldCheck size={26} />
                </div>
                <h4 style={{ fontSize: '1.15rem', marginBottom: 'var(--space-xs)' }}>
                  Framework Checkpoint 0{idx + 1}
                </h4>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          {isGov && (
            <div
              style={{
                marginTop: 'var(--space-2xl)',
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-card)',
                padding: 'var(--space-xl)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <div>
                <h4 style={{ color: 'var(--color-primary-deep)', marginBottom: '4px' }}>
                  Have an active tender or RFP document?
                </h4>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem', margin: 0 }}>
                  Review our tender submission guidelines and institutional contact protocols.
                </p>
              </div>
              <Link to="/submit-rfp" className="btn btn-secondary">
                <span>RFP / Tender Coordination Info</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Relevant Services */}
      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Capabilities in Action"
            title="Relevant Service Disciplines"
            lead="Explore the core disciplines deployed for this sector."
          />

          <div className="grid-4">
            {relatedServices.map((srv) => (
              <div key={srv.id} className="card" style={{ justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: 'var(--space-xs)' }}>
                    {srv.title}
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: 'var(--space-md)' }}>
                    {srv.summary}
                  </p>
                </div>
                <div>
                  <Link to={`/services/${srv.slug}`} className="btn btn-outline btn-sm">
                    <span>Explore Service</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand
        title={`Discuss a Project in ${sector.title}`}
        subtitle="Contact our sector specialists to explore feasibility, timelines, and engagement frameworks."
        primaryAction={{ label: sector.cta.label, href: sector.cta.href }}
        secondaryAction={{ label: 'Schedule Consultation', href: '/schedule-consultation' }}
      />

      <style>{`
        @media (max-width: 1024px) {
          .sector-split-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
