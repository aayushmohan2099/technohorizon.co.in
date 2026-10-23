import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Calendar, Clock, Globe, Mail, Copy,
  CheckCircle2, AlertCircle, ArrowRight, ShieldCheck
} from 'lucide-react';
import { usePageSeo } from '../lib/seo';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { isValidEmail, isNonEmptyString, getTomorrowDateString } from '../lib/validation';
import { buildMailtoUrl, formatLeadBody, copyToClipboard } from '../lib/mailto';
import siteData from '../data/site.json';
import servicesData from '../data/services.json';

export default function ScheduleConsultation() {
  usePageSeo({
    title: 'Schedule a Consultation — Techno Horizon',
    description: 'Request an expert scoping discussion with Techno Horizon practice leaders for software engineering, BPR/DPR advisory, training, or staffing.'
  });

  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || 'software-it-solutions';
  const preselectedProject = searchParams.get('project') || '';

  const minDate = getTomorrowDateString();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    service: preselectedService,
    topic: preselectedProject ? `Discussion regarding ${preselectedProject}` : 'Technical Architecture & Feasibility',
    preferredDate: minDate,
    preferredTimeSlot: '11:00 AM - 01:00 PM (Morning)',
    timezone: 'Asia/Kolkata',
    subject: `Consultation Request: ${servicesData.find(s => s.id === preselectedService)?.title || 'Enterprise Advisory'}`,
    message: `Dear Techno Horizon Practice Team,\n\nI would like to schedule a consultation regarding our organization's upcoming initiatives. We would like to explore technical feasibility, delivery timelines, and engagement frameworks with your practice leadership.\n\nLooking forward to your confirmation.`,
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);
  const [draftGenerated, setDraftGenerated] = useState(false);

  // Update subject when service changes
  useEffect(() => {
    const srv = servicesData.find(s => s.id === formData.service);
    if (srv) {
      setFormData(prev => ({
        ...prev,
        subject: `Consultation Request: ${srv.title}`
      }));
    }
  }, [formData.service]);

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
    if (!isNonEmptyString(formData.preferredDate)) errs.preferredDate = 'Preferred date is required';
    if (!formData.consent) errs.consent = 'Acknowledgment of consultation terms is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleGenerateDraft = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const srvTitle = servicesData.find(s => s.id === formData.service)?.title || formData.service;

    const payload = {
      'Transmission Type': 'Consultation Booking Request',
      'Contact Representative': formData.name,
      'Work Email': formData.email,
      'Phone Number': formData.phone || 'Not Provided',
      'Organization': formData.organization,
      'Practice Discipline': srvTitle,
      'Discussion Topic': formData.topic,
      'Requested Date': formData.preferredDate,
      'Requested Time Slot': formData.preferredTimeSlot,
      'Time Zone': formData.timezone,
      'Subject': formData.subject,
      'Message & Agenda': formData.message,
      'Booking Status': 'Consultation Request (Pending Confirmation from Techno Horizon Team)'
    };

    const emailBody = formatLeadBody(payload);
    const mailtoUrl = buildMailtoUrl({
      to: siteData.contactEmail,
      subject: `[Consultation Request] ${formData.organization} — ${srvTitle}`,
      body: emailBody
    });

    setDraftGenerated(true);
    window.location.href = mailtoUrl;
  };

  const handleCopy = async () => {
    if (!validate()) return;
    const srvTitle = servicesData.find(s => s.id === formData.service)?.title || formData.service;

    const payload = {
      'Transmission Type': 'Consultation Booking Request',
      'Contact Representative': formData.name,
      'Work Email': formData.email,
      'Phone Number': formData.phone || 'Not Provided',
      'Organization': formData.organization,
      'Practice Discipline': srvTitle,
      'Discussion Topic': formData.topic,
      'Requested Date': formData.preferredDate,
      'Requested Time Slot': formData.preferredTimeSlot,
      'Time Zone': formData.timezone,
      'Subject': formData.subject,
      'Message & Agenda': formData.message
    };

    const text = formatLeadBody(payload);
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
    }
  };

  return (
    <div className="schedule-consultation-page">
      <section className="section-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Schedule Consultation' }]} />

          <div style={{ maxWidth: '820px' }}>
            <span className="eyebrow eyebrow-red">Expert Discussion</span>
            <h1 style={{ marginBottom: 'var(--space-md)' }}>
              Request a Discussion with Our Practice Leadership
            </h1>
            <p className="lead" style={{ marginBottom: 'var(--space-xl)' }}>
              Engage directly with our technical architects and business advisory consultants. Select your preferred date, time slot, and discussion focus.
            </p>
          </div>
        </div>
      </section>

      {/* Main Booking Form */}
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
            {/* Consultation Transparency Notice */}
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
                <Clock size={16} color="var(--color-primary)" />
                <span>Consultation Scheduling Notice</span>
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                This is a consultation request. A selected time slot is not a confirmed appointment; our team will review practice leader availability and confirm formal calendar arrangements with you.
              </p>
            </div>

            <form onSubmit={handleGenerateDraft} noValidate>
              
              {/* Row 1: Contact Details */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }} className="form-row-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="consult-name">
                    Full Name <span className="required-mark">*</span>
                  </label>
                  <input
                    id="consult-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g., Dr. Manoj Kulkarni"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="consult-email">
                    Work Email <span className="required-mark">*</span>
                  </label>
                  <input
                    id="consult-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g., m.kulkarni@institution.org"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>
              </div>

              {/* Row 2: Organization & Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }} className="form-row-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="consult-org">
                    Organization / Entity <span className="required-mark">*</span>
                  </label>
                  <input
                    id="consult-org"
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="e.g., State Mission Agency"
                    className={`form-control ${errors.organization ? 'is-invalid' : ''}`}
                  />
                  {errors.organization && <span className="form-error">{errors.organization}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="consult-phone">
                    Phone Number (Optional)
                  </label>
                  <input
                    id="consult-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g., +91 98200 11223"
                    className="form-control"
                  />
                </div>
              </div>

              {/* Row 3: Service & Topic */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }} className="form-row-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="consult-service">
                    Practice Discipline
                  </label>
                  <select
                    id="consult-service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                    {servicesData.map(s => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="consult-topic">
                    Primary Discussion Topic
                  </label>
                  <select
                    id="consult-topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                    <option value="Technical Architecture & Feasibility">Technical Architecture & Feasibility</option>
                    <option value="Business Process Re-engineering (BPR)">Business Process Re-engineering (BPR)</option>
                    <option value="Detailed Project Report (DPR) Formulation">Detailed Project Report (DPR) Formulation</option>
                    <option value="Frontline Training & Change Management">Frontline Training & Change Management</option>
                    <option value="Manpower & Specialized Technical Staffing">Manpower & Specialized Technical Staffing</option>
                    <option value="Tender & RFP Scope Alignment">Tender & RFP Scope Alignment</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Date, Time & Timezone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--space-md)' }} className="form-row-3">
                <div className="form-group">
                  <label className="form-label" htmlFor="consult-date">
                    Preferred Date <span className="required-mark">*</span>
                  </label>
                  <input
                    id="consult-date"
                    type="date"
                    name="preferredDate"
                    min={minDate}
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className={`form-control ${errors.preferredDate ? 'is-invalid' : ''}`}
                  />
                  {errors.preferredDate && <span className="form-error">{errors.preferredDate}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="consult-time">
                    Preferred Window
                  </label>
                  <select
                    id="consult-time"
                    name="preferredTimeSlot"
                    value={formData.preferredTimeSlot}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                    <option value="10:00 AM - 12:00 PM (Morning)">10:00 AM - 12:00 PM (Morning)</option>
                    <option value="02:00 PM - 04:00 PM (Afternoon)">02:00 PM - 04:00 PM (Afternoon)</option>
                    <option value="04:30 PM - 06:30 PM (Evening)">04:30 PM - 06:30 PM (Evening)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="consult-tz">
                    Time Zone
                  </label>
                  <select
                    id="consult-tz"
                    name="timezone"
                    value={formData.timezone}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                    <option value="Asia/Kolkata">Asia/Kolkata (IST, UTC+5:30)</option>
                    <option value="UTC">UTC (Universal Coordinated Time)</option>
                    <option value="Asia/Dubai">Asia/Dubai (GST, UTC+4:00)</option>
                    <option value="Asia/Singapore">Asia/Singapore (SGT, UTC+8:00)</option>
                  </select>
                </div>
              </div>

              {/* Subject */}
              <div className="form-group">
                <label className="form-label" htmlFor="consult-subj">
                  Subject Line
                </label>
                <input
                  id="consult-subj"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

              {/* Editable Pretyped Message */}
              <div className="form-group">
                <label className="form-label" htmlFor="consult-msg">
                  Message & Discussion Agenda
                </label>
                <textarea
                  id="consult-msg"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-control"
                  rows={4}
                />
              </div>

              {/* Consent Checkbox */}
              <div className="form-check" style={{ marginBottom: 'var(--space-xl)' }}>
                <input
                  type="checkbox"
                  id="consult-consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                />
                <label htmlFor="consult-consent">
                  I understand that this request initiates calendar coordination with Techno Horizon and that our discussion will be confirmed via email. <span className="required-mark">*</span>
                </label>
              </div>
              {errors.consent && <div className="form-error" style={{ marginBottom: 'var(--space-md)' }}>{errors.consent}</div>}

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button type="submit" className="btn btn-primary btn-lg" style={{ flex: '1 1 220px' }}>
                  <Mail size={18} />
                  <span>Generate Consultation Email Draft</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="btn btn-outline btn-lg"
                  style={{ flex: '1 1 220px' }}
                >
                  <Copy size={18} />
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Consultation Request'}</span>
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
                  Your consultation draft has been prepared and opened in your email client addressed to <strong>{siteData.contactEmail}</strong>. Our team will reply to confirm the appointment.
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
