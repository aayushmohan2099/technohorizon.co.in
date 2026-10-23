import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, AlertCircle, ArrowRight, Building } from 'lucide-react';
import { usePageSeo } from '../lib/seo';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SectionHeading from '../components/ui/SectionHeading';
import CtaBand from '../components/ui/CtaBand';
import clientsData from '../data/clients.json';

export default function Clients() {
  usePageSeo({
    title: 'Clientele & Institutional References — Techno Horizon',
    description: 'Review institutional reference candidates, public department associations, and enterprise organizations aligned with Techno Horizon execution capabilities.'
  });

  const [selectedSector, setSelectedSector] = useState('ALL');

  // Filter out the internal company brand logo from the client list
  const institutionalClients = clientsData.filter(c => c.id !== 'techno-horizon');

  const filteredClients = selectedSector === 'ALL'
    ? institutionalClients
    : institutionalClients.filter(c => c.sector.includes(selectedSector));

  const sectors = ['ALL', 'Government', 'Private Enterprise', 'PSU'];

  return (
    <div className="clients-page">
      <section className="section-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Clients' }]} />

          <div style={{ maxWidth: '820px' }}>
            <span className="eyebrow eyebrow-red">Institutional References</span>
            <h1 style={{ marginBottom: 'var(--space-md)' }}>
              Organizations & Reference Candidates
            </h1>
            <p className="lead" style={{ marginBottom: 'var(--space-xl)' }}>
              Techno Horizon's institutional delivery capability spans state government departments, public sector undertakings, statutory authorities, and commercial enterprises.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/request-proposal" className="btn btn-primary">
                <span>Request Formal References</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/projects" className="btn btn-outline">
                <span>View Case Studies</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Notice Banner */}
      <section className="section section-white" style={{ paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-md)' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: 'var(--color-surface-ice)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-card)',
              padding: 'var(--space-lg) var(--space-xl)',
              marginBottom: 'var(--space-2xl)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px'
            }}
          >
            <ShieldCheck size={22} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-primary-deep)', marginBottom: '4px' }}>
                Governance & Evidence Standard
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                Organizations listed reflect verified project records, prior public sector engagements, and tender reference candidates. Display of institutional marks does not assert an ongoing statutory endorsement unless accompanied by active project case studies.
              </p>
            </div>
          </div>

          {/* Sector Filter Bar */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: 'var(--space-2xl)' }}>
            {sectors.map((sec) => (
              <button
                key={sec}
                type="button"
                onClick={() => setSelectedSector(sec)}
                className={`btn btn-sm ${selectedSector === sec ? 'btn-secondary' : 'btn-outline'}`}
              >
                {sec === 'ALL' ? 'All Reference Candidates' : sec}
              </button>
            ))}
          </div>

          {/* Clients Grid */}
          <div className="grid-3" style={{ marginBottom: 'var(--space-4xl)' }}>
            {filteredClients.map((client) => {
              const hasImage = client.logoPath && client.logoApproved;

              return (
                <div
                  key={client.id}
                  className="card"
                  style={{
                    height: '100%',
                    justifyContent: 'space-between',
                    padding: 'var(--space-xl)'
                  }}
                >
                  <div>
                    {/* Logo or Text Fallback Box */}
                    <div
                      style={{
                        backgroundColor: 'var(--color-surface-ice)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        height: '84px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '12px',
                        marginBottom: 'var(--space-md)'
                      }}
                    >
                      {hasImage ? (
                        <img
                          src={client.logoPath}
                          alt={client.name}
                          style={{
                            maxHeight: '52px',
                            maxWidth: '160px',
                            objectFit: 'contain'
                          }}
                        />
                      ) : (
                        <div style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-primary-deep)' }}>
                            {client.name}
                          </div>
                          <div style={{ fontSize: '0.6875rem', color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                            Formal Asset Pending
                          </div>
                        </div>
                      )}
                    </div>

                    <span className="eyebrow" style={{ fontSize: '0.75rem', padding: '3px 10px', marginBottom: '8px' }}>
                      {client.sector}
                    </span>

                    <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-xs)' }}>
                      {client.name}
                    </h3>

                    {client.officialFullName && client.officialFullName !== client.name && (
                      <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-sm)' }}>
                        {client.officialFullName}
                      </p>
                    )}

                    <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-tertiary)' }}>
                      <strong>Classification:</strong> {client.relationshipType}
                    </div>
                  </div>

                  <div style={{ paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-border-subtle)', marginTop: 'var(--space-md)' }}>
                    <span className="status-pill status-pill-approved">
                      <CheckCircle2 size={12} />
                      <span>Reference Candidate</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBand
        title="Interested in working with Techno Horizon?"
        subtitle="Contact our partnerships and procurement desk to discuss past references, project qualifications, and tender capabilities."
        primaryAction={{ label: 'Contact Us', href: '/contact' }}
        secondaryAction={{ label: 'Request a Proposal', href: '/request-proposal' }}
      />
    </div>
  );
}
