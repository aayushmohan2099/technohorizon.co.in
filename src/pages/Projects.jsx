import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, Filter, RotateCcw, ArrowRight,
  CheckCircle2, AlertCircle, FileText
} from 'lucide-react';
import { usePageSeo } from '../lib/seo';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/projects/ProjectCard';
import CtaBand from '../components/ui/CtaBand';
import projectsData from '../data/projects.json';
import servicesData from '../data/services.json';

export default function Projects() {
  usePageSeo({
    title: 'Projects & Case Studies Library — Techno Horizon',
    description: 'Explore verified enterprise project case studies and institutional deliverables across software, advisory, and workforce deployments.'
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState('ALL');
  const [selectedService, setSelectedService] = useState('ALL');
  const [sortBy, setSortBy] = useState('featured');
  const [showCandidateReview, setShowCandidateReview] = useState(false);

  const publishedProjects = useMemo(() => {
    return projectsData.filter(p => p.published === true);
  }, []);

  const candidateProjects = useMemo(() => {
    return projectsData.filter(p => p.published === false);
  }, []);

  // Filtered published projects
  const filteredProjects = useMemo(() => {
    return publishedProjects.filter((item) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.technologies && item.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));

      const matchesSector =
        selectedSector === 'ALL' || item.sector === selectedSector;

      const matchesService =
        selectedService === 'ALL' ||
        (item.serviceIds && item.serviceIds.includes(selectedService));

      return matchesSearch && matchesSector && matchesService;
    }).sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0; // Default featured order
    });
  }, [publishedProjects, searchQuery, selectedSector, selectedService, sortBy]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedSector('ALL');
    setSelectedService('ALL');
    setSortBy('featured');
  };

  const sectors = ['ALL', 'Government', 'Citizen Services', 'Private Enterprise'];

  return (
    <div className="projects-page">
      {/* Hero */}
      <section className="section-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Projects' }]} />

          <div style={{ maxWidth: '820px' }}>
            <span className="eyebrow eyebrow-red">Case Study Library</span>
            <h1 style={{ marginBottom: 'var(--space-md)' }}>
              Verified Project Records & Institutional Case Studies
            </h1>
            <p className="lead" style={{ marginBottom: 'var(--space-xl)' }}>
              Explore how Techno Horizon architects bespoke software, delivers actionable BPR/DPR advisory, and enables frontline operations across state and enterprise initiatives.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/request-proposal" className="btn btn-primary">
                <span>Request Relevant Credentials</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/approach" className="btn btn-outline">
                <span>How We Deliver</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="section section-white" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-md)' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: 'var(--color-surface-ice)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-card)',
              padding: 'var(--space-xl)',
              marginBottom: 'var(--space-2xl)',
              boxShadow: 'var(--shadow-subtle)'
            }}
          >
            {/* Search Input */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: 'var(--space-lg)' }}>
              <div style={{ flex: '1 1 320px', position: 'relative' }}>
                <Search
                  size={18}
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--color-text-tertiary)'
                  }}
                />
                <input
                  type="text"
                  placeholder="Search case studies by keyword, technology, or title..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="form-control"
                  style={{ paddingLeft: '44px' }}
                  aria-label="Search case studies"
                />
              </div>

              {/* Sort Dropdown */}
              <div style={{ minWidth: '180px' }}>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="form-control"
                  aria-label="Sort projects"
                >
                  <option value="featured">Featured Order</option>
                  <option value="title">Alphabetical (A-Z)</option>
                </select>
              </div>

              {/* Reset Button */}
              {(searchQuery || selectedSector !== 'ALL' || selectedService !== 'ALL') && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn btn-outline btn-sm"
                  style={{ height: '48px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <RotateCcw size={15} />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Sector Filter */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-text-secondary)', textTransform: 'uppercase', minWidth: '70px' }}>
                  Sector:
                </span>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {sectors.map((sec) => (
                    <button
                      key={sec}
                      type="button"
                      onClick={() => setSelectedSector(sec)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: 'var(--radius-pill)',
                        border: '1px solid',
                        borderColor: selectedSector === sec ? 'var(--color-primary)' : 'var(--color-border)',
                        backgroundColor: selectedSector === sec ? 'var(--color-primary)' : 'var(--color-white)',
                        color: selectedSector === sec ? 'var(--color-white)' : 'var(--color-text-main)',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      {sec}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Pillar Filter */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-text-secondary)', textTransform: 'uppercase', minWidth: '70px' }}>
                  Service:
                </span>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={() => setSelectedService('ALL')}
                    style={{
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-pill)',
                      border: '1px solid',
                      borderColor: selectedService === 'ALL' ? 'var(--color-primary)' : 'var(--color-border)',
                      backgroundColor: selectedService === 'ALL' ? 'var(--color-primary)' : 'var(--color-white)',
                      color: selectedService === 'ALL' ? 'var(--color-white)' : 'var(--color-text-main)',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    All Services
                  </button>
                  {servicesData.map((srv) => (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedService(srv.id)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: 'var(--radius-pill)',
                        border: '1px solid',
                        borderColor: selectedService === srv.id ? 'var(--color-primary)' : 'var(--color-border)',
                        backgroundColor: selectedService === srv.id ? 'var(--color-primary)' : 'var(--color-white)',
                        color: selectedService === srv.id ? 'var(--color-white)' : 'var(--color-text-main)',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      {srv.shortTitle}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-xl)' }}>
            <div style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
              Showing <strong>{filteredProjects.length}</strong> verified project record{filteredProjects.length === 1 ? '' : 's'}
            </div>

            <button
              type="button"
              onClick={() => setShowCandidateReview(prev => !prev)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--color-text-secondary)',
                fontSize: '0.8125rem',
                textDecoration: 'underline',
                cursor: 'pointer'
              }}
            >
              {showCandidateReview ? 'Hide Archival Ledger' : `View ${candidateProjects.length} Archival Candidate Records`}
            </button>
          </div>

          {/* Published Project Cards */}
          {filteredProjects.length > 0 ? (
            <div className="grid-3" style={{ marginBottom: 'var(--space-4xl)' }}>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div
              style={{
                backgroundColor: 'var(--color-surface-ice)',
                border: '1px dashed var(--color-border-strong)',
                borderRadius: 'var(--radius-card-lg)',
                padding: 'var(--space-4xl) var(--space-xl)',
                textAlign: 'center',
                marginBottom: 'var(--space-4xl)'
              }}
            >
              <FileText size={44} color="var(--color-primary)" style={{ margin: '0 auto var(--space-md) auto' }} />
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-xs)' }}>
                No verified records match your filter criteria
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', maxWidth: '520px', margin: '0 auto var(--space-xl) auto' }}>
                We maintain a strict evidence policy: unverified claims are never fabricated to populate search results.
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button type="button" onClick={handleReset} className="btn btn-outline">
                  <span>Clear Filters</span>
                </button>
                <Link to="/request-proposal" className="btn btn-primary">
                  <span>Request Relevant Credentials</span>
                </Link>
              </div>
            </div>
          )}

          {/* Archival Candidate Records Ledger (Strictly Labeled Under Quarantine) */}
          {showCandidateReview && (
            <div
              style={{
                backgroundColor: 'var(--status-pending-bg)',
                border: '1px solid var(--status-pending-border)',
                borderRadius: 'var(--radius-card)',
                padding: 'var(--space-xl)',
                marginBottom: 'var(--space-4xl)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--space-sm)' }}>
                <AlertCircle size={20} color="var(--status-pending-text)" />
                <h4 style={{ color: 'var(--status-pending-text)', fontSize: '1.15rem' }}>
                  Archival Candidate Records (Quarantined for Owner Verification)
                </h4>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#78350F', lineHeight: 1.55, marginBottom: 'var(--space-lg)' }}>
                These candidate projects originate from older public company profile documentation. In accordance with requirement precedence rules, they are restricted from public search results and marked as pending review until formally certified.
              </p>

              <div className="grid-3">
                {candidateProjects.map((candidate) => (
                  <div
                    key={candidate.id}
                    style={{
                      backgroundColor: 'var(--color-white)',
                      border: '1px solid var(--status-pending-border)',
                      borderRadius: 'var(--radius-card)',
                      padding: 'var(--space-lg)'
                    }}
                  >
                    <span className="status-pill status-pill-pending" style={{ marginBottom: '8px' }}>
                      Pending Owner Audit
                    </span>
                    <h5 style={{ fontSize: '1.05rem', color: 'var(--color-primary-deep)', marginBottom: '6px' }}>
                      {candidate.title}
                    </h5>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
                      {candidate.summary}
                    </p>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)', fontStyle: 'italic' }}>
                      Source: {candidate.source}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CtaBand
        title="Need specific references or a tailored credentials deck?"
        subtitle="Contact our procurement desk to discuss past assignments aligned with your industry or institutional scope."
        primaryAction={{ label: 'Request Credentials Deck', href: '/request-proposal' }}
        secondaryAction={{ label: 'Schedule Consultation', href: '/schedule-consultation' }}
      />
    </div>
  );
}
