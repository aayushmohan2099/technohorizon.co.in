import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Menu, X, ChevronDown, ArrowRight,
  Code, Briefcase, GraduationCap, Users,
  Landmark, Building2, Layers, Mail
} from 'lucide-react';
import navData from '../../data/navigation.json';
import siteData from '../../data/site.json';

const iconMap = {
  Code,
  Briefcase,
  GraduationCap,
  Users,
  Landmark,
  Building2,
  Layers
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Close dropdown on outside click or Escape
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    }

    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const toggleDropdown = (label) => {
    setActiveDropdown(current => current === label ? null : label);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Top Utility Bar */}
      <div
        style={{
          backgroundColor: 'var(--color-surface-navy)',
          color: 'var(--color-text-inverse-secondary)',
          fontSize: '0.8125rem',
          padding: '8px 0',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
        className="utility-bar"
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: 500, letterSpacing: '0.02em' }}>
            {navData.utilityBar.text}
          </span>
          <a
            href={`mailto:${siteData.contactEmail}`}
            style={{
              color: 'var(--color-primary-light)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            <Mail size={13} />
            <span>{siteData.contactEmail}</span>
          </a>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        ref={dropdownRef}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid var(--color-border)',
          transition: 'all var(--transition-fast)'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>

          {/* Logo & Brand Identity */}
          <Link
            to="/"
            style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}
            aria-label="Techno Horizon Homepage"
          >
            <img
              src="/logos/TECHNO.png"
              alt="Techno Horizon Logo"
              style={{
                height: '42px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block'
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: 'var(--color-primary-deep)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1
                }}
              >
                TechnoHorizon
              </span>
              <span
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  color: 'var(--color-text-secondary)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase'
                }}
              >
                Enterprise Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            className="desktop-nav"
            aria-label="Main Navigation"
          >
            {navData.mainNav.map((item) => {
              if (item.hasDropdown) {
                const isOpen = activeDropdown === item.label;
                return (
                  <div key={item.label} style={{ position: 'relative' }}>
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.label)}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: isOpen ? 'var(--color-primary)' : 'var(--color-text-main)',
                        fontWeight: 600,
                        fontSize: '0.9375rem',
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-sm)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        cursor: 'pointer',
                        transition: 'color var(--transition-fast)'
                      }}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={15}
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'none',
                          transition: 'transform var(--transition-fast)'
                        }}
                      />
                    </button>

                    {/* Mega Dropdown Menu */}
                    {isOpen && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: item.label === 'Sectors' ? '-60px' : '-20px',
                          width: '380px',
                          backgroundColor: 'var(--color-white)',
                          border: '1px solid var(--color-border)',
                          borderRadius: 'var(--radius-card)',
                          boxShadow: 'var(--shadow-lg)',
                          padding: 'var(--space-md)',
                          marginTop: '8px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px',
                          zIndex: 1100
                        }}
                        role="menu"
                      >
                        {item.items.map((sub) => {
                          const SubIcon = iconMap[sub.icon] || Code;
                          return (
                            <Link
                              key={sub.title}
                              to={sub.href}
                              role="menuitem"
                              style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '12px',
                                padding: '12px',
                                borderRadius: 'var(--radius-md)',
                                textDecoration: 'none',
                                transition: 'background-color var(--transition-fast)'
                              }}
                              className="dropdown-item"
                            >
                              <div
                                style={{
                                  padding: '8px',
                                  borderRadius: 'var(--radius-sm)',
                                  backgroundColor: 'var(--color-primary-light)',
                                  color: 'var(--color-primary)',
                                  flexShrink: 0
                                }}
                              >
                                <SubIcon size={18} />
                              </div>
                              <div>
                                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-primary-deep)', marginBottom: '2px' }}>
                                  {sub.title}
                                </div>
                                <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                                  {sub.description}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  style={{
                    color: 'var(--color-text-main)',
                    fontWeight: 600,
                    fontSize: '0.9375rem',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)',
                    textDecoration: 'none',
                    transition: 'color var(--transition-fast)'
                  }}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <Link
              to={navData.primaryAction.href}
              className="btn btn-primary"
              style={{ padding: '10px 20px', fontSize: '0.9rem' }}
            >
              <span>{navData.primaryAction.label}</span>
              <ArrowRight size={16} />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(prev => !prev)}
              aria-label={mobileOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileOpen}
              className="mobile-menu-toggle"
              style={{
                display: 'none',
                minWidth: '44px',
                minHeight: '44px',
                background: 'transparent',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-main)',
                cursor: 'pointer'
              }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: '76px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--color-white)',
            zIndex: 999,
            overflowY: 'auto',
            padding: 'var(--space-xl) var(--gutter-mobile)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-lg)'
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Services Group */}
            <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '14px' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '8px' }}>
                Services
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link to="/services" style={{ fontWeight: 600, color: 'var(--color-text-main)', padding: '6px 0' }}>All Services Overview</Link>
                <Link to="/services/software-it-solutions" style={{ color: 'var(--color-text-secondary)', padding: '4px 0' }}>Software & IT Solutions</Link>
                <Link to="/services/business-consultancy" style={{ color: 'var(--color-text-secondary)', padding: '4px 0' }}>Business Consultancy (BPR & DPR)</Link>
                <Link to="/services/training-skill-development" style={{ color: 'var(--color-text-secondary)', padding: '4px 0' }}>Training & Skill Development</Link>
                <Link to="/services/manpower-solutions" style={{ color: 'var(--color-text-secondary)', padding: '4px 0' }}>Manpower Solutions</Link>
              </div>
            </div>

            {/* Sectors Group */}
            <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '14px' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '8px' }}>
                Sectors
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link to="/sectors" style={{ fontWeight: 600, color: 'var(--color-text-main)', padding: '6px 0' }}>Sectors Overview</Link>
                <Link to="/sectors/government-public-sector" style={{ color: 'var(--color-text-secondary)', padding: '4px 0' }}>Government & Public Sector</Link>
                <Link to="/sectors/private-enterprise" style={{ color: 'var(--color-text-secondary)', padding: '4px 0' }}>Private Enterprise & NGOs</Link>
              </div>
            </div>

            {/* Other Main Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link to="/projects" style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--color-text-main)' }}>Projects & Case Studies</Link>
              <Link to="/clients" style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--color-text-main)' }}>Clients & References</Link>
              <Link to="/approach" style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--color-text-main)' }}>Delivery Approach</Link>
              <Link to="/about" style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--color-text-main)' }}>About Techno Horizon</Link>
              <Link to="/about/our-journey" style={{ color: 'var(--color-text-secondary)', marginLeft: '12px' }}>Company Journey & History</Link>
              <Link to="/insights" style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--color-text-main)' }}>Insights & Articles</Link>
              <Link to="/contact" style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--color-text-main)' }}>Contact Us</Link>
            </div>
          </div>

          <div style={{ marginTop: 'var(--space-2xl)', paddingTop: 'var(--space-lg)', borderTop: '1px solid var(--color-border)' }}>
            <Link
              to="/request-proposal"
              className="btn btn-primary"
              style={{ width: '100%', marginBottom: '12px' }}
            >
              Request a Proposal
            </Link>
            <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-tertiary)', textAlign: 'center' }}>
              Inquiries: contact@technohorizon.co.in
            </div>
          </div>
        </div>
      )}

      <style>{`
        .nav-link:hover {
          color: var(--color-primary) !important;
          background-color: var(--color-primary-light);
        }
        .nav-link.active {
          color: var(--color-primary) !important;
          background-color: var(--color-primary-light);
        }
        .dropdown-item:hover {
          background-color: var(--color-primary-light);
        }
        @media (max-width: 1080px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: inline-flex !important;
          }
        }
        @media (max-width: 640px) {
          .utility-bar {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
