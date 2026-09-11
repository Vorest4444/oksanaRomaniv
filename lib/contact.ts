/**
 * The site is a static export, so there is no server to post to. Until a form
 * endpoint is configured, submissions are composed into an email the visitor
 * sends from their own mail client.
 */
export const CONTACT_EMAIL = 'hello@oksana-romaniv.com';

export const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function buildMailtoUrl(subject: string, fields: Record<string, string>) {
  const body = Object.entries(fields)
    .filter(([, value]) => value.trim())
    .map(([label, value]) => `${label}: ${value.trim()}`)
    .join('\n');

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Posts to the configured endpoint, or falls back to opening a mail draft. */
export async function submitContact(subject: string, fields: Record<string, string>) {
  if (CONTACT_ENDPOINT) {
    const response = await fetch(CONTACT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ subject, ...fields }),
    });

    if (!response.ok) throw new Error(`Form endpoint responded with ${response.status}`);
    return;
  }

  window.location.href = buildMailtoUrl(subject, fields);
}
