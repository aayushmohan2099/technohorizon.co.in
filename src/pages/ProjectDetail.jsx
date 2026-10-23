import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  CheckCircle2, ArrowRight, ShieldCheck,
  Calendar, Layers, Building, FileText
} from 'lucide-react';
import { usePageSeo } from '../lib/seo';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SectionHeading from '../components/ui/SectionHeading';
import CtaBand from '../components/ui/CtaBand';
import projectsData from '../data/projects.json';
import clientsData from '../data/clients.json';
import servicesData from '../data/services.json';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  usePageSeo({
    title: `${project.title} — Case Study | Techno Horizon`,
    description: project.summary
  });

  const client = project.clientId ? clientsData.find(c => c.id === project.clientId) : null;
  const relatedServices = servicesData.filter(s => project.serviceIds && project.serviceIds.includes(s.id));
  const otherProjects = projectsData.filter(p => p.published === true && p.slug !== project.slug).slice(0, 2);

  return (
    <div className="project-detail-page">
      {/* Hero */}
      <section className="section-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Projects', href: '/projects' },
              { label: project.title }
            ]}
          />

          <div style={{ maxWidth: '880px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
              <span className="eyebrow eyebrow-red">{project.sector}</span>
              <span className="status-pill status-pill-approved">
                <CheckCircle2 size={12} />
                <span>Verified Case Record</span>
              </span>
              {project.year && (
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
                  Completion Year: {project.year}
                </span>
              )}
            </div>

            <h1 style={{ marginBottom: 'var(--space-md)' }}>
              {project.title}
            </h1>

            <p className="lead" style={{ marginBottom: 'var(--space-xl)' }}>
              {project.summary}
            </p>

            {/* Reference Client Box */}
            {client && (
              <div
                style={{
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-card)',
                  padding: 'var(--space-md) var(--space-lg)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '16px',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                {client.logoPath && (
                  <img
                    src={client.logoPath}
                    alt={client.name}
                    style={{
                      maxHeight: '36px',
                      maxWidth: '100px',
                      objectFit: 'contain'
                    }}
                  />
                )}
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-tertiary)', fontWeight: 700 }}>
                    Institutional Reference
                  </div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-primary-deep)' }}>
                    {client.officialFullName || client.name}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Narrative: Context, Challenge, Scope */}
      <section className="section section-white">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: 'var(--space-3xl)',
              alignItems: 'flex-start'
            }}
            className="project-body-grid"
          >
            {/* Left Column: Context, Challenge, Approach */}
            <div>
              {project.context && (
                <div style={{ marginBottom: 'var(--space-2xl)' }}>
                  <h2 style={{ fontSize: '1.6rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-sm)' }}>
                    Engagement Context
                  </h2>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.65 }}>
                    {project.context}
                  </p>
                </div>
              )}

              {project.challenge && (
                <div style={{ marginBottom: 'var(--space-2xl)' }}>
                  <h2 style={{ fontSize: '1.6rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-sm)' }}>
                    The Core Challenge
                  </h2>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.65 }}>
                    {project.challenge}
                  </p>
                </div>
              )}

              {project.approach && (
                <div style={{ marginBottom: 'var(--space-2xl)' }}>
                  <h2 style={{ fontSize: '1.6rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-sm)' }}>
                    Techno Horizon's Execution Approach
                  </h2>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.65 }}>
                    {project.approach}
                  </p>
                </div>
              )}

              {project.scope && project.scope.length > 0 && (
                <div style={{ marginBottom: 'var(--space-2xl)' }}>
                  <h2 style={{ fontSize: '1.6rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-sm)' }}>
                    Scope of Work
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {project.scope.map((item) => (
                      <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '1rem', color: 'var(--color-text-main)' }}>
                        <CheckCircle2 size={18} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.outcomes && project.outcomes.length > 0 && (
                <div style={{ marginBottom: 'var(--space-2xl)' }}>
                  <h2 style={{ fontSize: '1.6rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-sm)' }}>
                    Operational Outcomes Achieved
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {project.outcomes.map((item) => (
                      <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '1rem', color: 'var(--color-text-main)' }}>
                        <CheckCircle2 size={18} color="var(--color-accent-red)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Deliverables & Tech Matrix */}
            <div>
              {/* Deliverables Card */}
              {project.deliverables && project.deliverables.length > 0 && (
                <div
                  style={{
                    backgroundColor: 'var(--color-surface-ice)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-card-lg)',
                    padding: 'var(--space-xl)',
                    marginBottom: 'var(--space-xl)'
                  }}
                >
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-md)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FileText size={20} color="var(--color-primary)" />
                    <span>Deliverable Artifacts</span>
                  </h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {project.deliverables.map((deliv) => (
                      <li key={deliv} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.875rem', color: 'var(--color-text-main)' }}>
                        <CheckCircle2 size={14} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies Card */}
              {project.technologies && project.technologies.length > 0 && (
                <div
                  style={{
                    backgroundColor: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-card-lg)',
                    padding: 'var(--space-xl)',
                    marginBottom: 'var(--space-xl)'
                  }}
                >
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-md)' }}>
                    Technologies & Standards Deployed
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          backgroundColor: 'var(--color-primary-light)',
                          color: 'var(--color-primary)',
                          padding: '6px 12px',
                          borderRadius: 'var(--radius-pill)',
                          fontSize: '0.8125rem',
                          fontWeight: 600
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div
                  style={{
                    backgroundColor: 'var(--color-surface-navy)',
                    color: 'var(--color-white)',
                    borderRadius: 'var(--radius-card-lg)',
                    padding: 'var(--space-xl)'
                  }}
                >
                  <h3 style={{ color: 'var(--color-white)', fontSize: '1.25rem', marginBottom: 'var(--space-md)' }}>
                    Related Service Disciplines
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {relatedServices.map((srv) => (
                      <Link
                        key={srv.id}
                        to={`/services/${srv.slug}`}
                        style={{
                          color: 'var(--color-primary-light)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          fontSize: '0.9375rem',
                          fontWeight: 600,
                          textDecoration: 'none'
                        }}
                      >
                        <span>{srv.title}</span>
                        <ArrowRight size={14} />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section className="section section-ice">
          <div className="container">
            <SectionHeading
              eyebrow="More Work"
              title="Explore Other Case Studies"
              lead="Review additional verified institutional assignments."
            />

            <div className="grid-2">
              {otherProjects.map((p) => (
                <div key={p.id} className="card" style={{ justifyContent: 'space-between' }}>
                  <div>
                    <span className="eyebrow" style={{ marginBottom: 'var(--space-xs)' }}>{p.sector}</span>
                    <h3 style={{ fontSize: '1.35rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-sm)' }}>
                      {p.title}
                    </h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem', lineHeight: 1.55 }}>
                      {p.summary}
                    </p>
                  </div>
                  <div style={{ marginTop: 'var(--space-md)' }}>
                    <Link to={`/projects/${p.slug}`} className="btn btn-outline btn-sm">
                      <span>Read Case Study</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Band */}
      <CtaBand
        title="Discuss a Similar Project for Your Organization"
        subtitle="Connect with our practice leads to examine how similar architectural or advisory solutions can be adapted to your requirements."
        primaryAction={{ label: 'Discuss This Case Study', href: `/schedule-consultation?project=${project.slug}` }}
        secondaryAction={{ label: 'Request a Proposal', href: '/request-proposal' }}
      />

      <style>{`
        @media (max-width: 1024px) {
          .project-body-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
