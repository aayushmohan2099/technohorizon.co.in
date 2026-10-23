import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap, Mail, Copy, CheckCircle2,
  Calendar, Users, MapPin, ShieldCheck
} from 'lucide-react';
import { usePageSeo } from '../lib/seo';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { isValidEmail, isNonEmptyString, getTomorrowDateString } from '../lib/validation';
import { buildMailtoUrl, formatLeadBody, copyToClipboard } from '../lib/mailto';
import siteData from '../data/site.json';

export default function RequestTraining() {
  usePageSeo({
    title: 'Request a Training Session — Techno Horizon',
    description: 'Request institutional training, Train-the-Trainer (ToT) programs, or digital adoption workshops for frontline and administrative teams.'
  });

  const minDate = getTomorrowDateString();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    trainingScope: 'Digital System & Software Adoption',
    audienceType: 'Frontline Departmental Operators & Clerks',
    expectedParticipants: '25 - 50 Participants',
    deliveryFormat: 'Hybrid (Classroom + Virtual Simulation)',
    targetDate: minDate,
    location: '',
    objectives: '',
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);
  const [draftGenerated, setDraftGenerated] = useState(false);

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
    if (!isNonEmptyString(formData.objectives)) errs.objectives = 'Training objectives are required';
    if (!formData.consent) errs.consent = 'Acknowledgment of training request terms is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      'Request Type': 'Institutional Training Session Request',
      'Coordinator Name': formData.name,
      'Official Email': formData.email,
      'Contact Phone': formData.phone || 'Not Provided',
      'Organization / Department': formData.organization,
      'Training Focus': formData.trainingScope,
      'Target Audience': formData.audienceType,
      'Cohort Size': formData.expectedParticipants,
      'Delivery Format': formData.deliveryFormat,
      'Target Start Date': formData.targetDate,
      'City / Region / Facility': formData.location || 'Pan-State / Multiple Locations',
      'Learning Objectives': formData.objectives,
      'Additional Context': formData.message || 'Standard curriculum alignment requested',
      'Status': 'Training Request Initiated (Pending Faculty Confirmation)'
    };

    const emailBody = formatLeadBody(payload);
    const mailtoUrl = buildMailtoUrl({
      to: siteData.contactEmail,
      subject: `[Training Request] ${formData.organization} — ${formData.trainingScope}`,
      body: emailBody
    });

    setDraftGenerated(true);
    window.location.href = mailtoUrl;
  };

  const handleCopy = async () => {
    if (!validate()) return;
    const payload = {
      'Request Type': 'Institutional Training Session Request',
      'Coordinator Name': formData.name,
      'Official Email': formData.email,
      'Contact Phone': formData.phone || 'Not Provided',
      'Organization / Department': formData.organization,
      'Training Focus': formData.trainingScope,
      'Target Audience': formData.audienceType,
      'Cohort Size': formData.expectedParticipants,
      'Delivery Format': formData.deliveryFormat,
      'Target Start Date': formData.targetDate,
      'City / Region': formData.location || 'Multiple Locations',
      'Learning Objectives': formData.objectives
    };
    const text = formatLeadBody(payload);
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
    }
  };

  return (
    <div className="request-training-page">
      <section className="section-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Request Training' }]} />

          <div style={{ maxWidth: '820px' }}>
            <span className="eyebrow eyebrow-red">Workforce Capacity</span>
            <h1 style={{ marginBottom: 'var(--space-md)' }}>
              Request an Institutional Training Session
            </h1>
            <p className="lead" style={{ marginBottom: 'var(--space-xl)' }}>
              Structure customized digital adoption workshops, Train-the-Trainer cascades, and organizational change management sessions for your workforce.
            </p>
          </div>
        </div>
      </section>

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
            {/* Notice */}
            <div
              style={{
                backgroundColor: 'var(--color-primary-light)',
                borderLeft: '4px solid var(--color-primary)',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                padding: 'var(--space-md) var(--space-lg)',
                marginBottom: 'var(--space-2xl)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-primary-deep)', marginBottom: '4px' }}>
                <GraduationCap size={16} color="var(--color-primary)" />
                <span>Training Intake Protocol</span>
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                Submitting this request prepares an authorized training intake dossier. Our instructional team will review your cohort requirements and confirm faculty schedules with your coordinator.
              </p>
            </div>

            <form onSubmit={handleGenerate} noValidate>
              
              {/* Row 1: Contact Details */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }} className="form-row-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="trn-name">
                    Coordinator Name <span className="required-mark">*</span>
                  </label>
                  <input
                    id="trn-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g., Shri Pradeep Saxena"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="trn-email">
                    Official Email <span className="required-mark">*</span>
                  </label>
                  <input
                    id="trn-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g., p.saxena@upsdm.gov.in"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>
              </div>

              {/* Row 2: Organization & Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }} className="form-row-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="trn-org">
                    Department / Organization <span className="required-mark">*</span>
                  </label>
                  <input
                    id="trn-org"
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="e.g., State Skill Development Mission"
                    className={`form-control ${errors.organization ? 'is-invalid' : ''}`}
                  />
                  {errors.organization && <span className="form-error">{errors.organization}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="trn-phone">
                    Phone Number (Optional)
                  </label>
                  <input
                    id="trn-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g., +91 94150 99887"
                    className="form-control"
                  />
                </div>
              </div>

              {/* Row 3: Scope & Cohort Size */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }} className="form-row-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="trn-scope">
                    Training Focus
                  </label>
                  <select
                    id="trn-scope"
                    name="trainingScope"
                    value={formData.trainingScope}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                    <option value="Digital System & Software Adoption">Digital System & Software Adoption</option>
                    <option value="Train-the-Trainer (ToT) Framework">Train-the-Trainer (ToT) Master Cohort</option>
                    <option value="Institutional Change Management">Institutional Change Management</option>
                    <option value="Executive Data-Driven Decision Making">Executive Data-Driven Decision Making</option>
                    <option value="Operator Compliance & Fraud Prevention">Operator Compliance & Fraud Prevention</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="trn-size">
                    Expected Participant Count
                  </label>
                  <select
                    id="trn-size"
                    name="expectedParticipants"
                    value={formData.expectedParticipants}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                    <option value="10 - 25 Participants (Intensive Master Lab)">10 - 25 Participants (Intensive Master Lab)</option>
                    <option value="25 - 50 Participants (Standard Cohort)">25 - 50 Participants (Standard Cohort)</option>
                    <option value="50 - 200 Participants (District Rollout)">50 - 200 Participants (District Rollout)</option>
                    <option value="200+ Participants (Statewide Multi-Zone Cascade)">200+ Participants (Statewide Multi-Zone Cascade)</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Delivery Format, Date, Location */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--space-md)' }} className="form-row-3">
                <div className="form-group">
                  <label className="form-label" htmlFor="trn-format">
                    Delivery Format
                  </label>
                  <select
                    id="trn-format"
                    name="deliveryFormat"
                    value={formData.deliveryFormat}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                    <option value="In-Person (On-Site Client Facility)">In-Person (Client Facility)</option>
                    <option value="Virtual Live Simulation">Virtual Live Simulation</option>
                    <option value="Hybrid (Classroom + Virtual Simulation)">Hybrid (Classroom + Virtual)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="trn-date">
                    Target Start Date
                  </label>
                  <input
                    id="trn-date"
                    type="date"
                    name="targetDate"
                    min={minDate}
                    value={formData.targetDate}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="trn-loc">
                    City / Facility
                  </label>
                  <input
                    id="trn-loc"
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g., Lucknow / State HQ"
                    className="form-control"
                  />
                </div>
              </div>

              {/* Objectives */}
              <div className="form-group">
                <label className="form-label" htmlFor="trn-objectives">
                  Core Learning Objectives <span className="required-mark">*</span>
                </label>
                <textarea
                  id="trn-objectives"
                  name="objectives"
                  value={formData.objectives}
                  onChange={handleInputChange}
                  placeholder="Outline the operational skills, software workflows, or error rates you wish to improve..."
                  className={`form-control ${errors.objectives ? 'is-invalid' : ''}`}
                  rows={3}
                />
                {errors.objectives && <span className="form-error">{errors.objectives}</span>}
              </div>

              {/* Additional Context */}
              <div className="form-group">
                <label className="form-label" htmlFor="trn-msg">
                  Additional Details / Specific Software Modules (Optional)
                </label>
                <textarea
                  id="trn-msg"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Mention if custom sandboxes, translation into regional dialects, or certification exams are required..."
                  className="form-control"
                  rows={2}
                />
              </div>

              {/* Consent */}
              <div className="form-check" style={{ marginBottom: 'var(--space-xl)' }}>
                <input
                  type="checkbox"
                  id="trn-consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                />
                <label htmlFor="trn-consent">
                  I confirm that this training request initiates curriculum planning with Techno Horizon and that formal session dates will be coordinated directly. <span className="required-mark">*</span>
                </label>
              </div>
              {errors.consent && <div className="form-error" style={{ marginBottom: 'var(--space-md)' }}>{errors.consent}</div>}

              {/* Buttons */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button type="submit" className="btn btn-primary btn-lg" style={{ flex: '1 1 220px' }}>
                  <Mail size={18} />
                  <span>Generate Training Request Draft</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="btn btn-outline btn-lg"
                  style={{ flex: '1 1 220px' }}
                >
                  <Copy size={18} />
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Training Request'}</span>
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
                  Your training session request has been formatted and opened in your email client addressed to <strong>{siteData.contactEmail}</strong>. Our instructional practice team will review and reply.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .form-row-2,
          .form-row-3 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
