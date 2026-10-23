import { useEffect } from 'react';
import siteData from '../data/site.json';

export function usePageSeo({ title, description }) {
  useEffect(() => {
    const fullTitle = title 
      ? `${title} | ${siteData.brandName}`
      : `${siteData.brandName} — ${siteData.tagline}`;
    
    document.title = fullTitle;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }

    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [title, description]);
}
