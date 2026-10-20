import Image from "next/image";
import { Check } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { formatPrice, type Package } from "@/lib/packages";
import { site, waLink } from "@/lib/site";

/** Berapa baris perangkat yang langsung terlihat; sisanya dilipat. */
const VISIBLE_ITEMS = 5;

export default function PackageCard({ pkg }: { pkg: Package }) {
  const shown = pkg.items.slice(0, VISIBLE_ITEMS);
  const rest = pkg.items.slice(VISIBLE_ITEMS);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[28px] bg-paper ring-1 ring-line/80">
      <div className="relative aspect-[4/5] bg-white">
        <Image
          src={pkg.image}
          alt={`Perangkat paket ${pkg.name}`}
          fill
          placeholder="blur"
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        {pkg.highlight && (
          <span className="absolute left-4 top-4 rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">
            {pkg.highlight}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold leading-snug tracking-[-0.02em] text-ink">{pkg.name}</h3>
        <p className="mt-1 text-xl font-extrabold tracking-[-0.02em] text-brand">
          {site.showPrices ? formatPrice(pkg.price) : "Tanya harga"}
        </p>

        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-muted">Yang didapat</p>
        <ul className="mt-3 space-y-2 text-sm text-ink-soft">
          {shown.map((item) => (
            <li key={item} className="flex gap-2">
              <Check size={16} className="mt-0.5 shrink-0 text-brand" />
              {item}
            </li>
          ))}
        </ul>
        {/* <details> supaya daftar panjang bisa dibuka tanpa JavaScript. */}
        {rest.length > 0 && (
          <details className="group mt-2 text-sm text-ink-soft">
            <summary className="cursor-pointer list-none font-semibold text-brand [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">+ {rest.length} perangkat lainnya</span>
              <span className="hidden group-open:inline">Sembunyikan</span>
            </summary>
            <ul className="mt-2 space-y-2">
              {rest.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </details>
        )}

        <div className="mt-auto pt-6">
          <a
            href={waLink(`Halo ${site.name}, saya ingin tanya paket ${pkg.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {site.showPrices ? "Pesan via WhatsApp" : "Tanya harga via WhatsApp"}
          </a>
        </div>
      </div>
    </article>
  );
}
