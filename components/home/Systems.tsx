import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { systems } from "@/lib/packages";

/*
 * Tiga permukaan berbeda, seperti kartu layanan di situs membrane: biru
 * penuh, terang, dan gelap. Urutannya mengikuti urutan di lib/packages.ts.
 */
const surfaces = [
  {
    card: "bg-brand text-white shadow-xl shadow-brand/25",
    muted: "text-white/70",
    chip: "bg-white/12 text-white/90 ring-1 ring-inset ring-white/20",
    link: "border-white/40 hover:border-white hover:bg-white hover:text-ink",
  },
  {
    card: "bg-paper text-ink shadow-xl shadow-ink/5 ring-1 ring-inset ring-line",
    muted: "text-muted",
    chip: "bg-canvas text-ink-soft ring-1 ring-inset ring-line",
    link: "border-ink/20 hover:border-ink hover:bg-ink hover:text-white",
  },
  {
    card: "bg-ink text-white shadow-xl shadow-ink/25",
    muted: "text-white/60",
    chip: "bg-white/10 text-white/85 ring-1 ring-inset ring-white/15",
    link: "border-white/35 hover:border-sun hover:bg-sun hover:text-ink",
  },
];

export default function Systems() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            title={
              <>
                Sistem proteksi untuk <strong>setiap jenis bangunan</strong>
              </>
            }
            description="Dari rumah tinggal sampai kawasan pabrik, pilih sistem yang sesuai dengan tinggi dan luas bangunan Anda."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {systems.map((system, i) => {
            const s = surfaces[i % surfaces.length];

            return (
              <Reveal key={system.id} delay={i * 90}>
                <article className={`flex h-full flex-col rounded-[28px] p-3 ${s.card}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-white">
                    <Image
                      src={system.image}
                      alt={system.title}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-4 pt-6 pb-4">
                    <h3 className="text-2xl font-bold leading-snug tracking-[-0.03em]">{system.title}</h3>
                    <p className={`mt-3 text-[15px] leading-7 ${s.muted}`}>{system.summary}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {system.bestFor.map((use) => (
                        <li key={use} className={`rounded-full px-3 py-1 text-xs font-medium ${s.chip}`}>
                          {use}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-8">
                      <Link
                        href={`/layanan#${system.id}`}
                        className={`group inline-flex items-center gap-3 rounded-full border px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors ${s.link}`}
                      >
                        Lihat Paket
                        <ArrowUpRight size={14} className="transition-transform group-hover:rotate-45" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
