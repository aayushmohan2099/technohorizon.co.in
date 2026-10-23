import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Mail } from 'lucide-react';

export default function CtaBand({
  title = 'Planning a transformation, program rollout, or specialized staffing requirement?',
  subtitle = 'Techno Horizon pairs custom software engineering, institutional advisory, and vetted manpower to deliver accountable outcomes.',
  primaryAction = { label: 'Request a Proposal', href: '/request-proposal' },
  secondaryAction = { label: 'Schedule Consultation', href: '/schedule-consultation' }
}) {
  return (
    <section className="section section-navy" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Horizon Accent (strictly non-honeycomb) */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, pointerEvents: 'none' }}>
        <svg viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <path d="M 0 300 C 400 100, 800 350, 1200 150" stroke="#FFFFFF" strokeWidth="2" />
          <path d="M 0 200 C 500 50, 700 300, 1200 100" stroke="#0F4C81" strokeWidth="3" />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            maxWidth: '880px',
            margin: '0 auto',
            textAlign: 'center'
          }}
        >
          <span className="eyebrow eyebrow-red" style={{ marginBottom: 'var(--space-md)' }}>
            Start an Engagement
          </span>

          <h2 style={{ fontSize: 'clamp(2rem, 3.2vw + 0.8rem, 3rem)', color: 'var(--color-white)', marginBottom: 'var(--space-md)' }}>
            {title}
          </h2>

          <p
            className="lead"
            style={{
              color: 'var(--color-text-inverse-secondary)',
              maxWidth: '680px',
              margin: '0 auto var(--space-2xl) auto'
            }}
          >
            {subtitle}
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px'
            }}
          >
            {primaryAction && (
              <Link
                to={primaryAction.href}
                className="btn btn-primary btn-lg"
              >
                <span>{primaryAction.label}</span>
                <ArrowRight size={18} />
              </Link>
            )}

            {secondaryAction && (
              <Link
                to={secondaryAction.href}
                className="btn btn-outline-white btn-lg"
              >
                <Calendar size={18} />
                <span>{secondaryAction.label}</span>
              </Link>
            )}

            <Link
              to="/contact"
              className="btn btn-ghost"
              style={{ color: 'var(--color-primary-light)' }}
            >
              <Mail size={16} />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
