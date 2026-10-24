import { site } from "./site";

export type ConversionKind = keyof typeof site.googleAds.conversions;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Melaporkan satu konversi Google Ads. Aman dipanggil sebelum gtag.js selesai
 * dimuat: fungsi gtag dari skrip inline hanya mengantrekan event ke dataLayer.
 */
export function trackConversion(kind: ConversionKind) {
  const label: string = site.googleAds.conversions[kind];
  if (!label || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "conversion", { send_to: `${site.googleAds.id}/${label}` });
}

/** Jenis konversi untuk tautan yang diklik, atau null bila bukan WhatsApp/telepon. */
export function conversionForHref(href: string): ConversionKind | null {
  if (/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) return "whatsapp";
  if (href.startsWith("tel:")) return "phone";
  return null;
}
