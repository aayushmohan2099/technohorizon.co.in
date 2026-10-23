import React from 'react';

export default function SectionHeading({
  eyebrow,
  eyebrowColor = 'blue', // 'blue' | 'red' | 'navy'
  title,
  lead,
  align = 'center',
  maxWidth = '760px',
  theme = 'light' // 'light' | 'navy'
}) {
  const isNavy = theme === 'navy';
  const eyebrowClass = eyebrowColor === 'red' ? 'eyebrow eyebrow-red' : (isNavy || eyebrowColor === 'navy') ? 'eyebrow eyebrow-navy' : 'eyebrow';

  return (
    <div
      className={`section-header ${align === 'center' ? 'text-center' : ''}`}
      style={{
        maxWidth: align === 'center' ? maxWidth : '100%',
        marginLeft: align === 'center' ? 'auto' : 0,
        marginRight: align === 'center' ? 'auto' : 0,
        marginBottom: 'var(--space-2xl)'
      }}
    >
      {eyebrow && (
        <div>
          <span className={eyebrowClass}>{eyebrow}</span>
        </div>
      )}
      {title && (
        <h2
          style={{
            color: isNavy ? 'var(--color-white)' : 'var(--color-primary-deep)',
            marginBottom: lead ? 'var(--space-md)' : 0
          }}
        >
          {title}
        </h2>
      )}
      {lead && (
        <p
          className="lead"
          style={{
            color: isNavy ? 'var(--color-text-inverse-secondary)' : 'var(--color-text-secondary)',
            margin: align === 'center' ? '0 auto' : 0
          }}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
