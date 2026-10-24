"use client";

import { useEffect } from "react";
import Script from "next/script";
import { conversionForHref, trackConversion } from "@/lib/analytics";
import { site } from "@/lib/site";

/** Tag Google (gtag.js) untuk Google Ads, plus pelacak klik WhatsApp & telepon. */
export default function GoogleAds() {
  // Satu listener untuk seluruh halaman, jadi setiap tautan WhatsApp dan
  // telepon (navbar, kartu paket, CTA, tombol melayang, footer) ikut terhitung
  // tanpa perlu memasang onClick satu per satu.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = e.target instanceof Element ? e.target.closest("a[href]") : null;
      if (!(link instanceof HTMLAnchorElement)) return;
      const kind = conversionForHref(link.href);
      if (kind) trackConversion(kind);
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  const { id } = site.googleAds;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${id}');`}
      </Script>
    </>
  );
}
