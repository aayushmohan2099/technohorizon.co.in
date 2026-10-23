import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Clock, Tag } from 'lucide-react';
import { usePageSeo } from '../lib/seo';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SectionHeading from '../components/ui/SectionHeading';
import CtaBand from '../components/ui/CtaBand';
import insightsData from '../data/insights.json';

export default function Insights() {
  usePageSeo({
    title: 'Insights & Perspectives — Techno Horizon',
    description: 'Practical analysis and architectural viewpoints on institutional modernization, process re-engineering, and workforce change management.'
  });

  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const publishedInsights = insightsData.filter(i => i.published === true);

  const categories = ['ALL', 'Technology Architecture', 'Institutional Advisory', 'Workforce & Change Management'];

  const filteredInsights = selectedCategory === 'ALL'
    ? publishedInsights
    : publishedInsights.filter(i => i.category === selectedCategory);

  return (
    <div className="insights-page">
      <section className="section-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Insights' }]} />

          <div style={{ maxWidth: '820px' }}>
            <span className="eyebrow eyebrow-red">Editorial Perspectives</span>
            <h1 style={{ marginBottom: 'var(--space-md)' }}>
              Practitioner Perspectives on Institutional Transformation
            </h1>
            <p className="lead" style={{ marginBottom: 'var(--space-xl)' }}>
              Analysis and frameworks drawn from real-world software engineering, business process re-engineering, and workforce upskilling assignments.
            </p>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`btn btn-sm ${selectedCategory === cat ? 'btn-secondary' : 'btn-outline'}`}
                >
                  {cat === 'ALL' ? 'All Perspectives' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="section section-white">
        <div className="container">
          <div className="grid-3" style={{ marginBottom: 'var(--space-4xl)' }}>
            {filteredInsights.map((insight) => (
              <div
                key={insight.id}
                className="card"
                style={{
                  height: '100%',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-sm)' }}>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: 'var(--color-primary)',
                        backgroundColor: 'var(--color-primary-light)',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-pill)'
                      }}
                    >
                      {insight.category}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={12} />
                      <span>{insight.readingTime}</span>
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-sm)', lineHeight: 1.25 }}>
                    {insight.title}
                  </h3>

                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem', lineHeight: 1.55, marginBottom: 'var(--space-lg)' }}>
                    {insight.excerpt}
                  </p>

                  {insight.takeaways && (
                    <div
                      style={{
                        backgroundColor: 'var(--color-surface-ice)',
                        borderRadius: 'var(--radius-md)',
                        padding: '12px 14px',
                        marginBottom: 'var(--space-md)'
                      }}
                    >
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary-deep)', marginBottom: '4px' }}>
                        Key Takeaway:
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-main)', lineHeight: 1.4 }}>
                        {insight.takeaways[0]}
                      </div>
                    </div>
                  )}
                </div>

                <div style={{ paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-border-subtle)' }}>
                  <Link
                    to={`/insights/${insight.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontWeight: 600,
                      fontSize: '0.9375rem',
                      color: 'var(--color-primary)'
                    }}
                  >
                    <span>Read Full Perspective</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand
        title="Looking for tailored advisory on your transformation?"
        subtitle="Schedule a consultation with our technology and business practice leaders."
        primaryAction={{ label: 'Schedule Consultation', href: '/schedule-consultation' }}
        secondaryAction={{ label: 'Request a Proposal', href: '/request-proposal' }}
      />
    </div>
  );
}
