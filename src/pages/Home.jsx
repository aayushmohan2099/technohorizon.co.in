import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle2, ChevronRight,
  Code, Briefcase, GraduationCap, Users,
  ShieldCheck, FileText, Calendar, Building, Landmark
} from 'lucide-react';
import { usePageSeo } from '../lib/seo';
import DigitalHorizon from '../graphics/DigitalHorizon';
import HomeHoneycomb from '../graphics/HomeHoneycomb';
import TrustRail from '../components/ui/TrustRail';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/projects/ProjectCard';
import CtaBand from '../components/ui/CtaBand';
import servicesData from '../data/services.json';
import sectorsData from '../data/sectors.json';
import projectsData from '../data/projects.json';
import insightsData from '../data/insights.json';
import metricsData from '../data/metrics.json';

const serviceIcons = {
  'software-it-solutions': Code,
  'business-consultancy': Briefcase,
  'training-skill-development': GraduationCap,
  'manpower-solutions': Users
};

export default function Home() {
  usePageSeo({
    title: 'Enterprise Technology, Advisory & Workforce Solutions',
    description: 'Techno Horizon delivers custom software development, institutional BPR/DPR advisory, workforce training, and manpower solutions for government, PSUs, and enterprises.'
  });

  const [activeSectorTab, setActiveSectorTab] = useState('government');
  const publishedProjects = projectsData.filter(p => p.published === true);
  const publishedInsights = insightsData.filter(i => i.published === true);

  return (
    <div className="home-page">
      
      {/* 01 — ENTERPRISE HERO (Strictly Non-Honeycomb Digital Horizon) */}
      <section className="section-hero">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.15fr 0.85fr',
              gap: 'var(--space-3xl)',
              alignItems: 'center'
            }}
            className="hero-grid-layout"
          >
            {/* Hero Copy */}
            <div>
              <div style={{ marginBottom: 'var(--space-md)' }}>
                <span className="eyebrow eyebrow-red">
                  TECHNOLOGY • CONSULTING • WORKFORCE SOLUTIONS
                </span>
              </div>

              <h1 style={{ marginBottom: 'var(--space-lg)' }}>
                Complex challenges. Connected solutions.
              </h1>

              <p className="lead" style={{ marginBottom: 'var(--space-2xl)' }}>
                Techno Horizon brings together custom software, institutional advisory, skills development and manpower services to help public and private organizations move from plans to implementation.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '16px',
                  alignItems: 'center',
                  marginBottom: 'var(--space-2xl)'
                }}
              >
                <Link to="/request-proposal" className="btn btn-primary btn-lg">
                  <span>Request a Proposal</span>
                  <ArrowRight size={18} />
                </Link>

                <Link to="/services" className="btn btn-outline btn-lg">
                  <span>Explore Our Capabilities</span>
                </Link>
              </div>

              {/* Supporting Credibility Line */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                <ShieldCheck size={18} color="var(--color-primary)" />
                <span style={{ fontWeight: 600 }}>
                  Built for Government Departments, Public Sector Undertakings & Modern Enterprises.
                </span>
              </div>
            </div>

            {/* Original Digital Horizon Vector Illustration */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <DigitalHorizon />
            </div>
          </div>
        </div>
      </section>

      {/* 02 — INSTITUTIONAL RELEVANCE (Trust Rail) */}
      <TrustRail title="Supporting mission-critical institutional and enterprise work." />

      {/* 03 — FOUR SERVICE PILLARS */}
      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Core Competencies"
            title="Four Specialized Service Pillars"
            lead="Comprehensive, interdisciplinary execution capabilities designed to take institutional initiatives from diagnosis through deployment."
          />

          <div className="grid-4">
            {servicesData.map((service) => {
              const ServiceIcon = serviceIcons[service.id] || Code;
              return (
                <div
                  key={service.id}
                  className="card"
                  style={{
                    height: '100%',
                    justifyContent: 'space-between',
                    borderTop: `4px solid ${service.id === 'manpower-solutions' ? 'var(--color-accent-red)' : 'var(--color-primary)'}`
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
                      <ServiceIcon size={24} />
                    </div>

                    <h3 style={{ fontSize: '1.35rem', marginBottom: 'var(--space-sm)' }}>
                      {service.title}
                    </h3>

                    <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.55, marginBottom: 'var(--space-lg)' }}>
                      {service.summary}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: 'var(--space-lg)' }}>
                      {service.capabilities.slice(0, 3).map((cap) => (
                        <div key={cap.title} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84375rem', color: 'var(--color-text-main)', fontWeight: 500 }}>
                          <CheckCircle2 size={14} color="var(--color-primary)" />
                          <span>{cap.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-border-subtle)' }}>
                    <Link
                      to={`/services/${service.slug}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontWeight: 600,
                        fontSize: '0.9375rem',
                        color: 'var(--color-primary)'
                      }}
                    >
                      <span>Explore Capabilities</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 — ONE CONNECTED PARTNER (Sole Fluid Honeycomb Animation) */}
      <section className="section section-ice" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Integration Advantage"
            title="One connected partner. Four specialist capabilities."
            lead="Large programs falter when advisory, software, training, and staffing operate in disconnected silos. Techno Horizon unifies all four under single-point institutional accountability."
          />

          {/* Sole Honeycomb Component */}
          <HomeHoneycomb />
        </div>
      </section>

      {/* 05 — HOW WE APPROACH INSTITUTIONAL WORK */}
      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Operating Principles"
            title="How We Approach Institutional Work"
            lead="Guiding execution principles designed to ensure rigorous compliance, interdisciplinary alignment, and verifiable outcomes."
          />

          <div className="grid-4">
            <div className="card">
              <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>01</span>
              <h4 style={{ fontSize: '1.2rem', marginBottom: 'var(--space-xs)' }}>Requirements-First Discovery</h4>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                We conduct exhaustive on-ground stakeholder consultations and statutory compliance mapping before architecting software or authoring DPRs.
              </p>
            </div>

            <div className="card">
              <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>02</span>
              <h4 style={{ fontSize: '1.2rem', marginBottom: 'var(--space-xs)' }}>Interdisciplinary Delivery</h4>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                Our software engineers, process analysts, instructional designers, and talent recruiters coordinate continuously throughout project execution.
              </p>
            </div>

            <div className="card">
              <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>03</span>
              <h4 style={{ fontSize: '1.2rem', marginBottom: 'var(--space-xs)' }}>Implementation-Minded Advisory</h4>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                We avoid theoretical recommendations. Every process re-engineering blueprint and DPR is structured for realistic procurement and technical delivery.
              </p>
            </div>

            <div className="card">
              <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-accent-red)', marginBottom: 'var(--space-sm)' }}>04</span>
              <h4 style={{ fontSize: '1.2rem', marginBottom: 'var(--space-xs)' }}>Long-Term Support Orientation</h4>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                Our commitment extends beyond rollout through continuous SLA governance, frontline adoption tracking, and proactive telemetry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — SECTORS SERVED */}
      <section className="section section-ice">
        <div className="container">
          <SectionHeading
            eyebrow="Sector Expertise"
            title="Tailored for Diverse Institutional Realities"
            lead="Understanding the unique governance, compliance, and operational imperatives across public agencies and commercial organizations."
          />

          {/* Sector Segment Tabs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: 'var(--space-2xl)'
            }}
            role="tablist"
            aria-label="Sector Tabs"
          >
            <button
              role="tab"
              aria-selected={activeSectorTab === 'government'}
              onClick={() => setActiveSectorTab('government')}
              className={`btn btn-sm ${activeSectorTab === 'government' ? 'btn-primary' : 'btn-outline'}`}
            >
              <Landmark size={16} />
              <span>Government & Departments</span>
            </button>
            <button
              role="tab"
              aria-selected={activeSectorTab === 'psu'}
              onClick={() => setActiveSectorTab('psu')}
              className={`btn btn-sm ${activeSectorTab === 'psu' ? 'btn-primary' : 'btn-outline'}`}
            >
              <Building size={16} />
              <span>PSUs & State Enterprises</span>
            </button>
            <button
              role="tab"
              aria-selected={activeSectorTab === 'private'}
              onClick={() => setActiveSectorTab('private')}
              className={`btn btn-sm ${activeSectorTab === 'private' ? 'btn-primary' : 'btn-outline'}`}
            >
              <Briefcase size={16} />
              <span>Private Enterprise</span>
            </button>
            <button
              role="tab"
              aria-selected={activeSectorTab === 'ngo'}
              onClick={() => setActiveSectorTab('ngo')}
              className={`btn btn-sm ${activeSectorTab === 'ngo' ? 'btn-primary' : 'btn-outline'}`}
            >
              <Users size={16} />
              <span>NGOs & Semi-Public</span>
            </button>
          </div>

          {/* Dynamic Tab Panel */}
          <div
            style={{
              backgroundColor: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-card-lg)',
              padding: 'var(--space-2xl)',
              boxShadow: 'var(--shadow-subtle)'
            }}
            role="tabpanel"
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 0.8fr',
                gap: 'var(--space-2xl)',
                alignItems: 'center'
              }}
              className="sector-tab-grid"
            >
              <div>
                <h3 style={{ fontSize: '1.75rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-md)' }}>
                  {activeSectorTab === 'government' && 'Government & State Departments'}
                  {activeSectorTab === 'psu' && 'Public Sector Undertakings (PSUs)'}
                  {activeSectorTab === 'private' && 'Private Enterprises & Growth Companies'}
                  {activeSectorTab === 'ngo' && 'Semi-Public Authorities, Utilities & NGOs'}
                </h3>

                <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: 'var(--space-lg)' }}>
                  {activeSectorTab === 'government' && 'Supporting departments with procurement-ready DPR formulation, compliant citizen-service portal development, large-scale district adoption training, and turnkey field staffing.'}
                  {activeSectorTab === 'psu' && 'Enabling state corporations and PSUs to modernize legacy systems, automate complex administrative pipelines, and recruit specialized technical personnel.'}
                  {activeSectorTab === 'private' && 'Accelerating digital initiatives through agile enterprise web architectures, business process optimization, and dedicated contract engineering talent.'}
                  {activeSectorTab === 'ngo' && 'Strengthening civic institutions and utility boards with structured program tracking, localized capacity building, and transparent digital reporting.'}
                </p>

                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <Link
                    to={activeSectorTab === 'government' || activeSectorTab === 'psu' ? '/sectors/government-public-sector' : '/sectors/private-enterprise'}
                    className="btn btn-secondary"
                  >
                    <span>View Sector Capabilities</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link to="/request-proposal" className="btn btn-outline">
                    <span>Inquire for Your Organization</span>
                  </Link>
                </div>
              </div>

              {/* Sector Specific Deliverables Box */}
              <div
                style={{
                  backgroundColor: 'var(--color-surface-ice)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-card)',
                  padding: 'var(--space-xl)'
                }}
              >
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>
                  Key Capabilities Deployed
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9375rem', color: 'var(--color-text-main)', fontWeight: 500 }}>
                    <CheckCircle2 size={16} color="var(--color-primary)" />
                    <span>Statutory & Procurement Compliance</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9375rem', color: 'var(--color-text-main)', fontWeight: 500 }}>
                    <CheckCircle2 size={16} color="var(--color-primary)" />
                    <span>Bespoke Web Application Engineering</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9375rem', color: 'var(--color-primary)"' }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9375rem', color: 'var(--color-text-main)', fontWeight: 500 }}>
                    <CheckCircle2 size={16} color="var(--color-primary)" />
                    <span>Localized Train-the-Trainer Cascades</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9375rem', color: 'var(--color-text-main)', fontWeight: 500 }}>
                    <CheckCircle2 size={16} color="var(--color-accent-red)" />
                    <span>Turnkey Manpower & Executive Search</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — SELECTED EXPERIENCE (Verified Case Studies) */}
      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Case Studies"
            title="Selected Project Engagements"
            lead="Review our verified project records across state infrastructure tracking, regulatory consent automation, and frontline digital adoption."
          />

          <div className="grid-3" style={{ marginBottom: 'var(--space-2xl)' }}>
            {publishedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/projects" className="btn btn-outline btn-lg">
              <span>Explore Complete Case Study Library</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 08 — DELIVERY METHODOLOGY */}
      <section className="section section-ice">
        <div className="container">
          <SectionHeading
            eyebrow="Methodology"
            title="Five-Stage Delivery Lifecycle"
            lead="Disciplined, milestone-driven execution ensuring transparency from initial discovery to long-term post-deployment governance."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: 'var(--space-md)'
            }}
            className="methodology-grid"
          >
            {[
              { step: '01', name: 'Discover', desc: 'Field discovery, baseline gap analysis, and statutory compliance mapping.' },
              { step: '02', name: 'Define', desc: 'Architecture blueprints, financial feasibility, and comprehensive DPR drafting.' },
              { step: '03', name: 'Engineer / Advise', desc: 'Modular web engineering, BPR optimization, and rigorous security testing.' },
              { step: '04', name: 'Deploy / Enable', desc: 'District rollouts, Train-the-Trainer cascades, and sandboxed simulation labs.' },
              { step: '05', name: 'Support / Improve', desc: 'SLA governance, vulnerability remediation, and continuous performance tuning.' }
            ].map((stg) => (
              <div
                key={stg.step}
                className="card"
                style={{
                  padding: 'var(--space-lg)',
                  borderTop: '3px solid var(--color-primary)'
                }}
              >
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: 'var(--space-xs)' }}>
                  {stg.step}
                </div>
                <h4 style={{ fontSize: '1.15rem', marginBottom: 'var(--space-xs)' }}>{stg.name}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  {stg.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09 — CAPABILITIES AT A GLANCE (Verified Qualitative Matrix) */}
      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Capability Matrix"
            title="Institutional Capabilities at a Glance"
            lead="Every capability statement is grounded in verified service scope and delivery infrastructure."
          />

          <div className="grid-4">
            {metricsData.capabilityPillars.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: 'var(--color-surface-ice)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-card)',
                  padding: 'var(--space-xl)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-primary)' }}>
                    {item.label}
                  </span>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary-deep)', margin: 'var(--space-xs) 0' }}>
                    {item.value}
                  </div>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    {item.detail}
                  </p>
                </div>

                <div style={{ marginTop: 'var(--space-lg)', paddingTop: 'var(--space-sm)', borderTop: '1px solid var(--color-border-subtle)' }}>
                  <span className="status-pill status-pill-approved">Verified Scope</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — INSIGHTS & PERSPECTIVES */}
      <section className="section section-ice">
        <div className="container">
          <SectionHeading
            eyebrow="Insights & Resources"
            title="Perspectives on Institutional Transformation"
            lead="Thoughtful analysis on software modernization, business process re-engineering, and workforce change management."
          />

          <div className="grid-3" style={{ marginBottom: 'var(--space-2xl)' }}>
            {publishedInsights.map((insight) => (
              <div key={insight.id} className="card" style={{ height: '100%', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-sm)' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase' }}>
                      {insight.category}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)' }}>
                      {insight.readingTime}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-sm)' }}>
                    {insight.title}
                  </h3>

                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    {insight.excerpt}
                  </p>
                </div>

                <div style={{ paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-border-subtle)', marginTop: 'var(--space-md)' }}>
                  <Link
                    to={`/insights/${insight.slug}`}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-primary)' }}
                  >
                    <span>Read Article</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/insights" className="btn btn-outline">
              <span>View All Perspectives</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 11 — BRING US YOUR BRIEF (High-Emphasis Navy CTA Band) */}
      <CtaBand
        title="Planning a transformation, program rollout or staffing requirement?"
        subtitle="Techno Horizon connects custom software development, institutional BPR/DPR advisory, and vetted manpower to deliver accountable results."
        primaryAction={{ label: 'Request a Proposal', href: '/request-proposal' }}
        secondaryAction={{ label: 'Schedule Consultation', href: '/schedule-consultation' }}
      />

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid-layout {
            grid-template-columns: 1fr !important;
          }
          .sector-tab-grid {
            grid-template-columns: 1fr !important;
          }
          .methodology-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .methodology-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
