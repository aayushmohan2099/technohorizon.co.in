import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Eye, Keyboard, Sparkles, Mail } from 'lucide-react';
import { usePageSeo } from '../lib/seo';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import siteData from '../data/site.json';

export default function Accessibility() {
  usePageSeo({
    title: 'Accessibility Statement — Techno Horizon',
    description: 'Our commitment to digital accessibility, inclusive design practices, and WCAG 2.1 AA implementation targets.'
  });

  return (
    <div className="accessibility-page">
      <section className="section-hero">
        <div className="container container-narrow">
          <Breadcrumbs items={[{ label: 'Accessibility Statement' }]} />

          <span className="eyebrow eyebrow-red">Inclusive Design</span>
          <h1 style={{ marginBottom: 'var(--space-md)' }}>
            Digital Accessibility Statement
          </h1>
          <p className="lead" style={{ marginBottom: 'var(--space-lg)' }}>
            Techno Horizon is committed to ensuring our digital experiences are accessible to all users, including procurement officers, public servants, and citizens using assistive technologies.
          </p>
          <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-tertiary)' }}>
            Standard Target: WCAG 2.1 Level AA Implementation Baseline • Continuous Audit in Progress
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container container-narrow">
          <article style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
            
            <section>
              <h2 style={{ fontSize: '1.45rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-sm)' }}>
                Our Design & Engineering Standards
              </h2>
              <p>
                As an enterprise engineering partner serving public sector departments and large institutions, we design all digital platforms with accessibility as an architectural foundation rather than an afterthought. We target conformance with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.45rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-md)' }}>
                Technical Measures Implemented
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)' }} className="access-features-grid">
                <div style={{ backgroundColor: 'var(--color-surface-ice)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-card)', padding: 'var(--space-lg)' }}>
                  <div style={{ color: 'var(--color-primary)', marginBottom: '8px' }}>
                    <Keyboard size={24} />
                  </div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary-deep)', marginBottom: '4px' }}>
                    Keyboard Accessibility
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', margin: 0 }}>
                    All interactive elements, forms, dropdowns, and tabs are fully operable via standard keyboard controls, with visible high-contrast focus rings.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--color-surface-ice)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-card)', padding: 'var(--space-lg)' }}>
                  <div style={{ color: 'var(--color-primary)', marginBottom: '8px' }}>
                    <Eye size={24} />
                  </div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary-deep)', marginBottom: '4px' }}>
                    Contrast Ratios & Typography
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', margin: 0 }}>
                    Text colors adhere to strict contrast ratios (exceeding 4.5:1 for body and 3:1 for large headers) against light and navy backgrounds.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--color-surface-ice)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-card)', padding: 'var(--space-lg)' }}>
                  <div style={{ color: 'var(--color-primary)', marginBottom: '8px' }}>
                    <Sparkles size={24} />
                  </div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary-deep)', marginBottom: '4px' }}>
                    Reduced Motion Support
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', margin: 0 }}>
                    Our design system honors the <code>prefers-reduced-motion</code> operating system setting, replacing fluid animations with static diagram equivalents.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--color-surface-ice)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-card)', padding: 'var(--space-lg)' }}>
                  <div style={{ color: 'var(--color-accent-red)', marginBottom: '8px' }}>
                    <ShieldCheck size={24} />
                  </div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary-deep)', marginBottom: '4px' }}>
                    Touch Targets & Responsive Scaling
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', margin: 0 }}>
                    Touch targets meet or exceed 44×44 px dimensions. Content scales smoothly without horizontal clipping or loss of functionality at 200% zoom.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 style={{ fontSize: '1.45rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-sm)' }}>
                Feedback & Accessibility Assistance
              </h2>
              <p>
                We continuously refine our interfaces. If you encounter any accessibility barriers on this website or require an alternative format for any documentation or proposal materials, please reach out to our team:
              </p>

              <div
                style={{
                  backgroundColor: 'var(--color-surface-ice)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-md) var(--space-lg)',
                  marginTop: 'var(--space-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <Mail size={20} color="var(--color-primary)" />
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--color-primary-deep)' }}>
                    Accessibility Coordinator
                  </div>
                  <a href={`mailto:${siteData.contactEmail}`}>{siteData.contactEmail}</a>
                </div>
              </div>
            </section>
          </article>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .access-features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
