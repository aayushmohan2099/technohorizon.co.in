import siteData from '../data/site.json';

/**
 * Creates a safely encoded mailto link
 */
export function buildMailtoUrl({
  to = siteData.contactEmail,
  subject = 'Inquiry — Techno Horizon',
  body = ''
}) {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
}

/**
 * Formats lead object into clean human-readable email body
 */
export function formatLeadBody(fields) {
  let lines = [
    '=== TECHNO HORIZON OFFICIAL INTAKE TRANSMISSION ===',
    `Timestamp: ${new Date().toISOString()}`,
    `Source: Institutional Web Portal (Client-Side Intake)`,
    '--------------------------------------------------',
    ''
  ];

  for (const [key, value] of Object.entries(fields)) {
    if (value !== undefined && value !== null && value !== '') {
      if (Array.isArray(value)) {
        lines.push(`${key.toUpperCase()}:`);
        value.forEach(item => lines.push(`  - ${item}`));
      } else if (typeof value === 'boolean') {
        lines.push(`${key.toUpperCase()}: ${value ? 'Confirmed / Acknowledged' : 'No'}`);
      } else {
        lines.push(`${key.toUpperCase()}: ${value}`);
      }
    }
  }

  lines.push('');
  lines.push('--------------------------------------------------');
  lines.push('Note: This request was prepared via the Techno Horizon corporate portal.');
  lines.push('Please reply to confirm details and initiate next steps.');

  return lines.join('\n');
}

/**
 * Copies formatted text to system clipboard
 */
export async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.warn('Clipboard write failed, using textarea fallback', err);
    }
  }
  
  // Fallback
  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch (err) {
    console.error('Fallback copy failed', err);
    return false;
  }
}
