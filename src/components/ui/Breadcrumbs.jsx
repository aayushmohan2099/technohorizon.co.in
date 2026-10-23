import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
        <Home size={14} />
        <span>Home</span>
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={item.label}>
            <span className="breadcrumbs-separator" aria-hidden="true">
              <ChevronRight size={13} />
            </span>
            {isLast || !item.href ? (
              <span aria-current="page" style={{ color: 'var(--color-primary-deep)', fontWeight: 600 }}>
                {item.label}
              </span>
            ) : (
              <Link to={item.href}>{item.label}</Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
