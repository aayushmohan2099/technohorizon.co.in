import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, Building2, Users, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';
import { usePageSeo } from '../lib/seo';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SectionHeading from '../components/ui/SectionHeading';
import CtaBand from '../components/ui/CtaBand';
import sectorsData from '../data/sectors.json';

export default function Sectors() {
  usePageSeo({
    title: 'Sectors & Institutional Expertise — Techno Horizon',
    description: 'Explore Techno Horizon sectoral expertise across Government, PSUs, Private Enterprise, and NGOs.'
  });

  return (
    <div className="sectors-page">
      <section className="section-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Sectors' }]} />

          <div style={{ maxWidth: '820px' }}>
            <span className="eyebrow eyebrow-red">Sector Alignment</span>
            <h1 style={{ marginBottom: 'var(--space-md)' }}>
              Tailored capabilities for diverse institutional realities.
            </h1>
            <p className="lead" style={{ marginBottom: 'var(--space-xl)' }}>
              Every sector operates under distinct regulatory mandates, approval processes, and scale requirements. Techno Horizon adapts its software, advisory, and talent capabilities to fit each environment.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/sectors/government-public-sector" className="btn btn-secondary">
                <span>Government & Public Sector</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/sectors/private-enterprise" className="btn btn-outline">
                <span>Private Enterprise & NGOs</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Sector Cards */}
      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Key Focus Areas"
            title="Institutional Sectors We Support"
            lead="Explore specialized engagement models tailored for public accountability and private commercial agility."
          />

          <div className="grid-2" style={{ marginBottom: 'var(--space-3xl)' }}>
            {sectorsData.map((sec) => (
              <div
                key={sec.id}
                className="card"
                style={{
                  height: '100%',
                  justifyContent: 'space-between',
                  borderTop: '4px solid var(--color-primary)'
                }}
              >
                <div>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--color-primary-light)',
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 'var(--space-md)'
                    }}
                  >
                    {sec.id.includes('government') ? <Landmark size={24} /> : <Building2 size={24} />}
                  </div>

                  <h3 style={{ fontSize: '1.6rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-sm)' }}>
                    {sec.title}
                  </h3>

                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: 'var(--space-lg)' }}>
                    {sec.summary}
                  </p>

                  <div style={{ marginBottom: 'var(--space-lg)' }}>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '8px' }}>
                      Key Operational Challenges Addressed
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {sec.challenges.slice(0, 3).map((ch) => (
                        <li key={ch} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.875rem', color: 'var(--color-text-main)' }}>
                          <CheckCircle2 size={14} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-border-subtle)' }}>
                  <Link
                    to={`/sectors/${sec.slug}`}
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                  >
                    <span>View {sec.title} Solutions</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Capabilities Matrix */}
      <section className="section section-ice">
        <div className="container">
          <SectionHeading
            eyebrow="Sector Matrix"
            title="Service Domain Relevance by Sector"
            lead="How our four core disciplines map across distinct institutional profiles."
          />

          <div
            style={{
              backgroundColor: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-card-lg)',
              overflowX: 'auto',
              boxShadow: 'var(--shadow-subtle)'
            }}
          >
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                fontSize: '0.9375rem'
              }}
            >
              <thead>
                <tr style={{ backgroundColor: 'var(--color-primary-deep)', color: 'var(--color-white)' }}>
                  <th style={{ padding: '16px 20px', fontWeight: 700 }}>Institutional Sector</th>
                  <th style={{ padding: '16px 20px', fontWeight: 700 }}>Software & IT Solutions</th>
                  <th style={{ padding: '16px 20px', fontWeight: 700 }}>Business Advisory & DPR</th>
                  <th style={{ padding: '16px 20px', fontWeight: 700 }}>Training & Skills</th>
                  <th style={{ padding: '16px 20px', fontWeight: 700 }}>Manpower Solutions</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '18px 20px', fontWeight: 700, color: 'var(--color-primary-deep)' }}>
                    Government Departments
                  </td>
                  <td style={{ padding: '18px 20px', color: 'var(--color-text-secondary)' }}>e-Governance & portals</td>
                  <td style={{ padding: '18px 20px', color: 'var(--color-text-secondary)' }}>Statutory DPRs & BPR</td>
                  <td style={{ padding: '18px 20px', color: 'var(--color-text-secondary)' }}>District ToT cascades</td>
                  <td style={{ padding: '18px 20px', color: 'var(--color-text-secondary)' }}>Field counter staffing</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface-hover)' }}>
                  <td style={{ padding: '18px 20px', fontWeight: 700, color: 'var(--color-primary-deep)' }}>
                    Public Sector Undertakings (PSUs)
                  </td>
                  <td style={{ padding: '18px 20px', color: 'var(--color-text-secondary)' }}>Legacy modernization</td>
                  <td style={{ padding: '18px 20px', color: 'var(--color-text-secondary)' }}>Feasibility & gap audit</td>
                  <td style={{ padding: '18px 20px', color: 'var(--color-text-secondary)' }}>System transition training</td>
                  <td style={{ padding: '18px 20px', color: 'var(--color-text-secondary)' }}>Technical contractor teams</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '18px 20px', fontWeight: 700, color: 'var(--color-primary-deep)' }}>
                    Private Enterprise
                  </td>
                  <td style={{ padding: '18px 20px', color: 'var(--color-text-secondary)' }}>Custom web & cloud APIs</td>
                  <td style={{ padding: '18px 20px', color: 'var(--color-text-secondary)' }}>Process optimization</td>
                  <td style={{ padding: '18px 20px', color: 'var(--color-text-secondary)' }}>Corporate upskilling</td>
                  <td style={{ padding: '18px 20px', color: 'var(--color-text-secondary)' }}>Executive search & tech hiring</td>
                </tr>
                <tr>
                  <td style={{ padding: '18px 20px', fontWeight: 700, color: 'var(--color-primary-deep)' }}>
                    NGOs & Semi-Public Bodies
                  </td>
                  <td style={{ padding: '18px 20px', color: 'var(--color-text-secondary)' }}>Progress tracking tools</td>
                  <td style={{ padding: '18px 20px', color: 'var(--color-text-secondary)' }}>Program governance frameworks</td>
                  <td style={{ padding: '18px 20px', color: 'var(--color-text-secondary)' }}>Community capacity building</td>
                  <td style={{ padding: '18px 20px', color: 'var(--color-text-secondary)' }}>Program coordinators</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBand
        title="Discuss Sector-Specific Requirements"
        subtitle="Contact our institutional practice desk to review tender coordination, project scoping, or advisory needs."
        primaryAction={{ label: 'Request a Proposal', href: '/request-proposal' }}
        secondaryAction={{ label: 'Schedule Consultation', href: '/schedule-consultation' }}
      />
    </div>
  );
}
