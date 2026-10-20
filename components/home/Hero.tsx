import Image from "next/image";
import Link from "next/link";
import { Gauge, Zap } from "lucide-react";
import ArrowButton from "../ArrowButton";
import Backdrop from "../Backdrop";
import Eyebrow from "../Eyebrow";
import { getPhoto } from "@/lib/photos";
import { systems } from "@/lib/packages";
import { site, waLink } from "@/lib/site";

export default function Hero() {
  const main = getPhoto("6");
  const test = getPhoto("2");

  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <Backdrop />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.25fr_1fr] lg:gap-12 lg:px-8">
        <div>
          <Eyebrow>
            {site.name} · {site.tagline}
          </Eyebrow>

          <h1 className="mt-5 text-balance text-[32px] font-extrabold leading-[1.08] tracking-[-0.04em] text-ink sm:text-5xl lg:text-[2.85rem]">
            Lindungi Bangunan dari Sambaran Petir, <span className="text-brand">Dipasang Aman dan Terukur.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 tracking-[-0.015em] text-muted">
            Penjualan dan pemasangan penangkal petir konvensional, elektrostatis, dan surge arrester untuk rumah, gedung,
            hingga pabrik, lengkap dengan pengukuran tahanan grounding.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <ArrowButton
              href={waLink(`Halo ${site.name}, saya ingin konsultasi pemasangan penangkal petir.`)}
              external
              bg="var(--color-brand)"
              accent="var(--color-sun)"
              text="text-white hover:text-ink"
              icon="text-ink"
              className="shadow-lg shadow-brand/30"
            >
              Konsultasi Sekarang
            </ArrowButton>
            <Link
              href="/layanan"
              className="inline-flex items-center rounded-full border border-line bg-paper px-6 py-3 text-sm font-semibold text-ink shadow-sm transition-colors hover:border-ink/30 sm:px-7"
            >
              Lihat Paket
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {systems.map((system) => (
              <li key={system.id} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sun" aria-hidden />
                {system.short}
              </li>
            ))}
          </ul>
        </div>

        {/* Kolase foto statis: foto utama + kartu kecil hasil tes grounding. */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-2xl shadow-ink/20">
            <Image
              src={main.src}
              alt={main.alt}
              fill
              preload
              placeholder="blur"
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
            />
          </div>

          {/* Di layar sempit kartu tetap di dalam foto; menjorok keluar hanya bila ada ruang di sampingnya. */}
          <div className="absolute right-3 top-4 flex items-center gap-2 rounded-full bg-paper/95 px-4 py-2.5 text-sm font-semibold text-ink shadow-xl shadow-ink/10 sm:-right-6 sm:top-6">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sun text-ink">
              <Zap size={15} strokeWidth={2.5} />
            </span>
            Radius R-35 s.d. R-150
          </div>

          <div className="absolute -bottom-6 left-3 flex w-64 items-center gap-3 rounded-3xl bg-paper/95 p-3 shadow-xl shadow-ink/10 sm:-left-8">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl">
              <Image src={test.src} alt={test.alt} fill sizes="64px" className="object-cover" />
            </div>
            <div>
              <p className="flex items-center gap-1.5 text-sm font-bold text-ink">
                <Gauge size={15} className="text-brand" />
                Tes Grounding
              </p>
              <p className="mt-0.5 text-xs leading-5 text-muted">Tahanan pembumian diukur dengan earth tester.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
