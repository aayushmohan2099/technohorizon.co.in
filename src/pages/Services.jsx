import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Code, Briefcase, GraduationCap, Users,
  CheckCircle2, ArrowRight, Layers, FileText
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

const iconMap = {
  'software-it-solutions': Code,
  'business-consultancy': Briefcase,
  'training-skill-development': GraduationCap,
  'manpower-solutions': Users
};

const graphicMap = {
  SoftwareFlow,
  AdvisoryWorkflow,
  LearningLadder,
  TalentPipeline
};

export default function Services() {
  usePageSeo({
    title: 'Enterprise Services & Capabilities — Techno Horizon',
    description: 'Expertise that connects strategy to delivery: custom software development, business consultancy (BPR/DPR), workforce training, and manpower solutions.'
  });

  const [activeTab, setActiveTab] = useState(servicesData[0].id);
  const currentService = servicesData.find(s => s.id === activeTab) || servicesData[0];
  const GraphicComponent = graphicMap[currentService.heroGraphic] || SoftwareFlow;

  return (
    <div className="services-page">
      {/* Services Hero */}
      <section className="section-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Services' }]} />

          <div style={{ maxWidth: '820px' }}>
            <span className="eyebrow eyebrow-red">Comprehensive Capabilities</span>
            <h1 style={{ marginBottom: 'var(--space-md)' }}>
              Expertise that connects strategy to delivery.
            </h1>
            <p className="lead" style={{ marginBottom: 'var(--space-xl)' }}>
              Techno Horizon delivers four deeply integrated service pillars engineered for institutions that need results: bespoke software development, institutional BPR/DPR advisory, workforce training, and specialized talent solutions.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/request-proposal" className="btn btn-primary">
                <span>Request a Proposal</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/approach" className="btn btn-outline">
                <span>Our Delivery Methodology</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Accessible Category Tabs */}
      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Explore Disciplines"
            title="Four Integrated Service Domains"
            lead="Select any domain to inspect specialized capabilities, operational process stages, typical deliverables, and engagement workflows."
          />

          {/* Tab Button Rail */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: 'var(--space-3xl)'
            }}
            role="tablist"
            aria-label="Service Category Tabs"
          >
            {servicesData.map((service) => {
              const TabIcon = iconMap[service.id] || Code;
              const isSelected = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`panel-${service.id}`}
                  id={`tab-${service.id}`}
                  onClick={() => setActiveTab(service.id)}
                  className={`btn ${isSelected ? 'btn-secondary' : 'btn-outline'}`}
                  style={{ minHeight: '48px', padding: '10px 20px' }}
                >
                  <TabIcon size={18} />
                  <span>{service.shortTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Panel */}
          <div
            id={`panel-${currentService.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${currentService.id}`}
            style={{
              backgroundColor: 'var(--color-surface-ice)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-card-lg)',
              padding: 'var(--space-3xl)',
              boxShadow: 'var(--shadow-subtle)'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'var(--space-3xl)',
                alignItems: 'center',
                marginBottom: 'var(--space-3xl)'
              }}
              className="services-panel-grid"
            >
              <div>
                <span className="eyebrow">{currentService.shortTitle}</span>
                <h2 style={{ fontSize: '2.1rem', marginBottom: 'var(--space-md)' }}>
                  {currentService.title}
                </h2>
                <p className="lead" style={{ fontSize: '1.15rem', color: 'var(--color-primary-deep)', fontWeight: 600, marginBottom: 'var(--space-md)' }}>
                  {currentService.headline}
                </p>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: 'var(--space-xl)' }}>
                  {currentService.summary}
                </p>

                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <Link to={`/services/${currentService.slug}`} className="btn btn-primary">
                    <span>Full Domain Specifications</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link to={currentService.primaryCta.href} className="btn btn-outline">
                    <span>{currentService.primaryCta.label}</span>
                  </Link>
                </div>
              </div>

              {/* Graphic Component */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <GraphicComponent />
              </div>
            </div>

            {/* Capabilities Grid */}
            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-2xl)' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: 'var(--space-lg)', color: 'var(--color-primary-deep)' }}>
                Specialized Technical Capabilities
              </h3>

              <div className="grid-3">
                {currentService.capabilities.map((cap) => (
                  <div
                    key={cap.title}
                    style={{
                      backgroundColor: 'var(--color-white)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-card)',
                      padding: 'var(--space-lg)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-xs)' }}>
                      <CheckCircle2 size={16} color="var(--color-primary)" />
                      <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary-deep)' }}>
                        {cap.title}
                      </h4>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                      {cap.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Disciplinary Integration Scenarios */}
      <section className="section section-ice">
        <div className="container">
          <SectionHeading
            eyebrow="Multi-Capability Synergy"
            title="How Our Disciplines Work Together"
            lead="Complex institutional initiatives rarely need only one service. Techno Horizon coordinates across boundaries to deliver complete transformations."
          />

          <div className="grid-3">
            <div className="card">
              <span className="status-pill status-pill-approved" style={{ width: 'fit-content', marginBottom: 'var(--space-sm)' }}>
                Scenario 1
              </span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-xs)' }}>
                Advisory-Led Software Modernization
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.55, marginBottom: 'var(--space-md)' }}>
                Our BPR consultants map and optimize administrative workflows first, producing a Detailed Project Report (DPR). The software engineering team then builds bespoke web modules directly from those re-engineered blueprints.
              </p>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                Pillars: Business Advisory + Software & IT
              </div>
            </div>

            <div className="card">
              <span className="status-pill status-pill-approved" style={{ width: 'fit-content', marginBottom: 'var(--space-sm)' }}>
                Scenario 2
              </span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-xs)' }}>
                e-Governance Rollout & District Adoption
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.55, marginBottom: 'var(--space-md)' }}>
                When a new departmental application is ready for rollout, our training specialists design localized simulation sandboxes and Train-the-Trainer (ToT) programs, while our manpower team supplies counter operators.
              </p>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                Pillars: Software + Training & Skills + Manpower
              </div>
            </div>

            <div className="card">
              <span className="status-pill status-pill-approved" style={{ width: 'fit-content', marginBottom: 'var(--space-sm)' }}>
                Scenario 3
              </span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-xs)' }}>
                Turnkey Technical Project Staffing
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.55, marginBottom: 'var(--space-md)' }}>
                To support ongoing institutional systems, our manpower division deploys vetted software developers, database administrators, and technical leads under institutional Service Level Agreements (SLAs).
              </p>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                Pillars: Manpower Solutions + Software Architecture
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand
        title="Need an integrated approach for your next initiative?"
        subtitle="Schedule a consultation with our team to review your technical scope, advisory requirements, or staffing needs."
        primaryAction={{ label: 'Request a Proposal', href: '/request-proposal' }}
        secondaryAction={{ label: 'Schedule Consultation', href: '/schedule-consultation' }}
      />

      <style>{`
        @media (max-width: 1024px) {
          .services-panel-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
