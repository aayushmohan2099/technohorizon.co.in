import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, ArrowRight } from 'lucide-react';
import navData from '../../data/navigation.json';
import siteData from '../../data/site.json';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-surface-navy)',
        color: 'var(--color-white)',
        position: 'relative',
        overflow: 'hidden',
        marginTop: 'auto'
      }}
      role="contentinfo"
    >
      {/* Original Horizon-Line Graphic Banner (Strictly Non-Honeycomb) */}
      <div style={{ width: '100%', height: '40px', overflow: 'hidden', opacity: 0.25 }}>
        <svg
          viewBox="0 0 1440 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%', display: 'block' }}
          preserveAspectRatio="none"
        >
          <path d="M 0 35 C 360 10, 720 40, 1080 15 C 1260 5, 1380 25, 1440 20" stroke="#EAF3FB" strokeWidth="1.5" />
          <path d="M 0 25 C 240 5, 600 35, 960 10 C 1200 30, 1360 15, 1440 10" stroke="#0F4C81" strokeWidth="2" />
        </svg>
      </div>

      <div className="container" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-3xl)' }}>
        
        {/* Brand & Vision Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr repeat(4, 1fr)',
            gap: 'var(--space-2xl)',
            marginBottom: 'var(--space-3xl)'
          }}
          className="footer-columns-grid"
        >
          {/* Brand Intro Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 'var(--space-md)' }}>
              <img
                src="/logos/TECHNO.png"
                alt="Techno Horizon"
                style={{
                  height: '38px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)'
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: 'var(--color-white)',
                  letterSpacing: '-0.02em'
                }}
              >
                Techno Horizon
              </span>
            </div>

            <p style={{ color: 'var(--color-text-inverse-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: 'var(--space-lg)' }}>
              {siteData.footer.visionLine}
            </p>

            <div
              style={{
                backgroundColor: 'rgba(234, 243, 251, 0.06)',
                border: '1px solid rgba(234, 243, 251, 0.12)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-md)',
                marginBottom: 'var(--space-lg)'
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary-light)', marginBottom: '4px' }}>
                Verified Official Channel
              </div>
              <a
                href={`mailto:${siteData.contactEmail}`}
                style={{
                  color: 'var(--color-white)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  textDecoration: 'none'
                }}
              >
                <Mail size={16} color="var(--color-accent-red)" />
                <span>{siteData.contactEmail}</span>
              </a>
            </div>

            <Link
              to="/request-proposal"
              className="btn btn-primary btn-sm"
              style={{ width: 'auto' }}
            >
              <span>Request Proposal</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Services Column */}
          <div>
            <h4 style={{ color: 'var(--color-white)', fontSize: '0.9375rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 'var(--space-md)' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {navData.footerNav.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    style={{ color: 'var(--color-text-inverse-secondary)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color var(--transition-fast)' }}
                    className="footer-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors Column */}
          <div>
            <h4 style={{ color: 'var(--color-white)', fontSize: '0.9375rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 'var(--space-md)' }}>
              Sectors
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {navData.footerNav.sectors.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    style={{ color: 'var(--color-text-inverse-secondary)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color var(--transition-fast)' }}
                    className="footer-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 style={{ color: 'var(--color-white)', fontSize: '0.9375rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 'var(--space-md)' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {navData.footerNav.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    style={{ color: 'var(--color-text-inverse-secondary)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color var(--transition-fast)' }}
                    className="footer-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance Column */}
          <div>
            <h4 style={{ color: 'var(--color-white)', fontSize: '0.9375rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 'var(--space-md)' }}>
              Governance
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: 'var(--space-lg)' }}>
              {navData.footerNav.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    style={{ color: 'var(--color-text-inverse-secondary)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color var(--transition-fast)' }}
                    className="footer-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToTop}
              className="btn btn-outline-white btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Disclaimer & Legal Note */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: 'var(--space-lg)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          <div style={{ fontSize: '0.78125rem', color: 'rgba(180, 198, 216, 0.75)', lineHeight: 1.5 }}>
            <strong>Entity Notice:</strong> {siteData.legalNamePendingVerification}. {siteData.footer.disclaimer}
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.8125rem',
              color: 'var(--color-text-inverse-secondary)',
              gap: '16px'
            }}
          >
            <div>
              © {currentYear} Techno Horizon. All rights reserved. Built as an enterprise services portfolio.
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <Link to="/privacy-policy" style={{ color: 'var(--color-text-inverse-secondary)' }} className="footer-link">Privacy Policy</Link>
              <Link to="/terms" style={{ color: 'var(--color-text-inverse-secondary)' }} className="footer-link">Terms of Engagement</Link>
              <Link to="/accessibility" style={{ color: 'var(--color-text-inverse-secondary)' }} className="footer-link">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          color: var(--color-white) !important;
          text-decoration: underline !important;
        }
        @media (max-width: 1024px) {
          .footer-columns-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .footer-columns-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
