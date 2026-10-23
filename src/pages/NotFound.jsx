import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, Mail, ArrowRight } from 'lucide-react';
import { usePageSeo } from '../lib/seo';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import NotFoundGraphic from '../graphics/NotFoundGraphic';

export default function NotFound() {
  usePageSeo({
    title: 'Page Not Found (404) — Techno Horizon',
    description: 'The requested route could not be found. Return to verified pathways on the Techno Horizon corporate website.'
  });

  return (
    <div className="not-found-page">
      <section className="section section-white" style={{ paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-5xl)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          
          <div style={{ marginBottom: 'var(--space-2xl)' }}>
            <NotFoundGraphic />
          </div>

          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <span className="eyebrow eyebrow-red" style={{ marginBottom: 'var(--space-sm)' }}>
              Error 404
            </span>
            <h1 style={{ fontSize: 'clamp(2rem, 3.5vw + 1rem, 3.25rem)', marginBottom: 'var(--space-md)' }}>
              Page or Document Not Found
            </h1>
            <p className="lead" style={{ marginBottom: 'var(--space-2xl)' }}>
              The pathway you followed does not correspond to an active route. Please return to our verified public sections below.
            </p>

            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/" className="btn btn-primary btn-lg">
                <Home size={18} />
                <span>Return to Home</span>
              </Link>

              <Link to="/services" className="btn btn-outline btn-lg">
                <Compass size={18} />
                <span>Explore Services</span>
              </Link>

              <Link to="/contact" className="btn btn-ghost btn-lg">
                <Mail size={18} />
                <span>Contact Desk</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
