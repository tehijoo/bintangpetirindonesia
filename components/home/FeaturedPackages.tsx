import ArrowButton from "../ArrowButton";
import PackageCard from "../PackageCard";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { packages } from "@/lib/packages";

// Satu paket dari tiap sistem; daftar lengkapnya di /layanan.
const featured = ["konvensional-3-aip", "kurn-r85", "arrester-60ka"];

export default function FeaturedPackages() {
  const items = featured.map((id) => packages.find((p) => p.id === id)!);

  return (
    <section className="pb-4">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            title={
              <>
                Paket <strong>pemasangan</strong>
              </>
            }
            description="Setiap paket sudah termasuk perangkat dan pemasangan. Pilihan lengkapnya ada di halaman Layanan & Paket."
          />
          <ArrowButton href="/layanan" bg="var(--color-ink)" accent="var(--color-brand)" className="w-fit shrink-0">
            Semua Paket
          </ArrowButton>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 90}>
              <PackageCard pkg={pkg} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
