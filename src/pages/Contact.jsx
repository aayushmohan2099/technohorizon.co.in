import React, { useState } from 'react';
import { Mail, Phone, Building, CheckCircle2, AlertCircle, Copy, ArrowRight, ShieldCheck } from 'lucide-react';
import { usePageSeo } from '../lib/seo';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SectionHeading from '../components/ui/SectionHeading';
import { isValidEmail, isNonEmptyString } from '../lib/validation';
import { buildMailtoUrl, formatLeadBody, copyToClipboard } from '../lib/mailto';
import siteData from '../data/site.json';
import servicesData from '../data/services.json';
import sectorsData from '../data/sectors.json';

export default function Contact() {
  usePageSeo({
    title: 'Contact Techno Horizon — General Inquiries & Consultations',
    description: 'Connect with Techno Horizon for institutional technology, advisory, training, and workforce inquiries.'
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    sector: 'Government',
    serviceInterest: 'software-it-solutions',
    subject: '',
    message: '',
    consent: false,
    marketingConsent: false
  });

  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);
  const [draftGenerated, setDraftGenerated] = useState(false);

  const validate = () => {
    const errs = {};
    if (!isNonEmptyString(formData.name)) errs.name = 'Full name is required';
    if (!isValidEmail(formData.email)) errs.email = 'Valid work email is required';
    if (!isNonEmptyString(formData.organization)) errs.organization = 'Organization name is required';
    if (!isNonEmptyString(formData.message)) errs.message = 'Inquiry message is required';
    if (!formData.consent) errs.consent = 'You must acknowledge the processing consent';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleGenerateDraft = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      'Inquiry Type': 'General / Corporate Inquiry',
      'Contact Name': formData.name,
      'Work Email': formData.email,
      'Phone Number': formData.phone || 'Not Provided',
      'Organization': formData.organization,
      'Sector': formData.sector,
      'Service Interest': formData.serviceInterest,
      'Subject': formData.subject || 'General Inquiry regarding Techno Horizon capabilities',
      'Message Details': formData.message,
      'Marketing Opt-in': formData.marketingConsent ? 'Yes' : 'No'
    };

    const emailBody = formatLeadBody(payload);
    const mailtoUrl = buildMailtoUrl({
      to: siteData.contactEmail,
      subject: `[Inquiry] ${formData.subject || formData.organization} — Techno Horizon`,
      body: emailBody
    });

    setDraftGenerated(true);
    window.location.href = mailtoUrl;
  };

  const handleCopy = async () => {
    if (!validate()) return;
    const payload = {
      'Inquiry Type': 'General / Corporate Inquiry',
      'Contact Name': formData.name,
      'Work Email': formData.email,
      'Phone Number': formData.phone || 'Not Provided',
      'Organization': formData.organization,
      'Sector': formData.sector,
      'Service Interest': formData.serviceInterest,
      'Subject': formData.subject || 'General Inquiry',
      'Message Details': formData.message
    };
    const text = formatLeadBody(payload);
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
    }
  };

  return (
    <div className="contact-page">
      <section className="section-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Contact' }]} />

          <div style={{ maxWidth: '820px' }}>
            <span className="eyebrow eyebrow-red">Get in Touch</span>
            <h1 style={{ marginBottom: 'var(--space-md)' }}>
              Let's discuss what you're building.
            </h1>
            <p className="lead" style={{ marginBottom: 'var(--space-xl)' }}>
              Whether you are preparing a government tender, planning an enterprise software architecture, or seeking specialized project staffing, our practice teams are ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Info Grid */}
      <section className="section section-white">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.25fr 0.75fr',
              gap: 'var(--space-3xl)',
              alignItems: 'flex-start'
            }}
            className="contact-layout-grid"
          >
            {/* Form Column */}
            <div
              style={{
                backgroundColor: 'var(--color-surface-ice)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-card-lg)',
                padding: 'var(--space-2xl)',
                boxShadow: 'var(--shadow-subtle)'
              }}
            >
              <h2 style={{ fontSize: '1.6rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-xs)' }}>
                Direct Inquiry Intake
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem', marginBottom: 'var(--space-xl)' }}>
                Fill out the details below. You can immediately generate a prepared email draft addressed to our coordination desk or copy the request to your clipboard.
              </p>

              <form onSubmit={handleGenerateDraft} noValidate>
                {/* Name & Email Row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }} className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">
                      Full Name <span className="required-mark">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Rajesh Sharma"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">
                      Work Email <span className="required-mark">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g., r.sharma@dept.gov.in"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>

                {/* Organization & Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }} className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-org">
                      Organization / Department <span className="required-mark">*</span>
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="e.g., Department of Rural Development"
                      className={`form-control ${errors.organization ? 'is-invalid' : ''}`}
                    />
                    {errors.organization && <span className="form-error">{errors.organization}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-phone">
                      Phone Number (Optional)
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g., +91 98765 43210"
                      className="form-control"
                    />
                  </div>
                </div>

                {/* Sector & Service Dropdowns */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }} className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-sector">
                      Institutional Sector
                    </label>
                    <select
                      id="contact-sector"
                      name="sector"
                      value={formData.sector}
                      onChange={handleInputChange}
                      className="form-control"
                    >
                      <option value="Government">Government & State Departments</option>
                      <option value="PSU">Public Sector Undertakings (PSUs)</option>
                      <option value="Private Enterprise">Private Enterprise</option>
                      <option value="NGO / Semi-Public">NGO / Semi-Public Authority</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-service">
                      Primary Service Interest
                    </label>
                    <select
                      id="contact-service"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleInputChange}
                      className="form-control"
                    >
                      {servicesData.map(s => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-subject">
                    Subject Line (Optional)
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Brief summary of inquiry..."
                    className="form-control"
                  />
                </div>

                {/* Message */}
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-msg">
                    Inquiry Details <span className="required-mark">*</span>
                  </label>
                  <textarea
                    id="contact-msg"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your scope of work, technical requirements, timelines, or tender parameters..."
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    rows={4}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                {/* Consent Checkboxes */}
                <div className="form-check" style={{ marginTop: 'var(--space-md)' }}>
                  <input
                    type="checkbox"
                    id="contact-consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="contact-consent">
                    I acknowledge that the information provided will be used exclusively by Techno Horizon to respond to this institutional inquiry in accordance with privacy guidelines. <span className="required-mark">*</span>
                  </label>
                </div>
                {errors.consent && <div className="form-error" style={{ marginBottom: 'var(--space-md)' }}>{errors.consent}</div>}

                <div className="form-check">
                  <input
                    type="checkbox"
                    id="contact-marketing"
                    name="marketingConsent"
                    checked={formData.marketingConsent}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="contact-marketing">
                    Optional: Keep me informed of future Techno Horizon practice whitepapers, case studies, and institutional insights.
                  </label>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: 'var(--space-xl)' }}>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ flex: '1 1 200px' }}>
                    <Mail size={18} />
                    <span>Generate Email Draft</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="btn btn-outline btn-lg"
                    style={{ flex: '1 1 200px' }}
                  >
                    <Copy size={18} />
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy Request Text'}</span>
                  </button>
                </div>

                {draftGenerated && (
                  <div
                    style={{
                      backgroundColor: 'var(--color-success-bg)',
                      border: '1px solid var(--color-success)',
                      color: 'var(--color-success)',
                      borderRadius: 'var(--radius-md)',
                      padding: '12px 16px',
                      marginTop: 'var(--space-lg)',
                      fontSize: '0.875rem'
                    }}
                  >
                    An email draft addressed to <strong>{siteData.contactEmail}</strong> was opened in your email client. If your client did not launch, use the "Copy Request Text" button to copy and send manually.
                  </div>
                )}
              </form>
            </div>

            {/* Sidebar Column: Verified Channel */}
            <div>
              <div
                style={{
                  backgroundColor: 'var(--color-surface-navy)',
                  color: 'var(--color-white)',
                  borderRadius: 'var(--radius-card-lg)',
                  padding: 'var(--space-2xl)',
                  marginBottom: 'var(--space-xl)',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <span className="eyebrow eyebrow-red" style={{ marginBottom: 'var(--space-md)' }}>
                  Official Coordination Desk
                </span>

                <h3 style={{ color: 'var(--color-white)', fontSize: '1.4rem', marginBottom: 'var(--space-md)' }}>
                  Techno Horizon
                </h3>

                <p style={{ color: 'var(--color-text-inverse-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: 'var(--space-xl)' }}>
                  All formal project briefs, consultation requests, RFP documents, and institutional correspondence are received through our central coordination address.
                </p>

                <div
                  style={{
                    backgroundColor: 'rgba(234, 243, 251, 0.08)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--space-md) var(--space-lg)',
                    marginBottom: 'var(--space-lg)',
                    border: '1px solid rgba(234, 243, 251, 0.15)'
                  }}
                >
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-primary-light)', fontWeight: 700, marginBottom: '4px' }}>
                    Primary Coordination Email
                  </div>
                  <a
                    href={`mailto:${siteData.contactEmail}`}
                    style={{
                      color: 'var(--color-white)',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <Mail size={18} color="var(--color-accent-red)" />
                    <span>{siteData.contactEmail}</span>
                  </a>
                </div>

                <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-inverse-secondary)', lineHeight: 1.5 }}>
                  <strong>Response Standard:</strong> Inquiries are categorized and acknowledged by the relevant technical practice director within one business day.
                </div>
              </div>

              {/* Security & Truth In Marketing Notice */}
              <div
                style={{
                  backgroundColor: 'var(--color-surface-ice)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-card)',
                  padding: 'var(--space-lg)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <ShieldCheck size={18} color="var(--color-primary)" />
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-primary-deep)' }}>
                    Enterprise Privacy Assurance
                  </span>
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                  We do not simulate automated backend submissions. Your transmission generates a clean, URL-encoded message sent directly through verified email protocols to prevent unauthorized interception.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-layout-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
