import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, ArrowRight, CheckCircle2, BookOpen, Share2 } from 'lucide-react';
import { usePageSeo } from '../lib/seo';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SectionHeading from '../components/ui/SectionHeading';
import CtaBand from '../components/ui/CtaBand';
import insightsData from '../data/insights.json';

export default function InsightDetail() {
  const { slug } = useParams();
  const insight = insightsData.find(i => i.slug === slug);

  if (!insight) {
    return <Navigate to="/insights" replace />;
  }

  usePageSeo({
    title: `${insight.title} — Techno Horizon Perspectives`,
    description: insight.excerpt
  });

  const otherInsights = insightsData.filter(i => i.published === true && i.slug !== insight.slug).slice(0, 2);

  return (
    <div className="insight-detail-page">
      <section className="section-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Insights', href: '/insights' },
              { label: insight.title }
            ]}
          />

          <div style={{ maxWidth: '840px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
              <span className="eyebrow eyebrow-red">{insight.category}</span>
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={14} />
                <span>{insight.readingTime}</span>
              </span>
            </div>

            <h1 style={{ marginBottom: 'var(--space-md)' }}>
              {insight.title}
            </h1>

            <p className="lead" style={{ marginBottom: 'var(--space-xl)' }}>
              {insight.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content Layout */}
      <section className="section section-white">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) 300px',
              gap: 'var(--space-3xl)',
              alignItems: 'flex-start'
            }}
            className="article-layout-grid"
          >
            {/* Main Text Content */}
            <article style={{ maxWidth: '720px' }}>
              {/* Executive Takeaways Box */}
              {insight.takeaways && insight.takeaways.length > 0 && (
                <div
                  style={{
                    backgroundColor: 'var(--color-surface-ice)',
                    borderLeft: '4px solid var(--color-primary)',
                    borderRadius: '0 var(--radius-card) var(--radius-card) 0',
                    padding: 'var(--space-xl)',
                    marginBottom: 'var(--space-2xl)'
                  }}
                >
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-sm)' }}>
                    Executive Summary & Key Takeaways
                  </h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {insight.takeaways.map((takeaway) => (
                      <li key={takeaway} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9375rem', color: 'var(--color-text-main)' }}>
                        <CheckCircle2 size={16} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Body Sections */}
              {insight.sections && insight.sections.map((sec, idx) => (
                <section key={sec.heading} id={`sec-${idx}`} style={{ marginBottom: 'var(--space-2xl)' }}>
                  <h2 style={{ fontSize: '1.65rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-md)' }}>
                    {sec.heading}
                  </h2>
                  <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-secondary)', lineHeight: 1.75, marginBottom: 'var(--space-md)' }}>
                    {sec.body}
                  </p>
                </section>
              ))}

              <div
                style={{
                  borderTop: '1px solid var(--color-border)',
                  paddingTop: 'var(--space-xl)',
                  marginTop: 'var(--space-3xl)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '14px'
                }}
              >
                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                  Published under Techno Horizon Enterprise Practice Insights
                </div>
                <Link to="/insights" className="btn btn-outline btn-sm">
                  <span>← Back to All Perspectives</span>
                </Link>
              </div>
            </article>

            {/* Desktop Sidebar: Table of Contents & Contact */}
            <aside
              style={{
                position: 'sticky',
                top: '96px',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-xl)'
              }}
              className="article-sidebar"
            >
              {/* Table of Contents */}
              {insight.sections && (
                <div
                  style={{
                    backgroundColor: 'var(--color-surface-ice)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-card)',
                    padding: 'var(--space-lg)'
                  }}
                >
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '12px' }}>
                    Contents
                  </div>
                  <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {insight.sections.map((sec, idx) => (
                      <a
                        key={sec.heading}
                        href={`#sec-${idx}`}
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--color-text-secondary)',
                          lineHeight: 1.4,
                          textDecoration: 'none'
                        }}
                        className="toc-link"
                      >
                        {sec.heading}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Consultation Card */}
              <div
                style={{
                  backgroundColor: 'var(--color-surface-navy)',
                  color: 'var(--color-white)',
                  borderRadius: 'var(--radius-card)',
                  padding: 'var(--space-lg)'
                }}
              >
                <h4 style={{ color: 'var(--color-white)', fontSize: '1.1rem', marginBottom: '8px' }}>
                  Discuss this topic with our team
                </h4>
                <p style={{ color: 'var(--color-text-inverse-secondary)', fontSize: '0.8125rem', lineHeight: 1.5, marginBottom: 'var(--space-md)' }}>
                  Speak directly with the architects and consultants who lead our institutional assignments.
                </p>
                <Link
                  to="/schedule-consultation"
                  className="btn btn-primary btn-sm"
                  style={{ width: '100%' }}
                >
                  <span>Request Consultation</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {otherInsights.length > 0 && (
        <section className="section section-ice">
          <div className="container">
            <SectionHeading
              eyebrow="Related Reading"
              title="More Perspectives"
              lead="Explore additional analysis on institutional modernization."
            />

            <div className="grid-2">
              {otherInsights.map((other) => (
                <div key={other.id} className="card" style={{ justifyContent: 'space-between' }}>
                  <div>
                    <span className="eyebrow" style={{ marginBottom: 'var(--space-xs)' }}>{other.category}</span>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-sm)' }}>
                      {other.title}
                    </h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem', lineHeight: 1.55 }}>
                      {other.excerpt}
                    </p>
                  </div>
                  <div style={{ marginTop: 'var(--space-md)' }}>
                    <Link to={`/insights/${other.slug}`} className="btn btn-outline btn-sm">
                      <span>Read Perspective</span>
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
        title="Explore how Techno Horizon can support your organization"
        subtitle="Contact our practice leaders to discuss custom software development, BPR advisory, or workforce solutions."
        primaryAction={{ label: 'Request a Proposal', href: '/request-proposal' }}
        secondaryAction={{ label: 'Schedule Consultation', href: '/schedule-consultation' }}
      />

      <style>{`
        .toc-link:hover {
          color: var(--color-primary) !important;
          text-decoration: underline !important;
        }
        @media (max-width: 900px) {
          .article-layout-grid {
            grid-template-columns: 1fr !important;
          }
          .article-sidebar {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
