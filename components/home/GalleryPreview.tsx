import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { photos } from "@/lib/photos";

export default function GalleryPreview() {
  return (
    <section className="pb-4">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            title={
              <>
                Dokumentasi <strong>di lapangan</strong>
              </>
            }
            description="Pemasangan terminal, tiang, dan grounding, sampai pengukuran tahanannya."
          />
          <Link href="/galeri" className="group inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand">
            Lihat semua proyek
            <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
          </Link>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {photos.slice(0, 6).map((photo, i) => (
            <li key={photo.id}>
              <Reveal delay={i * 60} className="group relative aspect-square overflow-hidden rounded-3xl">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 768px) 360px, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-paper/90 px-3 py-1 text-xs font-semibold text-ink">
                  {photo.label}
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
