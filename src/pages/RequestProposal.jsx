import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  FileText, CheckSquare, Square, Mail, Copy,
  ArrowRight, ShieldCheck, CheckCircle2, AlertCircle
} from 'lucide-react';
import { usePageSeo } from '../lib/seo';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { isValidEmail, isNonEmptyString } from '../lib/validation';
import { buildMailtoUrl, formatLeadBody, copyToClipboard } from '../lib/mailto';
import siteData from '../data/site.json';
import servicesData from '../data/services.json';
import sectorsData from '../data/sectors.json';

export default function RequestProposal() {
  usePageSeo({
    title: 'Request a Formal Proposal — Techno Horizon',
    description: 'Submit an institutional proposal request for custom software development, BPR/DPR advisory, training programs, or manpower solutions.'
  });

  const [searchParams] = useSearchParams();
  const preselectedSector = searchParams.get('sector') || 'Government';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    sector: preselectedSector.includes('gov') ? 'Government' : 'Private Enterprise',
    selectedServices: ['software-it-solutions'],
    objectives: '',
    scope: '',
    timeline: 'Within 3 Months',
    location: '',
    preferredContact: 'Work Email',
    procurementStage: 'Initial Planning & Budgeting',
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);
  const [draftGenerated, setDraftGenerated] = useState(false);

  const toggleService = (srvId) => {
    setFormData(prev => {
      const exists = prev.selectedServices.includes(srvId);
      const updated = exists
        ? prev.selectedServices.filter(id => id !== srvId)
        : [...prev.selectedServices, srvId];
      return {
        ...prev,
        selectedServices: updated.length > 0 ? updated : [srvId]
      };
    });
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

  const validate = () => {
    const errs = {};
    if (!isNonEmptyString(formData.name)) errs.name = 'Full name is required';
    if (!isValidEmail(formData.email)) errs.email = 'Valid work email is required';
    if (!isNonEmptyString(formData.organization)) errs.organization = 'Organization is required';
    if (!isNonEmptyString(formData.objectives)) errs.objectives = 'Primary objectives are required';
    if (!formData.consent) errs.consent = 'Acknowledgment of processing consent is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const selectedServiceTitles = formData.selectedServices.map(
      id => servicesData.find(s => s.id === id)?.title || id
    );

    const payload = {
      'Request Type': 'Formal Scope & Proposal Intake',
      'Authorized Contact': formData.name,
      'Work Email': formData.email,
      'Phone Number': formData.phone || 'Not Specified',
      'Organization': formData.organization,
      'Institutional Sector': formData.sector,
      'Selected Service Domains': selectedServiceTitles,
      'Project Objectives': formData.objectives,
      'High-Level Scope Details': formData.scope || 'To be elaborated during scoping call',
      'Target Timeline': formData.timeline,
      'Target Location / Jurisdiction': formData.location || 'India (General / Remote)',
      'Procurement / RFP Stage': formData.procurementStage,
      'Preferred Contact Method': formData.preferredContact,
      'Lead Classification': `${formData.sector} // ${selectedServiceTitles.join(', ')}`
    };

    const emailBody = formatLeadBody(payload);
    const mailtoUrl = buildMailtoUrl({
      to: siteData.contactEmail,
      subject: `[Proposal Request] ${formData.organization} — Techno Horizon`,
      body: emailBody
    });

    setDraftGenerated(true);
    window.location.href = mailtoUrl;
  };

  const handleCopy = async () => {
    if (!validate()) return;
    const selectedServiceTitles = formData.selectedServices.map(
      id => servicesData.find(s => s.id === id)?.title || id
    );

    const payload = {
      'Request Type': 'Formal Scope & Proposal Intake',
      'Authorized Contact': formData.name,
      'Work Email': formData.email,
      'Phone Number': formData.phone || 'Not Specified',
      'Organization': formData.organization,
      'Institutional Sector': formData.sector,
      'Selected Service Domains': selectedServiceTitles,
      'Project Objectives': formData.objectives,
      'High-Level Scope Details': formData.scope || 'To be elaborated during scoping call',
      'Target Timeline': formData.timeline,
      'Target Location / Jurisdiction': formData.location || 'General / Pan-India',
      'Procurement / RFP Stage': formData.procurementStage,
      'Preferred Contact Method': formData.preferredContact
    };

    const text = formatLeadBody(payload);
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
    }
  };

  return (
    <div className="request-proposal-page">
      <section className="section-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Request a Proposal' }]} />

          <div style={{ maxWidth: '820px' }}>
            <span className="eyebrow eyebrow-red">Proposal Intake</span>
            <h1 style={{ marginBottom: 'var(--space-md)' }}>
              Request a Detailed Project Proposal
            </h1>
            <p className="lead" style={{ marginBottom: 'var(--space-xl)' }}>
              Submit high-level scope parameters for custom software engineering, institutional BPR/DPR advisory, training programs, or specialized manpower.
            </p>
          </div>
        </div>
      </section>

      {/* Main Single-Page Form */}
      <section className="section section-white">
        <div className="container container-narrow">
          <div
            style={{
              backgroundColor: 'var(--color-surface-ice)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-card-lg)',
              padding: 'var(--space-3xl)',
              boxShadow: 'var(--shadow-subtle)'
            }}
          >
            {/* Form Progress Indicator */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: 'var(--space-lg)',
                borderBottom: '1px solid var(--color-border)',
                marginBottom: 'var(--space-2xl)'
              }}
            >
              <div>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--color-primary-deep)', margin: 0 }}>
                  Institutional Scope Dossier
                </h2>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
                  Fields marked with <span style={{ color: 'var(--color-accent-red)' }}>*</span> are required
                </span>
              </div>
              <span className="status-pill status-pill-approved">
                Single-Page Intake
              </span>
            </div>

            <form onSubmit={handleGenerate} noValidate>
              
              {/* Section 1: Contact Details */}
              <div style={{ marginBottom: 'var(--space-2xl)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-md)' }}>
                  1. Authorized Representative & Organization
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }} className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="prop-name">
                      Full Name <span className="required-mark">*</span>
                    </label>
                    <input
                      id="prop-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Smt. Ananya Verma"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="prop-email">
                      Official Work Email <span className="required-mark">*</span>
                    </label>
                    <input
                      id="prop-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g., ananya.verma@corp.in"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }} className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="prop-org">
                      Organization / Department <span className="required-mark">*</span>
                    </label>
                    <input
                      id="prop-org"
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="e.g., UP State Electronic Corporation"
                      className={`form-control ${errors.organization ? 'is-invalid' : ''}`}
                    />
                    {errors.organization && <span className="form-error">{errors.organization}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="prop-phone">
                      Contact Phone Number
                    </label>
                    <input
                      id="prop-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g., +91 94150 12345"
                      className="form-control"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }} className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="prop-sector">
                      Institutional Sector
                    </label>
                    <select
                      id="prop-sector"
                      name="sector"
                      value={formData.sector}
                      onChange={handleInputChange}
                      className="form-control"
                    >
                      <option value="Government">State or Central Government Department</option>
                      <option value="PSU">Public Sector Undertaking (PSU)</option>
                      <option value="Private Enterprise">Private Enterprise / Corporation</option>
                      <option value="Semi-Public / Utility">Semi-Public Authority / Utility Board</option>
                      <option value="NGO / Foundation">Non-Profit / Development Foundation</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="prop-contact-pref">
                      Preferred Follow-up Channel
                    </label>
                    <select
                      id="prop-contact-pref"
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleInputChange}
                      className="form-control"
                    >
                      <option value="Work Email">Official Email Correspondence</option>
                      <option value="Video Conference">Virtual Scoping Meeting (Teams / Meet)</option>
                      <option value="Phone Call">Direct Telephonic Discussion</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 2: Services Multi-Select */}
              <div style={{ marginBottom: 'var(--space-2xl)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-sm)' }}>
                  2. Services Required (Select all that apply)
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-md)' }}>
                  Our disciplines can be engaged individually or as a unified delivery consortium.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }} className="form-row-2">
                  {servicesData.map((srv) => {
                    const isSelected = formData.selectedServices.includes(srv.id);
                    return (
                      <div
                        key={srv.id}
                        onClick={() => toggleService(srv.id)}
                        style={{
                          backgroundColor: isSelected ? 'var(--color-white)' : 'var(--color-surface-hover)',
                          border: '2px solid',
                          borderColor: isSelected ? 'var(--color-primary)' : 'var(--color-border)',
                          borderRadius: 'var(--radius-md)',
                          padding: '12px 16px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          cursor: 'pointer',
                          transition: 'all var(--transition-fast)'
                        }}
                      >
                        {isSelected ? (
                          <CheckSquare size={20} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                        ) : (
                          <Square size={20} color="var(--color-border-strong)" style={{ flexShrink: 0 }} />
                        )}
                        <div>
                          <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-primary-deep)' }}>
                            {srv.title}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>
                            {srv.shortTitle}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Section 3: Scope & Timeline */}
              <div style={{ marginBottom: 'var(--space-2xl)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary-deep)', marginBottom: 'var(--space-md)' }}>
                  3. Project Scope & Procurement Context
                </h3>

                <div className="form-group">
                  <label className="form-label" htmlFor="prop-objectives">
                    Primary Objectives & Business Goals <span className="required-mark">*</span>
                  </label>
                  <textarea
                    id="prop-objectives"
                    name="objectives"
                    value={formData.objectives}
                    onChange={handleInputChange}
                    placeholder="What specific outcome or institutional transformation are you aiming to achieve?"
                    className={`form-control ${errors.objectives ? 'is-invalid' : ''}`}
                    rows={3}
                  />
                  {errors.objectives && <span className="form-error">{errors.objectives}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="prop-scope">
                    Scope Details & Constraints (Optional)
                  </label>
                  <textarea
                    id="prop-scope"
                    name="scope"
                    value={formData.scope}
                    onChange={handleInputChange}
                    placeholder="Include relevant technical architectures, legacy platforms, district locations, or staffing scale..."
                    className="form-control"
                    rows={3}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }} className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="prop-timeline">
                      Expected Mobilization Timeline
                    </label>
                    <select
                      id="prop-timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="form-control"
                    >
                      <option value="Immediate (Within 30 Days)">Immediate (Within 30 Days)</option>
                      <option value="Within 3 Months">Within 1 to 3 Months</option>
                      <option value="Next Financial Quarter">Next Financial Quarter</option>
                      <option value="Long-term Scoping / Feasibility">Long-term Scoping & Feasibility</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="prop-stage">
                      Current Procurement / RFP Stage
                    </label>
                    <select
                      id="prop-stage"
                      name="procurementStage"
                      value={formData.procurementStage}
                      onChange={handleInputChange}
                      className="form-control"
                    >
                      <option value="Initial Planning & Budgeting">Initial Planning & Internal Budgeting</option>
                      <option value="Drafting EOI / RFP Document">Drafting EOI / Tender Document</option>
                      <option value="Tender Formally Published">Tender Formally Published</option>
                      <option value="Direct Contracting / Empanelment">Direct Contracting / Institutional Empanelment</option>
                    </select>
                  </div>
                </div>

                {/* File Attachment Guidance Box */}
                <div
                  style={{
                    backgroundColor: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--space-md) var(--space-lg)',
                    marginTop: 'var(--space-sm)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary-deep)', marginBottom: '3px' }}>
                    <ShieldCheck size={16} color="var(--color-primary)" />
                    <span>Tender & Document Attachment Guidance</span>
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.45 }}>
                    Browser-based file uploads are disabled by default for data governance. If you have tender documentation, RFPs, or architectural blueprints, email them directly to <strong>{siteData.contactEmail}</strong> referencing this request.
                  </p>
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="form-check" style={{ marginBottom: 'var(--space-xl)' }}>
                <input
                  type="checkbox"
                  id="prop-consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                />
                <label htmlFor="prop-consent">
                  I confirm that I am authorized to submit this institutional scoping inquiry on behalf of the named organization, and acknowledge that Techno Horizon will process these details for proposal formulation. <span className="required-mark">*</span>
                </label>
              </div>
              {errors.consent && <div className="form-error" style={{ marginBottom: 'var(--space-md)' }}>{errors.consent}</div>}

              {/* Buttons */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button type="submit" className="btn btn-primary btn-lg" style={{ flex: '1 1 220px' }}>
                  <Mail size={18} />
                  <span>Generate Proposal Email Draft</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="btn btn-outline btn-lg"
                  style={{ flex: '1 1 220px' }}
                >
                  <Copy size={18} />
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Proposal Dossier'}</span>
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
                  Your proposal draft has been opened in your email client addressed to <strong>{siteData.contactEmail}</strong>. You may attach any supplemental documents before transmitting.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .form-row-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
